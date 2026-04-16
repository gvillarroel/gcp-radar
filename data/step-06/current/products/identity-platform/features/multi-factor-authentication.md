---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.945Z"
product_name: "Identity Platform"
product_slug: "identity-platform"
feature_name: "Multi-factor authentication"
feature_slug: "multi-factor-authentication"
latest_feature_date: "2020-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/identity-platform/docs/web/mfa"
  - "https://docs.cloud.google.com/identity-platform/docs/how-to"
  - "https://docs.cloud.google.com/identity-platform/docs/error-codes"
  - "https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-authentication"
keywords:
  - "multi"
  - "factor"
  - "authentication"
  - "identity"
  - "platform"
  - "is"
  - "generally"
  - "available"
---

# Multi-factor authentication

Product: Identity Platform
Coverage: MEDIUM

## Step 02 Summary

Identity Platform multi-factor authentication is generally available.

## Extended Definition

Identity Platform multi-factor authentication is generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa)
- [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to)
- [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes)
- [https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-authentication](https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-authentication)

## Supporting Pages

### "Adding multi-factor authentication to your web app \_|\_ Identity Platform\

- URL: [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa)
- Source ID: `site-docs-root`
- Final score: 335
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: Web version 9 import { getAuth } from "firebase/auth" ; const auth = getAuth ( app ); auth . tenantId = "myTenantId1" ; Web version 8 firebase.auth().tenantId = 'myTenantId1'; Enabling multi-factor authentication Go to the Identity Platform MFA page in the Google Cloud console.
- This minimizes friction during the registration process, while still making multi-factor authentication available for security-sensitive users.
- Using multi-tenancy If you are enabling multi-factor authentication for use in a multi-tenant environment, make sure to complete the following steps (in addition to the rest of the instructions in this document): In the Google Cloud console, select the tenant you want to work with.
- This is useful for users with multiple second factors, since the phone number is masked during the authentication flow (for example, +1 1234).

### How-to Guides \_|\_ Identity Platform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to)
- Source ID: `site-api-reference`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managing Identity Platform projects Enable reCAPTCHA Enterprise Configure reCAPTCHA Enterprise to add another layer of security to your apps.
- Enabling multi-factor authentication Adding multi-factor authentication to your web app Add multi-factor authentication to your web app.
- Extending authentication with asynchronous functions Trigger an asynchronous function in response to Identity Platform events.
- Extending authentication with blocking functions Trigger a blocking function in response to Identity Platform events.

### Error codes \_|\_ Identity Platform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes)
- Source ID: `site-api-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Multi-factor authentication error codes Beta This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Web error code iOS error code Android error code Android exception ID and description auth/missing-multi-factor-session ERROR MISSING MULTI FACTOR SESSION ERROR MISSING MULTI FACTOR SESSION FirebaseAuthInvalidCredentialsException 17081 The request is missing proof of first factor successful sign-in. auth/missing-multi-factor-info ERROR MISSING MULTI FACTOR INFO ERROR MISSING MULTI FACTOR INFO FirebaseAuthInvalidCredentialsException 17082 No second factor identifier was provided. auth/invalid-multi-factor-session ERROR INVALID MULTI FACTOR SESSION ERROR INVALID MULTI FACTOR SESSION FirebaseAuthInvalidCredentialsException 17083 The request does not contain valid proof of successful first factor sign-in. auth/multi-factor-info-not-found ERROR MULTI FACTOR INFO NOT FOUND ERROR MULTI FACTOR INFO NOT FOUND FirebaseAuthInvalidCredentialsException 17084 The user does not have a second factor matching the identifier provided. auth/multi-factor-auth-required ERROR SECOND FACTOR REQUIRED ERROR SECOND FACTOR REQUIRED FirebaseAuthMultiFactorException 17078 Proof of ownership of a second factor is required to complete sign-in. auth/second-factor-already-in-use ERROR SECOND FACTOR ALREADY ENROLLED ERROR SECOND FACTOR ALREADY ENROLLED FirebaseAuthException 17087 The second factor is already enrolled on this account. auth/maximum-second-factor-count-exceeded ERROR MAXIMUM SECOND FACTOR COUNT EXCEEDED ERROR MAXIMUM SECOND FACTOR COUNT EXCEEDED FirebaseAuthException 17088 The maximum allowed number of second factors on a user has been exceeded. auth/unsupported-first-factor ERROR UNSUPPORTED FIRST FACTOR ERROR UNSUPPORTED FIRST FACTOR FirebaseAuthException 17089 Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor. auth/email-change-needs-verification ERROR EMAIL CHANGE NEEDS VERIFICATION ERROR EMAIL CHANGE NEEDS VERIFICATION FirebaseAuthException 17090 Multi-factor users must always have a verified email.
- Authorization error codes Web error code iOS error code Android error code Android exception ID and description auth/app-not-authorized ERROR APP NOT AUTHORIZED ERROR APP NOT AUTHORIZED FirebaseAuthException 17028 This app is not authorized to use Identity Platform.
- Error codes This document lists Identity Platform error codes.

### "Authenticating with multi-tenancy \_|\_ Identity Platform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-authentication](https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-authentication)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Popup Web version 9 import { signInWithPopup } from "firebase/auth" ; // Switch to TENANT ID1. auth . tenantId = 'TENANT ID1' ; // Sign-in with popup. signInWithPopup ( auth , provider ) . then (( userCredential ) = > { // User is signed in. const user = userCredential . user ; // user.tenantId is set to 'TENANT ID1'. // Provider data available from the result.user.getIdToken() // or from result.user.providerData }) . catch (( error ) = > { // Handle / display error. // ... }); multitenant signin saml popup . js Web version 8 // Switch to TENANT ID1. firebase . auth (). tenantId = 'TENANT ID1' ; // Sign-in with popup. firebase . auth (). signInWithPopup ( provider ) . then (( result ) = > { // User is signed in. // tenant ID is available in result.user.tenantId. // Identity provider data is available in result.additionalUserInfo.profile. }) . catch (( error ) = > { // Handle error. }); multi - tenancy . js Redirect Web version 9 import { signInWithRedirect , getRedirectResult } from "firebase/auth" ; // Switch to TENANT ID1. auth . tenantId = 'TENANT ID1' ; // Sign-in with redirect. signInWithRedirect ( auth , provider ); // After the user completes sign-in and returns to the app, you can get // the sign-in result by calling getRedirectResult.
- However, if they sign out // and sign in again with an IdP, no tenant is used. firebase . auth (). getRedirectResult () . then (( result ) = > { // User is signed in. // The tenant ID available in result.user.tenantId. // Identity provider data is available in result.additionalUserInfo.profile. }) . catch (( error ) = > { // Handle error. }); multi - tenancy . js In both cases, be sure to set the correct tenant ID on the auth instance.
- Authenticating with multi-tenancy This document shows you how to authenticate users in a multi-tenant Identity Platform environment.
- However, if they sign out // and sign in again with an IdP, no tenant is used. getRedirectResult ( auth ) . then (( result ) = > { // User is signed in. // The tenant ID available in result.user.tenantId. // Provider data available from the result.user.getIdToken() // or from result.user.providerData }) . catch (( error ) = > { // Handle / display error. // ... }); multitenant signin saml redirect . js Web version 8 // Switch to TENANT ID1. firebase . auth (). tenantId = 'TENANT ID1' ; // Sign-in with redirect. firebase . auth (). signInWithRedirect ( provider ); // After the user completes sign-in and returns to the app, you can get // the sign-in result by calling getRedirectResult.

