---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.116Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "Cloud Healthcare API single-region support in southamerica-east1"
feature_slug: "cloud-healthcare-api-single-region-support-in-southamerica-east1"
latest_feature_date: "2020-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/regions"
  - "https://docs.cloud.google.com/healthcare-api/docs/requirements"
  - "https://docs.cloud.google.com/healthcare-api/docs/best-practices-quota-management"
keywords:
  - "healthcare"
  - "single"
  - "region"
  - "southamerica"
  - "east1"
  - "added"
  - "osasco"
  - "brazil"
---

# Cloud Healthcare API single-region support in southamerica-east1

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

The Cloud Healthcare API added single-region support in the southamerica-east1 (Osasco, Brazil) region.

## Extended Definition

The Cloud Healthcare API added single-region support in the southamerica-east1 (Osasco, Brazil) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/concepts/regions](https://docs.cloud.google.com/healthcare-api/docs/concepts/regions)
- [https://docs.cloud.google.com/healthcare-api/docs/requirements](https://docs.cloud.google.com/healthcare-api/docs/requirements)
- [https://docs.cloud.google.com/healthcare-api/docs/best-practices-quota-management](https://docs.cloud.google.com/healthcare-api/docs/best-practices-quota-management)

## Supporting Pages

### Regions \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/regions](https://docs.cloud.google.com/healthcare-api/docs/concepts/regions)
- Source ID: `site-docs-root-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud Healthcare API is available in the following regions: Regional locations Region name Region description Americas northamerica-northeast1 Montréal northamerica-northeast2 Toronto us-central1 Iowa us-east1 South Carolina us-east4 North Virginia us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City southamerica-east1 São Paulo Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-south1 Mumbai asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne Europe europe-north1 Finland europe-west2 London europe-west3 Frankfurt europe-west4 Netherlands europe-west6 Zurich Middle East me-west1 Tel Aviv me-central1 Doha me-central2 Dammam Multi-regional locations Multi-region name Multi-region description us Data centers in the United States eu Data centers within member states of the European Union Location quota requests You can request a quota increase for the Cloud Healthcare API in a specific region , or in a multi-region location .
- Home Documentation Industry solutions Cloud Healthcare API Guides Send feedback Regions Stay organized with collections Save and categorize content based on your preferences.
- Available regions The Cloud Healthcare API supports a subset of the full list of Google Cloud locations .
- To request a quota increase in a single region: In your quota increase request, specify the region.

### "Quota management best practices \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/best-practices-quota-management](https://docs.cloud.google.com/healthcare-api/docs/best-practices-quota-management)
- Source ID: `site-docs-root-2`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The us multi-regional location consists of the following subregions: us-central1 us-east1 us-west1 If you already have Cloud Healthcare API traffic using quota in any of the us- subregions, ensure that you take the existing traffic in those subregions into account when making a quota increase request for the us multi-region.
- If your Cloud Healthcare API dataset is in the us multi-regional location, and you want to request additional quota, state in your quota request that the quota is for the "US meta region".
- Anticipate per-region usage Cloud Healthcare API measures quotas at a per-Google Cloud-project and per-region basis.
- Anticipate total usage for all data stores and clients Understand your total usage across all Cloud Healthcare API data stores , and understand the total usage of all clients that make requests to your Google Cloud project.

### Requirements \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/requirements](https://docs.cloud.google.com/healthcare-api/docs/requirements)
- Source ID: `site-docs-reference-2`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Regions and versions Cloud regions Only these Google Cloud regions are available: Regional locations Region name Region description Americas northamerica-northeast1 Montréal northamerica-northeast2 Toronto us-central1 Iowa us-east1 South Carolina us-east4 North Virginia us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City southamerica-east1 São Paulo Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-south1 Mumbai asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne Europe europe-north1 Finland europe-west2 London europe-west3 Frankfurt europe-west4 Netherlands europe-west6 Zurich Middle East me-west1 Tel Aviv me-central1 Doha me-central2 Dammam Multi-regional locations Multi-region name Multi-region description us Data centers in the United States eu Data centers in Europe Google Cloud CLI Cloud Healthcare API requires version 236.0.0 or higher of the Google Cloud CLI .
- Home Documentation Industry solutions Cloud Healthcare API Resources Send feedback Requirements Stay organized with collections Save and categorize content based on your preferences.
- Permitted characters and size requirements Resources in the Cloud Healthcare API are limited to certain characters and might be limited to certain lengths.
- This page lists Cloud Healthcare API requirements and related information.

