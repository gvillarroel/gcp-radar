---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.267Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "High Resilience mode reconfiguration"
feature_slug: "high-resilience-mode-reconfiguration"
latest_feature_date: "2023-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
keywords:
  - "high"
  - "resilience"
  - "mode"
  - "reconfiguration"
  - "composer"
  - "lets"
  - "you"
  - "enable"
---

# High Resilience mode reconfiguration

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer lets you enable or disable High Resilience mode for an existing environment.

## Extended Definition

Cloud Composer lets you enable or disable High Resilience mode for an existing environment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- For more information about --triggerer-count , --triggerer-cpu , and --triggerer-memory flags, see Configure environment scale and performance parameters . --min-workers to 2 or more gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --enable-high-resilience \ --enable-private-environment \ --scheduler-count 2 \ --triggerer-count 2 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5 \ --min-workers 2 API When you create an environment, in the Environment > EnvironmentConfig resource, enable the high resilience mode. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform Note: An update to the resilience mode field causes a failure instead of leading to recreating the Cloud Composer environment.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { workloads config { scheduler { cpu = 2.5 memory gb = 2.5 storage gb = 2 count = 1 } triggerer { count = 1 cpu = 0.5 memory gb = 0.5 } dag processor { cpu = 1 memory gb = 2 storage gb = 1 count = 1 } web server { cpu = 1 memory gb = 2.5 storage gb = 2 } worker { cpu = 1 memory gb = 2 storage gb = 2 min count = 2 max count = 4 } } environment size = "ENVIRONMENT SIZE SMALL" node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 4. (Optional) Enable high resilience mode Highly resilient (Highly Available) Cloud Composer environments are environments that use built-in redundancy and failover mechanisms that reduce the environment's susceptibility to zonal failures and single point of failure outages.
- When you create an environment, the resilience mode field in the config block enables the high resilience mode. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { resilience mode = "HIGH RESILIENCE" node config { service account = " SERVICE ACCOUNT " } } } Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { resilience mode = "HIGH RESILIENCE" node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 5. (Optional) Specify a zone for the environment's database You can specify a preferred Cloud SQL zone when creating a standard resilience environment.
- If required, specify other networking parameters . gcloud When you create an environment, the --enable-high-resilience argument enables the high resilience mode.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- HIGH RESILIENCE Enabled High Resilience mode, including Cloud SQL HA.
- This field is supported for Cloud Composer environments in versions composer-2. . -airflow- . . and newer. resilienceMode enum ( ResilienceMode ) Optional.
- ResilienceMode Resilience mode of the Cloud Composer Environment.
- Resilience mode of the Cloud Composer Environment.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Composer 1 environment creation fails when the compute.vmCanIpForward policy is disabled Cloud Composer 1 environments created in the non-VPC-Native (using alias IP) mode require this policy to allow the creation of VMs with the enabled IP Forwarding feature.
- Add the cloud-airflow-prod@system.gserviceaccount.com service account as the member of your security perimeter by using the following configuration in the YAML conditions file: - members : - serviceAccount:cloud-airflow-prod@ system.gserviceaccount.com Cloud Composer 1 environment creation fails when the compute.requireOsLogin policy is enabled If compute.requireOsLogin policy is set to true in your project, then Cloud Composer 1 v1 environment creation operations fails.
- Airflow workers or schedulers might experience issues when accessing the environment's Cloud Storage bucket Cloud Composer uses gcsfuse to access the /data folder in the environment's bucket and to save Airflow task logs to the /logs directory (if enabled).
- In the meantime, if you believe that you are highly impacted by this issue you can do the following to mitigate it: In Google Cloud console, go to the Environment Configuration page of the impacted Cloud Composer environments.

