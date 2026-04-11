---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.866Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner vector indexes in GoogleSQL"
feature_slug: "spanner-vector-indexes-in-googlesql"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store"
  - "https://docs.cloud.google.com/spanner/docs/graph/overview"
  - "https://docs.cloud.google.com/spanner/docs/instances"
keywords:
  - "spanner"
  - "vector"
  - "indexes"
  - "in"
  - "googlesql"
  - "made"
  - "the"
  - "dialect"
---

# Spanner vector indexes in GoogleSQL

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner made vector indexes in the GoogleSQL dialect generally available, enabling faster similarity search and nearest-neighbor queries on large vector tables.

## Extended Definition

Spanner made vector indexes in the GoogleSQL dialect generally available, enabling faster similarity search and nearest-neighbor queries on large vector tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)
- [https://docs.cloud.google.com/spanner/docs/graph/overview](https://docs.cloud.google.com/spanner/docs/graph/overview)
- [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)

## Supporting Pages

### Module vector_store (0.9.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)
- Source ID: `site-python-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Module vector store (0.9.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain google spanner.vector store SpannerVectorStore(instance id: str, database id: str, table name: str, embedding service: langchain core.embeddings.embeddings.Embeddings, id column: str = &#x27;langchain id&#x27;, content column: str = &#x27;content&#x27;, embedding column: typing.Optional[typing.Union[str, langchain google spanner.vector store.TableColumn]] = None, client: typing.Optional[google.cloud.spanner v1.client.Client] = None, metadata columns: typing.Optional[typing.List[str]] = None, ignore metadata columns: typing.Optional[typing.List[str]] = None, metadata json column: typing.Optional[str] = None, vector index name: typing.Optional[str] = None, query parameters: langchain google spanner.vector store.QueryParameters = &lt;langchain google spanner.vector store.QueryParameters object&gt;)

### Spanner Graph overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/graph/overview](https://docs.cloud.google.com/spanner/docs/graph/overview)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Spanner Graph overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/graph/overview Documentation · Databases · Spanner · Guides · Send feedback · PostgreSQL interface note: The examples in topics for Spanner Graph are intended for GoogleSQL-dialect databases.
- Spanner Graph doesn&#x27;t support the PostgreSQL interface.
- For more information, see the Spanner editions overview.
- Note: This feature is available with the Spanner Enterprise edition and Enterprise Plus edition.

### Instances overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Instances overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/instances Once an instance is created, you can list, edit, or delete it.
- Spanner is a fully managed database service which oversees its own underlying tasks and resources, including monitoring and restarting processes when necessary with zero downtime.

