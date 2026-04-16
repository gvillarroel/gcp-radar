---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.721Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Dataproc Metastore 2"
feature_slug: "dataproc-metastore-2"
latest_feature_date: "2023-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/overview"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient"
keywords:
  - "dataproc"
  - "metastore"
  - "provides"
  - "horizontal"
  - "scalability"
  - "through"
  - "fine"
  - "grained"
---

# Dataproc Metastore 2

Product: Dataproc Metastore
Coverage: MEDIUM

## Step 02 Summary

Dataproc Metastore 2 provides horizontal scalability through fine-grained scaling options.

## Extended Definition

Dataproc Metastore 2 provides horizontal scalability through fine-grained scaling options.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/overview](https://docs.cloud.google.com/dataproc-metastore/docs/overview)
- [https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts](https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)

## Supporting Pages

### Dataproc Metastore overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/overview](https://docs.cloud.google.com/dataproc-metastore/docs/overview)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataproc Metastore 2 is the new generation of the service that offers horizontal scalability in addition to Dataproc Metastore 1 features.
- In this case, you can define a table for those files and store the metadata in Dataproc Metastore.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Dataproc Metastore overview Stay organized with collections Save and categorize content based on your preferences.
- Dataproc Metastore versions When you create a Dataproc Metastore service, you can choose to use a Dataproc Metastore 2 service or a Dataproc Metastore 1 service .

### Dataproc Metastore core concepts \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts](https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataproc Metastore 2 is the new generation of the service that offers horizontal scalability in addition to Dataproc Metastore features.
- A Dataproc Metastore service provides clients access to the stored Hive Metastore metadata through one or more network endpoints.
- Common Dataproc Metastore terms The following terms are used commonly throughout the Dataproc Metastore ecosystem and documentation.
- Dataproc Metastore provides URIs for these endpoints.

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- The Dataproc Metastore API defines the following resource model: The service works with a collection of Google Cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ (a location must refer to a Google Cloud region ) Each location has a collection of services, named: /services/ Dataproc Metastore services are resources with names of the form: /projects/{project number}/locations/{location id}/services/{service id} .
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,DataprocMetastoreTransport,Callable[..., DataprocMetastoreTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.
- The result type for the operation will be AlterMetadataResourceLocationResponse Response message for DataprocMetastore.AlterMetadataResourceLocation . backup path backup path ( project : str , location : str , service : str , backup : str ) - > str Returns a fully-qualified backup string. cancel operation cancel operation ( request : typing .
- Request message for DataprocMetastore.AlterMetadataResourceLocation . retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class DataprocMetastoreClient (1.22.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- Source ID: `site-python-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- The Dataproc Metastore API defines the following resource model: The service works with a collection of Google Cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ (a location must refer to a Google Cloud region ) Each location has a collection of services, named: /services/ Dataproc Metastore services are resources with names of the form: /projects/{project number}/locations/{location id}/services/{service id} .
- The result type for the operation will be AlterMetadataResourceLocationResponse Response message for DataprocMetastore.AlterMetadataResourceLocation . backup path backup path ( project : str , location : str , service : str , backup : str ) - > str Returns a fully-qualified backup string. cancel operation cancel operation ( request : typing .
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,DataprocMetastoreTransport,Callable[..., DataprocMetastoreTransport]]] The transport to use, or a Callable that constructs and returns a new transport.
- Request message for DataprocMetastore.AlterMetadataResourceLocation . retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

