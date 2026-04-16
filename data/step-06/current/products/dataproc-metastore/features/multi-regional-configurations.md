---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.719Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Multi-regional configurations"
feature_slug: "multi-regional-configurations"
latest_feature_date: "2023-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient"
keywords:
  - "multi"
  - "regional"
  - "configurations"
  - "let"
  - "dataproc"
  - "metastore"
  - "services"
  - "run"
---

# Multi-regional configurations

Product: Dataproc Metastore
Coverage: MEDIUM

## Step 02 Summary

Multi-regional configurations let Dataproc Metastore services run in supported multi-region deployments; Multi-regional configurations let Dataproc Metastore services run in supported multi-region deployments.

## Extended Definition

Multi-regional configurations let Dataproc Metastore services run in supported multi-region deployments; Multi-regional configurations let Dataproc Metastore services run in supported multi-region deployments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)

## Supporting Pages

### "Class DataprocMetastoreFederationAsyncClient (1.22.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient)
- Source ID: `site-python-reference`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample delete federation(): Create a client client = metastore v1.
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore federation.pagers.ListFederationsAsyncPager Response message for ListFederations Iterating over this object will yield results and resolve additional pages automatically. list locations list locations ( request : typing .
- The result type for the operation will be Federation Represents a federation of multiple backend metastores. delete federation delete federation ( request : typing .
- Union [ str , bytes ]]] = () ) - > ( google . cloud . metastore v1 . services . dataproc metastore federation . pagers .

### "Class DataprocMetastoreFederationClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient)
- Source ID: `site-python-reference`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 def sample delete federation(): Create a client client = metastore v1.
- Returns Type Description google.cloud.metastore v1.services.dataproc metastore federation.pagers.ListFederationsPager Response message for ListFederations Iterating over this object will yield results and resolve additional pages automatically. list locations list locations ( request : typing .
- The result type for the operation will be Federation Represents a federation of multiple backend metastores. delete federation delete federation ( request : typing .
- Union [ str , bytes ]]] = () ) - > ( google . cloud . metastore v1 . services . dataproc metastore federation . pagers .

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Dataproc Metastore API defines the following resource model: The service works with a collection of Google Cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ (a location must refer to a Google Cloud region ) Each location has a collection of services, named: /services/ Dataproc Metastore services are resources with names of the form: /projects/{project number}/locations/{location id}/services/{service id} .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample delete service(): Create a client client = metastore v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample delete backup(): Create a client client = metastore v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample list services(): Create a client client = metastore v1.

### "Class DataprocMetastoreClient (1.22.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- Source ID: `site-python-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Dataproc Metastore API defines the following resource model: The service works with a collection of Google Cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ (a location must refer to a Google Cloud region ) Each location has a collection of services, named: /services/ Dataproc Metastore services are resources with names of the form: /projects/{project number}/locations/{location id}/services/{service id} .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 def sample delete service(): Create a client client = metastore v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 def sample delete backup(): Create a client client = metastore v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 def sample list services(): Create a client client = metastore v1.

