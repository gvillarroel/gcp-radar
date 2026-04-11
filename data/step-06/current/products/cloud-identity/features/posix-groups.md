---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:40:14.299Z"
product_name: "Cloud Identity"
product_slug: "cloud-identity"
feature_name: "POSIX groups"
feature_slug: "posix-groups"
latest_feature_date: "2024-09-25"
deprecation_date: "2024-09-26"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity"
  - "https://docs.cloud.google.com/identity/docs/reference/rest/v1/customers.userinvitations/isInvitableUser"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamscim"
keywords:
  - "posix"
  - "groups"
  - "let"
  - "identity"
  - "use"
  - "attributes"
  - "for"
  - "unix"
---

# POSIX groups

Product: Cloud Identity
Coverage: LOW

## Step 02 Summary

POSIX groups let Cloud Identity groups use POSIX attributes for Unix-style identity and access integration; deprecated on 2024-09-26.

## Extended Definition

POSIX groups let Cloud Identity groups use POSIX attributes for Unix-style identity and access integration; deprecated on 2024-09-26.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- [https://docs.cloud.google.com/identity/docs/reference/rest/v1/customers.userinvitations/isInvitableUser](https://docs.cloud.google.com/identity/docs/reference/rest/v1/customers.userinvitations/isInvitableUser)
- [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamscim](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamscim)

## Supporting Pages

### "Example logs for Workforce Identity Federation \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Either modify your attribute mapping or the incoming assertion to produce a mapped attribute that is less than 400." }, "authenticationInfo": { "principalSubject": "3Kn-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc" }, "requestMetadata": { "callerIp": "2601:647:4680:9140:9d68:88c9:cab9:a908", "callerSuppliedUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 15 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36", "requestAttributes": { "time": "2025-04-09T18:32:34.979311Z", "auth": {} }, "destinationAttributes": {} }, "serviceName": "sts.googleapis.com", "methodName": "google.identity.sts.SecurityTokenService.WebSignIn", "authorizationInfo": [ { "permission": "sts.identityProviders.checkLogging", "granted": false, "permissionType": "ADMIN READ" } ], "resourceName": "locations/global/workforcePools/my-pool/providers/my-provider", "request": { "@type": "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignInRequest", "provider": "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider", "host": "auth-staging.corp.cloud.google" }, "metadata": { "mappedAttributes": { "google.subject": "3Nk-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc", "google.providerId": "my-provider-id", "google.groups": "[group-claim-1, group-claim-2, ..., group-claim-800]" } } }, "insertId": "-llnhbmck3a", "resource": { "type": "audited resource", "labels": { "service": "sts.googleapis.com", "method": "google.identity.sts.SecurityTokenService.WebSignIn" } }, "timestamp": "2025-04-09T18:32:34.208412Z", "severity": "ERROR", "logName": "organizations/123456789012/logs/cloudaudit.googleapis.com%2Fdata access", "receiveTimestamp": "2025-04-09T18:32:35.059811619Z" } Logs for signed and encrypted SAML assertions This section describes the Cloud Audit Logs log entries that Security Token Service creates when it attempts to verify signed SAML assertions or decrypt encrypted assertions that are sent from your IdP.
- In this example, an OIDC token is exchanged for a federated token: { "logName" : "organizations/123456789012/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "b6112abb-5791-4507-adb5-7e8cc306eb2e" }, "metadata" : { "mapped principal" : "principal://iam.googleapis.com/locations/global/workforcePools/oidc-pool/subject/a1234bcd-5678-9012-efa3-4b5cd678ef9a" }, "methodName" : "google.identity.sts.v1.SecurityTokenService.ExchangeToken" , "resourceName" : "locations/global/workforcePools/oidc-pool/providers/oidc-provider" , "serviceName" : "sts.googleapis.com" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.v1.SecurityTokenService.ExchangeTokenRequest" , "audience" : "//iam.googleapis.com/locations/global/workforcePools/oidc-pool/providers/oidc-provider" , "grantType" : "urn:ietf:params:oauth:grant-type:token-exchange" , "requestedTokenType" : "urn:ietf:params:oauth:token-type:access token" , "subjectTokenType" : "urn:ietf:params:oauth:token-type:id token" } }, "resource" : { "type" : "audited resource" } } Failed token exchange: Too many groups The following example log describes a token exchange that failed because the number of groups claims exceeded the maximum of 400.
- In this case, the following Cloud Audit Logs entry is generated: { "logName" : "organizations/my-organization-id/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "user@example.com" , }, "serviceName" : "sts.googleapis.com" , "methodName" : "google.identity.sts.SecurityTokenService.WebSignIn" , "resourceName" : "locations/global/workforcePools/my-pool/providers/my-provider" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignInRequest" , "provider" : "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider" , "continueUrl" : "https://console.cloud.google" , "host" : "http://auth.cloud.google" , }, "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , } }, "resource" : { "type" : "audited resource" , "labels" : { "service" : "sts.googleapis.com" , "method" : "google.identity.sts.SecurityTokenService.WebSignIn" , } }, } The Cloud Audit Logs entry for SAML providers can additionally contain signing key information in the metadata field. { "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , "keyInfo" : [ { "use" : "verify" , "fingerprint" : "AE:CK:LM:EF:LK:OG:EH:IJ:KN:AL:OM:AD:NO" , } ], } } Logs for failed sign-in This section provides an example Cloud Audit Logs entry that is logged as a result of a failed sign-in.
- In this case, the following Cloud Audit Logs entry is generated: Note: The Cloud Audit Logs entry is written only for the initiator of the sign-out action. { "logName" : "organizations/my-organization-id/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "user@example.com" , }, "serviceName" : "sts.googleapis.com" , "methodName" : "google.identity.sts.SecurityTokenService.WebSignOut" , "resourceName" : "locations/global/workforcePools/my-pool/providers/my-provider" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignOutRequest" , "provider" : "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider" , "host" : "http://auth.cloud.google" }, "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , } }, "resource" : { "type" : "audited resource" , "labels" : { "service" : "sts.googleapis.com" , "method" : "google.identity.sts.SecurityTokenService.WebSignOut" } }, } Logs for signing in with OAuth flow After you set up your workforce identity pool and workforce identity pool provider, you can use Google Cloud resources using the OAuth flow.

