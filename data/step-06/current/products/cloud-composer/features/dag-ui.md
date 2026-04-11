---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.530Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "DAG UI"
feature_slug: "dag-ui"
latest_feature_date: "2022-07-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/latest/view-dags"
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
keywords:
  - "dag"
  - "ui"
  - "the"
  - "composer"
  - "has"
  - "reached"
  - "general"
  - "availability"
---

# DAG UI

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

The Cloud Composer DAG UI has reached general availability.

## Extended Definition

The Cloud Composer DAG UI has reached general availability.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/latest/view-dags](https://docs.cloud.google.com/composer/docs/latest/view-dags)
- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Change (Airflow 2.10.2 and 2.9.3) The following preinstalled provider packages were upgraded to new major versions: apache-airflow-providers-apache-beam upgraded from 5.9.1 to 6.0.0 apache-airflow-providers-dbt-cloud upgraded from 3.11.2 to 4.0.0 apache-airflow-providers-hashicorp upgraded from 3.8.0 to 4.0.0 apache-airflow-providers-http upgraded from 4.13.3 to 5.0.0 apache-airflow-providers-mysql upgraded from 5.7.4 to 6.0.0 apache-airflow-providers-sendgrid upgraded from 3.6.0 to 4.0.0 apache-airflow-providers-sqlite upgraded from 3.9.1 to 4.0.0 apache-airflow-providers-ssh upgraded from 3.14.0 to 4.0.0 Change (Airflow 2.10.2 and 2.9.3) The apache-airflow-providers-cncf-kubernetes package was upgraded to version 10.1.0 in Cloud Composer 2 images and Cloud Composer 3 builds.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-3.1.0-build.5 composer-3-airflow-2.10.5-build.22 (default) composer-3-airflow-2.9.3-build.42 Change New images are available in Cloud Composer 2: composer-2.16.0-airflow-2.10.5 (default) composer-2.16.0-airflow-2.9.3 Deprecated The following Cloud Composer versions and builds have reached their end of support period : composer-3-airflow-2.7.3-build.22, composer-3-airflow-2.7.3-build.23, composer-3-airflow-2.9.3-build.2, composer-3-airflow-2.9.3-build.3, composer-3-airflow-2.9.3-build.4, composer-3-airflow-2.9.3-build.5, composer-3-airflow-2.9.3-build.6, composer-3-airflow-2.9.3-build.7, composer-3-airflow-2.9.3-build.10, composer-2.9.10- , composer-2.9.11- , composer-2.10.0- .
- Change Cloud Composer 2.9.7 images are available: composer-2.9.7-airflow-2.9.3 (default) composer-2.9.7-airflow-2.7.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.9.3-build.3 (default) composer-3-airflow-2.7.3-build.19 October 08, 2024 Change Cloud Composer 2.9.6 images are available: composer-2.9.6-airflow-2.9.3 composer-2.9.6-airflow-2.9.1 (default) composer-2.9.6-airflow-2.7.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.9.3-build.2 composer-3-airflow-2.9.1-build.9 (default) composer-3-airflow-2.7.3-build.18 Deprecated Cloud Composer version 2.4.5 has reached its end of support period .
- Change (Airflow 2.10.2 and 2.9.3) Preinstalled packages were changed: logbook was removed from preinstalled packages minimal-snowplow-tracker was removed from preinstalled packages mashumaro was downgraded from 3.15 to 3.14 Change New images are available in Cloud Composer 2: composer-2.11.2-airflow-2.10.2 (default) composer-2.11.2-airflow-2.9.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.2-build.8 (default) composer-3-airflow-2.9.3-build.15 Deprecated Cloud Composer versions 2.6.0 and 2.6.1 have reached their end of support period .

### View DAGs, DAG runs, and tasks \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/view-dags](https://docs.cloud.google.com/composer/docs/latest/view-dags)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Airflow UI, on the DAGs page, a list of DAGs for your environment is displayed. gcloud Run the dags list Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags list -- -o plain Replace: ENVIRONMENT NAME with the name of the environment.
- You can follow the link in the Run ID column to get additional information about tasks. gcloud Run the dags list-runs Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags list-runs -- -d DAG ID Replace: ENVIRONMENT NAME with the name of the environment.
- Ways to view information about DAGs Cloud Composer provides several ways to get detailed information about DAGs in your environment: DAG UI is a section of Google Cloud console interface for Cloud Composer dedicated to viewing and monitoring DAGs, DAG runs, and individual tasks.
- In the Airflow UI, on the DAGs page, a list of DAGs for your environment is displayed. (Airflow 3) Click your DAG to go to the Dags page, then click Show graph to switch to the Graph view. (Airflow 2) For your DAG, in the Links column, follow the Graph link.

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- BashOperator ( task id = "print dag run conf" , bash command = "echo {{ dag run.id }}" ) Upload the DAG file to your environment's bucket Every Cloud Composer environment has a Cloud Storage bucket associated with it.
- DAG ( "composer quickstart" , catchup = False , default args = default args , schedule interval = datetime . timedelta ( days = 1 ), ) as dag : Print the dag run id from the Airflow logs print dag run conf = bash .
- The list of DAGs displays the composer quickstart DAG (click to enlarge) Note: The airflow monitoring DAG is used by Cloud Composer to monitor the health of your environment.
- The list of DAG runs for the composer quickstart DAG (click to enlarge) DAG run details are displayed, detailing the information about individual tasks of the example DAG.

