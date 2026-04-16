---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.442Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Deferrable Operators"
feature_slug: "deferrable-operators"
latest_feature_date: "2022-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
keywords:
  - "deferrable"
  - "asynchronous"
  - "execution"
  - "operators"
  - "supports"
  - "task"
---

# Deferrable Operators

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 2 supports Deferrable Operators for asynchronous task execution.

## Extended Definition

Cloud Composer 2 supports Deferrable Operators for asynchronous task execution.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- If you have at least one triggerer instance in your environment (or at least two in highly resilient environments), you can use deferrable operators in your DAGs .
- Parses DAG definition files, schedules DAG runs based on the schedule interval, and queues tasks for execution by Airflow workers.
- If you don't want to use deferrable operators in your DAGs , set the number of triggerers to zero.
- You need triggerers if you want to use deferrable operators in your DAGs .

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Tasks fail with OSError: [Errno 5] Input/output error in Cloud Logging and Task is in the 'running' state which is not a valid state for execution. in the task attempt log.
- If the scheduler gets the DAG file and schedules it to be executed by a worker, and if the worker does not have the DAG file yet, then the task execution fails.
- Intermittent Task Failure during scheduling in Cloud Composer The issue is seen in the Airflow scheduler for the task instance during the execution of a task.
- Note: the issue itself doesn't indicate any problem in the environment and it doesn't cause any actual failures in task execution.

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- For more information about deferred tasks, see Use deferrable operators Completed triggers The number of triggers completed in all triggerer pods.
- Parsing a DAG and scheduling tasks from a DAG for execution are two separate operations performed by the Airflow scheduler.
- This tab displays task execution times for the specified number of last DAG runs.
- DAG execution time is the sum of all task execution times for a DAG.

