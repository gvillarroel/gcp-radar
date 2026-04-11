---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.915Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner regional endpoint in me-central2"
feature_slug: "spanner-regional-endpoint-in-me-central2"
latest_feature_date: "2024-02-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/rpc-endpoints"
  - "https://docs.cloud.google.com/spanner/docs/transactions"
  - "https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store"
keywords:
  - "spanner"
  - "regional"
  - "endpoint"
  - "in"
  - "me"
  - "central2"
  - "supports"
  - "the"
---

# Spanner regional endpoint in me-central2

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner supports a regional endpoint in the me-central2 region so workloads can run with data locality restrictions for compliance needs.

## Extended Definition

Spanner supports a regional endpoint in the me-central2 region so workloads can run with data locality restrictions for compliance needs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/rpc-endpoints](https://docs.cloud.google.com/spanner/docs/rpc-endpoints)
- [https://docs.cloud.google.com/spanner/docs/transactions](https://docs.cloud.google.com/spanner/docs/transactions)
- [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)

## Supporting Pages

### Global and regional service endpoints | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/rpc-endpoints](https://docs.cloud.google.com/spanner/docs/rpc-endpoints)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Global and regional service endpoints Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/rpc-endpoints This page describes Spanner RPC global and regional endpoints.

### Transactions overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/transactions](https://docs.cloud.google.com/spanner/docs/transactions)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to use a read-only transaction to get consistent data for two reads at the same timestamp: void ReadOnlyTransaction(google::cloud::spanner::Client client) { namespace spanner = ::google::cloud::spanner; auto read only = spanner::MakeReadOnlyTransaction(); spanner::SqlStatement select( &quot;SELECT SingerId, AlbumId, AlbumTitle FROM Albums&quot;); using RowType = std::tuple&lt;std::int64 t, std::int64 t, std::string&gt;; // Read#1.
- Transactions overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/transactions Spanner provides an interface for executing a body of work in the context of a read-only transaction, with retries for transaction aborts.

### Module vector_store (0.9.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Module vector store (0.9.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain google spanner.vector store SpannerVectorStore(instance id: str, database id: str, table name: str, embedding service: langchain core.embeddings.embeddings.Embeddings, id column: str = &#x27;langchain id&#x27;, content column: str = &#x27;content&#x27;, embedding column: typing.Optional[typing.Union[str, langchain google spanner.vector store.TableColumn]] = None, client: typing.Optional[google.cloud.spanner v1.client.Client] = None, metadata columns: typing.Optional[typing.List[str]] = None, ignore metadata columns: typing.Optional[typing.List[str]] = None, metadata json column: typing.Optional[str] = None, vector index name: typing.Optional[str] = None, query parameters: langchain google spanner.vector store.QueryParameters = &lt;langchain google spanner.vector store.QueryParameters object&gt;)

