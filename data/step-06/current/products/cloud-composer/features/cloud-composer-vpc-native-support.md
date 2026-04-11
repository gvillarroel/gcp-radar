---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.112Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer VPC Native support"
feature_slug: "cloud-composer-vpc-native-support"
latest_feature_date: "2019-05-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
keywords:
  - "composer"
  - "vpc"
  - "native"
  - "introduced"
---

# Cloud Composer VPC Native support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer introduced VPC Native support.

## Extended Definition

Cloud Composer introduced VPC Native support.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)

## Supporting Pages

### "Configure Shared VPC networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- Source ID: `site-iam-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- In the host project: Edit permissions for the Composer Service Agent account, service- SERVICE PROJECT NUMBER @cloudcomposer-accounts.iam.gserviceaccount.com ) For this account, add another role on the project level: For Private IP environments, add the Composer Shared VPC Agent role.
- For each service account, add another role, compute.networkUser using one of the following options: Grant this role at the subnet level to allow a service account to set up the VPC peerings required by Cloud Composer.
- Service and host projects for Cloud Composer Shared VPC requires that you designate a host project to which networks and subnetworks belong and a service project , which is attached to the host project.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure Shared VPC networking Stay organized with collections Save and categorize content based on your preferences.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Added new health metrics in Stackdriver to monitor your environment: composer.googleapis.com/environment/healthy and composer.googleapis.com/environment/database health VPC Native support is now in beta.
- Change Before creating or updating an environment, Cloud Composer checks that required APIs are enabled in a project and that CIDR blocks specified for VPC Native and Private IP are valid.
- Change New versions of Cloud Composer images: composer-1.16.10-airflow-1.10.15 (default) composer-1.16.10-airflow-1.10.14 composer-1.16.10-airflow-1.10.12 composer-1.17.0-preview.6-airflow-2.0.1 composer-1.17.0-preview.6-airflow-2.0.2 July 08, 2021 Change New versions of Cloud Composer images: composer-1.17.0-preview.5-airflow-2.0.1 composer-1.16.9-airflow-1.10.15 (default) composer-1.16.9-airflow-1.10.14 composer-1.16.9-airflow-1.10.12 Fixed When PyPI modules installation fails with certain error types in VPC SC environments, an additional attempt to perform the environment update operation is made using an in-cluster build.
- Change Cloud Composer 1.20.3 and 2.1.3 images are available: composer-1.20.3-airflow-1.10.15 (default) composer-1.20.3-airflow-2.2.5 composer-1.20.3-airflow-2.3.4 composer-2.1.3-airflow-2.2.5 composer-2.1.3-airflow-2.3.4 (default) December 20, 2022 Fixed (Available without upgrading) Fixed an issue where upgrading a Private IP environment with VPC peerings to Cloud Composer 2.0.31 and later versions resulted in intermittent issues with database connections.

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that your service perimeter has the following VPC accessible services, otherwise your environment might fail to create: Cloud Composer API (composer.googleapis.com) Compute Engine API (compute.googleapis.com) Kubernetes Engine API (container.googleapis.com) Container Registry API (containerregistry.googleapis.com) Artifact Registry API (artifactregistry.googleapis.com) Cloud Storage API (storage.googleapis.com) Cloud SQL Admin API (sqladmin.googleapis.com) Cloud Logging API (logging.googleapis.com) Cloud Monitoring API (monitoring.googleapis.com) Cloud Pub/Sub API (pubsub.googleapis.com) Cloud Cloud Resource Manager API (cloudresourcemanager.googleapis.com) Service Directory API (servicedirectory.googleapis.com) Cloud Key Management Service API (cloudkms.googleapis.com), if you are using Cloud KMS or CMEK keys.
- Install PyPI packages in VPC Service Controls In the default VPC Service Controls configuration, Cloud Composer only supports installing PyPI packages from private repositories that are reachable from the internal IP address space of the VPC network.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- By configuring your environment with VPC Service Controls, you can keep sensitive data private while taking advantage of the fully-managed workflow orchestration capabilities of Cloud Composer.

