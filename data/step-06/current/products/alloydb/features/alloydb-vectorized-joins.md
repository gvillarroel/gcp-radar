---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.647Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB vectorized joins"
feature_slug: "alloydb-vectorized-joins"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/about"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/reference/database-flags"
keywords:
  - "vectorized join processing"
  - "vectorized join execution"
  - "vectorized join preview"
  - "vectorized joins"
  - "vectorized join"
  - "columnar join execution"
  - "join performance"
  - "columnar engine"
---

# AlloyDB vectorized joins

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB made vectorized joins available in preview as part of its columnar engine to improve join performance for qualifying queries.

## Extended Definition

AlloyDB made vectorized joins available in preview as part of its columnar engine to improve join performance for qualifying queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/columnar-engine/about](https://docs.cloud.google.com/alloydb/docs/columnar-engine/about)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags)

## Supporting Pages

### "About the AlloyDB columnar engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/columnar-engine/about](https://docs.cloud.google.com/alloydb/docs/columnar-engine/about)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions joins as a query type that can benefit from the columnar engine, but gives no explicit detail about vectorized join implementation.

Evidence snippets:
- The columnar engine supports only columns with the following built-in data types: array bigint boolean bytea char date decimal double precision enum float4 float8 integer json jsonb numeric real serial short smallint text timestamp timestamptz uuid varchar vector The columnar engine ignores any attempts to manually add columns with unsupported data types to the column store.
- Unsupported data sources The columnar engine does not support tables or materialized views with the following attributes as data sources: Non-leaf partitioned tables Foreign tables Columnar engine limitations If you're running an analytical query on a column that has an index, the AlloyDB optimizer may choose to use row-store.
- The AlloyDB columnar engine accelerates SQL query processing of scans, joins, and aggregates by providing these components: A column store that contains table and materialized-view data for selected columns, reorganized into a column-oriented format.
- For tables or views with a small number of rows, typically fewer than 5,000, the query planner might choose to use the row-store instead of the column store for better performance, even if the data is successfully loaded into the columnar engine.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Part of the AlloyDB columnar engine, vectorized join can improve the performance of joins by applying vectorized processing to qualifying queries.
- October 31, 2025 Announcement The alloydb scann extension version 0.1.3 is updated to include the following vector search improvements, which are now Generally Available ( GA ): The columnar engine now automatically includes vector columns in searches, so you don't need to add them to the table manually.
- June 17, 2025 Feature You can use the columnar engine to improve the performance of vector similarity searches, specifically K-Nearest Neighbor (KNN) searches, when combined with highly-selective predicate filtering.
- It includes the following features and improvements: The google columnar engine extension is updated to automatically recommend data for searches, so you don't need to manually add vector columns to the table.

### "Supported database flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags)
- Source ID: `site-api-reference`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A C D E F G H I J L M N O P R S T V W AlloyDB flag Default value Instance restarts Read pool restrictions alloydb.ai nl enabled off No No alloydb.enable auto explain off Yes No alloydb.enable pg bigm off Yes No alloydb.enable pg cron off Yes No alloydb.enable pg hint plan off Yes No alloydb.enable pg wait sampling off Yes No alloydb.enable pgaudit off Yes No alloydb.enable pglogical off Yes No alloydb.enable named hints off No No alloydb.iam authentication off Yes No alloydb.logical decoding off Yes No alloydb.log throttling window No No alloydb.promote cancel to terminate on No No alloydb.pg shadow select role An empty string No No alloydb.enable pg squeeze off No No allow alter system (PostgreSQL 17) on No No auto explain.log analyze Standard default No No auto explain.log buffers Standard default No No auto explain.log format Standard default No No auto explain.log level Standard default No No auto explain.log min duration Standard default No No auto explain.log nested statements Standard default No No auto explain.log settings Standard default No No auto explain.log timing Standard default No No auto explain.log triggers Standard default No No auto explain.log verbose Standard default No No auto explain.log wal Standard default No No auto explain.sample rate Standard default No No autovacuum Standard default No No autovacuum analyze scale factor Standard default No No autovacuum analyze threshold Standard default No No autovacuum freeze max age Standard default Yes No autovacuum max workers Standard default Yes No autovacuum multixact freeze max age Standard default Yes No autovacuum naptime Standard default No No autovacuum vacuum cost delay Standard default No No autovacuum vacuum cost limit Standard default No No autovacuum vacuum max threshold (PostgreSQL 18) Standard default No No autovacuum vacuum scale factor Standard default No No autovacuum vacuum threshold Standard default No No autovacuum work mem Standard default No No autovacuum worker slots (PostgreSQL 18) Standard default Yes No checkpoint completion target Standard default No No checkpoint timeout Standard default No No checkpoint warning Standard default No No commit delay Standard default No No commit siblings Standard default No No commit timestamp buffers (PostgreSQL 17) 0 Yes No constraint exclusion Standard default No No cpu index tuple cost Standard default No No cpu operator cost Standard default No No cpu tuple cost Standard default No No createrole self grant (PostgreSQL 16) - No No cron.database name Standard default Yes No cron.log min messages Standard default No No cron.log run Standard default Yes No cron.log statement Standard default Yes No cron.max running jobs Standard default Yes No cursor tuple fraction Standard default No No deadlock timeout Standard default No No debug io direct (PostgreSQL 16) - No No debug logical replication streaming (PostgreSQL 16) buffered No No default statistics target Standard default No No default tablespace Standard default No No default toast compression pglz No No default transaction deferrable Standard default No No default transaction isolation Standard default No No effective cache size 80% of instance RAM No No enable bitmapscan Standard default No No enable distinct reordering (PostgreSQL 18) on No No enable google adaptive autovacuum on No No enable group by reordering (PostgreSQL 17) on No No enable hashagg Standard default No No enable hashjoin Standard default No No enable indexonlyscan Standard default No No enable indexscan Standard default No No enable material Standard default No No enable mergejoin Standard default No No enable nestloop Standard default No No enable partitionwise aggregate off No No enable partitionwise join off No No enable presorted aggregate (PostgreSQL 16) on No No enable self join elimination (PostgreSQL 18) Standard default No No enable seqscan Standard default No No enable sort Standard default No No enable tidscan Standard default No No event triggers (PostgreSQL 17) true No Yes file copy method (PostgreSQL 18) Standard default No No from collapse limit Standard default No No geqo Standard default No No geqo effort Standard default No No geqo generations Standard default No No geqo pool size Standard default No No geqo seed Standard default No No geqo selection bias Standard default No No geqo threshold Standard default No No gin fuzzy search limit Standard default No No gin pending list limit Standard default No No google columnar engine.auto columnarization schedule 'EVERY 1 HOUR' No No google columnar engine.enable auto columnarization on No No google columnar engine.enable columnar scan on No No google columnar engine.enable virtual columns scan off No No google columnar engine.enable vectorized join No No google columnar engine.enabled off Yes No google columnar engine.memory size in mb 30% of instance RAM Yes No google columnar engine.refresh threshold percentage 50 No No google columnar engine.refresh threshold scan count 5 No No google columnar engine.relations An empty string No No google columnar engine.vectorized join threads No No google db advisor.auto advisor max time in seconds 1800 No No google db advisor.auto advisor schedule 'EVERY 24 HOURS' No No google db advisor.enable auto advisor on No No google db advisor.enabled on Yes No google db advisor.max index width 2 No No google db advisor.max num indexable columns 1000 No No google db advisor.max statement length 102400 No No google db advisor.max storage size in mb 0 No No google db advisor.recommendation max time in seconds 600 No No google db advisor.recommend indexes on partitions off No No google db advisor.top k slowest statements 100 No No google job scheduler.maintenance cpu percentage 20 No No google job scheduler.max parallel workers per job 2 No No google ml integration.enable faster embedding generation off No No google ml integration.enable model support on No No google ml integration.enable forecasting off No No google plan management.enabled off Yes No google plan management.enable track plans on No No google plan management.enable steer plans on No No google storage.log replay throttle read transactions on No No gss accept delegation (PostgreSQL 16) off No No hot standby feedback on No No icu validation level (PostgreSQL 16) warning No No idle in transaction session timeout Standard default No No idle replication slot timeout Standard default No No idle in transaction session timeout (PostgreSQL 16) 86,400,000 No No io max combine limit (PostgreSQL 18) Standard default Yes No io max concurrency (PostgreSQL 18) Standard default Yes No io method (PostgreSQL 18) Sync is the only valid value for Preview Yes No join collapse limit Standard default No No lock timeout Standard default No No log autovacuum min duration 0 No No log checkpoints Standard default No No log connections Standard default No No log disconnections Standard default No No log duration Standard default The log duration=on setting might increase log volume under a heavy workload and cause higher query latencies.

