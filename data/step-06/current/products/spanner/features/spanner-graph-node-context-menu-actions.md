---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.832Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Graph node context menu actions"
feature_slug: "spanner-graph-node-context-menu-actions"
latest_feature_date: "2026-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/graph/overview"
  - "https://docs.cloud.google.com/spanner/docs/transactions"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient"
keywords:
  - "spanner"
  - "graph"
  - "node"
  - "context"
  - "menu"
  - "actions"
  - "query"
  - "visualizations"
---

# Spanner Graph node context menu actions

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Graph query visualizations now support a node context menu that lets users expand or collapse adjacent nodes, highlight or hide nodes, and view a node’s neighbors.

## Extended Definition

Spanner Graph query visualizations now support a node context menu that lets users expand or collapse adjacent nodes, highlight or hide nodes, and view a node’s neighbors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/graph/overview](https://docs.cloud.google.com/spanner/docs/graph/overview)
- [https://docs.cloud.google.com/spanner/docs/transactions](https://docs.cloud.google.com/spanner/docs/transactions)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)

## Supporting Pages

### Spanner Graph overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/graph/overview](https://docs.cloud.google.com/spanner/docs/graph/overview)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Spanner Graph overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/graph/overview Documentation · Databases · Spanner · Guides · Send feedback · PostgreSQL interface note: The examples in topics for Spanner Graph are intended for GoogleSQL-dialect databases.
- Spanner Graph doesn&#x27;t support the PostgreSQL interface.
- Note: This feature is available with the Spanner Enterprise edition and Enterprise Plus edition.
- For more information, see the Spanner editions overview.

### Transactions overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/transactions](https://docs.cloud.google.com/spanner/docs/transactions)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Transactions overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/transactions Spanner provides an interface for executing a body of work in the context of a read-only transaction, with retries for transaction aborts.
- The following example shows how to use a read-only transaction to get consistent data for two reads at the same timestamp: void ReadOnlyTransaction(google::cloud::spanner::Client client) { namespace spanner = ::google::cloud::spanner; auto read only = spanner::MakeReadOnlyTransaction(); spanner::SqlStatement select( &quot;SELECT SingerId, AlbumId, AlbumTitle FROM Albums&quot;); using RowType = std::tuple&lt;std::int64 t, std::int64 t, std::string&gt;; // Read#1.

### Class SpannerAsyncClient (3.63.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Class SpannerAsyncClient (3.63.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerAsyncClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

