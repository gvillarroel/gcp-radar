---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.234Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Empty values as null feature flag"
feature_slug: "empty-values-as-null-feature-flag"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/environment-variables"
  - "https://docs.cloud.google.com/mainframe-connector/docs/data-types"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
keywords:
  - "empty"
  - "values"
  - "as"
  - "null"
  - "flag"
  - "the"
  - "bqsh"
  - "are"
---

# Empty values as null feature flag

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The BQSH_FEATURE_EMPTY_VALUES_ARE_NULL flag treats empty values as null when BQSH_FEATURE_FAIL_ON_INVALID_DATA is enabled.

## Extended Definition

The BQSH_FEATURE_EMPTY_VALUES_ARE_NULL flag treats empty values as null when BQSH_FEATURE_FAIL_ON_INVALID_DATA is enabled.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/environment-variables](https://docs.cloud.google.com/mainframe-connector/docs/environment-variables)
- [https://docs.cloud.google.com/mainframe-connector/docs/data-types](https://docs.cloud.google.com/mainframe-connector/docs/data-types)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)

## Supporting Pages

### Mainframe Connector environment variables \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/environment-variables](https://docs.cloud.google.com/mainframe-connector/docs/environment-variables)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BQSH FEATURE EMPTY VALUES ARE NULL True 5.13.0 Specifies that values containing only nulls (0x00), spaces (0x40), or high bytes (0xFF) should be decoded as null, and not throw an error for packed decimal and zoned decimal types.
- If you set BQSH FEATURE EMPTY STRING AS NULL to false, then an empty string remains as an empty string when it is exported to BigQuery (an empty string won't be set to null).
- This includes values that contain only nulls, spaces, or high bytes. (5.12.1 and onwards) Lets you enforce stricter error handling, as follows: Raise an error when parsing date and timestamp types that contain spaces (or are invalid dates or timestamps).
- BQSH FEATURE TERMINATE STRINGS ON NULL True 5.14.0 If not set, or if true, the DISPLAY , NATIONAL , DBCS , and UTF8 fields interpret null bytes as an end-of-string indicator and ignore the remaining bytes.

### Mainframe Connector data types \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/data-types](https://docs.cloud.google.com/mainframe-connector/docs/data-types)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ZONED EMPTY VALUES ARE NULL FAIL ON INVALID DATA precision Decimal64 NUMERIC Decode as NULL , if all the bytes are: Either spaces, high, or low, and, Not FAIL ON INVALID DATA or, FAIL ON INVALID DATA and, EMPTY VALUES ARE NULL .
- PACKED DECIMAL EMPTY VALUES ARE NULL FAIL ON INVALID DATA Decimal64 NUMERIC Decode as NULL , if all the bytes are: Either spaces, high, or low, and Not FAIL ON INVALID DATA or, FAIL ON INVALID DATA and, EMPTY VALUES ARE NULL .
- ZONED EMPTY VALUES ARE NULL FAIL ON INVALID DATA 18 Decimal BIGNUMERIC Decode as NULL , if all the bytes are: Either spaces, high, or low, and, Not FAIL ON INVALID DATA or, FAIL ON INVALID DATA and, EMPTY VALUES ARE NULL .
- ZONED EMPTY VALUES ARE NULL FAIL ON INVALID DATA precision Long INT64 Decode as NULL , if all the bytes are: Either spaces, high, or low, and Not FAIL ON INVALID DATA or, FAIL ON INVALID DATA and, EMPTY VALUES ARE NULL .

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Parse the maxChunkSize argument The maxChunkSize flag accepts values in the form of an amount and a unit of measurement, for example 5 MiB.
- When you use the dry run flag, all statistics such as total bytes read, number of written records, total errors, are logged.
- Note that these values are case-insensitive.
- Based on the flag you use, the systemreport command prints the following system data: --supported ciphers : Supported ciphers --available security providers : Available security providers No Use customized character sets Mainframe Connector supports different character sets that decode bytes into BigQuery strings, and the other way around.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- If provided, an execution will be created with the input values. --async (Optional) Specify this flag if you want to return immediately, without waiting for the operation in progress to complete. --dump-execution-id = EXECUTION-ID : DataPath (Optional) Specify the file to write the execution ID to. --help or -h (Optional) Display this help message. --polling-interval = POLLINGINTERVAL (Optional) Sets the polling interval for displaying logs when --tail logs is enabled.
- The default value is 0. --max polling interval ms = MILLISECONDS (Optional) The maximum wait time for a BigQuery job. --null marker = MARKER (Optional) Specify a custom string that represents a NULL value in CSV data. --projection fields = FIELDS (Optional) If you set --source format to DATASTORE BACKUP then this flag indicates the entity properties to load from a datastore export.
- Use one of the following values: ALLOW FIELD ADDITION : Allow new fields to be added ALLOW FIELD RELAXATION : Allow relaxing REQUIRED fields to NULLABLE Repeat this flag to specify multiple schema update options. --skip leading rows = NUMBER (Optional) Specify the number of rows to skip at the beginning of the source file.
- If not specified will use job default. --update-env-vars = ENVVARS (Optional) List of key-value pairs to set as environment variables overrides for an execution of a job. --wait (Optional) Specify this flag if you want the command to wait until the execution has completed running before exiting. cloud run job log Display cloud run logs Synopsis cloud run job log [-h] [--tail] [--log-filter= FILTER ] [--polling-interval= POLLINGINTERVAL ] --project= PROJECT --region= REGION [--timeout= TIMEOUT ] EXECUTION-ID Flags and arguments The cloud run job log command uses the following flags and arguments: EXECUTION-ID The name of the Cloud Run job execution id. --help or -h (Optional) Display this help message. --log-filter = FILTER (Optional) Filter expression that specifies the log entries to return. --polling-interval = POLLINGINTERVAL (Optional) Sets the polling interval for displaying logs when --tail logs is enabled.

