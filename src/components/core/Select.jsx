import React from 'react';
import "../../css/core/Input.css"
import { GrUserAdmin } from 'react-icons/gr';
import classnames from 'classnames';

const Select = (props) => {
    const handleChange = (event) => props.setFieldValue?.(event.target.value);

    const className = classnames({
        'input-field': true,
        'input-field-centered': props.centered,
        'select-field-small': props.small
    });

    const inputClassName = classnames({
        'input': true,
        'select-small': props.small

});

    return (
        <div className={inputClassName}>
            <label for="select-id" className="select-label">{props.label}</label>
            {props.icon === 'userKind' && <GrUserAdmin className="icon" />}
            <select onChange={handleChange} className={className} id="select-id" value={props.value}>
                {props.values.map((v, i) => <option value={v} key={i}>{v}</option>)}
            </select>
        </div>
    )
}

export default Select;