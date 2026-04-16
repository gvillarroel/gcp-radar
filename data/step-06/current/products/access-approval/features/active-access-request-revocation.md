---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.076Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Active access request revocation"
feature_slug: "active-access-request-revocation"
latest_feature_date: "2022-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/list"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/invalidate"
keywords:
  - "active"
  - "access"
  - "request"
  - "revocation"
  - "approval"
  - "lets"
  - "users"
  - "revoke"
---

# Active access request revocation

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

Access Approval lets users revoke active access requests in the Google Cloud console.

## Extended Definition

Access Approval lets users revoke active access requests in the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/list](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/list)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/invalidate](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/invalidate)

## Supporting Pages

### "Method: folders.approvalRequests.list \_|\_ Access Approval \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/list](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/list)
- Source ID: `site-api-reference`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: folders.approvalRequests.list Stay organized with collections Save and categorize content based on your preferences.
- Authorization requires the following IAM permission on the specified resource parent : accessapproval.requests.list Query parameters Parameters filter string A filter on the type of approval requests to retrieve.
- HTTP request GET https://accessapproval.googleapis.com/v1/{parent=folders/ }/approvalRequests The URL uses gRPC Transcoding syntax.
- Must be one of the following values: [not set]: Requests that are pending or have active approvals.

### "Method: organizations.approvalRequests.list \_|\_ Access Approval \_|\_\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list)
- Source ID: `site-api-reference`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: organizations.approvalRequests.list Stay organized with collections Save and categorize content based on your preferences.
- Authorization requires the following IAM permission on the specified resource parent : accessapproval.requests.list Query parameters Parameters filter string A filter on the type of approval requests to retrieve.
- HTTP request GET https://accessapproval.googleapis.com/v1/{parent=organizations/ }/approvalRequests The URL uses gRPC Transcoding syntax.
- Must be one of the following values: [not set]: Requests that are pending or have active approvals.

### "Method: folders.approvalRequests.invalidate \_|\_ Access Approval \_|\_\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/invalidate](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/invalidate)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- NOTE: This action revokes Google access based on this approval request.
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: folders.approvalRequests.invalidate Stay organized with collections Save and categorize content based on your preferences.
- Authorization requires the following IAM permission on the specified resource name : accessapproval.requests.invalidate Request body The request body must be empty.
- HTTP request POST https://accessapproval.googleapis.com/v1/{name=folders/ /approvalRequests/ }:invalidate The URL uses gRPC Transcoding syntax.

