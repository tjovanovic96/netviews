import React from 'react';
import BasicHeader from './BasicHeader';
import "../css/Common.css";
import "../css/Success.css";
import { AiFillCheckCircle } from 'react-icons/ai';

const SuccessCreatePanel = () => {
    const goToLogin = () => {
        window.location.href = `/login/individual`
    }
    return (
        <>
        <BasicHeader text="Success" />
        <div className="success-wrapper">
            <AiFillCheckCircle className="success-icon" />
            <div className="success-text">
            <span>You have successfully added a new panel to your account!</span>
            </div>
            <div className="success-text">
                <span>You have succsessfully added a new panel to your account. Now before we establish a connection with this panel, you will need to add schedule data in order to continue publishing your current client advertisements without intermission</span>
            </div>
            <div className="success-text">
                <button type="submit" onClick={goToLogin} className="yellow-button">Add schedule data</button>
            </div>
        </div>
        </>
    )
}

export default SuccessCreatePanel;