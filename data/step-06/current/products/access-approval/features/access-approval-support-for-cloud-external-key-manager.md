---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.446Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Approval support for Cloud External Key Manager"
feature_slug: "access-approval-support-for-cloud-external-key-manager"
latest_feature_date: "2021-06-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-custom-keys"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/key-access-justifications"
keywords:
  - "external key manager access approvals"
  - "Cloud External Key Management Service"
  - "Access Approval for Cloud External Key Manager"
  - "CMEK approval flow"
  - "Cloud External Key Manager"
  - "External Key Manager"
  - "Cloud EKM"
  - "EKM"
---

# Access Approval support for Cloud External Key Manager

Product: Access Approval
Coverage: LOW

## Step 02 Summary

Access Approval support for Cloud External Key Manager was added in Preview stage.

## Extended Definition

Access Approval support for Cloud External Key Manager was added in Preview stage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-custom-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-custom-keys)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/key-access-justifications](https://docs.cloud.google.com/assured-workloads/access-approval/docs/key-access-justifications)

## Supporting Pages

### Overview of Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- To use your own signing key, you can either create an asymmetric signing key using Cloud Key Management Service or use Cloud External Key Manager to host an externally-managed signing key.
- If you want to use your own signing key, you can create one using Cloud KMS, or bring an externally-managed key using Cloud EKM.
- For the limitations related to asymmetric signing keys supported by Cloud EKM, see Restrictions for asymmetric signing keys .
- For more information about using Cloud EKM for managing keys that aren't stored in Google Cloud, see Cloud EKM overview .

### "Review and approve access requests using a custom signing key \_|\_ Access\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-custom-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-custom-keys)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- If you have Cloud EKM enabled, you can choose an externally-managed signing key.
- For information about using external keys, see Cloud EKM overview .

### "Introduction to Key Access Justifications \_|\_ Access Approval \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/key-access-justifications](https://docs.cloud.google.com/assured-workloads/access-approval/docs/key-access-justifications)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Using Key Access Justifications with Cloud External Key Manager provides visibility into requests for encryption keys that allows data to change state from at-rest to in-use.
- Introduction to Key Access Justifications Key Access Justifications provides a justification for every request to access keys stored in an external key manager.

