---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.414Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Workforce Identity Federation"
feature_slug: "workforce-identity-federation"
latest_feature_date: "2022-07-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
  - "https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation"
keywords:
  - "workforce"
  - "identity"
  - "federation"
  - "lets"
  - "you"
  - "authenticate"
  - "and"
  - "authorize"
---

# Workforce Identity Federation

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Lets you authenticate and authorize users from external identity providers to access supported Google Cloud products.

## Extended Definition

Lets you authenticate and authorize users from external identity providers to access supported Google Cloud products.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation](https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation)
- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation](https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation)

## Supporting Pages

### "Configure Workforce Identity Federation \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation](https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation)
- Source ID: `site-docs-root-2`
- Final score: 321
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security IAM Identity and Access Management (IAM) Guides Send feedback Configure Workforce Identity Federation Stay organized with collections Save and categorize content based on your preferences.
- Configure Workforce Identity Federation To configure Workforce Identity Federation, you create a workforce identity pool and a workforce identity pool provider .
- Delete workforce identity federation encryption keys To delete SAML encryption keys run the following command: gcloud iam workforce-pools providers keys delete KEY ID \ --workforce-pool WORKFORCE POOL ID \ --provider WORKFORCE PROVIDER ID \ --location global Replace the following: KEY ID : the key name WORKFORCE POOL ID : the pool ID WORKFORCE PROVIDER ID : the workforce identity pool provider ID Supported SAML encryption algorithms Workforce identity federation supports the following key transport algorithms: http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p http://www.w3.org/2009/xmlenc11#rsa-oaep" http://www.w3.org/2001/04/xmlenc#rsa-1 5" Workforce identity federation supports the following block encryption algorithms: http://www.w3.org/2001/04/xmlenc#aes128-cbc http://www.w3.org/2001/04/xmlenc#aes192-cbc http://www.w3.org/2001/04/xmlenc#aes256-cbc http://www.w3.org/2009/xmlenc11#aes128-gcm http://www.w3.org/2009/xmlenc11#aes256-gcm SAML X.509 signing key requirements The following key specifications apply to SAML X.509 signing keys: An RSA public key that is wrapped in an X.509 v3 certificate .
- Only workforce identity federation has access to the private key. gcloud iam workforce-pools providers keys describe KEY ID \ --workforce-pool WORKFORCE POOL ID \ --provider WORKFORCE PROVIDER ID \ --location global \ --format "value(keyData.key)" \ CERTIFICATE PATH Replace the following: KEY ID : the key name WORKFORCE POOL ID : the pool ID WORKFORCE PROVIDER ID : the workforce identity pool provider ID CERTIFICATE PATH : the path to write the certificate to—for example, saml-certificate.cer or saml-certificate.pem Configure your SAML 2.0-compliant IdP to issue encrypted SAML assertions Configure your SAML IdP to use the public certificate downloaded from the last step to encrypt the SAML assertions that it issues.

