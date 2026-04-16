---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.726Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "MetadataImport.DatabaseDump.source_database field"
feature_slug: "metadataimport-databasedump-source-database-field"
latest_feature_date: "2021-02-19"
deprecation_date: "2021-08-18"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.AlterMetadataResourceLocationRequest.Builder"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.types"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient"
keywords:
  - "metadataimport"
  - "databasedump"
  - "source"
  - "database"
  - "field"
  - "this"
  - "api"
  - "specifies"
---

# MetadataImport.DatabaseDump.source_database field

Product: Dataproc Metastore
Coverage: MEDIUM

## Step 02 Summary

This API field specifies the source database for a metadata import database dump; deprecated on 2021-08-18.

## Extended Definition

This API field specifies the source database for a metadata import database dump; deprecated on 2021-08-18.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.AlterMetadataResourceLocationRequest.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.AlterMetadataResourceLocationRequest.Builder)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.types](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.types)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)

## Supporting Pages

### Dataproc Metastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta.projects.locations REST Resource: v1beta.projects.locations.federations REST Resource: v1beta.projects.locations.operations REST Resource: v1beta.projects.locations.services REST Resource: v1beta.projects.locations.services.backups REST Resource: v1beta.projects.locations.services.databases REST Resource: v1beta.projects.locations.services.databases.tables REST Resource: v1beta.projects.locations.services.metadataImports REST Resource: v1beta.projects.locations.services.migrationExecutions REST Resource: v1alpha.projects.locations REST Resource: v1alpha.projects.locations.federations REST Resource: v1alpha.projects.locations.operations REST Resource: v1alpha.projects.locations.services REST Resource: v1alpha.projects.locations.services.backups REST Resource: v1alpha.projects.locations.services.databases REST Resource: v1alpha.projects.locations.services.databases.tables REST Resource: v1alpha.projects.locations.services.metadataImports REST Resource: v1alpha.projects.locations.services.migrationExecutions REST Resource: v1.projects.locations REST Resource: v1.projects.locations.federations REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.services REST Resource: v1.projects.locations.services.backups REST Resource: v1.projects.locations.services.databases REST Resource: v1.projects.locations.services.databases.tables REST Resource: v1.projects.locations.services.metadataImports REST Resource: v1.projects.locations.services.migrationExecutions Service: metastore.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service provides the following discovery documents: https://metastore.googleapis.com/$discovery/rest?version=v1 https://metastore.googleapis.com/$discovery/rest?version=v1beta https://metastore.googleapis.com/$discovery/rest?version=v1alpha Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://metastore.googleapis.com REST Resource: v1beta.projects.locations Methods get GET /v1beta/{name} Gets information about a location. list GET /v1beta/{name}/locations Lists information about the supported locations for this service.
- REST Resource: v1alpha.projects.locations.services Methods alterLocation POST /v1alpha/{service}:alterLocation Alter metadata resource location. alterTableProperties POST /v1alpha/{service}:alterTableProperties Alter metadata table properties. cancelMigration POST /v1alpha/{service}:cancelMigration Cancels the ongoing Managed Migration process. completeMigration POST /v1alpha/{service}:completeMigration Completes the managed migration process. create POST /v1alpha/{parent}/services Creates a metastore service in a project and location. delete DELETE /v1alpha/{name} Deletes a single service. exportMetadata POST /v1alpha/{service}:exportMetadata Exports metadata from a service. get GET /v1alpha/{name} Gets the details of a single service. getIamPolicy GET /v1alpha/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1alpha/{parent}/services Lists services in a project and location. moveTableToDatabase POST /v1alpha/{service}:moveTableToDatabase Move a table to another database. patch PATCH /v1alpha/{service.name} Updates the parameters of a single service. queryMetadata POST /v1alpha/{service}:queryMetadata Query Dataproc Metastore metadata. removeIamPolicy POST /v1alpha/{resource}:removeIamPolicy Removes the attached IAM policies for a resource restore POST /v1alpha/{service}:restore Restores a service from a backup. setIamPolicy POST /v1alpha/{resource}:setIamPolicy Sets the access control policy on the specified resource. startMigration POST /v1alpha/{service}:startMigration Starts the Managed Migration process. testIamPermissions POST /v1alpha/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.

### "Class AlterMetadataResourceLocationRequest.Builder (2.89.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.AlterMetadataResourceLocationRequest.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.AlterMetadataResourceLocationRequest.Builder)
- Source ID: `site-java-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The relative metadata resource name in the following format. databases/{database id} or databases/{database id}/tables/{table id} or databases/{database id}/tables/{table id}/partitions/{partition id} string resource name = 2 [(.google.api.field behavior) = REQUIRED]; Returns Type Description AlterMetadataResourceLocationRequest.Builder This builder for chaining. clearService() public AlterMetadataResourceLocationRequest .
- The relative resource name of the metastore service to mutate metadata, in the following format: projects/{project id}/locations/{location id}/services/{service id} . string service = 1 [(.google.api.field behavior) = REQUIRED, (.google.api.resource reference) = { ... } Returns Type Description AlterMetadataResourceLocationRequest.Builder This builder for chaining. getDefaultInstanceForType() public AlterMetadataResourceLocationRequest getDefaultInstanceForType () Returns Type Description AlterMetadataResourceLocationRequest getDescriptorForType() public Descriptors .
- The relative metadata resource name in the following format. databases/{database id} or databases/{database id}/tables/{table id} or databases/{database id}/tables/{table id}/partitions/{partition id} string resource name = 2 [(.google.api.field behavior) = REQUIRED]; Returns Type Description String The resourceName. getResourceNameBytes() public ByteString getResourceNameBytes () Required.
- The relative metadata resource name in the following format. databases/{database id} or databases/{database id}/tables/{table id} or databases/{database id}/tables/{table id}/partitions/{partition id} string resource name = 2 [(.google.api.field behavior) = REQUIRED]; Returns Type Description ByteString The bytes for resourceName. getService() public String getService () Required.

### "Package types (1.22.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.types](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.types)
- Source ID: `site-python-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MetadataExport The details of a metadata export operation. .. oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields MetadataImport A metastore resource that imports metadata. .. oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields MetadataManagementActivity The metadata management activities of the metastore service.
- This specifies when Dataproc Metastore may perform system maintenance operation to the service.
- DatabaseDumpSpec The specification of database dump to import from or export to.
- This message has oneof fields (mutually exclusive fields).

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- This corresponds to the metadata import id field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the service id field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

