---
title: "Accessing non-Google resources programmatically \_|\_ Identity-Aware Proxy\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/access-external-resources
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/access-external-resources
  title: "Accessing non-Google resources programmatically \_|\_ Identity-Aware Proxy\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Guides
Send feedback
Accessing non-Google resources programmatically
Stay organized with collections
Save and categorize content based on your preferences.
This article shows you how to programmatically access a resource protected by
Identity-Aware Proxy (IAP) using external identities.
There are several situations where you might want to do this:
Your frontend application leverages Identity Platform directly. Your
backend API server is built using App Engine, and protected
by IAP using external identities.
Your application is designed for use in a non-traditional browser environment,
such as on Android, iOS, or the command-line, where using a browser
redirect to authenticate users is infeasible.
Accessing resources
To access a resource programmatically using a service account JWT, see
Authenticating with a service account JWT .
To access a resource programmatically using an ID token, follow these steps:
Retrieve the user's ID token.
Node.js
Ensure the user is signed in. The code below shows a simple example
of signing in a user with an email and password:
// If signing in using project-level email/password IdP.
// auth.tenantId = null; // This is null by default.
// For signing in to a specific tenant using email/password.
auth . tenantId = 'myTenantId' ;
auth . signInWithEmailAndPassword ( email , password )
. then (( user ) = > {
// User signed in. ID token can now be retrieved.
})
. catch (( error ) = > {
// Handler error.
});
You can then retrieve an ID token on the user object:
user . getIdToken ()
. then (( idToken ) = > {
// idToken is now available and can be sent to API server.
})
. catch (( error ) = > {
// Handler error.
});
REST
Calling signInWithPassword returns an ID token in the response:
curl 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= API-KEY ' \
-H 'Content-Type: application/json' \
--data-binary '{
"email":" EMAIL ",
"password":" PASSWORD ",
"returnSecureToken":true,
"tenantId":" TENANT-ID " # Only used in multi-tenancy
}'
Include the ID token in the authorization header when calling
an endpoint protected by IAP.
curl -H "Authorization: Bearer GCIP-ID-TOKEN " "https://example.appspot.com/api"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
