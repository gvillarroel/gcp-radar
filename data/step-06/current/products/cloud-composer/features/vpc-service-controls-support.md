---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.810Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "VPC Service Controls support"
feature_slug: "vpc-service-controls-support"
latest_feature_date: "2020-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc"
keywords:
  - "vpc"
  - "controls"
  - "composer"
  - "supports"
  - "beta"
---

# VPC Service Controls support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports VPC Service Controls in beta.

## Extended Definition

Cloud Composer supports VPC Service Controls in beta.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- [https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service](https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)

## Supporting Pages

### Enable and disable the Cloud Composer service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service](https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service)
- Source ID: `site-iam-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a list of services required by Cloud Composer in VPC Service Controls configurations, see Configure VPC Service Controls .
- The following services are required by Cloud Composer: artifactregistry.googleapis.com cloudbuild.googleapis.com composer.googleapis.com compute.googleapis.com container.googleapis.com deploymentmanager.googleapis.com logging.googleapis.com cloudkms.googleapis.com, if you are using Cloud KMS or CMEK keys monitoring.googleapis.com pubsub.googleapis.com storage.googleapis.com secretmanager.googleapis.com, if you are using Secret Manager as a secret backend cloudresourcemanager.googleapis.com servicedirectory.googleapis.com Google services like Cloud DNS or IAM are already allowed by default in most projects.
- Deactivating these APIs won't cause the deactivation of the Cloud Composer API. artifactregistry.googleapis.com cloudbuild.googleapis.com container.googleapis.com pubsub.googleapis.com sqladmin.googleapis.com Starting May 27, 2026 , these APIs will no longer be enabled automatically when you enable the Cloud Composer API.
- Enable Cloud Composer API Console Enable the Cloud Composer API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Install PyPI packages in VPC Service Controls In the default VPC Service Controls configuration, Cloud Composer only supports installing PyPI packages from private repositories that are reachable from the internal IP address space of the VPC network.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- By configuring your environment with VPC Service Controls, you can keep sensitive data private while taking advantage of the fully-managed workflow orchestration capabilities of Cloud Composer.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 VPC Service Controls enable organizations to define a perimeter around Google Cloud resources to mitigate data exfiltration risks.

### "Configure Shared VPC networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- Source ID: `site-iam-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Configure the service project If Cloud Composer environments were never created in the service project, then provision the Composer Service Agent Account in the service project : gcloud beta services identity create --service = composer.googleapis.com Configure the host project Configure the host project as described further.
- In the host project: Edit permissions for the Composer Service Agent account, service- SERVICE PROJECT NUMBER @cloudcomposer-accounts.iam.gserviceaccount.com ) For this account, add another role on the project level: For Private IP environments, add the Composer Shared VPC Agent role.
- For each service account, add another role, compute.networkUser using one of the following options: Grant this role at the subnet level to allow a service account to set up the VPC peerings required by Cloud Composer.
- Service and host projects for Cloud Composer Shared VPC requires that you designate a host project to which networks and subnetworks belong and a service project , which is attached to the host project.

