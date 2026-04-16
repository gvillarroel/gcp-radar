---
title: "Access Context Manager API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/reference/rpc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/reference/rpc
  title: "Access Context Manager API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Access Context Manager
Reference
Send feedback
Access Context Manager API
Stay organized with collections
Save and categorize content based on your preferences.
An API for setting attribute based access control to requests to Google Cloud services. Warning: Do not mix v1alpha and v1 API usage in the same access policy. The v1alpha API supports new Access Context Manager features, which may have different attributes or behaviors that are not supported by v1. The practice of mixed API usage within a policy may result in the inability to update that policy, including any access levels or service perimeters belonging to it. It is not recommended to use both v1 and v1alpha for modifying policies with critical service perimeters. Modifications using v1alpha should be limited to policies with non-production/non-critical service perimeters.
Service: accesscontextmanager.googleapis.com
The Service name accesscontextmanager.googleapis.com is needed to create RPC client stubs.
google.identity.accesscontextmanager.v1.AccessContextManager
Methods
CommitServicePerimeters
Commits the dry-run specification for all the service perimeters in an access policy .
CreateAccessLevel
Creates an access level .
CreateAccessPolicy
Creates an access policy.
CreateAuthorizedOrgsDesc
Creates an authorized orgs desc .
CreateGcpUserAccessBinding
Creates a GcpUserAccessBinding .
CreateServicePerimeter
Creates a service perimeter .
DeleteAccessLevel
Deletes an access level based on the resource name.
DeleteAccessPolicy
Deletes an access policy based on the resource name.
DeleteAuthorizedOrgsDesc
Deletes an authorized orgs desc based on the resource name.
DeleteGcpUserAccessBinding
Deletes a GcpUserAccessBinding .
DeleteServicePerimeter
Deletes a service perimeter based on the resource name.
GetAccessLevel
Gets an access level based on the resource name.
GetAccessPolicy
Returns an access policy based on the name.
GetAuthorizedOrgsDesc
Gets an authorized orgs desc based on the resource name.
GetGcpUserAccessBinding
Gets the GcpUserAccessBinding with the given name.
GetIamPolicy
Gets the IAM policy for the specified Access Context Manager access policy .
GetServicePerimeter
Gets a service perimeter based on the resource name.
GetSupportedService
Returns a VPC-SC supported service based on the service name.
ListAccessLevels
Lists all access levels for an access policy.
ListAccessPolicies
Lists all access policies in an organization.
ListAuthorizedOrgsDescs
Lists all authorized orgs descs for an access policy.
ListGcpUserAccessBindings
Lists all GcpUserAccessBindings for a Google Cloud organization.
ListServicePerimeters
Lists all service perimeters for an access policy.
ListSupportedServices
Lists all VPC-SC supported services .
ReplaceAccessLevels
Replaces all existing access levels in an access policy with the access levels provided.
ReplaceServicePerimeters
Replace all existing service perimeters in an access policy with the service perimeters provided.
SetIamPolicy
Sets the IAM policy for the specified Access Context Manager access policy .
TestIamPermissions
Returns the IAM permissions that the caller has on the specified Access Context Manager resource.
UpdateAccessLevel
Updates an access level .
UpdateAccessPolicy
Updates an access policy .
UpdateAuthorizedOrgsDesc
Updates an authorized orgs desc .
UpdateGcpUserAccessBinding
Updates a GcpUserAccessBinding .
UpdateServicePerimeter
Updates a service perimeter .
google.identity.accesscontextmanager.v1alpha.AccessContextManager
Methods
CommitServicePerimeters
Commits the dry-run specification for all the service perimeters in an access policy .
CreateAccessLevel
Creates an access level .
CreateAccessPolicy
Creates an access policy.
CreateAuthorizedOrgsDesc
Creates an authorized orgs desc .
CreateGcpUserAccessBinding
Creates a GcpUserAccessBinding .
CreateServicePerimeter
Creates a service perimeter .
DeleteAccessLevel
Deletes an access level based on the resource name.
DeleteAccessPolicy
Deletes an access policy based on the resource name.
DeleteAuthorizedOrgsDesc
Deletes an authorized orgs desc based on the resource name.
DeleteGcpUserAccessBinding
Deletes a GcpUserAccessBinding .
DeleteServicePerimeter
Deletes a service perimeter based on the resource name.
GetAccessLevel
Gets an access level based on the resource name.
GetAccessPolicy
Returns an access policy based on the name.
GetAuthorizedOrgsDesc
Gets an authorized orgs desc based on the resource name.
GetGcpUserAccessBinding
Gets the GcpUserAccessBinding with the given name.
GetIamPolicy
Gets the IAM policy for the specified Access Context Manager access policy .
GetServicePerimeter
Gets a service perimeter based on the resource name.
GetSupportedService
Get a VPS-SC Supported Service by name.
ListAccessLevels
Lists all access levels for an access policy.
ListAccessPolicies
Lists all access policies in an organization.
ListAuthorizedOrgsDescs
Lists all authorized orgs descs for an access policy.
ListGcpUserAccessBindings
Lists all GcpUserAccessBindings for a Google Cloud organization.
ListServicePerimeters
Lists all service perimeters for an access policy.
ListSupportedServices
Lists all VPC-SC supported services .
ReplaceAccessLevels
Replaces all existing access levels in an access policy with the access levels provided.
ReplaceServicePerimeters
Replace all existing service perimeters in an access policy with the service perimeters provided.
SetIamPolicy
Sets the IAM policy for the specified Access Context Manager access policy .
TestIamPermissions
Returns the IAM permissions that the caller has on the specified Access Context Manager resource.
UpdateAccessLevel
Updates an access level .
UpdateAccessPolicy
Updates an access policy .
UpdateAuthorizedOrgsDesc
Updates an authorized orgs desc .
UpdateGcpUserAccessBinding
Updates a GcpUserAccessBinding .
UpdateServicePerimeter
Updates a service perimeter .
google.longrunning.Operations
Methods
CancelOperation
Starts asynchronous cancellation on a long-running operation.
DeleteOperation
Deletes a long-running operation.
GetOperation
Gets the latest state of a long-running operation.
ListOperations
Lists operations that match the specified filter in the request.
WaitOperation
Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-01 UTC."],[],[]]
