---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.829Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service Teradata migrations"
feature_slug: "bigquery-data-transfer-service-teradata-migrations"
latest_feature_date: "2019-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "bigquery"
  - "transfer"
  - "teradata"
  - "migrations"
  - "supports"
  - "database"
  - "migration"
  - "agent"
---

# BigQuery Data Transfer Service Teradata migrations

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service supports database migration from Teradata to BigQuery with a migration agent.

## Extended Definition

BigQuery Data Transfer Service supports database migration from Teradata to BigQuery with a migration agent.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial](https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### Migrating Teradata to BigQuery tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial](https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This quickstart is intended for data warehouse administrators, developers, and data practitioners in general who are interested in a hands-on experience with a schema and data migration using the BigQuery Data Transfer Service.
- Verifying query results At this point you've created sample data, uploaded the data to Teradata, and then migrated it to BigQuery using the BigQuery Data Transfer Service, as explained in the separate tutorial.
- Make sure that the machine has network connectivity with Google Cloud for the BigQuery Data Transfer Service agent to communicate with BigQuery and transfer the schema and data.
- It provides a proof-of-concept that walks you through the process of transferring both schema and data from a Teradata data warehouse to BigQuery.

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-api-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- The service account should belong to the same Google Cloud project where the transfer configuration and destination dataset is created. bq To schedule Hive Metastore transfer, enter the bq mk command and supply the transfer creation flag --transfer config : bq mk --transfer config --data source = hadoop display name = ' TRANSFER NAME ' --service account name = ' SERVICE ACCOUNT ' --project id = ' PROJECT ID ' location = ' REGION ' --params = '{ "transfer strategy":" TRANSFER STRATEGY ", "table name patterns":" LIST OF TABLES ", "table metadata path":"gs:// DUMPER BUCKET /hive-dumper-output.zip", "target gcs file path":"gs:// MIGRATION BUCKET ", "metastore":" METASTORE ", "destination dataproc metastore":" DATAPROC METASTORE URL ", "destination bigquery dataset":" BIGLAKE METASTORE DATASET ", "translation output gcs path":"gs:// TRANSLATION OUTPUT BUCKET /metadata/config/default database/", "storage type":" STORAGE TYPE ", "agent pool name":" AGENT POOL NAME ", "aws access key id":" AWS ACCESS KEY ID ", "aws secret access key":" AWS SECRET ACCESS KEY ", "azure sas token":" AZURE SAS TOKEN ", "partition filter gcs path":" FILTER GCS PATH " }' Replace the following: TRANSFER NAME : the display name for the transfer configuration.
- If you are using a service account, grant the service agent the roles/iam.serviceAccountTokenCreator role with the following command: gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT --member serviceAccount:service- PROJECT NUMBER @gcp-sa-bigquerydatatransfer.iam.gserviceaccount.com --role roles/iam.serviceAccountTokenCreator Grant the Storage Transfer Service service agent ( project- PROJECT NUMBER @storage-transfer-service.iam.gserviceaccount.com ) the following roles in the project: roles/storage.admin If you are migrating from on-prem/HDFS, you must also grant the roles/storagetransfer.serviceAgent role.
- The Apache Hive Metastore migration connector in the BigQuery Data Transfer Service lets you seamlessly migrate your Hive Metastore tables to Google Cloud at scale.
- Run the API request with the following information: GET https://bigquerydatatransfer.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /transferConfigs/ CONFIG ID /transferResources Example Response (abridged) (JSON): { "transferResources": [ { "name": "projects/.../transferResources/table1", "latestStatusDetail": { "state": "RESOURCE TRANSFER SUCCEEDED", "completedPercentage": 100.0 }, "updateTime": "2026-02-03T22:42:06Z" } ] } curl command: curl -X GET "https://bigquerydatatransfer.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /transferConfigs/ CONFIG ID /transferResources" -H "Authorization: Bearer $( gcloud auth print-access-token ) " -H "Accept: application/json" You can filter the results by resource name or state.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery agent BigQuery Agent Example Partner Advantage page Direct link Vanna.ai Solution Vanna.ai Category BI, ML, & Advanced Analytics Description Vanni.ai is the Leading open source Python package to query large SQL databases in natural language at production scale with access control that's auditable, accurate, fast, and locally deployable so that code is transparent, results are useful and immediate, and data never leaves your premise.
- Partner references Automic BigQuery Agent Automic Automation Cloud Integrations: BigQuery Agent Integration Partner Advantage page Direct link CaliberMind Solution CaliberMind Category ETL & Data Integration Description CaliberMind is a centralized database and workflow engine for your enterprise business, allowing savvy marketers to unlock revenue and better customer experiences.
- Partner references Drive Meaningful Insights from BigQuery CData Solution SQL Server Integration Services (SSIS) component for BigQuery Category ETL & Data Integration Description SQL Server Integration Services (SSIS) is a component of the Microsoft SQL Server database software that can be used to perform a broad range of data migration tasks.
- Partner references Google BigQuery Integration View data in BigQuery Product & Behavioral Analytics on Google BigQuery Optimizely's partnership with Google Cloud Partner Advantage page Direct link Numberstation Solution Numbersstation.ai Category BI, ML, & Advanced Analytics Description Numbers Station leverages a multi-agent architecture built with specialized agents to reason through complex questions, building end-to-end analytics solutions and democratizing data by delivering insights where and when you need them.

