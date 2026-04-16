---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.105Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Redis memory scaling"
feature_slug: "redis-memory-scaling"
latest_feature_date: "2024-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling"
keywords:
  - "increased"
  - "medium"
  - "scaling"
  - "large"
  - "redis"
  - "memory"
  - "environment"
---

# Redis memory scaling

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer increased Redis memory for Medium and Large environment sizes to improve performance.

## Extended Definition

Cloud Composer increased Redis memory for Medium and Large environment sizes to improve performance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling](https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Your environment's cluster runs at most this number of workers. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --environment-size ENVIRONMENT SIZE \ --scheduler-count SCHEDULER COUNT \ --scheduler-cpu SCHEDULER CPU \ --scheduler-memory SCHEDULER MEMORY \ --scheduler-storage SCHEDULER STORAGE \ --triggerer-count TRIGGERER COUNT \ --triggerer-cpu TRIGGERER CPU \ --triggerer-memory TRIGGERER MEMORY \ --dag-processor-count DAG PROCESSOR COUNT \ --dag-processor-cpu DAG PROCESSOR CPU \ --dag-processor-memory DAG PROCESSOR MEMORY \ --dag-processor-storage DAG PROCESSOR STORAGE \ --web-server-cpu WEB SERVER CPU \ --web-server-memory WEB SERVER MEMORY \ --web-server-storage WEB SERVER STORAGE \ --worker-cpu WORKER CPU \ --worker-memory WORKER MEMORY \ --worker-storage WORKER STORAGE \ --min-workers WORKERS MIN \ --max-workers WORKERS MAX Replace: ENVIRONMENT SIZE with small , medium , large , extra-large .
- To select the scale and performance configuration for your environment, on the Create environment page: To use predefined values, in the Environment resources section, click Small , Medium , Large , or Extra Large .
- ENVIRONMENT SIZE with the environment size: ENVIRONMENT SIZE SMALL , ENVIRONMENT SIZE MEDIUM , ENVIRONMENT SIZE LARGE , ENVIRONMENT SIZE EXTRA LARGE .
- ENVIRONMENT SIZE with the environment size: ENVIRONMENT SIZE SMALL , ENVIRONMENT SIZE MEDIUM , ENVIRONMENT SIZE LARGE , ENVIRONMENT SIZE EXTRA LARGE .

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- ENVIRONMENT SIZE EXTRA LARGE The environment size is extra large.
- ENVIRONMENT SIZE MEDIUM The environment size is medium.
- ENVIRONMENT SIZE LARGE The environment size is large.
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.

### About environment scaling \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling](https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling)
- Source ID: `site-iam-reference`
- Final score: 103
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback About environment scaling Stay organized with collections Save and categorize content based on your preferences.
- By doing so you can scale your environment vertically, in addition to the horizontal scaling provided by the number of nodes setting.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how environment scaling works.
- Other pages about scaling: For information about scaling your environments, see Scale environments .

