---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.731Z"
product_name: "Anthos clusters on Azure"
product_slug: "anthos-clusters-on-azure"
feature_name: "HTTP proxy support for Kubernetes 1.20 clusters"
feature_slug: "http-proxy-support-for-kubernetes-1-20-clusters"
latest_feature_date: "2021-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters"
  - "https://cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/use-a-proxy#configure-proxy-support"
  - "https://cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/use-a-proxy#configure-proxy-support"
keywords:
  - "Kubernetes 1.20 proxy configuration"
  - "HTTP/HTTPS proxy"
  - "configure HTTP proxy"
  - "cluster proxy settings"
  - "proxy config"
  - "HTTPS proxy"
  - "HTTP proxy"
  - "proxy support"
---

# HTTP proxy support for Kubernetes 1.20 clusters

Product: Anthos clusters on Azure
Coverage: MEDIUM

## Step 02 Summary

Users can configure an HTTP proxy for Anthos Kubernetes 1.20 clusters.

## Extended Definition

In GKE Multi-Cloud for attached clusters, HTTP(S) proxy support is configured through an `AttachedProxyConfig` on the cluster resource, which uses a `kubernetesSecret` that contains the proxy settings as JSON. The REST reference indicates this secret-based proxy configuration is part of the `projects.locations.attachedClusters` schema and is used to define outbound HTTP(S) traffic proxy behavior. The provided evidence does not explicitly confirm that this applies specifically to Kubernetes 1.20 clusters.

## Evidence Summary

The cited pages provide the API field definition for attached-cluster proxy config and point to platform-specific (AKS/EKS) guides that describe supplying JSON proxy settings.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters)
- [https://cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/use-a-proxy#configure-proxy-support](https://cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/use-a-proxy#configure-proxy-support)
- [https://cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/use-a-proxy#configure-proxy-support](https://cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/use-a-proxy#configure-proxy-support)

## Supporting Pages

### "REST Resource: projects.locations.attachedClusters \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters)
- Source ID: `site-api-reference`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: The page documents a `proxyConfig` field on `AttachedCluster`, which suggests proxy configuration is supported, but it does not state that this applies specifically to Kubernetes 1.20 or describe HTTP proxy behavior.

Evidence snippets:
- The secret must be a JSON encoded proxy configuration as described in https://cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/use-a-proxy#configure-proxy-support for EKS clusters and https://cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/use-a-proxy#configure-proxy-support for AKS clusters.
- JSON representation { "kubernetesSecret" : { object ( KubernetesSecret ) } } Fields kubernetesSecret object ( KubernetesSecret ) The Kubernetes Secret resource that contains the HTTP(S) proxy configuration.
- Proxy configuration for outbound HTTP(S) traffic. binaryAuthorization object ( BinaryAuthorization ) Optional.
- AttachedProxyConfig Details of a proxy config.

