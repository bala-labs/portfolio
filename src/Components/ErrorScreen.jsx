const ErrorScreen = () => {

    return (
        <div className="error-container">
            <img 
                src={`${process.env.PUBLIC_URL}/assets/ErrorPic.png`}
                height={450} 
                width={450}
                alt="ErrorScreen"
            />
        </div>
    );
}

export default ErrorScreen;