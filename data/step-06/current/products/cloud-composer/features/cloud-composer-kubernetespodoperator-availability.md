---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.158Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer KubernetesPodOperator availability"
feature_slug: "cloud-composer-kubernetespodoperator-availability"
latest_feature_date: "2018-07-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3"
  - "https://docs.cloud.google.com/composer/docs/composer-1/connect-gce-vm-sshoperator"
keywords:
  - "composer"
  - "kubernetespodoperator"
  - "availability"
  - "backported"
  - "to"
  - "allow"
  - "launching"
  - "docker"
---

# Cloud Composer KubernetesPodOperator availability

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Backported KubernetesPodOperator to allow launching Docker containers from Airflow in Cloud Composer.

## Extended Definition

Backported KubernetesPodOperator to allow launching Docker containers from Airflow in Cloud Composer.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- [https://docs.cloud.google.com/composer/docs/composer-1/connect-gce-vm-sshoperator](https://docs.cloud.google.com/composer/docs/composer-1/connect-gce-vm-sshoperator)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Added the following Airflow updates: Backported the KubernetesPodOperator to enable launching Docker containers in Cloud Composer.
- Change Cloud Composer 2.9.5 images are available: composer-2.9.5-airflow-2.9.3 composer-2.9.5-airflow-2.9.1 (default) composer-2.9.5-airflow-2.7.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.9.3-build.1 composer-3-airflow-2.9.1-build.8 (default) composer-3-airflow-2.7.3-build.17 September 18, 2024 Fixed (Cloud Composer 3) Fixed the issue that caused KubernetesPodOperator tasks to fail if they ran for longer than 15 minutes.
- If you have the "Don't allow users to access any third-party apps" setting enabled in Google Workspace, then configure access to the "Apache Airflow in Cloud Composer" app in Google Workspace, so that your Google Workspace users can still access Airflow UI in Cloud Composer environments.
- While Google works on resolving this issue so Composer environments are immune to CVE-2024-6387 , you can disallow SSH to the Cloud Composer's cluster nodes through establishing proper firewall rules on the environment's cluster as described in the Google GKE Security bulletins.

### "Migrate to Cloud Composer\_3 from Cloud Composer\_1 (Airflow 2) \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Other migration guides From To Method Guide Cloud Composer 2 Cloud Composer 3 Side-by-side, using the migration script Script migration guide Cloud Composer 2 Cloud Composer 3 Side-by-side, using snapshots Snapshots migration guide Cloud Composer 1, Airflow 2 Cloud Composer 3 Side-by-side, using snapshots This guide Cloud Composer 1, Airflow 2 Cloud Composer 2 Side-by-side, using snapshots Snapshots migration guide Cloud Composer 1, Airflow 2 Cloud Composer 2 Side-by-side, manual transfer Manual migration guide Cloud Composer 1, Airflow 1 Cloud Composer 2, Airflow 2 Side-by-side, using snapshots Snapshots migration guide Cloud Composer 1, Airflow 1 Cloud Composer 2, Airflow 2 Side-by-side, manual transfer Manual migration guide Cloud Composer 1, Airflow 1 Cloud Composer 1, Airflow 2 Side-by-side, manual transfer Manual migration guide Before you begin Cloud Composer supports side-by-side migration from Cloud Composer 1 to Cloud Composer 3.
- COMPOSER 3 LOCATION with the region where the environment is located. (Airflow versions 2.9.1 and later) If there are quota errors while unpausing a large number of DAGs, you can use the following Airflow CLI commands to unpause all DAGs at once: gcloud composer environments run COMPOSER 3 ENV dags unpause \ --project PROJECT ID \ --location COMPOSER 3 LOCATION \ -- -y --treat-dag-id-as-regex ". " (Airflow versions earlier than 2.9.1) If there are quota errors while unpausing a large number of DAGs, it's possible to unpause DAGs using the Airflow REST API .
- COMPOSER 1 LOCATION with the region where the environment is located. (Airflow versions 2.9.1 and later) If there are quota errors while pausing a large number of DAGs, you can use the following Airflow CLI commands to pause all DAGs at once: gcloud composer environments run COMPOSER 1 ENV dags pause \ --project PROJECT ID \ --location COMPOSER 1 LOCATION \ -- -y --treat-dag-id-as-regex ". " (Airflow versions earlier than 2.9.1) If there are quota errors while pausing a large number of DAGs, it's possible to pause DAGs using the Airflow REST API .
- Click Load and wait until Cloud Composer loads the snapshot. gcloud Load the snapshot of your Cloud Composer 1 environment to your Cloud Composer 3 environment: gcloud composer environments snapshots load \ COMPOSER 3 ENV \ --location COMPOSER 3 LOCATION \ --snapshot-path " SNAPSHOT PATH " Replace: COMPOSER 3 ENV with the name of your Cloud Composer 3 environment.

### "Connect to a Compute Engine VM with SSHOperator \_|\_ Cloud Composer \_\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/connect-gce-vm-sshoperator](https://docs.cloud.google.com/composer/docs/composer-1/connect-gce-vm-sshoperator)
- Source ID: `site-iam-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- DAG ( 'composer compute ssh dag' , start date = datetime . datetime ( 2025 , 1 , 1 ) ) as dag : ssh task = SSHOperator ( task id = 'composer compute ssh task' , ssh hook = ComputeEngineSSHHook ( instance name = GCE INSTANCE , zone = GCE ZONE , project id = GCP PROJECT ID , use oslogin = True , use iap tunnel = False , use internal ip = True ), command = 'echo This command is executed from a DAG' , dag = dag ) What's next Add and update DAGs Schedule and trigger DAGs Troubleshooting DAGs Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Connect to a Compute Engine VM with SSHOperator Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how to connect to a Compute Engine VM from a DAG.
- We recommend planning migration to Cloud Composer 3 .

