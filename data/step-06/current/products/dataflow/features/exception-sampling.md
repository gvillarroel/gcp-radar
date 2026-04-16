---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.770Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Exception sampling"
feature_slug: "exception-sampling"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest"
  - "https://docs.cloud.google.com/dataflow/docs/cuds"
  - "https://docs.cloud.google.com/dataflow/docs/samples"
keywords:
  - "exception"
  - "sampling"
  - "dataflow"
  - "supports"
  - "pipeline"
  - "exceptions"
  - "so"
  - "users"
---

# Exception sampling

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports data sampling for pipeline exceptions so users can inspect sample data when unhandled errors occur.

## Extended Definition

Dataflow supports data sampling for pipeline exceptions so users can inspect sample data when unhandled errors occur.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest](https://docs.cloud.google.com/python/docs/reference/dataflow/latest)
- [https://docs.cloud.google.com/dataflow/docs/cuds](https://docs.cloud.google.com/dataflow/docs/cuds)
- [https://docs.cloud.google.com/dataflow/docs/samples](https://docs.cloud.google.com/dataflow/docs/samples)

## Supporting Pages

### "Python Client for Dataflow \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest](https://docs.cloud.google.com/python/docs/reference/dataflow/latest)
- Source ID: `site-python-reference`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-dataflow-client Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-dataflow-client Next Steps Read the Client Library Documentation for Dataflow to see other available methods on the client.
- Version latest keyboard arrow down 0.11.0 (latest) 0.10.0 0.9.0 0.8.17 0.7.0 0.6.2 0.5.5 0.4.1 0.3.1 0.2.0 0.1.5 Dataflow : Unified stream and batch data processing that’s serverless, fast, and cost-effective.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Dataflow Stay organized with collections Save and categorize content based on your preferences.
- Read the Dataflow Product documentation to learn more about the product and see How-to Guides.

### All Dataflow code samples \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/samples](https://docs.cloud.google.com/dataflow/docs/samples)
- Source ID: `site-docs-reference-required-4`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Samples Send feedback Stay organized with collections Save and categorize content based on your preferences.
- All Dataflow code samples This page contains code samples for Dataflow.

### Committed use discounts \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/cuds](https://docs.cloud.google.com/dataflow/docs/cuds)
- Source ID: `site-docs-reference-required-4`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- From here, you can calculate the monthly costs and savings that you would see under a one-year commitment with a 20% discount compared to a year of paying the full rates: Monthly cost of a one-year, $4.585/hour commitment 730 hours = $3,346.32 per month Total savings per month: $4,182.90 - $3,346.32 = $836.58 Total savings with a one-year, $5.73/hour commitment: $836.58 per month 12 months = $10,038.96 You can apply similar math to calculating the costs and savings of a three-year CUD, with its 40% discount compared to on-demand rates: Monthly cost of a three-year commitment: $3.438 per hour 730 hours = $2,509.74 per month Total savings per month: $4,182.90 - $2,509.74 = $1,673.16 Total savings with a three-year, $5.73/hour CUD: $1,673.16 per month 36 months = $60,233.76 A commitment that covers your expected minimum Dataflow streaming usage over the years to come can lead to significant savings.
- Dataflow CUDs apply to your spending on the following resources: Worker CPU and memory for streaming jobs Streaming Engine data processed Streaming Engine compute units Data Compute Units (DCUs) for Dataflow Prime streaming jobs Dataflow CUDs don't apply to your spending on the following resources: Worker CPU and memory for batch and FlexRS jobs Dataflow Shuffle data processed Data Compute Units (DCUs) for Dataflow Prime batch jobs Persistent Disk storage GPUs and TPUs Snapshots Confidential VMs For a list of applicable SKUs, see Dataflow CUD Eligible SKUs .
- Resources eligible for Dataflow CUDs Note: While Dataflow Committed Use Discounts (CUDs) don't apply to GPUs and TPUs, you can apply resource-based CUDs for these accelerators by purchasing Compute Engine resource-based commitments with specifically targeted reservations, and using these reservations with Dataflow.
- Recommendations for choosing a commitment When considering the purchase of Dataflow CUDs, keep in mind the following: Projects : Determine the consistent baseline expenditure per project while calculating total commitment.

