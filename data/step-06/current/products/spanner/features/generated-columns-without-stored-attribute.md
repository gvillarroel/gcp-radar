---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.901Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Generated columns without STORED attribute"
feature_slug: "generated-columns-without-stored-attribute"
latest_feature_date: "2024-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store"
  - "https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html"
  - "https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures"
keywords:
  - "generated"
  - "columns"
  - "without"
  - "stored"
  - "attribute"
  - "in"
  - "spanner"
  - "now"
---

# Generated columns without STORED attribute

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Generated columns in Spanner now work without the STORED attribute, so values are evaluated at query or index time without additional storage or write overhead.

## Extended Definition

Generated columns in Spanner now work without the STORED attribute, so values are evaluated at query or index time without additional storage or write overhead.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)
- [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures)

## Supporting Pages

### Module vector_store (0.9.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)
- Source ID: `site-python-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Module vector store (0.9.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain google spanner.vector store SpannerVectorStore(instance id: str, database id: str, table name: str, embedding service: langchain core.embeddings.embeddings.Embeddings, id column: str = &#x27;langchain id&#x27;, content column: str = &#x27;content&#x27;, embedding column: typing.Optional[typing.Union[str, langchain google spanner.vector store.TableColumn]] = None, client: typing.Optional[google.cloud.spanner v1.client.Client] = None, metadata columns: typing.Optional[typing.List[str]] = None, ignore metadata columns: typing.Optional[typing.List[str]] = None, metadata json column: typing.Optional[str] = None, vector index name: typing.Optional[str] = None, query parameters: langchain google spanner.vector store.QueryParameters = &lt;langchain google spanner.vector store.QueryParameters object&gt;)

### django_spanner.operations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- Source ID: `site-python-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- django spanner.operations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/ modules/django spanner/operations.html [docs]class DatabaseOperations(BaseDatabaseOperations): &quot;&quot;&quot;A Spanner-specific version of Django database operations.&quot;&quot;&quot; cast data types = {&quot;CharField&quot;: &quot;STRING&quot;, &quot;TextField&quot;: &quot;STRING&quot;} cast char field without max length = &quot;STRING&quot; compiler module = &quot;django spanner.compiler&quot; # Django&#x27;s lookup names that require a different name in Spanner&#x27;s # EXTRACT() function.

### Stored system procedures for GoogleSQL | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Stored system procedures for GoogleSQL Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures Documentation · Databases · Spanner · Reference · Send feedback · This section describes stored system procedures for Spanner.
- A stored system procedure contains SQL code that you can reuse.

