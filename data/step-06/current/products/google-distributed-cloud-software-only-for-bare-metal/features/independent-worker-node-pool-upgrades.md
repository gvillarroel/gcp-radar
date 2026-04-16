---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.350Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Independent worker node pool upgrades"
feature_slug: "independent-worker-node-pool-upgrades"
latest_feature_date: "2023-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api"
keywords:
  - "independent"
  - "worker"
  - "node"
  - "pool"
  - "upgrades"
  - "lets"
  - "selected"
  - "pools"
---

# Independent worker node pool upgrades

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Lets selected worker node pools be upgraded separately from the rest of the cluster.

## Extended Definition

Lets selected worker node pools be upgraded separately from the rest of the cluster.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)

## Supporting Pages

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

### "Upgrade clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If multiple worker node pools are selected for upgrade, the value of spec.nodePoolUpgradeStrategy.concurrentNodePools in the cluster spec determines how many node pools are upgraded in parallel, if any.
- If multiple worker node pools are selected for rollback, the value of spec.nodePoolUpgradeStrategy.concurrentNodePools in the cluster spec determines how many node pools are rolled back in parallel.
- In an upgrade, nodes upgrade 5 at a time and at least 4 nodes must remain available for the upgrade to proceed: apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : np1 namespace : cluster-cluster1 spec : clusterName : cluster1 nodes : - address : 10.200.0.1 - address : 10.200.0.2 - address : 10.200.0.3 - address : 10.200.0.4 - address : 10.200.0.5 - address : 10.200.0.6 - address : 10.200.0.7 - address : 10.200.0.8 - address : 10.200.0.9 - address : 10.200.0.10 upgradeStrategy : parallelUpgrade : concurrentNodes : 5 minimumAvailableNodes : 4 Node pool upgrade strategy You can configure a cluster so that multiple worker node pools upgrade in parallel.
- The following table lists the parallel upgrade fields and their default values: Field Default value Meaning nodePoolUpgradeStrategy.concurrentNodePools (Cluster spec) 1 Upgrade worker node pools sequentially, one after the other. upgradeStrategy.parallelUpgrade.concurrentNodes (NodePool spec) 1 Upgrade nodes sequentially, one after the other. upgradeStrategy.parallelUpgrade.minimumAvailableNodes (NodePool spec) The default minimumAvailableNodes value depends on the value of concurrentNodes .

### "Create a user cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Make a copy of the terraform.tfvars.sample file: cp terraform.tfvars.sample terraform.tfvars Modify the parameters values in terraform.tfvars and save the file. project id = " PROJECT ID " region = " ON PREM API REGION " admin cluster name = " ADMIN CLUSTER NAME " bare metal version = " VERSION " admin user emails = [ " YOUR EMAIL ADDRESS " , " ADMIN 2 EMAIL ADDRESS " ] cluster name = "abm-user-cluster-metallb" control plane ips = [ "10.200.0.4" ] worker node ips = [ "10.200.0.5" , "10.200.0.6" ] control plane vip = "10.200.0.50" ingress vip = "10.200.0.51" lb address pools = [ { name = "lbpool 1" , addresses = [ "10.200.0.51-10.200.0.70" ] } ] The following list describes the variables: project id : The ID of the project that you want to create the cluster in.
- You can change these addresses whenever you update or upgrade a cluster. worker node ips : A list of one or more IPv4 addresses for the worker node machines. control plane vip : The virtual IP address (VIP) that you have chosen to configure on the load balancer for the Kubernetes API server of the user cluster. ingress vip : The IP address that you have chosen to configure on the load balancer for the ingress proxy. lb address pools : A list of maps that define the address pools to be used by the MetalLB load balancer.
- MetalLB This example shows how to create a user cluster with the bundled MetalLB load balancer. gcloud container bare-metal clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --metal-lb-address-pools='pool= NAME ,avoid-buggy-ips= True False ,manual-assign= True False ,addresses= IP ADDRESS RANGE 1 ; IP ADDRESS RANGE 2 ;...' \ --control-plane-node-configs='node-ip= CP IP ADDRESS 1 ,labels= CP KEY 1.1 = CP VALUE 1.1 ; CP KEY 1.2 = CP VALUE 1.2 ;...' \ --control-plane-vip= CONTROL PLANE VIP \ --control-plane-load-balancer-port= CONTROL PLANE LB PORT \ --ingress-vip= INGRESS VIP \ --island-mode-service-address-cidr-blocks= SERVICE CIDR BLOCK \ --island-mode-pod-address-cidr-blocks= POD CIDR BLOCK \ --lvp-share-path=/mnt/localpv-share \ --lvp-share-storage-class=local-shared \ --lvp-node-mounts-config-path=/mnt/localpv-disk \ --lvp-node-mounts-config-storage-class=local-disks Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.
- If there is a problem with the configuration, the console displays an error message that should be clear enough for you to fix the configuration issue and try again to create the cluster. gcloud CLI You use the following command to create a user cluster: gcloud container bare-metal clusters create After creating the cluster, you need to create at least one node pool using the following command: gcloud container bare-metal node-pools create Most of the flags for creating the cluster and the node pool correspond to the fields in the user cluster configuration file .

