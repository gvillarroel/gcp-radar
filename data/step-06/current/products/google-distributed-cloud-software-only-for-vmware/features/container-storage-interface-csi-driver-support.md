---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.285Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Container Storage Interface (CSI) driver support"
feature_slug: "container-storage-interface-csi-driver-support"
latest_feature_date: "2019-12-20"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
keywords:
  - "container"
  - "storage"
  - "interface"
  - "csi"
  - "driver"
  - "drivers"
  - "let"
  - "kubernetes"
---

# Container Storage Interface (CSI) driver support

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

CSI drivers let Kubernetes use storage devices that are not natively supported by Kubernetes.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, Container Storage Interface (CSI) driver support refers to using the vSphere CSI driver (`csi.vsphere.vmware.com`) in Kubernetes clusters to provision persistent volumes on vSphere storage. The platform also supports third-party CSI drivers, which can be used by creating StorageClasses that reference a different storage driver, enabling additional external block or file storage integrations beyond vSphere datastores. The cluster documentation notes that the vSphere CSI driver is enabled by default in the default service set, with user-cluster setup indicating it as an enablement option.

## Evidence Summary

These official Google Distributed Cloud VMware pages describe built-in vSphere CSI integration, example StorageClass usage with the vSphere provisioner, third-party CSI extensibility, and default-enabled driver behavior.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)

## Supporting Pages

### "Storage \_|\_ Google Distributed Cloud (software only) for VMware \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage)
- Source ID: `site-docs-reference-2`
- Final score: 189
- Re-rank relevance: STRONG
- Re-rank rationale: The page describes storage integration through a vSphere CSI driver and third-party CSI drivers, directly indicating CSI driver-based storage support.

Evidence snippets:
- Summary Google Distributed Cloud integrates with external block or file storage systems through: The vSphere Container Storage Interface (CSI) driver Third party CSI drivers Kubernetes in-tree volume plugins vSphere datastores When you create an admin cluster, you specify an existing vSphere datastore for the cluster's etcd data.
- Further reading Persistent volumes in Google Kubernetes Engine Persistent Volumes Storage Classes Container Storage Interface in Kubernetes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can also see the URL of a vSphere datastore: apiVersion: storage.k8s.io/v1 kind: StorageClass metadata: annotations: storageclass.kubernetes.io/is-default-class: "true" ... labels: bundle.gke.io/component-name: user-vsphere-csi-driver-addon ... name: standard-rwo ... parameters: datastoreURL: ds:///vmfs/volumes/vsan:52fb6ca22be2454e-e67f620175964a9f/ provisioner: csi.vsphere.vmware.com ...
- Using third party drivers If you want to provision storage volumes other than vSphere datastores, you can create a new StorageClass in a cluster that uses a different storage driver.

### "Storage \_|\_ Google Distributed Cloud (software only) for VMware \_|\_\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage)
- Source ID: `site-docs-reference-3`
- Final score: 189
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly describes support for external storage via the vSphere CSI driver and third-party CSI drivers as part of the platform's storage model.

Evidence snippets:
- Summary Google Distributed Cloud integrates with external block or file storage systems through: The vSphere Container Storage Interface (CSI) driver Third party CSI drivers Kubernetes in-tree volume plugins vSphere datastores When you create an admin cluster, you specify an existing vSphere datastore for the cluster's etcd data.
- Further reading Persistent volumes in Google Kubernetes Engine Persistent Volumes Storage Classes Container Storage Interface in Kubernetes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can also see the URL of a vSphere datastore: apiVersion: storage.k8s.io/v1 kind: StorageClass metadata: annotations: storageclass.kubernetes.io/is-default-class: "true" ... labels: bundle.gke.io/component-name: user-vsphere-csi-driver-addon ... name: standard-rwo ... parameters: datastoreURL: ds:///vmfs/volumes/vsan:52fb6ca22be2454e-e67f620175964a9f/ provisioner: csi.vsphere.vmware.com ...
- Using third party drivers If you want to provision storage volumes other than vSphere datastores, you can create a new StorageClass in a cluster that uses a different storage driver.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- The Container Storage Interface (CSI) driver runs in a Kubernetes cluster deployed in vSphere to provision persistent volumes on vSphere storage.
- For more information, see Using the vSphere Container Storage Interface driver .
- For more information, see Using the vSphere Container Storage Interface driver .
- The following are enabled automatically and can't be disabled: Cloud Logging of system services Cloud Monitoring of system services The Admin Activity audit log The following are enabled by default, but you can disable them: Enable vSphere CSI driver : Also called the vSphere Container Storage Plug-in.

