---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.334Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer VPC Native support"
feature_slug: "cloud-composer-vpc-native-support"
latest_feature_date: "2019-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip"
  - "https://docs.cloud.google.com/composer/docs/composer-3/composer-overview"
keywords:
  - "composer"
  - "vpc"
  - "native"
  - "introduced"
---

# Cloud Composer VPC Native support

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer introduced VPC Native support.

## Extended Definition

Cloud Composer introduced VPC Native support.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- [https://docs.cloud.google.com/composer/docs/composer-3/composer-overview](https://docs.cloud.google.com/composer/docs/composer-3/composer-overview)

## Supporting Pages

### "Configure Shared VPC networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- Source ID: `site-iam-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- In the host project: Edit permissions for the Composer Service Agent account, service- SERVICE PROJECT NUMBER @cloudcomposer-accounts.iam.gserviceaccount.com ) For this account, add another role on the project level: For Private IP environments, add the Composer Shared VPC Agent role.
- For each service account, add another role, compute.networkUser using one of the following options: Grant this role at the subnet level to allow a service account to set up the VPC peerings required by Cloud Composer.
- Service and host projects for Cloud Composer Shared VPC requires that you designate a host project to which networks and subnetworks belong and a service project , which is attached to the host project.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure Shared VPC networking Stay organized with collections Save and categorize content based on your preferences.

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that your service perimeter has the following VPC accessible services, otherwise your environment might fail to create: Cloud Composer API (composer.googleapis.com) Compute Engine API (compute.googleapis.com) Kubernetes Engine API (container.googleapis.com) Container Registry API (containerregistry.googleapis.com) Artifact Registry API (artifactregistry.googleapis.com) Cloud Storage API (storage.googleapis.com) Cloud SQL Admin API (sqladmin.googleapis.com) Cloud Logging API (logging.googleapis.com) Cloud Monitoring API (monitoring.googleapis.com) Cloud Pub/Sub API (pubsub.googleapis.com) Cloud Cloud Resource Manager API (cloudresourcemanager.googleapis.com) Service Directory API (servicedirectory.googleapis.com) Cloud Key Management Service API (cloudkms.googleapis.com), if you are using Cloud KMS or CMEK keys.
- Install PyPI packages in VPC Service Controls In the default VPC Service Controls configuration, Cloud Composer only supports installing PyPI packages from private repositories that are reachable from the internal IP address space of the VPC network.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- By configuring your environment with VPC Service Controls, you can keep sensitive data private while taking advantage of the fully-managed workflow orchestration capabilities of Cloud Composer.

### "Configure private IP networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- To get IP ranges for a subnetwork, go to VPC Networks page and click on the network's name to see details: Go to VPC Networks VPC-native cluster configuration Cloud Composer supports VPC-native GKE clusters in your environment.
- Because a VPC native cluster is required for Airflow tasks to communicate with other VMs that are reachable through private IPs, you must also enable VPC Native to configure a private IP environment.
- If your VPC network and its established VPC peers have overlapping IP blocks with the VPC network in the Google-managed tenant project , Cloud Composer cannot create your environment.
- During environment creation , you can enable VPC Native (using alias IP) and configure networking, such as IP allocation, without enabling private IP .

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-3/composer-overview](https://docs.cloud.google.com/composer/docs/composer-3/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Connecting an environment to your VPC network Shared VPC environments Configuring VPC Service Controls Other features of Cloud Composer Other Cloud Composer features include: Autoscaling environments Development with local Airflow environments Highly resilient environments Environment snapshots Data lineage integration with Dataplex Universal Catalog Encryption with customer-managed encryption keys (CMEK) Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Airflow features in Cloud Composer When using Cloud Composer, you can manage and use Airflow features such as: Airflow DAGs : You can add, update, remove, or trigger Airflow DAGs in Google Cloud console or using the native Airflow UI.
- Cloud Composer helps you create managed Airflow environments quickly and use Airflow-native tools, such as the powerful Airflow web interface and command-line tools, so you can focus on your workflows and not your infrastructure.
- The cluster also hosts other Cloud Composer components like Composer Agent and Airflow Monitoring, which help manage the Cloud Composer environment, gather logs to store in Cloud Logging, and gather metrics to upload to Cloud Monitoring.

