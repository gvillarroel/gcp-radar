---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.213Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Regional Secret Manager tags in Cloud Billing cost exports"
feature_slug: "regional-secret-manager-tags-in-cloud-billing-cost-exports"
latest_feature_date: "2025-07-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.CloudBillingAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.CloudBillingClient"
  - "https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator"
keywords:
  - "regional"
  - "secret"
  - "manager"
  - "tags"
  - "in"
  - "billing"
  - "cost"
  - "exports"
---

# Regional Secret Manager tags in Cloud Billing cost exports

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing cost exports now include tag data for regional Secret Manager secret usage in both standard and detailed usage cost exports.

## Extended Definition

Cloud Billing cost exports now include tag data for regional Secret Manager secret usage in both standard and detailed usage cost exports.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.CloudBillingAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.CloudBillingAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.CloudBillingClient](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.CloudBillingClient)
- [https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator](https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator)

## Supporting Pages

### "Class CloudBillingAsyncClient (1.18.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.CloudBillingAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.CloudBillingAsyncClient)
- Source ID: `site-python-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import billing v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = billing v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import billing v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = billing v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import billing v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample set iam policy(): Create a client client = billing v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import billing v1 async def sample update project billing info(): Create a client client = billing v1 .

### "Class CloudBillingClient (1.18.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.CloudBillingClient](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.CloudBillingClient)
- Source ID: `site-python-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import billing v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = billing v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import billing v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample get iam policy(): Create a client client = billing v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import billing v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample set iam policy(): Create a client client = billing v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import billing v1 def sample update project billing info(): Create a client client = billing v1 .

### Find a Billing Account Administrator \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator](https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- On the Cloud Billing account, you need a role that includes the following permissions : billing.accounts.get billing.accounts.getIamPolicy These permissions are granted in many predefined roles for Cloud Billing , including: Billing Account User Billing Account Viewer Billing Account Costs Manager Billing Account Administrator If you have some level of Cloud Billing account access, you can view basic information about the billing account, including viewing the Info panel to identify the administrators and other principals within your organization who have billing account permissions.
- Billing Account Administrators can manage payment instruments, pay bills, configure billing data exports, view cost information, link and unlink projects, and manage user permissions on the billing account.
- Note: Neither the Billing Account Creator role (which is granted at the Organization level) nor the Project Billing Manager role (which is granted on a project) include the permissions needed to access basic information about the billing account.
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Find a Billing Account Administrator Stay organized with collections Save and categorize content based on your preferences.

