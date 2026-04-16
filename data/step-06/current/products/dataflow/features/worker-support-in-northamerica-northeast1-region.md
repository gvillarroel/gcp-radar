---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.861Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Worker support in northamerica-northeast1 region"
feature_slug: "worker-support-in-northamerica-northeast1-region"
latest_feature_date: "2018-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/resources/locations"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery"
  - "https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints"
keywords:
  - "worker"
  - "northamerica"
  - "northeast1"
  - "region"
  - "dataflow"
  - "can"
  - "run"
  - "vms"
---

# Worker support in northamerica-northeast1 region

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow can run worker VMs in zones within the northamerica-northeast1 region.

## Extended Definition

Dataflow can run worker VMs in zones within the northamerica-northeast1 region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
- [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)

## Supporting Pages

### Dataflow locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- Source ID: `site-docs-reference-required-4`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Region description Region name Montréal northamerica-northeast1 Toronto northamerica-northeast2 Queretaro, Mexico northamerica-south1 São Paulo southamerica-east1 Santiago southamerica-west1 Iowa us-central1 South Carolina us-east1 Northern Virginia us-east4 Columbus, Ohio us-east5 Oregon us-west1 Los Angeles, California us-west2 Salt Lake City, Utah us-west3 Las Vegas, Nevada us-west4 Dallas, Texas us-south1 Asia Pacific The following table lists the regions in Asia Pacific where Dataflow is available.
- Region description Region name Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Osaka asia-northeast2 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Bangkok asia-southeast3 Sydney australia-southeast1 Melbourne australia-southeast2 Europe The following table lists the regions in Europe where Dataflow is available.
- Regional availability You can use Dataflow workers, endpoints, Streaming Engine, Shuffle, and FlexRS in supported regions.
- Region description Region name Warsaw europe-central2 Finland europe-north1 Stockholm europe-north2 Madrid europe-southwest1 Belgium europe-west1 London europe-west2 Frankfurt europe-west3 Netherlands europe-west4 Zurich europe-west6 Milan europe-west8 Paris europe-west9 Berlin europe-west10 Turin europe-west12 Middle East The following table lists the regions in the Middle East where Dataflow is available.

### Dataflow regions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- Source ID: `site-docs-reference-required-3`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Regional placement offers benefits such as: Improved resource availability: Dataflow jobs are more resilient to zonal resource availability errors, because workers can continue to be created in other zones with remaining availability.
- Although user data is strictly handled by Dataflow workers in their assigned geographic region, pipeline log messages are stored in Cloud Logging , which has a single global presence in Google Cloud.
- Note: Starting with Beam SDK version 2.44.0, Dataflow does not support running jobs with workers in a region that is different from the job region.
- Regional placement By default, the region that you select configures the Dataflow worker pool to utilize all available zones within the region.

### "Spanner change streams to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- See" + " more about Dataflow regional endpoints.\n" + "- This template supports all valid Cloud Spanner data types, but if the BigQuery type" + " is more precise than the Cloud Spanner type, precision loss might occur during the" + " transformation.
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /flexTemplates:launch { "launch parameter" : { "jobName" : " JOB NAME " , "parameters" : { "spannerInstanceId" : " SPANNER INSTANCE ID " , "spannerDatabase" : " SPANNER DATABASE " , "spannerMetadataInstanceId" : " SPANNER METADATA INSTANCE ID " , "spannerMetadataDatabase" : " SPANNER METADATA DATABASE " , "spannerChangeStreamName" : " SPANNER CHANGE STREAM " , "bigQueryDataset" : " BIGQUERY DATASET " }, "containerSpecGcsPath" : "gs://dataflow-templates- LOCATION / VERSION /flex/Spanner Change Streams to BigQuery" , } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- Mod changeStreamsMod : input . getMods ()) { Mod mod = new Mod ( changeStreamsMod . getKeysJson (), changeStreamsMod . getNewValuesJson (), input . getCommitTimestamp (), input . getServerTransactionId (), input . isLastRecordInTransactionInPartition (), input . getRecordSequence (), input . getTableName (), input . getRowType (). stream (). map ( ModColumnType :: new ). collect ( Collectors . toList ()), input . getModType (), input . getValueCaptureType (), input . getNumberOfRecordsInTransaction (), input . getNumberOfPartitionsInTransaction ()); String modJsonString ; try { modJsonString = mod . toJson (); } catch ( IOException e ) { // Ignore exception and print bad format. modJsonString = String . format ( "\"%s\"" , input ); } receiver . output ( modJsonString ); } } } } Production considerations When running the Spanner Change Streams to BigQuery template in a production environment, consider the following best practices to help ensure reliability and prevent data loss: Worker provisioning and scaling Set maxNumWorkers adequately: Insufficient Dataflow workers can cause the pipeline to fall behind in processing change stream data.
- In your shell or terminal, run the template: gcloud dataflow flex-template run JOB NAME \ --template-file-gcs-location = gs://dataflow-templates- REGION NAME / VERSION /flex/Spanner Change Streams to BigQuery \ --region REGION NAME \ --parameters \ spannerInstanceId = SPANNER INSTANCE ID , \ spannerDatabase = SPANNER DATABASE , \ spannerMetadataInstanceId = SPANNER METADATA INSTANCE ID , \ spannerMetadataDatabase = SPANNER METADATA DATABASE , \ spannerChangeStreamName = SPANNER CHANGE STREAM , \ bigQueryDataset = BIGQUERY DATASET Replace the following: JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.

