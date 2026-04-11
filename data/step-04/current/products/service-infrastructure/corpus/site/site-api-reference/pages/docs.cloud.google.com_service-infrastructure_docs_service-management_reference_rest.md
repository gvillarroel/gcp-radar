---
title: "Service Management API \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rest
  title: "Service Management API \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Service Infrastructure
Reference
Send feedback
Service Management API
Stay organized with collections
Save and categorize content based on your preferences.
Google Service Management allows service producers to publish their services on Google Cloud Platform so that they can be discovered and used by service consumers.
REST Resource: v1.operations
REST Resource: v1.services
REST Resource: v1.services.configs
REST Resource: v1.services.consumers
REST Resource: v1.services.rollouts
Service: servicemanagement.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://servicemanagement.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://servicemanagement.googleapis.com
REST Resource: v1.operations
Methods
get
GET /v1/{name=operations/**}
Gets the latest state of a long-running operation.
list
GET /v1/operations
Lists service operations that match the specified filter in the request.
REST Resource: v1.services
Methods
create
POST /v1/services
Creates a new managed service.
delete
DELETE /v1/services/{serviceName}
Deletes a managed service.
disable (deprecated)
POST /v1/services/{serviceName}:disable
Disables a service for a project, so it can no longer be be used for the project.
enable (deprecated)
POST /v1/services/{serviceName}:enable
Enables a service for a project, so it can be used for the project.
generateConfigReport
POST /v1/services:generateConfigReport
Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new_value
If GenerateConfigReportRequest.old_value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new_value and GenerateConfigReportRequest.old_value.
get
GET /v1/services/{serviceName}
Gets a managed service.
getConfig
GET /v1/services/{serviceName}/config
Gets a service configuration (version) for a managed service.
getIamPolicy
POST /v1/{resource=services/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/services
Lists managed services.
setIamPolicy
POST /v1/{resource=services/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=services/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
undelete
POST /v1/services/{serviceName}:undelete
Revives a previously deleted managed service.
REST Resource: v1.services.configs
Methods
create
POST /v1/services/{serviceName}/configs
Creates a new service configuration (version) for a managed service.
get
GET /v1/services/{serviceName}/configs/{configId}
Gets a service configuration (version) for a managed service.
list
GET /v1/services/{serviceName}/configs
Lists the history of the service configuration for a managed service, from the newest to the oldest.
submit
POST /v1/services/{serviceName}/configs:submit
Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification).
REST Resource: v1.services.consumers
Methods
getIamPolicy
POST /v1/{resource=services/*/consumers/*}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1/{resource=services/*/consumers/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=services/*/consumers/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.services.rollouts
Methods
create
POST /v1/services/{serviceName}/rollouts
Creates a new service configuration rollout.
get
GET /v1/services/{serviceName}/rollouts/{rolloutId}
Gets a service configuration rollout .
list
GET /v1/services/{serviceName}/rollouts
Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
