---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.286Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Private IP environments"
feature_slug: "cloud-composer-private-ip-environments"
latest_feature_date: "2020-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
keywords:
  - "composer"
  - "private"
  - "ip"
  - "environments"
  - "were"
  - "made"
  - "generally"
  - "available"
---

# Cloud Composer Private IP environments

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Private IP Composer environments were made generally available.

## Extended Definition

Private IP Composer environments were made generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)

## Supporting Pages

### "Configure private IP networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- For Private IP environments, Cloud Composer assigns only private IP ( RFC 1918 ) addresses to the managed Google Kubernetes Engine and Cloud SQL VMs in your environment.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page provides information about configuring your Google Cloud project networking for Private IP environments.
- To obtain environment cluster's IP ranges: Pod, Service, and Control Plane address ranges are available on the Clusters page of your environment's cluster: In Google Cloud console, go to the Environments page.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure private IP networking Stay organized with collections Save and categorize content based on your preferences.

### "Configure privately used public IP ranges \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip)
- Source ID: `site-iam-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { node config { // Specify your network and subnetwork network = google compute network.example network.id subnetwork = google compute subnetwork.example subnet.id ip allocation policy = [{ use ip aliases = true cluster ipv4 cidr block = null services ipv4 cidr block = null // Specify existing ranges cluster secondary range name = "public-1" services secondary range name = "public-2" }] } private environment config { enable privately used public ips = true // Other private environment parameters } } } What's next Configuring Private IP environments Creating environments About Private IP environments Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "example-environment" , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , "clusterIpv4CidrBlock" : "10.3.192.0/20" , "servicesIpv4CidrBlock" : "172.16.194.0/23" } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , "enablePrivatelyUsedPublicIps" : true } } } User-managed subnet ranges To create user-managed ranges : // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : " ENVIRONMENT NAME " , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , "clusterSecondaryRangeName" : " POD IP RANGE " , "servicesSecondaryRangeName" : " SERVICES IP RANGE " } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , "enablePrivatelyUsedPublicIps" : true } } } Replace: ENVIRONMENT NAME with the name of the environment.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --enable-ip-alias \ --enable-private-environment \ --enable-privately-used-public-ips \ --cluster-ipv4-cidr 10 .3.192.0/20 \ --services-ipv4-cidr 172 .16.194.0/23 User-managed subnet ranges To create user-managed ranges : gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --enable-ip-alias \ --enable-private-environment \ --enable-privately-used-public-ips \ --cluster-secondary-range-name POD IP RANGE NAME \ --services-secondary-range-name SERVICES IP RANGE NAME Replace: ENVIRONMENT NAME with the name of the environment.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "example-environment" , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , "clusterSecondaryRangeName" : "public-1" , "servicesSecondaryRangeName" : "public-2" } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , "enablePrivatelyUsedPublicIps" : true } } } Terraform When you create an environment, the enable privately used public ips field in the private environment config block enables the use of PUPI ranges.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Example (Private IP environment ) gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " SERVICE ACCOUNT " \ --enable-private-environment \ --enable-ip-alias \ --network NETWORK ID \ --subnetwork SUBNETWORK ID \ --cluster-ipv4-cidr PODS RANGE \ --services-ipv4-cidr SERVICES RANGE \ --master-ipv4-cidr CONTROL PLANE RANGE \ --web-server-ipv4-cidr WEB SERVER RANGE \ --cloud-sql-ipv4-cidr SQL RANGE Replace: NETWORK ID with your VPC network ID.
- Cloud Composer 2 environments can use both VPC peerings and Private Service Connect for connectivity in Private IP.
- Note: Cloud Composer 1 supports only private IP environments with VPC peerings.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "office net 1" }, { "value" : "192.0.4.0/24" , "description" : "office net 3" } ] }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, the allowed ip range block in the web server network access control block contains IP ranges that can access web server.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- This field is supported for Cloud Composer environments in versions composer-2. . -airflow- . . and newer. enablePrivatelyUsedPublicIps boolean Optional.
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.
- JSON representation { "networkingType" : enum ( NetworkingType ) , "enablePrivateEnvironment" : boolean , "enablePrivateBuildsOnly" : boolean , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "webServerIpv4CidrBlock" : string , "cloudSqlIpv4CidrBlock" : string , "webServerIpv4ReservedRange" : string , "cloudComposerNetworkIpv4CidrBlock" : string , "cloudComposerNetworkIpv4ReservedRange" : string , "enablePrivatelyUsedPublicIps" : boolean , "cloudComposerConnectionSubnetwork" : string , "networkingConfig" : { object ( NetworkingConfig ) } } Fields networkingType enum ( NetworkingType ) Optional.
- This field is supported for Cloud Composer environments in versions composer-3-airflow- . . -build. and newer. privateClusterConfig object ( PrivateClusterConfig ) Optional.

