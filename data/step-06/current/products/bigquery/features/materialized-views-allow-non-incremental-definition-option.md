---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.477Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Materialized views allow_non_incremental_definition option"
feature_slug: "materialized-views-allow-non-incremental-definition-option"
latest_feature_date: "2024-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view"
keywords:
  - "materialized"
  - "views"
  - "allow"
  - "non"
  - "incremental"
  - "definition"
  - "option"
  - "lets"
---

# Materialized views allow_non_incremental_definition option

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The allow_non_incremental_definition option lets materialized views support a wider range of SQL queries.

## Extended Definition

The allow_non_incremental_definition option lets materialized views support a wider range of SQL queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- The allow non incremental definition property can't be changed after the materialized view is created. kms key name STRING Example: kms key name="projects/ project id /locations/ location /keyRings/ keyring /cryptoKeys/ key " This property is equivalent to the encryptionConfiguration.kmsKeyName table resource property.
- The allow non incremental definition property can't be changed after the materialized view is created. kms key name STRING Example: kms key name="projects/ project id /locations/ location /keyRings/ keyring /cryptoKeys/ key " This property is equivalent to the encryptionConfiguration.kmsKeyName table resource property.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- If you create a Spanner connection and want to use Data Boost , include the "useParallelism":true and "useDataBoost":true pairs. --connection credential= CONNECTION CREDENTIAL The credentials of the connection in JSON format. username and password must be specified. --project id= PROJECT ID Specifies the ID of the project that the connection belongs to. --location= LOCATION Specifies the location that the connection will be stored. --display name= DISPLAY NAME Specifies an optional friendly name for the connection. --description= DESCRIPTION Specifies an optional description of the connection. --iam role id= ROLE ID For BigQuery Omni on AWS, specifies an IAM role that allows access to the resource.
- Synopsis bq load [ FLAGS ] DESTINATION TABLE SOURCE DATA [ SCHEMA ] Example bq load myDataset.newTable gs://mybucket/info.csv ./info schema.json Flags and arguments The bq load command uses the following flags and arguments: --allow jagged rows={true false} To allow missing trailing optional columns in CSV data, set to true . --preserve ascii control characters={true false} To allow embedded ASCII control characters in CSV data, set to true . --allow quoted newlines={true false} To allow quoted newlines in CSV data, set to true . --autodetect={true false} To enable schema auto-detection for CSV and JSON data, set to true .
- For example: --external table definition=myTable::/tmp/tabledef --external table definition=myTable::Region:STRING,Quarter:STRING,Total sales:INTEGER@CSV=gs://mybucket/sales.csv Repeat this flag to query multiple tables. --flatten results={true false} To disallow flattening nested and repeated fields in the results for legacy SQL queries, set to false .
- Use one of the following values: ALLOW FIELD ADDITION : Allow new fields to be added ALLOW FIELD RELAXATION : Allow relaxing REQUIRED fields to NULLABLE Repeat this flag to specify multiple schema update options. --skip leading rows= NUMBER OF ROWS An integer that specifies the number of rows to skip at the beginning of the source file.

### Create materialized view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view)
- Source ID: `site-docs-reference-required-15`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting" , pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "my materialized view" materialized view { query = "SELECT ID, description, date created FROM myproject.orders.items" enable refresh = "true" refresh interval ms = 172800000 # 2 days allow non incremental definition = "false" } } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId tableId = TableId . of ( datasetName , materializedViewName ); MaterializedViewDefinition materializedViewDefinition = MaterializedViewDefinition . newBuilder ( query ). build (); bigquery . create ( TableInfo . of ( tableId , materializedViewDefinition )); System . out . println ( "Materialized view created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Materialized view was not created. \n" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Explore further For detailed documentation that includes this code sample, see the following: Create materialized views Code sample Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .
- MaterializedViewDefinition ; import com.google.cloud.bigquery.

