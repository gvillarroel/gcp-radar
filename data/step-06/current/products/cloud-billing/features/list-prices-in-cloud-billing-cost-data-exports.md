---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.278Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "List prices in Cloud Billing cost data exports"
feature_slug: "list-prices-in-cloud-billing-cost-data-exports"
latest_feature_date: "2023-07-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListProjectBillingInfoAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListProjectBillingInfoPager"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets/list"
keywords:
  - "list"
  - "prices"
  - "in"
  - "billing"
  - "cost"
  - "exports"
  - "adds"
  - "the"
---

# List prices in Cloud Billing cost data exports

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Adds the `cost_at_list` column so list prices are visible for all line items in standard and detailed cost data exports.

## Extended Definition

Adds the `cost_at_list` column so list prices are visible for all line items in standard and detailed cost data exports.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListProjectBillingInfoAsyncPager](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListProjectBillingInfoAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListProjectBillingInfoPager](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListProjectBillingInfoPager)
- [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets/list](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets/list)

## Supporting Pages

### "Class ListProjectBillingInfoAsyncPager (1.18.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListProjectBillingInfoAsyncPager](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListProjectBillingInfoAsyncPager)
- Source ID: `site-python-reference`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.billing v1.types.ListProjectBillingInfoRequest The initial request object. response google.cloud.billing v1.types.ListProjectBillingInfoResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the aiter method will make additional ListProjectBillingInfo requests and continue to iterate through the project billing info field on the corresponding responses.
- All the usual ListProjectBillingInfoResponse attributes are available on the pager.
- Version latest keyboard arrow down 1.18.0 (latest) 1.17.0 1.16.3 1.15.0 1.14.1 1.13.6 1.12.1 1.11.5 1.10.1 1.9.1 1.8.0 1.7.3 1.6.1 1.5.1 1.4.1 1.3.4 1.2.1 1.1.1 1.0.0 0.1.0 ListProjectBillingInfoAsyncPager ( method : typing .

### "Class ListProjectBillingInfoPager (1.18.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListProjectBillingInfoPager](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListProjectBillingInfoPager)
- Source ID: `site-python-reference`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.billing v1.types.ListProjectBillingInfoRequest The initial request object. response google.cloud.billing v1.types.ListProjectBillingInfoResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the iter method will make additional ListProjectBillingInfo requests and continue to iterate through the project billing info field on the corresponding responses.
- All the usual ListProjectBillingInfoResponse attributes are available on the pager.
- Version latest keyboard arrow down 1.18.0 (latest) 1.17.0 1.16.3 1.15.0 1.14.1 1.13.6 1.12.1 1.11.5 1.10.1 1.9.1 1.8.0 1.7.3 1.6.1 1.5.1 1.4.1 1.3.4 1.2.1 1.1.1 1.0.0 0.1.0 ListProjectBillingInfoPager ( method : typing .

### "Method: billingAccounts.budgets.list \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets/list](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets/list)
- Source ID: `site-api-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Response body Response for budgets.list If successful, the response body contains data with the following structure: JSON representation { "budgets" : [ { object ( Budget ) } ] , "nextPageToken" : string } Fields budgets[] object ( Budget ) List of the budgets owned by the requested billing account. nextPageToken string If not empty, indicates that there may be more budgets that match the request; this value should be passed in a new ListBudgetsRequest .
- Home Documentation Costs and usage management Cloud Billing APIs & Reference Send feedback Method: billingAccounts.budgets.list Stay organized with collections Save and categorize content based on your preferences.
- Authorization requires the following IAM permission on the specified resource parent : billing.budgets.list Query parameters Parameters scope string Optional.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/cloud-billing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

