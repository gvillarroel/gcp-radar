---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.723Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Autoscale policies"
feature_slug: "autoscale-policies"
latest_feature_date: "2021-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/howto-autoscale"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud"
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes"
keywords:
  - "autoscale"
  - "policies"
  - "automatically"
  - "expand"
  - "shrink"
  - "cluster"
  - "based"
  - "cpu"
---

# Autoscale policies

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Autoscale policies automatically expand or shrink a cluster based on CPU utilization or storage capacity thresholds.

## Extended Definition

Autoscale policies automatically expand or shrink a cluster based on CPU utilization or storage capacity thresholds.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/howto-autoscale](https://docs.cloud.google.com/vmware-engine/docs/howto-autoscale)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes)

## Supporting Pages

### Manage autoscale \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vmware-engine/docs/howto-autoscale](https://docs.cloud.google.com/vmware-engine/docs/howto-autoscale)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Manage autoscale Autoscale automatically expands or shrinks a cluster in a private cloud based on CPU, memory, and storage utilization thresholds.
- Important: Adjustments to clusters based on autoscale count toward VMware Engine node quota corresponding to your Google Cloud project.
- Google Cloud VMware Engine monitors the cluster based on defined metrics and adds or removes nodes from the cluster automatically.
- View cluster autoscale settings To view the autoscale settings of a cluster, do the following: In the Google Cloud console, go to the Private clouds page.

### "Manage storage-only nodes \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Save . gcloud To expand or shrink a stretched cluster by adding or removing storage-only nodes using the Google Cloud CLI, use the gcloud vmware private-clouds clusters update command : gcloud vmware private-clouds clusters update STRETCHED CLUSTER NAME \ --location= REGION \ --project= PROJECT ID \ --private-cloud= STRETCHED PC STORAGE NODE NAME \ --node-type-config=type=standard-72,count= n \ --node-type-config=type=storage-only-standard-72,count= m Replace the following: STRETCHED CLUSTER NAME : the name of the stretched cluster in this private cloud.
- API To expand or shrink a stretched cluster by adding or removing storage-only nodes using the VMware Engine API, make a PATCH request: PATCH "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /privateClouds/ STRETCHED PC STORAGE NODE NAME /clusters/ STRETCHED CLUSTER NAME " -d '{ "nodeTypeConfigs": { "standard-72": { "nodeCount": n }, "storage-only-standard-72": { "nodeCount": m } } }' Replace the following: PROJECT ID : the project ID for the request.
- Expand or shrink a stretched cluster with storage-only nodes You can expand or shrink a stretched cluster by adding or removing storage-only nodes using the Google Cloud console, Google Cloud CLI, or VMware Engine API by doing the following: Console To expand or shrink a stretched cluster with storage-only nodes using the Google Cloud console, do the following: In the Google Cloud console, go to the Private clouds page.
- You can create clusters that contain both standard and storage-only nodes, and then expand or shrink them using the Google Cloud CLI or VMware Engine API.

### "About VMware Engine private clouds \_|\_ Google Cloud VMware Engine \_|\_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Custom core counts Some licensing agreements charge you based on the number of CPU cores on the underlying physical node or in the cluster.
- Node adjustments by autoscale policies aren't supported with a single-node private cloud.
- The following table describes vSphere cluster limits in private clouds that meet SLA requirements: Resource Limit Minimum number of nodes to create a private cloud (first cluster) 3 Minimum number of nodes to create a cluster 3 Maximum number of nodes per cluster 32 Maximum number of nodes per private cloud 96 Maximum number of clusters per private cloud 32 Private cloud and cluster limitations The following limitations apply to private clouds and clusters: You can create private clouds with mixed node types, combining ve1 and ve2 nodes in a single private cloud.
- Private clouds are also designed to eliminate single points of failure: Clusters of ESXi hosts are configured with vSphere High Availability (HA) and sized to have at least one spare node for resilience. vSphere HA protects against node and network failures. vSAN provides redundant primary storage. vSAN requires at least three nodes in a private cloud to provide protection against a single failure.

