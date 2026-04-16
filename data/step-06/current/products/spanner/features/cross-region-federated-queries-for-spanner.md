---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.174Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cross-region federated queries for Spanner"
feature_slug: "cross-region-federated-queries-for-spanner"
latest_feature_date: "2025-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/details"
keywords:
  - "federated"
  - "cross"
  - "supports"
  - "queries"
  - "region"
---

# Cross-region federated queries for Spanner

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports cross-region federated queries so Spanner tables can be queried from BigQuery regions different from the source region.

## Extended Definition

Spanner now supports cross-region federated queries so Spanner tables can be queried from BigQuery regions different from the source region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)

## Supporting Pages

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- On the other hand, you can allow cross-region trades in a geographically sharded database, but often at a high complexity cost.
- In load tests, this model does an acceptable job of distributing the secondary index read and write load across multiple Spanner splits, as illustrated in the following diagram: Although the synthetic data used in the load test is similar to the eventual steady state of the game where Attribute values are well distributed, the game design dictates that all players start with Attribute=50 .
- If you change the order of the previous index, you can solve this hotspot problem: CREATE INDEX idx score ranking ON Ranking ( Score DESC , GameMode ) This index won't create a significant hotspot from players competing in the same game mode, provided their scores are distributed across the possible range.
- In order to speed up queries that filter for the game mode, consider the following index: CREATE INDEX idx score ranking ON Ranking ( GameMode , Score DESC ) If everyone plays the same game mode called 1 , this index creates a hotspot where GameMode=1 .

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- For example, to create a free trial instance named trial-instance with the display name Trial Instance using the regional instance configuration regional-us-east5 , run the following: gcloud spanner instances create trial - instance -- config = regional - us - east5 \ -- instance - type = free - instance -- description = "Trial Instance" Note: Use the instance ID, not the display name, when referring to an instance in gcloud CLI commands.
- Note: A Spanner free trial instance supports Standard edition features, and Enterprise edition features, such as KNN vector distance functions , full-text search , and Spanner Graph .
- You can create a free trial instance in any of the Spanner regional instance configurations : INSTANCE DESCRIPTION : the name to display for the instance in the Google Cloud console.
- If an authentication error is returned, and you are using an external identity provider (IdP), confirm that you have signed in to the gcloud CLI with your federated identity .

