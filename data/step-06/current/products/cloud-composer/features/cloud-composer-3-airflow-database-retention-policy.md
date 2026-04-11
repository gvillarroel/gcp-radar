---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:47.836Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 3 Airflow database retention policy"
feature_slug: "cloud-composer-3-airflow-database-retention-policy"
latest_feature_date: "2025-02-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database"
keywords:
  - "composer"
  - "airflow"
  - "database"
  - "retention"
  - "policy"
  - "includes"
  - "that"
  - "automatically"
---

# Cloud Composer 3 Airflow database retention policy

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer 3 includes a database retention policy that automatically deletes older Airflow database records.

## Extended Definition

Cloud Composer 3 includes a database retention policy that automatically deletes older Airflow database records.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- December 12, 2025 Feature Database retention policy is now available in environments with Airflow 3, starting with composer-3-airflow-3.1.0-build.5.
- January 14, 2026 Feature Database retention policy is now available in environments with Airflow 3, starting with composer-3-airflow-3.1.0-build.5.
- Feature Database retention policy is now available in environments with Airflow 3, starting with composer-3-airflow-3.1.0-build.5.
- Fixed Fixed the severity level for Airflow Worker Set Controller logs Fixed When an environment is created, Cloud Composer validates if a policy that prohibits PSC connections is set on the project.

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Session () session . execute ( "ANALYZE" ) session . commit () session . close () analyze op = PythonOperator ( task id = "analyze query" , python callable = analyze db , provide context = True , dag = dag ) cleanup session op = PythonOperator ( task id = "cleanup sessions" , python callable = cleanup sessions , provide context = True , dag = dag , ) cleanup session op . set downstream ( analyze op ) for db object in DATABASE OBJECTS : cleanup op = PythonOperator ( task id = "cleanup " + str ( db object [ "airflow db model" ] . name ), python callable = cleanup function , params = db object , provide context = True , dag = dag , ) print configuration . set downstream ( cleanup op ) cleanup op . set downstream ( analyze op ) If your environment uses Airflow 1, use the following DAG instead: """ A maintenance workflow that you can deploy into Airflow to periodically clean out the DagRun, TaskInstance, Log, XCom, Job DB and SlaMiss entries to avoid having too much data in your Airflow MetaStore.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Clean up the Airflow database Stay organized with collections Save and categorize content based on your preferences.
- If you observe that the Airflow metadata database size metric increases significantly between runs of the maintenance DAG, consider running this DAG more often.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page explains how to maintain the Airflow database in your environment.

### Access the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page explains how to connect to a Cloud SQL instance that runs the Airflow database of your Cloud Composer environment and run SQL queries.
- Example: gcloud composer environments snapshots save \ example-environment \ --location us-central1 \ --snapshot-location "gs://example-bucket/environment snapshots" Example result: Response: '@type': type.googleapis.com/google.cloud.orchestration.airflow.service.v1.SaveSnapshotResponse snapshotPath: gs://example-bucket/environment snapshots/example-environment us-central1 2026-03-17T11-26-24 Prepare the destination database If you don't have a Cloud SQL instance, create one.
- Example: gcloud storage buckets add-iam-policy-binding gs://example-bucket \ --member = serviceAccount:p231236835740-kw9999@gcp-sa-cloud-sql.iam.gserviceaccount.com \ --role = roles/storage.objectAdmin Import the database dump Run the following command to import the database dump file from the previously saved snapshot into your Cloud SQL instance's airflow db database.
- Export Airflow database contents to a Cloud SQL instance This approach includes saving an environment snapshot, which contains an Airflow database dump, and then importing the dump to a Cloud SQL instance.

