---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.053Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Approval support for Org Lifecycle API support"
feature_slug: "access-approval-support-for-org-lifecycle-api-support"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/approve"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/dismiss"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/get"
keywords:
  - "access"
  - "approval"
  - "org"
  - "lifecycle"
---

# Access Approval support for Org Lifecycle API support

Product: Access Approval
Coverage: LOW

## Step 02 Summary

Org Lifecycle API support is supported by Access Approval.

## Extended Definition

Org Lifecycle API support is supported by Access Approval.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/approve](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/approve)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/dismiss](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/dismiss)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/get](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/get)

## Supporting Pages

### "Method: organizations.approvalRequests.approve \_|\_ Access Approval \_\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/approve](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/approve)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Authorization requires the following IAM permission on the specified resource name : accessapproval.requests.approve Request body The request body contains data with the following structure: JSON representation { "expireTime" : string } Fields expireTime string ( Timestamp format) The expiration time of this approval.
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: organizations.approvalRequests.approve Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://accessapproval.googleapis.com/v1/{name=organizations/ /approvalRequests/ }:approve The URL uses gRPC Transcoding syntax.
- HTTP request Path parameters Request body JSON representation Response body Authorization scopes Approves a request and returns the updated ApprovalRequest.

### "Method: organizations.approvalRequests.dismiss \_|\_ Access Approval \_\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/dismiss](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/dismiss)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: organizations.approvalRequests.dismiss Stay organized with collections Save and categorize content based on your preferences.
- Authorization requires the following IAM permission on the specified resource name : accessapproval.requests.dismiss Request body The request body must be empty.
- HTTP request POST https://accessapproval.googleapis.com/v1/{name=organizations/ /approvalRequests/ }:dismiss The URL uses gRPC Transcoding syntax.
- Dismissing a request does not prevent access granted by other Access Approval requests.

### "Method: organizations.approvalRequests.get \_|\_ Access Approval \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/get](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/get)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Format: "{projects folders organizations}/{id}/approvalRequests/{approval request}" Authorization requires the following IAM permission on the specified resource name : accessapproval.requests.get Request body The request body must be empty.
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: organizations.approvalRequests.get Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://accessapproval.googleapis.com/v1/{name=organizations/ /approvalRequests/ } The URL uses gRPC Transcoding syntax.
- HTTP request Path parameters Request body Response body Authorization scopes Gets an approval request.

