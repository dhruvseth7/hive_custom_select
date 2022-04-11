import React, {useState} from 'react';
import Button from './Button';
import List from './List';
import '../styles/Select.css';

function Select(props) {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div class="menu-container">
        <div class="input">
          <Button label={props.label} isVisible={isVisible} setIsVisible={setIsVisible} />
          <List isVisible={isVisible}/>
        </div>
      </div>

    )
}

export default Select;
