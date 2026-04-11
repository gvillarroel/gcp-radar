---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:49:01.304Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Hive metadata schema validation for imports"
feature_slug: "hive-metadata-schema-validation-for-imports"
latest_feature_date: "2021-06-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.pagers.ListMetadataImportsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.pagers.ListMetadataImportsPager"
keywords:
  - "hive"
  - "metadata"
  - "schema"
  - "validation"
  - "for"
  - "imports"
  - "this"
  - "import"
---

# Hive metadata schema validation for imports

Product: Dataproc Metastore
Coverage: LOW

## Step 02 Summary

This import validation checks Hive metadata schemas and required tables before metadata is imported into a service.

## Extended Definition

This import validation checks Hive metadata schemas and required tables before metadata is imported into a service.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.pagers.ListMetadataImportsAsyncPager](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.pagers.ListMetadataImportsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.pagers.ListMetadataImportsPager](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.pagers.ListMetadataImportsPager)

## Supporting Pages

### Import metadata into Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you start an import, Dataproc Metastore performs a Hive metadata schema validation.
- To check Hive metadata compatibility before an import, you can use the Dataproc Metastore Toolkit .
- Avro Avro based imports are only supported for Hive versions 2.3.6 and 3.1.2.
- MySQL MySQL based imports are supported for all Hive versions.

### "Class ListMetadataImportsAsyncPager (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.pagers.ListMetadataImportsAsyncPager](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.pagers.ListMetadataImportsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.metastore v1.types.ListMetadataImportsRequest The initial request object. response google.cloud.metastore v1.types.ListMetadataImportsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This class thinly wraps an initial ListMetadataImportsResponse object, and provides an aiter method to iterate through its metadata imports field.
- Union [ str , bytes ]]] = () ) A pager for iterating through list metadata imports requests.
- 1.22.0 (latest) 1.21.0 1.20.0 1.19.0 1.18.3 1.17.0 1.16.1 1.15.5 1.14.0 1.13.0 1.12.0 1.11.0 1.10.1 1.9.1 1.8.0 1.7.0 1.6.3 1.5.1 1.4.1 1.3.1 1.2.0 1.1.2 1.0.0 0.3.3 0.2.2 0.1.0 ListMetadataImportsAsyncPager ( method : typing .

### "Class ListMetadataImportsPager (1.22.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.pagers.ListMetadataImportsPager](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.pagers.ListMetadataImportsPager)
- Source ID: `site-python-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.metastore v1.types.ListMetadataImportsRequest The initial request object. response google.cloud.metastore v1.types.ListMetadataImportsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This class thinly wraps an initial ListMetadataImportsResponse object, and provides an iter method to iterate through its metadata imports field.
- Union [ str , bytes ]]] = () ) A pager for iterating through list metadata imports requests.
- 1.22.0 (latest) 1.21.0 1.20.0 1.19.0 1.18.3 1.17.0 1.16.1 1.15.5 1.14.0 1.13.0 1.12.0 1.11.0 1.10.1 1.9.1 1.8.0 1.7.0 1.6.3 1.5.1 1.4.1 1.3.1 1.2.0 1.1.2 1.0.0 0.3.3 0.2.2 0.1.0 ListMetadataImportsPager ( method : typing .

