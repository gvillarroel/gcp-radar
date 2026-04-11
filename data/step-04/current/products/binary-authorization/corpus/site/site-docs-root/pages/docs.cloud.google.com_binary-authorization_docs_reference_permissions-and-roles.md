---
title: "Permissions and roles \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/reference/permissions-and-roles
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/reference/permissions-and-roles
  title: "Permissions and roles \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
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
Permissions and roles
Stay organized with collections
Save and categorize content based on your preferences.
This page describes permissions used in Binary Authorization.
Warning: If you remove Binary Authorization Service Agent or change its roles,
Binary Authorization fails due to missing permissions.
Required permissions
The following table lists the permissions that the caller must have to call each
API method:
Method
Required Permission(s)
getPolicy
binaryauthorization.policy.get on the requested policy.
updatePolicy
binaryauthorization.policy.update on the policy to update.
policy.getIamPolicy
binaryauthorization.policy.getIamPolicy on the requested policy.
policy.setIamPolicy
binaryauthorization.policy.setIamPolicy on the requested policy.
policy.testIamPermissions
None.
attestors.list
binaryauthorization.attestors.list on the containing Cloud project.
attestors.get
binaryauthorization.attestors.get on the requested attestor.
attestors.create
binaryauthorization.attestors.create on the containing Cloud project.
attestors.delete
binaryauthorization.attestors.delete on the attestor to delete.
attestors.update
binaryauthorization.attestors.update on the attestor to update.
attestors.getIamPolicy
binaryauthorization.attestors.getIamPolicy on the requested attestor.
attestors.setIamPolicy
binaryauthorization.attestors.setIamPolicy on the requested attestor.
attestors.testIamPermissions
None.
continuousValidationConfig.get
binaryauthorization.continuousValidationConfig.get on the requested continuousValidationConfig.
continuousValidationConfig.update
binaryauthorization.continuousValidationConfig.update on the requested continuousValidationConfig.
continuousValidationConfig.getIamPolicy
binaryauthorization.continuousValidationConfig.getIamPolicy on the requested continuousValidationConfig.
continuousValidationConfig.setIamPolicy
binaryauthorization.continuousValidationConfig.setIamPolicy on the requested continuousValidationConfig.
continuousValidationConfig.testIamPermissions
None.
Project types
The following table lists roles and permissions for different types of projects:
Project type
Description
Deployer
A project that manages the Google Kubernetes Engine (GKE)
clusters where your images are deployed, as well as the Binary
Authorization policy that governs deployment.
Image
A project that contains the image(s) to be verified.
Attestor
A project that stores attestor definitions. You can also use
the note project for this purpose.
Note
A project that stores attestor notes for a particular attestor
definition. You can also use the attestor project for this purpose.
Attestation
A project that stores attestations for a particular attestor.
You can also use the attestor project or the image project for this
purpose.
Predefined roles
The following table lists the predefined Binary Authorization IAM roles with
corresponding permissions each role includes. Note that every
permission is applicable to a particular resource type.
Basic roles of Owner ,
Editor and Viewer are available for use on Binary Authorization resources, in
addition to predefined type-specific roles of Admin , Editor and Viewer
for Binary Authorization attestors and policies.
Roles for the policy resource
Role
Includes permission(s):
roles/binaryauthorization.policyViewer
binaryauthorization.policy.get
binaryauthorization.continuousValidationConfig.get
roles/binaryauthorization.policyEditor
All of the roles/binaryauthorization.policyViewer permissions, as well as:
binaryauthorization.policy.update
binaryauthorization.continuousValidationConfig.update
roles/binaryauthorization.policyAdmin
All of the roles/binaryauthorization.policyEditor permissions, as well as:
binaryauthorization.policy.getIamPolicy
binaryauthorization.policy.setIamPolicy
binaryauthorization.continuousValidationConfig.getIamPolicy
binaryauthorization.continuousValidationConfig.setIamPolicy
Roles for the attestor resource
Role
Includes permission(s):
roles/binaryauthorization.attestorsViewer
binaryauthorization.attestors.get
binaryauthorization.attestors.list
roles/binaryauthorization.attestorsVerifier
All of the roles/binaryauthorization.attestorsViewer permissions, as well as:
binaryauthorization.attestors.verifyImageAttested
roles/binaryauthorization.attestorsAdmin
All of the roles/binaryauthorization.attestorsViewer permissions, as well as:
binaryauthorization.attestors.getIamPolicy
binaryauthorization.attestors.setIamPolicy
Note that the roles roles/owner , roles/editor , and
roles/viewer include permissions for other Google Cloud services
as well.
Checking permissions
binaryauthorization.policy.testIamPermissions and
binaryauthorization.attestors.testIamPermissions can be run by any identity.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
