---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.905Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer max-pods-per-node environment setting"
feature_slug: "cloud-composer-max-pods-per-node-environment-setting"
latest_feature_date: "2021-01-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
keywords:
  - "composer"
  - "max"
  - "pods"
  - "per"
  - "node"
  - "environment"
  - "setting"
  - "introduced"
---

# Cloud Composer max-pods-per-node environment setting

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer introduced a max-pods-per-node parameter to configure the maximum number of pods per node in the GKE cluster when creating an environment.

## Extended Definition

Cloud Composer introduced a max-pods-per-node parameter to configure the maximum number of pods per node in the GKE cluster when creating an environment.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- You can use the max-pods-per-node parameter when creating an environment to increase or decrease the number of pods.
- While Google works on resolving this issue so Composer environments are immune to CVE-2024-6387 , you can disallow SSH to the Cloud Composer's cluster nodes through establishing proper firewall rules on the environment's cluster as described in the Google GKE Security bulletins.
- You can now set the core.store serialized dags property to False after setting it to True . (Previously it was not possible to switch back.) Composer now uses Pip version 19.0.2 for both Python 2 and Python 3 Airflow environments.
- Fixed (Available without upgrading) Fixed a problem where the termination grace period for Airflow worker Pods in Cloud Composer 2 was set to 30 seconds (from 3600 seconds) after updating an environment.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- If true , builds performed during operations that install Python packages have only private connectivity to Google services (including Artifact Registry) and VPC network (if either NodeConfig.network and NodeConfig.subnetwork fields or NodeConfig.composer network attachment field are specified).
- The configuration settings for software inside the environment. nodeConfig object ( NodeConfig ) Optional.
- The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --zone us-central1-a \ --node-count 6 \ --scheduler-count 1 \ --disk-size 50 \ --machine-type n1-standard-2 \ --cloud-sql-machine-type db-n1-standard-2 \ --web-server-machine-type composer-n1-webserver-2 API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "nodeCount" : NODE COUNT , "nodeConfig" : { "machineType" : " NODE MACHINE TYPE " , "diskSizeGb" : DISK SIZE , "serviceAccount" : " SERVICE ACCOUNT " }, "softwareConfig" : { "schedulerCount" : SCHEDULER COUNT }, "databaseConfig" : { "machineType" : " SQL MACHINE TYPE " }, "webServerConfig" : { "machineType" : " WS MACHINE TYPE " } } } Replace: NODE COUNT with the number of nodes.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeCount" : 6 , "nodeConfig" : { "machineType" : "projects/example-project/zones/us-central1-a/machineTypes/n1-standard-2" , "diskSizeGb" : 50 , "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " }, "softwareConfig" : { "schedulerCount" : 1 }, "databaseConfig" : { "machineType" : "db-n1-standard-2" }, "webServerConfig" : { "machineType" : "composer-n1-webserver-2" } } } Terraform When you create an environment, following fields control environment scale and performance parameters: node count in the node config block specifies the number of nodes in your environment.
- Variable names may contain upper and lowercase letters, digits, and underscores, but they may not begin with a digit. airflow config overrides block in the software config block specifies Airflow configuration overrides. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { airflow config overrides = { SECTION - KEY = " OVERRIDE VALUE " } env variables = { VAR NAME = " VAR VALUE " } } node config { service account = " SERVICE ACCOUNT " } } } Replace: SECTION with the section in the configuration file where the Airflow configuration option is located.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { software config { image version = "composer-1.20.12-airflow-1.10.15" } node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 3. (Optional) Configure environment scale and performance parameters To specify the scale and performance configuration for your environment, provide the number of nodes in your environment's GKE cluster and select machine types for environment components.

