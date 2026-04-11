---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.445Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Approval access request signing"
feature_slug: "access-approval-access-request-signing"
latest_feature_date: "2021-12-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature"
keywords:
  - "customer-managed signing keys"
  - "Google-managed signing keys"
  - "access request signing keys"
  - "AA request signing"
  - "signed AA requests"
  - "Access Approval request signing"
  - "signed access requests"
  - "request signature"
---

# Access Approval access request signing

Product: Access Approval
Coverage: LOW

## Step 02 Summary

Access Approval introduced preview support for cryptographic signing of access requests using Google-managed or customer-provided keys.

## Extended Definition

Access Approval introduced preview support for cryptographic signing of access requests using Google-managed or customer-provided keys.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature](https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature)

## Supporting Pages

### "Validate an approved request signature \_|\_ Access Approval \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature](https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature)
- Source ID: `site-docs-root-2`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To ensure that the Access Approval service account for your resource has the necessary permissions to verify approved request signatures, ask your administrator to grant the Cloud KMS CryptoKey Signer/Verifier ( roles/cloudkms.signerVerifier ) IAM role to the Access Approval service account for your resource on the key, key ring, or key project.
- Validate an approved request signature Each approved Access Approval request is signed with an asymmetric cryptographic key to validate the approval.

