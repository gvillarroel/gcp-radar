---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:54.010Z"
product_name: "Cloud Quotas"
product_slug: "cloud-quotas"
feature_name: "Cloud Quotas API"
feature_slug: "cloud-quotas-api"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/docs/quotas/view-manage"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest"
  - "https://docs.cloud.google.com/docs/quotas/api-overview"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud Quotas provides a public API for quota management and integration; Cloud Quotas provides a public API for quota management and integration.

## Extended Definition

Cloud Quotas provides a public API for quota management and integration; Cloud Quotas provides a public API for quota management and integration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest)
- [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient)

## Supporting Pages

### View and manage quotas \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage)
- Source ID: `site-docs-root`
- Final score: 311
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to request quota adjustments, ask your administrator to grant you the following IAM roles on the project, folder, or organization: To view quotas: Quota Viewer ( roles/servicemanagement.quotaViewer ) To request quota adjustments: Quota Administrator ( roles/servicemanagement.quotaAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For examples that show how to use the Cloud Quotas API to adjust quotas and automate quota adjustments in your Google Cloud projects, folders, or organization, see Implement common use cases .
- Manage quotas using the Cloud Quotas API You can use the Cloud Quotas API to get current quota information and set quota preferences for Google Cloud APIs and services.
- For example, to view the BigQuery API quotas, select Service , and then select BigQuery API .

### "Python Client for Cloud Quotas API \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest)
- Source ID: `site-python-reference`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 0.6.0 (latest) 0.5.0 0.4.0 0.3.0 0.2.0 0.1.18 Cloud Quotas API : Cloud Quotas API provides Google Cloud service consumers with management and observability for resource usage, quotas, and restrictions of the services they consume.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Cloud Quotas API Stay organized with collections Save and categorize content based on your preferences.
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-quotas Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-quotas Next Steps Read the Client Library Documentation for Cloud Quotas API to see other available methods on the client.
- Read the Cloud Quotas API Product documentation to learn more about the product and see How-to Guides.

### Cloud Quotas API overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview)
- Source ID: `site-docs-reference`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- They use a demo quota preference with the ID compute googleapis com-gpus-us-central1 . gcloud If you view your quota preference using the gcloud CLI, the output looks similar to the following: createTime: '2023-01-15T01:30:15.01Z' dimensions: region: us-central1 name: projects/ PROJECT NUMBER /locations/global/quotaPreferences/compute googleapis com-gpus-us-central1 quotaConfig: grantedValue: '100' preferredValue: '100' traceId: 123acd-345df23 requestOrigin: ORIGIN UNSPECIFIED service: compute.googleapis.com quotaId: GPUS-PER-GPU-FAMILY-per-project-region updateTime: '2023-01-16T02:35:16.01Z' REST If you view your quota preference using the Cloud Quotas API, the output looks similar to the following: { "name" : "projects/ PROJECT NUMBER /locations/global/quotaPreferences/compute googleapis com-gpus-us-central1" , "service" : "compute.googleapis.com" , "quotaId" : "GPUS-PER-GPU-FAMILY-per-project-region" , "quotaConfig" : { "preferredValue" : 100 , "grantedValue" : 100 , "traceId" : "123acd-345df23" , "requestOrigin" : "ORIGIN UNSPECIFIED" }, "dimensions" : { "region" : "us-central1" }, "createTime" : "2023-01-15T01:30:15.01Z" , "updateTime" : "2023-01-16T02:35:16.01Z" } This output includes the following values: PROJECT NUMBER : an automatically generated unique identifier for your project.
- Set different quota values by region The following QuotaInfo resource example shows that the CPU quota for the project is 200 for region us-central1 and 100 for all other regions. { "name" : "projects/ PROJECT NUMBER /locations/global/services/compute.googleapis.com/quotaInfos/CPUS-per-project-region" , "quotaId" : "CPUS-per-project-region" , "metric" : "compute.googleapis.com/cpus" , "containerType" : "PROJECT" , "dimensions" : [ "region" ], "isPrecise" : true , "quotaDisplayName" : "CPUs per project per region" , "metricDisplayName" : "CPUs" , "dimensionsInfo" : [ { "dimensions" : { "region" : "us-central1" }, "details" : { "quotaValue" : 200 , "resetValue" : 200 }, "applicableLocations" : [ "us-central1" , ] }, { "details" : { "quotaValue" : 100 , "resetValue" : 100 }, "applicableLocations" : [ "us-central2" , "us-west1" , "us-east1" ] } ] } This output includes the following values: PROJECT NUMBER : an automatically generated unique identifier for your project.
- All quotas without a region or zone dimension are global. { "name" : "projects/ PROJECT NUMBER /locations/global/services/compute.googleapis.com/quotaInfos/ReadRequestsPerMinutePerProject" , "quotaId" : "ReadRequestsPerMinutePerProject" , "metric" : "compute.googleapis.com/read requests" , "refreshInterval" : "minute" , "containerType" : "PROJECT" , "dimensions" : [], "isPrecise" : false , "quotaDisplayName" : "Read Requests per Minute" , "metricDisplayName" : "Read Requests" , "dimensionsInfo" : [ { "details" : { "quotaValue" : 100 , "resetValue" : 200 }, "applicableLocations" : [ "global" ] } ] } This output includes the following values: PROJECT NUMBER : an automatically generated unique identifier for your project.
- The Cloud Quotas API service has the following endpoint and all URIs are relative to it: https://cloudquotas.googleapis.com Required roles To get the permissions that you need to access the cloudquotas quotaPreferences , cloudquotas quotaInfos , and cloudquotas quotaAdjusterSettings resources, ask your administrator to grant you the Cloud Quotas Admin ( cloudquotas.admin ) IAM role on the project.

### "Class CloudQuotasAsyncClient (0.6.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient)
- Source ID: `site-python-reference`
- Final score: 289
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ClientInfo ) The Cloud Quotas API is an infrastructure service for Google Cloud that lets service consumers list and manage their resource usage limits.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import cloudquotas v1 async def sample create quota preference(): Create a client client = cloudquotas v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import cloudquotas v1 async def sample update quota preference(): Create a client client = cloudquotas v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import cloudquotas v1 async def sample list quota preferences(): Create a client client = cloudquotas v1 .

