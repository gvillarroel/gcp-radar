---
title: "Binary Authorization API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/reference/rest
  title: "Binary Authorization API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Binary Authorization
Reference
Send feedback
Binary Authorization API
Stay organized with collections
Save and categorize content based on your preferences.
The management interface for Binary Authorization, a service that provides policy-based deployment validation and control for images deployed to Google Kubernetes Engine (GKE), Anthos Service Mesh, Anthos Clusters, and Cloud Run.
REST Resource: v1beta1.projects
REST Resource: v1beta1.projects.attestors
REST Resource: v1beta1.projects.policy
REST Resource: v1beta1.systempolicy
REST Resource: v1alpha2.projects
REST Resource: v1alpha2.projects.attestors
REST Resource: v1alpha2.projects.attestors.attestations
REST Resource: v1alpha2.projects.continuousValidationConfig
REST Resource: v1alpha2.projects.policy
REST Resource: v1alpha2.systempolicy
REST Resource: v1.projects
REST Resource: v1.projects.attestors
REST Resource: v1.projects.platforms.gke.policies
REST Resource: v1.projects.platforms.policies
REST Resource: v1.projects.policy
REST Resource: v1.systempolicy
Service: binaryauthorization.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://binaryauthorization.googleapis.com/$discovery/rest?version=v1
https://binaryauthorization.googleapis.com/$discovery/rest?version=v1beta1
https://binaryauthorization.googleapis.com/$discovery/rest?version=v1alpha2
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://binaryauthorization.googleapis.com
REST Resource: v1beta1.projects
Methods
getPolicy
GET /v1beta1/{name=projects/*/policy}
A policy specifies the attestors that must attest to a container image, before the project is allowed to deploy that image.
updatePolicy
PUT /v1beta1/{policy.name=projects/*/policy}
Creates or updates a project's policy , and returns a copy of the new policy .
REST Resource: v1beta1.projects.attestors
Methods
create
POST /v1beta1/{parent=projects/*}/attestors
Creates an attestor , and returns a copy of the new attestor .
delete
DELETE /v1beta1/{name=projects/*/attestors/*}
Deletes an attestor .
get
GET /v1beta1/{name=projects/*/attestors/*}
Gets an attestor .
getIamPolicy
GET /v1beta1/{resource=projects/*/attestors/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta1/{parent=projects/*}/attestors
Lists attestors .
setIamPolicy
POST /v1beta1/{resource=projects/*/attestors/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta1/{resource=projects/*/attestors/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /v1beta1/{attestor.name=projects/*/attestors/*}
Updates an attestor .
validateAttestationOccurrence
POST /v1beta1/{attestor=projects/*/attestors/*}:validateAttestationOccurrence
Returns whether the given Attestation for the given image URI was signed by the given Attestor
REST Resource: v1beta1.projects.policy
Methods
getIamPolicy
GET /v1beta1/{resource=projects/*/policy}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1beta1/{resource=projects/*/policy}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta1/{resource=projects/*/policy}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta1.systempolicy
Methods
getPolicy
GET /v1beta1/{name=locations/*/policy}
Gets the current system policy in the specified location.
REST Resource: v1alpha2.projects
Methods
getContinuousValidationConfig (deprecated)
GET /v1alpha2/{name=projects/*/continuousValidationConfig}
Gets the continuous validation config for the project.
getPolicy
GET /v1alpha2/{name=projects/*/policy}
A policy specifies the attestors that must attest to a container image, before the project is allowed to deploy that image.
updateContinuousValidationConfig (deprecated)
PUT /v1alpha2/{config.name=projects/*/continuousValidationConfig}
Updates a project's continuous validation config , and returns a copy of the new config.
updatePolicy
PUT /v1alpha2/{policy.name=projects/*/policy}
Creates or updates a project's policy , and returns a copy of the new policy .
REST Resource: v1alpha2.projects.attestors
Methods
create
POST /v1alpha2/{parent=projects/*}/attestors
Creates an attestor , and returns a copy of the new attestor .
delete
DELETE /v1alpha2/{name=projects/*/attestors/*}
Deletes an attestor .
get
GET /v1alpha2/{name=projects/*/attestors/*}
Gets an attestor .
getIamPolicy
GET /v1alpha2/{resource=projects/*/attestors/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1alpha2/{parent=projects/*}/attestors
Lists attestors .
setIamPolicy
POST /v1alpha2/{resource=projects/*/attestors/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha2/{resource=projects/*/attestors/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /v1alpha2/{attestor.name=projects/*/attestors/*}
Updates an attestor .
validateAttestationOccurrence
POST /v1alpha2/{attestor=projects/*/attestors/*}:validateAttestationOccurrence
Returns whether the given Attestation for the given image URI was signed by the given Attestor
REST Resource: v1alpha2.projects.attestors.attestations
Methods
testIamPermissions
POST /v1alpha2/{resource=projects/*/attestors/*/attestations/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha2.projects.continuousValidationConfig
Methods
getIamPolicy
GET /v1alpha2/{resource=projects/*/continuousValidationConfig}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1alpha2/{resource=projects/*/continuousValidationConfig}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha2/{resource=projects/*/continuousValidationConfig}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha2.projects.policy
Methods
getIamPolicy
GET /v1alpha2/{resource=projects/*/policy}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1alpha2/{resource=projects/*/policy}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha2/{resource=projects/*/policy}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha2.systempolicy
Methods
getPolicy
GET /v1alpha2/{name=locations/*/policy}
Gets the current system policy in the specified location.
REST Resource: v1.projects
Methods
getPolicy
GET /v1/{name=projects/*/policy}
A policy specifies the attestors that must attest to a container image, before the project is allowed to deploy that image.
updatePolicy
PUT /v1/{policy.name=projects/*/policy}
Creates or updates a project's policy , and returns a copy of the new policy .
REST Resource: v1.projects.attestors
Methods
create
POST /v1/{parent=projects/*}/attestors
Creates an attestor , and returns a copy of the new attestor .
delete
DELETE /v1/{name=projects/*/attestors/*}
Deletes an attestor .
get
GET /v1/{name=projects/*/attestors/*}
Gets an attestor .
getIamPolicy
GET /v1/{resource=projects/*/attestors/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*}/attestors
Lists attestors .
setIamPolicy
POST /v1/{resource=projects/*/attestors/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/attestors/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /v1/{attestor.name=projects/*/attestors/*}
Updates an attestor .
validateAttestationOccurrence
POST /v1/{attestor=projects/*/attestors/*}:validateAttestationOccurrence
Returns whether the given Attestation for the given image URI was signed by the given Attestor
REST Resource: v1.projects.platforms.gke.policies
Methods
evaluate
POST /v1/{name=projects/*/platforms/gke/policies/*}:evaluate
Evaluates a Kubernetes object versus a GKE platform policy .
REST Resource: v1.projects.platforms.policies
Methods
create
POST /v1/{parent=projects/*/platforms/*}/policies
Creates a platform policy , and returns a copy of it.
delete
DELETE /v1/{name=projects/*/platforms/*/policies/*}
Deletes a platform policy .
get
GET /v1/{name=projects/*/platforms/*/policies/*}
Gets a platform policy .
list
GET /v1/{parent=projects/*/platforms/*}/policies
Lists platform policies owned by a project in the specified platform.
replacePlatformPolicy
PUT /v1/{policy.name=projects/*/platforms/*/policies/*}
Replaces a platform policy .
REST Resource: v1.projects.policy
Methods
getIamPolicy
GET /v1/{resource=projects/*/policy}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1/{resource=projects/*/policy}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/policy}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.systempolicy
Methods
getPolicy
GET /v1/{name=locations/*/policy}
Gets the current system policy in the specified location.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
