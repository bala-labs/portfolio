const Notification = ({ message, closeMessage }) => {

    return (
        <div className="notification-container">
            <div className="notification">
                <div className="notification-content">
                    <span className="fa fa-info-circle"></span>
                    <p>{message}</p>
                </div>
                <button onClick={() => closeMessage('')} className="cancel-btn" type="button"><span className="fa fa-x"></span></button>
            </div>
            <div className="progress-bar">
                <div className="progress" onAnimationEnd={() => closeMessage('')}></div>
            </div>
        </div>
    );
}

export default Notification;