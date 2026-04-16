---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.565Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Google Ads API v8 support"
feature_slug: "google-ads-api-v8-support"
latest_feature_date: "2022-05-26"
deprecation_date: "2022-05-26"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
keywords:
  - "depend"
  - "environments"
  - "dags"
---

# Google Ads API v8 support

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer environments can run DAGs that depend on Google Ads API v8 through older google-ads package versions; Cloud Composer environments can run DAGs that depend on Google Ads API v8 through older google-ads package versions; deprecated on 2022-05-26.

## Extended Definition

Cloud Composer environments can run DAGs that depend on Google Ads API v8 through older google-ads package versions; Cloud Composer environments can run DAGs that depend on Google Ads API v8 through older google-ads package versions; deprecated on 2022-05-26.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --env-variables SENDGRID MAIL FROM = user@example.com,SENDGRID API KEY = example-key \ --airflow-configs core-dags are paused at creation = True,webserver-dag orientation = TB API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment variables and Airflow configuration overrides. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "softwareConfig" : { "airflowConfigOverrides" : { " SECTION - KEY " : " OVERRIDE VALUE " }, "envVariables" : { " VAR NAME " : " VAR VALUE " , } }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SECTION with the section in the configuration file where the Airflow configuration option is located.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "airflowConfigOverrides" : { "core-dags are paused at creation" : "True" , "webserver-dag orientation" : "TB" }, "envVariables" : { "SENDGRID MAIL FROM" : "user@example.com" , "SENDGRID API KEY" : "example-key" } }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, following blocks control environment variables and Airflow configuration overrides: env variables block in the software config block specifies environment variables.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" labels = { owner = "engineering-team" env = "production" } } What's next Troubleshooting environment creation Configuring Shared VPC Configuring VPC Service Controls Adding and updating DAGs Accessing Airflow UI Updating and deleting environments About Cloud Composer versions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The actual scheduler performance depends on the number of Airflow workers, the number of DAGs and tasks that run in your environment, and the configuration of both Airflow and the environment.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --env-variables SENDGRID MAIL FROM = user@example.com,SENDGRID API KEY = example-key \ --airflow-configs core-dags are paused at creation = True,webserver-dag orientation = TB API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment variables and Airflow configuration overrides. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "softwareConfig" : { "airflowConfigOverrides" : { " SECTION - KEY " : " OVERRIDE VALUE " }, "envVariables" : { " VAR NAME " : " VAR VALUE " , } }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SECTION with the section in the configuration file where the Airflow configuration option is located.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "airflowConfigOverrides" : { "core-dags are paused at creation" : "True" , "webserver-dag orientation" : "TB" }, "envVariables" : { "SENDGRID MAIL FROM" : "user@example.com" , "SENDGRID API KEY" : "example-key" } }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, following blocks control environment variables and Airflow configuration overrides: env variables block in the software config block specifies environment variables.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { software config { airflow config overrides = { core-dags are paused at creation = "True" webserver-dag orientation = "TB" } env variables = { SENDGRID MAIL FROM = "user@example.com" SENDGRID API KEY = "example-key" } } node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 8. (Optional) Specify maintenance windows By default, Cloud Composer 1 environments do not have defined maintenance windows if you create them using Google Cloud console, API, or Terraform.
- What's next Troubleshooting environment creation Configuring Shared VPC Configuring VPC Service Controls Adding and updating DAGs Accessing Airflow UI Updating and deleting environments About Cloud Composer versions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, the dependency is coin module.py : dags/ use local deps.py # A DAG file. dependencies/ init .py coin module.py Import the dependency from the DAG definition file.
- Install a local Python library To install an in-house or local Python library: Place the dependencies within a subdirectory in the dags/ folder in your environment's bucket.
- To install Python dependencies for a private IP environment inside a perimeter, follow the guidance for private IP environments without internet access .
- Install packages in private IP environments Depending on how you configure your project, your environment might not have access to the public internet.

