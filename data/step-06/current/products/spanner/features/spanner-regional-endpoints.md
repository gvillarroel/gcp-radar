---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.950Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner regional endpoints"
feature_slug: "spanner-regional-endpoints"
latest_feature_date: "2023-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store"
  - "https://docs.cloud.google.com/spanner/docs/rpc-endpoints"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool"
keywords:
  - "spanner"
  - "regional"
  - "endpoints"
  - "allow"
  - "clients"
  - "to"
  - "connect"
  - "through"
---

# Spanner regional endpoints

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner regional endpoints allow clients to connect through endpoints limited to a specific region to help enforce regional data residency and control requirements.

## Extended Definition

Spanner regional endpoints allow clients to connect through endpoints limited to a specific region to help enforce regional data residency and control requirements.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)
- [https://docs.cloud.google.com/spanner/docs/rpc-endpoints](https://docs.cloud.google.com/spanner/docs/rpc-endpoints)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool)

## Supporting Pages

### Module vector_store (0.9.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)
- Source ID: `site-python-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Module vector store (0.9.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain google spanner.vector store SpannerVectorStore(instance id: str, database id: str, table name: str, embedding service: langchain core.embeddings.embeddings.Embeddings, id column: str = &#x27;langchain id&#x27;, content column: str = &#x27;content&#x27;, embedding column: typing.Optional[typing.Union[str, langchain google spanner.vector store.TableColumn]] = None, client: typing.Optional[google.cloud.spanner v1.client.Client] = None, metadata columns: typing.Optional[typing.List[str]] = None, ignore metadata columns: typing.Optional[typing.List[str]] = None, metadata json column: typing.Optional[str] = None, vector index name: typing.Optional[str] = None, query parameters: langchain google spanner.vector store.QueryParameters = &lt;langchain google spanner.vector store.QueryParameters object&gt;)

### Global and regional service endpoints | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/rpc-endpoints](https://docs.cloud.google.com/spanner/docs/rpc-endpoints)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Global and regional service endpoints Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/rpc-endpoints This page describes Spanner RPC global and regional endpoints.

### Class SpannerPool (6.103.0) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool)
- Source ID: `site-java-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Class SpannerPool (6.103.0) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.connection.SpannerPool The SpannerPool keeps track of which Spanner objects have been opened by connections during the lifetime of the JVM, which connections are still opened and closed, and which Spanner objects could be closed.

