---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.077Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Signed access requests"
feature_slug: "signed-access-requests"
latest_feature_date: "2021-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview"
keywords:
  - "signed"
  - "access"
  - "requests"
  - "approval"
  - "can"
  - "cryptographically"
  - "sign"
  - "managed"
---

# Signed access requests

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

Access Approval can cryptographically sign access requests using a Google-managed or customer-provided key to verify approval integrity.

## Extended Definition

Access Approval can cryptographically sign access requests using a Google-managed or customer-provided key to verify approval integrity.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature](https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview)

## Supporting Pages

### "Review and approve access requests using the Google-managed signing key\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Access Approval ensures that a cryptographically-signed approval is present for Google personnel to access your content stored on Google Cloud.
- Required roles To get the permissions that you need to set up Access Approval and approve access requests, ask your administrator to grant you the following IAM roles on your project: View and update Access Approval configuration and approve access requests: Access Approval Config Editor ( roles/accessapproval.configEditor ) View Access Approval configuration and approve access requests: Access Approval Approver ( roles/accessapproval.approver ) View Access Approval configuration and access requests and download log reports: Access Approval Viewer ( roles/accessapproval.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Add yourself as an approver for Access Approval requests and configure notifications To add yourself as an approver so you can review and approve access requests, do the following: Go to the Access Approval page in the Google Cloud console.
- Example Defaults: Disabled: product.googleapis.com/project/12345/ Enabled: product.googleapis.com/project/12345/instances/abcde Approval Request Default Expiration Days : Set the default expiration for Access Approval requests.

### "Validate an approved request signature \_|\_ Access Approval \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature](https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Validate a request signed using a Google-owned and managed key In the Google Cloud console, go to the Access Approval page.
- Validate an approved request signature Each approved Access Approval request is signed with an asymmetric cryptographic key to validate the approval.
- Validate a request signed using a customer-provided key In the Google Cloud console, go to the Access Approval page.
- Approved requests can be signed with a Google-owned and managed key or a customer-provided Cloud KMS key.

### Overview of Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Customers seeking to ensure that administrative access requests can only be processed when the approvals are signed with a customer-managed key may configure Access Approval with a customer-managed key and use Key Access Justifications.
- For customers who use access approvals that are signed with a customer-managed encryption key (CMEK), Google also provides users with visibility and control to key access requests through Key Access Justifications .
- Cloud EKM brings your externally-managed keys into Google Cloud for signing access requests.
- Each approval request is cryptographically signed and verified to ensure its integrity.

