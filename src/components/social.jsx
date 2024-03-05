import React, { useState } from 'react';
// import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

function Social() {
  // const [googleProfile, setGoogleProfile] = useState(null);
  const [facebookProfile, setFacebookProfile] = useState(null);

 

  const responseFacebook = (response) => {
    if (response.error) {
      console.log('Facebook login failed:', response.error);
    } else {
      console.log('Facebook login successful:', response);
      setFacebookProfile(response);
    }
  };

  return (
    <div>
      
       <GoogleOAuthProvider clientId="822438674667-8jfo5kfet1gs8vlr6llil57a1d86vn78.apps.googleusercontent.com">
  <GoogleLogin
// width={'6px'}
 type='icon'
 shape='rectangular'
//  textButton="G"
text='G'
// text=' '
    onSuccess={credentialresponse => {
      console.log(credentialresponse);
    }}
    onError={() => {
      console.log('login failed');
    }}
    // onClick={handleGoogleLogin}
  >
    {/* <GoogleIcon className="fab fa-google btngreen" /> */}
  </GoogleLogin>
</GoogleOAuthProvider>
<br></br>

      {/* <h1>Login with Facebook</h1> */}
      <FacebookLogin
        appId="7243707319044905"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        // icon="fa-facebook"
      //  textButton="F"
      //   buttonStyle={{width:'39px',backgroundColor:'white',color:'blue'}}
      //   size='small'
      icon="fa-facebook"
      textButton=" "
      buttonStyle={{ width: '39px',height:"29px", backgroundColor: 'white', color: 'blue' }}
      size="small"
        // cssClass="custom-class"
        
      />
      {facebookProfile && (
        <div>
          <h2>Facebook Profile</h2>
          <p>Name: {facebookProfile.name}</p>
          <p>Email: {facebookProfile.email}</p>
          <img src={facebookProfile.picture.data.url} alt="Facebook Profile" />
        </div>
      )}
    </div>
  );
}

export default Social;