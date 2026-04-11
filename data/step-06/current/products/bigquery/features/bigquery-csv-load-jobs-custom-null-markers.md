---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.922Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery CSV load jobs custom null markers"
feature_slug: "bigquery-csv-load-jobs-custom-null-markers"
latest_feature_date: "2016-12-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "load job null_marker"
  - "LOAD DATA null marker"
  - "CSV null marker"
  - "custom null marker"
  - "custom NULL marker"
  - "NULL_MARKER"
  - "CSV load job options"
  - "custom null string"
---

# BigQuery CSV load jobs custom null markers

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added support for custom null markers in CSV load jobs.

## Extended Definition

BigQuery added support for custom null markers in CSV load jobs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- The default value is , . --null marker : An optional custom string that represents a NULL value in CSV data. --null markers : An optional comma-separated list of custom strings that represent NULL values in CSV data.
- The default value is , . --null marker : An optional custom string that represents a NULL value in CSV data. --null markers : An optional comma-separated list of custom strings that represent NULL values in CSV data.
- Null Markers Null Markers --null markers nullMarkers ( Java , Python ) (Optional) A list of custom strings that represents a NULL value in CSV data.
- This option cannot be used with --null marker flag. --source column match : Specifies the strategy used to match loaded columns to the schema.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- July 21, 2025 Libraries Python 3.35.0 (2025-07-15) Features Add null markers property to LoadJobConfig and CSVOptions ( #2239 ) ( 289446d ) Add total slot ms to RowIterator ( #2233 ) ( d44bf02 ) Add UpdateMode to update dataset ( #2204 ) ( eb9c2af ) Adds dataset view parameter to get dataset method ( #2198 ) ( 28a5750 ) Adds date format to load job and external config ( #2231 ) ( 7d31828 ) Adds datetime format as an option ( #2236 ) ( 54d3dc6 ) Adds source column match and associated tests ( #2227 ) ( 6d5d236 ) Adds time format and timestamp format and associated tests ( #2238 ) ( 371ad29 ) Adds time zone to external config and load job ( #2229 ) ( b2300d0 ) Bug Fixes Adds magics.context.project to eliminate issues with unit tests … ( #2228 ) ( 27ff3a8 ) Fix rows returned when both start index and page size are provided ( #2181 ) ( 45643a2 ) Make AccessEntry equality consistent with from api repr ( #2218 ) ( 4941de4 ) Update type hints for various BigQuery files ( #2206 ) ( b863291 ) Documentation Improve clarity of "Output Only" fields in Dataset class ( #2201 ) ( bd5aba8 ) Libraries Java 2.53.0 (2025-07-14) Features bigquery: Add OpenTelemetry support to BQ rpcs ( #3860 ) ( e2d23c1 ) bigquery: Add support for custom timezones and timestamps ( #3859 ) ( e5467c9 ) Next release from main branch is 2.53.0 ( #3879 ) ( c47a062 ) Bug Fixes Load jobs preserve ascii control characters configuration ( #3876 ) ( 5cfdf85 ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.69.0 ( #3870 ) ( a7f1007 ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250615-2.0.0 ( #3872 ) ( f081589 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #3878 ) ( 0e971b8 ) Documentation Update maven format command ( #3877 ) ( d2918da ) Java 2.53.0 (2025-07-14) Features bigquery: Add OpenTelemetry support to BQ rpcs ( #3860 ) ( e2d23c1 ) bigquery: Add support for custom timezones and timestamps ( #3859 ) ( e5467c9 ) Next release from main branch is 2.53.0 ( #3879 ) ( c47a062 ) Bug Fixes Load jobs preserve ascii control characters configuration ( #3876 ) ( 5cfdf85 ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.69.0 ( #3870 ) ( a7f1007 ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250615-2.0.0 ( #3872 ) ( f081589 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #3878 ) ( 0e971b8 ) Documentation Update maven format command ( #3877 ) ( d2918da ) Feature You can now use the DISTINCT pipe operator to select distinct rows from a table in your pipe syntax queries.
- This field should be used together with Reservation.max slots ( f1de706 ) bigquery/storage/managedwriter: Allow overriding proto conversion mapping ( #12579 ) ( ce9d29b ), refs #12578 bigquery: Add load/extract job completion ratio ( #12471 ) ( 3dab483 ) bigquery: Load job and external table opts for custom time format, null markers and source column match ( #12470 ) ( 67b0320 ) August 28, 2025 Feature For additional layers of security and control, you can now use query templates to predefine and limit the queries that can be run in data clean rooms.
- January 06, 2026 Feature The CREATE EXTERNAL TABLE and LOAD DATA statements now support the following options: time zone : specify a time zone to use when loading data date format , datetime format , time format , and timestamp format : define how date and time values are formatted in your source files null markers : define the strings that represent NULL values in CSV files. source column match : specify how loaded columns are matched to the schema.
- Feature The CREATE EXTERNAL TABLE and LOAD DATA statements now support the following options in Preview : null markers : define the strings that represent NULL values in CSV files. source column match : specify how loaded columns are matched to the schema.

