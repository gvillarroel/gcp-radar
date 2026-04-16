---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.592Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Database max_connections increase"
feature_slug: "database-max-connections-increase"
latest_feature_date: "2022-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database"
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
keywords:
  - "database"
  - "max"
  - "connections"
  - "increase"
  - "composer"
  - "airflow"
  - "increases"
  - "limits"
---

# Database max_connections increase

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer for Airflow 2 increases database max_connections limits to three times the default Cloud SQL values.

## Extended Definition

Cloud Composer for Airflow 2 increases database max_connections limits to three times the default Cloud SQL values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)
- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)

## Supporting Pages

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you observe that the Airflow metadata database size metric increases significantly between runs of the maintenance DAG, consider running this DAG more often.
- Run the DB maintenance DAG on a schedule You can use the maintenance DAG to prune the content of your environment's Airflow database: Run the maintenance DAG periodically to keep the database size within limits.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Clean up the Airflow database Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page explains how to maintain the Airflow database in your environment.

### Access the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: gcloud composer environments snapshots save \ example-environment \ --location us-central1 \ --snapshot-location "gs://example-bucket/environment snapshots" Example result: Response: '@type': type.googleapis.com/google.cloud.orchestration.airflow.service.v1.SaveSnapshotResponse snapshotPath: gs://example-bucket/environment snapshots/example-environment us-central1 2026-03-17T11-26-24 Prepare the destination database If you don't have a Cloud SQL instance, create one.
- Example: gcloud sql instances create example-instance \ --database-version = POSTGRES 15 \ --cpu = 2 \ --memory = 4GB \ --storage-size = 100GB \ --storage-auto-increase \ --region = us-central1 \ --root-password = example password Run the following command to create a database named airflow db : gcloud sql databases create airflow db \ --instance = SQL INSTANCE NAME Replace the following: SQL INSTANCE NAME : name of the Cloud SQL instance.
- You can use this approach in all versions of Airflow supported by Cloud Composer 3, including Airflow 3 versions later than 3.1.7 where direct access to the Airflow database is no longer possible.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Access the Airflow database Stay organized with collections Save and categorize content based on your preferences.

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Access the monitoring dashboard The monitoring dashboard contains metrics and charts for monitoring trends in the DAG runs in your environment, and identifing issues with Airflow components and Cloud Composer resources.
- This metric decreases when the Airflow metadata database size is reduced (for example, after the Airflow database maintenance ) and determines if it's possible to create snapshots and upgrade environments.
- This metric applies to the Airflow component of your environment and shows the amount of disk space taken by the Airflow metadata database on the Cloud SQL database instance.
- Environment overview Environment metric Description Environment health (Airflow monitoring DAG) A timeline showing the health of the Composer deployment.

