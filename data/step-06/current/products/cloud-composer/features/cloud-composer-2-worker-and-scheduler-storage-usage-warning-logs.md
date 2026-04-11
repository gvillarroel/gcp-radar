---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.591Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 2 worker and scheduler storage usage warning logs"
feature_slug: "cloud-composer-2-worker-and-scheduler-storage-usage-warning-logs"
latest_feature_date: "2022-05-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
keywords:
  - "composer"
  - "worker"
  - "and"
  - "scheduler"
  - "storage"
  - "usage"
  - "warning"
  - "logs"
---

# Cloud Composer 2 worker and scheduler storage usage warning logs

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer 2 workers and schedulers now emit warning logs when storage usage approaches the limit.

## Extended Definition

Cloud Composer 2 workers and schedulers now emit warning logs when storage usage approaches the limit.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage](https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Feature (Cloud Composer 2) Workers and schedulers generate a warning log message when storage usage is close to the limit.
- It comes with a number of new features and characteristics: All infrastructure hidden in a tenant project Evergreen versioning Simplified networking configuration Improved performance More reliable DAG parsing and scheduling as DAG Processor and Schedulers are now separate components 10 times bigger storage for Airflow workers As well as most functionalities already known from the previous Composer versions.
- Change New images are available in Cloud Composer 2: composer-2.14.2-airflow-2.10.5 (default) composer-2.14.2-airflow-2.9.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.14 (default) composer-3-airflow-2.9.3-build.34 Fixed Fixed Airflow logs not exporting to Cloud Logging because of a GKE version mismatch between Airflow worker and GKE Control plane nodes.
- Change Cloud Composer 2.1.14 and 1.20.12 images are available: composer-2.1.14-airflow-2.5.1 composer-2.1.14-airflow-2.4.3 (default) composer-2.1.14-airflow-2.3.4 composer-1.20.12-airflow-2.4.3 composer-1.20.12-airflow-2.3.4 composer-1.20.12-airflow-1.10.15 April 18, 2023 Feature Java Runtime in Airflow workers and schedulers is updated from version 11 to version 17 .

### Data stored in Cloud Storage \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage](https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Saving too much data in dags/ and plugins/ can disrupt your operations and lead to issues such as: A worker or a scheduler runs out of local storage and is evicted because of insufficient space on the local disk of the component.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Data stored in Cloud Storage Stay organized with collections Save and categorize content based on your preferences.
- Notice that local storage usage can also temporarily go up if you have concurrent tasks that download the same file to a single Airflow worker.
- When you create an environment, Cloud Composer creates a Cloud Storage bucket and associates the bucket with your environment.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Airflow workers or schedulers might experience issues when accessing the environment's Cloud Storage bucket Cloud Composer uses gcsfuse to access the /data folder in the environment's bucket and to save Airflow task logs to the /logs directory (if enabled).
- Airflow 1.9.0 stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06/1.log Airflow 1.10.x stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log As a result, if you upgrade from Airflow 1.9.0 to Airflow 1.10.x and would like to read the log for a task executed with Airflow 1.9.0, the Airflow Web server will show the following error message: Unable to read remote log from BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Workaround: Rename the logs generated by Airflow 1.9.0 in the Cloud Storage bucket using the format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Cannot create Cloud Composer environments with the organization policy constraints/compute.disableSerialPortLogging enforced Cloud Composer environment creation fails if the constraints/compute.disableSerialPortLogging organization policy is enforced on the target project.
- Such entities are eventually removed from local storages of Airflow schedulers and workers when these components are restarted (for example, as a result of scaling down or maintenance operations in your environment's cluster).
- However, the logs don't explain the cause of task failure and the Airflow worker and Airflow scheduler looked relatively healthy.

