---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.860Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Pipeline operations query interface"
feature_slug: "pipeline-operations-query-interface"
latest_feature_date: "2026-01-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore"
  - "https://docs.cloud.google.com/datastore/docs/reference/gql_reference"
  - "https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain"
keywords:
  - "pipeline"
  - "operations"
  - "query"
  - "interface"
  - "firestore"
  - "supports"
  - "complex"
  - "expressions"
---

# Pipeline operations query interface

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Pipeline operations is a Firestore query interface that supports complex expressions and functions such as min, max, substring, regex_match, and array_contains_all.

## Extended Definition

Pipeline operations is a Firestore query interface that supports complex expressions and functions such as min, max, substring, regex_match, and array_contains_all.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore)
- [https://docs.cloud.google.com/datastore/docs/reference/gql_reference](https://docs.cloud.google.com/datastore/docs/reference/gql_reference)
- [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain)

## Supporting Pages

### "Package com.google.cloud.firestore (3.38.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore)
- Source ID: `site-java-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Pipeline The Pipeline class provides a flexible and expressive framework for building complex data transformation and query pipelines for Firestore.
- Explain Stats A wrapper object to access explain stats if explain or analyze was enabled for the Pipeline query execution. com. google. cloud. firestore.
- Pipeline Source A factory for creating Pipeline instances, which provide a framework for building data transformation and query pipelines for Firestore.
- The cursors returned by #getStartAt() and #getEndBefore() can only be used in a query that matches the constraint of query that produced this partition. com. google. cloud. firestore.

### GQL Reference \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/reference/gql_reference](https://docs.cloud.google.com/datastore/docs/reference/gql_reference)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Aggregations Firestore in Datastore mode supports the following aggregations: COUNT( ) COUNT UP TO() SUM() AVG() In GQL, you can write aggregations in either a pipelined form or a simplified form.
- To use aggregations over a query with ORDER BY , LIMIT , or OFFSET clauses, you must use the pipelined form.
- Pipelined form Use the AGGREGATE keyword over a regular entity query.
- Pipelined form Use the AGGREGATE keyword over a regular entity query.

### "Analyze query execution with Query Explain \_|\_ Firestore in Native mode\

- URL: [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain)
- Source ID: `site-docs-reference-required-4`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Analyze query execution with Query Explain Preview — Firestore in Native mode (with Pipeline Operations) for Enterprise Edition This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Consider this query as an example: db.pipeline().collection('/users').sort(field("status").ascending()).limit(100) Summary Statistics The top of the explained output contains a summary of the execution statistics.
- The following is an example of an execution tree: Tree: • Compute $out 1: map set($record 1, " name ", $ name 1, " key ", unset) is query result: true Execution: records returned: 2 latency: 5.96 ms (local <1 ms) └── • Compute $ name 1: map get($record 1, " key ") Execution: records returned: 2 latency: 5.88 ms (local <1 ms) └── • MajorSort fields: [$v 1 ASC] output: [$record 1] limit: 100 Execution: records returned: 2 latency: 5.86 ms (local <1 ms) peak memory usage: 20.25 KiB (20,736 B) └── • Compute $v 1: map get($record 1, "status") Execution: records returned: 2 latency: 5.23 ms (local <1 ms) └── • TableScan source: /users order: UNDEFINED properties: row range: (-∞..+∞) output record: $record 1 variables: [$record 1] Execution: records returned: 2 latency: 4.68 ms records scanned: 2 data bytes read: 148 B What's next To learn about the execution tree nodes, see the Query execution reference .
- Execution: results returned: 2 request peak memory usage: 20.25 KiB (20,736 B) data bytes read: 148 B entity row scanned: 2 Billing: read units: 1 Execution Tree The execution tree describes the query execution as a series of nodes.

