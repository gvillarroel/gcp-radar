---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.087Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "history filter for ListApprovalRequests"
feature_slug: "history-filter-for-listapprovalrequests"
latest_feature_date: "2020-08-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsPager"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient"
keywords:
  - "history"
  - "filter"
  - "listapprovalrequests"
  - "method"
  - "supports"
  - "value"
---

# history filter for ListApprovalRequests

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

The ListApprovalRequests method supports a history filter value.

## Extended Definition

The ListApprovalRequests method supports a history filter value.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsPager](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsPager)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsAsyncPager](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient)

## Supporting Pages

### "Class ListApprovalRequestsPager (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsPager](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsPager)
- Source ID: `site-python-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.accessapproval v1.types.ListApprovalRequestsMessage The initial request object. response google.cloud.accessapproval v1.types.ListApprovalRequestsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 1.19.0 (latest) 1.18.0 1.17.0 1.16.2 1.15.0 1.14.1 1.13.5 1.12.0 1.11.3 1.10.1 1.9.1 1.8.0 1.7.5 1.6.1 1.5.1 1.4.1 1.3.5 1.2.0 1.1.1 1.0.0 0.2.2 0.1.0 ListApprovalRequestsPager ( method : typing .
- If there are more pages, the iter method will make additional ListApprovalRequests requests and continue to iterate through the approval requests field on the corresponding responses.
- This class thinly wraps an initial ListApprovalRequestsResponse object, and provides an iter method to iterate through its approval requests field.

### "Class ListApprovalRequestsAsyncPager (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsAsyncPager](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.accessapproval v1.types.ListApprovalRequestsMessage The initial request object. response google.cloud.accessapproval v1.types.ListApprovalRequestsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 1.19.0 (latest) 1.18.0 1.17.0 1.16.2 1.15.0 1.14.1 1.13.5 1.12.0 1.11.3 1.10.1 1.9.1 1.8.0 1.7.5 1.6.1 1.5.1 1.4.1 1.3.5 1.2.0 1.1.1 1.0.0 0.2.2 0.1.0 ListApprovalRequestsAsyncPager ( method : typing .
- If there are more pages, the aiter method will make additional ListApprovalRequests requests and continue to iterate through the approval requests field on the corresponding responses.
- This class thinly wraps an initial ListApprovalRequestsResponse object, and provides an aiter method to iterate through its approval requests field.

### "Class AccessApprovalAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient)
- Source ID: `site-python-reference`
- Final score: 89
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Format: "{projects folders organizations}/{id}/approvalRequests/{approval request}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Format: "{projects folders organizations}/{id}/accessApprovalSettings" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 async def sample get access approval service account(): Create a client client = accessapproval v1 .
- Only if this property is not set and transport was not explicitly provided, the endpoint is determined by the GOOGLE API USE MTLS ENDPOINT environment variable, which have one of the following values: "always" (always use the default mTLS endpoint), "never" (always use the default regular endpoint) and "auto" (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value).

