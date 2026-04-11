---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.454Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Approval v1 API endpoint"
feature_slug: "access-approval-v1-api-endpoint"
latest_feature_date: "2020-01-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsPager"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.ApprovalRequest"
keywords:
  - "accessapproval.googleapis.com/v1"
  - "v1 and v1beta1 equivalent"
  - "AccessApproval API v1"
  - "AccessApprovalService v1"
  - "v1 endpoint availability"
  - "v1 endpoint"
  - "v1 API"
  - "v1"
---

# Access Approval v1 API endpoint

Product: Access Approval
Coverage: LOW

## Step 02 Summary

The Access Approval API v1 endpoint was made available and is functionally equivalent to v1beta1.

## Extended Definition

The Access Approval API v1 endpoint was made available and is functionally equivalent to v1beta1.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsAsyncPager](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsPager](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsPager)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.ApprovalRequest](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.ApprovalRequest)

## Supporting Pages

### "Class ListApprovalRequestsAsyncPager (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsAsyncPager](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.accessapproval v1.types.ListApprovalRequestsMessage The initial request object. response google.cloud.accessapproval v1.types.ListApprovalRequestsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListApprovalRequestsResponse ], ], request : google . cloud . accessapproval v1 . types . accessapproval .
- ListApprovalRequestsResponse ], ], request : google . cloud . accessapproval v1 . types . accessapproval .
- ListApprovalRequestsMessage , response : google . cloud . accessapproval v1 . types . accessapproval .

### "Class ListApprovalRequestsPager (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsPager](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsPager)
- Source ID: `site-python-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.accessapproval v1.types.ListApprovalRequestsMessage The initial request object. response google.cloud.accessapproval v1.types.ListApprovalRequestsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListApprovalRequestsResponse , ], request : google . cloud . accessapproval v1 . types . accessapproval .
- ListApprovalRequestsResponse , ], request : google . cloud . accessapproval v1 . types . accessapproval .
- ListApprovalRequestsMessage , response : google . cloud . accessapproval v1 . types . accessapproval .

### "Class ApprovalRequest (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.ApprovalRequest](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.ApprovalRequest)
- Source ID: `site-python-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification. requested resource properties google.cloud.accessapproval v1.types.ResourceProperties Properties related to the resource represented by requested resource name. requested reason google.cloud.accessapproval v1.types.AccessReason The justification for which approval is being requested. requested locations google.cloud.accessapproval v1.types.AccessLocations The locations for which approval is being requested. request time google.protobuf.timestamp pb2.Timestamp The time at which approval was requested. requested expiration google.protobuf.timestamp pb2.Timestamp The requested expiration for the approval.
- If the request is approved, access will be granted from the time of approval until the expiration time. approve google.cloud.accessapproval v1.types.ApproveDecision Access was approved.
- This field is a member of oneof decision . dismiss google.cloud.accessapproval v1.types.DismissDecision The request was dismissed.

