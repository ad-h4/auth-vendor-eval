import React from "react";
import "./App.css";
import Amplify, { Auth } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignUp } from '@aws-amplify/ui-react';
import MyApp from './MyApp';

Amplify.configure({
  Auth: {
    identityPoolId: '',
    region: 'us-east-1',
    identityPoolRegion: 'us-east-1',
    userPoolId: '',
    userPoolWebClientId: '',
    mandatorySignIn: true
  }
})

function App() {
  return (
    <AmplifyAuthenticator>
      <button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Open Google</button>
      <AmplifySignUp
        slot="sign-up"
        headerText="Sign Up to Alex's App"
        formFields={[ {type: "name", label: "Name"}, { type: "username", label: "e-mail" }, { type: "password" }]}
      />
      <>
        <MyApp />
        <AmplifySignOut />
      </>
    </AmplifyAuthenticator>
  );
}

export default App;
