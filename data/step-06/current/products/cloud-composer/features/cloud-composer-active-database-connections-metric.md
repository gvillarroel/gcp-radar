---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.554Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer active database connections metric"
feature_slug: "cloud-composer-active-database-connections-metric"
latest_feature_date: "2022-05-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
keywords:
  - "composer"
  - "active"
  - "database"
  - "connections"
  - "metric"
  - "now"
  - "provides"
  - "for"
---

# Cloud Composer active database connections metric

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer now provides a database metric for the number of active database connections.

## Extended Definition

Cloud Composer now provides a database metric for the number of active database connections.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- May 26, 2025 Feature (Cloud Composer 3) New metrics that show the number of active Airflow components are now available for Cloud Composer 3 environments: The number of active schedulers The number of active DAG processors The number of active triggerers The number of active web servers Fixed (Cloud Composer 3) It's now possible to override the default scopes of access tokens in all regions supported by Cloud Composer 3.
- Feature Added new database metrics : a metric that shows the total limit of database connections, and a metric for the number of active database connections.
- Feature Composer now uses the Kubernetes v1 API, and is compatible with GKE 1.16 An updated haproxy configuration for Composer increases the maximum number of connections to 2000, and changes load balancing to be based on the number of connections.
- Feature The following Composer environment database metrics are now available in Cloud Monitoring: CPU usage, CPU cores, CPU utilization, memory usage, memory quota, memory utilization, disk usage, disk quota, disk utilization.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- The command-line interface is the recommended approach for deleting the connection: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ connections delete -- \ CONNECTION ID After deleting the connection, recreate it using the Airflow UI , ensuring that the fields you intend to leave empty are indeed left blank.
- While it's possible to force the database to reclaim unused disk space, this is a resource hungry operation which additionally locks the database making Cloud Composer unavailable.
- Some earlier Cloud Composer 1 environments (1.16.3 or earlier) created before August 12, 2021 might experience transient issues related to communication to the Airflow database.
- Intermittent issues when communicating to the environment's database This known issue applies only to Cloud Composer 1.

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Access the monitoring dashboard The monitoring dashboard contains metrics and charts for monitoring trends in the DAG runs in your environment, and identifing issues with Airflow components and Cloud Composer resources.
- This metric decreases when the Airflow metadata database size is reduced (for example, after the Airflow database maintenance ) and determines if it's possible to create snapshots and upgrade environments.
- For a metric that shows the size of the contents of the Airflow database, see Airflow metadata database size.
- Database connections The total number of active connections to the database, and the total connections limit.

