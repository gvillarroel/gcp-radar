---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.176Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Admin cluster registration during creation"
feature_slug: "admin-cluster-registration-during-creation"
latest_feature_date: "2021-12-22"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29"
keywords:
  - "admin"
  - "cluster"
  - "registration"
  - "during"
  - "creation"
  - "you"
  - "can"
  - "register"
---

# Admin cluster registration during creation

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

You can register an admin cluster during its creation by configuring gkeConnect; You can register an admin cluster during its creation by configuring gkeConnect.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, admin cluster registration during creation is the capability to provide a `gkeConnect` section in the admin cluster configuration file so the cluster is automatically registered to a Google Cloud Fleet when creation is complete. The feature is operationally tied to registration fields in that section (such as `projectID` and `registerServiceAccountKeyPath`) and is described together with requirements and validations used during cluster lifecycle operations.

## Evidence Summary

The cited Google docs for admin cluster configuration files state that filling the `gkeConnect` section makes an admin cluster auto-register to Fleet after creation and document its required registration fields and associated creation/update behavior.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)

## Supporting Pages

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- It is supported in GKE on-prem version # 1.7+. (default: false) disableVRRPMAC: true Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true (Optional) Specify the admin master node configuration which can be added or edited only during cluster creation (default: 4 CPUs; 16384 MB memory; 3 replicas) adminMaster: cpus: 4 memoryMB: 16384 How many machines of this type to deploy replicas: 3 # (Only used in 1.16 and older versions) Specify the addon node configuration which # can be added or edited only during cluster creation addonNode: # Enable auto resize for addon node autoResize: # Whether to enable auto resize for master.
- This will default to a random name prefixed with 'gke-admin-' name: "" (Required) Absolute path to a GKE bundle on disk bundlePath: "" # (Optional/Preview) Specify the prepared secret configuration which can be added # or edited only during cluster creation preparedSecrets: # enable prepared credentials for the admin cluster; it is immutable enabled: false (Required) vCenter configuration vCenter: address: "" datacenter: "" cluster: "" Resource pool to use.
- During cluster creation or update, several RBAC policies are configured on the admin cluster.
- For information about the Seesaw load balancer, see the 1.16 documentation: Admin cluster configuration file Seesaw load balancer antiAffinityGroups.enabled Optional Mutable Boolean Prepopulated: true Set this to true to enable DRS rule creation.

### "Admin cluster configuration file 1.29 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- This will default to a random name prefixed with 'gke-admin-' name: "" (Required) Absolute path to a GKE bundle on disk bundlePath: "" # (Optional/Preview) Specify the prepared secret configuration which can be added # or edited only during cluster creation preparedSecrets: # enable prepared credentials for the admin cluster; it is immutable enabled: false (Required) vCenter configuration vCenter: address: "" datacenter: "" cluster: "" Resource pool to use.
- The replicas field has to be 3 for new admin cluster creation adminMaster: cpus: 4 memoryMB: 16384 How many machines of this type to deploy replicas: 3 # (Only used in 1.16 and older versions) Specify the addon node configuration which # can be added or edited only during cluster creation addonNode: # Enable auto resize for addon node autoResize: # Whether to enable auto resize for master.
- During cluster creation or update, several RBAC policies are configured on the admin cluster.
- Although we still support Seesaw for non-HA admin clusters that have been upgraded, we recommend that you migrate to MetalLB . antiAffinityGroups.enabled Optional Mutable Boolean Prepopulated: true Set this to true to enable DRS rule creation.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Require advanced cluster is enabled infraConfigFilePath: "" # (Optional/Preview) Specify the prepared secret configuration which can be added # or edited only during cluster creation preparedSecrets: # enable prepared credentials for the admin cluster; it is immutable enabled: false (Required) vCenter configuration vCenter: address: "" datacenter: "" cluster: "" Resource pool to use.
- During cluster creation or update, several RBAC policies are configured on the admin cluster.
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "ManualLB" or "MetalLB". kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true Specify the admin master node configuration (default: 4 CPUs; 16384 MB memory; 3 replicas).
- Default value is bundled for advanced cluster without topology # # domains; and is manual for advanced cluster with topology domains. # mode: "" # (Only used in 1.16 and older versions) Specify the addon node configuration which # can be added or edited only during cluster creation addonNode: # Enable auto resize for addon node autoResize: # Whether to enable auto resize for master.

