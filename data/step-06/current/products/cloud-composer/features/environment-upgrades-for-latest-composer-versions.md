---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.809Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Environment upgrades for latest Composer versions"
feature_slug: "environment-upgrades-for-latest-composer-versions"
latest_feature_date: "2020-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
keywords:
  - "environment"
  - "upgrades"
  - "composer"
  - "versions"
  - "enabled"
  - "two"
  - "instead"
  - "only"
---

# Environment upgrades for latest Composer versions

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Environment upgrades are enabled for the latest two Composer versions instead of only one.

## Extended Definition

Environment upgrades are enabled for the latest two Composer versions instead of only one.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)

## Supporting Pages

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- For Cloud Composer environments in versions composer-1. . -airflow- . . , this field is applicable only when useIpAliases is true. servicesIpv4CidrBlock string Optional.
- For Cloud Composer environments in versions composer-1. . -airflow- . . , this field is applicable only when useIpAliases is true. clusterIpv4CidrBlock string Optional.
- This field is supported for Cloud Composer environments in versions composer-2. . -airflow- . . and newer. cloudComposerNetworkIpv4ReservedRange string Output only.
- This field is supported for Cloud Composer environments in versions composer-2. . -airflow- . . and newer. airflowUri string Output only.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- For more information about --triggerer-count , --triggerer-cpu , and --triggerer-memory flags, see Configure environment scale and performance parameters . --min-workers to 2 or more gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --enable-high-resilience \ --enable-private-environment \ --scheduler-count 2 \ --triggerer-count 2 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5 \ --min-workers 2 API When you create an environment, in the Environment > EnvironmentConfig resource, enable the high resilience mode. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform Note: An update to the resilience mode field causes a failure instead of leading to recreating the Cloud Composer environment.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" labels = { owner = "engineering-team" env = "production" } } What's next Troubleshooting environment creation Configuring Shared VPC Configuring VPC Service Controls Adding and updating DAGs Accessing Airflow UI Updating and deleting environments About Cloud Composer versions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Data lineage integration is automatically enabled in a new Cloud Composer environment if the following conditions are met: Data Lineage API is enabled in your project.
- If you create an environment with Terraform, the service account used by Terraform must have a role with the composer.environments.create permission enabled.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- What's next Troubleshooting environment creation Configuring Shared VPC Configuring VPC Service Controls Adding and updating DAGs Accessing Airflow UI Updating and deleting environments About Cloud Composer versions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If you create an environment with Terraform, the service account used by Terraform must have a role with the composer.environments.create permission enabled.
- Note: Cloud Composer 1 supports only private IP environments with VPC peerings.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeConfig" : { "location" : "projects/example-project/zones/us-central1-a" , "oauthScopes" : [ "https://www.googleapis.com/auth/cloud-platform" , "https://www.googleapis.com/auth/bigquery" ], "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " }, "softwareConfig" : { "pythonVersion" : "3" } } } Terraform When you create an environment, following fields control miscellaneous parameters of your environment: zone field in the node config block specifies a Compute Engine zone for your environment VMs. oauth scopes field in the node config block specifies a comma-separated list of OAuth scopes. python version field in the software config block specifies the version of Python. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { zone = " ZONE " oauth scopes = "[ OAUTH SCOPES ]" service account = " SERVICE ACCOUNT " } software config { python version = " PYTHON VERSION " } } } Replace: ZONE with the name of the Compute Engine zone.

