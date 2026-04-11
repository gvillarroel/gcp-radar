---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:47.893Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Airflow worker liveness checks"
feature_slug: "cloud-composer-airflow-worker-liveness-checks"
latest_feature_date: "2024-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3"
  - "https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage"
keywords:
  - "composer"
  - "airflow"
  - "worker"
  - "liveness"
  - "checks"
  - "improved"
  - "to"
  - "better"
---

# Cloud Composer Airflow worker liveness checks

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer improved Airflow worker liveness checks to better detect workers with unexpected idle task slots and improve environment stability.

## Extended Definition

Cloud Composer improved Airflow worker liveness checks to better detect workers with unexpected idle task slots and improve environment stability.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- [https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage](https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Feature Improved Airflow worker liveness checks to detect workers with unexpected idle task slots.
- It comes with a number of new features and characteristics: All infrastructure hidden in a tenant project Evergreen versioning Simplified networking configuration Improved performance More reliable DAG parsing and scheduling as DAG Processor and Schedulers are now separate components 10 times bigger storage for Airflow workers As well as most functionalities already known from the previous Composer versions.
- Change (Cloud Composer 2) Airflow worker liveness check configuration was changed to be consistent with the configuration used in Cloud Composer 3.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-3.1.7-build.2 composer-3-airflow-2.10.5-build.31 (default) composer-3-airflow-2.9.3-build.51 Change New images are available in Cloud Composer 2: composer-2.16.8-airflow-2.10.5 (default) composer-2.16.8-airflow-2.9.3 March 17, 2026 Change (Airflow 3.1.7) Starting from version composer-3-airflow-3.1.7-build.1, Airflow workers no longer have direct access to the Airflow database of your environment.

### "Migrate to Cloud Composer\_3 from Cloud Composer\_1 (Airflow 2) \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Other migration guides From To Method Guide Cloud Composer 2 Cloud Composer 3 Side-by-side, using the migration script Script migration guide Cloud Composer 2 Cloud Composer 3 Side-by-side, using snapshots Snapshots migration guide Cloud Composer 1, Airflow 2 Cloud Composer 3 Side-by-side, using snapshots This guide Cloud Composer 1, Airflow 2 Cloud Composer 2 Side-by-side, using snapshots Snapshots migration guide Cloud Composer 1, Airflow 2 Cloud Composer 2 Side-by-side, manual transfer Manual migration guide Cloud Composer 1, Airflow 1 Cloud Composer 2, Airflow 2 Side-by-side, using snapshots Snapshots migration guide Cloud Composer 1, Airflow 1 Cloud Composer 2, Airflow 2 Side-by-side, manual transfer Manual migration guide Cloud Composer 1, Airflow 1 Cloud Composer 1, Airflow 2 Side-by-side, manual transfer Manual migration guide Before you begin Cloud Composer supports side-by-side migration from Cloud Composer 1 to Cloud Composer 3.
- COMPOSER 3 LOCATION with the region where the environment is located. (Airflow versions 2.9.1 and later) If there are quota errors while unpausing a large number of DAGs, you can use the following Airflow CLI commands to unpause all DAGs at once: gcloud composer environments run COMPOSER 3 ENV dags unpause \ --project PROJECT ID \ --location COMPOSER 3 LOCATION \ -- -y --treat-dag-id-as-regex ". " (Airflow versions earlier than 2.9.1) If there are quota errors while unpausing a large number of DAGs, it's possible to unpause DAGs using the Airflow REST API .
- COMPOSER 1 LOCATION with the region where the environment is located. (Airflow versions 2.9.1 and later) If there are quota errors while pausing a large number of DAGs, you can use the following Airflow CLI commands to pause all DAGs at once: gcloud composer environments run COMPOSER 1 ENV dags pause \ --project PROJECT ID \ --location COMPOSER 1 LOCATION \ -- -y --treat-dag-id-as-regex ". " (Airflow versions earlier than 2.9.1) If there are quota errors while pausing a large number of DAGs, it's possible to pause DAGs using the Airflow REST API .
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Migrate to Cloud Composer 3 from Cloud Composer 1 (Airflow 2) Stay organized with collections Save and categorize content based on your preferences.

### Data stored in Cloud Storage \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage](https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DAG execution: When a file is read for the first time during DAG execution, Cloud Composer synchronizes it to the worker running the execution.
- Notice that local storage usage can also temporarily go up if you have concurrent tasks that download the same file to a single Airflow worker.
- Cloud Composer synchronizes specific folders in your environment's bucket to Airflow components that run in your environment.
- Capacity considerations Data from dags/ , plugins/ and data/ folders are synchronized to Airflow scheduler(s) and workers.

