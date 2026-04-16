---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.850Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Automatic hot key detection"
feature_slug: "automatic-hot-key-detection"
latest_feature_date: "2019-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/machine-learning"
  - "https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk"
keywords:
  - "automatic"
  - "hot"
  - "key"
  - "detection"
  - "dataflow"
  - "can"
  - "automatically"
  - "detect"
---

# Automatic hot key detection

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow can automatically detect hot keys in batch pipelines for Apache Beam SDK 2.15.0 or higher.

## Extended Definition

Dataflow can automatically detect hot keys in batch pipelines for Apache Beam SDK 2.15.0 or higher.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning)
- [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)

## Supporting Pages

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Pipelines that use Managed I/O might fail with this error if Dataflow can't automatically upgrade the I/O transforms to the latest supported version.
- Dataflow automatically retries sending the Pub/Sub messages with a backoff delay.
- Dataflow automatically responds to and addresses the underlying issue.
- A fatal error has been detected by the Java Runtime Environment The following error occurs during worker startup: A fatal error has been detected by the Java Runtime Environment This error occurs if the pipeline is using Java Native Interface (JNI) to run non-Java code and that code or the JNI bindings contain an error. googclient deliveryattempt attribute key error Your Dataflow job fails with one of the following errors: The request contains an attribute key that is not valid (key=googclient deliveryattempt).

### Dataflow ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning)
- Source ID: `site-docs-reference-required-4`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Anomaly Detection Anomaly Detection with statistical methods This notebook demonstrates how to perform anomaly detection on both batch and streaming data using the AnomalyDetection PTransform.
- Use Vertex AI Pipelines to orchestrate workflow DAGs defined by either TFX or KFP and to automatically track your ML artifacts using Vertex ML Metadata.
- Additional features Use accelerators (GPUs/TPUs) Using accelerators like GPUs and TPUs in Dataflow jobs can significantly speed up data processing tasks frequently used in machine learning and image processing use cases.
- ML workflow orchestration I want to use Dataflow with Vertex AI Pipelines Vertex AI Pipelines helps you to automate, monitor, and govern your ML systems by orchestrating your ML workflows in a serverless manner.

### Install the Apache Beam SDK \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- Source ID: `site-docs-reference-required-3`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up your development environment For information about setting up your Google Cloud project and development environment to use Dataflow, follow one of the tutorials: Create a Dataflow pipeline using Java Create a Dataflow pipeline using Python Create a Dataflow pipeline using Go Source code and examples The Apache Beam source code is available in the Apache Beam repository on GitHub.
- The console will contain a message like the following, which contains the Dataflow SDK version information: Python To find out what version of the Dataflow SDK that a given pipeline is running, you can look at the console output when running with DataflowRunner .
- The console will contain a message like the following, which contains the Dataflow SDK version information: Go To find out what version of the Dataflow SDK that a given pipeline is running, you can look at the console output when running with DataflowRunner .
- Java To find out what version of the Dataflow SDK that a given pipeline is running, you can look at the console output when running with DataflowPipelineRunner or BlockingDataflowPipelineRunner .

