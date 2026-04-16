---
title: "Sensitive Data Protection audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/common-discovery-configurations
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/audit-logging
  title: "Sensitive Data Protection audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Sensitive Data Protection audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Sensitive Data Protection. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Sensitive Data Protection audit logs use the service name dlp.googleapis.com .
Filter for this service:
protoPayload . serviceName = "dlp.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Sensitive Data Protection generates an audit log whose category is dependent on the
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
google.privacy.dlp.v2.DlpService.ActivateJobTrigger google.privacy.dlp.v2.DlpService.CreateDlpJob google.privacy.dlp.v2.DlpService.DeidentifyContent google.privacy.dlp.v2.DlpService.GetColumnDataProfile google.privacy.dlp.v2.DlpService.GetConnection google.privacy.dlp.v2.DlpService.GetDeidentifyTemplate google.privacy.dlp.v2.DlpService.GetDiscoveryConfig google.privacy.dlp.v2.DlpService.GetFileStoreDataProfile google.privacy.dlp.v2.DlpService.GetInspectTemplate google.privacy.dlp.v2.DlpService.GetJobTrigger google.privacy.dlp.v2.DlpService.GetProjectDataProfile google.privacy.dlp.v2.DlpService.GetStoredInfoType google.privacy.dlp.v2.DlpService.GetTableDataProfile google.privacy.dlp.v2.DlpService.InspectContent google.privacy.dlp.v2.DlpService.ListColumnDataProfiles google.privacy.dlp.v2.DlpService.ListConnections google.privacy.dlp.v2.DlpService.ListDeidentifyTemplates google.privacy.dlp.v2.DlpService.ListDiscoveryConfigs google.privacy.dlp.v2.DlpService.ListFileStoreDataProfiles google.privacy.dlp.v2.DlpService.ListInspectTemplates google.privacy.dlp.v2.DlpService.ListJobTriggers google.privacy.dlp.v2.DlpService.ListProjectDataProfiles google.privacy.dlp.v2.DlpService.ListStoredInfoTypes google.privacy.dlp.v2.DlpService.ListTableDataProfiles google.privacy.dlp.v2.DlpService.ReidentifyContent google.privacy.dlp.v2.DlpService.SearchConnections
ADMIN_WRITE
google.privacy.dlp.v2.DlpService.CreateConnection google.privacy.dlp.v2.DlpService.CreateDeidentifyTemplate google.privacy.dlp.v2.DlpService.CreateDiscoveryConfig google.privacy.dlp.v2.DlpService.CreateInspectTemplate google.privacy.dlp.v2.DlpService.CreateJobTrigger google.privacy.dlp.v2.DlpService.CreateStoredInfoType google.privacy.dlp.v2.DlpService.DeleteConnection google.privacy.dlp.v2.DlpService.DeleteDeidentifyTemplate google.privacy.dlp.v2.DlpService.DeleteDiscoveryConfig google.privacy.dlp.v2.DlpService.DeleteFileStoreDataProfile google.privacy.dlp.v2.DlpService.DeleteInspectTemplate google.privacy.dlp.v2.DlpService.DeleteJobTrigger google.privacy.dlp.v2.DlpService.DeleteStoredInfoType google.privacy.dlp.v2.DlpService.DeleteTableDataProfile google.privacy.dlp.v2.DlpService.HybridInspectJobTrigger google.privacy.dlp.v2.DlpService.UpdateConnection google.privacy.dlp.v2.DlpService.UpdateDeidentifyTemplate google.privacy.dlp.v2.DlpService.UpdateDiscoveryConfig google.privacy.dlp.v2.DlpService.UpdateInspectTemplate google.privacy.dlp.v2.DlpService.UpdateJobTrigger google.privacy.dlp.v2.DlpService.UpdateStoredInfoType
DATA_READ
google.privacy.dlp.v2.DlpService.GetDlpJob google.privacy.dlp.v2.DlpService.ListDlpJobs
DATA_WRITE
google.privacy.dlp.v2.DlpService.ActivateJobTrigger google.privacy.dlp.v2.DlpService.CancelDlpJob google.privacy.dlp.v2.DlpService.CreateDlpJob google.privacy.dlp.v2.DlpService.DeleteDlpJob google.privacy.dlp.v2.DlpService.FinishDlpJob google.privacy.dlp.v2.DlpService.HybridInspectDlpJob
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Sensitive Data Protection.
google.privacy.dlp.v2.DlpService
The following audit logs are associated with methods belonging to
google.privacy.dlp.v2.DlpService .
ActivateJobTrigger
Method : google.privacy.dlp.v2.DlpService.ActivateJobTrigger
Audit log type : Admin activity
Permissions : dlp.jobTriggers.get - ADMIN_READ
dlp.jobs.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.ActivateJobTrigger"
CancelDlpJob
Method : google.privacy.dlp.v2.DlpService.CancelDlpJob
Audit log type : Data access
Permissions : dlp.jobs.cancel - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.CancelDlpJob"
CreateConnection
Method : google.privacy.dlp.v2.DlpService.CreateConnection
Audit log type : Admin activity
Permissions : dlp.connections.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.CreateConnection"
CreateDeidentifyTemplate
Method : google.privacy.dlp.v2.DlpService.CreateDeidentifyTemplate
Audit log type : Admin activity
Permissions : dlp.deidentifyTemplates.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.CreateDeidentifyTemplate"
CreateDiscoveryConfig
Method : google.privacy.dlp.v2.DlpService.CreateDiscoveryConfig
Audit log type : Admin activity
Permissions : dlp.inspectTemplates.get - ADMIN_READ
dlp.jobTriggers.create - ADMIN_WRITE
dlp.jobs.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.CreateDiscoveryConfig"
CreateDlpJob
Method : google.privacy.dlp.v2.DlpService.CreateDlpJob
Audit log type : Admin activity
Permissions : dlp.inspectTemplates.get - ADMIN_READ
dlp.jobs.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.CreateDlpJob"
CreateInspectTemplate
Method : google.privacy.dlp.v2.DlpService.CreateInspectTemplate
Audit log type : Admin activity
Permissions : dlp.inspectTemplates.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.CreateInspectTemplate"
CreateJobTrigger
Method : google.privacy.dlp.v2.DlpService.CreateJobTrigger
Audit log type : Admin activity
Permissions : dlp.jobTriggers.create - ADMIN_WRITE
dlp.jobs.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.CreateJobTrigger"
CreateStoredInfoType
Method : google.privacy.dlp.v2.DlpService.CreateStoredInfoType
Audit log type : Admin activity
Permissions : dlp.storedInfoTypes.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.CreateStoredInfoType"
DeidentifyContent
Method : google.privacy.dlp.v2.DlpService.DeidentifyContent
Audit log type : Data access
Permissions : dlp.deidentifyTemplates.get - ADMIN_READ
dlp.inspectTemplates.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.DeidentifyContent"
DeleteConnection
Method : google.privacy.dlp.v2.DlpService.DeleteConnection
Audit log type : Admin activity
Permissions : dlp.connections.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.DeleteConnection"
DeleteDeidentifyTemplate
Method : google.privacy.dlp.v2.DlpService.DeleteDeidentifyTemplate
Audit log type : Admin activity
Permissions : dlp.deidentifyTemplates.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.DeleteDeidentifyTemplate"
DeleteDiscoveryConfig
Method : google.privacy.dlp.v2.DlpService.DeleteDiscoveryConfig
Audit log type : Admin activity
Permissions : dlp.jobTriggers.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.DeleteDiscoveryConfig"
DeleteDlpJob
Method : google.privacy.dlp.v2.DlpService.DeleteDlpJob
Audit log type : Data access
Permissions : dlp.jobs.delete - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.DeleteDlpJob"
DeleteFileStoreDataProfile
Method : google.privacy.dlp.v2.DlpService.DeleteFileStoreDataProfile
Audit log type : Admin activity
Permissions : dlp.fileStoreProfiles.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.DeleteFileStoreDataProfile"
DeleteInspectTemplate
Method : google.privacy.dlp.v2.DlpService.DeleteInspectTemplate
Audit log type : Admin activity
Permissions : dlp.inspectTemplates.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.DeleteInspectTemplate"
DeleteJobTrigger
Method : google.privacy.dlp.v2.DlpService.DeleteJobTrigger
Audit log type : Admin activity
Permissions : dlp.jobTriggers.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.DeleteJobTrigger"
DeleteStoredInfoType
Method : google.privacy.dlp.v2.DlpService.DeleteStoredInfoType
Audit log type : Admin activity
Permissions : dlp.storedInfoTypes.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.DeleteStoredInfoType"
DeleteTableDataProfile
Method : google.privacy.dlp.v2.DlpService.DeleteTableDataProfile
Audit log type : Admin activity
Permissions : dlp.tableDataProfiles.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.DeleteTableDataProfile"
FinishDlpJob
Method : google.privacy.dlp.v2.DlpService.FinishDlpJob
Audit log type : Data access
Permissions : dlp.jobs.update - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.FinishDlpJob"
GetColumnDataProfile
Method : google.privacy.dlp.v2.DlpService.GetColumnDataProfile
Audit log type : Data access
Permissions : dlp.columnDataProfiles.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.GetColumnDataProfile"
GetConnection
Method : google.privacy.dlp.v2.DlpService.GetConnection
Audit log type : Data access
Permissions : dlp.connections.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.GetConnection"
GetDeidentifyTemplate
Method : google.privacy.dlp.v2.DlpService.GetDeidentifyTemplate
Audit log type : Data access
Permissions : dlp.deidentifyTemplates.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.GetDeidentifyTemplate"
GetDiscoveryConfig
Method : google.privacy.dlp.v2.DlpService.GetDiscoveryConfig
Audit log type : Data access
Permissions : dlp.jobTriggers.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.GetDiscoveryConfig"
GetDlpJob
Method : google.privacy.dlp.v2.DlpService.GetDlpJob
Audit log type : Data access
Permissions : dlp.jobs.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.GetDlpJob"
GetFileStoreDataProfile
Method : google.privacy.dlp.v2.DlpService.GetFileStoreDataProfile
Audit log type : Data access
Permissions : dlp.fileStoreProfiles.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.GetFileStoreDataProfile"
GetInspectTemplate
Method : google.privacy.dlp.v2.DlpService.GetInspectTemplate
Audit log type : Data access
Permissions : dlp.inspectTemplates.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.GetInspectTemplate"
GetJobTrigger
Method : google.privacy.dlp.v2.DlpService.GetJobTrigger
Audit log type : Data access
Permissions : dlp.jobTriggers.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.GetJobTrigger"
GetProjectDataProfile
Method : google.privacy.dlp.v2.DlpService.GetProjectDataProfile
Audit log type : Data access
Permissions : dlp.projectDataProfiles.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.GetProjectDataProfile"
GetStoredInfoType
Method : google.privacy.dlp.v2.DlpService.GetStoredInfoType
Audit log type : Data access
Permissions : dlp.storedInfoTypes.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.GetStoredInfoType"
GetTableDataProfile
Method : google.privacy.dlp.v2.DlpService.GetTableDataProfile
Audit log type : Data access
Permissions : dlp.tableDataProfiles.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.GetTableDataProfile"
HybridInspectDlpJob
Method : google.privacy.dlp.v2.DlpService.HybridInspectDlpJob
Audit log type : Data access
Permissions : dlp.jobs.hybridInspect - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.HybridInspectDlpJob"
HybridInspectJobTrigger
Method : google.privacy.dlp.v2.DlpService.HybridInspectJobTrigger
Audit log type : Admin activity
Permissions : dlp.jobTriggers.hybridInspect - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.HybridInspectJobTrigger"
InspectContent
Method : google.privacy.dlp.v2.DlpService.InspectContent
Audit log type : Data access
Permissions : dlp.inspectTemplates.get - ADMIN_READ
dlp.storedInfoTypes.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.InspectContent"
ListColumnDataProfiles
Method : google.privacy.dlp.v2.DlpService.ListColumnDataProfiles
Audit log type : Data access
Permissions : dlp.columnDataProfiles.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.ListColumnDataProfiles"
ListConnections
Method : google.privacy.dlp.v2.DlpService.ListConnections
Audit log type : Data access
Permissions : dlp.connections.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.ListConnections"
ListDeidentifyTemplates
Method : google.privacy.dlp.v2.DlpService.ListDeidentifyTemplates
Audit log type : Data access
Permissions : dlp.deidentifyTemplates.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.ListDeidentifyTemplates"
ListDiscoveryConfigs
Method : google.privacy.dlp.v2.DlpService.ListDiscoveryConfigs
Audit log type : Data access
Permissions : dlp.jobTriggers.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.ListDiscoveryConfigs"
ListDlpJobs
Method : google.privacy.dlp.v2.DlpService.ListDlpJobs
Audit log type : Data access
Permissions : dlp.jobs.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.ListDlpJobs"
ListFileStoreDataProfiles
Method : google.privacy.dlp.v2.DlpService.ListFileStoreDataProfiles
Audit log type : Data access
Permissions : dlp.fileStoreProfiles.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.ListFileStoreDataProfiles"
ListInspectTemplates
Method : google.privacy.dlp.v2.DlpService.ListInspectTemplates
Audit log type : Data access
Permissions : dlp.inspectTemplates.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.ListInspectTemplates"
ListJobTriggers
Method : google.privacy.dlp.v2.DlpService.ListJobTriggers
Audit log type : Data access
Permissions : dlp.jobTriggers.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.ListJobTriggers"
ListProjectDataProfiles
Method : google.privacy.dlp.v2.DlpService.ListProjectDataProfiles
Audit log type : Data access
Permissions : dlp.projectDataProfiles.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.ListProjectDataProfiles"
ListStoredInfoTypes
Method : google.privacy.dlp.v2.DlpService.ListStoredInfoTypes
Audit log type : Data access
Permissions : dlp.storedInfoTypes.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.ListStoredInfoTypes"
ListTableDataProfiles
Method : google.privacy.dlp.v2.DlpService.ListTableDataProfiles
Audit log type : Data access
Permissions : dlp.tableDataProfiles.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.ListTableDataProfiles"
ReidentifyContent
Method : google.privacy.dlp.v2.DlpService.ReidentifyContent
Audit log type : Data access
Permissions : dlp.deidentifyTemplates.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.ReidentifyContent"
SearchConnections
Method : google.privacy.dlp.v2.DlpService.SearchConnections
Audit log type : Data access
Permissions : dlp.connections.search - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.SearchConnections"
UpdateConnection
Method : google.privacy.dlp.v2.DlpService.UpdateConnection
Audit log type : Admin activity
Permissions : dlp.connections.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.UpdateConnection"
UpdateDeidentifyTemplate
Method : google.privacy.dlp.v2.DlpService.UpdateDeidentifyTemplate
Audit log type : Admin activity
Permissions : dlp.deidentifyTemplates.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.UpdateDeidentifyTemplate"
UpdateDiscoveryConfig
Method : google.privacy.dlp.v2.DlpService.UpdateDiscoveryConfig
Audit log type : Admin activity
Permissions : dlp.jobTriggers.update - ADMIN_WRITE
dlp.jobs.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.UpdateDiscoveryConfig"
UpdateInspectTemplate
Method : google.privacy.dlp.v2.DlpService.UpdateInspectTemplate
Audit log type : Admin activity
Permissions : dlp.inspectTemplates.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.UpdateInspectTemplate"
UpdateJobTrigger
Method : google.privacy.dlp.v2.DlpService.UpdateJobTrigger
Audit log type : Admin activity
Permissions : dlp.jobTriggers.update - ADMIN_WRITE
dlp.jobs.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.UpdateJobTrigger"
UpdateStoredInfoType
Method : google.privacy.dlp.v2.DlpService.UpdateStoredInfoType
Audit log type : Admin activity
Permissions : dlp.storedInfoTypes.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.privacy.dlp.v2.DlpService.UpdateStoredInfoType"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.privacy.dlp.v2.DlpService.ListInfoTypes
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
