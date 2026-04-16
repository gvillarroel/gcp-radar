---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.828Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Private IP environments with Shared VPC"
feature_slug: "private-ip-environments-with-shared-vpc"
latest_feature_date: "2020-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
keywords:
  - "private"
  - "ip"
  - "environments"
  - "shared"
  - "vpc"
  - "composer"
  - "can"
  - "created"
---

# Private IP environments with Shared VPC

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Private IP Cloud Composer environments can be created for Shared VPC in beta.

## Extended Definition

Private IP Cloud Composer environments can be created for Shared VPC in beta.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)

## Supporting Pages

### "Configure Shared VPC networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- Source ID: `site-iam-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the host project: Edit permissions for the Composer Service Agent account, service- SERVICE PROJECT NUMBER @cloudcomposer-accounts.iam.gserviceaccount.com ) For this account, add another role on the project level: For Private IP environments, add the Composer Shared VPC Agent role.
- This allows the GKE Service Account of the service project to use the GKE Service Account of the host project to configure shared network resources. (Private IP, optional) Configure firewall rules and connectivity to Google domains In a Shared VPC configuration with Private IP environments, as an option, you might want to route all traffic to Google APIs and services through several IP addresses that belong to the private.googleapis.com domain and configure corresponding firewall rules.
- Configure the service project If Cloud Composer environments were never created in the service project, then provision the Composer Service Agent Account in the service project : gcloud beta services identity create --service = composer.googleapis.com Configure the host project Configure the host project as described further.
- If your Shared VPC configuration uses Private IP environments: (Optional) Configure connectivity to Google APIs and services . (Optional) Configure firewall rules .

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- This field is supported for Cloud Composer environments in versions composer-3-airflow- . . -build. and newer. privateClusterConfig object ( PrivateClusterConfig ) Optional.
- This field is supported for Cloud Composer environments in versions composer-2. . -airflow- . . and newer. enablePrivatelyUsedPublicIps boolean Optional.
- If true , a Private IP Cloud Composer environment is created.
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Example (Private IP environment ) gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " SERVICE ACCOUNT " \ --enable-private-environment \ --enable-ip-alias \ --network NETWORK ID \ --subnetwork SUBNETWORK ID \ --cluster-ipv4-cidr PODS RANGE \ --services-ipv4-cidr SERVICES RANGE \ --master-ipv4-cidr CONTROL PLANE RANGE \ --web-server-ipv4-cidr WEB SERVER RANGE \ --cloud-sql-ipv4-cidr SQL RANGE Replace: NETWORK ID with your VPC network ID.
- What's next Troubleshooting environment creation Configuring Shared VPC Configuring VPC Service Controls Adding and updating DAGs Accessing Airflow UI Updating and deleting environments About Cloud Composer versions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud Composer 2 environments can use both VPC peerings and Private Service Connect for connectivity in Private IP.
- Note: Cloud Composer 1 supports only private IP environments with VPC peerings.

