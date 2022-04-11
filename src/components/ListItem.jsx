import React, {useState, useEffect} from 'react';

import '../styles/ListItem.css';

function ListItem(props) {
  const selectedOptions = props.selectedOptions;
  const setSelectedOptions = props.setSelectedOptions;


  const handleClick = (event) => {
    if (props.type == "single") {
      setSelectedOptions([props.value]);
    } else if (props.type == "multi") {
      if (event.target.checked) {
        setSelectedOptions([...selectedOptions, props.value]);
      } else {
        const optionsShallowCopy = [...selectedOptions];
        const index = optionsShallowCopy.indexOf(props.value);
        if (index !== -1) {
          optionsShallowCopy.splice(index, 1);
        }
        setSelectedOptions(optionsShallowCopy);
      }
    }
  }

  return (
    <div class="input-container">
      <div class="input-row">
        {props.type == "multi" ? (
          <input class="checkbox" type="checkbox" onClick={handleClick} checked={props.selectedOptions.includes(props.value)}></input>
        ) :
          <input class="checkbox" type="radio" onClick={handleClick} checked={props.selectedOptions.includes(props.value)} name={props.label}></input>
        }
        <text class="input-label">{props.value}</text>
      </div>

    </div>
  )
}

export default ListItem;
