---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.144Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "Multi-region expansion to us"
feature_slug: "multi-region-expansion-to-us"
latest_feature_date: "2019-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/regions"
  - "https://docs.cloud.google.com/healthcare-api/docs/cmek"
  - "https://docs.cloud.google.com/healthcare-api/docs/best-practices-quota-management"
keywords:
  - "multi"
  - "region"
  - "expansion"
  - "us"
  - "healthcare"
  - "added"
  - "availability"
  - "united"
---

# Multi-region expansion to us

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Cloud Healthcare API added multi-region service availability for the US (united states) location.

## Extended Definition

Cloud Healthcare API added multi-region service availability for the US (united states) location.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/concepts/regions](https://docs.cloud.google.com/healthcare-api/docs/concepts/regions)
- [https://docs.cloud.google.com/healthcare-api/docs/cmek](https://docs.cloud.google.com/healthcare-api/docs/cmek)
- [https://docs.cloud.google.com/healthcare-api/docs/best-practices-quota-management](https://docs.cloud.google.com/healthcare-api/docs/best-practices-quota-management)

## Supporting Pages

### Regions \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/regions](https://docs.cloud.google.com/healthcare-api/docs/concepts/regions)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud Healthcare API is available in the following regions: Regional locations Region name Region description Americas northamerica-northeast1 Montréal northamerica-northeast2 Toronto us-central1 Iowa us-east1 South Carolina us-east4 North Virginia us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City southamerica-east1 São Paulo Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-south1 Mumbai asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne Europe europe-north1 Finland europe-west2 London europe-west3 Frankfurt europe-west4 Netherlands europe-west6 Zurich Middle East me-west1 Tel Aviv me-central1 Doha me-central2 Dammam Multi-regional locations Multi-region name Multi-region description us Data centers in the United States eu Data centers within member states of the European Union Location quota requests You can request a quota increase for the Cloud Healthcare API in a specific region , or in a multi-region location .
- A multi-regional location is a large geographic area, such as the United States, that contains at least two regional locations.
- To request a quota increase in a multi-region location: For a quota increase in the us multi-region, state in your request that the quota is for "US meta region." For a quota increase in the eu multi-region, state in your request that the quota is for "EU meta region." Location considerations When you choose a location for your data, you might want to consider factors such as: Regulatory requirements about where to store your data Latency Resiliency Cost Colocation with other Google Cloud services For example, Google manages multi-regional locations to be redundant and distributed within and across regions.
- If you need to move data from one location to another, complete one of the following processes: FHIR data Export the data from your FHIR stores to a regional or multi-regional Cloud Storage bucket.

### "Enable customer-managed encryption keys (CMEK) for Cloud Healthcare API\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/cmek](https://docs.cloud.google.com/healthcare-api/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create the key ring in a location that matches the region or multi-region of your Cloud Healthcare API dataset.
- Any multi-regional Cloud Healthcare API dataset must use a multi-regional key ring from a matching location.
- The following process describes how key availability is checked, and how a dataset can be disabled and deleted: After a CMEK-encrypted Cloud Healthcare API dataset is created, the Cloud Healthcare API checks the key's status every five minutes to ensure the key is available.
- For example, a Cloud Healthcare API dataset in region us must be protected with a key ring from region us , and a Cloud Healthcare API dataset in region eu must be protected with a key ring from region europe .

### "Quota management best practices \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/best-practices-quota-management](https://docs.cloud.google.com/healthcare-api/docs/best-practices-quota-management)
- Source ID: `site-docs-root-2`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The us multi-regional location consists of the following subregions: us-central1 us-east1 us-west1 If you already have Cloud Healthcare API traffic using quota in any of the us- subregions, ensure that you take the existing traffic in those subregions into account when making a quota increase request for the us multi-region.
- If your Cloud Healthcare API dataset is in the us multi-regional location, and you want to request additional quota, state in your quota request that the quota is for the "US meta region".
- For example, your Google Cloud project might use multiple Cloud Healthcare API datasets and data stores for different types of data, thus increasing your total quota usage.
- Anticipate per-region usage Cloud Healthcare API measures quotas at a per-Google Cloud-project and per-region basis.

