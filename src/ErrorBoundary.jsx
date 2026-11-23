import React from 'react';
export default class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) { console.error('Birthday 3D scene error:', error, info.componentStack); }
  render() {
    if (this.state.error) return <div className="world-fallback" role="alert"><div className="fallback-emoji">🎂 🌈 🎈</div><h3>The birthday magic is still here!</h3><p>3D graphics could not start on this device. All the birthday activities below still work.</p><button onClick={() => this.setState({error:null})}>Try 3D again</button></div>;
    return this.props.children;
  }
}
