---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.906Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Airflow web server restart command"
feature_slug: "cloud-composer-airflow-web-server-restart-command"
latest_feature_date: "2021-01-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
keywords:
  - "composer"
  - "airflow"
  - "web"
  - "server"
  - "restart"
  - "command"
  - "added"
  - "preview"
---

# Cloud Composer Airflow web server restart command

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer added a preview command/API option to restart the Airflow web server.

## Extended Definition

Cloud Composer added a preview command/API option to restart the Airflow web server.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)

## Supporting Pages

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- You can restart the web server using the restartWebServer API or the restart-web-server command in Google Cloud CLI: gcloud composer environments restart-web-server ENVIRONMENT NAME \ --location = LOCATION Replace the following: ENVIRONMENT NAME : the name of your environment.
- Restart the web server When debugging or troubleshooting Cloud Composer environments, some issues may be resolved by restarting the Airflow web server.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Change (Airflow 1.10.15) Upgraded apache-beam and google provider packages to version 2022.6.1: Support impersonation chain parameter for Dataflow runner in Apache Beam operators Added missing project id parameter for wait for job method in the Dataflow operators Added key secret project id parameter which specifies a project with KeyFile Change Cloud Composer 1.18.12 and 2.0.16 images are available: composer-1.18.12-airflow-1.10.15 (default) composer-1.18.12-airflow-2.1.4 composer-1.18.12-airflow-2.2.5 composer-2.0.16-airflow-2.1.4 composer-2.0.16-airflow-2.2.5 June 01, 2022 Feature Web server restarting is available in Preview in Cloud Composer 2.
- January 13, 2021 Feature Preview: You can now restart the Airflow web server using the command gcloud beta composer environments restart-web-server or the Beta API .
- Change Cloud Composer 1.17.7 and 2.0.0-preview.7 images are available: composer-1.17.7-airflow-1.10.15 (default) composer-1.17.7-airflow-2.0.2 composer-1.17.7-airflow-2.1.4 composer-2.0.0-preview.7-airflow-2.0.2 composer-2.0.0-preview.7-airflow-2.1.4 December 01, 2021 Change (Available without upgrading) Web server network access control settings can now be configured in Cloud Composer 2 environments.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.4 (default) composer-3-airflow-2.9.3-build.24 Change New images are available in Cloud Composer 2: composer-2.13.2-airflow-2.10.5 (default) composer-2.13.2-airflow-2.9.3 May 14, 2025 Feature It is now possible to restart the Airflow web server through Cloud Composer API by using the RestartWebServer method .

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- To preregister a user with a custom role through Google Cloud CLI, run the following Airflow CLI command : gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users create -- \ -r ROLE \ -e USER EMAIL \ -u USER EMAIL \ -f FIRST NAME \ -l LAST NAME \ --use-random-password # The password value is required, but is not used Replace the following: ENVIRONMENT NAME : the name of the environment LOCATION : the region where the environment is located ROLE : an Airflow role for the user, for example, Op USER EMAIL : the user's email address FIRST NAME and LAST NAME : user's first name and last name Example: gcloud composer environments run example-environment \ --location us-central1 \ users create -- \ -r Op \ -e "example-user@example.com" \ -u "example-user@example.com" \ -f "Name" \ -l "Surname" \ --use-random-password Remove users Deleting a user from Airflow does not revoke access for that user, because they are automatically registered again next time they access the Airflow UI.
- In Airflow 2 and 3, override the following Airflow configuration option: Section Key Value webserver rbac user registration role UserNoDags In Airflow 1, override the following Airflow configuration option: Section Key Value webserver rbac user registration role NoDags Make sure that users are registered in Airflow .
- Auto-assign DAGs to per-folder roles To auto-assign DAGs to per-folder roles: Override the following Airflow configuration option: Section Key Value webserver rbac autoregister per folder roles True Change the new user registration role to a role without access to any DAGs.
- To assign the Admin role, run the following Airflow CLI command with gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users add-role -- -e USER EMAIL -r Admin Replace: ENVIRONMENT NAME with the name of the environment.

