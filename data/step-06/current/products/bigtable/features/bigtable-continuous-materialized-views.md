---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.984Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable continuous materialized views"
feature_slug: "bigtable-continuous-materialized-views"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views"
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
keywords:
  - "materialized"
  - "continuous"
  - "views"
  - "preview"
  - "available"
---

# Bigtable continuous materialized views

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Continuous materialized views for Bigtable are now available in Preview.

## Extended Definition

Continuous materialized views for Bigtable are now available in Preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)

## Supporting Pages

### Continuous materialized views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- Source ID: `site-docs-reference-2`
- Final score: 233
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Continuous materialized views Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Use counters instead of continuous materialized views for the following: Aggregations that don't require filters and don't need to be across rows If you need to immediately read your writes from the cluster they are written to Use continuous materialized views when you want to do the following: Generate a different key for queries against your aggregations See changes to the base table reflected in your aggregations Automatically combine data across multiple rows Use a combination of counters and continuous materialized views for use cases like when you want to do the following: Capture fresh metrics in an aggregate cell but keep historical rollups of those metrics Combine metrics in a continuous materialized view Resource provisioning and performance Ongoing processing for continuous materialized views occurs as a low-priority background job.
- Metric Description materialized view/max delay Upper bound of processing delay for the continuous materialized view materialized view/storage Amount of data used for the continuous materialized view storage in bytes materialized view/intermediate storage Amount of data used by intermediate processing for the continuous materialized view in bytes table/materialized view intermediate storage Amount of data used by intermediate processing for continuous materialized views defined on this table materialized view/user errors Number of errors from user data for the continuous materialized view.
- What's next Continuous materialized view query Create and manage continuous materialized views Create an asynchronous secondary index Schema design best practices Distributed counting in Bigtable Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Continuous materialized view queries \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries)
- Source ID: `site-docs-root-2`
- Final score: 177
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Create and manage continuous materialized views GoogleSQL for Bigtable reference documentation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Continuous materialized view queries Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Before you read this document, you should be familiar with Continuous materialized views and GoogleSQL for Bigtable .
- For more information about metrics that can help you monitor your continuous materialized views, see Metrics .

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Secondary indexes You can use continuous materialized views as asynchronous secondary indexes for tables to query the same data using different lookup patterns or attributes.
- For more information, see Continuous materialized views .
- When the source table changes, Cassandra updates the materialized view automatically. continuous materialized view : a fully-managed, pre-computed result of a SQL query that is incrementally and automatically updated from a source table.
- You use Cassandra collection types, counters, or materialized views in addition to scalar types, which Bigtable is optimized for.

