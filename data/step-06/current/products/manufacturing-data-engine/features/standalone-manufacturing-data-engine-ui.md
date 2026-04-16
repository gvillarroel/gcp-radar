---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:50.446Z"
product_name: "Manufacturing Data Engine"
product_slug: "manufacturing-data-engine"
feature_name: "Standalone Manufacturing Data Engine UI"
feature_slug: "standalone-manufacturing-data-engine-ui"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/overview"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/upgrade-guide"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/step-one-prepare-your-project"
keywords:
  - "standalone"
  - "manufacturing"
  - "engine"
  - "ui"
  - "provides"
  - "for"
  - "deployment"
  - "without"
---

# Standalone Manufacturing Data Engine UI

Product: Manufacturing Data Engine
Coverage: MEDIUM

## Step 02 Summary

Provides a standalone UI for Manufacturing Data Engine deployment without Manufacturing Connect.

## Extended Definition

Provides a standalone UI for Manufacturing Data Engine deployment without Manufacturing Connect.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/manufacturing-data-engine/docs/overview](https://docs.cloud.google.com/manufacturing-data-engine/docs/overview)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/upgrade-guide](https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/upgrade-guide)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/step-one-prepare-your-project](https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/step-one-prepare-your-project)

## Supporting Pages

### Overview \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/overview](https://docs.cloud.google.com/manufacturing-data-engine/docs/overview)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manufacturing Data Engine : It serves as the acquisition, transformation and storage layer of the suite.
- Machine learning use cases : Build on Google Cloud Machine Learning (ML) products and platforms to create, train, and execute ML models that are relevant to optimize any aspect of the manufacturing operation.
- MDE provides a secure, efficient and reliable data lake containing all manufacturing information, and acts as a data hub for all use cases to connect and access manufacturing information.
- Home Documentation Data analytics Manufacturing Data Engine Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Manufacturing Connect \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Manufacturing Data Engine Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- With a library of 270+ supported automation protocols (and the option to add more), entire factories can be quickly connected to Manufacturing Data Engine (MDE).
- For customers using MDE only (without MC) : Starting with MDE v1.3, a standalone web interface for MDE is included in the release package.
- For updating MCe, Litmus provides updated files that can be rolled out to edge deployments.

### Upgrade guide \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/upgrade-guide](https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/upgrade-guide)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Upgrade guide This guide provides general guidance on how to upgrade an existing Manufacturing Data Engine (MDE) installation using Terraform.
- Home Documentation Data analytics Manufacturing Data Engine Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Upgrade This section provides guidance on how perform the upgrade using Terraform.
- Execute script from the upgrade/1.5 directory and return to the terraform directory cd ../../upgrade/1.5 export BQ PROJECT ID = $( gcloud config get-value project ) export PUBSUB PROJECT ID = $( gcloud config get-value project ) sh migrate-metadata-instance-bq-table.sh " $BQ PROJECT ID " " $PUBSUB PROJECT ID " cd ../../deployment/terraform If you are upgrading to 1.5.2, you need to switch the Kubernetes providers to use the local kubeconfig in the providers.tf file with the following command: provider "kubernetes" { config path = " /.kube/config" host = "https://${local.gke host}" token = data... cluster ca certificate = local.gke ca cert } provider "helm" { kubernetes { config path = " /.kube/config" host = "https://${local.gke host}" token = data... cluster ca certificate = local.gke ca cert } } Note: After you have finished applying the upgrade (after step 10), this change can be rolled back to continue using the dynamic Kubernetes configuration inside Terraform.

### "Step 1: Prepare your project \_|\_ Manufacturing Data Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/step-one-prepare-your-project](https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/step-one-prepare-your-project)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant roles for the mde-tf service account Grant the mde-tf service account, used by Terraform for deployments, the following roles: roles/bigquery.admin roles/bigtable.admin roles/cloudsql.admin roles/compute.instanceAdmin roles/compute.loadBalancerAdmin roles/compute.networkAdmin roles/compute.securityAdmin roles/container.admin roles/container.developer roles/dataflow.admin roles/dns.admin roles/iam.serviceAccountAdmin roles/iam.serviceAccountUser roles/pubsub.admin roles/resourcemanager.projectIamAdmin roles/secretmanager.admin roles/secretmanager.secretVersionManager roles/serviceusage.serviceUsageAdmin roles/storage.admin roles/monitoring.admin roles/redis.admin roles/file.editor A user with the roles/iam.securityAdmin role or equivalent permissions can grant the required roles to the mde-tf service account with the following commands: export PROJECT ID = $( gcloud config get-value project ) export SA TERRAFORM = "mde-tf" gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/bigquery.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/dataflow.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/bigtable.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/cloudsql.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/compute.instanceAdmin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/compute.loadBalancerAdmin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/compute.networkAdmin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/compute.securityAdmin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/container.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/container.developer' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/dns.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/iam.serviceAccountAdmin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/iam.serviceAccountUser' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/pubsub.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/resourcemanager.projectIamAdmin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/secretmanager.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/secretmanager.secretVersionManager' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/serviceusage.serviceUsageAdmin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/storage.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/monitoring.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/redis.admin' gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ SA TERRAFORM } @ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = 'roles/file.editor' 5.
- A user in your org with the roles/iam.serviceAccountCreator role can create the mde-df-worker and mde-tf service accounts with the following commands: gcloud iam service-accounts create mde-df-worker \ --description = "Manufacturing Data Engine Dataflow Worker Service Account" \ --display-name = "Manufacturing Data Engine Dataflow Worker Service Account" gcloud iam service-accounts create mde-tf \ --description = "Manufacturing Data Engine Terraform Service Account" \ --display-name = "Manufacturing Data Engine Terraform Service Account" 4.
- If this is the case, extra work (via Google Cloud Consulting or a Systems Integration partner) may be required for the deployment to navigate around these restrictions.
- Home Documentation Data analytics Manufacturing Data Engine Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

