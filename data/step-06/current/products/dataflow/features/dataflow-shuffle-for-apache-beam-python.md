---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.863Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow Shuffle for Apache Beam Python"
feature_slug: "dataflow-shuffle-for-apache-beam-python"
latest_feature_date: "2017-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced"
  - "https://docs.cloud.google.com/dataflow/docs/guides/sql/dataflow-sql-intro"
  - "https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk"
keywords:
  - "dataflow"
  - "shuffle"
  - "apache"
  - "beam"
  - "python"
  - "available"
  - "pipelines"
  - "sdk"
---

# Dataflow Shuffle for Apache Beam Python

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow Shuffle is available for pipelines using Apache Beam SDK for Python version 2.1 or later.

## Extended Definition

Dataflow Shuffle is available for pipelines using Apache Beam SDK for Python version 2.1 or later.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced](https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced)
- [https://docs.cloud.google.com/dataflow/docs/guides/sql/dataflow-sql-intro](https://docs.cloud.google.com/dataflow/docs/guides/sql/dataflow-sql-intro)
- [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)

## Supporting Pages

### "Use Apache Beam notebook advanced features \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced](https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced)
- Source ID: `site-docs-reference-2`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For general Apache Beam container usage, see: Container environments Managing Python Pipeline Dependencies For Dataflow container usage, see: Use custom containers in Dataflow Disable external IP addresses When creating an Apache Beam notebook instance, to increase security, disable external IP addresses.
- Accelerate using JIT compiler and GPU You can use libraries such as numba and GPUs to accelerate your Python code and Apache Beam pipelines.
- In your Apache Beam pipelines, when referring to non-Python dependencies, use their COPY destinations.
- For more information, see: https://beam.apache.org/documentation/runtime/environments/ options . view as ( PortableOptions ) . environment config = 'apache/beam python3.7 sdk:2.41.0 or LOCATION .pkg.dev/ PROJECT ID / REPOSITORY /your custom container' Usage The parallelism is applied to each step, so if your pipeline has 10 steps, you end up having 10 10 = 100 tasks scheduled, which can be run in parallel. options . view as ( FlinkRunnerOptions ) . parallelism = 10 p word count = beam .

### "Use Apache Beam notebook advanced features \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/sql/dataflow-sql-intro](https://docs.cloud.google.com/dataflow/docs/guides/sql/dataflow-sql-intro)
- Source ID: `site-docs-reference-2`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For general Apache Beam container usage, see: Container environments Managing Python Pipeline Dependencies For Dataflow container usage, see: Use custom containers in Dataflow Disable external IP addresses When creating an Apache Beam notebook instance, to increase security, disable external IP addresses.
- Accelerate using JIT compiler and GPU You can use libraries such as numba and GPUs to accelerate your Python code and Apache Beam pipelines.
- In your Apache Beam pipelines, when referring to non-Python dependencies, use their COPY destinations.
- For more information, see: https://beam.apache.org/documentation/runtime/environments/ options . view as ( PortableOptions ) . environment config = 'apache/beam python3.7 sdk:2.41.0 or LOCATION .pkg.dev/ PROJECT ID / REPOSITORY /your custom container' Usage The parallelism is applied to each step, so if your pipeline has 10 steps, you end up having 10 10 = 100 tasks scheduled, which can be run in parallel. options . view as ( FlinkRunnerOptions ) . parallelism = 10 p word count = beam .

### Install the Apache Beam SDK \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- Source ID: `site-docs-reference-required-3`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up your development environment For information about setting up your Google Cloud project and development environment to use Dataflow, follow one of the tutorials: Create a Dataflow pipeline using Java Create a Dataflow pipeline using Python Create a Dataflow pipeline using Go Source code and examples The Apache Beam source code is available in the Apache Beam repository on GitHub.
- To upgrade an existing installation of apache-beam, use the --upgrade flag: pip install --upgrade 'apache-beam[gcp]' As of October 7, 2020, Dataflow no longer supports Python 2 pipelines.
- You define these pipelines with an Apache Beam program and can choose a runner, such as Dataflow, to execute your pipeline.
- This page shows you how to install the Apache Beam SDK so that you can run your pipelines on the Dataflow service.

