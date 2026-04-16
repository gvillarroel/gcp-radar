---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.725Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Avro import and export"
feature_slug: "avro-import-and-export"
latest_feature_date: "2021-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest"
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
Coverage: MEDIUM

## Step 02 Summary

Avro import and export lets Dataproc Metastore move metadata using Avro storage format; Avro import and export lets Dataproc Metastore move metadata using Avro storage format.

## Extended Definition

Avro import and export lets Dataproc Metastore move metadata using Avro storage format; Avro import and export lets Dataproc Metastore move metadata using Avro storage format.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest)

## Supporting Pages

### Import metadata into Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After the import completes, it appears in a table on the Service detail page on the Import/Export tab. gcloud CLI To import metadata, run the following gcloud metastore services import gcs command: gcloud metastore services import gcs SERVICE ID \ --location= LOCATION \ --import-id= IMPORT ID \ --description= DESCRIPTION \ --dump-type= DUMP TYPE \ --database-dump= DATABASE DUMP Replace the following: SERVICE ID : the ID or fully qualified name of your Dataproc Metastore service.
- For Avro, to use the Cloud Storage bucket for import: grant your user account and the Dataproc Metastore service agent the Storage Object Viewer role ( roles/storage.objectViewer ) on the Cloud Storage bucket containing the metadata dump being imported.
- For Avro, to use the Cloud Storage bucket for import, grant your user account and the Dataproc Metastore service agent: storage.objects.get on the Cloud Storage bucket containing the metadata dump being imported.
- For instructions on creating a database dump, see the following pages: Avro files MySQL dump file Cloud SQL MySQL instance Note: If you're exporting your dump files from another Dataproc Metastore, you can use the Dataproc Metastore export feature to generate a valid set of files.

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MoveTableToDatabaseRequest ( service="service value", table name="table name value", db name="db name value", destination db name="destination db name value", ) Make the request operation = client. move table to database (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.metastore v1.types.MoveTableToDatabaseRequest , dict]] The request object.
- CreateMetadataImportRequest ( parent="parent value", metadata import id="metadata import id value", ) Make the request operation = client. create metadata import (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.metastore v1.types.CreateMetadataImportRequest , dict]] The request object.
- ExportMetadataRequest ( destination gcs folder="destination gcs folder value", service="service value", ) Make the request operation = client. export metadata (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.metastore v1.types.ExportMetadataRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample move table to database(): Create a client client = metastore v1.

### "Class DataprocMetastoreClient (1.22.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- Source ID: `site-python-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MoveTableToDatabaseRequest ( service="service value", table name="table name value", db name="db name value", destination db name="destination db name value", ) Make the request operation = client. move table to database (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.metastore v1.types.MoveTableToDatabaseRequest , dict] The request object.
- CreateMetadataImportRequest ( parent="parent value", metadata import id="metadata import id value", ) Make the request operation = client. create metadata import (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.metastore v1.types.CreateMetadataImportRequest , dict] The request object.
- ExportMetadataRequest ( destination gcs folder="destination gcs folder value", service="service value", ) Make the request operation = client. export metadata (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.metastore v1.types.ExportMetadataRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 def sample move table to database(): Create a client client = metastore v1.

### Dataproc Metastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1alpha.projects.locations.services Methods alterLocation POST /v1alpha/{service}:alterLocation Alter metadata resource location. alterTableProperties POST /v1alpha/{service}:alterTableProperties Alter metadata table properties. cancelMigration POST /v1alpha/{service}:cancelMigration Cancels the ongoing Managed Migration process. completeMigration POST /v1alpha/{service}:completeMigration Completes the managed migration process. create POST /v1alpha/{parent}/services Creates a metastore service in a project and location. delete DELETE /v1alpha/{name} Deletes a single service. exportMetadata POST /v1alpha/{service}:exportMetadata Exports metadata from a service. get GET /v1alpha/{name} Gets the details of a single service. getIamPolicy GET /v1alpha/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1alpha/{parent}/services Lists services in a project and location. moveTableToDatabase POST /v1alpha/{service}:moveTableToDatabase Move a table to another database. patch PATCH /v1alpha/{service.name} Updates the parameters of a single service. queryMetadata POST /v1alpha/{service}:queryMetadata Query Dataproc Metastore metadata. removeIamPolicy POST /v1alpha/{resource}:removeIamPolicy Removes the attached IAM policies for a resource restore POST /v1alpha/{service}:restore Restores a service from a backup. setIamPolicy POST /v1alpha/{resource}:setIamPolicy Sets the access control policy on the specified resource. startMigration POST /v1alpha/{service}:startMigration Starts the Managed Migration process. testIamPermissions POST /v1alpha/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1beta.projects.locations.services Methods alterLocation POST /v1beta/{service}:alterLocation Alter metadata resource location. alterTableProperties POST /v1beta/{service}:alterTableProperties Alter metadata table properties. cancelMigration POST /v1beta/{service}:cancelMigration Cancels the ongoing Managed Migration process. completeMigration POST /v1beta/{service}:completeMigration Completes the managed migration process. create POST /v1beta/{parent}/services Creates a metastore service in a project and location. delete DELETE /v1beta/{name} Deletes a single service. exportMetadata POST /v1beta/{service}:exportMetadata Exports metadata from a service. get GET /v1beta/{name} Gets the details of a single service. getIamPolicy GET /v1beta/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta/{parent}/services Lists services in a project and location. moveTableToDatabase POST /v1beta/{service}:moveTableToDatabase Move a table to another database. patch PATCH /v1beta/{service.name} Updates the parameters of a single service. queryMetadata POST /v1beta/{service}:queryMetadata Query Dataproc Metastore metadata. removeIamPolicy POST /v1beta/{resource}:removeIamPolicy Removes the attached IAM policies for a resource restore POST /v1beta/{service}:restore Restores a service from a backup. setIamPolicy POST /v1beta/{resource}:setIamPolicy Sets the access control policy on the specified resource. startMigration POST /v1beta/{service}:startMigration Starts the Managed Migration process. testIamPermissions POST /v1beta/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations.services Methods alterLocation POST /v1/{service}:alterLocation Alter metadata resource location. alterTableProperties POST /v1/{service}:alterTableProperties Alter metadata table properties. cancelMigration POST /v1/{service}:cancelMigration Cancels the ongoing Managed Migration process. completeMigration POST /v1/{service}:completeMigration Completes the managed migration process. create POST /v1/{parent}/services Creates a metastore service in a project and location. delete DELETE /v1/{name} Deletes a single service. exportMetadata POST /v1/{service}:exportMetadata Exports metadata from a service. get GET /v1/{name} Gets the details of a single service. getIamPolicy GET /v1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent}/services Lists services in a project and location. moveTableToDatabase POST /v1/{service}:moveTableToDatabase Move a table to another database. patch PATCH /v1/{service.name} Updates the parameters of a single service. queryMetadata POST /v1/{service}:queryMetadata Query Dataproc Metastore metadata. restore POST /v1/{service}:restore Restores a service from a backup. setIamPolicy POST /v1/{resource}:setIamPolicy Sets the access control policy on the specified resource. startMigration POST /v1/{service}:startMigration Starts the Managed Migration process. testIamPermissions POST /v1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- Home Documentation Data analytics Dataproc Metastore Reference Send feedback Dataproc Metastore API Stay organized with collections Save and categorize content based on your preferences.

