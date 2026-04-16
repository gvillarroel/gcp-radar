---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:18.944Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 2 high availability infrastructure resilience"
feature_slug: "cloud-composer-2-high-availability-infrastructure-resilience"
latest_feature_date: "2025-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-2/composer-overview"
  - "https://docs.cloud.google.com/composer/docs/composer-3/composer-overview"
  - "https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3"
keywords:
  - "composer"
  - "high"
  - "availability"
  - "infrastructure"
  - "resilience"
  - "improved"
  - "to"
  - "improve"
---

# Cloud Composer 2 high availability infrastructure resilience

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 2 improved high availability infrastructure to improve resilience against zonal outages, completing rollout to all supported regions.

## Extended Definition

Cloud Composer 2 improved high availability infrastructure to improve resilience against zonal outages, completing rollout to all supported regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)
- [https://docs.cloud.google.com/composer/docs/composer-3/composer-overview](https://docs.cloud.google.com/composer/docs/composer-3/composer-overview)
- [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- For more information about --triggerer-count , --triggerer-cpu , and --triggerer-memory flags, see Configure environment scale and performance parameters . --min-workers to 2 or more gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --enable-high-resilience \ --enable-private-environment \ --scheduler-count 2 \ --triggerer-count 2 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5 \ --min-workers 2 API When you create an environment, in the Environment > EnvironmentConfig resource, enable the high resilience mode. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform Note: An update to the resilience mode field causes a failure instead of leading to recreating the Cloud Composer environment.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { workloads config { scheduler { cpu = 2.5 memory gb = 2.5 storage gb = 2 count = 1 } triggerer { count = 1 cpu = 0.5 memory gb = 0.5 } dag processor { cpu = 1 memory gb = 2 storage gb = 1 count = 1 } web server { cpu = 1 memory gb = 2.5 storage gb = 2 } worker { cpu = 1 memory gb = 2 storage gb = 2 min count = 2 max count = 4 } } environment size = "ENVIRONMENT SIZE SMALL" node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 4. (Optional) Enable high resilience mode Highly resilient (Highly Available) Cloud Composer environments are environments that use built-in redundancy and failover mechanisms that reduce the environment's susceptibility to zonal failures and single point of failure outages.
- When you create an environment, the resilience mode field in the config block enables the high resilience mode. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { resilience mode = "HIGH RESILIENCE" node config { service account = " SERVICE ACCOUNT " } } } Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { resilience mode = "HIGH RESILIENCE" node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 5. (Optional) Specify a zone for the environment's database You can specify a preferred Cloud SQL zone when creating a standard resilience environment.
- Set the following arguments: --enable-high-resilience --enable-private-environment , and other networking parameters for a Private IP environment, if required --scheduler-count to 2 --triggerer-count to 0 or a value between 2 and 10 .

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Private Service Connect environments Shared VPC environments Configuring VPC Service Controls Authorized networks IP Masquerade agent Privately used public IP ranges Other features of Cloud Composer Other Cloud Composer features include: Autoscaling environments Development with local Airflow environments Highly resilient environments Environment snapshots Data lineage integration with Dataplex Universal Catalog Encryption with customer-managed encryption keys (CMEK) Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Cloud Composer helps you create managed Airflow environments quickly and use Airflow-native tools, such as the powerful Airflow web interface and command-line tools, so you can focus on your workflows and not your infrastructure.
- The cluster also hosts other Cloud Composer components like Composer Agent and Airflow Monitoring, which help manage the Cloud Composer environment, gather logs to store in Cloud Logging, and gather metrics to upload to Cloud Monitoring.
- Logging and monitoring for DAGs, Airflow components, and Cloud Composer environments: You can view Airflow logs that are associated with single DAG tasks in the Airflow web interface and the logs folder in the environment's bucket .

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-3/composer-overview](https://docs.cloud.google.com/composer/docs/composer-3/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Connecting an environment to your VPC network Shared VPC environments Configuring VPC Service Controls Other features of Cloud Composer Other Cloud Composer features include: Autoscaling environments Development with local Airflow environments Highly resilient environments Environment snapshots Data lineage integration with Dataplex Universal Catalog Encryption with customer-managed encryption keys (CMEK) Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Cloud Composer helps you create managed Airflow environments quickly and use Airflow-native tools, such as the powerful Airflow web interface and command-line tools, so you can focus on your workflows and not your infrastructure.
- The cluster also hosts other Cloud Composer components like Composer Agent and Airflow Monitoring, which help manage the Cloud Composer environment, gather logs to store in Cloud Logging, and gather metrics to upload to Cloud Monitoring.
- Logging and monitoring for DAGs, Airflow components, and Cloud Composer environments: You can view Airflow logs that are associated with single DAG tasks in the Airflow web interface and the logs folder in the environment's bucket .

### "Migrate to Cloud Composer\_3 from Cloud Composer\_1 (Airflow 2) \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Other migration guides From To Method Guide Cloud Composer 2 Cloud Composer 3 Side-by-side, using the migration script Script migration guide Cloud Composer 2 Cloud Composer 3 Side-by-side, using snapshots Snapshots migration guide Cloud Composer 1, Airflow 2 Cloud Composer 3 Side-by-side, using snapshots This guide Cloud Composer 1, Airflow 2 Cloud Composer 2 Side-by-side, using snapshots Snapshots migration guide Cloud Composer 1, Airflow 2 Cloud Composer 2 Side-by-side, manual transfer Manual migration guide Cloud Composer 1, Airflow 1 Cloud Composer 2, Airflow 2 Side-by-side, using snapshots Snapshots migration guide Cloud Composer 1, Airflow 1 Cloud Composer 2, Airflow 2 Side-by-side, manual transfer Manual migration guide Cloud Composer 1, Airflow 1 Cloud Composer 1, Airflow 2 Side-by-side, manual transfer Manual migration guide Before you begin Cloud Composer supports side-by-side migration from Cloud Composer 1 to Cloud Composer 3.
- COMPOSER 3 LOCATION with the region where the environment is located. (Airflow versions 2.9.1 and later) If there are quota errors while unpausing a large number of DAGs, you can use the following Airflow CLI commands to unpause all DAGs at once: gcloud composer environments run COMPOSER 3 ENV dags unpause \ --project PROJECT ID \ --location COMPOSER 3 LOCATION \ -- -y --treat-dag-id-as-regex ". " (Airflow versions earlier than 2.9.1) If there are quota errors while unpausing a large number of DAGs, it's possible to unpause DAGs using the Airflow REST API .
- COMPOSER 1 LOCATION with the region where the environment is located. (Airflow versions 2.9.1 and later) If there are quota errors while pausing a large number of DAGs, you can use the following Airflow CLI commands to pause all DAGs at once: gcloud composer environments run COMPOSER 1 ENV dags pause \ --project PROJECT ID \ --location COMPOSER 1 LOCATION \ -- -y --treat-dag-id-as-regex ". " (Airflow versions earlier than 2.9.1) If there are quota errors while pausing a large number of DAGs, it's possible to pause DAGs using the Airflow REST API .
- Click Load and wait until Cloud Composer loads the snapshot. gcloud Load the snapshot of your Cloud Composer 1 environment to your Cloud Composer 3 environment: gcloud composer environments snapshots load \ COMPOSER 3 ENV \ --location COMPOSER 3 LOCATION \ --snapshot-path " SNAPSHOT PATH " Replace: COMPOSER 3 ENV with the name of your Cloud Composer 3 environment.

