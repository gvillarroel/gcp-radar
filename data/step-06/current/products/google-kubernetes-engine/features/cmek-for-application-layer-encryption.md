---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.861Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "CMEK for application-layer encryption"
feature_slug: "cmek-for-application-layer-encryption"
latest_feature_date: "2021-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypting-secrets"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "cmek"
  - "application"
  - "layer"
  - "encryption"
  - "customer"
  - "managed"
  - "keys"
  - "can"
---

# CMEK for application-layer encryption

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Customer-managed encryption keys can encrypt GKE Autopilot application-layer data.

## Extended Definition

Customer-managed encryption keys can encrypt GKE Autopilot application-layer data.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypting-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypting-secrets)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "Encrypt secrets at the application layer \_|\_ GKE security \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypting-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypting-secrets)
- Source ID: `site-iam-reference`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Create . gcloud To create a cluster that supports application-layer secrets encryption, specify a value for the --database-encryption-key parameter in your creation command. gcloud container clusters create-auto CLUSTER NAME \ --cluster-version = latest \ --location = CONTROL PLANE LOCATION \ --database-encryption-key = projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/ RING NAME /cryptoKeys/ KEY NAME \ --project = CLUSTER PROJECT ID Replace the following: CLUSTER NAME : the name you choose for your new cluster.
- Click Save Changes . gcloud To enable application-layer secrets encryptions on an existing cluster, run the following command: gcloud container clusters update CLUSTER NAME \ --location = CONTROL PLANE LOCATION \ --database-encryption-key = projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/ RING NAME /cryptoKeys/ KEY NAME \ --project = CLUSTER PROJECT ID Replace the following: CLUSTER NAME : the name of your cluster.
- Rotate your keys Best practice : Rotate your keys on a regular schedule, including after you enable application-layer secrets encryption.
- Ensure that you have enough quota to use your Cloud HSM keys with application-layer secrets encryption.

### "Encrypt your data in-transit in GKE with user-managed encryption keys \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE security Send feedback Encrypt your data in-transit in GKE with user-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- Standard This page shows you how to encrypt in-transit data for Pod communications across Google Kubernetes Engine (GKE) nodes by using user-managed encryption keys.
- The encryption keys are provided and managed by Google.
- Learn more about application-layer secrets encryption .

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption gcfsConfig object ( GcfsConfig ) Google Container File System (image streaming) configs. advancedMachineFeatures object ( AdvancedMachineFeatures ) Advanced features for the Compute Engine VM. gvnic object ( VirtualNIC ) Enable or disable gvnic in the node pool. spot boolean Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. confidentialNodes object ( ConfidentialNodes ) Confidential nodes config.
- For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption imageType string The image type to use for NAP created node.
- Cluster JSON representation { "name" : string , "description" : string , "initialNodeCount" : integer , "nodeConfig" : { object ( NodeConfig ) } , "masterAuth" : { object ( MasterAuth ) } , "loggingService" : string , "monitoringService" : string , "network" : string , "clusterIpv4Cidr" : string , "addonsConfig" : { object ( AddonsConfig ) } , "subnetwork" : string , "nodePools" : [ { object ( NodePool ) } ] , "locations" : [ string ] , "enableKubernetesAlpha" : boolean , "alphaClusterFeatureGates" : [ string ] , "resourceLabels" : { string : string , ... } , "labelFingerprint" : string , "legacyAbac" : { object ( LegacyAbac ) } , "networkPolicy" : { object ( NetworkPolicy ) } , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "autoscaling" : { object ( ClusterAutoscaling ) } , "networkConfig" : { object ( NetworkConfig ) } , "defaultMaxPodsConstraint" : { object ( MaxPodsConstraint ) } , "resourceUsageExportConfig" : { object ( ResourceUsageExportConfig ) } , "authenticatorGroupsConfig" : { object ( AuthenticatorGroupsConfig ) } , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "databaseEncryption" : { object ( DatabaseEncryption ) } , "verticalPodAutoscaling" : { object ( VerticalPodAutoscaling ) } , "shieldedNodes" : { object ( ShieldedNodes ) } , "releaseChannel" : { object ( ReleaseChannel ) } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "meshCertificates" : { object ( MeshCertificates ) } , "costManagementConfig" : { object ( CostManagementConfig ) } , "notificationConfig" : { object ( NotificationConfig ) } , "confidentialNodes" : { object ( ConfidentialNodes ) } , "identityServiceConfig" : { object ( IdentityServiceConfig ) } , "selfLink" : string , "zone" : string , "endpoint" : string , "initialClusterVersion" : string , "currentMasterVersion" : string , "currentNodeVersion" : string , "createTime" : string , "status" : enum ( Status ) , "statusMessage" : string , "nodeIpv4CidrSize" : integer , "servicesIpv4Cidr" : string , "instanceGroupUrls" : [ string ] , "currentNodeCount" : integer , "expireTime" : string , "location" : string , "enableTpu" : boolean , "tpuIpv4CidrBlock" : string , "conditions" : [ { object ( StatusCondition ) } ] , "autopilot" : { object ( Autopilot ) } , "id" : string , "loggingConfig" : { object ( LoggingConfig ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "nodePoolAutoConfig" : { object ( NodePoolAutoConfig ) } , "podAutoscaling" : { object ( PodAutoscaling ) } , "etag" : string , "fleet" : { object ( Fleet ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "controlPlaneEndpointsConfig" : { object ( ControlPlaneEndpointsConfig ) } , "enableK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "enterpriseConfig" : { object ( EnterpriseConfig ) } , "secretManagerConfig" : { object ( SecretManagerConfig ) } , "compliancePostureConfig" : { object ( CompliancePostureConfig ) } , "gkeAutoUpgradeConfig" : { object ( GkeAutoUpgradeConfig ) } , "anonymousAuthenticationConfig" : { object ( AnonymousAuthenticationConfig ) } , "scheduleUpgradeConfig" : { object ( ScheduleUpgradeConfig ) } , "managedOpentelemetryConfig" : { object ( ManagedOpenTelemetryConfig ) } , "managedMachineLearningDiagnosticsConfig" : { object ( ManagedMachineLearningDiagnosticsConfig ) } , // Union field node pool defaults can be only one of the following: "nodePoolDefaults" : { object ( NodePoolDefaults ) } // End of list of possible types for union field node pool defaults . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field user managed keys config can be only one of the following: "userManagedKeysConfig" : { object ( UserManagedKeysConfig ) } // End of list of possible types for union field user managed keys config . // Union field rbac binding config can be only one of the following: "rbacBindingConfig" : { object ( RBACBindingConfig ) } // End of list of possible types for union field rbac binding config . } Fields name string The name of this cluster.
- UserManagedKeysConfig JSON representation { "clusterCa" : string , "etcdApiCa" : string , "etcdPeerCa" : string , "serviceAccountSigningKeys" : [ string ] , "serviceAccountVerificationKeys" : [ string ] , "aggregationCa" : string , "controlPlaneDiskEncryptionKey" : string , "controlPlaneDiskEncryptionKeyVersions" : [ string ] , "gkeopsEtcdBackupEncryptionKey" : string } Fields clusterCa string The Certificate Authority Service caPool to use for the cluster CA in this cluster. etcdApiCa string Resource path of the Certificate Authority Service caPool to use for the etcd API CA in this cluster. etcdPeerCa string Resource path of the Certificate Authority Service caPool to use for the etcd peer CA in this cluster. serviceAccountSigningKeys[] string The Cloud KMS cryptoKeyVersions to use for signing service account JWTs issued by this cluster.

