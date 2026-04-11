---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.614Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data Quality tasks"
feature_slug: "data-quality-tasks"
latest_feature_date: "2022-04-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/check-data-quality"
  - "https://docs.cloud.google.com/dataplex/docs/data-quality-tasks-overview"
  - "https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality"
keywords:
  - "quality"
  - "tasks"
  - "run"
  - "validations"
  - "on"
  - "tables"
  - "including"
  - "outside"
---

# Data Quality tasks

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Data Quality tasks run data quality validations on BigQuery tables, including tables outside a Dataplex lake and GCS data exposed as BigQuery external tables.

## Extended Definition

Data Quality tasks run data quality validations on BigQuery tables, including tables outside a Dataplex lake and GCS data exposed as BigQuery external tables.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/check-data-quality](https://docs.cloud.google.com/dataplex/docs/check-data-quality)
- [https://docs.cloud.google.com/dataplex/docs/data-quality-tasks-overview](https://docs.cloud.google.com/dataplex/docs/data-quality-tasks-overview)
- [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)

## Supporting Pages

### Use data quality tasks \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/check-data-quality](https://docs.cloud.google.com/dataplex/docs/check-data-quality)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This document shows you how to create Knowledge Catalog data quality tasks that let you schedule and run data quality checks for your built-in and external BigQuery tables.
- The dataset must be in the same region as the tables that you run the data quality task on.
- This is a convenience section that allows you to shorten the entity uri metadata registry defaults : dataplex : projects : PROJECT ID locations : REGION ID lakes : operations zones : procurement You have to define a NONE row filter row filters : NONE : filter sql expr : - True INTERNATIONAL ITEMS : filter sql expr : - REGEXP CONTAINS(item id, 'INTNL') rule dimensions are optional but allow you to aggregate reporting. rule dimensions : - consistency - correctness - duplication - completeness - conformance - integrity Rules can be shared across tables or columns. rules : This rule is parameterized with column names as parameter NO DUPLICATES IN COLUMN GROUPS : rule type : CUSTOM SQL STATEMENT dimension : duplication params : custom sql arguments : - column names custom sql statement : - select a. from data a inner join ( select $column names from data group by $column names having count( ) > 1 ) duplicates using ($column names) VALUE ZERO OR POSITIVE : rule type : CUSTOM SQL EXPR dimension : correctness params : custom sql expr : - $column >= 0 VALID ITEM ID : rule type : REGEX dimension : conformance params : pattern : - [A-Z]{5}[0-9]{15} VALID CURRENCY ID : rule type : CUSTOM SQL EXPR dimension : integrity params : custom sql expr : - $column in ('GBP', 'JPY') #rule bindings associate rules to {table, column} rule bindings : TRANSACTIONS UNIQUE : entity uri : dataplex://projects/ PROJECT ID /locations/ REGION ID /lakes/operations/zones/procurement/entities/sales orders column id : id row filter id : NONE rule ids : - NO DUPLICATES IN COLUMN GROUPS : column names : "id" TRANSACTION AMOUNT VALID : entity uri : dataplex://zones/procurement/entities/sales orders # omitting projects/locations/lakes from uri path to use the default values specified in metadata registry defaults column id : amount row filter id : NONE rule ids : - VALUE ZERO OR POSITIVE TRANSACTION VALID ITEM ID : entity uri : dataplex://zones/procurement/entities/sales orders column id : item id row filter id : NONE rule ids : - VALID ITEM ID TRANSACTION CURRENCY VALID : entity uri : dataplex://zones/procurement/entities/sales orders column id : transaction currency row filter id : INTERNATIONAL ITEMS rule ids : - VALID CURRENCY ID Sample 4 This example enhances Sample 3 by adding incremental validations using the last modified timestamp column.
- API Replace the following: PROJECT ID = "Your Knowledge Catalog Project ID" REGION = "Your Knowledge Catalog lake region" LAKE ID = "Your Knowledge Catalog lake ID" SERVICE ACC = "Your service account used for reading the data" DATAPLEX TASK ID = "Unique task ID for the data quality task" BUCKET NAME = "Your Cloud Storage bucket name containing the CloudDQ configs or YAML specification" GCP BQ BILLING PROJECT ID = "Your BigQuery billing project" GCP BQ REGION ID = "Your BigQuery dataset region ID" #Optional GCP BQ DATASET ID = "Your BigQuery dataset to store the data quality summary results" TARGET TABLE NAME = "Your target table name to store the results in BigQuery dataset" Submit an HTTP POST request: POST https://dataplex.googleapis.com/v1/projects/${PROJECT ID}/locations/${REGION}/lakes/${LAKE ID}/tasks?task id=${DATAPLEX TASK ID} { "spark": { "python script file": f"gs://dataplex-clouddq-artifacts-us-central1/clouddq pyspark driver.py", "file uris": [ f"gs://dataplex-clouddq-artifacts-us-central1/clouddq-executable.zip", f"gs://dataplex-clouddq-artifacts-us-central1/clouddq-executable.zip.hashsum", f"gs://dataplex-clouddq-artifacts-us-central1/your-clouddq-configs.zip" ] }, "execution spec": { "args": { "TASK ARGS":f"clouddq-executable.zip, ALL, gs://BUCKET NAME/your-clouddq-configs.zip, --gcp project id=${GCP BQ BILLING PROJECT ID}, --gcp region id=${GCP BQ REGION ID}, --gcp bq dataset id=${GCP BQ DATASET ID}, --target bigquery summary table=${GCP BQ BILLING PROJECT ID}.${GCP BQ DATASET ID}.${TARGET TABLE NAME}" }, "service account": "SERVICE ACC" }, "trigger spec": { "type": "ON DEMAND" }, "description": "${DATAPLEX TASK DESCRIPTION}" } See also Sample Airflow DAG for Knowledge Catalog data quality task .

### Data quality tasks overview \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/data-quality-tasks-overview](https://docs.cloud.google.com/dataplex/docs/data-quality-tasks-overview)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Similar to other Knowledge Catalog tasks , the Knowledge Catalog data quality task runs on a serverless Spark environment, converts the YAML specification to BigQuery queries, and then runs those queries on the tables that are defined in the specification file.
- Knowledge Catalog data quality tasks let you define and run data quality checks across tables in BigQuery and Cloud Storage.
- How data quality tasks work The following diagram shows how Knowledge Catalog data quality tasks work: Input from users YAML specification : A set of one or more YAML files that define data quality rules based on the specification syntax.
- Home Documentation Data analytics Knowledge Catalog Guides Send feedback Data quality tasks overview Stay organized with collections Save and categorize content based on your preferences.

### Use auto data quality \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to run and manage data quality scans: Run a data quality scan on a BigQuery table: bigquery.jobs.create on the project to run scan jobs bigquery.tables.get on the BigQuery table to be scanned bigquery.tables.getData on the BigQuery table to be scanned Publish data quality scan results to Knowledge Catalog: bigquery.tables.update on the scanned table dataplex.entryGroups.useDataQualityScorecardAspect on the @bigquery entry group in the same location as the table Create a DataScan : dataplex.datascans.create on the project Delete a DataScan : dataplex.datascans.delete on the project View DataScan metadata: dataplex.datascans.get on the project View DataScan details including rules and results: dataplex.datascans.getData on the project List DataScan s: dataplex.datascans.list on the project Run a DataScan : dataplex.datascans.run on the project Update a DataScan : dataplex.datascans.update on the project Get or set IAM policy on a DataScan : dataplex.datascans.getIamPolicy on the project dataplex.datascans.setIamPolicy on the project You might also be able to get these permissions with custom roles or other predefined roles .
- User roles and permissions To get the permissions that you need to run and manage data quality scans, ask your administrator to grant you the following IAM roles: Run a data quality scan on a BigQuery table: BigQuery Job User ( roles/bigquery.jobUser ) on the project to run scan jobs BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the BigQuery table to be scanned Publish data quality scan results to Knowledge Catalog: BigQuery Data Editor ( roles/bigquery.dataEditor ) on the scanned table Dataplex Catalog Editor ( roles/dataplex.catalogEditor ) on the @bigquery entry group in the same location as the table Perform specific tasks on DataScan resources: Dataplex DataScan Administrator ( roles/dataplex.dataScanAdmin ) on the project for full access Dataplex DataScan Creator ( roles/dataplex.dataScanCreator ) on the project to create scans Dataplex DataScan Editor ( roles/dataplex.dataScanEditor ) on the project for write access Dataplex DataScan Viewer ( roles/dataplex.dataScanViewer ) on the project to read scan metadata Dataplex DataScan DataViewer ( roles/dataplex.dataScanDataViewer ) on the project to read scan data including rules and results For more information about granting roles, see Manage access to projects, folders, and organizations .
- When you use the gcloud CLI to create or update a data quality scan, you can use a YAML file like this as input to the --data-quality-spec-file argument. rules : - uniquenessExpectation : {} column : transaction id dimension : UNIQUENESS - nonNullExpectation : {} column : amount dimension : COMPLETENESS threshold : 1 - regexExpectation : regex : '^[0-9]{8}[a-zA-Z]{16}$' column : customer id ignoreNull : true dimension : VALIDITY threshold : 1 - setExpectation : values : - 'USD' - 'JPY' - 'INR' - 'GBP' - 'CAN' column : currency id ignoreNull : true dimension : VALIDITY threshold : 1 - rangeExpectation : minValue : '0' maxValue : '100' column : discount pct ignoreNull : true dimension : VALIDITY threshold : 1 - rowConditionExpectation : sqlExpression : 0 < discount pct AND discount pct < 100 column : discount pct dimension : VALIDITY threshold : 1 - rowConditionExpectation : sqlExpression : currency id in (select id from my project id.dim dataset.dim currency) column : currency id dimension : VALIDITY threshold : 1 - tableConditionExpectation : sqlExpression : 30 < avg(discount pct) AND avg(discount pct) < 50 dimension : VALIDITY - rowConditionExpectation : sqlExpression : TIMESTAMP(transaction timestamp) < CURRENT TIMESTAMP() column : transaction timestamp dimension : VALIDITY threshold : 1 - sqlAssertion : sqlStatement : SELECT FROM my project id.dim dataset.dim currency WHERE discount pct > 100 dimension : VALIDITY debugQueries : - sqlStatement : SELECT MAX(discount pct) FROM my project id.dim dataset.dim currency samplingPercent : 50 rowFilter : discount pct > 100 postScanActions : bigqueryExport : resultsTable : projects/my project id/datasets/dim dataset/tables/dim currency notificationReport : recipients : emails : - '222larabrown@gmail.com' - 'cloudysanfrancisco@gmail.com' scoreThresholdTrigger : scoreThreshold : 50 jobFailureTrigger : {} jobEndTrigger : {} catalogPublishingEnabled : true Configure execution identity By default, data quality scans run using the Knowledge Catalog service account.
- The Overview section displays information about the most recent jobs, including when the scan was run, the number of records scanned in each job, whether all the data quality checks passed, and if there were failures, the number of data quality checks that failed.

