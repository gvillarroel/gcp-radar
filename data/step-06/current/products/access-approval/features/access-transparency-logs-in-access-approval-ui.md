---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.082Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Transparency logs in Access Approval UI"
feature_slug: "access-transparency-logs-in-access-approval-ui"
latest_feature_date: "2021-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-transparency"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests"
keywords:
  - "access"
  - "transparency"
  - "logs"
  - "approval"
  - "ui"
  - "lets"
  - "users"
  - "view"
---

# Access Transparency logs in Access Approval UI

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

The Access Approval UI lets users view Access Transparency logs associated with an approval request.

## Extended Definition

The Access Approval UI lets users view Access Transparency logs associated with an approval request.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-transparency](https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-transparency)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests)

## Supporting Pages

### Overview of Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Access Transparency helps you to discover information about when Google personnel access Customer Data , and Access Approval lets you authorize such access requests.
- Access Approval provides an additional layer of control on top of the transparency that Access Transparency logs provide.
- You have the following options for enrolling services in Access Approval: Automatically enable Access Approval for all supported services, regardless of its product launch stage (such as Preview or General Availability (GA)).
- For customers who use access approvals that are signed with a customer-managed encryption key (CMEK), Google also provides users with visibility and control to key access requests through Key Access Justifications .

### "Introduction to Access Transparency \_|\_ Access Approval \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-transparency](https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-transparency)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Introduction to Access Transparency As a part of Google's long-term commitment to security and transparency, Access Transparency lets you review logs of actions that Google personnel take when accessing certain customer content to fulfill their contractual obligations.
- Access Transparency logs include information about Google personnel activity, including the following: Actions taken by the Cloud Customer Care team to resolve a support ticket that you filed.
- For more information, see Overview of Access Transparency .
- Then, understand and use Access Transparency logs .

### Viewing historical Access Approval requests \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Optional: If you want to view the Cloud Audit Logs or the Access Transparency logs, click Logs .
- Go to Cloud Logging If you enable Cloud Audit Logs in your Google Cloud project, you can filter by the Audited Resource accessapproval.googleapis.com . cURL curl -H "$(oauth2l header --json service-account-credentials.json cloud-platform)" \ https://accessapproval.googleapis.com/v1/projects/ PROJECT ID /approvalRequests?filter=ALL By default, the API lists all unapproved, approved, auto-approved, and non-expired requests.
- Viewing historical Access Approval requests This document explains how you can view all historical access requests for a project.
- Ensure that you have the Access Approval Viewer ( roles/accessapproval.viewer ) Identity and Access Management (IAM) role.

