---
title: "Creating and managing API keys \_|\_ API Keys API Documentation \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/api-keys/docs/create-manage-api-keys
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/api-keys/docs
source_metadata:
  url: https://docs.cloud.google.com/api-keys/docs/create-manage-api-keys
  title: "Creating and managing API keys \_|\_ API Keys API Documentation \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Keys API Documentation
Guides
Send feedback
Creating and managing API keys
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to create and manage API keys using the API Keys
API.
For information on how to use an API key with your calls to Google Cloud APIs,
see Using API keys .
Before you begin
The page uses curl and the Google Cloud CLI to send requests to the
API Keys API. See
Getting started with the API Keys
for details on getting set up to experiment with the API.
Creating an API key
You can create an API key by using the CreateKey method. The method requires a
Key parameter.
You can only specify displayName and restrictions fields of the Key object.
The CreateKey isn't a synchronous method. Instead, when you issue a call
to CreateKey , you initiate a long-running
operation . The following example
issues a CreateKey call to create an API key with no restrictions:
gcurl https://apikeys.googleapis.com/v2/projects/ PROJECT_NUMBER /locations/global/keys -X POST -d '{"displayName" : "Example API key"}'
On success, the method returns a long-running operation in the response. As
described in
Polling long running operations , you
repeatedly make operations.get
calls with the value from the name field. When the response from operations.get
contains "done": true , the response object contains a Key , similar to the
following:
{
"name" : "operations/akmf.p7-103621867718-06f94db2-7e91-4c58-b826-e6b80e4dc3eb" ,
"done" : true ,
"response" : {
"@type" : "type.googleapis.com/google.api.apikeys.v2.Key" ,
"name" : "projects/ PROJECT_NUMBER /locations/global/keys/aecd7943-98ff-4ce2-a876-ec1b37c671ca" ,
"displayName" : "Example API key" ,
"keyString" : "----REDACTED----" ,
"createTime" : "2021-03-23T17:39:46.721099Z" ,
"uid" : "aecd7943-98ff-4ce2-a876-ec1b37c671ca" ,
"updateTime" : "2021-03-23T17:39:47.046746Z" ,
"etag" : "k0bsYGkIvSxDVwNxyw49NQ=="
}
}
In the response object:
The name field contains a unique identifier for the API key. You use the
value in the name field in the other methods that require a
key name. This value isn't displayed in the Google Cloud console, but you can
call the ListKeys method to
get the names for all of your API keys. The Key.name field is always in the
following format: projects/ PROJECT_NUMBER /locations/global/keys/ KEY_ID .
The displayName field maps to the Name field in the
Google Cloud console, so you might want to provide a displayName when
you call CreateKey .
The keyString field contains the string that you send to the APIs that
require an API key. The keyString maps to the API key field in the
Google Cloud console. You can call the
GetKeyString
method to get the keyString for an API key.
The etag field contains a checksum computed by the server based on the
current value of the key. Please pass the etag value when you call UpdateKey
and DeleteKey methods.
User-specified key id
You can specify a
keyId
as a query parameter for CreateKey method. When specified, the value becomes the final
component of the Key.name .
For example, consider the following call to CreateKey :
gcurl https://apikeys.googleapis.com/v2/projects/ PROJECT_NUMBER /locations/global/keys?keyId=my-test-key1 -X POST -d '{"displayName" : "Example API key"}'
For this example, the Key.name field has the following value:
"name": "projects/ PROJECT_NUMBER /locations/global/keys/ my-test-key1 "
Updating the display name
To change the displayName of an API key or to add a displayName to
an API key that was created without one, call the UpdateKey method. When you
call UpdateKey , you initiate a long-running operation that updates the key.
The following example illustrates how to call UpdateKey :
gcurl https://apikeys.googleapis.com/v2/projects/ PROJECT_NUMBER /locations/global/keys/ KEY_ID ?updateMask=displayName -X PATCH -d '{"displayName": "New display name", "etag" : " ETAG "}'
When the response from operations.get contains "done": true , the response
contains an Key object with the updated displayName .
Deleting an API key
To delete an API key, use the DeleteKey method. When you
call DeleteKey , you initiate a long-running operation that marks the key as
DELETED .
The following example illustrates how to call DeleteKey :
gcurl https://apikeys.googleapis.com/v2/projects/ PROJECT_NUMBER /locations/global/keys/ KEY_ID ?etag=" ETAG " -X DELETE
When the response from operations.get contains "done": true , the response
is similar to the following:
{
"name" : "operations/akmf.cdabc4df-cbff-4420-8c7e-65dc832c945d" ,
"done" : true ,
"response" : {
"@type" : "type.googleapis.com/google.api.apikeys.v2.Key"
"name" : "projects/ PROJECT_NUMBER /locations/global/keys/aecd7943-98ff-4ce2-a876-ec1b37c671ca" ,
"displayName" : "Example API key" ,
"keyString" : "----REDACTED----" ,
"createTime" : "2021-03-23T17:39:46.721099Z" ,
"uid" : "aecd7943-98ff-4ce2-a876-ec1b37c671ca" ,
"updateTime" : "2021-03-23T17:39:47.046746Z" ,
"deleteTime" : "2021-03-24T22:35:37.290544Z" ,
"etag" : "k0bsYGkIvSxDVwNxyw49NQ=="
}
}
An API key that is marked as DELETED can't be used, but it isn't completely
removed from our system either. To list the API keys that still exist but that
are marked ad DELETED , set show_deleted to true for ListKeys method:
gcurl https://apikeys.googleapis.com/v2/projects/ PROJECT_NUMBER /locations/global/keys?show_deleted=true
After 30 days, the API key is permanently deleted.
Restoring an API key
To restore an API key before it is permanently deleted, call the
UndeleteKey method. When you
call UndeleteKey , you initiate a long-running operation that marks the key as
ACTIVE .
The following example illustrates how to call UndeleteKey :
gcurl https://apikeys.googleapis.com/v2/projects/ PROJECT_NUMBER /locations/global/keys/ KEY_ID /:undelete -X POST
What's next
Getting information about API keys
Adding restrictions to API keys
Viewing Cloud Audit Logs
Troubleshooting
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
