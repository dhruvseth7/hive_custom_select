import React, {useState} from 'react';
import '../styles/Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


function Button(props) {

  return (
        <div class="btn-container">
          <text class="label">{props.label}</text>
          <button type="button" class="btn btn-light" onClick={() => props.setIsMenuVisible(!props.isMenuVisible)}>
            {props.selectedOptions.length < 1 ? (
              <>
                {props.placeholder ? (<>{props.placeholder}</>) : (<>Please select a {props.label}</>)}
              </>
            ) : (
              <>
                {props.selectedOptions.join(", ")}
              </>
            )}
            <div class="dropdown-icon">
              <FontAwesomeIcon icon={faCaretDown} size="xs" color="#4285F4"/>
            </div>
          </button>
        </div>
  )
}

export default Button;
