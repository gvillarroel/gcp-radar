---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.250Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "User cluster control plane high availability"
feature_slug: "user-cluster-control-plane-high-availability"
latest_feature_date: "2020-09-24"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
keywords:
  - "user"
  - "cluster"
  - "control"
  - "plane"
  - "high"
  - "availability"
  - "planes"
  - "can"
---

# User cluster control plane high availability

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

User cluster control planes can run in a highly available configuration.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, a user cluster control plane can be configured in high availability (HA) or non-HA mode by specifying the number of control-plane nodes. The documented HA configuration uses 3 control-plane nodes, while non-HA uses 1. The platform can also apply vSphere DRS anti-affinity across the three control-plane nodes (via antiAffinityGroups.enabled) and the user cluster control plane is critical to workload operations such as create/scale/terminate.

## Evidence Summary

The cited pages define HA control-plane sizing for user clusters (1 vs 3 nodes), explain the operational importance of user-control-plane availability, and describe optional anti-affinity placement for control-plane nodes.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 231
- Re-rank relevance: WEAK
- Re-rank rationale: The excerpt notes version-specific behavior (advanced clusters) yet provides no direct explanation of control-plane high-availability configuration.

Evidence snippets:
- For example, you may enter 1 control-plane node for a development environment and 3 control-planes nodes for high availability (HA), production environments. control plane vip : The virtual IP address (VIP) that you have chosen to configure on the load balancer for the Kubernetes API server of the user cluster. ingress vip : The IP address that you have chosen to configure on the load balancer for the ingress proxy. lb address pools : A list of maps that define the address pools to be used by the MetalLB load balancer.
- For example, you may select 1 control-plane node for a development environment and 3 control-planes nodes for high availability (HA), production environments. --enable-auto-resize : If you want to enable automatic resizing of the control-plane nodes for the user cluster, include --enable-auto-resize .
- For more information about load balancing options, see Overview of load balancing . advancedNetworking If you plan to create an egress NAT gateway , set advancedNetworking to true . multipleNetworkInterfaces Decide whether you want to configure multiple network interfaces for Pods, and set multipleNetworkInterfaces accordingly. storage If you want to disable the deployment of vSphere CSI components, set storage.vSphereCSIDisabled to true . masterNode In the masterNode section, you can specify how many control-plane nodes you want for your user cluster: specify 3 for a highly-available (HA) cluster or 1 for a non-HA cluster.
- Flag Description --admin-users Grants you and another user full administrative rights on the cluster. --enable-control-plane-v2 Enables Controlplane V2, which is recommended and required in version 1.30 and higher. --control-plane-ip-block One IP address for the control plane node.

### "High availability and disaster recovery \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery)
- Source ID: `site-docs-reference-2`
- Final score: 231
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly discusses user clusters running control planes with either one non-HA node or three HA nodes, directly defining user cluster control plane high availability behavior.

Evidence snippets:
- Note that unavailability of the admin cluster control plane doesn't affect existing user cluster functionality or any workloads running in user clusters.
- The user cluster's control plane availability is critical to workload operations such as workload creation, scaling up and down, and termination.
- In the admin cluster, the admin master manages the admin worker nodes, which include user masters (nodes running the control plane of the managed user clusters) and addon nodes (nodes running the addon components supporting the admin cluster's functionality).
- If you set antiAffinityGroups.enabled to true in the admin cluster configuration file, Google Distributed Cloud automatically creates vSphere DRS anti-affinity rules for the three nodes that run the user cluster control plane.

### "High availability and disaster recovery \_|\_ Google Distributed Cloud (software\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery)
- Source ID: `site-docs-reference-3`
- Final score: 231
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly states user clusters can use one non-HA or three HA control-plane nodes and explains the role and impact of control-plane availability.

Evidence snippets:
- Note that unavailability of the admin cluster control plane doesn't affect existing user cluster functionality or any workloads running in user clusters.
- The user cluster's control plane availability is critical to workload operations such as workload creation, scaling up and down, and termination.
- In the admin cluster, the admin master manages the admin worker nodes, which include user masters (nodes running the control plane of the managed user clusters) and addon nodes (nodes running the addon components supporting the admin cluster's functionality).
- If you set antiAffinityGroups.enabled to true in the admin cluster configuration file, Google Distributed Cloud automatically creates vSphere DRS anti-affinity rules for the three nodes that run the user cluster control plane.

