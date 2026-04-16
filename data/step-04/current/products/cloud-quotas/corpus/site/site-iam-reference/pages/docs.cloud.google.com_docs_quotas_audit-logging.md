---
title: "Cloud Quotas audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/quotas/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/docs/quotas/permissions
source_metadata:
  url: https://docs.cloud.google.com/docs/quotas/audit-logging
  title: "Cloud Quotas audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Cloud Quotas
Guides
Send feedback
Cloud Quotas audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Cloud Quotas. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Cloud Quotas audit logs use the service name cloudquotas.googleapis.com .
Filter for this service:
protoPayload . serviceName = "cloudquotas.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Cloud Quotas generates an audit log whose category is dependent on the
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
google.api.cloudquotas.v1.CloudQuotas.GetQuotaInfo google.api.cloudquotas.v1.CloudQuotas.GetQuotaPreference google.api.cloudquotas.v1.CloudQuotas.ListQuotaInfos google.api.cloudquotas.v1.CloudQuotas.ListQuotaPreferences google.api.cloudquotas.v1beta.CloudQuotas.GetQuotaInfo google.api.cloudquotas.v1beta.CloudQuotas.GetQuotaPreference google.api.cloudquotas.v1beta.CloudQuotas.ListQuotaInfos google.api.cloudquotas.v1beta.CloudQuotas.ListQuotaPreferences google.api.cloudquotas.v1beta.QuotaAdjusterSettingsManager.GetQuotaAdjusterSettings
ADMIN_WRITE
google.api.cloudquotas.v1.CloudQuotas.CreateQuotaPreference google.api.cloudquotas.v1.CloudQuotas.UpdateQuotaPreference google.api.cloudquotas.v1beta.CloudQuotas.CreateQuotaPreference google.api.cloudquotas.v1beta.CloudQuotas.UpdateQuotaPreference google.api.cloudquotas.v1beta.QuotaAdjusterSettingsManager.UpdateQuotaAdjusterSettings
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Cloud Quotas.
google.api.cloudquotas.v1.CloudQuotas
The following audit logs are associated with methods belonging to
google.api.cloudquotas.v1.CloudQuotas .
CreateQuotaPreference
Method : google.api.cloudquotas.v1.CloudQuotas.CreateQuotaPreference
Audit log type : Admin activity
Permissions : cloudquotas.quotas.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.cloudquotas.v1.CloudQuotas.CreateQuotaPreference"
GetQuotaInfo
Method : google.api.cloudquotas.v1.CloudQuotas.GetQuotaInfo
Audit log type : Data access
Permissions : cloudquotas.quotas.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.cloudquotas.v1.CloudQuotas.GetQuotaInfo"
GetQuotaPreference
Method : google.api.cloudquotas.v1.CloudQuotas.GetQuotaPreference
Audit log type : Data access
Permissions : cloudquotas.quotas.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.cloudquotas.v1.CloudQuotas.GetQuotaPreference"
ListQuotaInfos
Method : google.api.cloudquotas.v1.CloudQuotas.ListQuotaInfos
Audit log type : Data access
Permissions : cloudquotas.quotas.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.cloudquotas.v1.CloudQuotas.ListQuotaInfos"
ListQuotaPreferences
Method : google.api.cloudquotas.v1.CloudQuotas.ListQuotaPreferences
Audit log type : Data access
Permissions : cloudquotas.quotas.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.cloudquotas.v1.CloudQuotas.ListQuotaPreferences"
UpdateQuotaPreference
Method : google.api.cloudquotas.v1.CloudQuotas.UpdateQuotaPreference
Audit log type : Admin activity
Permissions : cloudquotas.quotas.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.cloudquotas.v1.CloudQuotas.UpdateQuotaPreference"
google.api.cloudquotas.v1beta.CloudQuotas
The following audit logs are associated with methods belonging to
google.api.cloudquotas.v1beta.CloudQuotas .
CreateQuotaPreference
Method : google.api.cloudquotas.v1beta.CloudQuotas.CreateQuotaPreference
Audit log type : Admin activity
Permissions : cloudquotas.quotas.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.cloudquotas.v1beta.CloudQuotas.CreateQuotaPreference"
GetQuotaInfo
Method : google.api.cloudquotas.v1beta.CloudQuotas.GetQuotaInfo
Audit log type : Data access
Permissions : cloudquotas.quotas.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.cloudquotas.v1beta.CloudQuotas.GetQuotaInfo"
GetQuotaPreference
Method : google.api.cloudquotas.v1beta.CloudQuotas.GetQuotaPreference
Audit log type : Data access
Permissions : cloudquotas.quotas.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.cloudquotas.v1beta.CloudQuotas.GetQuotaPreference"
ListQuotaInfos
Method : google.api.cloudquotas.v1beta.CloudQuotas.ListQuotaInfos
Audit log type : Data access
Permissions : cloudquotas.quotas.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.cloudquotas.v1beta.CloudQuotas.ListQuotaInfos"
ListQuotaPreferences
Method : google.api.cloudquotas.v1beta.CloudQuotas.ListQuotaPreferences
Audit log type : Data access
Permissions : cloudquotas.quotas.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.cloudquotas.v1beta.CloudQuotas.ListQuotaPreferences"
UpdateQuotaPreference
Method : google.api.cloudquotas.v1beta.CloudQuotas.UpdateQuotaPreference
Audit log type : Admin activity
Permissions : cloudquotas.quotas.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.cloudquotas.v1beta.CloudQuotas.UpdateQuotaPreference"
google.api.cloudquotas.v1beta.QuotaAdjusterSettingsManager
The following audit logs are associated with methods belonging to
google.api.cloudquotas.v1beta.QuotaAdjusterSettingsManager .
GetQuotaAdjusterSettings
Method : google.api.cloudquotas.v1beta.QuotaAdjusterSettingsManager.GetQuotaAdjusterSettings
Audit log type : Data access
Permissions : cloudquotas.quotas.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.cloudquotas.v1beta.QuotaAdjusterSettingsManager.GetQuotaAdjusterSettings"
UpdateQuotaAdjusterSettings
Method : google.api.cloudquotas.v1beta.QuotaAdjusterSettingsManager.UpdateQuotaAdjusterSettings
Audit log type : Admin activity
Permissions : cloudquotas.quotas.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.cloudquotas.v1beta.QuotaAdjusterSettingsManager.UpdateQuotaAdjusterSettings"
System events
System Event audit logs are generated by GCP systems, not
direct user action. For more information, see
System Event audit logs .
Method Name
Filter For This Event
Notes
google.cloud.quotaadjuster.v1main.QuotaAdjusterService.AutoAdjustQuota
protoPayload.methodName="google.cloud.quotaadjuster.v1main.QuotaAdjusterService.AutoAdjustQuota"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
