---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.899Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Artifact Registry configuration"
feature_slug: "cloud-composer-artifact-registry-configuration"
latest_feature_date: "2021-01-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
keywords:
  - "composer"
  - "artifact"
  - "registry"
  - "configuration"
  - "environments"
  - "can"
  - "be"
  - "configured"
---

# Cloud Composer Artifact Registry configuration

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer environments can be configured to use Artifact Registry instead of Container Registry.

## Extended Definition

Cloud Composer environments can be configured to use Artifact Registry instead of Container Registry.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)

## Supporting Pages

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Make sure that your service perimeter has the following VPC accessible services, otherwise your environment might fail to create: Cloud Composer API (composer.googleapis.com) Compute Engine API (compute.googleapis.com) Kubernetes Engine API (container.googleapis.com) Container Registry API (containerregistry.googleapis.com) Artifact Registry API (artifactregistry.googleapis.com) Cloud Storage API (storage.googleapis.com) Cloud SQL Admin API (sqladmin.googleapis.com) Cloud Logging API (logging.googleapis.com) Cloud Monitoring API (monitoring.googleapis.com) Cloud Pub/Sub API (pubsub.googleapis.com) Cloud Cloud Resource Manager API (cloudresourcemanager.googleapis.com) Service Directory API (servicedirectory.googleapis.com) Cloud Key Management Service API (cloudkms.googleapis.com), if you are using Cloud KMS or CMEK keys.
- Warning: In all versions of Cloud Composer 1, if you include Cloud Identity-Aware Proxy API (iap.googleapis.com) or Identity-Aware Proxy TCP API (iaptunnel.googleapis.com) in your perimeter, then Cloud Composer environments cannot be created .
- Cloud Composer environments can be deployed within a service perimeter.
- Cloud Composer environments use the following domains: .googleapis.com is used to access other Google services. .pkg.dev is used to get environment images, such as when creating or updating an environment. .gcr.io GKE requires connectivity to Container Registry domain regardless of Cloud Composer version.

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- You can use the --tree argument to get the result of the python -m pipdeptree --warn command. gcloud beta composer environments list-packages \ ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.
- Users with the composer.environments.update permission can execute Python code on behalf of the environment's service account when installing packages in your environment.
- Go to the PyPI Packages tab. gcloud gcloud composer environments describe ENVIRONMENT NAME \ --location LOCATION \ --format = "value(config.softwareConfig.pypiPackages)" Replace: ENVIRONMENT NAME with the name of the environment.
- Install packages from an Artifact Registry repository You can store packages in an Artifact Registry repository in your project, and configure your environment to install from it.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Change Cloud Composer 1.17.7 and 2.0.0-preview.7 images are available: composer-1.17.7-airflow-1.10.15 (default) composer-1.17.7-airflow-2.0.2 composer-1.17.7-airflow-2.1.4 composer-2.0.0-preview.7-airflow-2.0.2 composer-2.0.0-preview.7-airflow-2.1.4 December 01, 2021 Change (Available without upgrading) Web server network access control settings can now be configured in Cloud Composer 2 environments.
- Feature (Beta) You can now create private IP Cloud Composer environments that are configured for Shared VPC .
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.11.1-build.0 composer-3-airflow-3.1.7-build.4 composer-3-airflow-2.10.5-build.33 (default) composer-3-airflow-2.9.3-build.53 Change New images are available in Cloud Composer 2: composer-2.16.10-airflow-2.11.1 composer-2.16.10-airflow-2.10.5 (default) composer-2.16.10-airflow-2.9.3 March 27, 2026 Announcement Cloud Composer 2 environments can no longer be created in Melbourne (australia-southeast2).
- Change In new environments with Airflow 2.6.3, the default values of the following Airflow configuration options are changed to provide more optimized Cloud Composer environments: [scheduler]job heartbeat sec to 30 [scheduler]scheduler heartbeat sec to 15 Change (Cloud Composer 2 in select regions) Cloud Composer shows the account selection and consent screens when opening Airflow UI for an environment.

