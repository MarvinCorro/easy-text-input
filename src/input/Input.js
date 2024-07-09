import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuestion, faEnvelope } from "@fortawesome/fontawesome-free-solid";

import { useRef } from "react";
import { useState } from "react";
import React from "react";

import "./css/style.css";

library.add();

const Input = ({
  placeholder = "",
  errorMessage = "",
  label = "",
  textHint = "",
  onBlur = (e) => {
  },
  onFocus = (e) => {
  },
  disabled = false,
  required = false,
  errorFocus = true,
  value = null,
  onChange = null,
  maxLength = null,
  leadingIcon = null,
  trailingIcon = 'question',
}) => {
  const inputRef = useRef();
  const [_value, _setValue] = useState('');

  onChange = onChange ? onChange : (e) => {
    _setValue(e.target._value);
  };
  

  const _sanatizeIcon = (icon) => {
    switch (icon) {
      case 'question': {
        return faQuestion
      }
      case 'envelope': {
        return faEnvelope
      }
      case 'none': {
        return ''
      }
      default: {
        return ''
      }
    } 
  }

  const _onMasterChange = (e) => {
    onChange(e);
  }

  const _onMasterFocus = (e) => {
    if(errorFocus) {
      if(errorMessage.length > 0) {
        inputRef.current.style.borderColor = "#FF0000";
      }
    }

    onFocus(e);
  }

  const _offMasterFocus = (e) => {
    inputRef.current.style.borderColor = "#E6E6E6";

    onBlur(e);
  }

  trailingIcon = _sanatizeIcon(trailingIcon);
  leadingIcon = _sanatizeIcon(leadingIcon);

  return (
    <div className="easy-input-outer-container">
      <label className="easy-input-label">{label}</label>
      <div ref={inputRef} className="easy-input-container">
        {leadingIcon && (
          <i className="easy-input-leading-icon">
            <FontAwesomeIcon icon={leadingIcon} size="xs" />
          </i>
        )}
        <input
          placeholder={placeholder}
          onChange={_onMasterChange}
          onFocus={_onMasterFocus}
          onBlur={_offMasterFocus}
          value={_value ? _value : value}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
        />
        {trailingIcon && (
          <i
            className="easy-input-trailing-icon"
            style={{
              color: errorMessage != "" && (textHint.length === 0)  ? "#FF0000" : disabled ? '#A3A3A3' : "#737373",
            }}
          >
            <FontAwesomeIcon icon={trailingIcon} size="xs" />
          </i>
        )}
      </div>
      {errorMessage.length > 0 ? <span className="easy-input-error-message">{errorMessage}</span> : null}
      {textHint.length > 0 && (errorMessage.length === 0) ? <span className="easy-input-text-hint">{textHint}</span> : null}
    </div>
  );
};

export default Input;
