---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.531Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Per-folder Roles Registration"
feature_slug: "per-folder-roles-registration"
latest_feature_date: "2022-06-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
keywords:
  - "per"
  - "folder"
  - "roles"
  - "registration"
  - "has"
  - "been"
  - "rolled"
  - "out"
---

# Per-folder Roles Registration

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Per-folder Roles Registration has been rolled out across all regions in Cloud Composer; Cloud Composer now supports Per-folder Roles Registration.

## Extended Definition

Per-folder Roles Registration has been rolled out across all regions in Cloud Composer; Cloud Composer now supports Per-folder Roles Registration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Change Cloud Composer 1.19.3 and 2.0.20 images are available: composer-1.19.3-airflow-1.10.15 (default) composer-1.19.3-airflow-2.1.4 composer-1.19.3-airflow-2.2.5 composer-2.0.20-airflow-2.1.4 composer-2.0.20-airflow-2.2.5 June 29, 2022 Feature The Per-folder Roles Registration feature is rolled out to all regions.
- March 11, 2019 Change Note: The March 7, 2019, release has been rolled back, so this release supersedes the rollout dates and default version previously stated.
- Change Note: The August 22, 2019 , release has been rolled back, so this release supersedes the rollout dates and default version previously stated.
- Change Cloud Composer 1.19.2 and 2.0.19 images are available: composer-1.19.2-airflow-1.10.15 (default) composer-1.19.2-airflow-2.1.4 composer-1.19.2-airflow-2.2.5 composer-2.0.19-airflow-2.1.4 composer-2.0.19-airflow-2.2.5 June 27, 2022 Feature Cloud Composer supports Per-folder Roles Registration .

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Auto-assign DAGs to per-folder roles To auto-assign DAGs to per-folder roles: Override the following Airflow configuration option: Section Key Value webserver rbac autoregister per folder roles True Change the new user registration role to a role without access to any DAGs.
- Configure DAG-level permissions automatically The Per-folder Roles Registration feature automatically creates a custom Airflow role for each subfolder directly inside the /dags folder and grants this role DAG-level access to all DAGs that have their source file stored in that respective subfolder.
- Per-folder Roles Registration is available in Cloud Composer 1.18.12 and later versions in Airflow 2, and in Cloud Composer 1.13.4 and later versions in Airflow 1.
- Roles have a union of DAG access permissions registered through Per-folder Roles Registration and defined in the access control property of the DAG.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Airflow workers or schedulers might experience issues when accessing the environment's Cloud Storage bucket Cloud Composer uses gcsfuse to access the /data folder in the environment's bucket and to save Airflow task logs to the /logs directory (if enabled).
- Warnings about Pod Disruption Budget for environment clusters You can see the following warnings in the GKE UI for Cloud Composer environment clusters: GKE can't perform maintenance because the Pod Disruption Budget allows for 0 Pod evictions.
- If Airflow UI is permanently unavailable, and timeout or 504 errors are generated, make sure that your environment can access .composer.googleusercontent.com . (Cloud Composer 2 only) Connectivity issue.
- This means that in order to exploit the Airflow UI vulnerability, attackers first need to gain access to your project along with the necessary IAM permissions and roles.

