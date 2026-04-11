---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.804Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery EXPORT DATA statement"
feature_slug: "bigquery-export-data-statement"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery"
keywords:
  - "destination URI"
  - "EXPORT DATA statement"
  - "export query results"
  - "EXPORT DATA options"
  - "EXPORT DATA syntax"
  - "EXPORT DATA"
---

# BigQuery EXPORT DATA statement

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports the EXPORT DATA statement.

## Extended Definition

BigQuery now supports the EXPORT DATA statement.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery)

## Supporting Pages

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly describes exporting table data and query results using the EXPORT DATA statement and its OPTIONS, including format selection behavior.

Evidence snippets:
- TIMESTAMP data types are represented as timestamp-micros logical type (it annotates an Avro LONG type) by default in both Extract jobs and Export Data SQL. (Caution: you can add use avro logical types=False to Export Data Options to disable the logical type so it uses string type instead on timestamp column, but in Extract Jobs, it always uses the Avro logical type.) DATE data types are represented as date logical type (it annotates an Avro INT types) by default in Export Data SQL, but are represented as string type by default in Extract jobs. (Note: you can add use avro logical types=False to Export Data Options to disable the logical type, or use the flag --use avro logical types=True to enable the logical type in Extract jobs.) TIME data types are represented as timestamp-micro logical type (it annotates an Avro LONG types) by default in Export Data SQL, but are represented as string type by default in Extract jobs. (Note: you can add use avro logical types=False to Export Data Options to disable the logical type, or use the flag --use avro logical types=True to enable the logical type in Extract jobs.) DATETIME data types are represented as Avro STRING types (a string type with custom named logical type datetime ) by default in Export Data SQL, but are represented as string type by default in Extract jobs. (Note: you can add use avro logical types=False to Export Data Options to disable the logical type, or use the flag --use avro logical types=True to enable logical type in Extract jobs.) RANGE types aren't supported in Avro export.
- The following example shows how to create a new processed table from an existing table called source table which requires n partitions to achieve the chosen file size: CREATE TABLE my dataset . processed table PARTITION BY RANGE BUCKET ( export id , GENERATE ARRAY ( 0 , n , 1 )) CLUSTER BY export id AS ( SELECT , CAST ( FLOOR ( n RAND ()) AS INT64 ) AS export id FROM my dataset . source table ); For each integer i between 0 and n-1 , run an EXPORT DATA statement on the following query: SELECT EXCEPT ( export id ) FROM my dataset . processed table WHERE export id = i ; Extract compressed table Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .
- Go to BigQuery In the query editor, enter the following statement: EXPORT DATA OPTIONS ( uri = 'gs://bucket/folder/ .csv' , format = 'CSV' , overwrite = true , header = true , field delimiter = ';' ) AS ( SELECT field1 , field2 FROM mydataset . table1 ORDER BY field1 ); Click play circle Run .
- For this reason, we don't recommend using LIMIT clauses in EXPORT DATA statements. bq Use the bq extract command with the --destination format flag. (Optional) Supply the --location flag and set the value to your location .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- You can load or export your data from any region or multi-region to any other region or multi-region using a single bq load , LOAD DATA , bq extract , or EXPORT DATA statement.
- March 26, 2026 Feature You can now use Cloud resource connections with EXPORT DATA statements to reverse ETL BigQuery data to Spanner.
- March 17, 2025 Feature You can now use EXPORT DATA statements to reverse ETL BigQuery data to Spanner .

### "Package com.google.cloud.bigquery (2.62.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery)
- Source ID: `site-java-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Export Data Stats Statistics for the EXPORT DATA statement as part of Query Job.

