---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.317Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Oracle binary log reader CDC method"
feature_slug: "oracle-binary-log-reader-cdc-method"
latest_feature_date: "2024-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle"
  - "https://docs.cloud.google.com/datastream/docs/configure-self-managed-oracle"
  - "https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-oracle"
  - "https://docs.cloud.google.com/datastream/docs/create-a-stream"
keywords:
  - "oracle"
  - "binary"
  - "log"
  - "reader"
  - "cdc"
  - "method"
  - "datastream"
  - "supports"
---

# Oracle binary log reader CDC method

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream supports the binary log reader change data capture method for Oracle sources.

## Extended Definition

Datastream supports the binary log reader change data capture method for Oracle sources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle](https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle)
- [https://docs.cloud.google.com/datastream/docs/configure-self-managed-oracle](https://docs.cloud.google.com/datastream/docs/configure-self-managed-oracle)
- [https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-oracle](https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-oracle)
- [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)

## Supporting Pages

### "Configure a pluggable Oracle database for CDC \_|\_ Datastream \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle](https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To configure your pluggable Oracle database for use with the binary log reader CDC method, perform the following steps: Select one of the following methods to access your log files: Automatic Storage Management (ASM) : if you select this option, you need to create a dedicated ASM connection, and provide its details when you create your connection profile.
- You can configure your pluggable Oracle database for use with the following CDC methods: Binary log reader ( Preview ) LogMiner API For more information about the binary log reader and the LogMiner API, see Work with Oracle database redo log files .
- Configure your pluggable Oracle database for binary log reader Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- If you select the binary log reader method and use database directories, you need to provide the redo log and archived log directory names when you create your stream.

### "Configure a self-managed Oracle database for CDC \_|\_ Datastream \_|\_\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-self-managed-oracle](https://docs.cloud.google.com/datastream/docs/configure-self-managed-oracle)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure your self-managed Oracle database to work with the following CDC methods: Binary log reader ( Preview ) LogMiner API These methods specify how Datastream accesses your log files.
- To configure your self-managed Oracle database for use with the binary log reader CDC method, perform the following steps: Select one of the following methods to access your log files: Automatic Storage Management (ASM) : if you select this option, you need to create a dedicated ASM connection, and provide its details when you create your connection profile.
- V $PARAMETER TO USER NAME ; GRANT EXECUTE ON DBMS LOGMNR TO USER NAME ; GRANT EXECUTE ON DBMS LOGMNR D TO USER NAME ; GRANT SELECT ANY TRANSACTION TO USER NAME ; GRANT SELECT ANY TABLE TO USER NAME ; If your database uses Transparent Data Encryption (TDE), grant the following permissions: GRANT SELECT ON DBA TABLESPACES TO USER NAME ; GRANT SELECT ON DBA ENCRYPTED COLUMNS TO USER NAME ; If your organization doesn't permit granting the GRANT SELECT ANY TABLE permission, use the solution described in the Oracle change data capture (CDC) section of the Datastream FAQ page.
- Configure your self managed Oracle database for binary log reader Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### "Configure an Amazon RDS Oracle database for CDC \_|\_ Datastream \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-oracle](https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-oracle)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure your source Oracle database for use with the following CDC methods: Binary log reader ( Preview ) LogMiner API For more information about the binary log reader and the LogMiner API, see Work with Oracle database redo log files .
- For Amazon RDS sources, Datastream supports only database directory objects as the log access method for the binary log reader.
- To do so, run the following commands: GRANT EXECUTE CATALOG ROLE TO USER NAME ; GRANT CONNECT TO USER NAME ; GRANT CREATE SESSION TO USER NAME ; exec rdsadmin . rdsadmin util . grant sys object ( 'V $DATABASE' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'V $ARCHIVED LOG' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'V $LOG' , ' USER NAME ' , 'SELECT' ); -- for primary databases exec rdsadmin . rdsadmin util . grant sys object ( 'V $STANDBY LOG' , ' USER NAME ' , 'SELECT' ); -- for standby databases exec rdsadmin . rdsadmin util . grant sys object ( 'V $LOGFILE' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'V $LOGMNR LOGS' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'V $LOGMNR CONTENTS' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'V $PARAMETER' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'DBMS LOGMNR' , ' USER NAME ' , 'EXECUTE' ); exec rdsadmin . rdsadmin util . grant sys object ( 'DBMS LOGMNR D' , ' USER NAME ' , 'EXECUTE' ); GRANT SELECT ANY TRANSACTION TO USER NAME ; GRANT SELECT ANY TABLE TO USER NAME ; If your database uses Transparent Data Encryption (TDE), grant the following permissions: exec rdsadmin . rdsadmin util . grant sys object ( 'DBA TABLESPACES' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'DBA ENCRYPTED COLUMNS' , ' USER NAME ' , 'SELECT' ); If your organization doesn't permit granting the GRANT SELECT ANY TABLE permission, use the solution described in the Oracle change data capture (CDC) section of the Datastream FAQ page.
- Configure your Amazon RDS Oracle database for binary log reader Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### Create a stream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Binary reader ( Preview ): select this method to extract changes directly from Oracle logs.
- Oracle CDC configuration Datastream verifies that the CDC method that you selected complies with your database configuration.
- Specify the CDC method for your stream: GTID (Global Transaction IDs)-based replication : select this method if you want Datastream to support failovers and provide seamless replication irrespective of the changes in your database cluster.
- This method is easier to configure and has fewer limitations, but supports lower throughput and produces higher load on your database than the transaction logs method.

