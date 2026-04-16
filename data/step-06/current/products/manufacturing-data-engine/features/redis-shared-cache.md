---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:50.445Z"
product_name: "Manufacturing Data Engine"
product_slug: "manufacturing-data-engine"
feature_name: "Redis shared cache"
feature_slug: "redis-shared-cache"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/step-one-prepare-your-project"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-fed-api"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/ingest/how-to-ingest-batch-data"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/sizes"
keywords:
  - "redis"
  - "shared"
  - "cache"
  - "introduces"
  - "using"
---

# Redis shared cache

Product: Manufacturing Data Engine
Coverage: MEDIUM

## Step 02 Summary

Introduces a shared cache using Redis.

## Extended Definition

Introduces a shared cache using Redis.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/step-one-prepare-your-project](https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/step-one-prepare-your-project)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-fed-api](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-fed-api)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/ingest/how-to-ingest-batch-data](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/ingest/how-to-ingest-batch-data)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/sizes](https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/sizes)

## Supporting Pages

### "Step 1: Prepare your project \_|\_ Manufacturing Data Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/step-one-prepare-your-project](https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/step-one-prepare-your-project)
- Source ID: `site-docs-root`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant roles for the mde-tf service account Grant the mde-tf service account, used by Terraform for deployments, the following roles: roles/bigquery.admin roles/bigtable.admin roles/cloudsql.admin roles/compute.instanceAdmin roles/compute.loadBalancerAdmin roles/compute.networkAdmin roles/compute.securityAdmin roles/container.admin roles/container.developer roles/dataflow.admin roles/dns.admin roles/iam.serviceAccountAdmin roles/iam.serviceAccountUser roles/pubsub.admin roles/resourcemanager.projectIamAdmin roles/secretmanager.admin roles/secretmanager.secretVersionManager roles/serviceusage.serviceUsageAdmin roles/storage.admin roles/monitoring.admin roles/redis.admin roles/file.editor A user with the roles/iam.securityAdmin role or equivalent permissions can grant the required roles to the mde-tf service account with the following commands: export PROJECT ID = $( gcloud config get-value project ) export SA TERRAFORM = "mde-tf" gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/bigquery.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/dataflow.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/bigtable.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/cloudsql.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/compute.instanceAdmin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/compute.loadBalancerAdmin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/compute.networkAdmin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/compute.securityAdmin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/container.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/container.developer' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/dns.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/iam.serviceAccountAdmin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/iam.serviceAccountUser' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/pubsub.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/resourcemanager.projectIamAdmin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/secretmanager.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/secretmanager.secretVersionManager' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/serviceusage.serviceUsageAdmin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/storage.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/monitoring.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/redis.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/file.editor' 5.
- A user with the roles/iam.serviceAccountAdmin role or equivalent permissions can grant your user account the role on the mde-tf service account using the following command: export USER EMAIL = $( gcloud auth list --filter = status:ACTIVE --format = "value(account)" ) export PROJECT ID = $( gcloud config get-value project ) gcloud iam service-accounts add-iam-policy-binding \ --role roles/iam.serviceAccountTokenCreator \ --member "user: ${ USER EMAIL } " \ "mde-tf" @ " ${ PROJECT ID } " .iam.gserviceaccount.com 6.
- The following Google Cloud APIs must be enabled in order to execute Terraform scripts: compute.googleapis.com iamcredentials.googleapis.com cloudresourcemanager.googleapis.com A user with the roles/servicemanagement.serviceConsumer role or equivalent permissions can enable the APIs using the following command: gcloud services enable \ compute.googleapis.com \ iamcredentials.googleapis.com \ cloudresourcemanager.googleapis.com 7.
- Set up the default project to the MDE deployment project using the following command: gcloud config set project PROJECT ID Replace the following: PROJECT ID with the MDE deployment project ID.

### "Query using Federation API \_|\_ Manufacturing Data Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-fed-api](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-fed-api)
- Source ID: `site-docs-reference`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- The data available through the API are the following: Available Data API root path using tunnel Get records from BigLake /data/v1/bigquery Get records from Bigtable /data/v1/bigtable Get metadata instance from Metadata Manager /data/v1/metadata Get types and tags from Config Manager /data/v1/config In some cases attribute name are abbreviated to ensure proper performance when transferring large JSON payloads across the network.
- Query using Federation API This guide explains how to query data in Manufacturing Data Engine (MDE) using Federation API for typical use-cases.
- To access the API either use the MDE proxy or expose using Identity-Aware Proxy.

### "Ingest data in batch \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/ingest/how-to-ingest-batch-data](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/ingest/how-to-ingest-batch-data)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Batch loading works by creating an IngestionSpecification using de web interface or the API and then uploading one or more files to a folder in a Cloud Storage bucket setup by MDE, which by default has the name <project-id>-batch-ingestion .
- Ingest data in batch Although the main way to ingest data into Manufacturing Data Engine (MDE) is using streaming through Manufacturing Connect edge (MCe) or sending messages to Pub/Sub, it's also possible to ingest files in batch.
- They can be modified, enabled, disabled, or deleted using the 'Actions' icon on the side of each ingestion specification.
- They can be modified, enabled, disabled, or deleted using the 'Actions' icon on the side of each ingestion specification.

### Deployment sizes \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/sizes](https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/sizes)
- Source ID: `site-docs-root`
- Final score: 27
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Pilot Small Medium Large Max messages/second 300 1000 20000 100000 GKE CIDR pods /19 pods /17 pods /17 pods /17 pods CIDR services /22 services /22 services /22 services /22 services compute-class normal normal Scale-Out Scale-Out message-mapper max replicas 1 5 50 200 configuration manager max replicas 1 5 50 200 metadata-manager max replicas 1 5 50 200 bigquery-sink max replicas 1 5 50 200 federation-api max replicas 1 2 5 10 SQL machineType db-custom-1-3840 db-custom-2-7680 db-custom-16-30720 db-custom-32-61440 max connections flag 500 500 1000 4000 Redis tier Basic Standard Standard Standard memory 1Gb 5Gn 20Gb 40Gb read replicas 0 1 2 5 Dataflow GCSWriter machine type n1-standard-1 n1-standard-2 n1-standard-4 n1-highmem-4 GCSWriter max workers 1 1 5 10 Bigtable Writer machine type N/A n1-standard-2 n1-standard-4 n1-standard-4 Bigtable Writer max workers N/A 1 3 5 GCSReader machine type N/A n1-standard-2 n1-standard-4 n1-standard-4 GCSReader max workers N/A 1 1 2 EventChange machine type N/A n1-standard-2 n1-standard-4 n1-highmem-4 EventChange max workers N/A 1 2 2 Window machine type N/A n1-standard-2 n1-standard-4 n1-highmem-4 Window max workers N/A 1 2 2 Bigtable max nodes N/A 1 3 5 Important: Medium and Large sizes use the scale-out compute class for GKE cluster , which uses T2D CPUs .
- For production deployments, consider using a custom size tailored to your specific needs.

