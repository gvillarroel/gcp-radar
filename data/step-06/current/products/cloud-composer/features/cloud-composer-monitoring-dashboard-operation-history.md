---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.439Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Monitoring Dashboard operation history"
feature_slug: "cloud-composer-monitoring-dashboard-operation-history"
latest_feature_date: "2022-09-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
keywords:
  - "composer"
  - "monitoring"
  - "dashboard"
  - "operation"
  - "history"
  - "the"
  - "now"
  - "displays"
---

# Cloud Composer Monitoring Dashboard operation history

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

The Monitoring Dashboard now displays maintenance periods and other environment operations such as snapshots and configuration updates.

## Extended Definition

The Monitoring Dashboard now displays maintenance periods and other environment operations such as snapshots and configuration updates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)

## Supporting Pages

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Difference between DAG parse time and DAG execution time The monitoring dashboard of an environment displays the total time required to parse all DAGs in your Cloud Composer environment and the average time it takes to execute a DAG.
- Access the monitoring dashboard The monitoring dashboard contains metrics and charts for monitoring trends in the DAG runs in your environment, and identifing issues with Airflow components and Cloud Composer resources.
- Home Documentation Data analytics Cloud Composer Composer 3 Guides Send feedback Use the monitoring dashboard Stay organized with collections Save and categorize content based on your preferences.
- View a metric from the monitoring dashboard in Metrics explorer (click to enlarge) Metric descriptions Each Cloud Composer environment has its own monitoring dashboard.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Add the cloud-airflow-prod@system.gserviceaccount.com service account as the member of your security perimeter by using the following configuration in the YAML conditions file: - members : - serviceAccount:cloud-airflow-prod@ system.gserviceaccount.com Cloud Composer 1 environment creation fails when the compute.requireOsLogin policy is enabled If compute.requireOsLogin policy is set to true in your project, then Cloud Composer 1 v1 environment creation operations fails.
- Non-continuous DAG parse times and DAG bag size diagrams in monitoring Non-continuous DAG parse times and DAG bag size diagrams on the monitoring dashboard indicate problems with long DAG parse times (more than 5 minutes).
- While it's possible to force the database to reclaim unused disk space, this is a resource hungry operation which additionally locks the database making Cloud Composer unavailable.
- Intermittent issues when communicating to the environment's database This known issue applies only to Cloud Composer 1.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- September 21, 2022 Feature The Monitoring Dashboard of an environment now displays periods of maintenance operations and other environment operations such as creating snapshots and updating environment configuration.
- Feature (Cloud Composer 2) Airflow component metrics are now available on the Monitoring dashboard in the Google Cloud console.
- March 31, 2020 Feature The new Composer monitoring dashboard is now in beta.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.9.1-build.3 composer-3-airflow-2.7.3-build.12 Change Cloud Composer 2.9.0 images are available: composer-2.9.0-airflow-2.9.1 (default) composer-2.9.0-airflow-2.7.3 August 01, 2024 Announcement (Cloud Composer 3 only) The July 24th issue with Airflow upgrade operations for Cloud Composer 3 environments is now fixed.

