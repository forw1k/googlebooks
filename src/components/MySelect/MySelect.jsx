import React from 'react';
import './MySelect.scss';
import { observer } from 'mobx-react';

const MySelect = observer(({ children, options, onChange }) => {
  return (
    <div className="my-select">
      <div className="my-select__name">{children}</div>
      <select
        onChange={(event) => onChange(event.target.value)}
        className="my-select__inner"
      >
        {options.map((option) => (
          <option
            key={option.id}
            value={option.value}
            className="my-select__option"
          >
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
});

export default MySelect;
