---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:04:57.772Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "POST /v3/metrics/search API"
feature_slug: "post-v3-metrics-search-api"
latest_feature_date: "2025-03-17"
deprecation_date: "2025-03-17"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/release-notes"
  - "https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference"
  - "https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref"
keywords:
  - "post"
  - "v3"
  - "metrics"
  - "search"
  - "api"
  - "the"
  - "for"
  - "searching"
---

# POST /v3/metrics/search API

Product: Cloud Data Fusion
Coverage: LOW

## Step 02 Summary

The POST v3/metrics/search API for searching or querying metrics was deprecated; deprecated on 2025-03-17.

## Extended Definition

The POST v3/metrics/search API for searching or querying metrics was deprecated; deprecated on 2025-03-17.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref)

## Supporting Pages

### Cloud Data Fusion release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated The following APIs for searching and querying metrics are deprecated in 6.11.0: POST v3/metrics/query POST v3/metrics/search Breaking A soft limit of 2 MB for pipeline JSON size is introduced in 6.11.0.
- This release includes the following feature: InstanceV3 monitored-resource: Introduced datafusion.googleapis.com/InstanceV3 as the default monitored resource for instance-level metrics and system service logs.
- Change To support the Private Service Connect integration, the following permissions are added to the Cloud Data Fusion API Service Agent role: compute.networkAttachments.get compute.networkAttachments.update compute.networkAttachments.list Fixed Fixed in Cloud Data Fusion 6.10.0: Fixed an issue in the Postgres DB plugin causing macros to be unsupported for database configuration ( PLUGIN-1681 ).
- Deprecated The following APIs for downloading system service and pipeline run logs are deprecated in 6.11.0: GET /v3/namespaces/<NAMESPACE ID>/apps/<APP ID>/<PROGRAM TYPE>/<PROGRAM ID>/logs GET /v3/system/services/<SERVICE ID>/logs Deprecated The ability to retrieve all applications without pagination using the GET /v3/namespaces/<NAMESPACE ID>/apps endpoint is deprecated in 6.11.0.

### CDAP reference \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- POST -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/metrics/query" The body of the HTTP POST request is a JSON object in the following format: { "query": { "tags": { "namespace": "default", "app": " pipeline name ", "workflow": "DataPipelineWorkflow", "run": " run-id " }, "metrics": [ " metric1 name ", " metric2 name ", ... ], "timeRange": { "aggregate": true } } } Query parameter Description / value pipeline name Your pipeline name. run-id To find the run ID, see Batch pipeline run records , which returns a list of run IDs. metric name Metric names follow the format: user. pipeline-stage . metric pipeline-stage is any of the stage names in the body of the HTTP PUT request that you configured when you deployed your pipeline .
- POST -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/metrics/query" The body of the HTTP POST request is a JSON object in the following format: { "query": { "tags": { "namespace": "default", "app": " pipeline name ", "spark": "DataStreamsSparkStreaming", "run": " run-id " }, "metrics": [ " metric1 name ", " metric2 name ", ... ], "timeRange": { "aggregate": true } } } Query parameter Description / value pipeline name Your pipeline name. run-id To find the run ID, call Real-time pipeline run records , which returns a list of run IDs. metric name Metric names follow the format: user. pipeline-stage . metric pipeline-stage is any of the stage names in the body of the HTTP PUT request that you configured when you deployed your pipeline .
- In the following example, BigQuery or GoogleCloudStorage are possible values for pipeline-stage . { "stages": [ { "name": "BigQuery", ... }, { "name": "GoogleCloudStorage", ... }, ... ], ... } metrics can be any of: records.in records.out records.error process.time.total process.time.avg process.time.max process.time.min process.time.stddev For example, the following query gets the records.out and process.time.avg metrics for the BigQuery stage of the batch pipeline, batch-pipeline . { "query": { "tags": { "namespace": "default", "app": "batch-pipeline", "workflow": "DataPipelineWorkflow", "run": "81e3d583-f68b-11e9-aba0-0242b9f29569" }, "metrics": [ "user.BigQuery.records.out", "user.BigQuery.process.time.avg" ], "timeRange": { "aggregate": true } } } For more information, see CDAP Metrics Microservices and Cloud Data Fusion flow control .
- In the following example, BigQuery or GoogleCloudStorage are possible values for pipeline-stage . { "stages": [ { "name": BigQuery, "name": GoogleCloudStorage }, ... ], ... } metrics can be any of: records.in records.out records.error process.time.total process.time.avg process.time.max process.time.min process.time.stddev For example, the following query gets the records.out and process.time.avg metrics for the BigQuery stage of the real-time pipeline, rt-pipeline . { "query": { "tags": { "namespace": "default", "app": "rt-pipeline", "spark": "DataStreamsSparkStreaming", "run": "81e3d583-f68b-11e9-aba0-0242b9f29570" }, "metrics": [ "user.BigQuery.records.out", "user.BigQuery.process.time.avg" ], "timeRange": { "aggregate": true } } } For more information, see Metrics HTTP RESTful API and Cloud Data Fusion flow control .

### Replication API reference \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref)
- Source ID: `site-api-reference`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If your pipeline belongs to an Enterprise edition instance, you can create a namespace . replicator-name Replicator name Example Config The following (partial) config of the app is sent in the API request body: { "name": "my-sample-pipeline", "artifact": { "name": "delta-app", "version": "0.6.2", "scope": "SYSTEM" }, "config": { "connections": [ { "from": "Oracle (by Datastream)", "to": "BigQuery" } ], "stages": [ { "name": "Oracle (by Datastream)", "plugin": { "name": "OracleDatastream", "type": "cdcSource", "artifact": { "name": "datastream-delta-plugins", "version": "0.4.2", "scope": "SYSTEM" }, "properties": { "usingExistingStream": "false", "region": "us-central1", "connectivityMethod": "ip-allowlisting", "port": "1521", "sid": "ORCL", "replicateExistingData": "true", "project": "auto-detect", "dsServiceAccountKey": "auto-detect", "gcsServiceAccountKey": "auto-detect", "host": " ", "user": " ", "password": " " } } }, { "name": "BigQuery", "plugin": { "name": "bigquery", "type": "cdcTarget", "artifact": { "name": "bigquery-delta-plugins", "version": "0.6.3", "scope": "SYSTEM" }, "properties": { "project": "auto-detect", "serviceAccountKey": "auto-detect", "stagingBucketLocation": "us", "loadInterval": "90", "stagingTablePrefix": " staging ", "requireManualDrops": "false", "softDeletes": "false", "datasetName": "mysampledataset" } } } ], "tables": [ { "database": "ORCL", "table": "MYTABLE1", "schema": "HR" }, { "database": "ORCL", "table": "MYTABLE2", "schema": "HR" } ], "parallelism": { "numInstances": 1 }, "tableTransformations": [] } } Contents of the replication job config depend on the Cloud Data Fusion instance and plugin versions.
- POST -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name /workers/DeltaWorker/start" Parameter Description namespace-id The namespace of the replication job to start.
- POST -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name /workers/DeltaWorker/stop" Parameter Description namespace-id The namespace of the replication job to stop.
- If your pipeline belongs to a Basic edition instance, the namespace ID is always default . replicator-name Replicator name See the CDAP application detail API for more information.

