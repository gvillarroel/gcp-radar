---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.906Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Airflow RBAC web UI"
feature_slug: "cloud-composer-airflow-rbac-web-ui"
latest_feature_date: "2021-01-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
keywords:
  - "composer"
  - "airflow"
  - "rbac"
  - "web"
  - "ui"
  - "added"
  - "preview"
  - "for"
---

# Cloud Composer Airflow RBAC web UI

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer added preview support for the Airflow RBAC UI for Airflow 1.10.10+ with Python 3, enabled via the webserver rbac configuration override.

## Extended Definition

Cloud Composer added preview support for the Airflow RBAC UI for Airflow 1.10.10+ with Python 3, enabled via the webserver rbac configuration override.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)

## Supporting Pages

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Airflow 1 To enable the Airflow UI with Access Control, override the following Airflow configuration option: Section Key Value webserver rbac True You can do so for an existing environment, or when creating a new environment.
- Section Key Value webserver rbac user registration role User or other non-Admin role Admins can now configure Airflow UI access control for new users, including granting the Admin role to other users.
- To preregister a user with a custom role through Google Cloud CLI, run the following Airflow CLI command : gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users create -- \ -r ROLE \ -e USER EMAIL \ -u USER EMAIL \ -f FIRST NAME \ -l LAST NAME \ --use-random-password # The password value is required, but is not used Replace the following: ENVIRONMENT NAME : the name of the environment LOCATION : the region where the environment is located ROLE : an Airflow role for the user, for example, Op USER EMAIL : the user's email address FIRST NAME and LAST NAME : user's first name and last name Example: gcloud composer environments run example-environment \ --location us-central1 \ users create -- \ -r Op \ -e "example-user@example.com" \ -u "example-user@example.com" \ -f "Name" \ -l "Surname" \ --use-random-password Remove users Deleting a user from Airflow does not revoke access for that user, because they are automatically registered again next time they access the Airflow UI.
- Warning: When you revoke an IAM role that grants Airflow UI access to a user, the previously assigned permission might be cached in the web browser for up to 12 hours.

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow includes a web user interface called Airflow UI , which you can use to manage Airflow DAGs, view DAG run logs, monitor Airflow, and perform administrative actions.
- During the environment creation, Cloud Composer configures the URL for the web server that runs the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Change (Airflow 1.10.15) Upgraded apache-beam and google provider packages to version 2022.6.1: Support impersonation chain parameter for Dataflow runner in Apache Beam operators Added missing project id parameter for wait for job method in the Dataflow operators Added key secret project id parameter which specifies a project with KeyFile Change Cloud Composer 1.18.12 and 2.0.16 images are available: composer-1.18.12-airflow-1.10.15 (default) composer-1.18.12-airflow-2.1.4 composer-1.18.12-airflow-2.2.5 composer-2.0.16-airflow-2.1.4 composer-2.0.16-airflow-2.2.5 June 01, 2022 Feature Web server restarting is available in Preview in Cloud Composer 2.
- Feature Preview: Added support for the Airflow Role-Based Access Control (RBAC) UI for Airflow version 1.10.10 or newer and Python 3.
- Change New versions of Cloud Composer images: composer-1.16.10-airflow-1.10.15 (default) composer-1.16.10-airflow-1.10.14 composer-1.16.10-airflow-1.10.12 composer-1.17.0-preview.6-airflow-2.0.1 composer-1.17.0-preview.6-airflow-2.0.2 July 08, 2021 Change New versions of Cloud Composer images: composer-1.17.0-preview.5-airflow-2.0.1 composer-1.16.9-airflow-1.10.15 (default) composer-1.16.9-airflow-1.10.14 composer-1.16.9-airflow-1.10.12 Fixed When PyPI modules installation fails with certain error types in VPC SC environments, an additional attempt to perform the environment update operation is made using an in-cluster build.
- Change New versions of Cloud Composer images: composer-1.16.12-airflow-1.10.12 composer-1.16.12-airflow-1.10.14 composer-1.16.12-airflow-1.10.15 (default) composer-1.17.0-preview.8-airflow-2.0.2 composer-1.17.0-preview.8-airflow-2.1.1 Fixed (Available without upgrading) The Require OS Login (compute.requireOsLogin) organization policy constraint is now checked before an environment is created.

