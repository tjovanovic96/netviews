import React from 'react';
import "../../css/core/Input.css"
import classnames from 'classnames';

const TextArea = (props) => {
    const handleChange = (event) => {
        props.setFieldValue?.(event.target.value);
      };

      const className = classnames({
        'input-field': true,
        'input-field-centered': props.centered,
    })

    return (
        <div className="input">
            <label for="select-id" className="select-label">{props.label}</label>
            <textarea className={className} type={props.type} placeholder={props.label} value={props.value} rows="5"
            onChange={handleChange} />
        </div>
    )
}

export default TextArea;