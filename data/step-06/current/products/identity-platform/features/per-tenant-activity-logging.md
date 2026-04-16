---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.944Z"
product_name: "Identity Platform"
product_slug: "identity-platform"
feature_name: "Per-tenant activity logging"
feature_slug: "per-tenant-activity-logging"
latest_feature_date: "2022-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/identity-platform/docs/activity-logging"
  - "https://docs.cloud.google.com/identity-platform/docs/audit-logging"
  - "https://docs.cloud.google.com/identity-platform/docs/access-control"
  - "https://docs.cloud.google.com/identity-platform/docs/use-rest-api"
keywords:
  - "per"
  - "tenant"
  - "activity"
  - "logging"
  - "identity"
  - "platform"
  - "supports"
  - "on"
---

# Per-tenant activity logging

Product: Identity Platform
Coverage: MEDIUM

## Step 02 Summary

Identity Platform supports activity logging on a per-tenant basis and is generally available.

## Extended Definition

Identity Platform supports activity logging on a per-tenant basis and is generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/identity-platform/docs/activity-logging](https://docs.cloud.google.com/identity-platform/docs/activity-logging)
- [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging)
- [https://docs.cloud.google.com/identity-platform/docs/access-control](https://docs.cloud.google.com/identity-platform/docs/access-control)
- [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api)

## Supporting Pages

### Activity logging \_|\_ Identity Platform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity-platform/docs/activity-logging](https://docs.cloud.google.com/identity-platform/docs/activity-logging)
- Source ID: `site-api-reference`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Logged operations The following table lists the API operations that can produce activity logs: Service Method google.cloud.identitytoolkit.v1.AccountManagementService DeleteAccount GetAccountInfo GetOobCode ResetPassword SetAccountInfo google.cloud.identitytoolkit.v1.AuthenticationService CreateAuthUri GetRecaptchaParam SendVerificationCode SignInWithCustomToken SignInWithEmailLink SignInWithGameCenter SignInWithIdp SignInWithPassword SignInWithPhoneNumber SignUp VerifyIosClient google.cloud.identitytoolkit.v1.ProjectConfigService GetProjectConfig Exclude operations Logging gives you tools to disable log ingestion or exclude log entries you don't want.
- You can enable activity logging for tenant projects, using the REST API, by executing the following command: curl -d "{'monitoring':{'requestLogging':{'enabled':true}}}" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID \ -X PATCH -H 'Content-Type: application/json' \ https://identitytoolkit.googleapis.com/v2/projects/ PROJECT ID /tenants/ TENANT ID ?updateMask=monitoring.requestLogging.enabled Replace the following: PROJECT ID : Your Google Cloud project ID.
- Activity logging This document describes how to use Cloud Logging for activity logging with Identity Platform.
- REST curl -d "{'monitoring':{'requestLogging':{'enabled':true}}}" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID " \ -X PATCH -H 'Content-Type: application/json' \ https://identitytoolkit.googleapis.com/admin/v2/projects/ PROJECT ID /config?updateMask = monitoring.requestLogging.enabled Replace PROJECT ID with your Google Cloud project ID.

### Identity Platform audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging)
- Source ID: `site-api-reference`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.identitytoolkit.admin.v2.ProjectConfigService.GetConfig google.cloud.identitytoolkit.admin.v2.ProjectConfigService.GetDefaultSupportedIdpConfig google.cloud.identitytoolkit.admin.v2.ProjectConfigService.GetIamPolicy google.cloud.identitytoolkit.admin.v2.ProjectConfigService.GetInboundSamlConfig google.cloud.identitytoolkit.admin.v2.ProjectConfigService.GetOAuthIdpConfig google.cloud.identitytoolkit.admin.v2.ProjectConfigService.ListDefaultSupportedIdpConfigs google.cloud.identitytoolkit.admin.v2.ProjectConfigService.ListInboundSamlConfigs google.cloud.identitytoolkit.admin.v2.ProjectConfigService.ListOAuthIdpConfigs google.cloud.identitytoolkit.admin.v2.TenantManagementService.GetTenant google.cloud.identitytoolkit.admin.v2.TenantManagementService.ListTenants google.cloud.identitytoolkit.v1.AccountManagementService.DownloadAccount google.cloud.identitytoolkit.v2beta1.ProjectConfigService.GetConfig google.cloud.identitytoolkit.v2beta1.ProjectConfigService.GetDefaultSupportedIdpConfig google.cloud.identitytoolkit.v2beta1.ProjectConfigService.GetInboundSamlConfig google.cloud.identitytoolkit.v2beta1.ProjectConfigService.GetOAuthIdpConfig google.cloud.identitytoolkit.v2beta1.ProjectConfigService.ListDefaultSupportedIdpConfigs google.cloud.identitytoolkit.v2beta1.ProjectConfigService.ListInboundSamlConfigs google.cloud.identitytoolkit.v2beta1.ProjectConfigService.ListOAuthIdpConfigs google.cloud.identitytoolkit.v2beta1.TenantManagementService.GetTenant google.cloud.identitytoolkit.v2beta1.TenantManagementService.ListTenants ADMIN WRITE google.cloud.identitytoolkit.admin.v2.ProjectConfigService.CreateDefaultSupportedIdpConfig google.cloud.identitytoolkit.admin.v2.ProjectConfigService.CreateInboundSamlConfig google.cloud.identitytoolkit.admin.v2.ProjectConfigService.CreateOAuthIdpConfig google.cloud.identitytoolkit.admin.v2.ProjectConfigService.DeleteDefaultSupportedIdpConfig google.cloud.identitytoolkit.admin.v2.ProjectConfigService.DeleteInboundSamlConfig google.cloud.identitytoolkit.admin.v2.ProjectConfigService.DeleteOAuthIdpConfig google.cloud.identitytoolkit.admin.v2.ProjectConfigService.InitializeIdentityPlatform google.cloud.identitytoolkit.admin.v2.ProjectConfigService.SetIamPolicy google.cloud.identitytoolkit.admin.v2.ProjectConfigService.UpdateConfig google.cloud.identitytoolkit.admin.v2.ProjectConfigService.UpdateDefaultSupportedIdpConfig google.cloud.identitytoolkit.admin.v2.ProjectConfigService.UpdateInboundSamlConfig google.cloud.identitytoolkit.admin.v2.ProjectConfigService.UpdateOAuthIdpConfig google.cloud.identitytoolkit.admin.v2.ProjectConfigService.VerifyDomain google.cloud.identitytoolkit.admin.v2.TenantManagementService.CreateTenant google.cloud.identitytoolkit.admin.v2.TenantManagementService.DeleteTenant google.cloud.identitytoolkit.admin.v2.TenantManagementService.UpdateTenant google.cloud.identitytoolkit.v2beta1.ProjectConfigService.CreateDefaultSupportedIdpConfig google.cloud.identitytoolkit.v2beta1.ProjectConfigService.CreateInboundSamlConfig google.cloud.identitytoolkit.v2beta1.ProjectConfigService.CreateOAuthIdpConfig google.cloud.identitytoolkit.v2beta1.ProjectConfigService.DeleteDefaultSupportedIdpConfig google.cloud.identitytoolkit.v2beta1.ProjectConfigService.DeleteInboundSamlConfig google.cloud.identitytoolkit.v2beta1.ProjectConfigService.DeleteOAuthIdpConfig google.cloud.identitytoolkit.v2beta1.ProjectConfigService.EnableCicp google.cloud.identitytoolkit.v2beta1.ProjectConfigService.UpdateConfig google.cloud.identitytoolkit.v2beta1.ProjectConfigService.UpdateDefaultSupportedIdpConfig google.cloud.identitytoolkit.v2beta1.ProjectConfigService.UpdateInboundSamlConfig google.cloud.identitytoolkit.v2beta1.ProjectConfigService.UpdateOAuthIdpConfig google.cloud.identitytoolkit.v2beta1.ProjectConfigService.VerifyDomain google.cloud.identitytoolkit.v2beta1.TenantManagementService.CreateTenant google.cloud.identitytoolkit.v2beta1.TenantManagementService.DeleteTenant google.cloud.identitytoolkit.v2beta1.TenantManagementService.UpdateTenant DATA READ google.cloud.identitytoolkit.v1.AccountManagementService.DownloadAccount google.cloud.identitytoolkit.v1.AccountManagementService.GetAccountInfo google.cloud.identitytoolkit.v1.AccountManagementService.QueryUserInfo DATA WRITE google.cloud.identitytoolkit.v1.AccountManagementService.BatchDeleteAccounts google.cloud.identitytoolkit.v1.AccountManagementService.DeleteAccount google.cloud.identitytoolkit.v1.AccountManagementService.GetOobCode google.cloud.identitytoolkit.v1.AccountManagementService.SetAccountInfo google.cloud.identitytoolkit.v1.AccountManagementService.UploadAccount google.cloud.identitytoolkit.v1.AuthenticationService.SignUp google.cloud.identitytoolkit.v1.SessionManagementService.CreateSessionCookie API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Identity Platform. google.cloud.identitytoolkit.admin.v2.ProjectConfigService The following audit logs are associated with methods belonging to google.cloud.identitytoolkit.admin.v2.ProjectConfigService .
- Filter for this method : protoPayload.methodName="google.cloud.identitytoolkit.admin.v2.ProjectConfigService.InitializeIdentityPlatform" ListDefaultSupportedIdpConfigs Method : google.cloud.identitytoolkit.admin.v2.ProjectConfigService.ListDefaultSupportedIdpConfigs Audit log type : Data access Permissions : firebaseauth.configs.get - ADMIN READ firebaseauth.configs.getSecret - ADMIN READ identitytoolkit.tenants.get - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.identitytoolkit.admin.v2.ProjectConfigService.GetOAuthIdpConfig" InitializeIdentityPlatform Method : google.cloud.identitytoolkit.admin.v2.ProjectConfigService.InitializeIdentityPlatform Audit log type : Admin activity Permissions : firebaseauth.configs.create - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.identitytoolkit.admin.v2.ProjectConfigService.ListOAuthIdpConfigs" SetIamPolicy Method : google.cloud.identitytoolkit.admin.v2.ProjectConfigService.SetIamPolicy Audit log type : Admin activity Permissions : identitytoolkit.tenants.setIamPolicy - ADMIN WRITE Method is a long-running or streaming operation : No.

### Access control with IAM \_|\_ Identity Platform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity-platform/docs/access-control](https://docs.cloud.google.com/identity-platform/docs/access-control)
- Source ID: `site-api-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service Method Required Permission(s) google.cloud.identitytoolkit.v1.AccountManagementService GetOobCode firebaseauth.users.sendEmail SetAccountInfo firebaseauth.users.update UploadAccount firebaseauth.users.create DeleteAccount firebaseauth.users.delete DownloadAccount firebaseauth.users.get GetAccountInfo firebaseauth.users.get QueryUserInfo firebaseauth.users.get google.cloud.identitytoolkit.v1.AuthenticationService SignUp firebaseauth.users.create google.cloud.identitytoolkit.v1.ProjectConfigService GetProjectConfig firebaseauth.configs.get SetProjectConfig firebaseauth.configs.update google.cloud.identitytoolkit.v1.SessionManagementService CreateSessionCookie firebaseauth.users.createSession google.cloud.identitytoolkit.v2.ProjectConfigService CreateConfig firebaseauth.configs.create CreateDefaultSupportedIdpConfig firebaseauth.configs.update firebaseauth.configs.getSecret CreateInboundSamlConfig firebaseauth.configs.update CreateOAuthIdpConfig firebaseauth.configs.update firebaseauth.configs.getSecret CreateOutboundSamlConfig firebaseauth.configs.update DeleteDefaultSupportedIdpConfig firebaseauth.configs.update DeleteInboundSamlConfig firebaseauth.configs.update DeleteOAuthIdpConfig firebaseauth.configs.update DeleteOutboundSamlConfig firebaseauth.configs.update EnableCicp firebaseauth.configs.create GetConfig firebaseauth.configs.get GetDefaultSupportedIdpConfig firebaseauth.configs.get firebaseauth.configs.getSecret GetInboundSamlConfig firebaseauth.configs.get GetOAuthIdpConfig firebaseauth.configs.get firebaseauth.configs.getSecret GetOutboundSamlConfig firebaseauth.configs.get HashConfig firebaseauth.configs.getHashConfig ListDefaultSupportedIdpConfigs firebaseauth.configs.get firebaseauth.configs.getSecret ListInboundSamlConfigs firebaseauth.configs.get ListOAuthIdpConfigs firebaseauth.configs.get firebaseauth.configs.getSecret ListOutboundSamlConfigs firebaseauth.configs.get UpdateConfig firebaseauth.configs.update UpdateDefaultSupportedIdpConfig firebaseauth.configs.update firebaseauth.configs.getSecret UpdateInboundSamlConfig firebaseauth.configs.update UpdateOAuthIdpConfig firebaseauth.configs.update firebaseauth.configs.getSecret UpdateOutboundSamlConfig firebaseauth.configs.update VerifyDomain firebaseauth.configs.update SetIamPolicy identitytoolkit.tenants.setIamPolicy GetIamPolicy identitytoolkit.tenants.getIamPolicy google.cloud.identitytoolkit.v2.TenantManagementService CreateTenant identitytoolkit.tenants.create DeleteTenant identitytoolkit.tenants.delete GetTenant identitytoolkit.tenants.get ListTenants identitytoolkit.tenants.list UpdateTenant identitytoolkit.tenants.update Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- API permissions The following table lists the permissions that the caller must have to call each method in the Identity Platform API: Note: firebaseauth.configs.getSecret is only required when dealing with client secret based information.
- To prevent unwanted access to your users and tokens through these APIs, Identity Platform leverages IAM to manage permission to specific Identity Platform APIs.
- Home Documentation Access and resource management Identity Platform Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Using the REST API \_|\_ Identity Platform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Response Payload ( users array content) Property Name Type Description localId string The uid of the current user. email string The email of the account. emailVerified boolean Whether or not the account's email has been verified. displayName string The display name for the account. providerUserInfo List of JSON objects List of all linked provider objects which contain "providerId" and "federatedId". photoUrl string The photo Url for the account. passwordHash string Hash version of password. passwordUpdatedAt double The timestamp, in milliseconds, that the account password was last changed. validSince string The timestamp, in seconds, which marks a boundary, before which Identity Platform ID tokens are considered revoked. disabled boolean Whether the account is disabled or not. lastLoginAt string The timestamp, in milliseconds, that the account last logged in at. createdAt string The timestamp, in milliseconds, that the account was created at. customAuth boolean Whether the account is authenticated by the developer. tenantId string The tenant ID of the user.
- Response Payload Property Name Type Description federatedId string The unique ID identifies the IdP account. providerId string The linked provider ID (e.g. "google.com" for the Google provider). localId string The uid of the authenticated user. emailVerified boolean Whether the sign-in email is verified. email string The email of the account. oauthIdToken string The OIDC id token if available. oauthAccessToken string The OAuth access token if available. oauthTokenSecret string The OAuth 1.0 token secret if available. rawUserInfo string The stringified JSON response containing all the IdP data corresponding to the provided OAuth credential. firstName string The first name for the account. lastName string The last name for the account. fullName string The full name for the account. displayName string The display name for the account. photoUrl string The photo Url for the account. idToken string An Identity Platform ID token for the authenticated user. refreshToken string An Identity Platform refresh token for the authenticated user. expiresIn string The number of seconds in which the ID token expires. needConfirmation boolean Whether another account with the same credential already exists.
- Response Payload Property Name Type Description federatedId string The unique ID identifies the IdP account. providerId string The linked provider ID (e.g. "google.com" for the Google provider). localId string The uid of the authenticated user. emailVerified boolean Whether the signin email is verified. email string The email of the account. oauthIdToken string The OIDC id token if available. oauthAccessToken string The OAuth access token if available. oauthTokenSecret string The OAuth 1.0 token secret if available. rawUserInfo string The stringified JSON response containing all the IdP data corresponding to the provided OAuth credential. firstName string The first name for the account. lastName string The last name for the account. fullName string The full name for the account. displayName string The display name for the account. photoUrl string The photo Url for the account. idToken string An Identity Platform ID token for the authenticated user. refreshToken string An Identity Platform refresh token for the authenticated user. expiresIn string The number of seconds in which the ID token expires.
- Response Payload Property Name Type Description allProviders List of strings The list of providers that the user has previously signed in with. registered boolean Whether the email is for an existing account Sample request curl 'https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=[API KEY]' \ -H 'Content-Type: application/json' \ --data-binary '{"identifier":"[user@example.com]","continueUri":"[http://localhost:8080/app]"}' In the example above, you would replace [API KEY] with the Web API Key of your Google Cloud project from Identity Platform, [user@example.com] with the email to lookup and [http://localhost:8080/app] with the current URL.

