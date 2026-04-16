---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.344Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Selective node pool upgrades with two-minor-version skew"
feature_slug: "selective-node-pool-upgrades-with-two-minor-version-skew"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
keywords:
  - "selective"
  - "node"
  - "pool"
  - "upgrades"
  - "two"
  - "minor"
  - "version"
  - "skew"
---

# Selective node pool upgrades with two-minor-version skew

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Selective node pool upgrades can span up to two minor versions; Allows selective node pool upgrades when the version skew is up to two minor versions.

## Extended Definition

Selective node pool upgrades can span up to two minor versions; Allows selective node pool upgrades when the version skew is up to two minor versions.

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
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With n-2 version skew support, you can also skip a minor release version when you upgrade a worker node pool from two minor versions behind the cluster to the same minor version as the cluster.
- Two minor version node pool version skew For version 1.28 and higher clusters, a worker node pool version can be up to two minor versions behind the cluster (control plane) version.
- For more information about the versioning rules for selectively upgrading worker node pools, see Node pool versioning rules in Lifecycle and stages of cluster upgrades.
- If you don't enable this Preview capability, the maximum version skew between a worker node pool and the cluster is one minor version.

### "Manage node pools in a cluster \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The new node pool consists of two nodes with IP addresses 10.200.0.7 and 10.200.0.8 : apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : machine-learning-pool namespace : cluster-abm-cluster spec : clusterName : abm-cluster nodes : - address : 10.200.0.7 - address : 10.200.0.8 taints : - key : TAINT KEY value : TAINT VALUE effect : NoSchedule labels : key1 : LABEL 1 key2 : LABEL 2 Store the configuration in a file named machine-learning-pool.yaml and apply the configuration to the cluster with the following command: kubectl apply -f machine-learning-pool.yaml The following facts should be considered when adding a node pool to a cluster: NodePool.spec.taints and NodePool.spec.labels configurations are reconciled to nodes.
- The following example shows the status of the node pools in the cluster namespace cluster-abm-cluster : kubectl get nodepools.baremetal.cluster.gke.io -n cluster-abm-cluster The system returns results similar to the following: NAME READY RECONCILING STALLED UNDERMAINTENANCE UNKNOWN abm-cluster 3 0 0 0 0 default-pool 2 0 0 0 0 backup-pool 3 0 0 0 0 Each column in the table indicates the different statuses a node can be in.
- If you plan to use the gcloud CLI, do the following on a computer that has the gcloud CLI installed: Sign in with your Google Account gcloud auth login Update components: gcloud components update Check node status Before adding or removing node pools, check the status of nodes and their respective node pools. kubectl With kubectl , you can get the status of nodes in a specific namespace or in the entire cluster.
- Change the settings as needed, and click Save . gcloud CLI Optionally, list the node pools on the cluster to get the node pool name that you want to update. gcloud container bare-metal node-pools list \ --cluster= USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --location= LOCATION Replace the following: USER CLUSTER NAME : The name of the user cluster that contains the node pools.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Node upgrade strategy . apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : np1 namespace : cluster-cluster1 spec : clusterName : cluster1 nodes : - address : 10.200.0.1 ... upgradeStrategy : parallelUpgrade : concurrentNodes : 2 minimumAvailableNodes : 5 NodePool resource Optional Mutable upgradeStrategy.parallelUpgrade.concurrentNodes Optional.
- Update the nodePoolUpgradeStrategy.pause value to true to pause an active cluster upgrade: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : preview.baremetal.cluster.gke.io/upgrade-pause-and-resume spec : ... nodePoolUpgradeStrategy : pause : true ...
- When you set concurrentNodePools to 0 , every worker node pool in the cluster upgrades in parallel. apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 spec : ... nodePoolUpgradeStrategy : concurrentNodePools : 0 ...
- The following list shows the launch stage per version for configuring a node-level private registry: 1.30 and later: GA 1.29: Preview Cluster resource Optional Mutable nodePoolUpgradeStrategy Optional.

