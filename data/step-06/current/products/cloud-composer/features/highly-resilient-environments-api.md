---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.346Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Highly resilient environments API"
feature_slug: "highly-resilient-environments-api"
latest_feature_date: "2023-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-3/composer-overview"
keywords:
  - "highly"
  - "resilient"
  - "environments"
  - "composer"
  - "provides"
  - "managing"
---

# Highly resilient environments API

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer provides API support for managing highly resilient environments.

## Extended Definition

Cloud Composer provides API support for managing highly resilient environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-3/composer-overview](https://docs.cloud.google.com/composer/docs/composer-3/composer-overview)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { workloads config { scheduler { cpu = 2.5 memory gb = 2.5 storage gb = 2 count = 1 } triggerer { count = 1 cpu = 0.5 memory gb = 0.5 } dag processor { cpu = 1 memory gb = 2 storage gb = 1 count = 1 } web server { cpu = 1 memory gb = 2.5 storage gb = 2 } worker { cpu = 1 memory gb = 2 storage gb = 2 min count = 2 max count = 4 } } environment size = "ENVIRONMENT SIZE SMALL" node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 4. (Optional) Enable high resilience mode Highly resilient (Highly Available) Cloud Composer environments are environments that use built-in redundancy and failover mechanisms that reduce the environment's susceptibility to zonal failures and single point of failure outages.
- In Cloud Composer 3, highly resilient environments are available starting from Airflow builds composer-3-airflow-2.10.2-build.13 and composer-3-airflow-2.9.3-build.20.
- Highly resilient environments require at least two DAG processors. --dag-processor-cpu specifies the number of CPUs for the DAG processor. --dag-processor-memory specifies the amount of memory for the DAG processor. --dag-processor-storage specifies the amount of disk space for the DAG processor. --web-server-cpu specifies the number of CPUs for the Airflow web server. --web-server-memory specifies the amount of memory for the Airflow web server. --web-server-storage specifies the amount of disk space for the Airflow web server. --worker-cpu specifies the number of CPUs for an Airflow worker. --worker-memory specifies the amount of memory for an Airflow worker. --worker-storage specifies the amount of disk space for an Airflow worker. --min-workers specifies the minimum number of Airflow workers.
- For example, a period of 4 hours every Monday, Wednesday, and Friday provides the required amount of time. gcloud The following arguments define maintenance windows parameters: --maintenance-window-start sets the start time of a maintenance window. --maintenance-window-end sets the end time of a maintenance window. --maintenance-window-recurrence sets the maintenance window recurrence . gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --maintenance-window-start ' DATETIME START ' \ --maintenance-window-end ' DATETIME END ' \ --maintenance-window-recurrence ' MAINTENANCE RECURRENCE ' Replace: ENVIRONMENT NAME with the name of the environment.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- For example, a period of 4 hours every Monday, Wednesday, and Friday provides the required amount of time. gcloud The following arguments define maintenance windows parameters: --maintenance-window-start sets the start time of a maintenance window. --maintenance-window-end sets the end time of a maintenance window. --maintenance-window-recurrence sets the maintenance window recurrence . gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " SERVICE ACCOUNT " \ --maintenance-window-start ' DATETIME START ' \ --maintenance-window-end ' DATETIME END ' \ --maintenance-window-recurrence ' MAINTENANCE RECURRENCE ' Replace: ENVIRONMENT NAME with the name of the environment.
- Highly resilient environments are more resilient to this issue, because their databases are located in two separate zones.
- Important: For production use cases, we highly recommend to use highly resilient environments .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeConfig" : { "location" : "projects/example-project/zones/us-central1-a" , "oauthScopes" : [ "https://www.googleapis.com/auth/cloud-platform" , "https://www.googleapis.com/auth/bigquery" ], "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " }, "softwareConfig" : { "pythonVersion" : "3" } } } Terraform When you create an environment, following fields control miscellaneous parameters of your environment: zone field in the node config block specifies a Compute Engine zone for your environment VMs. oauth scopes field in the node config block specifies a comma-separated list of OAuth scopes. python version field in the software config block specifies the version of Python. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { zone = " ZONE " oauth scopes = "[ OAUTH SCOPES ]" service account = " SERVICE ACCOUNT " } software config { python version = " PYTHON VERSION " } } } Replace: ZONE with the name of the Compute Engine zone.

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-3/composer-overview](https://docs.cloud.google.com/composer/docs/composer-3/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Connecting an environment to your VPC network Shared VPC environments Configuring VPC Service Controls Other features of Cloud Composer Other Cloud Composer features include: Autoscaling environments Development with local Airflow environments Highly resilient environments Environment snapshots Data lineage integration with Dataplex Universal Catalog Encryption with customer-managed encryption keys (CMEK) Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Cloud Composer interfaces Cloud Composer provides interfaces for managing environments, Airflow instances that run within environments, and individual DAGs.
- Highly resilient (Highly Available) Cloud Composer environments have a multi-zonal Airflow database and a multi-zonal Airflow execution layer.
- Important: For production use cases, we strongly recommend using highly resilient environments .

