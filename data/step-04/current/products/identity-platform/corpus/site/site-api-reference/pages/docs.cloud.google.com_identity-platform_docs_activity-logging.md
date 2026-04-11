---
title: "Activity logging \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity-platform/docs/activity-logging
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity-platform/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity-platform/docs/activity-logging
  title: "Activity logging \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Identity Platform
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Activity logging
This document describes how to use Cloud Logging for activity logging with
Identity Platform.
Note: Activity logging refers to requests made by your app's users, such
as registration or sign-in requests. To log requests made by administrators,
see Audit logging .
Enable activity logging
Activity logging is disabled by default. You can enable activity logging
through the Google Cloud console or by using the REST API:
Console
Go to the Settings page in the Google Cloud console.
Go to Settings
Under User activity logging , select Enable .
Click Save .
REST
curl -d "{'monitoring':{'requestLogging':{'enabled':true}}}" \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "x-goog-user-project: PROJECT_ID " \
-X PATCH -H 'Content-Type: application/json' \
https://identitytoolkit.googleapis.com/admin/v2/projects/ PROJECT_ID /config?updateMask = monitoring.requestLogging.enabled
Replace PROJECT_ID with your Google Cloud project ID.
Enabling activity logging can affect your billing. See
Google Cloud Observability pricing to learn more.
Enable activity logging for tenant projects
Activity logging for tenant projects is disabled by default. You can enable
activity logging for tenant projects, using the REST API, by executing the following command:
curl -d "{'monitoring':{'requestLogging':{'enabled':true}}}" \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "x-goog-user-project: PROJECT_ID \
-X PATCH -H 'Content-Type: application/json' \
https://identitytoolkit.googleapis.com/v2/projects/ PROJECT_ID /tenants/ TENANT_ID ?updateMask=monitoring.requestLogging.enabled
Replace the following:
PROJECT_ID : Your Google Cloud project ID.
TENANT_ID : ID of the Identity Platform tenant.
Enabling activity logging can affect your billing. See
Pricing for Google Cloud Observability to learn more.
View activity logs
When Logging is enabled, a log entry is generated for each
user request. Each log entry includes the following fields:
Field
Description
logName
projects/ PROJECT_ID /logs/identitytoolkit.googleapis.com/requests
resource
identitytoolkit_project or identitytoolkit_tenant
serviceName
identitytoolkit.googleapis.com
protoPayload
The logged request or response.
You can see your project or tenant's activity logs using the
Logs Explorer . To view logs:
In the Google Cloud console, go to the Logs Explorer page.
Go to the Logs Explorer page
Select Identity Toolkit Project or Identity Toolkit Tenant from the
resources list. If you're using multi-tenancy ,
you can show all tenants, or filter to a specific one.
Logged operations
The following table lists the API operations that can produce activity logs:
Service
Method
google.cloud.identitytoolkit.v1.AccountManagementService
DeleteAccount
GetAccountInfo
GetOobCode
ResetPassword
SetAccountInfo
google.cloud.identitytoolkit.v1.AuthenticationService
CreateAuthUri
GetRecaptchaParam
SendVerificationCode
SignInWithCustomToken
SignInWithEmailLink
SignInWithGameCenter
SignInWithIdp
SignInWithPassword
SignInWithPhoneNumber
SignUp
VerifyIosClient
google.cloud.identitytoolkit.v1.ProjectConfigService
GetProjectConfig
Exclude operations
Logging gives you tools to disable log ingestion or exclude log
entries you don't want. For more information about how to exclude certain logs,
see Logs Exclusions .
The following example shows how to exclude logs for the read-only
GetAccountInfo() and GetProjectConfig() methods:
resource.type="identitytoolkit_project"
(
jsonPayload.methodName="google.cloud.identitytoolkit.v1.AccountManagementService.GetAccountInfo"
OR
jsonPayload.methodName="google.cloud.identitytoolkit.v1.ProjectConfigService.GetProjectConfig"
)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
