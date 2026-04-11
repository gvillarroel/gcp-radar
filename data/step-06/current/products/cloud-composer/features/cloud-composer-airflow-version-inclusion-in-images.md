---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.351Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Airflow version inclusion in images"
feature_slug: "cloud-composer-airflow-version-inclusion-in-images"
latest_feature_date: "2023-03-18"
deprecation_date: "2023-03-18"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
keywords:
  - "composer"
  - "airflow"
  - "version"
  - "inclusion"
  - "in"
  - "images"
  - "no"
  - "longer"
---

# Cloud Composer Airflow version inclusion in images

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer images no longer include Airflow 2.2.5; deprecated on 2023-03-18.

## Extended Definition

Cloud Composer images no longer include Airflow 2.2.5; deprecated on 2023-03-18.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-3.1.7-build.2 composer-3-airflow-2.10.5-build.31 (default) composer-3-airflow-2.9.3-build.51 Change New images are available in Cloud Composer 2: composer-2.16.8-airflow-2.10.5 (default) composer-2.16.8-airflow-2.9.3 March 17, 2026 Change (Airflow 3.1.7) Starting from version composer-3-airflow-3.1.7-build.1, Airflow workers no longer have direct access to the Airflow database of your environment.
- Change Cloud Composer 1.18.8 and 2.0.12 images are available: composer-1.18.8-airflow-1.10.15 (default) composer-1.18.8-airflow-2.1.4 composer-1.18.8-airflow-2.2.3 composer-2.0.12-airflow-2.1.4 composer-2.0.12-airflow-2.2.3 May 10, 2022 Deprecated The following deprecated operators are no longer actively maintained and will be removed in one of the future versions of operators for Airflow 2.
- Change New versions of Cloud Composer images: composer-1.17.0-airflow-2.1.2 composer-1.17.0-airflow-2.0.2 composer-1.17.0-airflow-1.10.15 (default) composer-1.17.0-airflow-1.10.14 composer-1.17.0-airflow-1.10.12 composer-2.0.0-preview.1-airflow-2.1.2 composer-2.0.0-preview.1-airflow-2.0.2 Deprecated Airflow 2.1.1 is no longer included in Cloud Composer images.
- April 29, 2021 Change New versions of Cloud Composer images: composer-1.16.3-airflow-1.10.15 composer-1.16.3-airflow-1.10.14 (default) composer-1.16.3-airflow-1.10.12 Fixed When Airflow configuration is updated, an erroneous log message about a web server update failure no longer appears in logs.

### "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- For example, to trigger a DAG named sample quickstart with the ID 5077 in your Cloud Composer environment: Airflow 2 gcloud composer environments run example-environment \ --location us-central1 dags trigger -- sample quickstart \ --run-id = 5077 Airflow 1 gcloud composer environments run example-environment \ --location us-central1 trigger dag -- sample quickstart \ --run id = 5077 What's next Access Airflow UI Access control (Airflow CLI) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Triggering DAGs through Google Cloud CLI might cause your environment to reach the quota limit, and as a result, Airflow CLI commands will no longer be executed.
- Run Airflow CLI commands with gcloud CLI To run Airflow CLI commands in your environments, use gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ SUBCOMMAND \ -- SUBCOMMAND ARGUMENTS Replace the following: ENVIRONMENT NAME : the name of your environment.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow has a command-line interface (CLI) that you can use to perform tasks such as triggering and managing DAGs, getting information about DAG runs and tasks, adding and deleting connections and users.

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- To ensure that web server remains accessible regardless of DAG load time, you can configure asynchronous DAG loading to parse and load DAGs in the background at a pre-configured interval (available in composer-1.7.1-airflow-1.10.2 and later versions).
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The Airflow UI Access Control (Airflow Role-Based Access Control) feature for the Airflow UI is supported for Cloud Composer environments running Composer version 1.13.4 or later, Airflow version 1.10.10 or later, and Python 3.

