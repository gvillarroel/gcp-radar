---
title: "Choosing an Authentication Method \_|\_ Cloud Endpoints with OpenAPI \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/endpoints/docs/openapi/authentication-method
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/endpoints/docs/openapi
source_metadata:
  url: https://docs.cloud.google.com/endpoints/docs/openapi/authentication-method
  title: "Choosing an Authentication Method \_|\_ Cloud Endpoints with OpenAPI \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Endpoints
OpenAPI
Send feedback
Choosing an Authentication Method
Stay organized with collections
Save and categorize content based on your preferences.
OpenAPI
| gRPC
Cloud Endpoints supports multiple authentication methods that are suited
to different applications and use cases. The
Extensible Service Proxy (ESP)
uses the authentication method that you specify in your service
configuration to validate incoming requests before passing them to your API
backend. This document provides an overview and sample use cases for each
supported authentication method.
API keys
An API key is an encrypted string that identifies a
Google Cloud project for quota, billing, and monitoring purposes. A
developer generates an API key in a project in the Google Cloud console and
embeds that key in every call to your API as a query parameter.
If you specify an API key requirement in your service configuration,
ESP uses the API key to look up the Google Cloud project
that the API key is associated with. ESP rejects requests unless
the API key was generated in your Google Cloud project or within other
Google Cloud projects in which your API has been enabled. For more
information, see
Restricting API access with API keys
Unlike credentials that use short-live tokens or signed requests, API keys are a
part of the request and are therefore considered to be vulnerable to
man-in-the-middle attacks
and therefore less secure. You can use API keys in addition to
one of the authentication methods described as follows. For security reasons, don't
use API keys by themselves when API calls contain user data.
Use case
If you want to use Endpoints features such as
quotas , each request must pass in an API
key so that Endpoints can identify the Google Cloud project
that the client application is associated with.
For more information about API keys, see
Why and when to use API keys .
Firebase Authentication
Firebase Authentication
provides backend services, SDKs, and libraries to authenticate users to a mobile
or web app. It authenticates users by using a variety of credentials such as
Google, Facebook, Twitter, or GitHub.
The Firebase client library signs a JSON Web Token
(JWT) with a private key after the user successfully
signs in. ESP validates that the JWT was signed by
Firebase and that the iss (issuer) claim in the JWT, which identifies
your Firebase application, matches the x-google-issuer setting in the
service configuration.
Use case
We recommend using Firebase when the API calls involve any user data and
the API is intended to be used in flows where the user has a user interface for
example, from mobile and web apps.
For more information, see
Using Firebase to authenticate users .
Auth0
Auth0 authenticates and authorizes applications and APIs
regardless of identity provider, platform, stack and device.
Auth0 supports a large number of providers and the Security Assertion Markup
Language specification. It
provides backend services, SDKs, and user interface libraries for authenticating
users in web and mobile apps. Auth0 integrates with several third-party identity
providers and also provides custom user account management.
The client library provided by Auth0 generates and signs a JWT once the user
signs in. ESP validates the JWT was signed by Auth0 and that the
iss claim in the JWT, which identifies your Auth0 application, matches the
x-google-issuer setting in the service configuration.
Use case
Auth0 is suited for consumer and enterprise web and mobile apps. For more
information, see the Auth0 tab in
For more information, see
Using Auth0 to authenticate users .
Google ID token authentication
Authentication with a
Google ID token
allows users to authenticate by signing in with a Google Account. Once
authenticated, the user has access to all Google services. You can use Google ID
tokens to make calls to Google APIs and to APIs managed by
Endpoints. ESP validates the Google ID token by
using the public key and makes sure that the iss claim in the JWT is
https://accounts.google.com .
Use case
Authentication with a Google ID token is recommended when all users have Google Accounts. You might choose to use Google ID token authentication, for example,
if your API accompanies a Google application, such as Google Drive companion.
Google ID token authentication allows users to authenticate by signing in with
a Google Account. Once authenticated, the user has access to all Google
services.
For more information see
Using Google ID tokens to authenticate users .
Service accounts
To identify a service that sends requests to your API, you use a
service account . The calling service
uses the service account's private key to sign a secure
JSON Web Token (JWT)
and sends the signed JWT in the request to your API.
Use case
JWTs and service accounts are well suited for microservices. For more
information, see
Authentication between services .
Custom authentication
You can use other authentication platforms to authenticate users as long as it
conforms to the JSON Web Token RFC 7519 .
For more information, see
Using a custom method to authenticate users .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
