---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.414Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "SQL Runner schema and table limits"
feature_slug: "sql-runner-schema-and-table-limits"
latest_feature_date: "2026-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-labs"
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
keywords:
  - "sql"
  - "runner"
  - "schema"
  - "table"
  - "limits"
  - "limit"
  - "preview"
  - "increases"
---

# SQL Runner schema and table limits

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The SQL Runner schema and table limit preview increases the number of schemas that can be returned to SQL Runner.

## Extended Definition

The SQL Runner schema and table limit preview increases the number of schemas that can be returned to SQL Runner.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)
- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)

## Supporting Pages

### Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Increase SQL Runner Schema and Table Limit This preview feature is disabled by default.
- When enabled,the Increased Row Limit preview feature lets admins set row limits up to 50,000 rows or datapoints for map charts , scatterplot charts , and table charts .
- When this preview feature is enabled, the total number of schemas that can be returned to SQL Runner increases to 12,000.
- Warning: Enabling this preview feature will increase the table name display response time if your instance has access to a large number of schemas and tables.

### Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Increase SQL Runner Schema and Table Limit This preview feature is disabled by default.
- When enabled,the Increased Row Limit preview feature lets admins set row limits up to 50,000 rows or datapoints for map charts , scatterplot charts , and table charts .
- When this preview feature is enabled, the total number of schemas that can be returned to SQL Runner increases to 12,000.
- Warning: Enabling this preview feature will increase the table name display response time if your instance has access to a large number of schemas and tables.

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-reference-required-6`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Both \t and tab are allowed for tab delimiters. --print header : When specified, print header rows for formats that have headers such as CSV. bq extract --location= location \ --destination format format \ --compression compression type \ --field delimiter delimiter \ --print header= boolean \ project id:dataset.table \ gs:// bucket / filename.ext Where: location is the name of your location.
- If the format is not specified, 'CSV' will be used. $format = 'NEWLINE DELIMITED JSON'; // Create the extract job $extractConfig = $table->extract($destinationUri)->destinationFormat($format); // Run the job $job = $table->runJob($extractConfig); // Waits for the job to complete printf('Exported %s to %s' .
- Go to BigQuery In the query editor, enter the following statement: EXPORT DATA OPTIONS ( uri = 'gs://bucket/folder/ .csv' , format = 'CSV' , overwrite = true , header = true , field delimiter = ';' ) AS ( SELECT field1 , field2 FROM mydataset . table1 ORDER BY field1 ); Click play circle Run .
- For example: bq extract \ --destination format NEWLINE DELIMITED JSON \ 'mydataset.mytable' \ gs://example-bucket/myfile.json The following command exports mydataset.mytable into an Avro file that is compressed using Snappy.

