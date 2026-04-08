# Mainframe Connector

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 11
Unique features: 54

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-12-04 | DSN DataPath writemode options |  | DSN DataPaths can be configured with writemode values OLD, MOD, or SHR. |
| 2025-12-04 | QSAM decode split transformation |  | The QSAM decode command can split datasets into multiple tables during transformation. |
| 2025-09-09 | Binary copy command |  | The copy binary command transfers binary files between mainframe and Google Cloud in both directions. |
| 2025-09-09 | Nested field references |  | The transcoder configuration can reference nested fields. |
| 2025-09-09 | QSAM decode filtering |  | The QSAM decode command supports filtering rules defined in the transcoder configuration. |
| 2025-09-09 | QSAM encode ORC input support |  | The QSAM encode command accepts ORC as an input format. |
| 2025-09-09 | QSAM variable-length records |  | QSAM decode and encode support variable-length records in standard LLZZ format by default; QSAM decode and encode support recfm=V files. |
| 2025-09-09 | Schema validation modes for PostgreSQL and MySQL |  | The transcoder configuration supports new schema validation modes for PostgreSQL and MySQL. |
| 2025-09-09 | VSAM decode command |  | The vsam decode command decodes Virtual Storage Access Method files. |
| 2025-07-03 | QSAM decode output prefix |  | The QSAM decode command can use a configurable prefix for output and spillover files. |
| 2025-06-19 | Copy text command |  | The copy text command copies text files between mainframe and Google Cloud in both directions. |
| 2025-06-19 | DecodeAsNull and EncodeNullAs field modifiers |  | The transcoder configuration includes DecodeAsNull and EncodeNullAs modifiers for null handling. |
| 2025-06-19 | Java 17 support |  | Mainframe Connector supports mainframes that run Java 17. |
| 2025-06-19 | NullIf multiple values |  | The NullIf field modifier can accept multiple values. |
| 2025-06-19 | Pub/Sub topic publishing |  | The QSAM decode command or the pubsub topics publish command can send messages to a Pub/Sub topic. |
| 2025-06-19 | QSAM to CSV transcoding |  | QSAM data can be transcoded to CSV and back. |
| 2025-06-19 | QSAM to JSON transcoding |  | QSAM data can be transcoded to JSON and back. |
| 2025-06-19 | QSAM transcoding commands |  | The qsam decode and qsam encode commands are generally available; The preview transcoding framework introduces the qsam decode and qsam encode commands. |
| 2025-04-03 | Compound data type support |  | The transcoding framework supports compound data types such as OCCURS, REDEFINES, and nested records. |
| 2025-04-03 | Java 17 runtime for remote and standalone modes |  | Remote and standalone modes use Java 17 instead of Java 8. |
| 2025-04-03 | Spillover dataset |  | The transcoding framework can create a spillover dataset for auditing or debugging errors. |
| 2025-04-03 | Transcoder configuration file |  | A transcoder configuration file can define defaults, field modifiers, field suffixes, transformations, and schema validation mode. |
| 2025-02-13 | bq load max_polling_interval_ms |  | The bq load command can wait up to a configurable max_polling_interval_ms for BigQuery jobs. |
| 2025-02-13 | Cloud Run jobs integration |  | Cloud Run jobs can integrate extraction, transformation, and loading tools with Mainframe Connector. |
| 2025-02-13 | Google Analytics usage collection |  | Mainframe Connector collects usage data with Google Analytics by default, and it can be disabled. |
| 2025-02-13 | gsutil cp maxChunkSize |  | The gsutil cp command can use chunk sizes below 64 MiB with maxChunkSize. |
| 2024-11-21 | Bytes null indicator |  | The bytes null indicator is supported. |
| 2024-11-21 | Custom character set support |  | Imports to BigQuery and exports from BigQuery can use customized character sets. |
| 2024-11-21 | gsutil cp configurable null termination |  | The gsutil cp command can configure null termination. |
| 2024-11-21 | gsutil cp dry-run mode |  | The gsutil cp command supports dry-run mode when importing data to BigQuery. |
| 2024-09-30 | BigQuery table from copybook |  | A BigQuery table can be created from a copybook. |
| 2024-09-30 | bq export performance improvements |  | The bq export command has performance improvements for local and remote modes. |
| 2024-09-30 | Empty values as null feature flag |  | The BQSH_FEATURE_EMPTY_VALUES_ARE_NULL flag treats empty values as null when BQSH_FEATURE_FAIL_ON_INVALID_DATA is enabled. |
| 2024-09-30 | gsutil cp Cloud Storage to mainframe dataset copy |  | The gsutil cp command can copy files from Cloud Storage to a mainframe dataset. |
| 2024-09-30 | gsutil cp input and copybook DSN parameters |  | The gsutil cp command accepts inDsn and cobDsn parameters. |
| 2024-09-30 | Null indicator fields |  | Null indicator fields are supported. |
| 2024-09-30 | Standalone mode |  | Mainframe Connector supports standalone mode for both data import and export flows. |
| 2024-09-30 | systemreport command |  | The new systemreport command reports system information. |
| 2024-09-30 | VALUE clause support |  | The VALUE clause is supported. |
| 2024-07-01 | bq query audit logs |  | The bq query command can write audit logs. |
| 2024-07-01 | DBCS textual types |  | All DBCS textual types, including N and G, are supported. |
| 2024-07-01 | Enhanced logging |  | Logging output is improved with a new format and a more resilient Cloud Logging implementation. |
| 2024-07-01 | gsutil cp performance improvements |  | The gsutil cp command runs faster. |
| 2024-07-01 | IBM HFP data types |  | Single and double IBM hexadecimal floating-point data types are supported. |
| 2024-07-01 | Native copybook parser |  | The bq export command supports the Native copybook parser. |
| 2024-07-01 | remoteUrl option |  | Remote mode commands can use remoteUrl instead of separate remoteHost and remotePort settings. |
| 2024-05-02 | BigQuery DATE and TIMESTAMP types |  | The connector supports BigQuery DATE and TIMESTAMP types with configurable field suffix and format patterns. |
| 2024-05-02 | PIC U and PIC N support |  | The PIC U and PIC N picture types are supported for national and DBCS fields. |
| 2024-05-02 | SIGN clause support |  | The SIGN clause is supported. |
| 2024-05-02 | Signed and unsigned zoned decimal data types |  | Signed and unsigned zoned decimal data types are supported up to precision 38 and scale 38. |
| 2024-05-02 | Variable length data type |  | Variable length data type is supported. |
| 2024-03-28 | bq export with remote service |  | The bq export command supports Mainframe Connector Remote Service. |
| 2024-03-28 | bq query split_sql optimization |  | The bq query command uses split_sql by default to split multiple SQL statements into parallel requests and skip comment-only statements. |
| 2024-03-28 | Cloud Run remote service deployment with Terraform |  | Cloud Run remote service deployment can be managed with Terraform. |

Source file slug: `mainframe-connector.md`

