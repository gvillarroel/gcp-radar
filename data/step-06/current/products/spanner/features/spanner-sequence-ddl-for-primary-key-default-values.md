---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.270Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner SEQUENCE DDL for primary key default values"
feature_slug: "spanner-sequence-ddl-for-primary-key-default-values"
latest_feature_date: "2023-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/details"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "sequence"
  - "primary"
  - "default"
  - "values"
  - "adds"
---

# Spanner SEQUENCE DDL for primary key default values

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Adds support for integer SEQUENCE DDL objects used in PRIMARY KEY DEFAULT expressions to generate unique, uniformly distributed integer keys.

## Extended Definition

Adds support for integer SEQUENCE DDL objects used in PRIMARY KEY DEFAULT expressions to generate unique, uniformly distributed integer keys.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- The default value is public . constraint name character varying The name of the foreign key constraint. unique constraint catalog character varying The database name. unique constraint schema character varying The name of the schema that contains the unique or primary key constraint that the foreign key constraint references. unique constraint name character varying The name of the unique or primary key constraint that the foreign key constraint references. match option character varying The match method used by the foreign key constraint.
- Possible values and the states they represent are: NULL : the index type is PRIMARY KEY PREPARE : creating empty tables for a new index WRITE ONLY : backfilling data for a new index WRITE ONLY CLEANUP : cleaning up a new index WRITE ONLY VALIDATE UNIQUE : checking uniqueness of data in a new index READ WRITE : normal index operation spanner is managed character varying Whether the index is managed by Spanner.
- Possible values are: CHECK FOREIGN KEY PLACEMENT KEY PRIMARY KEY UNIQUE is deferrable character varying The value is always NO . initially deferred character varying The value is always NO . enforced character varying Whether the constraint is enforced.
- Possible values are PRIMARY KEY , LOCAL , or GLOBAL . column name character varying The name of the column. ordinal position BIGINT The ordinal position of the column in the index (or primary key), starting with a value of 1.

