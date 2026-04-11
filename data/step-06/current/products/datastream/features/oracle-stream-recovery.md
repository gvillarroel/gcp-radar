---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.744Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Oracle stream recovery"
feature_slug: "oracle-stream-recovery"
latest_feature_date: "2024-01-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/configure-self-managed-oracle"
  - "https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-oracle"
  - "https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle"
keywords:
  - "oracle"
  - "stream"
  - "recovery"
  - "datastream"
  - "can"
  - "recover"
  - "for"
  - "an"
---

# Oracle stream recovery

Product: Datastream
Coverage: LOW

## Step 02 Summary

Datastream can recover a stream for an Oracle source.

## Extended Definition

Datastream can recover a stream for an Oracle source.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/configure-self-managed-oracle](https://docs.cloud.google.com/datastream/docs/configure-self-managed-oracle)
- [https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-oracle](https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-oracle)
- [https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle](https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle)

## Supporting Pages

### "Configure a self-managed Oracle database for CDC \_|\_ Datastream \_|\_\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-self-managed-oracle](https://docs.cloud.google.com/datastream/docs/configure-self-managed-oracle)
- Source ID: `site-docs-root-2`
- Final score: 272
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Define a data retention policy for your database by running these Oracle Recovery Manager (RMAN) commands: TARGET / CONFIGURE RETENTION POLICY TO RECOVERY WINDOW OF 4 DAYS ; You use the TARGET / command to start an RMAN client and connect to the source database.
- Define a data retention policy for your database by running these Oracle Recovery Manager (RMAN) commands: TARGET / CONFIGURE RETENTION POLICY TO RECOVERY WINDOW OF 4 DAYS ; You use the TARGET / command to start an RMAN client and connect to the source database.
- Home Documentation Data analytics Datastream Guides Send feedback Configure a self-managed Oracle database for CDC Stay organized with collections Save and categorize content based on your preferences.
- You can configure your self-managed Oracle database to work with the following CDC methods: Binary log reader ( Preview ) LogMiner API These methods specify how Datastream accesses your log files.

### "Configure an Amazon RDS Oracle database for CDC \_|\_ Datastream \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-oracle](https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-oracle)
- Source ID: `site-docs-root-2`
- Final score: 258
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To do so, run the following commands: GRANT EXECUTE CATALOG ROLE TO USER NAME ; GRANT CONNECT TO USER NAME ; GRANT CREATE SESSION TO USER NAME ; exec rdsadmin . rdsadmin util . grant sys object ( 'V $DATABASE' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'V $ARCHIVED LOG' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'V $LOG' , ' USER NAME ' , 'SELECT' ); -- for primary databases exec rdsadmin . rdsadmin util . grant sys object ( 'V $STANDBY LOG' , ' USER NAME ' , 'SELECT' ); -- for standby databases exec rdsadmin . rdsadmin util . grant sys object ( 'V $LOGFILE' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'V $LOGMNR LOGS' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'V $LOGMNR CONTENTS' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'V $PARAMETER' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'DBMS LOGMNR' , ' USER NAME ' , 'EXECUTE' ); exec rdsadmin . rdsadmin util . grant sys object ( 'DBMS LOGMNR D' , ' USER NAME ' , 'EXECUTE' ); GRANT SELECT ANY TRANSACTION TO USER NAME ; GRANT SELECT ANY TABLE TO USER NAME ; If your database uses Transparent Data Encryption (TDE), grant the following permissions: exec rdsadmin . rdsadmin util . grant sys object ( 'DBA TABLESPACES' , ' USER NAME ' , 'SELECT' ); exec rdsadmin . rdsadmin util . grant sys object ( 'DBA ENCRYPTED COLUMNS' , ' USER NAME ' , 'SELECT' ); If your organization doesn't permit granting the GRANT SELECT ANY TABLE permission, use the solution described in the Oracle change data capture (CDC) section of the Datastream FAQ page.
- Home Documentation Data analytics Datastream Guides Send feedback Configure an Amazon RDS Oracle database for CDC Stay organized with collections Save and categorize content based on your preferences.
- This privilege lets you use the ROWID based backfill for your Oracle source: GRANT SELECT ON DBA EXTENTS TO USER NAME ; What's next Learn more about how Datastream works with Oracle sources .
- You can configure your source Oracle database for use with the following CDC methods: Binary log reader ( Preview ) LogMiner API For more information about the binary log reader and the LogMiner API, see Work with Oracle database redo log files .

### "Configure a pluggable Oracle database for CDC \_|\_ Datastream \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle](https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle)
- Source ID: `site-docs-root-2`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This privilege lets you use the ROWID based backfill for your Oracle source: GRANT SELECT ON DBA EXTENTS TO USER NAME ; If your database uses Transparent Data Encryption (TDE), grant the following permissions: GRANT SELECT ON DBA TABLESPACES TO USER NAME ; GRANT SELECT ON DBA ENCRYPTED COLUMNS TO USER NAME ; What's next Learn more about how Datastream works with Oracle sources .
- Define a data retention policy for your database by running the following Oracle Recovery Manager (RMAN) command from the CDB$ROOT container: CONFIGURE RETENTION POLICY TO RECOVERY WINDOW OF 4 DAYS ; The command defines the data retention policy for all pluggable databases in your container database.
- Define a data retention policy for your database by running these Oracle Recovery Manager (RMAN) commands: TARGET / CONFIGURE RETENTION POLICY TO RECOVERY WINDOW OF 4 DAYS ; You use the TARGET / command to start an RMAN client and connect to the source database.
- Home Documentation Data analytics Datastream Guides Send feedback Configure a pluggable Oracle database for CDC Stay organized with collections Save and categorize content based on your preferences.

