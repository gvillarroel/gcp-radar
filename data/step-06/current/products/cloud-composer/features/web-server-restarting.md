---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:18.988Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Web server restarting"
feature_slug: "web-server-restarting"
latest_feature_date: "2025-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api"
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
keywords:
  - "web"
  - "server"
  - "restarting"
  - "lets"
  - "users"
  - "restart"
  - "airflow"
  - "composer"
---

# Web server restarting

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Web server restarting lets users restart the Airflow web server in Cloud Composer environments; Web server restarting lets users restart the Airflow web server in Cloud Composer environments.

## Extended Definition

Web server restarting lets users restart the Airflow web server in Cloud Composer environments; Web server restarting lets users restart the Airflow web server in Cloud Composer environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)

## Supporting Pages

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Restart the web server When debugging or troubleshooting Cloud Composer environments, some issues may be resolved by restarting the Airflow web server.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can restart the web server using the restartWebServer API or the restart-web-server command in Google Cloud CLI: gcloud composer environments restart-web-server ENVIRONMENT NAME \ --location = LOCATION Replace the following: ENVIRONMENT NAME : the name of your environment.

### Access the Airflow REST API \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- Source ID: `site-iam-reference`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AuthorizedSession ( credentials ) project id = 'YOUR PROJECT ID' location = 'us-central1' composer environment = 'YOUR COMPOSER ENVIRONMENT NAME' environment url = ( "https://composer.googleapis.com/v1beta1/projects/ {} /locations/ {} " "/environments/ {} " ) . format ( project id , location , composer environment ) composer response = authed session . request ( "GET" , environment url ) environment data = composer response . json () composer version = environment data [ "config" ][ "softwareConfig" ][ "imageVersion" ] if "composer-1" not in composer version : version error = ( "This script is intended to be used with Composer 1 environments. " "In Composer 2, the Airflow Webserver is not in the tenant project, " "so there is no tenant client ID. " "See https://cloud.google.com/composer/docs/composer-2/environment-architecture for more details." ) raise ( RuntimeError ( version error )) airflow uri = environment data [ "config" ][ "airflowUri" ] The Composer environment response does not include the IAP client ID.
- This script is intended to be used with Composer 1 environments In Composer 2, the Airflow Webserver is not in the tenant project so there is no tenant client ID See https://cloud.google.com/composer/docs/composer-2/environment-architecture for more details import google.auth import google.auth.transport.requests import requests import six.moves.urllib.parse Authenticate with Google Cloud.
- In Airflow 2, run the following Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users create -- \ -u accounts.google.com: NUMERIC USER ID \ -e UNIQUE ID \ -f UNIQUE ID \ -l - -r Op --use-random-password Replace: ENVIRONMENT NAME with the name of the environment.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow has a REST API interface that you can use to perform tasks such as getting information about DAG runs and tasks, updating DAGs, getting Airflow configuration, adding and deleting connections, and listing users.

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- To preregister a user with a custom role through Google Cloud CLI, run the following Airflow CLI command : gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users create -- \ -r ROLE \ -e USER EMAIL \ -u USER EMAIL \ -f FIRST NAME \ -l LAST NAME \ --use-random-password # The password value is required, but is not used Replace the following: ENVIRONMENT NAME : the name of the environment LOCATION : the region where the environment is located ROLE : an Airflow role for the user, for example, Op USER EMAIL : the user's email address FIRST NAME and LAST NAME : user's first name and last name Example: gcloud composer environments run example-environment \ --location us-central1 \ users create -- \ -r Op \ -e "example-user@example.com" \ -u "example-user@example.com" \ -f "Name" \ -l "Surname" \ --use-random-password Remove users Deleting a user from Airflow does not revoke access for that user, because they are automatically registered again next time they access the Airflow UI.
- In Airflow 2 and 3, override the following Airflow configuration option: Section Key Value webserver rbac user registration role UserNoDags In Airflow 1, override the following Airflow configuration option: Section Key Value webserver rbac user registration role NoDags Make sure that users are registered in Airflow .
- To assign the Admin role, run the following Airflow CLI command with gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users add-role -- -e USER EMAIL -r Admin Replace: ENVIRONMENT NAME with the name of the environment.
- Section Key Value webserver rbac user registration role User or other non-Admin role Admins can now configure Airflow UI access control for new users, including granting the Admin role to other users.

