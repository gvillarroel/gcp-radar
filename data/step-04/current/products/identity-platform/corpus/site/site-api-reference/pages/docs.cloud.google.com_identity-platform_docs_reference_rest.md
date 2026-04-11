---
title: "Identity Toolkit API \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity-platform/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity-platform/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity-platform/docs/reference/rest
  title: "Identity Toolkit API \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
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
Identity Toolkit API
Stay organized with collections
Save and categorize content based on your preferences.
The Google Identity Toolkit API lets you use open standards to verify a user's identity.
REST Resource: v2
REST Resource: v2.accounts
REST Resource: v2.accounts.mfaEnrollment
REST Resource: v2.accounts.mfaSignIn
REST Resource: v2.defaultSupportedIdps
REST Resource: v2.projects
REST Resource: v2.projects.defaultSupportedIdpConfigs
REST Resource: v2.projects.domain
REST Resource: v2.projects.identityPlatform
REST Resource: v2.projects.inboundSamlConfigs
REST Resource: v2.projects.oauthIdpConfigs
REST Resource: v2.projects.tenants
REST Resource: v2.projects.tenants.defaultSupportedIdpConfigs
REST Resource: v2.projects.tenants.domain
REST Resource: v2.projects.tenants.inboundSamlConfigs
REST Resource: v2.projects.tenants.oauthIdpConfigs
REST Resource: v1
REST Resource: v1.accounts
REST Resource: v1.projects
REST Resource: v1.projects.accounts
REST Resource: v1.projects.tenants
REST Resource: v1.projects.tenants.accounts
Service: identitytoolkit.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://identitytoolkit.googleapis.com/$discovery/rest?version=v2
https://identitytoolkit.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://identitytoolkit.googleapis.com
REST Resource: v2
Methods
getPasswordPolicy
GET /v2/passwordPolicy
Gets password policy config set on the project or tenant.
getRecaptchaConfig
GET /v2/recaptchaConfig
Gets parameters needed for reCAPTCHA analysis.
REST Resource: v2.accounts
Methods
revokeToken
POST /v2/accounts:revokeToken
Revokes a user's token from an Identity Provider (IdP).
REST Resource: v2.accounts.mfaEnrollment
Methods
finalize
POST /v2/accounts/mfaEnrollment:finalize
Finishes enrolling a second factor for the user.
start
POST /v2/accounts/mfaEnrollment:start
Step one of the MFA enrollment process.
withdraw
POST /v2/accounts/mfaEnrollment:withdraw
Revokes one second factor from the enrolled second factors for an account.
REST Resource: v2.accounts.mfaSignIn
Methods
finalize
POST /v2/accounts/mfaSignIn:finalize
Verifies the MFA challenge and performs sign-in
start
POST /v2/accounts/mfaSignIn:start
Sends the MFA challenge
REST Resource: v2.defaultSupportedIdps
Methods
list
GET /admin/v2/defaultSupportedIdps
List all default supported Idps.
REST Resource: v2.projects
Methods
getConfig
GET /admin/v2/{name=projects/*/config}
Retrieve an Identity Toolkit project configuration.
updateConfig
PATCH /admin/v2/{config.name=projects/*/config}
Update an Identity Toolkit project configuration.
REST Resource: v2.projects.defaultSupportedIdpConfigs
Methods
create
POST /admin/v2/{parent=projects/*}/defaultSupportedIdpConfigs
Create a default supported Idp configuration for an Identity Toolkit project.
delete
DELETE /admin/v2/{name=projects/*/defaultSupportedIdpConfigs/*}
Delete a default supported Idp configuration for an Identity Toolkit project.
get
GET /admin/v2/{name=projects/*/defaultSupportedIdpConfigs/*}
Retrieve a default supported Idp configuration for an Identity Toolkit project.
list
GET /admin/v2/{parent=projects/*}/defaultSupportedIdpConfigs
List all default supported Idp configurations for an Identity Toolkit project.
patch
PATCH /admin/v2/{defaultSupportedIdpConfig.name=projects/*/defaultSupportedIdpConfigs/*}
Update a default supported Idp configuration for an Identity Toolkit project.
REST Resource: v2.projects.domain
Methods
verify
POST /admin/v2/{resource=projects/*}/domain:verify
Verify the requested custom domain has required DNS records.
REST Resource: v2.projects.identityPlatform
Methods
initializeAuth
POST /v2/{project=projects/*}/identityPlatform:initializeAuth
Initialize Identity Platform for a Cloud project.
REST Resource: v2.projects.inboundSamlConfigs
Methods
create
POST /admin/v2/{parent=projects/*}/inboundSamlConfigs
Create an inbound SAML configuration for an Identity Toolkit project.
delete
DELETE /admin/v2/{name=projects/*/inboundSamlConfigs/*}
Delete an inbound SAML configuration for an Identity Toolkit project.
get
GET /admin/v2/{name=projects/*/inboundSamlConfigs/*}
Retrieve an inbound SAML configuration for an Identity Toolkit project.
list
GET /admin/v2/{parent=projects/*}/inboundSamlConfigs
List all inbound SAML configurations for an Identity Toolkit project.
patch
PATCH /admin/v2/{inboundSamlConfig.name=projects/*/inboundSamlConfigs/*}
Update an inbound SAML configuration for an Identity Toolkit project.
REST Resource: v2.projects.oauthIdpConfigs
Methods
create
POST /admin/v2/{parent=projects/*}/oauthIdpConfigs
Create an Oidc Idp configuration for an Identity Toolkit project.
delete
DELETE /admin/v2/{name=projects/*/oauthIdpConfigs/*}
Delete an Oidc Idp configuration for an Identity Toolkit project.
get
GET /admin/v2/{name=projects/*/oauthIdpConfigs/*}
Retrieve an Oidc Idp configuration for an Identity Toolkit project.
list
GET /admin/v2/{parent=projects/*}/oauthIdpConfigs
List all Oidc Idp configurations for an Identity Toolkit project.
patch
PATCH /admin/v2/{oauthIdpConfig.name=projects/*/oauthIdpConfigs/*}
Update an Oidc Idp configuration for an Identity Toolkit project.
REST Resource: v2.projects.tenants
Methods
create
POST /v2/{parent=projects/*}/tenants
Create a tenant.
delete
DELETE /v2/{name=projects/*/tenants/*}
Delete a tenant.
get
GET /v2/{name=projects/*/tenants/*}
Get a tenant.
getIamPolicy
POST /admin/v2/{resource=projects/*/tenants/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v2/{parent=projects/*}/tenants
List tenants under the given agent project.
patch
PATCH /v2/{tenant.name=projects/*/tenants/*}
Update a tenant.
setIamPolicy
POST /admin/v2/{resource=projects/*/tenants/*}:setIamPolicy
Sets the access control policy for a resource.
testIamPermissions
POST /admin/v2/{resource=projects/*/tenants/*}:testIamPermissions
Returns the caller's permissions on a resource.
REST Resource: v2.projects.tenants.defaultSupportedIdpConfigs
Methods
create
POST /v2/{parent=projects/*/tenants/*}/defaultSupportedIdpConfigs
Create a default supported Idp configuration for an Identity Toolkit project.
delete
DELETE /v2/{name=projects/*/tenants/*/defaultSupportedIdpConfigs/*}
Delete a default supported Idp configuration for an Identity Toolkit project.
get
GET /v2/{name=projects/*/tenants/*/defaultSupportedIdpConfigs/*}
Retrieve a default supported Idp configuration for an Identity Toolkit project.
list
GET /v2/{parent=projects/*/tenants/*}/defaultSupportedIdpConfigs
List all default supported Idp configurations for an Identity Toolkit project.
patch
PATCH /v2/{defaultSupportedIdpConfig.name=projects/*/tenants/*/defaultSupportedIdpConfigs/*}
Update a default supported Idp configuration for an Identity Toolkit project.
REST Resource: v2.projects.tenants.domain
Methods
verify
POST /admin/v2/{resource=projects/*/tenants/*}/domain:verify
Verify the requested custom domain has required DNS records.
REST Resource: v2.projects.tenants.inboundSamlConfigs
Methods
create
POST /v2/{parent=projects/*/tenants/*}/inboundSamlConfigs
Create an inbound SAML configuration for an Identity Toolkit project.
delete
DELETE /v2/{name=projects/*/tenants/*/inboundSamlConfigs/*}
Delete an inbound SAML configuration for an Identity Toolkit project.
get
GET /v2/{name=projects/*/tenants/*/inboundSamlConfigs/*}
Retrieve an inbound SAML configuration for an Identity Toolkit project.
list
GET /v2/{parent=projects/*/tenants/*}/inboundSamlConfigs
List all inbound SAML configurations for an Identity Toolkit project.
patch
PATCH /v2/{inboundSamlConfig.name=projects/*/tenants/*/inboundSamlConfigs/*}
Update an inbound SAML configuration for an Identity Toolkit project.
REST Resource: v2.projects.tenants.oauthIdpConfigs
Methods
create
POST /v2/{parent=projects/*/tenants/*}/oauthIdpConfigs
Create an Oidc Idp configuration for an Identity Toolkit project.
delete
DELETE /v2/{name=projects/*/tenants/*/oauthIdpConfigs/*}
Delete an Oidc Idp configuration for an Identity Toolkit project.
get
GET /v2/{name=projects/*/tenants/*/oauthIdpConfigs/*}
Retrieve an Oidc Idp configuration for an Identity Toolkit project.
list
GET /v2/{parent=projects/*/tenants/*}/oauthIdpConfigs
List all Oidc Idp configurations for an Identity Toolkit project.
patch
PATCH /v2/{oauthIdpConfig.name=projects/*/tenants/*/oauthIdpConfigs/*}
Update an Oidc Idp configuration for an Identity Toolkit project.
REST Resource: v1
Methods
getProjects
GET /v1/projects
Gets a project's public Identity Toolkit configuration.
getPublicKeys
GET /v1/publicKeys
Retrieves public keys of the legacy Identity Toolkit token signer to enable third parties to verify the legacy ID token.
getRecaptchaParams
GET /v1/recaptchaParams
Gets parameters needed for generating a reCAPTCHA challenge.
getSessionCookiePublicKeys
GET /v1/sessionCookiePublicKeys
Retrieves the set of public keys of the session cookie JSON Web Token (JWT) signer that can be used to validate the session cookie created through createSessionCookie .
REST Resource: v1.accounts
Methods
createAuthUri
POST /v1/accounts:createAuthUri
If an email identifier is specified, checks and returns if any user account is registered with the email.
delete
POST /v1/accounts:delete
Deletes a user's account.
issueSamlResponse
POST /v1/accounts:issueSamlResponse
Experimental
lookup
POST /v1/accounts:lookup
Gets account information for all matched accounts.
resetPassword
POST /v1/accounts:resetPassword
Resets the password of an account either using an out-of-band code generated by sendOobCode or by specifying the email and password of the account to be modified.
sendOobCode
POST /v1/accounts:sendOobCode
Sends an out-of-band confirmation code for an account.
sendVerificationCode
POST /v1/accounts:sendVerificationCode
Sends a SMS verification code for phone number sign-in.
signInWithCustomToken
POST /v1/accounts:signInWithCustomToken
Signs in or signs up a user by exchanging a custom Auth token.
signInWithEmailLink
POST /v1/accounts:signInWithEmailLink
Signs in or signs up a user with a out-of-band code from an email link.
signInWithGameCenter
POST /v1/accounts:signInWithGameCenter
Signs in or signs up a user with iOS Game Center credentials.
signInWithIdp
POST /v1/accounts:signInWithIdp
Signs in or signs up a user using credentials from an Identity Provider (IdP).
signInWithPassword
POST /v1/accounts:signInWithPassword
Signs in a user with email and password.
signInWithPhoneNumber
POST /v1/accounts:signInWithPhoneNumber
Completes a phone number authentication attempt.
signUp
POST /v1/accounts:signUp
Signs up a new email and password user or anonymous user, or upgrades an anonymous user to email and password.
update
POST /v1/accounts:update
Updates account-related information for the specified user by setting specific fields or applying action codes.
verifyIosClient
POST /v1/accounts:verifyIosClient
Verifies an iOS client is a real iOS device.
REST Resource: v1.projects
Methods
accounts
POST /v1/projects/{targetProjectId}/accounts
Signs up a new email and password user or anonymous user, or upgrades an anonymous user to email and password.
createSessionCookie
POST /v1/projects/{targetProjectId}:createSessionCookie
Creates a session cookie for the given Identity Platform ID token.
queryAccounts
POST /v1/projects/{targetProjectId}:queryAccounts
Looks up user accounts within a project or a tenant based on conditions in the request.
REST Resource: v1.projects.accounts
Methods
batchCreate
POST /v1/projects/{targetProjectId}/accounts:batchCreate
Uploads multiple accounts into the Google Cloud project.
batchDelete
POST /v1/projects/{targetProjectId}/accounts:batchDelete
Batch deletes multiple accounts.
batchGet
GET /v1/projects/{targetProjectId}/accounts:batchGet
Download account information for all accounts on the project in a paginated manner.
delete
POST /v1/projects/{targetProjectId}/accounts:delete
Deletes a user's account.
lookup
POST /v1/projects/{targetProjectId}/accounts:lookup
Gets account information for all matched accounts.
query
POST /v1/projects/{targetProjectId}/accounts:query
Looks up user accounts within a project or a tenant based on conditions in the request.
sendOobCode
POST /v1/projects/{targetProjectId}/accounts:sendOobCode
Sends an out-of-band confirmation code for an account.
update
POST /v1/projects/{targetProjectId}/accounts:update
Updates account-related information for the specified user by setting specific fields or applying action codes.
REST Resource: v1.projects.tenants
Methods
accounts
POST /v1/projects/{targetProjectId}/tenants/{tenantId}/accounts
Signs up a new email and password user or anonymous user, or upgrades an anonymous user to email and password.
createSessionCookie
POST /v1/projects/{targetProjectId}/tenants/{tenantId}:createSessionCookie
Creates a session cookie for the given Identity Platform ID token.
REST Resource: v1.projects.tenants.accounts
Methods
batchCreate
POST /v1/projects/{targetProjectId}/tenants/{tenantId}/accounts:batchCreate
Uploads multiple accounts into the Google Cloud project.
batchDelete
POST /v1/projects/{targetProjectId}/tenants/{tenantId}/accounts:batchDelete
Batch deletes multiple accounts.
batchGet
GET /v1/projects/{targetProjectId}/tenants/{tenantId}/accounts:batchGet
Download account information for all accounts on the project in a paginated manner.
delete
POST /v1/projects/{targetProjectId}/tenants/{tenantId}/accounts:delete
Deletes a user's account.
lookup
POST /v1/projects/{targetProjectId}/tenants/{tenantId}/accounts:lookup
Gets account information for all matched accounts.
query
POST /v1/projects/{targetProjectId}/tenants/{tenantId}/accounts:query
Looks up user accounts within a project or a tenant based on conditions in the request.
sendOobCode
POST /v1/projects/{targetProjectId}/tenants/{tenantId}/accounts:sendOobCode
Sends an out-of-band confirmation code for an account.
update
POST /v1/projects/{targetProjectId}/tenants/{tenantId}/accounts:update
Updates account-related information for the specified user by setting specific fields or applying action codes.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
