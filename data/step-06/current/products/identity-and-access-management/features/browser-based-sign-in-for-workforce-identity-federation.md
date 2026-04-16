---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.412Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Browser-based sign-in for Workforce Identity Federation"
feature_slug: "browser-based-sign-in-for-workforce-identity-federation"
latest_feature_date: "2023-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity"
  - "https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines"
  - "https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation"
keywords:
  - "browser"
  - "based"
  - "sign"
  - "in"
  - "for"
  - "workforce"
  - "identity"
  - "federation"
---

# Browser-based sign-in for Workforce Identity Federation

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Lets Workforce Identity Federation users sign in to the Google Cloud CLI through a browser-based flow.

## Extended Definition

Lets Workforce Identity Federation users sign in to the Google Cloud CLI through a browser-based flow.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation](https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation)
- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- [https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines](https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines)
- [https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation](https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation)

## Supporting Pages

### "Configure Workforce Identity Federation \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation](https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation)
- Source ID: `site-docs-root-2`
- Final score: 356
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To verify your provider configuration, do the following: To enable the browser-based sign-in flow for Workforce Identity Federation, add https://auth.cloud.google/signin-callback/locations/global/workforcePools/ POOL ID /providers/ PROVIDER ID to your IdP's list of allowed redirect URIs.
- To set the redirect URL, locate the redirect URL field in your SAML IdP, and do one of the following: To set up browser-based sign-in through the Google Cloud console or another browser-based sign-in method, enter following URL: https://auth.cloud.google/signin-callback/locations/global/workforcePools/ WORKFORCE POOL ID /providers/ WORKFORCE PROVIDER ID Replace the following: WORKFORCE POOL ID : the workforce identity pool ID WORKFORCE PROVIDER ID : the ID of the workforce identity pool provider that you create later in this document.
- Delete workforce identity federation encryption keys To delete SAML encryption keys run the following command: gcloud iam workforce-pools providers keys delete KEY ID \ --workforce-pool WORKFORCE POOL ID \ --provider WORKFORCE PROVIDER ID \ --location global Replace the following: KEY ID : the key name WORKFORCE POOL ID : the pool ID WORKFORCE PROVIDER ID : the workforce identity pool provider ID Supported SAML encryption algorithms Workforce identity federation supports the following key transport algorithms: http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p http://www.w3.org/2009/xmlenc11#rsa-oaep" http://www.w3.org/2001/04/xmlenc#rsa-1 5" Workforce identity federation supports the following block encryption algorithms: http://www.w3.org/2001/04/xmlenc#aes128-cbc http://www.w3.org/2001/04/xmlenc#aes192-cbc http://www.w3.org/2001/04/xmlenc#aes256-cbc http://www.w3.org/2009/xmlenc11#aes128-gcm http://www.w3.org/2009/xmlenc11#aes256-gcm SAML X.509 signing key requirements The following key specifications apply to SAML X.509 signing keys: An RSA public key that is wrapped in an X.509 v3 certificate .
- For IdP-specific instructions, see the following: Configure Microsoft Entra ID-based Workforce Identity Federation Configure Okta-based Workforce Identity Federation Before you begin Make sure that you have a Google Cloud organization set up.

