import { runInAction, makeAutoObservable } from 'mobx';
import { requestList, requestListBase, requestBook } from '../api/request';

class Store {
  searchQuery = '';

  data = [];

  book = {};

  selectedCategory = 'all';

  selectedSort = 'relevance';

  isLoading = false;

  maxResult = 30;

  apiKey = 'AIzaSyDs51XBMwqUFGY13lYeloz899C2FPWSzVo';

  startIndex = 0;

  totalItems = 0;

  itemsLeft = 0;

  error = [];

  get sortedBooks() {
    return this.selectedSort === 'relevance'
      ? this.data
      : [...this.data].sort((a, b) => {
          return parseInt(a?.volumeInfo?.publishedDate, 10) >
            parseInt(b?.volumeInfo?.publishedDate, 10)
            ? -1
            : 1;
        });
  }

  setSelectedCategory = (value) => {
    this.selectedCategory = value;
  };

  setSearchQuery = (value) => {
    this.searchQuery = value.trim();
  };

  setSelectedSort = (value) => {
    this.selectedSort = value;
  };

  setItemsLeft = (value) => {
    this.itemsLeft = value;
  };

  updateItemsLeft = (value) => {
    this.itemsLeft -= value;
  };

  setTotalItems = (value) => {
    this.totalItems = value;
  };

  setStartIndex = (value) => {
    this.startIndex += value;
  };

  setIsLoading = (value) => {
    this.isLoading = value;
  };

  setBookData = (value) => {
    this.book = value;
  };

  setError = (value) => {
    this.error = value;
  };

  constructor() {
    makeAutoObservable(this);
  }

  reqData = async () => {
    this.startIndex = 0;
    this.setIsLoading(true);
    this.setError([]);
    this.data = [];
    this.setTotalItems(0);
    this.setItemsLeft(0);
    if (this.searchQuery.length > 0) {
      if (this.selectedCategory !== 'all') {
        this.queryParams =
          `${this.searchQuery}+subject:${this.selectedCategory}` +
          '&' +
          `maxResults=${this.maxResult}` +
          '&' +
          `startIndex=${this.startIndex}` +
          `&${this.apiKey}`;
      } else {
        this.queryParams =
          `${this.searchQuery}&` +
          `maxResults=${this.maxResult}` +
          '&' +
          `startIndex=${this.startIndex}` +
          `&${this.apiKey}`;
      }
      try {
        const response = await requestList(this.queryParams);
        runInAction(() => {
          this.data = [...response.data.items];
        });
        this.setTotalItems(response.data.totalItems);
        this.setItemsLeft(response.data.totalItems);
      } catch (error) {
        this.setError(error.message);
      } finally {
        this.setIsLoading(false);
      }
    }
  };

  loadMore = async () => {
    this.setIsLoading(true);
    this.setStartIndex(this.maxResult);
    this.setError([]);
    this.queryParams =
      `${this.searchQuery}&` +
      `maxResults=${this.maxResult}` +
      '&' +
      `startIndex=${this.startIndex}` +
      `&${this.apiKey}`;
    try {
      const response = await requestListBase(this.queryParams);
      runInAction(() => {
        this.data = [...this.data, ...response.data.items];
      });
    } catch (error) {
      this.setError(error.message);
    } finally {
      this.updateItemsLeft(this.maxResult);
      this.setIsLoading(false);
    }
  };

  reqBook = async (bookId) => {
    this.setIsLoading(true);
    const response = await requestBook(bookId);
    runInAction(() => {
      this.book = { ...response.data.items[0] };
    });
    this.setIsLoading(false);
  };
}

export default new Store();
