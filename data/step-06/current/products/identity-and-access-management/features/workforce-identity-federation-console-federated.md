---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.413Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Workforce Identity Federation console (federated)"
feature_slug: "workforce-identity-federation-console-federated"
latest_feature_date: "2022-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity"
  - "https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation"
keywords:
  - "workforce"
  - "identity"
  - "federation"
  - "console"
  - "federated"
  - "lets"
  - "users"
  - "from"
---

# Workforce Identity Federation console (federated)

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Lets users from external identity providers sign in to the federated Google Cloud console for UI access to supported products.

## Extended Definition

Lets users from external identity providers sign in to the federated Google Cloud console for UI access to supported products.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation](https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- [https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation](https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation)

## Supporting Pages

### "Configure Workforce Identity Federation \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation](https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation)
- Source ID: `site-docs-root-2`
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Configure SCIM in OIDC or SAML IdP Obtain short-lived credentials for Workforce Identity Federation Manage workforce identity pool providers Delete Workforce Identity Federation users and their data Learn which Google Cloud products support Workforce Identity Federation Set up user access to console (federated) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Delete users Workforce Identity Federation creates user metadata and resources for federated user identities.
- Only workforce identity federation has access to the private key. gcloud iam workforce-pools providers keys describe KEY ID \ --workforce-pool WORKFORCE POOL ID \ --provider WORKFORCE PROVIDER ID \ --location global \ --format "value(keyData.key)" \ CERTIFICATE PATH Replace the following: KEY ID : the key name WORKFORCE POOL ID : the pool ID WORKFORCE PROVIDER ID : the workforce identity pool provider ID CERTIFICATE PATH : the path to write the certificate to—for example, saml-certificate.cer or saml-certificate.pem Configure your SAML 2.0-compliant IdP to issue encrypted SAML assertions Configure your SAML IdP to use the public certificate downloaded from the last step to encrypt the SAML assertions that it issues.
- Optional: Accept encrypted SAML assertions from your IdP To enable your SAML 2.0 IdP to produce encrypted SAML assertions that can be accepted by workforce identity federation, do the following: In workforce identity federation, do the following: Create an asymmetric key pair for your workforce identity pool provider.

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-api-reference`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud API: No known limitations Other: The following features don't support Workforce Identity Federation with BigQuery: Connected Sheets Google Drive Recommendations Slot estimator The following operations don't support Workforce Identity Federation: Loading data from Amazon S3 , Apache Spark , or Azure Blob Storage through the Connection API Loading data from Google Drive Bigtable GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Binary Authorization GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Analytics GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Node Engine GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Carbon Footprint GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Authority Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Channel Services GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Asset Inventory GA Console (federated): In the IAM policy tab, the Analyze Full Access button is unavailable for Workforce Identity Federation users.
- Google Cloud API: No known limitations Other: No known limitations Network Service Tiers GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Organization Policy Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Parallelstore GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Personalized Service Health GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Policy Intelligence GA Console (federated): The following Policy Intelligence features have limitations for Workforce Identity Federation users who use the Google Cloud Workforce Identity Federation console: Policy Troubleshooter : Workforce Identity Federation users can't troubleshoot access in the console (federated).
- Other: No known limitations Storage Transfer Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Text-to-Speech GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Transcoder API GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Transfer Appliance GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Translation Hub Unsupported Alternatives: No alternatives available Vertex AI GA Console (federated): When Workforce Identity Federation users create a new model monitoring job, Vertex AI doesn't prefill the alert email input with their email address.
- Other: No known limitations AlloyDB for PostgreSQL GA Console (federated): The following fleet health features aren't supported while using Workforce Identity Federation: Performance and Backups summary cards Data in the clusters table, such as CPU percentage and Memory Available Google Cloud API: No known limitations Other: No known limitations Anti Money Laundering AI GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations API Gateway GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Apigee GA Console (federated): Features in Preview aren't supported for Workforce Identity Federation users.

### "Example logs for Workforce Identity Federation \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- Source ID: `site-docs-root-2`
- Final score: 255
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows an audit log entry for a request to list the Cloud Storage buckets in a project using a federated token. { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "principal://iam.googleapis.com/locations/global/workforcePools/oidc-pool/subject/kalani@altostrat.com" }, "methodName" : "storage.buckets.list" , "serviceName" : "storage.googleapis.com" , }, "resource" : { "type" : "gcs bucket" } } Logs for Google Cloud console (federated) sign in After you set up your workforce identity pools and their IdPs, users can sign in to Google Cloud using console (federated) .
- To enable audit logs when managing workforce pools, you must enable audit logs for Data Access activity for the following API: Identity and Access Management (IAM) API (enable log type "Admin Read") To further configure audit logs for the token-exchange process or Google Cloud console (federated) sign in, you must also enable audit logs for Data Access activity for the following API: Security Token Service API (enable log type "Admin Read") Note: The audit logs are generated at organization level.
- Either modify your attribute mapping or the incoming assertion to produce a mapped attribute that is less than 400." }, "authenticationInfo": { "principalSubject": "3Kn-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc" }, "requestMetadata": { "callerIp": "2601:647:4680:9140:9d68:88c9:cab9:a908", "callerSuppliedUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 15 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36", "requestAttributes": { "time": "2025-04-09T18:32:34.979311Z", "auth": {} }, "destinationAttributes": {} }, "serviceName": "sts.googleapis.com", "methodName": "google.identity.sts.SecurityTokenService.WebSignIn", "authorizationInfo": [ { "permission": "sts.identityProviders.checkLogging", "granted": false, "permissionType": "ADMIN READ" } ], "resourceName": "locations/global/workforcePools/my-pool/providers/my-provider", "request": { "@type": "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignInRequest", "provider": "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider", "host": "auth-staging.corp.cloud.google" }, "metadata": { "mappedAttributes": { "google.subject": "3Nk-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc", "google.providerId": "my-provider-id", "google.groups": "[group-claim-1, group-claim-2, ..., group-claim-800]" } } }, "insertId": "-llnhbmck3a", "resource": { "type": "audited resource", "labels": { "service": "sts.googleapis.com", "method": "google.identity.sts.SecurityTokenService.WebSignIn" } }, "timestamp": "2025-04-09T18:32:34.208412Z", "severity": "ERROR", "logName": "organizations/123456789012/logs/cloudaudit.googleapis.com%2Fdata access", "receiveTimestamp": "2025-04-09T18:32:35.059811619Z" } Logs for signed and encrypted SAML assertions This section describes the Cloud Audit Logs log entries that Security Token Service creates when it attempts to verify signed SAML assertions or decrypt encrypted assertions that are sent from your IdP.
- In this case, the following Cloud Audit Logs entry is generated: { "logName" : "organizations/my-organization-id/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "user@example.com" , }, "serviceName" : "sts.googleapis.com" , "methodName" : "google.identity.sts.SecurityTokenService.WebSignIn" , "resourceName" : "locations/global/workforcePools/my-pool/providers/my-provider" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignInRequest" , "provider" : "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider" , "continueUrl" : "https://console.cloud.google" , "host" : "http://auth.cloud.google" , }, "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , } }, "resource" : { "type" : "audited resource" , "labels" : { "service" : "sts.googleapis.com" , "method" : "google.identity.sts.SecurityTokenService.WebSignIn" , } }, } The Cloud Audit Logs entry for SAML providers can additionally contain signing key information in the metadata field. { "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , "keyInfo" : [ { "use" : "verify" , "fingerprint" : "AE:CK:LM:EF:LK:OG:EH:IJ:KN:AL:OM:AD:NO" , } ], } } Logs for failed sign-in This section provides an example Cloud Audit Logs entry that is logged as a result of a failed sign-in.

### "Integrate Cloud Run and Workload Identity Federation \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation](https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- External workload authentication using Workload Identity Federation Workload Identity Federation lets you authenticate workloads outside of Google Cloud without using a static service account key.
- When you complete this tutorial, you can see how Workload Identity Federation lets you authenticate your Jenkins application with Google Cloud by using OpenID Connect authentication.
- Workload Identity Federation lets you connect external workloads to workloads that run in Google Cloud.
- Workload Identity Federation lets you use your IdP to authenticate directly with Google Cloud.

