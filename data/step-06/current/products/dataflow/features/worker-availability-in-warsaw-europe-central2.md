---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.826Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Worker availability in Warsaw (europe-central2)"
feature_slug: "worker-availability-in-warsaw-europe-central2"
latest_feature_date: "2021-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/resources/locations"
  - "https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm"
  - "https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline"
keywords:
  - "worker"
  - "availability"
  - "warsaw"
  - "europe"
  - "central2"
  - "feature"
  - "lets"
  - "dataflow"
---

# Worker availability in Warsaw (europe-central2)

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This feature lets Dataflow use workers in zones in the Warsaw region europe-central2.

## Extended Definition

This feature lets Dataflow use workers in zones in the Warsaw region europe-central2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm)
- [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)

## Supporting Pages

### Dataflow locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- Source ID: `site-docs-reference-required-4`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Region description Region name Warsaw europe-central2 Finland europe-north1 Stockholm europe-north2 Madrid europe-southwest1 Belgium europe-west1 London europe-west2 Frankfurt europe-west3 Netherlands europe-west4 Zurich europe-west6 Milan europe-west8 Paris europe-west9 Berlin europe-west10 Turin europe-west12 Middle East The following table lists the regions in the Middle East where Dataflow is available.
- Regional availability You can use Dataflow workers, endpoints, Streaming Engine, Shuffle, and FlexRS in supported regions.
- Region description Region name Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Osaka asia-northeast2 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Bangkok asia-southeast3 Sydney australia-southeast1 Melbourne australia-southeast2 Europe The following table lists the regions in Europe where Dataflow is available.
- Region description Region name Doha me-central1 Dammam, Saudi Arabia me-central2 Tel Aviv me-west1 Africa The following table lists the regions in Africa where Dataflow is available.

### Configure Dataflow worker VMs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm)
- Source ID: `site-docs-reference-required-3`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Use Cloud Storage FUSE to mount your Cloud Storage buckets onto Dataflow VMs Cloud Storage FUSE lets you mount your Cloud Storage buckets directly with Dataflow VMs, allowing software to access files as if they are local.
- To verify that the Dataflow worker VMs are created with the specified minimum CPU platform, check the Cloud Logging entries for the job as follows: Navigate to the Cloud Logging console in the Google Cloud console.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Configure Dataflow worker VMs Stay organized with collections Save and categorize content based on your preferences.
- Minimum CPU platform If you have performance-sensitive workloads that depend on specific CPU features, you can specify a minimum CPU platform for worker VMs.

### Deploy Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- In your terminal, run the following command: python -m apache beam.examples.wordcount \ --region DATAFLOW REGION \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// STORAGE BUCKET /results/outputs \ --runner DataflowRunner \ --project PROJECT ID \ --temp location gs:// STORAGE BUCKET /tmp/ Replace the following: DATAFLOW REGION : the region where you want to deploy the Dataflow job—for example, europe-west1 The --region flag overrides the default region that is set in the metadata server, your local client, or environment variables.
- Streaming Engine By default, the Dataflow pipeline runner executes the steps of your streaming pipeline entirely on worker virtual machines, consuming worker CPU, memory, and Persistent Disk storage.
- You can run your pipeline locally, which lets you test and debug your Apache Beam pipeline, or on Dataflow, a data processing system available for running Apache Beam pipelines.
- Parallelization and distribution Dataflow automatically partitions your data and distributes your worker code to Compute Engine instances for parallel processing.

