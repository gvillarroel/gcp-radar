---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.174Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "DNSRecordSet spec.rrdatasRefs field"
feature_slug: "dnsrecordset-spec-rrdatasrefs-field"
latest_feature_date: "2022-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references"
keywords:
  - "rrdatasrefs"
  - "record"
  - "dnsrecordset"
  - "referencing"
  - "resource"
  - "supports"
  - "field"
  - "spec"
---

# DNSRecordSet spec.rrdatasRefs field

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

The DNSRecordSet resource supports referencing record data values through spec.rrdatasRefs.

## Extended Definition

The DNSRecordSet resource supports referencing record data values through spec.rrdatasRefs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)

## Supporting Pages

### Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Kinds with Merge support The following are all the Config Connector kinds that support Merge populating behavior: AccessContextManagerAccessLevel AccessContextManagerAccessPolicy AccessContextManagerServicePerimeter AlloyDBBackup AlloyDBCluster AlloyDBUser ApigeeEnvironment ApigeeOrganization ArtifactRegistryRepository BigQueryDataset BigQueryJob BigQueryTable BigtableAppProfile BigtableGCPolicy BigtableInstance BigtableTable BillingBudgetsBudget BinaryAuthorizationAttestor BinaryAuthorizationPolicy CertificateManagerCertificate CertificateManagerCertificateMap CertificateManagerCertificateMapEntry CloudBuildTrigger CloudFunctionsFunction CloudIdentityGroup CloudIdentityMembership CloudSchedulerJob ComputeAddress ComputeBackendBucket ComputeBackendService ComputeDisk ComputeExternalVPNGateway ComputeFirewall ComputeFirewallPolicy ComputeFirewallPolicyAssociation ComputeForwardingRule ComputeHTTPHealthCheck ComputeHTTPSHealthCheck ComputeHealthCheck ComputeImage ComputeInstance ComputeInstanceGroup ComputeInstanceGroupManager ComputeInstanceTemplate ComputeInterconnectAttachment ComputeNetwork ComputeNetworkEndpointGroup ComputeNetworkFirewallPolicy ComputeNetworkPeering ComputeNodeGroup ComputeNodeTemplate ComputePacketMirroring ComputeProjectMetadata ComputeRegionNetworkEndpointGroup ComputeReservation ComputeResourcePolicy ComputeRoute ComputeRouter ComputeRouterInterface ComputeRouterNAT ComputeRouterPeer ComputeSSLCertificate ComputeSSLPolicy ComputeSecurityPolicy ComputeServiceAttachment ComputeSharedVPCHostProject ComputeSharedVPCServiceProject ComputeSnapshot ComputeSubnetwork ComputeTargetGRPCProxy ComputeTargetHTTPProxy ComputeTargetHTTPSProxy ComputeTargetInstance ComputeTargetPool ComputeTargetSSLProxy ComputeTargetTCPProxy ComputeTargetVPNGateway ComputeURLMap ComputeVPNGateway ComputeVPNTunnel ConfigControllerInstance ContainerAnalysisNote ContainerAttachedCluster ContainerCluster ContainerNodePool DLPDeidentifyTemplate DLPInspectTemplate DLPJobTrigger DLPStoredInfoType DNSManagedZone DNSPolicy DNSRecordSet DataFusionInstance DataflowFlexTemplateJob DataflowJob DataprocAutoscalingPolicy DataprocCluster DataprocWorkflowTemplate EdgeContainerCluster EdgeContainerNodePool EdgeContainerVpnConnection EdgeNetworkNetwork EdgeNetworkSubnet EventarcTrigger FilestoreBackup FilestoreInstance FirestoreIndex Folder GKEHubFeature GKEHubMembership IAMAccessBoundaryPolicy IAMAuditConfig IAMCustomRole IAMPartialPolicy IAMPolicy IAMPolicyMember IAMServiceAccount IAMServiceAccountKey IAMWorkforcePool IAMWorkforcePoolProvider IAMWorkloadIdentityPool IAMWorkloadIdentityPoolProvider IAPBrand IAPIdentityAwareProxyClient IdentityPlatformConfig IdentityPlatformOAuthIDPConfig IdentityPlatformTenant IdentityPlatformTenantOAuthIDPConfig KMSCryptoKey KMSKeyRing LoggingLogBucket LoggingLogExclusion LoggingLogSink LoggingLogView MemcacheInstance MonitoringAlertPolicy MonitoringGroup MonitoringMetricDescriptor MonitoringMonitoredProject MonitoringNotificationChannel MonitoringService MonitoringServiceLevelObjective MonitoringUptimeCheckConfig NetworkConnectivityHub NetworkConnectivitySpoke NetworkSecurityAuthorizationPolicy NetworkSecurityClientTLSPolicy NetworkSecurityServerTLSPolicy NetworkServicesEndpointPolicy NetworkServicesGRPCRoute NetworkServicesGateway NetworkServicesHTTPRoute NetworkServicesMesh NetworkServicesTCPRoute NetworkServicesTLSRoute OSConfigGuestPolicy OSConfigOSPolicyAssignment PrivateCACAPool PrivateCACertificate PrivateCACertificateAuthority PrivateCACertificateTemplate Project PubSubLiteReservation PubSubSchema PubSubSubscription PubSubTopic RecaptchaEnterpriseKey RedisInstance ResourceManagerLien ResourceManagerPolicy RunJob RunService SQLDatabase SQLSSLCert SQLUser SecretManagerSecret SecretManagerSecretVersion Service ServiceDirectoryEndpoint ServiceDirectoryNamespace ServiceDirectoryService ServiceIdentity ServiceNetworkingConnection SourceRepoRepository SpannerDatabase SpannerInstance StorageBucket StorageBucketAccessControl StorageDefaultObjectAccessControl StorageNotification StorageTransferJob VPCAccessConnector The following kinds don't support the Merge populating behavior starting from the corresponding version: Kind Name Version LoggingLogMetric 1.118.1 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To further explain the difference introduced by this annotation, assume there is a spec with the following schema: foo1 : string foo2 : string bars : - bar : br1 : string br2 : string barz : bz1 : string bz2 : string Also assume you have specified the spec in your YAML as: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" Then by default, the populated spec in the created Kubernetes resource might be: spec : foo1 : "foo1" foo2 : "foo2" bars : - br1 : "1 br1" br2 : "1 br2" - br1 : "2 br1" br2 : "2 br2" barz : bz1 : "bz1" bz2 : "bz2" While if you set cnrm.cloud.google.com/state-into-spec: absent , the final spec in the created Kubernetes resource will be: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" When to use cnrm.cloud.google.com/state-into-spec: absent In most cases, you'll want to set cnrm.cloud.google.com/state-into-spec: absent to get the Absent populating behavior for spec fields.
- Configure the cluster-level or namespace-level stateIntoSpec override When installing Config Connector, or updating the Config Connector installation, you can configure the cluster-level or namespace-level stateIntoSpec override to be Absent in the ConfigConnector CR or ConfigConnectorContext CR. spec : stateIntoSpec : Absent This makes Absent the default spec fields populating behavior for any new resources created in the cluster or in the namespace when you don't specify the cnrm.cloud.google.com/state-into-spec annotation in the new resource YAMLs.
- As an example, assume the CRD schema let you specify two fields named foo and bar in spec, while your applied YAML file has only foo specified: spec : foo : "foo" You'll notice another field named bar appears in the CR if the YAML is applied successfully and the resource is UpToDate : spec : foo : "foo" bar : "bar" Due to the complexity of interaction between Config Connector and Google Cloud APIs, you might want to change this default behavior and skip populating the Kubernetes resource spec with unspecified fields.

