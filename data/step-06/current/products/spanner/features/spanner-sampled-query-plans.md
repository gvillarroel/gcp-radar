---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.931Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner sampled query plans"
feature_slug: "spanner-sampled-query-plans"
latest_feature_date: "2023-10-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter"
  - "https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store"
  - "https://docs.cloud.google.com/spanner/docs/instances"
keywords:
  - "spanner"
  - "sampled"
  - "query"
  - "plans"
  - "now"
  - "offers"
  - "in"
  - "ga"
---

# Spanner sampled query plans

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now offers sampled query plans in GA, enabling users to view historical query plans and compare query performance over time.

## Extended Definition

Spanner now offers sampled query plans in GA, enabling users to view historical query plans and compare query performance over time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter](https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter)
- [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)
- [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)

## Supporting Pages

### Package com.google.cloud.spanner.pgadapter (0.27.1) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter](https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter)
- Source ID: `site-java-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Package com.google.cloud.spanner.pgadapter (0.27.1) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/pgadapter/latest/com.google.cloud.spanner.pgadapter This ConnectionHandler uses WireMessage to receive and send all messages from and to the client, using the intermediate representation IntermediateStatement that servers as a middle layer between Postgres and Spanner.

### Module vector_store (0.9.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)
- Source ID: `site-python-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Module vector store (0.9.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain google spanner.vector store SpannerVectorStore(instance id: str, database id: str, table name: str, embedding service: langchain core.embeddings.embeddings.Embeddings, id column: str = &#x27;langchain id&#x27;, content column: str = &#x27;content&#x27;, embedding column: typing.Optional[typing.Union[str, langchain google spanner.vector store.TableColumn]] = None, client: typing.Optional[google.cloud.spanner v1.client.Client] = None, metadata columns: typing.Optional[typing.List[str]] = None, ignore metadata columns: typing.Optional[typing.List[str]] = None, metadata json column: typing.Optional[str] = None, vector index name: typing.Optional[str] = None, query parameters: langchain google spanner.vector store.QueryParameters = &lt;langchain google spanner.vector store.QueryParameters object&gt;)

### Instances overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Instances overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/instances Once an instance is created, you can list, edit, or delete it.
- Spanner is a fully managed database service which oversees its own underlying tasks and resources, including monitoring and restarting processes when necessary with zero downtime.

