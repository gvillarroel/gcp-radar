---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.749Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery external table explicit schema for Parquet/ORC/Avro"
feature_slug: "bigquery-external-table-explicit-schema-for-parquet-orc-avro"
latest_feature_date: "2022-03-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions.Builder"
keywords:
  - "schema autodetect"
  - "explicit schema for external tables"
  - "explicit schema"
  - "CREATE EXTERNAL TABLE"
  - "external table schema"
  - "external table DDL"
  - "Avro"
  - "Parquet"
---

# BigQuery external table explicit schema for Parquet/ORC/Avro

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Users can now explicitly define schemas for BigQuery external tables over Parquet, ORC, and Avro files instead of relying on automatic schema detection.

## Extended Definition

Users can now explicitly define schemas for BigQuery external tables over Parquet, ORC, and Avro files instead of relying on automatic schema detection.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions.Builder)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Supported values for CREATE EXTERNAL TABLE include: AVRO , CLOUD BIGTABLE , CSV , DATASTORE BACKUP , DELTA LAKE ( preview ), GOOGLE SHEETS , NEWLINE DELIMITED JSON (or JSON ), ORC , PARQUET .
- Supported values for LOAD DATA include: AVRO , CSV , DELTA LAKE ( preview ) NEWLINE DELIMITED JSON (or JSON ), ORC , PARQUET .
- Applies to Parquet data. enable logical types BOOL If true , convert Avro logical types into their corresponding SQL types.
- Applies to Avro, CSV, JSON, Parquet, and ORC data. sheet range STRING Range of a Google Sheets spreadsheet to query from.

### "Class AvroOptions (2.62.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions)
- Source ID: `site-java-reference`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: The page only documents the Java `AvroOptions` class for AVRO parsing options and does not describe external table schema definition behavior for Parquet/ORC/Avro.

Evidence snippets:
- Inheritance Object > FormatOptions > AvroOptions Inherited Members FormatOptions.avro() FormatOptions.bigtable() FormatOptions.csv() FormatOptions.datastoreBackup() FormatOptions.equals(Object) FormatOptions.getType() FormatOptions.googleSheets() FormatOptions.hashCode() FormatOptions.iceberg() FormatOptions.json() FormatOptions.of(String) FormatOptions.orc() FormatOptions.parquet() FormatOptions.toString() Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods newBuilder() public static AvroOptions .
- Builder toBuilder () Returns Type Description AvroOptions.Builder toString() public String toString () Returns Type Description String Overrides FormatOptions.toString() useAvroLogicalTypes() public Boolean useAvroLogicalTypes () Returns whether BigQuery should interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).
- Returns Type Description AvroOptions.Builder Methods equals(Object obj) public boolean equals ( Object obj ) Parameter Name Description obj Object Returns Type Description boolean Overrides FormatOptions.equals(Object obj) hashCode() public int hashCode () Returns Type Description int Overrides FormatOptions.hashCode() toBuilder() public AvroOptions .
- 2.62.0 (latest) 2.61.0 2.60.0 2.59.0 2.58.0 2.57.2 2.56.0 2.55.3 2.54.2 2.53.0 2.52.0 2.51.0 2.50.1 2.49.0 2.48.1 2.47.0 2.46.0 2.45.0 2.44.0 2.43.3 2.42.3 2.41.0 2.40.3 2.39.1 2.38.2 2.37.2 2.36.0 2.35.0 2.34.2 2.33.2 public final class AvroOptions extends FormatOptions Google BigQuery options for AVRO format.

### "Class AvroOptions.Builder (2.62.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions.Builder)
- Source ID: `site-java-reference`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: The page documents an AvroOptions builder in the Java client and only indirectly touches Avro type handling, without describing external table schema definitions or Parquet/ORC behavior.

Evidence snippets:
- Builder Inheritance java.lang.Object > AvroOptions.Builder Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build() public AvroOptions build () Creates a AvroOptions object.
- Parameter Name Description useAvroLogicalTypes boolean Returns Type Description AvroOptions.Builder Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- 2.62.0 (latest) 2.61.0 2.60.0 2.59.0 2.58.0 2.57.2 2.56.0 2.55.3 2.54.2 2.53.0 2.52.0 2.51.0 2.50.1 2.49.0 2.48.1 2.47.0 2.46.0 2.45.0 2.44.0 2.43.3 2.42.3 2.41.0 2.40.3 2.39.1 2.38.2 2.37.2 2.36.0 2.35.0 2.34.2 2.33.2 public static final class AvroOptions .
- Builder setUseAvroLogicalTypes ( boolean useAvroLogicalTypes ) [Optional] Sets whether BigQuery should interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).

