---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.096Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Parallel read and query execution in client libraries"
feature_slug: "parallel-read-and-query-execution-in-client-libraries"
latest_feature_date: "2018-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store"
  - "https://docs.cloud.google.com/spanner/docs/reference/libraries"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.client.Client"
keywords:
  - "parallel"
  - "read"
  - "and"
  - "query"
  - "execution"
  - "in"
  - "client"
  - "libraries"
---

# Parallel read and query execution in client libraries

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added support for parallel reading and querying with multiple workers via its C#, Go, Java, and PHP client libraries.

## Extended Definition

Spanner added support for parallel reading and querying with multiple workers via its C#, Go, Java, and PHP client libraries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)
- [https://docs.cloud.google.com/spanner/docs/reference/libraries](https://docs.cloud.google.com/spanner/docs/reference/libraries)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.client.Client](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.client.Client)

## Supporting Pages

### Module vector_store (0.9.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)
- Source ID: `site-python-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Module vector store (0.9.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain google spanner.vector store SpannerVectorStore(instance id: str, database id: str, table name: str, embedding service: langchain core.embeddings.embeddings.Embeddings, id column: str = &#x27;langchain id&#x27;, content column: str = &#x27;content&#x27;, embedding column: typing.Optional[typing.Union[str, langchain google spanner.vector store.TableColumn]] = None, client: typing.Optional[google.cloud.spanner v1.client.Client] = None, metadata columns: typing.Optional[typing.List[str]] = None, ignore metadata columns: typing.Optional[typing.List[str]] = None, metadata json column: typing.Optional[str] = None, vector index name: typing.Optional[str] = None, query parameters: langchain google spanner.vector store.QueryParameters = &lt;langchain google spanner.vector store.QueryParameters object&gt;)

### Spanner client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/libraries](https://docs.cloud.google.com/spanner/docs/reference/libraries)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Spanner client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/libraries Imports the Google Cloud client library require &quot;google/cloud/spanner&quot; # Your Google Cloud Platform project ID project id = &quot;YOUR PROJECT ID&quot; # Instantiates a client spanner = Google::Cloud::Spanner.new project: project id # Your Cloud Spanner instance ID instance id = &quot;my-instance&quot; # Your Cloud Spanner database ID database id = &quot;my-database&quot; # Gets a reference to a Cloud Spanner instance database database client = spanner.client instance id, database id # Execute a simple SQL statement results = database client.execute query &quot;SELECT 1&quot; results.rows.each do row puts row end

### Class Client (3.58.0) | Python client library | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.client.Client](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.client.Client)
- Source ID: `site-python-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Class Client (3.58.0) Python client library Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.client.Client Client for interacting with Cloud Spanner API.

