---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.852Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "VPC Native support"
feature_slug: "vpc-native-support"
latest_feature_date: "2019-05-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
keywords:
  - "vpc"
  - "native"
  - "composer"
  - "supports"
  - "networking"
  - "beta"
---

# VPC Native support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports VPC Native networking in beta.

## Extended Definition

Cloud Composer supports VPC Native networking in beta.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)

## Supporting Pages

### "Configure Shared VPC networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- Source ID: `site-iam-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Configure the service project If Cloud Composer environments were never created in the service project, then provision the Composer Service Agent Account in the service project : gcloud beta services identity create --service = composer.googleapis.com Configure the host project Configure the host project as described further.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure Shared VPC networking Stay organized with collections Save and categorize content based on your preferences.
- In the host project: Edit permissions for the Composer Service Agent account, service- SERVICE PROJECT NUMBER @cloudcomposer-accounts.iam.gserviceaccount.com ) For this account, add another role on the project level: For Private IP environments, add the Composer Shared VPC Agent role.
- For each service account, add another role, compute.networkUser using one of the following options: Grant this role at the subnet level to allow a service account to set up the VPC peerings required by Cloud Composer.

### "Configure private IP networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- To get IP ranges for a subnetwork, go to VPC Networks page and click on the network's name to see details: Go to VPC Networks VPC-native cluster configuration Cloud Composer supports VPC-native GKE clusters in your environment.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure private IP networking Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page provides information about configuring your Google Cloud project networking for Private IP environments.
- During environment creation , you can enable VPC Native (using alias IP) and configure networking, such as IP allocation, without enabling private IP .

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- Install PyPI packages in VPC Service Controls In the default VPC Service Controls configuration, Cloud Composer only supports installing PyPI packages from private repositories that are reachable from the internal IP address space of the VPC network.
- Make sure that your service perimeter has the following VPC accessible services, otherwise your environment might fail to create: Cloud Composer API (composer.googleapis.com) Compute Engine API (compute.googleapis.com) Kubernetes Engine API (container.googleapis.com) Container Registry API (containerregistry.googleapis.com) Artifact Registry API (artifactregistry.googleapis.com) Cloud Storage API (storage.googleapis.com) Cloud SQL Admin API (sqladmin.googleapis.com) Cloud Logging API (logging.googleapis.com) Cloud Monitoring API (monitoring.googleapis.com) Cloud Pub/Sub API (pubsub.googleapis.com) Cloud Cloud Resource Manager API (cloudresourcemanager.googleapis.com) Service Directory API (servicedirectory.googleapis.com) Cloud Key Management Service API (cloudkms.googleapis.com), if you are using Cloud KMS or CMEK keys.
- Cloud Composer environments use the following domains: .googleapis.com is used to access other Google services. .pkg.dev is used to get environment images, such as when creating or updating an environment. .gcr.io GKE requires connectivity to Container Registry domain regardless of Cloud Composer version.
- In addition to other log messages, you can check logs for information about cloud-airflow-prod@system.gserviceaccount.com and service- PROJECT ID @cloudcomposer-accounts.iam.gserviceaccount.com service accounts that configure components of your environments.

