---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.411Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Encrypted SAML assertions for Workload Identity Federation"
feature_slug: "encrypted-saml-assertions-for-workload-identity-federation"
latest_feature_date: "2023-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity"
  - "https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation"
  - "https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity"
keywords:
  - "encrypted"
  - "saml"
  - "assertions"
  - "for"
  - "workload"
  - "identity"
  - "federation"
  - "can"
---

# Encrypted SAML assertions for Workload Identity Federation

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Workload Identity Federation can accept encrypted SAML assertions.

## Extended Definition

Workload Identity Federation can accept encrypted SAML assertions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity)
- [https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation](https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation)
- [https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation](https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation)
- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)

## Supporting Pages

### "Example logs for Workload Identity Federation \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity)
- Source ID: `site-docs-root-2`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this example, a Microsoft Azure token was exchanged for a federated token: { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "b6112abb-5791-4507-adb5-7e8cc306eb2e" }, "metadata" : { "mapped principal" : "principal://iam.googleapis.com/projects/1234567890123/locations/global/workloadIdentityPools/azure-pool/subject/a1234bcd-5678-9012-efa3-4b5cd678ef9a" }, "methodName" : "google.identity.sts.v1.SecurityTokenService.ExchangeToken" , "resourceName" : "projects/1234567890123/locations/global/workloadIdentityPools/azure-pool/providers/azure" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.v1.ExchangeTokenRequest" , "grantType" : "urn:ietf:params:oauth:grant-type:token-exchange" } }, "resource" : { "type" : "audited resource" } } Logs for signed and encrypted SAML assertions This section describes the Cloud Audit Logs log entries that Security Token Service creates when it attempts to verify signed SAML assertions or decrypt encrypted assertions that are sent from your IdP.
- For Workload Identity Federation, the pertinent log entry looks similar to the following: "keyInfo": [ { "certificateType": "trust anchor" "timeUntilExpiration": 3333405600s "fingerprintSha256": "e33f612a0e426692f29db2c7b17b9e3810ce13f09ad117c67e7227a84fd25ea5" "use": "verify" } This output includes the following values: certificateType : the type of certificate involved in the client certificate verification, which can be either trust anchor or intermediate ca timeUntilExpiration : the remaining time in seconds until certificate expiration when it's used in the certificate chain verification fingerprintSha256 : the hexadecimal representation of the SHA-256 hash of the X.509 certificate Logs for creating short-lived credentials for a service account After you exchange the IdP token for a federated token, you can use the federated token to create short-lived credentials for a service account.
- For Workload Identity Federation, the pertinent log entry looks similar to the following: "keyInfo": [ { "use": "verify" "fingerprint": "3C:B2:47:F8:A5:9A:8A:52:BD:1C:BC:96:B5:45:C1:8D:A7:F1:73:2D" }, { "use": "decrypt" "resourceName": "//iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ WORKLOAD POOL NAME /providers/ PROVIDER NAME /keys/ KEY NAME " } ] This output includes the following values: fingerprint : the hexadecimal representation of the SHA-256 hash of the X.509 certificate that was used to verify the signature on the SAML credential.
- In this example, the request was authenticated with federated credentials, and the short-lived credentials were created for the service account my-service-account@my-project.iam.gserviceaccount.com : { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "principal://iam.googleapis.com/projects/1234567890123/locations/global/workloadIdentityPools/aws-pool/subject/012345678901" }, "methodName" : "GenerateAccessToken" , "request" : { "@type" : "type.googleapis.com/google.iam.credentials.v1.GenerateAccessTokenRequest" , "name" : "projects/-/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com" }, "resourceName" : "projects/-/serviceAccounts/123456789012345678901" }, "resource" : { "labels" : { "email id" : "my-service-account@my-project.iam.gserviceaccount.com" , "project id" : "my-project" , "unique id" : "123456789012345678901" }, "type" : "service account" } } Logs for authenticating with credentials for the impersonated service account After you create short-lived credentials for a service account, you can use the credentials to impersonate the service account when you call Google Cloud APIs.

### "Best practices for using Workload Identity Federation \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation](https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation)
- Source ID: `site-docs-root-2`
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the ambient credentials are OpenID Connect (OIDC) tokens, SAML assertions, or AWS credentials, you can configure Workload Identity Federation to let applications exchange these credentials for short-lived Google access tokens.
- Requiring the token or assertion to contain the URL of the target workload identity pool provider helps you ensure that clients can only use tokens and assertions that were specifically issued for Workload Identity Federation.
- Use Workload Identity Federation to reduce the number of credentials that require rotation Applications that integrate with an OpenID or SAML identity provider often use a client secret (or a different form of secret) to authenticate to the identity provider.
- In such an attack, a bad actor presents a token or SAML assertion to Workload Identity Federation that wasn't intended to be used for Workload Identity Federation, but for some other API.

### "Configure Workforce Identity Federation \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation](https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation)
- Source ID: `site-docs-root-2`
- Final score: 284
- Re-rank relevance: N/A

