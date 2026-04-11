---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.851Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow 2.0.2 in Cloud Composer images"
feature_slug: "airflow-2-0-2-in-cloud-composer-images"
latest_feature_date: "2021-07-14"
deprecation_date: "2022-02-15"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
keywords:
  - "airflow"
  - "in"
  - "composer"
  - "images"
  - "is"
  - "no"
  - "longer"
  - "included"
---

# Airflow 2.0.2 in Cloud Composer images

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Airflow 2.0.2 is no longer included in Cloud Composer images; Cloud Composer images now include Apache Airflow 2.0.2; deprecated on 2022-02-15.

## Extended Definition

Airflow 2.0.2 is no longer included in Cloud Composer images; Cloud Composer images now include Apache Airflow 2.0.2; deprecated on 2022-02-15.

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
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Change New versions of Cloud Composer images: composer-1.17.0-airflow-2.1.2 composer-1.17.0-airflow-2.0.2 composer-1.17.0-airflow-1.10.15 (default) composer-1.17.0-airflow-1.10.14 composer-1.17.0-airflow-1.10.12 composer-2.0.0-preview.1-airflow-2.1.2 composer-2.0.0-preview.1-airflow-2.0.2 Deprecated Airflow 2.1.1 is no longer included in Cloud Composer images.
- Change Cloud Composer 1.19.15 and 2.0.32 images are available: composer-1.19.15-airflow-1.10.15 (default) composer-1.19.15-airflow-2.1.4 composer-1.19.15-airflow-2.2.5 composer-1.19.15-airflow-2.3.4 composer-2.0.32-airflow-2.1.4 composer-2.0.32-airflow-2.2.5 composer-2.0.32-airflow-2.3.4 Deprecated Airflow 2.3.3 is no longer included in Cloud Composer images.
- Change Cloud Composer 2.1.10 and 1.20.10 images are available: composer-2.1.10-airflow-2.4.3 (default) composer-2.1.10-airflow-2.3.4 composer-1.20.10-airflow-1.10.15 composer-1.20.10-airflow-2.4.3 composer-1.20.10-airflow-2.3.4 Deprecated Airflow 2.2.5 is no longer included in Cloud Composer images.
- Change New versions of Cloud Composer images: composer-1.16.11-airflow-1.10.12 composer-1.16.11-airflow-1.10.14 composer-1.16.11-airflow-1.10.15 (default) composer-1.17.0-preview.7-airflow-2.0.2 Deprecated Airflow 2.0.1 is no longer included in Cloud Composer images.

### "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- Source ID: `site-iam-reference`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, to trigger a DAG named sample quickstart with the ID 5077 in your Cloud Composer environment: Airflow 2 gcloud composer environments run example-environment \ --location us-central1 dags trigger -- sample quickstart \ --run-id = 5077 Airflow 1 gcloud composer environments run example-environment \ --location us-central1 trigger dag -- sample quickstart \ --run id = 5077 What's next Access Airflow UI Access control (Airflow CLI) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you begin For executing Airflow CLI commands through Google Cloud CLI: Your Google Account must have permissions to use Google Cloud CLI with Cloud Composer and run Airflow CLI commands.
- Triggering DAGs through Google Cloud CLI might cause your environment to reach the quota limit, and as a result, Airflow CLI commands will no longer be executed.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To ensure that web server remains accessible regardless of DAG load time, you can configure asynchronous DAG loading to parse and load DAGs in the background at a pre-configured interval (available in composer-1.7.1-airflow-1.10.2 and later versions).
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow includes a web user interface called Airflow UI , which you can use to manage Airflow DAGs, view DAG run logs, monitor Airflow, and perform administrative actions.

