---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.321Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Oracle JA16SJIS and JA16SJISTILDE character encoding support"
feature_slug: "oracle-ja16sjis-and-ja16sjistilde-character-encoding-support"
latest_feature_date: "2024-01-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/configure-your-source-oracle-database"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream"
  - "https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-oracle"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream"
keywords:
  - "oracle"
  - "ja16sjis"
  - "and"
  - "ja16sjistilde"
  - "character"
  - "encoding"
  - "datastream"
  - "supports"
---

# Oracle JA16SJIS and JA16SJISTILDE character encoding support

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream supports the JA16SJIS and JA16SJISTILDE character encodings for Oracle sources.

## Extended Definition

Datastream supports the JA16SJIS and JA16SJISTILDE character encodings for Oracle sources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/configure-your-source-oracle-database](https://docs.cloud.google.com/datastream/docs/configure-your-source-oracle-database)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream)
- [https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-oracle](https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-oracle)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)

## Supporting Pages

### Configure a source Oracle database \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/configure-your-source-oracle-database](https://docs.cloud.google.com/datastream/docs/configure-your-source-oracle-database)
- Source ID: `site-docs-root-2`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Datastream Guides Send feedback Configure a source Oracle database Stay organized with collections Save and categorize content based on your preferences.
- However, this method supports most data types and Oracle database features.
- Supported databases Datastream works with the following types of Oracle databases: Amazon RDS for Oracle Self-managed Oracle database Self-hosted Oracle pluggable database What's next Learn how to configure an Amazon RDS for Oracle database to work with Datastream.
- Datastream can use the following methods to query redo log files: Binary log reader ( Preview ): select this method if you need to query both online and archived redo log files.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All type URL strings must be legal URI references with the additional restriction (for the text format) that the content of the reference must consist only of alphanumeric characters, percent-encoded escapes, and characters in the following set (not including the outer backticks): /-. !$&() +,;= .
- Example: type.googleapis.com/google.protobuf.StringValue This string must contain at least one / character, and the content after the last / must be the fully-qualified name of the type in canonical form, without a leading dot.
- Home Documentation Data analytics Datastream Reference Send feedback MCP Tools Reference: datastream Stay organized with collections Save and categorize content based on your preferences.
- Java is a registered trademark of Oracle and/or its affiliates.

### "Configure an Amazon RDS Oracle database for CDC \_|\_ Datastream \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-oracle](https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-oracle)
- Source ID: `site-docs-root-2`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- To do so, run the following commands: GRANT EXECUTE CATALOG ROLE TO USER NAME ; GRANT CONNECT TO USER NAME ; GRANT CREATE SESSION TO USER NAME ; exec rdsadmin . rdsadmin util . grant sys object ( 'V $DATABASE' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'V $ARCHIVED LOG' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'V $LOG' , ' USER NAME ' , 'SELECT' ); -- for primary databases exec rdsadmin . rdsadmin util . grant sys object ( 'V $STANDBY LOG' , ' USER NAME ' , 'SELECT' ); -- for standby databases exec rdsadmin . rdsadmin util . grant sys object ( 'V $LOGFILE' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'V $LOGMNR LOGS' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'V $LOGMNR CONTENTS' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'V $PARAMETER' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'DBMS LOGMNR' , ' USER NAME ' , 'EXECUTE' ); exec rdsadmin . rdsadmin util . grant sys object ( 'DBMS LOGMNR D' , ' USER NAME ' , 'EXECUTE' ); GRANT SELECT ANY TRANSACTION TO USER NAME ; GRANT SELECT ANY TABLE TO USER NAME ; If your database uses Transparent Data Encryption (TDE), grant the following permissions: exec rdsadmin . rdsadmin util . grant sys object ( 'DBA TABLESPACES' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'DBA ENCRYPTED COLUMNS' , ' USER NAME ' , 'SELECT' ); If your organization doesn't permit granting the GRANT SELECT ANY TABLE permission, use the solution described in the Oracle change data capture (CDC) section of the Datastream FAQ page.
- Home Documentation Data analytics Datastream Guides Send feedback Configure an Amazon RDS Oracle database for CDC Stay organized with collections Save and categorize content based on your preferences.
- You can configure your source Oracle database for use with the following CDC methods: Binary log reader ( Preview ) LogMiner API For more information about the binary log reader and the LogMiner API, see Work with Oracle database redo log files .
- If your source database is Oracle 12c or newer, then grant the following additional privilege: GRANT LOGMINING TO USER NAME ; For each command, replace USER NAME with the name of the user account.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- Source ID: `site-api-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- OracleSourceConfig JSON representation { "includeObjects" : { object ( OracleRdbms ) } , "excludeObjects" : { object ( OracleRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field large objects handling can be only one of the following: "dropLargeObjects" : { object ( DropLargeObjects ) } , "streamLargeObjects" : { object ( StreamLargeObjects ) } // End of list of possible types for union field large objects handling . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( OracleRdbms ) The Oracle objects to include in the stream. excludeObjects object ( OracleRdbms ) The Oracle objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- OracleColumn JSON representation { "column" : string , "dataType" : string , "length" : integer , "precision" : integer , "scale" : integer , "encoding" : string , "primaryKey" : boolean , "nullable" : boolean , "ordinalPosition" : integer } Fields column string The column name. dataType string The Oracle data type. length integer Column length. precision integer Column precision. scale integer Column scale. encoding string Column encoding. primaryKey boolean Whether or not the column represents a primary key. nullable boolean Whether or not the column can accept a null value. ordinalPosition integer The ordinal position of the column in the table.
- The configuration for handle Oracle large objects. large objects handling can be only one of the following: dropLargeObjects object ( DropLargeObjects ) Drop large object values. streamLargeObjects object ( StreamLargeObjects ) Stream large object values.
- Home Documentation Data analytics Datastream Reference Send feedback MCP Tools Reference: datastream Stay organized with collections Save and categorize content based on your preferences.

