---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.854Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Python streaming support"
feature_slug: "python-streaming-support"
latest_feature_date: "2019-10-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
  - "https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk"
  - "https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime"
  - "https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status"
keywords:
  - "python"
  - "streaming"
  - "dataflow"
  - "supports"
  - "pipelines"
  - "with"
  - "apache"
  - "beam"
---

# Python streaming support

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports Python streaming pipelines with Apache Beam SDK 2.16 or higher.

## Extended Definition

Dataflow supports Python streaming pipelines with Apache Beam SDK 2.16 or higher.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)

## Supporting Pages

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following notebooks are available: Word Count Streaming Word Count Streaming NYC Taxi Ride Data Apache Beam SQL in notebooks with comparisons to pipelines Apache Beam SQL in notebooks with the Dataflow Runner Apache Beam SQL in notebooks Dataflow Word Count Interactive Flink at Scale RunInference Use GPUs with Apache Beam Visualize Data The Tutorials folder contains additional tutorials that explain the fundamentals of Apache Beam.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Develop Apache Beam notebooks with the interactive runner Stay organized with collections Save and categorize content based on your preferences.
- Use the Apache Beam interactive runner with JupyterLab notebooks to complete the following tasks: Iteratively develop pipelines.
- To launch the notebooks on the Dataflow service, export the pipelines created in your Apache Beam notebook.

### Install the Apache Beam SDK \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To upgrade an existing installation of apache-beam, use the --upgrade flag: pip install --upgrade 'apache-beam[gcp]' As of October 7, 2020, Dataflow no longer supports Python 2 pipelines.
- You define these pipelines with an Apache Beam program and can choose a runner, such as Dataflow, to execute your pipeline.
- Set up your development environment For information about setting up your Google Cloud project and development environment to use Dataflow, follow one of the tutorials: Create a Dataflow pipeline using Java Create a Dataflow pipeline using Python Create a Dataflow pipeline using Go Source code and examples The Apache Beam source code is available in the Apache Beam repository on GitHub.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Install the Apache Beam SDK Stay organized with collections Save and categorize content based on your preferences.

### Use Dataflow Prime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Dataflow Prime Dataflow Runner v2 Default feature with no option to turn off for batch jobs and optional for streaming jobs Default feature with an option to turn off for batch jobs and optional for streaming jobs Dataflow Shuffle for batch jobs Default feature with an option to turn off Default feature with an option to turn off Streaming Engine for streaming jobs Optional feature for Java pipelines and always on for Python pipelines Optional feature for Java pipelines and always on for Python pipelines since 2.45.0 Horizontal Autoscaling Default feature with option to turn off Default feature with option to turn off Vertical Autoscaling Default feature with option to turn off Not applicable Right fitting Optional feature Optional feature Billing Serverless billing Standard billing What's next Read about Dataflow quotas .
- Java --dataflowServiceOptions = enable prime = false Python Apache Beam Python SDK version 2.29.0 or later: --dataflow service options = enable prime = false Apache Beam Python SDK version 2.21.0 to 2.28.0: --experiments = enable prime = false Go --dataflow service options = enable prime = false Use Dataflow Prime with templates If you're using Dataflow templates, you can choose to enable Dataflow Prime in one of the following ways: For jobs launched from the Create job from template page: Go to the Create job from template page.
- For supported Apache Beam SDK versions , enable the following flag: Java --dataflowServiceOptions = enable prime Python Apache Beam Python SDK version 2.29.0 or later: --dataflow service options = enable prime Apache Beam Python SDK version 2.21.0 to 2.28.0: --experiments = enable prime Go --dataflow service options = enable prime Disable Dataflow Prime Sometimes, such as with certain Google-provided templates, Dataflow Prime might be enabled by default.
- Java pipelines that meet the following requirements can use the MapState and SetState classes: use Streaming Engine use Apache Beam SDK versions 2.58.0 and later don't use Runner v2 All pipeline options not explicitly mentioned previously or in the feature comparison table work the same for Dataflow and Dataflow Prime.

### SDK version support status \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Known issue: Pipelines that read data from Cloud Storage by using GcsIO, either directly or indirectly, such as with BigQueryIO, might experience data corruption on the Apache Beam Python SDK versions 2.53.0 to 2.58.1.
- Known issue: Pipelines that read data from Cloud Storage by using GcsIO, either directly or indirectly, such as with BigQueryIO, might experience data corruption on the Apache Beam Python SDK versions 2.53.0 to 2.58.1.
- Known issue: Pipelines that read data from Cloud Storage by using GcsIO, either directly or indirectly, such as with BigQueryIO, might experience data corruption on the Apache Beam Python SDK versions 2.53.0 to 2.58.1.
- Known issue: Pipelines that read data from Cloud Storage by using GcsIO, either directly or indirectly, such as with BigQueryIO, might experience data corruption on the Apache Beam Python SDK versions 2.53.0 to 2.58.1.

