---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.062Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "vSphere datastore disk migration with SPBM"
feature_slug: "vsphere-datastore-disk-migration-with-spbm"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "vsphere"
  - "datastore"
  - "disk"
  - "migration"
  - "spbm"
  - "disks"
  - "can"
  - "migrated"
---

# vSphere datastore disk migration with SPBM

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Disks can be migrated from one vSphere datastore to another using SPBM.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, a vSphere datastore migration to Storage Policy Based Management (SPBM) is performed by configuring the admin cluster vCenter settings so that `vCenter.datastore` is set to an empty value, which is the documented exception to normal immutability rules. During that migration, a VM storage policy (`vCenter.storagePolicyName`) must be used instead because the datastore field cannot otherwise be specified or changed.

## Evidence Summary

The official configuration documentation explicitly documents SPBM migration behavior: `vCenter.datastore` is immutable except when set to empty for datastore-to-SPBM migration, and `vCenter.storagePolicyName` is required when datastore is not specified.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Running preflight checks \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- In this example, the configuration being validated uses integrated load balancing mode and static IPs without an external Docker registry: - Validation Category: Config Check - [SUCCESS] Config - Validation Category: Internet Access - [SUCCESS] Internet access to required domains - Validation Category: GCP - [SUCCESS] GCP Service - [SUCCESS] GCP Service Account - Validation Category: Docker Registry - [SUCCESS] gcr.io/gke-on-prem-release access - Validation Category: vCenter - [SUCCESS] Credentials - [SUCCESS] Version - [SUCCESS] Datacenter - [SUCCESS] Datastore - [SUCCESS] Data Disk - [SUCCESS] Resource Pool - [SUCCESS] Network - [SUCCESS] VSphere CSI Driver - Validation Category: F5 BIG-IP - [SUCCESS] Admin Cluster F5 (credentials, partition and user role) - [SUCCESS] User Cluster F5 (credentials, partition and user role) - Validation Category: Network Configuration - [SUCCESS] CIDR, VIP and static IP (availability and overlapping) - Validation Category: DNS - [SUCCESS] DNS (availability) - Validation Category: VIPs - [SUCCESS] ping (availability) - Validation Category: Node IPs - [SUCCESS] ping (availability) Now running slow validation checks. ...
- Annotations in statically created vSphere in-tree PersistentVolume and PersistentVolumeClaims Before upgrade, checks annotations in vSphere in-tree PersistentVolumes and vSphere PersistentVolumeClaims: The statically created vSphere in-tree PersistentVolumes have the annotation pv.kubernetes.io/provisioned-by: kubernetes.io/vsphere-volume The statically created vSphere PersistentVolumesClaims have the annotation volume.beta.kubernetes.io/storage-provisioner: kubernetes.io/vsphere-volume and volume.kubernetes.io/storage-provisioner: kubernetes.io/vsphere-volume If your cluster has vSphere in-tree PersistentVolumes or vSphere PersistentVolumeClaims without these annotations, you must annotate the PersistentVolumes and PersistentVolumeClaims before continuing, see Considerations for Migration of In-Tree vSphere Volumes .
- StorageClass parameters Validates that the StorageClass don't have any of the following unsupported parameters: hostfailurestotolerate forceprovisioning cachereservation diskstripes objectspacereservation iopslimit diskformat If your cluster has StorageClasses with any of the preceding parameters that might mean that you need to migrate your volumes.
- For more information, see Considerations for Migration of In-Tree vSphere Volumes and the known issues section about upgrades in 1.15 .

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- You configure this information in the vSphere infrastructure configuration file per topology domain. vCenter : remove the entire vCenter section. network.hostConfig : remove the entire network.hostConfig section. network.vCenter.networkName : remove this field. masterNode.vsphere : remove the entire section. nodePools[i].vsphere.datastore and nodePools[i].vsphere.storagePolicyName : remove these fields.
- Do not specify # it together with storagePolicyName datastore: "" Provide the path to vCenter CA certificate pub key for SSL verification caCertPath: "" The credentials to connect to vCenter credentials: reference to external credentials file fileRef: read credentials from this file path: "" entry in the credential file entry: "" (Optional) vSphere folder where cluster VMs will be located.
- Invalid for HA admin cluster as the path is generated automatically under # the root directory "anthos" in the specified datastore. dataDisk: "" (Required) Network configuration network: (Required when using "static" ipMode.type; or "Seesaw" loadBalancer.kind; or using amdin cluster HA mode) This section overrides ipMode.ipBlockFilePath values when ipMode.type=static.
- The vCenter.datastore field is immutable except when you set the field to an empty string when you migrate a datastore to Storage Policy Based Management (SPBM) . vCenter.storagePolicyName Required if vCenter.datastore isn't specified Immutable String The name of a VM storage policy for the cluster nodes.

