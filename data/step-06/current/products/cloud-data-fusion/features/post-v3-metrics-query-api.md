---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:04:57.772Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "POST /v3/metrics/query API"
feature_slug: "post-v3-metrics-query-api"
latest_feature_date: "2025-03-17"
deprecation_date: "2025-03-17"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/release-notes"
  - "https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference"
  - "https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq"
keywords:
  - "post"
  - "v3"
  - "metrics"
  - "query"
  - "api"
  - "the"
  - "for"
  - "searching"
---

# POST /v3/metrics/query API

Product: Cloud Data Fusion
Coverage: LOW

## Step 02 Summary

The POST v3/metrics/query API for searching or querying metrics was deprecated; deprecated on 2025-03-17.

## Extended Definition

The POST v3/metrics/query API for searching or querying metrics was deprecated; deprecated on 2025-03-17.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- [https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq](https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq)

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
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- POST -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/metrics/query" The body of the HTTP POST request is a JSON object in the following format: { "query": { "tags": { "namespace": "default", "app": " pipeline name ", "workflow": "DataPipelineWorkflow", "run": " run-id " }, "metrics": [ " metric1 name ", " metric2 name ", ... ], "timeRange": { "aggregate": true } } } Query parameter Description / value pipeline name Your pipeline name. run-id To find the run ID, see Batch pipeline run records , which returns a list of run IDs. metric name Metric names follow the format: user. pipeline-stage . metric pipeline-stage is any of the stage names in the body of the HTTP PUT request that you configured when you deployed your pipeline .
- POST -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/metrics/query" The body of the HTTP POST request is a JSON object in the following format: { "query": { "tags": { "namespace": "default", "app": " pipeline name ", "spark": "DataStreamsSparkStreaming", "run": " run-id " }, "metrics": [ " metric1 name ", " metric2 name ", ... ], "timeRange": { "aggregate": true } } } Query parameter Description / value pipeline name Your pipeline name. run-id To find the run ID, call Real-time pipeline run records , which returns a list of run IDs. metric name Metric names follow the format: user. pipeline-stage . metric pipeline-stage is any of the stage names in the body of the HTTP PUT request that you configured when you deployed your pipeline .
- In the following example, BigQuery or GoogleCloudStorage are possible values for pipeline-stage . { "stages": [ { "name": "BigQuery", ... }, { "name": "GoogleCloudStorage", ... }, ... ], ... } metrics can be any of: records.in records.out records.error process.time.total process.time.avg process.time.max process.time.min process.time.stddev For example, the following query gets the records.out and process.time.avg metrics for the BigQuery stage of the batch pipeline, batch-pipeline . { "query": { "tags": { "namespace": "default", "app": "batch-pipeline", "workflow": "DataPipelineWorkflow", "run": "81e3d583-f68b-11e9-aba0-0242b9f29569" }, "metrics": [ "user.BigQuery.records.out", "user.BigQuery.process.time.avg" ], "timeRange": { "aggregate": true } } } For more information, see CDAP Metrics Microservices and Cloud Data Fusion flow control .
- In the following example, BigQuery or GoogleCloudStorage are possible values for pipeline-stage . { "stages": [ { "name": BigQuery, "name": GoogleCloudStorage }, ... ], ... } metrics can be any of: records.in records.out records.error process.time.total process.time.avg process.time.max process.time.min process.time.stddev For example, the following query gets the records.out and process.time.avg metrics for the BigQuery stage of the real-time pipeline, rt-pipeline . { "query": { "tags": { "namespace": "default", "app": "rt-pipeline", "spark": "DataStreamsSparkStreaming", "run": "81e3d583-f68b-11e9-aba0-0242b9f29570" }, "metrics": [ "user.BigQuery.records.out", "user.BigQuery.process.time.avg" ], "timeRange": { "aggregate": true } } } For more information, see Metrics HTTP RESTful API and Cloud Data Fusion flow control .

### "Use Salesforce batch source plugin to analyze leads data in BigQuery \_\

- URL: [https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq](https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq)
- Source ID: `site-iam-reference`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Extract data from the Salesforce batch source plugin On the Salesforce plugin properties page, in the SOQL query section, enter the following query: Select LastName , FirstName , Company , Email , Phone , LeadSource , Industry , OwnerId , CreatedDate , LastModifiedDate , LastActivityDate from Lead where Status like '%Open%' This query fetches the details of a potential lead required to run a campaign from the sObject Lead .
- Transform the data with the required directives: keep :LastName,:FirstName,:Company,:Phone,:Email,:LeadSource,:OwnerId, :CreatedDate,:LastModifiedDate,:LastActivityDatemerge :FirstName :LastName :Name ' ' fill-null-or-empty :Email 'no email found' mask-number :Phone ########xxxxxxxx format-date :LastActivityDate yyyy-MM-dd HH:mm:ss drop :LastName,:FirstName Load data into BigQuery Go back to the Studio page.
- Verify the data extraction and ingestion In the Google Cloud console, go to the BigQuery page: Go to BigQuery Search for the dataset Salesforce Leads and the table name Incoming Open Leads to view the extracted records.
- Use Salesforce batch source plugin to analyze leads data in BigQuery Learn how to use the Salesforce batch source plugin in Cloud Data Fusion to analyze leads data in BigQuery.

