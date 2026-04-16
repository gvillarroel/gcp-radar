---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.336Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "PodDisruptionBudget API"
feature_slug: "poddisruptionbudget-api"
latest_feature_date: "2021-10-01"
deprecation_date: "2021-10-01"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "poddisruptionbudget"
  - "deprecated"
  - "policy"
  - "removed"
  - "will"
  - "v1beta1"
---

# PodDisruptionBudget API

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The policy/v1beta1 PodDisruptionBudget API is deprecated and will be removed in Kubernetes 1.25; PodDisruptionBudget is available in the stable policy/v1 API for controlling pod evictions; deprecated on 2021-10-01.

## Extended Definition

The policy/v1beta1 PodDisruptionBudget API is deprecated and will be removed in Kubernetes 1.25; PodDisruptionBudget is available in the stable policy/v1 API for controlling pod evictions; deprecated on 2021-10-01.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- The following upcoming GKE on AWS versions or newer will include the fix for this vulnerability, and this bulletin will be updated when they are available: 1.5.0-gke.6 1.4.3-gke.7 Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...
- If your BackendConfig has already been updated with the v1beta1 API, your Google Cloud Armor security policy might have been removed.
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW Note: GKE Sandbox pods already disable CAP NET RAW by default and do not require the changes above.
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW Note: GKE Sandbox pods already disable CAP NET RAW by default and do not require the changes above.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Once the range is removed it will not show up in IPAllocationPolicy. defaultPodIpv4RangeUtilization number Output only.
- Once a range is removed it will not show up in IPAllocationPolicy. autoIpamConfig object ( AutoIpamConfig ) Optional.
- Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer.
- Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Once the range is removed it will not show up in IPAllocationPolicy. defaultPodIpv4RangeUtilization number Output only.
- Once a range is removed it will not show up in IPAllocationPolicy. autoIpamConfig object ( AutoIpamConfig ) Optional.
- Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer.
- Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer.

