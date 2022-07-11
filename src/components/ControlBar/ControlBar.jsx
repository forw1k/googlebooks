import React from 'react';
import './ControlBar.scss';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import MyInput from '../MyInput/MyInput';
import MySelect from '../MySelect/MySelect';
import store from '../../store/store';

const ControlBar = observer(() => {
  return (
    <div className="control-bar">
      <div className="control-bar__wrap">
        <Link to="/" className="control-bar__title">
          Search for books
        </Link>
        <MyInput
          value={store.searchQuery}
          onChange={(value) => store.setSearchQuery(value)}
          onClick={store.reqData}
        />
        <div className="control-bar__select-wrap">
          <MySelect
            value={store.selectedCategory.value}
            options={[
              { value: 'all', id: 1 },
              { value: 'art', id: 2 },
              { value: 'biography', id: 3 },
              { value: 'computers', id: 4 },
              { value: 'history', id: 5 },
              { value: 'medical', id: 6 },
              { value: 'poetry', id: 7 },
            ]}
            onChange={(value) => store.setSelectedCategory(value)}
          >
            Categories
          </MySelect>
          <MySelect
            value={store.selectedSort}
            options={[
              { value: 'relevance', id: 1 },
              { value: 'newest', id: 2 },
            ]}
            onChange={(value) => store.setSelectedSort(value)}
          >
            Sorting by
          </MySelect>
        </div>
      </div>
    </div>
  );
});

export default ControlBar;
