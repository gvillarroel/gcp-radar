---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.965Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery CSV export to Cloud Storage"
feature_slug: "bigquery-csv-export-to-cloud-storage"
latest_feature_date: "2011-10-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery"
keywords:
  - "destination URI"
  - "export to GCS"
  - "export table to CSV"
  - "export to Cloud Storage"
  - "query results to CSV"
  - "CSV extract"
  - "CSV export"
  - "EXTRACT job"
---

# BigQuery CSV export to Cloud Storage

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added support for exporting tables or query results to CSV files in Google Cloud Storage.

## Extended Definition

BigQuery added support for exporting tables or query results to CSV files in Google Cloud Storage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery)

## Supporting Pages

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: STRONG
- Re-rank rationale: The page is focused on exporting BigQuery data to Cloud Storage and references format-specific behavior, including limitations specific to CSV exports.

Evidence snippets:
- Use a single wildcard URI if you think your exported data will be larger than the 1 GB maximum value. destination uri = "gs:// #{ bucket name } /output- .csv" extract job = table . extract job destination uri do config Location must match that of the source table. config . location = "US" end extract job . wait until done! # Waits for the job to complete puts "Exported #{ table . id } to #{ destination uri } " end Export table metadata To export table metadata from Iceberg tables , use the following SQL statement: EXPORT TABLE METADATA FROM [[ PROJECT NAME .] DATASET NAME .] TABLE NAME ; Replace the following: PROJECT NAME : the name of the project for the table.
- DatasetReference ( project , dataset id ) table ref = dataset ref . table ( table id ) extract job = client . extract table ( table ref , destination uri , Location must match that of the source table. location = "US" , ) # API request extract job . result () # Waits for job to complete. print ( "Exported {} : {} . {} to {} " . format ( project , dataset id , table id , destination uri ) ) Ruby Before trying this sample, follow the Ruby setup instructions in the BigQuery quickstart using client libraries .
- GZIP extract job = client . extract table ( table ref , destination uri , Location must match that of the source table. location = "US" , job config = job config , ) # API request extract job . result () # Waits for job to complete.
- TIMESTAMP data types are represented as timestamp-micros logical type (it annotates an Avro LONG type) by default in both Extract jobs and Export Data SQL. (Caution: you can add use avro logical types=False to Export Data Options to disable the logical type so it uses string type instead on timestamp column, but in Extract Jobs, it always uses the Avro logical type.) DATE data types are represented as date logical type (it annotates an Avro INT types) by default in Export Data SQL, but are represented as string type by default in Extract jobs. (Note: you can add use avro logical types=False to Export Data Options to disable the logical type, or use the flag --use avro logical types=True to enable the logical type in Extract jobs.) TIME data types are represented as timestamp-micro logical type (it annotates an Avro LONG types) by default in Export Data SQL, but are represented as string type by default in Extract jobs. (Note: you can add use avro logical types=False to Export Data Options to disable the logical type, or use the flag --use avro logical types=True to enable the logical type in Extract jobs.) DATETIME data types are represented as Avro STRING types (a string type with custom named logical type datetime ) by default in Export Data SQL, but are represented as string type by default in Extract jobs. (Note: you can add use avro logical types=False to Export Data Options to disable the logical type, or use the flag --use avro logical types=True to enable logical type in Extract jobs.) RANGE types aren't supported in Avro export.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- The following example returns the top 100 EXTRACT jobs which are consuming more than 100 GB processed over the past seven days.
- For example, the following query returns the daily total bytes processed by EXTRACT jobs in the past seven days.
- For alternative approaches that allow exporting more than 50 TiB, see the notes section in Extract jobs .
- For more information about extract job limits, see Extract jobs .

### "Package com.google.cloud.bigquery (2.62.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery)
- Source ID: `site-java-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Extract job configurations have JobConfiguration.Type#EXTRACT type. com. google. cloud. bigquery.
- Extract Statistics A Google BigQuery Extract Job statistics. com. google. cloud. bigquery.
- EXTRACT JOB statistics are populated in ExtractStatistics. com. google. cloud. bigquery.
- Extract Job Configuration Google BigQuery extract job configuration.

