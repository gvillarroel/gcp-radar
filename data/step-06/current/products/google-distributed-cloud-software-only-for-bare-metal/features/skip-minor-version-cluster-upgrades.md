---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.325Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Skip minor version cluster upgrades"
feature_slug: "skip-minor-version-cluster-upgrades"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api"
keywords:
  - "skip"
  - "minor"
  - "version"
  - "cluster"
  - "upgrades"
  - "clusters"
  - "can"
  - "upgraded"
---

# Skip minor version cluster upgrades

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Clusters can be upgraded directly to two minor versions above the current version when worker node pools are not pinned lower.

## Extended Definition

Clusters can be upgraded directly to two minor versions above the current version when worker node pools are not pinned lower.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)

## Supporting Pages

### "Upgrade clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Skip upgrade prerequisites The process for performing a skip upgrade isn't different from performing a sequential upgrade, but there are some additional prerequisites: Verify that the cluster is in a state where a skip upgrade doesn't violate cluster and node pool version rules : Before you start a skip upgrade for an admin or hybrid cluster, ensure that all of its managed user clusters are at the same minor version as the managing cluster.
- Skip upgrades Starting with version 1.33, Google Distributed Cloud supports skip upgrades for all cluster types, letting you upgrade a cluster to a target version (1.33 or higher) that is two minor versions ahead of its current version in a single operation.
- Before you start a skip upgrade for a user cluster, ensure that your clusters meet the following criteria: The associated managing admin or hybrid cluster is two minor versions higher than the user cluster.
- During a skip upgrade, the system upgrades the cluster to an intermediate minor version and then immediately upgrades it to the target version.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- 1.28 The upgrade pause and resume feature is available in Preview for clusters with all control plane nodes at minor version 1.28 or higher.
- 1.29 and higher The upgrade pause and resume feature is GA for clusters with all control plane nodes at minor version 1.29 or higher.
- For more information, see Node upgrade strategy . apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : np1 namespace : cluster-cluster1 spec : clusterName : cluster1 nodes : - address : 10.200.0.1 ... upgradeStrategy : parallelUpgrade : concurrentNodes : 2 minimumAvailableNodes : 5 NodePool resource Optional Mutable upgradeStrategy.parallelUpgrade.concurrentNodes Optional.
- Update the nodePoolUpgradeStrategy.pause value to true to pause an active cluster upgrade: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : preview.baremetal.cluster.gke.io/upgrade-pause-and-resume spec : ... nodePoolUpgradeStrategy : pause : true ...

### "Create a user cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- User clusters must be either the same minor version as the admin cluster or one minor version lower than the admin cluster.
- MetalLB This example shows how to create a user cluster with the bundled MetalLB load balancer. gcloud container bare-metal clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --metal-lb-address-pools='pool= NAME ,avoid-buggy-ips= True False ,manual-assign= True False ,addresses= IP ADDRESS RANGE 1 ; IP ADDRESS RANGE 2 ;...' \ --control-plane-node-configs='node-ip= CP IP ADDRESS 1 ,labels= CP KEY 1.1 = CP VALUE 1.1 ; CP KEY 1.2 = CP VALUE 1.2 ;...' \ --control-plane-vip= CONTROL PLANE VIP \ --control-plane-load-balancer-port= CONTROL PLANE LB PORT \ --ingress-vip= INGRESS VIP \ --island-mode-service-address-cidr-blocks= SERVICE CIDR BLOCK \ --island-mode-pod-address-cidr-blocks= POD CIDR BLOCK \ --lvp-share-path=/mnt/localpv-share \ --lvp-share-storage-class=local-shared \ --lvp-node-mounts-config-path=/mnt/localpv-disk \ --lvp-node-mounts-config-storage-class=local-disks Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.
- Be sure to scroll over if needed to fill in the ADMIN CLUSTER NAME placeholder for the --admin-cluster-membership flag. gcloud container bare-metal clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --enable-manual-lb \ --control-plane-node-configs='node-ip= CP IP ADDRESS 1 ,labels= CP KEY 1.1 = CP VALUE 1.1 ; CP KEY 1.2 = CP VALUE 1.2 ;...' \ --control-plane-vip= CONTROL PLANE VIP \ --control-plane-load-balancer-port= CONTROL PLANE LB PORT \ --ingress-vip= INGRESS VIP \ --island-mode-service-address-cidr-blocks= SERVICE CIDR BLOCK \ --island-mode-pod-address-cidr-blocks= POD CIDR BLOCK \ --lvp-share-path=/mnt/localpv-share \ --lvp-share-storage-class=local-shared \ --lvp-node-mounts-config-path=/mnt/localpv-disk \ --lvp-node-mounts-config-storage-class=local-disks Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.
- Get a list of available versions to install on the user cluster: gcloud container bare-metal clusters query-version-config \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION Replace the following: ADMIN CLUSTER NAME : The name of the admin cluster.

