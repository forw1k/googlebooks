import React from 'react';
import './MyBook.scss';

function MyBook({ item }) {
  const trimName =
    item?.volumeInfo?.title.length > 60
      ? item?.volumeInfo?.title.substring(0, 60)
      : item?.volumeInfo?.title;
  return (
    <div className="book">
      <div className="book__img">
        <img
          src={
            item?.volumeInfo?.imageLinks === undefined
              ? '../../assets/images/book-cover.jpg'
              : `${item?.volumeInfo?.imageLinks?.thumbnail}`
          }
          className="book__pic"
          alt="book cover"
        />
      </div>
      <div className="book__info">
        <div className="book__category">{item?.volumeInfo?.categories}</div>
        <div className="book__name">{trimName}</div>
        <div className="book_author">{item?.volumeInfo?.authors}</div>
      </div>
    </div>
  );
}

export default MyBook;
