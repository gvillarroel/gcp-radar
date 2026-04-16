---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.392Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Detailed audit logging for Workforce Identity Federation"
feature_slug: "detailed-audit-logging-for-workforce-identity-federation"
latest_feature_date: "2025-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity"
  - "https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-oauth-clients"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamscim"
keywords:
  - "detailed"
  - "audit"
  - "logging"
  - "for"
  - "workforce"
  - "identity"
  - "federation"
  - "provides"
---

# Detailed audit logging for Workforce Identity Federation

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Workforce Identity Federation provides detailed audit logs for troubleshooting attribute mapping issues.

## Extended Definition

Workforce Identity Federation provides detailed audit logs for troubleshooting attribute mapping issues.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- [https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation](https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation)
- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-oauth-clients](https://docs.cloud.google.com/iam/docs/audit-logging/examples-oauth-clients)
- [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamscim](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamscim)

## Supporting Pages

### "Example logs for Workforce Identity Federation \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- Source ID: `site-docs-root-2`
- Final score: 345
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To log attributes that are received by Workforce Identity Federation, you must enable detailed audit logging when you create your workforce identity pool provider.
- Either modify your attribute mapping or the incoming assertion to produce a mapped attribute that is less than 400." }, "authenticationInfo": { "principalSubject": "3Kn-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc" }, "requestMetadata": { "callerIp": "2601:647:4680:9140:9d68:88c9:cab9:a908", "callerSuppliedUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 15 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36", "requestAttributes": { "time": "2025-04-09T18:32:34.979311Z", "auth": {} }, "destinationAttributes": {} }, "serviceName": "sts.googleapis.com", "methodName": "google.identity.sts.SecurityTokenService.WebSignIn", "authorizationInfo": [ { "permission": "sts.identityProviders.checkLogging", "granted": false, "permissionType": "ADMIN READ" } ], "resourceName": "locations/global/workforcePools/my-pool/providers/my-provider", "request": { "@type": "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignInRequest", "provider": "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider", "host": "auth-staging.corp.cloud.google" }, "metadata": { "mappedAttributes": { "google.subject": "3Nk-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc", "google.providerId": "my-provider-id", "google.groups": "[group-claim-1, group-claim-2, ..., group-claim-800]" } } }, "insertId": "-llnhbmck3a", "resource": { "type": "audited resource", "labels": { "service": "sts.googleapis.com", "method": "google.identity.sts.SecurityTokenService.WebSignIn" } }, "timestamp": "2025-04-09T18:32:34.208412Z", "severity": "ERROR", "logName": "organizations/123456789012/logs/cloudaudit.googleapis.com%2Fdata access", "receiveTimestamp": "2025-04-09T18:32:35.059811619Z" } Logs for signed and encrypted SAML assertions This section describes the Cloud Audit Logs log entries that Security Token Service creates when it attempts to verify signed SAML assertions or decrypt encrypted assertions that are sent from your IdP.
- In this case, the following Cloud Audit Logs entry is generated: { "logName" : "organizations/my-organization-id/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "user@example.com" , }, "serviceName" : "sts.googleapis.com" , "methodName" : "google.identity.sts.SecurityTokenService.WebSignIn" , "resourceName" : "locations/global/workforcePools/my-pool/providers/my-provider" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignInRequest" , "provider" : "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider" , "continueUrl" : "https://console.cloud.google" , "host" : "http://auth.cloud.google" , }, "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , } }, "resource" : { "type" : "audited resource" , "labels" : { "service" : "sts.googleapis.com" , "method" : "google.identity.sts.SecurityTokenService.WebSignIn" , } }, } The Cloud Audit Logs entry for SAML providers can additionally contain signing key information in the metadata field. { "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , "keyInfo" : [ { "use" : "verify" , "fingerprint" : "AE:CK:LM:EF:LK:OG:EH:IJ:KN:AL:OM:AD:NO" , } ], } } Logs for failed sign-in This section provides an example Cloud Audit Logs entry that is logged as a result of a failed sign-in.
- In this case, the number of groups exceeded the Workforce Identity Federation limit. { "protoPayload": { "@type": "type.googleapis.com/google.cloud.audit.AuditLog", "status": { "code": 3, "message": "The current count of 800 mapped attribute google.groups exceeds the 400 count limit.

### "Configure Workforce Identity Federation \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation](https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation)
- Source ID: `site-docs-root-2`
- Final score: 321
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workforce Identity Federation detailed audit logging logs information received from your IdP to Logging.
- Workforce Identity Federation detailed audit logging logs information received from your IdP to Logging.
- Workforce Identity Federation detailed audit logging logs information received from your IdP to Logging.
- Workforce Identity Federation detailed audit logging logs information received from your IdP to Logging.

### "Example logs for Workforce Identity Federation OAuth application integration\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-oauth-clients](https://docs.cloud.google.com/iam/docs/audit-logging/examples-oauth-clients)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page provides examples of the audit logs that are generated when you use Workforce Identity Federation OAuth application integration .
- Home Documentation Security IAM Guides Send feedback Example logs for Workforce Identity Federation OAuth application integration Stay organized with collections Save and categorize content based on your preferences.
- With Workforce Identity Federation OAuth application integration, you can allow third-party applications to integrate with Google Cloud through OAuth and use external identities to access Google Cloud resources.
- For more information about enabling and viewing audit logs, see Identity and Access Management audit logging .

### "System for Cross-domain Identity Management (SCIM) audit logging \_|\_ Identity\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamscim](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamscim)
- Source ID: `site-docs-root-2`
- Final score: 247
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security IAM Guides Send feedback System for Cross-domain Identity Management (SCIM) audit logging Stay organized with collections Save and categorize content based on your preferences.
- Permission type Methods ADMIN READ google.cloud.iamscim.v1alpha1.Users.ListUsers ADMIN WRITE google.cloud.iamscim.v1alpha1.Groups.CreateGroup google.cloud.iamscim.v1alpha1.Groups.DeleteGroup google.cloud.iamscim.v1alpha1.Groups.PatchGroup google.cloud.iamscim.v1alpha1.Users.CreateUser google.cloud.iamscim.v1alpha1.Users.DeleteUser google.cloud.iamscim.v1alpha1.Users.PatchUser google.cloud.iamscim.v1alpha1.Users.PutUser API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for IAM SCIM Service. google.cloud.iamscim.v1alpha1.Groups The following audit logs are associated with methods belonging to google.cloud.iamscim.v1alpha1.Groups .
- Filter for this method : protoPayload.methodName="google.cloud.iamscim.v1alpha1.Groups.CreateGroup" DeleteGroup Method : google.cloud.iamscim.v1alpha1.Groups.DeleteGroup Audit log type : Admin activity Permissions : iam.workforcePoolProviderScimGroups.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.iamscim.v1alpha1.Groups.DeleteGroup" PatchGroup Method : google.cloud.iamscim.v1alpha1.Groups.PatchGroup Audit log type : Admin activity Permissions : iam.workforcePoolProviderScimGroups.patch - ADMIN WRITE Method is a long-running or streaming operation : No.

