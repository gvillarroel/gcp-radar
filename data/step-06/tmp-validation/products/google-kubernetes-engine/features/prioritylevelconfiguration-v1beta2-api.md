---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.234Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "PriorityLevelConfiguration v1beta2 API"
feature_slug: "prioritylevelconfiguration-v1beta2-api"
latest_feature_date: "2024-01-11"
deprecation_date: "2024-01-11"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "prioritylevelconfiguration"
  - "newer"
  - "v1beta2"
  - "versions"
  - "removed"
  - "favor"
---

# PriorityLevelConfiguration v1beta2 API

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The v1beta2 PriorityLevelConfiguration API is removed in GKE 1.29 in favor of newer API versions; deprecated on 2024-01-11.

## Extended Definition

The v1beta2 PriorityLevelConfiguration API is removed in GKE 1.29 in favor of newer API versions; deprecated on 2024-01-11.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer.
- Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer.
- UserManagedKeysConfig JSON representation { "clusterCa" : string , "etcdApiCa" : string , "etcdPeerCa" : string , "serviceAccountSigningKeys" : [ string ] , "serviceAccountVerificationKeys" : [ string ] , "aggregationCa" : string , "controlPlaneDiskEncryptionKey" : string , "controlPlaneDiskEncryptionKeyVersions" : [ string ] , "gkeopsEtcdBackupEncryptionKey" : string } Fields clusterCa string The Certificate Authority Service caPool to use for the cluster CA in this cluster. etcdApiCa string Resource path of the Certificate Authority Service caPool to use for the etcd API CA in this cluster. etcdPeerCa string Resource path of the Certificate Authority Service caPool to use for the etcd peer CA in this cluster. serviceAccountSigningKeys[] string The Cloud KMS cryptoKeyVersions to use for signing service account JWTs issued by this cluster.
- Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: "latest": picks the highest valid Kubernetes version "1.X": picks the highest valid patch+gke.N patch in the 1.X version "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version "1.X.Y-gke.N": picks an explicit Kubernetes version "","-": picks the default Kubernetes version currentMasterVersion string Output only.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer.
- Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer.
- UserManagedKeysConfig JSON representation { "clusterCa" : string , "etcdApiCa" : string , "etcdPeerCa" : string , "serviceAccountSigningKeys" : [ string ] , "serviceAccountVerificationKeys" : [ string ] , "aggregationCa" : string , "controlPlaneDiskEncryptionKey" : string , "controlPlaneDiskEncryptionKeyVersions" : [ string ] , "gkeopsEtcdBackupEncryptionKey" : string } Fields clusterCa string The Certificate Authority Service caPool to use for the cluster CA in this cluster. etcdApiCa string Resource path of the Certificate Authority Service caPool to use for the etcd API CA in this cluster. etcdPeerCa string Resource path of the Certificate Authority Service caPool to use for the etcd peer CA in this cluster. serviceAccountSigningKeys[] string The Cloud KMS cryptoKeyVersions to use for signing service account JWTs issued by this cluster.
- Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: "latest": picks the highest valid Kubernetes version "1.X": picks the highest valid patch+gke.N patch in the 1.X version "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version "1.X.Y-gke.N": picks an explicit Kubernetes version "","-": picks the default Kubernetes version currentMasterVersion string Output only.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- The following upcoming GKE on AWS versions or newer will include the fix for this vulnerability, and this bulletin will be updated when they are available: 1.5.0-gke.6 1.4.3-gke.7 Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...
- Upgrade your Container-Optimized OS node pools to one of the following versions or later: 1.27.5-gke.200 1.28.2-gke.1157000 Upgrade your Ubuntu node pools to one of the following versions or later: 1.25.14-gke.1421000 1.26.9-gke.1437000 1.27.6-gke.1248000 1.28.2-gke.1157000 You can apply patch versions from newer release channels if your cluster runs the same minor version in its own release channel.
- For security purposes, even if you have node auto-upgrade enabled, we recommend that you manually upgrade your cluster and node pools to one of the following GKE versions or later: 1.27.16-gke.1008000 1.28.12-gke.1052000 1.29.7-gke.1008000 1.30.3-gke.1225000 You can apply patch versions from newer release channels if your cluster runs the same minor version in its own release channel.
- Even if you have node auto-upgrade enabled, we recommend that you manually upgrade your cluster and Windows Server node pools to one of the following GKE versions or later: 1.24.17-gke.6100 1.25.15-gke.2000 1.26.10-gke.2000 1.27.7-gke.2000 1.28.3-gke.1600 You can apply patch versions from newer release channels if your cluster runs the same minor version in its own release channel.

