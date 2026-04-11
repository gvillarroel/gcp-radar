---
title: "Resource Manager audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs/access-control-folders
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/audit-logging
  title: "Resource Manager audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Resource Manager
Guides
Send feedback
Resource Manager audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the audit logs created by Resource Manager as part of
Cloud Audit Logs .
Overview
Google Cloud services write audit logs to help you answer the questions, "Who
did what, where, and when?" within your Google Cloud resources.
Your Google Cloud projects contain only the audit logs for resources that are
directly within the Google Cloud project. Other Google Cloud resources,
such as folders, organizations, and billing accounts, contain the audit logs for
the entity itself.
For a general overview of Cloud Audit Logs, see
Cloud Audit Logs overview . For a deeper understanding
of the audit log format, see
Understand audit logs .
Available audit logs
The following types of audit logs are available for Resource Manager:
Admin Activity audit logs
Includes "admin write" operations that write metadata or configuration
information.
You can't disable Admin Activity audit logs.
Data Access audit logs
Includes "admin read" operations that read metadata or configuration
information.
Also includes "data read" and "data write" operations that
read or write user-provided data.
To receive Data Access audit logs, you must
explicitly enable them.
For fuller descriptions of the audit log types, see
Types of audit logs .
Audited operations
The following table summarizes which API operations correspond to each audit log
type in Resource Manager:
Audit logs category
Resource Manager operations
Admin Activity logs (ADMIN_WRITE)
UpdateContactInfo
v3:
cloudresourcemanager.v3.organizations.setIamPolicy
cloudresourcemanager.v3.folders.create
cloudresourcemanager.v3.folders.delete
cloudresourcemanager.v3.folders.move
cloudresourcemanager.v3.folders.patch
cloudresourcemanager.v3.folders.setIamPolicy
cloudresourcemanager.v3.folders.undelete
cloudresourcemanager.v3.projects.create
cloudresourcemanager.v3.projects.delete
cloudresourcemanager.v3.projects.move
cloudresourcemanager.v3.projects.patch
cloudresourcemanager.v3.projects.setIamPolicy
cloudresourcemanager.v3.projects.undelete
cloudresourcemanager.v3.tagBindings.create
cloudresourcemanager.v3.tagBindings.delete
cloudresourcemanager.v3.tagKeys.create
cloudresourcemanager.v3.tagKeys.delete
cloudresourcemanager.v3.tagKeys.patch
cloudresourcemanager.v3.tagKeys.setIamPermissions
cloudresourcemanager.v3.tagValues.create
cloudresourcemanager.v3.tagValues.delete
cloudresourcemanager.v3.tagValues.patch
cloudresourcemanager.v3.tagValues.setIamPermissions
v2beta1:
cloudresourcemanager.v2beta1.folders.create
cloudresourcemanager.v2beta1.folders.delete
cloudresourcemanager.v2beta1.folders.move
cloudresourcemanager.v2beta1.folders.update
cloudresourcemanager.v2beta1.folders.setIamPolicy
cloudresourcemanager.v2beta1.folders.undelete
v2:
cloudresourcemanager.v2.folders.create
cloudresourcemanager.v2.folders.delete
cloudresourcemanager.v2.folders.move
cloudresourcemanager.v2.folders.update
cloudresourcemanager.v2.folders.setIamPolicy
cloudresourcemanager.v2.folders.undelete
v1beta1:
cloudresourcemanager.v1beta1.organizations.setIamPolicy
cloudresourcemanager.v1beta1.organizations.update
cloudresourcemanager.v1beta1.projects.create
cloudresourcemanager.v1beta1.projects.delete
cloudresourcemanager.v1beta1.projects.setIamPolicy
cloudresourcemanager.v1beta1.projects.undelete
cloudresourcemanager.v1beta1.projects.update
v1:
cloudresourcemanager.v1.folders.clearOrgPolicy
cloudresourcemanager.v1.folders.setOrgPolicy
cloudresourcemanager.v1.organizations.clearOrgPolicy
cloudresourcemanager.v1.organizations.setIamPolicy
cloudresourcemanager.v1.organizations.setOrgPolicy
cloudresourcemanager.v1.projects.clearOrgPolicy
cloudresourcemanager.v1.projects.create
cloudresourcemanager.v1.projects.delete
cloudresourcemanager.v1.projects.setIamPolicy
cloudresourcemanager.v1.projects.setOrgPolicy
cloudresourcemanager.v1.projects.undelete
cloudresourcemanager.v1.projects.update
Data Access logs (ADMIN_READ)
GetContactInfo
v3:
cloudresourcemanager.v3.organizations.get
cloudresourcemanager.v3.organizations.getIamPolicy
cloudresourcemanager.v3.organizations.search
cloudresourcemanager.v3.organizations.testIamPermissions
cloudresourcemanager.v3.folders.get
cloudresourcemanager.v3.folders.getIamPolicy
cloudresourcemanager.v3.folders.list
cloudresourcemanager.v3.folders.search
cloudresourcemanager.v3.folders.testIamPermissions
cloudresourcemanager.v3.projects.get
cloudresourcemanager.v3.projects.getIamPolicy
cloudresourcemanager.v3.projects.list
cloudresourcemanager.v3.projects.search
cloudresourcemanager.v3.projects.testIamPermissions
cloudresourcemanager.v3.tagKeys.get
cloudresourcemanager.v3.tagKeys.getIamPolicy
cloudresourcemanager.v3.tagKeys.list
cloudresourcemanager.v3.tagKeys.testIamPermissions
cloudresourcemanager.v3.tagValues.get
cloudresourcemanager.v3.tagValues.getIamPolicy
cloudresourcemanager.v3.tagValues.list
cloudresourcemanager.v3.tagValues.testIamPermissions
v2beta1:
cloudresourcemanager.v2beta1.folders.get
cloudresourcemanager.v2beta1.folders.getIamPolicy
cloudresourcemanager.v2beta1.folders.list
v2:
cloudresourcemanager.v2.folders.get
cloudresourcemanager.v2.folders.getIamPolicy
cloudresourcemanager.v2.folders.list
v1beta1:
cloudresourcemanager.v1beta1.organizations.get
cloudresourcemanager.v1beta1.organizations.getIamPolicy
cloudresourcemanager.v1beta1.projects.get
cloudresourcemanager.v1beta1.projects.getIamPolicy
v1:
cloudresourcemanager.v1.folders.getEffectiveOrgPolicy
cloudresourcemanager.v1.folders.getOrgPolicy
cloudresourcemanager.v1.folders.listAvailableOrgPolicyConstraints
cloudresourcemanager.v1.folders.listOrgPolicies
cloudresourcemanager.v1.organizations.get
cloudresourcemanager.v1.organizations.getEffectiveOrgPolicy
cloudresourcemanager.v1.organizations.getIamPolicy
cloudresourcemanager.v1.organizations.getOrgPolicy
cloudresourcemanager.v1.organizations.listAvailableOrgPolicyConstraints
cloudresourcemanager.v1.organizations.listOrgPolicies
cloudresourcemanager.v1.projects.get
cloudresourcemanager.v1.projects.getEffectiveOrgPolicy
cloudresourcemanager.v1.projects.getIamPolicy
cloudresourcemanager.v1.projects.listAvailableOrgPolicyConstraints
cloudresourcemanager.v1.projects.listOrgPolicies
Data Access logs (ADMIN_READ under integrating service name) [1]
v3:
cloudresourcemanager.v3.tagBindings.list
cloudresourcemanager.v3.effectiveTags.list
Data Access logs (ADMIN_READ under Organization Policy Service) [2]
v2:
orgpolicy.policies.getEffectivePolicy
[1] ADMIN_READ must be enabled under
the service for the particular resource to which the tag is attached in order
to enable this log
[2] ADMIN_READ must be enabled under
the Organization Policy Service API in order to enable this log
Note: The audit logs for projects.delete operations are written to the
project's parent resource, which might not be the organization resource.
The audit logs for tags operations in other services, such as
cloudsql.instances.listEffectiveTags , are written to the resource's parent and
are included in Resource Manager audit logs. They are not included in the service
resource's audit logs. To see these logs, you must enable
ADMIN_READ under the service for the particular resource to which
the tag is attached.
The GetContactInfo and UpdateContactInfo operations
support the ContactInfo service for the EU General Data Protection
Regulation (GDPR). These operations update and retrieve contact information for
an EU Representative and a Data Protections Officer, which can be modified in
the Google Cloud console on the
Google Cloud Privacy & Security page.
Audit log format
Audit log entries include the following objects:
The log entry itself, which is an object of type LogEntry .
Useful fields include the following:
The logName contains the resource ID and audit log type. The resource
is a project, folder, organization, or billing account.
The resource contains the target of the audited operation.
The timeStamp contains the time of the audited operation.
The protoPayload contains the audited information.
The audit logging data, which is an AuditLog object held in
the protoPayload field of the log entry.
The @type field is set to "type.googleapis.com/google.cloud.audit.AuditLog" .
The serviceName field identifies the service that wrote the
audit log. The format of this field is service specific.
Optional service-specific audit information, which is a service-specific
object. For earlier integrations, this object is held in the serviceData
field of the AuditLog object; later integrations use the metadata field.
For other fields in these objects, and how to interpret them, review
Understand audit logs .
Log name
Cloud Audit Logs log names include resource identifiers indicating the
Google Cloud project or other Google Cloud entity that owns the audit
logs, and whether the log contains Admin Activity, Data Access, Policy Denied,
or System Event audit logging data.
The following are the audit log names, including variables for the resource
identifiers:
projects/ PROJECT_ID /logs/cloudaudit.googleapis.com%2Factivity
projects/ PROJECT_ID /logs/cloudaudit.googleapis.com%2Fdata_access
projects/ PROJECT_ID /logs/cloudaudit.googleapis.com%2Fsystem_event
projects/ PROJECT_ID /logs/cloudaudit.googleapis.com%2Fpolicy
folders/ FOLDER_ID /logs/cloudaudit.googleapis.com%2Factivity
folders/ FOLDER_ID /logs/cloudaudit.googleapis.com%2Fdata_access
folders/ FOLDER_ID /logs/cloudaudit.googleapis.com%2Fsystem_event
folders/ FOLDER_ID /logs/cloudaudit.googleapis.com%2Fpolicy
billingAccounts/ BILLING_ACCOUNT_ID /logs/cloudaudit.googleapis.com%2Factivity
billingAccounts/ BILLING_ACCOUNT_ID /logs/cloudaudit.googleapis.com%2Fdata_access
billingAccounts/ BILLING_ACCOUNT_ID /logs/cloudaudit.googleapis.com%2Fsystem_event
billingAccounts/ BILLING_ACCOUNT_ID /logs/cloudaudit.googleapis.com%2Fpolicy
organizations/ ORGANIZATION_ID /logs/cloudaudit.googleapis.com%2Factivity
organizations/ ORGANIZATION_ID /logs/cloudaudit.googleapis.com%2Fdata_access
organizations/ ORGANIZATION_ID /logs/cloudaudit.googleapis.com%2Fsystem_event
organizations/ ORGANIZATION_ID /logs/cloudaudit.googleapis.com%2Fpolicy
Note: The part of the log name following /logs/ must be URL-encoded. The
forward-slash character, / , must be written as %2F .
Service name
Resource Manager audit logs use the service name
cloudresourcemanager.googleapis.com .
For a list of all the Cloud Logging API service names and their corresponding
monitored resource type, see
Map services to resources .
Resource types
Resource Manager audit logs use the resource type project for all audit
logs.
For a list of all the Cloud Logging monitored resource types and descriptive
information, see
Monitored resource types .
Caller identities
The IP address of the caller is held in the RequestMetadata.caller_ip field of
the AuditLog object. Logging might redact certain
caller identities and IP addresses.
For information about what information is redacted in audit logs, see
Caller identities in audit logs .
Enable audit logging
Admin Activity audit logs are always enabled; you can't disable them.
Data Access audit logs are disabled by default and aren't written unless
explicitly enabled (the exception is Data Access audit logs for
BigQuery, which can't be disabled).
For information about enabling some or all of your Data Access audit logs, see
Enable Data Access audit logs .
Permissions and roles
IAM permissions and roles determine your ability to
access audit logs data in Google Cloud resources.
When deciding which
Logging-specific permissions and roles
apply to your use case, consider the following:
The Logs Viewer role ( roles/logging.viewer ) gives you read-only access to
Admin Activity, Policy Denied, and System Event audit logs. If you have just
this role, you cannot view Data Access audit logs that are in the
_Default bucket.
The Private Logs Viewer role (roles/logging.privateLogViewer ) includes the
permissions contained in roles/logging.viewer , plus the ability to read
Data Access audit logs in the _Default bucket.
Note that if these private logs are stored in user-defined buckets, then any
user who has permissions to read logs in those buckets can read the private
logs. For more information about log buckets, see
Routing and storage overview .
For more information about the IAM permissions and roles that
apply to audit logs data, see
Access control with IAM .
View logs
You can query for all audit logs or you can query for logs by their
audit log name. The audit log name includes the
resource identifier
of the Google Cloud project, folder, billing account, or
organization for which you want to view audit logging information.
Your queries can specify indexed LogEntry fields.
For more information about querying your logs, see
Build queries in the Logs Explorer
The Logs Explorer lets you view filter individual log entries. If you want
to use SQL to analyze groups of log entries, then use the Log Analytics
page. For more information, see:
Query and view logs in Observability Analytics .
Sample queries for security insights .
Chart query results .
Most audit logs can be viewed in Cloud Logging by using the
Google Cloud console, the Google Cloud CLI, or the Logging API.
However, for audit logs related to billing, you can only use the
Google Cloud CLI or the Logging API.
Console
In the Google Cloud console, you can use the Logs Explorer
to retrieve your audit log entries for your Google Cloud project, folder,
or organization:
Note: You can't view audit logs for Cloud Billing accounts in the
Google Cloud console. You must use the API or the gcloud CLI.
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Select an existing Google Cloud project, folder, or organization.
To display all audit logs, enter either of the following queries
into the query-editor field, and then click Run query :
logName:"cloudaudit.googleapis.com"
protoPayload."@type"="type.googleapis.com/google.cloud.audit.AuditLog"
To display the audit logs for a specific resource and audit log type,
in the Query builder pane, do the following:
In Resource type , select the Google Cloud resource whose
audit logs you want to see.
In Log name , select the audit log type that you want to see:
For Admin Activity audit logs, select activity .
For Data Access audit logs, select data_access .
For System Event audit logs, select system_event .
For Policy Denied audit logs, select policy .
Click Run query .
If you don't see these options, then there aren't any audit logs of
that type available in the Google Cloud project, folder, or
organization.
If you're experiencing issues when trying to view logs in the
Logs Explorer, see the
troubleshooting
information.
For more information about querying by using the Logs Explorer, see
Build queries in the Logs Explorer .
gcloud
The Google Cloud CLI provides a command-line interface to the
Logging API. Supply a valid resource identifier in each of the log
names. For example, if your query includes a PROJECT_ID , then the
project identifier you supply must refer to the currently selected
Google Cloud project.
To read your Google Cloud project-level audit log entries, run
the following command:
gcloud logging read "logName : projects/ PROJECT_ID /logs/cloudaudit.googleapis.com" \
--project= PROJECT_ID
To read your folder-level audit log entries, run the following command:
gcloud logging read "logName : folders/ FOLDER_ID /logs/cloudaudit.googleapis.com" \
--folder= FOLDER_ID
To read your organization-level audit log entries, run the following
command:
gcloud logging read "logName : organizations/ ORGANIZATION_ID /logs/cloudaudit.googleapis.com" \
--organization= ORGANIZATION_ID
To read your Cloud Billing account-level audit log entries, run the following command:
gcloud logging read "logName : billingAccounts/ BILLING_ACCOUNT_ID /logs/cloudaudit.googleapis.com" \
--billing-account= BILLING_ACCOUNT_ID
Add the --freshness flag
to your command to read logs that are more than 1 day old.
For more information about using the gcloud CLI, see
gcloud logging read .
REST
When building your queries, supply a valid resource identifier in each of
the log names. For example, if your query includes a PROJECT_ID ,
then the project identifier you supply must refer to the currently selected
Google Cloud project.
For example, to use the Logging API to view your project-level
audit log entries, do the following:
Go to the Try this API section in the documentation for the
entries.list method.
Put the following into the Request body part of the Try this
API form. Clicking this prepopulated form
automatically fills the request body, but you need to supply a valid
PROJECT_ID in each of the log names.
{
"resourceNames": [
"projects/ PROJECT_ID "
],
"pageSize": 5,
"filter": "logName : projects/ PROJECT_ID /logs/cloudaudit.googleapis.com"
}
Click Execute .
Sample queries
To use the sample queries in the following table, complete these steps:
Replace the variables in the query expression with your own project
information, then copy the expression using the clipboard icon
content_copy .
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Enable Show query to open the query-editor field, then paste the
expression into the query-editor field:
Click Run query . Logs that match your query are listed in the Query
results pane.
To find audit logs for Resource Manager, use the following queries in the
Logs Explorer:
Query name
Expression
Project created
log_id ( "cloudaudit.googleapis.com/activity" )
protoPayload . methodName = "CreateProject"
resource . labels . project_id = " PROJECT_ID "
Project deleted
log_id ( "cloudaudit.googleapis.com/activity" )
protoPayload . methodName : "DeleteProject"
resource . labels . project_id = " PROJECT_ID "
Route audit logs
You can route audit logs to supported
destinations in the same way that you can route other kinds of logs. Here are
some reasons you might want to route your audit logs:
To keep audit logs for a longer period of time or to use more powerful
search capabilities, you can route copies of your audit logs to
Cloud Storage, BigQuery, or Pub/Sub. Using
Pub/Sub, you can route to other applications, other
repositories, and to third parties.
To manage your audit logs across an entire organization, you can create
aggregated sinks that can
route logs from any or all Google Cloud projects in the organization.
If your enabled Data Access audit logs are pushing your
Google Cloud projects over your log allotments, you can create sinks that
exclude the Data Access audit logs from Logging.
For instructions about routing logs, see
Route logs to supported destinations .
Pricing
For more information about pricing, see the Cloud Logging sections in the
Google Cloud Observability pricing page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
