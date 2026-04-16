---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.247Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "Bigtable resourceID support"
feature_slug: "bigtable-resourceid-support"
latest_feature_date: "2021-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigtable/bigtableinstance"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources"
keywords:
  - "bigtable"
  - "resourceid"
  - "resources"
  - "field"
---

# Bigtable resourceID support

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Bigtable resources support the resourceID field.

## Extended Definition

Bigtable resources support the resourceID field.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigtable/bigtableinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigtable/bigtableinstance)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)

## Supporting Pages

### BigtableInstance | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigtable/bigtableinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigtable/bigtableinstance)
- Source ID: `feature-recovery-http`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigtableInstance Property Value Google Cloud Service Name Cloud Bigtable Google Cloud Service Documentation /bigtable/docs/ Google Cloud REST Resource Name bigtableadmin/v2/projects.instances Google Cloud REST Resource Documentation /bigtable/docs/reference/admin/rest/v2/projects.instances Config Connector Resource Short Names gcpbigtableinstance gcpbigtableinstances bigtableinstance Config Connector Service Name bigtableadmin.googleapis.com Config Connector Resource Fully Qualified Name bigtableinstances.bigtable.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember Yes Supports IAM Conditions Yes Supports IAM Audit Configs No IAM External Reference Format projects/{{project}}/instances/{{name}} Config Connector Default Average Reconcile Interval In Seconds 3600 Custom Resource Definition Properties Annotations Fields cnrm.cloud.google.com/project-id Spec Schema cluster : - autoscalingConfig : cpuTarget : integer maxNodes : integer minNodes : integer storageTarget : integer clusterId : string kmsKeyRef : external : string name : string namespace : string numNodes : integer storageType : string zone : string deletionProtection : boolean displayName : string instanceType : string resourceID : string Fields cluster Optional list (object) A block of cluster configuration options.
- BigtableInstance | Config Connector | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Config Connector Start free Overview Guides API and reference Resources Technology areas More Overview Guides API and reference Resources Cross-product tools More Console Config Connector API resources overview AccessContextManager AccessContextManagerAccessLevel AccessContextManagerAccessPolicy AccessContextManagerServicePerimeter AccessContextManagerServicePerimeterResource AlloyDB AlloyDBBackup AlloyDBCluster AlloyDBInstance AlloyDBUser API Gateway APIGatewayAPI App Hub AppHubApplication Apigee ApigeeEndpointAttachment ApigeeEnvgroup ApigeeEnvgroupAttachment ApigeeEnvironment ApigeeInstance ApigeeInstanceAttachment ApigeeOrganization ArtifactRegistry ArtifactRegistryRepository Backup and DR BackupDRBackupPlan BackupDRBackupPlanAssociation BackupDRBackupVault BigQueryAnalyticsHub BigQueryAnalyticsHubDataExchange BigQueryAnalyticsHubListing BigQuery BigLake BigLakeTable BigQuery BigqueryConnectionConnection BigQueryDataset BigQueryJob BigQueryRoutine BigQueryTable BigQueryDataTransferConfig BigQuery Reservation BigQueryReservationAssignment BigQueryReservationReservation BillingBudgets BillingBudgetsBudget BinaryAuthorization BinaryAuthorizationAttestor BinaryAuthorizationPolicy Certificate Manager CertificateManagerCertificate CertificateManagerCertificateMap CertificateManagerCertificateMapEntry CertificateManagerDNSAuthorization Cloud Asset Inventory AssetFeed AssetSavedQuery Cloud Bigtable BigtableAppProfile BigtableGCPolicy BigtableInstance BigtableTable Cloud Build CloudBuildTrigger CloudBuildWorkerPool Cloud Composer ComposerEnvironment Cloud Deploy CloudDeployDeliveryPipeline Cloud Quotas APIQuotaAdjusterSettings APIQuotaPreference Cloud Functions CloudFunctionsFunction Cloud Identity CloudIdentityGroup CloudIdentityMembership Cloud Intrusion Detection System CloudIDSEndpoint Cloud Scheduler CloudSchedulerJob Config Controller ConfigControllerInstance Cloud DLP DLPDeidentifyTemplate DLPInspectTemplate DLPJobTrigger DLPStoredInfoType Cloud DNS DNSManagedZone DNSPolicy DNSRecordSet Cloud Key Management Service KMSAutokeyConfig KMSCryptoKey KMSImportJob KMSKeyHandle KMSKeyRing Eventarc EventarcTrigger Identity and Access Management (IAM) IAMAccessBoundaryPolicy IAMAuditConfig IAMCustomRole IAMPartialPolicy IAMPolicy IAMPolicyMember IAMServiceAccount IAMServiceAccountKey IAMWorkforcePool IAMWorkforcePoolProvider IAMWorkloadIdentityPool IAMWorkloadIdentityPoolProvider Identity-Aware Proxy (IAP) IAPBrand IAPIdentityAwareProxyClient IAPSettings Identity Platform IdentityPlatformConfig IdentityPlatformTenant IdentityPlatformTenantOAuthIDPConfig IdentityPlatformOAuthIDPConfig Cloud Logging LoggingLink LoggingLogBucket LoggingLogExclusion LoggingLogMetric LoggingLogSink LoggingLogView Cloud Memorystore for Memcached MemcacheInstance Cloud Monitoring MonitoringAlertPolicy MonitoringDashboard MonitoringGroup MonitoringMetricDescriptor MonitoringMonitoredProject MonitoringNotificationChannel MonitoringService MonitoringServiceLevelObjective MonitoringUptimeCheckConfig OS Config OSConfigGuestPolicy OSConfigOSPolicyAssignment Organization Policy OrgPolicyCustomConstraint Cloud Source Repositories SourceRepoRepository Speech-to-Text SpeechCustomClass SpeechPhraseSet SpeechRecognizer Cloud Spanner SpannerBackupSchedule SpannerDatabase SpannerInstance Cloud SQL SQLDatabase SQLInstance SQLSSLCert SQLUser Cloud Storage StorageBucket StorageAnywhereCache StorageBucketAccessControl StorageDefaultObjectAccessControl StorageNotification Compute Engine ComputeAddress ComputeBackendBucket ComputeBackendService ComputeDisk ComputeExternalVPNGateway ComputeFirewall ComputeFirewallPolicy ComputeFirewallPolicyAssociation ComputeFirewallPolicyRule ComputeForwardingRule ComputeHealthCheck ComputeHTTPHealthCheck ComputeHTTPSHealthCheck ComputeImage ComputeInstance ComputeInstanceGroup ComputeInstanceGroupManager ComputeInstanceTemplate ComputeInterconnectAttachment ComputeManagedSSLCertificate ComputeNetwork ComputeNetworkEndpointGroup ComputeNetworkFirewallPolicy ComputeNetworkFirewallPolicyAssociation ComputeNetworkPeering ComputeNodeGroup ComputeNodeTemplate ComputePacketMirroring ComputeProjectMetadata ComputeRegionNetworkEndpointGroup ComputeReservation ComputeResourcePolicy ComputeRoute ComputeRouter ComputeRouterInterface ComputeRouterNAT ComputeRouterPeer ComputeSecurityPolicy ComputeServiceAttachment ComputeSharedVPCHostProject ComputeSharedVPCServiceProject ComputeSnapshot ComputeSSLCertificate ComputeSSLPolicy ComputeSubnetwork ComputeTargetGRPCProxy ComputeTargetHTTPProxy ComputeTargetHTTPSProxy ComputeTargetInstance ComputeTargetPool ComputeTargetSSLProxy ComputeTargetTCPProxy ComputeTargetVPNGateway ComputeURLMap ComputeVPNGateway ComputeVPNTunnel Container Analysis ContainerAnalysisNote Container Attached ContainerAttachedCluster Data Catalog DataCatalogPolicyTag DataCatalogTaxonomy Dataflow DataflowJob DataflowFlexTemplateJob Dataform DataformRepository Data Fusion DataFusionInstance Dataproc DataprocAutoscalingPolicy DataprocCluster DataprocWorkflowTemplate Dataproc Metastore MetastoreBackup Filestore FilestoreBackup FilestoreInstance Firestore FirestoreDatabase FirestoreIndex Google Kubernetes Engine (GKE) ContainerCluster ContainerNodePool Distributed Cloud Edge EdgeContainerCluster EdgeContainerNodePool EdgeContainerVPNConnection EdgeNetworkNetwork EdgeNetworkSubnet Document AI DocumentAIProcessorVersion Essential Contacts EssentialContactsContact GKE Hub GKEHubFeature GKEHubFeatureMembership GKEHubMembership Managed Kafka ManagedKafkaCluster ManagedKafkaTopic Memorystore (Redis) RedisCluster RedisInstance Memorystore for Valkey MemorystoreInstance Network Connectivity NetworkConnectivityHub NetworkConnectivitySpoke Network Security NetworkSecurityAuthorizationPolicy NetworkSecurityClientTLSPolicy NetworkSecurityServerTLSPolicy Network Services NetworkServicesEndpointPolicy NetworkServicesGateway NetworkServicesGRPCRoute NetworkServicesHTTPRoute NetworkServicesMesh NetworkServicesTCPRoute NetworkServicesTLSRoute Notebooks NotebooksInstance Private CA PrivateCACAPool PrivateCACertificate PrivateCACertificateAuthority PrivateCACertificateTemplate Privileged Access Manager PrivilegedAccessManagerEntitlement Pub/Sub PubSubSchema PubSubSnapshot PubSubSubscription PubSubTopic Pub/Sub Lite PubSubLiteReservation reCAPTCHA Enterprise RecaptchaEnterpriseKey Resource Manager Folder Project ResourceManagerLien ResourceManagerPolicy Cloud Run RunJob RunService SecretManager SecretManagerSecret SecretManagerSecretVersion SecureSourceManager SecureSourceManagerInstance SecureSourceManagerRepository Service Directory ServiceDirectoryEndpoint ServiceDirectoryNamespace ServiceDirectoryService Service Networking ServiceNetworkingConnection Service Usage Service ServiceIdentity Storage Transfer Service StorageTransferJob Tags TagsLocationTagBinding TagsTagBinding TagsTagKey TagsTagValue Vertex AI VertexAIDataset VertexAIEndpoint VertexAIIndex VertexAIMetadataStore VMware Engine VMwareEngineExternalAddress VPC Access VPCAccessConnector Workstations WorkstationCluster WorkstationConfig Workstation Annotations AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Access and resource management Config Connector API and reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Sample YAML(s) Auto Scaling # Copyright 2020 Google LLC # # Licensed under the Apache License, Version 2.0 (the "License"); # you may not use this file except in compliance with the License. # You may obtain a copy of the License at # # http://www.apache.org/licenses/LICENSE-2.0 # # Unless required by applicable law or agreed to in writing, software # distributed under the License is distributed on an "AS IS" BASIS, # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. # See the License for the specific language governing permissions and # limitations under the License. apiVersion : bigtable.cnrm.cloud.google.com/v1beta1 kind : BigtableInstance metadata : name : bigtableinstance-sample spec : displayName : BigtableSample cluster : - clusterId : bigtableinstance-dep1 zone : us-central1-a autoscalingConfig : cpuTarget : 60 maxNodes : 3 minNodes : 1 Replicated Instance # Copyright 2020 Google LLC # # Licensed under the Apache License, Version 2.0 (the "License"); # you may not use this file except in compliance with the License. # You may obtain a copy of the License at # # http://www.apache.org/licenses/LICENSE-2.0 # # Unless required by applicable law or agreed to in writing, software # distributed under the License is distributed on an "AS IS" BASIS, # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. # See the License for the specific language governing permissions and # limitations under the License. apiVersion : bigtable.cnrm.cloud.google.com/v1beta1 kind : BigtableInstance metadata : name : bigtableinstance-sample spec : displayName : BigtableSample cluster : - clusterId : bigtableinstance-dep1 zone : us-central1-a numNodes : 3 - clusterId : bigtableinstance-dep2 zone : us-west1-a numNodes : 3 Simple Instance # Copyright 2020 Google LLC # # Licensed under the Apache License, Version 2.0 (the "License"); # you may not use this file except in compliance with the License. # You may obtain a copy of the License at # # http://www.apache.org/licenses/LICENSE-2.0 # # Unless required by applicable law or agreed to in writing, software # distributed under the License is distributed on an "AS IS" BASIS, # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. # See the License for the specific language governing permissions and # limitations under the License. apiVersion : bigtable.cnrm.cloud.google.com/v1beta1 kind : BigtableInstance metadata : name : bigtableinstance-sample spec : displayName : BigtableSample cluster : - clusterId : bigtableinstance-dep1 zone : us-central1-a numNodes : 3 Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- If not set, whatever is already set for the cluster will not change, or if the cluster is just being created, it will use the default value of 2560 for SSD clusters and 8192 for HDD clusters. cluster[].clusterId Required* string The ID of the Cloud Bigtable cluster.

### "Managing resources with the resourceID field \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Copy the following contents into a file named bigquery-dataset.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydataset-sample-for-creation spec : resourceID : bigquerydataset sample with resourceid defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample with the ResourceID Field" friendlyName : bigquerydataset-sample-with-resourceid location : US Apply the YAML file to your cluster. kubectl apply --namespace CC NAMESPACE -f bigquery-dataset.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- Using the resourceID field in your Config Connector resources, you can define multiple Config Connector resources of the same kind with the same Google Cloud resource name under different projects, folders, organizations or parent resources within the same namespace.
- However, if you are using the resourceID field, there can be multiple resources with the same Google Cloud resource name, created under the same namespace.
- Managing resources with the resourceID field This page explains how to manage resources with the resourceID field.

### "Managing and deleting resources \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Resources with a service-generated resource ID You can only acquire Google Cloud resources which have a service-generated resource ID by using the resourceID field.
- To learn about how to use the resourceID field, see Managing resources with the resourceID field .
- You can alternatively manage resources using the resourceID field.
- Some resources can be acquired only by using the resourceID field.

