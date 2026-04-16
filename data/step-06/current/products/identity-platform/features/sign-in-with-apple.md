---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.945Z"
product_name: "Identity Platform"
product_slug: "identity-platform"
feature_name: "Sign in with Apple"
feature_slug: "sign-in-with-apple"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/identity-platform/docs/sign-in-user-email"
  - "https://docs.cloud.google.com/identity-platform/docs/web/oidc"
  - "https://docs.cloud.google.com/identity-platform/docs/web/saml"
  - "https://docs.cloud.google.com/identity-platform/docs/web/mfa"
keywords:
  - "sign"
  - "in"
  - "with"
  - "apple"
  - "identity"
  - "platform"
  - "now"
  - "supports"
---

# Sign in with Apple

Product: Identity Platform
Coverage: MEDIUM

## Step 02 Summary

Identity Platform now supports Sign in with Apple.

## Extended Definition

Identity Platform now supports Sign in with Apple.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/identity-platform/docs/sign-in-user-email](https://docs.cloud.google.com/identity-platform/docs/sign-in-user-email)
- [https://docs.cloud.google.com/identity-platform/docs/web/oidc](https://docs.cloud.google.com/identity-platform/docs/web/oidc)
- [https://docs.cloud.google.com/identity-platform/docs/web/saml](https://docs.cloud.google.com/identity-platform/docs/web/saml)
- [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa)

## Supporting Pages

### "Sign in a user with an email by using Identity Platform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/identity-platform/docs/sign-in-user-email](https://docs.cloud.google.com/identity-platform/docs/sign-in-user-email)
- Source ID: `site-docs-root`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sign in a user with an email by using Identity Platform Learn how to use Identity Platform to sign in a user with an email and password.
- In the HTML file, add two HTML containers: <div>Identity Platform Quickstart</div> <div id="message">Loading...</div> Initialize the Identity Platform client SDK with your API key In the Google Cloud console, go to the Identity Providers page.
- Access Identity Platform in your JavaScript Now that you have initialized the Firebase SDK, you can use it anywhere in your app.
- For example, here is an app that attempts to sign in a hard-coded user and display the result on a web page. import { initializeApp } from 'firebase/app' ; import { onAuthStateChanged , signInWithEmailAndPassword , getAuth } from 'firebase/auth' ; const firebaseConfig = { apiKey : " API KEY " , authDomain : " AUTH DOMAIN " }; const app = initializeApp ( firebaseConfig ); const auth = getAuth ( app , { / extra options / }); document . addEventListener ( "DOMContentLoaded" , () = > { onAuthStateChanged ( auth , ( user ) = > { if ( user ) { document . getElementById ( "message" ). innerHTML = "Welcome, " + user . email ; } else { document . getElementById ( "message" ). innerHTML = "No user signed in." ; } }); signIn (); }); function signIn () { const email = " EMAIL ID " ; const password = " PASSWORD " ; signInWithEmailAndPassword ( auth , email , password ) . catch (( error ) = > { document . getElementById ( "message" ). innerHTML = error . message ; }); } Replace the following: API KEY : the apiKey of your Firebase project.

### Signing in users with OIDC \_|\_ Identity Platform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity-platform/docs/web/oidc](https://docs.cloud.google.com/identity-platform/docs/web/oidc)
- Source ID: `site-docs-root`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Signing in users with OIDC This document shows you how to use Identity Platform to sign in users with an OpenID Connect (OIDC) provider.
- You can use it to directly interact with that provider. }) . catch (( error ) = > { // Handle Errors here. const errorCode = error . code ; const errorMessage = error . message ; // The email of the user's account used. const email = error . customData . email ; // The AuthCredential type that was used. const credential = OAuthProvider . credentialFromError ( error ); // Handle / display error. // ... }); auth oidc direct sign in . js Web version 8 const credential = provider . credential ( oidcIdToken , null ); firebase . auth (). signInWithCredential ( credential ) . then (( result ) = > { // User is signed in. // User now has a odic.myProvider UserInfo in providerData. }) . catch (( error ) = > { // Handle / display error. // ... }); oidc . js Linking user accounts If a user has already signed in to your app using a different method (such as email/password), you can link their existing account to the OIDC provider using linkWithPopup() or linkWithRedirect() : For example we can link with a Google account: Web version 9 import { getAuth , linkWithPopup , GoogleAuthProvider } from "firebase/auth" ; const provider = new GoogleAuthProvider (); const auth = getAuth (); linkWithPopup ( auth . currentUser , provider ). then (( result ) = > { // Accounts successfully linked. const credential = GoogleAuthProvider . credentialFromResult ( result ); const user = result . user ; // ... }). catch (( error ) = > { // Handle Errors here. // ... }); auth link with popup . js Web version 8 auth . currentUser . linkWithPopup ( provider ). then (( result ) = > { // Accounts successfully linked. var credential = result . credential ; var user = result . user ; // ... }). catch (( error ) = > { // Handle Errors here. // ... }); link - multiple - accounts . js What's next Signing in users with SAML Showing a custom domain during sign in Managing OIDC and SAML providers programmatically Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Identity Platform uses this URL to locate the OIDC discovery document (typically found at /.well-known/openid-configuration ), which specifies the provider's OAuth endpoints and public keys.
- Identity Platform uses this URL to locate the OIDC discovery document (typically found at /.well-known/openid-configuration ), which specifies the provider's OAuth endpoints and public keys.

### Signing in users with SAML \_|\_ Identity Platform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity-platform/docs/web/saml](https://docs.cloud.google.com/identity-platform/docs/web/saml)
- Source ID: `site-docs-root`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Signing in users with SAML This document shows you how to use Identity Platform to sign in users with a Security Assertion Markup Language (SAML) 2.0 provider.
- For more information and instructions, see the Sign in a user with an email by using Identity Platform quickstart.
- Popup Web version 9 import { getAuth , signInWithPopup , SAMLAuthProvider } from "firebase/auth" ; const auth = getAuth (); signInWithPopup ( auth , provider ) . then (( result ) = > { // User is signed in. // Provider data available from the result.user.getIdToken() // or from result.user.providerData }). catch (( error ) = > { // Handle Errors here. const errorCode = error . code ; const errorMessage = error . message ; // The email of the user's account used. const email = error . customData . email ; // The AuthCredential type that was used. const credential = SAMLAuthProvider . credentialFromError ( error ); // Handle / display error. // ... }); auth saml signin popup . js Web version 8 firebase . auth (). signInWithPopup ( provider ) . then (( result ) = > { // User is signed in. // Identity provider data available in result.additionalUserInfo.profile, // or from the user's ID token obtained from result.user.getIdToken() // as an object in the firebase.sign in attributes custom claim // This is also available from result.user.getIdTokenResult() // idTokenResult.claims.firebase.sign in attributes. }) . catch (( error ) = > { // Handle / display error. // ... }); saml . js Redirect To redirect to a sign-in page, call signInWithRedirect() : Web version 9 import { getAuth , signInWithRedirect } from "firebase/auth" ; const auth = getAuth (); signInWithRedirect ( auth , provider ); auth saml signin redirect . js Web version 8 firebase . auth (). signInWithRedirect ( provider ); saml . js Then, call getRedirectResult() to get the results when the user returns to your app: Web version 9 import { getAuth , getRedirectResult , SAMLAuthProvider } from "firebase/auth" ; const auth = getAuth (); getRedirectResult ( auth ) . then (( result ) = > { // User is signed in. // Provider data available from the result.user.getIdToken() // or from result.user.providerData }) . catch (( error ) = > { // Handle Errors here. const errorCode = error . code ; const errorMessage = error . message ; // The email of the user's account used. const email = error . customData . email ; // The AuthCredential type that was used. const credential = SAMLAuthProvider . credentialFromError ( error ); // Handle / display error. // ... }); auth saml signin redirect result . js Web version 8 firebase . auth (). getRedirectResult () . then (( result ) = > { // User is signed in. // Provider data available in result.additionalUserInfo.profile, // or from the user's ID token obtained from result.user.getIdToken() // as an object in the firebase.sign in attributes custom claim // This is also available from result.user.getIdTokenResult() // idTokenResult.claims.firebase.sign in attributes. }). catch (( error ) = > { // Handle / display error. // ... }); saml . js Retrieve the user attributes associated with the SAML provider from the ID token using the firebase.sign in attributes claim.
- To sign requests, first enable signed requests for your identity provider by calling inboundSamlConfigs.patch() and setting idp config.sign request to true : REST Before using any of the request data, make the following replacements: project-id : the ID for the Google Cloud project provider-id : the SAML provider ID HTTP method and URL: PATCH https://identitytoolkit.googleapis.com/admin/v2/projects/ project-id /inboundSamlConfigs/ provider-id ?updateMask=idpConfig.signRequest Request JSON body: { "idp config": { "sign request": true } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Adding multi-factor authentication to your web app \_|\_ Identity Platform\

- URL: [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This will also trigger the Auth state listeners. resolver . resolveSignIn ( multiFactorAssertion ) . then ( function ( userCredential ) { // userCredential will also contain the user, additionalUserInfo, optional // credential (null for email/password) associated with the first factor sign-in. // For example, if the user signed in with Google as a first factor, // userCredential.additionalUserInfo will contain data related to Google provider that // the user signed in with. // user.credential contains the Google OAuth credential. // user.credential.accessToken contains the Google OAuth access token. // user.credential.idToken contains the Google OAuth ID token. }); The code below shows a complete example of signing in a multi-factor user: Web version 9 import { getAuth , getMultiFactorResolver , PhoneAuthProvider , PhoneMultiFactorGenerator , RecaptchaVerifier , signInWithEmailAndPassword } from "firebase/auth" ; const recaptchaVerifier = new RecaptchaVerifier ( getAuth (), 'recaptcha-container-id' , undefined ); const auth = getAuth (); signInWithEmailAndPassword ( auth , email , password ) . then ( function ( userCredential ) { // User is not enrolled with a second factor and is successfully // signed in. // ... }) . catch ( function ( error ) { if ( error . code == 'auth/multi-factor-auth-required' ) { const resolver = getMultiFactorResolver ( auth , error ); // Ask user which second factor to use. if ( resolver . hints [ selectedIndex ]. factorId === PhoneMultiFactorGenerator .
- This will also trigger the Auth state listeners. resolver . resolveSignIn ( multiFactorAssertion ) . then ( function ( userCredential ) { // userCredential will also contain the user, additionalUserInfo, optional // credential (null for email/password) associated with the first factor sign-in. // For example, if the user signed in with Google as a first factor, // userCredential.additionalUserInfo will contain data related to Google // provider that the user signed in with. // - user.credential contains the Google OAuth credential. // - user.credential.accessToken contains the Google OAuth access token. // - user.credential.idToken contains the Google OAuth ID token. }); Web version 8 // Complete sign-in.
- FACTOR ID ) { // Handle TOTP MFA. // ... } else { // Unsupported second factor. } } else if ( error . code == 'auth/wrong-password' ) { // Handle other errors such as wrong password. } }); Web version 8 var resolver ; firebase . auth (). signInWithEmailAndPassword ( email , password ) . then ( function ( userCredential ) { // User is not enrolled with a second factor and is successfully signed in . // ... } ) . catch ( function ( error ) { if ( error . code == 'auth/multi-factor-auth-required' ) { resolver = error . resolver ; // Ask user which second factor to use . if ( resolver . hints [ selectedIndex ] . factorId === firebase . auth .
- To use an invisible reCAPTCHA, create a RecaptchaVerifier with the size parameter set to invisible , and specify the ID of the UI element that starts multi-factor enrollment: Web version 9 import { RecaptchaVerifier , getAuth } from "firebase/auth" ; const recaptchaVerifier = new RecaptchaVerifier ( getAuth (), "sign-in-button" , { "size" : "invisible" , "callback" : function ( response ) { // reCAPTCHA solved, you can proceed with // phoneAuthProvider.verifyPhoneNumber(...). onSolvedRecaptcha (); } }); Web version 8 var recaptchaVerifier = new firebase . auth .

