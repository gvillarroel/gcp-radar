---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.166Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "SPANNER_SYS oldest active queries table new columns"
feature_slug: "spanner-sys-oldest-active-queries-table-new-columns"
latest_feature_date: "2025-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/details"
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql"
keywords:
  - "oldest"
  - "active"
  - "columns"
  - "queries"
  - "table"
  - "added"
---

# SPANNER_SYS oldest active queries table new columns

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added support for new columns in the SPANNER_SYS oldest active queries table, including CLIENT_IP_ADDRESS, API_CLIENT_HEADER, USER_AGENT_HEADER, SERVER_REGION, PRIORITY, and TRANSACTION_TYPE, and exposes them in the Cloud Console query insights page.

## Extended Definition

Spanner added support for new columns in the SPANNER_SYS oldest active queries table, including CLIENT_IP_ADDRESS, API_CLIENT_HEADER, USER_AGENT_HEADER, SERVER_REGION, PRIORITY, and TRANSACTION_TYPE, and exposes them in the Cloud Console query insights page.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)

## Supporting Pages

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- COMMITTED : There is no active schema change for this constraint. column column usage This view lists all the generated columns that depend on another base column in the same table.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- This column is never null. table name character varying The name of the table that contains the generated columns. column name character varying The name of the base column that the generated column depends on. dependent column character varying The name of the generated column. column options This view lists all the options defined for the referenced table columns of a foreign key constraint.
- All other principals can see only columns that have any fine-grained access control privileges granted on them (or the SELECT , INSERT or UPDATE privileges granted on their containing tables) to the current database role, to roles of which the current database role is a member, or to public .

