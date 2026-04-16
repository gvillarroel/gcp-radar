---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.223Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "vSphere CSI driver"
feature_slug: "vsphere-csi-driver"
latest_feature_date: "2021-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks"
keywords:
  - "vsphere"
  - "csi"
  - "driver"
  - "generally"
  - "available"
  - "storage"
  - "provisioning"
  - "preview"
---

# vSphere CSI driver

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The vSphere CSI driver is generally available for storage provisioning; The vSphere CSI driver is available in preview.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, the vSphere CSI driver is the CSI-based storage provisioner used by Kubernetes through the `csi.vsphere.vmware.com` StorageClass provisioner, including the default `standard-rwo` StorageClass. It enables provisioning on vSphere datastores and is documented as part of the platform’s storage integration options, with support for additional third-party CSI drivers when clusters require other storage backends. During environment preflight, the system checks that the vSphere CSI driver is enabled when vSphere in-tree or CSI vSphere PersistentVolumes/PVCs are present.

## Evidence Summary

The storage and preflight pages confirm the vSphere CSI driver’s role as the `csi.vsphere.vmware.com` provisioner in the default StorageClass flow and its validation during cluster prechecks, but they do not explicitly confirm broader lifecycle labels such as GA versus preview.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)

## Supporting Pages

### "Storage \_|\_ Google Distributed Cloud (software only) for VMware \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage)
- Source ID: `site-docs-reference-2`
- Final score: 195
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly states that Google Distributed Cloud (software only) for VMware uses the vSphere CSI driver for storage and identifies it as the provisioner for user-cluster StorageClasses.

Evidence snippets:
- You can also see the URL of a vSphere datastore: apiVersion: storage.k8s.io/v1 kind: StorageClass metadata: annotations: storageclass.kubernetes.io/is-default-class: "true" ... labels: bundle.gke.io/component-name: user-vsphere-csi-driver-addon ... name: standard-rwo ... parameters: datastoreURL: ds:///vmfs/volumes/vsan:52fb6ca22be2454e-e67f620175964a9f/ provisioner: csi.vsphere.vmware.com ...
- Summary Google Distributed Cloud integrates with external block or file storage systems through: The vSphere Container Storage Interface (CSI) driver Third party CSI drivers Kubernetes in-tree volume plugins vSphere datastores When you create an admin cluster, you specify an existing vSphere datastore for the cluster's etcd data.
- To view the standard-rwo StorageClass: kubectl --kubeconfig USER CLUSTER KUBECONFIG get storageclass \ standard-rwo --output yaml In the output, you can see that standard-rwo is the default StorageClass and the provisioner is the vSphere CSI driver, csi.vsphere.vmware.com .
- Using third party drivers If you want to provision storage volumes other than vSphere datastores, you can create a new StorageClass in a cluster that uses a different storage driver.

### "Storage \_|\_ Google Distributed Cloud (software only) for VMware \_|\_\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage)
- Source ID: `site-docs-reference-3`
- Final score: 195
- Re-rank relevance: STRONG
- Re-rank rationale: The page directly states that Google Distributed Cloud for VMware integrates with storage through the vSphere CSI driver and lists a user-cluster StorageClass that uses it as the provisioner.

Evidence snippets:
- You can also see the URL of a vSphere datastore: apiVersion: storage.k8s.io/v1 kind: StorageClass metadata: annotations: storageclass.kubernetes.io/is-default-class: "true" ... labels: bundle.gke.io/component-name: user-vsphere-csi-driver-addon ... name: standard-rwo ... parameters: datastoreURL: ds:///vmfs/volumes/vsan:52fb6ca22be2454e-e67f620175964a9f/ provisioner: csi.vsphere.vmware.com ...
- Summary Google Distributed Cloud integrates with external block or file storage systems through: The vSphere Container Storage Interface (CSI) driver Third party CSI drivers Kubernetes in-tree volume plugins vSphere datastores When you create an admin cluster, you specify an existing vSphere datastore for the cluster's etcd data.
- To view the standard-rwo StorageClass: kubectl --kubeconfig USER CLUSTER KUBECONFIG get storageclass \ standard-rwo --output yaml In the output, you can see that standard-rwo is the default StorageClass and the provisioner is the vSphere CSI driver, csi.vsphere.vmware.com .
- Using third party drivers If you want to provision storage volumes other than vSphere datastores, you can create a new StorageClass in a cluster that uses a different storage driver.

### "Running preflight checks \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Storage vSphere CSI driver Validates that the vSphere CSI driver is enabled if there are intree or CSI vSphere PersistentVolumes.
- In this example, the configuration being validated uses integrated load balancing mode and static IPs without an external Docker registry: - Validation Category: Config Check - [SUCCESS] Config - Validation Category: Internet Access - [SUCCESS] Internet access to required domains - Validation Category: GCP - [SUCCESS] GCP Service - [SUCCESS] GCP Service Account - Validation Category: Docker Registry - [SUCCESS] gcr.io/gke-on-prem-release access - Validation Category: vCenter - [SUCCESS] Credentials - [SUCCESS] Version - [SUCCESS] Datacenter - [SUCCESS] Datastore - [SUCCESS] Data Disk - [SUCCESS] Resource Pool - [SUCCESS] Network - [SUCCESS] VSphere CSI Driver - Validation Category: F5 BIG-IP - [SUCCESS] Admin Cluster F5 (credentials, partition and user role) - [SUCCESS] User Cluster F5 (credentials, partition and user role) - Validation Category: Network Configuration - [SUCCESS] CIDR, VIP and static IP (availability and overlapping) - Validation Category: DNS - [SUCCESS] DNS (availability) - Validation Category: VIPs - [SUCCESS] ping (availability) - Validation Category: Node IPs - [SUCCESS] ping (availability) Now running slow validation checks. ...
- Annotations in statically created vSphere in-tree PersistentVolume and PersistentVolumeClaims Before upgrade, checks annotations in vSphere in-tree PersistentVolumes and vSphere PersistentVolumeClaims: The statically created vSphere in-tree PersistentVolumes have the annotation pv.kubernetes.io/provisioned-by: kubernetes.io/vsphere-volume The statically created vSphere PersistentVolumesClaims have the annotation volume.beta.kubernetes.io/storage-provisioner: kubernetes.io/vsphere-volume and volume.kubernetes.io/storage-provisioner: kubernetes.io/vsphere-volume If your cluster has vSphere in-tree PersistentVolumes or vSphere PersistentVolumeClaims without these annotations, you must annotate the PersistentVolumes and PersistentVolumeClaims before continuing, see Considerations for Migration of In-Tree vSphere Volumes .
- StorageClass parameters Validates that the StorageClass don't have any of the following unsupported parameters: hostfailurestotolerate forceprovisioning cachereservation diskstripes objectspacereservation iopslimit diskformat If your cluster has StorageClasses with any of the preceding parameters that might mean that you need to migrate your volumes.

