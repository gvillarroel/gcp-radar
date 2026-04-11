---
title: "Signing in users with OIDC \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity-platform/docs/web/oidc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/identity-platform/docs
source_metadata:
  url: https://docs.cloud.google.com/identity-platform/docs/web/oidc
  title: "Signing in users with OIDC \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Identity Platform
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Signing in users with OIDC
This document shows you how to use Identity Platform to sign in users with an
OpenID Connect (OIDC) provider.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable Identity Platform, and add the client SDK to your app. See the
Quickstart to
learn how.
Configuring the provider
Go to the Identity Providers page in the Google Cloud console.
Go to the Identity Providers page
Click Add a Provider , and select OpenID Connect from the list.
Authorization Code Flow
Enter the following details to enable the Authorization Code Flow:
Select Code Flow under Choose grant type section.
The Name of the provider. This can be the same as the provider ID,
or a custom name. If you enter a custom name, click Edit next to
Provider ID to specify the ID (which must begin with oidc. ).
The provider's Client ID .
The provider's Issuer . This should look something like
https://example.com . Identity Platform uses this URL to locate
the OIDC discovery document (typically found at
/.well-known/openid-configuration ), which specifies the provider's
OAuth endpoints and public keys.
Note: If your OIDC provider doesn't comply with the
OIDC specification
for discovery, it won't work with Identity Platform.
The provider's Client Secret .
Add your app to the list of Authorized Domains . For example, if your
app's sign-in URL is https://example.com/login , add example.com .
Configure the Identity Platform callback URL as a redirect URL with
your OIDC provider. The URL should look similar to
https://[PROJECT-ID].firebaseapp.com/__/auth/handler .
Click Save .
Implicit Flow
Enter the following details to enable the Implicit Flow:
Select Implicit Flow under Choose grant type section.
The Name of the provider. This can be the same as the provider ID,
or a custom name. If you enter a custom name, click Edit next to
Provider ID to specify the ID (which must begin with oidc. ).
The provider's Client ID .
The provider's Issuer . This should look something like
https://example.com. Identity Platform uses this URL to locate
the OIDC discovery document (typically found at
/.well-known/openid-configuration ), which specifies the provider's
OAuth endpoints and public keys.
Note: If your OIDC provider doesn't comply with the
OIDC specification
for discovery, it won't work with Identity Platform.
Add your app to the list of Authorized Domains . For example, if your
app's sign-in URL is https://example.com/login , add example.com .
Configure the Identity Platform callback URL as a redirect URL with
your OIDC provider. The URL should look similar to
https://[PROJECT-ID].firebaseapp.com/__/auth/handler .
Click Save .
Signing in users
There are two ways to sign in users with OIDC:
Using OAuth flow. This way completes the OAuth handshake for you. Based
on the Authorization Code Flow/Implicit Flow selection at the configuring
provider step, GCIP server chooses the desired flow to communicate with the
Identity Provider.
Using the OIDC provider's ID token. This way assumes you already have an
OIDC token available.
Signing in users with OAuth
To sign in using OAuth:
Create an OAuthProvider
instance with the provider ID you configured in
the previous section. The provider ID must start with oidc. .
Web version 9
import { OAuthProvider } from "firebase/auth" ;
const provider = new OAuthProvider ( "oidc.myProvider" ); auth_oidc_provider_create . js
Web version 8
const provider = new firebase . auth . OAuthProvider ( 'oidc.myProvider' ); oidc . js
Start the sign in flow. You can choose to either use a popup or a redirect.
Popup
Web version 9
import { getAuth , signInWithPopup , OAuthProvider } from "firebase/auth" ;
const auth = getAuth ();
signInWithPopup ( auth , provider )
. then (( result ) = > {
// User is signed in.
const credential = OAuthProvider . credentialFromResult ( result );
// This gives you an access token for the OIDC provider. You can use it to directly interact with that provider
}). catch (( error ) = > {
// Handle Errors here.
const errorCode = error . code ;
const errorMessage = error . message ;
// The email of the user's account used.
const email = error . customData . email ;
// The AuthCredential type that was used.
const credential = OAuthProvider . credentialFromError ( error );
// Handle / display error.
// ...
}); auth_oidc_signin_popup . js
Web version 8
firebase . auth (). signInWithPopup ( provider )
. then (( result ) = > {
// User is signed in.
// result.credential is a firebase.auth().OAuthCredential object.
// result.credential.providerId is equal to 'oidc.myProvider'.
// result.credential.idToken is the OIDC provider's ID token.
})
. catch (( error ) = > {
// Handle error.
}); oidc . js
Redirect
To redirect to a sign-in page, call signInWithRedirect() :
Web version 9
import { getAuth , signInWithRedirect } from "firebase/auth" ;
const auth = getAuth ();
signInWithRedirect ( auth , provider ); auth_oidc_signin_redirect . js
Web version 8
firebase . auth (). signInWithRedirect ( provider ). catch (( error ) = > {
// Handle error.
}); oidc . js
Then, call getRedirectResult() to get the results when the user returns to your app:
Web version 9
import { getAuth , getRedirectResult , OAuthProvider } from "firebase/auth" ;
const auth = getAuth ();
getRedirectResult ( auth )
. then (( result ) = > {
// User is signed in.
const credential = OAuthProvider . credentialFromResult ( result );
// This gives you an access token for the OIDC provider. You can use it to directly interact with that provider
})
. catch (( error ) = > {
// Handle Errors here.
const errorCode = error . code ;
const errorMessage = error . message ;
// The email of the user's account used.
const email = error . customData . email ;
// The AuthCredential type that was used.
const credential = OAuthProvider . credentialFromError ( error );
// Handle / display error.
// ...
}); auth_oidc_signin_redirect_result . js
Web version 8
// On return.
firebase . auth (). getRedirectResult ()
. then (( result ) = > {
// User is signed in.
// result.credential is a firebase.auth().OAuthCredential object.
// result.credential.providerId is equal to 'oidc.myProvider'.
// result.credential.idToken is the OIDC provider's ID token.
})
. catch (( error ) = > {
// Handle / display error.
// ...
}); oidc . js
At the conclusion of either flow, you can get the OIDC ID token using the
result.credential.idToken field.
Signing in users directly
To sign a user in with an OIDC ID token directly, do the following:
Initialize an OAuthProvider instance with the provider ID you configured in the previous section. The provider ID must start with oidc. . Then, create an OAuthCredential , and call signInWithCredential() to sign the user in.
Web version 9
import { getAuth , OAuthProvider , signInWithCredential } from "firebase/auth" ;
const auth = getAuth ();
const credential = provider . credential ({
idToken : oidcIdToken ,
});
signInWithCredential ( auth , credential )
. then (( result ) = > {
// User is signed in.
const newCredential = OAuthProvider . credentialFromResult ( result );
// This gives you a new access token for the OIDC provider. You can use it to directly interact with that provider.
})
. catch (( error ) = > {
// Handle Errors here.
const errorCode = error . code ;
const errorMessage = error . message ;
// The email of the user's account used.
const email = error . customData . email ;
// The AuthCredential type that was used.
const credential = OAuthProvider . credentialFromError ( error );
// Handle / display error.
// ...
}); auth_oidc_direct_sign_in . js
Web version 8
const credential = provider . credential ( oidcIdToken , null );
firebase . auth (). signInWithCredential ( credential )
. then (( result ) = > {
// User is signed in.
// User now has a odic.myProvider UserInfo in providerData.
})
. catch (( error ) = > {
// Handle / display error.
// ...
}); oidc . js
Linking user accounts
If a user has already signed in to your app using a different method (such as email/password), you can link their existing account to the OIDC provider using linkWithPopup() or linkWithRedirect() :
For example we can link with a Google account:
Web version 9
import { getAuth , linkWithPopup , GoogleAuthProvider } from "firebase/auth" ;
const provider = new GoogleAuthProvider ();
const auth = getAuth ();
linkWithPopup ( auth . currentUser , provider ). then (( result ) = > {
// Accounts successfully linked.
const credential = GoogleAuthProvider . credentialFromResult ( result );
const user = result . user ;
// ...
}). catch (( error ) = > {
// Handle Errors here.
// ...
}); auth_link_with_popup . js
Web version 8
auth . currentUser . linkWithPopup ( provider ). then (( result ) = > {
// Accounts successfully linked.
var credential = result . credential ;
var user = result . user ;
// ...
}). catch (( error ) = > {
// Handle Errors here.
// ...
}); link - multiple - accounts . js
What's next
Signing in users with SAML
Showing a custom domain during sign in
Managing OIDC and SAML providers programmatically
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
