---
title: "Method: services.disable \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/reference/rest/v1/services/disable
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/reference/rest/v1/services/disable
  title: "Method: services.disable \_|\_ Service Usage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Service Usage
Reference
Send feedback
Method: services.disable
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
CheckIfServiceHasUsage
Disable a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks.
It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a FAILED_PRECONDITION status if the target service is not currently enabled.
HTTP request
POST https://serviceusage.googleapis.com/v1/{name=*/*/services/*}:disable
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Name of the consumer and service to disable the service on.
The enable and disable methods currently only support projects.
An example name would be: projects/123/services/serviceusage.googleapis.com where 123 is the project number.
Authorization requires the following IAM permission on the specified resource name :
serviceusage.services.disable
Request body
The request body contains data with the following structure:
JSON representation
{
"disableDependentServices" : boolean ,
"checkIfServiceHasUsage" : enum ( CheckIfServiceHasUsage )
}
Fields
disableDependentServices
boolean
Indicates if services that are enabled and which depend on this service should also be disabled. If not set, an error will be generated if any enabled services depend on the service to be disabled. When set, the service, and any enabled services that depend on it, will be disabled together.
checkIfServiceHasUsage
enum ( CheckIfServiceHasUsage )
Defines the behavior for checking service usage when disabling a service.
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/service.management
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
CheckIfServiceHasUsage
Enum to determine if service usage should be checked when disabling a service.
Enums
CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED
When unset, the default behavior is used, which is SKIP.
SKIP
If set, skip checking service usage when disabling a service.
CHECK
If set, service usage is checked when disabling the service. If a service, or its dependents, has usage in the last 30 days, the request returns a FAILED_PRECONDITION error.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-11 UTC."],[],[]]
