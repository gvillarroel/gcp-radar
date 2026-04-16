---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.706Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Stable Airflow REST API"
feature_slug: "stable-airflow-rest-api"
latest_feature_date: "2021-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
keywords:
  - "enables"
  - "rest"
  - "stable"
  - "default"
  - "supports"
  - "airflow"
---

# Stable Airflow REST API

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer for Airflow 2 supports the stable Airflow REST API and enables it by default.

## Extended Definition

Cloud Composer for Airflow 2 supports the stable Airflow REST API and enables it by default.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)

## Supporting Pages

### Access the Airflow REST API \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can enable or disable the stable REST API, or change the default user role by overriding the following Airflow configuration options: Section Key Value Notes api (Airflow 2.2.5 and earlier) auth backend (Airflow 2.3.0 and later) auth backends airflow.composer.api.backend.composer auth To disable the stable REST API, change to airflow.api.auth.backend.deny all api composer auth user registration role Op You can specify any other role .
- Configure the stable Airflow REST API Airflow 2 The stable REST API is enabled by default in Airflow 2.
- Returns: The page body, or raises an exception if the page couldn't be retrieved. """ Set the default timeout, if missing if "timeout" not in kwargs : kwargs [ "timeout" ] = 90 Obtain an OpenID Connect (OIDC) token from metadata server or using service account. google open id connect token = id token . fetch id token ( Request (), client id ) Fetch the Identity-Aware Proxy-protected URL, including an Authorization header containing "Bearer " followed by a Google-issued OpenID Connect token for the service account. resp = requests . request ( method , url , headers = { "Authorization" : "Bearer {} " . format ( google open id connect token )}, kwargs , ) if resp . status code == 403 : raise Exception ( "Service account does not have permission to " "access the IAP-protected application." ) elif resp . status code != 200 : raise Exception ( "Bad response from application: {!r} / {!r} / {!r} " . format ( resp . status code , resp . headers , resp . text ) ) else : return resp . text END COPIED IAP CODE Access Airflow REST API using a service account Note: If your environment uses Airflow 1, then this section only applies if Airflow UI Access Control is enabled in your environment.
- Use the default configuration option which is All IP addresses have access (default) if you are not sure from which IP addresses your calls to Airflow REST API will be sent.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "imageVersion" : "composer-1.20.12-airflow-1.10.15" }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform To create an environment with default parameters is a specified location, add the following resource block to your Terraform configuration and run terraform apply . resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { image version = " IMAGE VERSION " } node config { service account = " SERVICE ACCOUNT " } } } Important: You must specify an image version for Cloud Composer 1.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { software config { airflow config overrides = { core-dags are paused at creation = "True" webserver-dag orientation = "TB" } env variables = { SENDGRID MAIL FROM = "user@example.com" SENDGRID API KEY = "example-key" } } node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 8. (Optional) Specify maintenance windows By default, Cloud Composer 1 environments do not have defined maintenance windows if you create them using Google Cloud console, API, or Terraform.
- The default web server machine type is composer-n1-webserver-2 . gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " SERVICE ACCOUNT " \ --zone NODE ZONE \ --node-count NODE COUNT \ --scheduler-count SCHEDULER COUNT \ --disk-size DISK SIZE \ --machine-type NODE MACHINE TYPE \ --cloud-sql-machine-type SQL MACHINE TYPE \ --web-server-machine-type WS MACHINE TYPE Replace: NODE COUNT with the number of nodes.
- If you omit a parameter, the default value is used. --enable-private-environment enables a Private IP environment. --enable-ip-alias enables VPC Native using alias IP addresses.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "imageVersion" : "composer-3-airflow-2.10.5-build.33" }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform To create an environment with default parameters is a specified location, add the following resource block to your Terraform configuration and run terraform apply . resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { image version = " IMAGE VERSION " } node config { service account = " SERVICE ACCOUNT " } } } Important: You must specify an image version for Cloud Composer 3.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { software config { airflow config overrides = { core-dags are paused at creation = "True" webserver-dag orientation = "TB" } env variables = { SENDGRID MAIL FROM = "user@example.com" SENDGRID API KEY = "example-key" } } node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 10. (Optional) Specify maintenance windows Default maintenance windows in Cloud Composer 3 are defined in the following way: All times are in the local time zone of the region where your environment is located, but with daylight saving time ignored.
- Note: If you omit an argument, Cloud Composer uses the default value. --environment-size specifies the environment size. --scheduler-count specifies the number of schedulers. --scheduler-cpu specifies the number of CPUs for an Airflow scheduler. --scheduler-memory specifies the amount of memory for an Airflow scheduler. --scheduler-storage specifies the amount of disk space for an Airflow scheduler. --triggerer-count specifies the number of Airflow triggerers in your environment.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --disable-cloud-data-lineage-integration Step 12. (Optional) Configure data encryption (CMEK) By default, data in your environment is encrypted with a key provided by Google.

