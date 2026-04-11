---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.896Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer DAG serialization default setting"
feature_slug: "cloud-composer-dag-serialization-default-setting"
latest_feature_date: "2021-03-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
keywords:
  - "composer"
  - "dag"
  - "serialization"
  - "default"
  - "setting"
  - "for"
  - "new"
  - "environments"
---

# Cloud Composer DAG serialization default setting

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

For new Cloud Composer environments at version 1.15.0 and later, DAG serialization is enabled by default while existing environments are not changed automatically.

## Extended Definition

For new Cloud Composer environments at version 1.15.0 and later, DAG serialization is enabled by default while existing environments are not changed automatically.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization](https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)

## Supporting Pages

### "Enabling and disabling DAG serialization \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization](https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin Note: Starting from Cloud Composer version 1.15.0 , DAG serialization is enabled by default.
- You can enable and disable DAG serialization in new and existing environments by overriding Airflow configuration options , as described in the following sections.
- Disabling DAG serialization You can enable DAG serialization for an existing environment or when creating a new environment.
- Enabling DAG serialization You can enable DAG serialization for an existing environment or when creating a new environment.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- This field is supported for Cloud Composer environments in versions composer-3-airflow- . . -build. and newer. privateClusterConfig object ( PrivateClusterConfig ) Optional.
- This field is supported for Cloud Composer environments in versions composer-2.2.0-airflow- . . and newer. dataRetentionConfig object ( DataRetentionConfig ) Optional.
- This field is supported for Cloud Composer environments in versions composer-2. . -airflow- . . and newer. cloudComposerNetworkIpv4ReservedRange string Output only.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- March 11, 2021 Feature DAG serialization is enabled by default in new environments created for Cloud Composer versions 1.15.0 and later.
- May 26, 2025 Feature (Cloud Composer 3) New metrics that show the number of active Airflow components are now available for Cloud Composer 3 environments: The number of active schedulers The number of active DAG processors The number of active triggerers The number of active web servers Fixed (Cloud Composer 3) It's now possible to override the default scopes of access tokens in all regions supported by Cloud Composer 3.
- Change New versions of Cloud Composer images: composer-1.15.0-airflow-1.10.14 composer-1.15.0-airflow-1.10.12 (default) composer-1.15.0-airflow-1.10.10 Change When creating new environments, enabling asynchronous DAG loading disables DAG serialization.
- January 05, 2021 Announcement In Cloud Composer 1.15.0, DAG serialization will be enabled by default when creating new Cloud Composer environments.

