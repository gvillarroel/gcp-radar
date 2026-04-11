---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.635Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer environment bucket directory restoration"
feature_slug: "cloud-composer-environment-bucket-directory-restoration"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/delete-environments"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
keywords:
  - "composer"
  - "environment"
  - "bucket"
  - "directory"
  - "restoration"
  - "automatically"
  - "recreates"
  - "deleted"
---

# Cloud Composer environment bucket directory restoration

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer automatically recreates deleted /dags, /data, /logs, and /plugins folders in an environment bucket.

## Extended Definition

Cloud Composer automatically recreates deleted /dags, /data, /logs, and /plugins folders in an environment bucket.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/delete-environments](https://docs.cloud.google.com/composer/docs/composer-1/delete-environments)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)

## Supporting Pages

### Delete Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/delete-environments](https://docs.cloud.google.com/composer/docs/composer-1/delete-environments)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resources that are not deleted automatically Deleting your environment does not delete the following data in your project: Your environment's Cloud Storage bucket.
- Caution: Cloud Composer does not automatically delete the environment's bucket.
- Caution: Cloud Composer doesn't automatically delete the environment's bucket.
- Cloud Composer does not delete the environment's bucket automatically.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Change (Available without upgrading) When an environment is deleted, Cloud Composer automatically deletes the persistent disk of the environment's Redis queue.
- Feature If the /dags , /data , /logs , or /plugins folder is deleted in an environment's bucket, Cloud Composer re-creates this folder.
- Feature Cloud Composer automatically recreates and unpauses the Airflow monitoring DAG if it was deleted or paused.
- Change (Cloud Composer 2) The /dags directory from the environment's bucket is no longer synced to the web server.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- When you create an environment, Cloud Composer creates a bucket for your environment automatically.
- Data lineage integration is automatically enabled in a new Cloud Composer environment if the following conditions are met: Data Lineage API is enabled in your project.
- Instead, Cloud Composer automatically selects two zones in the region where the environment is located.
- Your environment uses this bucket in the same way as the automatically created bucket.

