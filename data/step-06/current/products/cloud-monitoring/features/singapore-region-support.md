---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.032Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Singapore Region Support"
feature_slug: "singapore-region-support"
latest_feature_date: "2017-06-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/region-support"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.group_service.GroupServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.group_service.GroupServiceClient"
keywords:
  - "singapore"
  - "region"
  - "monitoring"
  - "supports"
  - "resources"
  - "asia"
  - "southeast1"
---

# Singapore Region Support

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Monitoring supports resources in the Singapore region asia-southeast1.

## Extended Definition

Monitoring supports resources in the Singapore region asia-southeast1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.group_service.GroupServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.group_service.GroupServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.group_service.GroupServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.group_service.GroupServiceClient)

## Supporting Pages

### Data regionality for Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Observability Cloud Monitoring Guides Send feedback Data regionality for Cloud Monitoring Stay organized with collections Save and categorize content based on your preferences.
- To store a time series in a specific region , the monitored resource against which the time series is written must have one of the following labels and the value of the label must be valid: location zone region A time series is discarded when the monitored resource against which the time series is written has one of the previous labels and the value of the label isn't recognized or isn't specified.
- Storage of time-series data Google agents, client-side code using libraries like OpenTelemetry, and third-party sources such as BindPlane , write time series by using the Cloud Monitoring API.
- Data written by Google Cloud products Google Cloud products deployable by zone or by region store any time series that they generate in the same region to which they are deployed.

### "Class GroupServiceAsyncClient (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.group_service.GroupServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.group_service.GroupServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 async def sample list group members(): Create a client client = monitoring v3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 async def sample create group(): Create a client client = monitoring v3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 async def sample delete group(): Create a client client = monitoring v3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 async def sample update group(): Create a client client = monitoring v3 .

### "Class GroupServiceClient (2.30.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.group_service.GroupServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.group_service.GroupServiceClient)
- Source ID: `site-python-reference`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 def sample list group members(): Create a client client = monitoring v3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 def sample create group(): Create a client client = monitoring v3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 def sample delete group(): Create a client client = monitoring v3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 def sample update group(): Create a client client = monitoring v3 .

