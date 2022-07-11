import React from 'react';
import { observer } from 'mobx-react';
import './Content.scss';
import MyBookList from '../MyBookList/MyBookList';
import MyButton from '../MyButton/MyButton';
import store from '../../store/store';
import MyPreloader from '../MyPreloader/MyPreloader';

const Content = observer(() => {
  const searchQueryError =
    store.error === 'response.data.items is not iterable'
      ? 'По вашему запросу ничего не найдено'
      : '';
  return (
    <div className="content">
      {store.totalItems > 0 ? (
        <div className="count">Found {store.totalItems} results</div>
      ) : null}
      {store.error && <h1>{searchQueryError}</h1>}
      <MyBookList />
      {store.itemsLeft > 30 ? (
        <MyButton text="Load more" onClick={store.loadMore} />
      ) : null}
      {store.isLoading ? <MyPreloader /> : null}
    </div>
  );
});

export default Content;
