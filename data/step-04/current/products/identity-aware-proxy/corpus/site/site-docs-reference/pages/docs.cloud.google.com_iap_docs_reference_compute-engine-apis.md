---
title: "Using the API to manage Identity-Aware Proxy for Compute Engine apps \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis
  title: "Using the API to manage Identity-Aware Proxy for Compute Engine apps \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Reference
Send feedback
Using the API to manage Identity-Aware Proxy for Compute Engine apps
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the Identity-Aware Proxy (IAP) properties
that are available for certain Compute Engine API requests. Use this
document with
Compute Engine API reference .
IAP properties
Compute Engine BackendServices resources
use the iap properties below, which can be globally or regionally scoped. To
learn how to set and get these properties, read the sections that follow.
Name
Value
Description
iap.enabled
bool
Specifies if IAP is enabled for this backend service.
The default value is false.
If iap.enabled is
true , the
oauth2ClientId and
oauth2ClientSecret
properties must be set.
If iap.enabled is
false , the
oauth2ClientId and
oauth2ClientSecret
properties aren't affected. You can temporarily disable
IAP without unsetting those properties.
iap.oauth2ClientId
string
Specifies the client ID for use with OAuth 2.0.
iap.oauth2ClientSecret
(Requests only)
string
Specifies the client secret for use with OAuth 2.0.
This value can't be read via the API. Instead, the
oauth2ClientSecretSha256
field is returned.
iap.oauth2ClientSecretSha256
(Responses only)
string
In response bodies, the
oauth2ClientSecret
field is redacted. Instead,
iap.oauth2ClientSecretSha256
supplies the SHA256 hash of the secret.
Setting IAP properties when creating a backend service
When you create a backend service, you can enable IAP and set
the client ID and secret. Use a BackendService POST request:
HTTP request
Format your request path for either a global or regional scope.
Global scope
POST https://compute.googleapis.com/compute/v1/projects/ project /global/backendServices
Regional scope
POST https://compute.googleapis.com/compute/v1/projects/ project /regions/ region /backendServices/ resourceId
Path parameters
Name
Value
Description
project
string
Project ID
for this request.
region
string
Name of the region scoping this request.
resourceId
string
Name of the BackendService where you're enabling IAP.
Request body
In the request body, supply a
BackendServices resource
with the relevant IAP properties:
Property name
Value
Description
Optional properties
iap.enabled
bool
Specifies if IAP is enabled for this backend service.
The default value is false.
If iap.enabled is
true , the
oauth2ClientId and
oauth2ClientSecret
properties must be set.
iap.oauth2ClientId
string
Specifies the client ID for use with OAuth 2.0.
iap.oauth2ClientSecret
string
Specifies the client secret for use with OAuth 2.0.
Example:
{
...
"iap": [
{
"enabled": true,
"oauth2ClientId": string,
"oauth2ClientSecret": string
}
],
...
}
The example above shows only the IAP properties. For
additional properties including required properties, see the
BackendServices resource
documentation.
Response
If successful, this method returns a
BackendServices resource
in the response body, including IAP properties.
If iap.enabled is true but the oauth2ClientId and oauth2ClientSecret
properties aren't set, a BAD_REQUEST response is returned.
Learn about how to create a backend service using gcloud CLI
backend-services create
or the Compute Engine API
BackendServices: insert
method.
Setting IAP properties by updating a backend service
To enable or disable IAP for an existing backend service and
set or replace the client ID and secret, update the backend service. Use a
BackendService PATCH request:
HTTP request
Format your request path for either a global or regional scope.
Global scope
PATCH https://compute.googleapis.com/compute/v1/projects/ project /global/backendServices/ backendService
Regional scope
PATCH https://compute.googleapis.com/compute/v1/projects/ project /regions/ region /backendServices/ resourceId
Path parameters
Name
Value
Description
backendService
string
Name of the BackendService to update. (Global scope)
project
string
Project ID
for this request.
region
string
Name of the region scoping this request.
resourceId
string
Name of the BackendService to update. (Regional scope)
Request body
In the request body, supply the relevant portions of a
BackendServices resource ,
according to the rules of patch semantics .
Include the relevant IAP properties:
Property name
Value
Description
Optional properties
iap.enabled
bool
Specifies if IAP is enabled for this backend service.
The default value is false.
If iap.enabled is
true , the
oauth2ClientId and
oauth2ClientSecret
properties must be set.
iap.oauth2ClientId
string
Specifies the client ID for use with OAuth 2.0.
iap.oauth2ClientSecret
string
Specifies the client secret for use with OAuth 2.0.
Example:
{
...
"backends": [
{
...
"iap": [
{
"enabled": true,
"oauth2ClientId": string,
"oauth2ClientSecret": string
}
],
...
}
],
...
}
The example above shows only the IAP properties. For
additional properties including required properties, see the
BackendServices resource
documentation.
Response
If successful, this method returns a
BackendServices resource
in the response body, including IAP properties.
If iap.enabled is true but you didn't set or supply new oauth2ClientId and
oauth2ClientSecret properties, a BAD_REQUEST response is returned.
Learn about how to update a backend service using gcloud CLI
backend-services edit
or the Compute Engine API
BackendServices: patch
method.
Getting the IAP properties of a backend service
To see the current IAP status of an existing backend service,
use a BackendService GET request:
HTTP request
Format your request path for either a global or regional scope.
Global scope
GET https://compute.googleapis.com/compute/v1/projects/ project /global/backendServices/ backendService
Regional scope
GET https://compute.googleapis.com/compute/v1/projects/ project /regions/ region /backendServices/ resourceId
Path parameters
Name
Value
Description
backendService
string
Name of the BackendService to return. (Global scope)
project
string
Project ID
for this request.
region
string
Name of the region scoping this request.
resourceId
string
Name of the BackendService to return. (Regional scope)
Request body
Don't supply a request body with this method.
Response
If successful, this method returns a
BackendServices resource
in the response body that includes
IAP properties .
Learn about how to get a backend service using gcloud CLI
backend-services describe
or the Compute Engine API
BackendServices: get
method.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
