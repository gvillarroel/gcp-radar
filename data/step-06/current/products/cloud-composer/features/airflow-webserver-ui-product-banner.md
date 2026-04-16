---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.882Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow webserver UI product banner"
feature_slug: "airflow-webserver-ui-product-banner"
latest_feature_date: "2018-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-2/override-airflow-configurations"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
keywords:
  - "airflow"
  - "webserver"
  - "ui"
  - "banner"
  - "displays"
  - "composer"
  - "branding"
  - "top"
---

# Airflow webserver UI product banner

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

The Airflow webserver UI displays Cloud Composer branding in the top-right banner.

## Extended Definition

The Airflow webserver UI displays Cloud Composer branding in the top-right banner.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-2/override-airflow-configurations](https://docs.cloud.google.com/composer/docs/composer-2/override-airflow-configurations)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)

## Supporting Pages

### "Override Airflow configuration options \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-2/override-airflow-configurations](https://docs.cloud.google.com/composer/docs/composer-2/override-airflow-configurations)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example overrides two specific Airflow configuration options: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.airflowConfigOverrides.webserver-dag default view, // config.softwareConfig.airflowConfigOverrides.webserver-dag orientation { "config" : { "softwareConfig" : { "airflowConfigOverrides" : { "webserver-dag default view" : "graph" , "webserver-dag orientation" : "RL" } } } } Terraform The airflow config overrides block in the software config block controls overrides of Airflow configuration options for your environment: resource "google composer environment" "example" { config { ...
- For example: Section Key Value webserver dag orientation RL gcloud Following arguments override Airflow configuration options for an existing environment: --update-airflow-configs adds or changes specified Airflow configuration overrides. --remove-airflow-configs removes specified Airflow configuration overrides. --clear-airflow-configs removes all Airflow configuration overrides. gcloud composer environments update ENVIRONMENT NAME \ --location LOCATION \ --update-airflow-configs = KEY = VALUE,KEY = VALUE,...
- For example: gcloud composer environments update example-environment \ --location us-central1 \ --update-airflow-configs = webserver-dag default view = graph,webserver-dag orientation = RL API To override Airflow configuration options for an existing environment: Construct an environments.patch API request.
- Other environment configuration parameters config { software config { airflow config overrides = { webserver-dag default view = "graph" webserver-dag orientation = "RL" } } } } What's next Blocked Airflow configurations Update environments Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The webServerNetworkAccessControl element must be present, but must not contain an allowedIpRanges element. { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : " WS IP RANGE " , "description" : " WS RANGE DESCRIPTION " } ] } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- You can restart the web server using the restartWebServer API or the restart-web-server command in Google Cloud CLI: gcloud composer environments restart-web-server ENVIRONMENT NAME \ --location = LOCATION Replace the following: ENVIRONMENT NAME : the name of your environment.

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- To preregister a user with a custom role through Google Cloud CLI, run the following Airflow CLI command : gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users create -- \ -r ROLE \ -e USER EMAIL \ -u USER EMAIL \ -f FIRST NAME \ -l LAST NAME \ --use-random-password # The password value is required, but is not used Replace the following: ENVIRONMENT NAME : the name of the environment LOCATION : the region where the environment is located ROLE : an Airflow role for the user, for example, Op USER EMAIL : the user's email address FIRST NAME and LAST NAME : user's first name and last name Example: gcloud composer environments run example-environment \ --location us-central1 \ users create -- \ -r Op \ -e "example-user@example.com" \ -u "example-user@example.com" \ -f "Name" \ -l "Surname" \ --use-random-password Remove users Deleting a user from Airflow does not revoke access for that user, because they are automatically registered again next time they access the Airflow UI.
- In Airflow 2 and 3, override the following Airflow configuration option: Section Key Value webserver rbac user registration role UserNoDags In Airflow 1, override the following Airflow configuration option: Section Key Value webserver rbac user registration role NoDags Make sure that users are registered in Airflow .
- What's next Override Airflow configuration options Security overview Cloud Composer access control Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Auto-assign DAGs to per-folder roles To auto-assign DAGs to per-folder roles: Override the following Airflow configuration option: Section Key Value webserver rbac autoregister per folder roles True Change the new user registration role to a role without access to any DAGs.

