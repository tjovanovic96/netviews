import React from 'react';
import "../../css/core/Input.css"
import { FiMail } from 'react-icons/fi';
import { BsHouseDoor } from 'react-icons/bs';
import { HiOutlineIdentification } from 'react-icons/hi';
import { BsKey } from 'react-icons/bs';
import { FaGlobeEurope } from 'react-icons/fa';
import { GiModernCity } from 'react-icons/gi';
import { HiOutlinePhone } from 'react-icons/hi';
import { FiFileText } from 'react-icons/fi';
import classnames from 'classnames';

const Input = (props) => {
    const handleChange = (event) => {
        props.setFieldValue(event.target.value);
      };

      const className = classnames({
        'input-field': true,
        'input-field-centered': props.centered,
    })

    return (
        <div className="input">
            <label for="select-id" className="select-label">{props.label}</label>
            {props.icon === "mail" && <FiMail className="icon" />}
            {props.icon === "house" && <BsHouseDoor className="icon" />}
            {props.icon === "id" && <HiOutlineIdentification className="icon" />}
            {props.icon === "password" && <BsKey className="icon" />}
            {props.icon === "country" && <FaGlobeEurope className="icon" />}
            {props.icon === "city" && <GiModernCity className="icon" />}
            {props.icon === 'phone' && <HiOutlinePhone className="icon" />}
            {props.icon === "name" && <FiFileText className="icon" />}
            <input className={className} type={props.type} placeholder={props.label} value={props.value}
            onChange={handleChange} />
        </div>
    )
}

export default Input;