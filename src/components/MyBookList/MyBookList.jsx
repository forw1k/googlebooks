/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import MyBook from '../MyBook/MyBook';
import store from '../../store/store';
import './MyBookList.scss';

const MyBookList = observer(() => {
  return (
    <div className="books-list">
      {store.sortedBooks.length
        ? store.sortedBooks.map((item) => (
            <Link className="book-link" key={item.id} to={`/book/${item.id}`}>
              <MyBook item={item} />
            </Link>
          ))
        : null}
    </div>
  );
});

export default MyBookList;
