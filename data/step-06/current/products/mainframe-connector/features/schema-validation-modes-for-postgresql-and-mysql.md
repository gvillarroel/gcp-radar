---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.224Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Schema validation modes for PostgreSQL and MySQL"
feature_slug: "schema-validation-modes-for-postgresql-and-mysql"
latest_feature_date: "2025-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
keywords:
  - "schema"
  - "validation"
  - "modes"
  - "for"
  - "postgresql"
  - "and"
  - "mysql"
  - "the"
---

# Schema validation modes for PostgreSQL and MySQL

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The transcoder configuration supports new schema validation modes for PostgreSQL and MySQL.

## Extended Definition

The transcoder configuration supports new schema validation modes for PostgreSQL and MySQL.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)

## Supporting Pages

### Transcoder configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "defaults" : object ( DefaultsSection ) , "field suffixes" : object ( FieldSuffix ) , "field overrides" : object ( FieldOverride ) , "transformations" : object ( Transformation ) , "schema validation mode" : enum ( SchemaValidationMode ) , "header records to skip" : long , "record filter condition" : string } Fields defaults object ( DefaultsSection ) Specify default field modifiers for Cobol archetypes. field suffixes object ( FieldSuffix ) Specify field suffixes. field overrides object ( FieldOverride ) Specify field overrides. transformations object ( Transformation ) Specify field transformations. schema validation mode enum ( SchemaValidationMode ) Specify the schema validation mode. header records to skip long Specify the number of first records to skip. record filter condition string Specify a filter condition for records.
- Examples: "new field name" (replaces the field with a fixed name) "new $1" (uses the first capture group from find ) "${1} new" (alternative syntax for capture groups) "prefix $1 suffix" (uses a capture group and adds prefixes/suffixes) Split JSON representation { "field" : string , "primary key" : string , "foreign key" : string } Fields field string Specify the field you want to split. primary key string Specify the field name that will be used as a primary key. foreign key string Specify the name for the field that will be added to the new schema where the primary-key value will be stored.
- This mode extends the default validation to verify that the copybook's schema is compatible with PostgreSQL data types.
- This mode extends the default validation to verify that the copybook's schema is compatible with MySQL data types.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- The supported format is [PROJECT]:[DATASET].[TABLE] --project id = ID Specify the project to use to execute this command. --allow jagged rows (Optional) Allow missing trailing optional columns in CSV data. --allow quoted newlines (Optional) Allow quoted newlines within CSV data. --append table (Optional) Append the loaded data to the existing data in the destination table. --autodetect (Optional) Enable automatic schema detection for CSV and JSON data. --clustering fields = FIELDS (Optional) If specified, a comma-separated list of columns is used to cluster the destination table in a query.
- The default value is true. --schema = SCHEMA (Optional) Specify either the path to a local JSON schema file or a comma-separated list of column definitions in the format FIELD:DATA TYPE , FIELD:DATA TYPE and so on. --schema from copybook = SCHEMA (Optional) Generate the schema from a copybook. --table or -t = TABLE (Optional) Create a table. --time partitioning expiration = SECONDS (Optional) Specify when a time-based partition should be deleted, in seconds.
- If not specified will use job default. --update-env-vars = ENVVARS (Optional) List of key-value pairs to set as environment variables overrides for an execution of a job. --wait (Optional) Specify this flag if you want the command to wait until the execution has completed running before exiting. cloud run job log Display cloud run logs Synopsis cloud run job log [-h] [--tail] [--log-filter= FILTER ] [--polling-interval= POLLINGINTERVAL ] --project= PROJECT --region= REGION [--timeout= TIMEOUT ] EXECUTION-ID Flags and arguments The cloud run job log command uses the following flags and arguments: EXECUTION-ID The name of the Cloud Run job execution id. --help or -h (Optional) Display this help message. --log-filter = FILTER (Optional) Filter expression that specifies the log entries to return. --polling-interval = POLLINGINTERVAL (Optional) Sets the polling interval for displaying logs when --tail logs is enabled.
- The bq query command uses the following flags and arguments: --project id = ID Specify the project to use to execute this command. --allow large results (Optional) Use large destination table sizes for legacy SQL queries. --append table (Optional) Append the loaded data to the existing data in the destination table. --batch (Optional) Run the query in batch mode. --clustering fields = FIELDS (Optional) Specify a comma-separated list of up to four column names that specify the fields to use for table clustering.

### "qsam and vsam commands reference \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- You can use the following example to implement a tagged union: { "field override": [ { "field": "VARIANT-1", "modifier": { "null if": { "target field": "TYPE", "non null value": "VAR1" } } }, { "field": "VARIANT-2", "modifier": { "null if": { "target field": "TYPE", "non null value": "VAR2" } } } ], "transformations": [ { "field": "DATA", "transformation": { "exclude": {}} } ] } Logical Types To transcode data to and from multiple formats, Mainframe Connector converts all data to an intermediate representation (IR) that is based on logical types.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Mainframe Connector transcodes Queued Sequential Access Method (QSAM) flat files to Google Cloud compatible formats, and the other way around using the qsam commands.
- The data is treated as a series of characters and is stored as strings with a specific encoding, for example, Extended Binary Coded Decimal Interchange Code (EBCDIC).

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- To copy a file from Cloud Storage to a Mainframe dataset, specify the DSN and space requirements of the file you want to download to the Mainframe in JCL, as shown in the following example: //OUTFILE DD DSN=MAINFRAME.DSN.FILE,DISP=(,CATLG), // RECFM=FB,DSORG=PS, // SPACE=(10,(2,1),RLSE), // AVGREC=M, // UNIT=SYSDA //SYSPRINT DD SYSOUT= //SYSDUMP DD SYSOUT= //STDIN DD Specify the gsutil cp command in the following format.
- Query file SELECT FROM bigquery-public-data.samples.wikipedia WHERE title = @mytitle AND num characters > @min chars; Execution example bq query \ --project id=mainframe-connector-dev \ --location="US" \ --parameters=mytitle::Hippocrates,min chars:INT64:42600 Perform a dry run of the gsutil cp command The gsutil cp command decodes a QSAM file using a COBOL copybook, and generates an ORC file on Cloud Storage.
- You can provide the value in the following formats: Java format: b/k/m/g/t, for byte, kibibyte, mebibyte, gibibyte, and tebibyte respectively International format: KiB/MiB/GiB/TiB, for kibibyte, mebibyte, gibibyte, and tebibyte respectively Metric format: b/kb/mb/gb/tb, for kilobyte, megabyte, gigabyte, and terabyte respectively Data size parsing is case insensitive.

