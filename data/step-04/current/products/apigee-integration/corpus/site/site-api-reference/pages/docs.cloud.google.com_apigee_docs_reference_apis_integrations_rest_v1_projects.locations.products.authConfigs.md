---
title: "REST Resource: projects.locations.products.authConfigs \_|\_ Apigee \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.authConfigs
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.authConfigs
  title: "REST Resource: projects.locations.products.authConfigs \_|\_ Apigee \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Send feedback
REST Resource: projects.locations.products.authConfigs
Stay organized with collections
Save and categorize content based on your preferences.
Resource: AuthConfig
JSON representation
Methods
Resource: AuthConfig
The AuthConfig resource use to hold channels and connection config data.
JSON representation
{
"name" : string ,
"displayName" : string ,
"description" : string ,
"certificateId" : string ,
"credentialType" : enum ( CredentialType ) ,
"creatorEmail" : string ,
"createTime" : string ,
"lastModifierEmail" : string ,
"updateTime" : string ,
"visibility" : enum ( AuthConfigVisibility ) ,
"state" : enum ( State ) ,
"reason" : string ,
"expiryNotificationDuration" : [
string
] ,
"validTime" : string ,
"overrideValidTime" : string ,
// Union field credential can be only one of the following:
"encryptedCredential" : string ,
"decryptedCredential" : {
object ( Credential )
}
// End of list of possible types for union field credential .
}
Fields
name
string
Resource name of the SFDC instance projects/{project}/locations/{location}/authConfigs/{authConfig}.
displayName
string
The name of the auth config.
description
string
A description of the auth config.
certificateId
string
Certificate id for client certificate
credentialType
enum ( CredentialType )
Credential type of the encrypted credential.
creatorEmail
string
The creator's email address. Generated based on the End User Credentials/LOAS role of the user making the call.
createTime
string ( Timestamp format)
Output only. The timestamp when the auth config is created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
lastModifierEmail
string
The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.
updateTime
string ( Timestamp format)
Output only. The timestamp when the auth config is modified.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
visibility
enum ( AuthConfigVisibility )
The visibility of the auth config.
state
enum ( State )
The status of the auth config.
reason
string
The reason / details of the current status.
expiryNotificationDuration[]
string ( Duration format)
User can define the time to receive notification after which the auth config becomes invalid. Support up to 30 days. Support granularity in hours.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
validTime
string ( Timestamp format)
The time until the auth config is valid. Empty or max value is considered the auth config won't expire.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
overrideValidTime
string ( Timestamp format)
User provided expiry time to override. For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
Union field credential .
credential can be only one of the following:
encryptedCredential
string ( bytes format)
Auth credential encrypted by Cloud KMS. Can be decrypted as Credential with proper KMS key.
A base64-encoded string.
decryptedCredential
object ( Credential )
Raw auth credentials.
Methods
create
Creates an auth config record.
delete
Deletes an auth config.
get
Gets a complete auth config.
list
Lists all auth configs that match the filter.
patch
Updates an auth config.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
