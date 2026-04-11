---
title: "Error Codes \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/reference/error-codes
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/reference/error-codes
  title: "Error Codes \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Reference
Send feedback
Error Codes
Stay organized with collections
Save and categorize content based on your preferences.
The following error codes are common to all methods of the Pub/Sub API:
Error
HTTP Code
Description
Client Action
ALREADY_EXISTS
409
The topic or subscription already exists. This is an error on creation operations.
The client cannot retry the operation.
BAD_GATEWAY
502
A server between the client and the backend Pub/Sub servers detected a
temporary issue. If the error persists, contact Cloud Support.
The client can retry the operation.
CANCELLED
499
The client has cancelled the request before it completed.
The client can retry the operation, but the operation may have been
executed on the previous call.
DEADLINE_EXCEEDED
504
The request did not complete in the time allocated. This can be caused by network issues from the client to the server, and it can also occur rarely on the server. On this error, the server may or may not execute the operation requested.
Typically the client would retry the operation. Keep in mind that this may result in the operation being executed more than once on the server.
FAILED_PRECONDITION
400
Something must be done in the system to allow this operation. The following issues might
cause this error:
Billing is not enabled for the Cloud project.
Pub/Sub can't access the customer-managed
encryption key used with StreamingPull or Pull.
A publish, pull, or streamingPull request was received in a region that isn't allowed in
the topic's message storage
policy .
Depending on the circumstances:
Enable billing in the Cloud project.
Restore key access.
Update the client to use a service endpoint corresponding to a region that is allowed by
the message storage policy.
INTERNAL
500
This error indicates an internal server error; it should not occur.
If this error occurs, please report to Cloud Support. The error should be transient.
The client can retry the operation.
INVALID_ARGUMENT
400
The request is invalid; a required argument may be missing, exceeds limits, or has an invalid value.
Review the error message for details. This error will fail again if the client retries it.
NOT_FOUND
404
The topic or subscription referenced has not been found. In the case of JSON requests, it may also happen if the URL path is not a correct REST path.
For publish and pull operations, the propagation of an object creation may take a few seconds.
The client can retry the operation if this is an object that was just created. Otherwise the client must create the resources.
PERMISSION_DENIED
403
The client does not have permission to perform the operation on the resource; or the
resource does not exist, but the client does not have list permission on the parent resource
(i.e., on the project).
Correct the permission policies. Verify that the name of the resource is correct.
RESOURCE_EXHAUSTED
429
This error indicates that the quota for the cloud project has been exceeded, or that there are too many concurrent requests from the client.
See the error message for details. Review the current quotas , and request additional quota if necessary. The client can retry with exponential backoff if this is a transient spike in traffic.
Finally, make sure that the quota is being counted against the intended project.
For more discussion of this topic, see Project usage attribution .
UNAUTHENTICATED
401
The client is not authenticated properly.
The client cannot retry. Fix the Pub/Sub client authentication .
UNAVAILABLE
503
The service was unable to process a request.
This is most likely a transient condition and may be corrected by retrying with exponential backoff.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