### "Example logs for Workforce Identity Federation \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- Source ID: `site-docs-root-2`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security IAM Guides Send feedback Example logs for Workforce Identity Federation Stay organized with collections Save and categorize content based on your preferences.
- Either modify your attribute mapping or the incoming assertion to produce a mapped attribute that is less than 400." }, "authenticationInfo": { "principalSubject": "3Kn-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc" }, "requestMetadata": { "callerIp": "2601:647:4680:9140:9d68:88c9:cab9:a908", "callerSuppliedUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 15 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36", "requestAttributes": { "time": "2025-04-09T18:32:34.979311Z", "auth": {} }, "destinationAttributes": {} }, "serviceName": "sts.googleapis.com", "methodName": "google.identity.sts.SecurityTokenService.WebSignIn", "authorizationInfo": [ { "permission": "sts.identityProviders.checkLogging", "granted": false, "permissionType": "ADMIN READ" } ], "resourceName": "locations/global/workforcePools/my-pool/providers/my-provider", "request": { "@type": "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignInRequest", "provider": "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider", "host": "auth-staging.corp.cloud.google" }, "metadata": { "mappedAttributes": { "google.subject": "3Nk-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc", "google.providerId": "my-provider-id", "google.groups": "[group-claim-1, group-claim-2, ..., group-claim-800]" } } }, "insertId": "-llnhbmck3a", "resource": { "type": "audited resource", "labels": { "service": "sts.googleapis.com", "method": "google.identity.sts.SecurityTokenService.WebSignIn" } }, "timestamp": "2025-04-09T18:32:34.208412Z", "severity": "ERROR", "logName": "organizations/123456789012/logs/cloudaudit.googleapis.com%2Fdata access", "receiveTimestamp": "2025-04-09T18:32:35.059811619Z" } Logs for signed and encrypted SAML assertions This section describes the Cloud Audit Logs log entries that Security Token Service creates when it attempts to verify signed SAML assertions or decrypt encrypted assertions that are sent from your IdP.
- In this case, the following Cloud Audit Logs entry is generated: Note: The Cloud Audit Logs entry is written only for the initiator of the sign-out action. { "logName" : "organizations/my-organization-id/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "user@example.com" , }, "serviceName" : "sts.googleapis.com" , "methodName" : "google.identity.sts.SecurityTokenService.WebSignOut" , "resourceName" : "locations/global/workforcePools/my-pool/providers/my-provider" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignOutRequest" , "provider" : "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider" , "host" : "http://auth.cloud.google" }, "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , } }, "resource" : { "type" : "audited resource" , "labels" : { "service" : "sts.googleapis.com" , "method" : "google.identity.sts.SecurityTokenService.WebSignOut" } }, } Logs for signing in with OAuth flow After you set up your workforce identity pool and workforce identity pool provider, you can use Google Cloud resources using the OAuth flow.
- In this example, the user sam@example.com created a workforce pool with the ID my-pool under the organization with the ID 123456789012 . { "logName" : "organizations/123456789012/logs/cloudaudit.googleapis.com%2Factivity" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalEmail" : "sam@example.com" , }, "methodName" : "google.iam.admin.v1.WorkforcePools.CreateWorkforcePool" , "resourceName" : "locations/global/workforcePools/my-pool" , "serviceName" : "iam.googleapis.com" , "request" : { "@type" : "type.googleapis.com/google.iam.admin.v1.CreateWorkforcePoolRequest" , "workforcePool" : { "parent" : "organizations/123456789012" }, "workforcePoolId" : "my-pool" } }, "resource" : { "type" : "audited resource" } } Logs for exchanging an IdP token for a federated token After you set up your workforce identity pool and workforce identity pool provider, you can create a token for your identity provider (IdP) and exchange it for a federated token.

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-api-reference`
- Final score: 289
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workforce Identity Federation Workforce Identity Federation lets your workforce—employees, vendors, partners, and other users—access Google Cloud products by using an identity provider (IdP).
- To grant the role to Workforce Identity Federation users, you must go to the IAM page and specify a Workforce Identity Federation principal identifier or contact the project owner to do so.
- Other: No known limitations AlloyDB for PostgreSQL GA Console (federated): The following fleet health features aren't supported while using Workforce Identity Federation: Performance and Backups summary cards Data in the clusters table, such as CPU percentage and Memory Available Google Cloud API: No known limitations Other: No known limitations Anti Money Laundering AI GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations API Gateway GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Apigee GA Console (federated): Features in Preview aren't supported for Workforce Identity Federation users.
- Other: No known limitations Document AI GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Endpoint Verification Unsupported Alternatives: No alternatives available Enterprise Knowledge Graph Unsupported Alternatives: No alternatives available Error Reporting GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Eventarc GA Console (federated): Although you can use an existing workflow as an Eventarc trigger destination, Workforce Identity Federation users can't create new workflows.

### "Integrate Cloud Run and Workload Identity Federation \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation](https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- External workload authentication using Workload Identity Federation Workload Identity Federation lets you authenticate workloads outside of Google Cloud without using a static service account key.
- When you complete this tutorial, you can see how Workload Identity Federation lets you authenticate your Jenkins application with Google Cloud by using OpenID Connect authentication.
- Workload Identity Federation lets you use your IdP to authenticate directly with Google Cloud.
- Home Documentation Security IAM Identity and Access Management (IAM) Guides Send feedback Integrate Cloud Run and Workload Identity Federation Stay organized with collections Save and categorize content based on your preferences.