Evidence snippets:
- Optional: Accept encrypted SAML assertions from your IdP To enable your SAML 2.0 IdP to produce encrypted SAML assertions that can be accepted by workforce identity federation, do the following: In workforce identity federation, do the following: Create an asymmetric key pair for your workforce identity pool provider.
- Only workforce identity federation has access to the private key. gcloud iam workforce-pools providers keys describe KEY ID \ --workforce-pool WORKFORCE POOL ID \ --provider WORKFORCE PROVIDER ID \ --location global \ --format "value(keyData.key)" \ CERTIFICATE PATH Replace the following: KEY ID : the key name WORKFORCE POOL ID : the pool ID WORKFORCE PROVIDER ID : the workforce identity pool provider ID CERTIFICATE PATH : the path to write the certificate to—for example, saml-certificate.cer or saml-certificate.pem Configure your SAML 2.0-compliant IdP to issue encrypted SAML assertions Configure your SAML IdP to use the public certificate downloaded from the last step to encrypt the SAML assertions that it issues.
- Create workforce identity federation SAML assertion encryption keys This section guides you through creating an asymmetric key pair that enables workforce identity federation to accept encrypted SAML assertions.
- Even with SAML assertion encryption configured, workforce identity federation can still process plaintext assertions.

### "Example logs for Workforce Identity Federation \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- Source ID: `site-docs-root-2`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Either modify your attribute mapping or the incoming assertion to produce a mapped attribute that is less than 400." }, "authenticationInfo": { "principalSubject": "3Kn-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc" }, "requestMetadata": { "callerIp": "2601:647:4680:9140:9d68:88c9:cab9:a908", "callerSuppliedUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 15 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36", "requestAttributes": { "time": "2025-04-09T18:32:34.979311Z", "auth": {} }, "destinationAttributes": {} }, "serviceName": "sts.googleapis.com", "methodName": "google.identity.sts.SecurityTokenService.WebSignIn", "authorizationInfo": [ { "permission": "sts.identityProviders.checkLogging", "granted": false, "permissionType": "ADMIN READ" } ], "resourceName": "locations/global/workforcePools/my-pool/providers/my-provider", "request": { "@type": "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignInRequest", "provider": "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider", "host": "auth-staging.corp.cloud.google" }, "metadata": { "mappedAttributes": { "google.subject": "3Nk-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc", "google.providerId": "my-provider-id", "google.groups": "[group-claim-1, group-claim-2, ..., group-claim-800]" } } }, "insertId": "-llnhbmck3a", "resource": { "type": "audited resource", "labels": { "service": "sts.googleapis.com", "method": "google.identity.sts.SecurityTokenService.WebSignIn" } }, "timestamp": "2025-04-09T18:32:34.208412Z", "severity": "ERROR", "logName": "organizations/123456789012/logs/cloudaudit.googleapis.com%2Fdata access", "receiveTimestamp": "2025-04-09T18:32:35.059811619Z" } Logs for signed and encrypted SAML assertions This section describes the Cloud Audit Logs log entries that Security Token Service creates when it attempts to verify signed SAML assertions or decrypt encrypted assertions that are sent from your IdP.
- In this case, the following Cloud Audit Logs entry is generated: { "logName" : "organizations/my-organization-id/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "user@example.com" , }, "serviceName" : "sts.googleapis.com" , "methodName" : "google.identity.sts.SecurityTokenService.WebSignIn" , "resourceName" : "locations/global/workforcePools/my-pool/providers/my-provider" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignInRequest" , "provider" : "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider" , "continueUrl" : "https://console.cloud.google" , "host" : "http://auth.cloud.google" , }, "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , } }, "resource" : { "type" : "audited resource" , "labels" : { "service" : "sts.googleapis.com" , "method" : "google.identity.sts.SecurityTokenService.WebSignIn" , } }, } The Cloud Audit Logs entry for SAML providers can additionally contain signing key information in the metadata field. { "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , "keyInfo" : [ { "use" : "verify" , "fingerprint" : "AE:CK:LM:EF:LK:OG:EH:IJ:KN:AL:OM:AD:NO" , } ], } } Logs for failed sign-in This section provides an example Cloud Audit Logs entry that is logged as a result of a failed sign-in.
- For Workforce Identity Federation, the pertinent log entry looks similar to the following: "keyInfo": [ { "use": "verify" "fingerprint": "3C:B2:47:F8:A5:9A:8A:52:BD:1C:BC:96:B5:45:C1:8D:A7:F1:73:2D" }, { "use": "decrypt" "resourceName": "//iam.googleapis.com/locations/global/workforcePools/ WORKFORCE POOL NAME /providers/ PROVIDER NAME /keys/ KEY NAME " } ] This output includes the following values: fingerprint : the hexadecimal representation of the SHA-256 hash of the X.509 certificate that was used to verify the signature on the SAML credential.
- The X.509 certificate is extracted from the SAML XML metadata that is attached to the workforce identity pool provider. resourceName : the resource name of the workforce identity pool provider key that was used to decrypt the encrypted SAML assertion.

