---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.023Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Zonal DNS names for new Composer environments"
feature_slug: "zonal-dns-names-for-new-composer-environments"
latest_feature_date: "2020-09-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
keywords:
  - "zonal"
  - "dns"
  - "names"
  - "for"
  - "new"
  - "composer"
  - "environments"
  - "all"
---

# Zonal DNS names for new Composer environments

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

All new Cloud Composer environments now use zonal DNS names.

## Extended Definition

All new Cloud Composer environments now use zonal DNS names.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- All new Environments now use Zonal DNS names .
- Change New versions of Cloud Composer images: composer-1.16.10-airflow-1.10.15 (default) composer-1.16.10-airflow-1.10.14 composer-1.16.10-airflow-1.10.12 composer-1.17.0-preview.6-airflow-2.0.1 composer-1.17.0-preview.6-airflow-2.0.2 July 08, 2021 Change New versions of Cloud Composer images: composer-1.17.0-preview.5-airflow-2.0.1 composer-1.16.9-airflow-1.10.15 (default) composer-1.16.9-airflow-1.10.14 composer-1.16.9-airflow-1.10.12 Fixed When PyPI modules installation fails with certain error types in VPC SC environments, an additional attempt to perform the environment update operation is made using an in-cluster build.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.9.3-build.5 (default) composer-3-airflow-2.7.3-build.21 Change Cloud Composer 2.9.9 images are available: composer-2.9.9-airflow-2.9.3 (default) composer-2.9.9-airflow-2.7.3 October 22, 2024 Change (Only new Cloud Composer 2 environments, all versions) If a GKE Control Plane IP range is specified for an environment, GKE creates a new subnetwork in this range to provision the IP address for communication with the GKE Control Plane.
- May 26, 2025 Feature (Cloud Composer 3) New metrics that show the number of active Airflow components are now available for Cloud Composer 3 environments: The number of active schedulers The number of active DAG processors The number of active triggerers The number of active web servers Fixed (Cloud Composer 3) It's now possible to override the default scopes of access tokens in all regions supported by Cloud Composer 3.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --environment-size small \ --scheduler-count 1 \ --scheduler-cpu 0 .5 \ --scheduler-memory 2 .5GB \ --scheduler-storage 2GB \ --triggerer-count 1 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5GB \ --dag-processor-count 1 \ --dag-processor-cpu 0 .5 \ --dag-processor-memory 2GB \ --dag-processor-storage 1GB \ --web-server-cpu 1 \ --web-server-memory 2 .5GB \ --web-server-storage 2GB \ --worker-cpu 1 \ --worker-memory 2GB \ --worker-storage 2GB \ --min-workers 2 \ --max-workers 4 API When you create an environment, in the Environment > EnvironmentConfig > WorkloadsConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "workloadsConfig" : { "scheduler" : { "cpu" : SCHEDULER CPU , "memoryGb" : SCHEDULER MEMORY , "storageGb" : SCHEDULER STORAGE , "count" : SCHEDULER COUNT }, "triggerer" : { "count" : TRIGGERER COUNT , "cpu" : TRIGGERER CPU , "memoryGb" : TRIGGERER MEMORY }, "dagProcessor" : { "count" : DAG PROCESSOR COUNT , "cpu" : DAG PROCESSOR CPU , "memoryGb" : DAG PROCESSOR MEMORY , "storageGb" : DAG PROCESSOR STORAGE }, "webServer" : { "cpu" : WEB SERVER CPU , "memoryGb" : WEB SERVER MEMORY , "storageGb" : WEB SERVER STORAGE }, "worker" : { "cpu" : WORKER CPU , "memoryGb" : WORKER MEMORY , "storageGb" : WORKER STORAGE , "minCount" : WORKERS MIN , "maxCount" : WORKERS MAX } }, "environmentSize" : " ENVIRONMENT SIZE " , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SCHEDULER CPU with the number of CPUs for a scheduler, in vCPU units.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { workloads config { scheduler { cpu = 2.5 memory gb = 2.5 storage gb = 2 count = 1 } triggerer { count = 1 cpu = 0.5 memory gb = 0.5 } dag processor { cpu = 1 memory gb = 2 storage gb = 1 count = 1 } web server { cpu = 1 memory gb = 2.5 storage gb = 2 } worker { cpu = 1 memory gb = 2 storage gb = 2 min count = 2 max count = 4 } } environment size = "ENVIRONMENT SIZE SMALL" node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 4. (Optional) Enable high resilience mode Highly resilient (Highly Available) Cloud Composer environments are environments that use built-in redundancy and failover mechanisms that reduce the environment's susceptibility to zonal failures and single point of failure outages.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "workloadsConfig" : { "scheduler" : { "cpu" : 2.5 , "memoryGb" : 2.5 , "storageGb" : 2 , "count" : 1 }, "triggerer" : { "cpu" : 0.5 , "memoryGb" : 0.5 , "count" : 1 }, "dagProcessor" : { "count" : 1 , "cpu" : 0.5 , "memoryGb" : 2 , "storageGb" : 1 }, "webServer" : { "cpu" : 1 , "memoryGb" : 2.5 , "storageGb" : 2 }, "worker" : { "cpu" : 1 , "memoryGb" : 2 , "storageGb" : 2 , "minCount" : 2 , "maxCount" : 4 } }, "environmentSize" : "ENVIRONMENT SIZE SMALL" , "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, following arguments control the scale and performance parameters of your environment.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeConfig" : { "tags" : [ "group1" , "production" ], "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, following fields define network tags for your environment: tags field in the node config block specifies a comma-separated list of network tags applied to all node VMs. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { tags = [ " TAGS " ] service account = " SERVICE ACCOUNT " } } } Replace: TAGS with a comma-separated list of network tags.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeConfig" : { "tags" : [ "group1" , "production" ], "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, following fields define network tags for your environment: tags field in the node config block specifies a comma-separated list of network tags applied to all node VMs. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { tags = [ " TAGS " ] service account = " SERVICE ACCOUNT " } } } Replace: TAGS with a comma-separated list of network tags.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "office net 1" }, { "value" : "192.0.4.0/24" , "description" : "office net 3" } ] }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, the allowed ip range block in the web server network access control block contains IP ranges that can access web server.
- Variable names may contain upper and lowercase letters, digits, and underscores, but they may not begin with a digit. --airflow-configs specifies a comma-separated list of keys and values for Airflow configuration overrides. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " SERVICE ACCOUNT " \ --env-variables ENV VARS \ --airflow-configs CONFIG OVERRIDES Replace: ENV VARS with a list of comma-separated NAME=VALUE pairs for environment variables.
- In the Tags field, specify instance tags for node VMs. gcloud When you create an environment, following arguments control network tags: --tags specifies a comma-separated list of network tags applied to all node VMs. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " SERVICE ACCOUNT " \ --tags TAGS Replace: TAGS with a comma-separated list of network tags.

