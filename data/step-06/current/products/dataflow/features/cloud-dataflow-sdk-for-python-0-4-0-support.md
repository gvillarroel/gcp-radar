---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.869Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Cloud Dataflow SDK for Python 0.4.0 support"
feature_slug: "cloud-dataflow-sdk-for-python-0-4-0-support"
latest_feature_date: "2016-07-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/profiling-a-pipeline"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest"
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml"
keywords:
  - "dataflow"
  - "sdk"
  - "python"
  - "supports"
  - "running"
  - "pipelines"
  - "remotely"
---

# Cloud Dataflow SDK for Python 0.4.0 support

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports running pipelines remotely with the Cloud Dataflow SDK for Python 0.4.0.

## Extended Definition

Dataflow supports running pipelines remotely with the Cloud Dataflow SDK for Python 0.4.0.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/profiling-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/profiling-a-pipeline)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest](https://docs.cloud.google.com/python/docs/reference/dataflow/latest)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml)

## Supporting Pages

### "Save and load YAML job definitions with the job builder \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml)
- Source ID: `site-docs-reference-required-3`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Save and load YAML job definitions with the job builder Stay organized with collections Save and categorize content based on your preferences.

### "Python Client for Dataflow \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest](https://docs.cloud.google.com/python/docs/reference/dataflow/latest)
- Source ID: `site-python-reference`
- Final score: 45
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-dataflow-client Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-dataflow-client Next Steps Read the Client Library Documentation for Dataflow to see other available methods on the client.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Dataflow Stay organized with collections Save and categorize content based on your preferences.
- Environment-Based Examples Enabling the default handler for all Google-based loggers export GOOGLE SDK PYTHON LOGGING SCOPE=google Enabling the default handler for a specific Google module (for a client library called library v1 ): export GOOGLE SDK PYTHON LOGGING SCOPE=google.cloud.library v1 Advanced, code-based configuration You can also configure a valid logging scope using Python’s standard logging mechanism.
- Version latest keyboard arrow down 0.11.0 (latest) 0.10.0 0.9.0 0.8.17 0.7.0 0.6.2 0.5.5 0.4.1 0.3.1 0.2.0 0.1.5 Dataflow : Unified stream and batch data processing that’s serverless, fast, and cost-effective.

### "Monitoring pipeline performance using Cloud Profiler \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/profiling-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/profiling-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable Cloud Profiler for Dataflow pipelines Cloud Profiler is available for Dataflow pipelines written in Apache Beam SDK for Java and Python, version 2.33.0 or later.
- For troubleshooting tips and debugging strategies for building or running your Dataflow pipeline, see Troubleshooting and debugging pipelines .
- Python pipelines must use Dataflow Runner v2.
- Heap profiling is not yet supported for Python. --dataflow service options=enable google cloud profiler Note: The pipeline option --dataflow service options is the Dataflow preferred way to enable Dataflow features.

