---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:45.373Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Namespace application count API"
feature_slug: "namespace-application-count-api"
latest_feature_date: "2025-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref"
  - "https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference"
  - "https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc"
keywords:
  - "namespace"
  - "application"
  - "count"
  - "was"
  - "introduced"
  - "retrieve"
  - "per"
  - "fusion"
---

# Namespace application count API

Product: Cloud Data Fusion
Coverage: MEDIUM

## Step 02 Summary

A new API was introduced to retrieve application count per namespace in Cloud Data Fusion.

## Extended Definition

A new API was introduced to retrieve application count per namespace in Cloud Data Fusion.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref)
- [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- [https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc](https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc)

## Supporting Pages

### Replication API reference \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref)
- Source ID: `site-api-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your pipeline belongs to an Enterprise edition instance, you can create a namespace . replicator-name Replicator name Example Config The following (partial) config of the app is sent in the API request body: { "name": "my-sample-pipeline", "artifact": { "name": "delta-app", "version": "0.6.2", "scope": "SYSTEM" }, "config": { "connections": [ { "from": "Oracle (by Datastream)", "to": "BigQuery" } ], "stages": [ { "name": "Oracle (by Datastream)", "plugin": { "name": "OracleDatastream", "type": "cdcSource", "artifact": { "name": "datastream-delta-plugins", "version": "0.4.2", "scope": "SYSTEM" }, "properties": { "usingExistingStream": "false", "region": "us-central1", "connectivityMethod": "ip-allowlisting", "port": "1521", "sid": "ORCL", "replicateExistingData": "true", "project": "auto-detect", "dsServiceAccountKey": "auto-detect", "gcsServiceAccountKey": "auto-detect", "host": " ", "user": " ", "password": " " } } }, { "name": "BigQuery", "plugin": { "name": "bigquery", "type": "cdcTarget", "artifact": { "name": "bigquery-delta-plugins", "version": "0.6.3", "scope": "SYSTEM" }, "properties": { "project": "auto-detect", "serviceAccountKey": "auto-detect", "stagingBucketLocation": "us", "loadInterval": "90", "stagingTablePrefix": " staging ", "requireManualDrops": "false", "softDeletes": "false", "datasetName": "mysampledataset" } } } ], "tables": [ { "database": "ORCL", "table": "MYTABLE1", "schema": "HR" }, { "database": "ORCL", "table": "MYTABLE2", "schema": "HR" } ], "parallelism": { "numInstances": 1 }, "tableTransformations": [] } } Contents of the replication job config depend on the Cloud Data Fusion instance and plugin versions.
- If your pipeline belongs to a Basic edition instance, the namespace ID is always default . replicator-name Replicator name See the CDAP application detail API for more information.
- POST -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name /workers/DeltaWorker/start" Parameter Description namespace-id The namespace of the replication job to start.
- POST -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name /workers/DeltaWorker/stop" Parameter Description namespace-id The namespace of the replication job to stop.

### CDAP reference \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- Source ID: `site-api-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PATCH -H 'Content-Type: application/json' -H "Authorization: Bearer ${AUTH TOKEN}" 'https://datafusion.googleapis.com/v1beta1/projects/ project-id /locations/ region /instances/ instance-name ?updateMask=options' -d '{ "options": { "enable.unrecoverable.reset": "true" } }' After the enable.unrecoverable.reset property is set to true , restart the instance: gcloud beta data-fusion instances restart --project= project-id --location= region instance-name Delete the namespace with the following DELETE request or in the web interface.
- PATCH -H 'Content-Type: application/json' -H "Authorization: Bearer ${AUTH TOKEN}" 'https://datafusion.googleapis.com/v1beta1/projects/ project-id /locations/ region /instances/ instance-name ?updateMask=options' -d '{ "options": { "enable.unrecoverable.reset": "false" } }' Parameter Description project-id The project ID that hosts the Cloud Data Fusion instance. region The location of your Cloud Data Fusion instance. instance-name The Cloud Data Fusion instance name. namespace-id The name of the namespace to delete.
- Retrieve pipelines Retrieve all pipelines To list Cloud Data Fusion pipelines in the specified namespace, submit the following HTTP GET request.
- Retrieve real-time pipelines To list Cloud Data Fusion real-time pipelines in the specified namespace, submit the following HTTP GET request.

### "Dataproc provisioner properties \_|\_ Cloud Data Fusion \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc](https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc)
- Source ID: `site-iam-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This property was introduced in Cloud Data Fusion version 6.9.2.
- This property was introduced in Cloud Data Fusion version 6.9.2.
- Dataproc profile web interface properties mapped to JSON properties Dataproc profile UI property name Dataproc profile JSON property name Profile label name Profile name label Description description Project ID projectId Creator service account key accountKey Region region Zone zone Network network Network host project ID networkHostProjectId Subnet subnet Runner service account serviceAccount Number of masters masterNumNodes Master machine type masterMachineType Master cores masterCPUs Master memory (GB) masterMemoryMB Master disk size (GB) masterDiskGB Master disk type masterDiskType Number of primary workers workerNumNodes Number of secondary workers secondaryWorkerNumNodes Worker machine type workerMachineType Worker cores workerCPUs Worker memory (GB) workerMemoryMB Worker disk size (GB) workerDiskGB Worker disk type workerDiskType Metadata clusterMetaData Network tags networkTags Enable Secure Boot secureBootEnabled Enable vTPM vTpmEnabled Enable Integrity Monitoring integrityMonitoringEnabled Image version imageVersion Custom image URI customImageUri Cloud Storage bucket gcsBucket Encryption key name encryptionKeyName Autoscaling policy autoScalingPolicy Initialization actions initActions Cluster properties clusterProperties Labels clusterLabels Max idle time idleTTL Skip cluster delete skipDelete Enable Stackdriver Logging Integration stackdriverLoggingEnabled Enable Stackdriver Monitoring Integration stackdriverMonitoringEnabled Enable Component Gateway componentGatewayEnabled Prefer external IP preferExternalIP Create poll delay pollCreateDelay Create poll jitter pollCreateJitter Delete poll delay pollDeleteDelay Poll interval pollInterval Best Practices When you create a static cluster for your pipelines, refer to the cluster configuration best practices .
- Home Documentation Data analytics Cloud Data Fusion Guides Send feedback Dataproc provisioner properties Stay organized with collections Save and categorize content based on your preferences.

