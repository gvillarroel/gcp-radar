---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.778Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Confidential VM worker support"
feature_slug: "confidential-vm-worker-support"
latest_feature_date: "2023-06-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/overview"
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest"
keywords:
  - "confidential"
  - "vm"
  - "worker"
  - "dataflow"
  - "supports"
  - "vms"
---

# Confidential VM worker support

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports Confidential VMs for worker VMs.

## Extended Definition

Dataflow supports Confidential VMs for worker VMs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/overview](https://docs.cloud.google.com/dataflow/docs/overview)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest](https://docs.cloud.google.com/python/docs/reference/dataflow/latest)

## Supporting Pages

### "Python Client for Dataflow \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest](https://docs.cloud.google.com/python/docs/reference/dataflow/latest)
- Source ID: `site-python-reference`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-dataflow-client Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-dataflow-client Next Steps Read the Client Library Documentation for Dataflow to see other available methods on the client.
- Version latest keyboard arrow down 0.11.0 (latest) 0.10.0 0.9.0 0.8.17 0.7.0 0.6.2 0.5.5 0.4.1 0.3.1 0.2.0 0.1.5 Dataflow : Unified stream and batch data processing that’s serverless, fast, and cost-effective.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Dataflow Stay organized with collections Save and categorize content based on your preferences.
- Read the Dataflow Product documentation to learn more about the product and see How-to Guides.

### Package and import transforms \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers)
- Source ID: `site-docs-reference-required-3`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Package and import transforms Stay organized with collections Save and categorize content based on your preferences.

### Dataflow overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/overview](https://docs.cloud.google.com/dataflow/docs/overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 27
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataflow supports several different ways to create and execute pipelines, depending on your needs: Write code using the Apache Beam SDKs.
- Dataflow can autoscale by provisioning extra worker VMs, or by shutting down some worker VMs if fewer are needed.
- When you run a Dataflow job, the Dataflow service allocates a pool of worker VMs to execute the pipeline.
- Apache Beam supports multiple runners, including a Dataflow runner .

