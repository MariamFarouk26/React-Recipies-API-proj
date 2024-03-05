import React from 'react';
import styled, { keyframes } from 'styled-components';

const Error = ({ message }) => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <h1 className="display-1 text-crimson fw-bold animate__animated animate__bounce" style={{ color: "crimson" }}><Animation>404</Animation></h1>
      <img className="img-fluid" src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="404" />
      <h4 className="mt-3">Looks like you're lost</h4>
      <p className="text-muted">{message}</p>
    </div>
  );
};

export default Error;

const bounceAnimation = keyframes`
  0%, 100%   { transform: translateY(0px); }
  25%        { transform: translateY(-15px); }
  75%        { transform: translateY(15px); }
`;

const Animation = styled.div`
  animation: ${bounceAnimation} 1.5s ease-in-out infinite;
`;