---
title: "Functions audit logging \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/monitoring/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs/concepts/iam
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/monitoring/audit-logging
  title: "Functions audit logging \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Functions audit logging
Note: Cloud Functions (2nd gen) is now Cloud Run functions. The information
on this page applies to functions created with the gcloud functions command or
with the Cloud Functions v2 API, which is still supported for performing
operations on functions. If you've created or deployed a function using
Cloud Run, see
Cloud Run audit logging .
This document describes audit logging for Cloud Run functions. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Cloud Run functions audit logs use the service name cloudfunctions.googleapis.com .
Filter for this service:
protoPayload . serviceName = "cloudfunctions.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Cloud Run functions generates an audit log whose category is dependent on the
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
google.cloud.functions.v1.CloudFunctionsService.GenerateDownloadUrl google.cloud.functions.v1.CloudFunctionsService.GetFunction GetIamPolicy google.cloud.functions.v1.CloudFunctionsService.ListFunctions google.cloud.functions.v2.FunctionService.GenerateDownloadUrl google.cloud.functions.v2.FunctionService.GetFunction google.cloud.functions.v2.FunctionService.ListFunctions google.cloud.functions.v2alpha.FunctionService.GenerateDownloadUrl google.cloud.functions.v2alpha.FunctionService.GetFunction google.cloud.functions.v2alpha.FunctionService.ListFunctions google.cloud.functions.v2beta.FunctionService.GenerateDownloadUrl google.cloud.functions.v2beta.FunctionService.GetFunction google.cloud.functions.v2beta.FunctionService.ListFunctions google.cloud.location.Locations.ListLocations GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations
ADMIN_WRITE
google.cloud.functions.v1.CloudFunctionsService.CreateFunction (LRO) google.cloud.functions.v1.CloudFunctionsService.DeleteFunction (LRO) google.cloud.functions.v1.CloudFunctionsService.GenerateUploadUrl SetIamPolicy google.cloud.functions.v1.CloudFunctionsService.UpdateFunction (LRO) google.cloud.functions.v2.FunctionService.AbortFunctionUpgrade (LRO) google.cloud.functions.v2.FunctionService.CommitFunctionUpgrade (LRO) google.cloud.functions.v2.FunctionService.CreateFunction (LRO) google.cloud.functions.v2.FunctionService.DeleteFunction (LRO) google.cloud.functions.v2.FunctionService.DetachFunction (LRO) google.cloud.functions.v2.FunctionService.GenerateUploadUrl google.cloud.functions.v2.FunctionService.RedirectFunctionUpgradeTraffic (LRO) google.cloud.functions.v2.FunctionService.RollbackFunctionUpgradeTraffic (LRO) google.cloud.functions.v2.FunctionService.SetupFunctionUpgradeConfig (LRO) google.cloud.functions.v2.FunctionService.UpdateFunction (LRO) google.cloud.functions.v2alpha.FunctionService.AbortFunctionUpgrade (LRO) google.cloud.functions.v2alpha.FunctionService.CommitFunctionUpgrade (LRO) google.cloud.functions.v2alpha.FunctionService.CreateFunction (LRO) google.cloud.functions.v2alpha.FunctionService.DeleteFunction (LRO) google.cloud.functions.v2alpha.FunctionService.DetachFunction (LRO) google.cloud.functions.v2alpha.FunctionService.GenerateUploadUrl google.cloud.functions.v2alpha.FunctionService.RedirectFunctionUpgradeTraffic (LRO) google.cloud.functions.v2alpha.FunctionService.RollbackFunctionUpgradeTraffic (LRO) google.cloud.functions.v2alpha.FunctionService.SetupFunctionUpgradeConfig (LRO) google.cloud.functions.v2alpha.FunctionService.UpdateFunction (LRO) google.cloud.functions.v2beta.FunctionService.AbortFunctionUpgrade (LRO) google.cloud.functions.v2beta.FunctionService.CommitFunctionUpgrade (LRO) google.cloud.functions.v2beta.FunctionService.CreateFunction (LRO) google.cloud.functions.v2beta.FunctionService.DeleteFunction (LRO) google.cloud.functions.v2beta.FunctionService.DetachFunction (LRO) google.cloud.functions.v2beta.FunctionService.GenerateUploadUrl google.cloud.functions.v2beta.FunctionService.RedirectFunctionUpgradeTraffic (LRO) google.cloud.functions.v2beta.FunctionService.RollbackFunctionUpgradeTraffic (LRO) google.cloud.functions.v2beta.FunctionService.SetupFunctionUpgradeConfig (LRO) google.cloud.functions.v2beta.FunctionService.UpdateFunction (LRO) SetIamPolicy
DATA_READ
google.cloud.functions.v1.CloudFunctionsService.CallFunction
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Cloud Run functions.
google.cloud.functions.v1.CloudFunctionsService
The following audit logs are associated with methods belonging to
google.cloud.functions.v1.CloudFunctionsService .
CallFunction
Method : google.cloud.functions.v1.CloudFunctionsService.CallFunction
Audit log type : Data access
Permissions : cloudfunctions.functions.call - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v1.CloudFunctionsService.CallFunction"
CreateFunction
Method : google.cloud.functions.v1.CloudFunctionsService.CreateFunction
Audit log type : Admin activity
Permissions : cloudfunctions.functions.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v1.CloudFunctionsService.CreateFunction"
DeleteFunction
Method : google.cloud.functions.v1.CloudFunctionsService.DeleteFunction
Audit log type : Admin activity
Permissions : cloudfunctions.functions.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v1.CloudFunctionsService.DeleteFunction"
GenerateDownloadUrl
Method : google.cloud.functions.v1.CloudFunctionsService.GenerateDownloadUrl
Audit log type : Data access
Permissions : cloudfunctions.functions.sourceCodeGet - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v1.CloudFunctionsService.GenerateDownloadUrl"
GenerateUploadUrl
Method : google.cloud.functions.v1.CloudFunctionsService.GenerateUploadUrl
Audit log type : Data access
Permissions : cloudfunctions.functions.sourceCodeSet - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v1.CloudFunctionsService.GenerateUploadUrl"
GetFunction
Method : google.cloud.functions.v1.CloudFunctionsService.GetFunction
Audit log type : Data access
Permissions : cloudfunctions.functions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v1.CloudFunctionsService.GetFunction"
GetIamPolicy
Method : GetIamPolicy
Audit log type : Data access
Permissions : cloudfunctions.functions.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="GetIamPolicy"
ListFunctions
Method : google.cloud.functions.v1.CloudFunctionsService.ListFunctions
Audit log type : Data access
Permissions : cloudfunctions.functions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v1.CloudFunctionsService.ListFunctions"
SetIamPolicy
Method : SetIamPolicy
Audit log type : Admin activity
Permissions : cloudfunctions.functions.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="SetIamPolicy"
UpdateFunction
Method : google.cloud.functions.v1.CloudFunctionsService.UpdateFunction
Audit log type : Admin activity
Permissions : cloudfunctions.functions.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v1.CloudFunctionsService.UpdateFunction"
google.cloud.functions.v2.FunctionService
The following audit logs are associated with methods belonging to
google.cloud.functions.v2.FunctionService .
AbortFunctionUpgrade
Method : google.cloud.functions.v2.FunctionService.AbortFunctionUpgrade
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2.FunctionService.AbortFunctionUpgrade"
CommitFunctionUpgrade
Method : google.cloud.functions.v2.FunctionService.CommitFunctionUpgrade
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2.FunctionService.CommitFunctionUpgrade"
CreateFunction
Method : google.cloud.functions.v2.FunctionService.CreateFunction
Audit log type : Admin activity
Permissions : cloudfunctions.functions.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2.FunctionService.CreateFunction"
DeleteFunction
Method : google.cloud.functions.v2.FunctionService.DeleteFunction
Audit log type : Admin activity
Permissions : cloudfunctions.functions.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2.FunctionService.DeleteFunction"
DetachFunction
Method : google.cloud.functions.v2.FunctionService.DetachFunction
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2.FunctionService.DetachFunction"
GenerateDownloadUrl
Method : google.cloud.functions.v2.FunctionService.GenerateDownloadUrl
Audit log type : Data access
Permissions : cloudfunctions.functions.sourceCodeGet - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2.FunctionService.GenerateDownloadUrl"
GenerateUploadUrl
Method : google.cloud.functions.v2.FunctionService.GenerateUploadUrl
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generateUploadUrl - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2.FunctionService.GenerateUploadUrl"
GetFunction
Method : google.cloud.functions.v2.FunctionService.GetFunction
Audit log type : Data access
Permissions : cloudfunctions.functions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2.FunctionService.GetFunction"
ListFunctions
Method : google.cloud.functions.v2.FunctionService.ListFunctions
Audit log type : Data access
Permissions : cloudfunctions.functions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2.FunctionService.ListFunctions"
RedirectFunctionUpgradeTraffic
Method : google.cloud.functions.v2.FunctionService.RedirectFunctionUpgradeTraffic
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2.FunctionService.RedirectFunctionUpgradeTraffic"
RollbackFunctionUpgradeTraffic
Method : google.cloud.functions.v2.FunctionService.RollbackFunctionUpgradeTraffic
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2.FunctionService.RollbackFunctionUpgradeTraffic"
SetupFunctionUpgradeConfig
Method : google.cloud.functions.v2.FunctionService.SetupFunctionUpgradeConfig
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2.FunctionService.SetupFunctionUpgradeConfig"
UpdateFunction
Method : google.cloud.functions.v2.FunctionService.UpdateFunction
Audit log type : Admin activity
Permissions : cloudfunctions.functions.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2.FunctionService.UpdateFunction"
google.cloud.functions.v2alpha.FunctionService
The following audit logs are associated with methods belonging to
google.cloud.functions.v2alpha.FunctionService .
AbortFunctionUpgrade
Method : google.cloud.functions.v2alpha.FunctionService.AbortFunctionUpgrade
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.AbortFunctionUpgrade"
CommitFunctionUpgrade
Method : google.cloud.functions.v2alpha.FunctionService.CommitFunctionUpgrade
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.CommitFunctionUpgrade"
CreateFunction
Method : google.cloud.functions.v2alpha.FunctionService.CreateFunction
Audit log type : Admin activity
Permissions : cloudfunctions.functions.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.CreateFunction"
DeleteFunction
Method : google.cloud.functions.v2alpha.FunctionService.DeleteFunction
Audit log type : Admin activity
Permissions : cloudfunctions.functions.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.DeleteFunction"
DetachFunction
Method : google.cloud.functions.v2alpha.FunctionService.DetachFunction
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.DetachFunction"
GenerateDownloadUrl
Method : google.cloud.functions.v2alpha.FunctionService.GenerateDownloadUrl
Audit log type : Data access
Permissions : cloudfunctions.functions.sourceCodeGet - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.GenerateDownloadUrl"
GenerateUploadUrl
Method : google.cloud.functions.v2alpha.FunctionService.GenerateUploadUrl
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generateUploadUrl - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.GenerateUploadUrl"
GetFunction
Method : google.cloud.functions.v2alpha.FunctionService.GetFunction
Audit log type : Data access
Permissions : cloudfunctions.functions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.GetFunction"
ListFunctions
Method : google.cloud.functions.v2alpha.FunctionService.ListFunctions
Audit log type : Data access
Permissions : cloudfunctions.functions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.ListFunctions"
RedirectFunctionUpgradeTraffic
Method : google.cloud.functions.v2alpha.FunctionService.RedirectFunctionUpgradeTraffic
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.RedirectFunctionUpgradeTraffic"
RollbackFunctionUpgradeTraffic
Method : google.cloud.functions.v2alpha.FunctionService.RollbackFunctionUpgradeTraffic
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.RollbackFunctionUpgradeTraffic"
SetupFunctionUpgradeConfig
Method : google.cloud.functions.v2alpha.FunctionService.SetupFunctionUpgradeConfig
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.SetupFunctionUpgradeConfig"
UpdateFunction
Method : google.cloud.functions.v2alpha.FunctionService.UpdateFunction
Audit log type : Admin activity
Permissions : cloudfunctions.functions.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.UpdateFunction"
google.cloud.functions.v2beta.FunctionService
The following audit logs are associated with methods belonging to
google.cloud.functions.v2beta.FunctionService .
AbortFunctionUpgrade
Method : google.cloud.functions.v2beta.FunctionService.AbortFunctionUpgrade
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.AbortFunctionUpgrade"
CommitFunctionUpgrade
Method : google.cloud.functions.v2beta.FunctionService.CommitFunctionUpgrade
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.CommitFunctionUpgrade"
CreateFunction
Method : google.cloud.functions.v2beta.FunctionService.CreateFunction
Audit log type : Admin activity
Permissions : cloudfunctions.functions.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.CreateFunction"
DeleteFunction
Method : google.cloud.functions.v2beta.FunctionService.DeleteFunction
Audit log type : Admin activity
Permissions : cloudfunctions.functions.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.DeleteFunction"
DetachFunction
Method : google.cloud.functions.v2beta.FunctionService.DetachFunction
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.DetachFunction"
GenerateDownloadUrl
Method : google.cloud.functions.v2beta.FunctionService.GenerateDownloadUrl
Audit log type : Data access
Permissions : cloudfunctions.functions.sourceCodeGet - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.GenerateDownloadUrl"
GenerateUploadUrl
Method : google.cloud.functions.v2beta.FunctionService.GenerateUploadUrl
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generateUploadUrl - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.GenerateUploadUrl"
GetFunction
Method : google.cloud.functions.v2beta.FunctionService.GetFunction
Audit log type : Data access
Permissions : cloudfunctions.functions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.GetFunction"
ListFunctions
Method : google.cloud.functions.v2beta.FunctionService.ListFunctions
Audit log type : Data access
Permissions : cloudfunctions.functions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.ListFunctions"
RedirectFunctionUpgradeTraffic
Method : google.cloud.functions.v2beta.FunctionService.RedirectFunctionUpgradeTraffic
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.RedirectFunctionUpgradeTraffic"
RollbackFunctionUpgradeTraffic
Method : google.cloud.functions.v2beta.FunctionService.RollbackFunctionUpgradeTraffic
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.RollbackFunctionUpgradeTraffic"
SetupFunctionUpgradeConfig
Method : google.cloud.functions.v2beta.FunctionService.SetupFunctionUpgradeConfig
Audit log type : Admin activity
Permissions : cloudfunctions.functions.generationUpgrade - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.SetupFunctionUpgradeConfig"
UpdateFunction
Method : google.cloud.functions.v2beta.FunctionService.UpdateFunction
Audit log type : Admin activity
Permissions : cloudfunctions.functions.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.UpdateFunction"
google.cloud.location.Locations
The following audit logs are associated with methods belonging to
google.cloud.location.Locations .
ListLocations
Method : google.cloud.location.Locations.ListLocations
Audit log type : Data access
Permissions : cloudfunctions.locations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.location.Locations.ListLocations"
google.iam.v1.IAMPolicy
The following audit logs are associated with methods belonging to
google.iam.v1.IAMPolicy .
GetIamPolicy
Method : GetIamPolicy
Audit log type : Data access
Permissions : cloudfunctions.functions.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="GetIamPolicy"
SetIamPolicy
Method : SetIamPolicy
Audit log type : Admin activity
Permissions : cloudfunctions.functions.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="SetIamPolicy"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Data access
Permissions : cloudfunctions.operations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.GetOperation"
ListOperations
Method : google.longrunning.Operations.ListOperations
Audit log type : Data access
Permissions : cloudfunctions.operations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.ListOperations"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.functions.v1.CloudFunctionsService.TestIamPermissions
google.longrunning.Operations.WaitOperation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
