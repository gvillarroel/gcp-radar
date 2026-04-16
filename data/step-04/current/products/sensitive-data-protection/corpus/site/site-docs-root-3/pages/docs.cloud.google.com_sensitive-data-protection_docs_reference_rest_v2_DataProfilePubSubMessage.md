---
title: "DataProfilePubSubMessage \_|\_ Sensitive Data Protection \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/DataProfilePubSubMessage
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/data-security
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/DataProfilePubSubMessage
  title: "DataProfilePubSubMessage \_|\_ Sensitive Data Protection \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Reference
Send feedback
DataProfilePubSubMessage
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Pub/Sub topic message for a DataProfileAction.PubSubNotification event. To receive a message of protocol buffer schema type, convert the message data to an object of this proto class.
JSON representation
{
"profile" : {
object ( TableDataProfile )
} ,
"fileStoreProfile" : {
object ( FileStoreDataProfile )
} ,
"event" : enum ( EventType )
}
Fields
profile
object ( TableDataProfile )
If DetailLevel is TABLE_PROFILE this will be fully populated. Otherwise, if DetailLevel is RESOURCE_NAME , then only name and fullResource will be populated.
fileStoreProfile
object ( FileStoreDataProfile )
If DetailLevel is FILE_STORE_PROFILE this will be fully populated. Otherwise, if DetailLevel is RESOURCE_NAME , then only name and fileStorePath will be populated.
event
enum ( EventType )
The event that caused the Pub/Sub message to be sent.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-30 UTC."],[],[]]
