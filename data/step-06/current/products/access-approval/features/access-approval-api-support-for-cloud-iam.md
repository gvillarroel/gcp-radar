---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.452Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Approval API support for Cloud IAM"
feature_slug: "access-approval-api-support-for-cloud-iam"
latest_feature_date: "2020-10-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes"
keywords:
  - "Access Approval API Cloud IAM"
  - "IAM approval request"
  - "Cloud IAM access approval"
  - "Cloud IAM"
  - "Access Approval API"
  - "IAM"
---

# Access Approval API support for Cloud IAM

Product: Access Approval
Coverage: LOW

## Step 02 Summary

Cloud IAM entered General Availability (GA) support in the Access Approval API.

## Extended Definition

Cloud IAM entered General Availability (GA) support in the Access Approval API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control](https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes](https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes)

## Supporting Pages

### Access control with IAM \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control](https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View and approve an Access Approval request The following table lists the IAM permissions required to view and approve an Access Approval request: Predefined IAM role Required permissions and roles roles/accessapproval.approver accessapproval.requests.approve accessapproval.requests.dismiss accessapproval.requests.get accessapproval.requests.invalidate accessapproval.requests.list accessapproval.serviceAccounts.get accessapproval.settings.get resourcemanager.projects.get resourcemanager.projects.list To grant the Access Approval Approver ( roles/accessapproval.approver ) role, do the following: Console To grant this IAM role to yourself, do the following: Go to the IAM page in the Google Cloud console.
- Invalidate existing Access Approval requests The following table lists the IAM permissions required to invalidate existing Access Approval requests that have been approved: Predefined IAM role Required permissions and roles roles/accessapproval.invalidator accessapproval.requests.get accessapproval.requests.list accessapproval.serviceAccounts.get accessapproval.settings.get resourcemanager.projects.get resourcemanager.projects.list To grant the Access Approval Invalidator ( roles/accessapproval.invalidator ) role, do the following: Console To grant this IAM role to yourself, do the following: Go to the IAM page in the Google Cloud console.
- Update the Access Approval configuration The following table lists the IAM permissions required to update Access Approval configuration: Predefined IAM role Required permissions and roles roles/accessapproval.configEditor accessapproval.serviceAccounts.get accessapproval.settings.delete accessapproval.settings.get accessapproval.settings.update resourcemanager.projects.get resourcemanager.projects.list To grant the Access Approval Config Editor ( roles/accessapproval.configEditor ) role, do the following: Console To grant this IAM role to yourself, do the following: Go to the IAM page in the Google Cloud console.
- View Access Approval requests and configuration The following table lists the IAM permissions required to view Access Approval requests and configuration: Predefined IAM role Required permissions and roles roles/accessapproval.viewer accessapproval.requests.get accessapproval.requests.list accessapproval.serviceAccounts.get accessapproval.settings.get resourcemanager.projects.get resourcemanager.projects.list To grant the Access Approval Viewer ( roles/accessapproval.viewer ) role, do the following: Console To grant this IAM role to yourself, do the following: Go to the IAM page in the Google Cloud console.

### Enabling Access Approval using Terraform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To enable a user or service account to approve access requests for a project, grant them the Access Approval Approver ( roles/accessapproval.approver ) IAM role. parent value : name of the folder in which you want to create the my folder folder.
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.

### Release notes \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes](https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page shows the access reason, request status, response/expiration times (if applicable) of each request which has been previously acted upon, as well as details and audit logs associated with the request. v1 Feature Cloud IAM and BigQuery are in General Availability (GA) support in Access Approval API.
- October 30, 2025 v1 Feature IAM System for Cross-domain Identity Management (SCIM) Service is generally available (GA) .
- October 13, 2025 v1 Feature IAM System for Cross-domain Identity Management (SCIM) Service is available in Preview .
- April 15, 2020 v1 Feature Access Approval API reached General Availability (GA) status.

