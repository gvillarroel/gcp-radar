---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.850Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML DROP MODEL statement"
feature_slug: "bigquery-ml-drop-model-statement"
latest_feature_date: "2019-05-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
keywords:
  - "DROP MODEL IF EXISTS"
  - "IF EXISTS"
  - "remove ML model"
  - "BigQuery ML DROP MODEL"
  - "DROP MODEL statement"
  - "model deletion"
  - "delete model"
  - "DROP MODEL"
---

# BigQuery ML DROP MODEL statement

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML now supports the DROP MODEL DDL statement for removing trained models.

## Extended Definition

BigQuery ML now supports the DROP MODEL DDL statement for removing trained models.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Syntax ALTER DATA POLICY [ IF EXISTS ] project id.region-location id.data policy id SET OPTIONS ( alter option list ); Arguments IF EXISTS : If no data policy exists with that name, the statement has no effect. project id : The project ID of the project where the data policy will reside in. location id : The location of the data policy. data policy id : The name of the data policy to be updated. alter option list : The list of options to update on the data policy. alter option list The option list specifies options for the data policy.
- Example The following example deletes the my cloud resource connection connection: DROP CONNECTION IF EXISTS us.my cloud resource connection ; Table path syntax Use the following syntax when specifying the path of a table resource , including standard tables, views, materialized views, external tables, and table snapshots. table path := [[ project name . ] dataset name . ] table name project name : The name of the project that contains the table resource.
- Syntax DROP ASSIGNMENT [ IF EXISTS ] project id . location . reservation id . assignment id Arguments IF EXISTS : If no assignment exists with that ID, the statement has no effect. project id : The project ID of the administration project where the reservation was created. location : The location of the reservation. reservation id : The reservation ID. assignment id : The assignment ID.
- Syntax DROP CAPACITY [ IF EXISTS ] project id . location . capacity - commitment - id Arguments IF EXISTS : If no capacity commitment exists with that ID, the statement has no effect. project id : The project ID of the administration project where the reservation was created. location : The location of the commitment. capacity-commitment-id : The capacity commitment ID.

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Permission Description bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData Create a new model using CREATE MODEL statement bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData bigquery.models.updateMetadata Replace an existing model using CREATE OR REPLACE MODEL statement bigquery.models.delete Delete model using models.delete API bigquery.jobs.create bigquery.models.delete Delete model using DROP MODEL statement bigquery.models.getMetadata Get model metadata using models.get API bigquery.models.list List models and metadata on models using models.list API bigquery.models.updateMetadata Update model metadata using models.delete API.

