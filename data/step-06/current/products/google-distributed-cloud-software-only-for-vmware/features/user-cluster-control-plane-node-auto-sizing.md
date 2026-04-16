---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.208Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "User cluster control-plane node auto sizing"
feature_slug: "user-cluster-control-plane-node-auto-sizing"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
keywords:
  - "user"
  - "cluster"
  - "control"
  - "plane"
  - "node"
  - "auto"
  - "sizing"
  - "nodes"
---

# User cluster control-plane node auto sizing

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

User cluster control-plane nodes automatically resize in proportion to the number of node pool nodes in the cluster.

## Extended Definition

The feature appears to be an optional control-plane auto-resizing capability expressed via an `autoResize` setting in the cluster configuration for Google Distributed Cloud (software-only) for VMware, shown in the addon/master node configuration area. The documentation indicates this setting controls whether automatic resize is enabled for master-related nodes, and the control-plane node settings are part of immutable cluster configuration defined in the admin cluster config. However, the provided excerpts do not explicitly confirm the exact policy behavior (for example, automatic resizing specifically in proportion to user node pool size).

## Evidence Summary

The cited page snippet shows an `autoResize` option and master/control-plane configuration fields in the admin cluster configuration, but does not provide explicit confirmation of the full proportional auto-sizing behavior described in the feature summary.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)

## Supporting Pages

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Uncomment the corresponding field below to provide the detailed spec kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 # (Required when using "F5BigIP" kind) Specify the already-existing partition and # credentials f5BigIP: address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" partition: "" # # (Optional) Specify a pool name if using SNAT # snatPoolName: "" # (Only used in 1.16 and older versions for using "Seesaw" kind) Specify the Seesaw # configs seesaw: # (Required) The absolute or relative path to the yaml file to use for IP allocation # for LB VMs.
- It is supported in GKE on-prem version # 1.7+. (default: false) disableVRRPMAC: true Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true (Optional) Specify the admin master node configuration which can be added or edited only during cluster creation (default: 4 CPUs; 16384 MB memory; 3 replicas) adminMaster: cpus: 4 memoryMB: 16384 How many machines of this type to deploy replicas: 3 # (Only used in 1.16 and older versions) Specify the addon node configuration which # can be added or edited only during cluster creation addonNode: # Enable auto resize for addon node autoResize: # Whether to enable auto resize for master.
- If you do not have DRS enabled, or if you do not have at least four hosts where vSphere VMs can be scheduled, set antiAffinityGroups.enabled to false . adminMaster Immutable Configuration settings for the control-plane nodes in the admin cluster. adminMaster.cpus Preview Optional Immutable Integer Prepopulated: 4 Default: 4 The number of vCPUs for each control-plane node in the admin cluster.
- In particular, the Service and Pod ranges must not overlap with: IP addresses of nodes in any cluster IP addresses used by load balancer machines VIPs used by control-plane nodes and load balancers IP address of vCenter servers, DNS servers, and NTP servers We recommend that your Service and Pod ranges be in the RFC 1918 address space.

