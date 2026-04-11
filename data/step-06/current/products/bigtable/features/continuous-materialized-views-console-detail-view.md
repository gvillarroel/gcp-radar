---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.308Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Continuous materialized views console detail view"
feature_slug: "continuous-materialized-views-console-detail-view"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views"
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
keywords:
  - "detail"
  - "materialized"
  - "continuous"
  - "view"
  - "views"
  - "console"
  - "bigtable"
  - "now"
---

# Continuous materialized views console detail view

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Bigtable now supports viewing continuous materialized view details directly in the Google Cloud console.

## Extended Definition

Bigtable now supports viewing continuous materialized view details directly in the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)

## Supporting Pages

### Continuous materialized views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Continuous materialized view query Create and manage continuous materialized views Create an asynchronous secondary index Schema design best practices Distributed counting in Bigtable Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Creating continuous materialized views on existing tables When you create a continuous materialized view for an existing table, Bigtable starts a one-time process that populates the view with existing table data.
- You can create a continuous materialized view using the Google Cloud CLI, the Bigtable Studio query editor in the Google Cloud console, or the Bigtable client libraries for Java and Go.
- The following are key characteristics of continuous materialized views in Bigtable: Zero maintenance : A continuous materialized view is precomputed in the background.

### Continuous materialized view queries \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Create and manage continuous materialized views GoogleSQL for Bigtable reference documentation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you read this document, you should be familiar with Continuous materialized views and GoogleSQL for Bigtable .
- Supported aggregations You can use the following aggregation functions in a SQL query that defines a continuous materialized view: COUNT SUM MIN MAX HLL COUNT.INIT HLL COUNT.MERGE HLL COUNT.MERGE PARTIAL ANY VALUE BIT AND BIT OR BIT XOR AVG If you SELECT COUNT( ) you must define a row key, like in the following example: SELECT ' ' AS key , COUNT ( ) AS count FROM foo GROUP BY key ; Unsupported SQL features You can't use the following SQL features: Any feature not supported by GoogleSQL for Bigtable ARRAY ARRAY AGG ARRAY CONCAT AGG COUNT IF CURRENT TIME and other non-deterministic functions DATE , DATETIME as output columns (Use TIMESTAMP or store a string.) DESC sort in the output DISTINCT option, as in SUM( DISTINCT value) ) LIMIT/OFFSET SELECT OVER clause to create a windowing aggregation STRUCT You also can't nest GROUP BY or ORDER BY clauses or create map columns.
- Row keys defined by a key column You can optionally specify a key column when you define your continuous materialized view. (This is different from the key column that you get when you execute a SQL query on a Bigtable table.) If you specify a key , the following rules apply: You must group by key , and you can't group by anything else except (optionally) by timestamp .

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- March 30, 2026 Feature You can view the details of Bigtable continuous materialized views in the Google Cloud console.
- April 07, 2025 Libraries Java 2.57.2 (2025-03-31) Bug Fixes Library should released as 2.57.2 ( #2549 ) ( 58d0bbd ) Go 1.36.0 (2025-03-31) Features bigtable/admin: Add MaterializedViews and LogicalViews APIs ( b323f88 ) bigtable/admin: Add MaterializedViews and LogicalViews APIs ( dd0d1d7 ) bigtable/admin: Publish row key schema fields in table proto and relevant admin APIs to setup a table with a row key schema ( 3f23a91 ) bigtable: Add Bind function to bind query params ( #11862 ) ( 24c5ae0 ) bigtable: Add datatypes for GoogleSQL ( #11816 ) ( 5a9eb10 ) bigtable: Add Execute method to execute GoogleSQL queries ( #11883 ) ( 0e53dcd ) bigtable: Add MaterializedViewName to ReadRows and SampleRowKeys ( b323f88 ) bigtable: Add methods to read ResultRow ( #11924 ) ( 8b8ca9e ) bigtable: Add PrepareQuery api and update ExecuteQuery to support it ( dd0d1d7 ) bigtable: Add PrepareStatement to run GoogleSQL queries ( #11829 ) ( ea00b17 ) bigtable: Add support for data APIs for Materialized Views ( #11796 ) ( f5ae93b ) bigtable: Add support for logical views ( #11792 ) ( 630d751 ) bigtable: Add support for materialized views for admin client ( #11793 ) ( 640be05 ) bigtable: Adding node scaling factor ( b680164 ) bigtable: Disable MV and LV tests ( #11827 ) ( 42dca03 ) bigtable: Row key schema support in admin client ( #11777 ) ( 4158bac ) Bug Fixes bigtable: Allow GC updates on emulated aggregate column family ( #11499 ) ( 0682bfa ) bigtable: Update golang.org/x/net to 0.37.0 ( 1144978 ) Documentation bigtable/admin: Fixed formatting of resource path strings ( dd0d1d7 ) bigtable: Update ExecuteQuery API docs to reflect changes ( dd0d1d7 ) Java 2.57.3 (2025-04-01) Bug Fixes Remove debug messages ( #2552 ) ( 6359834 ) March 31, 2025 Libraries Java 2.57.0 (2025-03-24) Features Add PreparedStatement and update ExecuteQuery API to use it ( #2534 ) ( 49d4d09 ) Java 2.57.1 (2025-03-24) Bug Fixes Handling of totalTimeout on sql plan refresh ( #2541 ) ( bf49cf9 ) March 26, 2025 Change The Monitoring page in the Google Cloud console for Bigtable has been renamed to System insights.
- December 22, 2025 Libraries Python 2.35.0 (2025-12-16) Features add basic interceptor to client (#1206) ( 6561cfac ) Add encodings for STRUCT and the Timestamp type ( 72dfdc44 ) add PeerInfo proto in Bigtable API ( 72dfdc44 ) Add Type API updates needed to support structured keys in materialized views ( 72dfdc44 ) support mTLS certificates when available (#1249) ( ca20219c ) Bug Fixes re-export AddToCell for consistency (#1241) ( 2a5baf11 ) async client uses fixed grace period (#1236) ( 544db1cd ) Deprecate credentials file argument ( 72dfdc44 ) Add ReadRows/SampleRowKeys bindings for materialized views ( 72dfdc44 ) retry cancelled errors (#1235) ( e3fd5d86 ) Java 2.71.0-rc1 (2025-12-19) Features update with latest from main ( #2740 ) ( 90e1a02 ) feat: Upgrade protobuf gen code to 4.33 ( #2741 ) ( 2b1d201 ) Dependencies update sdk-platform-java-config to 3.55.0-rc1 ( #2738 ) ( 136f164 ) Go 1.41.0 (2025-12-15) Features add PeerInfo proto in Bigtable API (PiperOrigin-RevId: 829585900) ( 185951b3 ) precompute featureflags in client and reuse (#13297) ( 3b3253ac ) Add experimental Bigtable connection pool with custom load balancing strategy. (#12882) ( 7aa96127 ) Enable ALTS hard bound token in Bigtable w/ direct access (#13153) ( 90239341 ) Enable routing cookie and attempt headers for enhanced retries (#12964) ( 96cfd47a ) Bug Fixes fix project id sent in otel (#13286) ( 4865868c ) screaming uppercase metric status (#13484) ( b35ee8fd ) Performance Improvements parallelize the exportTimeSeries function (#13004) ( bafd691d ) December 15, 2025 Libraries Java 2.70.1 (2025-12-12) Dependencies Update shared dependencies ( #2734 ) ( 2823705 ) December 12, 2025 Feature In the Google Cloud console, you can import data into Bigtable using the Dataflow job builder , a web interface for building and running Dataflow pipelines.
- January 19, 2026 Libraries Java 2.71.0 (2026-01-15) Features Add CSM for batch write flow control ( #2685 ) ( 62ffd1b ) Bug Fixes bigtable: Add handling for gauge metrics ( #2719 ) ( 87aa4d5 ) Create stub with BigtableClientContext so otels are closed ( #2747 ) ( 3d0a6d9 ) Update BigtableChannelPool to use the background executor ( #2753 ) ( 8f6e2df ) Use the same background executor in otel reader and monitoring c… ( #2746 ) ( 3a58f9b ) Dependencies Update dependency com.google.cloud:gapic-libraries-bom to v1.76.0 ( #2754 ) ( be54ef6 ) Update shared dependencies ( #2752 ) ( fe1074c ) December 26, 2025 Feature Continuous materialized views support up to five continuous materialized views per table.

