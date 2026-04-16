---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.229Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Compound data type support"
feature_slug: "compound-data-type-support"
latest_feature_date: "2025-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/data-types"
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
keywords:
  - "compound"
  - "type"
  - "the"
  - "transcoding"
  - "framework"
  - "supports"
  - "types"
  - "such"
---

# Compound data type support

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The transcoding framework supports compound data types such as OCCURS, REDEFINES, and nested records.

## Extended Definition

The transcoding framework supports compound data types such as OCCURS, REDEFINES, and nested records.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/data-types](https://docs.cloud.google.com/mainframe-connector/docs/data-types)
- [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)

## Supporting Pages

### Mainframe Connector data types \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/data-types](https://docs.cloud.google.com/mainframe-connector/docs/data-types)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following tables lists all the data types that Mainframe Connector supports.
- COBOL usage type Supported flags Condition Optimized Row Columnar (ORC)​​ type Type Decoding behavior ( gsutil cp ) Encoding behavior ( bq export ) COMP1 , COMP2 Double FLOAT64 Encodes the String , Double , and Float data types.
- Encodes the String , LocalDate , BigDecimal , and Timestamp data types.
- Encodes the String , LocalDate , and BigDecimal data types.

### "qsam and vsam commands reference \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Decode mainframe data to Google Cloud Encode Google Cloud data to the mainframe This page provides an overview of the transcoding process using the qsam decode , qsam encode , and vsam decode commands, the physical and logical types of mainframe data, and the Optimized Row Columnar (ORC) and BigQuery type mappings.
- Mainframe Connector supports the following types of lists: Fixed lists Dynamic lists Packed dynamic lists Fixed lists Fixed lists are used when the exact number of items (item count) that will be a part of the list is known in advance, and this number always remains the same.
- You can use the following example to implement a tagged union: { "field override": [ { "field": "VARIANT-1", "modifier": { "null if": { "target field": "TYPE", "non null value": "VAR1" } } }, { "field": "VARIANT-2", "modifier": { "null if": { "target field": "TYPE", "non null value": "VAR2" } } } ], "transformations": [ { "field": "DATA", "transformation": { "exclude": {}} } ] } Logical Types To transcode data to and from multiple formats, Mainframe Connector converts all data to an intermediate representation (IR) that is based on logical types.
- Logical type ORC type BigDecimal decimal BigInteger decimal Bytes binary blob Date date Decimal64 decimal64 Double float64 List list Long 64-bit integer (bigint) Record struct String UTF-8 encoded string Timestamp timestamp (without local timezone) BigQuery type mapping The following table provides the mapping between Mainframe Connector logical types to BigQuery data types.

### "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Using qsam commands (release 5.16.0 and later) Using the vsam decode command (release 5.18.0 and later) Using the gsutil cp command Advantages of qsam and vsam commands The qsam and vsam commands provide the following advantages: Support for compound data types, including the OCCURS clause (lists), REDEFINES clause, and nested records.
- For more information about these data types, see qsam and vsam transcoding reference .
- You can modify the default behavior of the Mainframe Connector transcoding process by providing a transcoder configuration file using the --transcode-configuration argument. //STEP04 EXEC BQSH //OUTFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //QUERY DD DSN=<HLQ>.QUERY.FILENAME,DISP=SHR //STDIN DD PROJECT=PROJECT NAME qsam encode \ dd:QUERY dd:OUTFILE --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG --input-format=BIGQUERY \ --input-parameter project id= PROJECT NAME \ --input-parameter location= LOCATION / / Replace the following: PROJECT NAME : the name of the project in which you want to execute the query.
- Transcoding is done during the qsam decode , vsam decode , or gsutil cp operations (based on the command you choose), where a mainframe extended binary coded decimal interchange code (EBCDIC) dataset is converted to the ORC format in UTF-8 during the copy to a Cloud Storage bucket.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- If time-based partitioning is enabled without this value, then the table is partitioned based on the load time. --time partitioning type = TYPE (Optional) Enable time-based partitioning on a table and set the partition type using the following value: DAY . --use avro logical types = {true false} (Optional) If --source format is set to AVRO , then set this flag to true to convert logical types into their corresponding types (such as TIMESTAMP ) instead of only using their raw types (such as INTEGER ).
- Parameter Types These common types used in Mainframe Connector commands.
- The default value is true. --schema = SCHEMA (Optional) Specify either the path to a local JSON schema file or a comma-separated list of column definitions in the format FIELD:DATA TYPE , FIELD:DATA TYPE and so on. --schema from copybook = SCHEMA (Optional) Generate the schema from a copybook. --table or -t = TABLE (Optional) Create a table. --time partitioning expiration = SECONDS (Optional) Specify when a time-based partition should be deleted, in seconds.
- If time-based partitioning is enabled without this value, then the table is partitioned based on the load time. --time partitioning type = TYPE (Optional) Enable time-based partitioning on a table and set the partition type using one of the following values: DAY , HOUR , MONTH , YEAR . --use cache = {true false} (Optional) To cache the query results, set to true.

