---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.228Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Bundled Seesaw load balancer observability in Google Cloud's operations suite"
feature_slug: "bundled-seesaw-load-balancer-observability-in-google-cloud-s-operations-suite"
latest_feature_date: "2020-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability"
keywords:
  - "bundled"
  - "seesaw"
  - "load"
  - "balancer"
  - "observability"
  - "operations"
  - "suite"
  - "uploads"
---

# Bundled Seesaw load balancer observability in Google Cloud's operations suite

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Uploads bundled Seesaw load balancer metrics and logs to Google Cloud's operations suite for observability.

## Extended Definition

Bundled load balancing for Google Distributed Cloud (software only) for VMware refers to a Seesaw mode implemented via MetalLB that can be used for admin/user clusters as an alternative to manual load balancing. The docs describe this mode’s operational characteristics, including limits on LoadBalancer Services, nodes, and health checks, and indicate where it is used (including HA contexts). The provided excerpts do not provide evidence that this feature uploads metrics or logs to Google Cloud’s operations suite, so that observability claim is not directly supported.

## Evidence Summary

The cited Google Cloud documentation pages establish what bundled (Seesaw/MetalLB) load balancing means and its scalability limits, but do not document uploads of Seesaw metrics/logs to Cloud Operations.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability)

## Supporting Pages

### "Bundled load balancing with MetalLB \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- We recommend that you use manual load balancing , or disable Dataplane IP Learning when using Seesaw or MetalLB as your load balancer.
- Cisco Application Centric Infrastructure (ACI) with Dataplane IP Learning is incompatible with Seesaw and MetalLB load balancers.
- This document shows how to configure Google Distributed Cloud to use bundled load balancing with the MetalLB load balancer .
- In this example, the admin cluster and user cluster are on two separate VLANs, and each cluster is in a separate subnet: Cluster Subnet Admin cluster 172.16.20.0/24 User cluster 172.16.40.0/24 admin-cluster.yaml The following portion of an admin cluster configuration file shows the configuration seen in the preceding diagram of: High availability control plane MetalLB load balancer VIP on MetalLB for Kubernetes API server of the admin cluster network: ... controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.20.1" ips: - ip: "172.16.20.50" hostname: "admin-cp-1" - ip: "172.16.20.51" hostname: "admin-cp-2" - ip: "172.16.20.52" hostname: "admin-cp-3" loadBalancer: kind: "MetalLB" ... vips: controlPlaneVIP: "172.16.20.100" ... adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 user-cluster.yaml The following portion of a user cluster configuration file shows the configuration of: Address pool for the MetalLB controller to choose from and assign to Services of type LoadBalancer .

### "Scalability \_|\_ Google Distributed Cloud (software only) for VMware \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: The page references bundled/manual load balancing and LoadBalancer service limits, but provides no details on Seesaw observability or Operations suite metrics/logs integration.

Evidence snippets:
- The following table describes the maximum number of Services, nodes, and health checks for Bundled load balancing (Seesaw) and Integrated load balancing (F5): Bundled load balancing (Seesaw) Integrated load balancing (F5) Max Services 500 250 2 Max nodes 500 250 2 Max health checks N + (L N) <= 10K, where N is the number of nodes, and L is the number of traffic local services 1 N/A 2 1 For example, suppose you have 100 nodes and 99 traffic local Services.
- Scalability limits Take the following limits into account when designing your applications: If advanced cluster isn't enabled: Each admin cluster supports up to 100 user clusters, including both high availability (HA) and non-HA user clusters, using bundled load balancing mode ( MetalLB ), or ( manual load balancer ).
- If advanced cluster is enabled Each admin cluster supports up to 100 user clusters, user cluster must be high availability (HA) clusters, using bundled load balancing mode ( MetalLB ), or ( manual load balancer ).
- Each user cluster supports up to: 500 nodes using bundled load balancing mode ( MetalLB ) 15,000 Pods 500 LoadBalancer Services using bundled load balancing mode ( MetalLB ).

### "Scalability \_|\_ Google Distributed Cloud (software only) for VMware \_\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability)
- Source ID: `site-docs-reference-3`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: The page only references bundled load balancing mode (MetalLB) for cluster limits, with no direct coverage of Seesaw observability or Operations Suite integration.

Evidence snippets:
- The following table describes the maximum number of Services, nodes, and health checks for Bundled load balancing (Seesaw) and Integrated load balancing (F5): Bundled load balancing (Seesaw) Integrated load balancing (F5) Max Services 500 250 2 Max nodes 500 250 2 Max health checks N + (L N) <= 10K, where N is the number of nodes, and L is the number of traffic local services 1 N/A 2 1 For example, suppose you have 100 nodes and 99 traffic local Services.
- Scalability limits Take the following limits into account when designing your applications: If advanced cluster isn't enabled: Each admin cluster supports up to 100 user clusters, including both high availability (HA) and non-HA user clusters, using bundled load balancing mode ( MetalLB ), or ( manual load balancer ).
- If advanced cluster is enabled Each admin cluster supports up to 100 user clusters, user cluster must be high availability (HA) clusters, using bundled load balancing mode ( MetalLB ), or ( manual load balancer ).
- Each user cluster supports up to: 500 nodes using bundled load balancing mode ( MetalLB ) 15,000 Pods 500 LoadBalancer Services using bundled load balancing mode ( MetalLB ).

