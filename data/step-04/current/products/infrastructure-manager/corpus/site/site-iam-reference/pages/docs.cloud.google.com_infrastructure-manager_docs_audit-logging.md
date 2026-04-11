---
title: "Infrastructure Manager audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/audit-logging
  title: "Infrastructure Manager audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Infrastructure as code
Infrastructure Manager
Guides
Send feedback
Infrastructure Manager audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Infrastructure Manager. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Infrastructure Manager audit logs use the service name config.googleapis.com .
Filter for this service:
protoPayload . serviceName = "config.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Infrastructure Manager generates an audit log whose category is dependent on the
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
google.cloud.config.v1.Config.ExportDeploymentStatefile google.cloud.config.v1.Config.ExportLockInfo google.cloud.config.v1.Config.ExportPreviewResult google.cloud.config.v1.Config.ExportRevisionStatefile google.cloud.config.v1.Config.GetDeployment google.cloud.config.v1.Config.GetPreview google.cloud.config.v1.Config.GetResource google.cloud.config.v1.Config.GetRevision google.cloud.config.v1.Config.GetTerraformVersion google.cloud.config.v1.Config.ListDeployments google.cloud.config.v1.Config.ListPreviews google.cloud.config.v1.Config.ListResources google.cloud.config.v1.Config.ListRevisions google.cloud.config.v1.Config.ListTerraformVersions google.cloud.config.v1alpha2.Config.ExportDeploymentStatefile google.cloud.config.v1alpha2.Config.ExportLockInfo google.cloud.config.v1alpha2.Config.ExportPreviewResult google.cloud.config.v1alpha2.Config.ExportRevisionStatefile google.cloud.config.v1alpha2.Config.GetDeployment google.cloud.config.v1alpha2.Config.GetPreview google.cloud.config.v1alpha2.Config.GetResource google.cloud.config.v1alpha2.Config.GetRevision google.cloud.config.v1alpha2.Config.GetTerraformVersion google.cloud.config.v1alpha2.Config.ListDeployments google.cloud.config.v1alpha2.Config.ListPreviews google.cloud.config.v1alpha2.Config.ListResources google.cloud.config.v1alpha2.Config.ListRevisions google.cloud.config.v1alpha2.Config.ListTerraformVersions GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations
ADMIN_WRITE
google.cloud.config.v1.Config.CreateDeployment (LRO) google.cloud.config.v1.Config.CreatePreview (LRO) google.cloud.config.v1.Config.DeleteDeployment (LRO) google.cloud.config.v1.Config.DeletePreview (LRO) google.cloud.config.v1.Config.DeleteStatefile google.cloud.config.v1.Config.ImportArtifacts google.cloud.config.v1.Config.ImportStatefile google.cloud.config.v1.Config.LockDeployment (LRO) google.cloud.config.v1.Config.UnlockDeployment (LRO) google.cloud.config.v1.Config.UpdateDeployment (LRO) google.cloud.config.v1alpha2.Config.CreateDeployment (LRO) google.cloud.config.v1alpha2.Config.CreatePreview (LRO) google.cloud.config.v1alpha2.Config.DeleteDeployment (LRO) google.cloud.config.v1alpha2.Config.DeletePreview (LRO) google.cloud.config.v1alpha2.Config.DeleteStatefile google.cloud.config.v1alpha2.Config.ImportStatefile google.cloud.config.v1alpha2.Config.LockDeployment (LRO) google.cloud.config.v1alpha2.Config.UnlockDeployment (LRO) google.cloud.config.v1alpha2.Config.UpdateDeployment (LRO) SetIamPolicy google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Infrastructure Manager.
google.cloud.config.v1.Config
The following audit logs are associated with methods belonging to
google.cloud.config.v1.Config .
CreateDeployment
Method : google.cloud.config.v1.Config.CreateDeployment
Audit log type : Admin activity
Permissions : config.deployments.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.CreateDeployment"
CreatePreview
Method : google.cloud.config.v1.Config.CreatePreview
Audit log type : Admin activity
Permissions : config.previews.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.CreatePreview"
DeleteDeployment
Method : google.cloud.config.v1.Config.DeleteDeployment
Audit log type : Admin activity
Permissions : config.deployments.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.DeleteDeployment"
DeletePreview
Method : google.cloud.config.v1.Config.DeletePreview
Audit log type : Admin activity
Permissions : config.previews.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.DeletePreview"
DeleteStatefile
Method : google.cloud.config.v1.Config.DeleteStatefile
Audit log type : Admin activity
Permissions : config.deployments.deleteState - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.DeleteStatefile"
ExportDeploymentStatefile
Method : google.cloud.config.v1.Config.ExportDeploymentStatefile
Audit log type : Data access
Permissions : config.deployments.getState - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.ExportDeploymentStatefile"
ExportLockInfo
Method : google.cloud.config.v1.Config.ExportLockInfo
Audit log type : Data access
Permissions : config.deployments.getLock - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.ExportLockInfo"
ExportPreviewResult
Method : google.cloud.config.v1.Config.ExportPreviewResult
Audit log type : Data access
Permissions : config.previews.export - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.ExportPreviewResult"
ExportRevisionStatefile
Method : google.cloud.config.v1.Config.ExportRevisionStatefile
Audit log type : Data access
Permissions : config.revisions.getState - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.ExportRevisionStatefile"
GetDeployment
Method : google.cloud.config.v1.Config.GetDeployment
Audit log type : Data access
Permissions : config.deployments.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.GetDeployment"
GetPreview
Method : google.cloud.config.v1.Config.GetPreview
Audit log type : Data access
Permissions : config.previews.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.GetPreview"
GetResource
Method : google.cloud.config.v1.Config.GetResource
Audit log type : Data access
Permissions : config.resources.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.GetResource"
GetRevision
Method : google.cloud.config.v1.Config.GetRevision
Audit log type : Data access
Permissions : config.revisions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.GetRevision"
GetTerraformVersion
Method : google.cloud.config.v1.Config.GetTerraformVersion
Audit log type : Data access
Permissions : config.terraformversions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.GetTerraformVersion"
ImportArtifacts
Method : google.cloud.config.v1.Config.ImportArtifacts
Audit log type : Admin activity
Permissions : config.artifacts.import - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.ImportArtifacts"
ImportStatefile
Method : google.cloud.config.v1.Config.ImportStatefile
Audit log type : Admin activity
Permissions : config.deployments.updateState - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.ImportStatefile"
ListDeployments
Method : google.cloud.config.v1.Config.ListDeployments
Audit log type : Data access
Permissions : config.deployments.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.ListDeployments"
ListPreviews
Method : google.cloud.config.v1.Config.ListPreviews
Audit log type : Data access
Permissions : config.previews.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.ListPreviews"
ListResources
Method : google.cloud.config.v1.Config.ListResources
Audit log type : Data access
Permissions : config.resources.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.ListResources"
ListRevisions
Method : google.cloud.config.v1.Config.ListRevisions
Audit log type : Data access
Permissions : config.revisions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.ListRevisions"
ListTerraformVersions
Method : google.cloud.config.v1.Config.ListTerraformVersions
Audit log type : Data access
Permissions : config.terraformversions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.ListTerraformVersions"
LockDeployment
Method : google.cloud.config.v1.Config.LockDeployment
Audit log type : Admin activity
Permissions : config.deployments.lock - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.LockDeployment"
UnlockDeployment
Method : google.cloud.config.v1.Config.UnlockDeployment
Audit log type : Admin activity
Permissions : config.deployments.unlock - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.UnlockDeployment"
UpdateDeployment
Method : google.cloud.config.v1.Config.UpdateDeployment
Audit log type : Admin activity
Permissions : config.deployments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.config.v1.Config.UpdateDeployment"
google.cloud.config.v1alpha2.Config
The following audit logs are associated with methods belonging to
google.cloud.config.v1alpha2.Config .
CreateDeployment
Method : google.cloud.config.v1alpha2.Config.CreateDeployment
Audit log type : Admin activity
Permissions : config.deployments.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.CreateDeployment"
CreatePreview
Method : google.cloud.config.v1alpha2.Config.CreatePreview
Audit log type : Admin activity
Permissions : config.deployments.get - ADMIN_READ
config.deployments.getState - ADMIN_READ
config.deployments.lock - ADMIN_WRITE
config.deployments.unlock - ADMIN_WRITE
config.previews.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.CreatePreview"
DeleteDeployment
Method : google.cloud.config.v1alpha2.Config.DeleteDeployment
Audit log type : Admin activity
Permissions : config.deployments.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.DeleteDeployment"
DeletePreview
Method : google.cloud.config.v1alpha2.Config.DeletePreview
Audit log type : Admin activity
Permissions : config.previews.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.DeletePreview"
DeleteStatefile
Method : google.cloud.config.v1alpha2.Config.DeleteStatefile
Audit log type : Admin activity
Permissions : config.deployments.deleteState - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.DeleteStatefile"
ExportDeploymentStatefile
Method : google.cloud.config.v1alpha2.Config.ExportDeploymentStatefile
Audit log type : Data access
Permissions : config.deployments.getState - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.ExportDeploymentStatefile"
ExportLockInfo
Method : google.cloud.config.v1alpha2.Config.ExportLockInfo
Audit log type : Data access
Permissions : config.deployments.getLock - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.ExportLockInfo"
ExportPreviewResult
Method : google.cloud.config.v1alpha2.Config.ExportPreviewResult
Audit log type : Data access
Permissions : config.previews.export - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.ExportPreviewResult"
ExportRevisionStatefile
Method : google.cloud.config.v1alpha2.Config.ExportRevisionStatefile
Audit log type : Data access
Permissions : config.revisions.getState - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.ExportRevisionStatefile"
GetDeployment
Method : google.cloud.config.v1alpha2.Config.GetDeployment
Audit log type : Data access
Permissions : config.deployments.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.GetDeployment"
GetPreview
Method : google.cloud.config.v1alpha2.Config.GetPreview
Audit log type : Data access
Permissions : config.previews.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.GetPreview"
GetResource
Method : google.cloud.config.v1alpha2.Config.GetResource
Audit log type : Data access
Permissions : config.resources.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.GetResource"
GetRevision
Method : google.cloud.config.v1alpha2.Config.GetRevision
Audit log type : Data access
Permissions : config.revisions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.GetRevision"
GetTerraformVersion
Method : google.cloud.config.v1alpha2.Config.GetTerraformVersion
Audit log type : Data access
Permissions : config.terraformversions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.GetTerraformVersion"
ImportStatefile
Method : google.cloud.config.v1alpha2.Config.ImportStatefile
Audit log type : Admin activity
Permissions : config.deployments.updateState - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.ImportStatefile"
ListDeployments
Method : google.cloud.config.v1alpha2.Config.ListDeployments
Audit log type : Data access
Permissions : config.deployments.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.ListDeployments"
ListPreviews
Method : google.cloud.config.v1alpha2.Config.ListPreviews
Audit log type : Data access
Permissions : config.previews.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.ListPreviews"
ListResources
Method : google.cloud.config.v1alpha2.Config.ListResources
Audit log type : Data access
Permissions : config.resources.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.ListResources"
ListRevisions
Method : google.cloud.config.v1alpha2.Config.ListRevisions
Audit log type : Data access
Permissions : config.revisions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.ListRevisions"
ListTerraformVersions
Method : google.cloud.config.v1alpha2.Config.ListTerraformVersions
Audit log type : Data access
Permissions : config.terraformversions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.ListTerraformVersions"
LockDeployment
Method : google.cloud.config.v1alpha2.Config.LockDeployment
Audit log type : Admin activity
Permissions : config.deployments.lock - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.LockDeployment"
UnlockDeployment
Method : google.cloud.config.v1alpha2.Config.UnlockDeployment
Audit log type : Admin activity
Permissions : config.deployments.unlock - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.UnlockDeployment"
UpdateDeployment
Method : google.cloud.config.v1alpha2.Config.UpdateDeployment
Audit log type : Admin activity
Permissions : config.deployments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.config.v1alpha2.Config.UpdateDeployment"
google.iam.v1.IAMPolicy
The following audit logs are associated with methods belonging to
google.iam.v1.IAMPolicy .
GetIamPolicy
Method : GetIamPolicy
Audit log type : Data access
Permissions : config.deployments.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="GetIamPolicy"
SetIamPolicy
Method : SetIamPolicy
Audit log type : Admin activity
Permissions : config.deployments.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="SetIamPolicy"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
CancelOperation
Method : google.longrunning.Operations.CancelOperation
Audit log type : Admin activity
Permissions : config.operations.cancel - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.CancelOperation"
DeleteOperation
Method : google.longrunning.Operations.DeleteOperation
Audit log type : Admin activity
Permissions : config.operations.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.DeleteOperation"
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Data access
Permissions : config.operations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.GetOperation"
ListOperations
Method : google.longrunning.Operations.ListOperations
Audit log type : Data access
Permissions : config.operations.list - ADMIN_READ
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
google.cloud.location.Locations.GetLocation
google.cloud.location.Locations.ListLocations
google.longrunning.Operations.WaitOperation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