### "Plan cluster migration to recommended features \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Before migration After migration Control-plane node replicas 1 3 Add-on nodes 2 0 Data disk size 100GB 1 25GB 3 Data disks path Set by vCenter.dataDisk in the admin cluster configuration file Auto generated under the directory: /anthos/[ADMIN CLUSTER NAME]/default/[MACHINE NAME]-data.vmdk Control Plane VIP Set by loadBalancer.kind in the admin cluster configuration file keepalived + haproxy Allocation of IP addresses for admin cluster control-plane nodes DHCP or static, depending on network.ipMode.type 3 static IP addresses Group load balancer and control plane migrations Typically, when updating clusters, we recommend that you update only one feature or setting at a time .
- Before migration After migration Control Plane Kubernetes Node Objects Admin cluster Node User cluster Node Kubernetes Control Plane Pods Admin cluster Statefulsets/Deployments (user cluster namespace) User cluster static pods (kube-system namespace) Other Control Plane Pods Admin cluster Statefulsets/Deployments (user cluster namespace) User cluster Statefulsets/Deployments (kube-system namespace) Control Plane VIP Admin cluster Load Balancer Service keepalived + haproxy (user cluster static pods) Etcd Data Admin cluster Persistent Volume Data disk Control Plane Machine IP Management IPAM or DHCP IPAM Control Plane Network Admin cluster VLAN User cluster VLAN Migrate to an HA admin cluster Historically, the admin cluster could only run a single control-plane node, creating an inherent risk of a single point of failure.
- The following tables show the support matrix for these features in admin and user clusters: Cluster type Outdated feature Add for new cluster Allow for cluster upgrade Migration to new feature Version 1.32 and higher Admin Non-HA No No N/A Seesaw No No N/A Integrated F5 Big IP No No N/A User Kubeception No No N/A Seesaw No No N/A Integrated F5 Big IP No No N/A Dataplane V1 No No N/A Version 1.30 and 1.31 Admin Non-HA No Yes Yes Seesaw No Yes Yes Integrated F5 Big IP No Yes Yes User Kubeception No Yes Yes Seesaw No Yes Yes Integrated F5 Big IP No Yes Yes Dataplane V1 No Yes Yes Version 1.29 Admin Non-HA No Yes Yes ( Preview ) Seesaw No Yes Yes Integrated F5 Big IP Yes Yes Yes ( Preview ) User Kubeception Yes Yes Yes ( Preview ) Seesaw Yes Yes Yes Integrated F5 Big IP Yes Yes Yes ( Preview ) Dataplane V1 Yes Yes No Version 1.28 Admin Non-HA No Yes No Seesaw No Yes Yes Integrated F5 Big IP Yes Yes No User Kubeception Yes Yes No Seesaw Yes Yes Yes Integrated F5 Big IP Yes Yes No Dataplane V1 Yes Yes No Key points : Starting with version 1.30, all migration solutions are available to migrate clusters to their recommended alternatives.
- Before migration After migration LB nodes Extra Seesaw VMs (outside of cluster) In-cluster LB nodes with customer choices Client IP Preservation Can be achieved via externalTrafficPolicy: Local Can be achieved via DataplaneV2 DSR mode Service creation Manually specified Service IP Auto-assigned Service IP from address pool Migrate user clusters to Controlplane V2 and admin clusters to HA The recommended control plane for user clusters is Controlplane V2.

