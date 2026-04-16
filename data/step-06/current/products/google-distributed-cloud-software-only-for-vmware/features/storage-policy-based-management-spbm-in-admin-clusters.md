---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.075Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "storage policy based management (SPBM) in admin clusters"
feature_slug: "storage-policy-based-management-spbm-in-admin-clusters"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-storage-policy"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29"
keywords:
  - "storage"
  - "policy"
  - "based"
  - "management"
  - "spbm"
  - "admin"
  - "clusters"
---

# storage policy based management (SPBM) in admin clusters

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Admin clusters support storage policy based management (SPBM).

## Extended Definition

In Google Distributed Cloud (software only) for VMware, admin clusters support Storage Policy-Based Management (SPBM) by allowing a VM storage policy to be specified for cluster nodes via `vCenter.storagePolicyName` in the admin cluster configuration, as an alternative to directly setting `vCenter.datastore`. When using SPBM, Google’s docs state that the `vCenter.datastore` field is immutable except when temporarily set to an empty string during migration to SPBM, and the admin cluster must be highly available (HA) to work with a storage policy; the feature is also supported only when the admin cluster does not have Windows node pools. SPBM can be used across multiple datastores so admin cluster storage can be spread among them.

## Evidence Summary

The cited Google Cloud documentation pages define SPBM support for admin clusters, including the required config keys, HA requirement, datastore↔policy migration rule, and datastore distribution behavior.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-storage-policy](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-storage-policy)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)

## Supporting Pages

### "Configure a storage policy \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-storage-policy](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-storage-policy)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: It notes admin clusters can also have storage policies configured, including specific prerequisites, but focuses primarily on general cluster and user-cluster behavior.

Evidence snippets:
- Overview In vSphere, Storage Policy Based Management (SPBM) helps to align storage with the application demands of virtual machines.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Configure a storage policy Stay organized with collections Save and categorize content based on your preferences.
- If you apply a storage policy to multiple datastores, then the storage resources for an admin cluster, user cluster, or node pool can be spread out among the datastores.
- You can also specify a storage policy for an admin cluster as long as the admin cluster has a high-availability control plane and doesn't have any Windows node pools.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- The vCenter.datastore field is immutable except when you set the field to an empty string when you migrate a datastore to Storage Policy Based Management (SPBM) . vCenter.storagePolicyName Required if vCenter.datastore isn't specified Immutable String The name of a VM storage policy for the cluster nodes.
- Example: vCenter: resourcePool: "my-vsphere-cluster/Resources/parent-resource-pool/child-resource-pool" vCenter.datastore Required if vCenter.storagePolicyName isn't specified Immutable String The name of a vSphere datastore for your admin cluster.
- The admin cluster must be highly-available (HA) to work with the storage policy.
- Specify [VSPHERE CLUSTER NAME]/Resources to use the default resource pool resourcePool: "" datastore: "" (Optional) Storage policy to use for cluster VM storage and default StorageClass storagePolicyName: "" Provide the path to vCenter CA certificate pub key for SSL verification caCertPath: "" The credentials to connect to vCenter credentials: reference to external credentials file fileRef: read credentials from this file path: "" entry in the credential file entry: "" (Optional) vSphere folder where cluster VMs will be located.

### "Admin cluster configuration file 1.29 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- The vCenter.datastore field is immutable except when you set the field to an empty string when you migrate a datastore to Storage Policy Based Management (SPBM) . vCenter.storagePolicyName Required if vCenter.datastore isn't specified Immutable String The name of a VM storage policy for the cluster nodes.
- Example: vCenter: resourcePool: "resource-pool-1/resource-pool-2" vCenter.datastore Required if vCenter.storagePolicyName isn't specified Immutable String The name of a vSphere datastore for your admin cluster.
- The admin cluster must be highly-available (HA) to work with the storage policy.
- Do not specify # it together with storagePolicyName datastore: "" Provide the path to vCenter CA certificate pub key for SSL verification caCertPath: "" The credentials to connect to vCenter credentials: reference to external credentials file fileRef: read credentials from this file path: "" entry in the credential file entry: "" (Optional) vSphere folder where cluster VMs will be located.

