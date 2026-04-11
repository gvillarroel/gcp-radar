---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.052Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner SQL transaction statistics retrieval"
feature_slug: "spanner-sql-transaction-statistics-retrieval"
latest_feature_date: "2020-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/transactions"
  - "https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures"
  - "https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions"
keywords:
  - "spanner"
  - "sql"
  - "transaction"
  - "statistics"
  - "retrieval"
  - "added"
  - "query"
  - "for"
---

# Spanner SQL transaction statistics retrieval

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added SQL query support for retrieving recent transaction statistics over 1-minute, 10-minute, and 1-hour windows.

## Extended Definition

Spanner added SQL query support for retrieving recent transaction statistics over 1-minute, 10-minute, and 1-hour windows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/transactions](https://docs.cloud.google.com/spanner/docs/transactions)
- [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures)
- [https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions](https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions)

## Supporting Pages

### Transactions overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/transactions](https://docs.cloud.google.com/spanner/docs/transactions)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to use a read-only transaction to get consistent data for two reads at the same timestamp: void ReadOnlyTransaction(google::cloud::spanner::Client client) { namespace spanner = ::google::cloud::spanner; auto read only = spanner::MakeReadOnlyTransaction(); spanner::SqlStatement select( &quot;SELECT SingerId, AlbumId, AlbumTitle FROM Albums&quot;); using RowType = std::tuple&lt;std::int64 t, std::int64 t, std::string&gt;; // Read#1.
- Transactions overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/transactions Spanner provides an interface for executing a body of work in the context of a read-only transaction, with retries for transaction aborts.

### Stored system procedures for GoogleSQL | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Stored system procedures for GoogleSQL Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures Documentation · Databases · Spanner · Reference · Send feedback · This section describes stored system procedures for Spanner.
- A stored system procedure contains SQL code that you can reuse.

### Supported PostgreSQL functions | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions](https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Supported PostgreSQL functions Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/postgresql/functions Documentation · Databases · Spanner · Reference · Send feedback · This page defines the functions supported for PostgreSQL-dialect databases in Spanner.
- The content on this page is based on the PostgreSQL documentation, which is available under the PostgreSQL License.

