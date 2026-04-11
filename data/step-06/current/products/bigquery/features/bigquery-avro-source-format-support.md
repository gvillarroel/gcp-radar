---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.941Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Avro source format support"
feature_slug: "bigquery-avro-source-format-support"
latest_feature_date: "2016-03-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries"
keywords:
  - "bq load --source_format=AVRO"
  - "CREATE TABLE OPTIONS Avro"
  - "federated Avro source"
  - "Avro source format"
  - "source_format=AVRO"
  - "load jobs Avro"
  - "Avro format"
  - "AVRO support"
---

# BigQuery Avro source format support

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added support for Avro as a source format for load operations and as a federated data source via API and command-line tooling.

## Extended Definition

BigQuery added support for Avro as a source format for load operations and as a federated data source via API and command-line tooling.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions)
- [https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries](https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries)

## Supporting Pages

### "Class AvroOptions (2.62.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions)
- Source ID: `site-java-reference`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: It provides direct implementation-level evidence that BigQuery client libraries expose AVRO format support via configurable load/external-data options, which supports the existence of AVRO source-format capability.

Evidence snippets:
- Inheritance Object > FormatOptions > AvroOptions Inherited Members FormatOptions.avro() FormatOptions.bigtable() FormatOptions.csv() FormatOptions.datastoreBackup() FormatOptions.equals(Object) FormatOptions.getType() FormatOptions.googleSheets() FormatOptions.hashCode() FormatOptions.iceberg() FormatOptions.json() FormatOptions.of(String) FormatOptions.orc() FormatOptions.parquet() FormatOptions.toString() Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods newBuilder() public static AvroOptions .
- 2.62.0 (latest) 2.61.0 2.60.0 2.59.0 2.58.0 2.57.2 2.56.0 2.55.3 2.54.2 2.53.0 2.52.0 2.51.0 2.50.1 2.49.0 2.48.1 2.47.0 2.46.0 2.45.0 2.44.0 2.43.3 2.42.3 2.41.0 2.40.3 2.39.1 2.38.2 2.37.2 2.36.0 2.35.0 2.34.2 2.33.2 public final class AvroOptions extends FormatOptions Google BigQuery options for AVRO format.

### BigQuery Storage API Client Libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries](https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Builder sessionBuilder = ReadSession . newBuilder () . setTable ( srcTable ) // This API can also deliver data serialized in Apache Avro format. // This example leverages Apache Arrow. . setDataFormat ( DataFormat .
- MaxCallRecvMsgSize ( 1024 1024 129 ), ) // Available formats const ( AVRO FORMAT = "avro" ARROW FORMAT = "arrow" ) // Command-line flags. var ( projectID = flag .
- GetSerializedSchema (), ch ) case AVRO FORMAT : err = processAvro ( ctx , session .
- String ( "format" , AVRO FORMAT , "format to read data from storage API.

