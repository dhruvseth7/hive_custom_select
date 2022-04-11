import React from 'react';
import '../styles/List.css';
import ListItem from './ListItem';



function List(props) {


  return (
    <>
      {props.isVisible ? (
        <div class="list-container">
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
