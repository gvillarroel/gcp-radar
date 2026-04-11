---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.124Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer per-DAG backfill disablement"
feature_slug: "cloud-composer-per-dag-backfill-disablement"
latest_feature_date: "2019-03-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags"
  - "https://docs.cloud.google.com/composer/docs/latest/view-dags"
keywords:
  - "composer"
  - "per"
  - "dag"
  - "backfill"
  - "disablement"
  - "fixed"
  - "behavior"
  - "so"
---

# Cloud Composer per-DAG backfill disablement

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer fixed DAG backfill behavior so backfill can be disabled on a per-DAG basis.

## Extended Definition

Cloud Composer fixed DAG backfill behavior so backfill can be disabled on a per-DAG basis.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags](https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags)
- [https://docs.cloud.google.com/composer/docs/latest/view-dags](https://docs.cloud.google.com/composer/docs/latest/view-dags)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- May 26, 2025 Feature (Cloud Composer 3) New metrics that show the number of active Airflow components are now available for Cloud Composer 3 environments: The number of active schedulers The number of active DAG processors The number of active triggerers The number of active web servers Fixed (Cloud Composer 3) It's now possible to override the default scopes of access tokens in all regions supported by Cloud Composer 3.
- It comes with a number of new features and characteristics: All infrastructure hidden in a tenant project Evergreen versioning Simplified networking configuration Improved performance More reliable DAG parsing and scheduling as DAG Processor and Schedulers are now separate components 10 times bigger storage for Airflow workers As well as most functionalities already known from the previous Composer versions.
- Change The upgraded apache-airflow-providers-google package provides new operators and sensors for triggering DAGs across Cloud Composer environments: CloudComposerRunAirflowCLICommandOperator makes a call to the Airflow REST API of a Cloud Composer environment.
- Fixed Fixed an issue in Cloud Composer REST API that allowed some environment.patch operations to succeed when multiple update masks that aren't related to each other were passed in a request.

### "Schedule and trigger Airflow DAGs \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags](https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The SQL query for this row uses Airflow templates to write DAG's logical date and name to the row. import datetime from airflow.models.dag import DAG from airflow.providers.google.cloud.operators.bigquery import BigQueryInsertJobOperator with DAG ( "bq example scheduling dag" , start date = datetime . datetime ( 2024 , 1 , 1 ), schedule = '0 /12 ' , catchup = False ) as dag : insert query job = BigQueryInsertJobOperator ( task id = "insert query job" , retries = 4 , configuration = { "query" : { schema: date (string), description (string) example row: "20240101T120000", "DAG run: <DAG: bq example scheduling dag>" "query" : "INSERT example dataset.example table VALUES ('{{ ts nodash }}', 'DAG run: {{ dag }}' )" , "useLegacySql" : False , "priority" : "BATCH" , } }, location = "us-central1" ) insert query job To test this DAG, you can trigger it manually and then view the task execution logs .
- In the Airflow web interface, on the DAGs page, click the toggle next to the DAG's name. gcloud Run the dags pause Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags pause -- DAG ID Replace the following: ENVIRONMENT NAME : the name of your environment.
- Note: To backfill DAG runs for a certain date instead of catching up, run the dags backfill Airflow CLI command using Google Cloud CLI . (Optional) In the retries parameter, define how many times Airflow must retry tasks that failed (each DAG consists of one or more individual tasks).
- Run the dags trigger Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags trigger -- DAG ID Replace the following: ENVIRONMENT NAME : the name of your environment.

### View DAGs, DAG runs, and tasks \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/view-dags](https://docs.cloud.google.com/composer/docs/latest/view-dags)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Ways to view information about DAGs Cloud Composer provides several ways to get detailed information about DAGs in your environment: DAG UI is a section of Google Cloud console interface for Cloud Composer dedicated to viewing and monitoring DAGs, DAG runs, and individual tasks.
- About Cloud Composer DAG UI DAG UI is a section of Google Cloud console interface for Cloud Composer dedicated to viewing and monitoring DAGs, DAG runs, and individual tasks.
- You can follow the link in the Run ID column to get additional information about tasks. gcloud Run the dags list-runs Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags list-runs -- -d DAG ID Replace: ENVIRONMENT NAME with the name of the environment.
- In the Airflow UI, on the DAGs page, a list of DAGs for your environment is displayed. gcloud Run the dags list Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags list -- -o plain Replace: ENVIRONMENT NAME with the name of the environment.

