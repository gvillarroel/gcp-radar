---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.223Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Nested field references"
feature_slug: "nested-field-references"
latest_feature_date: "2025-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration"
  - "https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding"
keywords:
  - "nested"
  - "field"
  - "references"
  - "the"
  - "transcoder"
  - "configuration"
  - "can"
  - "reference"
---

# Nested field references

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The transcoder configuration can reference nested fields.

## Extended Definition

The transcoder configuration can reference nested fields.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration](https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration)
- [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)

## Supporting Pages

### Transcoder configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- Source ID: `site-docs-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Mainframe Connector Reference Send feedback Transcoder configuration Stay organized with collections Save and categorize content based on your preferences.
- Capture groups from the find regular expression can be used in the replace string using backreferences like $1 , $2 .
- You can configure the Mainframe Connector transcoder by adding the required configuration in a JSON file.
- JSON representation { "filler" : object ( Filler ) , "null if" : object ( NullIf ) , "format date" : object ( FormatDate ) , "chain" : object ( ModifierChain ) , "zoned decimal" : object ( ZonedDecimal ) , "binary" : object ( Binary ) , "packed decimal" : object ( PackedDecimal ) , "null if invalid" : object ( NullIfInvalid ) , "bytes" : object ( Bytes ) , "varlen" : object ( VarLen ) , "string" : object ( String ) , "null if empty" : object ( NullIfEmpty ) , "format timestamp" : object ( FormatTimestamp ) , "hfp" : object ( HFP ) , "decode as null" : object ( DecodeAsNull ) , "encode null as" : object ( EncodeNullAs ) } Fields filler object ( Filler ) Excludes the field from processing and output. null if object ( NullIf ) Conditionally sets the field to null based on the value of another field. format date object ( FormatDate ) Formats a string field as a date. chain object ( ModifierChain ) Chains multiple modifiers to be applied sequentially. zoned decimal object ( ZonedDecimal ) Overrides default configuration for zoned decimal fields. binary object ( Binary ) Overrides default configuration for binary numeric fields. packed decimal object ( PackedDecimal ) Overrides default configuration for packed decimal fields. null if invalid object ( NullIfInvalid ) Sets the field to null if a transcoding error occurs, preventing record spillover. bytes object ( Bytes ) Treats the field as a raw sequence of bytes, ignoring prior type information. varlen object ( VarLen ) Set the record as a variable length field. string object ( String ) Overrides default configuration for string fields. null if empty object ( NullIfEmpty ) Sets the field to null if its content is considered empty. format timestamp object ( FormatTimestamp ) Formats a string field as a timestamp. hfp object ( HFP ) Interprets the field as a Hexadecimal Floating-Point (HFP) number. decode as null object ( DecodeAsNull ) Defines how null values must be decoded. encode null as object ( EncodeNullAs ) Defines how null values must be encoded.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- You can also use this flag with Firestore exports. --quote = QUOTE (Optional) Specify a quote character to surround fields in the CSV data.
- For more information on the transcoder configuration format, see Transcoder configuration . scp Copy files to Cloud Storage.
- For more information on the transcoder configuration format, see Transcoder configuration . qsam encode Encode QSAM data.
- For more information on the transcoder configuration format, see Transcoder configuration .

### Pub/Sub configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration](https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure Mainframe Connector transcoder's Pub/Sub publish formatting by adding the required configuration in a JSON file, and specifying this file using the --input-parameter pubsub-publish-configuration = DataPath option with the qsam decode command.
- JSON representation { "attributes configuration" : object ( AttributesConfiguration ) , "ordering key configuration" : object ( OrderingKeyConfiguration ) , "spillover configuration" : object ( SpilloverConfiguration ) , "batching settings" : object ( BatchingSettings ) , "flow control settings" : object ( FlowControlSettings ) , "concurrency control settings" : object ( ConcurrencyControlSettings ) } Fields attributes configuration object ( AttributesConfiguration ) Specify the attributes configuration.
- The configuration can then be used for message filtering or to convey additional metadata. ordering key configuration object ( OrderingKeyConfiguration ) Specify the ordering key configuration.
- Home Documentation Migration Mainframe Connector Reference Send feedback Pub/Sub configuration Stay organized with collections Save and categorize content based on your preferences.

### "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- You can modify the default behavior of the Mainframe Connector transcoding process by providing a transcoder configuration file using the --transcode-configuration argument. //STEP04 EXEC BQSH //OUTFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //QUERY DD DSN=<HLQ>.QUERY.FILENAME,DISP=SHR //STDIN DD PROJECT=PROJECT NAME qsam encode \ dd:QUERY dd:OUTFILE --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG --input-format=BIGQUERY \ --input-parameter project id= PROJECT NAME \ --input-parameter location= LOCATION / / Replace the following: PROJECT NAME : the name of the project in which you want to execute the query.
- You can modify the default behavior of the Mainframe Connector transcoding process by providing a transcoder configuration file using the --transcode-configuration argument.
- To avoid specifying variables such as project IDs and bucket names in each job control language (JCL) procedure, you can add them in the BQSH PROCLIB and reference them across several JCL procedures as environment variables.
- Home Documentation Migration Mainframe Connector Guides Send feedback Move data transcoded locally on the mainframe to Google Cloud Stay organized with collections Save and categorize content based on your preferences.

