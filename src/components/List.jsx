import React, {useState, useEffect} from 'react';
import '../styles/List.css';
import ListItem from './ListItem';


function List(props) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    // Decide if All or None option should be selected for multi and single select respectively
    if (props.type == "single") {
      setSelected(props.selectedOptions.length == 0);
    } else if (props.type == "multi") {
      setSelected(JSON.stringify(props.options) == JSON.stringify(props.selectedOptions));
    }
  }, [props.selectedOptions])

  const handleClick = (event) => {
    if (props.type == "single") {
      props.setSelectedOptions([]);
    } else if (props.type == "multi") {
      if (event.target.checked) {
        // Select all components for multi select type
        props.setSelectedOptions(props.options);
      } else {
        // Deselect all components
        props.setSelectedOptions([]);
      }
    }
  }




  return (
    <>
    {props.isVisible ? (

      <div class="list-container">
        <div class={selected ? "highlighted input-container" : "input-container"}>
          <div class="input-row">
            <input class="checkbox" type={props.type == "multi" ? "checkbox" : "radio"} onClick={handleClick} name={props.label} checked={selected}></input>
            <text class="input-label">{props.type == "multi" ? "All" : "None"}</text>
          </div>
        </div>

        {props.options.map((value) => (
          <ListItem
            type={props.type}
            label={props.label}
            value={value}
            selectedOptions={props.selectedOptions}
            setSelectedOptions={props.setSelectedOptions}
          />
        ))}
      </div>
    ) : (<></>)}
  </>

)
}

export default List;
