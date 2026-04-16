---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.770Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Streaming data enrichment transform"
feature_slug: "streaming-data-enrichment-transform"
latest_feature_date: "2024-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/enrichment"
  - "https://docs.cloud.google.com/dataflow/docs/machine-learning"
  - "https://docs.cloud.google.com/dataflow/docs/overview"
keywords:
  - "streaming"
  - "enrichment"
  - "transform"
  - "dataflow"
  - "provides"
  - "turnkey"
  - "enrich"
  - "augmenting"
---

# Streaming data enrichment transform

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow provides a turnkey transform to enrich streaming data by augmenting records with related data from a second source.

## Extended Definition

Dataflow provides a turnkey transform to enrich streaming data by augmenting records with related data from a second source.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/enrichment](https://docs.cloud.google.com/dataflow/docs/guides/enrichment)
- [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning)
- [https://docs.cloud.google.com/dataflow/docs/overview](https://docs.cloud.google.com/dataflow/docs/overview)

## Supporting Pages

### Enrich streaming data \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/enrichment](https://docs.cloud.google.com/dataflow/docs/guides/enrichment)
- Source ID: `site-docs-reference-2`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Apache Beam simplifies the data enrichment workflow by providing a turnkey enrichment transform that you can add to your pipeline.
- Support and limitations The enrichment transform has the following requirements: Available for batch and streaming pipelines.
- This page explains how to use the Apache Beam enrichment transform to enrich your streaming data.
- In the following example, left is the input element of the enrichment transform, and right is data fetched from an external service for that input element. def custom join ( left: Dict [ str, Any ] , right: Dict [ str, Any ]) : enriched = {} enriched [ ' FIELD NAME ' ] = left [ ' FIELD NAME ' ] ... return beam.Row ( enriched ) Parameters To use the enrichment transform, the EnrichmentHandler parameter is required.

### Dataflow ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning)
- Source ID: `site-docs-reference-required-4`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable right fitting Enrich streaming pipelines with feature store data Apache Beam simplifies the data enrichment workflow by providing a turnkey enrichment transform that you can add to your pipeline.
- Anomaly Detection Anomaly Detection with statistical methods This notebook demonstrates how to perform anomaly detection on both batch and streaming data using the AnomalyDetection PTransform.
- Additional features Use accelerators (GPUs/TPUs) Using accelerators like GPUs and TPUs in Dataflow jobs can significantly speed up data processing tasks frequently used in machine learning and image processing use cases.
- ML workflow orchestration I want to use Dataflow with Vertex AI Pipelines Vertex AI Pipelines helps you to automate, monitor, and govern your ML systems by orchestrating your ML workflows in a serverless manner.

### Dataflow overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/overview](https://docs.cloud.google.com/dataflow/docs/overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use Dataflow to create data pipelines that read from one or more sources, transform the data, and write the data to a destination.
- A solution built on Dataflow can grow with your needs as you move from batch to streaming or encounter more advanced use cases.
- However, Dataflow is also suitable for more advanced applications, such as real-time streaming analytics.
- Scalable data pipelines Dataflow is designed to support batch and streaming pipelines at large scale.

