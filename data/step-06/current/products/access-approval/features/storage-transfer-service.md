---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.432Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Storage Transfer Service"
feature_slug: "storage-transfer-service"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/dismiss"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/list"
keywords:
  - "approve access requests Storage Transfer Service"
  - "storagetransfer.googleapis.com"
  - "Enable Access Approval for Storage Transfer"
  - "Access Approval for Storage Transfer Service"
  - "Storage Transfer Service Access Approval"
  - "Storage Transfer API"
  - "STS"
---

# Storage Transfer Service

Product: Access Approval
Coverage: LOW

## Step 02 Summary

Access Approval now supports Storage Transfer Service in Preview.

## Extended Definition

Access Approval now supports Storage Transfer Service in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/dismiss](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/dismiss)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/list](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/list)

## Supporting Pages

### "Review and approve access requests using the Google-managed signing key\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to set up Access Approval and approve access requests, ask your administrator to grant you the following IAM roles on your project: View and update Access Approval configuration and approve access requests: Access Approval Config Editor ( roles/accessapproval.configEditor ) View Access Approval configuration and approve access requests: Access Approval Approver ( roles/accessapproval.approver ) View Access Approval configuration and access requests and download log reports: Access Approval Viewer ( roles/accessapproval.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Add yourself as an approver for Access Approval requests and configure notifications To add yourself as an approver so you can review and approve access requests, do the following: Go to the Access Approval page in the Google Cloud console.
- Example Defaults: Disabled: product.googleapis.com/project/12345/ Enabled: product.googleapis.com/project/12345/instances/abcde Approval Request Default Expiration Days : Set the default expiration for Access Approval requests.
- Review Approval requests After you enroll in Access Approval and add yourself as an approver for access requests, you can expect to receive email notifications for access requests.

### "Method: folders.approvalRequests.dismiss \_|\_ Access Approval \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/dismiss](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/dismiss)
- Source ID: `site-api-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: folders.approvalRequests.dismiss Stay organized with collections Save and categorize content based on your preferences.
- Authorization requires the following IAM permission on the specified resource name : accessapproval.requests.dismiss Request body The request body must be empty.
- HTTP request POST https://accessapproval.googleapis.com/v1/{name=folders/ /approvalRequests/ }:dismiss The URL uses gRPC Transcoding syntax.
- Dismissing a request does not prevent access granted by other Access Approval requests.

### "Method: folders.approvalRequests.list \_|\_ Access Approval \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/list](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/list)
- Source ID: `site-api-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: folders.approvalRequests.list Stay organized with collections Save and categorize content based on your preferences.
- Authorization requires the following IAM permission on the specified resource parent : accessapproval.requests.list Query parameters Parameters filter string A filter on the type of approval requests to retrieve.
- HTTP request Path parameters Query parameters Request body Response body Authorization scopes Lists approval requests associated with a project, folder, or organization.
- HISTORY: Active, dismissed and expired requests. pageSize integer Requested page size. pageToken string A token identifying the page of results to return.

