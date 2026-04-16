---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.811Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Kubernetes v1 API compatibility"
feature_slug: "kubernetes-v1-api-compatibility"
latest_feature_date: "2020-06-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
keywords:
  - "kubernetes"
  - "v1"
  - "compatibility"
  - "composer"
  - "uses"
  - "compatible"
  - "gke"
  - "16"
---

# Kubernetes v1 API compatibility

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer uses the Kubernetes v1 API and is compatible with GKE 1.16.

## Extended Definition

Cloud Composer uses the Kubernetes v1 API and is compatible with GKE 1.16.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)

## Supporting Pages

### "Migrate to Cloud Composer\_3 from Cloud Composer\_1 (Airflow 2) \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that your DAGs are compatible with Cloud Composer 3 Make sure that your DAGs are compatible with Cloud Composer 3 by following these suggestions: The [list of packages][cc-versions] in the Cloud Composer 3 environment can be different than in your Cloud Composer 1 environment.
- Cloud Composer loads configuration overrides, environment variables, and PyPI packages from your Cloud Composer 1 environment's snapshot to Cloud Composer 3 without changing or adjusting them for compatibility.
- Note: Cloud Composer loads configuration overrides, environment variables, and PyPI packages from your Cloud Composer 1 environment to Cloud Composer 3 without changing or adjusting them for compatibility.
- If your environment uses Airflow 1, you can migrate to Cloud Composer 2, Airflow 2 .

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent composerNetworkAttachment string Optional.
- WorkloadsConfig The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment.
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- JSON representation { "networkingType" : enum ( NetworkingType ) , "enablePrivateEnvironment" : boolean , "enablePrivateBuildsOnly" : boolean , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "webServerIpv4CidrBlock" : string , "cloudSqlIpv4CidrBlock" : string , "webServerIpv4ReservedRange" : string , "cloudComposerNetworkIpv4CidrBlock" : string , "cloudComposerNetworkIpv4ReservedRange" : string , "enablePrivatelyUsedPublicIps" : boolean , "cloudComposerConnectionSubnetwork" : string , "networkingConfig" : { object ( NetworkingConfig ) } } Fields networkingType enum ( NetworkingType ) Optional.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Terraform The Terraform provider for Cloud Composer uses beta API by default.
- By default, Cloud Composer API uses the default image for Cloud Composer 2.
- By default, Cloud Composer API uses the default image for Cloud Composer 2.
- By default, Cloud Composer API uses the default image for Cloud Composer 2.

