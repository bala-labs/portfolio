import React from 'react';
import ErrorScreen from '../Components/ErrorScreen';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    componentDidCatch(error, info) {
        console.error("Error logged: ", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorScreen />
        }
        return this.props.children;
    }
}

export default ErrorBoundary;