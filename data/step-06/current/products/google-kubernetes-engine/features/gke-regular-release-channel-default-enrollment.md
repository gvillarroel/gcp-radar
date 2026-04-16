---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.945Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Regular release channel default enrollment"
feature_slug: "gke-regular-release-channel-default-enrollment"
latest_feature_date: "2021-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "gke"
  - "regular"
  - "release"
  - "channel"
  - "default"
  - "enrollment"
  - "clusters"
  - "enrolled"
---

# GKE Regular release channel default enrollment

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

New GKE clusters are enrolled in the Regular release channel by default when no conflicting flags are set.

## Extended Definition

New GKE clusters are enrolled in the Regular release channel by default when no conflicting flags are set.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
- [https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule](https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "About release channels \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
- Source ID: `site-docs-reference-2`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Comparison between clusters enrolled and not enrolled in a release channel Review the following table to understand the similarities and differences between enrolling and not enrolling your cluster in a release channel: Feature Cluster enrolled in a release channel Cluster not enrolled in a release channel Shared upgrade behavior GKE automatically upgrades the cluster control plane , and, by default, automatically upgrades the nodes when new versions are scheduled for auto-upgrades , following the GKE release schedule .
- Upgrade timing Aligned with the respective release channel Same auto-upgrade start date as the Stable channel for minor versions Same available minor versions, patch auto-upgrade versions, and default version as the Regular channel Same available patch versions as the Rapid channel for those minor versions available in the Regular channel Accelerated patch auto-upgrades Available Not available Control of node pool disruption Node auto-upgrades by default You can disable node auto-upgrades at cluster level until the minor version end of support date by creating a maintenance exclusion with the "No minor or node upgrades" scope You can disable node auto-repair for a Standard cluster node pool Node auto-upgrades by default You can disable node-auto upgrades at the node pool level.
- How GKE automatically upgrades clusters in the Extended channel For clusters enrolled in the Extended channel, GKE automatically upgrades clusters in the following way: During the standard support period : GKE upgrades clusters to newer patch versions of the same minor version following the same cadence as the Regular channel.
- Clusters not enrolled in a release channel We don't recommend this configuration option due to the limitations with clusters not enrolled in release channels , but you can choose not to enroll a Standard cluster in a release channel (known as no channel and formerly as static ).

### "GKE release schedule \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule](https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See the following schedule for clusters enrolled in a release channel follow this schedule: Minor version ( release date ) Rapid Regular Stable Extended End of standard support (formerly end of life ) 3 End of extended support 3 Available 1 Auto Upgrade 2 Available 1 Auto Upgrade 2 Available 1 Auto Upgrade 2 Available 1 Auto Upgrade 2 1.29 2024-01-05 2024-04-16 2024-01-26 2024-07-09 2024-06-11 2024-08-09 2024-01-25 2026-01-25 5 2025-04-12 2026-01-25 1.30 2024-04-30 2024-07-30 2024-07-30 2024-09-17 2024-08-13 2024-09-24 2024-07-30 2025-12-03 2025-09-30 2026-07-30 1.31 2024-08-20 2024-09-17 2024-10-22 2025-03-11 2025-01-28 2025-04-30 2024-10-22 2026-05 4 2026-01-16 2026-10-22 1.32 2024-12-17 2025-03-11 2025-02-11 2025-05-13 2025-03-04 2025-07-22 2025-02-11 2026-Q3 4 2026-04-27 2027-02-11 1.33 2025-05-07 2025-06-10 2025-06-04 2025-09-09 2025-07-22 2025-10-14 2025-06-04 2026-Q4 4 2026-08-03 2027-06-03 1.34 2025-09-02 2025-10-28 2025-11-26 2026-03-10 2026-02-18 2026-06 4 2025-12-03 2027-Q2 4 2027-01-25 2027-11-25 1.35 2025-12-24 2026-02-11 2026-02-11 2026-04 4 2026-04-07 2026-06 4 2026-02-11 2027-Q3 4 2027-04-11 2028-02-11 Caution: GKE version 1.29 and earlier have reached end of support and are no longer supported.
- Clusters not enrolled in a release channel follow this availability and support schedule: Available date: The same available date for the Kubernetes minor version on the Regular Channel, and the same available patch versions as the Rapid channel for those minor versions available in the Regular channel Auto upgrade date: The same auto upgrade date for the Kubernetes minor version on the Stable Channel, and the same auto upgrade date for patch versions as the Regular channel End of standard support (formerly known as end of life ): The same end of support date for the Kubernetes minor version on release channels other than the Extended channel Notes Note: Dates are updated monthly and subject to change.
- Estimated schedule for clusters with no channel (formerly static ) Key Point: GKE automatically upgrades clusters not enrolled in a release channel using automatic upgrade targets from the Stable and Regular channels.
- On/after the auto upgrades start date, clusters subscribed to release channels will be auto upgraded to the referenced minor version. ↩ End of support : For clusters in the Rapid, Regular, Stable channels, or no channel, new features, security patches, or bug fixes will be made available for this minor version until its end of standard support (formerly known as end of life ) date.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version. workloadIdentityConfig object ( WorkloadIdentityConfig ) Configuration for the use of Kubernetes Service Accounts in IAM policies. meshCertificates object ( MeshCertificates ) Configuration for issuance of mTLS keys and certificates to Kubernetes pods. costManagementConfig object ( CostManagementConfig ) Configuration for the fine-grained cost management feature. notificationConfig object ( NotificationConfig ) Notification configuration of the cluster. confidentialNodes object ( ConfidentialNodes ) Configuration of Confidential Nodes.
- Default: clusters.autopilot,clusters.createTime,clusters.currentMasterVersion,clusters.currentNodeCount,clusters.currentNodeVersion,clusters.description,clusters.endpoint,clusters.fleet,clusters.location,clusters.name,clusters.network,clusters.nodePools.name,clusters.releaseChannel,clusters.resourceLabels,clusters.selfLink,clusters.status,clusters.statusMessage,clusters.subnetwork,missingZones.
- If left unspecified on cluster creation and a version is specified, the cluster is enrolled in the most mature release channel where the version is available (first checking STABLE, then REGULAR, and finally RAPID).
- Cluster JSON representation { "name" : string , "description" : string , "initialNodeCount" : integer , "nodeConfig" : { object ( NodeConfig ) } , "masterAuth" : { object ( MasterAuth ) } , "loggingService" : string , "monitoringService" : string , "network" : string , "clusterIpv4Cidr" : string , "addonsConfig" : { object ( AddonsConfig ) } , "subnetwork" : string , "nodePools" : [ { object ( NodePool ) } ] , "locations" : [ string ] , "enableKubernetesAlpha" : boolean , "alphaClusterFeatureGates" : [ string ] , "resourceLabels" : { string : string , ... } , "labelFingerprint" : string , "legacyAbac" : { object ( LegacyAbac ) } , "networkPolicy" : { object ( NetworkPolicy ) } , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "autoscaling" : { object ( ClusterAutoscaling ) } , "networkConfig" : { object ( NetworkConfig ) } , "defaultMaxPodsConstraint" : { object ( MaxPodsConstraint ) } , "resourceUsageExportConfig" : { object ( ResourceUsageExportConfig ) } , "authenticatorGroupsConfig" : { object ( AuthenticatorGroupsConfig ) } , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "databaseEncryption" : { object ( DatabaseEncryption ) } , "verticalPodAutoscaling" : { object ( VerticalPodAutoscaling ) } , "shieldedNodes" : { object ( ShieldedNodes ) } , "releaseChannel" : { object ( ReleaseChannel ) } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "meshCertificates" : { object ( MeshCertificates ) } , "costManagementConfig" : { object ( CostManagementConfig ) } , "notificationConfig" : { object ( NotificationConfig ) } , "confidentialNodes" : { object ( ConfidentialNodes ) } , "identityServiceConfig" : { object ( IdentityServiceConfig ) } , "selfLink" : string , "zone" : string , "endpoint" : string , "initialClusterVersion" : string , "currentMasterVersion" : string , "currentNodeVersion" : string , "createTime" : string , "status" : enum ( Status ) , "statusMessage" : string , "nodeIpv4CidrSize" : integer , "servicesIpv4Cidr" : string , "instanceGroupUrls" : [ string ] , "currentNodeCount" : integer , "expireTime" : string , "location" : string , "enableTpu" : boolean , "tpuIpv4CidrBlock" : string , "conditions" : [ { object ( StatusCondition ) } ] , "autopilot" : { object ( Autopilot ) } , "id" : string , "loggingConfig" : { object ( LoggingConfig ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "nodePoolAutoConfig" : { object ( NodePoolAutoConfig ) } , "podAutoscaling" : { object ( PodAutoscaling ) } , "etag" : string , "fleet" : { object ( Fleet ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "controlPlaneEndpointsConfig" : { object ( ControlPlaneEndpointsConfig ) } , "enableK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "enterpriseConfig" : { object ( EnterpriseConfig ) } , "secretManagerConfig" : { object ( SecretManagerConfig ) } , "compliancePostureConfig" : { object ( CompliancePostureConfig ) } , "gkeAutoUpgradeConfig" : { object ( GkeAutoUpgradeConfig ) } , "anonymousAuthenticationConfig" : { object ( AnonymousAuthenticationConfig ) } , "scheduleUpgradeConfig" : { object ( ScheduleUpgradeConfig ) } , "managedOpentelemetryConfig" : { object ( ManagedOpenTelemetryConfig ) } , "managedMachineLearningDiagnosticsConfig" : { object ( ManagedMachineLearningDiagnosticsConfig ) } , // Union field node pool defaults can be only one of the following: "nodePoolDefaults" : { object ( NodePoolDefaults ) } // End of list of possible types for union field node pool defaults . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field user managed keys config can be only one of the following: "userManagedKeysConfig" : { object ( UserManagedKeysConfig ) } // End of list of possible types for union field user managed keys config . // Union field rbac binding config can be only one of the following: "rbacBindingConfig" : { object ( RBACBindingConfig ) } // End of list of possible types for union field rbac binding config . } Fields name string The name of this cluster.

