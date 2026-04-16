---
title: "REST Resource: organizations.apps \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps
  title: "REST Resource: organizations.apps \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Reference
Send feedback
REST Resource: organizations.apps
Stay organized with collections
Save and categorize content based on your preferences.
Resource: App
JSON representation
Methods
Resource: App
JSON representation
{
"appId" : string ,
"attributes" : [
{
object ( Attribute )
}
] ,
"callbackUrl" : string ,
"createdAt" : string ,
"credentials" : [
{
object ( Credential )
}
] ,
"companyName" : string ,
"developerId" : string ,
"lastModifiedAt" : string ,
"name" : string ,
"scopes" : [
string
] ,
"status" : string ,
"apiProducts" : [
{
object ( ApiProductRef )
}
] ,
"keyExpiresIn" : string ,
"developerEmail" : string ,
"appGroup" : string
}
Fields
appId
string
ID of the app.
attributes[]
object ( Attribute )
List of attributes.
callbackUrl
string
Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to apps.
createdAt
string ( int64 format)
Output only. Unix time when the app was created.
credentials[]
object ( Credential )
Output only. Set of credentials for the app. Credentials are API key/secret pairs associated with API products.
companyName
string
Name of the company that owns the app.
developerId
string
ID of the developer.
lastModifiedAt
string ( int64 format)
Output only. Last modified time as milliseconds since epoch.
name
string
Name of the app.
scopes[]
string
Scopes to apply to the app. The specified scope names must already exist on the API product that you associate with the app.
status
string
Status of the credential.
apiProducts[]
object ( ApiProductRef )
List of API products associated with the app.
keyExpiresIn
string ( int64 format)
Duration, in milliseconds, of the consumer key that will be generated for the app. The default value, -1, indicates an infinite validity period. Once set, the expiration can't be updated. json key: keyExpiresIn
developerEmail
string
Email of the developer.
appGroup
string
Name of the AppGroup
Methods
get
Gets the app profile for the specified app ID.
list
Lists IDs of apps within an organization that have the specified app status (approved or revoked) or are of the specified app type (developer or company).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
