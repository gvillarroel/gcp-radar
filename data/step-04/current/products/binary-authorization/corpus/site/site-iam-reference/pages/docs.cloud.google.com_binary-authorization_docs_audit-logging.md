---
title: "Binary Authorization audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/multi-project-setup-cli
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/audit-logging
  title: "Binary Authorization audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Binary Authorization
Guides
Send feedback
Binary Authorization audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Binary Authorization. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Binary Authorization audit logs use the service name binaryauthorization.googleapis.com .
Filter for this service:
protoPayload . serviceName = "binaryauthorization.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Binary Authorization generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property value
of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property value
of ADMIN_WRITE generate
Admin Activity audit logs.
API methods in the following list that are marked with (LRO) are long-running operations (LROs).
These methods usually generate two audit log entries: one when the operation starts and
another when it ends. For more information see Audit logs for long-running operations .
Permission type
Methods
ADMIN_READ
google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.GetAttestor google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.GetPolicy google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.ListAttestors google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.GetPlatformPolicy google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.ListPlatformPolicies google.cloud.binaryauthorization.v1.ValidationHelperV1.ValidateAttestationOccurrence google.cloud.binaryauthorization.v1alpha2.ContinuousValidationManagementServiceV1Alpha2.GetContinuousValidationConfig google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.GetAttestor google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.GetPolicy google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.ListAttestors google.iam.v1.IAMPolicy.GetIamPolicy
ADMIN_WRITE
google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.CreateAttestor google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.DeleteAttestor google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.UpdateAttestor google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.UpdatePolicy google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.CreatePlatformPolicy google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.DeletePlatformPolicy google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.ReplacePlatformPolicy google.cloud.binaryauthorization.v1alpha2.ContinuousValidationManagementServiceV1Alpha2.UpdateContinuousValidationConfig google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.CreateAttestor google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.DeleteAttestor google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.UpdateAttestor google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.UpdatePolicy google.iam.v1.IAMPolicy.SetIamPolicy
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Binary Authorization.
google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1
The following audit logs are associated with methods belonging to
google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1 .
CreateAttestor
Method : google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.CreateAttestor
Audit log type : Admin activity
Permissions : binaryauthorization.attestors.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.CreateAttestor"
DeleteAttestor
Method : google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.DeleteAttestor
Audit log type : Admin activity
Permissions : binaryauthorization.attestors.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.DeleteAttestor"
GetAttestor
Method : google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.GetAttestor
Audit log type : Data access
Permissions : binaryauthorization.attestors.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.GetAttestor"
GetPolicy
Method : google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.GetPolicy
Audit log type : Data access
Permissions : binaryauthorization.policy.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.GetPolicy"
ListAttestors
Method : google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.ListAttestors
Audit log type : Data access
Permissions : binaryauthorization.attestors.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.ListAttestors"
UpdateAttestor
Method : google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.UpdateAttestor
Audit log type : Admin activity
Permissions : binaryauthorization.attestors.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.UpdateAttestor"
UpdatePolicy
Method : google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.UpdatePolicy
Audit log type : Admin activity
Permissions : binaryauthorization.attestors.get - ADMIN_READ
binaryauthorization.attestors.list - ADMIN_READ
binaryauthorization.policy.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.UpdatePolicy"
google.cloud.binaryauthorization.v1.PlatformPolicyManagementService
The following audit logs are associated with methods belonging to
google.cloud.binaryauthorization.v1.PlatformPolicyManagementService .
CreatePlatformPolicy
Method : google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.CreatePlatformPolicy
Audit log type : Admin activity
Permissions : binaryauthorization.platformPolicies.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.CreatePlatformPolicy"
DeletePlatformPolicy
Method : google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.DeletePlatformPolicy
Audit log type : Admin activity
Permissions : binaryauthorization.platformPolicies.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.DeletePlatformPolicy"
GetPlatformPolicy
Method : google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.GetPlatformPolicy
Audit log type : Data access
Permissions : binaryauthorization.platformPolicies.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.GetPlatformPolicy"
ListPlatformPolicies
Method : google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.ListPlatformPolicies
Audit log type : Data access
Permissions : binaryauthorization.platformPolicies.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.ListPlatformPolicies"
ReplacePlatformPolicy
Method : google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.ReplacePlatformPolicy
Audit log type : Admin activity
Permissions : binaryauthorization.platformPolicies.replace - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.ReplacePlatformPolicy"
google.cloud.binaryauthorization.v1.ValidationHelperV1
The following audit logs are associated with methods belonging to
google.cloud.binaryauthorization.v1.ValidationHelperV1 .
ValidateAttestationOccurrence
Method : google.cloud.binaryauthorization.v1.ValidationHelperV1.ValidateAttestationOccurrence
Audit log type : Data access
Permissions : binaryauthorization.attestors.verifyImageAttested - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1.ValidationHelperV1.ValidateAttestationOccurrence"
google.cloud.binaryauthorization.v1alpha2.ContinuousValidationManagementServiceV1Alpha2
The following audit logs are associated with methods belonging to
google.cloud.binaryauthorization.v1alpha2.ContinuousValidationManagementServiceV1Alpha2 .
GetContinuousValidationConfig
Method : google.cloud.binaryauthorization.v1alpha2.ContinuousValidationManagementServiceV1Alpha2.GetContinuousValidationConfig
Audit log type : Data access
Permissions : binaryauthorization.continuousValidationConfig.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1alpha2.ContinuousValidationManagementServiceV1Alpha2.GetContinuousValidationConfig"
UpdateContinuousValidationConfig
Method : google.cloud.binaryauthorization.v1alpha2.ContinuousValidationManagementServiceV1Alpha2.UpdateContinuousValidationConfig
Audit log type : Admin activity
Permissions : binaryauthorization.continuousValidationConfig.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1alpha2.ContinuousValidationManagementServiceV1Alpha2.UpdateContinuousValidationConfig"
google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1
The following audit logs are associated with methods belonging to
google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1 .
CreateAttestor
Method : google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.CreateAttestor
Audit log type : Admin activity
Permissions : binaryauthorization.attestors.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.CreateAttestor"
DeleteAttestor
Method : google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.DeleteAttestor
Audit log type : Admin activity
Permissions : binaryauthorization.attestors.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.DeleteAttestor"
GetAttestor
Method : google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.GetAttestor
Audit log type : Data access
Permissions : binaryauthorization.attestors.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.GetAttestor"
GetPolicy
Method : google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.GetPolicy
Audit log type : Data access
Permissions : binaryauthorization.policy.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.GetPolicy"
ListAttestors
Method : google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.ListAttestors
Audit log type : Data access
Permissions : binaryauthorization.attestors.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.ListAttestors"
UpdateAttestor
Method : google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.UpdateAttestor
Audit log type : Admin activity
Permissions : binaryauthorization.attestors.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.UpdateAttestor"
UpdatePolicy
Method : google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.UpdatePolicy
Audit log type : Admin activity
Permissions : binaryauthorization.policy.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.UpdatePolicy"
google.iam.v1.IAMPolicy
The following audit logs are associated with methods belonging to
google.iam.v1.IAMPolicy .
GetIamPolicy
Method : google.iam.v1.IAMPolicy.GetIamPolicy
Audit log type : Data access
Permissions : binaryauthorization.attestors.getIamPolicy - ADMIN_READ
binaryauthorization.policy.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.iam.v1.IAMPolicy.GetIamPolicy"
SetIamPolicy
Method : google.iam.v1.IAMPolicy.SetIamPolicy
Audit log type : Admin activity
Permissions : binaryauthorization.attestors.setIamPolicy - ADMIN_WRITE
binaryauthorization.policy.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.iam.v1.IAMPolicy.SetIamPolicy"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.binaryauthorization.v1.PlatformPolicyEvaluationService.EvaluateGkePolicy
google.cloud.binaryauthorization.v1.SystemPolicyV1.GetSystemPolicy
google.cloud.binaryauthorization.v1beta1.SystemPolicyV1Beta1.GetSystemPolicy
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
