---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.237Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "VALUE clause support"
feature_slug: "value-clause-support"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
keywords:
  - "value"
  - "clause"
  - "the"
  - "is"
  - "supported"
---

# VALUE clause support

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The VALUE clause is supported.

## Extended Definition

The VALUE clause is supported.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)

## Supporting Pages

### Copybook parser reference \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- If you use these constructs in your copybook, Mainframe Connector shows an error. dataAlignedClause dataBlankWhenZeroClause dataCommonOwnLocalClause dataIntegerStringClause dataJustifiedClause dataOccursClause dataReceivedByClause dataRecordAreaClause dataRenamesClause dataSignClause dataSynchronizedClause dataThreadLocalClause dataTypeClause dataTypeDefClause dataUsingClause Data types COBOL data types like COMP-1 and COMP-2 are supported.
- For more information about supported timezone formats, see Supported timezone formats . --omitsuffix (Optional): If this parameter is specified, -SUFFIX STRING or SUFFIX STRING is removed from the field name appearing in BigQuery.
- The following PICTURE fields are supported: Pic A, Pic, B, Pic G (DBCS), Pic N (national or DBCS), Pic U (UTF8), Pic X, and zoned decimal (max precision 38, max scale 38) IBM Hexadecimal floating point (HFP) is supported.
- The following list describes the parameters you can use with these environment variables: command : The value must be null-indicator . –null-value : The value null indicator signals that the referenced field is null.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- The following VALUE clauses are supported: VAR1 PIC 9(5) VALUE 55. -- Set VAR1 to 55 VAR1 PIC X(5) VALUE aaaa.
- You can provide the value in the following formats: Java format: b/k/m/g/t, for byte, kibibyte, mebibyte, gibibyte, and tebibyte respectively International format: KiB/MiB/GiB/TiB, for kibibyte, mebibyte, gibibyte, and tebibyte respectively Metric format: b/kb/mb/gb/tb, for kilobyte, megabyte, gigabyte, and terabyte respectively Data size parsing is case insensitive.
- Mainframe Connector supports the following subset of the UCM format: <code set name> "<name>" <uconv class> "SBCS" <subchar> \x1A #Example CHARMAP # <U0000> \x00 0 #For the third column, only 0 is supported. <U0001> \x01 0 #etc END CHARMAP If you want to use a customized character set, define a configuration file in the UCM format.
- The default value is the same as that of the value set for exporter thread count . order response : (Optional) If you set this flag to true, the exporter retains the query result order.

