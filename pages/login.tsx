import { GoogleLogin, GoogleLogout } from 'react-google-login';
import React from 'react';
import styled from 'styled-components';

function login() {
  //   const { onLoginGoogle } = props;
  const id =
    '875173824142-lrkt4j1fp9s1vvvstrtocv1bdpsk2v0u.apps.googleusercontent.com';
  const responseGoogle = (response: any) => {
    console.log(response);
  };
  return (
    <LoginWrapper>
      <GoogleLogin
        clientId={id}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </LoginWrapper>
  );
}

export default login;

const LoginWrapper = styled.div``;
