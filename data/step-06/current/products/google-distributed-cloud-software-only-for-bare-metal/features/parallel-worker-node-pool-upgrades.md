---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.351Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Parallel worker node pool upgrades"
feature_slug: "parallel-worker-node-pool-upgrades"
latest_feature_date: "2023-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools"
keywords:
  - "parallel"
  - "worker"
  - "node"
  - "pool"
  - "upgrades"
  - "lets"
  - "pools"
  - "upgraded"
---

# Parallel worker node pool upgrades

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Lets worker node pools be upgraded in parallel.

## Extended Definition

Lets worker node pools be upgraded in parallel.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools)

## Supporting Pages

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you set concurrentNodePools to 0 , every worker node pool in the cluster upgrades in parallel. apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 spec : ... nodePoolUpgradeStrategy : concurrentNodePools : 0 ...
- You can configure worker node pools so that multiple nodes upgrade in parallel when you upgrade your cluster.
- This section contains settings for configuring parallel node upgrades for a worker node pool.
- For more information, see Node upgrade strategy . apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : np1 namespace : cluster-cluster1 spec : clusterName : cluster1 nodes : - address : 10.200.0.1 ... upgradeStrategy : parallelUpgrade : concurrentNodes : 2 minimumAvailableNodes : 5 NodePool resource Optional Mutable upgradeStrategy.parallelUpgrade.concurrentNodes Optional.

### "Upgrade clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If multiple worker node pools are selected for upgrade, the value of spec.nodePoolUpgradeStrategy.concurrentNodePools in the cluster spec determines how many node pools are upgraded in parallel, if any.
- In an upgrade, nodes upgrade 5 at a time and at least 4 nodes must remain available for the upgrade to proceed: apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : np1 namespace : cluster-cluster1 spec : clusterName : cluster1 nodes : - address : 10.200.0.1 - address : 10.200.0.2 - address : 10.200.0.3 - address : 10.200.0.4 - address : 10.200.0.5 - address : 10.200.0.6 - address : 10.200.0.7 - address : 10.200.0.8 - address : 10.200.0.9 - address : 10.200.0.10 upgradeStrategy : parallelUpgrade : concurrentNodes : 5 minimumAvailableNodes : 4 Node pool upgrade strategy You can configure a cluster so that multiple worker node pools upgrade in parallel.
- The following table lists the parallel upgrade fields and their default values: Field Default value Meaning nodePoolUpgradeStrategy.concurrentNodePools (Cluster spec) 1 Upgrade worker node pools sequentially, one after the other. upgradeStrategy.parallelUpgrade.concurrentNodes (NodePool spec) 1 Upgrade nodes sequentially, one after the other. upgradeStrategy.parallelUpgrade.minimumAvailableNodes (NodePool spec) The default minimumAvailableNodes value depends on the value of concurrentNodes .
- If multiple worker node pools are selected for rollback, the value of spec.nodePoolUpgradeStrategy.concurrentNodePools in the cluster spec determines how many node pools are rolled back in parallel.

### "Manage node pools in a cluster \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You also use kubectl to manage node pools for all cluster types that can contain worker node pools (hybrid, standalone, and user clusters).
- What's next If your workload requirements change after you create node pools, you can update a worker node pool to add or remove nodes.
- There are three kinds of node pools in a Google Distributed Cloud cluster: control plane, load balancer, and worker node pools.
- This page describes how to check the status of worker node pools, and how to add, update, and remove worker node pools.

