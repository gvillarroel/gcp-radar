---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.684Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "SQL object name mapping"
feature_slug: "sql-object-name-mapping"
latest_feature_date: "2022-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
  - "https://docs.cloud.google.com/bigquery/docs/batch-loading-data"
keywords:
  - "sql"
  - "object"
  - "name"
  - "mapping"
  - "tools"
  - "improve"
  - "accuracy"
  - "batch"
---

# SQL object name mapping

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

SQL object name mapping tools improve the accuracy of batch SQL translation jobs by mapping source and target object names.

## Extended Definition

SQL object name mapping tools improve the accuracy of batch SQL translation jobs by mapping source and target object names.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)

## Supporting Pages

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- The rules in this file might differ from the output name mapping rules that you specified for the translation job, due to either conflicts in the name mapping rules, or lack of name mapping rules for SQL objects that were identified during translation.
- Debug batch translated SQL queries with the interactive SQL translator You can use the BigQuery interactive SQL translator to review or debug a SQL query using the same metadata or object mapping information as your source database.
- After you complete a batch translation job, BigQuery generates a translation configuration ID that contains information about the job's metadata, the object mapping, or the schema search path, as applicable to the query.
- Locations The batch SQL translator is available in the following processing locations: Region description Region name Details Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 EU multi-region eu Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Americas Columbus, Ohio us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Québec northamerica-northeast1 Low CO 2 São Paulo southamerica-east1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 US multi-region us Africa Johannesburg africa-south1 MiddleEast Dammam me-central2 Doha me-central1 Israel me-west1 Submit a translation job Follow these steps to start a translation job, view its progress, and see the results.

### "Transform SQL translations using configuration YAML files \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- Source ID: `site-docs-reference-5`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- The following configuration YAML changes the output names of all objects (database, schema, relation, and attributes) in the script according to the configured rules. type : experimental object rewriter global : outputName : regex : - match : '\s' replaceWith : ' ' - match : '>=' replaceWith : 'gte' - match : '^[^a-zA-Z ]. ' replaceWith : ' $0' A SQL translation with this configuration YAML file might look like the following: teradata-input.sql create table "test special chars >= 12" ( "42eid" int , "custom column" varchar ( 10 )); bq-output.sql CREATE TABLE test special chars employees gte 12 ( 42eid INT64 , custom column STRING ) ; Optimize and improve the performance of translated SQL Optional transformations can be applied to translated SQL in order to introduce changes that can improve performance or cost.
- The following configuration YAML changes the name of the table from my db.my schema.my table to my new db.my schema.my new table . type : experimental object rewriter relation : - match : "my db.my schema.my table" outputName : database : "my new db" relation : "my new table" A SQL translation with this configuration YAML file might look like the following: teradata-input.sql create table my db . my schema . my table ( a int ); bq-output.sql CREATE TABLE my new db . my schema . my new table ( a INT64 ) You can use static name mapping to update the region used by names in the public user-defined functions .
- The following example changes the names in the bqutil.fn UDF from using the default us multi-region to using the europe west2 region: type : experimental object rewriter function : - match : database : bqutil schema : fn outputName : database : bqutil schema : fn europe west2 Dynamic name mapping Use dynamic name mapping to change several objects at the same time, and create new names based on the mapped objects.
- The following configuration YAML changes the name of all tables by adding the prefix stg to those that belong to the staging schema, and then moves those tables to the production schema. type : experimental object rewriter relation : - match : schema : staging outputName : schema : production relation : "stg ${relation}" A SQL translation with this configuration YAML file might look like the following: teradata-input.sql create table staging . my table ( a int ); bq-output.sql CREATE TABLE production . stg my table ( a INT64 ) ; Specifying default database and schema search path Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### Batch loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- Source ID: `site-docs-reference-5`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Use of the asterisk wildcard must follow these rules: The asterisk can appear inside the object name or at the end of the object name.
- For example, the following resource path, though valid in Cloud Storage, does not work in BigQuery: gs:// bucket /my//object//name .
- The Cloud Storage resource path contains your bucket name and your object (filename).
- Cloud Storage object names can contain multiple consecutive slash ("/") characters.

