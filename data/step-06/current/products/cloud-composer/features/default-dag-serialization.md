---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.754Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Default DAG serialization"
feature_slug: "default-dag-serialization"
latest_feature_date: "2021-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization"
keywords:
  - "default"
  - "dag"
  - "serialization"
  - "enabled"
  - "environments"
  - "running"
  - "composer"
  - "15"
---

# Default DAG serialization

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

DAG serialization is enabled by default for new environments running Cloud Composer 1.15.0 and later.

## Extended Definition

DAG serialization is enabled by default for new environments running Cloud Composer 1.15.0 and later.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization](https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization)

## Supporting Pages

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- By default master authorized networks feature is: - in case of private environment: enabled with no external networks allowlisted. - in case of public environment: disabled. recoveryConfig object ( RecoveryConfig ) Optional.
- When enabled, IPs from public (non-RFC1918) ranges can be used for IPAllocationPolicy.cluster ipv4 cidr block and IPAllocationPolicy.service ipv4 cidr block . cloudComposerConnectionSubnetwork string Optional.

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Displaying a rendered template with functions in the web UI with DAG serialization enabled is supported for environments running Cloud Composer version 1.12.0 or later and Airflow version 1.10.9 or later.
- If your environment uses Cloud Composer version 1.15.0 and later, the serialization is enabled by default.
- Your environments have DAG serialization enabled.
- Cloud Composer environments use the following domains: .googleapis.com is used to access other Google services. .pkg.dev is used to get environment images, such as when creating or updating an environment. .gcr.io GKE requires connectivity to Container Registry domain regardless of Cloud Composer version.

### "Enabling and disabling DAG serialization \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization](https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization)
- Source ID: `site-iam-reference`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Note: Starting from Cloud Composer version 1.15.0 , DAG serialization is enabled by default.
- DAG serialization affects the following Cloud Composer features: DAG serialization cannot be enabled at the same time as asynchronous DAG loading .
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Enabling and disabling DAG serialization Stay organized with collections Save and categorize content based on your preferences.
- You can enable and disable DAG serialization in new and existing environments by overriding Airflow configuration options , as described in the following sections.

