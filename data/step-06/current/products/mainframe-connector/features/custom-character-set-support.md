---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.231Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Custom character set support"
feature_slug: "custom-character-set-support"
latest_feature_date: "2024-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/environment-variables"
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
keywords:
  - "custom"
  - "character"
  - "set"
  - "imports"
  - "to"
  - "and"
  - "exports"
  - "from"
---

# Custom character set support

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

Imports to BigQuery and exports from BigQuery can use customized character sets.

## Extended Definition

Imports to BigQuery and exports from BigQuery can use customized character sets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/environment-variables](https://docs.cloud.google.com/mainframe-connector/docs/environment-variables)
- [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)

## Supporting Pages

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- The default value is 0. --max polling interval ms = MILLISECONDS (Optional) The maximum wait time for a BigQuery job. --null marker = MARKER (Optional) Specify a custom string that represents a NULL value in CSV data. --projection fields = FIELDS (Optional) If you set --source format to DATASTORE BACKUP then this flag indicates the entity properties to load from a datastore export.
- If [PROJECT ID] is missing, the default project is used. --destDSN = OUTPUT (Optional) Specify the destination DSN. --destPath = OUTPUT (Optional) Specify the destination path. --dry run (Optional) Test copybook parsing and decoding of the QSAM file. --encoding = ENCODING (Optional) Specify the character set to use for encoding and decoding character fields.
- If [PROJECT ID] is missing, the default project is used. --debug mode = {true false} (Optional) Set logging level to debug. --destination kms key = KEY (Optional) The Cloud KMS key for encryption of the destination table data. --encoding or -E = ENCODING (Optional) Specify the character set to use for encoding and decoding character fields.
- If [PROJECT ID] is missing, the default project is used. --destination table = TABLE (Optional) Specify the destination table that you want to write the query results to. --dry run (Optional) Validate the query without running it. --encoding = ENCODING (Optional) Specify the character set to use for encoding and decoding character fields.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- You can also perform the following tasks with the gsutil cp command: Perform a dry run of the gsutil cp command Copy a file from Cloud Storage to your Mainframe Fine tune performance of the gsutil cp command Use customized character sets with the gsutil cp .
- Based on the flag you use, the systemreport command prints the following system data: --supported ciphers : Supported ciphers --available security providers : Available security providers No Use customized character sets Mainframe Connector supports different character sets that decode bytes into BigQuery strings, and the other way around.
- If the --encoding flag refers to a customized character set that doesn't correspond to the value you set for BQSH FEATURE CUSTOM CHARSET (or if you've not set BQSH FEATURE CUSTOM CHARSET at all), the command exits with an error message.
- You can use this customized character set with the gsutil cp or bq export commands by setting the --encoding= charset flag.

### Mainframe Connector environment variables \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/environment-variables](https://docs.cloud.google.com/mainframe-connector/docs/environment-variables)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BQSH FEATURE CUSTOM CHARSET Empty string 5.14.0 Set path to a customized character set .
- Use the following format to set the null indicator: SUFFIX NULL INDICATOR NAME ="command --null-value NULL VALUE --not-null-value NOT NULL VALUE " Use the following format to set the date and timestamp: SUFFIX SUFFIX NAME ="command --format FORMAT --timezone TIMEZONE " For more information, see Support for date and timestamp fields and Support for null indicator fields . (5.11.0 and onwards) Sets the values for the date and timestamp data types.
- BQSH FEATURE TERMINATE STRINGS ON NULL True 5.14.0 If not set, or if true, the DISPLAY , NATIONAL , DBCS , and UTF8 fields interpret null bytes as an end-of-string indicator and ignore the remaining bytes.
- If a value only contains nulls (0x00) or spaces (0x40), it is decoded to null and does not throw an error for packed decimal, even if this flag is set to true.

### "qsam and vsam commands reference \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Picture symbols Picture attributes Logical type A, B, G, N, U, X, 9 DISPLAY, DISPLAY-1, NATIONAL, UTF-8 String Example 01 REC 02 STR PIC X(10) 02 NATIONAL PIC N(10) 02 UTF8 PIC U(1) USAGE UTF-8 Encoding format Alphanumeric fields are encoded as follows: X fields default to EBCDIC encoding National (N) fields default to Unicode Transformation Format 16-bit (UTF-16 BE) encoding UTF8 fields default to Unicode Transformation Format-8 (UTF-8) encoding Mainframe Connector supports most single byte character set (SBCS), double byte character set (DBCS) encodings.
- You can use the following example to implement a tagged union: { "field override": [ { "field": "VARIANT-1", "modifier": { "null if": { "target field": "TYPE", "non null value": "VAR1" } } }, { "field": "VARIANT-2", "modifier": { "null if": { "target field": "TYPE", "non null value": "VAR2" } } } ], "transformations": [ { "field": "DATA", "transformation": { "exclude": {}} } ] } Logical Types To transcode data to and from multiple formats, Mainframe Connector converts all data to an intermediate representation (IR) that is based on logical types.
- The data is treated as a series of characters and is stored as strings with a specific encoding, for example, Extended Binary Coded Decimal Interchange Code (EBCDIC).
- These operations perform symmetric transformations, that is, they move the same data to and from Google Cloud.

