---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.343Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Eviction-based maintenance mode draining"
feature_slug: "eviction-based-maintenance-mode-draining"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade"
keywords:
  - "eviction"
  - "based"
  - "maintenance"
  - "mode"
  - "draining"
  - "now"
  - "drains"
  - "nodes"
---

# Eviction-based maintenance mode draining

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Maintenance mode now drains nodes with the Eviction API instead of taint-based draining to better protect workloads.

## Extended Definition

Maintenance mode now drains nodes with the Eviction API instead of taint-based draining to better protect workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)

## Supporting Pages

### "Update clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Example: remove a worker node Here's a sample cluster configuration file that shows the specifications of two worker nodes: --- apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : nodepool1 namespace : cluster-cluster1 spec : clusterName : cluster1 nodes : - address : 192.0.2.1 - address : 192.0.2.2 To remove a node: (Optional) If the node that you're removing is running critical Pods, first put the node into maintenance mode .
- The output of the command gives the status of the nodes, for example: ... metrics: - intValue: '1' metric: NODES RECONCILING - intValue: '2' metric: NODES HEALTHY - intValue: '0' metric: NODES FAILED - intValue: '0' metric: NODES IN MAINTENANCE - intValue: '3' metric: NODES TOTAL stage: HEALTH CHECK ...
- Additional gcloud CLI commands that you might find useful are also included in the following steps. (Optional) If the node that you're removing is running critical Pods, first put the node into maintenance mode .
- You can monitor the node draining process for worker nodes by viewing the status.nodesDrained and status.nodesDraining fields on the NodePool resource.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- A node is also considered to be unavailable when any of the following conditions are true: Node is in maintenance mode Node is reconciling Node is stalled in the middle of an upgrade When you use this field together with the concurrentNodes field, their combined values can't exceed the total number of nodes in the node pool.
- For more information, see Put nodes into maintenance mode .
- For example: loadBalancer : mode : bundled type : bgp localASN : 65001 bgpPeers : - ip : 10.0.1.254 asn : 65002 controlPlaneNodes : - 10.0.1.10 - 10.0.1.11 - ip : 10.0.2.254 asn : 65002 controlPlaneNodes : - 10.0.2.10 For more information, see Configure bundled load balancers with BGP .
- For example: loadBalancer : mode : bundled ... addressPools : - name : pool1 addresses : - 10.200.0.92-10.200.0.100 nodePoolSpec : nodes : - address : 10.200.1.25 k8sIP : 10.200.0.25 - address : 10.200.0.26 - address : 10.200.0.27 This field can't be modified after cluster creation.

### "Upgrade clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- You might want to pause an upgrade for the following reasons: You've detected something wrong with cluster workloads during the upgrade and you want to pause the upgrade to look into the issue You have short maintenance windows, so you want to pause the upgrade in between windows While a cluster upgrade is paused, the following operations are supported: Adding or removing nodes Adding or removing node pools Increasing service network range Restore a cluster from a backup When a new node is added while an upgrade is paused, machine check jobs don't run on it until the upgrade is resumed and completed.
- As the rollback runs, Google Distributed Cloud performs the following activities for each node: Put the node into maintenance mode.
- As the rollback runs, Google Distributed Cloud performs the following activities for each node: Put the node into maintenance mode.
- Remove the node from maintenance mode.

