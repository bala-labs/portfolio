import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';

const ErrorScreen = ({ error }) => {
    const { state } = useContext(ThemeContext);

    return (
        <div className="error-container" data-theme={state.theme}>
            <h1>Something Went Wrong..</h1>
            <div>
                {error.stack}
            </div>
        </div>
    );
}

export default ErrorScreen;