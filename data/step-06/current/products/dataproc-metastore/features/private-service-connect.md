---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:49:01.301Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Private Service Connect"
feature_slug: "private-service-connect"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient"
keywords:
  - "private"
  - "connect"
  - "provides"
  - "connectivity"
  - "to"
  - "dataproc"
  - "metastore"
  - "services"
---

# Private Service Connect

Product: Dataproc Metastore
Coverage: LOW

## Step 02 Summary

Private Service Connect provides private connectivity to Dataproc Metastore services; Private Service Connect provides private connectivity to Dataproc Metastore services.

## Extended Definition

Private Service Connect provides private connectivity to Dataproc Metastore services; Private Service Connect provides private connectivity to Dataproc Metastore services.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient)

## Supporting Pages

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Dataproc Metastore API defines the following resource model: The service works with a collection of Google Cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ (a location must refer to a Google Cloud region ) Each location has a collection of services, named: /services/ Dataproc Metastore services are resources with names of the form: /projects/{project number}/locations/{location id}/services/{service id} .
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore.pagers.ListMetadataImportsAsyncPager Response message for DataprocMetastore.ListMetadataImports .
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore.pagers.ListServicesAsyncPager Response message for DataprocMetastore.ListServices .
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore.pagers.ListBackupsAsyncPager Response message for DataprocMetastore.ListBackups .

### "Class DataprocMetastoreClient (1.22.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- Source ID: `site-python-reference`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Dataproc Metastore API defines the following resource model: The service works with a collection of Google Cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ (a location must refer to a Google Cloud region ) Each location has a collection of services, named: /services/ Dataproc Metastore services are resources with names of the form: /projects/{project number}/locations/{location id}/services/{service id} .
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore.pagers.ListMetadataImportsPager Response message for DataprocMetastore.ListMetadataImports .
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore.pagers.ListServicesPager Response message for DataprocMetastore.ListServices .
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore.pagers.ListBackupsPager Response message for DataprocMetastore.ListBackups .

### "Class DataprocMetastoreFederationAsyncClient (1.22.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient)
- Source ID: `site-python-reference`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore federation.pagers.ListFederationsAsyncPager Response message for ListFederations Iterating over this object will yield results and resolve additional pages automatically. list locations list locations ( request : typing .
- Union [ str , bytes ]]] = () ) - > ( google . cloud . metastore v1 . services . dataproc metastore federation . pagers .
- Callable [ [ ... ], google . cloud . metastore v1 . services . dataproc metastore federation . transports . base .
- Callable [ [ ... ], google . cloud . metastore v1 . services . dataproc metastore federation . transports . base .

