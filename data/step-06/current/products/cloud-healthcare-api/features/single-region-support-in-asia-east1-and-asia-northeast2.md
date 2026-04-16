---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.079Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "Single-region support in asia-east1 and asia-northeast2"
feature_slug: "single-region-support-in-asia-east1-and-asia-northeast2"
latest_feature_date: "2022-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/regions"
  - "https://docs.cloud.google.com/healthcare-api/docs/requirements"
  - "https://docs.cloud.google.com/healthcare-api/docs/cmek"
keywords:
  - "single"
  - "region"
  - "asia"
  - "east1"
  - "northeast2"
  - "healthcare"
  - "adds"
  - "availability"
---

# Single-region support in asia-east1 and asia-northeast2

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Cloud Healthcare API adds single-region availability for the asia-east1 (Taiwan) and asia-northeast2 (Osaka, Japan) regions; Cloud Healthcare API adds single-region availability for the asia-east1 (Taiwan) and asia-northeast2 (Osaka, Japan) regions.

## Extended Definition

Cloud Healthcare API adds single-region availability for the asia-east1 (Taiwan) and asia-northeast2 (Osaka, Japan) regions; Cloud Healthcare API adds single-region availability for the asia-east1 (Taiwan) and asia-northeast2 (Osaka, Japan) regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/concepts/regions](https://docs.cloud.google.com/healthcare-api/docs/concepts/regions)
- [https://docs.cloud.google.com/healthcare-api/docs/requirements](https://docs.cloud.google.com/healthcare-api/docs/requirements)
- [https://docs.cloud.google.com/healthcare-api/docs/cmek](https://docs.cloud.google.com/healthcare-api/docs/cmek)

## Supporting Pages

### Regions \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/regions](https://docs.cloud.google.com/healthcare-api/docs/concepts/regions)
- Source ID: `site-docs-root-2`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Cloud Healthcare API is available in the following regions: Regional locations Region name Region description Americas northamerica-northeast1 Montréal northamerica-northeast2 Toronto us-central1 Iowa us-east1 South Carolina us-east4 North Virginia us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City southamerica-east1 São Paulo Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-south1 Mumbai asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne Europe europe-north1 Finland europe-west2 London europe-west3 Frankfurt europe-west4 Netherlands europe-west6 Zurich Middle East me-west1 Tel Aviv me-central1 Doha me-central2 Dammam Multi-regional locations Multi-region name Multi-region description us Data centers in the United States eu Data centers within member states of the European Union Location quota requests You can request a quota increase for the Cloud Healthcare API in a specific region , or in a multi-region location .
- Home Documentation Industry solutions Cloud Healthcare API Guides Send feedback Regions Stay organized with collections Save and categorize content based on your preferences.
- Available regions The Cloud Healthcare API supports a subset of the full list of Google Cloud locations .
- To request a quota increase in a single region: In your quota increase request, specify the region.

### Requirements \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/requirements](https://docs.cloud.google.com/healthcare-api/docs/requirements)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Regions and versions Cloud regions Only these Google Cloud regions are available: Regional locations Region name Region description Americas northamerica-northeast1 Montréal northamerica-northeast2 Toronto us-central1 Iowa us-east1 South Carolina us-east4 North Virginia us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City southamerica-east1 São Paulo Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-south1 Mumbai asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne Europe europe-north1 Finland europe-west2 London europe-west3 Frankfurt europe-west4 Netherlands europe-west6 Zurich Middle East me-west1 Tel Aviv me-central1 Doha me-central2 Dammam Multi-regional locations Multi-region name Multi-region description us Data centers in the United States eu Data centers in Europe Google Cloud CLI Cloud Healthcare API requires version 236.0.0 or higher of the Google Cloud CLI .
- Home Documentation Industry solutions Cloud Healthcare API Resources Send feedback Requirements Stay organized with collections Save and categorize content based on your preferences.
- Permitted characters and size requirements Resources in the Cloud Healthcare API are limited to certain characters and might be limited to certain lengths.
- This page lists Cloud Healthcare API requirements and related information.

### "Enable customer-managed encryption keys (CMEK) for Cloud Healthcare API\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/cmek](https://docs.cloud.google.com/healthcare-api/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, a Cloud Healthcare API dataset in region asia-northeast1 must be protected with a key ring from region asia-northeast1 .
- The following process describes how key availability is checked, and how a dataset can be disabled and deleted: After a CMEK-encrypted Cloud Healthcare API dataset is created, the Cloud Healthcare API checks the key's status every five minutes to ensure the key is available.
- For example, a Cloud Healthcare API dataset in region us must be protected with a key ring from region us , and a Cloud Healthcare API dataset in region eu must be protected with a key ring from region europe .
- Key unavailability and data loss If a dataset is encrypted by a key, and that key becomes unavailable and remains unavailable, the Cloud Healthcare API disables and eventually deletes the dataset.

