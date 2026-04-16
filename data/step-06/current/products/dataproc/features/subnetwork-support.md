---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.698Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Subnetwork support"
feature_slug: "subnetwork-support"
latest_feature_date: "2016-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
keywords:
  - "subnetwork"
  - "lets"
  - "users"
  - "specify"
  - "when"
  - "creating"
  - "dataproc"
  - "cluster"
---

# Subnetwork support

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Subnetwork support lets users specify a subnetwork when creating a Dataproc cluster with gcloud.

## Extended Definition

Subnetwork support lets users specify a subnetwork when creating a Dataproc cluster with gcloud.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)

## Supporting Pages

### "Class ClusterControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample diagnose cluster(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample create cluster(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample delete cluster(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample update cluster(): Create a client client = dataproc v1 .

### "Class ClusterControllerClient (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient)
- Source ID: `site-python-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample diagnose cluster(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample create cluster(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample delete cluster(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample update cluster(): Create a client client = dataproc v1 .

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root-2`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When creating a metastore, the VPC network you are using might run out of available RFC 1918 addresses required by Dataproc Metastore services.
- Provisioning the service might take a few minutes. gcloud CLI To create a metastore, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --instance-size= INSTANCE SIZE \ --scaling-factor= SCALING FACTOR \ --port= PORT \ --tier= TIER \ --endpoint-protocol= ENDPOINT PROTOCOL \ --database-type= DATABASE TYPE \ --hive-metastore-version= HIVE METASTORE VERSION \ --data-catalog-sync= DATA CATALOG SYNC \ --release-channel= RELEASE CHANNEL \ --hive-metastore-configs= METADATA OVERRIDE \ --labels= LABELS \ --auxiliary-versions= AUXILIARY VERSION \ --network= NETWORK \ --consumer-subnetworks="projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET1 , projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET2 " \ --kerberos-principal= KERBEROS PRINCIPAL \ --krb5-config= KRB5 CONFIG \ --keytab= CLOUD SECRET \ --encryption-kms-key= KMS KEY Replace the following: Service settings : SERVICE : The name of your new Dataproc Metastore service.
- Caution: This IAM policy change grants Dataproc Metastore users with the metastore.services.create permission in the service project to indirectly create addresses and peerings in the network project. gcloud projects add-iam-policy-binding NETWORK PROJECT ID \ --role "roles/metastore.serviceAgent" \ --member "serviceAccount:service- SERVICE PROJECT NUMBER @gcp-sa-metastore.iam.gserviceaccount.com" Note: If you have never created a Dataproc Metastore service in the service project, then the gcloud projects add-iam-policy-binding command might fail with an error message containing Service account [SERVICE ACCOUNT NAME] does not exist.
- Create Dataproc Metastore using default settings Creating a Dataproc Metastore using the default settings configures your service with an enterprise tier, a medium instance size, the latest version of the Hive metastore, a Thrift endpoint, and a data location of us-central1 .

