---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.946Z"
product_name: "Identity Platform"
product_slug: "identity-platform"
feature_name: "Multi-tenancy"
feature_slug: "multi-tenancy"
latest_feature_date: "2019-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-authentication"
  - "https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-quickstart"
  - "https://docs.cloud.google.com/identity-platform/docs/use-rest-api"
  - "https://docs.cloud.google.com/identity-platform/docs/web/mfa"
keywords:
  - "multi"
  - "tenancy"
  - "identity"
  - "platform"
  - "is"
  - "generally"
  - "available"
---

# Multi-tenancy

Product: Identity Platform
Coverage: MEDIUM

## Step 02 Summary

Identity Platform multi-tenancy is generally available.

## Extended Definition

Identity Platform multi-tenancy is generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-authentication](https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-authentication)
- [https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-quickstart](https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-quickstart)
- [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api)
- [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa)

## Supporting Pages

### "Authenticating with multi-tenancy \_|\_ Identity Platform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-authentication](https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-authentication)
- Source ID: `site-docs-root`
- Final score: 316
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Popup Web version 9 import { signInWithPopup } from "firebase/auth" ; // Switch to TENANT ID1. auth . tenantId = 'TENANT ID1' ; // Sign-in with popup. signInWithPopup ( auth , provider ) . then (( userCredential ) = > { // User is signed in. const user = userCredential . user ; // user.tenantId is set to 'TENANT ID1'. // Provider data available from the result.user.getIdToken() // or from result.user.providerData }) . catch (( error ) = > { // Handle / display error. // ... }); multitenant signin saml popup . js Web version 8 // Switch to TENANT ID1. firebase . auth (). tenantId = 'TENANT ID1' ; // Sign-in with popup. firebase . auth (). signInWithPopup ( provider ) . then (( result ) = > { // User is signed in. // tenant ID is available in result.user.tenantId. // Identity provider data is available in result.additionalUserInfo.profile. }) . catch (( error ) = > { // Handle error. }); multi - tenancy . js Redirect Web version 9 import { signInWithRedirect , getRedirectResult } from "firebase/auth" ; // Switch to TENANT ID1. auth . tenantId = 'TENANT ID1' ; // Sign-in with redirect. signInWithRedirect ( auth , provider ); // After the user completes sign-in and returns to the app, you can get // the sign-in result by calling getRedirectResult.
- However, if they sign out // and sign in again with an IdP, no tenant is used. firebase . auth (). getRedirectResult () . then (( result ) = > { // User is signed in. // The tenant ID available in result.user.tenantId. // Identity provider data is available in result.additionalUserInfo.profile. }) . catch (( error ) = > { // Handle error. }); multi - tenancy . js In both cases, be sure to set the correct tenant ID on the auth instance.
- Authenticating with multi-tenancy This document shows you how to authenticate users in a multi-tenant Identity Platform environment.
- For example: email = window . prompt ( 'Please provide your email for confirmation' ); } firebase . auth (). signInWithEmailLink ( email , window . location . href ) . then (( result ) = > { // User is signed in. // tenant ID available in result.user.tenantId. }); } multi - tenancy . js Creating custom tokens Creating a multi-tenant aware custom token is identical to creating a regular custom token; as long as the correct tenant ID has been set on the auth instance, a top-level tenant id claim will be added to the resulting JWT.

### Set up multi-tenancy in Identity Platform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-quickstart](https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-quickstart)
- Source ID: `site-docs-root`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to set up multi-tenancy, ask your administrator to grant you the Identity Platform Admin ( roles/identityplatform.admin ) IAM role on your project.
- Set up multi-tenancy in Identity Platform This quickstart shows you how to enable multi-tenancy in Identity Platform and create and select new tenants using the Google Cloud console.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to set up multi-tenancy: firebaseauth.configs.update identitytoolkit.tenants.create You might also be able to get these permissions with custom roles or other predefined roles .
- Enable multi-tenancy In the Google Cloud console, go to the Identity Platform > Settings page.

### Using the REST API \_|\_ Identity Platform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Response Payload Property Name Type Description federatedId string The unique ID identifies the IdP account. providerId string The linked provider ID (e.g. "google.com" for the Google provider). localId string The uid of the authenticated user. emailVerified boolean Whether the sign-in email is verified. email string The email of the account. oauthIdToken string The OIDC id token if available. oauthAccessToken string The OAuth access token if available. oauthTokenSecret string The OAuth 1.0 token secret if available. rawUserInfo string The stringified JSON response containing all the IdP data corresponding to the provided OAuth credential. firstName string The first name for the account. lastName string The last name for the account. fullName string The full name for the account. displayName string The display name for the account. photoUrl string The photo Url for the account. idToken string An Identity Platform ID token for the authenticated user. refreshToken string An Identity Platform refresh token for the authenticated user. expiresIn string The number of seconds in which the ID token expires. needConfirmation boolean Whether another account with the same credential already exists.
- Response Payload Property Name Type Description federatedId string The unique ID identifies the IdP account. providerId string The linked provider ID (e.g. "google.com" for the Google provider). localId string The uid of the authenticated user. emailVerified boolean Whether the signin email is verified. email string The email of the account. oauthIdToken string The OIDC id token if available. oauthAccessToken string The OAuth access token if available. oauthTokenSecret string The OAuth 1.0 token secret if available. rawUserInfo string The stringified JSON response containing all the IdP data corresponding to the provided OAuth credential. firstName string The first name for the account. lastName string The last name for the account. fullName string The full name for the account. displayName string The display name for the account. photoUrl string The photo Url for the account. idToken string An Identity Platform ID token for the authenticated user. refreshToken string An Identity Platform refresh token for the authenticated user. expiresIn string The number of seconds in which the ID token expires.
- Sample response with OAuth access token { "federatedId" : "http://facebook.com/1234567890" , "providerId" : "facebook.com" , "localId" : "5xwsPCWYo..." , "emailVerified" : true , "email" : "user@example.com" , "oauthAccessToken" : "[FACEBOOK ACCESS TOKEN]" , "firstName" : "John" , "lastName" : "Doe" , "fullName" : "John Doe" , "displayName" : "John Doe" , "idToken" : "[ID TOKEN]" , "photoUrl" : "https://scontent.xx.fbcdn.net/v/..." , "refreshToken" : "[REFRESH TOKEN]" , "expiresIn" : "3600" , "rawUserInfo" : "{\"updated time\":\"2017-02-22T01:10:57+0000\",\"gender\":\"male\", ...}" } Sample request with Twitter OAuth 1.0 credential curl 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=[API KEY]' \ -H 'Content-Type: application/json' \ --data-binary '{"postBody":"access token=[TWITTER ACCESS TOKEN]&oauth token secret=[TWITTER TOKEN SECRET]&providerId=[twitter.com]","requestUri":"[http://localhost]","idToken":"[GCIP ID TOKEN]","returnIdpCredential":true,"returnSecureToken":true}' In the example above, you would replace [API KEY] with the Web API Key of your Google Cloud project from Identity Platform, [GCIP ID TOKEN] with the current user's Identity Platform ID token, [TWITTER ACCESS TOKEN] with the Twitter OAuth access token, [TWITTER TOKEN SECRET] with the Twitter OAuth token secret, [twitter.com] with the provider ID corresponding to the OAuth credential and [http://localhost] with the request URI.
- Sample response with OAuth access token { "federatedId" : "http://facebook.com/1234567890" , "providerId" : "facebook.com" , "localId" : "5xwsPCWYo..." , "emailVerified" : true , "email" : "user@example.com" , "oauthAccessToken" : "[FACEBOOK ACCESS TOKEN]" , "firstName" : "John" , "lastName" : "Doe" , "fullName" : "John Doe" , "displayName" : "John Doe" , "idToken" : "[ID TOKEN]" , "photoUrl" : "https://scontent.xx.fbcdn.net/v/..." , "refreshToken" : "[REFRESH TOKEN]" , "expiresIn" : "3600" , "rawUserInfo" : "{\"updated time\":\"2017-02-22T01:10:57+0000\",\"gender\":\"male\", ...}" } Sample request with Twitter OAuth 1.0 credential curl 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=[API KEY]' \ -H 'Content-Type: application/json' \ --data-binary '{"postBody":"access token=[TWITTER ACCESS TOKEN]&oauth token secret=[TWITTER TOKEN SECRET]&providerId=[twitter.com]","requestUri":"[http://localhost]","returnIdpCredential":true,"returnSecureToken":true}' In the example above, you would replace [API KEY] with the Web API Key of your Google Cloud project from Identity Platform, [TWITTER ACCESS TOKEN] with the Twitter OAuth access token, [TWITTER TOKEN SECRET] with the Twitter OAuth token secret, [twitter.com] with the provider ID corresponding to the OAuth credential and [http://localhost] with the request URI.

### "Adding multi-factor authentication to your web app \_|\_ Identity Platform\

- URL: [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: Web version 9 import { getAuth } from "firebase/auth" ; const auth = getAuth ( app ); auth . tenantId = "myTenantId1" ; Web version 8 firebase.auth().tenantId = 'myTenantId1'; Enabling multi-factor authentication Go to the Identity Platform MFA page in the Google Cloud console.
- Using multi-tenancy If you are enabling multi-factor authentication for use in a multi-tenant environment, make sure to complete the following steps (in addition to the rest of the instructions in this document): In the Google Cloud console, select the tenant you want to work with.
- This minimizes friction during the registration process, while still making multi-factor authentication available for security-sensitive users.
- This will also trigger the Auth state listeners. resolver . resolveSignIn ( multiFactorAssertion ) . then ( function ( userCredential ) { // userCredential will also contain the user, additionalUserInfo, optional // credential (null for email/password) associated with the first factor sign-in. // For example, if the user signed in with Google as a first factor, // userCredential.additionalUserInfo will contain data related to Google provider that // the user signed in with. // user.credential contains the Google OAuth credential. // user.credential.accessToken contains the Google OAuth access token. // user.credential.idToken contains the Google OAuth ID token. }); The code below shows a complete example of signing in a multi-factor user: Web version 9 import { getAuth , getMultiFactorResolver , PhoneAuthProvider , PhoneMultiFactorGenerator , RecaptchaVerifier , signInWithEmailAndPassword } from "firebase/auth" ; const recaptchaVerifier = new RecaptchaVerifier ( getAuth (), 'recaptcha-container-id' , undefined ); const auth = getAuth (); signInWithEmailAndPassword ( auth , email , password ) . then ( function ( userCredential ) { // User is not enrolled with a second factor and is successfully // signed in. // ... }) . catch ( function ( error ) { if ( error . code == 'auth/multi-factor-auth-required' ) { const resolver = getMultiFactorResolver ( auth , error ); // Ask user which second factor to use. if ( resolver . hints [ selectedIndex ]. factorId === PhoneMultiFactorGenerator .