### "Method: customers.userinvitations.isInvitableUser \_|\_ Cloud Identity \_\

- URL: [https://docs.cloud.google.com/identity/docs/reference/rest/v1/customers.userinvitations/isInvitableUser](https://docs.cloud.google.com/identity/docs/reference/rest/v1/customers.userinvitations/isInvitableUser)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloud-identity.userinvitations.readonly https://www.googleapis.com/auth/cloud-identity.userinvitations For more information, see the Authorization guide .
- Eligibility is based on the following criteria: the email address is a consumer account and it's the primary email address of the account, and the domain of the email address matches an existing verified Google Workspace or Cloud Identity domain If both conditions are met, the user is eligible.
- Home Documentation Access and resource management Cloud Identity Reference Send feedback Method: customers.userinvitations.isInvitableUser Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://cloudidentity.googleapis.com/v1/{name=customers/ /userinvitations/ }:isInvitableUser The URL uses gRPC Transcoding syntax.

### "System for Cross-domain Identity Management (SCIM) audit logging \_|\_ Identity\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamscim](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamscim)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.iamscim.v1alpha1.Users.ListUsers ADMIN WRITE google.cloud.iamscim.v1alpha1.Groups.CreateGroup google.cloud.iamscim.v1alpha1.Groups.DeleteGroup google.cloud.iamscim.v1alpha1.Groups.PatchGroup google.cloud.iamscim.v1alpha1.Users.CreateUser google.cloud.iamscim.v1alpha1.Users.DeleteUser google.cloud.iamscim.v1alpha1.Users.PatchUser google.cloud.iamscim.v1alpha1.Users.PutUser API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for IAM SCIM Service. google.cloud.iamscim.v1alpha1.Groups The following audit logs are associated with methods belonging to google.cloud.iamscim.v1alpha1.Groups .
- Filter for this method : protoPayload.methodName="google.cloud.iamscim.v1alpha1.Groups.CreateGroup" DeleteGroup Method : google.cloud.iamscim.v1alpha1.Groups.DeleteGroup Audit log type : Admin activity Permissions : iam.workforcePoolProviderScimGroups.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.iamscim.v1alpha1.Groups.DeleteGroup" PatchGroup Method : google.cloud.iamscim.v1alpha1.Groups.PatchGroup Audit log type : Admin activity Permissions : iam.workforcePoolProviderScimGroups.patch - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.iamscim.v1alpha1.Users.CreateUser" DeleteUser Method : google.cloud.iamscim.v1alpha1.Users.DeleteUser Audit log type : Admin activity Permissions : iam.workforcePoolProviderScimUsers.delete - ADMIN WRITE Method is a long-running or streaming operation : No.

