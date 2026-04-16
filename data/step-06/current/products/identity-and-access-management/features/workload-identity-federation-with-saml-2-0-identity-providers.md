---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.421Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Workload Identity Federation with SAML 2.0 identity providers"
feature_slug: "workload-identity-federation-with-saml-2-0-identity-providers"
latest_feature_date: "2021-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation"
  - "https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity"
  - "https://docs.cloud.google.com/iam/docs/authenticate-with-auth-libraries"
keywords:
  - "workload"
  - "identity"
  - "federation"
  - "with"
  - "saml"
  - "providers"
  - "lets"
  - "you"
---

# Workload Identity Federation with SAML 2.0 identity providers

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Lets you use workload identity federation with any SAML 2.0-compatible identity provider.

## Extended Definition

Lets you use workload identity federation with any SAML 2.0-compatible identity provider.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation](https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation)
- [https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation](https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation)
- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity)
- [https://docs.cloud.google.com/iam/docs/authenticate-with-auth-libraries](https://docs.cloud.google.com/iam/docs/authenticate-with-auth-libraries)

## Supporting Pages

### "Best practices for using Workload Identity Federation \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation](https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation)
- Source ID: `site-docs-root-2`
- Final score: 317
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Similarly, when you federate with a SAML provider, Workload Identity Federation checks that the SAML assertion specifies an audience restriction that matches the expected audience.
- Use attribute conditions when federating with GitHub or other multi-tenant identity providers Workload Identity Federation doesn't maintain a directory of user accounts; instead, it implements claims-based identities : As a result, when two tokens are issued by the same identity provider (IdP) and their claims map to the same google.subject value, the two tokens are assumed to identify the same user.
- Use organizational policy constraints to disable the creation of workload identity pool providers in other projects Users with the permission to create workload identity pool providers can create workload identity pools and providers that might be redundant to the ones you manage in a dedicated project.
- Use the URL of the workload identity pool provider as the audience When you federate with an OpenID Connect provider, Workload Identity Federation verifies that the audience of tokens (encoded in the aud claim) matches the allowed audience setting of the provider.

### "Integrate Cloud Run and Workload Identity Federation \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation](https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation)
- Source ID: `site-docs-root-2`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- External workload authentication using Workload Identity Federation Workload Identity Federation lets you authenticate workloads outside of Google Cloud without using a static service account key.
- When you complete this tutorial, you can see how Workload Identity Federation lets you authenticate your Jenkins application with Google Cloud by using OpenID Connect authentication.
- Workload Identity Federation lets you use your IdP to authenticate directly with Google Cloud.
- Home Documentation Security IAM Identity and Access Management (IAM) Guides Send feedback Integrate Cloud Run and Workload Identity Federation Stay organized with collections Save and categorize content based on your preferences.

### "Example logs for Workload Identity Federation \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity)
- Source ID: `site-docs-root-2`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this example, a Microsoft Azure token was exchanged for a federated token: { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "b6112abb-5791-4507-adb5-7e8cc306eb2e" }, "metadata" : { "mapped principal" : "principal://iam.googleapis.com/projects/1234567890123/locations/global/workloadIdentityPools/azure-pool/subject/a1234bcd-5678-9012-efa3-4b5cd678ef9a" }, "methodName" : "google.identity.sts.v1.SecurityTokenService.ExchangeToken" , "resourceName" : "projects/1234567890123/locations/global/workloadIdentityPools/azure-pool/providers/azure" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.v1.ExchangeTokenRequest" , "grantType" : "urn:ietf:params:oauth:grant-type:token-exchange" } }, "resource" : { "type" : "audited resource" } } Logs for signed and encrypted SAML assertions This section describes the Cloud Audit Logs log entries that Security Token Service creates when it attempts to verify signed SAML assertions or decrypt encrypted assertions that are sent from your IdP.
- For Workload Identity Federation, the pertinent log entry looks similar to the following: "keyInfo": [ { "use": "verify" "fingerprint": "3C:B2:47:F8:A5:9A:8A:52:BD:1C:BC:96:B5:45:C1:8D:A7:F1:73:2D" }, { "use": "decrypt" "resourceName": "//iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ WORKLOAD POOL NAME /providers/ PROVIDER NAME /keys/ KEY NAME " } ] This output includes the following values: fingerprint : the hexadecimal representation of the SHA-256 hash of the X.509 certificate that was used to verify the signature on the SAML credential.
- Home Documentation Security IAM Guides Send feedback Example logs for Workload Identity Federation Stay organized with collections Save and categorize content based on your preferences.
- With Workload Identity Federation, you can allow an on-premises or multicloud workload to access Google Cloud resources, without using a service account key.

### "Authenticate workloads with Google Cloud auth libraries \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/authenticate-with-auth-libraries](https://docs.cloud.google.com/iam/docs/authenticate-with-auth-libraries)
- Source ID: `site-docs-root-2`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document shows you how to use Workload Identity Federation with Google Cloud authentication libraries, known as auth libraries, to authenticate workloads from third-party identity providers such as AWS, Microsoft Azure, and providers that support OpenID Connect (OIDC) or SAML 2.0.
- AWS or Azure VMs OIDC or SAML Authenticate using the standard credential mechanism For commonly supported third-party identity providers, you can use the Google Cloud auth library's built-in capabilities to authenticate your workloads by generating a credential configuration file.
- Workload Identity Federation lets applications running outside Google Cloud access Google Cloud resources without using service account keys.
- Enable the APIs Configure Workload Identity Federation with your identity provider.

