---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.167Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 1.20.10 support"
feature_slug: "cloud-composer-1-20-10-support"
latest_feature_date: "2024-03-19"
deprecation_date: "2024-03-19"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse.PypiDependenciesEntry"
keywords:
  - "composer"
  - "20"
  - "10"
  - "has"
  - "reached"
  - "end"
  - "full"
  - "period"
---

# Cloud Composer 1.20.10 support

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 1.20.10 support has reached the end of its full support period; deprecated on 2024-03-19.

## Extended Definition

Cloud Composer 1.20.10 support has reached the end of its full support period; deprecated on 2024-03-19.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse.PypiDependenciesEntry](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse.PypiDependenciesEntry)

## Supporting Pages

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- What's next Monitor Cloud Composer environments Troubleshooting scheduling Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Difference between DAG parse time and DAG execution time The monitoring dashboard of an environment displays the total time required to parse all DAGs in your Cloud Composer environment and the average time it takes to execute a DAG.
- Access the monitoring dashboard The monitoring dashboard contains metrics and charts for monitoring trends in the DAG runs in your environment, and identifing issues with Airflow components and Cloud Composer resources.
- Home Documentation Data analytics Cloud Composer Composer 3 Guides Send feedback Use the monitoring dashboard Stay organized with collections Save and categorize content based on your preferences.

### "Class PypiDependenciesEntry (1.19.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse.PypiDependenciesEntry](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse.PypiDependenciesEntry)
- Source ID: `site-python-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud Composer portion of the image version is a full semantic version , or an alias in the form of major version number or latest .
- The maintenance window is the period when Cloud Composer components may undergo maintenance.
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- JSON representation { "networkingType" : enum ( NetworkingType ) , "enablePrivateEnvironment" : boolean , "enablePrivateBuildsOnly" : boolean , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "webServerIpv4CidrBlock" : string , "cloudSqlIpv4CidrBlock" : string , "webServerIpv4ReservedRange" : string , "cloudComposerNetworkIpv4CidrBlock" : string , "cloudComposerNetworkIpv4ReservedRange" : string , "enablePrivatelyUsedPublicIps" : boolean , "cloudComposerConnectionSubnetwork" : string , "networkingConfig" : { object ( NetworkingConfig ) } } Fields networkingType enum ( NetworkingType ) Optional.

