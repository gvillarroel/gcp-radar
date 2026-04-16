---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.226Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "DecodeAsNull and EncodeNullAs field modifiers"
feature_slug: "decodeasnull-and-encodenullas-field-modifiers"
latest_feature_date: "2025-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/csv-configuration"
  - "https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration"
keywords:
  - "decodeasnull"
  - "and"
  - "encodenullas"
  - "field"
  - "modifiers"
  - "the"
  - "transcoder"
  - "configuration"
---

# DecodeAsNull and EncodeNullAs field modifiers

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The transcoder configuration includes DecodeAsNull and EncodeNullAs modifiers for null handling.

## Extended Definition

The transcoder configuration includes DecodeAsNull and EncodeNullAs modifiers for null handling.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/csv-configuration](https://docs.cloud.google.com/mainframe-connector/docs/csv-configuration)
- [https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration](https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration)

## Supporting Pages

### Transcoder configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- Source ID: `site-docs-reference`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "filler" : object ( Filler ) , "null if" : object ( NullIf ) , "format date" : object ( FormatDate ) , "chain" : object ( ModifierChain ) , "zoned decimal" : object ( ZonedDecimal ) , "binary" : object ( Binary ) , "packed decimal" : object ( PackedDecimal ) , "null if invalid" : object ( NullIfInvalid ) , "bytes" : object ( Bytes ) , "varlen" : object ( VarLen ) , "string" : object ( String ) , "null if empty" : object ( NullIfEmpty ) , "format timestamp" : object ( FormatTimestamp ) , "hfp" : object ( HFP ) , "decode as null" : object ( DecodeAsNull ) , "encode null as" : object ( EncodeNullAs ) } Fields filler object ( Filler ) Excludes the field from processing and output. null if object ( NullIf ) Conditionally sets the field to null based on the value of another field. format date object ( FormatDate ) Formats a string field as a date. chain object ( ModifierChain ) Chains multiple modifiers to be applied sequentially. zoned decimal object ( ZonedDecimal ) Overrides default configuration for zoned decimal fields. binary object ( Binary ) Overrides default configuration for binary numeric fields. packed decimal object ( PackedDecimal ) Overrides default configuration for packed decimal fields. null if invalid object ( NullIfInvalid ) Sets the field to null if a transcoding error occurs, preventing record spillover. bytes object ( Bytes ) Treats the field as a raw sequence of bytes, ignoring prior type information. varlen object ( VarLen ) Set the record as a variable length field. string object ( String ) Overrides default configuration for string fields. null if empty object ( NullIfEmpty ) Sets the field to null if its content is considered empty. format timestamp object ( FormatTimestamp ) Formats a string field as a timestamp. hfp object ( HFP ) Interprets the field as a Hexadecimal Floating-Point (HFP) number. decode as null object ( DecodeAsNull ) Defines how null values must be decoded. encode null as object ( EncodeNullAs ) Defines how null values must be encoded.
- Example : Binary null-indicator To create a binary null-indicator field, we can use the binary and null if field modifiers like so. { "field suffixes": [ { "suffix": "NID", "modifier": { "binary": {} } }, { "suffix": "NID", "is inverse": true, "modifier": { "null if": { "null value": "15", "target field": "$self" } } } ] } This allows for all fields with the suffix NID to effectively be binary null indicators using the same copybook from the earlier example.
- Example : Bytes null-indicator To create a bytes null-indicator field, we can use the bytes and null if field modifiers like so.
- The qsam encode and qsam decode commands use the transcoder configuration file to perform data transcoding.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- The supported format is [PROJECT]:[DATASET].[TABLE] --project id = ID Specify the project to use to execute this command. --allow jagged rows (Optional) Allow missing trailing optional columns in CSV data. --allow quoted newlines (Optional) Allow quoted newlines within CSV data. --append table (Optional) Append the loaded data to the existing data in the destination table. --autodetect (Optional) Enable automatic schema detection for CSV and JSON data. --clustering fields = FIELDS (Optional) If specified, a comma-separated list of columns is used to cluster the destination table in a query.
- The bq query command uses the following flags and arguments: --project id = ID Specify the project to use to execute this command. --allow large results (Optional) Use large destination table sizes for legacy SQL queries. --append table (Optional) Append the loaded data to the existing data in the destination table. --batch (Optional) Run the query in batch mode. --clustering fields = FIELDS (Optional) Specify a comma-separated list of up to four column names that specify the fields to use for table clustering.
- The default value is true. --schema = SCHEMA (Optional) Specify either the path to a local JSON schema file or a comma-separated list of column definitions in the format FIELD:DATA TYPE , FIELD:DATA TYPE and so on. --schema from copybook = SCHEMA (Optional) Generate the schema from a copybook. --table or -t = TABLE (Optional) Create a table. --time partitioning expiration = SECONDS (Optional) Specify when a time-based partition should be deleted, in seconds.
- If [PROJECT ID] is missing, the default project is used. --destDSN = OUTPUT (Optional) Specify the destination DSN. --destPath = OUTPUT (Optional) Specify the destination path. --dry run (Optional) Test copybook parsing and decoding of the QSAM file. --encoding = ENCODING (Optional) Specify the character set to use for encoding and decoding character fields.

### CSV configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/csv-configuration](https://docs.cloud.google.com/mainframe-connector/docs/csv-configuration)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure the Mainframe Connector transcoder's CSV formatting by adding the required configuration in a JSON file, and specifying this file using the --input-parameter csv-dialect = DataPath option with the qsam encode or qsam decode commands.
- Enums MINIMAL Quotes fields which contain special characters such as a the field delimiter, and quotes character or any of the characters in the line separator string.
- CsvConfiguration The CsvConfiguration object lets you configure the CSV decode and encoder configuration.
- The CsvConfiguration object contains all CSV encoder and decoder configuration options.

### Pub/Sub configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration](https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure Mainframe Connector transcoder's Pub/Sub publish formatting by adding the required configuration in a JSON file, and specifying this file using the --input-parameter pubsub-publish-configuration = DataPath option with the qsam decode command.
- JSON representation { "attributes configuration" : object ( AttributesConfiguration ) , "ordering key configuration" : object ( OrderingKeyConfiguration ) , "spillover configuration" : object ( SpilloverConfiguration ) , "batching settings" : object ( BatchingSettings ) , "flow control settings" : object ( FlowControlSettings ) , "concurrency control settings" : object ( ConcurrencyControlSettings ) } Fields attributes configuration object ( AttributesConfiguration ) Specify the attributes configuration.
- JSON representation { "limit exceeded behavior" : enum ( LimitExceededBehavior ) , "max outstanding element count" : long , "max outstanding request bytes" : long } Fields limit exceeded behavior enum ( LimitExceededBehavior ) Specify the behavior when flow control limits are exceeded.
- PubsubPublishConfiguration The PubsubPublishConfiguration object lets you configure the messages that get sent to Pub/Sub and is used with the qsam decode command.

