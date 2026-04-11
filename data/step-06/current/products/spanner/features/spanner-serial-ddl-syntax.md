---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.876Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner SERIAL DDL syntax"
feature_slug: "spanner-serial-ddl-syntax"
latest_feature_date: "2025-01-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/graph/overview"
  - "https://googleapis.dev/python/spanner/latest/index.html"
  - "https://docs.cloud.google.com/spanner/docs/transactions"
keywords:
  - "spanner"
  - "serial"
  - "ddl"
  - "syntax"
  - "adds"
  - "for"
  - "the"
  - "in"
---

# Spanner SERIAL DDL syntax

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner adds support for the SERIAL DDL syntax in PostgreSQL-dialect databases to simplify identity-style primary key generation.

## Extended Definition

Spanner adds support for the SERIAL DDL syntax in PostgreSQL-dialect databases to simplify identity-style primary key generation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/graph/overview](https://docs.cloud.google.com/spanner/docs/graph/overview)
- [https://googleapis.dev/python/spanner/latest/index.html](https://googleapis.dev/python/spanner/latest/index.html)
- [https://docs.cloud.google.com/spanner/docs/transactions](https://docs.cloud.google.com/spanner/docs/transactions)

## Supporting Pages

### Spanner Graph overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/graph/overview](https://docs.cloud.google.com/spanner/docs/graph/overview)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Spanner Graph overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/graph/overview Documentation · Databases · Spanner · Guides · Send feedback · PostgreSQL interface note: The examples in topics for Spanner Graph are intended for GoogleSQL-dialect databases.
- For more information, see the Spanner editions overview.
- Spanner Graph doesn&#x27;t support the PostgreSQL interface.
- Note: This feature is available with the Spanner Enterprise edition and Enterprise Plus edition.

### Python Client for Cloud Spanner

- URL: [https://googleapis.dev/python/spanner/latest/index.html](https://googleapis.dev/python/spanner/latest/index.html)
- Source ID: `site-python-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Python Client for Cloud Spanner Source URL: https://googleapis.dev/python/spanner/latest/index.html Cloud Spanner is the world’s first fully managed relational database service to offer both strong consistency and horizontal scalability for mission-critical online transaction processing (OLTP) applications.

### Transactions overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/transactions](https://docs.cloud.google.com/spanner/docs/transactions)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows how to use a read-only transaction to get consistent data for two reads at the same timestamp: void ReadOnlyTransaction(google::cloud::spanner::Client client) { namespace spanner = ::google::cloud::spanner; auto read only = spanner::MakeReadOnlyTransaction(); spanner::SqlStatement select( &quot;SELECT SingerId, AlbumId, AlbumTitle FROM Albums&quot;); using RowType = std::tuple&lt;std::int64 t, std::int64 t, std::string&gt;; // Read#1.
- Transactions overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/transactions Spanner provides an interface for executing a body of work in the context of a read-only transaction, with retries for transaction aborts.

