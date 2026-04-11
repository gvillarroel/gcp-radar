---
title: "Using Firebase to authenticate users \_|\_ Cloud Endpoints with OpenAPI \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/endpoints/docs/openapi/authenticating-users-firebase
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/endpoints/docs/openapi
source_metadata:
  url: https://docs.cloud.google.com/endpoints/docs/openapi/authenticating-users-firebase
  title: "Using Firebase to authenticate users \_|\_ Cloud Endpoints with OpenAPI\
    \ \_|\_ Google Cloud Documentation"
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
Using Firebase to authenticate users
Stay organized with collections
Save and categorize content based on your preferences.
OpenAPI
| gRPC
This page describes how to support user authentication in Cloud Endpoints.
To authenticate a user, a client application must send a
JSON Web Token (JWT) in the authorization header of the
HTTP request to your backend API. The
Extensible Service Proxy (ESP)
validates the token on behalf of your API, so you don't have to add any code in
your API to process the authentication. However, you do need to configure your
OpenAPI document to support your chosen authentication methods.
ESP validates a JWT in a performant way by using the JWT's
issuer's public keys. ESP caches the public keys for five
minutes. In addition, ESP caches validated JWTs for five minutes
or until JWT expiry, whichever happens first.
Before you begin
Add authentication code to your client application, following the
Firebase authentication ,
documentation. Firebase supports authentication by using passwords,
phone numbers, and popular federated identity providers like Google, Facebook
and Twitter.
When your client application sends an HTTP request, the authorization header in
the request must contain the following JWT claims:
iss (issuer)
sub (subject)
aud (audience)
iat (issued at)
exp (expiration time)
Configuring your OpenAPI document
You must have a security
requirement object and a security
definitions object in your OpenAPI document for ESP to
validate the claims in the signed JWT.
To support Firebase authentication:
OpenAPI 2.0
Add the following to your OpenAPI specification:
securityDefinitions :
firebase :
authorizationUrl : ""
flow : "implicit"
type : "oauth2"
# Replace PROJECT_ID with your project ID
x-google-issuer : "https://securetoken.google.com/ PROJECT_ID "
x-google-jwks_uri : "https://www.googleapis.com/service_accounts/v1/metadata/x509/securetoken@system.gserviceaccount.com"
x-google-audiences : " PROJECT_ID "
Add a security section at either the API level to apply to the entire
API, or at the method level to apply to a specific method.
security :
- firebase : []
OpenAPI 3.x
Add the following to your OpenAPI specification:
components :
securitySchemes :
firebase :
type : oauth2
flows :
implicit :
authorizationUrl : ""
scopes : {}
x-google-auth :
# Replace PROJECT_ID with your project ID
issuer : https://securetoken.google.com/ PROJECT_ID
jwksUri : https://www.googleapis.com/service_accounts/v1/metadata/x509/securetoken@ system.gserviceaccount.com
audiences :
- PROJECT_ID
Add a security section at either the API level to apply to the entire
API, or at the method level to apply to a specific method.
security :
- firebase : []
You can define multiple security definitions in the OpenAPI document, but each
definition must have a different issuer. If you use security sections at both
the API level and at the method level, the method-level settings override the
API-level settings.
You can also customize JWT locations by adding x-google extensions. For details, see
OpenAPI 2.0 extensions or
OpenAPI 3.x extensions .
Making an authenticated call to an Endpoints API
When you send a request using an authentication token, for security reasons, we
recommend that you put the token in the Authorization:Bearer header. For
example:
curl - H "Authorization: Bearer <var>TOKEN</var>" "<var>ENDPOINTS_HOST</var>/echo"
Here, replace the ENDPOINTS_HOST and TOKEN variables with your
API hostname and authentication token, respectively. See
Making an authenticated request to an Endpoints API .
for sample code that sends a request using the Authorization:Bearer header.
If you cannot use the header when sending the request, you can put the
authentication token in a query parameter called access_token . For example:
curl "<var>ENDPOINTS_HOST</var>/echo?access_token=<var>TOKEN</var>"
Receiving authenticated results in your API
ESP usually forwards all headers it receives. However, it overrides the
original Authorization header when the backend address is specified by
x-google-backend in OpenAPI specification or BackendRule
in gRPC service configuration.
ESP will send the authentication result in the X-Endpoint-API-UserInfo
to the backend API. We recommend using this header instead of the original
Authorization header. This header is a string that base64url encodes
a JSON object. The JSON object format differs between ESPv2 and ESP.
For ESPv2, the JSON object is exactly the original JWT payload. For ESP,
the JSON object uses different field names and put original JWT payload under claims field.
See Handle JWTs in the backend service
for more information on the format.
What's next
Troubleshooting JWT validation
Authentication between services
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
