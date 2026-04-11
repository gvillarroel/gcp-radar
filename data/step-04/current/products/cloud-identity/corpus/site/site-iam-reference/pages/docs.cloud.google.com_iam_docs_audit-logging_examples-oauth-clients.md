---
title: "Example logs for Workforce Identity Federation OAuth application integration\
  \ \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/audit-logging/examples-oauth-clients
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/audit-logging/examples-oauth-clients
  title: "Example logs for Workforce Identity Federation OAuth application integration\
    \ \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Guides
Send feedback
Example logs for Workforce Identity Federation OAuth application integration
Stay organized with collections
Save and categorize content based on your preferences.
This page provides examples of the audit logs that are generated when you use
Workforce Identity Federation OAuth application integration . With
Workforce Identity Federation OAuth application integration, you can allow
third-party applications to integrate with Google Cloud through OAuth and
use external identities to access Google Cloud resources.
Each of the following examples shows only the most relevant fields in the log entries.
For more information about enabling and viewing audit logs, see
Identity and Access Management audit logging .
Required roles
IAM can generate audit logs when you create and manage
OAuth clients. To enable audit logs when managing OAuth clients, you must
enable audit logs for Data Access activity for the
following API:
Identity and Access Management API (enable log type "ADMIN_READ")
Logs for creating an OAuth client
The log entry is similar to the following:
{
"logName" : "projects/ PROJECT_NUMBER /logs/cloudaudit.googleapis.com%2Factivity" ,
"protoPayload" : {
"@type" : "type.googleapis.com/google.cloud.audit.AuditLog" ,
"authenticationInfo" : {
"principalEmail" : PRINCIPAL_EMAIL ,
},
"methodName" : "google.iam.admin.v1.OauthClients.CreateOauthClient" ,
"resourceName" : "projects/ PROJECT_NUMBER /locations/global" ,
"serviceName" : "iam.googleapis.com" ,
"request" : {
"@type" : "type.googleapis.com/google.iam.admin.v1.CreateOauthClientRequest" ,
"oauthClient" : {},
"oauthClientId" : OAUTH_CLIENT_ID ,
"parent" : "projects/ PROJECT_NUMBER /locations/global"
}
},
"resource" : {
"type" : "audited_resource"
}
}
This log entry includes the following values, which you can use to filter logs:
PROJECT_NUMBER : the project number of the project that contains the OAuth application integration.
PRINCIPAL_EMAIL : the email address of the principal that owns the OAuth client.
OAUTH_CLIENT_ID : the identity of the OAuth client
Logs for creating an OAuth client credential
The log entry is similar to the following:
{
"logName" : "projects/ PROJECT_NUMBER /logs/cloudaudit.googleapis.com%2Factivity" ,
"protoPayload" : {
"@type" : "type.googleapis.com/google.cloud.audit.AuditLog" ,
"authenticationInfo" : {
"principalEmail" : PRINCIPAL_EMAIL ,
},
"methodName" : "google.iam.admin.v1.OauthClients.CreateOauthClientCredential" ,
"resourceName" : "projects/ PROJECT_NUMBER /locations/global/oauthClients/ OAUTH_CLIENT_ID " ,
"serviceName" : "iam.googleapis.com" ,
"request" : {
"@type" : "type.googleapis.com/google.iam.admin.v1.CreateOauthClientCredentialRequest" ,
"oauthClientCredential" : {},
"oauthClientCredentialId" : OAUTH_CLIENT_CREDENTIAL_ID ,
"parent" : "projects/ PROJECT_NUMBER /locations/global/oauthClients/ OAUTH_CLIENT_ID "
}
},
"resource" : {
"type" : "audited_resource"
}
}
This log entry includes the following values, which you can use to filter logs:
PROJECT_NUMBER : the project number of the project that contains the OAuth application integration.
PRINCIPAL_EMAIL : the email address of the principal that (owns|accessed) the OAuth client.
OAUTH_CLIENT_ID : the identity of the OAuth client
OAUTH_CLIENT_CREDENTIAL_ID : the identity of the OAuth client credential
What's next
Configure and view the audit logs for IAM.
Get more information about Cloud Audit Logs .
Set up Workforce OAuth application integration using
OAuth clients.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
