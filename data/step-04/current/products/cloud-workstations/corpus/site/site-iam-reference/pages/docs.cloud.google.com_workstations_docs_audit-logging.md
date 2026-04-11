---
title: "Cloud Workstations audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/audit-logging
  title: "Cloud Workstations audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Cloud Workstations audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Cloud Workstations. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Cloud Workstations audit logs use the service name workstations.googleapis.com .
Filter for this service:
protoPayload . serviceName = "workstations.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Cloud Workstations generates an audit log whose category is dependent on the
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
google.cloud.workstations.v1.Workstations.GenerateAccessToken google.cloud.workstations.v1.Workstations.GetWorkstation google.cloud.workstations.v1.Workstations.GetWorkstationCluster google.cloud.workstations.v1.Workstations.GetWorkstationConfig google.cloud.workstations.v1.Workstations.ListWorkstationClusters google.cloud.workstations.v1.Workstations.ListWorkstationConfigs google.cloud.workstations.v1.Workstations.ListWorkstations google.cloud.workstations.v1beta.Workstations.GenerateAccessToken google.cloud.workstations.v1beta.Workstations.GetWorkstation google.cloud.workstations.v1beta.Workstations.GetWorkstationCluster google.cloud.workstations.v1beta.Workstations.GetWorkstationConfig google.cloud.workstations.v1beta.Workstations.ListWorkstationClusters google.cloud.workstations.v1beta.Workstations.ListWorkstationConfigs google.cloud.workstations.v1beta.Workstations.ListWorkstations GetIamPolicy
ADMIN_WRITE
google.cloud.workstations.v1.Workstations.CreateWorkstation (LRO) google.cloud.workstations.v1.Workstations.CreateWorkstationCluster (LRO) google.cloud.workstations.v1.Workstations.CreateWorkstationConfig (LRO) google.cloud.workstations.v1.Workstations.DeleteWorkstation (LRO) google.cloud.workstations.v1.Workstations.DeleteWorkstationCluster (LRO) google.cloud.workstations.v1.Workstations.DeleteWorkstationConfig (LRO) google.cloud.workstations.v1.Workstations.StartWorkstation (LRO) google.cloud.workstations.v1.Workstations.StopWorkstation (LRO) google.cloud.workstations.v1.Workstations.UpdateWorkstation (LRO) google.cloud.workstations.v1.Workstations.UpdateWorkstationCluster (LRO) google.cloud.workstations.v1.Workstations.UpdateWorkstationConfig (LRO) google.cloud.workstations.v1beta.Workstations.CreateWorkstation (LRO) google.cloud.workstations.v1beta.Workstations.CreateWorkstationCluster (LRO) google.cloud.workstations.v1beta.Workstations.CreateWorkstationConfig (LRO) google.cloud.workstations.v1beta.Workstations.DeleteWorkstation (LRO) google.cloud.workstations.v1beta.Workstations.DeleteWorkstationCluster (LRO) google.cloud.workstations.v1beta.Workstations.DeleteWorkstationConfig (LRO) google.cloud.workstations.v1beta.Workstations.StartWorkstation (LRO) google.cloud.workstations.v1beta.Workstations.StopWorkstation (LRO) google.cloud.workstations.v1beta.Workstations.UpdateWorkstation (LRO) google.cloud.workstations.v1beta.Workstations.UpdateWorkstationCluster (LRO) google.cloud.workstations.v1beta.Workstations.UpdateWorkstationConfig (LRO) SetIamPolicy
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Cloud Workstations.
google.cloud.workstations.v1.Workstations
The following audit logs are associated with methods belonging to
google.cloud.workstations.v1.Workstations .
CreateWorkstation
Method : google.cloud.workstations.v1.Workstations.CreateWorkstation
Audit log type : Admin activity
Permissions : workstations.workstations.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.CreateWorkstation"
CreateWorkstationCluster
Method : google.cloud.workstations.v1.Workstations.CreateWorkstationCluster
Audit log type : Admin activity
Permissions : workstations.workstationClusters.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.CreateWorkstationCluster"
CreateWorkstationConfig
Method : google.cloud.workstations.v1.Workstations.CreateWorkstationConfig
Audit log type : Admin activity
Permissions : workstations.workstationConfigs.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.CreateWorkstationConfig"
DeleteWorkstation
Method : google.cloud.workstations.v1.Workstations.DeleteWorkstation
Audit log type : Admin activity
Permissions : workstations.workstations.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.DeleteWorkstation"
DeleteWorkstationCluster
Method : google.cloud.workstations.v1.Workstations.DeleteWorkstationCluster
Audit log type : Admin activity
Permissions : workstations.workstationClusters.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.DeleteWorkstationCluster"
DeleteWorkstationConfig
Method : google.cloud.workstations.v1.Workstations.DeleteWorkstationConfig
Audit log type : Admin activity
Permissions : workstations.workstationConfigs.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.DeleteWorkstationConfig"
GenerateAccessToken
Method : google.cloud.workstations.v1.Workstations.GenerateAccessToken
Audit log type : Data access
Permissions : workstations.workstations.use - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.GenerateAccessToken"
GetWorkstation
Method : google.cloud.workstations.v1.Workstations.GetWorkstation
Audit log type : Data access
Permissions : workstations.workstations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.GetWorkstation"
GetWorkstationCluster
Method : google.cloud.workstations.v1.Workstations.GetWorkstationCluster
Audit log type : Data access
Permissions : workstations.workstationClusters.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.GetWorkstationCluster"
GetWorkstationConfig
Method : google.cloud.workstations.v1.Workstations.GetWorkstationConfig
Audit log type : Data access
Permissions : workstations.workstationConfigs.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.GetWorkstationConfig"
ListWorkstationClusters
Method : google.cloud.workstations.v1.Workstations.ListWorkstationClusters
Audit log type : Data access
Permissions : workstations.workstationClusters.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.ListWorkstationClusters"
ListWorkstationConfigs
Method : google.cloud.workstations.v1.Workstations.ListWorkstationConfigs
Audit log type : Data access
Permissions : workstations.workstationConfigs.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.ListWorkstationConfigs"
ListWorkstations
Method : google.cloud.workstations.v1.Workstations.ListWorkstations
Audit log type : Data access
Permissions : workstations.workstations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.ListWorkstations"
StartWorkstation
Method : google.cloud.workstations.v1.Workstations.StartWorkstation
Audit log type : Admin activity
Permissions : workstations.workstations.start - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.StartWorkstation"
StopWorkstation
Method : google.cloud.workstations.v1.Workstations.StopWorkstation
Audit log type : Admin activity
Permissions : workstations.workstations.stop - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.StopWorkstation"
UpdateWorkstation
Method : google.cloud.workstations.v1.Workstations.UpdateWorkstation
Audit log type : Admin activity
Permissions : workstations.workstations.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.UpdateWorkstation"
UpdateWorkstationCluster
Method : google.cloud.workstations.v1.Workstations.UpdateWorkstationCluster
Audit log type : Admin activity
Permissions : workstations.workstationClusters.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.UpdateWorkstationCluster"
UpdateWorkstationConfig
Method : google.cloud.workstations.v1.Workstations.UpdateWorkstationConfig
Audit log type : Admin activity
Permissions : workstations.workstationConfigs.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1.Workstations.UpdateWorkstationConfig"
google.cloud.workstations.v1beta.Workstations
The following audit logs are associated with methods belonging to
google.cloud.workstations.v1beta.Workstations .
CreateWorkstation
Method : google.cloud.workstations.v1beta.Workstations.CreateWorkstation
Audit log type : Admin activity
Permissions : workstations.workstations.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.CreateWorkstation"
CreateWorkstationCluster
Method : google.cloud.workstations.v1beta.Workstations.CreateWorkstationCluster
Audit log type : Admin activity
Permissions : workstations.workstationClusters.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.CreateWorkstationCluster"
CreateWorkstationConfig
Method : google.cloud.workstations.v1beta.Workstations.CreateWorkstationConfig
Audit log type : Admin activity
Permissions : workstations.workstationConfigs.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.CreateWorkstationConfig"
DeleteWorkstation
Method : google.cloud.workstations.v1beta.Workstations.DeleteWorkstation
Audit log type : Admin activity
Permissions : workstations.workstations.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.DeleteWorkstation"
DeleteWorkstationCluster
Method : google.cloud.workstations.v1beta.Workstations.DeleteWorkstationCluster
Audit log type : Admin activity
Permissions : workstations.workstationClusters.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.DeleteWorkstationCluster"
DeleteWorkstationConfig
Method : google.cloud.workstations.v1beta.Workstations.DeleteWorkstationConfig
Audit log type : Admin activity
Permissions : workstations.workstationConfigs.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.DeleteWorkstationConfig"
GenerateAccessToken
Method : google.cloud.workstations.v1beta.Workstations.GenerateAccessToken
Audit log type : Data access
Permissions : workstations.workstations.use - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.GenerateAccessToken"
GetWorkstation
Method : google.cloud.workstations.v1beta.Workstations.GetWorkstation
Audit log type : Data access
Permissions : workstations.workstations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.GetWorkstation"
GetWorkstationCluster
Method : google.cloud.workstations.v1beta.Workstations.GetWorkstationCluster
Audit log type : Data access
Permissions : workstations.workstationClusters.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.GetWorkstationCluster"
GetWorkstationConfig
Method : google.cloud.workstations.v1beta.Workstations.GetWorkstationConfig
Audit log type : Data access
Permissions : workstations.workstationConfigs.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.GetWorkstationConfig"
ListWorkstationClusters
Method : google.cloud.workstations.v1beta.Workstations.ListWorkstationClusters
Audit log type : Data access
Permissions : workstations.workstationClusters.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.ListWorkstationClusters"
ListWorkstationConfigs
Method : google.cloud.workstations.v1beta.Workstations.ListWorkstationConfigs
Audit log type : Data access
Permissions : workstations.workstationConfigs.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.ListWorkstationConfigs"
ListWorkstations
Method : google.cloud.workstations.v1beta.Workstations.ListWorkstations
Audit log type : Data access
Permissions : workstations.workstations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.ListWorkstations"
StartWorkstation
Method : google.cloud.workstations.v1beta.Workstations.StartWorkstation
Audit log type : Admin activity
Permissions : workstations.workstations.start - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.StartWorkstation"
StopWorkstation
Method : google.cloud.workstations.v1beta.Workstations.StopWorkstation
Audit log type : Admin activity
Permissions : workstations.workstations.stop - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.StopWorkstation"
UpdateWorkstation
Method : google.cloud.workstations.v1beta.Workstations.UpdateWorkstation
Audit log type : Admin activity
Permissions : workstations.workstations.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.UpdateWorkstation"
UpdateWorkstationCluster
Method : google.cloud.workstations.v1beta.Workstations.UpdateWorkstationCluster
Audit log type : Admin activity
Permissions : workstations.workstationClusters.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.UpdateWorkstationCluster"
UpdateWorkstationConfig
Method : google.cloud.workstations.v1beta.Workstations.UpdateWorkstationConfig
Audit log type : Admin activity
Permissions : workstations.workstationConfigs.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workstations.v1beta.Workstations.UpdateWorkstationConfig"
google.iam.v1.IAMPolicy
The following audit logs are associated with methods belonging to
google.iam.v1.IAMPolicy .
GetIamPolicy
Method : GetIamPolicy
Audit log type : Data access
Permissions : workstations.workstationConfigs.getIamPolicy - ADMIN_READ
workstations.workstations.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="GetIamPolicy"
SetIamPolicy
Method : SetIamPolicy
Audit log type : Admin activity
Permissions : workstations.workstations.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="SetIamPolicy"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.workstations.v1.Workstations.ListUsableWorkstationConfigs
google.cloud.workstations.v1.Workstations.ListUsableWorkstations
google.cloud.workstations.v1beta.Workstations.ListUsableWorkstationConfigs
google.cloud.workstations.v1beta.Workstations.ListUsableWorkstations
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
