import React from 'react';
import { FaGoogle } from 'react-icons/fa';

function Google() {
  const handleGoogleLogin = () => {
    // Perform any additional logic here
    console.log('Google login clicked');
  };

  return (
    <div>
      <a
        href="https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=openid%20email%20profile"
        className="btn btn-link btn-floating mx-1"
        onClick={handleGoogleLogin}
      >
        <FaGoogle className="btngreen" />
      </a>
    </div>
  );
}

export default Google;