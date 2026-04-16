---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:19.042Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 3 Airflow database retention policy"
feature_slug: "cloud-composer-3-airflow-database-retention-policy"
latest_feature_date: "2025-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database"
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig"
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 3 includes a database retention policy that automatically deletes older Airflow database records.

## Extended Definition

Cloud Composer 3 includes a database retention policy that automatically deletes older Airflow database records.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)
- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig)
- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)

## Supporting Pages

### Access the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page explains how to connect to a Cloud SQL instance that runs the Airflow database of your Cloud Composer environment and run SQL queries.
- Example: gcloud composer environments snapshots save \ example-environment \ --location us-central1 \ --snapshot-location "gs://example-bucket/environment snapshots" Example result: Response: '@type': type.googleapis.com/google.cloud.orchestration.airflow.service.v1.SaveSnapshotResponse snapshotPath: gs://example-bucket/environment snapshots/example-environment us-central1 2026-03-17T11-26-24 Prepare the destination database If you don't have a Cloud SQL instance, create one.
- Example: gcloud storage buckets add-iam-policy-binding gs://example-bucket \ --member = serviceAccount:p231236835740-kw9999@gcp-sa-cloud-sql.iam.gserviceaccount.com \ --role = roles/storage.objectAdmin Import the database dump Run the following command to import the database dump file from the previously saved snapshot into your Cloud SQL instance's airflow db database.
- Export Airflow database contents to a Cloud SQL instance This approach includes saving an environment snapshot, which contains an Airflow database dump, and then importing the dump to a Cloud SQL instance.

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- Session () session . execute ( "ANALYZE" ) session . commit () session . close () analyze op = PythonOperator ( task id = "analyze query" , python callable = analyze db , provide context = True , dag = dag ) cleanup session op = PythonOperator ( task id = "cleanup sessions" , python callable = cleanup sessions , provide context = True , dag = dag , ) cleanup session op . set downstream ( analyze op ) for db object in DATABASE OBJECTS : cleanup op = PythonOperator ( task id = "cleanup " + str ( db object [ "airflow db model" ] . name ), python callable = cleanup function , params = db object , provide context = True , dag = dag , ) print configuration . set downstream ( cleanup op ) cleanup op . set downstream ( analyze op ) If your environment uses Airflow 1, use the following DAG instead: """ A maintenance workflow that you can deploy into Airflow to periodically clean out the DagRun, TaskInstance, Log, XCom, Job DB and SlaMiss entries to avoid having too much data in your Airflow MetaStore.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Clean up the Airflow database Stay organized with collections Save and categorize content based on your preferences.
- If you observe that the Airflow metadata database size metric increases significantly between runs of the maintenance DAG, consider running this DAG more often.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page explains how to maintain the Airflow database in your environment.

### "Class AirflowMetadataRetentionPolicyConfig (1.19.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig)
- Source ID: `site-python-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Version latest keyboard arrow down 1.19.0 (latest) 1.18.0 1.17.5 1.16.1 1.15.1 1.14.0 1.13.1 1.12.2 1.11.1 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.5.0 1.4.4 1.3.2 1.2.1 1.1.0 1.0.0 0.1.3 AirflowMetadataRetentionPolicyConfig ( mapping = None , , ignore unknown fields = False , kwargs ) The policy for airflow metadata database retention.
- Home Documentation Developer tools Python Client libraries Send feedback Class AirflowMetadataRetentionPolicyConfig (1.19.0) Stay organized with collections Save and categorize content based on your preferences.
- Attributes Name Description retention mode google.cloud.orchestration.airflow.service v1.types.AirflowMetadataRetentionPolicyConfig.RetentionMode Optional.
- Classes RetentionMode RetentionMode ( value ) Describes retention policy.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Controls the performance parameters of the managed Cloud Composer infrastructure that includes the Airflow database.
- Step 14. (Optional) Configure database retention If you enable database retention in your environment, then Cloud Composer periodically removes records related to DAG executions and user sessions older than the specified time period from the Airflow database.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --cloud-sql-preferred-zone us-central1-a API When you create an environment, in the Environment DatabaseConfig resource, specify the preferred Cloud SQL zone. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "databaseConfig" : { "zone" : " SQL ZONE " }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace the following: SQL ZONE : preferred Cloud SQL zone.
- Note: The Airflow web server of your environment is always protected by IAM, regardless of the IP ranges that are allowed to access it. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } node config { service account = " SERVICE ACCOUNT " } } } Replace: WS IP RANGE with the IP range, in the CIDR notation, that can access Airflow UI.

