---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.800Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ST_GEOGFROMGEOJSON make_valid parameter"
feature_slug: "bigquery-st-geogfromgeojson-make-valid-parameter"
latest_feature_date: "2020-10-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
keywords:
  - "repair invalid polygons"
  - "GEOGRAPHY GeoJSON import"
  - "ST_GEOGFROMGEOJSON function"
  - "ST_GEOGFROMGEOJSON"
  - "make_valid parameter"
  - "GeoJSON"
  - "make_valid"
  - "GEOGRAPHY"
---

# BigQuery ST_GEOGFROMGEOJSON make_valid parameter

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The ST_GEOGFROMGEOJSON function now supports the make_valid parameter in beta mode to correct polygon issues when importing geography data.

## Extended Definition

The ST_GEOGFROMGEOJSON function now supports the make_valid parameter in beta mode to correct polygon issues when importing geography data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)

## Supporting Pages

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: The function listing may include ST_GEOGFROMGEOJSON, but it does not document the make_valid parameter details needed to verify this feature.

Evidence snippets:
- ST GEOGFROMGEOJSON Converts a STRING GeoJSON geometry value into a GEOGRAPHY value.
- ST ASGEOJSON Converts a GEOGRAPHY value to a STRING GeoJSON geography value.
- ST ANGLE Takes three point GEOGRAPHY values, which represent two intersecting lines, and returns the angle between these lines.
- ST CLUSTERDBSCAN Performs DBSCAN clustering on a group of GEOGRAPHY values and produces a 0-based cluster number for this row.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- ALTER TABLE mydataset . mytable ADD COLUMN A STRUCT < B GEOGRAPHY , C ARRAY < INT64 > , D INT64 NOT NULL , E TIMESTAMP OPTIONS ( description = "creation time" ) The query fails if the table already has a column named A , even if that column does not contain any of the nested columns that are specified.
- ALTER TABLE mydataset . mytable ADD COLUMN A STRING , ADD COLUMN IF NOT EXISTS B GEOGRAPHY , ADD COLUMN C ARRAY < NUMERIC > , ADD COLUMN D DATE OPTIONS ( description = "my description" ) If any of the columns named A , C , or D already exist, the statement fails.
- For more information, see Creating an external table from a newline-delimited GeoJSON file . max bad records INT64 The maximum number of bad records to ignore when reading the data.
- Adding a RECORD column The following example adds a column named A of type STRUCT that contains the following nested columns: Column B of type GEOGRAPHY .

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- The following list shows examples of valid data: WKT: POINT(1 2) GeoJSON: { "type": "Point", "coordinates": [1, 2] } Hex encoded WKB: 0101000000feffffffffffef3f0000000000000040 Before loading GEOGRAPHY data, also read Loading geospatial data .
- Columns with GEOGRAPHY types must contain strings in one of the following formats: Well-known text (WKT) Well-known binary (WKB) GeoJSON If you use WKB, the value should be hex encoded.

