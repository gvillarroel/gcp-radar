---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.716Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Customer-managed encryption keys for multi-regional services"
feature_slug: "customer-managed-encryption-keys-for-multi-regional-services"
latest_feature_date: "2025-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/cmek"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "for"
  - "multi"
  - "regional"
  - "services"
---

# Customer-managed encryption keys for multi-regional services

Product: Dataproc Metastore
Coverage: MEDIUM

## Step 02 Summary

This capability lets multi-regional Dataproc Metastore services use customer-managed encryption keys.

## Extended Definition

This capability lets multi-regional Dataproc Metastore services use customer-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)

## Supporting Pages

### "Encrypt data with customer-managed encryption keys \_|\_ Dataproc Metastore\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Dataproc Metastore.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- Grant Cloud KMS key permissions Use the following commands to grant Cloud KMS key permissions for Dataproc Metastore: Grant permissions to the Dataproc Metastore Service Agent service account: gcloud kms keys add-iam-policy-binding KEY NAME \ --location LOCATION \ --keyring KEY RING \ --member=serviceAccount:$(gcloud beta services identity create \ --service=metastore.googleapis.com 2>&1 awk '{print $4}') \ --role=roles/cloudkms.cryptoKeyEncrypterDecrypter Grant permissions to the Cloud Storage service account: gcloud storage service-agent --authorize-cmek projects/ KEY PROJECT /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME Create a single-region service with a CMEK key Use the following steps to configure CMEK encryption for a single-region Dataproc Metastore service.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Encrypt data with customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Using customer-managed encryption keys .
- For Dataproc Metastore services configured with the Thrift endpoint protocol, make sure your Dataproc Metastore service and the Managed Service for Apache Spark cluster it's attached to are using the same Shared VPC network.
- After you create your Dataproc Metastore service, you can import metadata and connect to any of the following services: A Managed Service for Apache Spark cluster .
- Use your Dataproc Metastore service with other Google Cloud services, such as Managed Service for Apache Spark cluster.

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample list services(): Create a client client = metastore v1.
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create backup create backup ( request : typing .
- The Dataproc Metastore API defines the following resource model: The service works with a collection of Google Cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ (a location must refer to a Google Cloud region ) Each location has a collection of services, named: /services/ Dataproc Metastore services are resources with names of the form: /projects/{project number}/locations/{location id}/services/{service id} .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample alter metadata resource location(): Create a client client = metastore v1.

### "Class DataprocMetastoreClient (1.22.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- Source ID: `site-python-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 def sample list services(): Create a client client = metastore v1.
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create backup create backup ( request : typing .
- The Dataproc Metastore API defines the following resource model: The service works with a collection of Google Cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ (a location must refer to a Google Cloud region ) Each location has a collection of services, named: /services/ Dataproc Metastore services are resources with names of the form: /projects/{project number}/locations/{location id}/services/{service id} .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 def sample alter metadata resource location(): Create a client client = metastore v1.

