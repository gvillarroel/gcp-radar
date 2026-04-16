---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.173Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Terminate multiple active Spanner queries"
feature_slug: "terminate-multiple-active-spanner-queries"
latest_feature_date: "2025-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/details"
keywords:
  - "terminating"
  - "terminate"
  - "active"
  - "multiple"
  - "supports"
  - "queries"
---

# Terminate multiple active Spanner queries

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports terminating multiple active long-running queries in an instance to help reduce resource load and instance latency.

## Extended Definition

Spanner now supports terminating multiple active long-running queries in an instance to help reduce resource load and instance latency.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)

## Supporting Pages

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- The Spanner JDBC driver supports three alternatives for executing partitioned queries: SET AUTO PARTITION MODE = true RUN PARTITIONED QUERY sql PARTITION sql followed by multiple RUN PARTITION 'partition-token' Each of these methods are described in the following sections.
- Data Boost only supports partitioned queries .
- SHOW VARIABLE READ ONLY STALENESS SET READ ONLY STALENESS = staleness type staleness type : { 'STRONG' 'MIN READ TIMESTAMP timestamp ' 'READ TIMESTAMP timestamp ' 'MAX STALENESS <INT64>{ s ms us ns }' 'EXACT STALENESS <INT64>{ s ms us ns }' } The read-only staleness value applies to all subsequent read-only transactions and for all queries in AUTOCOMMIT mode.
- Timestamps must use the following format: YYYY - [M]M - [D]D T [[H]H:[M]M:[S]S[.DDDDDD]][timezone] The supported time units for setting MAX STALENESS and EXACT STALENESS values are: s : seconds ms : milliseconds us : microseconds ns : nanoseconds You can modify the value of this property only while there is no active transaction.

### "JDBC session management commands (PostgreSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- The JDBC driver supports three alternatives for executing partitioned queries: SET SPANNER.AUTO PARTITION MODE = true RUN PARTITIONED QUERY sql PARTITION sql followed by multiple RUN PARTITION 'partition-token' Each of these methods are described in the following sections.
- Data Boost only supports partitioned queries .
- SHOW [VARIABLE] SPANNER.READ ONLY STALENESS SET SPANNER.READ ONLY STALENESS {TO =} staleness type staleness type : { 'STRONG' 'MIN READ TIMESTAMP timestamp ' 'READ TIMESTAMP timestamp ' 'MAX STALENESS <int8>{ s ms us ns }' 'EXACT STALENESS <int8>{ s ms us ns }' } The read-only staleness value applies to all subsequent read-only transactions and for all queries in AUTOCOMMIT mode.
- Timestamps must use the following format: YYYY - [M]M - [D]D T [[H]H:[M]M:[S]S[.DDDDDD]][timezone] The supported time units for setting MAX STALENESS and EXACT STALENESS values are: s : seconds ms : milliseconds us : microseconds ns : nanoseconds You can modify the value of this property only while there is no active transaction.

### "Change stream partitions, records, and queries \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Child partition records from a specific query always shares the same start timestamp . child par t i t io ns record : { "record type" : "child partitions" , "start timestamp" : "2022-05-01T09:00:01Z" , "record sequence" : "1000012389" , "child partitions" : [ { "token" : "child token 1" , // Note parent tokens are null for child partitions returned // from the initial change stream queries. "parent partition tokens" : [ NULL ] } { "token" : "child token 2" , "parent partition tokens" : [ NULL ] } ], } child par t i t io ns record : { "record type" : "child partitions" , "start timestamp" : "2022-05-01T09:00:01Z" , "record sequence" : "1000012390" , "child partitions" : [ { "token" : "child token 3" , "parent partition tokens" : [ NULL ] } ], } To process changes after 2022-05-01T09:00:01Z , create three new queries and run them in parallel.
- Example child partition record The following is an example of a child partition record: child par t i t io ns record : { "start timestamp" : "2022-09-27T12:40:00.562986Z" , "record sequence" : "00000001" , "child partitions" : [ { "token" : "child token 1" , // To make sure changes for a key is processed in timestamp // order, wait until the records returned from all parents // have been processed. "parent partition tokens" : [ "parent token 1" , "parent token 2" ] } ], } Change streams query workflow Run change stream queries using the ExecuteStreamingSql API, with a single-use read-only transaction and a strong timestamp bound .
- All child partitions records returned by a partition have the same start timestamp and the timestamp always falls between the query's specified start timestamp and end timestamp . record sequence STRING Indicates a monotonically increasing sequence number that can be used to define the ordering of the child partition records when there are multiple child partition records returned with the same start timestamp in a particular partition.
- All child partitions records returned by a partition have the same start timestamp and the timestamp always falls between the query's specified start timestamp and end timestamp . record sequence STRING Indicates a monotonically increasing sequence number that can be used to define the ordering of the child partition records when there are multiple child partition records returned with the same start timestamp in a particular partition.

