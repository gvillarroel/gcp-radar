---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.238Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Native copybook parser"
feature_slug: "native-copybook-parser"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/define-parser"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
keywords:
  - "native"
  - "copybook"
  - "parser"
  - "the"
  - "bq"
  - "export"
  - "command"
  - "supports"
---

# Native copybook parser

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The bq export command supports the Native copybook parser.

## Extended Definition

The bq export command supports the Native copybook parser.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/define-parser](https://docs.cloud.google.com/mainframe-connector/docs/define-parser)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)

## Supporting Pages

### Copybook parser reference \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- Source ID: `site-docs-reference`
- Final score: 289
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Support for DBCS fields Ensure the following when using DBCS fields: When you use PIC G or Pic N DBCS fields, you must provide one of the following valid multi-byte character set (MBCS) encodings in the encoding option or in the ENCODING environment variable when using the gsutil cp or bq export commands: x-IBM930 x-IBM933 x-IBM935 x-IBM937 x-IBM939 x-IBM942 x-IBM942C x-IBM943 x-IBM943C x-IBM949 x-IBM949C x-IBM950 x-IBM964 x-IBM970 x-IBM1364 When a copybook field only contains DBCS bytes, but these bytes are not surrounded by shift-out (0x0E) and shift-in (0x0F), you must add the suffix DBCS to the field name to ensure that these bytes are decoded as DBCS bytes.
- Support for variable-length character strings The Native copybook parser supports the following struct fields: 10 var 15 var-LEN PIC 9(4) USAGE COMP 15 var-TEXT PIC X(n) The first field in the struct field is the length of the second field, the string field.
- Mainframe Connector supports two versions of the copybook parser: Native copybook parser : The Native copybook parser implements an ANTLR4-based parser, supports COBOL copybooks, and is the recommended version of the parser.
- The native copybook parser implements an ANTLR4-based parser and supports COBOL copybooks.

### "Define the copybook parser \_|\_ Mainframe Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/define-parser](https://docs.cloud.google.com/mainframe-connector/docs/define-parser)
- Source ID: `site-docs-root-2`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mainframe Connector supports two versions of the copybook parser: Native copybook parser: The Native copybook parser is the latest version of the parser.
- The Native copybook parser implements an ANTLR4 based parser and supports COBOL copybooks.
- After using the Legacy parser for parsing, Mainframe Connector compares the result of the Legacy parser with that of the Native parser by executing two parsing attempts in the following order: Parses the copybook using the Native parser expecting an explicit comment area in columns 1-6.
- If you are using Domain-Specific Language (DSL) based-copybook the legacy parser might be more suitable as the Native copybook parser might cause errors.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Performance tuning configuration for the bq export command Mainframe Connector supports the following performance tuning configuration for the bq export command: exporter thread count : (Optional) Set the number of worker threads.
- The bq export command supports some performance tuning capabilities.
- Query file SELECT FROM bigquery-public-data.samples.wikipedia WHERE title = @mytitle AND num characters > @min chars; Execution example bq query \ --project id=mainframe-connector-dev \ --location="US" \ --parameters=mytitle::Hippocrates,min chars:INT64:42600 Perform a dry run of the gsutil cp command The gsutil cp command decodes a QSAM file using a COBOL copybook, and generates an ORC file on Cloud Storage.
- The bq mk command provides the following configuration options to support this feature: --schema from copybook : Specifies the copybook to use to create the table. --dry run : (Optional) When enabled, the command only prints the generated CREATE TABLE SQL command without executing it.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- The bq export command uses the following flags and arguments: --project id = ID Specify the project to use to execute this command. --allow large results (Optional) Use large destination table sizes for legacy SQL queries. --batch (Optional) Run the query in batch mode. --bucket = BUCKET (Optional) Specify a location within Cloud Storage to write the command's output.
- Synopsis bq export [options] Flags and arguments To run this command you must provide an SQL query (see flags --sql and query dsn ) and a copybook (see flag cobDsn ).
- You can also use the bq mk command to generate a BigQuery table directly from parsing COBOL copybooks using the --schema from copybook flag.
- The bq query command uses the following flags and arguments: --project id = ID Specify the project to use to execute this command. --allow large results (Optional) Use large destination table sizes for legacy SQL queries. --append table (Optional) Append the loaded data to the existing data in the destination table. --batch (Optional) Run the query in batch mode. --clustering fields = FIELDS (Optional) Specify a comma-separated list of up to four column names that specify the fields to use for table clustering.

