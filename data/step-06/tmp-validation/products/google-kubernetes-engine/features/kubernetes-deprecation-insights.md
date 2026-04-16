---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.249Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Kubernetes deprecation insights"
feature_slug: "kubernetes-deprecation-insights"
latest_feature_date: "2023-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "deprecation"
  - "identifies"
  - "insights"
  - "deprecated"
  - "apis"
  - "clusters"
---

# Kubernetes deprecation insights

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Identifies clusters that use deprecated Kubernetes APIs removed in specific Kubernetes versions; GKE can identify clusters that use deprecated Kubernetes APIs removed in version 1.22.

## Extended Definition

Identifies clusters that use deprecated Kubernetes APIs removed in specific Kubernetes versions; GKE can identify clusters that use deprecated Kubernetes APIs removed in version 1.22.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16)
- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Feature and API deprecations \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16)
- Source ID: `site-iam-reference-required-2`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Container Registry May 15, 2023 March 18, 2025 Transition from Container Registry to Artifact Registry in GKE No GKE Compliance dashboard (Preview) January 28, 2025 June 30, 2025 Posture management feature deprecations No Workload vulnerability scanning GKE security posture dashboard Standard tier: July 23, 2024 Advanced Vulnerability Insights: June 16, 2025 Standard tier: July 31, 2025 Advanced Vulnerability Insights: June 16, 2026 Vulnerability scanning removal from GKE Standard edition Yes Supply chain concerns - Binary Authorization (Preview) GKE security posture dashboard January 28, 2025 March 31, 2025 Posture management feature deprecations No Kubernetes security posture - advanced tier (Preview) GKE security posture dashboard January 28, 2025 March 31, 2025 Posture management feature deprecations Yes containerd 1.7 features GKE version 1.32 GKE version 1.33 Migrate nodes to containerd 2 Yes Linux cgroupv1 mode GKE version 1.31 TBD Migrate nodes to Linux cgroupv2 No Vulnerability scanning removal from GKE standard edition July 23, 2024 July 31, 2025 Vulnerability scanning removal from GKE Standard edition No TLS certificates signed with SHA-1 algorithm GKE version 1.24 GKE version 1.29 SHA-1 TLS certificates support removal Yes Built-in authentication plugin for Kubernetes clients GKE version 1.22 GKE version 1.25 Deprecated authentication plugin for Kubernetes clients No PodSecurityPolicy GKE version 1.21 GKE version 1.25 PodSecurityPolicy deprecation Yes Docker-based node images GKE version 1.20 GKE version 1.24 Docker node image deprecation Yes X.509 Common Name field in webhook certificates GKE version 1.19 GKE version 1.23 Webhook certificates CN field deprecation Yes Kubernetes API deprecations The following table provides an overview of Kubernetes APIs that are deprecated and no longer served, sorted by Kubernetes version: Kubernetes version More information Does GKE detect and report usage?
- 1.32 Kubernetes 1.32 deprecated APIs Yes 1.29 Kubernetes 1.29 deprecated APIs Yes 1.27 Kubernetes 1.27 deprecated APIs Yes 1.26 Kubernetes 1.26 deprecated APIs Yes 1.25 Kubernetes 1.25 deprecated APIs Yes 1.22 Kubernetes 1.22 deprecated APIs , Kubernetes Ingress Beta APIs removed in GKE 1.23 Yes Other feature deprecations The following table provides information on deprecations and removals that are caused by other upstream providers that are not part of the Kubernetes open source project.
- In the next sections, learn about how GKE makes this process easier by detecting usage of deprecated Kubernetes features and APIs, sharing insights about this usage, and providing recommendations about how to migrate to features and APIs compatible with upcoming minor versions.
- These tables only provide information about ongoing deprecations, and omit previously included information for features or APIs that were deprecated with versions that are significantly past their end of support date.

### "Migrate nodes to containerd 2 \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- Source ID: `site-docs-reference-2`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Identify affected clusters GKE monitors your clusters and uses the Recommender service to deliver guidance through insights and recommendations for identifying Linux nodes in your cluster that use these deprecated features.
- Use insights and recommendations As an initial approach, you can use insights and recommendations to find clusters with Linux nodes that use the deprecated containerd config properties.
- You can also use the Google Cloud CLI or the Recommender API, by filtering with the following subtypes: DEPRECATION CONTAINERD V1 SCHEMA IMAGES: Docker Schema 1 images DEPRECATION CONTAINERD V1ALPHA2 CRI API: CRI v1alpha2 API DEPRECATION CONTAINERD V2 CONFIG REGISTRY CONFIGS : Deprecated CRI registry.configs properties, including registry.configs.auth and registry.configs.tls Migrate from deprecated features Review the following content to understand how to migrate from features deprecated with containerd 2.
- For example, replace the following application code: runtimeapi "k8s.io/cri-api/pkg/apis/runtime/v1alpha2" Update the code to use v1: runtimeapi "k8s.io/cri-api/pkg/apis/runtime/v1" Migrate from deprecated containerd config properties The registry.auths , registry.configs , and registry.mirrors containerd config properties in the CRI plugin are deprecated and will be removed in containerd 2.2, with a GKE version yet to be announced. registry.configs.tls , however, was already removed in containerd 2.0.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://container.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list clusters", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema MCPListClustersRequest lists clusters.
- Enable/Disable Security Posture API features for the cluster. controlPlaneEndpointsConfig object ( ControlPlaneEndpointsConfig ) Configuration for all cluster's control plane endpoints. enableK8sBetaApis object ( K8sBetaAPIConfig ) Beta APIs Config enterpriseConfig (deprecated) object ( EnterpriseConfig ) This item is deprecated!
- This field is deprecated, use services ipv4 cidr block. clusterSecondaryRangeName string The name of the secondary range to be used for the cluster CIDR block.
- This field is deprecated due to the deprecation of 2VM TPU.

