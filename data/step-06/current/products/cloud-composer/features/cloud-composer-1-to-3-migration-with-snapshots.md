---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:47.807Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 1-to-3 migration with snapshots"
feature_slug: "cloud-composer-1-to-3-migration-with-snapshots"
latest_feature_date: "2025-05-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
keywords:
  - "composer"
  - "to"
  - "migration"
  - "with"
  - "snapshots"
  - "now"
  - "supports"
  - "migrating"
---

# Cloud Composer 1-to-3 migration with snapshots

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer now supports migrating from Cloud Composer 1 to Cloud Composer 3 using snapshots in all supported regions; Cloud Composer now supports migrating from Cloud Composer 1 to Cloud Composer 3 using snapshots, with rollout expanding by region.

## Extended Definition

Cloud Composer now supports migrating from Cloud Composer 1 to Cloud Composer 3 using snapshots in all supported regions; Cloud Composer now supports migrating from Cloud Composer 1 to Cloud Composer 3 using snapshots, with rollout expanding by region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)

## Supporting Pages

### "Migrate to Cloud Composer\_3 from Cloud Composer\_1 (Airflow 2) \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Other migration guides From To Method Guide Cloud Composer 2 Cloud Composer 3 Side-by-side, using the migration script Script migration guide Cloud Composer 2 Cloud Composer 3 Side-by-side, using snapshots Snapshots migration guide Cloud Composer 1, Airflow 2 Cloud Composer 3 Side-by-side, using snapshots This guide Cloud Composer 1, Airflow 2 Cloud Composer 2 Side-by-side, using snapshots Snapshots migration guide Cloud Composer 1, Airflow 2 Cloud Composer 2 Side-by-side, manual transfer Manual migration guide Cloud Composer 1, Airflow 1 Cloud Composer 2, Airflow 2 Side-by-side, using snapshots Snapshots migration guide Cloud Composer 1, Airflow 1 Cloud Composer 2, Airflow 2 Side-by-side, manual transfer Manual migration guide Cloud Composer 1, Airflow 1 Cloud Composer 1, Airflow 2 Side-by-side, manual transfer Manual migration guide Before you begin Cloud Composer supports side-by-side migration from Cloud Composer 1 to Cloud Composer 3.
- Click Load and wait until Cloud Composer loads the snapshot. gcloud Load the snapshot of your Cloud Composer 1 environment to your Cloud Composer 3 environment: gcloud composer environments snapshots load \ COMPOSER 3 ENV \ --location COMPOSER 3 LOCATION \ --snapshot-path " SNAPSHOT PATH " Replace: COMPOSER 3 ENV with the name of your Cloud Composer 3 environment.
- Note: Cloud Composer doesn't support migrating from Cloud Composer 1 with Airflow 1 to Cloud Composer 3.
- COMPOSER 3 LOCATION with the region where the environment is located. (Airflow versions 2.9.1 and later) If there are quota errors while unpausing a large number of DAGs, you can use the following Airflow CLI commands to unpause all DAGs at once: gcloud composer environments run COMPOSER 3 ENV dags unpause \ --project PROJECT ID \ --location COMPOSER 3 LOCATION \ -- -y --treat-dag-id-as-regex ". " (Airflow versions earlier than 2.9.1) If there are quota errors while unpausing a large number of DAGs, it's possible to unpause DAGs using the Airflow REST API .

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- It comes with a number of new features and characteristics: All infrastructure hidden in a tenant project Evergreen versioning Simplified networking configuration Improved performance More reliable DAG parsing and scheduling as DAG Processor and Schedulers are now separate components 10 times bigger storage for Airflow workers As well as most functionalities already known from the previous Composer versions.
- Change Cloud Composer 1.19.10 and 2.0.27 images are available: composer-1.19.10-airflow-1.10.15 (default) composer-1.19.10-airflow-2.1.4 composer-1.19.10-airflow-2.2.5 composer-2.0.27-airflow-2.1.4 composer-2.0.27-airflow-2.2.5 September 12, 2022 Feature (New environments only) Encryption with customer-managed encryption keys (CMEK) now applies to the persistent disk of the environment's Redis queue.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.13 (default) composer-3-airflow-2.9.3-build.33 Change New images are available in Cloud Composer 2: composer-2.14.1-airflow-2.10.5 (default) composer-2.14.1-airflow-2.9.3 Feature (Available without upgrading) Cloud Composer 3 now supports DNS resolution for regional service endpoints .
- New metrics have been added to monitor web server CPU and memory usage: CPU usage time CPU reserved cores Memory bytes used Memory quota During environment creation and updates, Composer will now verify whether you have chosen a region compliant with any location restriction organization policies.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- As a workaround, if you want to use the smallest Cloud SQL disk size, you can re-create Cloud Composer environments with snapshots .
- Airflow 1.9.0 stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06/1.log Airflow 1.10.x stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log As a result, if you upgrade from Airflow 1.9.0 to Airflow 1.10.x and would like to read the log for a task executed with Airflow 1.9.0, the Airflow Web server will show the following error message: Unable to read remote log from BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Workaround: Rename the logs generated by Airflow 1.9.0 in the Cloud Storage bucket using the format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Cannot create Cloud Composer environments with the organization policy constraints/compute.disableSerialPortLogging enforced Cloud Composer environment creation fails if the constraints/compute.disableSerialPortLogging organization policy is enforced on the target project.
- Run a gcloud command to delete the deployments with the ABANDON policy: gcloud deployment-manager deployments delete addons-<uuid> \ --delete-policy = ABANDON gcloud deployment-manager deployments delete <location>-<env-name-prefix>-<hash>-sd \ --delete-policy = ABANDON Delete your Cloud Composer environment .
- Cloud Composer 1 environment creation fails when the compute.vmCanIpForward policy is disabled Cloud Composer 1 environments created in the non-VPC-Native (using alias IP) mode require this policy to allow the creation of VMs with the enabled IP Forwarding feature.