### "Change stream partitions, records, and queries \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Always set the start timestamp to the start timestamp in the same child partition record and use the same end timestamp and heartbeat interval to process the records consistently across all queries.
- The two accounts are in separate change stream partitions. "data change record" : { "commit timestamp" : "2022-09-27T12:30:00.123456Z" , // record sequence is unique and monotonically increasing within a // transaction, across all partitions. "record sequence" : "00000000" , "server transaction id" : "6329047911" , "is last record in transaction in partition" : true , "table name" : "AccountBalance" , "column types" : [ { "name" : "AccountId" , "type" : { "code" : "STRING" }, "is primary key" : true , "ordinal position" : 1 }, { "name" : "LastUpdate" , "type" : { "code" : "TIMESTAMP" }, "is primary key" : false , "ordinal position" : 2 }, { "name" : "Balance" , "type" : { "code" : "INT" }, "is primary key" : false , "ordinal position" : 3 } ], "mods" : [ { "keys" : { "AccountId" : "Id1" }, "new values" : { "LastUpdate" : "2022-09-27T12:30:00.123456Z" , "Balance" : 1000 }, "old values" : { "LastUpdate" : "2022-09-26T11:28:00.189413Z" , "Balance" : 1500 }, } ], "mod type" : "UPDATE" , // options are INSERT, UPDATE, DELETE "value capture type" : "OLD AND NEW VALUES" , "number of records in transaction" : 2 , "number of partitions in transaction" : 2 , "transaction tag" : "app=banking,env=prod,action=update" , "is system transaction" : false , } "data change record" : { "commit timestamp" : "2022-09-27T12:30:00.123456Z" , "record sequence" : "00000001" , "server transaction id" : "6329047911" , "is last record in transaction in partition" : true , "table name" : "AccountBalance" , "column types" : [ { "name" : "AccountId" , "type" : { "code" : "STRING" }, "is primary key" : true , "ordinal position" : 1 }, { "name" : "LastUpdate" , "type" : { "code" : "TIMESTAMP" }, "is primary key" : false , "ordinal position" : 2 }, { "name" : "Balance" , "type" : { "code" : "INT" }, "is primary key" : false , "ordinal position" : 3 } ], "mods" : [ { "keys" : { "AccountId" : "Id2" }, "new values" : { "LastUpdate" : "2022-09-27T12:30:00.123456Z" , "Balance" : 2000 }, "old values" : { "LastUpdate" : "2022-01-20T11:25:00.199915Z" , "Balance" : 1500 }, }, ... ], "mod type" : "UPDATE" , // options are INSERT, UPDATE, DELETE "value capture type" : "OLD AND NEW VALUES" , "number of records in transaction" : 2 , "number of partitions in transaction" : 2 , "transaction tag" : "app=banking,env=prod,action=update" , "is system transaction" : false , } The following data change record is an example of a record with the value capture type NEW VALUES .
- This value capture type captures the new value and old value of LastUpdate . "data change record" : { "commit timestamp" : "2022-09-27T12:30:00.123456Z" , // record sequence is unique and monotonically increasing within a // transaction, across all partitions. "record sequence" : "00000000" , "server transaction id" : "6329047911" , "is last record in transaction in partition" : true , "table name" : "AccountBalance" , "column types" : [ { "name" : "AccountId" , "type" : { "code" : "STRING" }, "is primary key" : true , "ordinal position" : 1 }, { "name" : "LastUpdate" , "type" : { "code" : "TIMESTAMP" }, "is primary key" : false , "ordinal position" : 2 }, { "name" : "Balance" , "type" : { "code" : "INT" }, "is primary key" : false , "ordinal position" : 3 } ], "mods" : [ { "keys" : { "AccountId" : "Id1" }, "new values" : { "LastUpdate" : "2022-09-27T12:30:00.123456Z" , "Balance" : 1000 }, "old values" : { "LastUpdate" : "2022-09-26T11:28:00.189413Z" } } ], "mod type" : "UPDATE" , // options are INSERT, UPDATE, DELETE "value capture type" : "NEW ROW AND OLD VALUES" , "number of records in transaction" : 1 , "number of partitions in transaction" : 1 , "transaction tag" : "app=banking,env=prod,action=update" , "is system transaction" : false } Heartbeat records When a heartbeat record is returned, it indicates that all changes with commit timestamp less than or equal to the heartbeat record's timestamp have been returned, and future data records in this partition must have higher commit timestamps than that returned by the heartbeat record.
- Only the LastUpdate column was modified, but all tracked columns are returned. "data change record" : { "commit timestamp" : "2022-09-27T12:30:00.123456Z" , // record sequence is unique and monotonically increasing within a // transaction, across all partitions. "record sequence" : "00000000" , "server transaction id" : "6329047911" , "is last record in transaction in partition" : true , "table name" : "AccountBalance" , "column types" : [ { "name" : "AccountId" , "type" : { "code" : "STRING" }, "is primary key" : true , "ordinal position" : 1 }, { "name" : "LastUpdate" , "type" : { "code" : "TIMESTAMP" }, "is primary key" : false , "ordinal position" : 2 }, { "name" : "Balance" , "type" : { "code" : "INT" }, "is primary key" : false , "ordinal position" : 3 } ], "mods" : [ { "keys" : { "AccountId" : "Id1" }, "new values" : { "LastUpdate" : "2022-09-27T12:30:00.123456Z" , "Balance" : 1000 }, "old values" : {} } ], "mod type" : "UPDATE" , // options are INSERT, UPDATE, DELETE "value capture type" : "NEW ROW" , "number of records in transaction" : 1 , "number of partitions in transaction" : 1 , "transaction tag" : "app=banking,env=prod,action=update" , "is system transaction" : false } The following data change record is an example of a record with the value capture type NEW ROW AND OLD VALUES .

