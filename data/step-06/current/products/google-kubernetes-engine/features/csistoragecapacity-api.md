---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.810Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "CSIStorageCapacity API"
feature_slug: "csistoragecapacity-api"
latest_feature_date: "2023-01-05"
deprecation_date: "2023-01-05"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "csistoragecapacity"
  - "v1beta1"
  - "deprecation"
  - "scheduled"
  - "removal"
  - "gke"
  - "27"
  - "deprecated"
---

# CSIStorageCapacity API

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The v1beta1 CSIStorageCapacity API is in deprecation and scheduled for removal in GKE 1.27; The v1beta1 CSIStorageCapacity API is in deprecation and scheduled for removal in GKE 1.27; deprecated on 2023-01-05.

## Extended Definition

The v1beta1 CSIStorageCapacity API is in deprecation and scheduled for removal in GKE 1.27; The v1beta1 CSIStorageCapacity API is in deprecation and scheduled for removal in GKE 1.27; deprecated on 2023-01-05.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "Feature and API deprecations \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16)
- Source ID: `site-iam-reference-required-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Container Registry May 15, 2023 March 18, 2025 Transition from Container Registry to Artifact Registry in GKE No GKE Compliance dashboard (Preview) January 28, 2025 June 30, 2025 Posture management feature deprecations No Workload vulnerability scanning GKE security posture dashboard Standard tier: July 23, 2024 Advanced Vulnerability Insights: June 16, 2025 Standard tier: July 31, 2025 Advanced Vulnerability Insights: June 16, 2026 Vulnerability scanning removal from GKE Standard edition Yes Supply chain concerns - Binary Authorization (Preview) GKE security posture dashboard January 28, 2025 March 31, 2025 Posture management feature deprecations No Kubernetes security posture - advanced tier (Preview) GKE security posture dashboard January 28, 2025 March 31, 2025 Posture management feature deprecations Yes containerd 1.7 features GKE version 1.32 GKE version 1.33 Migrate nodes to containerd 2 Yes Linux cgroupv1 mode GKE version 1.31 TBD Migrate nodes to Linux cgroupv2 No Vulnerability scanning removal from GKE standard edition July 23, 2024 July 31, 2025 Vulnerability scanning removal from GKE Standard edition No TLS certificates signed with SHA-1 algorithm GKE version 1.24 GKE version 1.29 SHA-1 TLS certificates support removal Yes Built-in authentication plugin for Kubernetes clients GKE version 1.22 GKE version 1.25 Deprecated authentication plugin for Kubernetes clients No PodSecurityPolicy GKE version 1.21 GKE version 1.25 PodSecurityPolicy deprecation Yes Docker-based node images GKE version 1.20 GKE version 1.24 Docker node image deprecation Yes X.509 Common Name field in webhook certificates GKE version 1.19 GKE version 1.23 Webhook certificates CN field deprecation Yes Kubernetes API deprecations The following table provides an overview of Kubernetes APIs that are deprecated and no longer served, sorted by Kubernetes version: Kubernetes version More information Does GKE detect and report usage?
- 1.32 Kubernetes 1.32 deprecated APIs Yes 1.29 Kubernetes 1.29 deprecated APIs Yes 1.27 Kubernetes 1.27 deprecated APIs Yes 1.26 Kubernetes 1.26 deprecated APIs Yes 1.25 Kubernetes 1.25 deprecated APIs Yes 1.22 Kubernetes 1.22 deprecated APIs , Kubernetes Ingress Beta APIs removed in GKE 1.23 Yes Other feature deprecations The following table provides information on deprecations and removals that are caused by other upstream providers that are not part of the Kubernetes open source project.
- Kubernetes feature deprecations The following table outlines ongoing GKE feature deprecations, as well as the version in which those features are no longer supported: Name Deprecated Removed More information Does GKE detect and report usage?
- If GKE detects that a cluster is using a feature that is removed in an upcoming minor version of Kubernetes, GKE shares a deprecation insight and recommendation , notifying you of your cluster's usage of a deprecated feature.

### "About the security posture dashboard \_|\_ GKE security \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Caution: Starting on July 23, 2024, container OS vulnerability scanning is deprecated and is scheduled for shutdown on July 31, 2025.
- Caution: Starting on July 23, 2024, container OS vulnerability scanning is deprecated and is scheduled for shutdown on July 31, 2025.
- Caution: Starting on July 23, 2024, container OS vulnerability scanning is deprecated and is scheduled for shutdown on July 31, 2025.
- Starting on June 16, 2025, Advanced Vulnerability Insights is deprecated and is scheduled for shutdown on June 16, 2026.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- This field is deprecated due to the deprecation of 2VM TPU.
- This field is deprecated due to the deprecation of 2VM TPU.
- This field is deprecated due to the deprecation of 2VM TPU.
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!

