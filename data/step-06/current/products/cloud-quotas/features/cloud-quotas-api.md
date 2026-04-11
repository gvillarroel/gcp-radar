---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:26:31.358Z"
product_name: "Cloud Quotas"
product_slug: "cloud-quotas"
feature_name: "Cloud Quotas API"
feature_slug: "cloud-quotas-api"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/docs/quotas/view-manage"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient"
keywords:
  - "quotas"
  - "api"
  - "provides"
  - "public"
  - "for"
  - "quota"
  - "management"
  - "and"
---

# Cloud Quotas API

Product: Cloud Quotas
Coverage: LOW

## Step 02 Summary

Cloud Quotas provides a public API for quota management and integration; Cloud Quotas provides a public API for quota management and integration.

## Extended Definition

Cloud Quotas provides a public API for quota management and integration; Cloud Quotas provides a public API for quota management and integration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient)

## Supporting Pages

### View and manage quotas \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to request quota adjustments, ask your administrator to grant you the following IAM roles on the project, folder, or organization: To view quotas: Quota Viewer ( roles/servicemanagement.quotaViewer ) To request quota adjustments: Quota Administrator ( roles/servicemanagement.quotaAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For examples that show how to use the Cloud Quotas API to adjust quotas and automate quota adjustments in your Google Cloud projects, folders, or organization, see Implement common use cases .
- Manage quotas using the Cloud Quotas API You can use the Cloud Quotas API to get current quota information and set quota preferences for Google Cloud APIs and services.
- For example, to view the BigQuery API quotas, select Service , and then select BigQuery API .

### "Python Client for Cloud Quotas API \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest)
- Source ID: `site-python-reference`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- 0.6.0 (latest) 0.5.0 0.4.0 0.3.0 0.2.0 0.1.18 Cloud Quotas API : Cloud Quotas API provides Google Cloud service consumers with management and observability for resource usage, quotas, and restrictions of the services they consume.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Cloud Quotas API Stay organized with collections Save and categorize content based on your preferences.
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-quotas Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-quotas Next Steps Read the Client Library Documentation for Cloud Quotas API to see other available methods on the client.
- Read the Cloud Quotas API Product documentation to learn more about the product and see How-to Guides.

### "Class CloudQuotasAsyncClient (0.6.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient)
- Source ID: `site-python-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ClientInfo ) The Cloud Quotas API is an infrastructure service for Google Cloud that lets service consumers list and manage their resource usage limits.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import cloudquotas v1 async def sample create quota preference(): Create a client client = cloudquotas v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import cloudquotas v1 async def sample update quota preference(): Create a client client = cloudquotas v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import cloudquotas v1 async def sample list quota preferences(): Create a client client = cloudquotas v1 .

