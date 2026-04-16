---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.723Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Private Service Connect"
feature_slug: "private-service-connect"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/access-service"
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
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect provides private connectivity to Dataproc Metastore services; Private Service Connect provides private connectivity to Dataproc Metastore services.

## Extended Definition

Private Service Connect provides private connectivity to Dataproc Metastore services; Private Service Connect provides private connectivity to Dataproc Metastore services.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/access-service](https://docs.cloud.google.com/dataproc-metastore/docs/access-service)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient)

## Supporting Pages

### Dataproc Metastore networking overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/access-service](https://docs.cloud.google.com/dataproc-metastore/docs/access-service)
- Source ID: `site-iam-reference`
- Final score: 307
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Quick reference for networking topics Networking settings Notes Default network settings VPC subnetworks By default, Dataproc Metastore services that use the Thrift endpoint protocol use a VPC subnetwork with Private Service Connect.
- VPC subnetworks For Dataproc Metastore services that use the Thrift endpoint protocol, Private Service Connect (PSC) is the default networking option.
- Note: For Dataproc Metastore services that use the Thrift endpoint protocol , Private Service Connect is the default networking option.
- What's next VPC Service Controls with Dataproc Metastore Dataproc Metastore Identity and Access Management (IAM) and access control Private Service Connect with Dataproc Metastore Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 290
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Dataproc Metastore API defines the following resource model: The service works with a collection of Google Cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ (a location must refer to a Google Cloud region ) Each location has a collection of services, named: /services/ Dataproc Metastore services are resources with names of the form: /projects/{project number}/locations/{location id}/services/{service id} .
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore.pagers.ListMetadataImportsAsyncPager Response message for DataprocMetastore.ListMetadataImports .
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore.pagers.ListServicesAsyncPager Response message for DataprocMetastore.ListServices .
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore.pagers.ListBackupsAsyncPager Response message for DataprocMetastore.ListBackups .

### "Class DataprocMetastoreClient (1.22.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- Source ID: `site-python-reference`
- Final score: 290
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Dataproc Metastore API defines the following resource model: The service works with a collection of Google Cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ (a location must refer to a Google Cloud region ) Each location has a collection of services, named: /services/ Dataproc Metastore services are resources with names of the form: /projects/{project number}/locations/{location id}/services/{service id} .
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore.pagers.ListMetadataImportsPager Response message for DataprocMetastore.ListMetadataImports .
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore.pagers.ListServicesPager Response message for DataprocMetastore.ListServices .
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore.pagers.ListBackupsPager Response message for DataprocMetastore.ListBackups .

### "Class DataprocMetastoreFederationAsyncClient (1.22.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient)
- Source ID: `site-python-reference`
- Final score: 290
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore federation.pagers.ListFederationsAsyncPager Response message for ListFederations Iterating over this object will yield results and resolve additional pages automatically. list locations list locations ( request : typing .
- Union [ str , bytes ]]] = () ) - > ( google . cloud . metastore v1 . services . dataproc metastore federation . pagers .
- Callable [ [ ... ], google . cloud . metastore v1 . services . dataproc metastore federation . transports . base .
- Callable [ [ ... ], google . cloud . metastore v1 . services . dataproc metastore federation . transports . base .

