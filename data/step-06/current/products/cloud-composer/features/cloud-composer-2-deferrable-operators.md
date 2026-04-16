---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:19.630Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 2 Deferrable Operators"
feature_slug: "cloud-composer-2-deferrable-operators"
latest_feature_date: "2022-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/backport-packages"
keywords:
  - "composer"
  - "deferrable"
  - "operators"
  - "now"
  - "makes"
  - "available"
  - "in"
  - "preview"
---

# Cloud Composer 2 Deferrable Operators

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 2 now makes Deferrable Operators available in Preview.

## Extended Definition

Cloud Composer 2 now makes Deferrable Operators available in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/backport-packages](https://docs.cloud.google.com/composer/docs/composer-1/backport-packages)

## Supporting Pages

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Support for Google Display and Video 360 Operators Google Display and Video 360 Operators in Cloud Composer versions earlier than 2.1.13 are based on the Display and Video 360 v1.1 API that is deprecated and its sunset date is April 27, 2023.
- Support for Google Campaign Manager 360 Operators Google Campaign Manager Operators in Cloud Composer versions earlier than 2.1.13 are based on the Campaign Manager 360 v3.5 API that is deprecated and its sunset date is May 1, 2023 .
- While it's possible to force the database to reclaim unused disk space, this is a resource hungry operation which additionally locks the database making Cloud Composer unavailable.
- Intermittent issues when communicating to the environment's database This known issue applies only to Cloud Composer 1.

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- For more information about deferred tasks, see Use deferrable operators Completed triggers The number of triggers completed in all triggerer pods.
- What's next Monitor Cloud Composer environments Troubleshooting scheduling Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Difference between DAG parse time and DAG execution time The monitoring dashboard of an environment displays the total time required to parse all DAGs in your Cloud Composer environment and the average time it takes to execute a DAG.
- Access the monitoring dashboard The monitoring dashboard contains metrics and charts for monitoring trends in the DAG runs in your environment, and identifing issues with Airflow components and Cloud Composer resources.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { workloads config { scheduler { cpu = 2.5 memory gb = 2.5 storage gb = 2 count = 1 } triggerer { count = 1 cpu = 0.5 memory gb = 0.5 } dag processor { cpu = 1 memory gb = 2 storage gb = 1 count = 1 } web server { cpu = 1 memory gb = 2.5 storage gb = 2 } worker { cpu = 1 memory gb = 2 storage gb = 2 min count = 2 max count = 4 } } environment size = "ENVIRONMENT SIZE SMALL" node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 4. (Optional) Enable high resilience mode Highly resilient (Highly Available) Cloud Composer environments are environments that use built-in redundancy and failover mechanisms that reduce the environment's susceptibility to zonal failures and single point of failure outages.
- In Cloud Composer 3, highly resilient environments are available starting from Airflow builds composer-3-airflow-2.10.2-build.13 and composer-3-airflow-2.9.3-build.20.
- If you have at least one triggerer instance in your environment (or at least two in highly resilient environments), you can use deferrable operators in your DAGs .
- If you don't want to use deferrable operators in your DAGs , set the number of triggerers to zero.

### "Import operators from backport provider packages \_|\_ Cloud Composer \_\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/backport-packages](https://docs.cloud.google.com/composer/docs/composer-1/backport-packages)
- Source ID: `site-iam-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- The following example imports moved operators from the apache-airflow-backport-providers-google package: from airflow.contrib.operators.bigquery operator import ( BigQueryCreateEmptyDatasetOperator , BigQueryOperator , ) What's next Writing DAGs Installing PyPI packages List of preinstalled packages in Cloud Composer images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To check which backport packages are available in your environment, see the list of packages in the Cloud Composer image for your environment.
- Important: Moved operators from backport packages are still available by their original paths in Airflow 1.10. .
- The following example imports new operators from the apache-airflow-backport-providers-google package: from airflow.providers.google.cloud.operators.bigquery dts import ( BigQueryCreateDataTransferOperator , BigQueryDeleteDataTransferConfigOperator , ) Import moved operators Moved operators are those that already exist in Airflow 1.10. .

