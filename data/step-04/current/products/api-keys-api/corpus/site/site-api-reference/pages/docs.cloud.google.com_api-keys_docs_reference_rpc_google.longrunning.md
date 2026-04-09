---
title: "Package google.longrunning \_|\_ API Keys API Documentation \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/api-keys/docs/reference/rpc/google.longrunning
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/api-keys/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/api-keys/docs/reference/rpc/google.longrunning
  title: "Package google.longrunning \_|\_ API Keys API Documentation \_|\_ Google\
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
Reference
Send feedback
Package google.longrunning
Stay organized with collections
Save and categorize content based on your preferences.
Index
Operations (interface)
GetOperationRequest (message)
Operation (message)
Operations
Manages long-running operations with an API service.
When an API method normally takes long time to complete, it can be designed to return Operation to the client, and the client can use this interface to receive the real response asynchronously by polling the operation resource, or pass the operation resource to another API (such as Pub/Sub API) to receive the response. Any API service that returns long-running operations should implement the Operations interface so developers can have a consistent client experience.
GetOperation
rpc GetOperation( GetOperationRequest ) returns ( Operation )
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform.read-only
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
GetOperationRequest
The request message for Operations.GetOperation .
Fields
name
string
The name of the operation resource.
Operation
This resource represents a long-running operation that is the result of a network API call.
Fields
name
string
The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id} .
metadata
Any
Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
done
bool
If the value is false , it means the operation is still in progress. If true , the operation is completed, and either error or response is available.
Union field result . The operation result, which can be either an error or a valid response . If done == false , neither error nor response is set. If done == true , exactly one of error or response can be set. Some services might not provide the result. result can be only one of the following:
error
Status
The error result of the operation in case of failure or cancellation.
response
Any
The normal, successful response of the operation. If the original method returns no data on success, such as Delete , the response is google.protobuf.Empty . If the original method is standard Get / Create / Update , the response should be the resource. For other methods, the response should have the type XxxResponse , where Xxx is the original method name. For example, if the original method name is TakeSnapshot() , the inferred response type is TakeSnapshotResponse .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-26 UTC."],[],[]]
