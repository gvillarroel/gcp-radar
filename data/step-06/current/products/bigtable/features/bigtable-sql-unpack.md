---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.984Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable SQL UNPACK"
feature_slug: "bigtable-sql-unpack"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/googlesql-overview"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/schema-design"
keywords:
  - "unpack"
  - "series"
  - "feature"
  - "time"
  - "enables"
  - "reading"
---

# Bigtable SQL UNPACK

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

The UNPACK feature in Bigtable SQL enables reading time-series data in tabular format.

## Extended Definition

The UNPACK feature in Bigtable SQL enables reading time-series data in tabular format.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/googlesql-overview](https://docs.cloud.google.com/bigtable/docs/googlesql-overview)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/schema-design](https://docs.cloud.google.com/bigtable/docs/schema-design)

## Supporting Pages

### GoogleSQL for Bigtable overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/googlesql-overview](https://docs.cloud.google.com/bigtable/docs/googlesql-overview)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Expanding on the time series example in Query time series data , and using the query in that section as the input, your UNPACK query is formatted like this: SELECT temp versioned , timestamp FROM UNPACK (( SELECT metrics [ 'temperature' ] AS temperature versioned FROM sensorReadings ( with history = > true , after = > TIMESTAMP ( '2023-01-04T23:00:00.000Z' ), before = > TIMESTAMP ( '2023-01-05T01:00:00.000Z' )) WHERE key LIKE 'sensorA%' )); The query returns the data in this format: temp versioned timestamp 55 1672898400 55 1672894800 56 1672891200 Query JSON JSON functions let you manipulate JSON stored as Bigtable values for operational workloads.
- The following example uses after : SELECT metrics [ 'temperature' ] AS temp versioned FROM sensorReadings ( with history = > true , after = > TIMESTAMP ( '2023-01-04T23:00:00.000Z' ), before = > TIMESTAMP ( '2023-01-05T01:00:00.000Z' )) WHERE key LIKE 'sensorA%' The query returns the data in this format: temp versioned [{timestamp: '2023/01/05-01:00:00.000', value:56} {timestamp: '2023/01/05-00:00:00.000', value: 55}] [{timestamp: '2023/01/04-23:00:00.000', value:56}] UNPACK time series data When you're analyzing time series data, it's often preferable to work with the data in a tabular format.
- Cells in a column are separated by empty lines, and each cell represents a timestamped sensor reading. metrics key temperature humidity sensorA#20230105 2023/01/05-02:00:00.000: 54 2023/01/05-01:00:00.000: 56 2023/01/05-00:00:00.000: 55 2023/01/05-02:00:00.000: 0.89 2023/01/05-01:00:00.000: 0.9 2023/01/05-00:00:00.000: 0.91 sensorA#20230104 2023/01/04-23:00:00.000: 56 2023/01/04-22:00:00.000: 57 2023/01/04-23:00:00.000: 0.9 2023/01/04-22:00:00.000: 0.91 You can retrieve a specific range of timestamp values using the temporal filters after , before , or after or equal .
- Each timestamp-value pair ( STRUCT ) in an array represents cells in those columns in that row, and they are sorted by timestamp descending. / ----------+------------------------------------------------------------------+ key info +----------+------------------------------------------------------------------+ user 123 {"city":{<t5>:"Brooklyn", <t0>:"New York"}, "state":{<t0>:"NY"}} +----------+------------------------------------------------------------------ / Sparse tables A key feature of Bigtable is its flexible data model.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Composite keys are imitated by joining the data of multiple columns by using a common delimiter—for example, the hash (#) or percent (%) symbols. node : a machine responsible for reading and writing data that's associated with a series of primary key partition hash ranges.
- In Cassandra, data is stored on block-level storage that's attached to the node server. node : a virtual compute resource responsible for reading and writing data that's associated with a series of row key ranges.
- It also supports modern workloads, such as machine learning and AI, that require frequent iteration on feature stores and real-time serving at global scale.
- The column name is constructed by combining the column family with the column qualifier. cell : a timestamp value in a table that's associated with the intersection of a primary key with the column. cell : a timestamp value in a table that's associated with the intersection of a row key with the column name.

### Schema design best practices \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/schema-design](https://docs.cloud.google.com/bigtable/docs/schema-design)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For information specifically about working with time series data, see Schema design for time series data .
- What's next Design a schema for time-series data.
- For example, in a column family called SysMonitor with column qualifiers of ProcessName , User , %CPU , ID , Memory , DiskRead , and Priority , Bigtable stores the columns in this order: SysMonitor %CPU DiskRead ID Memory Priority ProcessName User The intersection of a row and column can contain multiple timestamped cells.
- If you store data as protobuf messages, you can take advantage of the following Bigtable features: Using protocol buffers to store flexible data structures reduces storage costs by keeping your data in place and avoiding duplication.

