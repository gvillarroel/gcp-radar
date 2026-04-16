---
title: "Access Context Manager API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/reference/rest
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
REST Resource: v1alpha.accessPolicies
REST Resource: v1alpha.accessPolicies.accessLevels
REST Resource: v1alpha.accessPolicies.authorizedOrgsDescs
REST Resource: v1alpha.accessPolicies.servicePerimeters
REST Resource: v1alpha.operations
REST Resource: v1alpha.organizations.gcpUserAccessBindings
REST Resource: v1alpha.services
REST Resource: v1.accessPolicies
REST Resource: v1.accessPolicies.accessLevels
REST Resource: v1.accessPolicies.authorizedOrgsDescs
REST Resource: v1.accessPolicies.servicePerimeters
REST Resource: v1.operations
REST Resource: v1.organizations.gcpUserAccessBindings
REST Resource: v1.services
Service: accesscontextmanager.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://accesscontextmanager.googleapis.com/$discovery/rest?version=v1
https://accesscontextmanager.googleapis.com/$discovery/rest?version=v1alpha
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://accesscontextmanager.googleapis.com
REST Resource: v1alpha.accessPolicies
Methods
create
POST /v1alpha/accessPolicies
Creates an access policy.
delete
DELETE /v1alpha/{name=accessPolicies/*}
Deletes an access policy based on the resource name.
get
GET /v1alpha/{name=accessPolicies/*}
Returns an access policy based on the name.
getIamPolicy
POST /v1alpha/{resource=accessPolicies/*}:getIamPolicy
Gets the IAM policy for the specified Access Context Manager access policy .
list
GET /v1alpha/accessPolicies
Lists all access policies in an organization.
patch
PATCH /v1alpha/{policy.name=accessPolicies/*}
Updates an access policy .
setIamPolicy
POST /v1alpha/{resource=accessPolicies/*}:setIamPolicy
Sets the IAM policy for the specified Access Context Manager access policy .
testIamPermissions
POST /v1alpha/{resource=accessPolicies/*}:testIamPermissions
Returns the IAM permissions that the caller has on the specified Access Context Manager resource.
REST Resource: v1alpha.accessPolicies.accessLevels
Methods
create
POST /v1alpha/{parent=accessPolicies/*}/accessLevels
Creates an access level .
delete
DELETE /v1alpha/{name=accessPolicies/*/accessLevels/*}
Deletes an access level based on the resource name.
get
GET /v1alpha/{name=accessPolicies/*/accessLevels/*}
Gets an access level based on the resource name.
list
GET /v1alpha/{parent=accessPolicies/*}/accessLevels
Lists all access levels for an access policy.
patch
PATCH /v1alpha/{accessLevel.name=accessPolicies/*/accessLevels/*}
Updates an access level .
replaceAll
POST /v1alpha/{parent=accessPolicies/*}/accessLevels:replaceAll
Replaces all existing access levels in an access policy with the access levels provided.
testIamPermissions
POST /v1alpha/{resource=accessPolicies/*/accessLevels/*}:testIamPermissions
Returns the IAM permissions that the caller has on the specified Access Context Manager resource.
REST Resource: v1alpha.accessPolicies.authorizedOrgsDescs
Methods
create
POST /v1alpha/{parent=accessPolicies/*}/authorizedOrgsDescs
Creates an authorized orgs desc .
delete
DELETE /v1alpha/{name=accessPolicies/*/authorizedOrgsDescs/*}
Deletes an authorized orgs desc based on the resource name.
get
GET /v1alpha/{name=accessPolicies/*/authorizedOrgsDescs/*}
Gets an authorized orgs desc based on the resource name.
list
GET /v1alpha/{parent=accessPolicies/*}/authorizedOrgsDescs
Lists all authorized orgs descs for an access policy.
patch
PATCH /v1alpha/{authorizedOrgsDesc.name=accessPolicies/*/authorizedOrgsDescs/*}
Updates an authorized orgs desc .
REST Resource: v1alpha.accessPolicies.servicePerimeters
Methods
commit
POST /v1alpha/{parent=accessPolicies/*}/servicePerimeters:commit
Commits the dry-run specification for all the service perimeters in an access policy .
create
POST /v1alpha/{parent=accessPolicies/*}/servicePerimeters
Creates a service perimeter .
delete
DELETE /v1alpha/{name=accessPolicies/*/servicePerimeters/*}
Deletes a service perimeter based on the resource name.
get
GET /v1alpha/{name=accessPolicies/*/servicePerimeters/*}
Gets a service perimeter based on the resource name.
list
GET /v1alpha/{parent=accessPolicies/*}/servicePerimeters
Lists all service perimeters for an access policy.
patch
PATCH /v1alpha/{servicePerimeter.name=accessPolicies/*/servicePerimeters/*}
Updates a service perimeter .
replaceAll
POST /v1alpha/{parent=accessPolicies/*}/servicePerimeters:replaceAll
Replace all existing service perimeters in an access policy with the service perimeters provided.
testIamPermissions
POST /v1alpha/{resource=accessPolicies/*/servicePerimeters/*}:testIamPermissions
Returns the IAM permissions that the caller has on the specified Access Context Manager resource.
REST Resource: v1alpha.operations
Methods
get
GET /v1alpha/{name=operations/**}
Gets the latest state of a long-running operation.
REST Resource: v1alpha.organizations.gcpUserAccessBindings
Methods
create
POST /v1alpha/{parent=organizations/*}/gcpUserAccessBindings
Creates a GcpUserAccessBinding .
delete
DELETE /v1alpha/{name=organizations/*/gcpUserAccessBindings/*}
Deletes a GcpUserAccessBinding .
get
GET /v1alpha/{name=organizations/*/gcpUserAccessBindings/*}
Gets the GcpUserAccessBinding with the given name.
list
GET /v1alpha/{parent=organizations/*}/gcpUserAccessBindings
Lists all GcpUserAccessBindings for a Google Cloud organization.
patch
PATCH /v1alpha/{gcpUserAccessBinding.name=organizations/*/gcpUserAccessBindings/*}
Updates a GcpUserAccessBinding .
REST Resource: v1alpha.services
Methods
get
GET /v1alpha/services/{name}
Get a VPS-SC Supported Service by name.
list
GET /v1alpha/services
Lists all VPC-SC supported services .
REST Resource: v1.accessPolicies
Methods
create
POST /v1/accessPolicies
Creates an access policy.
delete
DELETE /v1/{name=accessPolicies/*}
Deletes an access policy based on the resource name.
get
GET /v1/{name=accessPolicies/*}
Returns an access policy based on the name.
getIamPolicy
POST /v1/{resource=accessPolicies/*}:getIamPolicy
Gets the IAM policy for the specified Access Context Manager access policy .
list
GET /v1/accessPolicies
Lists all access policies in an organization.
patch
PATCH /v1/{policy.name=accessPolicies/*}
Updates an access policy .
setIamPolicy
POST /v1/{resource=accessPolicies/*}:setIamPolicy
Sets the IAM policy for the specified Access Context Manager access policy .
testIamPermissions
POST /v1/{resource=accessPolicies/*}:testIamPermissions
Returns the IAM permissions that the caller has on the specified Access Context Manager resource.
REST Resource: v1.accessPolicies.accessLevels
Methods
create
POST /v1/{parent=accessPolicies/*}/accessLevels
Creates an access level .
delete
DELETE /v1/{name=accessPolicies/*/accessLevels/*}
Deletes an access level based on the resource name.
get
GET /v1/{name=accessPolicies/*/accessLevels/*}
Gets an access level based on the resource name.
list
GET /v1/{parent=accessPolicies/*}/accessLevels
Lists all access levels for an access policy.
patch
PATCH /v1/{accessLevel.name=accessPolicies/*/accessLevels/*}
Updates an access level .
replaceAll
POST /v1/{parent=accessPolicies/*}/accessLevels:replaceAll
Replaces all existing access levels in an access policy with the access levels provided.
testIamPermissions
POST /v1/{resource=accessPolicies/*/accessLevels/*}:testIamPermissions
Returns the IAM permissions that the caller has on the specified Access Context Manager resource.
REST Resource: v1.accessPolicies.authorizedOrgsDescs
Methods
create
POST /v1/{parent=accessPolicies/*}/authorizedOrgsDescs
Creates an authorized orgs desc .
delete
DELETE /v1/{name=accessPolicies/*/authorizedOrgsDescs/*}
Deletes an authorized orgs desc based on the resource name.
get
GET /v1/{name=accessPolicies/*/authorizedOrgsDescs/*}
Gets an authorized orgs desc based on the resource name.
list
GET /v1/{parent=accessPolicies/*}/authorizedOrgsDescs
Lists all authorized orgs descs for an access policy.
patch
PATCH /v1/{authorizedOrgsDesc.name=accessPolicies/*/authorizedOrgsDescs/*}
Updates an authorized orgs desc .
REST Resource: v1.accessPolicies.servicePerimeters
Methods
commit
POST /v1/{parent=accessPolicies/*}/servicePerimeters:commit
Commits the dry-run specification for all the service perimeters in an access policy .
create
POST /v1/{parent=accessPolicies/*}/servicePerimeters
Creates a service perimeter .
delete
DELETE /v1/{name=accessPolicies/*/servicePerimeters/*}
Deletes a service perimeter based on the resource name.
get
GET /v1/{name=accessPolicies/*/servicePerimeters/*}
Gets a service perimeter based on the resource name.
list
GET /v1/{parent=accessPolicies/*}/servicePerimeters
Lists all service perimeters for an access policy.
patch
PATCH /v1/{servicePerimeter.name=accessPolicies/*/servicePerimeters/*}
Updates a service perimeter .
replaceAll
POST /v1/{parent=accessPolicies/*}/servicePerimeters:replaceAll
Replace all existing service perimeters in an access policy with the service perimeters provided.
testIamPermissions
POST /v1/{resource=accessPolicies/*/servicePerimeters/*}:testIamPermissions
Returns the IAM permissions that the caller has on the specified Access Context Manager resource.
REST Resource: v1.operations
Methods
cancel
POST /v1/{name=operations/**}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=operations/**}
Deletes a long-running operation.
get
GET /v1/{name=operations/**}
Gets the latest state of a long-running operation.
list
GET /v1/{name=operations}
Lists operations that match the specified filter in the request.
REST Resource: v1.organizations.gcpUserAccessBindings
Methods
create
POST /v1/{parent=organizations/*}/gcpUserAccessBindings
Creates a GcpUserAccessBinding .
delete
DELETE /v1/{name=organizations/*/gcpUserAccessBindings/*}
Deletes a GcpUserAccessBinding .
get
GET /v1/{name=organizations/*/gcpUserAccessBindings/*}
Gets the GcpUserAccessBinding with the given name.
list
GET /v1/{parent=organizations/*}/gcpUserAccessBindings
Lists all GcpUserAccessBindings for a Google Cloud organization.
patch
PATCH /v1/{gcpUserAccessBinding.name=organizations/*/gcpUserAccessBindings/*}
Updates a GcpUserAccessBinding .
REST Resource: v1.services
Methods
get
GET /v1/services/{name}
Returns a VPC-SC supported service based on the service name.
list
GET /v1/services
Lists all VPC-SC supported services .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-01 UTC."],[],[]]
