---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.454Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Approval API"
feature_slug: "access-approval-api"
latest_feature_date: "2020-04-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations"
keywords:
  - "beta release"
  - "Access Approval beta"
  - "API launch"
  - "API general availability"
  - "beta"
  - "Access Approval API"
  - "Access Approval GA"
  - "GA"
---

# Access Approval API

Product: Access Approval
Coverage: LOW

## Step 02 Summary

The Access Approval API reached general availability; The Access Approval API entered its beta release.

## Extended Definition

The Access Approval API reached general availability; The Access Approval API entered its beta release.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes](https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations)

## Supporting Pages

### Release notes \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes](https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- March 29, 2019 v1beta1 Feature Beta release of Access Approval API.
- This page shows the access reason, request status, response/expiration times (if applicable) of each request which has been previously acted upon, as well as details and audit logs associated with the request. v1 Feature Cloud IAM and BigQuery are in General Availability (GA) support in Access Approval API.
- Project and folder enrollment can be done for 'all' cloud products only, while organization enrollment can be done for either of individual or 'all' products. v1beta1 Feature DeleteAccessApprovalSettings API has been added.
- The v1beta1 endpoint will stop accepting requests on August 1, 2020. v1beta1 Feature AccessApprovalSettings now includes the configuration of enrollment at the project, folder or organization level.

### "Method: organizations.approvalRequests.list \_|\_ Access Approval \_|\_\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list)
- Source ID: `site-api-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: organizations.approvalRequests.list Stay organized with collections Save and categorize content based on your preferences.
- HTTP request Path parameters Query parameters Request body Response body Authorization scopes Lists approval requests associated with a project, folder, or organization.
- HTTP request GET https://accessapproval.googleapis.com/v1/{parent=organizations/ }/approvalRequests The URL uses gRPC Transcoding syntax.
- This may be "projects/{project}", "folders/{folder}", or "organizations/{organization}".

### REST Resource: organizations \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations)
- Source ID: `site-api-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Methods deleteAccessApprovalSettings Deletes the settings associated with a project, folder, or organization. getAccessApprovalSettings Gets the Access Approval settings associated with a project, folder, or organization. getServiceAccount Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests. updateAccessApprovalSettings Updates the settings associated with a project, folder, or organization.
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback REST Resource: organizations Stay organized with collections Save and categorize content based on your preferences.

