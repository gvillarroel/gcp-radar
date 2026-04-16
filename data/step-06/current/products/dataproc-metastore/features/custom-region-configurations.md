---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.717Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Custom region configurations"
feature_slug: "custom-region-configurations"
latest_feature_date: "2024-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient"
keywords:
  - "custom"
  - "region"
  - "configurations"
  - "let"
  - "dataproc"
  - "metastore"
  - "run"
  - "workloads"
---

# Custom region configurations

Product: Dataproc Metastore
Coverage: MEDIUM

## Step 02 Summary

Custom region configurations let a Dataproc Metastore service run workloads from two separate regions; Custom region configurations let a Dataproc Metastore service run workloads from two separate regions.

## Extended Definition

Custom region configurations let a Dataproc Metastore service run workloads from two separate regions; Custom region configurations let a Dataproc Metastore service run workloads from two separate regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient)

## Supporting Pages

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Provisioning the service might take a few minutes. gcloud CLI To create a metastore, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --instance-size= INSTANCE SIZE \ --scaling-factor= SCALING FACTOR \ --port= PORT \ --tier= TIER \ --endpoint-protocol= ENDPOINT PROTOCOL \ --database-type= DATABASE TYPE \ --hive-metastore-version= HIVE METASTORE VERSION \ --data-catalog-sync= DATA CATALOG SYNC \ --release-channel= RELEASE CHANNEL \ --hive-metastore-configs= METADATA OVERRIDE \ --labels= LABELS \ --auxiliary-versions= AUXILIARY VERSION \ --network= NETWORK \ --consumer-subnetworks="projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET1 , projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET2 " \ --kerberos-principal= KERBEROS PRINCIPAL \ --krb5-config= KRB5 CONFIG \ --keytab= CLOUD SECRET \ --encryption-kms-key= KMS KEY Replace the following: Service settings : SERVICE : The name of your new Dataproc Metastore service.
- Return to the Dataproc Metastore page, and verify that your service was successfully created. gcloud CLI To create a Dataproc Metastore service with a Hive override, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --hive-metastore-configs="hive.metastore.warehouse.dir= CUSTOMER DIR " Replace the following: SERVICE : The name of your new Dataproc Metastore service.
- Provisioning the service might take a few minutes. gcloud CLI To create a Dataproc Metastore metastore service 2 using the provided defaults, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --instance-size= INSTANCE SIZE \ --scaling-factor= SCALING FACTOR Replace the following: SERVICE : The name of your new Dataproc Metastore service.
- Provisioning the service might take a couple of minutes. gcloud CLI To create a basic metastore service using the provided defaults, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION Replace the following: SERVICE : The name of your new Dataproc Metastore service.

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Dataproc Metastore API defines the following resource model: The service works with a collection of Google Cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ (a location must refer to a Google Cloud region ) Each location has a collection of services, named: /services/ Dataproc Metastore services are resources with names of the form: /projects/{project number}/locations/{location id}/services/{service id} .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample delete service(): Create a client client = metastore v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample delete backup(): Create a client client = metastore v1.
- Request message for DataprocMetastore.MoveTableToDatabase . retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class DataprocMetastoreClient (1.22.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreClient)
- Source ID: `site-python-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Dataproc Metastore API defines the following resource model: The service works with a collection of Google Cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ (a location must refer to a Google Cloud region ) Each location has a collection of services, named: /services/ Dataproc Metastore services are resources with names of the form: /projects/{project number}/locations/{location id}/services/{service id} .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 def sample delete service(): Create a client client = metastore v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 def sample delete backup(): Create a client client = metastore v1.
- Request message for DataprocMetastore.MoveTableToDatabase . retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class DataprocMetastoreFederationAsyncClient (1.22.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient)
- Source ID: `site-python-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample delete federation(): Create a client client = metastore v1.
- CreateFederationRequest ( parent="parent value", federation id="federation id value", ) Make the request operation = client. create federation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.metastore v1.types.CreateFederationRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample create federation(): Create a client client = metastore v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample update federation(): Create a client client = metastore v1.

