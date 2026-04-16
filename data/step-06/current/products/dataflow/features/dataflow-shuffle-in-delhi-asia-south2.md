---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.816Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow Shuffle in Delhi (asia-south2)"
feature_slug: "dataflow-shuffle-in-delhi-asia-south2"
latest_feature_date: "2021-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/resources/locations"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced"
keywords:
  - "dataflow"
  - "shuffle"
  - "delhi"
  - "asia"
  - "south2"
  - "feature"
  - "makes"
  - "available"
---

# Dataflow Shuffle in Delhi (asia-south2)

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This feature makes Dataflow Shuffle available in zones in the Delhi region asia-south2.

## Extended Definition

This feature makes Dataflow Shuffle available in zones in the Delhi region asia-south2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced](https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced)

## Supporting Pages

### Dataflow locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- Source ID: `site-docs-reference-required-4`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Region description Region name Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Osaka asia-northeast2 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Bangkok asia-southeast3 Sydney australia-southeast1 Melbourne australia-southeast2 Europe The following table lists the regions in Europe where Dataflow is available.
- Region description Region name Montréal northamerica-northeast1 Toronto northamerica-northeast2 Queretaro, Mexico northamerica-south1 São Paulo southamerica-east1 Santiago southamerica-west1 Iowa us-central1 South Carolina us-east1 Northern Virginia us-east4 Columbus, Ohio us-east5 Oregon us-west1 Los Angeles, California us-west2 Salt Lake City, Utah us-west3 Las Vegas, Nevada us-west4 Dallas, Texas us-south1 Asia Pacific The following table lists the regions in Asia Pacific where Dataflow is available.
- Note: The Dataflow Data Pipelines feature is available in the Cloud Scheduler regions .
- Region description Region name Warsaw europe-central2 Finland europe-north1 Stockholm europe-north2 Madrid europe-southwest1 Belgium europe-west1 London europe-west2 Frankfurt europe-west3 Netherlands europe-west4 Zurich europe-west6 Milan europe-west8 Paris europe-west9 Berlin europe-west10 Turin europe-west12 Middle East The following table lists the regions in the Middle East where Dataflow is available.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Java --workerDiskType=pd-ssd Python --worker disk type=pd-ssd Go disk type=pd-ssd No space left on device When a job runs out of disk space, the following error might appear in the worker logs: No space left on device This error can occur for one of the following reasons: The worker persistent storage runs out of free space, which can occur for one of the following reasons: A job downloads large dependencies at runtime A job uses large custom containers A job writes many temporary data to local disk When using Dataflow Shuffle , Dataflow sets lower default disk size .
- The following example demonstrates the Google Cloud CLI command: gcloud compute firewall-rules create FIREWALL RULE NAME \ --network NETWORK \ --action allow \ --direction IN \ --target-tags dataflow \ --source-tags dataflow \ --priority 0 \ --rules tcp:12345-12346 Replace the following: FIREWALL RULE NAME : the name of your firewall rule NETWORK : the name of your network Your job is shuffle-bound .
- When you run a Dataflow job that doesn't use Dataflow Shuffle or Streaming Engine, workers need to communicate with each other using TCP ports 12345 and 12346 within the VPC network.
- Python If the job is not using the service-based shuffle, switch to using the service-based Dataflow Shuffle by setting --experiments=shuffle mode=service .

### "Use Apache Beam notebook advanced features \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced](https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced)
- Source ID: `site-docs-reference-2`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use Apache Beam notebook advanced features Stay organized with collections Save and categorize content based on your preferences.
- You can check the beam sql magic usage with the -h or --help option: You can create a PCollection from constant values: You can join multiple PCollections : You can launch a Dataflow job with the -r DataflowRunner or --runner DataflowRunner option: To learn more, see the example notebook Apache Beam SQL in notebooks .
- For general Apache Beam container usage, see: Container environments Managing Python Pipeline Dependencies For Dataflow container usage, see: Use custom containers in Dataflow Disable external IP addresses When creating an Apache Beam notebook instance, to increase security, disable external IP addresses.
- When instantiating a new pipeline that uses a project, region, and provisioning configuration that map to an existing Managed Service for Apache Spark cluster, Dataflow also reuses the cluster, though it might not use the most recently used cluster.

