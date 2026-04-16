---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.400Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Kubernetes CertificateSigningRequest v1beta1 API"
feature_slug: "kubernetes-certificatesigningrequest-v1beta1-api"
latest_feature_date: "2021-01-19"
deprecation_date: "2021-01-19"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "certificatesigningrequest"
  - "deprecated"
  - "served"
  - "longer"
  - "will"
  - "v1beta1"
---

# Kubernetes CertificateSigningRequest v1beta1 API

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The v1beta1 CertificateSigningRequest API is deprecated and will no longer be served in Kubernetes 1.22+; The v1beta1 CertificateSigningRequest API is deprecated and will no longer be served in Kubernetes 1.22+; deprecated on 2021-01-19.

## Extended Definition

The v1beta1 CertificateSigningRequest API is deprecated and will no longer be served in Kubernetes 1.22+; The v1beta1 CertificateSigningRequest API is deprecated and will no longer be served in Kubernetes 1.22+; deprecated on 2021-01-19.

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
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- The following upcoming GKE on AWS versions or newer will include the fix for this vulnerability, and this bulletin will be updated when they are available: 1.5.0-gke.6 1.4.3-gke.7 Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...
- After September 30, 2022 , Istio-on-GKE will no longer be supported in existing clusters.
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW Note: GKE Sandbox pods already disable CAP NET RAW by default and do not require the changes above.
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW Note: GKE Sandbox pods already disable CAP NET RAW by default and do not require the changes above.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Currently available options: monitoring.googleapis.com/kubernetes - The Cloud Monitoring service with a Kubernetes-native resource model monitoring.googleapis.com - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). none - No metrics will be exported from the cluster.
- Currently available options: logging.googleapis.com/kubernetes - The Cloud Logging service with a Kubernetes-native resource model logging.googleapis.com - The legacy Cloud Logging service (no longer available as of GKE 1.15). none - no logs will be exported from the cluster.
- Deprecated: This flag is no longer required as of GKE node version 1.33.2-gke.4655000, unless you are connecting to a Lustre instance that has the gke-support-enabled flag. disableMultiNic boolean When set to true, this disables multi-NIC support for the Lustre CSI driver.
- If this field is empty, then an automatic name will be chosen for the new subnetwork. clusterIpv4Cidr (deprecated) string This item is deprecated!

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Currently available options: monitoring.googleapis.com/kubernetes - The Cloud Monitoring service with a Kubernetes-native resource model monitoring.googleapis.com - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). none - No metrics will be exported from the cluster.
- Currently available options: logging.googleapis.com/kubernetes - The Cloud Logging service with a Kubernetes-native resource model logging.googleapis.com - The legacy Cloud Logging service (no longer available as of GKE 1.15). none - no logs will be exported from the cluster.
- Deprecated: This flag is no longer required as of GKE node version 1.33.2-gke.4655000, unless you are connecting to a Lustre instance that has the gke-support-enabled flag. disableMultiNic boolean When set to true, this disables multi-NIC support for the Lustre CSI driver.
- If this field is empty, then an automatic name will be chosen for the new subnetwork. clusterIpv4Cidr (deprecated) string This item is deprecated!

