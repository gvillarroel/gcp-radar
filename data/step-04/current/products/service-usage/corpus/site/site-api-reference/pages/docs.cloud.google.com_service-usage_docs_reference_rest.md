---
title: "Service Usage API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/reference/rest
  title: "Service Usage API \_|\_ Google Cloud Documentation"
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
Service Usage API
Stay organized with collections
Save and categorize content based on your preferences.
Enables services that service consumers want to use on Google Cloud Platform, lists the available or enabled services, or disables services that service consumers no longer use.
REST Resource: v2beta
REST Resource: v2beta.consumerPolicies
REST Resource: v2beta.mcpPolicies
REST Resource: v2beta.operations
REST Resource: v2beta.services
REST Resource: v2beta.services.groups
REST Resource: v2beta.services.groups.expandedMembers
REST Resource: v2beta.services.groups.members
REST Resource: v2beta.sharedServices
REST Resource: v1beta1.operations
REST Resource: v1beta1.services
REST Resource: v1beta1.services.consumerQuotaMetrics
REST Resource: v1beta1.services.consumerQuotaMetrics.limits
REST Resource: v1beta1.services.consumerQuotaMetrics.limits.adminOverrides
REST Resource:
v1beta1.services.consumerQuotaMetrics.limits.consumerOverrides
REST Resource: v1.operations
REST Resource: v1.services
Service: serviceusage.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://serviceusage.googleapis.com/$discovery/rest?version=v2beta
https://serviceusage.googleapis.com/$discovery/rest?version=v1
https://serviceusage.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://serviceusage.googleapis.com
REST Resource: v2beta
Methods
getEffectiveMcpPolicy
GET /v2beta/{name=*/*/effectiveMcpPolicy}
Get effective MCP consumer policy for a resource, which contains enable rule information of MCP consumer policies from the resource hierarchy.
getEffectivePolicy
GET /v2beta/{name=*/*/effectivePolicy}
Get effective consumer policy for a resource, which contains enable rule information of consumer policies from the resource hierarchy.
testEnabled
POST /v2beta/{name=*/*}:testEnabled
Tests a value against the result of merging consumer policies in the resource hierarchy.
testMcpEnabled
POST /v2beta/{name=*/*}:testMcpEnabled
Tests a value against the result of merging MCP consumer policies in the resource hierarchy.
REST Resource: v2beta.consumerPolicies
Methods
analyze
POST /v2beta/{proposedPolicy.name=*/*/consumerPolicies/*}:analyze
Analyze a consumer policy change without kicking off the actual update.
get
GET /v2beta/{name=*/*/consumerPolicies/*}
Get the consumer policy of a resource.
patch
PATCH /v2beta/{consumerPolicy.name=*/*/consumerPolicies/*}
Update the consumer policy of a resource.
REST Resource: v2beta.mcpPolicies
Methods
get
GET /v2beta/{name=*/*/mcpPolicies/*}
Get the MCP consumer policy of a resource.
patch
PATCH /v2beta/{mcpPolicy.name=*/*/mcpPolicies/*}
Update the MCP consumer policy of a resource.
REST Resource: v2beta.operations
Methods
get
GET /v2beta/{name=operations/*}
Gets the latest state of a long-running operation.
list
GET /v2beta/operations
Lists operations that match the specified filter in the request.
REST Resource: v2beta.services
Methods
batchGet
GET /v2beta/{parent=*/*}/services:batchGet
Get the details of a collection of services.
get
GET /v2beta/{name=*/*/services/*}
Get the details of a service.
list
GET /v2beta/services
List public services.
REST Resource: v2beta.services.groups
Methods
list
GET /v2beta/{parent=*/*/services/*}/groups
List service groups owned by the given service.
REST Resource: v2beta.services.groups.expandedMembers
Methods
list
GET /v2beta/{parent=*/*/services/*/groups/*}/expandedMembers
List the expanded members that belong to a given service group or transitively to any of the groups that are members of the service group.
REST Resource: v2beta.services.groups.members
Methods
list
GET /v2beta/{parent=*/*/services/*/groups/*}/members
List members for the given service group.
REST Resource: v2beta.sharedServices
Methods
list
GET /v2beta/{parent=*/*}/sharedServices
List shared services to the given resource.
REST Resource: v1beta1.operations
Methods
get
GET /v1beta1/{name=operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta1/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta1.services
Methods
batchEnable (deprecated)
POST /v1beta1/{parent=*/*}/services:batchEnable
Enables multiple services on a project.
disable (deprecated)
POST /v1beta1/{name=*/*/services/*}:disable
Disables a service so that it can no longer be used with a project.
enable (deprecated)
POST /v1beta1/{name=*/*/services/*}:enable
Enables a service so that it can be used with a project.
generateServiceIdentity
POST /v1beta1/{parent=*/*/services/*}:generateServiceIdentity
Generates service identity for service.
get (deprecated)
GET /v1beta1/{name=*/*/services/*}
Returns the service configuration and enabled state for a given service.
list (deprecated)
GET /v1beta1/{parent=*/*}/services
Lists all services available to the specified project, and the current state of those services with respect to the project.
REST Resource: v1beta1.services.consumerQuotaMetrics
Methods
get
GET /v1beta1/{name=*/*/services/*/consumerQuotaMetrics/*}
Retrieves a summary of quota information for a specific quota metric
importAdminOverrides
POST /v1beta1/{parent=*/*/services/*}/consumerQuotaMetrics:importAdminOverrides
Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits.
importConsumerOverrides
POST /v1beta1/{parent=*/*/services/*}/consumerQuotaMetrics:importConsumerOverrides
Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits.
list
GET /v1beta1/{parent=*/*/services/*}/consumerQuotaMetrics
Retrieves a summary of all quota information visible to the service consumer, organized by service metric.
REST Resource: v1beta1.services.consumerQuotaMetrics.limits
Methods
get
GET /v1beta1/{name=*/*/services/*/consumerQuotaMetrics/*/limits/*}
Retrieves a summary of quota information for a specific quota limit.
REST Resource: v1beta1.services.consumerQuotaMetrics.limits.adminOverrides
Methods
create
POST /v1beta1/{parent=*/*/services/*/consumerQuotaMetrics/*/limits/*}/adminOverrides
Creates an admin override.
delete
DELETE /v1beta1/{name=*/*/services/*/consumerQuotaMetrics/*/limits/*/adminOverrides/*}
Deletes an admin override.
list
GET /v1beta1/{parent=*/*/services/*/consumerQuotaMetrics/*/limits/*}/adminOverrides
Lists all admin overrides on this limit.
patch
PATCH /v1beta1/{name=*/*/services/*/consumerQuotaMetrics/*/limits/*/adminOverrides/*}
Updates an admin override.
REST Resource: v1beta1.services.consumerQuotaMetrics.limits.consumerOverrides
Methods
create
POST /v1beta1/{parent=*/*/services/*/consumerQuotaMetrics/*/limits/*}/consumerOverrides
Creates a consumer override.
delete
DELETE /v1beta1/{name=*/*/services/*/consumerQuotaMetrics/*/limits/*/consumerOverrides/*}
Deletes a consumer override.
list
GET /v1beta1/{parent=*/*/services/*/consumerQuotaMetrics/*/limits/*}/consumerOverrides
Lists all consumer overrides on this limit.
patch
PATCH /v1beta1/{name=*/*/services/*/consumerQuotaMetrics/*/limits/*/consumerOverrides/*}
Updates a consumer override.
REST Resource: v1.operations
Methods
cancel
POST /v1/{name=operations/**}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=operations/**}
Deletes a long-running operation.
get
GET /v1/{name=operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.services
Methods
batchEnable
POST /v1/{parent=*/*}/services:batchEnable
Enable multiple services on a project.
batchGet
GET /v1/{parent=*/*}/services:batchGet
Returns the service configurations and enabled states for a given list of services.
disable
POST /v1/{name=*/*/services/*}:disable
Disable a service so that it can no longer be used with a project.
enable
POST /v1/{name=*/*/services/*}:enable
Enable a service so that it can be used with a project.
get
GET /v1/{name=*/*/services/*}
Returns the service configuration and enabled state for a given service.
list
GET /v1/{parent=*/*}/services
List all services available to the specified project, and the current state of those services with respect to the project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-13 UTC."],[],[]]
