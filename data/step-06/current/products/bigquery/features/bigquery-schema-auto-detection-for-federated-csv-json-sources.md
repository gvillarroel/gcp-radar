---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.943Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery schema auto-detection for federated CSV/JSON sources"
feature_slug: "bigquery-schema-auto-detection-for-federated-csv-json-sources"
latest_feature_date: "2016-03-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "bq load --autodetect"
  - "autodetect schema"
  - "auto-detect schema for external source"
  - "autodetect"
  - "schema auto-detection"
  - "schema auto-detect"
  - "federated CSV source"
  - "federated JSON source"
---

# BigQuery schema auto-detection for federated CSV/JSON sources

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery can automatically detect schemas for federated CSV and JSON data when used through the API or command-line tool.

## Extended Definition

BigQuery can automatically detect schemas for federated CSV and JSON data when used through the API or command-line tool.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: It includes schema autodetection behavior for CSV loads from Cloud Storage, including a caveat about header detection when all columns are STRING.

Evidence snippets:
- At most, five errors of any type are returned regardless of the --max bad records value. --ignore unknown values : When specified, allows and ignores extra, unrecognized values in CSV or JSON data. --time zone : An optional default time zone that will apply when parsing timestamp values that have no specific time zone in CSV or JSON data. --date format : An optional custom string that defines how the DATE values are formatted in CSV or JSON data. --datetime format : An optional custom string that defines how the DATETIME values are formatted in CSV or JSON data. --time format : An optional custom string that defines how the TIME values are formatted in CSV or JSON data. --timestamp format : An optional custom string that defines how the TIMESTAMP values are formatted in CSV or JSON data. --autodetect : When specified, enable schema auto-detection for CSV and JSON data. --destination kms key : The Cloud KMS key for encryption of the table data. bq --location = location load \ -- [ no ] replace \ --source format = format \ dataset.table \ path to source \ schema where: location is your location .
- At most, five errors of any type are returned regardless of the --max bad records value. --ignore unknown values : When specified, allows and ignores extra, unrecognized values in CSV or JSON data. --time zone : An optional default time zone that will apply when parsing timestamp values that have no specific time zone in CSV or JSON data. --date format : An optional custom string that defines how the DATE values are formatted in CSV or JSON data. --datetime format : An optional custom string that defines how the DATETIME values are formatted in CSV or JSON data. --time format : An optional custom string that defines how the TIME values are formatted in CSV or JSON data. --timestamp format : An optional custom string that defines how the TIMESTAMP values are formatted in CSV or JSON data. --autodetect : When specified, enable schema auto-detection for CSV and JSON data. --time partitioning type : Enables time-based partitioning on a table and sets the partition type.
- The schema is defined using schema auto-detection . bq load \ -- autodetect \ -- replace \ -- source format = CSV \ mydataset . mytable \ gs : // mybucket / mydata . csv The following command loads data from gs://mybucket/mydata.csv and appends data to a table named mytable in mydataset .
- The following are example of CSV values for RANGE<DATE> : "[2020-01-01, 2021-01-01)" "[UNBOUNDED, 2021-01-01)" "[2020-03-01, NULL)" "[UNBOUNDED, UNBOUNDED)" Schema auto-detection This section describes the behavior of schema auto-detection when loading CSV files.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: WEAK
- Re-rank rationale: The page is command-line focused and may include load-related command usage, but it does not materially document schema auto-detection for federated CSV/JSON sources.

Evidence snippets:
- Synopsis bq load [ FLAGS ] DESTINATION TABLE SOURCE DATA [ SCHEMA ] Example bq load myDataset.newTable gs://mybucket/info.csv ./info schema.json Flags and arguments The bq load command uses the following flags and arguments: --allow jagged rows={true false} To allow missing trailing optional columns in CSV data, set to true . --preserve ascii control characters={true false} To allow embedded ASCII control characters in CSV data, set to true . --allow quoted newlines={true false} To allow quoted newlines in CSV data, set to true . --autodetect={true false} To enable schema auto-detection for CSV and JSON data, set to true .
- Synopsis bq mkdef [ FLAGS ] URI [ > FILE ] Flags and arguments The bq mkdef command uses the following flags and arguments: --autodetect={true false} Specifies whether to use schema auto-detection for CSV and JSON data.
- You can omit the SCHEMA value if the data format is self-describing (such as Avro) or if you are using schema auto-detection .
- If --autodetect is false , and no schema is specified by using the --schema flag, and the destination table exists, then the schema of the destination table is used. --clustering fields= COLUMNS A comma-separated list of up to four column names that specifies the fields to use for table clustering . --column name character map= SCOPE Defines the scope and handling of characters in column names, with the option of enabling flexible column names .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- It uses schema auto-detection to detect both the file schema and the hive partitioning layout.
- This example uses schema auto-detection.
- Schema autodetection will also decide TIMESTAMP column type based on this format instead of the existing format.
- Schema autodetection will also decide DATETIME column type based on this format instead of the existing format.

