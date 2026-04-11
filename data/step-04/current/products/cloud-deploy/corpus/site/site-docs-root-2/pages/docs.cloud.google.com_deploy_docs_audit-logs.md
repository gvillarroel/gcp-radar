---
title: "Cloud Deploy audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/audit-logs
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/audit-logs
  title: "Cloud Deploy audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Deploy
Guides
Send feedback
Cloud Deploy audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Cloud Deploy. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Cloud Deploy audit logs use the service name clouddeploy.googleapis.com .
Filter for this service:
protoPayload . serviceName = "clouddeploy.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Cloud Deploy generates an audit log whose category is dependent on the
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
google.cloud.deploy.v1.CloudDeploy.GetAutomation google.cloud.deploy.v1.CloudDeploy.GetAutomationRun google.cloud.deploy.v1.CloudDeploy.GetConfig google.cloud.deploy.v1.CloudDeploy.GetCustomTargetType google.cloud.deploy.v1.CloudDeploy.GetDeliveryPipeline google.cloud.deploy.v1.CloudDeploy.GetDeployPolicy google.cloud.deploy.v1.CloudDeploy.GetJobRun google.cloud.deploy.v1.CloudDeploy.GetRelease google.cloud.deploy.v1.CloudDeploy.GetRollout google.cloud.deploy.v1.CloudDeploy.GetTarget google.cloud.deploy.v1.CloudDeploy.ListAutomationRuns google.cloud.deploy.v1.CloudDeploy.ListAutomations google.cloud.deploy.v1.CloudDeploy.ListCustomTargetTypes google.cloud.deploy.v1.CloudDeploy.ListDeliveryPipelines google.cloud.deploy.v1.CloudDeploy.ListDeployPolicies google.cloud.deploy.v1.CloudDeploy.ListJobRuns google.cloud.deploy.v1.CloudDeploy.ListReleases google.cloud.deploy.v1.CloudDeploy.ListRollouts google.cloud.deploy.v1.CloudDeploy.ListTargets GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations
ADMIN_WRITE
google.cloud.deploy.v1.CloudDeploy.AbandonRelease google.cloud.deploy.v1.CloudDeploy.AdvanceRollout google.cloud.deploy.v1.CloudDeploy.ApproveRollout google.cloud.deploy.v1.CloudDeploy.CancelAutomationRun google.cloud.deploy.v1.CloudDeploy.CancelRollout google.cloud.deploy.v1.CloudDeploy.CreateAutomation (LRO) google.cloud.deploy.v1.CloudDeploy.CreateCustomTargetType (LRO) google.cloud.deploy.v1.CloudDeploy.CreateDeliveryPipeline (LRO) google.cloud.deploy.v1.CloudDeploy.CreateDeployPolicy (LRO) google.cloud.deploy.v1.CloudDeploy.CreateRelease (LRO) google.cloud.deploy.v1.CloudDeploy.CreateRollout (LRO) google.cloud.deploy.v1.CloudDeploy.CreateTarget (LRO) google.cloud.deploy.v1.CloudDeploy.DeleteAutomation (LRO) google.cloud.deploy.v1.CloudDeploy.DeleteCustomTargetType (LRO) google.cloud.deploy.v1.CloudDeploy.DeleteDeliveryPipeline (LRO) google.cloud.deploy.v1.CloudDeploy.DeleteDeployPolicy (LRO) google.cloud.deploy.v1.CloudDeploy.DeleteTarget (LRO) google.cloud.deploy.v1.CloudDeploy.IgnoreJob google.cloud.deploy.v1.CloudDeploy.RetryJob google.cloud.deploy.v1.CloudDeploy.RollbackTarget google.cloud.deploy.v1.CloudDeploy.TerminateJobRun google.cloud.deploy.v1.CloudDeploy.UpdateAutomation (LRO) google.cloud.deploy.v1.CloudDeploy.UpdateCustomTargetType (LRO) google.cloud.deploy.v1.CloudDeploy.UpdateDeliveryPipeline (LRO) google.cloud.deploy.v1.CloudDeploy.UpdateDeployPolicy (LRO) google.cloud.deploy.v1.CloudDeploy.UpdateTarget (LRO) SetIamPolicy google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Cloud Deploy.
google.cloud.deploy.v1.CloudDeploy
The following audit logs are associated with methods belonging to
google.cloud.deploy.v1.CloudDeploy .
AbandonRelease
Method : google.cloud.deploy.v1.CloudDeploy.AbandonRelease
Audit log type : Admin activity
Permissions : clouddeploy.releases.abandon - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.AbandonRelease"
AdvanceRollout
Method : google.cloud.deploy.v1.CloudDeploy.AdvanceRollout
Audit log type : Admin activity
Permissions : clouddeploy.deployPolicies.override - ADMIN_WRITE
clouddeploy.rollouts.advance - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.AdvanceRollout"
ApproveRollout
Method : google.cloud.deploy.v1.CloudDeploy.ApproveRollout
Audit log type : Admin activity
Permissions : clouddeploy.deployPolicies.override - ADMIN_WRITE
clouddeploy.rollouts.approve - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.ApproveRollout"
CancelAutomationRun
Method : google.cloud.deploy.v1.CloudDeploy.CancelAutomationRun
Audit log type : Admin activity
Permissions : clouddeploy.automationRuns.cancel - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.CancelAutomationRun"
CancelRollout
Method : google.cloud.deploy.v1.CloudDeploy.CancelRollout
Audit log type : Admin activity
Permissions : clouddeploy.deployPolicies.override - ADMIN_WRITE
clouddeploy.rollouts.cancel - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.CancelRollout"
CreateAutomation
Method : google.cloud.deploy.v1.CloudDeploy.CreateAutomation
Audit log type : Admin activity
Permissions : clouddeploy.automations.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.CreateAutomation"
CreateCustomTargetType
Method : google.cloud.deploy.v1.CloudDeploy.CreateCustomTargetType
Audit log type : Admin activity
Permissions : clouddeploy.customTargetTypes.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.CreateCustomTargetType"
CreateDeliveryPipeline
Method : google.cloud.deploy.v1.CloudDeploy.CreateDeliveryPipeline
Audit log type : Admin activity
Permissions : clouddeploy.deliveryPipelines.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.CreateDeliveryPipeline"
CreateDeployPolicy
Method : google.cloud.deploy.v1.CloudDeploy.CreateDeployPolicy
Audit log type : Admin activity
Permissions : clouddeploy.deployPolicies.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.CreateDeployPolicy"
CreateRelease
Method : google.cloud.deploy.v1.CloudDeploy.CreateRelease
Audit log type : Admin activity
Permissions : clouddeploy.releases.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.CreateRelease"
CreateRollout
Method : google.cloud.deploy.v1.CloudDeploy.CreateRollout
Audit log type : Admin activity
Permissions : clouddeploy.deployPolicies.override - ADMIN_WRITE
clouddeploy.rollouts.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.CreateRollout"
CreateTarget
Method : google.cloud.deploy.v1.CloudDeploy.CreateTarget
Audit log type : Admin activity
Permissions : clouddeploy.targets.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.CreateTarget"
DeleteAutomation
Method : google.cloud.deploy.v1.CloudDeploy.DeleteAutomation
Audit log type : Admin activity
Permissions : clouddeploy.automations.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.DeleteAutomation"
DeleteCustomTargetType
Method : google.cloud.deploy.v1.CloudDeploy.DeleteCustomTargetType
Audit log type : Admin activity
Permissions : clouddeploy.customTargetTypes.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.DeleteCustomTargetType"
DeleteDeliveryPipeline
Method : google.cloud.deploy.v1.CloudDeploy.DeleteDeliveryPipeline
Audit log type : Admin activity
Permissions : clouddeploy.deliveryPipelines.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.DeleteDeliveryPipeline"
DeleteDeployPolicy
Method : google.cloud.deploy.v1.CloudDeploy.DeleteDeployPolicy
Audit log type : Admin activity
Permissions : clouddeploy.deployPolicies.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.DeleteDeployPolicy"
DeleteTarget
Method : google.cloud.deploy.v1.CloudDeploy.DeleteTarget
Audit log type : Admin activity
Permissions : clouddeploy.targets.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.DeleteTarget"
GetAutomation
Method : google.cloud.deploy.v1.CloudDeploy.GetAutomation
Audit log type : Data access
Permissions : clouddeploy.automations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.GetAutomation"
GetAutomationRun
Method : google.cloud.deploy.v1.CloudDeploy.GetAutomationRun
Audit log type : Data access
Permissions : clouddeploy.automationRuns.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.GetAutomationRun"
GetConfig
Method : google.cloud.deploy.v1.CloudDeploy.GetConfig
Audit log type : Data access
Permissions : clouddeploy.config.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.GetConfig"
GetCustomTargetType
Method : google.cloud.deploy.v1.CloudDeploy.GetCustomTargetType
Audit log type : Data access
Permissions : clouddeploy.customTargetTypes.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.GetCustomTargetType"
GetDeliveryPipeline
Method : google.cloud.deploy.v1.CloudDeploy.GetDeliveryPipeline
Audit log type : Data access
Permissions : clouddeploy.deliveryPipelines.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.GetDeliveryPipeline"
GetDeployPolicy
Method : google.cloud.deploy.v1.CloudDeploy.GetDeployPolicy
Audit log type : Data access
Permissions : clouddeploy.deployPolicies.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.GetDeployPolicy"
GetJobRun
Method : google.cloud.deploy.v1.CloudDeploy.GetJobRun
Audit log type : Data access
Permissions : clouddeploy.jobRuns.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.GetJobRun"
GetRelease
Method : google.cloud.deploy.v1.CloudDeploy.GetRelease
Audit log type : Data access
Permissions : clouddeploy.releases.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.GetRelease"
GetRollout
Method : google.cloud.deploy.v1.CloudDeploy.GetRollout
Audit log type : Data access
Permissions : clouddeploy.rollouts.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.GetRollout"
GetTarget
Method : google.cloud.deploy.v1.CloudDeploy.GetTarget
Audit log type : Data access
Permissions : clouddeploy.targets.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.GetTarget"
IgnoreJob
Method : google.cloud.deploy.v1.CloudDeploy.IgnoreJob
Audit log type : Admin activity
Permissions : clouddeploy.deployPolicies.override - ADMIN_WRITE
clouddeploy.rollouts.ignoreJob - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.IgnoreJob"
ListAutomationRuns
Method : google.cloud.deploy.v1.CloudDeploy.ListAutomationRuns
Audit log type : Data access
Permissions : clouddeploy.automationRuns.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.ListAutomationRuns"
ListAutomations
Method : google.cloud.deploy.v1.CloudDeploy.ListAutomations
Audit log type : Data access
Permissions : clouddeploy.automations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.ListAutomations"
ListCustomTargetTypes
Method : google.cloud.deploy.v1.CloudDeploy.ListCustomTargetTypes
Audit log type : Data access
Permissions : clouddeploy.customTargetTypes.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.ListCustomTargetTypes"
ListDeliveryPipelines
Method : google.cloud.deploy.v1.CloudDeploy.ListDeliveryPipelines
Audit log type : Data access
Permissions : clouddeploy.deliveryPipelines.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.ListDeliveryPipelines"
ListDeployPolicies
Method : google.cloud.deploy.v1.CloudDeploy.ListDeployPolicies
Audit log type : Data access
Permissions : clouddeploy.deployPolicies.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.ListDeployPolicies"
ListJobRuns
Method : google.cloud.deploy.v1.CloudDeploy.ListJobRuns
Audit log type : Data access
Permissions : clouddeploy.jobRuns.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.ListJobRuns"
ListReleases
Method : google.cloud.deploy.v1.CloudDeploy.ListReleases
Audit log type : Data access
Permissions : clouddeploy.releases.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.ListReleases"
ListRollouts
Method : google.cloud.deploy.v1.CloudDeploy.ListRollouts
Audit log type : Data access
Permissions : clouddeploy.rollouts.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.ListRollouts"
ListTargets
Method : google.cloud.deploy.v1.CloudDeploy.ListTargets
Audit log type : Data access
Permissions : clouddeploy.targets.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.ListTargets"
RetryJob
Method : google.cloud.deploy.v1.CloudDeploy.RetryJob
Audit log type : Admin activity
Permissions : clouddeploy.deployPolicies.override - ADMIN_WRITE
clouddeploy.rollouts.retryJob - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.RetryJob"
RollbackTarget
Method : google.cloud.deploy.v1.CloudDeploy.RollbackTarget
Audit log type : Admin activity
Permissions : clouddeploy.deployPolicies.override - ADMIN_WRITE
clouddeploy.rollouts.rollback - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.RollbackTarget"
TerminateJobRun
Method : google.cloud.deploy.v1.CloudDeploy.TerminateJobRun
Audit log type : Admin activity
Permissions : clouddeploy.deployPolicies.override - ADMIN_WRITE
clouddeploy.jobRuns.terminate - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.TerminateJobRun"
UpdateAutomation
Method : google.cloud.deploy.v1.CloudDeploy.UpdateAutomation
Audit log type : Admin activity
Permissions : clouddeploy.automations.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.UpdateAutomation"
UpdateCustomTargetType
Method : google.cloud.deploy.v1.CloudDeploy.UpdateCustomTargetType
Audit log type : Admin activity
Permissions : clouddeploy.customTargetTypes.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.UpdateCustomTargetType"
UpdateDeliveryPipeline
Method : google.cloud.deploy.v1.CloudDeploy.UpdateDeliveryPipeline
Audit log type : Admin activity
Permissions : clouddeploy.deliveryPipelines.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.UpdateDeliveryPipeline"
UpdateDeployPolicy
Method : google.cloud.deploy.v1.CloudDeploy.UpdateDeployPolicy
Audit log type : Admin activity
Permissions : clouddeploy.deployPolicies.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.UpdateDeployPolicy"
UpdateTarget
Method : google.cloud.deploy.v1.CloudDeploy.UpdateTarget
Audit log type : Admin activity
Permissions : clouddeploy.targets.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.deploy.v1.CloudDeploy.UpdateTarget"
google.iam.v1.IAMPolicy
The following audit logs are associated with methods belonging to
google.iam.v1.IAMPolicy .
GetIamPolicy
Method : GetIamPolicy
Audit log type : Data access
Permissions : clouddeploy.deliveryPipelines.getIamPolicy - ADMIN_READ
clouddeploy.targets.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="GetIamPolicy"
SetIamPolicy
Method : SetIamPolicy
Audit log type : Admin activity
Permissions : clouddeploy.customTargetTypes.setIamPolicy - ADMIN_WRITE
clouddeploy.deliveryPipelines.setIamPolicy - ADMIN_WRITE
clouddeploy.deployPolicies.setIamPolicy - ADMIN_WRITE
clouddeploy.targets.setIamPolicy - ADMIN_WRITE
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
Permissions : clouddeploy.operations.cancel - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.CancelOperation"
DeleteOperation
Method : google.longrunning.Operations.DeleteOperation
Audit log type : Admin activity
Permissions : clouddeploy.operations.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.DeleteOperation"
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Data access
Permissions : clouddeploy.operations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.GetOperation"
ListOperations
Method : google.longrunning.Operations.ListOperations
Audit log type : Data access
Permissions : clouddeploy.operations.list - ADMIN_READ
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
