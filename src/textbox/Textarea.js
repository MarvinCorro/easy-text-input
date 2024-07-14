import { useRef } from "react";
import { useState } from "react";
import React from "react";

import "./css/textStyles.css";

const Textarea = ({
  placeholder = '',
  errorMessage = '',
  label = '',
  value = '',
  onBlur = (e) => {
  },
  onFocus = (e) => {
  },
  disabled = false,
  required = false,
  errorFocus = true,
  onChange = null,
  leadingIcon = null,
  trailingIcon = null,
  maxLength = 500,
}) => {
  const inputRef = useRef();
  const [_value, _setValue] = useState('');
  const [_textLength, _setTextLength] = useState(0);

  onChange = onChange ? onChange : (e) => {
    _setValue(e.target.value);
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
    if(e.target.value.length > maxLength) {
        return;
    }
    _setTextLength(e.target.value.length);

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

  let style = {}

  if(errorMessage.length > 0) {
    style.borderColor = "#FF0000";
  }

  trailingIcon = _sanatizeIcon(trailingIcon);
  leadingIcon = _sanatizeIcon(leadingIcon);

  return (
    <div className="easy-text-area-container">
      <label className="easy-text-area-input-label">{label}</label>
      <div ref={inputRef} className="easy-text-area-container">
        <textarea
          className="easy-text-area-input"
          placeholder={placeholder}
          onChange={_onMasterChange}
          onFocus={_onMasterFocus}
          onBlur={_offMasterFocus}
          style={style}
          value={_value ? _value : value}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
        />
      </div>
      {errorMessage.length > 0 ? <span className="easy-text-area-error-message">{errorMessage}</span> : null}
      {errorMessage.length > 0 ? null : <div className="easy-text-area-footer"><span className="easy-text-area-length-count">{_textLength}  {'/'}  {maxLength}</span></div>}
    </div>
  );
};

export default Textarea;
