---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.038Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access insights"
feature_slug: "access-insights"
latest_feature_date: "2025-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-insights"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/export-access-transparency-report"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list"
keywords:
  - "access"
  - "insights"
  - "lets"
  - "you"
  - "generate"
  - "download"
  - "filtered"
  - "organization"
---

# Access insights

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

Access insights lets you generate and download a filtered organization-wide report of Google administrative access to your data.

## Extended Definition

Access insights lets you generate and download a filtered organization-wide report of Google administrative access to your data.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-insights](https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-insights)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/export-access-transparency-report](https://docs.cloud.google.com/assured-workloads/access-approval/docs/export-access-transparency-report)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list)

## Supporting Pages

### Access insights overview \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-insights](https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-insights)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Access insights overview Access insights is an Access Approval feature that lets you generate a filtered, organization-wide report of Google administrative access to your data.
- These reports aggregate your Access Transparency logs from all folders and projects in your organization into a single downloadable CSV file.
- What's next Learn how to generate or download an Access Transparency report .
- Home Documentation Security Cloud provider access management Access Approval Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Generate or download an Access Transparency report \_|\_ Access Approval\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/export-access-transparency-report](https://docs.cloud.google.com/assured-workloads/access-approval/docs/export-access-transparency-report)
- Source ID: `site-docs-root-2`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permission that you need to generate and download Access Transparency reports, ask your administrator to grant you the Access Approval Viewer ( roles/accessapproval.viewer ) IAM role on your organization.
- Generate or download an Access Transparency report You can generate and download Access Transparency reports using access insights .
- Before you begin To generate and download Access Transparency reports, enable Access Approval for your organization.
- This predefined role contains the accessapproval.settings.get permission, which is required to generate and download Access Transparency reports.

### "Method: organizations.approvalRequests.list \_|\_ Access Approval \_|\_\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list)
- Source ID: `site-api-reference`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: organizations.approvalRequests.list Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://accessapproval.googleapis.com/v1/{parent=organizations/ }/approvalRequests The URL uses gRPC Transcoding syntax.
- Authorization requires the following IAM permission on the specified resource parent : accessapproval.requests.list Query parameters Parameters filter string A filter on the type of approval requests to retrieve.
- HTTP request Path parameters Query parameters Request body Response body Authorization scopes Lists approval requests associated with a project, folder, or organization.

