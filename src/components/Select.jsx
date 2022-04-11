import React, {useState} from 'react';
import Button from './Button';
import List from './List';
import '../styles/Select.css';

function Select(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    return (
      <div class="menu-container">
        <div class="input">
          <Button
            label={props.label}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            selectedOptions={selectedOptions}
            placeholder={props.placeholder}
          />
          <List
            label={props.label}
            isVisible={isVisible}
            options={props.options}
            type={props.type}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        </div>
      </div>

    )
}

export default Select;
