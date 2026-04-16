---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.722Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Spanner database type"
feature_slug: "spanner-database-type"
latest_feature_date: "2023-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient"
keywords:
  - "spanner"
  - "database"
  - "type"
  - "the"
  - "lets"
  - "dataproc"
  - "metastore"
  - "use"
---

# Spanner database type

Product: Dataproc Metastore
Coverage: MEDIUM

## Step 02 Summary

The Spanner database type lets Dataproc Metastore use Spanner as its backing database; The Spanner database type lets Dataproc Metastore use Spanner as its backing database.

## Extended Definition

The Spanner database type lets Dataproc Metastore use Spanner as its backing database; The Spanner database type lets Dataproc Metastore use Spanner as its backing database.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata)
- [https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface](https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)

## Supporting Pages

### Import metadata into Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata)
- Source ID: `site-docs-root`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To import Avro files, your Dataproc Metastore service can use the MySQL or Spanner database type.
- To import MySQL files, your Dataproc Metastore service must use the MySQL database type.
- After the import completes, it appears in a table on the Service detail page on the Import/Export tab. gcloud CLI To import metadata, run the following gcloud metastore services import gcs command: gcloud metastore services import gcs SERVICE ID \ --location= LOCATION \ --import-id= IMPORT ID \ --description= DESCRIPTION \ --dump-type= DUMP TYPE \ --database-dump= DATABASE DUMP Replace the following: SERVICE ID : the ID or fully qualified name of your Dataproc Metastore service.
- For instructions on creating a database dump, see the following pages: Avro files MySQL dump file Cloud SQL MySQL instance Note: If you're exporting your dump files from another Dataproc Metastore, you can use the Dataproc Metastore export feature to generate a valid set of files.

### Dataproc Metastore administrator interface \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface](https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface)
- Source ID: `site-iam-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to use the Dataproc Metastore administrator interface, ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: To query Dataproc Metastore metadata: Metadata query administrator ( roles/metastore.metadataQueryAdmin ) on the user account or service account To alter the resource location of your metadata, including databases, tables and partitions, or move a table to another database: Metadata mutate administrator ( roles/metastore.metadataMutateAdmin ) on the user account or service account Dataproc Metastore Editor ( roles/metastore.editor ) on the user account or service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- The following example shows a sample command that moves a table called test-table2 to a new Cloud Storage bucket. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -X POST -d '{"resource name": "databases/testdb1/tables/test-table2", "location uri":"gs://gcs-bucket-dpms1-9425bd83-b794-4f1c-9e79-2d833f758cc1/empty"}' https://metastore.googleapis.com/projects/dpms/locations/us-central1/services/dpms1:alterLocation Alter table properties This operation lets you alter the properties of a table, such as a custom key-value pair that you're using to store data.
- In this example the existing key-value pair, properties.customerID 1 is updated to the new value properties.customerID 2 curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" -X POST -d '{"table name": "databases/default/tables/test-table", "update mask":{"paths":"properties.customerID 1"}, "properties":{"customerID 1":"customerID 2"}}' https://metastore.googleapis.com/projects/dpms-p Move a table to another database This operation lets you move an internal table (managed table) to another database.
- The following example shows a sample command that runs a select query from a database named DBS. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" -X POST -d '{"query": "select from DBS;"}' \ https://metastore.googleapis.com/projects/dpms/locations/us-central1/services/dpms1:queryMetadata Interpret the output of a query metadata operation When you first run a query metadata command, Dataproc Metastore automatically creates a Google Cloud folder in your artifacts Google Cloud bucket.

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The result type for the operation will be MoveTableToDatabaseResponse Response message for DataprocMetastore.MoveTableToDatabase . network path network path ( project : str , network : str ) - > str Returns a fully-qualified network string. parse backup path parse backup path ( path : str ) - > typing .
- Returns Type Description DataprocMetastoreTransport The transport used by the client instance. universe domain Return the universe domain used by the client instance.
- MoveTableToDatabaseRequest ( service="service value", table name="table name value", db name="db name value", destination db name="destination db name value", ) Make the request operation = client. move table to database (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.metastore v1.types.MoveTableToDatabaseRequest , dict]] The request object.
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,DataprocMetastoreTransport,Callable[..., DataprocMetastoreTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.

### "Class DataprocMetastoreClient (1.22.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- Source ID: `site-python-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The result type for the operation will be MoveTableToDatabaseResponse Response message for DataprocMetastore.MoveTableToDatabase . network path network path ( project : str , network : str ) - > str Returns a fully-qualified network string. parse backup path parse backup path ( path : str ) - > typing .
- Returns Type Description DataprocMetastoreTransport The transport used by the client instance. universe domain Return the universe domain used by the client instance.
- MoveTableToDatabaseRequest ( service="service value", table name="table name value", db name="db name value", destination db name="destination db name value", ) Make the request operation = client. move table to database (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.metastore v1.types.MoveTableToDatabaseRequest , dict] The request object.
- The result type for the operation will be AlterMetadataResourceLocationResponse Response message for DataprocMetastore.AlterMetadataResourceLocation . backup path backup path ( project : str , location : str , service : str , backup : str ) - > str Returns a fully-qualified backup string. cancel operation cancel operation ( request : typing .

