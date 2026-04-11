---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:49:01.300Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Spanner database type"
feature_slug: "spanner-database-type"
latest_feature_date: "2023-03-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/release-notes"
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
Coverage: LOW

## Step 02 Summary

The Spanner database type lets Dataproc Metastore use Spanner as its backing database; The Spanner database type lets Dataproc Metastore use Spanner as its backing database.

## Extended Definition

The Spanner database type lets Dataproc Metastore use Spanner as its backing database; The Spanner database type lets Dataproc Metastore use Spanner as its backing database.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- [https://docs.cloud.google.com/dataproc-metastore/docs/release-notes](https://docs.cloud.google.com/dataproc-metastore/docs/release-notes)

## Supporting Pages

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The result type for the operation will be MoveTableToDatabaseResponse Response message for DataprocMetastore.MoveTableToDatabase . network path network path ( project : str , network : str ) - > str Returns a fully-qualified network string. parse backup path parse backup path ( path : str ) - > typing .
- Returns Type Description DataprocMetastoreTransport The transport used by the client instance. universe domain Return the universe domain used by the client instance.
- MoveTableToDatabaseRequest ( service="service value", table name="table name value", db name="db name value", destination db name="destination db name value", ) Make the request operation = client. move table to database (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.metastore v1.types.MoveTableToDatabaseRequest , dict]] The request object.
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,DataprocMetastoreTransport,Callable[..., DataprocMetastoreTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.

### "Class DataprocMetastoreClient (1.22.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- Source ID: `site-python-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The result type for the operation will be MoveTableToDatabaseResponse Response message for DataprocMetastore.MoveTableToDatabase . network path network path ( project : str , network : str ) - > str Returns a fully-qualified network string. parse backup path parse backup path ( path : str ) - > typing .
- Returns Type Description DataprocMetastoreTransport The transport used by the client instance. universe domain Return the universe domain used by the client instance.
- MoveTableToDatabaseRequest ( service="service value", table name="table name value", db name="db name value", destination db name="destination db name value", ) Make the request operation = client. move table to database (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.metastore v1.types.MoveTableToDatabaseRequest , dict] The request object.
- The result type for the operation will be AlterMetadataResourceLocationResponse Response message for DataprocMetastore.AlterMetadataResourceLocation . backup path backup path ( project : str , location : str , service : str , backup : str ) - > str Returns a fully-qualified backup string. cancel operation cancel operation ( request : typing .

### Dataproc Metastore release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/release-notes](https://docs.cloud.google.com/dataproc-metastore/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- June 06, 2022 v1beta1 Change Updated Dataproc Metastore auxiliary versions to support the Spanner database type.
- For more information, see Datproc Metastore versions . v1 Feature The Spanner database type is generally available ( GA ). v1 Feature Auxiliary versions is generally available ( GA ).
- January 26, 2022 v1beta1 Feature Spanner database type is available in Preview . v1beta1 Feature Dataproc Metastore Auxiliary versions are available in Preview .
- With this launch, Data Catalog also now supports syncing metadata from Dataproc Metastore services using the Spanner Database.

