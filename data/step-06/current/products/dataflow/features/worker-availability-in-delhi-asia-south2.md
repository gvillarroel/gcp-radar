---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.817Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Worker availability in Delhi (asia-south2)"
feature_slug: "worker-availability-in-delhi-asia-south2"
latest_feature_date: "2021-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/resources/locations"
  - "https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm"
  - "https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced"
keywords:
  - "worker"
  - "availability"
  - "delhi"
  - "asia"
  - "south2"
  - "feature"
  - "lets"
  - "dataflow"
---

# Worker availability in Delhi (asia-south2)

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This feature lets Dataflow use workers in zones in the Delhi region asia-south2.

## Extended Definition

This feature lets Dataflow use workers in zones in the Delhi region asia-south2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm)
- [https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced](https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced)

## Supporting Pages

### Dataflow locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- Source ID: `site-docs-reference-required-4`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Region description Region name Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Osaka asia-northeast2 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Bangkok asia-southeast3 Sydney australia-southeast1 Melbourne australia-southeast2 Europe The following table lists the regions in Europe where Dataflow is available.
- Regional availability You can use Dataflow workers, endpoints, Streaming Engine, Shuffle, and FlexRS in supported regions.
- Region description Region name Montréal northamerica-northeast1 Toronto northamerica-northeast2 Queretaro, Mexico northamerica-south1 São Paulo southamerica-east1 Santiago southamerica-west1 Iowa us-central1 South Carolina us-east1 Northern Virginia us-east4 Columbus, Ohio us-east5 Oregon us-west1 Los Angeles, California us-west2 Salt Lake City, Utah us-west3 Las Vegas, Nevada us-west4 Dallas, Texas us-south1 Asia Pacific The following table lists the regions in Asia Pacific where Dataflow is available.
- Region description Region name Johannesburg africa-south1 GPU availability Dataflow supports a variety of GPU types.

### Configure Dataflow worker VMs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm)
- Source ID: `site-docs-reference-required-3`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use Cloud Storage FUSE to mount your Cloud Storage buckets onto Dataflow VMs Cloud Storage FUSE lets you mount your Cloud Storage buckets directly with Dataflow VMs, allowing software to access files as if they are local.
- To verify that the Dataflow worker VMs are created with the specified minimum CPU platform, check the Cloud Logging entries for the job as follows: Navigate to the Cloud Logging console in the Google Cloud console.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Configure Dataflow worker VMs Stay organized with collections Save and categorize content based on your preferences.
- Minimum CPU platform If you have performance-sensitive workloads that depend on specific CPU features, you can specify a minimum CPU platform for worker VMs.

### "Use Apache Beam notebook advanced features \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced](https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced)
- Source ID: `site-docs-reference-2`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use Apache Beam notebook advanced features Stay organized with collections Save and categorize content based on your preferences.
- For example, to set it to 'us-west1': cloud options . region = 'us-west1' Explicitly provision the notebook-managed cluster. worker options = options . view as ( WorkerOptions ) Provision 40 workers to run the pipeline. worker options . num workers = 40 Use the default subnetwork. worker options . subnetwork = 'default' Choose the machine type for the workers. worker options . machine type = 'n1-highmem-8' When working with non-official Apache Beam releases, such as Apache Beam built from source code, configure the environment to use a compatible released SDK container.
- You can check the beam sql magic usage with the -h or --help option: You can create a PCollection from constant values: You can join multiple PCollections : You can launch a Dataflow job with the -r DataflowRunner or --runner DataflowRunner option: To learn more, see the example notebook Apache Beam SQL in notebooks .
- For general Apache Beam container usage, see: Container environments Managing Python Pipeline Dependencies For Dataflow container usage, see: Use custom containers in Dataflow Disable external IP addresses When creating an Apache Beam notebook instance, to increase security, disable external IP addresses.

