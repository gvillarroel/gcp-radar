---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.825Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Streaming Engine in Warsaw (europe-central2)"
feature_slug: "streaming-engine-in-warsaw-europe-central2"
latest_feature_date: "2021-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/resources/locations"
  - "https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
keywords:
  - "streaming"
  - "engine"
  - "warsaw"
  - "europe"
  - "central2"
  - "feature"
  - "makes"
  - "available"
---

# Streaming Engine in Warsaw (europe-central2)

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This feature makes Streaming Engine available in zones in the Warsaw region europe-central2.

## Extended Definition

This feature makes Streaming Engine available in zones in the Warsaw region europe-central2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)

## Supporting Pages

### Dataflow locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- Source ID: `site-docs-reference-required-4`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Region description Region name Warsaw europe-central2 Finland europe-north1 Stockholm europe-north2 Madrid europe-southwest1 Belgium europe-west1 London europe-west2 Frankfurt europe-west3 Netherlands europe-west4 Zurich europe-west6 Milan europe-west8 Paris europe-west9 Berlin europe-west10 Turin europe-west12 Middle East The following table lists the regions in the Middle East where Dataflow is available.
- Region description Region name Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Osaka asia-northeast2 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Bangkok asia-southeast3 Sydney australia-southeast1 Melbourne australia-southeast2 Europe The following table lists the regions in Europe where Dataflow is available.
- Region description Region name Doha me-central1 Dammam, Saudi Arabia me-central2 Tel Aviv me-west1 Africa The following table lists the regions in Africa where Dataflow is available.
- For information about available regions and zones for GPUs, see GPU regions and zones availability in the Compute Engine documentation.

### Deploy Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Streaming Engine By default, the Dataflow pipeline runner executes the steps of your streaming pipeline entirely on worker virtual machines, consuming worker CPU, memory, and Persistent Disk storage.
- Dataflow's Streaming Engine moves pipeline execution out of the worker VMs and into the Dataflow service backend.
- For more information, see Streaming Engine .
- In your terminal, run the following command: python -m apache beam.examples.wordcount \ --region DATAFLOW REGION \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// STORAGE BUCKET /results/outputs \ --runner DataflowRunner \ --project PROJECT ID \ --temp location gs:// STORAGE BUCKET /tmp/ Replace the following: DATAFLOW REGION : the region where you want to deploy the Dataflow job—for example, europe-west1 The --region flag overrides the default region that is set in the metadata server, your local client, or environment variables.

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