### "Managing resources with the resourceID field \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Acquiring a folder To acquire a folder using Config Connector with the resourceID field, complete the following steps: Copy the following contents into a file named folder.yaml . apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Folder metadata : annotations : cnrm.cloud.google.com/organization-id : ORG ID Remove the deletion-policy annotation if it is safe to delete the folder when the resource is deleted from your cluster. cnrm.cloud.google.com/deletion-policy : "abandon" name : folder-sample-for-acquisition spec : resourceID : ACQUIRED FOLDER ID displayName : ACQUIRED FOLDER DISPLAY NAME Replace the following: ORG ID with the numeric ID for your organization.
- Copy the following contents into a file named bigquery-dataset.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydataset-sample-for-creation spec : resourceID : bigquerydataset sample with resourceid defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample with the ResourceID Field" friendlyName : bigquerydataset-sample-with-resourceid location : US Apply the YAML file to your cluster. kubectl apply --namespace CC NAMESPACE -f bigquery-dataset.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- The name of the Config Connector resource is pubsub-topic-sample and the name of the Pub/Sub topic is pubsub-topic-id . apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : pubsub-topic-sample spec : resourceID : pubsub-topic-id Creating a resource with the resourceID field Note: When you manage a Google Cloud resource with the resourceID field, if the resource has a service-generated resource ID, Config Connector assumes the resource already exists and tries to acquire the resource.
- Config Connector lets you explicitly specify the resource ID of a Google Cloud resource using the immutable but optional resourceID field to create or acquire the resource. "Immutable, but optional" means that you can choose to specify or not specify the resourceID field, but you can't make any changes to the value of the resourceID field after applying the manifest to your cluster.

### Creating resource references \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- For example, the YAML referencing the topic myTopic you created earlier is: apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubSubscription metadata : name : pubsubsubscription-referencing-topic spec : topicRef : name : myTopic Create the PubSubSubscription with kubectl apply . kubectl --namespace CC NAMESPACE apply -f pubsub-subscription.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- For example, if you want to create resources in NAMESPACE A that reference resources in NAMESPACE B , you need create the following RoleBinding : apiVersion : rbac.authorization.k8s.io/v1 kind : RoleBinding metadata : namespace : NAMESPACE B name : allow-references-from- NAMESPACE A roleRef : apiGroup : rbac.authorization.k8s.io kind : ClusterRole name : cnrm-viewer subjects : - kind : ServiceAccount name : cnrm-controller-manager- NAMESPACE A namespace : cnrm-system What's next Review the Resource reference to learn about the resources Config Connector supports.
- For example, the IAMPolicyMember below references a Project with the project ID test-project . apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : test-iampolicymember spec : member : serviceAccount:test-serviceaccount@test-project. iam.gserviceaccount.com role : roles/storage.admin resourceRef : kind : Project external : projects/test-project Note: You must set values for kind when using external references with IAMPolicy , IAMPartialPolicy and IAMPolicyMember .
- For example, the ComputeURLMap below references a BackendService named test-backendservice . apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeURLMap metadata : name : test-urlmap spec : location : global defaultService : backendServiceRef : external : https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/test-backendservice The format of values accepted by external depends on the resource.

