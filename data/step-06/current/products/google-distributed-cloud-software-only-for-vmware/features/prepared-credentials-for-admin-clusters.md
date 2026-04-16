---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.070Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "prepared credentials for admin clusters"
feature_slug: "prepared-credentials-for-admin-clusters"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "prepared"
  - "credentials"
  - "admin"
  - "clusters"
  - "can"
  - "use"
  - "cluster"
  - "kubernetes"
---

# prepared credentials for admin clusters

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Admin clusters can use prepared credentials; Admin cluster credentials can be prepared as Kubernetes secrets.

## Extended Definition

Admin clusters in Google Distributed Cloud (software only) for VMware can use an optional (Preview) `preparedSecrets` configuration block with an `enabled` boolean to turn on prepared credentials for the admin cluster. The configuration is optional, defaults to false, and is documented as immutable, with prepared secret configuration allowed to be added or edited only during cluster creation.

## Evidence Summary

These three official docs specify the admin cluster `preparedSecrets.enabled` field, describe that it enables prepared credentials, and state it is optional, immutable, false by default, and only configurable during cluster creation.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 246
- Re-rank relevance: STRONG
- Re-rank rationale: The template explicitly includes `preparedSecrets` and `prepared credentials` fields for admin clusters, directly describing how to configure them.

Evidence snippets:
- This will default to a random name prefixed with 'gke-admin-' name: "" (Required) Absolute path to a GKE bundle on disk bundlePath: "" # (Optional/Preview) Specify the prepared secret configuration which can be added # or edited only during cluster creation preparedSecrets: # enable prepared credentials for the admin cluster; it is immutable enabled: false (Required) vCenter configuration vCenter: address: "" datacenter: "" cluster: "" Resource pool to use.
- When you create an admin workstation, it comes with a full bundle at: /var/lib/gke/bundles/gke-onprem-vsphere- VERSION -full.tgz Example: bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.10.0-gke.8.full.tgz" preparedSecrets.enabled Preview Optional Immutable Boolean Prepopulated: false Default: false Set this to true if you want to use prepared credentials in the admin cluster.
- Uncomment the corresponding field below to provide the detailed spec kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 # (Required when using "F5BigIP" kind) Specify the already-existing partition and # credentials f5BigIP: address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" partition: "" # # (Optional) Specify a pool name if using SNAT # snatPoolName: "" # (Only used in 1.16 and older versions for using "Seesaw" kind) Specify the Seesaw # configs seesaw: # (Required) The absolute or relative path to the yaml file to use for IP allocation # for LB VMs.
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "F5BigIP" "Seesaw" "ManualLB" or "MetalLB".

### "Admin cluster configuration file 1.29 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- Source ID: `site-docs-reference`
- Final score: 246
- Re-rank relevance: STRONG
- Re-rank rationale: The configuration template includes a `preparedSecrets` field specifically for prepared admin-cluster credentials, showing how to enable them.

Evidence snippets:
- This will default to a random name prefixed with 'gke-admin-' name: "" (Required) Absolute path to a GKE bundle on disk bundlePath: "" # (Optional/Preview) Specify the prepared secret configuration which can be added # or edited only during cluster creation preparedSecrets: # enable prepared credentials for the admin cluster; it is immutable enabled: false (Required) vCenter configuration vCenter: address: "" datacenter: "" cluster: "" Resource pool to use.
- When you create an admin workstation, it comes with a full bundle at: /var/lib/gke/bundles/gke-onprem-vsphere- VERSION -full.tgz Example: bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.10.0-gke.8.full.tgz" preparedSecrets.enabled Preview Optional Immutable Boolean Prepopulated: false Default: false Set this to true if you want to use prepared credentials in the admin cluster.
- Uncomment the corresponding field below to provide the detailed spec kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 # (Required when using "F5BigIP" kind) Specify the already-existing partition and # credentials f5BigIP: address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" partition: "" # # (Optional) Specify a pool name if using SNAT # snatPoolName: "" # (Only used in 1.16 and older versions for using "Seesaw" kind) Specify the Seesaw # configs seesaw: # (Required) The absolute or relative path to the yaml file to use for IP allocation # for LB VMs.
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "F5BigIP" "Seesaw" "ManualLB" or "MetalLB".

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 246
- Re-rank relevance: STRONG
- Re-rank rationale: The configuration template explicitly includes `preparedSecrets` and an option to enable prepared credentials for the admin cluster, directly defining how prepared credentials are configured.

Evidence snippets:
- Example: loadBalancer : f5BigIP : credentials : fileRef : path : "my-config-folder/admin-creds.yaml" loadBalancer.f5BigIP.credentialsfileRef.entry 1.30 and higher Not allowed for new clusters Required if loadBalancer.kind = "F5BigIp" Mutable String The name of the credentials block, in your credentials configuration file , that holds the username and password of your F5 BIG-IP account.
- Require advanced cluster is enabled infraConfigFilePath: "" # (Optional/Preview) Specify the prepared secret configuration which can be added # or edited only during cluster creation preparedSecrets: # enable prepared credentials for the admin cluster; it is immutable enabled: false (Required) vCenter configuration vCenter: address: "" datacenter: "" cluster: "" Resource pool to use.
- Example: loadBalancer : f5BigIP : credentials : fileRef : entry : "f5-creds" loadBalancer.f5BigIP.partition 1.30 and higher Not allowed for new clusters Required if loadBalancer.kind = "F5BigIp" Immutable String The name of a BIG-IP partition that you created for your admin cluster.
- Preview Optional Immutable Boolean Prepopulated: false Default: false Set this to true if you want to use prepared credentials in the admin cluster.

