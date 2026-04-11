---
title: "Access control with IAM \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity-platform/docs/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity-platform/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/identity-platform/docs/access-control
  title: "Access control with IAM \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
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
Access control with IAM
Identity Platform provides Admin APIs to manage your users and authentication
tokens.
To prevent unwanted access to your users and tokens through these APIs,
Identity Platform leverages IAM
to manage permission to specific Identity Platform APIs.
To learn how to assign IAM roles to a user or service account,
see Managing Policies in the IAM
documentation.
API permissions
The following table lists the permissions that the caller must have to call each
method in the Identity Platform API: Note: firebaseauth.configs.getSecret is only required when dealing with client secret based information. API calls can succeed without this permission.
Service
Method
Required Permission(s)
google.cloud.identitytoolkit.v1.AccountManagementService
GetOobCode
firebaseauth.users.sendEmail
SetAccountInfo
firebaseauth.users.update
UploadAccount
firebaseauth.users.create
DeleteAccount
firebaseauth.users.delete
DownloadAccount
firebaseauth.users.get
GetAccountInfo
firebaseauth.users.get
QueryUserInfo
firebaseauth.users.get
google.cloud.identitytoolkit.v1.AuthenticationService
SignUp
firebaseauth.users.create
google.cloud.identitytoolkit.v1.ProjectConfigService
GetProjectConfig
firebaseauth.configs.get
SetProjectConfig
firebaseauth.configs.update
google.cloud.identitytoolkit.v1.SessionManagementService
CreateSessionCookie
firebaseauth.users.createSession
google.cloud.identitytoolkit.v2.ProjectConfigService
CreateConfig
firebaseauth.configs.create
CreateDefaultSupportedIdpConfig
firebaseauth.configs.update
firebaseauth.configs.getSecret
CreateInboundSamlConfig
firebaseauth.configs.update
CreateOAuthIdpConfig
firebaseauth.configs.update
firebaseauth.configs.getSecret
CreateOutboundSamlConfig
firebaseauth.configs.update
DeleteDefaultSupportedIdpConfig
firebaseauth.configs.update
DeleteInboundSamlConfig
firebaseauth.configs.update
DeleteOAuthIdpConfig
firebaseauth.configs.update
DeleteOutboundSamlConfig
firebaseauth.configs.update
EnableCicp
firebaseauth.configs.create
GetConfig
firebaseauth.configs.get
GetDefaultSupportedIdpConfig
firebaseauth.configs.get
firebaseauth.configs.getSecret
GetInboundSamlConfig
firebaseauth.configs.get
GetOAuthIdpConfig
firebaseauth.configs.get
firebaseauth.configs.getSecret
GetOutboundSamlConfig
firebaseauth.configs.get
HashConfig
firebaseauth.configs.getHashConfig
ListDefaultSupportedIdpConfigs
firebaseauth.configs.get
firebaseauth.configs.getSecret
ListInboundSamlConfigs
firebaseauth.configs.get
ListOAuthIdpConfigs
firebaseauth.configs.get
firebaseauth.configs.getSecret
ListOutboundSamlConfigs
firebaseauth.configs.get
UpdateConfig
firebaseauth.configs.update
UpdateDefaultSupportedIdpConfig
firebaseauth.configs.update
firebaseauth.configs.getSecret
UpdateInboundSamlConfig
firebaseauth.configs.update
UpdateOAuthIdpConfig
firebaseauth.configs.update
firebaseauth.configs.getSecret
UpdateOutboundSamlConfig
firebaseauth.configs.update
VerifyDomain
firebaseauth.configs.update
SetIamPolicy
identitytoolkit.tenants.setIamPolicy
GetIamPolicy
identitytoolkit.tenants.getIamPolicy
google.cloud.identitytoolkit.v2.TenantManagementService
CreateTenant
identitytoolkit.tenants.create
DeleteTenant
identitytoolkit.tenants.delete
GetTenant
identitytoolkit.tenants.get
ListTenants
identitytoolkit.tenants.list
UpdateTenant
identitytoolkit.tenants.update
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
