---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.762Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "High-availability scheduler in Cloud Composer"
feature_slug: "high-availability-scheduler-in-cloud-composer"
latest_feature_date: "2021-09-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
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
Coverage: LOW

## Step 02 Summary

The high-availability scheduler feature in Cloud Composer is now generally available.

## Extended Definition

The high-availability scheduler feature in Cloud Composer is now generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)

## Supporting Pages

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Airflow workers or schedulers might experience issues when accessing the environment's Cloud Storage bucket Cloud Composer uses gcsfuse to access the /data folder in the environment's bucket and to save Airflow task logs to the /logs directory (if enabled).
- In the meantime, if you believe that you are highly impacted by this issue you can do the following to mitigate it: In Google Cloud console, go to the Environment Configuration page of the impacted Cloud Composer environments.
- Intermittent Task Failure during scheduling in Cloud Composer The issue is seen in the Airflow scheduler for the task instance during the execution of a task.
- Intermittent issues when communicating to the environment's database This known issue applies only to Cloud Composer 1.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- It comes with a number of new features and characteristics: All infrastructure hidden in a tenant project Evergreen versioning Simplified networking configuration Improved performance More reliable DAG parsing and scheduling as DAG Processor and Schedulers are now separate components 10 times bigger storage for Airflow workers As well as most functionalities already known from the previous Composer versions.
- May 26, 2025 Feature (Cloud Composer 3) New metrics that show the number of active Airflow components are now available for Cloud Composer 3 environments: The number of active schedulers The number of active DAG processors The number of active triggerers The number of active web servers Fixed (Cloud Composer 3) It's now possible to override the default scopes of access tokens in all regions supported by Cloud Composer 3.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-3.1.7-build.0 composer-3-airflow-2.10.5-build.29 (default) composer-3-airflow-2.9.3-build.49 Change New images are available in Cloud Composer 2: composer-2.16.6-airflow-2.10.5 (default) composer-2.16.6-airflow-2.9.3 February 20, 2026 Feature Cloud Composer API now accepts the new https://www.googleapis.com/auth/cloudcomposer OAuth scope.
- For existing environments, the new default values will be used after an upgrade. [scheduler]job heartbeat sec to 30 [scheduler]scheduler health check threshold to 60 [scheduler]scheduler heartbeat sec to 15 If you want to override the [scheduler]scheduler heartbeat sec option's value, then also adjust the [scheduler]scheduler health check threshold option, as described in Cloud Composer documentation .

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Monitor Cloud Composer environments Troubleshooting scheduling Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Difference between DAG parse time and DAG execution time The monitoring dashboard of an environment displays the total time required to parse all DAGs in your Cloud Composer environment and the average time it takes to execute a DAG.
- Access the monitoring dashboard The monitoring dashboard contains metrics and charts for monitoring trends in the DAG runs in your environment, and identifing issues with Airflow components and Cloud Composer resources.
- DAG parsing and task scheduling done by the Airflow scheduler (click to enlarge) DAG parse time is the amount of time it takes for the Airflow Scheduler to read a DAG file and parse it.

