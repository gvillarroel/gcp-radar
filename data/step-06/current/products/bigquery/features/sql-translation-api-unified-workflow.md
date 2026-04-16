---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.502Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "SQL translation API unified workflow"
feature_slug: "sql-translation-api-unified-workflow"
latest_feature_date: "2024-02-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/api-sql-translator"
keywords:
  - "sql"
  - "translation"
  - "unified"
  - "workflow"
  - "combines"
  - "interactive"
  - "batch"
  - "into"
---

# SQL translation API unified workflow

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The SQL translation API combines interactive and batch translation into a single workflow for translation jobs.

## Extended Definition

The SQL translation API combines interactive and batch translation into a single workflow for translation jobs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)

## Supporting Pages

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The batch SQL translator can translate the following SQL dialects into GoogleSQL: Amazon Redshift SQL Apache HiveQL and Beeline CLI IBM Netezza SQL and NZPLSQL Teradata and Teradata Vantage: SQL Basic Teradata Query (BTEQ) Teradata Parallel Transport (TPT) Additionally, translation of the following SQL dialects is supported in preview : Apache Impala SQL Apache Spark SQL Azure Synapse T-SQL GoogleSQL (BigQuery) Greenplum SQL IBM DB2 SQL MySQL SQL Oracle SQL, PL/SQL, Exadata PostgreSQL SQL Trino or PrestoSQL Snowflake SQL SQL Server T-SQL SQLite Vertica SQL Important: Translation is done on a best effort basis.
- To start an interactive SQL translation by using a batch translation configuration ID, follow these steps: In the Google Cloud console, go to the SQL Translation page.
- To debug a batch translation file in the interactive SQL translator, follow these steps: In the Google Cloud console, go to the SQL Translation page.
- You see the input and output files populated in the interactive SQL translator that now uses the corresponding batch translation configuration ID.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery Integration Query Results Save Detection Google Cloud Monitoring Partner Advantage page Direct link Datafold Solution Datafold Category Data Quality, Observability, & FinOps Description Datafold is the unified platform for proactive data quality that combines automated data testing, data reconciliation, and observability to help data teams prevent data quality issues and accelerate their development velocity.
- Partner references Connect to a Google BigQuery database from Preset PuppyGraph Solution PuppyGraph Category BI, ML, & Advanced Analytics Description PuppyGraph is the first and only graph analytics engine in the market, empowering companies to transform existing relational data stores into a unified graph model in under 10 minutes, bypassing traditional graph database costs, latency, and maintenance hurdles.
- Partner references BigQuery Integration in Datafold OAuth integration into BigQuery Decube Solution Data Trust Platform Category Data Quality, Observability, & FinOps Description Decube is a unified platform that integrates with your data stack enabling you to effortlessly monitor, manage, and govern your data assets with its Data Observability, Catalog and Governance modules.
- Partner references BigQuery Sync Connector Aiven and BigQuery ML Try Aiven for BigQuery Partner Advantage page Direct link Alteryx Designer Cloud Solution Alteryx Designer Cloud Category ETL & Data Integration Description Alteryx Designer Cloud is a unified, workflow-based analytics platform with a drag-and-drop experience.

### "Translate SQL queries with the translation API \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Locations The translation API is available in the following processing locations: Region description Region name Details Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 EU multi-region eu Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Americas Columbus, Ohio us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Québec northamerica-northeast1 Low CO 2 São Paulo southamerica-east1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 US multi-region us Africa Johannesburg africa-south1 MiddleEast Dammam me-central2 Doha me-central1 Israel me-west1 Submit a translation job To submit a translation job using the translation API, use the projects.locations.workflows.create method and supply an instance of the MigrationWorkflow resource with a supported task type .
- If the task succeeds, you will find the translated SQL in the response message: { "name" : "projects/123456789/locations/us/workflows/12345678-9abc-def1-2345-6789abcdef00" , "tasks" : { "string" : { "id" : "0fedba98-7654-3210-1234-56789abcdef" , "type" : "HiveQL2BigQuery Translation" , / ... / "taskResult" : { "translationTaskResult" : { "translatedLiterals" : [ { "relativePath" : "sql/input file" , "literalString" : "-- Translation time: 2023-10-05T21:50:49.885839Z\n-- Translation job ID: projects/123456789/locations/us/workflows/12345678-9abc-def1-2345-6789abcdef00\n-- Source: input file\n-- Translated from: Hive\n-- Translated to: BigQuery\n\nSELECT\n 1\n;\n" } ], "reportLogMessages" : [ ... ] } }, / ... / } }, "state" : "COMPLETED" , "createTime" : "2023-10-05T21:50:49.543221Z" , "lastUpdateTime" : "2023-10-05T21:50:50.462758Z" } Explore the translation output After running the translation job, retrieve the results by specifying the translation job workflow ID using the following command: curl \ -H "Content-Type:application/json" \ -H "Authorization:Bearer TOKEN " -X GET https://bigquerymigration.googleapis.com/v2alpha/projects/ PROJECT ID /locations/ LOCATION /workflows/ WORKFLOW ID Replace the following: TOKEN : the token for authentication.
- Supported task types The translation API can translate the following SQL dialects into GoogleSQL: Amazon Redshift SQL - Redshift2BigQuery Translation Apache HiveQL and Beeline CLI - HiveQL2BigQuery Translation Apache Impala - Impala2BigQuery Translation Apache Spark SQL - SparkSQL2BigQuery Translation Azure Synapse T-SQL - AzureSynapse2BigQuery Translation GoogleSQL (BigQuery) - Bigquery2Bigquery Translation Greenplum SQL - Greenplum2BigQuery Translation IBM Db2 SQL - Db22BigQuery Translation IBM Netezza SQL and NZPLSQL - Netezza2BigQuery Translation MySQL SQL - MySQL2BigQuery Translation Oracle SQL, PL/SQL, Exadata - Oracle2BigQuery Translation PostgreSQL SQL - Postgresql2BigQuery Translation Presto or Trino SQL - Presto2BigQuery Translation Snowflake SQL - Snowflake2BigQuery Translation SQLite - SQLite2BigQuery Translation SQL Server T-SQL - SQLServer2BigQuery Translation Teradata and Teradata Vantage - Teradata2BigQuery Translation Vertica SQL - Vertica2BigQuery Translation Handling unsupported SQL functions with helper UDFs When translating SQL from a source dialect to BigQuery, some functions might not have a direct equivalent.
- The source target mapping field contains a list that maps the source directories to an optional relative path for the target output. curl -d "{ \"tasks\": { string: { \"type\": \" TYPE \", \"translation details\": { \"source target mapping\": { \"source spec\": { \"literal\": { \"relative path\": \" PATH \", \"literal string\": \" STRING \" } } }, \"target return literals\": \" TARGETS \", } } } }" \ -H "Content-Type:application/json" \ -H "Authorization: Bearer TOKEN " -X POST https://bigquerymigration.googleapis.com/v2alpha/projects/ PROJECT ID /locations/ LOCATION /workflows Replace the following: TYPE : the task type of the translation, which determines the source and target dialect.

