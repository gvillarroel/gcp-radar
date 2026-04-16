---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.230Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Transcoder configuration file"
feature_slug: "transcoder-configuration-file"
latest_feature_date: "2025-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration"
  - "https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
keywords:
  - "transcoder"
  - "configuration"
  - "file"
  - "can"
  - "define"
  - "defaults"
  - "field"
  - "modifiers"
---

# Transcoder configuration file

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

A transcoder configuration file can define defaults, field modifiers, field suffixes, transformations, and schema validation mode.

## Extended Definition

A transcoder configuration file can define defaults, field modifiers, field suffixes, transformations, and schema validation mode.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- [https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration](https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)

## Supporting Pages

### Transcoder configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- Source ID: `site-docs-reference`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "filler" : object ( Filler ) , "null if" : object ( NullIf ) , "format date" : object ( FormatDate ) , "chain" : object ( ModifierChain ) , "zoned decimal" : object ( ZonedDecimal ) , "binary" : object ( Binary ) , "packed decimal" : object ( PackedDecimal ) , "null if invalid" : object ( NullIfInvalid ) , "bytes" : object ( Bytes ) , "varlen" : object ( VarLen ) , "string" : object ( String ) , "null if empty" : object ( NullIfEmpty ) , "format timestamp" : object ( FormatTimestamp ) , "hfp" : object ( HFP ) , "decode as null" : object ( DecodeAsNull ) , "encode null as" : object ( EncodeNullAs ) } Fields filler object ( Filler ) Excludes the field from processing and output. null if object ( NullIf ) Conditionally sets the field to null based on the value of another field. format date object ( FormatDate ) Formats a string field as a date. chain object ( ModifierChain ) Chains multiple modifiers to be applied sequentially. zoned decimal object ( ZonedDecimal ) Overrides default configuration for zoned decimal fields. binary object ( Binary ) Overrides default configuration for binary numeric fields. packed decimal object ( PackedDecimal ) Overrides default configuration for packed decimal fields. null if invalid object ( NullIfInvalid ) Sets the field to null if a transcoding error occurs, preventing record spillover. bytes object ( Bytes ) Treats the field as a raw sequence of bytes, ignoring prior type information. varlen object ( VarLen ) Set the record as a variable length field. string object ( String ) Overrides default configuration for string fields. null if empty object ( NullIfEmpty ) Sets the field to null if its content is considered empty. format timestamp object ( FormatTimestamp ) Formats a string field as a timestamp. hfp object ( HFP ) Interprets the field as a Hexadecimal Floating-Point (HFP) number. decode as null object ( DecodeAsNull ) Defines how null values must be decoded. encode null as object ( EncodeNullAs ) Defines how null values must be encoded.
- You can configure the Mainframe Connector transcoder by adding the required configuration in a JSON file.
- JSON representation { "defaults" : object ( DefaultsSection ) , "field suffixes" : object ( FieldSuffix ) , "field overrides" : object ( FieldOverride ) , "transformations" : object ( Transformation ) , "schema validation mode" : enum ( SchemaValidationMode ) , "header records to skip" : long , "record filter condition" : string } Fields defaults object ( DefaultsSection ) Specify default field modifiers for Cobol archetypes. field suffixes object ( FieldSuffix ) Specify field suffixes. field overrides object ( FieldOverride ) Specify field overrides. transformations object ( Transformation ) Specify field transformations. schema validation mode enum ( SchemaValidationMode ) Specify the schema validation mode. header records to skip long Specify the number of first records to skip. record filter condition string Specify a filter condition for records.
- Example : Binary null-indicator To create a binary null-indicator field, we can use the binary and null if field modifiers like so. { "field suffixes": [ { "suffix": "NID", "modifier": { "binary": {} } }, { "suffix": "NID", "is inverse": true, "modifier": { "null if": { "null value": "15", "target field": "$self" } } } ] } This allows for all fields with the suffix NID to effectively be binary null indicators using the same copybook from the earlier example.

### Pub/Sub configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration](https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure Mainframe Connector transcoder's Pub/Sub publish formatting by adding the required configuration in a JSON file, and specifying this file using the --input-parameter pubsub-publish-configuration = DataPath option with the qsam decode command.
- JSON representation { "attributes configuration" : object ( AttributesConfiguration ) , "ordering key configuration" : object ( OrderingKeyConfiguration ) , "spillover configuration" : object ( SpilloverConfiguration ) , "batching settings" : object ( BatchingSettings ) , "flow control settings" : object ( FlowControlSettings ) , "concurrency control settings" : object ( ConcurrencyControlSettings ) } Fields attributes configuration object ( AttributesConfiguration ) Specify the attributes configuration.
- The configuration can then be used for message filtering or to convey additional metadata. ordering key configuration object ( OrderingKeyConfiguration ) Specify the ordering key configuration.
- OrderingKeyConfiguration The OrderingKeyConfiguration message specifies a static string as the ordering key that defines how the ordering key for Pub/Sub messages is determined.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- For more information on the transcoder configuration format, see Transcoder configuration . scp Copy files to Cloud Storage.
- The default value is true. --schema = SCHEMA (Optional) Specify either the path to a local JSON schema file or a comma-separated list of column definitions in the format FIELD:DATA TYPE , FIELD:DATA TYPE and so on. --schema from copybook = SCHEMA (Optional) Generate the schema from a copybook. --table or -t = TABLE (Optional) Create a table. --time partitioning expiration = SECONDS (Optional) Specify when a time-based partition should be deleted, in seconds.
- You can use one of the following options: directstorage : the binary file is saved locally (default) gcsoutput : the binary file is saved in Cloud Storage --sql = SQL (Optional) Specify the BigQuery SQL query to execute. --stats table = TABLE (Optional) Specify the table to insert statistics into. --timeOutMinutes = MINUTES (Optional) Set the timeout in minutes for the remote grpc call.
- If [PROJECT ID] is missing, the default project is used. --destDSN = OUTPUT (Optional) Specify the destination DSN. --destPath = OUTPUT (Optional) Specify the destination path. --dry run (Optional) Test copybook parsing and decoding of the QSAM file. --encoding = ENCODING (Optional) Specify the character set to use for encoding and decoding character fields.

### "qsam and vsam commands reference \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- You can also define advanced transformations using the Mainframe Connector transcoder configuration file .
- Layout of a redefined field You can use redefinitions in many ways, including the following most common ways: View the same data in two different ways: This is the most common way redefines are used.
- You can define the structure of a QSAM or a VSAM file in a copybook file using the COBOL data structure definition.
- This means that you can't use variable length text fields and packed dynamic lists in redefined fields.

