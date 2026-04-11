---
title: "Service Management API \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rpc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-infrastructure/docs
source_metadata:
  url: https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rpc
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
Service: servicemanagement.googleapis.com
The Service name servicemanagement.googleapis.com is needed to create RPC client stubs.
google.api.servicemanagement.v1.ServiceManager
Methods
CreateService
Creates a new managed service.
CreateServiceConfig
Creates a new service configuration (version) for a managed service.
CreateServiceRollout
Creates a new service configuration rollout.
DeleteService
Deletes a managed service.
DisableService (deprecated)
Disables a service for a project, so it can no longer be be used for the project.
EnableService (deprecated)
Enables a service for a project, so it can be used for the project.
GenerateConfigReport
Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new_value
If GenerateConfigReportRequest.old_value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new_value and GenerateConfigReportRequest.old_value.
GetService
Gets a managed service.
GetServiceConfig
Gets a service configuration (version) for a managed service.
GetServiceRollout
Gets a service configuration rollout .
ListServiceConfigs
Lists the history of the service configuration for a managed service, from the newest to the oldest.
ListServiceRollouts
Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.
ListServices
Lists managed services.
SubmitConfigSource
Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification).
UndeleteService
Revives a previously deleted managed service.
google.iam.v1.IAMPolicy
Methods
GetIamPolicy
Gets the access control policy for a resource.
SetIamPolicy
Sets the access control policy on the specified resource.
TestIamPermissions
Returns permissions that a caller has on the specified resource.
google.longrunning.Operations
Methods
GetOperation
Gets the latest state of a long-running operation.
ListOperations
Lists service operations that match the specified filter in the request.
WaitOperation
Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
