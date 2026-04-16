---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.720Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Metadata federation for BigQuery and BigLake"
feature_slug: "metadata-federation-for-bigquery-and-biglake"
latest_feature_date: "2023-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-federation"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.pagers.ListFederationsAsyncPager"
keywords:
  - "metadata"
  - "federation"
  - "for"
  - "and"
  - "biglake"
  - "this"
  - "capability"
  - "lets"
---

# Metadata federation for BigQuery and BigLake

Product: Dataproc Metastore
Coverage: MEDIUM

## Step 02 Summary

This metadata federation capability lets BigQuery and BigLake use Dataproc Metastore metadata.

## Extended Definition

This metadata federation capability lets BigQuery and BigLake use Dataproc Metastore metadata.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/create-federation](https://docs.cloud.google.com/dataproc-metastore/docs/create-federation)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.pagers.ListFederationsAsyncPager](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.pagers.ListFederationsAsyncPager)

## Supporting Pages

### "Create a metadata federation service \_|\_ Dataproc Metastore \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-federation](https://docs.cloud.google.com/dataproc-metastore/docs/create-federation)
- Source ID: `site-iam-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a federation service and attach a Managed Service for Apache Spark cluster, following the principle of least privilege: To create a Dataproc Metastore: metastore.services.create on the user account or service account To list, get, create, update, and delete a federation service: metastore.federations.create, metastore.federations.update, metastore.federations.delete, metastore.federations.get metastore.federations.list on the user account or service account To complete metadata operations on a Dataproc Metastore: metastore.services.get, metastore.services.use, metastore.databases.create, metastore.databases.update, metastore.databases.deletemetastore.databases.get,metastore.databases.list, metastore.databases.getIamPolicy, metastore.tables.create, metastore.tables.update, metastore.tables.delete, metastore.tables.get, metastore.tables.list, metastore.tables.getIamPolicy on the user account or service account (Optional) To access BigQuery datasets: For more information, see BigQuery permissions on the user account or service account (Optional) To access Dataplex Universal Catalog Lakes ( Preview ): For more information, see Dataplex Universal Catalog permissions on the user account or service account You might also be able to get these permissions with custom roles or other predefined roles .
- Required Roles To get the permissions that you need to create a federation service and attach a Managed Service for Apache Spark cluster, following the principle of least privilege, ask your administrator to grant you the following IAM roles: To access the federation service: Federation accessor ( roles/metastore.federationAccessor ) on the user account or service account To grant full control of all Dataproc Metastore resources: Dataproc Metastore editor ( roles/metastore.editor ) on the user account or service account To complete metadata operations on a Dataproc Metastore configured with a federation service: Metastore owner ( metastore.metadataEditor ) on the user account or service account To create a Managed Service for Apache Spark cluster: Managed Service for Apache Spark worker ( roles/dataproc.worker ) on on the Managed Service for Apache Spark VM service account (Optional) To access BigQuery datasets: Use an appropriate BigQuery predefined role applicable for your use case on the user account or service account (Optional) To access Dataplex Universal Catalog Lakes ( Preview ): Use an appropriate Dataplex Universal Catalog predefined role applicable for your use case on the user account or service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- Note: The following command doesn't support the --dataproc-metastore flag. gcloud dataproc clusters create CLUSTER NAME \ --region= LOCATION \ --project= PROJECT ID \ --scopes=https://www.googleapis.com/auth/cloud-platform \ --image-version= IMAGE VERSION \ --service-account= SERVICE ACCOUNT \ --optional-components=DOCKER \ --initialization-actions=gs://metastore-init-actions/metastore-grpc-proxy/metastore-grpc-proxy.sh \ --metadata="proxy-uri= FEDERATION URI ,hive-version= FEDERATION VERSION " \ --properties="hive:hive.metastore.uris=thrift://localhost:9083,hive:hive.metastore.warehouse.dir= WAREHOUSE DIR " Replace the following: CLUSTER NAME : the name of your new Managed Service for Apache Spark cluster.
- Make sure the Managed Service for Apache Spark image that you're using in this command is compatible with the Hive version used with your federation service.

### "Class DataprocMetastoreFederationAsyncClient (1.22.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient)
- Source ID: `site-python-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . federation path federation path ( project : str , location : str , federation : str ) - > str Returns a fully-qualified federation string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- This corresponds to the federation id field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore federation.pagers.ListFederationsAsyncPager Response message for ListFederations Iterating over this object will yield results and resolve additional pages automatically. list locations list locations ( request : typing .
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create federation create federation ( request : typing .

### "Class DataprocMetastoreFederationClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient)
- Source ID: `site-python-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . federation path federation path ( project : str , location : str , federation : str ) - > str Returns a fully-qualified federation string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- This corresponds to the federation id field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore federation.pagers.ListFederationsPager Response message for ListFederations Iterating over this object will yield results and resolve additional pages automatically. list locations list locations ( request : typing .
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create federation create federation ( request : typing .

### "Class ListFederationsAsyncPager (1.22.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.pagers.ListFederationsAsyncPager](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.pagers.ListFederationsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.metastore v1.types.ListFederationsRequest The initial request object. response google.cloud.metastore v1.types.ListFederationsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This class thinly wraps an initial ListFederationsResponse object, and provides an aiter method to iterate through its federations field.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
- Home Documentation Developer tools Python Client libraries Send feedback Class ListFederationsAsyncPager (1.22.0) Stay organized with collections Save and categorize content based on your preferences.

