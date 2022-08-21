import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  onError: (error: Error, errorInfo: ErrorInfo) => void;
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState(null); // @see https://github.com/reactjs/reactjs.org/issues/3028
    this.props.onError(error, errorInfo);
  }

  public render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
