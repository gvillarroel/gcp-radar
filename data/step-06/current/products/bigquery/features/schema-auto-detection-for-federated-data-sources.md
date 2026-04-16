---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.919Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Schema auto-detection for federated data sources"
feature_slug: "schema-auto-detection-for-federated-data-sources"
latest_feature_date: "2016-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "schema"
  - "auto"
  - "detection"
  - "federated"
  - "sources"
  - "lets"
  - "bigquery"
  - "infer"
---

# Schema auto-detection for federated data sources

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Schema auto-detection for federated data sources lets BigQuery infer CSV and JSON schemas automatically.

## Extended Definition

Schema auto-detection for federated data sources lets BigQuery infer CSV and JSON schemas automatically.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- If you don't include this clause, BigQuery detects the schema automatically. connection name : Specifies a connection resource that has credentials for accessing the external data.
- Schema autodetection will also decide TIMESTAMP column type based on this format instead of the existing format.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Synopsis bq load [ FLAGS ] DESTINATION TABLE SOURCE DATA [ SCHEMA ] Example bq load myDataset.newTable gs://mybucket/info.csv ./info schema.json Flags and arguments The bq load command uses the following flags and arguments: --allow jagged rows={true false} To allow missing trailing optional columns in CSV data, set to true . --preserve ascii control characters={true false} To allow embedded ASCII control characters in CSV data, set to true . --allow quoted newlines={true false} To allow quoted newlines in CSV data, set to true . --autodetect={true false} To enable schema auto-detection for CSV and JSON data, set to true .
- Synopsis bq mkdef [ FLAGS ] URI [ > FILE ] Flags and arguments The bq mkdef command uses the following flags and arguments: --autodetect={true false} Specifies whether to use schema auto-detection for CSV and JSON data.
- You can omit the SCHEMA value if the data format is self-describing (such as Avro) or if you are using schema auto-detection .
- For example, consider files with the following structure: gs://bucket/path to table/dt=2019-06-01/country=USA/id=7/file.avro gs://bucket/path to table/dt=2019-05-31/country=CA/id=3/file.avro If you use AUTO or STRINGS modes, then the following values are acceptable: gs://bucket/path to table gs://bucket/path to table/ If you use CUSTOM mode, then the following values are acceptable: gs://bucket/path to table/{dt:DATE}/{country:STRING}/{id:INTEGER} gs://bucket/path to table/{dt:STRING}/{country:STRING}/{id:INTEGER} gs://bucket/path to table/{dt:DATE}/{country:STRING}/{id:STRING} For more information about using the bq mkdef command, see Creating a table definition file for an external data source . --ignore unknown values={true false} or -i={true false} Specifies whether to ignore any values in a row that are not present in the schema.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Move your data to BigQuery with millisecond latency BigQuery materialization connector BigQuery Batch Query Connector Partner Advantage page Direct link Fivetran Fivetran Data Pipelines Solution Fivetran Data Pipelines Category ETL & Data Integration Description Fivetran is a leader in automated data integration and delivers ready-to-use connectors that automatically adapt as schemas and APIs change, ensuring consistent, reliable access to data.
- Partner references BigQuery Integration Query Results Save Detection Google Cloud Monitoring Partner Advantage page Direct link Datafold Solution Datafold Category Data Quality, Observability, & FinOps Description Datafold is the unified platform for proactive data quality that combines automated data testing, data reconciliation, and observability to help data teams prevent data quality issues and accelerate their development velocity.
- Partner references SnapLogic with BigQuery SnapLogic and Google BigQuery - Bulk loading for high-speed Google analytics Automate Data-driven Insights with SnapLogic and Google BigQuery Partner Advantage page Direct link SqlDBM Solution SqlDBM Category ETL & Data Integration Description SqlDBM is a cloud-native database design and modeling tool that enables teams to develop, document, and manage database schemas collaboratively.
- Partner references Simplify and Automate BigQuery Data Security Adding Google BigQuery data sources Partner Advantage page Direct link Openlayer Solution Openlayer Category Data Governance, Security, & MDM Description Openlayer is an AI governance and observability platform that helps teams validate, track, and monitor machine learning models and AI systems.

