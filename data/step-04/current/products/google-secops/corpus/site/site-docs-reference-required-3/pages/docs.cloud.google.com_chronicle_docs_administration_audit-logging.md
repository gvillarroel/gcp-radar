---
title: "Google SecOps audit logs \_|\_ Google Security Operations \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/chronicle/docs/administration/audit-logging
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/yara-l/functions
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/administration/audit-logging
  title: "Google SecOps audit logs \_|\_ Google Security Operations \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Google SecOps audit logs
Supported in:
Google secops
SIEM
Google Cloud services write audit logs to help tell you who did what, where, and
when within your Google Cloud resources. This page describes the audit
logs created by Google Security Operations and written as
Cloud Audit Logs .
For a general overview of Cloud Audit Logs, see Cloud Audit Logs
overview . For a deeper understanding of the audit log
format, see Understanding audit
logs .
Available audit logs
The audit log service name and audited operations are different depending on
which preview program you are enrolled in. Google SecOps audit logs use one
of the following service names:
chronicle.googleapis.com
chronicleservicemanager.googleapis.com
malachitefrontend-pa.googleapis.com
Audit operations use the resource type audited_resource for all
audit logs written, regardless of the preview program. There is no difference
based on the preview program you are enrolled in.
Logs with service name chronicle.googleapis.com
The following log types are available for Google SecOps audit logs with the
chronicle.googleapis.com service name.
For more information, see Google SecOps permissions in
IAM .
Audit log type
Description
Admin Activity audit logs
Includes admin write operations that write metadata or configuration information. Actions in Google SecOps that generate this type of log include updating feeds and creating rules.
chronicle.googleapis.com/feeds.update
chronicle.googleapis.com/rules.create
chronicle.googleapis.com/parsers.activate
Data Access audit logs
Includes admin read operations that read metadata or configuration information. Also includes data read and data write operations that read or write user-provided data. Actions in Google SecOps that generate this type of log include getting feeds and listing rules.
Enable the data read setting for your Google Cloud project to record SIEM search queries run by users.
chronicle.googleapis.com/feeds.get
chronicle.googleapis.com/rules.list
chronicle.googleapis.com/curatedRuleSets.countCuratedRuleSetDetections
Logs with service name chronicleservicemanager.googleapis.com
Google SecOps audit logs written using the
chronicleservicemanager.googleapis.com service name are only available at the
organization level, not at the project level.
The following log types are available for Google SecOps audit logs written
using the chronicleservicemanager.googleapis.com service name.
Audit log type
Description
Admin Activity audit logs
Includes admin write operations that write metadata or configuration information. Actions in Google SecOps that generate this type of log include creating a Google Cloud Association and updating Google Cloud log filters.
chronicleservicemanager.googleapis.com/gcpAssociations.create
chronicleservicemanager.googleapis.com/gcpAssociations.delete
chronicleservicemanager.googleapis.com/gcpSettings.delete
Data Access audit logs
Includes admin read operations that read metadata or configuration information. Also includes data read and data write operations that read or write user-provided data. Actions in Google SecOps that generate this type of log include listing instances and customer metadata.
chronicleservicemanager.googleapis.com/gcpAssociations.get
chronicleservicemanager.googleapis.com/gcpSettings.get
Logs with service name malachitefrontend-pa.googleapis.com
The following log types are available for Google SecOps audit logs with the
malachitefrontend-pa.googleapis.com service name.
Chronicle Frontend API operations provide data to and from the
Google SecOps UI. The Chronicle Frontend API broadly consists of
data access operations.
Audit log type
Google SecOps operations
Admin Activity audit logs
Includes update-related activity, such as UpdateRole and UpdateSubject .
Data Access audit logs
Includes view-related activity, such as ListRoles and ListSubjects .
Audit log format
Audit log entries include the following objects:
Log entry itself, which is an object of type
LogEntry . Useful fields
include the following:
logName contains the resource ID and audit log type.
resource contains the target of the audited operation.
timeStamp contains the time of the audited operation.
protoPayload contains the audited information.
Audit logging data, which is an AuditLog
object held in the protoPayload field of the log entry.
Optional service-specific audit information, which is a service-specific
object. For older integrations, this object is held in the serviceData
field of the AuditLog object; newer integrations use the metadata field.
protoPayload.authenticationInfo.principalSubject field contains the user
principal. This indicates who performed the action.
protoPayload.methodName field contains the API method name invoked by the
UI on behalf of the user.
protoPayload.status field contains the status of the API call. An empty
status value indicates success. A non-empty status value indicates
failure and contains a description of the error. Status code 7 indicates
permission denied.
The chronicle.googleapis.com service includes the
protoPayload.authorizationInfo field. This contains the name of the
resource requested, the permission name that was checked, and whether the
access was granted or denied.
For other fields in these objects, and how to interpret them, review Understand
audit logs .
The following example shows log names for project-level Admin Activity audit
logs and Data Access audit logs. The variables denote Google Cloud project
identifiers.
projects/ PROJECT_ID /logs/cloudaudit.googleapis.com%2Factivity
projects/ PROJECT_ID /logs/cloudaudit.googleapis.com%2Fdata_access
Note: The part of the log name following /logs/ must be URL-encoded. The
forward-slash character, / , must be written as %2F .
Enable audit logging
To enable audit logging for the chronicle.googleapis.com service, see
Enable Data Access audit logs .
To enable audit logging for other services, contact
Google SecOps Support .
Caution: Data Access logs generated by Cloud Audit Logs can produce high volumes of low-value data. The volume might result in data throttling due to the enforcement of burst limits . To reduce unnecessary ingestion, consider filtering out logs from routine activity. See Tune Cloud Audit Logs filters for guidance.
Audit log storage
Google SecOps audit logs: Stored in a Google Cloud project owned by
you after enabling the Google SecOps API.
Legacy audit logs (including malachitefrontend-pa.googleapis.com ): Stored in a
Google Cloud project.
Admin Activity audit logs: Always enabled and cannot be disabled. To view them,
first migrate your Google SecOps instance to IAM for access control.
Data Access audit logs: Enabled by default. To disable in your customer-owned
project, contact your Google SecOps representative. Google SecOps
writes Data Access and Admin Activity audit logs to the project.
Configure the Data Access audit logs to include the search data
To populate UDM search and raw log search queries in the Google SecOps audit
logs, update the Data Access audit logs configuration with the necessary permissions.
In the navigation panel of the Google Cloud console, select IAM & Admin > Audit Logs .
Select an existing Google Cloud project, folder, or organization.
In Data Access audit logs configuration , select Chronicle API .
On the Permission Types tab, select all the listed permissions ( Admin Read , Data Read , Data Write ).
Click Save .
Repeat steps 3 to 5 for Chronicle Service Manager API .
View logs
To find and view audit logs, use the Google Cloud project ID. For legacy
audit logging of malachitefrontend-pa.googleapis.com configured using a
Google Cloud-owned project, Google SecOps Support provided you with this
information. You can further specify other indexed
LogEntry fields, like
resource.type . For more information, see Find log entries
quickly .
In the Google Cloud console, use the Logs Explorer to retrieve your
audit log entries for the Google Cloud project:
In the Google Cloud console, go to the
Logging > Logs Explorer page.
Go to Logs Explorer
Note: If you're using the Legacy Logs Viewer page, switch to the Logs Explorer page.
On the Logs Explorer page, select an existing
Google Cloud project, folder, or organization.
In the Query builder pane, do the following:
In Resource type , select the Google Cloud resource whose audit
logs you want to see.
In Log name , select the audit log type that you want to see:
For Admin Activity audit logs, select activity .
For Data Access audit logs, select data_access .
If you don't see these options, no audit logs of that type are available in
the Google Cloud project, folder, or organization.
For more information about querying by using the Logs Explorer , see
Build log queries .
For an example of an audit log entry and how to find the most important
information in it, see Sample audit log
entry .
Examples: chronicle.googleapis.com service name logs
The following sections describe common use cases for Cloud Audit Logs that
use the chronicle.googleapis.com service name.
Listing actions taken by a specific user
To find the actions taken by a given user, run the following query in the Logs Explorer :
resource.type="audited_resource"
resource.labels.service="chronicle.googleapis.com"
protoPayload.authenticationInfo.principalSubject=USER
Identifying users who took a specific action
To find the users who updated a detection rule, run the following query in the
Logs Explorer :
resource.type="audited_resource"
resource.labels.service="chronicle.googleapis.com"
protoPayload.methodName="google.cloud.chronicle.v1main.RuleService.UpdateRule"
Example: cloudresourcemanager.googleapis.com service name log
To find the users who updated an access control role or subject, run the
following query in the Logs Explorer :
resource.type="project"
resource.labels.service="cloudresourcemanager.googleapis.com"
protoPayload.methodName="SetIamPolicy"
Examples: malachitefrontend-pa.googleapis.com service name logs
The following sections describe common use cases for Cloud Audit Logs that
use the malachitefrontend-pa.googleapis.com service name.
Listing actions taken by a specific user
To find the actions taken by a given user, run the following query in the Logs Explorer :
resource.type="audited_resource"
resource.labels.service="malachitefrontend-pa.googleapis.com"
protoPayload.authenticationInfo.principalSubject=USER
Identifying users who took a specific action
To find the users who updated an access control subject, run the following query
in the Logs Explorer :
resource.type="audited_resource"
resource.labels.service="malachitefrontend-pa.googleapis.com"
protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateSubject"
To find the users who updated an access control role, run the following query in
the Logs Explorer :
resource.type="audited_resource"
resource.labels.service="malachitefrontend-pa.googleapis.com"
protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateRole"
To find the users who updated a detection rule, run the following query in the
Logs Explorer :
resource.type="audited_resource"
resource.labels.service="malachitefrontend-pa.googleapis.com"
protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateRule"
What's next
Cloud Audit Logs overview
Understand audit logs
Available audit logs
Google Cloud Observability pricing: Cloud Logging
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