### Run Mainframe Connector in standalone mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- Source ID: `site-docs-root-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example YAML file: environmentVariables: - name: "QUERY" value: "gs://my bucket/my/input.sql" - name: "OUTFILE" value: "gs://my bucket/my/output.orc" - name: "COPYBOOK" value: "gs://my bucket/my/copybook.cpy" - name: "TRANSCODE CONFIGURATION" value: "gs://my bucket/my/transcode-configuration-file.json" - name: "PROJECT ID" value: "my-project" - name: "LOCATION" value: "US" - name: "LOG PROJECT" value: "my-log-project" - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam encode \ $QUERY $OUTFILE --copybook ${COPYBOOK PATH} --transcode-configuration ${TRANSCODE CONFIGURATION PATH} --input-format=BIGQUERY \ --input-parameter project id=${PROJECT ID} \ --input-parameter location=${LOCATION} Use bq export command environmentVariables: - name: "COPYBOOK" value: " COPYBOOK FILEPATH " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: bq export --project id=" PROJECT NAME " --location=" LOCATION " --sql="select from project.dataset.table" --bucket=" BUCKET " Replace the following: COPYBOOK FILEPATH : The path to the copybook DD.
- The following is an example YAML file: environmentVariables: - name: "INFILE" value: "gs://my bucket/my/input.dat" - name: "OUTFILE" value: "gs://my bucket/my/output.orc" - name: "COPYBOOK" value: "gs://my bucket/my/copybook.cpy" - name: "TRANSCODE CONFIGURATION" value: "gs://my bucket/my/transcode-configuration-file.json" - name: "LOG PROJECT" value: "the log project" - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam decode $INFILE $OUTFILE --copybook $COPYBOOK --transcode-configuration ${TRANSCODE CONFIGURATION} --output-format orc --parallelism 8 --chunk-size "512Mib" Note Variables with the suffix FILLER are ignored during the import process.
- In the following sample, we use the Cloud Storage DataPath for INFILE , OUTFILE , COPYBOOK , and TRANSCODE CONFIGURATION . environmentVariables: - name: "INFILE" value: " INFILE " - name: "OUTFILE" value: " OUTFILE " - name: "COPYBOOK" value: " COPYBOOK " - name: "TRANSCODE CONFIGURATION" value: " TRANSCODE CONFIGURATION " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam decode $INFILE $OUTFILE --copybook $COPYBOOK --transcode-configuration ${TRANSCODE CONFIGURATION} --output-format orc --parallelism 8 --chunk-size "512Mib" Replace the following: INFILE : The name of the input file.
- In the following sample, read the data from the INFILE dataset , and the record layout from the COPYBOOK DD . environmentVariables: - name: "INFILE" value: " INFILE " - name: "INFILE DSN" value: " INFILE DSN " - name: "GCSDSNURI" value: " INFILE DSN FILEPATH " - name: "COPYBOOK" value: " COPYBOOK FILEPATH " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: gsutil cp gs://outputbucket/output --parallelism 8 --maxChunkSize "512Mib" --parser type=copybook Replace the following: INFILE : The name of the input file.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- If not specified will use job default. --update-env-vars = ENVVARS (Optional) List of key-value pairs to set as environment variables overrides for an execution of a job. --wait (Optional) Specify this flag if you want the command to wait until the execution has completed running before exiting. cloud run job log Display cloud run logs Synopsis cloud run job log [-h] [--tail] [--log-filter= FILTER ] [--polling-interval= POLLINGINTERVAL ] --project= PROJECT --region= REGION [--timeout= TIMEOUT ] EXECUTION-ID Flags and arguments The cloud run job log command uses the following flags and arguments: EXECUTION-ID The name of the Cloud Run job execution id. --help or -h (Optional) Display this help message. --log-filter = FILTER (Optional) Filter expression that specifies the log entries to return. --polling-interval = POLLINGINTERVAL (Optional) Sets the polling interval for displaying logs when --tail logs is enabled.
- The supported format is [PROJECT]:[DATASET].[TABLE] --project id = ID Specify the project to use to execute this command. --allow jagged rows (Optional) Allow missing trailing optional columns in CSV data. --allow quoted newlines (Optional) Allow quoted newlines within CSV data. --append table (Optional) Append the loaded data to the existing data in the destination table. --autodetect (Optional) Enable automatic schema detection for CSV and JSON data. --clustering fields = FIELDS (Optional) If specified, a comma-separated list of columns is used to cluster the destination table in a query.
- If time-based partitioning is enabled without this value, then the table is partitioned based on the load time. --time partitioning type = TYPE (Optional) Enable time-based partitioning on a table and set the partition type using the following value: DAY . --use avro logical types = {true false} (Optional) If --source format is set to AVRO , then set this flag to true to convert logical types into their corresponding types (such as TIMESTAMP ) instead of only using their raw types (such as INTEGER ).
- If provided, an execution will be created with the input values. --async (Optional) Specify this flag if you want to return immediately, without waiting for the operation in progress to complete. --dump-execution-id = EXECUTION-ID : DataPath (Optional) Specify the file to write the execution ID to. --help or -h (Optional) Display this help message. --polling-interval = POLLINGINTERVAL (Optional) Sets the polling interval for displaying logs when --tail logs is enabled.

