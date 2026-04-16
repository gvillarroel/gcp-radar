---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:45.370Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "SAP Table Reader plugin snapshot mode cleanup handling"
feature_slug: "sap-table-reader-plugin-snapshot-mode-cleanup-handling"
latest_feature_date: "2026-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq"
  - "https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref"
  - "https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data"
keywords:
  - "sap"
  - "table"
  - "reader"
  - "plugin"
  - "snapshot"
  - "mode"
  - "cleanup"
  - "handling"
---

# SAP Table Reader plugin snapshot mode cleanup handling

Product: Cloud Data Fusion
Coverage: MEDIUM

## Step 02 Summary

SAP Table Reader plugin version 0.11.5 fixes the Snapshot mode cleanup process to avoid an unnecessary Job abort failed log error.

## Extended Definition

SAP Table Reader plugin version 0.11.5 fixes the Snapshot mode cleanup process to avoid an unnecessary Job abort failed log error.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq](https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq)
- [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref)
- [https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data](https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data)

## Supporting Pages

### "Use Salesforce batch source plugin to analyze leads data in BigQuery \_\

- URL: [https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq](https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq)
- Source ID: `site-iam-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Extract data from the Salesforce batch source plugin On the Salesforce plugin properties page, in the SOQL query section, enter the following query: Select LastName , FirstName , Company , Email , Phone , LeadSource , Industry , OwnerId , CreatedDate , LastModifiedDate , LastActivityDate from Lead where Status like '%Open%' This query fetches the details of a potential lead required to run a campaign from the sObject Lead .
- To filter the records for a specific date or time for running the campaign, use the following fields: Last modified after Last modified before Duration Offset Transform data using Wrangler plugin Use the Wrangler plugin in Cloud Data Fusion to clean and enrich your data: Go back to the Studio page.
- Verify the data extraction and ingestion In the Google Cloud console, go to the BigQuery page: Go to BigQuery Search for the dataset Salesforce Leads and the table name Incoming Open Leads to view the extracted records.
- Before creating a targeted campaign, to understand your target audience better, you want to use the Salesforce batch source plugin in Cloud Data Fusion to extract specific leads data.

### Replication API reference \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref)
- Source ID: `site-api-reference`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your pipeline belongs to an Enterprise edition instance, you can create a namespace . replicator-name Replicator name Example Config The following (partial) config of the app is sent in the API request body: { "name": "my-sample-pipeline", "artifact": { "name": "delta-app", "version": "0.6.2", "scope": "SYSTEM" }, "config": { "connections": [ { "from": "Oracle (by Datastream)", "to": "BigQuery" } ], "stages": [ { "name": "Oracle (by Datastream)", "plugin": { "name": "OracleDatastream", "type": "cdcSource", "artifact": { "name": "datastream-delta-plugins", "version": "0.4.2", "scope": "SYSTEM" }, "properties": { "usingExistingStream": "false", "region": "us-central1", "connectivityMethod": "ip-allowlisting", "port": "1521", "sid": "ORCL", "replicateExistingData": "true", "project": "auto-detect", "dsServiceAccountKey": "auto-detect", "gcsServiceAccountKey": "auto-detect", "host": " ", "user": " ", "password": " " } } }, { "name": "BigQuery", "plugin": { "name": "bigquery", "type": "cdcTarget", "artifact": { "name": "bigquery-delta-plugins", "version": "0.6.3", "scope": "SYSTEM" }, "properties": { "project": "auto-detect", "serviceAccountKey": "auto-detect", "stagingBucketLocation": "us", "loadInterval": "90", "stagingTablePrefix": " staging ", "requireManualDrops": "false", "softDeletes": "false", "datasetName": "mysampledataset" } } } ], "tables": [ { "database": "ORCL", "table": "MYTABLE1", "schema": "HR" }, { "database": "ORCL", "table": "MYTABLE2", "schema": "HR" } ], "parallelism": { "numInstances": 1 }, "tableTransformations": [] } } Contents of the replication job config depend on the Cloud Data Fusion instance and plugin versions.

### Redact confidential data \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data](https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data)
- Source ID: `site-iam-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Open the IAM page In the permissions table, in the Principal column, find the service account that matches the format service- project-number @gcp-sa-datafusion.iam.gserviceaccount.com .
- Redact sensitive data The Cloud DLP Redact plugin identifies sensitive records in your input stream of data and applies transformations that you define to those records.
- Go to Cloud Storage In the Storage browser , navigate to the sink Cloud Storage bucket you specified in the sink Cloud Storage plugin properties .
- You create a Cloud Data Fusion pipeline that redacts the sensitive customer data by using the Cloud DLP plugin.

