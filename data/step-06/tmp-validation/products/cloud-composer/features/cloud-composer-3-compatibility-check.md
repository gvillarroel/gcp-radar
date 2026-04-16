---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:01.737Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 3 compatibility check"
feature_slug: "cloud-composer-3-compatibility-check"
latest_feature_date: "2025-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
keywords:
  - "verifies"
  - "whether"
  - "compatible"
  - "check"
  - "compatibility"
  - "configuration"
  - "environment"
---

# Cloud Composer 3 compatibility check

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

The Cloud Composer 3 compatibility check verifies whether a Cloud Composer 2 environment configuration is compatible with Cloud Composer 3.

## Extended Definition

The Cloud Composer 3 compatibility check verifies whether a Cloud Composer 2 environment configuration is compatible with Cloud Composer 3.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)

## Supporting Pages

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- Enums CONNECTION TYPE UNSPECIFIED No specific connection type was requested, so the environment uses the default value corresponding to the rest of its configuration.
- The configuration used for the Private IP Cloud Composer environment. webServerNetworkAccessControl object ( WebServerNetworkAccessControl ) Optional.
- The configuration used for the Kubernetes Engine cluster. privateEnvironmentConfig object ( PrivateEnvironmentConfig ) Optional.

### "Migrate to Cloud Composer\_3 from Cloud Composer\_1 (Airflow 2) \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Composer loads configuration overrides, environment variables, and PyPI packages from your Cloud Composer 1 environment's snapshot to Cloud Composer 3 without changing or adjusting them for compatibility.
- Note: Cloud Composer loads configuration overrides, environment variables, and PyPI packages from your Cloud Composer 1 environment to Cloud Composer 3 without changing or adjusting them for compatibility.
- Make sure that your DAGs are compatible with Cloud Composer 3 Make sure that your DAGs are compatible with Cloud Composer 3 by following these suggestions: The [list of packages][cc-versions] in the Cloud Composer 3 environment can be different than in your Cloud Composer 1 environment.
- Monitor your Cloud Composer 3 environment After you transfer all DAGs and configuration to the Cloud Composer 3 environment, monitor it for potential issues, failed DAG runs, and overall environment health.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --env-variables SENDGRID MAIL FROM = user@example.com,SENDGRID API KEY = example-key \ --airflow-configs core-dags are paused at creation = True,webserver-dag orientation = TB API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment variables and Airflow configuration overrides. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "softwareConfig" : { "airflowConfigOverrides" : { " SECTION - KEY " : " OVERRIDE VALUE " }, "envVariables" : { " VAR NAME " : " VAR VALUE " , } }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SECTION with the section in the configuration file where the Airflow configuration option is located.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "imageVersion" : "composer-1.20.12-airflow-1.10.15" }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform To create an environment with default parameters is a specified location, add the following resource block to your Terraform configuration and run terraform apply . resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { image version = " IMAGE VERSION " } node config { service account = " SERVICE ACCOUNT " } } } Important: You must specify an image version for Cloud Composer 1.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "airflowConfigOverrides" : { "core-dags are paused at creation" : "True" , "webserver-dag orientation" : "TB" }, "envVariables" : { "SENDGRID MAIL FROM" : "user@example.com" , "SENDGRID API KEY" : "example-key" } }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, following blocks control environment variables and Airflow configuration overrides: env variables block in the software config block specifies environment variables.
- Variable names may contain upper and lowercase letters, digits, and underscores, but they may not begin with a digit. airflow config overrides block in the software config block specifies Airflow configuration overrides. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { airflow config overrides = { SECTION - KEY = " OVERRIDE VALUE " } env variables = { VAR NAME = " VAR VALUE " } } node config { service account = " SERVICE ACCOUNT " } } } Replace: SECTION with the section in the configuration file where the Airflow configuration option is located.

