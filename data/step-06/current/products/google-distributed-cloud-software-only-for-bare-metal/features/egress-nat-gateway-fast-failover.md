---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.322Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Egress NAT gateway fast failover"
feature_slug: "egress-nat-gateway-fast-failover"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-prep"
keywords:
  - "egress"
  - "nat"
  - "gateway"
  - "fast"
  - "failover"
  - "high"
  - "availability"
  - "mode"
---

# Egress NAT gateway fast failover

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

The egress NAT gateway in high availability mode supports fast failover to improve reliability and throughput for egress traffic.

## Extended Definition

The egress NAT gateway in high availability mode supports fast failover to improve reliability and throughput for egress traffic.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-prep](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-prep)

## Supporting Pages

### "Update clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Version 1.32 and later clusters have the following Keepalived customizations: For high availability control planes, Google Distributed Cloud automatically configures the Keepalived VRRP configuration to make failover behaviour deterministic and prevent interleaving of ARP replies with different MAC addresses: Each Keepalived instance is configured automatically with a different priority value in the VRRP router.
- After making this change, the cluster configuration file should look something like this: --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : user-cluster namespace : cluster-user-cluster spec : controlPlane : nodePoolSpec : nodes : - address : 192.0.2.11 - address : 192.0.2.12 - address : 192.0.2.14 Update the cluster by running the following command: bmctl update cluster -c CLUSTER NAME \ --kubeconfig= KUBECONFIG gcloud CLI You can use the gcloud CLI to replace high availability (HA) control plane nodes in admin and user clusters.
- NetworkGatewayGroup The NetworkGatewayGroup custom resource is used to provide floating IP addresses for advanced networking features, such as the egress NAT gateway or the bundled load-balancing feature with BGP . apiVersion : networking.gke.io/v1 kind : NetworkGatewayGroup name : default namespace : cluster-bm spec : floatingIPs : - 10.0.1.100 - 10.0.2.100 BGP load balancing You configure Border Gateway Protocol (BGP) load balancing in the cluster resource and other custom resources.
- Replace HA control plane nodes bmctl You can use bmctl to replace high availability (HA) control plane nodes in all cluster types.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- For more information about Network Gateway for GDC and related advanced networking features, see Configure an egress NAT gateway and Configure bundled load balancers with BGP .
- For self-managed clusters, allowable values for maxPodsPerNode are 32 – 250 for high-availability (HA) clusters and 64 – 250 for non-HA clusters.
- Typically, this array is either an IP address for a single machine, or IP addresses for three machines for a high-availability (HA) deployment.
- Set this field to true to enable advanced networking features, such as Bundled Load Balancing with BGP or the egress NAT gateway.

### "Choose a deployment model \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-prep](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-prep)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- High-availability standalone cluster deployment (Click to enlarge) This model has the following advantages: It doesn't require a separate admin cluster It supports the edge profile, which has significantly reduced system resource requirements and is recommended for edge devices with high resource constraints.
- High-availability admin and user cluster deployment (Click to enlarge) This deployment model consists of the following clusters: One admin cluster: The central management point that provides an API to manage user clusters.
- High-availability hybrid cluster deployment (Click to enlarge) Features of this model: Allocating a set of machines for an admin cluster is often wasteful because admin clusters use relatively few resources.
- High availability You can run admin or user clusters in high availability (HA) mode.