### "Example logs for Workforce Identity Federation \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- Source ID: `site-docs-root-2`
- Final score: 319
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Workforce Identity Federation, the pertinent log entry looks similar to the following: "keyInfo": [ { "use": "verify" "fingerprint": "3C:B2:47:F8:A5:9A:8A:52:BD:1C:BC:96:B5:45:C1:8D:A7:F1:73:2D" }, { "use": "decrypt" "resourceName": "//iam.googleapis.com/locations/global/workforcePools/ WORKFORCE POOL NAME /providers/ PROVIDER NAME /keys/ KEY NAME " } ] This output includes the following values: fingerprint : the hexadecimal representation of the SHA-256 hash of the X.509 certificate that was used to verify the signature on the SAML credential.
- Either modify your attribute mapping or the incoming assertion to produce a mapped attribute that is less than 400." }, "authenticationInfo": { "principalSubject": "3Kn-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc" }, "requestMetadata": { "callerIp": "2601:647:4680:9140:9d68:88c9:cab9:a908", "callerSuppliedUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 15 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36", "requestAttributes": { "time": "2025-04-09T18:32:34.979311Z", "auth": {} }, "destinationAttributes": {} }, "serviceName": "sts.googleapis.com", "methodName": "google.identity.sts.SecurityTokenService.WebSignIn", "authorizationInfo": [ { "permission": "sts.identityProviders.checkLogging", "granted": false, "permissionType": "ADMIN READ" } ], "resourceName": "locations/global/workforcePools/my-pool/providers/my-provider", "request": { "@type": "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignInRequest", "provider": "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider", "host": "auth-staging.corp.cloud.google" }, "metadata": { "mappedAttributes": { "google.subject": "3Nk-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc", "google.providerId": "my-provider-id", "google.groups": "[group-claim-1, group-claim-2, ..., group-claim-800]" } } }, "insertId": "-llnhbmck3a", "resource": { "type": "audited resource", "labels": { "service": "sts.googleapis.com", "method": "google.identity.sts.SecurityTokenService.WebSignIn" } }, "timestamp": "2025-04-09T18:32:34.208412Z", "severity": "ERROR", "logName": "organizations/123456789012/logs/cloudaudit.googleapis.com%2Fdata access", "receiveTimestamp": "2025-04-09T18:32:35.059811619Z" } Logs for signed and encrypted SAML assertions This section describes the Cloud Audit Logs log entries that Security Token Service creates when it attempts to verify signed SAML assertions or decrypt encrypted assertions that are sent from your IdP.
- In this case, the following Cloud Audit Logs entry is generated: { "logName" : "organizations/my-organization-id/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "user@example.com" , }, "serviceName" : "sts.googleapis.com" , "methodName" : "google.identity.sts.SecurityTokenService.WebSignIn" , "resourceName" : "locations/global/workforcePools/my-pool/providers/my-provider" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignInRequest" , "provider" : "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider" , "continueUrl" : "https://console.cloud.google" , "host" : "http://auth.cloud.google" , }, "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , } }, "resource" : { "type" : "audited resource" , "labels" : { "service" : "sts.googleapis.com" , "method" : "google.identity.sts.SecurityTokenService.WebSignIn" , } }, } The Cloud Audit Logs entry for SAML providers can additionally contain signing key information in the metadata field. { "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , "keyInfo" : [ { "use" : "verify" , "fingerprint" : "AE:CK:LM:EF:LK:OG:EH:IJ:KN:AL:OM:AD:NO" , } ], } } Logs for failed sign-in This section provides an example Cloud Audit Logs entry that is logged as a result of a failed sign-in.
- In this case, the following Cloud Audit Logs entry is generated: Note: The Cloud Audit Logs entry is written only for the initiator of the sign-out action. { "logName" : "organizations/my-organization-id/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "user@example.com" , }, "serviceName" : "sts.googleapis.com" , "methodName" : "google.identity.sts.SecurityTokenService.WebSignOut" , "resourceName" : "locations/global/workforcePools/my-pool/providers/my-provider" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignOutRequest" , "provider" : "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider" , "host" : "http://auth.cloud.google" }, "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , } }, "resource" : { "type" : "audited resource" , "labels" : { "service" : "sts.googleapis.com" , "method" : "google.identity.sts.SecurityTokenService.WebSignOut" } }, } Logs for signing in with OAuth flow After you set up your workforce identity pool and workforce identity pool provider, you can use Google Cloud resources using the OAuth flow.

### "Best practices for using service accounts in pipelines \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines](https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To perform the deployment, the deployment pipeline typically can't use your identity because: The source code and its metadata might not indicate that you were the author, or the author information isn't tamper-proof (as in the case of unsigned Git commits) The identity you used to submit source code might be different from your identity for Google Cloud, and the two identities can't be mapped Most deployment pipelines therefore perform deployments under their own identity by using a service account.
- Ways to prevent logs from revealing credentials include the following: Avoid passing access tokens or other credentials as command line arguments Avoid storing credentials in environment variables Configure your CI/CD system to automatically detect and mask tokens and other credentials if possible What's next Learn more about Workload Identity Federation and best practices for using Workload Identity Federation .
- Home Documentation Security IAM Identity and Access Management (IAM) Guides Send feedback Best practices for using service accounts in pipelines Stay organized with collections Save and categorize content based on your preferences.
- To perform this check, IAM typically considers: Your identity and any associated principal access boundary policies The resource you're trying to access and its IAM allow and deny policies The context of your request (possibly including time and location) In a deployment pipeline, you rarely call Google Cloud APIs directly.

### "Best practices for using Workload Identity Federation \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation](https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security IAM Identity and Access Management (IAM) Guides Send feedback Best practices for using Workload Identity Federation Stay organized with collections Save and categorize content based on your preferences.
- Use attribute conditions when federating with GitHub or other multi-tenant identity providers Workload Identity Federation doesn't maintain a directory of user accounts; instead, it implements claims-based identities : As a result, when two tokens are issued by the same identity provider (IdP) and their claims map to the same google.subject value, the two tokens are assumed to identify the same user.
- If you have an identity provider such as Active Directory Federation Services (AD FS) in your environment that supports Integrated Windows Authentication , you can use these Kerberos credentials to authenticate to the identity provider and obtain an OAuth access token that uses the JWT format.
- Use Workload Identity Federation to reduce the number of credentials that require rotation Applications that integrate with an OpenID or SAML identity provider often use a client secret (or a different form of secret) to authenticate to the identity provider.

