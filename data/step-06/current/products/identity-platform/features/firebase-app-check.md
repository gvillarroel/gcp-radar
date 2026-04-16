---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.943Z"
product_name: "Identity Platform"
product_slug: "identity-platform"
feature_name: "Firebase App Check"
feature_slug: "firebase-app-check"
latest_feature_date: "2023-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/identity-platform/docs/install-admin-sdk"
  - "https://docs.cloud.google.com/identity-platform/docs/web/saml"
  - "https://docs.cloud.google.com/identity-platform/docs/sign-in-user-email"
  - "https://docs.cloud.google.com/identity-platform/docs/use-rest-api"
keywords:
  - "firebase"
  - "app"
  - "check"
  - "is"
  - "available"
  - "in"
  - "preview"
  - "for"
---

# Firebase App Check

Product: Identity Platform
Coverage: MEDIUM

## Step 02 Summary

Firebase App Check is available in Preview for Identity Platform.

## Extended Definition

Firebase App Check is available in Preview for Identity Platform.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/identity-platform/docs/install-admin-sdk](https://docs.cloud.google.com/identity-platform/docs/install-admin-sdk)
- [https://docs.cloud.google.com/identity-platform/docs/web/saml](https://docs.cloud.google.com/identity-platform/docs/web/saml)
- [https://docs.cloud.google.com/identity-platform/docs/sign-in-user-email](https://docs.cloud.google.com/identity-platform/docs/sign-in-user-email)
- [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api)

## Supporting Pages

### Installing the Admin SDK \_|\_ Identity Platform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity-platform/docs/install-admin-sdk](https://docs.cloud.google.com/identity-platform/docs/install-admin-sdk)
- Source ID: `site-docs-root`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin To use the Admin SDK, you need a server app running one of the following: Language Minimum framework version Node.js Node.js 8.13.0+ Java Java 7+ (Java 8+ recommended) Python Python 2.7+ or 3.4+ (3.4+ recommended) Go Go 1.9+ C# .NET Framework 4.5+ or .NET Core 1.5+ The following table lists the features supported by each SDK language: Feature Node.js Java Python Go C# Custom token minting ID token verification User management Control access with custom claims Refresh token revocation Import users Session cookie management Generating email action links Managing SAML/OIDC provider configurations Multi-tenancy support Realtime Database Firebase Cloud Messaging FCM Multicast Manage FCM topic subscriptions Cloud Storage Firestore Project Management Security rules ML model management Firebase Remote Config Firebase App Check Firebase Extensions Console Create a service account: Ensure that you have the Create Service Accounts IAM role ( roles/iam.serviceAccountCreator ) and the Project IAM Admin role ( roles/resourcemanager.projectIamAdmin ).
- To install the library, declare it as a dependency in your build.gradle file: dependencies { implementation ' com . google . firebase : firebase - admin : 6.11.0 ' } If you use Maven to build your app, you can add the following dependency to your pom.xml : < dependency > < groupId>com . google . firebase < / groupId > < artifactId>firebase - admin < / artifactId > < version>6 .11.0 < / version > < / dependency > Python The Python Admin SDK is available using pip . pip install -- user firebase - admin Go Use the go get utility to install the Go Admin SDK: go get firebase . google . com / go C# Install the .NET Admin SDK using the .NET package manager: Install - Package FirebaseAdmin - Version 1.9.1 Alternatively, install it using the dotnet command-line utility: dotnet add package FirebaseAdmin -- version 1.9.1 Or, you can install it by adding the following package reference entry to your .csproj file: < ItemGroup > < PackageReference Include = "FirebaseAdmin" Version = "1.9.1" / > < / ItemGroup > Initializing the SDK using default credentials Add the following code to your server app to initialize the Admin SDK using the default credentials: Node.js // Initialize the default app var admin = require ( 'firebase-admin' ); var app = admin . initializeApp ({ credential : admin . credential . applicationDefault () }); Java FirebaseApp . initializeApp (); FirebaseAppSnippets . java Python default app = firebase admin . initialize app () index . py Go app , err := firebase .
- Generate the key file: gcloud iam service-accounts keys create FILE NAME .json --iam-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace the following: FILE NAME : a name for the key file SERVICE ACCOUNT NAME : the name of the service account PROJECT ID : the project ID where you created the service account Installing the SDK Node.js The Node.js Admin SDK is available on npm.
- Next, install the npm package and save it to your package.json : npm install firebase - admin -- save To use the module in your app, require it from any JavaScript file: var admin = require ( 'firebase-admin' ); If you are using ES2015, you can import the module instead: import as admin from 'firebase-admin' ; Java The Java Admin SDK is published to the Maven central repository.

### Signing in users with SAML \_|\_ Identity Platform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity-platform/docs/web/saml](https://docs.cloud.google.com/identity-platform/docs/web/saml)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Popup Web version 9 import { getAuth , signInWithPopup , SAMLAuthProvider } from "firebase/auth" ; const auth = getAuth (); signInWithPopup ( auth , provider ) . then (( result ) = > { // User is signed in. // Provider data available from the result.user.getIdToken() // or from result.user.providerData }). catch (( error ) = > { // Handle Errors here. const errorCode = error . code ; const errorMessage = error . message ; // The email of the user's account used. const email = error . customData . email ; // The AuthCredential type that was used. const credential = SAMLAuthProvider . credentialFromError ( error ); // Handle / display error. // ... }); auth saml signin popup . js Web version 8 firebase . auth (). signInWithPopup ( provider ) . then (( result ) = > { // User is signed in. // Identity provider data available in result.additionalUserInfo.profile, // or from the user's ID token obtained from result.user.getIdToken() // as an object in the firebase.sign in attributes custom claim // This is also available from result.user.getIdTokenResult() // idTokenResult.claims.firebase.sign in attributes. }) . catch (( error ) = > { // Handle / display error. // ... }); saml . js Redirect To redirect to a sign-in page, call signInWithRedirect() : Web version 9 import { getAuth , signInWithRedirect } from "firebase/auth" ; const auth = getAuth (); signInWithRedirect ( auth , provider ); auth saml signin redirect . js Web version 8 firebase . auth (). signInWithRedirect ( provider ); saml . js Then, call getRedirectResult() to get the results when the user returns to your app: Web version 9 import { getAuth , getRedirectResult , SAMLAuthProvider } from "firebase/auth" ; const auth = getAuth (); getRedirectResult ( auth ) . then (( result ) = > { // User is signed in. // Provider data available from the result.user.getIdToken() // or from result.user.providerData }) . catch (( error ) = > { // Handle Errors here. const errorCode = error . code ; const errorMessage = error . message ; // The email of the user's account used. const email = error . customData . email ; // The AuthCredential type that was used. const credential = SAMLAuthProvider . credentialFromError ( error ); // Handle / display error. // ... }); auth saml signin redirect result . js Web version 8 firebase . auth (). getRedirectResult () . then (( result ) = > { // User is signed in. // Provider data available in result.additionalUserInfo.profile, // or from the user's ID token obtained from result.user.getIdToken() // as an object in the firebase.sign in attributes custom claim // This is also available from result.user.getIdTokenResult() // idTokenResult.claims.firebase.sign in attributes. }). catch (( error ) = > { // Handle / display error. // ... }); saml . js Retrieve the user attributes associated with the SAML provider from the ID token using the firebase.sign in attributes claim.
- The ID token includes the user's email address only if it is provided in the NameID attribute of the SAML assertion from the identity provider: <Subject> <NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress">test@email.com</NameID> </Subject> This is populated in the Firebase-issued ID token and in the UserInfo object.
- For example, if your app's sign-in URL is https://example.com/login , add example.com .
- The following code snippet shows how to link a user's Google Account to the SAML provider: Web version 9 import { getAuth , linkWithPopup , GoogleAuthProvider } from "firebase/auth" ; const provider = new GoogleAuthProvider (); const auth = getAuth (); linkWithPopup ( auth . currentUser , provider ). then (( result ) = > { // Accounts successfully linked. const credential = GoogleAuthProvider . credentialFromResult ( result ); const user = result . user ; // ... }). catch (( error ) = > { // Handle Errors here. // ... }); auth link with popup . js Web version 8 auth . currentUser . linkWithPopup ( provider ). then (( result ) = > { // Accounts successfully linked. var credential = result . credential ; var user = result . user ; // ... }). catch (( error ) = > { // Handle Errors here. // ... }); link - multiple - accounts . js What's next Signing in users with OIDC Showing a custom domain during sign in Managing OIDC and SAML providers programmatically Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Sign in a user with an email by using Identity Platform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/identity-platform/docs/sign-in-user-email](https://docs.cloud.google.com/identity-platform/docs/sign-in-user-email)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, here is an app that attempts to sign in a hard-coded user and display the result on a web page. import { initializeApp } from 'firebase/app' ; import { onAuthStateChanged , signInWithEmailAndPassword , getAuth } from 'firebase/auth' ; const firebaseConfig = { apiKey : " API KEY " , authDomain : " AUTH DOMAIN " }; const app = initializeApp ( firebaseConfig ); const auth = getAuth ( app , { / extra options / }); document . addEventListener ( "DOMContentLoaded" , () = > { onAuthStateChanged ( auth , ( user ) = > { if ( user ) { document . getElementById ( "message" ). innerHTML = "Welcome, " + user . email ; } else { document . getElementById ( "message" ). innerHTML = "No user signed in." ; } }); signIn (); }); function signIn () { const email = " EMAIL ID " ; const password = " PASSWORD " ; signInWithEmailAndPassword ( auth , email , password ) . catch (( error ) = > { document . getElementById ( "message" ). innerHTML = error . message ; }); } Replace the following: API KEY : the apiKey of your Firebase project.
- To use the v9 SDK, perform the following steps: From the project directory, install Firebase using npm: npm install firebase Initialize Firebase in your app and create a Firebase App object: import { initializeApp } from 'firebase/app' ; const firebaseConfig = { apiKey : " API KEY " , authDomain : " AUTH DOMAIN " }; const app = initializeApp ( firebaseConfig ); Replace the following: API KEY : the apiKey of your Firebase project.
- Use a module bundler for size reduction Note: You can skip this step if you are using a JavaScript framework CLI tool like the Angular CLI , Next.js , Vue CLI , or Create React App .
- Access Identity Platform in your JavaScript Now that you have initialized the Firebase SDK, you can use it anywhere in your app.

### Using the REST API \_|\_ Identity Platform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample response with OAuth access token { "federatedId" : "http://facebook.com/1234567890" , "providerId" : "facebook.com" , "localId" : "5xwsPCWYo..." , "emailVerified" : true , "email" : "user@example.com" , "oauthAccessToken" : "[FACEBOOK ACCESS TOKEN]" , "firstName" : "John" , "lastName" : "Doe" , "fullName" : "John Doe" , "displayName" : "John Doe" , "idToken" : "[ID TOKEN]" , "photoUrl" : "https://scontent.xx.fbcdn.net/v/..." , "refreshToken" : "[REFRESH TOKEN]" , "expiresIn" : "3600" , "rawUserInfo" : "{\"updated time\":\"2017-02-22T01:10:57+0000\",\"gender\":\"male\", ...}" } Sample request with Twitter OAuth 1.0 credential curl 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=[API KEY]' \ -H 'Content-Type: application/json' \ --data-binary '{"postBody":"access token=[TWITTER ACCESS TOKEN]&oauth token secret=[TWITTER TOKEN SECRET]&providerId=[twitter.com]","requestUri":"[http://localhost]","idToken":"[GCIP ID TOKEN]","returnIdpCredential":true,"returnSecureToken":true}' In the example above, you would replace [API KEY] with the Web API Key of your Google Cloud project from Identity Platform, [GCIP ID TOKEN] with the current user's Identity Platform ID token, [TWITTER ACCESS TOKEN] with the Twitter OAuth access token, [TWITTER TOKEN SECRET] with the Twitter OAuth token secret, [twitter.com] with the provider ID corresponding to the OAuth credential and [http://localhost] with the request URI.
- Sample response with OAuth access token { "federatedId" : "http://facebook.com/1234567890" , "providerId" : "facebook.com" , "localId" : "5xwsPCWYo..." , "emailVerified" : true , "email" : "user@example.com" , "oauthAccessToken" : "[FACEBOOK ACCESS TOKEN]" , "firstName" : "John" , "lastName" : "Doe" , "fullName" : "John Doe" , "displayName" : "John Doe" , "idToken" : "[ID TOKEN]" , "photoUrl" : "https://scontent.xx.fbcdn.net/v/..." , "refreshToken" : "[REFRESH TOKEN]" , "expiresIn" : "3600" , "rawUserInfo" : "{\"updated time\":\"2017-02-22T01:10:57+0000\",\"gender\":\"male\", ...}" } Sample request with Twitter OAuth 1.0 credential curl 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=[API KEY]' \ -H 'Content-Type: application/json' \ --data-binary '{"postBody":"access token=[TWITTER ACCESS TOKEN]&oauth token secret=[TWITTER TOKEN SECRET]&providerId=[twitter.com]","requestUri":"[http://localhost]","returnIdpCredential":true,"returnSecureToken":true}' In the example above, you would replace [API KEY] with the Web API Key of your Google Cloud project from Identity Platform, [TWITTER ACCESS TOKEN] with the Twitter OAuth access token, [TWITTER TOKEN SECRET] with the Twitter OAuth token secret, [twitter.com] with the provider ID corresponding to the OAuth credential and [http://localhost] with the request URI.
- Sample response with OAuth ID token { "federatedId" : "https://accounts.google.com/1234567890" , "providerId" : "google.com" , "localId" : "5xwsPCWYo..." , "emailVerified" : true , "email" : "user@example.com" , "oauthIdToken" : "[GOOGLE ID TOKEN]" , "firstName" : "John" , "lastName" : "Doe" , "fullName" : "John Doe" , "displayName" : "John Doe" , "idToken" : "[ID TOKEN]" , "photoUrl" : "https://lh5.googleusercontent.com/.../photo.jpg" , "refreshToken" : "[REFRESH TOKEN]" , "expiresIn" : "3600" , "rawUserInfo" : "{\"updated time\":\"2017-02-22T01:10:57+0000\",\"gender\":\"male\", ...}" } Sample request with OAuth access token curl 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=[API KEY]' \ -H 'Content-Type: application/json' \ --data-binary '{"postBody":"access token=[FACEBOOK ACCESS TOKEN]&providerId=[facebook.com]","idToken":"[GCIP ID TOKEN]","requestUri":"[http://localhost]","returnIdpCredential":true,"returnSecureToken":true}' In the example above, you would replace [API KEY] with the Web API Key of your Google Cloud project from Identity Platform, [GCIP ID TOKEN] with the current user's Identity Platform ID token, [FACEBOOK ACCESS TOKEN] with the Facebook access token, [facebook.com] with the provider ID corresponding to the OAuth credential and [http://localhost] with the request URI.
- Sample response with OAuth ID token { "federatedId" : "https://accounts.google.com/1234567890" , "providerId" : "google.com" , "localId" : "5xwsPCWYo..." , "emailVerified" : true , "email" : "user@example.com" , "oauthIdToken" : "[GOOGLE ID TOKEN]" , "firstName" : "John" , "lastName" : "Doe" , "fullName" : "John Doe" , "displayName" : "John Doe" , "idToken" : "[ID TOKEN]" , "photoUrl" : "https://lh5.googleusercontent.com/.../photo.jpg" , "refreshToken" : "[REFRESH TOKEN]" , "expiresIn" : "3600" , "rawUserInfo" : "{\"updated time\":\"2017-02-22T01:10:57+0000\",\"gender\":\"male\", ...}" } Sample request with OAuth access token curl 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=[API KEY]' \ -H 'Content-Type: application/json' \ --data-binary '{"postBody":"access token=[FACEBOOK ACCESS TOKEN]&providerId=[facebook.com]","requestUri":"[http://localhost]","returnIdpCredential":true,"returnSecureToken":true}' In the example above, you would replace [API KEY] with the Web API Key of your Google Cloud project from Identity Platform, [FACEBOOK ACCESS TOKEN] with the Facebook access token, [facebook.com] with the provider ID corresponding to the OAuth credential and [http://localhost] with the request URI.

