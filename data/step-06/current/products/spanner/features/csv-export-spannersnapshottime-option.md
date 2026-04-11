---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.025Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "CSV export spannerSnapshotTime option"
feature_slug: "csv-export-spannersnapshottime-option"
latest_feature_date: "2021-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store"
  - "https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures"
  - "https://docs.cloud.google.com/spanner/docs/iam"
keywords:
  - "csv"
  - "export"
  - "spannersnapshottime"
  - "option"
  - "now"
  - "supports"
  - "the"
  - "to"
---

# CSV export spannerSnapshotTime option

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

CSV export now supports the spannerSnapshotTime option to export data as it existed at a specific past point in time.

## Extended Definition

CSV export now supports the spannerSnapshotTime option to export data as it existed at a specific past point in time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)
- [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures)
- [https://docs.cloud.google.com/spanner/docs/iam](https://docs.cloud.google.com/spanner/docs/iam)

## Supporting Pages

### Module vector_store (0.9.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)
- Source ID: `site-python-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Module vector store (0.9.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain google spanner.vector store SpannerVectorStore(instance id: str, database id: str, table name: str, embedding service: langchain core.embeddings.embeddings.Embeddings, id column: str = &#x27;langchain id&#x27;, content column: str = &#x27;content&#x27;, embedding column: typing.Optional[typing.Union[str, langchain google spanner.vector store.TableColumn]] = None, client: typing.Optional[google.cloud.spanner v1.client.Client] = None, metadata columns: typing.Optional[typing.List[str]] = None, ignore metadata columns: typing.Optional[typing.List[str]] = None, metadata json column: typing.Optional[str] = None, vector index name: typing.Optional[str] = None, query parameters: langchain google spanner.vector store.QueryParameters = &lt;langchain google spanner.vector store.QueryParameters object&gt;)

### Stored system procedures for GoogleSQL | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures](https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Stored system procedures for GoogleSQL Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/standard-sql/stored-procedures Documentation · Databases · Spanner · Reference · Send feedback · This section describes stored system procedures for Spanner.
- A stored system procedure contains SQL code that you can reuse.

### IAM overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/iam](https://docs.cloud.google.com/spanner/docs/iam)
- Source ID: `site-iam-reference`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IAM overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/iam There are two types of predefined roles for Spanner: Person roles: Granted to users or groups, which allows them to perform actions on the resources in your project.
- Machine roles: Granted to service accounts, which allows machines running as ...

