---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:49:01.305Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Metadata import description updates"
feature_slug: "metadata-import-description-updates"
latest_feature_date: "2021-02-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient"
keywords:
  - "metadata"
  - "import"
  - "description"
  - "updates"
  - "this"
  - "capability"
  - "lets"
  - "users"
---

# Metadata import description updates

Product: Dataproc Metastore
Coverage: LOW

## Step 02 Summary

This capability lets users update the description of metadata imports under a Dataproc Metastore service.

## Extended Definition

This capability lets users update the description of metadata imports under a Dataproc Metastore service.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)

## Supporting Pages

### Import metadata into Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After the import completes, it appears in a table on the Service detail page on the Import/Export tab. gcloud CLI To import metadata, run the following gcloud metastore services import gcs command: gcloud metastore services import gcs SERVICE ID \ --location= LOCATION \ --import-id= IMPORT ID \ --description= DESCRIPTION \ --dump-type= DUMP TYPE \ --database-dump= DATABASE DUMP Replace the following: SERVICE ID : the ID or fully qualified name of your Dataproc Metastore service.
- The import metadata feature lets you populate an existing Dataproc Metastore service with metadata that's stored in a portable storage format.
- This page explains how to import metadata into a Dataproc Metastore service.
- What's next Export metadata from a service Update and delete a service Hive Metastore Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- CreateMetadataImportRequest ( parent="parent value", metadata import id="metadata import id value", ) Make the request operation = client. create metadata import (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.metastore v1.types.CreateMetadataImportRequest , dict]] The request object.
- This corresponds to the metadata import id field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- UpdateMetadataImportRequest ( ) Make the request operation = client. update metadata import (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.metastore v1.types.UpdateMetadataImportRequest , dict]] The request object.
- ListMetadataImportsRequest ( parent="parent value", ) Make the request page result = client. list metadata imports (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.metastore v1.types.ListMetadataImportsRequest , dict]] The request object.

### "Class DataprocMetastoreClient (1.22.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- Source ID: `site-python-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- CreateMetadataImportRequest ( parent="parent value", metadata import id="metadata import id value", ) Make the request operation = client. create metadata import (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.metastore v1.types.CreateMetadataImportRequest , dict] The request object.
- This corresponds to the metadata import id field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- UpdateMetadataImportRequest ( ) Make the request operation = client. update metadata import (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.metastore v1.types.UpdateMetadataImportRequest , dict] The request object.
- Iterating over this object will yield results and resolve additional pages automatically. metadata import path metadata import path ( project : str , location : str , service : str , metadata import : str ) - > str Returns a fully-qualified metadata import string. move table to database move table to database ( request : typing .

