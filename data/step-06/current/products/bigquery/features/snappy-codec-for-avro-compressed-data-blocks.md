---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.894Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Snappy codec for Avro compressed data blocks"
feature_slug: "snappy-codec-for-avro-compressed-data-blocks"
latest_feature_date: "2017-07-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
keywords:
  - "Snappy compression for Avro"
  - "Avro Snappy codec"
  - "Snappy compression"
  - "snappy compression"
  - "Avro compressed data blocks"
  - "Snappy codec"
  - "compressed Avro blocks"
  - "snappy"
---

# Snappy codec for Avro compressed data blocks

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery announced availability of the Snappy codec for Avro compressed data blocks.

## Extended Definition

BigQuery announced availability of the Snappy codec for Avro compressed data blocks.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)

## Supporting Pages

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- The file is named myfile.avro . myfile.avro is exported to a Cloud Storage bucket named example-bucket . bq extract \ --destination format AVRO \ --compression SNAPPY \ 'mydataset.mytable' \ gs://example-bucket/myfile.avro The following command exports a single partition of mydataset.my partitioned table into a CSV file in Cloud Storage: bq extract \ --destination format CSV \ 'mydataset.my partitioned table$0' \ gs://example-bucket/single partition.csv API To export data, create an extract job and populate the job configuration.
- For example: bq extract \ --destination format NEWLINE DELIMITED JSON \ 'mydataset.mytable' \ gs://example-bucket/myfile.json The following command exports mydataset.mytable into an Avro file that is compressed using Snappy.
- To compress Avro data, use the bq command-line tool or the API and specify one of the supported compression types for Avro data: DEFLATE or SNAPPY .
- Parquet SNAPPY, GZIP, ZSTD Nested and repeated data are supported.

