import React from 'react';
import '../styles/ListItem.css';

function ListItem(props) {
  return (
    <div class="input-container">
      <div class="input-row">
        <input class="checkbox" type="checkbox"></input>
        <text class="input-label">{props.value}</text>
      </div>

    </div>
  )
}

export default ListItem;
