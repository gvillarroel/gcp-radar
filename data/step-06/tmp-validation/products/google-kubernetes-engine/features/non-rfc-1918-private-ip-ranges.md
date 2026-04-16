---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.421Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Non-RFC 1918 private IP ranges"
feature_slug: "non-rfc-1918-private-ip-ranges"
latest_feature_date: "2020-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
keywords:
  - "1918"
  - "ranges"
  - "private"
---

# Non-RFC 1918 private IP ranges

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE can use private IP address ranges outside RFC 1918 for master nodes, nodes, Pods, and Services.

## Extended Definition

GKE can use private IP address ranges outside RFC 1918 for master nodes, nodes, Pods, and Services.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- This range must not overlap with any other ranges in use within the cluster's network. privateEndpoint (deprecated) string This item is deprecated!
- If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking.
- 10.96.0.0/14 ) from the RFC-1918 private networks (e.g.
- 10.96.0.0/14 ) from the RFC-1918 private networks (e.g.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- This range must not overlap with any other ranges in use within the cluster's network. privateEndpoint (deprecated) string This item is deprecated!
- If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking.
- 10.96.0.0/14 ) from the RFC-1918 private networks (e.g.
- 10.96.0.0/14 ) from the RFC-1918 private networks (e.g.

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: N/A

