---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.689Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Customized sysctl configuration options in the Extended channel"
feature_slug: "customized-sysctl-configuration-options-in-the-extended-channel"
latest_feature_date: "2025-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels"
keywords:
  - "customized"
  - "sysctl"
  - "configuration"
  - "options"
  - "extended"
  - "channel"
  - "clusters"
  - "enrolled"
---

# Customized sysctl configuration options in the Extended channel

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Clusters enrolled in the Extended channel can use customized sysctl configuration options.

## Extended Definition

Clusters enrolled in the Extended channel can use customized sysctl configuration options.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version. workloadIdentityConfig object ( WorkloadIdentityConfig ) Configuration for the use of Kubernetes Service Accounts in IAM policies. meshCertificates object ( MeshCertificates ) Configuration for issuance of mTLS keys and certificates to Kubernetes pods. costManagementConfig object ( CostManagementConfig ) Configuration for the fine-grained cost management feature. notificationConfig object ( NotificationConfig ) Notification configuration of the cluster. confidentialNodes object ( ConfidentialNodes ) Configuration of Confidential Nodes.
- Unique id for the cluster. loggingConfig object ( LoggingConfig ) Logging configuration for the cluster. monitoringConfig object ( MonitoringConfig ) Monitoring configuration for the cluster. nodePoolAutoConfig object ( NodePoolAutoConfig ) Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. podAutoscaling object ( PodAutoscaling ) The config for pod autoscaling. etag string This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. fleet object ( Fleet ) Fleet information for the cluster. securityPostureConfig object ( SecurityPostureConfig ) Optional.
- Each string represents the activation status of a feature gate (e.g. "featureX=true" or "featureX=false") resourceLabels map (key: string, value: string) The resource labels for the cluster to use to annotate any related Google Compute Engine resources. labelFingerprint string The fingerprint of the set of labels for this cluster. legacyAbac object ( LegacyAbac ) Configuration for the legacy ABAC authorization mode. networkPolicy object ( NetworkPolicy ) Configuration options for the NetworkPolicy feature. ipAllocationPolicy object ( IPAllocationPolicy ) Configuration for cluster IP allocation. masterAuthorizedNetworksConfig (deprecated) object ( MasterAuthorizedNetworksConfig ) This item is deprecated!
- NodeConfigDefaults JSON representation { "gcfsConfig" : { object ( GcfsConfig ) } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "nodeKubeletConfig" : { object ( NodeKubeletConfig ) } } Fields gcfsConfig object ( GcfsConfig ) GCFS (Google Container File System, also known as Riptide) options. loggingConfig object ( NodePoolLoggingConfig ) Logging configuration for node pools. containerdConfig object ( ContainerdConfig ) Parameters for containerd customization. nodeKubeletConfig object ( NodeKubeletConfig ) NodeKubeletConfig controls the defaults for new node-pools.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version. workloadIdentityConfig object ( WorkloadIdentityConfig ) Configuration for the use of Kubernetes Service Accounts in IAM policies. meshCertificates object ( MeshCertificates ) Configuration for issuance of mTLS keys and certificates to Kubernetes pods. costManagementConfig object ( CostManagementConfig ) Configuration for the fine-grained cost management feature. notificationConfig object ( NotificationConfig ) Notification configuration of the cluster. confidentialNodes object ( ConfidentialNodes ) Configuration of Confidential Nodes.
- Unique id for the cluster. loggingConfig object ( LoggingConfig ) Logging configuration for the cluster. monitoringConfig object ( MonitoringConfig ) Monitoring configuration for the cluster. nodePoolAutoConfig object ( NodePoolAutoConfig ) Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. podAutoscaling object ( PodAutoscaling ) The config for pod autoscaling. etag string This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. fleet object ( Fleet ) Fleet information for the cluster. securityPostureConfig object ( SecurityPostureConfig ) Optional.
- Each string represents the activation status of a feature gate (e.g. "featureX=true" or "featureX=false") resourceLabels map (key: string, value: string) The resource labels for the cluster to use to annotate any related Google Compute Engine resources. labelFingerprint string The fingerprint of the set of labels for this cluster. legacyAbac object ( LegacyAbac ) Configuration for the legacy ABAC authorization mode. networkPolicy object ( NetworkPolicy ) Configuration options for the NetworkPolicy feature. ipAllocationPolicy object ( IPAllocationPolicy ) Configuration for cluster IP allocation. masterAuthorizedNetworksConfig (deprecated) object ( MasterAuthorizedNetworksConfig ) This item is deprecated!
- NodeConfigDefaults JSON representation { "gcfsConfig" : { object ( GcfsConfig ) } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "nodeKubeletConfig" : { object ( NodeKubeletConfig ) } } Fields gcfsConfig object ( GcfsConfig ) GCFS (Google Container File System, also known as Riptide) options. loggingConfig object ( NodePoolLoggingConfig ) Logging configuration for node pools. containerdConfig object ( ContainerdConfig ) Parameters for containerd customization. nodeKubeletConfig object ( NodeKubeletConfig ) NodeKubeletConfig controls the defaults for new node-pools.

### "About release channels \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
- Source ID: `site-docs-reference-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- How GKE automatically upgrades clusters in the Extended channel For clusters enrolled in the Extended channel, GKE automatically upgrades clusters in the following way: During the standard support period : GKE upgrades clusters to newer patch versions of the same minor version following the same cadence as the Regular channel.
- Limitations for enrolling a cluster in the Extended channel Review the following limitations for clusters that are enrolled in the Extended channel: During the extended support period, GKE updates the Container-Optimized OS milestone that the GKE minor version uses when the milestone reaches the end of support.
- Clusters not enrolled in a release channel We don't recommend this configuration option due to the limitations with clusters not enrolled in release channels , but you can choose not to enroll a Standard cluster in a release channel (known as no channel and formerly as static ).
- You are responsible for ensuring your cluster adheres to version and version skew policies You can disable node-upgrades at cluster level for up to 30 days by creating maintenance exclusion with the "No upgrades" scope Maintenance windows Available Available Maintenance exclusions Available maintenance exclusion scopes : "No upgrades" (30 days) "No minor upgrades" (until the end of support) "No minor or node upgrades" (until the end of support) Restricted to "No upgrades" scope (30 days) Rollout sequencing Available Not available Long-term support Available with the Extended release channel only Not available Autopilot Available Not available Differences between Rapid-channel clusters and alpha clusters Clusters created using the Rapid release channel are not alpha clusters .

