import React, {useState} from 'react';
import '../styles/ListItem.css';

function ListItem(props) {
  const selectedOptions = props.selectedOptions;
  const setSelectedOptions = props.setSelectedOptions;

  const isSelected = props.selectedOptions.includes(props.value);

  const handleClick = (event) => {
    if (props.type == "single") {
      if (selectedOptions.includes(props.value)) {
        // Uncheck single select item
        setSelectedOptions([]);
      } else {
        // Check single select item
        setSelectedOptions([props.value]);
      }
    } else if (props.type == "multi") {
      if (event.target.checked) {
        // Selected value is not currently in list
        setSelectedOptions([...selectedOptions, props.value]);
      } else {
        // Remove selected value from list if it is already in the list
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
    <div class={isSelected ? "input-container highlighted" : "input-container"}>
      <div class="input-row">
        {props.type == "multi" ? (
          <input class="checkbox" type="checkbox" onClick={handleClick} checked={isSelected}></input>
        ) :
          <input class="checkbox" type="radio" onClick={handleClick} checked={isSelected} name={props.label}></input>
        }
        <text class="input-label">{props.value}</text>
      </div>

    </div>
  )
}

export default ListItem;
