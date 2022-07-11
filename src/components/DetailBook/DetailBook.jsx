import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import store from '../../store/store';
import MyPreloader from '../MyPreloader/MyPreloader';
import './DetailBook.scss';

const DetailBook = observer(() => {
  const { id } = useParams();
  useEffect(() => {
    store.reqBook(id);
  }, []);
  return (
    <div className="detail-book">
      {!store.isLoading ? (
        <>
          <div className="detail-book__img">
            <img
              src={
                store.book?.volumeInfo?.imageLinks === undefined
                  ? '../../assets/images/book-cover.jpg'
                  : `${store.book?.volumeInfo?.imageLinks?.thumbnail}`
              }
              className="detail-book__pic"
              alt="book cover"
            />
          </div>
          <div className="detail-book__info">
            <div className="detail-book__category">
              {store.book?.volumeInfo?.categories}
            </div>
            <div className="detail-book__name">
              {store.book?.volumeInfo?.title}
            </div>
            <div className="detail-book__author">
              {store.book?.volumeInfo?.authors}
            </div>
            {store.book?.volumeInfo?.description ? (
              <div className="detail-book__desc">
                {store.book?.volumeInfo?.description}
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <MyPreloader />
      )}
    </div>
  );
});

export default DetailBook;
