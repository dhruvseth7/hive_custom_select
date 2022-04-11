import React from 'react';
import Button from './Button';
import List from './List';
import '../styles/Select.css';

function Select(props) {
    return (
      <div class="input-container">
        <div class="input">
          <Button label={props.label} />
          <List />
        </div>
      </div>

    )
}

export default Select;
