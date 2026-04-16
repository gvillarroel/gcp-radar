---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.266Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Control-plane-independent Airflow CLI"
feature_slug: "control-plane-independent-airflow-cli"
latest_feature_date: "2023-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-control"
keywords:
  - "control"
  - "plane"
  - "independent"
  - "airflow"
  - "cli"
  - "commands"
  - "composer"
  - "no"
---

# Control-plane-independent Airflow CLI

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Airflow CLI commands in Cloud Composer no longer require access to the environment cluster control plane.

## Extended Definition

Airflow CLI commands in Cloud Composer no longer require access to the environment cluster control plane.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-control](https://docs.cloud.google.com/composer/docs/composer-1/access-control)

## Supporting Pages

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Override Airflow configuration options Security overview Cloud Composer access control Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Overview of Airflow UI access control in Cloud Composer Access to Airflow UI and DAG UI and visibility of data and operations in those UIs is controlled at two levels in Cloud Composer: Access to the Airflow UI and DAG UI in Cloud Composer is controlled by IAM .
- It does not control other Airflow permissions such as access to connections, variables, and so on; it does not control access to gcloud CLI commands; it does not control access to the environment's bucket.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Using Airflow UI Access Control Stay organized with collections Save and categorize content based on your preferences.

### Configure authorized networks in Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, in Cloud Composer 1, such access to your environment's cluster is required in Private IP environments to run Airflow CLI commands ( gcloud composer environments run ).
- About authorized networks in Cloud Composer Authorized networks allow you to specify CIDR ranges that can access your environment's cluster control plane using HTTPS.
- Example (Private IP environment): // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "example-environment" , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , }, "masterAuthorizedNetworksConfig" : { "enabled" : true , "cidrBlocks" : [ { "displayName" : "example range 1" , "cidrBlock" : "192.0.2.0/23" }, { "displayName" : "example range 2" , "cidrBlock" : "192.0.4.0/23" } ] } } } Terraform When you create an environment, the master authorized networks config block in the config block controls authorized networks for your environment.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.masterAuthorizedNetworksConfig "config" : { "masterAuthorizedNetworksConfig" : { "enabled" : true , "cidrBlocks" : [ { "displayName" : "example range 1" , "cidrBlock" : "192.0.2.0/23" }, { "displayName" : "example range 2" , "cidrBlock" : "192.0.4.0/23" } ] } } Terraform The master authorized networks config block in the config block controls authorized networks for your environment.

### Access control with IAM \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-control](https://docs.cloud.google.com/composer/docs/composer-1/access-control)
- Source ID: `site-iam-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Method Permission environments.create composer.environments.create , and iam.serviceAccounts.actAs on the environment's service account. environments.delete composer.environments.delete environments.get composer.environments.get environments.list composer.environments.list environments.update composer.environments.update environments.executeAirflowCommand composer.environments.executeairflowcommand environments.stopAirflowCommand composer.environments.executeairflowcommand environments.pollAirflowCommand composer.environments.executeairflowcommand operations.delete composer.operations.delete operations.get composer.operations.get operations.list composer.operations.list Permissions for using gcloud CLI with environments To use gcloud with Cloud Composer environments, you need the following permissions: composer.environments.get container.clusters.get container.clusters.list container.clusters.getCredentials If you want to manage environments or environment buckets with gcloud composer commands, you also must have a role that has enough permissions to do so.
- If you want to run Airflow CLI commands, you need the following, additional permissions: container.namespaces.list container.pods.get container.pods.list container.pods.exec Permissions for working with DAGs from Google Cloud console The following permissions cover working with DAGs from Google Cloud console, through the DAG UI : Permission Description composer.dags.list View the list of DAGs on the Environment details page. composer.dags.get Get detailed information about DAGs, DAG runs, and tasks on the DAG details page. composer.dags.getSourceCode Get source code of DAGs on the DAG details page. composer.dags.execute Pause, unpause and trigger DAGs from the DAG details page.
- Manage environments and environment buckets For a user that can view, create, update, upgrade, and delete environments, manage objects (such as DAG files) in the environment buckets, access the Airflow web interface, run Airflow CLI commands, view and trigger DAGs from the DAG UI : Grant the Environment and Storage Object Administrator ( composer.environmentAndStorageObjectAdmin ) role.
- Manage environments For a user that can view, create, update, upgrade, and delete environments, access the Airflow web interface, run Airflow CLI commands, view and trigger DAGs from the DAG UI : Grant the Composer Administrator ( composer.admin ) role.

