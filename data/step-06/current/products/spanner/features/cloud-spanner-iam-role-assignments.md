---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.099Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner IAM role assignments"
feature_slug: "cloud-spanner-iam-role-assignments"
latest_feature_date: "2017-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/spanner"
  - "https://docs.cloud.google.com/spanner/docs/iam"
  - "https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store"
keywords:
  - "spanner"
  - "iam"
  - "role"
  - "assignments"
  - "supports"
  - "applying"
  - "roles"
  - "to"
---

# Cloud Spanner IAM role assignments

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner supports applying IAM roles to databases, instances, and projects.

## Extended Definition

Cloud Spanner supports applying IAM roles to databases, instances, and projects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/roles-permissions/spanner](https://docs.cloud.google.com/iam/docs/roles-permissions/spanner)
- [https://docs.cloud.google.com/spanner/docs/iam](https://docs.cloud.google.com/spanner/docs/iam)
- [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)

## Supporting Pages

### Spanner roles and permissions | Identity and Access Management (IAM) | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/spanner](https://docs.cloud.google.com/iam/docs/roles-permissions/spanner)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Spanner roles and permissions Identity and Access Management (IAM) Google Cloud Documentation Source URL: https://docs.cloud.google.com/iam/docs/roles-permissions/spanner This page lists the IAM roles and permissions for Spanner.

### IAM overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/iam](https://docs.cloud.google.com/spanner/docs/iam)
- Source ID: `site-iam-reference`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IAM overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/iam There are two types of predefined roles for Spanner: Person roles: Granted to users or groups, which allows them to perform actions on the resources in your project.
- Machine roles: Granted to service accounts, which allows machines running as ...

### Module vector_store (0.9.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store](https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain_google_spanner.vector_store)
- Source ID: `site-python-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Module vector store (0.9.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/langchain-google-spanner/latest/langchain google spanner.vector store SpannerVectorStore(instance id: str, database id: str, table name: str, embedding service: langchain core.embeddings.embeddings.Embeddings, id column: str = &#x27;langchain id&#x27;, content column: str = &#x27;content&#x27;, embedding column: typing.Optional[typing.Union[str, langchain google spanner.vector store.TableColumn]] = None, client: typing.Optional[google.cloud.spanner v1.client.Client] = None, metadata columns: typing.Optional[typing.List[str]] = None, ignore metadata columns: typing.Optional[typing.List[str]] = None, metadata json column: typing.Optional[str] = None, vector index name: typing.Optional[str] = None, query parameters: langchain google spanner.vector store.QueryParameters = &lt;langchain google spanner.vector store.QueryParameters object&gt;)

