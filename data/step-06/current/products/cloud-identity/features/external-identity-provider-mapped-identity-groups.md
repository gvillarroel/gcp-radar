---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:40:14.321Z"
product_name: "Cloud Identity"
product_slug: "cloud-identity"
feature_name: "External identity provider-mapped identity groups"
feature_slug: "external-identity-provider-mapped-identity-groups"
latest_feature_date: "2018-12-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity"
  - "https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys"
keywords:
  - "external"
  - "identity"
  - "provider"
  - "mapped"
  - "groups"
  - "can"
  - "be"
  - "created"
---

# External identity provider-mapped identity groups

Product: Cloud Identity
Coverage: LOW

## Step 02 Summary

Identity groups can be created to map to external identity providers.

## Extended Definition

Identity groups can be created to map to external identity providers.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation](https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation)
- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- [https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys)

## Supporting Pages

### "Integrate Cloud Run and Workload Identity Federation \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation](https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation)
- Source ID: `site-iam-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you already have an identity provider that supports OpenID Connect and an external workload, you can skip this step and go to Installing Cloud Client Libraries.
- Create a role binding for the user to impersonate the service account: gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT \ --role roles/iam.workloadIdentityUser \ --member "principal://iam.googleapis.com/projects/ $PROJECT NUMBER /locations/global/workloadIdentityPools/cloudrun-oidc-pool/subject/ USER EMAIL Replace the following: SERVICE ACCOUNT with the email address of the service account that you created in Configure your Google Cloud environment .
- Your output file should look like the following: { "type" : "external account" , "audience" : "//iam.google.apis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/cloudrun-oidc-pool/subject/ USER EMAIL " , "subject token type" : "urn:ietf:params:oauth:token-type:jwt" , "token url" : "https://sts.googleapis.com/v1/token" , "credential source" : { "file" "token.txt" } } PROJECT NUMBER is your project number.
- On the VM, create your credentials file: gcloud iam workload-identity-pools create-cred-config \ projects/ $PROJECT NUMBER /locations/global/workloadIdentityPools/cloudrun-oidc-pool/providers/cloud-run/provider \ --output-file = sts-creds.json \ --credential-source-file = token.txt For more information, see gcloud iam workload-identity-pools create-cred-config .

### "Example logs for Workforce Identity Federation \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Either modify your attribute mapping or the incoming assertion to produce a mapped attribute that is less than 400." }, "authenticationInfo": { "principalSubject": "3Kn-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc" }, "requestMetadata": { "callerIp": "2601:647:4680:9140:9d68:88c9:cab9:a908", "callerSuppliedUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 15 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36", "requestAttributes": { "time": "2025-04-09T18:32:34.979311Z", "auth": {} }, "destinationAttributes": {} }, "serviceName": "sts.googleapis.com", "methodName": "google.identity.sts.SecurityTokenService.WebSignIn", "authorizationInfo": [ { "permission": "sts.identityProviders.checkLogging", "granted": false, "permissionType": "ADMIN READ" } ], "resourceName": "locations/global/workforcePools/my-pool/providers/my-provider", "request": { "@type": "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignInRequest", "provider": "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider", "host": "auth-staging.corp.cloud.google" }, "metadata": { "mappedAttributes": { "google.subject": "3Nk-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc", "google.providerId": "my-provider-id", "google.groups": "[group-claim-1, group-claim-2, ..., group-claim-800]" } } }, "insertId": "-llnhbmck3a", "resource": { "type": "audited resource", "labels": { "service": "sts.googleapis.com", "method": "google.identity.sts.SecurityTokenService.WebSignIn" } }, "timestamp": "2025-04-09T18:32:34.208412Z", "severity": "ERROR", "logName": "organizations/123456789012/logs/cloudaudit.googleapis.com%2Fdata access", "receiveTimestamp": "2025-04-09T18:32:35.059811619Z" } Logs for signed and encrypted SAML assertions This section describes the Cloud Audit Logs log entries that Security Token Service creates when it attempts to verify signed SAML assertions or decrypt encrypted assertions that are sent from your IdP.
- In this case, the following Cloud Audit Logs entry is generated: { "logName" : "organizations/my-organization-id/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "user@example.com" , }, "serviceName" : "sts.googleapis.com" , "methodName" : "google.identity.sts.SecurityTokenService.WebSignIn" , "resourceName" : "locations/global/workforcePools/my-pool/providers/my-provider" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignInRequest" , "provider" : "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider" , "continueUrl" : "https://console.cloud.google" , "host" : "http://auth.cloud.google" , }, "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , } }, "resource" : { "type" : "audited resource" , "labels" : { "service" : "sts.googleapis.com" , "method" : "google.identity.sts.SecurityTokenService.WebSignIn" , } }, } The Cloud Audit Logs entry for SAML providers can additionally contain signing key information in the metadata field. { "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , "keyInfo" : [ { "use" : "verify" , "fingerprint" : "AE:CK:LM:EF:LK:OG:EH:IJ:KN:AL:OM:AD:NO" , } ], } } Logs for failed sign-in This section provides an example Cloud Audit Logs entry that is logged as a result of a failed sign-in.
- In this example, an OIDC token is exchanged for a federated token: { "logName" : "organizations/123456789012/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "b6112abb-5791-4507-adb5-7e8cc306eb2e" }, "metadata" : { "mapped principal" : "principal://iam.googleapis.com/locations/global/workforcePools/oidc-pool/subject/a1234bcd-5678-9012-efa3-4b5cd678ef9a" }, "methodName" : "google.identity.sts.v1.SecurityTokenService.ExchangeToken" , "resourceName" : "locations/global/workforcePools/oidc-pool/providers/oidc-provider" , "serviceName" : "sts.googleapis.com" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.v1.SecurityTokenService.ExchangeTokenRequest" , "audience" : "//iam.googleapis.com/locations/global/workforcePools/oidc-pool/providers/oidc-provider" , "grantType" : "urn:ietf:params:oauth:grant-type:token-exchange" , "requestedTokenType" : "urn:ietf:params:oauth:token-type:access token" , "subjectTokenType" : "urn:ietf:params:oauth:token-type:id token" } }, "resource" : { "type" : "audited resource" } } Failed token exchange: Too many groups The following example log describes a token exchange that failed because the number of groups claims exceeded the maximum of 400.
- In this case, the following Cloud Audit Logs entry is generated: Note: The Cloud Audit Logs entry is written only for the initiator of the sign-out action. { "logName" : "organizations/my-organization-id/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "user@example.com" , }, "serviceName" : "sts.googleapis.com" , "methodName" : "google.identity.sts.SecurityTokenService.WebSignOut" , "resourceName" : "locations/global/workforcePools/my-pool/providers/my-provider" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignOutRequest" , "provider" : "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider" , "host" : "http://auth.cloud.google" }, "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , } }, "resource" : { "type" : "audited resource" , "labels" : { "service" : "sts.googleapis.com" , "method" : "google.identity.sts.SecurityTokenService.WebSignOut" } }, } Logs for signing in with OAuth flow After you set up your workforce identity pool and workforce identity pool provider, you can use Google Cloud resources using the OAuth flow.

### "Best practices for managing service account keys \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If an application already has an identity that these cloud providers can recognize, your application would be able to use that identity to authenticate to Google Cloud instead of using a service account key.
- The resulting access token reflects the service account's identity and you can use it to interact with Google Cloud APIs on the service account's behalf.
- This is because, to access Secret Manager secrets, your application needs an identity that Google Cloud can recognize.
- Provide alternatives to creating service account keys Make sure that users in your organization are aware of alternatives and can justify the additional risk and management overhead of using a service account key: Educate your developers on more secure alternatives to service account keys Establish a process to help developers decide on the appropriate authentication method for their use case before creating a new service account key.

