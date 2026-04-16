---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.086Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "History view"
feature_slug: "history-view"
latest_feature_date: "2020-10-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests"
  - "https://docs.cloud.google.com/app-hub/docs/overview"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging"
keywords:
  - "history"
  - "view"
  - "access"
  - "approval"
  - "ui"
  - "includes"
  - "previously"
  - "acted"
---

# History view

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

The Access Approval UI includes a History view for previously acted-on requests with status, timing, details, and audit logs.

## Extended Definition

The Access Approval UI includes a History view for previously acted-on requests with status, timing, details, and audit logs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests)
- [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging)

## Supporting Pages

### Viewing historical Access Approval requests \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Viewing historical Access Approval requests This document explains how you can view all historical access requests for a project.
- Ensure that you have the Access Approval Viewer ( roles/accessapproval.viewer ) Identity and Access Management (IAM) role.
- View historical access requests Console Go to the Access Approval page in the Google Cloud console.
- Go to Access Approval Click History .

### App Hub overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- Source ID: `site-docs-reference-2`
- Final score: 69
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This approach aligns your application management boundary with your organization's structure by business unit, environment, or team, and automatically includes all projects within that folder. ( Preview ) Single-project boundary : For small applications where all Google Cloud resources reside in one project, you can designate that single project as your boundary.
- For example, when an AI agent is deployed through a managed platform like Vertex AI Agent Engine , App Hub automatically classifies the resource with the AGENT functional type value to indicate that the workload runs an AI agent. ( Preview ) Extended metadata : an schema-driven property that provides rich, structured information about the service or workload.
- To learn how to visualize this metadata, see View extended metadata schemas . ( Preview ) Identity : an output-only property that contains the service account or managed workload identity name for a service or workload.
- To learn which services are shared or exclusive, see the list of App Hub supported services . ( Preview ) Functional type : an output-only property that identifies the known function of a service or workload.

### Access Approval audit logging information \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 64
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permission type Methods ADMIN WRITE google.cloud.accessapproval.v1.AccessApproval.ApproveApprovalRequest google.cloud.accessapproval.v1.AccessApproval.DeleteAccessApprovalSettings google.cloud.accessapproval.v1.AccessApproval.DismissApprovalRequest google.cloud.accessapproval.v1.AccessApproval.InvalidateApprovalRequest google.cloud.accessapproval.v1.AccessApproval.UpdateAccessApprovalSettings API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Access Approval. google.cloud.accessapproval.v1.AccessApproval The following audit logs are associated with methods belonging to google.cloud.accessapproval.v1.AccessApproval .
- Filter for this method : protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.InvalidateApprovalRequest" UpdateAccessApprovalSettings Method : google.cloud.accessapproval.v1.AccessApproval.UpdateAccessApprovalSettings Audit log type : Admin activity Permissions : accessapproval.settings.update - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.ApproveApprovalRequest" DeleteAccessApprovalSettings Method : google.cloud.accessapproval.v1.AccessApproval.DeleteAccessApprovalSettings Audit log type : Admin activity Permissions : accessapproval.settings.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.DismissApprovalRequest" InvalidateApprovalRequest Method : google.cloud.accessapproval.v1.AccessApproval.InvalidateApprovalRequest Audit log type : Admin activity Permissions : accessapproval.requests.invalidate - ADMIN WRITE Method is a long-running or streaming operation : No.

