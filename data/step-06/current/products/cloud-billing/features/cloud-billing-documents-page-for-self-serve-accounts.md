---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.342Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing documents page for self-serve accounts"
feature_slug: "cloud-billing-documents-page-for-self-serve-accounts"
latest_feature_date: "2020-04-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/create-billing-account"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListBillingAccountsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListBillingAccountsPager"
keywords:
  - "billing"
  - "documents"
  - "page"
  - "for"
  - "self"
  - "serve"
  - "accounts"
  - "can"
---

# Cloud Billing documents page for self-serve accounts

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Self-serve Cloud Billing accounts can now access invoices, statements, and tax documents from the Cloud Billing console Documents page.

## Extended Definition

Self-serve Cloud Billing accounts can now access invoices, statements, and tax documents from the Cloud Billing console Documents page.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/create-billing-account](https://docs.cloud.google.com/billing/docs/how-to/create-billing-account)
- [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListBillingAccountsAsyncPager](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListBillingAccountsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListBillingAccountsPager](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListBillingAccountsPager)

## Supporting Pages

### Create a new self-serve Cloud Billing account \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/create-billing-account](https://docs.cloud.google.com/billing/docs/how-to/create-billing-account)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can grant different levels of access to billing accounts to your users, depending on what they need to do (for example: track spend, review cost anomalies, manage budgets, optimize costs, or review and pay invoices).
- This document describes how to create a self-serve, online Cloud Billing account to automatically pay for your Google Cloud and Google Maps Platform usage costs.
- Recommended next steps To ensure that you can maintain your Cloud Billing account, pay your bills, and monitor your costs, after you create a new billing account, we recommend you also do the following: Configure access to billing accounts and payments profiles Create a FinOps administration project Set up budgets to track your spend Enable billing data export to BigQuery Configure access to billing accounts and payments profiles After you create a new Cloud Billing account, you might want to grant user permissions to additional users to access your billing account and Google payments profile.
- You can upload one of the following documents for verification: Certificate of incorporation Certificate of registration on conversion Certificate of provisional registration Amended certificate of registration Registration of society Udyam registration certificate GST registration certificate VAT Certificate Registration certificate (Jammu and Kashmir) A utility or phone bill (with a date in the last 60 days) Information required for individuals If you're using Google Cloud as an individual, you must provide documents that verify your identity and your address.

### "Class ListBillingAccountsAsyncPager (1.18.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListBillingAccountsAsyncPager](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListBillingAccountsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.billing v1.types.ListBillingAccountsRequest The initial request object. response google.cloud.billing v1.types.ListBillingAccountsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Union [ str , bytes ]]] = () ) A pager for iterating through list billing accounts requests.
- Version latest keyboard arrow down 1.18.0 (latest) 1.17.0 1.16.3 1.15.0 1.14.1 1.13.6 1.12.1 1.11.5 1.10.1 1.9.1 1.8.0 1.7.3 1.6.1 1.5.1 1.4.1 1.3.4 1.2.1 1.1.1 1.0.0 0.1.0 ListBillingAccountsAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListBillingAccountsAsyncPager (1.18.0) Stay organized with collections Save and categorize content based on your preferences.

### "Class ListBillingAccountsPager (1.18.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListBillingAccountsPager](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListBillingAccountsPager)
- Source ID: `site-python-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.billing v1.types.ListBillingAccountsRequest The initial request object. response google.cloud.billing v1.types.ListBillingAccountsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Union [ str , bytes ]]] = () ) A pager for iterating through list billing accounts requests.
- Version latest keyboard arrow down 1.18.0 (latest) 1.17.0 1.16.3 1.15.0 1.14.1 1.13.6 1.12.1 1.11.5 1.10.1 1.9.1 1.8.0 1.7.3 1.6.1 1.5.1 1.4.1 1.3.4 1.2.1 1.1.1 1.0.0 0.1.0 ListBillingAccountsPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListBillingAccountsPager (1.18.0) Stay organized with collections Save and categorize content based on your preferences.

