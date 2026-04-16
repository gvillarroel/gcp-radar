---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.906Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "in query operator"
feature_slug: "in-query-operator"
latest_feature_date: "2019-11-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance"
  - "https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain"
  - "https://docs.cloud.google.com/firestore/native/docs/enterprise-query-insights"
keywords:
  - "query"
  - "operator"
  - "firestore"
  - "supports"
---

# in query operator

Product: Firestore
Coverage: LOW

## Step 02 Summary

Firestore supports the in query operator.

## Extended Definition

Firestore supports the in query operator.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance](https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance)
- [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain)
- [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-insights](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-insights)

## Supporting Pages

### "Optimize query performance \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance](https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance)
- Source ID: `site-docs-reference-required-4`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use forceIndex with Query Explain You can use Query Explain , especially with the analyze option, to observe the effects of forceIndex : Verify that Firestore in Native Mode used the specified index in forceIndex by checking the leaf nodes of the execution tree for the index ID.
- Optimize query performance Preview — Firestore in Native mode (with Pipeline Operations) for Enterprise Edition This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- You can use the forceIndex option on any input stage in Pipeline operations to override Firestore in Native Mode's default query plan and specify an index to use, or to force a table scan.
- Best practices for forceIndex While forceIndex provides more control over query execution, Firestore in Native Mode's query optimizer is generally efficient for most use cases.

### "Analyze query execution with Query Explain \_|\_ Firestore in Native mode\

- URL: [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain)
- Source ID: `site-docs-reference-required-4`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Analyze query execution with Query Explain Preview — Firestore in Native mode (with Pipeline Operations) for Enterprise Edition This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- The following is an example of an execution tree: Tree: • Compute $out 1: map set($record 1, " name ", $ name 1, " key ", unset) is query result: true Execution: records returned: 2 latency: 5.96 ms (local <1 ms) └── • Compute $ name 1: map get($record 1, " key ") Execution: records returned: 2 latency: 5.88 ms (local <1 ms) └── • MajorSort fields: [$v 1 ASC] output: [$record 1] limit: 100 Execution: records returned: 2 latency: 5.86 ms (local <1 ms) peak memory usage: 20.25 KiB (20,736 B) └── • Compute $v 1: map get($record 1, "status") Execution: records returned: 2 latency: 5.23 ms (local <1 ms) └── • TableScan source: /users order: UNDEFINED properties: row range: (-∞..+∞) output record: $record 1 variables: [$record 1] Execution: records returned: 2 latency: 4.68 ms records scanned: 2 data bytes read: 148 B What's next To learn about the execution tree nodes, see the Query execution reference .
- Execution: results returned: 2 request peak memory usage: 20.25 KiB (20,736 B) data bytes read: 148 B entity row scanned: 2 Billing: read units: 1 Execution Tree The execution tree describes the query execution as a series of nodes.
- Consider this query as an example: db.pipeline().collection('/users').sort(field("status").ascending()).limit(100) Summary Statistics The top of the explained output contains a summary of the execution statistics.

### "Analyze query performance statistics \_|\_ Firestore in Native mode \_|\_\

- URL: [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-insights](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-insights)
- Source ID: `site-docs-reference-required-4`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Analyze query performance statistics Preview — Firestore in Native mode (with Pipeline Operations) for Enterprise Edition This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- View Query insights To view query insights for a Firestore database, open the database Query insights pane in the Google Cloud console.
- Query insights data Query insights includes data from the following API methods: listDocuments listCollectionIds runQuery runAggregationQuery partitionQuery executePipeline You can view data about the queries that use these methods for a given project, database, and time duration ranging from 10 minutes to 30 days.
- Data granularity and retention Data granularity depends on the duration specified: 10 minute granularity for intervals up to 4 days ago 1 hour granularity for intervals up to 30 days ago The maximum data retention for Query insights is 30 days.

