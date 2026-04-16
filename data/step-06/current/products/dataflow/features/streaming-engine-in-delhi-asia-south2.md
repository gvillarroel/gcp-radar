---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.817Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Streaming Engine in Delhi (asia-south2)"
feature_slug: "streaming-engine-in-delhi-asia-south2"
latest_feature_date: "2021-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/resources/locations"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
keywords:
  - "streaming"
  - "engine"
  - "delhi"
  - "asia"
  - "south2"
  - "feature"
  - "makes"
  - "available"
---

# Streaming Engine in Delhi (asia-south2)

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This feature makes Streaming Engine available in zones in the Delhi region asia-south2.

## Extended Definition

This feature makes Streaming Engine available in zones in the Delhi region asia-south2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)

## Supporting Pages

### Dataflow locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- Source ID: `site-docs-reference-required-4`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Region description Region name Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Osaka asia-northeast2 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Bangkok asia-southeast3 Sydney australia-southeast1 Melbourne australia-southeast2 Europe The following table lists the regions in Europe where Dataflow is available.
- Region description Region name Montréal northamerica-northeast1 Toronto northamerica-northeast2 Queretaro, Mexico northamerica-south1 São Paulo southamerica-east1 Santiago southamerica-west1 Iowa us-central1 South Carolina us-east1 Northern Virginia us-east4 Columbus, Ohio us-east5 Oregon us-west1 Los Angeles, California us-west2 Salt Lake City, Utah us-west3 Las Vegas, Nevada us-west4 Dallas, Texas us-south1 Asia Pacific The following table lists the regions in Asia Pacific where Dataflow is available.
- For information about available regions and zones for GPUs, see GPU regions and zones availability in the Compute Engine documentation.
- Regional availability You can use Dataflow workers, endpoints, Streaming Engine, Shuffle, and FlexRS in supported regions.

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To ensure that the Compute Engine default service account has the necessary permissions to run the Dataflow job, ask your administrator to grant the following IAM roles to the Compute Engine default service account on your project: Important: You must grant these roles to the Compute Engine default service account, not to your user account.
- In the dialog, for Topic name enter the following, and then click Save : projects/pubsub-public-data/topics/taxirides-realtime This publicly available Pub/Sub topic is based on the NYC Taxi & Limousine Commission's open dataset .
- If you clicked Hide preview features to go to the Google Cloud console, then perform the following step instead: In the navigation panel, in the Resources section, select the taxirides dataset you created.
- If you clicked Hide preview features to go to the Google Cloud console, then perform the following step instead: In the navigation panel, in the Resources section, select your project.

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following notebooks are available: Word Count Streaming Word Count Streaming NYC Taxi Ride Data Apache Beam SQL in notebooks with comparisons to pipelines Apache Beam SQL in notebooks with the Dataflow Runner Apache Beam SQL in notebooks Dataflow Word Count Interactive Flink at Scale RunInference Use GPUs with Apache Beam Visualize Data The Tutorials folder contains additional tutorials that explain the fundamentals of Apache Beam.
- The following tutorials are available: Basic Operations Element Wise Operations Aggregations Windows I/O Operations Streaming Final Exercises These notebooks include explanatory text and commented code blocks to help you understand Apache Beam concepts and API usage.
- Advanced features include the following workflows: Use Interactive FlinkRunner on notebook-managed clusters Use Beam SQL and beam sql magic Accelerate using JIT compiler and GPU Build a custom container Disable external IP addresses Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Visualize the data through the Interactive Beam inspector You might find it distracting to introspect the data of a PCollection by constantly calling show() and collect() , especially when the output takes up a lot of the space on your screen and makes it hard to navigate through the notebook.

