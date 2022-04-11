import React from 'react';
import '../styles/List.css';
import ListItem from './ListItem';


function List(props) {
  return (
    <>
      {props.isVisible ? (
        <div class="list-container">
          <ListItem value="Japan" />
          <ListItem value="United States" />
          <ListItem value="Italy" />
          <ListItem value="India" />
          <ListItem value="China" />
        </div>
      ) : (<></>)}
    </>

  )
}

export default List;
