---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.708Z"
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
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
keywords:
  - "stable"
  - "airflow"
  - "rest"
  - "composer"
  - "supports"
  - "enables"
  - "default"
---

# Stable Airflow REST API

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer for Airflow 2 supports the stable Airflow REST API and enables it by default.

## Extended Definition

Cloud Composer for Airflow 2 supports the stable Airflow REST API and enables it by default.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)

## Supporting Pages

### Access the Airflow REST API \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- Source ID: `site-iam-reference`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can enable or disable the stable REST API, or change the default user role by overriding the following Airflow configuration options: Section Key Value Notes api (Airflow 2.2.5 and earlier) auth backend (Airflow 2.3.0 and later) auth backends airflow.composer.api.backend.composer auth To disable the stable REST API, change to airflow.api.auth.backend.deny all api composer auth user registration role Op You can specify any other role .
- Configure the stable Airflow REST API Airflow 2 The stable REST API is enabled by default in Airflow 2.
- Returns: The page body, or raises an exception if the page couldn't be retrieved. """ Set the default timeout, if missing if "timeout" not in kwargs : kwargs [ "timeout" ] = 90 Obtain an OpenID Connect (OIDC) token from metadata server or using service account. google open id connect token = id token . fetch id token ( Request (), client id ) Fetch the Identity-Aware Proxy-protected URL, including an Authorization header containing "Bearer " followed by a Google-issued OpenID Connect token for the service account. resp = requests . request ( method , url , headers = { "Authorization" : "Bearer {} " . format ( google open id connect token )}, kwargs , ) if resp . status code == 403 : raise Exception ( "Service account does not have permission to " "access the IAP-protected application." ) elif resp . status code != 200 : raise Exception ( "Bad response from application: {!r} / {!r} / {!r} " . format ( resp . status code , resp . headers , resp . text ) ) else : return resp . text END COPIED IAP CODE Access Airflow REST API using a service account Note: If your environment uses Airflow 1, then this section only applies if Airflow UI Access Control is enabled in your environment.
- The USE EXPERIMENTAL API variable is already set to True . from google.auth.transport.requests import Request from google.oauth2 import id token import requests IAM SCOPE = "https://www.googleapis.com/auth/iam" OAUTH TOKEN URI = "https://www.googleapis.com/oauth2/v4/token" If you are using the stable API, set this value to False For more info about Airflow APIs see https://cloud.google.com/composer/docs/access-airflow-api USE EXPERIMENTAL API = True def trigger dag ( data , context = None ): """Makes a POST request to the Composer DAG Trigger API When called via Google Cloud Functions (GCF), data and context are Background function parameters.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "imageVersion" : "composer-1.20.12-airflow-1.10.15" }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform To create an environment with default parameters is a specified location, add the following resource block to your Terraform configuration and run terraform apply . resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { image version = " IMAGE VERSION " } node config { service account = " SERVICE ACCOUNT " } } } Important: You must specify an image version for Cloud Composer 1.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { software config { airflow config overrides = { core-dags are paused at creation = "True" webserver-dag orientation = "TB" } env variables = { SENDGRID MAIL FROM = "user@example.com" SENDGRID API KEY = "example-key" } } node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 8. (Optional) Specify maintenance windows By default, Cloud Composer 1 environments do not have defined maintenance windows if you create them using Google Cloud console, API, or Terraform.
- The default web server machine type is composer-n1-webserver-2 . gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " SERVICE ACCOUNT " \ --zone NODE ZONE \ --node-count NODE COUNT \ --scheduler-count SCHEDULER COUNT \ --disk-size DISK SIZE \ --machine-type NODE MACHINE TYPE \ --cloud-sql-machine-type SQL MACHINE TYPE \ --web-server-machine-type WS MACHINE TYPE Replace: NODE COUNT with the number of nodes.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --zone us-central1-a \ --node-count 6 \ --scheduler-count 1 \ --disk-size 50 \ --machine-type n1-standard-2 \ --cloud-sql-machine-type db-n1-standard-2 \ --web-server-machine-type composer-n1-webserver-2 API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "nodeCount" : NODE COUNT , "nodeConfig" : { "machineType" : " NODE MACHINE TYPE " , "diskSizeGb" : DISK SIZE , "serviceAccount" : " SERVICE ACCOUNT " }, "softwareConfig" : { "schedulerCount" : SCHEDULER COUNT }, "databaseConfig" : { "machineType" : " SQL MACHINE TYPE " }, "webServerConfig" : { "machineType" : " WS MACHINE TYPE " } } } Replace: NODE COUNT with the number of nodes.

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Restart the web server When debugging or troubleshooting Cloud Composer environments, some issues may be resolved by restarting the Airflow web server.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can restart the web server using the restartWebServer API or the restart-web-server command in Google Cloud CLI: gcloud composer environments restart-web-server ENVIRONMENT NAME \ --location = LOCATION Replace the following: ENVIRONMENT NAME : the name of your environment.

