---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.047Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "High-availability scheduler in Cloud Composer"
feature_slug: "high-availability-scheduler-in-cloud-composer"
latest_feature_date: "2021-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization"
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-plugins"
keywords:
  - "high"
  - "availability"
  - "scheduler"
  - "in"
  - "composer"
  - "the"
  - "is"
  - "now"
---

# High-availability scheduler in Cloud Composer

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

The high-availability scheduler feature in Cloud Composer is now generally available.

## Extended Definition

The high-availability scheduler feature in Cloud Composer is now generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization](https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization)
- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)

## Supporting Pages

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 263
- Re-rank relevance: N/A

Evidence snippets:
- Airflow workers or schedulers might experience issues when accessing the environment's Cloud Storage bucket Cloud Composer uses gcsfuse to access the /data folder in the environment's bucket and to save Airflow task logs to the /logs directory (if enabled).
- In the meantime, if you believe that you are highly impacted by this issue you can do the following to mitigate it: In Google Cloud console, go to the Environment Configuration page of the impacted Cloud Composer environments.
- Intermittent Task Failure during scheduling in Cloud Composer The issue is seen in the Airflow scheduler for the task instance during the execution of a task.
- Intermittent issues when communicating to the environment's database This known issue applies only to Cloud Composer 1.

### "Enabling and disabling DAG serialization \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization](https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization)
- Source ID: `site-iam-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable DAG serialization, override the following Airflow configuration options: Section Key Value core store serialized dags True core store dag code True core min serialized dag update interval 30 scheduler dag dir list interval 30 The min serialized dag update interval Airflow configuration option controls how frequently serialized DAGs are updated in the database.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Follow the instructions on this page to enable or disable DAG serialization.
- In a Cloud Composer environment, both the Airflow scheduler and the Airflow web server continuously process DAGs.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-09 UTC."],[],[]]

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- What's next Monitor Cloud Composer environments Troubleshooting scheduling Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Difference between DAG parse time and DAG execution time The monitoring dashboard of an environment displays the total time required to parse all DAGs in your Cloud Composer environment and the average time it takes to execute a DAG.
- Access the monitoring dashboard The monitoring dashboard contains metrics and charts for monitoring trends in the DAG runs in your environment, and identifing issues with Airflow components and Cloud Composer resources.
- DAG parsing and task scheduling done by the Airflow scheduler (click to enlarge) DAG parse time is the amount of time it takes for the Airflow Scheduler to read a DAG file and parse it.

### Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- View the plugin files. gcloud Use the following gcloud command: gcloud composer environments storage plugins list \ --environment ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- For more information about deleting objects, see Deleting objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins delete \ --environment ENVIRONMENT NAME \ --location LOCATION \ PLUGIN TO DELETE Download plugins To download plugins, choose an option: Console In the Google Cloud console, go to the Environments page.
- For more information about deleting objects, see Downloading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins export \ --environment ENVIRONMENT NAME \ --location LOCATION \ --destination PATH TO LOCAL DESTINATION \ --source PATH IN FOLDER Replace: ENVIRONMENT NAME with the name of the environment.

