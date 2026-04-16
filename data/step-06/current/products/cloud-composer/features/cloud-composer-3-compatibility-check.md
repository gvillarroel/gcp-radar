---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:18.905Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 3 compatibility check"
feature_slug: "cloud-composer-3-compatibility-check"
latest_feature_date: "2025-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade"
keywords:
  - "composer"
  - "compatibility"
  - "check"
  - "verifies"
  - "whether"
  - "environment"
  - "configuration"
  - "compatible"
---

# Cloud Composer 3 compatibility check

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

The Cloud Composer 3 compatibility check verifies whether a Cloud Composer 2 environment configuration is compatible with Cloud Composer 3.

## Extended Definition

The Cloud Composer 3 compatibility check verifies whether a Cloud Composer 2 environment configuration is compatible with Cloud Composer 3.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade)

## Supporting Pages

### "Migrate to Cloud Composer\_3 from Cloud Composer\_1 (Airflow 2) \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Composer loads configuration overrides, environment variables, and PyPI packages from your Cloud Composer 1 environment's snapshot to Cloud Composer 3 without changing or adjusting them for compatibility.
- Note: Cloud Composer loads configuration overrides, environment variables, and PyPI packages from your Cloud Composer 1 environment to Cloud Composer 3 without changing or adjusting them for compatibility.
- Make sure that your DAGs are compatible with Cloud Composer 3 Make sure that your DAGs are compatible with Cloud Composer 3 by following these suggestions: The [list of packages][cc-versions] in the Cloud Composer 3 environment can be different than in your Cloud Composer 1 environment.
- Monitor your Cloud Composer 3 environment After you transfer all DAGs and configuration to the Cloud Composer 3 environment, monitor it for potential issues, failed DAG runs, and overall environment health.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- The configuration used for the Private IP Cloud Composer environment. webServerNetworkAccessControl object ( WebServerNetworkAccessControl ) Optional.
- Configuration for the private GKE cluster for a Private IP Cloud Composer environment. webServerIpv4CidrBlock string Optional.
- WorkloadsConfig The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment.

### "Method: projects.locations.environments.checkUpgrade \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The resource name of the environment to check upgrade for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource environment : composer.environments.update Request body The request body contains data with the following structure: JSON representation { "imageVersion" : string } Fields imageVersion string Optional.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.checkUpgrade Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://composer.googleapis.com/v1/{environment=projects/ /locations/ /environments/ }:checkUpgrade The URL uses gRPC Transcoding syntax.
- Check if an upgrade operation on the environment will succeed.

