---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.248Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Role-based authorization for stored procedures"
feature_slug: "role-based-authorization-for-stored-procedures"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
  - "https://docs.cloud.google.com/bigquery/docs/authorized-routines"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "role"
  - "based"
  - "authorization"
  - "stored"
  - "procedures"
  - "bigquery"
  - "can"
  - "now"
---

# Role-based authorization for stored procedures

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery stored procedures can now use role-based authorization.

## Extended Definition

BigQuery stored procedures can now use role-based authorization.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- [https://docs.cloud.google.com/bigquery/docs/authorized-routines](https://docs.cloud.google.com/bigquery/docs/authorized-routines)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Authorized routines \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authorized-routines](https://docs.cloud.google.com/bigquery/docs/authorized-routines)
- Source ID: `site-docs-reference-5`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can attach the following roles to a stored procedure: BigQuery Routine Metadata Viewer ( roles/bigquery.routineMetadataViewer ) BigQuery Routine Data Viewer ( roles/bigquery.routineDataViewer ) BigQuery Routine Data Editor ( roles/bigquery.routineDataEditor ) BigQuery Routine Admin ( roles/bigquery.routineAdmin ) Note: You can attach these roles only to stored procedures.
- You can attach the following roles to a stored procedure: BigQuery Routine Metadata Viewer ( roles/bigquery.routineMetadataViewer ) BigQuery Routine Data Viewer ( roles/bigquery.routineDataViewer ) BigQuery Routine Data Editor ( roles/bigquery.routineDataEditor ) BigQuery Routine Admin ( roles/bigquery.routineAdmin ) Note: You can attach these roles only to stored procedures.
- CREATE OR REPLACE FUNCTION public dataset . count key ( input key STRING ) RETURNS INT64 AS (( SELECT COUNT ( 1 ) FROM private dataset . private table t WHERE t . key = input key )); Grant the bigquery.dataViewer role to a user on the public dataset dataset.
- The following types of routines can be authorized: Table functions User-defined functions (UDFs) Stored procedures Caution: Stored procedures authorized as routines have DDL and DML access.

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Since stored procedures can create, drop, and manipulate tables, as well as invoke other stored procedures, additional authorization is needed.
- Subscriber authorization After subscribing to a listing, the linked stored procedures might not be executed directly.
- You can share SQL stored procedures when creating listings with BigQuery datasets.
- Enable the Analytics Hub API gcloud Run the gcloud services enable command: gcloud services enable analyticshub.googleapis.com Required roles To manage listings and subscriptions, you must have one of the following BigQuery sharing Identity and Access Management (IAM) roles: Analytics Hub Publisher role ( roles/analyticshub.publisher ), which lets you create, update, delete, and set IAM policies on your listings.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.
- Required permissions To get the permissions that you need to alter vector indexes, ask your administrator to grant you the BigQuery Data Editor ( roles/bigquery.dataEditor ) or BigQuery Data Owner ( roles/bigquery.dataOwner ) IAM role on your table.

