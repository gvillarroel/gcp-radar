---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.340Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Node pool upgrade rollback"
feature_slug: "node-pool-upgrade-rollback"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
keywords:
  - "node"
  - "pool"
  - "upgrade"
  - "rollback"
  - "you"
  - "can"
  - "roll"
  - "back"
---

# Node pool upgrade rollback

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

You can roll back select node pool upgrades; You can roll back select node pool upgrades.

## Extended Definition

You can roll back select node pool upgrades; You can roll back select node pool upgrades.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)

## Supporting Pages

### "Upgrade clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- While this feature is in Preview, you must add the following annotation to the Cluster resource to enable the feature: preview.baremetal.cluster.gke.io/worker-node-pool-upgrade-rollback : enable 1.28 The node pool rollback capability isn't available for clusters at minor version 1.28 or earlier.
- If multiple worker node pools are selected for rollback, the value of spec.nodePoolUpgradeStrategy.concurrentNodePools in the cluster spec determines how many node pools are rolled back in parallel.
- If you don't want to roll back worker node pools concurrently, select one node pool at a time for rollback or update the nodePoolUpgradeStrategy settings.
- The following cluster configuration file excerpt shows how you can modify the cluster configuration to support this partial upgrade: ... --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : user001 namespace : cluster-user001 spec : type : user profile : default anthosBareMetalVersion : 1.34.200-gke.68 --- apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : wpool01 namespace : cluster-user001 spec : clusterName : user001 anthosBareMetalVersion : 1.34.200-gke.68 nodes : - address : 10.200.0.1 - address : 10.200.0.2 - address : 10.200.0.3 ... - address : 10.200.0.8 apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : wpool02 namespace : cluster-user001 spec : clusterName : user001 anthosBareMetalVersion : "" nodes : - address : 10.200.1.1 - address : 10.200.1.2 - address : 10.200.1.3 ... - address : 10.200.1.12 Roll back a node pool upgrade There are many dependencies, such as compatibility with kubelet or plugins, that can affect the performance of your workloads.

### "Manage node pools in a cluster \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows the status of the node pools in the cluster namespace cluster-abm-cluster : kubectl get nodepools.baremetal.cluster.gke.io -n cluster-abm-cluster The system returns results similar to the following: NAME READY RECONCILING STALLED UNDERMAINTENANCE UNKNOWN abm-cluster 3 0 0 0 0 default-pool 2 0 0 0 0 backup-pool 3 0 0 0 0 Each column in the table indicates the different statuses a node can be in.
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Manage node pools in a cluster Stay organized with collections Save and categorize content based on your preferences.
- The new node pool consists of two nodes with IP addresses 10.200.0.7 and 10.200.0.8 : apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : machine-learning-pool namespace : cluster-abm-cluster spec : clusterName : abm-cluster nodes : - address : 10.200.0.7 - address : 10.200.0.8 taints : - key : TAINT KEY value : TAINT VALUE effect : NoSchedule labels : key1 : LABEL 1 key2 : LABEL 2 Store the configuration in a file named machine-learning-pool.yaml and apply the configuration to the cluster with the following command: kubectl apply -f machine-learning-pool.yaml The following facts should be considered when adding a node pool to a cluster: NodePool.spec.taints and NodePool.spec.labels configurations are reconciled to nodes.
- If you plan to use the gcloud CLI, do the following on a computer that has the gcloud CLI installed: Sign in with your Google Account gcloud auth login Update components: gcloud components update Check node status Before adding or removing node pools, check the status of nodes and their respective node pools. kubectl With kubectl , you can get the status of nodes in a specific namespace or in the entire cluster.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Node upgrade strategy . apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : np1 namespace : cluster-cluster1 spec : clusterName : cluster1 nodes : - address : 10.200.0.1 ... upgradeStrategy : parallelUpgrade : concurrentNodes : 2 minimumAvailableNodes : 5 NodePool resource Optional Mutable upgradeStrategy.parallelUpgrade.concurrentNodes Optional.
- Update the nodePoolUpgradeStrategy.pause value to true to pause an active cluster upgrade: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : preview.baremetal.cluster.gke.io/upgrade-pause-and-resume spec : ... nodePoolUpgradeStrategy : pause : true ...
- A node is also considered to be unavailable when any of the following conditions are true: Node is in maintenance mode Node is reconciling Node is stalled in the middle of an upgrade When you use this field together with the concurrentNodes field, their combined values can't exceed the total number of nodes in the node pool.
- For example: nodeSelector : matchLabels : baremetal.cluster.gke.io/node-pool : "workers" ClusterCIDRConfig resource Optional Mutable Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

