---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.286Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Default cluster node Kubernetes version 1.14.7-gke.24"
feature_slug: "default-cluster-node-kubernetes-version-1-14-7-gke-24"
latest_feature_date: "2019-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "default"
  - "cluster"
  - "node"
  - "kubernetes"
  - "version"
  - "14"
  - "gke"
  - "24"
---

# Default cluster node Kubernetes version 1.14.7-gke.24

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

New cluster nodes default to Kubernetes version 1.14.7-gke.24.

## Extended Definition

The feature is a default-version behavior for Google Distributed Cloud (software only) for VMware clusters, whereby newly provisioned cluster nodes are intended to run Kubernetes version 1.14.7-gke.24 by default. In the provided official documentation excerpts, this specific version default is not directly shown; the excerpts mainly document admin-cluster configuration fields such as control-plane node CPU/memory defaults, replica counts, and related bundle examples.

## Evidence Summary

The cited pages describe admin cluster configuration options and defaults for control-plane nodes and load balancer/bundle settings, but they do not explicitly document that new nodes default to Kubernetes version 1.14.7-gke.24.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- It is supported in GKE on-prem version # 1.7+. (default: false) disableVRRPMAC: true Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true (Optional) Specify the admin master node configuration which can be added or edited only during cluster creation (default: 4 CPUs; 16384 MB memory; 3 replicas) adminMaster: cpus: 4 memoryMB: 16384 How many machines of this type to deploy replicas: 3 # (Only used in 1.16 and older versions) Specify the addon node configuration which # can be added or edited only during cluster creation addonNode: # Enable auto resize for addon node autoResize: # Whether to enable auto resize for master.
- Uncomment the corresponding field below to provide the detailed spec kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 # (Required when using "F5BigIP" kind) Specify the already-existing partition and # credentials f5BigIP: address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" partition: "" # # (Optional) Specify a pool name if using SNAT # snatPoolName: "" # (Only used in 1.16 and older versions for using "Seesaw" kind) Specify the Seesaw # configs seesaw: # (Required) The absolute or relative path to the yaml file to use for IP allocation # for LB VMs.
- If you do not have DRS enabled, or if you do not have at least four hosts where vSphere VMs can be scheduled, set antiAffinityGroups.enabled to false . adminMaster Immutable Configuration settings for the control-plane nodes in the admin cluster. adminMaster.cpus Preview Optional Immutable Integer Prepopulated: 4 Default: 4 The number of vCPUs for each control-plane node in the admin cluster.
- When you create an admin workstation, it comes with a full bundle at: /var/lib/gke/bundles/gke-onprem-vsphere- VERSION -full.tgz Example: bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.10.0-gke.8.full.tgz" preparedSecrets.enabled Preview Optional Immutable Boolean Prepopulated: false Default: false Set this to true if you want to use prepared credentials in the admin cluster.

### "Admin cluster configuration file 1.29 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Uncomment the corresponding field below to provide the detailed spec kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 # (Required when using "F5BigIP" kind) Specify the already-existing partition and # credentials f5BigIP: address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" partition: "" # # (Optional) Specify a pool name if using SNAT # snatPoolName: "" # (Only used in 1.16 and older versions for using "Seesaw" kind) Specify the Seesaw # configs seesaw: # (Required) The absolute or relative path to the yaml file to use for IP allocation # for LB VMs.
- If you do not have DRS enabled, or if you do not have at least four hosts where vSphere VMs can be scheduled, set antiAffinityGroups.enabled to false . adminMaster Immutable Configuration settings for the control-plane nodes in the admin cluster. adminMaster.cpus Preview Optional Immutable Integer Prepopulated: 4 Default: 4 The number of vCPUs for each control-plane node in the admin cluster.
- The replicas field has to be 3 for new admin cluster creation adminMaster: cpus: 4 memoryMB: 16384 How many machines of this type to deploy replicas: 3 # (Only used in 1.16 and older versions) Specify the addon node configuration which # can be added or edited only during cluster creation addonNode: # Enable auto resize for addon node autoResize: # Whether to enable auto resize for master.
- When you create an admin workstation, it comes with a full bundle at: /var/lib/gke/bundles/gke-onprem-vsphere- VERSION -full.tgz Example: bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.10.0-gke.8.full.tgz" preparedSecrets.enabled Preview Optional Immutable Boolean Prepopulated: false Default: false Set this to true if you want to use prepared credentials in the admin cluster.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "ManualLB" or "MetalLB". kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true Specify the admin master node configuration (default: 4 CPUs; 16384 MB memory; 3 replicas).
- Default value is bundled for advanced cluster without topology # # domains; and is manual for advanced cluster with topology domains. # mode: "" # (Only used in 1.16 and older versions) Specify the addon node configuration which # can be added or edited only during cluster creation addonNode: # Enable auto resize for addon node autoResize: # Whether to enable auto resize for master.
- Example: secretsEncryption: generatedKey: disabled: false osImageType Optional Mutable String Possible values: "ubuntu containerd", "cos", "ubuntu cgv2", "cos cgv2" Prepopulated: "ubuntu cgv2" Default: "ubuntu containerd" The type of OS image to run on your admin cluster nodes.
- Instead, use loadBalancer.kind to specify the kind of load balancer for the admin cluster to use. adminMaster.cpus Preview Optional Immutable Integer Prepopulated: 4 Default: 4 The number of vCPUs for each control-plane node in the admin cluster.

