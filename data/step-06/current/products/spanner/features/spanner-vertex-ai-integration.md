---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.937Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Vertex AI integration"
feature_slug: "spanner-vertex-ai-integration"
latest_feature_date: "2023-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store"
  - "https://docs.cloud.google.com/spanner/docs/spanner-ai-overview"
  - "https://googleapis.dev/python/django-google-spanner/latest/limitations.html"
keywords:
  - "spanner"
  - "vertex"
  - "ai"
  - "integration"
  - "makes"
  - "it"
  - "possible"
  - "to"
---

# Spanner Vertex AI integration

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Vertex AI integration makes it possible to use Vertex AI with GoogleSQL to add machine learning capabilities to Spanner applications; Spanner Vertex AI integration enables Spanner applications to use machine learning capabilities through Google Standard SQL.

## Extended Definition

Spanner Vertex AI integration makes it possible to use Vertex AI with GoogleSQL to add machine learning capabilities to Spanner applications; Spanner Vertex AI integration enables Spanner applications to use machine learning capabilities through Google Standard SQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)
- [https://docs.cloud.google.com/spanner/docs/spanner-ai-overview](https://docs.cloud.google.com/spanner/docs/spanner-ai-overview)
- [https://googleapis.dev/python/django-google-spanner/latest/limitations.html](https://googleapis.dev/python/django-google-spanner/latest/limitations.html)

## Supporting Pages

### Module vector_store (0.9.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)
- Source ID: `site-python-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Module vector store (0.9.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain google spanner.vector store SpannerVectorStore(instance id: str, database id: str, table name: str, embedding service: langchain core.embeddings.embeddings.Embeddings, id column: str = &#x27;langchain id&#x27;, content column: str = &#x27;content&#x27;, embedding column: typing.Optional[typing.Union[str, langchain google spanner.vector store.TableColumn]] = None, client: typing.Optional[google.cloud.spanner v1.client.Client] = None, metadata columns: typing.Optional[typing.List[str]] = None, ignore metadata columns: typing.Optional[typing.List[str]] = None, metadata json column: typing.Optional[str] = None, vector index name: typing.Optional[str] = None, query parameters: langchain google spanner.vector store.QueryParameters = &lt;langchain google spanner.vector store.QueryParameters object&gt;)

### Spanner AI overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/spanner-ai-overview](https://docs.cloud.google.com/spanner/docs/spanner-ai-overview)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Spanner integrates with services like Vertex AI to invoke the generation of vector embeddings from unstructured text data.
- Spanner AI overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/spanner-ai-overview Use Spanner with Vector Search to implement similarity search on unstructured text data.

### Current limitations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/limitations.html](https://googleapis.dev/python/django-google-spanner/latest/limitations.html)
- Source ID: `site-python-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Current limitations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/limitations.html Spanner doesn’t have support for auto-generating primary key values.
- It generates a default using Field’s default option which means AutoFields will have a value when a model instance is created.
- Therefore, django-google-spanner monkey-patches AutoField to generate a random UUID4.

