import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';

const LoadingScreen = () => {
    const { state } = useContext(ThemeContext);

    return (
        <div className="loading-container" data-theme={state.theme}>
            <div className="spinner"></div>
            <h1>Loading..</h1>
        </div>
    );
}

export default LoadingScreen;