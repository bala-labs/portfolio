import React from 'react';

const Notification = ({ message, closeMessage, type }) => {
    if (!message) return null;

    const isError = type === 'error' || /fail|error|wrong|invalid/i.test(message);
    const isSuccess = type === 'success' || /success|copied|sent|thank/i.test(message);

    let iconClass = "fa-solid fa-circle-check";
    if (isError) {
        iconClass = "fa-solid fa-circle-exclamation";
    } else if (!isSuccess) {
        iconClass = "fa-solid fa-circle-info";
    }

    return (
        <div 
            className={`notification-container ${isError ? 'notification-error' : 'notification-success'}`}
            role="alert" 
            aria-live="polite"
        >
            <div className="notification">
                <div className="notification-content">
                    <div className="notification-icon-wrapper">
                        <i className={iconClass} aria-hidden="true"></i>
                    </div>
                    <p className="notification-message">{message}</p>
                </div>
                <button 
                    onClick={() => closeMessage('')} 
                    className="cancel-btn" 
                    type="button"
                    aria-label="Close notification"
                >
                    <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                </button>
            </div>
            <div className="progress-bar">
                <div className="progress" onAnimationEnd={() => closeMessage('')}></div>
            </div>
        </div>
    );
};

export default Notification;