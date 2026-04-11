---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:49:01.301Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Metadata federation for BigQuery datasets"
feature_slug: "metadata-federation-for-bigquery-datasets"
latest_feature_date: "2022-09-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-federation"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient"
keywords:
  - "metadata"
  - "federation"
  - "for"
  - "datasets"
  - "this"
  - "capability"
  - "lets"
  - "act"
---

# Metadata federation for BigQuery datasets

Product: Dataproc Metastore
Coverage: LOW

## Step 02 Summary

This metadata federation capability lets BigQuery datasets act as a metadata source.

## Extended Definition

This metadata federation capability lets BigQuery datasets act as a metadata source.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/create-federation](https://docs.cloud.google.com/dataproc-metastore/docs/create-federation)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient)

## Supporting Pages

### "Create a metadata federation service \_|\_ Dataproc Metastore \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-federation](https://docs.cloud.google.com/dataproc-metastore/docs/create-federation)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a federation service and attach a Managed Service for Apache Spark cluster, following the principle of least privilege: To create a Dataproc Metastore: metastore.services.create on the user account or service account To list, get, create, update, and delete a federation service: metastore.federations.create, metastore.federations.update, metastore.federations.delete, metastore.federations.get metastore.federations.list on the user account or service account To complete metadata operations on a Dataproc Metastore: metastore.services.get, metastore.services.use, metastore.databases.create, metastore.databases.update, metastore.databases.deletemetastore.databases.get,metastore.databases.list, metastore.databases.getIamPolicy, metastore.tables.create, metastore.tables.update, metastore.tables.delete, metastore.tables.get, metastore.tables.list, metastore.tables.getIamPolicy on the user account or service account (Optional) To access BigQuery datasets: For more information, see BigQuery permissions on the user account or service account (Optional) To access Dataplex Universal Catalog Lakes ( Preview ): For more information, see Dataplex Universal Catalog permissions on the user account or service account You might also be able to get these permissions with custom roles or other predefined roles .
- Required Roles To get the permissions that you need to create a federation service and attach a Managed Service for Apache Spark cluster, following the principle of least privilege, ask your administrator to grant you the following IAM roles: To access the federation service: Federation accessor ( roles/metastore.federationAccessor ) on the user account or service account To grant full control of all Dataproc Metastore resources: Dataproc Metastore editor ( roles/metastore.editor ) on the user account or service account To complete metadata operations on a Dataproc Metastore configured with a federation service: Metastore owner ( metastore.metadataEditor ) on the user account or service account To create a Managed Service for Apache Spark cluster: Managed Service for Apache Spark worker ( roles/dataproc.worker ) on on the Managed Service for Apache Spark VM service account (Optional) To access BigQuery datasets: Use an appropriate BigQuery predefined role applicable for your use case on the user account or service account (Optional) To access Dataplex Universal Catalog Lakes ( Preview ): Use an appropriate Dataplex Universal Catalog predefined role applicable for your use case on the user account or service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- Note: The following command doesn't support the --dataproc-metastore flag. gcloud dataproc clusters create CLUSTER NAME \ --region= LOCATION \ --project= PROJECT ID \ --scopes=https://www.googleapis.com/auth/cloud-platform \ --image-version= IMAGE VERSION \ --service-account= SERVICE ACCOUNT \ --optional-components=DOCKER \ --initialization-actions=gs://metastore-init-actions/metastore-grpc-proxy/metastore-grpc-proxy.sh \ --metadata="proxy-uri= FEDERATION URI ,hive-version= FEDERATION VERSION " \ --properties="hive:hive.metastore.uris=thrift://localhost:9083,hive:hive.metastore.warehouse.dir= WAREHOUSE DIR " Replace the following: CLUSTER NAME : the name of your new Managed Service for Apache Spark cluster.
- This page explains how to create a metadata federation service for Dataproc Metastore.

### "Class DataprocMetastoreFederationAsyncClient (1.22.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient)
- Source ID: `site-python-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . federation path federation path ( project : str , location : str , federation : str ) - > str Returns a fully-qualified federation string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- This corresponds to the federation id field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create federation create federation ( request : typing .
- This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class DataprocMetastoreFederationClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient)
- Source ID: `site-python-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . federation path federation path ( project : str , location : str , federation : str ) - > str Returns a fully-qualified federation string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- This corresponds to the federation id field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create federation create federation ( request : typing .
- This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

