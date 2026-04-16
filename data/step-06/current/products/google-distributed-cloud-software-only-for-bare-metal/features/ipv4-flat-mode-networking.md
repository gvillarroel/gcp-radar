---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.356Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "IPv4 flat mode networking"
feature_slug: "ipv4-flat-mode-networking"
latest_feature_date: "2021-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters"
keywords:
  - "ipv4"
  - "flat"
  - "mode"
  - "networking"
  - "makes"
  - "pod"
  - "addresses"
  - "visible"
---

# IPv4 flat mode networking

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

IPv4 flat mode makes pod IPv4 addresses visible and routable within the same Layer 2 domain without masquerading as node IPs.

## Extended Definition

IPv4 flat mode makes pod IPv4 addresses visible and routable within the same Layer 2 domain without masquerading as node IPs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)

## Supporting Pages

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Set this field to true to enable the flat mode cluster networking model.
- For example: loadBalancer : mode : bundled ... addressPools : - name : pool1 addresses : - 10.200.0.92-10.200.0.100 nodePoolSpec : nodes : - address : 10.200.1.25 k8sIP : 10.200.0.25 - address : 10.200.0.26 - address : 10.200.0.27 This field can't be modified after cluster creation.
- Pods can communicate with each other directly without the need for an intermediary gateway or network address translation (NAT). flatIPv4 is false by default.
- The networking mode for Dataplane V2 load balancing can be configured at cluster creation time only.

### "Create a user cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- MetalLB This example shows how to create a user cluster with the bundled MetalLB load balancer. gcloud container bare-metal clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --metal-lb-address-pools='pool= NAME ,avoid-buggy-ips= True False ,manual-assign= True False ,addresses= IP ADDRESS RANGE 1 ; IP ADDRESS RANGE 2 ;...' \ --control-plane-node-configs='node-ip= CP IP ADDRESS 1 ,labels= CP KEY 1.1 = CP VALUE 1.1 ; CP KEY 1.2 = CP VALUE 1.2 ;...' \ --control-plane-vip= CONTROL PLANE VIP \ --control-plane-load-balancer-port= CONTROL PLANE LB PORT \ --ingress-vip= INGRESS VIP \ --island-mode-service-address-cidr-blocks= SERVICE CIDR BLOCK \ --island-mode-pod-address-cidr-blocks= POD CIDR BLOCK \ --lvp-share-path=/mnt/localpv-share \ --lvp-share-storage-class=local-shared \ --lvp-node-mounts-config-path=/mnt/localpv-disk \ --lvp-node-mounts-config-storage-class=local-disks Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.
- You can change these addresses whenever you update or upgrade a cluster. worker node ips : A list of one or more IPv4 addresses for the worker node machines. control plane vip : The virtual IP address (VIP) that you have chosen to configure on the load balancer for the Kubernetes API server of the user cluster. ingress vip : The IP address that you have chosen to configure on the load balancer for the ingress proxy. lb address pools : A list of maps that define the address pools to be used by the MetalLB load balancer.
- The name must: contain at most 40 characters contain only lowercase alphanumeric characters or a hyphen ( - ) start with an alphabetic character end with an alphanumeric character control plane ips : A list of one or more IPv4 addresses for the control plane nodes.
- Example: --island-mode-service-address-cidr-blocks=10.96.0.0/20 POD CIDR BLOCK : A range of IP addresses, in CIDR format, to be used for Pods in your cluster.

### "Update clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- The network range can't be reduced, which means the mask (the value after "/") can't be increased. bmctl apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 spec : ... clusterNetwork : services : cidrBlocks : - 192.0.2.0/ 14 ... gcloud CLI To increase the range of the IPv4 service CIDR on a user cluster, specify the new range in the --island-mode-service-address-cidr-blocks flag. gcloud container bare-metal clusters update cluster1 \ --project = example-project-12345 \ --location = us-central1 \ --island-mode-service-address-cidr-blocks = 192 .0.2.0/ 14 Starting with version 1.34, you will see new ServiceCIDR resources in your cluster.
- If you set this field to true in the cluster configuration file, the internal preflight checks are ignored when you apply resources to existing clusters. apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : baremetal.cluster.gke.io/private-mode : "true" spec : bypassPreflightCheck : true Add or remove cluster administrators bmctl You can add or remove a user or service account as a cluster administrator for a user cluster by specifying email addresses in the clusterSecurity.authorization.clusterAdmin.gcpAccounts section of the cluster configuration file.
- BGPLoadBalancer apiVersion : networking.gke.io/v1 kind : BGPLoadBalancer metadata : name : default namespace : cluster-bm spec : peerSelector : cluster.baremetal.gke.io/default-peer : "true" BGPPeer apiVersion : networking.gke.io/v1 kind : BGPPeer metadata : name : bgppeer1 namespace : cluster-bm labels : cluster.baremetal.gke.io/default-peer : "true" spec : localASN : 65001 peerASN : 65002 peerIP : 10.0.3.254 sessions : 2 Increase service network range To create more services than the initial limit, you can reduce the IPv4 service CIDR mask to increase the service network of your cluster.
- NetworkGatewayGroup The NetworkGatewayGroup custom resource is used to provide floating IP addresses for advanced networking features, such as the egress NAT gateway or the bundled load-balancing feature with BGP . apiVersion : networking.gke.io/v1 kind : NetworkGatewayGroup name : default namespace : cluster-bm spec : floatingIPs : - 10.0.1.100 - 10.0.2.100 BGP load balancing You configure Border Gateway Protocol (BGP) load balancing in the cluster resource and other custom resources.

