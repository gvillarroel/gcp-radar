---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.792Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Beta API upgrade target selection"
feature_slug: "beta-api-upgrade-target-selection"
latest_feature_date: "2020-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade"
keywords:
  - "selection"
  - "target"
  - "three"
  - "upgrade"
  - "environment"
  - "beta"
---

# Beta API upgrade target selection

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

The Composer Beta API can upgrade an environment to any of the three latest Composer versions instead of only the latest version.

## Extended Definition

The Composer Beta API can upgrade an environment to any of the three latest Composer versions instead of only the latest version.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- The worker.max count field specifies the maximum number of workers in your environment. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { workloads config { scheduler { cpu = SCHEDULER CPU memory gb = SCHEDULER MEMORY storage gb = SCHEDULER STORAGE count = SCHEDULER COUNT } triggerer { count = TRIGGERER COUNT cpu = TRIGGERER CPU memory gb = TRIGGERER MEMORY } dag processor { cpu = DAG PROCESSOR CPU memory gb = DAG PROCESSOR MEMORY storage gb = DAG PROCESSOR STORAGE count = DAG PROCESSOR COUNT } web server { cpu = WEB SERVER CPU memory gb = WEB SERVER MEMORY storage gb = WEB SERVER STORAGE } worker { cpu = WORKER CPU memory gb = WORKER MEMORY storage gb = WORKER STORAGE min count = WORKERS MIN max count = WORKERS MAX } } environment size = " ENVIRONMENT SIZE " node config { service account = " SERVICE ACCOUNT " } } } Replace: ENVIRONMENT NAME with the name of the environment.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "maintenanceWindow" : { "startTime" : "2023-01-01T01:00:00Z" , "endTime" : "2023-01-01T07:00:00Z" , "recurrence" : "FREQ=WEEKLY;BYDAY=SU,WE,SA" }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Terraform The maintenance window block specifies the maintenance windows for your environment: resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { maintenance window { start time = " DATETIME START " end time = " DATETIME END " recurrence = " MAINTENANCE RECURRENCE " } node config { service account = " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { workloads config { scheduler { cpu = 2.5 memory gb = 2.5 storage gb = 2 count = 1 } triggerer { count = 1 cpu = 0.5 memory gb = 0.5 } dag processor { cpu = 1 memory gb = 2 storage gb = 1 count = 1 } web server { cpu = 1 memory gb = 2.5 storage gb = 2 } worker { cpu = 1 memory gb = 2 storage gb = 2 min count = 2 max count = 4 } } environment size = "ENVIRONMENT SIZE SMALL" node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 4. (Optional) Enable high resilience mode Highly resilient (Highly Available) Cloud Composer environments are environments that use built-in redundancy and failover mechanisms that reduce the environment's susceptibility to zonal failures and single point of failure outages.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "imageVersion" : "composer-3-airflow-2.10.5-build.33" }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform To create an environment with default parameters is a specified location, add the following resource block to your Terraform configuration and run terraform apply . resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { image version = " IMAGE VERSION " } node config { service account = " SERVICE ACCOUNT " } } } Important: You must specify an image version for Cloud Composer 3.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "maintenanceWindow" : { "startTime" : "2023-01-01T01:00:00Z" , "endTime" : "2023-01-01T07:00:00Z" , "recurrence" : "FREQ=WEEKLY;BYDAY=SU,WE,SA" }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Terraform The maintenance window block specifies the maintenance windows for your environment: resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { maintenance window { start time = " DATETIME START " end time = " DATETIME END " recurrence = " MAINTENANCE RECURRENCE " } node config { service account = " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "imageVersion" : "composer-1.20.12-airflow-1.10.15" }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform To create an environment with default parameters is a specified location, add the following resource block to your Terraform configuration and run terraform apply . resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { image version = " IMAGE VERSION " } node config { service account = " SERVICE ACCOUNT " } } } Important: You must specify an image version for Cloud Composer 1.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeConfig" : { "tags" : [ "group1" , "production" ], "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, following fields define network tags for your environment: tags field in the node config block specifies a comma-separated list of network tags applied to all node VMs. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { tags = [ " TAGS " ] service account = " SERVICE ACCOUNT " } } } Replace: TAGS with a comma-separated list of network tags.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { software config { airflow config overrides = { core-dags are paused at creation = "True" webserver-dag orientation = "TB" } env variables = { SENDGRID MAIL FROM = "user@example.com" SENDGRID API KEY = "example-key" } } node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 8. (Optional) Specify maintenance windows By default, Cloud Composer 1 environments do not have defined maintenance windows if you create them using Google Cloud console, API, or Terraform.

### "Method: projects.locations.environments.checkUpgrade \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The resource name of the environment to check upgrade for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource environment : composer.environments.update Request body The request body contains data with the following structure: JSON representation { "imageVersion" : string } Fields imageVersion string Optional.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.checkUpgrade Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://composer.googleapis.com/v1/{environment=projects/ /locations/ /environments/ }:checkUpgrade The URL uses gRPC Transcoding syntax.
- Check if an upgrade operation on the environment will succeed.

