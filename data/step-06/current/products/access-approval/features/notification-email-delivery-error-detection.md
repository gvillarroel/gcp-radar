---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.077Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Notification email delivery error detection"
feature_slug: "notification-email-delivery-error-detection"
latest_feature_date: "2022-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys"
keywords:
  - "notification"
  - "email"
  - "delivery"
  - "error"
  - "detection"
  - "access"
  - "approval"
  - "alerts"
---

# Notification email delivery error detection

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

Access Approval alerts users when access request notification emails are undeliverable because of an incorrect configured email address.

## Extended Definition

Access Approval alerts users when access request notification emails are undeliverable because of an incorrect configured email address.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)

## Supporting Pages

### "Class AccessApprovalAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient)
- Source ID: `site-python-reference`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Only the top level fields of AccessApprovalSettings (notification emails & enrolled services) are supported.
- Exceptions Type Description google.auth.exceptions.MutualTlsChannelError If mutual TLS transport creation failed for any reason. access approval service account path access approval service account path ( project : str ) - > str Returns a fully-qualified access approval service account string. access approval settings path access approval settings path ( project : str ) - > str Returns a fully-qualified access approval settings string. approval request path approval request path ( project : str , approval request : str ) - > str Returns a fully-qualified approval request string. approve approval request approve approval request ( request : typing .
- Format: "{projects folders organizations}/{id}/accessApprovalSettings" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It defines the following resource model: The API has a collection of ApprovalRequest resources, named approvalRequests/{approval request} The API has top-level settings per Project/Folder/Organization, named accessApprovalSettings The service also periodically emails a list of recipients, defined at the Project/Folder/Organization level in the accessApprovalSettings, when there is a pending ApprovalRequest for them to act on.

### "Class AccessApprovalClient (1.19.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient)
- Source ID: `site-python-reference`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Only the top level fields of AccessApprovalSettings (notification emails & enrolled services) are supported.
- Exiting the with block will CLOSE the transport and may cause errors in other clients! access approval service account path access approval service account path ( project : str ) - > str Returns a fully-qualified access approval service account string. access approval settings path access approval settings path ( project : str ) - > str Returns a fully-qualified access approval settings string. approval request path approval request path ( project : str , approval request : str ) - > str Returns a fully-qualified approval request string. approve approval request approve approval request ( request : typing .
- Format: "{projects folders organizations}/{id}/accessApprovalSettings" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It defines the following resource model: The API has a collection of ApprovalRequest resources, named approvalRequests/{approval request} The API has top-level settings per Project/Folder/Organization, named accessApprovalSettings The service also periodically emails a list of recipients, defined at the Project/Folder/Organization level in the accessApprovalSettings, when there is a pending ApprovalRequest for them to act on.

### "Review and approve access requests using the Google-managed signing key\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Review Approval requests After you enroll in Access Approval and add yourself as an approver for access requests, you can expect to receive email notifications for access requests.
- This document shows you how to set up Access Approval using the Google Cloud console to receive email notifications of access requests for a project.
- The following image shows a sample email notification that Access Approval sends when Google personnel request access to Customer Data.
- Add yourself as an approver for Access Approval requests and configure notifications To add yourself as an approver so you can review and approve access requests, do the following: Go to the Access Approval page in the Google Cloud console.

