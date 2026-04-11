---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:49:01.306Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Shared VPC support"
feature_slug: "shared-vpc-support"
latest_feature_date: "2021-02-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient"
keywords:
  - "shared"
  - "vpc"
  - "lets"
  - "users"
  - "create"
  - "dataproc"
  - "metastore"
  - "services"
---

# Shared VPC support

Product: Dataproc Metastore
Coverage: LOW

## Step 02 Summary

Shared VPC support lets users create Dataproc Metastore services in cross-product networks.

## Extended Definition

Shared VPC support lets users create Dataproc Metastore services in cross-product networks.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)

## Supporting Pages

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a Dataproc Metastore service using Shared VPC A Shared VPC lets you connect Dataproc Metastore resources from multiple projects to a common VPC network.
- Caution: This IAM policy change grants Dataproc Metastore users with the metastore.services.create permission in the service project to indirectly create addresses and peerings in the network project. gcloud projects add-iam-policy-binding NETWORK PROJECT ID \ --role "roles/metastore.serviceAgent" \ --member "serviceAccount:service- SERVICE PROJECT NUMBER @gcp-sa-metastore.iam.gserviceaccount.com" Note: If you have never created a Dataproc Metastore service in the service project, then the gcloud projects add-iam-policy-binding command might fail with an error message containing Service account [SERVICE ACCOUNT NAME] does not exist.
- IAM roles required for Shared VPC networks To create a Dataproc Metastore service with a VPC that is accessible in a network belonging to a different project, you must grant roles/metastore.serviceAgent to the service project's Dataproc Metastore service agent ( service- SERVICE PROJECT NUMBER @gcp-sa-metastore.iam.gserviceaccount.com ) in the network project's IAM policy.
- For Dataproc Metastore services configured with the Thrift endpoint protocol, make sure your Dataproc Metastore service and the Managed Service for Apache Spark cluster it's attached to are using the same Shared VPC network.

### "Class DataprocMetastoreClient (1.22.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- Source ID: `site-python-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- The Dataproc Metastore API defines the following resource model: The service works with a collection of Google Cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ (a location must refer to a Google Cloud region ) Each location has a collection of services, named: /services/ Dataproc Metastore services are resources with names of the form: /projects/{project number}/locations/{location id}/services/{service id} .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 def sample list services(): Create a client client = metastore v1.
- Returns Type Description DataprocMetastoreClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description DataprocMetastoreClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- The Dataproc Metastore API defines the following resource model: The service works with a collection of Google Cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ (a location must refer to a Google Cloud region ) Each location has a collection of services, named: /services/ Dataproc Metastore services are resources with names of the form: /projects/{project number}/locations/{location id}/services/{service id} .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample list services(): Create a client client = metastore v1.
- Returns Type Description DataprocMetastoreAsyncClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description DataprocMetastoreAsyncClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.

