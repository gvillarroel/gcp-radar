# Config Connector

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 608
Unique features: 859

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-10 | ContainerCluster DNS endpoint Kubernetes tokens |  | Config Connector added a ContainerCluster field to enable Kubernetes tokens via DNS endpoint configuration. |
| 2026-03-10 | ParameterManagerParameter |  | Config Connector added an alpha direct reconciler resource for managing Parameter Manager parameters; Config Connector added an alpha direct reconciler resource for Parameter Manager parameters. |
| 2026-02-22 | ComputeSecurityPolicy |  | Config Connector added a beta direct reconciler resource for managing Google Cloud Armor security policies. |
| 2026-02-22 | config-connector CLI preview command |  | Config Connector added a preview command to the config-connector CLI. |
| 2026-02-22 | ContainerCluster default compute class configuration |  | Config Connector added a ContainerCluster field for cluster autoscaling default compute class configuration. |
| 2026-02-22 | MemorystoreInstance |  | Config Connector added a beta direct reconciler resource for managing Memorystore for Valkey instances; Config Connector added a beta direct reconciler resource for Memorystore instances. |
| 2026-02-22 | RunJob GCS volume support |  | Config Connector added RunJob support for GCS-backed volumes. |
| 2026-02-22 | RunJob NFS volume support |  | Config Connector added RunJob support for NFS-backed volumes. |
| 2026-02-22 | SQLInstance failover DR replica reference |  | Config Connector added a SQLInstance field for designating Cloud SQL Enterprise Plus DR replicas. |
| 2026-01-30 | TagsLocationTagBinding |  | Config Connector promoted TagsLocationTagBinding to beta with direct reconciler as the default and support for tagging regional resources; Config Connector added support for the TagsLocationTagBinding resource. |
| 2026-01-27 | Vertical Pod Autoscaler support |  | Config Connector added support for enabling Vertical Pod Autoscaler for components through ControllerResource and NamespacedControllerResource; Config Connector added Vertical Pod Autoscaler support for controllers and a verticalPodAutoscalerMode field on ConfigConnector and ConfigConnectorContext. |
| 2026-01-23 | AlloyDBInstance connection pool configuration |  | Config Connector added AlloyDBInstance fields for configuring and reporting connection pool settings. |
| 2026-01-23 | ArtifactRegistryRepository |  | Config Connector added a beta direct reconciler resource for Artifact Registry repositories. |
| 2026-01-23 | KCC workload GOMEMLIMIT |  | Config Connector set GOMEMLIMIT for KCC workloads to improve memory management and stability. |
| 2026-01-23 | LoggingLink |  | Config Connector added a beta direct reconciler resource for Logging links. |
| 2026-01-23 | PrivateCACAPool |  | Config Connector added a beta direct reconciler resource for Private CA CA pools. |
| 2026-01-09 | AccessContextManagerAccessLevel |  | Config Connector added a beta direct reconciler resource for Access Context Manager access levels. |
| 2026-01-09 | AlloyDBBackup |  | Config Connector added a beta direct reconciler resource for AlloyDB backups. |
| 2026-01-09 | AlloyDBInstance observability and query insights configuration |  | Config Connector added AlloyDBInstance fields for observability configuration and Query Insights configuration. |
| 2026-01-09 | Cilium cluster-wide network policy support |  | Config Connector added support for Cilium cluster-wide network policy. |
| 2026-01-09 | ContainerNodePool nested virtualization |  | Config Connector added a ContainerNodePool field to enable nested virtualization. |
| 2026-01-09 | disable-dependent-services annotation |  | Config Connector added support for the iam.cnrm.cloud.google.com/disable-dependent-services annotation. |
| 2025-12-19 | DataplexTask reference fields |  | Config Connector updated DataplexTask to use reference fields for project, service account, and KMS key. |
| 2025-12-19 | RunJob container port field |  | Config Connector added a RunJob container port field. |
| 2025-12-04 | AlloyDBCluster restore from backup |  | Config Connector added AlloyDBCluster fields for restoring from a backup or continuous backup source. |
| 2025-12-04 | BigQueryReservationAssignment job type |  | Config Connector added a BigQueryReservationAssignment field for job type. |
| 2025-12-04 | CertificateManagerCertificateIssuanceConfig |  | Config Connector added a beta direct reconciler resource for Certificate Manager certificate issuance configurations. |
| 2025-12-04 | FirestoreDatabase delete protection state |  | Config Connector added a FirestoreDatabase field for delete protection state. |
| 2025-12-04 | FirestoreField TTL configuration |  | Config Connector added a FirestoreField field for TTL configuration. |
| 2025-12-04 | RunJob container dependency ordering |  | Config Connector added a RunJob field for container dependency ordering. |
| 2025-11-20 | mockgcp BigtableMaterializedView support |  | Mockgcp added support for BigtableMaterializedView. |
| 2025-11-20 | mockgcp IAP OAuth brand support |  | Mockgcp added support for IAP OAuth brands. |
| 2025-11-20 | reconciliation controller type reporting |  | Config Connector now reports the controller type at the start and end of reconciliation. |
| 2025-11-14 | BackupDRBackupVault |  | Config Connector added a beta direct reconciler resource for Backup and DR backup vaults. |
| 2025-11-14 | FirestoreBackupSchedule |  | Config Connector added an alpha direct reconciler resource for Firestore backup schedules. |
| 2025-11-14 | FirestoreDocument |  | Config Connector added an alpha direct reconciler resource for Firestore documents. |
| 2025-11-14 | OrgPolicyCustomConstraint |  | Config Connector added a beta direct reconciler resource for Org Policy custom constraints. |
| 2025-10-16 | BackupDRBackupPlan retention and backup window |  | Config Connector added BackupDRBackupPlan fields for retention period and backup window. |
| 2025-10-16 | BigtableMaterializedView source table and definition |  | Config Connector added BigtableMaterializedView fields for source table reference and view definition. |
| 2025-10-07 | ComposerEnvironment Cloud Data Lineage integration |  | Config Connector added a ComposerEnvironment softwareConfig field for Cloud Data Lineage integration. |
| 2025-10-07 | ComposerEnvironment DAG processor configuration |  | Config Connector added a ComposerEnvironment workloadsConfig field for the DAG processor. |
| 2025-10-07 | ComposerEnvironment storage configuration |  | Config Connector added a ComposerEnvironment storageConfig field. |
| 2025-10-07 | ComposerEnvironment triggerer configuration |  | Config Connector added a ComposerEnvironment workloadsConfig field for the triggerer. |
| 2025-10-07 | ComposerEnvironment web server plugins mode |  | Config Connector added a ComposerEnvironment softwareConfig field for web server plugins mode. |
| 2025-09-22 | AlloyDBCluster database version |  | Config Connector added an AlloyDBCluster field for database version. |
| 2025-07-30 | APIGatewayAPI |  | Config Connector added a beta direct reconciler resource for API Gateway APIs. |
| 2025-07-30 | AppHubApplication |  | Config Connector added a beta direct reconciler resource for App Hub applications. |
| 2025-07-30 | StorageAnywhereCache |  | Config Connector added a beta direct reconciler resource for Storage Anywhere Cache. |
| 2025-06-10 | SecretManagerSecret labels |  | Config Connector added a SecretManagerSecret labels field for the opt-in direct controller. |
| 2025-06-10 | SpannerInstance default backup schedule type |  | Config Connector added a SpannerInstance field for default backup schedule type in the opt-in direct controller; Config Connector added a SpannerInstance field for default backup schedule type. |
| 2025-06-10 | SpannerInstance labels |  | Config Connector added a SpannerInstance labels field for the opt-in direct controller; Config Connector added a SpannerInstance labels field. |
| 2025-06-10 | SpeechCustomClass |  | Config Connector added a beta direct reconciler resource for Speech custom classes. |
| 2025-06-10 | SpeechPhraseSet |  | Config Connector added a beta direct reconciler resource for Speech phrase sets. |
| 2025-06-10 | SpeechRecognizer |  | Config Connector added a beta direct reconciler resource for Speech recognizers. |
| 2025-06-10 | StorageBucket relocation fields |  | Config Connector removed immutability constraints on StorageBucket location and custom placement data location fields to support bucket relocation scenarios. |
| 2025-06-10 | VertexAIMetadataStore |  | Config Connector added a beta direct reconciler resource for Vertex AI Metadata Store. |
| 2025-06-10 | VertexAINotebooksInstance |  | Config Connector added a beta direct reconciler resource for Vertex AI Notebooks instances. |
| 2025-05-01 | IAPSettings |  | Config Connector added a beta direct reconciler resource for IAP settings. |
| 2025-04-07 | ApigeeEndpointAttachment |  | Config Connector added a beta direct reconciler resource for Apigee endpoint attachments. |
| 2025-04-07 | ApigeeEnvgroupAttachment |  | Config Connector added a beta direct reconciler resource for Apigee environment group attachments. |
| 2025-04-07 | ApigeeInstanceAttachment |  | Config Connector added a beta direct reconciler resource for Apigee instance attachments. |
| 2025-04-07 | GKEHubFeatureMembership Config Sync stop syncing |  | Config Connector added a GKEHubFeatureMembership field for Config Sync stopSyncing. |
| 2025-04-07 | ManagedKafkaTopic |  | Config Connector added a beta direct reconciler resource for Managed Kafka topics. |
| 2025-04-07 | SecureSourceManagerInstance |  | Config Connector added a beta direct reconciler resource for Secure Source Manager instances. |
| 2025-04-07 | SecureSourceManagerRepository |  | Config Connector added a beta direct reconciler resource for Secure Source Manager repositories. |
| 2025-02-28 | AlloyDBInstance |  | Config Connector added a beta direct reconciler resource for AlloyDB instances. |
| 2025-02-28 | ApigeeInstance |  | Config Connector added a beta direct reconciler resource for Apigee instances. |
| 2025-02-28 | ManagedKafkaCluster |  | Config Connector added a beta direct reconciler resource for Managed Kafka clusters. |
| 2025-02-04 | ApigeeEnvgroup |  | Config Connector added a beta direct reconciler resource for Apigee environment groups used to define routing hostnames. |
| 2025-02-04 | KMSAutokeyconfig |  | Config Connector added a beta direct reconciler resource for managing KMS autokey configuration. |
| 2025-02-04 | SpannerInstance autoscaling configuration |  | Config Connector added a SpannerInstance field for autoscaling configuration behind the direct reconciler opt-in annotation. |
| 2025-02-04 | SpannerInstance edition |  | Config Connector added a SpannerInstance field for edition behind the direct reconciler opt-in annotation. |
| 2024-12-23 | BigQueryAnalyticsHubListing |  | Config Connector added a beta direct reconciler resource for BigQuery Analytics Hub listings. |
| 2024-12-23 | BigQueryDataTransferConfig observed error status |  | Config Connector added a BigQueryDataTransferConfig observedState error field for details about the latest configuration failure. |
| 2024-12-23 | BigQueryDataTransferConfig schedule options v2 |  | Config Connector added a BigQueryDataTransferConfig field for customizing data transfer scheduling with scheduleOptionsV2. |
| 2024-12-23 | FirestoreDatabase |  | Config Connector added a beta direct reconciler resource for Firestore databases. |
| 2024-12-23 | GkeHubFeatureMembership Config Sync auto upgrade |  | Config Connector added a GkeHubFeatureMembership field to enable Config Sync Auto Upgrade with the direct reconciler opt-in annotation. |
| 2024-12-23 | Workstation |  | Config Connector added a beta direct reconciler resource for Workstations. |
| 2024-12-23 | WorkstationConfig |  | Config Connector added a beta direct reconciler resource for Workstation configurations. |
| 2024-12-10 | BigQueryTransferConfig |  | Config Connector added a beta direct reconciler resource for managing BigQuery data transfer metadata. |
| 2024-12-10 | IAM BigQuery connection member reference |  | Config Connector added IAMPolicyMember and IAMPartialPolicy support for memberFrom.bigQueryConnectionConnectionRef using BigQueryConnectionConnection. |
| 2024-12-10 | KMSKeyHandle |  | Config Connector added a beta direct reconciler resource for provisioning CryptoKeys through KMS key handles. |
| 2024-11-13 | BigQueryAnalyticsHubDataExchange |  | Config Connector added a beta direct reconciler resource for BigQuery Analytics Hub data exchanges. |
| 2024-11-13 | BigQueryConnectionConnection |  | Config Connector added a beta direct reconciler resource for BigQuery connections to Google services and external data sources. |
| 2024-11-13 | cluster mode request rate limiting |  | Config Connector added cluster and namespace modes for managing reconciliation request rate limits to the Kubernetes API server. |
| 2024-11-13 | PrivilegedAccessManagerEntitlement |  | Config Connector added a beta direct reconciler resource for Privileged Access Manager entitlements. |
| 2024-11-13 | WorkstationCluster |  | Config Connector added a beta direct reconciler resource for workstation clusters. |
| 2024-06-18 | ControllerReconciler customization |  | Config Connector added the ControllerReconciler CRD to customize client-side Kubernetes API server request rate limits for reconciliation. |
| 2024-06-18 | Direct Controller default reconciler |  | Config Connector made the Direct Controller the default reconciler and initialized its registration flow. |
| 2024-04-03 | AlloyDB support enhancements |  | Config Connector improved AlloyDB support by adding new fields to AlloyDBCluster and AlloyDBInstance. |
| 2024-02-14 | ComputeNetworkFirewallPolicy |  | Config Connector added support for the ComputeNetworkFirewallPolicy resource. |
| 2024-02-14 | RunJob VPC access connector reference |  | Config Connector added a RunJob field for VPC access connector references. |
| 2024-02-14 | status.observedState support |  | Config Connector added initial status.observedState support for ContainerCluster, ContainerNodePool, and RedisInstance. |
| 2023-12-06 | AlloyDBUser |  | Config Connector added support for the AlloyDBUser resource. |
| 2023-12-06 | BigtableAppProfile standard isolation |  | Config Connector added a BigtableAppProfile field for standard isolation. |
| 2023-12-06 | EdgeContainerCluster |  | Config Connector added support for the EdgeContainerCluster resource. |
| 2023-12-06 | EdgeContainerNodePool |  | Config Connector added support for the EdgeContainerNodePool resource. |
| 2023-12-06 | EdgeNetworkNetwork resource |  | Config Connector added support for managing the EdgeNetworkNetwork resource in v1beta1. |
| 2023-12-06 | EdgeNetworkSubnet resource |  | Config Connector added support for managing the EdgeNetworkSubnet resource in v1beta1. |
| 2023-10-27 | AlloyDBBackup resource |  | Config Connector added support for managing the AlloyDBBackup resource in v1beta1. |
| 2023-10-27 | AlloyDBCluster network configuration |  | Config Connector added the networkConfig field to AlloyDBCluster. |
| 2023-10-27 | AlloyDBCluster resource |  | Config Connector added support for managing the AlloyDBCluster resource in v1beta1. |
| 2023-10-27 | AlloyDBInstance resource |  | Config Connector added support for managing the AlloyDBInstance resource in v1beta1. |
| 2023-10-27 | ComputeSubnetwork internal IPv6 prefix status |  | Config Connector added the internalIpv6Prefix status field to ComputeSubnetwork. |
| 2023-10-27 | ComputeTargetHTTPSProxy server TLS policy reference |  | Config Connector added the serverTlsPolicyRef field to ComputeTargetHTTPSProxy. |
| 2023-10-27 | ContainerAttachedCluster resource |  | Config Connector added support for managing the ContainerAttachedCluster resource in v1beta1. |
| 2023-10-27 | ContainerCluster fast socket |  | Config Connector added the fastSocket field to ContainerCluster node configuration. |
| 2023-10-27 | ContainerNodePool fast socket |  | Config Connector added the fastSocket field to the ContainerNodePool node configuration. |
| 2023-10-27 | ControllerResource duplicate webhook validation |  | Config Connector added validation for duplicate webhooks in the spec.webhooks list of customizable ControllerResource CRDs. |
| 2023-10-27 | ControllerResource v1beta1 |  | The ControllerResource CRD graduated to v1beta1. |
| 2023-10-27 | MutatingWebhookConfigurationCustomization name validation |  | Config Connector added name validation for MutatingWebhookConfigurationCustomization CRDs. |
| 2023-10-27 | MutatingWebhookConfigurationCustomization v1beta1 |  | The MutatingWebhookConfigurationCustomization CRD graduated to v1beta1. |
| 2023-10-27 | MutatingWebhookConfigurationCustomization webhook name errors |  | Config Connector now reports invalid webhook name errors in the status of MutatingWebhookConfigurationCustomization resources. |
| 2023-10-27 | NamespacedControllerResource duplicate webhook validation |  | Config Connector added validation for duplicate webhooks in the spec.webhooks list of customizable NamespacedControllerResource CRDs. |
| 2023-10-27 | NamespacedControllerResource v1beta1 |  | The NamespacedControllerResource CRD graduated to v1beta1. |
| 2023-10-27 | NetworkConnectivitySpoke linked VPC network |  | Config Connector added the linkedVPCNetwork field to NetworkConnectivitySpoke. |
| 2023-10-27 | RunJob network interfaces |  | Config Connector added the vpcAccess.networkInterfaces field to the RunJob resource template. |
| 2023-10-27 | RunService network interfaces |  | Config Connector added the vpcAccess.networkInterfaces field to the RunService template. |
| 2023-10-27 | SecretManagerSecretVersion base64 secret data |  | Config Connector added the isSecretDataBase64 field to SecretManagerSecretVersion. |
| 2023-10-27 | ValidatingWebhookConfigurationCustomization name validation |  | Config Connector added name validation for ValidatingWebhookConfigurationCustomization CRDs. |
| 2023-10-27 | ValidatingWebhookConfigurationCustomization v1beta1 |  | The ValidatingWebhookConfigurationCustomization CRD graduated to v1beta1. |
| 2023-10-27 | ValidatingWebhookConfigurationCustomization webhook name errors |  | Config Connector now reports invalid webhook name errors in the status of ValidatingWebhookConfigurationCustomization resources. |
| 2023-09-29 | BigQueryTable non-incremental materialized views |  | Config Connector added the allowNonIncrementalDefinition field for BigQueryTable materialized views. |
| 2023-09-29 | BigQueryTable table constraints |  | Config Connector added the tableConstraints field to BigQueryTable. |
| 2023-09-29 | CertificateManagerCertificate v1beta1 |  | The CertificateManagerCertificate resource was promoted from v1alpha1 to v1beta1. |
| 2023-09-29 | CertificateManagerCertificateMap v1beta1 |  | The CertificateManagerCertificateMap resource was promoted from v1alpha1 to v1beta1. |
| 2023-09-29 | CertificateManagerCertificateMapEntry v1beta1 |  | The CertificateManagerCertificateMapEntry resource was promoted from v1alpha1 to v1beta1. |
| 2023-09-29 | CertificateManagerDNSAuthorization v1beta1 |  | The CertificateManagerDNSAuthorization resource was promoted from v1alpha1 to v1beta1. |
| 2023-09-29 | ComputeInstance IPv6 network interface fields |  | Config Connector added internalIpv6PrefixLength and ipv6Address fields to ComputeInstance network interfaces. |
| 2023-09-29 | ComputeInstanceTemplate IPv6 network interface fields |  | Config Connector added internalIpv6PrefixLength and ipv6Address fields to ComputeInstanceTemplate network interfaces. |
| 2023-09-29 | ContainerCluster confidential nodes |  | Config Connector added the confidentialNodes field to ContainerCluster node configuration. |
| 2023-09-29 | ContainerCluster FQDN network policy |  | Config Connector added the enableFqdnNetworkPolicy field to ContainerCluster. |
| 2023-09-29 | ContainerNodePool confidential nodes |  | Config Connector added the confidentialNodes field to ContainerNodePool node configuration. |
| 2023-09-29 | ControllerResource resource request and limit validation |  | Config Connector added value validation for resource requests and limits in customizable ControllerResource CRDs. |
| 2023-09-29 | DialogflowCXFlow fulfillment enhancements |  | Config Connector added new trigger fulfillment and messaging fields to DialogflowCXFlow. |
| 2023-09-29 | DialogflowCXPage fulfillment enhancements |  | Config Connector added new fulfillment, messaging, and form parameter fields to DialogflowCXPage. |
| 2023-09-29 | NamespacedControllerResource resource request and limit validation |  | Config Connector added value validation for resource requests and limits in customizable NamespacedControllerResource CRDs. |
| 2023-09-29 | RunJob optional secret item mode |  | Config Connector made the secret items mode field optional in RunJob volumes. |
| 2023-09-29 | RunService stable GA |  | RunService was promoted from alpha to stable in Config Connector. |
| 2023-09-29 | SecretManagerSecret automatic replication |  | Config Connector added the replication.auto field to SecretManagerSecret. |
| 2023-09-29 | SecretManagerSecretVersion deletion policy |  | Config Connector added the deletionPolicy field to SecretManagerSecretVersion. |
| 2023-09-29 | VertexAIIndexEndpoint public endpoint |  | Config Connector added public endpoint configuration and status fields to VertexAIIndexEndpoint. |
| 2023-09-29 | Webhook customization timeouts |  | Config Connector added webhook timeout customization support through MutatingWebhookConfigurationCustomization and ValidatingWebhookConfigurationCustomization. |
| 2023-09-06 | AlloyDBCluster backup restore sources |  | Config Connector supports restoring AlloyDBCluster resources from backup and continuous backup sources. |
| 2023-09-06 | AlloyDBCluster continuous backup |  | Config Connector supports continuous backup configuration and status reporting on AlloyDBCluster resources. |
| 2023-09-06 | ArtifactRegistryRepository cleanup policies |  | Config Connector supports cleanup policies and cleanup policy dry runs on ArtifactRegistryRepository resources. |
| 2023-09-06 | BigQueryTable max staleness and external file set type |  | Config Connector added maxStaleness and externalDataConfiguration.fileSetSpecType fields to BigQueryTable. |
| 2023-09-06 | CloudBuildTrigger Bitbucket Server references |  | Config Connector added Bitbucket Server config reference fields to CloudBuildTrigger. |
| 2023-09-06 | CloudFunctions2Function KMS key |  | Config Connector added the kmsKeyName field to CloudFunctions2Function. |
| 2023-09-06 | CloudIOTDeviceRegistry resource support |  | Config Connector supports managing CloudIOTDeviceRegistry resources. |
| 2023-09-06 | ComputeAddress IPv6 endpoint type |  | Config Connector supports configuring the IPv6 endpoint type on ComputeAddress resources. |
| 2023-09-06 | ComputeBackendService security policy |  | Config Connector supports attaching a security policy to ComputeBackendService resources. |
| 2023-09-06 | ComputeBackendService strong affinity connection tracking |  | Config Connector supports strong affinity in ComputeBackendService connection tracking policies. |
| 2023-09-06 | ComputeInstance IPv6 access config and local SSD recovery timeout |  | Config Connector added ipv6AccessConfig name and localSsdRecoveryTimeout fields to ComputeInstance. |
| 2023-09-06 | ComputeInstanceTemplate IPv6 access configuration naming |  | Config Connector supports naming IPv6 access configurations on ComputeInstanceTemplate network interfaces. |
| 2023-09-06 | ComputeInstanceTemplate local SSD recovery timeout |  | Config Connector supports configuring local SSD recovery timeout on ComputeInstanceTemplate resources. |
| 2023-09-06 | ComputeInstanceTemplate provisioned IOPS |  | Config Connector supports provisioned IOPS settings on ComputeInstanceTemplate disks. |
| 2023-09-06 | ComputeRegionSSLPolicy resource |  | Config Connector added support for managing the ComputeRegionSSLPolicy resource in v1alpha1. |
| 2023-09-06 | ComputeSecurityPolicy user IP request headers |  | Config Connector added the userIpRequestHeaders field to ComputeSecurityPolicy advanced options. |
| 2023-09-06 | ComputeTargetInstance security policy reference |  | Config Connector supports referencing a security policy from ComputeTargetInstance resources. |
| 2023-09-06 | ComputeTargetPool security policy reference |  | Config Connector added the securityPolicyRef field to ComputeTargetPool. |
| 2023-09-06 | ContainerCluster networking and observability enhancements |  | Config Connector added allowNetAdmin, beta API, multi-networking, additional pod ranges, advanced datapath observability, and host maintenance policy fields to ContainerCluster. |
| 2023-09-06 | ContainerNodePool networking and placement enhancements |  | Config Connector added additional network configuration, host maintenance policy, and placement policy reference fields to ContainerNodePool. |
| 2023-09-06 | ControllerResource name validation |  | Config Connector added name validation for customizable ControllerResource CRDs. |
| 2023-09-06 | DNSManagedZone private visibility required flag removal |  | Config Connector removes the required flag from DNSManagedZone private visibility configuration. |
| 2023-09-06 | EventarcTrigger event data content type |  | Config Connector supports setting the event data content type on EventarcTrigger resources. |
| 2023-09-06 | FirebaseAndroidApp API key ID |  | Config Connector added the apiKeyId field to FirebaseAndroidApp. |
| 2023-09-06 | FirebaseWebApp API key ID |  | Config Connector added the apiKeyId field to FirebaseWebApp. |
| 2023-09-06 | HealthcareFHIRStore BigQuery last-updated partitioning |  | Config Connector supports last-updated partition configuration for HealthcareFHIRStore BigQuery stream destinations. |
| 2023-09-06 | HealthcareFHIRStore delete notification previous resource |  | Config Connector supports sending the previous resource on delete notifications from HealthcareFHIRStore resources. |
| 2023-09-06 | HealthcareFHIRStore strict default search handling |  | Config Connector supports strict default search handling on HealthcareFHIRStore resources. |
| 2023-09-06 | IAMWorkforcePoolProvider OIDC enhancements |  | Config Connector added new OIDC client secret, JWKS, web SSO scopes, and status fields to IAMWorkforcePoolProvider. |
| 2023-09-06 | MonitoringAlertPolicy Prometheus query language condition |  | Config Connector added the conditionPrometheusQueryLanguage field to MonitoringAlertPolicy conditions. |
| 2023-09-06 | PubSubSubscription Cloud Storage delivery |  | Config Connector supports Cloud Storage delivery configuration on PubSubSubscription resources. |
| 2023-09-06 | PubSubSubscription push no-wrapper delivery |  | Config Connector supports no-wrapper push delivery on PubSubSubscription resources. |
| 2023-09-06 | RunJob lifecycle metadata status fields |  | Config Connector added create, update, delete, expiry, creator, and last modifier status fields to RunJob. |
| 2023-09-06 | SecretManagerSecret annotations |  | Config Connector supports annotations on SecretManagerSecret resources. |
| 2023-09-06 | SecretManagerSecret version aliases |  | Config Connector supports version aliases on SecretManagerSecret resources. |
| 2023-09-06 | SpannerDatabase drop protection |  | Config Connector added the enableDropProtection field to SpannerDatabase. |
| 2023-09-06 | SQLInstance Private Service Connect |  | Config Connector supports Private Service Connect configuration and related status fields on SQLInstance resources. |
| 2023-09-06 | VertexAIIndexEndpoint resource |  | Config Connector added support for managing the VertexAIIndexEndpoint resource in v1alpha1. |
| 2023-09-06 | WorkstationsWorkstationCluster allowed projects |  | Config Connector supports configuring allowed projects in WorkstationsWorkstationCluster private cluster settings. |
| 2023-08-21 | BigQueryDataset storage billing model |  | Config Connector supports configuring the storage billing model on BigQueryDataset resources. |
| 2023-08-21 | BigQueryReservationCapacityCommitment resource support |  | Config Connector supports managing BigQueryReservationCapacityCommitment resources. |
| 2023-08-21 | BigQueryTable external data JSON options |  | Config Connector supports JSON options for BigQueryTable external data configuration. |
| 2023-08-21 | BigQueryTable external data metadata controls |  | Config Connector supports metadata cache mode and object metadata settings for BigQueryTable external data configuration. |
| 2023-08-21 | BigQueryTable external data Parquet options |  | Config Connector supports Parquet options for BigQueryTable external data configuration. |
| 2023-08-21 | BigtableTable change stream retention |  | Config Connector supports configuring change stream retention on BigtableTable resources. |
| 2023-08-21 | CertificateManagerCertificate managed issuance configuration |  | Config Connector supports managed issuance configuration on CertificateManagerCertificate resources. |
| 2023-08-21 | CloudFunctions2Function status URL |  | Config Connector exposes the function URL in status for CloudFunctions2Function resources. |
| 2023-08-21 | cnrm-controller-manager resource customization in namespaced mode |  | Config Connector supports customizing cnrm-controller-manager pod resource requests and limits in namespaced mode. |
| 2023-08-21 | cnrm-unmanaged-detector resource customization |  | Config Connector supports customizing cnrm-unmanaged-detector pod resource requests and limits. |
| 2023-08-21 | ComputeDisk confidential compute |  | Config Connector supports confidential compute on ComputeDisk resources. |
| 2023-08-21 | ComputeDisk provisioned throughput |  | Config Connector supports provisioned throughput on ComputeDisk resources. |
| 2023-08-21 | ComputeExternalVPNGateway label fingerprint status |  | Config Connector exposes the label fingerprint in status for ComputeExternalVPNGateway resources. |
| 2023-08-21 | ComputeForwardingRule no-automate DNS zone |  | Config Connector supports disabling automatic DNS zone behavior on ComputeForwardingRule resources. |
| 2023-08-21 | ComputeInstance boot disk Resource Manager tags |  | Config Connector supports Resource Manager tags in ComputeInstance boot disk initialization parameters. |
| 2023-08-21 | ComputeInstance parameters |  | Config Connector supports instance parameters on ComputeInstance resources. |
| 2023-08-21 | ComputeInstanceTemplate network attachment |  | Config Connector supports network attachments on ComputeInstanceTemplate network interfaces. |
| 2023-08-21 | ComputeTargetHTTPProxy HTTP keep-alive timeout |  | Config Connector supports configuring HTTP keep-alive timeout on ComputeTargetHTTPProxy resources. |
| 2023-08-21 | ComputeTargetHTTPSProxy HTTP keep-alive timeout |  | Config Connector supports configuring HTTP keep-alive timeout on ComputeTargetHTTPSProxy resources. |
| 2023-08-21 | ComputeURLMap path template matching |  | Config Connector supports path template matching rules on ComputeURLMap resources. |
| 2023-08-21 | ComputeURLMap path template rewriting |  | Config Connector supports path template rewriting on ComputeURLMap resources. |
| 2023-08-21 | ContainerCluster GPU driver installation configuration |  | Config Connector supports GPU driver installation configuration on ContainerCluster node accelerators. |
| 2023-08-21 | ContainerCluster security posture configuration |  | Config Connector supports security posture configuration on ContainerCluster resources. |
| 2023-08-21 | ContainerCluster sole-tenant configuration |  | Config Connector supports sole-tenant configuration on ContainerCluster resources. |
| 2023-08-21 | ContainerNodePool GPU driver installation configuration |  | Config Connector supports GPU driver installation configuration on ContainerNodePool node accelerators. |
| 2023-08-21 | ContainerNodePool sole-tenant configuration |  | Config Connector supports sole-tenant configuration on ContainerNodePool resources. |
| 2023-08-21 | ContainerNodePool TPU topology placement policy |  | Config Connector supports TPU topology placement policy on ContainerNodePool resources. |
| 2023-08-21 | DataformRepository workspace compilation overrides |  | Config Connector supports workspace compilation overrides on DataformRepository resources. |
| 2023-08-21 | GKEBackupBackupPlan state reporting |  | Config Connector exposes state and state reason in status for GKEBackupBackupPlan resources. |
| 2023-08-21 | HealthcareFHIRStore complex data type reference parsing |  | Config Connector supports complex data type reference parsing on HealthcareFHIRStore resources. |
| 2023-08-21 | RedisInstance maintenance schedule status |  | Config Connector exposes maintenance schedule status for RedisInstance resources. |
| 2023-08-21 | RunJob annotations |  | Config Connector supports annotations on RunJob resources and their templates. |
| 2023-08-21 | SQLInstance data cache configuration |  | Config Connector supports data cache configuration on SQLInstance resources. |
| 2023-08-21 | SQLInstance edition |  | Config Connector supports selecting the edition for SQLInstance resources. |
| 2023-08-21 | VertexAIFeaturestoreEntityTypeFeature region status |  | Config Connector exposes the region in status for VertexAIFeaturestoreEntityTypeFeature resources. |
| 2023-08-21 | VertexAIIndex shard size configuration |  | Config Connector supports shard size configuration on VertexAIIndex resources. |
| 2023-08-01 | BigQueryDataset routine access |  | Config Connector supports routine access entries on BigQueryDataset resources. |
| 2023-08-01 | cnrm-webhook-manager GOMEMLIMIT |  | Config Connector adds a GOMEMLIMIT runtime memory limit to the cnrm-webhook-manager webhook container. |
| 2023-08-01 | cnrm-webhook-manager replica customization |  | Config Connector supports customizing the replica count for the cnrm-webhook-manager pod. |
| 2023-08-01 | DataflowFlexTemplateJob advanced job configuration |  | Config Connector supports expanded launch, networking, scaling, security, and runtime settings on DataflowFlexTemplateJob resources. |
| 2023-07-11 | ComputeDisk guest OS features |  | Config Connector supports guest OS features on ComputeDisk resources. |
| 2023-07-11 | ComputeDisk licenses |  | Config Connector supports licenses on ComputeDisk resources. |
| 2023-07-11 | ComputeImage storage locations |  | Config Connector supports configuring storage locations on ComputeImage resources. |
| 2023-07-11 | Config Connector pod resource customization |  | Config Connector supports customizing resource requests and limits for cnrm-webhook-manager, cnrm-controller-manager, cnrm-resource-stats-recorder, and cnrm-deletiondefender pods. |
| 2023-07-11 | DataflowFlexTemplateJob status.type field |  | Config Connector now exposes the status.type field for the DataflowFlexTemplateJob resource. |
| 2023-07-11 | DatastreamStream MySQL max concurrent backfill tasks field |  | Config Connector now supports the maxConcurrentBackfillTasks field in MySQL source configuration for the DatastreamStream resource. |
| 2023-07-11 | GKEHubFeature fleet observability field |  | Config Connector now supports the fleet observability field for the GKEHubFeature resource. |
| 2023-07-11 | KMS key deletion on orphaning |  | Config Connector supports deleting KMS keys when they are orphaned. |
| 2023-07-11 | MonitoringAlertPolicy alert strategy and forecast options fields |  | Config Connector now supports notification channel strategy and forecast options fields for the MonitoringAlertPolicy resource. |
| 2023-07-11 | RunJob resource |  | Config Connector now supports the RunJob resource. |
| 2023-07-11 | SQLInstance advanced machine features |  | Config Connector supports advanced machine features on SQLInstance resources. |
| 2023-07-11 | StorageTransferJob AWS S3 source path |  | Config Connector supports specifying the AWS S3 source path on StorageTransferJob resources. |
| 2023-07-11 | VPCAccessConnector status.selfLink field |  | Config Connector now exposes the status.selfLink field for the VPCAccessConnector resource. |
| 2023-05-26 | AlloyDBBackup encryption fields |  | Config Connector now supports encryption configuration and encryption status fields for the AlloyDBBackup resource. |
| 2023-05-26 | AlloyDBCluster encryption fields |  | Config Connector now supports encryption configuration and encryption status fields for the AlloyDBCluster resource and its automated backup policy. |
| 2023-05-26 | BigQueryJob parquet options field |  | Config Connector now supports the parquetOptions field for BigQueryJob load jobs. |
| 2023-05-26 | CertificateManagerCertificate location field |  | Config Connector now supports the location field for the CertificateManagerCertificate resource. |
| 2023-05-26 | CloudBuildTrigger step execution and repository reference fields |  | Config Connector now supports step execution controls and repository reference fields for the CloudBuildTrigger resource. |
| 2023-05-26 | ComputeBackendService bypass cache on request headers field |  | Config Connector now supports the bypassCacheOnRequestHeaders field for the ComputeBackendService resource. |
| 2023-05-26 | ComputeDisk async primary disk reference field |  | Config Connector now supports the asyncPrimaryDisk.diskRef field for the ComputeDisk resource. |
| 2023-05-26 | ComputeForwardingRule PSC global access and source IP ranges fields |  | Config Connector now supports PSC global access, source IP ranges, and base forwarding rule status fields for the ComputeForwardingRule resource. |
| 2023-05-26 | ComputeNetworkPeering stack type field |  | Config Connector now supports the stackType field for the ComputeNetworkPeering resource. |
| 2023-05-26 | ComputeResourcePolicy disk consistency group policy field |  | Config Connector now supports the diskConsistencyGroupPolicy field for the ComputeResourcePolicy resource. |
| 2023-05-26 | ComputeRouterPeer IPv6 fields |  | Config Connector now supports IPv6 enablement and next hop address fields for the ComputeRouterPeer resource. |
| 2023-05-26 | ContainerCluster GCS Fuse CSI driver field |  | Config Connector now supports the gcsFuseCsiDriverConfig field for the ContainerCluster resource. |
| 2023-05-26 | VertexAIEndpoint region field |  | Config Connector now supports the region field for the VertexAIEndpoint resource. |
| 2023-05-26 | WorkflowsWorkflow crypto key field |  | Config Connector now supports the cryptoKeyName field for the WorkflowsWorkflow resource. |
| 2023-05-26 | WorkstationsWorkstationCluster resource conditions status |  | Config Connector now supports resourceConditions status and standardized conditions structure for the WorkstationsWorkstationCluster resource. |
| 2023-05-09 | ComputeFirewallPolicyRule source and destination match fields |  | Config Connector now supports address group, FQDN, region code, and threat intelligence match fields for the ComputeFirewallPolicyRule resource. |
| 2023-05-09 | IAMWorkforcePoolProvider OIDC web SSO configuration field |  | Config Connector now supports the oidc.webSsoConfig field for the IAMWorkforcePoolProvider resource. |
| 2023-04-26 | ArtifactRegistryRepository docker configuration field |  | Config Connector now supports the dockerConfig field for the ArtifactRegistryRepository resource. |
| 2023-04-26 | BigQueryDataset collation and case sensitivity fields |  | Config Connector now supports default collation and case insensitivity fields for the BigQueryDataset resource. |
| 2023-04-26 | ComputeInstance scratch disk size field |  | Config Connector now supports the scratchDisk.items.size field for the ComputeInstance resource. |
| 2023-04-26 | ComputeInstanceTemplate self link unique status field |  | Config Connector now exposes the selfLinkUnique status field for the ComputeInstanceTemplate resource. |
| 2023-04-26 | ComputeNetwork firewall policy enforcement order field |  | Config Connector now supports the networkFirewallPolicyEnforcementOrder field for the ComputeNetwork resource. |
| 2023-04-26 | ComputeVPNGateway stack type field |  | Config Connector now supports the stackType field for the ComputeVPNGateway resource. |
| 2023-04-26 | ContainerCluster IP allocation and node configuration fields |  | Config Connector now supports pod CIDR overprovisioning, stack type, and advanced machine, ephemeral storage, and local NVMe SSD configuration fields for the ContainerCluster resource. |
| 2023-04-26 | ContainerNodePool network and node configuration fields |  | Config Connector now supports pod CIDR overprovisioning and advanced machine, ephemeral storage, and local NVMe SSD configuration fields for the ContainerNodePool resource. |
| 2023-04-26 | Manual installation in GKE Autopilot |  | Config Connector now supports manual installation in GKE Autopilot. |
| 2023-04-26 | PrivateCACAPool zero max issuer path length field |  | Config Connector now supports the zeroMaxIssuerPathLength field in baseline CA options for the PrivateCACAPool resource. |
| 2023-04-26 | PrivateCACertificateAuthority zero max issuer path length field |  | Config Connector now supports the zeroMaxIssuerPathLength field in CA options for the PrivateCACertificateAuthority resource. |
| 2023-04-26 | StorageTransferJob object modification time condition fields |  | Config Connector now supports lastModifiedBefore and lastModifiedSince object condition fields for the StorageTransferJob resource. |
| 2023-04-26 | v1alpha1 Google Cloud resource CRDs |  | Config Connector now includes 136 v1alpha1 Google Cloud resource CRDs. |
| 2023-03-30 | ArtifactRegistryRepository repository mode and configuration fields |  | Config Connector now supports mode, remoteRepositoryConfig, and virtualRepositoryConfig fields for the ArtifactRegistryRepository resource. |
| 2023-03-30 | CloudBuildTrigger Bitbucket Server and GitHub Enterprise fields |  | Config Connector now supports Bitbucket Server trigger configuration and GitHub Enterprise config reference fields for the CloudBuildTrigger resource. |
| 2023-03-30 | ComputeDisk RSA encrypted key field |  | Config Connector now supports the diskEncryptionKey.rsaEncryptedKey field for the ComputeDisk resource. |
| 2023-03-30 | ComputeInstance maintenance interval field |  | Config Connector now supports the scheduling.maintenanceInterval field for the ComputeInstance resource. |
| 2023-03-30 | ComputeInstanceTemplate maintenance interval field |  | Config Connector now supports the scheduling.maintenanceInterval field for the ComputeInstanceTemplate resource. |
| 2023-03-30 | ComputeResourcePolicy max distance field |  | Config Connector now supports the groupPlacementPolicy.maxDistance field for the ComputeResourcePolicy resource. |
| 2023-03-30 | ComputeSecurityPolicy enforce on key configs field |  | Config Connector now supports the rateLimitOptions.enforceOnKeyConfigs field for the ComputeSecurityPolicy resource. |
| 2023-03-30 | ComputeSharedVPCServiceProject deletion policy field |  | Config Connector now supports a deletionPolicy field for the ComputeSharedVPCServiceProject resource. |
| 2023-03-30 | Configurable reconciliation interval |  | Config Connector now supports configurable reconciliation intervals. |
| 2023-03-30 | ContainerCluster pod PID limit |  | ContainerCluster supports configuring the kubelet pod PID limit through spec.kubeletConfig.podPidsLimit. |
| 2023-03-30 | ContainerCluster protect config field |  | Config Connector now supports the protectConfig field for the ContainerCluster resource. |
| 2023-03-30 | ContainerNodePool pod PIDs limit field |  | Config Connector now supports the kubeletConfig.podPidsLimit field for the ContainerNodePool resource. |
| 2023-03-30 | IAMAccessBoundaryPolicy resource |  | Config Connector now supports the IAMAccessBoundaryPolicy resource. |
| 2023-03-30 | SQLInstance instance type field |  | Config Connector now supports the instanceType field for the SQLInstance resource. |
| 2023-03-30 | StorageTransferJob agent pool fields |  | Config Connector now supports source and sink agent pool name fields for the StorageTransferJob resource. |
| 2023-02-21 | BigQueryTable external data reference file schema URI |  | BigQueryTable supports specifying a reference file schema URI for external data configuration. |
| 2023-02-21 | CloudBuildTrigger GitHub Enterprise configuration |  | CloudBuildTrigger supports GitHub Enterprise configuration for git file sources, repository event config, and source-to-build settings. |
| 2023-02-21 | ComputeBackendService edge security policy and locality load balancing |  | ComputeBackendService supports edge security policy references and locality load balancing policies. |
| 2023-02-21 | ComputeInstance max run duration |  | ComputeInstance supports configuring a maximum VM run duration through spec.scheduling.maxRunDuration. |
| 2023-02-21 | ComputeInstanceTemplate resource policies and max run duration |  | ComputeInstanceTemplate supports resource policies and maximum VM run duration settings. |
| 2023-02-21 | ComputeNodeGroup share settings |  | ComputeNodeGroup supports configuring share settings through spec.shareSettings. |
| 2023-02-21 | ComputeRouterNAT TCP TIME-WAIT timeout |  | ComputeRouterNAT supports configuring the TCP TIME-WAIT timeout through spec.tcpTimeWaitTimeoutSec. |
| 2023-02-21 | ComputeSecurityPolicy adaptive protection auto-deploy |  | ComputeSecurityPolicy supports adaptive protection auto-deploy configuration. |
| 2023-02-21 | GameServicesRealm resource | 2023-02-21 | GameServicesRealm is a Config Connector resource for managing Game Services realms; deprecated on 2023-02-21. |
| 2023-02-21 | IAMPartialPolicy service identity member source |  | IAMPartialPolicy supports sourcing binding members from a ServiceIdentity reference. |
| 2023-02-21 | IAMPolicyMember service identity member source |  | IAMPolicyMember supports sourcing a member from a ServiceIdentity reference through spec.memberFrom.serviceIdentityRef. |
| 2023-02-21 | SQLInstance private path for Google Cloud services |  | SQLInstance supports enabling private path access for Google Cloud services in IP configuration. |
| 2023-01-25 | BigQueryRoutine resource |  | BigQueryRoutine is a Config Connector resource for managing BigQuery routines. |
| 2023-01-25 | ComputeBackendService generated ID status |  | ComputeBackendService exposes a generated ID in status.generatedId. |
| 2023-01-25 | ComputeImage image encryption key |  | ComputeImage supports specifying an image encryption key through spec.imagedEncryptionKey. |
| 2023-01-25 | ComputeInstanceTemplate disk source snapshot and encryption configuration |  | ComputeInstanceTemplate supports disk source snapshot references and source image or snapshot encryption keys. |
| 2023-01-25 | ComputeRouterPeer router appliance instance reference |  | ComputeRouterPeer supports referencing a router appliance instance through spec.routerApplianceInstanceRef. |
| 2023-01-25 | ComputeSSLCertificate expire time status |  | ComputeSSLCertificate exposes certificate expiration time in status.expireTime. |
| 2023-01-25 | DNSManagedZone IAMPartialPolicy support |  | DNSManagedZone supports attaching IAMPartialPolicy resources. |
| 2023-01-25 | DNSManagedZone IAMPolicy support |  | DNSManagedZone supports attaching IAMPolicy resources. |
| 2023-01-25 | DNSManagedZone IAMPolicyMember support |  | DNSManagedZone supports attaching IAMPolicyMember resources. |
| 2023-01-25 | IAMPolicyMember event-driven reconciliation |  | IAMPolicyMember supports event-driven reconciliation. |
| 2023-01-25 | PubSubLiteReservation resource |  | PubSubLiteReservation is a Config Connector resource for managing Pub/Sub Lite reservations. |
| 2023-01-25 | ServiceIdentity resource |  | ServiceIdentity is a Config Connector resource for managing Google service identities. |
| 2023-01-25 | SQLInstance deletion protection and instance type status |  | SQLInstance supports deletion protection configuration and exposes instance type in status. |
| 2023-01-25 | TagsTagBinding resource |  | TagsTagBinding is a Config Connector resource for managing tag bindings. |
| 2023-01-06 | and blue-green upgrades |  | ContainerNodePool supports private nodes, logging variants, resource labels, and blue-green upgrade settings. |
| 2023-01-06 | and logging enhancements |  | ContainerCluster adds new autoscaling, Gateway API, authorized networks, logging, resource label, and private endpoint subnetwork configuration fields. |
| 2023-01-06 | and preconfigured WAF |  | ComputeSecurityPolicy supports reCAPTCHA options, rule header actions, and preconfigured WAF configuration. |
| 2023-01-06 | and query plan insights |  | SQLInstance supports connector enforcement, deny maintenance period, and query plans per minute insights settings. |
| 2023-01-06 | BigtableGCPolicy deletion policy |  | BigtableGCPolicy supports configuring deletion behavior through spec.deletionPolicy. |
| 2023-01-06 | BigtableTable deletion protection |  | BigtableTable supports deletion protection through spec.deletionProtection. |
| 2023-01-06 | ComputeBackendService CDN cache key HTTP headers |  | ComputeBackendService supports including HTTP headers in CDN cache key policy. |
| 2023-01-06 | ComputeRouterInterface private and redundant interface references |  | ComputeRouterInterface supports private IP address, redundant interface, and subnetwork references. |
| 2023-01-06 | ComputeSecurityPolicy reCAPTCHA |  | ComputeSecurityPolicy supports reCAPTCHA options, rule header actions, and preconfigured WAF configuration. |
| 2023-01-06 | ContainerCluster autoscaling |  | ContainerCluster adds new autoscaling, Gateway API, authorized networks, logging, resource label, and private endpoint subnetwork configuration fields. |
| 2023-01-06 | ContainerNodePool private nodes |  | ContainerNodePool supports private nodes, logging variants, resource labels, and blue-green upgrade settings. |
| 2023-01-06 | DataCatalogPolicyTag resource |  | DataCatalogPolicyTag is a Config Connector resource for managing Data Catalog policy tags. |
| 2023-01-06 | deny maintenance period |  | SQLInstance supports connector enforcement, deny maintenance period, and query plans per minute insights settings. |
| 2023-01-06 | DNSManagedZone GKE cluster private visibility |  | DNSManagedZone supports restricting private visibility to referenced GKE clusters. |
| 2023-01-06 | GKEHubFeatureMembership mesh control plane |  | GKEHubFeatureMembership supports configuring the mesh control plane through spec.mesh.controlPlane. |
| 2023-01-06 | GKEHubFeatureMembership OCI config management and mesh control plane |  | GKEHubFeatureMembership supports OCI-based config management and mesh control plane configuration. |
| 2023-01-06 | header actions |  | ComputeSecurityPolicy supports reCAPTCHA options, rule header actions, and preconfigured WAF configuration. |
| 2023-01-06 | IAMPartialPolicy faster dependency reconciliation |  | IAMPartialPolicy supports faster reconciliation for resources with dependencies. |
| 2023-01-06 | labels |  | ContainerNodePool supports private nodes, logging variants, resource labels, and blue-green upgrade settings. |
| 2023-01-06 | logging |  | ContainerNodePool supports private nodes, logging variants, resource labels, and blue-green upgrade settings. |
| 2023-01-06 | networking |  | ContainerCluster adds new autoscaling, Gateway API, authorized networks, logging, resource label, and private endpoint subnetwork configuration fields. |
| 2023-01-06 | NetworkServicesGateway authorization policy reference | 2023-01-06 | NetworkServicesGateway supported referencing an authorization policy through spec.authorizationPolicyRef in alpha; deprecated on 2023-01-06. |
| 2023-01-06 | OSConfigOSPolicyAssignment skip await rollout |  | OSConfigOSPolicyAssignment supports skipping rollout wait behavior through spec.skipAwaitRollout. |
| 2023-01-06 | Regional ComputeURLMap request mirroring and weighted backend service references |  | Regional ComputeURLMap resources support backend service references for request mirroring and weighted backend services in default route actions. |
| 2023-01-06 | SQLDatabase deletion policy |  | SQLDatabase supports configuring deletion behavior through spec.deletionPolicy. |
| 2023-01-06 | SQLInstance connector enforcement |  | SQLInstance supports connector enforcement, deny maintenance period, and query plans per minute insights settings. |
| 2023-01-06 | StorageBucket Autoclass |  | StorageBucket supports Autoclass configuration through spec.autoclass. |
| 2023-01-06 | TagsTagKey resource |  | TagsTagKey is a Config Connector resource for managing tag keys. |
| 2023-01-06 | TagsTagValue resource |  | TagsTagValue is a Config Connector resource for managing tag values. |
| 2022-12-13 | BigQueryDataset max time travel hours |  | BigQueryDataset supports configuring maximum time travel hours through spec.maxTimeTravelHours. |
| 2022-12-13 | CloudBuildTrigger build step script support |  | Config Connector supports the spec.build.step.script field for CloudBuildTrigger resources. |
| 2022-12-13 | ComputeDisk source disk reference and source disk ID status |  | ComputeDisk supports referencing a source disk and exposes the source disk ID in status. |
| 2022-12-13 | ComputeRouterNAT spec.rules support |  | Config Connector supports the spec.rules field for ComputeRouterNAT resources. |
| 2022-12-13 | ContainerCluster auto-provisioning default disk size support |  | Config Connector supports the spec.clusterAutoscaling.autoProvisioningDefaults.diskSize field for ContainerCluster resources. |
| 2022-12-13 | DataCatalogTaxonomy resource |  | DataCatalogTaxonomy is a Config Connector resource for managing Data Catalog taxonomies. |
| 2022-12-13 | IAMServiceAccount member status |  | IAMServiceAccount exposes the member identity in status.member. |
| 2022-12-13 | SQLInstance time zone |  | SQLInstance supports configuring the database time zone through spec.settings.timeZone. |
| 2022-11-15 | BigQueryJob JSON extension load support |  | Config Connector supports the spec.load.jsonExtension field for BigQueryJob resources. |
| 2022-11-15 | BigQueryTable external data Avro options support |  | Config Connector supports the spec.externalDataConfiguration.avroOptions field for BigQueryTable resources. |
| 2022-11-15 | BigtableGCPolicy garbage collection rules support |  | Config Connector supports the spec.gcRules field for BigtableGCPolicy resources. |
| 2022-11-15 | ComputeBackendBucket compression mode support |  | Config Connector supports the spec.compressionMode field for ComputeBackendBucket resources. |
| 2022-11-15 | ComputeBackendService compression mode support |  | Config Connector supports the spec.compressionMode field for ComputeBackendService resources. |
| 2022-11-15 | ComputeSecurityPolicy JSON custom configuration support |  | Config Connector supports the spec.advancedOptionsConfig.jsonCustomConfig field for ComputeSecurityPolicy resources. |
| 2022-11-15 | ConfigControllerInstance full management configuration support |  | Config Connector supports the spec.managementConfig.fullManagementConfig field for ConfigControllerInstance resources. |
| 2022-11-15 | ContainerCluster GPU sharing configuration support |  | Config Connector supports the spec.nodeConfig.guestAccelerator[].gpuSharingConfig field for ContainerCluster resources. |
| 2022-11-15 | ContainerCluster Pub/Sub notification filter support |  | Config Connector supports the spec.notificationConfig.pubsub.filter field for ContainerCluster resources. |
| 2022-11-15 | ContainerNodePool GPU sharing configuration support |  | Config Connector supports the spec.nodeConfig.guestAccelerator[].gpuSharingConfig field for ContainerNodePool resources. |
| 2022-11-15 | DataprocCluster confidential instance configuration support |  | Config Connector supports the spec.config.gceClusterConfig.confidentialInstanceConfig field for DataprocCluster resources. |
| 2022-11-15 | DataprocCluster Dataproc Metastore reference support |  | Config Connector supports the spec.config.metastoreConfig.dataprocMetastoreServiceRef field for DataprocCluster resources. |
| 2022-11-15 | DataprocCluster master local SSD interface support |  | Config Connector supports the spec.config.masterConfig.diskConfig.localSsdInterface field for DataprocCluster resources. |
| 2022-11-15 | DataprocCluster metric configuration support |  | Config Connector supports the spec.config.dataprocMetricConfig field for DataprocCluster resources. |
| 2022-11-15 | DataprocCluster secondary worker local SSD interface support |  | Config Connector supports the spec.config.secondaryWorkerConfig.diskConfig.localSsdInterface field for DataprocCluster resources. |
| 2022-11-15 | DataprocCluster security configuration support |  | Config Connector supports the spec.config.securityConfig field for DataprocCluster resources. |
| 2022-11-15 | DataprocCluster shielded instance configuration support |  | Config Connector supports the spec.config.gceClusterConfig.shieldedInstanceConfig field for DataprocCluster resources. |
| 2022-11-15 | DataprocCluster virtual cluster configuration support |  | Config Connector supports the spec.virtualClusterConfig field for DataprocCluster resources. |
| 2022-11-15 | DataprocCluster worker local SSD interface support |  | Config Connector supports the spec.config.workerConfig.diskConfig.localSsdInterface field for DataprocCluster resources. |
| 2022-11-15 | DLPJobTrigger resource support |  | Config Connector supports managing DLPJobTrigger resources. |
| 2022-11-15 | DNSManagedZone cloud logging configuration support |  | Config Connector supports the spec.cloudLoggingConfig field for DNSManagedZone resources. |
| 2022-11-15 | RedisInstance persistence configuration support |  | Config Connector supports the spec.persistenceConfig field for RedisInstance resources. |
| 2022-11-15 | SecretManagerSecretVersion status.version support |  | Config Connector exposes the status.version field for SecretManagerSecretVersion resources. |
| 2022-11-15 | SQLInstance available maintenance versions status support |  | Config Connector exposes the status.availableMaintenanceVersions field for SQLInstance resources. |
| 2022-11-15 | SQLInstance maintenance version support |  | Config Connector supports the spec.maintenanceVersion field for SQLInstance resources. |
| 2022-11-15 | SQLUser password policy support |  | Config Connector supports the spec.passwordPolicy field for SQLUser resources. |
| 2022-11-15 | StorageBucket custom placement configuration support |  | Config Connector supports the spec.customPlacementConfig field for StorageBucket resources. |
| 2022-11-15 | StorageTransferJob notification configuration support |  | Config Connector supports the spec.notificationConfig field for StorageTransferJob resources. |
| 2022-10-26 | BigTableInstance storage target support |  | Config Connector supports the storageTarget field for BigTableInstance resources. |
| 2022-10-26 | CloudBuildTrigger Bitbucket support |  | Config Connector supports Bitbucket integration for CloudBuildTrigger resources. |
| 2022-10-26 | CloudBuildTrigger location support |  | Config Connector supports specifying location for CloudBuildTrigger resources. |
| 2022-10-26 | ComputeInstance visible core count support |  | Config Connector supports the visibleCoreCount field for ComputeInstance resources. |
| 2022-10-26 | ComputeInstanceTemplate visible core count support |  | Config Connector supports the visibleCoreCount field for ComputeInstanceTemplate resources. |
| 2022-10-26 | ComputeResourcePolicies snapshot chain name support |  | Config Connector supports the snapshotProperties.chainName field for ComputeResourcePolicies resources. |
| 2022-10-26 | ComputeSnapshot chain name support |  | Config Connector supports the chainName field for ComputeSnapshot resources. |
| 2022-10-26 | ComputeTargetSSLProxy certificate map reference support |  | Config Connector supports the certificateMapRef field for ComputeTargetSSLProxy resources. |
| 2022-10-26 | ContainerCluster cost management configuration support |  | Config Connector supports the costManagementConfig field for ContainerCluster resources. |
| 2022-10-26 | ContainerCluster external service IP configuration support |  | Config Connector supports the serviceExternalIpsConfig field for ContainerCluster resources. |
| 2022-10-26 | ContainerCluster node pool defaults support |  | Config Connector supports the nodePoolDefaults field for ContainerCluster resources. |
| 2022-10-26 | ContainerNodePool location policy support |  | Config Connector supports the locationPolicy field for ContainerNodePool resources. |
| 2022-10-26 | ContainerNodePool total maximum node count support |  | Config Connector supports the totalMaxNodeCount field for ContainerNodePool resources. |
| 2022-10-26 | ContainerNodePool total minimum node count support |  | Config Connector supports the totalMinNodeCount field for ContainerNodePool resources. |
| 2022-10-26 | DLPInspectTemplate resource support |  | Config Connector supports managing DLPInspectTemplate resources. |
| 2022-10-26 | EventarcTrigger channel reference support |  | Config Connector supports the channelRef field for EventarcTrigger resources. |
| 2022-10-26 | EventarcTrigger resource conditions support |  | Config Connector supports the resourceConditions field for EventarcTrigger resources. |
| 2022-10-26 | faster reconciliation for IAM dependency resources |  | Config Connector extends faster reconciliation of dependent resources to IAMAuditConfig and IAMPolicy. |
| 2022-10-26 | GKEHubFeatureMembership mesh support |  | Config Connector supports the mesh field for GKEHubFeatureMembership resources. |
| 2022-10-26 | MonitoringNotificationChannel force delete support |  | Config Connector supports the forceDelete field for MonitoringNotificationChannel resources. |
| 2022-10-26 | NetworkServicesGateway labels field support | 2022-10-26 | Config Connector previously supported the labels field for NetworkServicesGateway resources; deprecated on 2022-10-26. |
| 2022-10-26 | NetworkServicesGRPCRoute labels field support | 2022-10-26 | Config Connector previously supported the labels field for NetworkServicesGRPCRoute resources; deprecated on 2022-10-26. |
| 2022-10-26 | NetworkServicesHTTPRoute labels field support | 2022-10-26 | Config Connector previously supported the labels field for NetworkServicesHTTPRoute resources; deprecated on 2022-10-26. |
| 2022-10-26 | NetworkServicesMesh labels field support | 2022-10-26 | Config Connector previously supported the labels field for NetworkServicesMesh resources; deprecated on 2022-10-26. |
| 2022-10-26 | NetworkServicesTCPRoute labels field support | 2022-10-26 | Config Connector previously supported the labels field for NetworkServicesTCPRoute resources; deprecated on 2022-10-26. |
| 2022-10-26 | unmanaged-detector controller |  | Config Connector includes the unmanaged-detector controller to mark resources as Unmanaged when no controller exists for their namespace. |
| 2022-09-27 | DLPDeidentifyTemplate resource support |  | Config Connector supports managing DLPDeidentifyTemplate resources. |
| 2022-09-14 | ContainerCluster node pool auto configuration support |  | Config Connector supports the spec.nodePoolAutoConfig field for ContainerCluster resources. |
| 2022-09-14 | ContainerCluster reservation affinity support |  | Config Connector supports the spec.nodeConfig.reservationAffinity field for ContainerCluster resources. |
| 2022-09-14 | ContainerNodePool reservation affinity support |  | Config Connector supports the spec.nodeConfig.reservationAffinity field for ContainerNodePool resources. |
| 2022-09-14 | DataprocWorkflow shielded instance configuration support |  | Config Connector supports the spec.placement.managedCluster.config.gceClusterConfig.shieldedInstanceConfig field for DataprocWorkflow resources. |
| 2022-09-14 | IAMPartialPolicy SQL instance member reference support |  | Config Connector supports the spec.bindings[].members[].memberFrom.sqlInstanceRef field for IAMPartialPolicy resources. |
| 2022-09-14 | IAMPolicyMember SQL instance member reference support |  | Config Connector supports the spec.memberFrom.sqlInstanceRef field for IAMPolicyMember resources. |
| 2022-09-14 | NetworkServicsGRPCRoute spec.routers support | 2022-09-14 | Config Connector previously supported the spec.routers field for NetworkServicsGRPCRoute resources; deprecated on 2022-09-14. |
| 2022-09-14 | NetworkServicsHTTPRoute original destination action support | 2022-09-14 | Config Connector previously supported the spec.rules.action.originalDestination field for NetworkServicsHTTPRoute resources; deprecated on 2022-09-14. |
| 2022-09-14 | NetworkServicsHTTPRoute spec.routers support | 2022-09-14 | Config Connector previously supported the spec.routers field for NetworkServicsHTTPRoute resources; deprecated on 2022-09-14. |
| 2022-09-14 | NetworkServicsTCPRoute spec.routers support | 2022-09-14 | Config Connector previously supported the spec.routers field for NetworkServicsTCPRoute resources; deprecated on 2022-09-14. |
| 2022-09-14 | state-into-spec absent value support |  | Config Connector extends support for absent values in the state-into-spec annotation to most resources. |
| 2022-09-01 | ComputeBackendBucket CDN request header controls |  | Config Connector supports bypassCacheOnRequestHeaders and requestCoalescing fields in ComputeBackendBucket CDN policy configuration. |
| 2022-09-01 | ComputeInstance termination action |  | Config Connector supports the scheduling.instanceTerminationAction field for ComputeInstance resources. |
| 2022-09-01 | ComputeInstanceTemplate termination action |  | Config Connector supports the scheduling.instanceTerminationAction field for ComputeInstanceTemplate resources. |
| 2022-09-01 | ComputeRegionNetworkEndpointGroup network and subnetwork references |  | Config Connector supports networkRef and subnetworkRef fields for ComputeRegionNetworkEndpointGroup resources. |
| 2022-09-01 | ComputeTargetHTTPSProxy certificate map reference |  | Config Connector supports the certificateMapRef field for ComputeTargetHTTPSProxy resources. |
| 2022-09-01 | ContainerCluster auto-provisioning boot disk KMS key |  | Config Connector supports the clusterAutoscaling.autoProvisioningDefaults.bootDiskKMSKeyRef field for ContainerCluster resources. |
| 2022-09-01 | ContainerCluster Binary Authorization configuration |  | Config Connector supports the binaryAuthorization field for ContainerCluster resources. |
| 2022-09-01 | ContainerCluster Binary Authorization enablement field support | 2022-09-01 | Config Connector previously supported the spec.enableBianryAuthorization field for ContainerCluster resources; deprecated on 2022-09-01. |
| 2022-09-01 | ContainerCluster Binary Authorization evaluation mode |  | Config Connector supports the binaryAuthorization.evaluationMode field for ContainerCluster resources. |
| 2022-09-01 | ContainerCluster mesh certificates |  | Config Connector supports the meshCertificates field for ContainerCluster resources. |
| 2022-09-01 | Immediate reconciliation after dependency readiness |  | Config Connector supports immediate reconciliation once a dependency becomes ready for selected resource types; Config Connector supports immediate reconciliation once a dependency becomes ready for selected resource types. |
| 2022-09-01 | MonitoringAlertPolicy missing data evaluation settings |  | Config Connector supports evaluationMissingData settings for MonitoringAlertPolicy query language and threshold conditions. |
| 2022-09-01 | PubSubSubscription BigQuery configuration support |  | Config Connector supports the spec.bigqueryConfig field for PubSubSubscription resources. |
| 2022-09-01 | RedisInstance customer-managed encryption keys |  | Config Connector supports the customerManagedKeyRef field for RedisInstance resources. |
| 2022-09-01 | SpannerDatabase version retention period |  | Config Connector supports the versionRetentionPeriod field for SpannerDatabase resources. |
| 2022-09-01 | SQLInstance advanced settings fields |  | Config Connector supports secondaryZone location preference, password validation policy, and SQL Server audit configuration fields for SQLInstance resources. |
| 2022-09-01 | StorageBucket lifecycle rule prefix and suffix matching |  | Config Connector supports matchesPrefix and matchesSuffix conditions in StorageBucket lifecycle rules. |
| 2022-08-17 | IAMWorkforcePoolProvider resource support |  | Config Connector supports the IAMWorkforcePoolProvider resource. |
| 2022-08-04 | GKEHubFeatureMembership Policy Controller monitoring and mutation settings |  | Config Connector supports Policy Controller monitoring and mutationEnabled fields for GKEHubFeatureMembership resources. |
| 2022-08-04 | IAMWorkforcePool resource support |  | Config Connector supports the IAMWorkforcePool resource. |
| 2022-08-04 | StorageBucket state-into-spec support |  | Config Connector supports state-into-spec behavior for StorageBucket resources. |
| 2022-07-27 | AccessContextManagerServicePerimeters external egress resources |  | Config Connector supports the egressPolicies.egressTo.externalResources field for AccessContextManagerServicePerimeters resources. |
| 2022-07-27 | BigQueryTable external data connection reference |  | Config Connector supports the externalDataConfiguration.connectionId field for BigQueryTable resources. |
| 2022-07-27 | CloudBuildTrigger build log inclusion |  | Config Connector supports the includeBuildLogs field for CloudBuildTrigger resources. |
| 2022-07-27 | ComputeBackendService IAP OAuth2 client reference |  | Config Connector supports the iap.oauth2ClientIdRef field for ComputeBackendService resources. |
| 2022-07-27 | ComputeBackendService named cookie cache key policy |  | Config Connector supports the cacheKeyPolicy.includeNamedCookies field for ComputeBackendService CDN configuration. |
| 2022-07-27 | ComputeForwardingRule Private Service Connect connection status |  | Config Connector exposes pscConnectionId and pscConnectionStatus status fields for ComputeForwardingRule resources. |
| 2022-07-27 | ComputeNetwork ULA internal IPv6 configuration |  | Config Connector supports enableUlaInternalIpv6 and internalIpv6Range fields for ComputeNetwork resources. |
| 2022-07-27 | ComputeRouterNAT max ports per VM |  | Config Connector supports the maxPortsPerVm field for ComputeRouterNAT resources. |
| 2022-07-27 | ComputeSecurityPolicy advanced options |  | Config Connector supports the advancedOptionsConfig field for ComputeSecurityPolicy resources. |
| 2022-07-27 | ComputeTargetHTTPSProxy SSL policy reference |  | Config Connector supports the sslPolicyRef field for ComputeTargetHTTPSProxy resources. |
| 2022-07-27 | ContainerCluster managed Prometheus monitoring |  | Config Connector supports the monitoringConfig.managedPrometheus field for ContainerCluster resources. |
| 2022-07-27 | DLPStoredInfoType resource support |  | Config Connector supports the DLPStoredInfoType resource. |
| 2022-07-27 | DNSManagedZone status metadata fields |  | Config Connector exposes creationTime and managedZoneId status fields for DNSManagedZone resources. |
| 2022-07-27 | MonitoringAlertPolicy state-into-spec absent support |  | Config Connector supports state-into-spec absent behavior for MonitoringAlertPolicy resources. |
| 2022-07-27 | PubSubTopic schema settings |  | Config Connector supports the schemaSettings field for PubSubTopic resources. |
| 2022-07-27 | ServiceDirectoryEndpoint resource support |  | Config Connector supports the ServiceDirectoryEndpoint resource. |
| 2022-07-27 | SQLUser SQL Server user details |  | Config Connector supports the sqlServerUserDetails field for SQLUser resources. |
| 2022-06-21 | ComputeBackendBucket cache key policy |  | Config Connector supports the cdnPolicy.cacheKeyPolicy field for ComputeBackendBucket resources. |
| 2022-06-21 | PubSubSchema resource support |  | Config Connector supports the PubSubSchema resource. |
| 2022-06-09 | MemcacheInstance maintenance policy and schedule |  | Config Connector supports maintenancePolicy and maintenanceSchedule fields for MemcacheInstance resources. |
| 2022-06-09 | ServiceDirectoryNamespace resource support |  | Config Connector supports the ServiceDirectoryNamespace resource. |
| 2022-06-09 | ServiceDirectoryService resource support |  | Config Connector supports the ServiceDirectoryService resource. |
| 2022-06-01 | ComputeRegionNetworkEndpointGroup PSC target service |  | Config Connector supports the pscTargetService field for ComputeRegionNetworkEndpointGroup resources. |
| 2022-06-01 | ComputeRouterNAT dynamic port allocation |  | Config Connector supports the enableDynamicPortAllocation field for ComputeRouterNAT resources. |
| 2022-06-01 | ContainerCluster maintenance exclusion options |  | Config Connector supports maintenanceExclusion exclusionOptions fields for ContainerCluster maintenance policies. |
| 2022-06-01 | NetworkServicesTCPRoute gateways |  | Config Connector supports the gateways field for NetworkServicesTCPRoute resources. |
| 2022-06-01 | SQLInstance Active Directory integration |  | Config Connector supports the settings.activeDirectoryConfig field for SQLInstance resources. |
| 2022-05-24 | ComputeForwardingRule Service Directory registrations |  | Config Connector supports the serviceDirectoryRegistrations field for ComputeForwardingRule resources. |
| 2022-05-24 | ComputeRegionNetworkEndpointGroup resource support |  | Config Connector supports the ComputeRegionNetworkEndpointGroup resource. |
| 2022-05-19 | ComputeBackendService subsetting |  | Config Connector supports the subsetting field for ComputeBackendService resources. |
| 2022-05-19 | PrivateCACertificate resource support |  | Config Connector supports the PrivateCACertificate resource. |
| 2022-05-19 | RedisInstance secondary IP range |  | Config Connector supports the secondaryIpRange field for RedisInstance resources. |
| 2022-05-10 | AccessContextManagerAccessPolicy IAMPolicy support |  | The AccessContextManagerAccessPolicy resource supports IAMPolicy management. |
| 2022-05-10 | AccessContextManagerAccessPolicy IAMPolicyMember support |  | The AccessContextManagerAccessPolicy resource supports IAMPolicyMember management. |
| 2022-05-10 | CloudBuildTrigger approval configuration |  | The CloudBuildTrigger resource supports build approval settings through spec.approvalConfig. |
| 2022-05-10 | ComputeSecurityPolicy redirect options |  | The ComputeSecurityPolicy resource supports redirect behavior configuration through spec.rule.redirectOptions. |
| 2022-05-10 | ContainerCluster GKE Backup agent configuration |  | The ContainerCluster resource supports configuring the GKE Backup agent through spec.addonsConfig.gkeBackupAgentConfig. |
| 2022-05-10 | Dataflow job skip wait on termination directive |  | DataflowFlexTemplateJob and DataflowJob support the cnrm.cloud.google.com/skip-wait-on-job-termination directive to avoid waiting for job termination. |
| 2022-05-10 | DNSRecordSet spec.rrdatas field | 2022-05-10 | The DNSRecordSet resource includes a spec.rrdatas field for directly specifying record data values; deprecated on 2022-05-10. |
| 2022-05-10 | DNSRecordSet spec.rrdatasRefs field |  | The DNSRecordSet resource supports referencing record data values through spec.rrdatasRefs. |
| 2022-05-10 | MonitoringMonitorDashboard logs panel widget |  | The MonitoringMonitorDashboard resource supports logs panel widgets across column, grid, mosaic, and row layouts. |
| 2022-05-10 | PubSubSubscription exactly-once delivery |  | The PubSubSubscription resource supports exactly-once delivery through spec.enableExactlyOnceDelivery. |
| 2022-04-25 | BinaryAuthorizationPolicy IAMPolicyMember support |  | The BinaryAuthorizationPolicy resource supports IAMPolicyMember management. |
| 2022-04-25 | CloudFunctionsFunction IAMPolicyMember support |  | The CloudFunctionsFunction resource supports IAMPolicyMember management. |
| 2022-04-25 | DataprocCluster IAMPolicyMember support |  | The DataprocCluster resource supports IAMPolicyMember management. |
| 2022-04-25 | NetworkSecurityAuthorizationPolicy IAMPolicyMember support |  | The NetworkSecurityAuthorizationPolicy resource supports IAMPolicyMember management. |
| 2022-04-25 | NetworkSecurityClientTLSPolicy IAMPolicyMember support |  | The NetworkSecurityClientTLSPolicy resource supports IAMPolicyMember management. |
| 2022-04-25 | NetworkSecurityServerTLSPolicy IAMPolicyMember support |  | The NetworkSecurityServerTLSPolicy resource supports IAMPolicyMember management. |
| 2022-04-25 | RunService IAMPolicyMember support |  | The RunService resource supports IAMPolicyMember management. |
| 2022-04-21 | ComputeInstance spec.networkInterface[].networkIp field | 2022-04-21 | The ComputeInstance resource includes a spec.networkInterface[].networkIp field for setting a network interface IP address directly; deprecated on 2022-04-21. |
| 2022-04-21 | ComputeInstance spec.networkInterface[].networkIpRef field |  | The ComputeInstance resource supports referencing a network interface IP address through spec.networkInterface[].networkIpRef. |
| 2022-04-13 | ApigeeEnvironment resource support |  | Config Connector supports managing the ApigeeEnvironment resource. |
| 2022-04-13 | BigtableInstance cluster autoscaling configuration |  | The BigtableInstance resource supports per-cluster autoscaling settings through spec.cluster[].autoscalingConfig. |
| 2022-04-13 | ComputeBackendBucket edge security policy |  | The ComputeBackendBucket resource supports attaching an edge security policy through spec.edgeSecurityPolicy. |
| 2022-04-13 | ComputeSecurityPolicy policy type |  | The ComputeSecurityPolicy resource supports specifying the policy type through spec.type. |
| 2022-04-13 | StorageTransferJob repeat interval |  | The StorageTransferJob resource supports recurring schedules through spec.schedule.repeatInterval. |
| 2022-04-07 | ApigeeOrganization resource support |  | Config Connector supports managing the ApigeeOrganization resource. |
| 2022-04-07 | LoggingLogSink destination logging bucket reference |  | The LoggingLogSink resource supports referencing a log bucket destination through spec.destination.loggingLogBucketRef. |
| 2022-04-07 | NetworkServicesTLSRoute resource support |  | Config Connector supports managing the NetworkServicesTLSRoute resource. |
| 2022-03-30 | ArtifactRegistryRepository Maven configuration |  | The ArtifactRegistryRepository resource supports Maven repository settings through spec.mavenConfig. |
| 2022-03-30 | BinaryAuthorizationPolicy IAMPolicy support |  | The BinaryAuthorizationPolicy resource supports IAMPolicy management. |
| 2022-03-30 | CloudBuildTrigger filter |  | The CloudBuildTrigger resource supports trigger filtering through spec.filter. |
| 2022-03-30 | CloudBuildTrigger Git file source |  | The CloudBuildTrigger resource supports Git-based file source configuration through spec.gitFileSource. |
| 2022-03-30 | CloudBuildTrigger source to build |  | The CloudBuildTrigger resource supports defining source input for builds through spec.sourceToBuild. |
| 2022-03-30 | CloudFunctionsFunction IAMPolicy support |  | The CloudFunctionsFunction resource supports IAMPolicy management. |
| 2022-03-30 | ContainerCluster gVNIC node configuration |  | The ContainerCluster resource supports gVNIC configuration for nodes through spec.nodeConfig.gvnic. |
| 2022-03-30 | ContainerNodePool gVNIC node configuration |  | The ContainerNodePool resource supports gVNIC configuration for nodes through spec.nodeConfig.gvnic. |
| 2022-03-30 | DataprocCluster IAMPolicy support |  | The DataprocCluster resource supports IAMPolicy management. |
| 2022-03-30 | MonitoringMonitoredProject resource support |  | Config Connector supports managing the MonitoringMonitoredProject resource. |
| 2022-03-30 | NetworkSecurityAuthorizationPolicy IAMPolicy support |  | The NetworkSecurityAuthorizationPolicy resource supports IAMPolicy management. |
| 2022-03-30 | NetworkSecurityClientTLSPolicy IAMPolicy support |  | The NetworkSecurityClientTLSPolicy resource supports IAMPolicy management. |
| 2022-03-30 | NetworkSecurityServerTLSPolicy IAMPolicy support |  | The NetworkSecurityServerTLSPolicy resource supports IAMPolicy management. |
| 2022-03-30 | RunService IAMPolicy support |  | The RunService resource supports IAMPolicy management. |
| 2022-03-16 | ARM binary support |  | Config Connector supports ARM binaries for its software distribution. |
| 2022-03-16 | IdentityPlatformConfig resource support |  | Config Connector supports managing the IdentityPlatformConfig resource. |
| 2022-03-04 | BillingBudgetsBudget resource support |  | Config Connector supports managing the BillingBudgetsBudget resource. |
| 2022-03-04 | ComputeSecurityPolicy rate limit options |  | The ComputeSecurityPolicy resource supports rate limiting configuration through spec.rule[].rateLimitOptions. |
| 2022-03-04 | ContainerCluster auto-provisioning default image type |  | The ContainerCluster resource supports setting the default image type for cluster autoscaling auto-provisioning through spec.clusterAutoscaling.autoProvisioningDefaults.imageType. |
| 2022-03-04 | ContainerCluster GCP Filestore CSI driver configuration |  | The ContainerCluster resource supports GCP Filestore CSI driver settings through spec.addonsConfig.gcpFilestoreCsiDriverConfig. |
| 2022-03-04 | EventarcTrigger resource support |  | Config Connector supports managing the EventarcTrigger resource. |
| 2022-03-04 | LoggingLogView resource support |  | Config Connector supports managing the LoggingLogView resource. |
| 2022-03-04 | NetworkServicesGateway selfLink status |  | The NetworkServicesGateway resource exposes its self link through status.selfLink. |
| 2022-03-04 | NetworkServicesGRPCRoute selfLink status |  | The NetworkServicesGRPCRoute resource exposes its self link through status.selfLink. |
| 2022-03-04 | NetworkServicesHTTPRoute selfLink status |  | The NetworkServicesHTTPRoute resource exposes its self link through status.selfLink. |
| 2022-03-04 | NetworkServicesMesh selfLink status |  | The NetworkServicesMesh resource exposes its self link through status.selfLink. |
| 2022-03-04 | NetworkServicesTCPRoute selfLink status |  | The NetworkServicesTCPRoute resource exposes its self link through status.selfLink. |
| 2022-03-04 | RedisInstance maintenance policy |  | The RedisInstance resource supports maintenance policy configuration through spec.maintenancePolicy. |
| 2022-03-04 | RedisInstance maintenance schedule |  | The RedisInstance resource supports maintenance scheduling through spec.maintenanceSchedule. |
| 2022-03-04 | StorageTransferJob AWS S3 role ARN |  | The StorageTransferJob resource supports specifying an AWS S3 role ARN through spec.transferSpec.awsS3DataSource.roleArn. |
| 2022-03-04 | StorageTransferJob POSIX data sink |  | The StorageTransferJob resource supports POSIX destinations through spec.transferSpec.posixDataSink. |
| 2022-03-04 | StorageTransferJob POSIX data source |  | The StorageTransferJob resource supports POSIX sources through spec.transferSpec.posixDataSource. |
| 2022-02-18 | PrivateCACertificateAuthority resource support |  | Config Connector supports managing the PrivateCACertificateAuthority resource. |
| 2022-02-11 | BillingAccount IAMPartialPolicy support |  | IAMPartialPolicy support extends to BillingAccount resources. |
| 2022-02-11 | BillingAccount IAMPolicy support |  | IAMPolicy support extends to BillingAccount resources. |
| 2022-02-11 | ComputeFirewallPolicyAssociation resource support |  | Config Connector supports managing the ComputeFirewallPolicyAssociation resource. |
| 2022-02-11 | Organization IAMPartialPolicy support |  | IAMPartialPolicy support extends to Organization resources. |
| 2022-02-11 | Organization IAMPolicy support |  | IAMPolicy support extends to Organization resources. |
| 2022-01-25 | CloudFunctionsFunction resource support |  | Config Connector supports managing the CloudFunctionsFunction resource. |
| 2022-01-25 | LoggingLogBucket resource support |  | Config Connector supports managing the LoggingLogBucket resource. |
| 2022-01-25 | MonitoringAlertPolicy alert strategy |  | The MonitoringAlertPolicy resource supports alert strategy configuration through spec.alertStrategy. |
| 2022-01-25 | MonitoringAlertPolicy matched log condition |  | The MonitoringAlertPolicy resource supports matched log conditions through spec.conditions.conditionMatchedLog. |
| 2022-01-19 | CloudBuildTrigger available secrets |  | The CloudBuildTrigger resource supports build secrets configuration through spec.build.availableSecrets. |
| 2022-01-19 | ComputeTargetHTTP(S)Proxy regional support |  | ComputeTargetHTTP(S)Proxy resources support regional deployment. |
| 2022-01-19 | ContainerCluster identity service configuration |  | The ContainerCluster resource supports identity service integration through spec.identityServiceConfig. |
| 2022-01-19 | ContainerCluster node group reference |  | The ContainerCluster resource supports node group references through spec.nodeConfig.nodeGroupRef. |
| 2022-01-19 | ContainerCluster spot nodes |  | The ContainerCluster resource supports spot nodes through spec.nodeConfig.spot. |
| 2022-01-19 | ContainerNodePool node group reference |  | The ContainerNodePool resource supports node group references through spec.nodeConfig.nodeGroupRef. |
| 2022-01-19 | ContainerNodePool spot nodes |  | The ContainerNodePool resource supports spot nodes through spec.nodeConfig.spot. |
| 2022-01-19 | LoggingLogMetric resource support |  | Config Connector supports managing the LoggingLogMetric resource. |
| 2022-01-19 | NetworkConnectivitySpoke resource support |  | Config Connector supports managing the NetworkConnectivitySpoke resource. |
| 2022-01-19 | RedisInstance node status |  | The RedisInstance resource exposes node information through status.nodes. |
| 2022-01-19 | RedisInstance read replica mode |  | The RedisInstance resource supports read replica mode through spec.readReplicaMode. |
| 2022-01-19 | RedisInstance replica count |  | The RedisInstance resource supports replica count configuration through spec.replicaCount. |
| 2022-01-19 | SQLInstance allocated IP range |  | Config Connector supports setting an allocated IP range on SQLInstance resources through spec.settings.ipConfiguration.allocatedIpRange. |
| 2022-01-19 | StorageBucket public access prevention |  | The StorageBucket resource supports public access prevention through spec.publicAccessPrevention. |
| 2022-01-07 | Compute instance queue count |  | Config Connector supports configuring queue count on ComputeInstance and ComputeInstanceTemplate resources. |
| 2022-01-07 | ComputeRouterPeer BFD configuration |  | Config Connector supports configuring BFD settings on ComputeRouterPeer resources. |
| 2022-01-07 | ContainerCluster GCFS configuration | 2022-01-07 | Config Connector added GCFS configuration support on ContainerCluster resources, but the field was marked deprecated; deprecated on 2022-01-07. |
| 2022-01-07 | ContainerCluster nodeConfig field | 2022-01-07 | The spec.nodeConfig field on ContainerCluster resources is deprecated and should not be used in configuration; deprecated on 2022-01-07. |
| 2022-01-07 | ContainerNodePool GCFS configuration |  | Config Connector supports GCFS configuration on ContainerNodePool resources. |
| 2022-01-07 | ContainerNodePool managed instance group URLs |  | Config Connector exposes managed instance group URLs on ContainerNodePool resources. |
| 2022-01-07 | IAMPolicyMember Workload Identity principal references |  | Config Connector supports referencing Workload Identity principals in IAMPolicyMember resources. |
| 2022-01-07 | MonitoringUptimeCheckConfig resource |  | Config Connector supports the MonitoringUptimeCheckConfig resource. |
| 2022-01-07 | NetworkServicesGateway resource |  | Config Connector supports the NetworkServicesGateway resource in alpha. |
| 2022-01-07 | NetworkServicesGRPCRoute resource |  | Config Connector supports the NetworkServicesGRPCRoute resource in alpha. |
| 2022-01-07 | NetworkServicesHTTPRoute resource |  | Config Connector supports the NetworkServicesHTTPRoute resource in alpha. |
| 2022-01-07 | NetworkServicesMesh resource |  | Config Connector supports the NetworkServicesMesh resource in alpha. |
| 2022-01-07 | NetworkServicesTCPRoute resource |  | Config Connector supports the NetworkServicesTCPRoute resource in alpha. |
| 2022-01-07 | PubSubTopic message retention duration |  | Config Connector supports setting message retention duration on PubSubTopic resources. |
| 2022-01-07 | RunService resource |  | Config Connector supports the RunService resource in alpha. |
| 2021-12-14 | CloudIdentityMembership resource |  | Config Connector supports the CloudIdentityMembership resource. |
| 2021-12-14 | ComputePacketMirroring resource |  | Config Connector supports the ComputePacketMirroring resource. |
| 2021-12-14 | ConfigConnectorContext billing project override |  | Config Connector supports specifying a quota billing project in ConfigConnectorContext through the billgProject flag. |
| 2021-12-14 | ContainerCluster state-into-spec absent mode |  | Config Connector supports state-into-spec set to absent on ContainerCluster resources. |
| 2021-12-14 | IAMWorkloadIdentityPool resource |  | Config Connector supports the IAMWorkloadIdentityPool resource. |
| 2021-12-14 | IAMWorkloadIdentityPoolProvider resource |  | Config Connector supports the IAMWorkloadIdentityPoolProvider resource. |
| 2021-12-14 | PrivateCACAPool resource |  | Config Connector supports the PrivateCACAPool resource. |
| 2021-12-14 | VPCAccessConnector resource |  | Config Connector supports the VPCAccessConnector resource. |
| 2021-12-01 | MonitoringService resource |  | Config Connector supports the MonitoringService resource. |
| 2021-12-01 | MonitoringServiceLevelObjective resource |  | Config Connector supports the MonitoringServiceLevelObjective resource. |
| 2021-12-01 | NetworkConnectivityHub resource |  | Config Connector supports the NetworkConnectivityHub resource. |
| 2021-12-01 | OSConfigOSPolicyAssignment resource |  | Config Connector supports the OSConfigOSPolicyAssignment resource. |
| 2021-12-01 | RecaptchaEnterpriseKey resource |  | Config Connector supports the RecaptchaEnterpriseKey resource. |
| 2021-12-01 | Regional ComputeSSLCertificate resource |  | Config Connector supports regional ComputeSSLCertificate resources. |
| 2021-12-01 | SecretManagerSecretVersion resource ID support |  | Config Connector supports the resourceID field on SecretManagerSecretVersion resources. |
| 2021-11-11 | ConfigControllerInstance resource |  | Config Connector supports the ConfigControllerInstance resource in alpha. |
| 2021-11-11 | ContainerCluster GPU partition size |  | Config Connector supports configuring GPU partition size on ContainerCluster resources. |
| 2021-11-11 | ContainerCluster instance group URLs status field | 2021-11-11 | The status.instanceGroupUrls field on ContainerCluster resources is deprecated; deprecated on 2021-11-11. |
| 2021-11-11 | ContainerCluster masterAuth field | 2021-11-11 | The spec.masterAuth field on ContainerCluster resources is deprecated; deprecated on 2021-11-11. |
| 2021-11-11 | ContainerCluster workload identity identity namespace | 2021-11-11 | The spec.workloadIdentityConfig.identityNamespace field on ContainerCluster resources is deprecated and no longer required; deprecated on 2021-11-11. |
| 2021-11-11 | ContainerCluster workload pool |  | Config Connector supports configuring the workload pool on ContainerCluster resources. |
| 2021-11-11 | ContainerNodePool GPU partition size |  | Config Connector supports configuring GPU partition size on ContainerNodePool resources. |
| 2021-11-11 | PrivateCACertificateTemplate resource |  | Config Connector supports the PrivateCACertificateTemplate resource. |
| 2021-11-04 | IAMPartialPolicy memberFrom support |  | Config Connector supports the memberFrom field in IAMPartialPolicy resources. |
| 2021-11-01 | ComputeServiceAttachment resource |  | Config Connector supports the ComputeServiceAttachment resource. |
| 2021-11-01 | config-connector print-resources IAM support column |  | The config-connector print-resources CLI output includes a column indicating support for related IAM resources. |
| 2021-10-25 | CloudBuildTrigger service account reference |  | Config Connector supports the serviceAccountRef field on CloudBuildTrigger resources. |
| 2021-10-25 | ComputeBackendService connection tracking policy |  | Config Connector supports the connectionTrackingPolicy field on ComputeBackendService resources. |
| 2021-10-25 | ComputeFirewallPolicyRule resource |  | Config Connector supports the ComputeFirewallPolicyRule resource. |
| 2021-10-25 | ComputeInstance IPv6 access configuration |  | Config Connector supports IPv6 access configuration on ComputeInstance resources. |
| 2021-10-25 | ComputeInstance IPv6 access type |  | Config Connector supports setting IPv6 access type on ComputeInstance resources. |
| 2021-10-25 | ComputeInstance stack type |  | Config Connector supports setting network stack type on ComputeInstance resources. |
| 2021-10-25 | ComputeInstanceTemplate IPv6 access configuration |  | Config Connector supports IPv6 access configuration on ComputeInstanceTemplate resources. |
| 2021-10-25 | ComputeInstanceTemplate IPv6 access type |  | Config Connector supports setting IPv6 access type on ComputeInstanceTemplate resources. |
| 2021-10-25 | ComputeInstanceTemplate stack type |  | Config Connector supports setting network stack type on ComputeInstanceTemplate resources. |
| 2021-10-25 | ComputeSubnetwork external IPv6 prefix |  | Config Connector supports the external IPv6 prefix field on ComputeSubnetwork resources. |
| 2021-10-25 | ComputeSubnetwork IPv6 access type |  | Config Connector supports setting IPv6 access type on ComputeSubnetwork resources. |
| 2021-10-25 | ComputeSubnetwork IPv6 CIDR range |  | Config Connector supports the IPv6 CIDR range field on ComputeSubnetwork resources. |
| 2021-10-25 | ComputeSubnetwork stack type |  | Config Connector supports setting network stack type on ComputeSubnetwork resources. |
| 2021-10-25 | ContainerCluster DNS configuration |  | Config Connector supports dnsConfig on ContainerCluster resources. |
| 2021-10-25 | ContainerCluster logging configuration |  | Config Connector supports loggingConfig on ContainerCluster resources. |
| 2021-10-25 | ContainerCluster monitoring configuration |  | Config Connector supports monitoringConfig on ContainerCluster resources. |
| 2021-10-25 | ContainerCluster node metadata setting | 2021-10-25 | The nodeConfig.workloadMetadataConfig.nodeMetadata field on ContainerCluster resources is deprecated; deprecated on 2021-10-25. |
| 2021-10-25 | ContainerCluster workload metadata mode |  | Config Connector supports configuring workload metadata mode on ContainerCluster resources. |
| 2021-10-25 | FilestoreBackup resource |  | Config Connector supports the FilestoreBackup resource. |
| 2021-10-25 | FilestoreInstance resource |  | Config Connector supports the FilestoreInstance resource. |
| 2021-10-25 | IAMServiceAccount disabled field |  | Config Connector supports the disabled field on IAMServiceAccount resources. |
| 2021-10-25 | KMSCryptoKey import-only mode |  | Config Connector supports the importOnly field on KMSCryptoKey resources. |
| 2021-10-25 | StorageTransferJob GCS path fields |  | Config Connector supports GCS source and sink path fields on StorageTransferJob resources. |
| 2021-10-01 | GKEHubFeatureMembership Config Sync service account reference |  | Config Connector supports a GCP service account reference for Config Sync on GKEHubFeatureMembership resources. |
| 2021-10-01 | KMSCryptoKey destroy scheduled duration |  | Config Connector supports setting destroy scheduled duration on KMSCryptoKey resources. |
| 2021-09-21 | ConfigConnector kubectl Age and Healthy columns |  | Kubectl tabular output for ConfigConnector and ConfigConnectorContext resources includes Age and Healthy columns. |
| 2021-09-10 | ComputeBackendService security settings |  | Config Connector supports the securitySettings field on ComputeBackendService resources. |
| 2021-09-03 | ComputeFirewallPolicy resource support |  | Config Connector supports managing the ComputeFirewallPolicy resource. |
| 2021-08-19 | ContainerNodePool networkConfig field |  | Config Connector supports the networkConfig field on ContainerNodePool. |
| 2021-08-19 | IAMPartialPolicy CLI output format |  | The config-connector CLI supports IAMPartialPolicy as an IAM output format. |
| 2021-08-19 | SpannerInstance processingUnits field |  | Config Connector supports the processingUnits field on SpannerInstance. |
| 2021-08-02 | CloudBuildTrigger pubsubConfig |  | Config Connector supports the pubsubConfig option for CloudBuildTrigger. |
| 2021-08-02 | CloudBuildTrigger webhookConfig |  | Config Connector supports the webhookConfig option for CloudBuildTrigger. |
| 2021-08-02 | MonitoringMetricDescriptor resource support |  | Config Connector supports managing the MonitoringMetricDescriptor resource. |
| 2021-08-02 | Service-generated resource ID resource list |  | Config Connector provides a list of resources that use service-generated resource IDs. |
| 2021-08-02 | state-into-spec annotation support |  | Config Connector supports the cnrm.cloud.google.com/state-into-spec annotation for merging or omitting resource state in spec, initially for BigQueryDataset. |
| 2021-07-22 | BigQueryJob kmsKeyVersion output fields |  | Config Connector exposes output-only kmsKeyVersion fields for BigQueryJob destination encryption configurations. |
| 2021-07-22 | BigQueryTable kmsKeyVersion output field |  | Config Connector exposes the output-only encryptionConfiguration.kmsKeyVersion field for BigQueryTable. |
| 2021-07-22 | ComputeInstance advancedMachineFeatures |  | Config Connector supports the advancedMachineFeatures field on ComputeInstance. |
| 2021-07-22 | GKEHubFeatureMembership resource support |  | Config Connector supports managing the GKEHubFeatureMembership resource. |
| 2021-07-22 | ServiceUsageService projectRef |  | Config Connector supports the spec.projectRef field on ServiceUsageService. |
| 2021-07-13 | Aggregated ClusterRoles |  | Config Connector aggregates cnrm-admin and cnrm-viewer ClusterRoles into standard Kubernetes admin, edit, and view roles. |
| 2021-07-13 | BigtableInstance cluster.kmsKeyRef |  | Config Connector supports the cluster.kmsKeyRef field on BigtableInstance. |
| 2021-07-13 | BinaryAuthorizationPolicy resource support |  | Config Connector supports managing the BinaryAuthorizationPolicy resource. |
| 2021-07-13 | ComputeInstanceGroupManager resource support |  | Config Connector supports managing the ComputeInstanceGroupManager resource. |
| 2021-07-13 | SecretManagerSecret lifecycle and topic fields |  | Config Connector supports the expire, rotation, topics, and ttl fields on SecretManagerSecret. |
| 2021-07-13 | Timestamped log messages |  | Config Connector includes timestamps in log messages. |
| 2021-07-07 | NetworkServicesEndpointPolicy resource support |  | Config Connector supports managing the NetworkServicesEndpointPolicy resource. |
| 2021-06-24 | BinaryAuthorizationAttestor resource support |  | Config Connector supports managing the BinaryAuthorizationAttestor resource. |
| 2021-06-24 | GKEHubFeature resource support |  | Config Connector supports managing the GKEHubFeature resource. |
| 2021-06-24 | IAMPartialPolicy resource support |  | Config Connector supports managing the IAMPartialPolicy resource. |
| 2021-06-24 | MonitoringDashboard resource support |  | Config Connector supports managing the MonitoringDashboard resource. |
| 2021-06-24 | NetworkSecurityAuthorizationPolicy resource support |  | Config Connector supports managing the NetworkSecurityAuthorizationPolicy resource. |
| 2021-06-21 | DataprocAutoScalingPolicy projectRef |  | Config Connector supports strong hierarchical references through spec.projectRef on DataprocAutoScalingPolicy. |
| 2021-06-21 | DataprocCluster projectRef |  | Config Connector supports strong hierarchical references through spec.projectRef on DataprocCluster. |
| 2021-06-21 | DataprocWorkflowTemplate projectRef |  | Config Connector supports strong hierarchical references through spec.projectRef on DataprocWorkflowTemplate. |
| 2021-06-21 | MonitoringGroup projectRef |  | Config Connector supports strong hierarchical references through spec.projectRef on MonitoringGroup. |
| 2021-06-21 | NetworkSecurityClientTLSPolicy resource support |  | Config Connector supports managing the NetworkSecurityClientTLSPolicy resource. |
| 2021-06-21 | NetworkSecurityServerTLSPolicy resource support |  | Config Connector supports managing the NetworkSecurityServerTLSPolicy resource. |
| 2021-06-11 | ComputeUrlMap resource support |  | Config Connector supports managing the ComputeURLMap resource; Config Connector supports managing ComputeUrlMap resources. |
| 2021-06-11 | DataFusionInstance resource support |  | Config Connector supports managing the DataFusionInstance resource. |
| 2021-06-11 | IAMServiceAccount resourceID |  | Config Connector supports the resourceID field on IAMServiceAccount. |
| 2021-06-11 | LoggingLogExclusion resource support |  | Config Connector supports managing the LoggingLogExclusion resource. |
| 2021-04-27 | CloudIdentityGroup Go client |  | Config Connector provides a generated Go client for CloudIdentityGroup. |
| 2021-04-27 | ComputeDisk projectRef |  | Config Connector supports the projectRef field on ComputeDisk. |
| 2021-04-27 | GKEHubMembership Go client |  | Config Connector provides a generated Go client for GKEHubMembership. |
| 2021-04-16 | BigQueryDataset projectRef |  | Config Connector supports the projectRef field on BigQueryDataset. |
| 2021-04-16 | ContainerCluster enableAutopilot |  | Config Connector supports the enableAutopilot field on ContainerCluster. |
| 2021-04-16 | ContainerCluster enableL4IlbSubsetting |  | Config Connector supports the enableL4IlbSubsetting field on ContainerCluster. |
| 2021-04-16 | ContainerCluster privateIpv6GoogleAccess |  | Config Connector supports the privateIpv6GoogleAccess field on ContainerCluster. |
| 2021-04-16 | observedGeneration status field |  | Config Connector exposes the observedGeneration field in resource status for kstatus compatibility. |
| 2021-04-08 | ComputeTargetHTTPProxy proxyBind |  | Config Connector supports the proxyBind field on ComputeTargetHTTPProxy. |
| 2021-04-08 | ComputeTargetHTTPSProxy proxyBind |  | Config Connector supports the proxyBind field on ComputeTargetHTTPSProxy. |
| 2021-04-08 | ComputeTargetTCPProxy proxyBind |  | Config Connector supports the proxyBind field on ComputeTargetTCPProxy. |
| 2021-04-08 | DataflowJob enableStreamingEngine |  | Config Connector supports the enableStreamingEngine field on DataflowJob. |
| 2021-04-08 | IdentityPlatformOAuthIDPConfig resource support |  | Config Connector supports managing the IdentityPlatformOAuthIDPConfig resource. |
| 2021-04-08 | IdentityPlatformTenant resource support |  | Config Connector supports managing the IdentityPlatformTenant resource. |
| 2021-04-08 | IdentityPlatformTenantOauthIDPConfig resource support |  | Config Connector supports managing the IdentityPlatformTenantOauthIDPConfig resource. |
| 2021-04-08 | OSConfigGuestPolicy resource support |  | Config Connector supports managing the OSConfigGuestPolicy resource. |
| 2021-04-08 | Unique Go client struct naming |  | Config Connector Go client resources use Kind-prefixed struct names to ensure package-level uniqueness. |
| 2021-04-08 | Viewer cluster role for cross-namespace references |  | Config Connector provides a viewer cluster role that allows cross-namespace references in namespaced mode. |
| 2021-03-25 | ComputeInterconnectAttachment mtu |  | Config Connector supports the mtu field on ComputeInterconnectAttachment. |
| 2021-03-25 | ContainerAnalysisNote resource support |  | Config Connector supports managing the ContainerAnalysisNote resource. |
| 2021-03-25 | ContainerCluster nodeConfig.ephemeralStorageConfig |  | Config Connector supports the nodeConfig.ephemeralStorageConfig field on ContainerCluster. |
| 2021-03-25 | ContainerNodePool nodeConfig.ephemeralStorageConfig |  | Config Connector supports the nodeConfig.ephemeralStorageConfig field on ContainerNodePool. |
| 2021-03-25 | Folder acquisition by displayName and references |  | Config Connector supports acquiring Folder resources using displayName together with folderRef or organizationRef. |
| 2021-03-25 | SQLInstance backup retention settings |  | Config Connector supports backupRetentionSettings and transactionLogRetentionDays in SQLInstance backup configuration. |
| 2021-03-23 | CLI filter for deleted IAM members |  | The config-connector CLI supports filtering out deleted IAM members. |
| 2021-03-23 | Folder folderRef and organizationRef |  | Config Connector supports the folderRef and organizationRef fields on Folder. |
| 2021-03-23 | IAPBrand resource support |  | Config Connector supports managing the IAPBrand resource. |
| 2021-03-23 | IAPIdentityAwareProxyClient resource support |  | Config Connector supports managing the IAPIdentityAwareProxyClient resource. |
| 2021-03-23 | Project folderRef and organizationRef |  | Config Connector supports the folderRef and organizationRef fields on Project. |
| 2021-03-05 | ComputeForwardingRule targetGRPCProxyRef |  | Config Connector supports the targetGRPCProxyRef field on ComputeForwardingRule. |
| 2021-03-05 | RedisInstance serverCaCerts status field |  | Config Connector exposes the serverCaCerts field in RedisInstance status. |
| 2021-03-05 | RedisInstance transitEncryptionMode |  | Config Connector supports the transitEncryptionMode field on RedisInstance. |
| 2021-03-05 | SQLInstance insightsConfig |  | Config Connector supports the insightsConfig field on SQLInstance. |
| 2021-02-26 | BigQueryJob status field |  | BigQueryJob includes a status field. |
| 2021-02-26 | ComputeInstance nicType |  | Config Connector supports the nicType field on ComputeInstance. |
| 2021-02-26 | ComputeInstanceTemplate nicType field | 2021-03-25 | The nicType field on ComputeInstanceTemplate configures the network interface type for instance templates; ComputeInstanceTemplate supports the nicType field; deprecated on 2021-03-25. |
| 2021-02-26 | ComputeInstanceTemplate resourcePolicies field |  | ComputeInstanceTemplate supports the resourcePolicies field. |
| 2021-02-26 | DataprocAutoscalingPolicy resource support |  | Config Connector supports managing the DataprocAutoscalingPolicy resource. |
| 2021-02-26 | DataprocCluster resource support |  | Config Connector supports managing the DataprocCluster resource. |
| 2021-02-26 | DataprocWorkflowTemplate resource support |  | Config Connector supports managing the DataprocWorkflowTemplate resource. |
| 2021-02-26 | MemcacheInstance resource support |  | Config Connector supports managing the MemcacheInstance resource. |
| 2021-02-22 | CloudSchedulerJob resource support |  | Config Connector supports managing the CloudSchedulerJob resource. |
| 2021-02-22 | Go types and clients for Config Connector resources |  | Config Connector provides alpha Go types and clients for its resources. |
| 2021-02-05 | Access Context Manager resourceID support |  | Access Context Manager resources support the resourceID field. |
| 2021-02-05 | ContainerCluster resourceID support |  | ContainerCluster supports the resourceID field. |
| 2021-02-05 | ContainerNodePool resourceID support |  | ContainerNodePool supports the resourceID field. |
| 2021-02-05 | SourceRepoRepository resourceID support |  | SourceRepoRepository supports the resourceID field. |
| 2021-01-27 | ArtifactRegistryRepository resourceID support |  | ArtifactRegistryRepository supports the resourceID field. |
| 2021-01-27 | Bigtable resourceID support |  | Bigtable resources support the resourceID field. |
| 2021-01-27 | DataflowJob resourceID support |  | DataflowJob supports the resourceID field. |
| 2021-01-27 | DNS resourceID support |  | DNS resources support the resourceID field. |
| 2021-01-27 | Monitoring resourceID support |  | Monitoring resources support the resourceID field. |
| 2021-01-27 | RedisInstance resourceID support |  | RedisInstance supports the resourceID field. |
| 2021-01-27 | ResourceManagerLien resourceID support |  | ResourceManagerLien supports the resourceID field. |
| 2021-01-27 | SecretManagerSecret resourceID support |  | SecretManagerSecret supports the resourceID field. |
| 2021-01-27 | Spanner resourceID support |  | Spanner resources support the resourceID field. |
| 2021-01-27 | StorageTransferJob resourceID support |  | StorageTransferJob supports the resourceID field. |
| 2021-01-22 | Compute resourceID support |  | Compute resources support the resourceID field. |
| 2021-01-22 | config-connector print-resources CLI command |  | The Config Connector CLI includes a print-resources command that shows resource export and bulk-export support levels. |
| 2021-01-22 | IAMCustomRole organization reference support |  | IAMCustomRole can reference an organization. |
| 2021-01-13 | IAMCustomRole resourceID support |  | IAMCustomRole supports the resourceID field. |
| 2021-01-13 | KMS resourceID support |  | KMS resources support the resourceID field. |
| 2021-01-13 | LoggingLogSink resourceID support |  | LoggingLogSink supports the resourceID field. |
| 2021-01-13 | MonitoringGroup resource support |  | Config Connector supports managing the MonitoringGroup resource. |
| 2021-01-13 | Pub/Sub resourceID support |  | Pub/Sub resources support the resourceID field. |
| 2021-01-13 | SQL resourceID support |  | SQL resources support the resourceID field. |
| 2021-01-13 | StorageBucket resourceID support |  | StorageBucket supports the resourceID field. |
| 2021-01-06 | ComputeBackendBucket cacheMode field |  | ComputeBackendBucket supports the cacheMode field. |
| 2021-01-06 | ComputeBackendBucket clientTtl field |  | ComputeBackendBucket supports the clientTtl field. |
| 2021-01-06 | ComputeBackendBucket customResponseHeaders field |  | ComputeBackendBucket supports the customResponseHeaders field. |
| 2021-01-06 | ComputeBackendBucket defaultTtl field |  | ComputeBackendBucket supports the defaultTtl field. |
| 2021-01-06 | ComputeBackendBucket maxTtl field |  | ComputeBackendBucket supports the maxTtl field. |
| 2021-01-06 | ComputeBackendBucket negativeCaching field |  | ComputeBackendBucket supports the negativeCaching field. |
| 2021-01-06 | ComputeBackendBucket negativeCachingPolicy field |  | ComputeBackendBucket supports the negativeCachingPolicy field. |
| 2021-01-06 | ComputeBackendBucket serveWhileStale field |  | ComputeBackendBucket supports the serveWhileStale field. |
| 2021-01-06 | ComputeDisk IAM support |  | ComputeDisk supports IAM integration. |
| 2021-01-06 | GameServicesRealm resource support | 2022-11-15 | Config Connector supports managing GameServicesRealm resources; Config Connector supports managing the GameServicesRealm resource; deprecated on 2022-11-15. |
| 2021-01-06 | IAM Member References |  | IAMPolicyMember can reference another resource as the IAM member by using memberFrom. |
| 2021-01-06 | IAMAuditConfig failure dependency event support |  | IAMAuditConfig supports UpdateFailed, DeleteFailed, DependencyNotFound, and DependencyNotReady events. |
| 2021-01-06 | IAMPolicy failure dependency event support |  | IAMPolicy supports UpdateFailed, DeleteFailed, DependencyNotFound, and DependencyNotReady events. |
| 2021-01-06 | IAMPolicyMember failure dependency event support |  | IAMPolicyMember supports UpdateFailed, DeleteFailed, DependencyNotFound, and DependencyNotReady events. |
| 2021-01-06 | StorageBucket customTimeBefore field |  | StorageBucket supports the customTimeBefore field. |
| 2021-01-06 | StorageBucket daysSinceCustomTime field |  | StorageBucket supports the daysSinceCustomTime field. |
| 2021-01-06 | StorageBucket daysSinceNoncurrentTime field |  | StorageBucket supports the daysSinceNoncurrentTime field. |
| 2021-01-06 | StorageBucket noncurrentTimeBefore field |  | StorageBucket supports the noncurrentTimeBefore field. |
| 2020-12-09 | BigtableTable IAM support |  | BigtableTable supports IAM integration. |
| 2020-12-09 | ComputeBackendService computeResponseHeaders field |  | ComputeBackendService supports the computeResponseHeaders field. |
| 2020-12-09 | ComputeProjectMetadata resource support |  | Config Connector supports managing the ComputeProjectMetadata resource. |
| 2020-12-09 | ContainerCluster maintenancePolicy.maintenanceExclusion field |  | ContainerCluster supports the maintenancePolicy.maintenanceExclusion field; ContainerCluster supports the maintenancePolicy.maintenanceExclusion field. |
| 2020-12-09 | DataflowJob acquisition by name |  | DataflowJob can be acquired by name. |
| 2020-12-09 | LoggingLogSink description field |  | LoggingLogSink supports the description field; LoggingLogSink supports the description field. |
| 2020-12-09 | LoggingLogSink disabled field |  | LoggingLogSink supports the disabled field; LoggingLogSink supports the disabled field. |
| 2020-12-09 | ServiceUsageService resourceID support |  | ServiceUsageService supports the resourceID field. |
| 2020-12-09 | StorageNotification resourceID support |  | StorageNotification supports the resourceID field. |
| 2020-12-01 | BigQueryDataset resourceID support |  | BigQueryDataset supports the resourceID field. |
| 2020-12-01 | BigQueryJob resourceID support |  | BigQueryJob supports the resourceID field. |
| 2020-12-01 | BigQueryTable resourceID support |  | BigQueryTable supports the resourceID field. |
| 2020-12-01 | ComputeBackendService customResponseHeaders field |  | ComputeBackendService supports the customResponseHeaders field. |
| 2020-12-01 | Folder resourceID support |  | Folder supports the resourceID field. |
| 2020-11-23 | ComputeTargetGRPCProxy resource support |  | Config Connector supports managing the ComputeTargetGRPCProxy resource. |
| 2020-11-23 | ResourceManagerLien resource support |  | Config Connector supports managing the ResourceManagerLien resource. |
| 2020-11-10 | ComputeDisk interface field | 2021-10-01 | The spec.interface field on ComputeDisk resources is deprecated and no longer used by the API; ComputeDisk supports the interface field; deprecated on 2021-10-01. |
| 2020-11-10 | ComputeNetwork mtu field |  | ComputeNetwork supports the mtu field. |
| 2020-11-10 | ComputeNodeGroup maintenancePolicy field |  | ComputeNodeGroup supports the maintenancePolicy field. |
| 2020-11-10 | ComputeSubnetwork privateIpv6GoogleAccess field |  | ComputeSubnetwork supports the privateIpv6GoogleAccess field. |
| 2020-11-10 | ContainerCluster confidentialNodes field |  | ContainerCluster supports the confidentialNodes field. |
| 2020-11-10 | KMSCryptoKey skipInitialVersionCreation field |  | KMSCryptoKey supports the skipInitialVersionCreation field. |
| 2020-11-10 | LoggingLogSink exclusions field |  | LoggingLogSink supports the exclusions field. |
| 2020-11-10 | MonitoringAlertPolicy resource support |  | Config Connector supports managing the MonitoringAlertPolicy resource. |
| 2020-11-10 | RedisInstance authEnabled field |  | RedisInstance supports the authEnabled field. |
| 2020-11-06 | DataflowJob mutable labels |  | DataflowJob labels can now be updated. |
| 2020-11-06 | Immutability documentation in field descriptions |  | Field descriptions now indicate whether fields are immutable. |
| 2020-10-28 | ConfigConnectorContext spec.requestProjectPolicy field |  | ConfigConnectorContext supports the spec.requestProjectPolicy field. |
| 2020-10-21 | IAMPolicyMember external billing account and organization references |  | IAMPolicyMember supports external references to billing accounts and organizations. |
| 2020-10-21 | LoggingLogSink resource support |  | Config Connector supports managing LoggingLogSink resources at project, folder, and organization scopes. |
| 2020-10-21 | ResourceManagerPolicy resource support |  | Config Connector supports managing ResourceManagerPolicy resources at project, folder, and organization scopes. |
| 2020-10-19 | MonitoringNotificationChannel resource support |  | Config Connector supports managing the MonitoringNotificationChannel resource. |
| 2020-10-15 | AccessContextManagerServicePerimeter resource support |  | Config Connector supports managing the AccessContextManagerServicePerimeter resource. |
| 2020-10-15 | config-connector CLI export subcommand |  | The config-connector CLI includes an export subcommand for exporting resources. |
| 2020-10-15 | Folder-level IAM Audit Configs |  | Config Connector supports managing folder-level IAM audit configurations. |
| 2020-10-07 | CloudBuildTrigger artifacts field |  | The CloudBuildTrigger resource includes an artifacts field. |
| 2020-10-07 | CloudBuildTrigger options field |  | The CloudBuildTrigger resource includes an options field. |
| 2020-10-07 | ComputeBackendService GRPC protocol support |  | The ComputeBackendService resource supports the GRPC protocol. |
| 2020-10-07 | ContainerCluster datapathProvider field |  | The ContainerCluster resource includes a datapathProvider field. |
| 2020-10-07 | ContainerCluster loadBalancerType field |  | The ContainerCluster resource includes a loadBalancerType field. |
| 2020-10-07 | ContainerCluster notificationConfig field |  | The ContainerCluster resource includes a notificationConfig field. |
| 2020-10-07 | DataflowFlexTemplateJob resource |  | Config Connector supports the DataflowFlexTemplateJob resource. |
| 2020-10-07 | DataflowJob transformNameMapping field |  | The DataflowJob resource includes a transformNameMapping field. |
| 2020-10-07 | IAMPolicy auditConfigs field |  | The IAMPolicy resource includes an auditConfigs field. |
| 2020-10-07 | Server-side apply metadata auto-trigger |  | Config Connector can automatically trigger server-side apply metadata on resources in supported Kubernetes clusters. |
| 2020-10-02 | ComputeImage Cloud IAM support |  | The ComputeImage resource supports Cloud IAM management. |
| 2020-09-03 | BigtableInstance optional numNodes |  | The BigtableInstance resource allows numNodes to be omitted for externally managed or development instances. |
| 2020-08-19 | BigtableGCPolicy resource |  | Config Connector supports the BigtableGCPolicy resource for Bigtable garbage collection policies. |
| 2020-08-13 | BigtableAppProfile resource |  | Config Connector supports the BigtableAppProfile resource. |
| 2020-08-13 | Config Connector GKE Add-on |  | The Config Connector GKE Add-on enables Config Connector during GKE cluster creation. |
| 2020-08-08 | BigtableTable resource |  | Config Connector supports the BigtableTable resource. |
| 2020-07-31 | ArtifactRegistryRepository resource |  | Config Connector supports the ArtifactRegistryRepository resource. |
| 2020-07-31 | DataflowJob updatable ipConfiguration |  | The DataflowJob resource allows updates to spec.ipConfiguration. |
| 2020-07-31 | DataflowJob updatable parameters |  | The DataflowJob resource allows updates to spec.parameters. |
| 2020-07-16 | Cluster-mode setup |  | Cluster-mode setup lets Config Connector use one Google Service Account across all namespaces in a cluster. |
| 2020-07-16 | Externally managed unspecified fields |  | Config Connector can allow unspecified resource fields to be managed externally when server-side apply is enabled. |
| 2020-07-16 | IAM projectViewer member prefix support |  | IAMPolicy and IAMPolicyMember support the projectViewer member prefix. |
| 2020-07-09 | SecretManagerSecret resource |  | Config Connector supports the SecretManagerSecret resource. |
| 2020-07-01 | CRD server-side dry-run support |  | Config Connector resource CRDs support the --server-dry-run option. |
| 2020-06-25 | ComputeForwardingRule SSL and TCP proxy targets |  | The ComputeForwardingRule resource can reference ComputeTargetSSLProxy and ComputeTargetTCPProxy targets. |
| 2020-06-25 | config-connector CLI iam-format option |  | The config-connector CLI provides an iam-format option to control IAM output format. |
| 2020-06-16 | config-connector resource export |  | The config-connector tool can export Google Cloud resources into Config Connector manifests. |
| 2020-06-12 | IAMPolicy export output |  | The config-connector tool includes IAMPolicy in its export output. |
| 2020-06-12 | Streaming DataflowJob updates |  | Streaming DataflowJob resources can be updated by changing supported spec fields. |
| 2020-04-10 | CloudBuildTrigger resource |  | Config Connector supports the CloudBuildTrigger resource. |
| 2020-04-10 | SourceRepoRepository resource |  | Config Connector supports the SourceRepoRepository resource. |
| 2020-03-25 | ComputeInstance structured metadata |  | The ComputeInstance resource supports structured metadata through the spec.metadata field. |
| 2020-03-25 | ComputeInstanceTemplate structured metadata |  | The ComputeInstanceTemplate resource supports structured metadata through the spec.metadata field. |
| 2020-03-25 | Deletion Defender |  | Deletion Defender prevents unintended underlying resource deletions when the protective workload is unavailable. |
| 2020-03-10 | ComputeHealthCheck regional location support |  | The ComputeHealthCheck resource location field supports regional values. |
| 2020-03-10 | Config Connector manifest version annotation |  | Config Connector manifests include a version annotation. |
| 2020-02-26 | DataflowJob resource |  | Config Connector supports the DataflowJob resource. |
| 2020-02-21 | ComputeNetworkEndpointGroup resource |  | Config Connector supports the ComputeNetworkEndpointGroup resource. |
| 2020-02-17 | DNSPolicy resource |  | Config Connector supports the DNSPolicy resource. |
| 2020-02-09 | ComputeResourcePolicy resource |  | Config Connector supports the ComputeResourcePolicy resource. |
| 2020-01-23 | General Availability |  | Config Connector is generally available for production use. |
| 2020-01-23 | Namespaced mode multi-service-account authentication |  | Namespaced mode lets Config Connector authenticate to multiple Google Service Accounts using different Kubernetes Service Accounts. |
| 2020-01-23 | Resource directives |  | Resource directives let Config Connector perform additional actions beyond creating or deleting resources. |
| 2020-01-23 | Sensitive data from GKE Secrets |  | Config Connector can configure Google Cloud resources using sensitive data stored in GKE Secrets. |
| 2020-01-09 | DNSRecordSet resource |  | Config Connector supports the DNSRecordSet resource. |
| 2020-01-09 | Project resource |  | Config Connector supports the Project resource. |
| 2020-01-09 | ServiceUsage resource |  | Config Connector supports the ServiceUsage resource. |
| 2020-01-02 | IAM external resource references |  | IAMPolicy and IAMPolicyMember support references to external resources. |
| 2020-01-02 | Prometheus metrics improvements |  | Config Connector includes improved initial Prometheus metrics. |
| 2019-12-23 | ComputeNodeTemplate resource |  | Config Connector supports the ComputeNodeTemplate resource. |
| 2019-12-23 | Prometheus metrics export |  | Config Connector can export Prometheus metrics. |
| 2019-12-17 | ComputeTargetTCPProxy resource |  | Config Connector supports the ComputeTargetTCPProxy resource. |
| 2019-12-17 | External resource reference field |  | Config Connector provides an external field for external resource references. |
| 2019-12-12 | SpannerDatabase resource |  | Config Connector supports the SpannerDatabase resource. |
| 2019-11-26 | ComputeTargetHTTPSProxy resource |  | Config Connector supports the ComputeTargetHTTPSProxy resource. |
| 2019-11-26 | ServiceNetworkingConnection resource |  | Config Connector supports the ServiceNetworkingConnection resource. |
| 2019-11-21 | ComputeDisk resource |  | Config Connector supports the regional ComputeDisk resource. |
| 2019-11-21 | ComputeInterconnectAttachment resource |  | Config Connector supports the ComputeInterconnectAttachment resource. |
| 2019-11-21 | ComputeSSLProxy resource |  | Config Connector supports the ComputeSSLProxy resource. |
| 2019-11-21 | ComputeTargetSSLProxy resource |  | Config Connector supports the ComputeTargetSSLProxy resource. |
| 2019-11-06 | ComputeRoute resource |  | Config Connector supports the ComputeRoute resource. |
| 2019-11-06 | ComputeRouterInterface resource |  | Config Connector supports the ComputeRouterInterface resource. |
| 2019-11-06 | ComputeRouterPeer resource |  | Config Connector supports the ComputeRouterPeer resource. |
| 2019-11-06 | FirestoreIndex resource |  | Config Connector supports the FirestoreIndex resource. |
| 2019-11-01 | BigQueryTable resource support |  | Config Connector supports managing BigQueryTable resources; Config Connector supports managing BigQueryTable resources. |
| 2019-11-01 | ComputeBackendBucket resource support |  | Config Connector supports managing ComputeBackendBucket resources. |
| 2019-11-01 | ComputeDisk resource support |  | Config Connector supports managing ComputeDisk resources. |
| 2019-11-01 | ComputeExternalVPNGateway resource support |  | Config Connector supports managing ComputeExternalVPNGateway resources; Config Connector supports managing ComputeExternalVPNGateway resources. |
| 2019-11-01 | ComputeHTTPHealthCheck resource support |  | Config Connector supports managing ComputeHTTPHealthCheck resources. |
| 2019-11-01 | ComputeImage resource support |  | Config Connector supports managing ComputeImage resources. |
| 2019-11-01 | ComputeRouter resource support |  | Config Connector supports managing ComputeRouter resources; Config Connector supports managing ComputeRouter resources. |
| 2019-11-01 | ComputeRouterNAT resource support |  | Config Connector supports managing ComputeRouterNAT resources. |
| 2019-11-01 | ComputeSnapshot resource support |  | Config Connector supports managing ComputeSnapshot resources. |
| 2019-11-01 | ComputeSSLCertificate resource support |  | Config Connector supports managing ComputeSSLCertificate resources. |
| 2019-11-01 | ComputeVPNTunnel resource support |  | Config Connector supports managing ComputeVPNTunnel resources. |
| 2019-11-01 | DNSManagedZone resource support |  | Config Connector supports managing DNSManagedZone resources. |
| 2019-11-01 | IAMPolicyMember resource support |  | Config Connector supports managing IAMPolicyMember resources. |
| 2019-11-01 | StorageNotification resource support |  | Config Connector supports managing StorageNotification resources. |
| 2019-10-15 | ComputeHTTPSHealthCheck resource support |  | Config Connector supports managing ComputeHTTPSHealthCheck resources. |
| 2019-10-15 | ComputeNetworkPeering resource support |  | Config Connector supports managing ComputeNetworkPeering resources. |
| 2019-10-15 | ComputeSharedVPCHostProject resource support |  | Config Connector supports managing ComputeSharedVPCHostProject resources. |
| 2019-10-15 | ComputeTargetVPNGateway resource support |  | Config Connector supports managing ComputeTargetVPNGateway resources. |
| 2019-10-15 | ComputeVpnGateway resource support |  | Config Connector supports managing ComputeVpnGateway resources. |
| 2019-10-15 | IAMCustomRole resource support |  | Config Connector supports managing IAMCustomRole resources. |
| 2019-09-30 | ContainerNodePool resource support |  | Config Connector supports managing ContainerNodePool resources. |
| 2019-09-30 | GKE Workload Identity support |  | Config Connector supports integration with GKE Workload Identity. |
| 2019-09-20 | ComputeGlobalForwardingRule resource support |  | Config Connector supports managing ComputeGlobalForwardingRule resources. |
| 2019-09-03 | ComputeBackendService resource support |  | Config Connector supports managing ComputeBackendService resources. |
| 2019-09-03 | ComputeFirewall resource support |  | Config Connector supports managing ComputeFirewall resources. |
| 2019-09-03 | ComputeTargetHTTPProxy resource support |  | Config Connector supports managing ComputeTargetHTTPProxy resources. |

Source file slug: `config-connector.md`

