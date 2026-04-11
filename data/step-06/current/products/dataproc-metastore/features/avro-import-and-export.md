---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:49:01.303Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Avro import and export"
feature_slug: "avro-import-and-export"
latest_feature_date: "2021-07-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata"
keywords:
  - "avro"
  - "import"
  - "and"
  - "export"
  - "lets"
  - "dataproc"
  - "metastore"
  - "move"
---

# Avro import and export

Product: Dataproc Metastore
Coverage: LOW

## Step 02 Summary

Avro import and export lets Dataproc Metastore move metadata using Avro storage format; Avro import and export lets Dataproc Metastore move metadata using Avro storage format.

## Extended Definition

Avro import and export lets Dataproc Metastore move metadata using Avro storage format; Avro import and export lets Dataproc Metastore move metadata using Avro storage format.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- [https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata)

## Supporting Pages

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MoveTableToDatabaseRequest ( service="service value", table name="table name value", db name="db name value", destination db name="destination db name value", ) Make the request operation = client. move table to database (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.metastore v1.types.MoveTableToDatabaseRequest , dict]] The request object.
- CreateMetadataImportRequest ( parent="parent value", metadata import id="metadata import id value", ) Make the request operation = client. create metadata import (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.metastore v1.types.CreateMetadataImportRequest , dict]] The request object.
- ExportMetadataRequest ( destination gcs folder="destination gcs folder value", service="service value", ) Make the request operation = client. export metadata (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.metastore v1.types.ExportMetadataRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample move table to database(): Create a client client = metastore v1.

### "Class DataprocMetastoreClient (1.22.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- Source ID: `site-python-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MoveTableToDatabaseRequest ( service="service value", table name="table name value", db name="db name value", destination db name="destination db name value", ) Make the request operation = client. move table to database (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.metastore v1.types.MoveTableToDatabaseRequest , dict] The request object.
- CreateMetadataImportRequest ( parent="parent value", metadata import id="metadata import id value", ) Make the request operation = client. create metadata import (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.metastore v1.types.CreateMetadataImportRequest , dict] The request object.
- ExportMetadataRequest ( destination gcs folder="destination gcs folder value", service="service value", ) Make the request operation = client. export metadata (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.metastore v1.types.ExportMetadataRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 def sample move table to database(): Create a client client = metastore v1.

### Import metadata into Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After the import completes, it appears in a table on the Service detail page on the Import/Export tab. gcloud CLI To import metadata, run the following gcloud metastore services import gcs command: gcloud metastore services import gcs SERVICE ID \ --location= LOCATION \ --import-id= IMPORT ID \ --description= DESCRIPTION \ --dump-type= DUMP TYPE \ --database-dump= DATABASE DUMP Replace the following: SERVICE ID : the ID or fully qualified name of your Dataproc Metastore service.
- For Avro, to use the Cloud Storage bucket for import: grant your user account and the Dataproc Metastore service agent the Storage Object Viewer role ( roles/storage.objectViewer ) on the Cloud Storage bucket containing the metadata dump being imported.
- For Avro, to use the Cloud Storage bucket for import, grant your user account and the Dataproc Metastore service agent: storage.objects.get on the Cloud Storage bucket containing the metadata dump being imported.
- For instructions on creating a database dump, see the following pages: Avro files MySQL dump file Cloud SQL MySQL instance Note: If you're exporting your dump files from another Dataproc Metastore, you can use the Dataproc Metastore export feature to generate a valid set of files.

