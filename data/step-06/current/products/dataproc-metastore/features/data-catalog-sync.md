---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.718Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Data Catalog Sync"
feature_slug: "data-catalog-sync"
latest_feature_date: "2023-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient"
keywords:
  - "catalog"
  - "sync"
  - "synchronizes"
  - "dataproc"
  - "metastore"
  - "metadata"
  - "into"
  - "including"
---

# Data Catalog Sync

Product: Dataproc Metastore
Coverage: MEDIUM

## Step 02 Summary

Data Catalog Sync synchronizes Dataproc Metastore metadata into Data Catalog, including metadata from Spanner-backed services; Data Catalog Sync lets a Dataproc Metastore service synchronize metadata to Data Catalog.

## Extended Definition

Data Catalog Sync synchronizes Dataproc Metastore metadata into Data Catalog, including metadata from Spanner-backed services; Data Catalog Sync lets a Dataproc Metastore service synchronize metadata to Data Catalog.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)

## Supporting Pages

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request message for DataprocMetastore.AlterMetadataResourceLocation . retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Request message for DataprocMetastore.MoveTableToDatabase . retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Request message for DataprocMetastore.ExportMetadata . retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Request message for DataprocMetastore.QueryMetadata . retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Provisioning the service might take a few minutes. gcloud CLI To create a metastore, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --instance-size= INSTANCE SIZE \ --scaling-factor= SCALING FACTOR \ --port= PORT \ --tier= TIER \ --endpoint-protocol= ENDPOINT PROTOCOL \ --database-type= DATABASE TYPE \ --hive-metastore-version= HIVE METASTORE VERSION \ --data-catalog-sync= DATA CATALOG SYNC \ --release-channel= RELEASE CHANNEL \ --hive-metastore-configs= METADATA OVERRIDE \ --labels= LABELS \ --auxiliary-versions= AUXILIARY VERSION \ --network= NETWORK \ --consumer-subnetworks="projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET1 , projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET2 " \ --kerberos-principal= KERBEROS PRINCIPAL \ --krb5-config= KRB5 CONFIG \ --keytab= CLOUD SECRET \ --encryption-kms-key= KMS KEY Replace the following: Service settings : SERVICE : The name of your new Dataproc Metastore service.
- For more information, see Dataproc Metastore to Data Catalog sync .
- Required Roles To get the permission that you need to create a Dataproc Metastore, ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: Grant full control of Dataproc Metastore resources ( roles/metastore.editor ) Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- After you create your Dataproc Metastore service, you can import metadata and connect to any of the following services: A Managed Service for Apache Spark cluster .

### "Class DataprocMetastoreFederationAsyncClient (1.22.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient)
- Source ID: `site-python-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore federation.pagers.ListFederationsAsyncPager Response message for ListFederations Iterating over this object will yield results and resolve additional pages automatically. list locations list locations ( request : typing .
- Returns Type Description DataprocMetastoreFederationAsyncClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- 1.22.0 (latest) 1.21.0 1.20.0 1.19.0 1.18.3 1.17.0 1.16.1 1.15.5 1.14.0 1.13.0 1.12.0 1.11.0 1.10.1 1.9.1 1.8.0 1.7.0 1.6.3 1.5.1 1.4.1 1.3.1 1.2.0 1.1.2 1.0.0 0.3.3 0.2.2 0.1.0 DataprocMetastoreFederationAsyncClient ( , credentials : typing .
- Returns Type Description DataprocMetastoreFederationAsyncClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.

### "Class DataprocMetastoreClient (1.22.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- Source ID: `site-python-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- The result type for the operation will be AlterMetadataResourceLocationResponse Response message for DataprocMetastore.AlterMetadataResourceLocation . backup path backup path ( project : str , location : str , service : str , backup : str ) - > str Returns a fully-qualified backup string. cancel operation cancel operation ( request : typing .
- Request message for DataprocMetastore.AlterMetadataResourceLocation . retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Request message for DataprocMetastore.MoveTableToDatabase . retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Request message for DataprocMetastore.ExportMetadata . retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