### "Change stream partitions, records, and queries \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Only the LastUpdate column was modified, but all tracked columns are returned. "data change record" : { "commit timestamp" : "2022-09-27T12:30:00.123456Z" , // record sequence is unique and monotonically increasing within a // transaction, across all partitions. "record sequence" : "00000000" , "server transaction id" : "6329047911" , "is last record in transaction in partition" : true , "table name" : "AccountBalance" , "column types" : [ { "name" : "AccountId" , "type" : { "code" : "STRING" }, "is primary key" : true , "ordinal position" : 1 }, { "name" : "LastUpdate" , "type" : { "code" : "TIMESTAMP" }, "is primary key" : false , "ordinal position" : 2 }, { "name" : "Balance" , "type" : { "code" : "INT" }, "is primary key" : false , "ordinal position" : 3 } ], "mods" : [ { "keys" : { "AccountId" : "Id1" }, "new values" : { "LastUpdate" : "2022-09-27T12:30:00.123456Z" , "Balance" : 1000 }, "old values" : {} } ], "mod type" : "UPDATE" , // options are INSERT, UPDATE, DELETE "value capture type" : "NEW ROW" , "number of records in transaction" : 1 , "number of partitions in transaction" : 1 , "transaction tag" : "app=banking,env=prod,action=update" , "is system transaction" : false } The following data change record is an example of a record with the value capture type NEW ROW AND OLD VALUES .
- The two accounts are in separate change stream partitions. "data change record" : { "commit timestamp" : "2022-09-27T12:30:00.123456Z" , // record sequence is unique and monotonically increasing within a // transaction, across all partitions. "record sequence" : "00000000" , "server transaction id" : "6329047911" , "is last record in transaction in partition" : true , "table name" : "AccountBalance" , "column types" : [ { "name" : "AccountId" , "type" : { "code" : "STRING" }, "is primary key" : true , "ordinal position" : 1 }, { "name" : "LastUpdate" , "type" : { "code" : "TIMESTAMP" }, "is primary key" : false , "ordinal position" : 2 }, { "name" : "Balance" , "type" : { "code" : "INT" }, "is primary key" : false , "ordinal position" : 3 } ], "mods" : [ { "keys" : { "AccountId" : "Id1" }, "new values" : { "LastUpdate" : "2022-09-27T12:30:00.123456Z" , "Balance" : 1000 }, "old values" : { "LastUpdate" : "2022-09-26T11:28:00.189413Z" , "Balance" : 1500 }, } ], "mod type" : "UPDATE" , // options are INSERT, UPDATE, DELETE "value capture type" : "OLD AND NEW VALUES" , "number of records in transaction" : 2 , "number of partitions in transaction" : 2 , "transaction tag" : "app=banking,env=prod,action=update" , "is system transaction" : false , } "data change record" : { "commit timestamp" : "2022-09-27T12:30:00.123456Z" , "record sequence" : "00000001" , "server transaction id" : "6329047911" , "is last record in transaction in partition" : true , "table name" : "AccountBalance" , "column types" : [ { "name" : "AccountId" , "type" : { "code" : "STRING" }, "is primary key" : true , "ordinal position" : 1 }, { "name" : "LastUpdate" , "type" : { "code" : "TIMESTAMP" }, "is primary key" : false , "ordinal position" : 2 }, { "name" : "Balance" , "type" : { "code" : "INT" }, "is primary key" : false , "ordinal position" : 3 } ], "mods" : [ { "keys" : { "AccountId" : "Id2" }, "new values" : { "LastUpdate" : "2022-09-27T12:30:00.123456Z" , "Balance" : 2000 }, "old values" : { "LastUpdate" : "2022-01-20T11:25:00.199915Z" , "Balance" : 1500 }, }, ... ], "mod type" : "UPDATE" , // options are INSERT, UPDATE, DELETE "value capture type" : "OLD AND NEW VALUES" , "number of records in transaction" : 2 , "number of partitions in transaction" : 2 , "transaction tag" : "app=banking,env=prod,action=update" , "is system transaction" : false , } The following data change record is an example of a record with the value capture type NEW VALUES .
- This value capture type captures the new value and old value of LastUpdate . "data change record" : { "commit timestamp" : "2022-09-27T12:30:00.123456Z" , // record sequence is unique and monotonically increasing within a // transaction, across all partitions. "record sequence" : "00000000" , "server transaction id" : "6329047911" , "is last record in transaction in partition" : true , "table name" : "AccountBalance" , "column types" : [ { "name" : "AccountId" , "type" : { "code" : "STRING" }, "is primary key" : true , "ordinal position" : 1 }, { "name" : "LastUpdate" , "type" : { "code" : "TIMESTAMP" }, "is primary key" : false , "ordinal position" : 2 }, { "name" : "Balance" , "type" : { "code" : "INT" }, "is primary key" : false , "ordinal position" : 3 } ], "mods" : [ { "keys" : { "AccountId" : "Id1" }, "new values" : { "LastUpdate" : "2022-09-27T12:30:00.123456Z" , "Balance" : 1000 }, "old values" : { "LastUpdate" : "2022-09-26T11:28:00.189413Z" } } ], "mod type" : "UPDATE" , // options are INSERT, UPDATE, DELETE "value capture type" : "NEW ROW AND OLD VALUES" , "number of records in transaction" : 1 , "number of partitions in transaction" : 1 , "transaction tag" : "app=banking,env=prod,action=update" , "is system transaction" : false } Heartbeat records When a heartbeat record is returned, it indicates that all changes with commit timestamp less than or equal to the heartbeat record's timestamp have been returned, and future data records in this partition must have higher commit timestamps than that returned by the heartbeat record.
- Only the LastUpdate column was modified, so only that column was returned. "data change record" : { "commit timestamp" : "2022-09-27T12:30:00.123456Z" , // record sequence is unique and monotonically increasing within a // transaction, across all partitions. "record sequence" : "00000000" , "server transaction id" : "6329047911" , "is last record in transaction in partition" : true , "table name" : "AccountBalance" , "column types" : [ { "name" : "AccountId" , "type" : { "code" : "STRING" }, "is primary key" : true , "ordinal position" : 1 }, { "name" : "LastUpdate" , "type" : { "code" : "TIMESTAMP" }, "is primary key" : false , "ordinal position" : 2 } ], "mods" : [ { "keys" : { "AccountId" : "Id1" }, "new values" : { "LastUpdate" : "2022-09-27T12:30:00.123456Z" }, "old values" : {} } ], "mod type" : "UPDATE" , // options are INSERT, UPDATE, DELETE "value capture type" : "NEW VALUES" , "number of records in transaction" : 1 , "number of partitions in transaction" : 1 , "transaction tag" : "app=banking,env=prod,action=update" , "is system transaction" : false } The following data change record is an example of a record with the value capture type NEW ROW .

### "Commit timestamps in PostgreSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- ResultSet getters can only be used to retrieve // non null values. resultSet . isNull ( "MarketingBudget" ) ? "NULL" : resultSet . getLong ( "MarketingBudget" ), resultSet . isNull ( "LastUpdateTime" ) ? "NULL" : resultSet . getTimestamp ( "LastUpdateTime" )); } } } Node.js // ... // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); const query = { sql : SELECT SingerId, AlbumId, MarketingBudget, LastUpdateTime FROM Albums ORDER BY LastUpdateTime DESC , }; // Queries rows from the Albums table try { const [ rows ] = await database . run ( query ); rows . forEach ( row = > { const json = row . toJSON (); console . log ( SingerId: ${ json .
- In addition this update expects the LastUpdateTime column added by applying the DDL statement "ALTER TABLE Albums ADD COLUMN LastUpdateTime TIMESTAMP OPTIONS (allow commit timestamp=true)" Example: @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function update data with timestamp column(string $instanceId, string $databaseId): void { $spanner = new SpannerClient(); $instance = $spanner->instance($instanceId); $database = $instance->database($databaseId); $operation = $database->transaction(['singleUse' => true]) ->updateBatch('Albums', [ ['SingerId' => 1, 'AlbumId' => 1, 'MarketingBudget' => 1000000, 'LastUpdateTime' => $spanner->commitTimestamp()], ['SingerId' => 2, 'AlbumId' => 2, 'MarketingBudget' => 750000, 'LastUpdateTime' => $spanner->commitTimestamp()], ]) ->commit(); print('Updated data.' .
- You can add the column by running the add column sample or by running this DDL statement against your database: ALTER TABLE Albums ADD COLUMN MarketingBudget INT64 In addition this update expects the LastUpdateTime column added by applying this DDL statement against your database: ALTER TABLE Albums ADD COLUMN LastUpdateTime TIMESTAMP OPTIONS(allow commit timestamp=true) """ spanner client = spanner .
- Client () instance = spanner client . instance ( instance id ) database = instance . database ( database id ) with database . batch () as batch : batch . insert ( table = "Performances" , columns = ( "SingerId" , "VenueId" , "EventDate" , "Revenue" , "LastUpdateTime" ), values = [ ( 1 , 4 , "2017-10-05" , 11000 , spanner .

