---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.638Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Customer-managed encryption keys"
feature_slug: "customer-managed-encryption-keys"
latest_feature_date: "2022-03-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption"
  - "https://docs.cloud.google.com/composer/docs/composer-2/composer-overview"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
keywords:
  - "encrypting"
  - "customer"
  - "encryption"
  - "keys"
  - "managed"
  - "environment"
  - "supports"
---

# Customer-managed encryption keys

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer 2 supports customer-managed encryption keys for encrypting environment resources; Cloud Composer supports customer-managed encryption keys for protecting resources.

## Extended Definition

Cloud Composer 2 supports customer-managed encryption keys for encrypting environment resources; Cloud Composer supports customer-managed encryption keys for protecting resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)

## Supporting Pages

### "Configure encryption with customer-managed encryption keys \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- Source ID: `site-iam-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Data protected with CMEK encryption Cloud Composer protects the following data with CMEK encryption: Contents and schema of the Airflow database Environment and Airflow task logs in Cloud Logging Contents of the environment's bucket Secrets stored in the environment's cluster Persistent disks used by the task queue Container images of environment components stored in Artifact Registry repositories For specific details about how the data is encrypted, see: About customer-managed encryption keys (CMEK) in the Cloud SQL documentation.
- Cloud Composer stores the following information protected with Google-owned and Google-managed encryption keys, not customer-managed keys: Environment name Airflow configuration overrides Environment variables Descriptions of allowed IP ranges IP ranges Labels The names of some parameters stored by Cloud Composer can include a sub-string of environment's name.
- Example: gcloud composer environments describe \ example-environment \ --location us-central1 \ --format = "value(config.encryptionConfig)" Use CMEK for Cloud Composer logs Cloud Logging supports encrypting Log storage with CMEK keys.
- Create a customer-managed encryption key Follow the steps outlined in Creating symmetric encryption keys to create a key in the region where your environment is located.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Customer-managed Encryption Key available through Google's Key Management Service.
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.
- JSON representation { "gkeCluster" : string , "dagGcsPrefix" : string , "nodeCount" : integer , "softwareConfig" : { object ( SoftwareConfig ) } , "nodeConfig" : { object ( NodeConfig ) } , "privateEnvironmentConfig" : { object ( PrivateEnvironmentConfig ) } , "webServerNetworkAccessControl" : { object ( WebServerNetworkAccessControl ) } , "databaseConfig" : { object ( DatabaseConfig ) } , "webServerConfig" : { object ( WebServerConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "maintenanceWindow" : { object ( MaintenanceWindow ) } , "workloadsConfig" : { object ( WorkloadsConfig ) } , "environmentSize" : enum ( EnvironmentSize ) , "airflowUri" : string , "airflowByoidUri" : string , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "recoveryConfig" : { object ( RecoveryConfig ) } , "resilienceMode" : enum ( ResilienceMode ) , "dataRetentionConfig" : { object ( DataRetentionConfig ) } } Fields gkeCluster string Output only.
- When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork. networkingConfig object ( NetworkingConfig ) Optional.

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Private Service Connect environments Shared VPC environments Configuring VPC Service Controls Authorized networks IP Masquerade agent Privately used public IP ranges Other features of Cloud Composer Other Cloud Composer features include: Autoscaling environments Development with local Airflow environments Highly resilient environments Environment snapshots Data lineage integration with Dataplex Universal Catalog Encryption with customer-managed encryption keys (CMEK) Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Cloud Composer helps you create managed Airflow environments quickly and use Airflow-native tools, such as the powerful Airflow web interface and command-line tools, so you can focus on your workflows and not your infrastructure.
- Environment networking Cloud Composer supports several networking configurations for environments, with many configuration options.
- When you create an environment, you can select an image with a specific Airflow version: Cloud Composer 3 supports Airflow 2.

