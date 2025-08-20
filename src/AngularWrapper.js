import React from 'react';

// Update this URL to match your Angular app's running or built location
const ANGULAR_APP_URL = 'http://localhost:4200'; // Change if serving Angular build from a different location

const AngularWrapper = () => (
  <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
    <iframe
      src={ANGULAR_APP_URL}
      title="Angular App"
      style={{ width: '100%', height: '100%', border: 'none' }}
      frameBorder="0"
      allowFullScreen
    />
  </div>
);

export default AngularWrapper;