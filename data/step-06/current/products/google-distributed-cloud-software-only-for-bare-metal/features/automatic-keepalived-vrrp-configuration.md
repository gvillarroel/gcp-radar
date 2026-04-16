---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.330Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Automatic Keepalived VRRP configuration"
feature_slug: "automatic-keepalived-vrrp-configuration"
latest_feature_date: "2025-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb"
keywords:
  - "automatic"
  - "keepalived"
  - "vrrp"
  - "configuration"
  - "high"
  - "availability"
  - "control"
  - "planes"
---

# Automatic Keepalived VRRP configuration

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

For high availability control planes, Google Distributed Cloud automatically configures Keepalived VRRP settings to make failover behavior deterministic.

## Extended Definition

For high availability control planes, Google Distributed Cloud automatically configures Keepalived VRRP settings to make failover behavior deterministic.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb)

## Supporting Pages

### "Update clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Version 1.32 and later clusters have the following Keepalived customizations: For high availability control planes, Google Distributed Cloud automatically configures the Keepalived VRRP configuration to make failover behaviour deterministic and prevent interleaving of ARP replies with different MAC addresses: Each Keepalived instance is configured automatically with a different priority value in the VRRP router.
- After making this change, the cluster configuration file should look something like this: --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : user-cluster namespace : cluster-user-cluster spec : controlPlane : nodePoolSpec : nodes : - address : 192.0.2.11 - address : 192.0.2.12 - address : 192.0.2.14 Update the cluster by running the following command: bmctl update cluster -c CLUSTER NAME \ --kubeconfig= KUBECONFIG gcloud CLI You can use the gcloud CLI to replace high availability (HA) control plane nodes in admin and user clusters.
- The following example shows how to specify keepalivedVRRPGARPMasterRepeat in the cluster configuration file: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : hybrid-ha-lb namespace : cluster-hybrid-ha-lb spec : type : hybrid profile : default anthosBareMetalVersion : 1.34 gkeConnect : projectID : project-fleet controlPlane : loadBalancer : keepalivedVRRPGARPMasterRepeat : 1 nodePoolSpec : nodes : - address : 10.200.0.2 - address : 10.200.0.3 - address : 10.200.0.4 ...
- To change the number of GARP messages to send, add the controlPlane.loadBalancer.keepalivedVRRPGARPMasterRepeat field to the cluster configuration file, set it to the new value, and update your cluster.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Cluster resource Optional Mutable controlPlane.loadBalancer.keepalivedVRRPGARPMasterRepeat Optional.
- Cluster resource Optional Mutable controlPlane.schedulerConfiguration.defaultTopologySpreadConstraint Defines the default constraints applied to pods that do not have their own topology spread constraints defined.
- Specifies the number of gratuitous ARP (GARP) messages for Keepalived to send at a time after a control plane node transitions to the role of the master server.
- For Google Distributed Cloud software versions 1.13.0 and higher, if your cluster configuration file contains this field, the value must be containerd .

### "Configure bundled load balancing with MetalLB \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Keepalived uses the Virtual Router Redundancy Protocol (VRRP) on the load balancer nodes for high availability.
- The cluster configuration for separated load balancers should look similar to the following example: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : hybrid-ha-lb namespace : cluster-hybrid-ha-lb spec : type : hybrid profile : default anthosBareMetalVersion : 1.34 gkeConnect : projectID : project-fleet controlPlane : loadBalancer : mode : bundled nodePoolSpec : nodes : - address : 10.200.0.2 - address : 10.200.0.3 - address : 10.200.0.4 clusterNetwork : pods : cidrBlocks : - 192.168.0.0/16 services : cidrBlocks : - 10.96.0.0/20 ... loadBalancer : mode : bundled ... nodePoolSpec : nodes : - address : 10.200.0.5 - address : 10.200.0.6 - address : 10.200.0.7 clusterOperations : ...
- For information about cluster configuration files and examples of valid configurations, see one of the following pages: Create admin clusters Create user clusters Create hybrid clusters Create standalone clusters loadBalancer.mode This value must be bundled to enable bundled load balancing. loadBalancer.ports.controlPlaneLBPort This value specifies the destination port to be used for traffic sent to the Kubernetes control plane (the Kubernetes API servers). loadBalancer.vips.controlPlaneVIP This value specifies the destination IP address to be used for traffic sent to the Kubernetes control plane (the Kubernetes API servers).
- The following diagram shows the control plane and data plane load balancers separated after the data plane load balancer has been migrated off of the control plane nodes: To migrate the data plane load balancer to a load balancer node pool when you update a cluster, use the following steps: In the cluster configuration file, specify a load balancer node pool with loadBalancer.nodePoolSpec as described in the loadBalancer.nodePoolSpec section of this document.