### "Change stream partitions, records, and queries \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- The two accounts are in separate change stream partitions. "data change record" : { "commit timestamp" : "2022-09-27T12:30:00.123456Z" , // record sequence is unique and monotonically increasing within a // transaction, across all partitions. "record sequence" : "00000000" , "server transaction id" : "6329047911" , "is last record in transaction in partition" : true , "table name" : "AccountBalance" , "column types" : [ { "name" : "AccountId" , "type" : { "code" : "STRING" }, "is primary key" : true , "ordinal position" : 1 }, { "name" : "LastUpdate" , "type" : { "code" : "TIMESTAMP" }, "is primary key" : false , "ordinal position" : 2 }, { "name" : "Balance" , "type" : { "code" : "INT" }, "is primary key" : false , "ordinal position" : 3 } ], "mods" : [ { "keys" : { "AccountId" : "Id1" }, "new values" : { "LastUpdate" : "2022-09-27T12:30:00.123456Z" , "Balance" : 1000 }, "old values" : { "LastUpdate" : "2022-09-26T11:28:00.189413Z" , "Balance" : 1500 }, } ], "mod type" : "UPDATE" , // options are INSERT, UPDATE, DELETE "value capture type" : "OLD AND NEW VALUES" , "number of records in transaction" : 2 , "number of partitions in transaction" : 2 , "transaction tag" : "app=banking,env=prod,action=update" , "is system transaction" : false , } "data change record" : { "commit timestamp" : "2022-09-27T12:30:00.123456Z" , "record sequence" : "00000001" , "server transaction id" : "6329047911" , "is last record in transaction in partition" : true , "table name" : "AccountBalance" , "column types" : [ { "name" : "AccountId" , "type" : { "code" : "STRING" }, "is primary key" : true , "ordinal position" : 1 }, { "name" : "LastUpdate" , "type" : { "code" : "TIMESTAMP" }, "is primary key" : false , "ordinal position" : 2 }, { "name" : "Balance" , "type" : { "code" : "INT" }, "is primary key" : false , "ordinal position" : 3 } ], "mods" : [ { "keys" : { "AccountId" : "Id2" }, "new values" : { "LastUpdate" : "2022-09-27T12:30:00.123456Z" , "Balance" : 2000 }, "old values" : { "LastUpdate" : "2022-01-20T11:25:00.199915Z" , "Balance" : 1500 }, }, ... ], "mod type" : "UPDATE" , // options are INSERT, UPDATE, DELETE "value capture type" : "OLD AND NEW VALUES" , "number of records in transaction" : 2 , "number of partitions in transaction" : 2 , "transaction tag" : "app=banking,env=prod,action=update" , "is system transaction" : false , } The following data change record is an example of a record with the value capture type NEW VALUES .
- This value capture type captures the new value and old value of LastUpdate . "data change record" : { "commit timestamp" : "2022-09-27T12:30:00.123456Z" , // record sequence is unique and monotonically increasing within a // transaction, across all partitions. "record sequence" : "00000000" , "server transaction id" : "6329047911" , "is last record in transaction in partition" : true , "table name" : "AccountBalance" , "column types" : [ { "name" : "AccountId" , "type" : { "code" : "STRING" }, "is primary key" : true , "ordinal position" : 1 }, { "name" : "LastUpdate" , "type" : { "code" : "TIMESTAMP" }, "is primary key" : false , "ordinal position" : 2 }, { "name" : "Balance" , "type" : { "code" : "INT" }, "is primary key" : false , "ordinal position" : 3 } ], "mods" : [ { "keys" : { "AccountId" : "Id1" }, "new values" : { "LastUpdate" : "2022-09-27T12:30:00.123456Z" , "Balance" : 1000 }, "old values" : { "LastUpdate" : "2022-09-26T11:28:00.189413Z" } } ], "mod type" : "UPDATE" , // options are INSERT, UPDATE, DELETE "value capture type" : "NEW ROW AND OLD VALUES" , "number of records in transaction" : 1 , "number of partitions in transaction" : 1 , "transaction tag" : "app=banking,env=prod,action=update" , "is system transaction" : false } Heartbeat records When a heartbeat record is returned, it indicates that all changes with commit timestamp less than or equal to the heartbeat record's timestamp have been returned, and future data records in this partition must have higher commit timestamps than that returned by the heartbeat record.
- Only the LastUpdate column was modified, but all tracked columns are returned. "data change record" : { "commit timestamp" : "2022-09-27T12:30:00.123456Z" , // record sequence is unique and monotonically increasing within a // transaction, across all partitions. "record sequence" : "00000000" , "server transaction id" : "6329047911" , "is last record in transaction in partition" : true , "table name" : "AccountBalance" , "column types" : [ { "name" : "AccountId" , "type" : { "code" : "STRING" }, "is primary key" : true , "ordinal position" : 1 }, { "name" : "LastUpdate" , "type" : { "code" : "TIMESTAMP" }, "is primary key" : false , "ordinal position" : 2 }, { "name" : "Balance" , "type" : { "code" : "INT" }, "is primary key" : false , "ordinal position" : 3 } ], "mods" : [ { "keys" : { "AccountId" : "Id1" }, "new values" : { "LastUpdate" : "2022-09-27T12:30:00.123456Z" , "Balance" : 1000 }, "old values" : {} } ], "mod type" : "UPDATE" , // options are INSERT, UPDATE, DELETE "value capture type" : "NEW ROW" , "number of records in transaction" : 1 , "number of partitions in transaction" : 1 , "transaction tag" : "app=banking,env=prod,action=update" , "is system transaction" : false } The following data change record is an example of a record with the value capture type NEW ROW AND OLD VALUES .
- Only the LastUpdate column was modified, so only that column was returned. "data change record" : { "commit timestamp" : "2022-09-27T12:30:00.123456Z" , // record sequence is unique and monotonically increasing within a // transaction, across all partitions. "record sequence" : "00000000" , "server transaction id" : "6329047911" , "is last record in transaction in partition" : true , "table name" : "AccountBalance" , "column types" : [ { "name" : "AccountId" , "type" : { "code" : "STRING" }, "is primary key" : true , "ordinal position" : 1 }, { "name" : "LastUpdate" , "type" : { "code" : "TIMESTAMP" }, "is primary key" : false , "ordinal position" : 2 } ], "mods" : [ { "keys" : { "AccountId" : "Id1" }, "new values" : { "LastUpdate" : "2022-09-27T12:30:00.123456Z" }, "old values" : {} } ], "mod type" : "UPDATE" , // options are INSERT, UPDATE, DELETE "value capture type" : "NEW VALUES" , "number of records in transaction" : 1 , "number of partitions in transaction" : 1 , "transaction tag" : "app=banking,env=prod,action=update" , "is system transaction" : false } The following data change record is an example of a record with the value capture type NEW ROW .

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- The valid values for OPTION NAME include: instance partition default leader Column name Type Description PLACEMENT NAME STRING The name of the placement.
- Possible values are: PRIMARY KEY FOREIGN KEY PLACEMENT KEY CHECK UNIQUE IS DEFERRABLE STRING Always NO .
- BY DEFAULT specifies that the column uses generated values if user-inserted values aren't provided.

