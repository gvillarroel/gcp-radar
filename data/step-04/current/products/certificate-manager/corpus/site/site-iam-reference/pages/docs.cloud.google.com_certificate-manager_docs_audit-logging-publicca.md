---
title: "Public Certificate Authority audit logging \_|\_ Certificate Manager \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional
source_metadata:
  url: https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca
  title: "Public Certificate Authority audit logging \_|\_ Certificate Manager \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Manager
Guides
Send feedback
Public Certificate Authority audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Public Certificate Authority. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Public Certificate Authority audit logs use the service name publicca.googleapis.com .
Filter for this service:
protoPayload . serviceName = "publicca.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Public Certificate Authority generates an audit log whose category is dependent on the
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
DATA_WRITE
google.cloud.security.publicca.v1.PublicCertificateAuthorityService.CreateExternalAccountKey google.cloud.security.publicca.v1alpha1.PublicCertificateAuthorityService.CreateExternalAccountKey google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityService.CreateExternalAccountKey
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Public Certificate Authority.
google.cloud.security.publicca.v1.PublicCertificateAuthorityService
The following audit logs are associated with methods belonging to
google.cloud.security.publicca.v1.PublicCertificateAuthorityService .
CreateExternalAccountKey
Method : google.cloud.security.publicca.v1.PublicCertificateAuthorityService.CreateExternalAccountKey
Audit log type : Data access
Permissions : publicca.externalAccountKeys.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.security.publicca.v1.PublicCertificateAuthorityService.CreateExternalAccountKey"
google.cloud.security.publicca.v1alpha1.PublicCertificateAuthorityService
The following audit logs are associated with methods belonging to
google.cloud.security.publicca.v1alpha1.PublicCertificateAuthorityService .
CreateExternalAccountKey
Method : google.cloud.security.publicca.v1alpha1.PublicCertificateAuthorityService.CreateExternalAccountKey
Audit log type : Data access
Permissions : publicca.externalAccountKeys.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.security.publicca.v1alpha1.PublicCertificateAuthorityService.CreateExternalAccountKey"
google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityService
The following audit logs are associated with methods belonging to
google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityService .
CreateExternalAccountKey
Method : google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityService.CreateExternalAccountKey
Audit log type : Data access
Permissions : publicca.externalAccountKeys.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityService.CreateExternalAccountKey"
Available audit logs
The following types of audit logs are available for Public Certificate Authority:
Data Access audit logs
Includes "data write" that write user provided data.
To receive Data Access audit logs, you must
explicitly enable them.
For fuller descriptions of the audit log types, see
Types of audit logs .
Audit log format
Audit log entries include the following objects:
The log entry itself, which is an object of type LogEntry .
Useful fields include the following:
The logName contains the resource ID and audit log type.
The resource contains the target of the audited operation.
The timeStamp contains the time of the audited operation.
The protoPayload contains the audited information.
The audit logging data, which is an AuditLog object held in
the protoPayload field of the log entry.
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
Enable audit logging
Admin Activity audit logs are always enabled; you can't disable them.
Data Access audit logs are disabled by default and aren't written unless
explicitly enabled (the exception is Data Access audit logs for
BigQuery, which can't be disabled).
For information about enabling some or all of your Data Access audit logs, see
Enable Data Access audit logs .
View audit logs
You can query for all audit logs or you can query for logs by their
audit log name . The audit log name includes the
resource identifier
of the Google Cloud project, folder, billing account, or
organization for which you want to view audit logging information.
Your queries can specify indexed LogEntry fields, and if you use
the Log Analytics page, which supports SQL queries, then you can
view your query results as a chart .
For more information about querying your logs, see the following pages:
Build queries in the Logs Explorer .
Query and view logs in Observability Analytics .
Sample queries for security insights .
You can view audit logs in Cloud Logging by using the
Google Cloud console, the Google Cloud CLI, or the Logging API.
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
For information about summarizing log entries in the Logs Explorer
by using Gemini, see
Summarize log entries with Gemini assistance .
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
API
When building your queries, supply a valid resource identifier in each of
the log names. For example, if your query includes a PROJECT_ID ,
then the project identifier you supply must refer to the currently selected
Google Cloud project.
For example, to use the Logging API to view your project-level
audit log entries, do the following:
Go to the Try this API section in the documentation for the
entries.list
method.
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
