import React from 'react';
import './MyInput.scss';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import store from '../../store/store';

const MyInput = observer(({ onChange, value, onClick }) => {
  const handleKeyDown = (e) => {
    if (store.searchQuery.length > 0) {
      if (e.key === 'Enter') {
        store.reqData();
      }
    }
  };
  return (
    <div className="my-form">
      <input
        onChange={(event) => onChange(event.target.value)}
        value={value}
        onKeyDown={handleKeyDown}
        className="my-form__input"
        type="text"
      />
      {store.searchQuery.length > 0 ? (
        <Link to="/"
          onClick={onClick}
          role="button"
          tabIndex={0}
          className="my-form__btn"
        />
      ) : null}
    </div>
  );
});

export default MyInput;
