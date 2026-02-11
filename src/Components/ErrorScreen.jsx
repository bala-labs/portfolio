const ErrorScreen = () => {

    return (
        <div className="error-container">
            <img 
                src={`${process.env.PUBLIC_URL}/assets/ErrorPic.png`}
                height={300} 
                width={450}
                alt="ErrorScreen"
            />
            <div className="err-msg">
                <p>Oops! Something Went Wrong</p>
                <p>Please try Again Later!</p>
            </div>
        </div>
    );
}

export default ErrorScreen;