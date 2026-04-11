---
title: "AuditConfig \_|\_ App Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/reference/rest/Shared.Types/AuditConfig
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/reference/rest/Shared.Types/AuditConfig
  title: "AuditConfig \_|\_ App Hub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
App Hub
Reference
Send feedback
AuditConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
AuditLogConfig
JSON representation
Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.
If there are AuditConfigs for both allServices and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exemptedMembers in each AuditLogConfig are exempted.
Example Policy with multiple AuditConfigs:
{
"auditConfigs": [
{
"service": "allServices",
"auditLogConfigs": [
{
"logType": "DATA_READ",
"exemptedMembers": [
"user:jose@example.com"
]
},
{
"logType": "DATA_WRITE"
},
{
"logType": "ADMIN_READ"
}
]
},
{
"service": "sampleservice.googleapis.com",
"auditLogConfigs": [
{
"logType": "DATA_READ"
},
{
"logType": "DATA_WRITE",
"exemptedMembers": [
"user:aliya@example.com"
]
}
]
}
]
}
For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
JSON representation
{
"service" : string ,
"auditLogConfigs" : [
{
object ( AuditLogConfig )
}
]
}
Fields
service
string
Specifies a service that will be enabled for audit logging. For example, storage.googleapis.com , cloudsql.googleapis.com . allServices is a special value that covers all services.
auditLogConfigs[]
object ( AuditLogConfig )
The configuration for logging of each type of permission.
AuditLogConfig
Provides the configuration for logging a type of permissions. Example:
{
"auditLogConfigs": [
{
"logType": "DATA_READ",
"exemptedMembers": [
"user:jose@example.com"
]
},
{
"logType": "DATA_WRITE"
}
]
}
This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
JSON representation
{
"logType" : enum ( LogType ) ,
"exemptedMembers" : [
string
]
}
Fields
logType
enum ( LogType )
The log type that this config enables.
exemptedMembers[]
string
Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-06 UTC."],[],[]]
