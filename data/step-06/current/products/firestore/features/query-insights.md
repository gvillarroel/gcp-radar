---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.863Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Query insights"
feature_slug: "query-insights"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/enterprise-query-insights"
  - "https://docs.cloud.google.com/firestore/docs/key-visualizer"
  - "https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance"
keywords:
  - "query"
  - "insights"
  - "shows"
  - "performance"
  - "metrics"
  - "firestore"
  - "database"
---

# Query insights

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Query insights shows query performance metrics for a Firestore database; Query insights shows query performance metrics for a Firestore database.

## Extended Definition

Query insights shows query performance metrics for a Firestore database; Query insights shows query performance metrics for a Firestore database.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-insights](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-insights)
- [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- [https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance](https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance)

## Supporting Pages

### "Analyze query performance statistics \_|\_ Firestore in Native mode \_|\_\

- URL: [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-insights](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-insights)
- Source ID: `site-docs-reference-required-4`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View Query insights To view query insights for a Firestore database, open the database Query insights pane in the Google Cloud console.
- Query insights data Query insights includes data from the following API methods: listDocuments listCollectionIds runQuery runAggregationQuery partitionQuery executePipeline You can view data about the queries that use these methods for a given project, database, and time duration ranging from 10 minutes to 30 days.
- Analyze query performance statistics Preview — Firestore in Native mode (with Pipeline Operations) for Enterprise Edition This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Use the Query insights dashboard to help you with: Query performance optimization : identify queries with high latencies and that might need optimization.

### "Overview of Key Visualizer \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limits Although Key Visualizer shows a variety of metrics, it doesn't display every single metric that can affect the performance of Firestore.
- Each scan includes a heatmap that shows access patterns or performance metrics for a group of document keys or index keys over time.
- Home Documentation Databases Firestore in Native mode Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Key Visualizer helps you identify performance issues in your database caused by hotspots from sequential document or index keys or sudden traffic increases.

### "Optimize query performance \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance](https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance)
- Source ID: `site-docs-reference-required-4`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optimize query performance Preview — Firestore in Native mode (with Pipeline Operations) for Enterprise Edition This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Compare the performance metrics—such as latency, documents scanned, and index entries scanned—with and without forceIndex to fine-tune query performance.
- Use forceIndex with Query Explain You can use Query Explain , especially with the analyze option, to observe the effects of forceIndex : Verify that Firestore in Native Mode used the specified index in forceIndex by checking the leaf nodes of the execution tree for the index ID.
- The following section describe steps you can take to optimize query performance depending on the execution profile: Limit the number of results Use the records returned field in the execution tree to identify if the query is returning many documents.

