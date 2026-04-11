---
title: "Binary Authorization API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/reference/rpc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/reference/rpc
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
Service: binaryauthorization.googleapis.com
The Service name binaryauthorization.googleapis.com is needed to create RPC client stubs.
google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1
Methods
CreateAttestor
Creates an attestor , and returns a copy of the new attestor .
DeleteAttestor
Deletes an attestor .
GetAttestor
Gets an attestor .
GetPolicy
A policy specifies the attestors that must attest to a container image, before the project is allowed to deploy that image.
ListAttestors
Lists attestors .
UpdateAttestor
Updates an attestor .
UpdatePolicy
Creates or updates a project's policy , and returns a copy of the new policy .
google.cloud.binaryauthorization.v1.PlatformPolicyEvaluationService
Methods
EvaluateGkePolicy
Evaluates a Kubernetes object versus a GKE platform policy .
google.cloud.binaryauthorization.v1.PlatformPolicyManagementService
Methods
CreatePlatformPolicy
Creates a platform policy , and returns a copy of it.
DeletePlatformPolicy
Deletes a platform policy .
GetPlatformPolicy
Gets a platform policy .
ListPlatformPolicies
Lists platform policies owned by a project in the specified platform.
ReplacePlatformPolicy
Replaces a platform policy .
google.cloud.binaryauthorization.v1.SystemPolicyV1
Methods
GetSystemPolicy
Gets the current system policy in the specified location.
google.cloud.binaryauthorization.v1.ValidationHelperV1
Methods
ValidateAttestationOccurrence
Returns whether the given Attestation for the given image URI was signed by the given Attestor
google.cloud.binaryauthorization.v1alpha2.ContinuousValidationManagementServiceV1Alpha2
Deprecated: For more information, see Legacy continuous validation deprecation and shutdown .
Methods
GetContinuousValidationConfig (deprecated)
Gets the continuous validation config for the project.
UpdateContinuousValidationConfig (deprecated)
Updates a project's continuous validation config , and returns a copy of the new config.
google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1
Methods
CreateAttestor
Creates an attestor , and returns a copy of the new attestor .
DeleteAttestor
Deletes an attestor .
GetAttestor
Gets an attestor .
GetPolicy
A policy specifies the attestors that must attest to a container image, before the project is allowed to deploy that image.
ListAttestors
Lists attestors .
UpdateAttestor
Updates an attestor .
UpdatePolicy
Creates or updates a project's policy , and returns a copy of the new policy .
google.cloud.binaryauthorization.v1beta1.SystemPolicyV1Beta1
Methods
GetSystemPolicy
Gets the current system policy in the specified location.
google.iam.v1.IAMPolicy
Methods
GetIamPolicy
Gets the access control policy for a resource.
SetIamPolicy
Sets the access control policy on the specified resource.
TestIamPermissions
Returns permissions that a caller has on the specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
