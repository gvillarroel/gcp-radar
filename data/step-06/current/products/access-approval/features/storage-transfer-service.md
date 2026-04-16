---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T15:57:29.215Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Storage Transfer Service"
feature_slug: "storage-transfer-service"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/approve-requests"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys"
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
Coverage: MEDIUM

## Step 02 Summary

Access Approval now supports Storage Transfer Service in Preview.

## Extended Definition

Access Approval now supports Storage Transfer Service in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/approve-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/approve-requests)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)

## Supporting Pages

### Approving Access Approval requests \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/approve-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/approve-requests)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP POST request with empty body ( an effect of using -d '' ) service-account-credential.json is attained by going to the IAM -> Service Accounts menu in the cloud console and creating a service account. curl -H "$(oauth2l header --json service-account-credentials.json cloud-platform)" \ -d '' https://accessapproval.googleapis.com/v1/projects/<var>PROJECT ID</var>/approvalRequests/<var>APPROVAL REQUEST ID</var>:approve Note: This preceding example is a sample request using cURL.
- Console To approve an Access Approval request using the Google Cloud console, do the following: To see all your pending approval requests, go to the Access Approval page in the Google Cloud console.
- Go to Access Approval If you have opted to receive Access Approval requests through email, you can also go to this page by clicking the link in the email sent to you with the approval request.
- For example, if you have selected a folder, you can only see the Access Approval requests made for folder-level resources, not all projects within those folders.

### Viewing historical Access Approval requests \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You receive a list of historical access approvals with their status. { "approvalRequests" : [ { "name" : "projects/123456/approvalRequests/xyzabc123" , "requestedResourceName" : "projects/123456" , "requestedReason" : { "detail" : "Case number: bar123" "type" : "CUSTOMER INITIATED SUPPORT" }, "requestedLocations" : { "principalOfficeCountry" : "US" , "principalPhysicalLocationCountry" : "US" }, "requestTime" : "2018-08-30T17:49:13.712Z" , "requestedExpiration" : "2018-09-04T17:49:13.540Z" , "approve" : { "approveTime" : "2018-08-30T17:49:15.737Z" , "expireTime" : "2018-09-04T17:49:13.540Z" } } ] } What's next Learn more about the anatomy of an approval request .
- Go to Cloud Logging If you enable Cloud Audit Logs in your Google Cloud project, you can filter by the Audited Resource accessapproval.googleapis.com . cURL curl -H "$(oauth2l header --json service-account-credentials.json cloud-platform)" \ https://accessapproval.googleapis.com/v1/projects/ PROJECT ID /approvalRequests?filter=ALL By default, the API lists all unapproved, approved, auto-approved, and non-expired requests.
- Viewing historical Access Approval requests This document explains how you can view all historical access requests for a project.
- View historical access requests Console Go to the Access Approval page in the Google Cloud console.

### "REST Resource: folders.approvalRequests \_|\_ Access Approval \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests)
- Source ID: `site-api-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Methods approve Approves a request and returns the updated ApprovalRequest. dismiss Dismisses a request. get Gets an approval request. invalidate Invalidates an existing ApprovalRequest. list Lists approval requests associated with a project, folder, or organization.
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback REST Resource: folders.approvalRequests Stay organized with collections Save and categorize content based on your preferences.
- Format is "{projects folders organizations}/{id}/approvalRequests/{approval request}". requestedResourceName string The resource for which approval is being requested.
- Randomized pre-hash version supporting SHA256 digests.

### "Review and approve access requests using the Google-managed signing key\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- Source ID: `site-docs-root`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to set up Access Approval and approve access requests, ask your administrator to grant you the following IAM roles on your project: View and update Access Approval configuration and approve access requests: Access Approval Config Editor ( roles/accessapproval.configEditor ) View Access Approval configuration and approve access requests: Access Approval Approver ( roles/accessapproval.approver ) View Access Approval configuration and access requests and download log reports: Access Approval Viewer ( roles/accessapproval.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Add yourself as an approver for Access Approval requests and configure notifications To add yourself as an approver so you can review and approve access requests, do the following: Go to the Access Approval page in the Google Cloud console.
- Example Defaults: Disabled: product.googleapis.com/project/12345/ Enabled: product.googleapis.com/project/12345/instances/abcde Approval Request Default Expiration Days : Set the default expiration for Access Approval requests.
- Review Approval requests After you enroll in Access Approval and add yourself as an approver for access requests, you can expect to receive email notifications for access requests.

