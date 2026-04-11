---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.551Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Authorized networks support"
feature_slug: "authorized-networks-support"
latest_feature_date: "2022-06-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
keywords:
  - "authorized"
  - "networks"
  - "in"
  - "composer"
  - "is"
  - "now"
  - "generally"
  - "available"
---

# Authorized networks support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Authorized networks support in Cloud Composer is now generally available.

## Extended Definition

Authorized networks support in Cloud Composer is now generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)

## Supporting Pages

### Configure authorized networks in Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example (Private IP environment): resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { node config { // Specify your network and subnetwork network = google compute network.example network.id subnetwork = google compute subnetwork.example subnet.id ip allocation policy = [{ use ip aliases = true }] } private environment config { // Private environment parameters } master authorized networks config { enabled = true cidr blocks { cidr block = "192.0.2.0/23" display name = "example range 1" } cidr blocks { cidr block = "192.0.4.0/23" display name = "example range 2" } } } } Specify authorized networks for an existing environment You can specify authorized networks for an existing environment. gcloud To specify authorized networks, use the --enable-master-authorized-networks argument.
- Example (Private IP environment): // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "example-environment" , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , }, "masterAuthorizedNetworksConfig" : { "enabled" : true , "cidrBlocks" : [ { "displayName" : "example range 1" , "cidrBlock" : "192.0.2.0/23" }, { "displayName" : "example range 2" , "cidrBlock" : "192.0.4.0/23" } ] } } } Terraform When you create an environment, the master authorized networks config block in the config block controls authorized networks for your environment.
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { // Other environment parameters master authorized networks config { enabled = true cidr blocks { cidr block = "192.0.2.0/23" display name = "example range 1" } cidr blocks { cidr block = "192.0.4.0/23" display name = "example range 2" } } } } Disable authorized networks You can disable authorized networks for an existing environment: For Private IP environments, this removes access for ranges that were previously added as authorized network.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.masterAuthorizedNetworksConfig "config" : { "masterAuthorizedNetworksConfig" : { "enabled" : true , "cidrBlocks" : [ { "displayName" : "example range 1" , "cidrBlock" : "192.0.2.0/23" }, { "displayName" : "example range 2" , "cidrBlock" : "192.0.4.0/23" } ] } } Terraform The master authorized networks config block in the config block controls authorized networks for your environment.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- DAG triggering through private networks using Cloud Run functions Triggering DAGs with Cloud Run functions through private networks with the use of VPC Connector is not supported by Cloud Composer.
- While it's possible to force the database to reclaim unused disk space, this is a resource hungry operation which additionally locks the database making Cloud Composer unavailable.
- Intermittent issues when communicating to the environment's database This known issue applies only to Cloud Composer 1.
- Airflow 1.9.0 stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06/1.log Airflow 1.10.x stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log As a result, if you upgrade from Airflow 1.9.0 to Airflow 1.10.x and would like to read the log for a task executed with Airflow 1.9.0, the Airflow Web server will show the following error message: Unable to read remote log from BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Workaround: Rename the logs generated by Airflow 1.9.0 in the Cloud Storage bucket using the format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Cannot create Cloud Composer environments with the organization policy constraints/compute.disableSerialPortLogging enforced Cloud Composer environment creation fails if the constraints/compute.disableSerialPortLogging organization policy is enforced on the target project.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Change Cloud Composer 2.4.2 images are available: composer-2.4.2-airflow-2.5.3 (default) composer-2.4.2-airflow-2.4.3 September 07, 2023 Feature Maintenance windows configuration is now generally available (GA).
- December 17, 2025 Feature Extra Large environments are now generally available (GA) in Cloud Composer 3: You can now use the extra large environment size for new and existing Cloud Composer 3 environments.
- December 16, 2024 Feature Cloud Composer 3 is now generally available (GA) : All Airflow builds starting from airflow-2.9.3-build.11 and airflow-2.10.2-build.4 are supported at the GA level.
- January 25, 2024 Feature The Logs in Cloud Logging Only feature is now generally available (GA): New Cloud Composer environments now save Airflow task logs only in Cloud Logging by default.

