---
title: "Using the API to manage Identity-Aware Proxy for App Engine \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/iap/docs/reference/app-engine-apis
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/reference/app-engine-apis
  title: "Using the API to manage Identity-Aware Proxy for App Engine \_|\_ Google\
    \ Cloud Documentation"
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
Using the API to manage Identity-Aware Proxy for App Engine
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the Identity-Aware Proxy (IAP) properties
that are available for App Engine API requests. Use this document with
the App Engine API collection .
IAP properties
App Engine applications
use the iap properties below. To learn how to set and get these properties,
read the sections that follow.
Property name
Value
Description
iap.enabled
bool
Specifies if IAP is enabled for the application.
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
oauth2ClientSecret field is
redacted. Instead,
iap.oauth2ClientSecretSha256
supplies the SHA256 hash of the secret.
Setting IAP properties when creating an application
When you create an application, you can enable IAP and set
the client ID and secret. Use an application POST request:
HTTP request
POST https://appengine.googleapis.com/v1/apps/ project ?alt=json&update_mask=iap
Parameters
Parameter name
Value
Description
Path parameters
project
string
Project ID for this request.
Request body
In the request body, supply an
application with the
relevant IAP properties:
Property name
Value
Description
Optional properties
iap.enabled
bool
Specifies if IAP is enabled for the application.
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
App Engine applications
documentation.
Response
If successful, this method returns an
application in
the response body, including IAP properties.
If iap.enabled is true but the oauth2ClientId and oauth2ClientSecret
properties aren't set, a BAD_REQUEST response is returned.
Learn how to
create an App Engine application .
Setting IAP properties by updating an application
To enable or disable IAP for an existing application and set
or replace the client ID and secret, update the application. Use an application
PATCH request:
HTTP request
PATCH https://appengine.googleapis.com/v1/apps/ project ?alt=json&update_mask=iap
Parameters
Parameter name
Value
Description
Path parameters
project
string
Project ID for this request.
Request body
In the request body, supply the relevant portions of an
App Engine application ,
according to the
rules of patch semantics .
Include the relevant IAP properties:
Property name
Value
Description
Optional properties
iap.enabled
bool
Specifies if IAP is enabled for this application.
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
App Engine applications
documentation.
Response
If successful, this method returns an
application in the response
body, including IAP properties.
If iap.enabled is true but you didn't set or supply new oauth2ClientId
and oauth2ClientSecret properties, a BAD_REQUEST response is returned.
Learn about
Method: apps.patch .
Getting the IAP properties of an application
To see the current IAP status of an existing application,
use a GET request:
HTTP request
GET https://appengine.googleapis.com/v1/apps/ project ?alt=json
Parameters
Parameter name
Value
Description
Path parameters
project
string
Project ID
for this request.
Request body
Don't supply a request body with this method.
Response
If successful, this method returns an
application in the response
body that includes IAP properties .
Learn about
Method: apps.get .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
