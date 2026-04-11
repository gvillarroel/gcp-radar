---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.034Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Transaction statistics commit retry reporting"
feature_slug: "transaction-statistics-commit-retry-reporting"
latest_feature_date: "2021-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/transactions"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.spanner.v1.Transaction.Builder"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient"
keywords:
  - "transaction"
  - "statistics"
  - "commit"
  - "retry"
  - "reporting"
  - "spanner"
  - "now"
  - "include"
---

# Transaction statistics commit retry reporting

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner transaction statistics now include commit retry information to help diagnose performance issues caused by transaction aborts.

## Extended Definition

Spanner transaction statistics now include commit retry information to help diagnose performance issues caused by transaction aborts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/transactions](https://docs.cloud.google.com/spanner/docs/transactions)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.spanner.v1.Transaction.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.spanner.v1.Transaction.Builder)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)

## Supporting Pages

### Transactions overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/transactions](https://docs.cloud.google.com/spanner/docs/transactions)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows how to use a read-only transaction to get consistent data for two reads at the same timestamp: void ReadOnlyTransaction(google::cloud::spanner::Client client) { namespace spanner = ::google::cloud::spanner; auto read only = spanner::MakeReadOnlyTransaction(); spanner::SqlStatement select( &quot;SELECT SingerId, AlbumId, AlbumTitle FROM Albums&quot;); using RowType = std::tuple&lt;std::int64 t, std::int64 t, std::string&gt;; // Read#1.
- Transactions overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/transactions Spanner provides an interface for executing a body of work in the context of a read-only transaction, with retries for transaction aborts.

### Class Transaction.Builder (6.103.0) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.spanner.v1.Transaction.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.spanner.v1.Transaction.Builder)
- Source ID: `site-java-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Class Transaction.Builder (6.103.0) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.spanner.v1.Transaction.Builder .google.spanner.v1.MultiplexedSessionPrecommitToken precommit token = 3;

### Class SpannerAsyncClient (3.63.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Class SpannerAsyncClient (3.63.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerAsyncClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

