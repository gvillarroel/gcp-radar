---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:19.915Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer environment bucket directory restoration"
feature_slug: "cloud-composer-environment-bucket-directory-restoration"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/delete-environments"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer automatically recreates deleted /dags, /data, /logs, and /plugins folders in an environment bucket.

## Extended Definition

Cloud Composer automatically recreates deleted /dags, /data, /logs, and /plugins folders in an environment bucket.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/delete-environments](https://docs.cloud.google.com/composer/docs/composer-1/delete-environments)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service](https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service)

## Supporting Pages

### Delete Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/delete-environments](https://docs.cloud.google.com/composer/docs/composer-1/delete-environments)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resources that are not deleted automatically Deleting your environment does not delete the following data in your project: Your environment's Cloud Storage bucket.
- Caution: Cloud Composer does not automatically delete the environment's bucket.
- Caution: Cloud Composer doesn't automatically delete the environment's bucket.
- Cloud Composer does not delete the environment's bucket automatically.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- JSON representation { "networkingType" : enum ( NetworkingType ) , "enablePrivateEnvironment" : boolean , "enablePrivateBuildsOnly" : boolean , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "webServerIpv4CidrBlock" : string , "cloudSqlIpv4CidrBlock" : string , "webServerIpv4ReservedRange" : string , "cloudComposerNetworkIpv4CidrBlock" : string , "cloudComposerNetworkIpv4ReservedRange" : string , "enablePrivatelyUsedPublicIps" : boolean , "cloudComposerConnectionSubnetwork" : string , "networkingConfig" : { object ( NetworkingConfig ) } } Fields networkingType enum ( NetworkingType ) Optional.
- Home Documentation Data analytics Cloud Composer Reference Send feedback REST Resource: projects.locations.environments Stay organized with collections Save and categorize content based on your preferences.
- DAG objects for this environment reside in a simulated directory with the given prefix. nodeCount integer The number of nodes in the Kubernetes Engine cluster that will be used to run this environment.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- When you create an environment, Cloud Composer creates a bucket for your environment automatically.
- Data lineage integration is automatically enabled in a new Cloud Composer environment if the following conditions are met: Data Lineage API is enabled in your project.
- Instead, Cloud Composer automatically selects two zones in the region where the environment is located.
- Your environment uses this bucket in the same way as the automatically created bucket.

### Enable and disable the Cloud Composer service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service](https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service)
- Source ID: `site-iam-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Delete your environment , including the resources that are not deleted automatically.
- Make sure that all Cloud Composer environments in your project are deleted.
- The following services are required by Cloud Composer: artifactregistry.googleapis.com cloudbuild.googleapis.com composer.googleapis.com compute.googleapis.com container.googleapis.com deploymentmanager.googleapis.com logging.googleapis.com cloudkms.googleapis.com, if you are using Cloud KMS or CMEK keys monitoring.googleapis.com pubsub.googleapis.com storage.googleapis.com secretmanager.googleapis.com, if you are using Secret Manager as a secret backend cloudresourcemanager.googleapis.com servicedirectory.googleapis.com Google services like Cloud DNS or IAM are already allowed by default in most projects.
- Deactivating these APIs won't cause the deactivation of the Cloud Composer API. artifactregistry.googleapis.com cloudbuild.googleapis.com container.googleapis.com pubsub.googleapis.com sqladmin.googleapis.com Starting May 27, 2026 , these APIs will no longer be enabled automatically when you enable the Cloud Composer API.

