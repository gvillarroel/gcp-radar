---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.228Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Preferred Cloud SQL zone selection"
feature_slug: "preferred-cloud-sql-zone-selection"
latest_feature_date: "2023-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
keywords:
  - "preferred"
  - "sql"
  - "zone"
  - "selection"
  - "composer"
  - "lets"
  - "you"
  - "choose"
---

# Preferred Cloud SQL zone selection

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer lets you choose a preferred Cloud SQL zone when creating a standard resilience environment.

## Extended Definition

Cloud Composer lets you choose a preferred Cloud SQL zone when creating a standard resilience environment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- When you create an environment, the resilience mode field in the config block enables the high resilience mode. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { resilience mode = "HIGH RESILIENCE" node config { service account = " SERVICE ACCOUNT " } } } Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { resilience mode = "HIGH RESILIENCE" node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 5. (Optional) Specify a zone for the environment's database You can specify a preferred Cloud SQL zone when creating a standard resilience environment.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "databaseConfig" : { "zone" : "us-central1-a" }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, the zone field in the database config block specifies the preferred Cloud SQL zone. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { database config { zone = " SQL ZONE " } node config { service account = " SERVICE ACCOUNT " } } } Replace the following: SQL ZONE : preferred Cloud SQL zone.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --cloud-sql-preferred-zone us-central1-a API When you create an environment, in the Environment DatabaseConfig resource, specify the preferred Cloud SQL zone. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "databaseConfig" : { "zone" : " SQL ZONE " }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace the following: SQL ZONE : preferred Cloud SQL zone.
- In the Airflow database zone list, select a preferred Cloud SQL zone. gcloud When you create an environment, the --cloud-sql-preferred-zone argument specifies a preferred Cloud SQL zone. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --cloud-sql-preferred-zone SQL ZONE Replace the following: SQL ZONE : preferred Cloud SQL zone.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- If both this field and nodeConfig.location are specified, this machineType must belong to the nodeConfig.location ; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields.
- If both this field and nodeConfig.machineType are specified, nodeConfig.machineType must belong to this location ; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields.
- Supported for Cloud Composer environments in versions composer-1. . -airflow- . . . zone string Optional.
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeConfig" : { "location" : "projects/example-project/zones/us-central1-a" , "oauthScopes" : [ "https://www.googleapis.com/auth/cloud-platform" , "https://www.googleapis.com/auth/bigquery" ], "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " }, "softwareConfig" : { "pythonVersion" : "3" } } } Terraform When you create an environment, following fields control miscellaneous parameters of your environment: zone field in the node config block specifies a Compute Engine zone for your environment VMs. oauth scopes field in the node config block specifies a comma-separated list of OAuth scopes. python version field in the software config block specifies the version of Python. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { zone = " ZONE " oauth scopes = "[ OAUTH SCOPES ]" service account = " SERVICE ACCOUNT " } software config { python version = " PYTHON VERSION " } } } Replace: ZONE with the name of the Compute Engine zone.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --zone us-central1-a \ --node-count 6 \ --scheduler-count 1 \ --disk-size 50 \ --machine-type n1-standard-2 \ --cloud-sql-machine-type db-n1-standard-2 \ --web-server-machine-type composer-n1-webserver-2 API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "nodeCount" : NODE COUNT , "nodeConfig" : { "machineType" : " NODE MACHINE TYPE " , "diskSizeGb" : DISK SIZE , "serviceAccount" : " SERVICE ACCOUNT " }, "softwareConfig" : { "schedulerCount" : SCHEDULER COUNT }, "databaseConfig" : { "machineType" : " SQL MACHINE TYPE " }, "webServerConfig" : { "machineType" : " WS MACHINE TYPE " } } } Replace: NODE COUNT with the number of nodes.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --zone us-central1-a \ --oauth-scopes https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/bigquery \ --python-version 3 API When you create an environment, in the Environment > EnvironmentConfig resource, specify miscellaneous parameters of your environment. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "nodeConfig" : { "location" : "projects/ PROJECT ID /zones/ ZONE " , "oauthScopes" : [ " OAUTH SCOPE " ], "serviceAccount" : " SERVICE ACCOUNT " }, "softwareConfig" : { "pythonVersion" : " PYTHON VERSION " } } } Replace: ZONE with the name of the Compute Engine zone.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeCount" : 6 , "nodeConfig" : { "machineType" : "projects/example-project/zones/us-central1-a/machineTypes/n1-standard-2" , "diskSizeGb" : 50 , "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " }, "softwareConfig" : { "schedulerCount" : 1 }, "databaseConfig" : { "machineType" : "db-n1-standard-2" }, "webServerConfig" : { "machineType" : "composer-n1-webserver-2" } } } Terraform When you create an environment, following fields control environment scale and performance parameters: node count in the node config block specifies the number of nodes in your environment.

