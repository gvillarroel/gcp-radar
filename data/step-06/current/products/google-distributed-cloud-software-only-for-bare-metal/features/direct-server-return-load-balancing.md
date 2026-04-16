---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.347Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Direct Server Return load balancing"
feature_slug: "direct-server-return-load-balancing"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/manual-lb"
keywords:
  - "direct"
  - "server"
  - "return"
  - "load"
  - "balancing"
  - "adds"
  - "clusters"
  - "configured"
---

# Direct Server Return load balancing

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Adds Direct Server Return load balancing for clusters; Adds Direct Server Return load balancing for clusters configured with flat-mode networking.

## Extended Definition

Adds Direct Server Return load balancing for clusters; Adds Direct Server Return load balancing for clusters configured with flat-mode networking.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/manual-lb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/manual-lb)

## Supporting Pages

### "Create a user cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For clusters configured with at least one load balancer node, you can update the cluster to add more nodes to the load balancer node pool.
- MetalLB This example shows how to create a user cluster with the bundled MetalLB load balancer. gcloud container bare-metal clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --metal-lb-address-pools='pool= NAME ,avoid-buggy-ips= True False ,manual-assign= True False ,addresses= IP ADDRESS RANGE 1 ; IP ADDRESS RANGE 2 ;...' \ --control-plane-node-configs='node-ip= CP IP ADDRESS 1 ,labels= CP KEY 1.1 = CP VALUE 1.1 ; CP KEY 1.2 = CP VALUE 1.2 ;...' \ --control-plane-vip= CONTROL PLANE VIP \ --control-plane-load-balancer-port= CONTROL PLANE LB PORT \ --ingress-vip= INGRESS VIP \ --island-mode-service-address-cidr-blocks= SERVICE CIDR BLOCK \ --island-mode-pod-address-cidr-blocks= POD CIDR BLOCK \ --lvp-share-path=/mnt/localpv-share \ --lvp-share-storage-class=local-shared \ --lvp-node-mounts-config-path=/mnt/localpv-disk \ --lvp-node-mounts-config-storage-class=local-disks Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.
- Be sure to scroll over if needed to fill in the ADMIN CLUSTER NAME placeholder for the --admin-cluster-membership flag. gcloud container bare-metal clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --enable-manual-lb \ --control-plane-node-configs='node-ip= CP IP ADDRESS 1 ,labels= CP KEY 1.1 = CP VALUE 1.1 ; CP KEY 1.2 = CP VALUE 1.2 ;...' \ --control-plane-vip= CONTROL PLANE VIP \ --control-plane-load-balancer-port= CONTROL PLANE LB PORT \ --ingress-vip= INGRESS VIP \ --island-mode-service-address-cidr-blocks= SERVICE CIDR BLOCK \ --island-mode-pod-address-cidr-blocks= POD CIDR BLOCK \ --lvp-share-path=/mnt/localpv-share \ --lvp-share-storage-class=local-shared \ --lvp-node-mounts-config-path=/mnt/localpv-disk \ --lvp-node-mounts-config-storage-class=local-disks Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.
- All the nodes are labeled with cp-node-pool-key=cp-node-pool-value and have the taint dedicated=experimental:PreferNoSchedule . --control-plane-node-configs='node-ip=192.0.2.1' \ --control-plane-node-configs='node-ip=192.0.2.2,labels=key2.1=value2.1' \ --control-planer-node-configs='node-ip=192.0.2.3,labels=key3.1=value3.1;key3.2=value3.2' \ --control-plane-node-labels=cp-node-pool-key=cp-node-pool-value \ --control-plane-node-taints=dedicated=experimental:PreferNoSchedule \ Virtual IPs CONTROL PLANE VIP : The IP address that you have chosen to configure on the load balancer for the Kubernetes API server of the user cluster.

### "Configure bundled load balancing with MetalLB \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb)
- Source ID: `site-iam-reference`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Distributed Cloud supports two methods for preserving the client source IP address : Set the forwarding mode for load balancing to Direct Server Return (DSR).
- For information about cluster configuration files and examples of valid configurations, see one of the following pages: Create admin clusters Create user clusters Create hybrid clusters Create standalone clusters loadBalancer.mode This value must be bundled to enable bundled load balancing. loadBalancer.ports.controlPlaneLBPort This value specifies the destination port to be used for traffic sent to the Kubernetes control plane (the Kubernetes API servers). loadBalancer.vips.controlPlaneVIP This value specifies the destination IP address to be used for traffic sent to the Kubernetes control plane (the Kubernetes API servers).
- Data plane load balancing can only be configured through Google Distributed Cloud, don't modify the MetalLB ConfigMap directly.
- If you want to prevent workloads from running on a node in the load balancer node pool, add the following taint to the node: node-role.kubernetes.io/load-balancer:NoSchedule Google Distributed Cloud adds tolerations for this taint to the pods that are required for load balancing.

### "Configure manual load balancing \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/manual-lb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/manual-lb)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Support LoadBalancer Services in user clusters You must configure load balancing to support Kubernetes LoadBalancer services In manual load-balancing mode, Google Distributed Cloud does not automatically provision load balancers so LoadBalancer services don't work unless you provision and configure load balancers to point the services.
- After you have finished editing the config file, including fields not related to load balancing, verify that the control plane VIP is correctly configured on the load balancer by running the preflight checks: bmctl check preflight -c CLUSTER NAME Replace CLUSTER NAME with the name of the cluster.
- Find its ports with this command: kubectl --kubeconfig KUBECONFIG -n gke-system get service istio-ingress -oyaml The ingress service is configured with a loadBalancerIP which is the IP supplied in the loadBalancer.vips.ingressVIP field in the initial cluster configuration.
- Unlike bundled load balancing where Google Distributed Cloud deploys load balancers to cluster nodes for control plane and data plane traffic, with manual load balancing you configure your own load-balancing solutions for control plane and data plane traffic.

