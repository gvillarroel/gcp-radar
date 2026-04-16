---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.796Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Private IP environments with non-RFC 1918 CGN ranges"
feature_slug: "private-ip-environments-with-non-rfc-1918-cgn-ranges"
latest_feature_date: "2020-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip"
keywords:
  - "1918"
  - "ranges"
  - "environments"
  - "private"
---

# Private IP environments with non-RFC 1918 CGN ranges

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Private IP environments can use non-RFC 1918 carrier-grade NAT ranges in 100.64.0.0/10.

## Extended Definition

Private IP environments can use non-RFC 1918 carrier-grade NAT ranges in 100.64.0.0/10.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)

## Supporting Pages

### "Configure privately used public IP ranges \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip)
- Source ID: `site-iam-reference`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { node config { // Specify your network and subnetwork network = google compute network.example network.id subnetwork = google compute subnetwork.example subnet.id ip allocation policy = [{ use ip aliases = true cluster ipv4 cidr block = null services ipv4 cidr block = null // Specify existing ranges cluster secondary range name = "public-1" services secondary range name = "public-2" }] } private environment config { enable privately used public ips = true // Other private environment parameters } } } What's next Configuring Private IP environments Creating environments About Private IP environments Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "example-environment" , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , "clusterIpv4CidrBlock" : "10.3.192.0/20" , "servicesIpv4CidrBlock" : "172.16.194.0/23" } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , "enablePrivatelyUsedPublicIps" : true } } } User-managed subnet ranges To create user-managed ranges : // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : " ENVIRONMENT NAME " , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , "clusterSecondaryRangeName" : " POD IP RANGE " , "servicesSecondaryRangeName" : " SERVICES IP RANGE " } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , "enablePrivatelyUsedPublicIps" : true } } } Replace: ENVIRONMENT NAME with the name of the environment.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --enable-ip-alias \ --enable-private-environment \ --enable-privately-used-public-ips \ --cluster-ipv4-cidr 10 .3.192.0/20 \ --services-ipv4-cidr 172 .16.194.0/23 User-managed subnet ranges To create user-managed ranges : gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --enable-ip-alias \ --enable-private-environment \ --enable-privately-used-public-ips \ --cluster-secondary-range-name POD IP RANGE NAME \ --services-secondary-range-name SERVICES IP RANGE NAME Replace: ENVIRONMENT NAME with the name of the environment.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "example-environment" , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , "clusterSecondaryRangeName" : "public-1" , "servicesSecondaryRangeName" : "public-2" } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , "enablePrivatelyUsedPublicIps" : true } } } Terraform When you create an environment, the enable privately used public ips field in the private environment config block enables the use of PUPI ranges.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.
- JSON representation { "gkeCluster" : string , "dagGcsPrefix" : string , "nodeCount" : integer , "softwareConfig" : { object ( SoftwareConfig ) } , "nodeConfig" : { object ( NodeConfig ) } , "privateEnvironmentConfig" : { object ( PrivateEnvironmentConfig ) } , "webServerNetworkAccessControl" : { object ( WebServerNetworkAccessControl ) } , "databaseConfig" : { object ( DatabaseConfig ) } , "webServerConfig" : { object ( WebServerConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "maintenanceWindow" : { object ( MaintenanceWindow ) } , "workloadsConfig" : { object ( WorkloadsConfig ) } , "environmentSize" : enum ( EnvironmentSize ) , "airflowUri" : string , "airflowByoidUri" : string , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "recoveryConfig" : { object ( RecoveryConfig ) } , "resilienceMode" : enum ( ResilienceMode ) , "dataRetentionConfig" : { object ( DataRetentionConfig ) } } Fields gkeCluster string Output only.
- When enabled, IPs from public (non-RFC1918) ranges can be used for IPAllocationPolicy.cluster ipv4 cidr block and IPAllocationPolicy.service ipv4 cidr block . cloudComposerConnectionSubnetwork string Optional.
- This field is supported for Cloud Composer environments in versions composer-3-airflow- . . -build. and newer. privateClusterConfig object ( PrivateClusterConfig ) Optional.

### "Configure private IP networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For Private IP environments, Cloud Composer assigns only private IP ( RFC 1918 ) addresses to the managed Google Kubernetes Engine and Cloud SQL VMs in your environment.
- Default IP ranges Region GKE control plane IP range Web server IP range Cloud SQL IP range africa-south1 172.16.64.0/23 172.31.223.0/24 10.0.0.0/12 asia-east1 172.16.42.0/23 172.31.255.0/24 10.0.0.0/12 asia-east2 172.16.0.0/23 172.31.255.0/24 10.0.0.0/12 asia-northeast1 172.16.2.0/23 172.31.254.0/24 10.0.0.0/12 asia-northeast2 172.16.32.0/23 172.31.239.0/24 10.0.0.0/12 asia-northeast3 172.16.30.0/23 172.31.240.0/24 10.0.0.0/12 asia-south1 172.16.4.0/23 172.31.253.0/24 10.0.0.0/12 asia-south2 172.16.50.0/23 172.31.230.0/24 10.0.0.0/12 asia-southeast1 172.16.40.0/23 172.31.235.0/24 10.0.0.0/12 asia-southeast2 172.16.44.0/23 172.31.233.0/24 10.0.0.0/12 australia-southeast1 172.16.6.0/23 172.31.252.0/24 10.0.0.0/12 australia-southeast2 172.16.56.0/23 172.31.227.0/24 10.0.0.0/12 europe-central2 172.16.36.0/23 172.31.237.0/24 10.0.0.0/12 europe-north1 172.16.48.0/23 172.31.231.0/24 10.0.0.0/12 europe-southwest1 172.16.58.0/23 172.31.226.0/24 10.0.0.0/12 europe-west1 172.16.8.0/23 172.31.251.0/24 10.0.0.0/12 europe-west10 172.16.62.0/23 172.31.224.0/24 10.0.0.0/12 europe-west12 172.16.62.0/23 172.31.224.0/24 10.0.0.0/12 europe-west2 172.16.10.0/23 172.31.250.0/24 10.0.0.0/12 europe-west3 172.16.12.0/23 172.31.249.0/24 10.0.0.0/12 europe-west4 172.16.42.0/23 172.31.234.0/24 10.0.0.0/12 europe-west6 172.16.14.0/23 172.31.248.0/24 10.0.0.0/12 europe-west8 172.16.60.0/23 172.31.225.0/24 10.0.0.0/12 europe-west9 172.16.46.0/23 172.31.232.0/24 10.0.0.0/12 me-central1 172.16.58.0/23 172.31.226.0/24 10.0.0.0/12 me-central2 172.16.64.0/23 172.31.223.0/24 10.0.0.0/12 me-west1 172.16.54.0/23 172.31.228.0/24 10.0.0.0/12 northamerica-northeast1 172.16.16.0/23 172.31.247.0/24 10.0.0.0/12 northamerica-northeast2 172.16.46.0/23 172.31.232.0/24 10.0.0.0/12 northamerica-south1 172.16.68.0/23 172.31.221.0/24 10.0.0.0/12 southamerica-east1 172.16.18.0/23 172.31.246.0/24 10.0.0.0/12 southamerica-west1 172.16.58.0/23 172.31.226.0/24 10.0.0.0/12 us-central1 172.16.20.0/23 172.31.245.0/24 10.0.0.0/12 us-east1 172.16.22.0/23 172.31.244.0/24 10.0.0.0/12 us-east4 172.16.24.0/23 172.31.243.0/24 10.0.0.0/12 us-east5 172.16.52.0/23 172.31.229.0/24 10.0.0.0/12 us-south1 172.16.56.0/23 172.31.227.0/24 10.0.0.0/12 us-west1 172.16.38.0/23 172.31.236.0/24 10.0.0.0/12 us-west2 172.16.34.0/23 172.31.238.0/24 10.0.0.0/12 us-west3 172.16.26.0/23 172.31.242.0/24 10.0.0.0/12 us-west4 172.16.28.0/23 172.31.241.0/24 10.0.0.0/12 (Optional) Configure connectivity to Google APIs and services As an option, you might want to route all traffic to Google APIs and services through several IP addresses that belong to the private.googleapis.com domain.
- To create a Private IP environment, you need to have the following information: Your VPC network ID Your VPC subnetwork ID Two secondary IP ranges in your VPC subnetwork: Secondary IP range for pods Secondary IP range for services IP ranges for the components of the environment: GKE Control Plane IP range .
- To obtain environment cluster's IP ranges: Pod, Service, and Control Plane address ranges are available on the Clusters page of your environment's cluster: In Google Cloud console, go to the Environments page.

