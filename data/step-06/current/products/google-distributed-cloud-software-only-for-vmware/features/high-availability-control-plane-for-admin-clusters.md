---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.110Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "High availability control plane for admin clusters"
feature_slug: "high-availability-control-plane-for-admin-clusters"
latest_feature_date: "2023-05-02"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
keywords:
  - "high"
  - "availability"
  - "control"
  - "plane"
  - "admin"
  - "clusters"
  - "anthos"
  - "vmware"
---

# High availability control plane for admin clusters

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Anthos clusters on VMware adds preview support for a high-availability control plane in admin clusters.

## Extended Definition

In Google Distributed Cloud (software-only) for VMware, a high-availability control plane for an admin cluster is implemented by running three control-plane nodes (adminMaster.replicas) for admin clusters on version 1.28 and higher, and this configuration is required for new clusters on those versions. The HA control plane is configured via admin cluster settings such as adminMaster, load balancer mode, controlPlaneLoadBalancer, controlPlaneVIP, and controlPlaneIPBlock to support Kubernetes API control-plane traffic. The documentation states that unavailability of the admin cluster control plane does not affect existing user cluster functionality or workloads.

## Evidence Summary

These pages provide consistent evidence that admin clusters require a three-node HA control plane on supported versions and outline the required configuration fields for control-plane networking/load balancing in that HA setup.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)

## Supporting Pages

### "High availability and disaster recovery \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery)
- Source ID: `site-docs-reference-2`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: The page provides HA guidance and topology details for control planes, yet it does not mention preview status or explicit admin-cluster HA control-plane rollout details.

Evidence snippets:
- Note that unavailability of the admin cluster control plane doesn't affect existing user cluster functionality or any workloads running in user clusters.
- In the admin cluster, the admin master manages the admin worker nodes, which include user masters (nodes running the control plane of the managed user clusters) and addon nodes (nodes running the addon components supporting the admin cluster's functionality).
- Core functionality Architecture with highly-available user clusters (Click to enlarge) A software-only installation of Google Distributed Cloud for VMware includes an admin cluster and one or more user clusters.
- Legacy HA user clusters that don't have Controlplane V2 enabled run the three control plane nodes in the admin cluster.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Example: adminMaster: memoryMB: 16384 adminMaster.replicas 1.28 and higher Required for new clusters Immutable Integer Possible values: 3 The number of control-plane nodes in the admin cluster.
- Admin clusters created in version 1.28 and higher must be highly available (HA) with three control plane nodes.
- Additionally, you must set loadBalancer.kind in your configuration file even though the field is a no-op in 1.32 and higher. adminMaster.controlPlaneLoadBalancer.mode Optional Immutable String Default: Depends on whether the cluster uses topology domains The kind of load balancer that you can use depends on whether you will set up the cluster to use topology domains .
- Example: antiAffinityGroups: enabled: true adminMaster Immutable Configuration settings for the control-plane nodes in the admin cluster. adminMaster.controlPlaneLoadBalancer 1.32 and higher Optionally, include this section to specify the kind of load balancer to use for control-plane traffic in the admin cluster.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Example: adminMaster: memoryMB: 16384 adminMaster.replicas Required for new clusters Immutable Integer Possible values: 3 The number of control-plane nodes in the admin cluster.
- Uncomment the corresponding field below to provide the detailed spec kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 # (Required when using "F5BigIP" kind) Specify the already-existing partition and # credentials f5BigIP: address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" partition: "" # # (Optional) Specify a pool name if using SNAT # snatPoolName: "" # (Only used in 1.16 and older versions for using "Seesaw" kind) Specify the Seesaw # configs seesaw: # (Required) The absolute or relative path to the yaml file to use for IP allocation # for LB VMs.
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "F5BigIP" "Seesaw" "ManualLB" or "MetalLB".
- Example: network: controlPlaneIPBlock: ips: - ip: "172.16.22.6" hostname: "admin-cp-vm-1" - ip: "172.16.22.7" hostname: "admin-cp-vm-2" - ip: "172.16.22.8" hostname: "admin-cp-vm-3" loadBalancer This section holds information about the load balancer for your admin cluster. loadBalancer.vips.controlPlaneVIP Required Immutable String The IP address that you have chosen to configure on the load balancer for the Kubernetes API server of the admin cluster.

