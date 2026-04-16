---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:19.983Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Authorized Networks"
feature_slug: "cloud-composer-authorized-networks"
latest_feature_date: "2021-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
keywords:
  - "composer"
  - "authorized"
  - "networks"
  - "is"
  - "available"
  - "in"
  - "preview"
  - "for"
---

# Cloud Composer Authorized Networks

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Authorized Networks support is available in preview for Cloud Composer.

## Extended Definition

Authorized Networks support is available in preview for Cloud Composer.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)

## Supporting Pages

### Configure authorized networks in Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks)
- Source ID: `site-iam-reference`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example (Private IP environment): resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { node config { // Specify your network and subnetwork network = google compute network.example network.id subnetwork = google compute subnetwork.example subnet.id ip allocation policy = [{ use ip aliases = true }] } private environment config { // Private environment parameters } master authorized networks config { enabled = true cidr blocks { cidr block = "192.0.2.0/23" display name = "example range 1" } cidr blocks { cidr block = "192.0.4.0/23" display name = "example range 2" } } } } Specify authorized networks for an existing environment You can specify authorized networks for an existing environment. gcloud To specify authorized networks, use the --enable-master-authorized-networks argument.
- Example (Private IP environment): // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "example-environment" , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , }, "masterAuthorizedNetworksConfig" : { "enabled" : true , "cidrBlocks" : [ { "displayName" : "example range 1" , "cidrBlock" : "192.0.2.0/23" }, { "displayName" : "example range 2" , "cidrBlock" : "192.0.4.0/23" } ] } } } Terraform When you create an environment, the master authorized networks config block in the config block controls authorized networks for your environment.
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { // Other environment parameters master authorized networks config { enabled = true cidr blocks { cidr block = "192.0.2.0/23" display name = "example range 1" } cidr blocks { cidr block = "192.0.4.0/23" display name = "example range 2" } } } } Disable authorized networks You can disable authorized networks for an existing environment: For Private IP environments, this removes access for ranges that were previously added as authorized network.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.masterAuthorizedNetworksConfig "config" : { "masterAuthorizedNetworksConfig" : { "enabled" : true , "cidrBlocks" : [ { "displayName" : "example range 1" , "cidrBlock" : "192.0.2.0/23" }, { "displayName" : "example range 2" , "cidrBlock" : "192.0.4.0/23" } ] } } Terraform The master authorized networks config block in the config block controls authorized networks for your environment.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- Example: resource "google composer environment" "example" { name = "example-environment" region = "us-central1" config { node config { zone = "us-central1-a" oauth scopes = "[https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/bigquery]" service account = " example-account@example-project . iam.gserviceaccount.com " } software config { python version = "3" } } } Step 12. (Optional) Enforce Beta API usage Preview — Enforcing beta API usage This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- This prevents all internet access to the control plane. --enable-master-authorized-networks and --master-authorized-networks arguments configure authorized networks for your environment. --enable-privately-used-public-ips configures privately used public IP addresses for your environment. --enable-ip-masq-agent enables the IP Masquerade agent .
- Using this option sets the level of access for the control plane to "Public endpoint access enabled, authorized networks enabled" .
- Using this option sets the level of access for the control plane to "Public endpoint access enabled, authorized networks enabled" .

### "Configure large-scale networks for Cloud Composer environments \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks)
- Source ID: `site-iam-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About large-scale networks for Cloud Composer environments To overcome challenges related to these limits, you can organize your Cloud Composer environments into several VPC networks connected to your main/backbone VPC as it is described in the following sections.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This section explains how to organize large-scale networks for Cloud Composer environments.
- This network connects individual VPC networks for service projects running Cloud Composer environments.
- This network acts as a hub for individual VPC networks that host Cloud Composer environments.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- The 'bring your own identity' variant of the URI of the Apache Airflow Web UI hosted within this environment, to be accessed with external identities using workforce identity federation (see Access environments with workforce identity federation ). masterAuthorizedNetworksConfig object ( MasterAuthorizedNetworksConfig ) Optional.
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- If true , builds performed during operations that install Python packages have only private connectivity to Google services (including Artifact Registry) and VPC network (if either NodeConfig.network and NodeConfig.subnetwork fields or NodeConfig.composer network attachment field are specified).

