---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:06.172Z"
product_name: "Data Catalog"
product_slug: "data-catalog"
feature_name: "Regionalized metadata hosting"
feature_slug: "regionalized-metadata-hosting"
latest_feature_date: "2020-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1"
keywords:
  - "regionalized"
  - "metadata"
  - "hosting"
  - "catalog"
  - "hosts"
  - "user"
  - "regionally"
  - "across"
---

# Regionalized metadata hosting

Product: Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Data Catalog hosts user metadata regionally across 23 regions worldwide.

## Extended Definition

Data Catalog hosts user metadata regionally across 23 regions worldwide.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1)

## Supporting Pages

### "Class DataCatalogAsyncClient (3.29.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient)
- Source ID: `site-python-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- For entries with type DATA STREAM : - schema For entries with type FILESET : - schema - display name - description - gcs fileset spec - gcs fileset spec.file patterns For entries with user specified type : - schema - display name - description - user specified type - user specified system - linked resource - source system timestamps This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ReconcileTags returns a [long-running operation] [google.longrunning.Operation] resource that can be queried with Operations.GetOperation][google.longrunning.Operations.GetOperation] to return [ReconcileTagsMetadata] [google.cloud.datacatalog.v1.ReconcileTagsMetadata] and a [ReconcileTagsResponse] [google.cloud.datacatalog.v1.ReconcileTagsResponse] message.
- For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources. create tag template field create tag template field ( request : typing .
- For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources. update tag template field update tag template field ( request : typing .

### "Class DataCatalogClient (3.29.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient)
- Source ID: `site-python-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- For entries with type DATA STREAM : - schema For entries with type FILESET : - schema - display name - description - gcs fileset spec - gcs fileset spec.file patterns For entries with user specified type : - schema - display name - description - user specified type - user specified system - linked resource - source system timestamps This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ReconcileTags returns a [long-running operation] [google.longrunning.Operation] resource that can be queried with Operations.GetOperation][google.longrunning.Operations.GetOperation] to return [ReconcileTagsMetadata] [google.cloud.datacatalog.v1.ReconcileTagsMetadata] and a [ReconcileTagsResponse] [google.cloud.datacatalog.v1.ReconcileTagsResponse] message.
- For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources. create tag template field create tag template field ( request : typing .
- For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources. update tag template field update tag template field ( request : typing .

### "Package com.google.cloud.datacatalog.v1 (1.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1)
- Source ID: `site-java-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Personal Details Entry metadata relevant only to the user and private to them. com. google. cloud. datacatalog. v1.
- Builder Entry metadata relevant only to the user and private to them. com. google. cloud. datacatalog. v1.
- Entry Type Metadata automatically ingested from Google Cloud resources like BigQuery tables or Pub/Sub topics always uses enum values from EntryType as the type of entry. com. google. cloud. datacatalog. v1.
- Cloud Bigtable Instance Spec Specification that applies to Instance entries that are part of CLOUD BIGTABLE system. (user specified type) com. google. cloud. datacatalog. v1.

