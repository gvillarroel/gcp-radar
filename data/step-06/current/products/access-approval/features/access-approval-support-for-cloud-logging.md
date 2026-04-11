---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.450Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Approval support for Cloud Logging"
feature_slug: "access-approval-support-for-cloud-logging"
latest_feature_date: "2021-03-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/authentication"
keywords:
  - "Cloud Logging audit log approvals"
  - "Cloud Logging data access approvals"
  - "Cloud Logging approval request"
  - "Access Approval for Cloud Logging"
  - "Cloud Logging"
  - "GCL"
---

# Access Approval support for Cloud Logging

Product: Access Approval
Coverage: LOW

## Step 02 Summary

Access Approval support for Cloud Logging was added in Preview stage.

## Extended Definition

Access Approval support for Cloud Logging was added in Preview stage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control](https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/authentication](https://docs.cloud.google.com/assured-workloads/access-approval/docs/authentication)

## Supporting Pages

### Access control with IAM \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control](https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Save . gcloud Run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member='user: EMAIL ID ' \ --role='roles/accessapproval.invalidator' Replace the following: ORGANIZATION ID : The organization ID.
- Click Save . gcloud Run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member='user: EMAIL ID ' \ --role='roles/accessapproval.approver' Replace the following: ORGANIZATION ID : The organization ID.
- Click Save . gcloud Run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member='user: EMAIL ID ' \ --role='roles/accessapproval.approver' Replace the following: ORGANIZATION ID : The organization ID.
- Click Save . gcloud Run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member='user: EMAIL ID ' \ --role='roles/accessapproval.viewer' Replace the following: ORGANIZATION ID : The organization ID.

### Authenticate to Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/authentication](https://docs.cloud.google.com/assured-workloads/access-approval/docs/authentication)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can access the API in the following ways: Google Cloud CLI REST Google Cloud CLI When you use the gcloud CLI to access Access Approval, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.
- REST You can authenticate to the Access Approval API by using your gcloud CLI credentials or by using Application Default Credentials .
- For more information about using the gcloud CLI with Access Approval, see the gcloud CLI reference pages .
- For information about the types of credentials, see gcloud CLI credentials and ADC credentials .

