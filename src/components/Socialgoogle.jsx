import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
const SocialG = () => {
   
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

    

        
      
      {/* {facebookProfile && (
        <div>
          <h2>Facebook Profile</h2>
          <p>Name: {facebookProfile.name}</p>
          <p>Email: {facebookProfile.email}</p>
          <img src={facebookProfile.picture.data.url} alt="Facebook Profile" />
        </div> */}
      {/* )} */}
    </div>
    );
}

export default SocialG;
