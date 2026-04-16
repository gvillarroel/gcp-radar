---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.296Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Default storage class configuration"
feature_slug: "default-storage-class-configuration"
latest_feature_date: "2019-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/default-storage-class"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "default"
  - "storage"
  - "class"
  - "configuration"
  - "clusters"
  - "can"
  - "configured"
---

# Default storage class configuration

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Clusters can be configured with a default storage class.

## Extended Definition

In Google Distributed Cloud (software) for VMware, the default StorageClass is configured via StorageClass metadata using the Kubernetes annotation `storageclass.kubernetes.io/is-default-class: "true"`, which determines which StorageClass is used by default for storage requests. The feature is managed by updating Kubernetes StorageClass objects (for example, removing the annotation from the current default and creating or marking another StorageClass as default). The admin cluster configuration references a storage policy setting that is described as being used for cluster VM storage and the default StorageClass.

## Evidence Summary

The cited pages together show the annotation-based method to set and switch the Kubernetes default StorageClass and a cluster configuration option tied to datastore/default StorageClass selection.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/default-storage-class](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/default-storage-class)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Setting the default StorageClass \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/default-storage-class](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/default-storage-class)
- Source ID: `site-docs-reference-required-4`
- Final score: 195
- Re-rank relevance: STRONG
- Re-rank rationale: The page is explicitly about identifying and changing the default StorageClass, and states that unqualified storage requests use the cluster’s default class.

Evidence snippets:
- Remove the default annotation from the default StorageClass Open the default StorageClass in a text editor: kubectl --kubeconfig [USER CLUSTER KUBECONFIG] edit storageclass \ DEFAULT STORAGE CLASS In the text editor, remove the storageclass.kubernetes.io/is-default-class: "true" annotation.
- For example, in the following output, you can see that a StorageClass named standard-rwo is the default StorageClass: standard kubernetes.io/vsphere-volume standard-rwo (default) csi.vsphere.vmware.com When you request storage, you can specify a StorageClass.
- To verify that the annotation was removed, enter this command: kubectl --kubeconfig [USER CLUSTER KUBECONFIG] get storageclass \ DEFAULT STORAGE CLASS --output yaml Create a new StorageClass Create a manifest for a new StorageClass .
- For example: apiVersion: storage.k8s.io/v1 kind: StorageClass metadata: annotations: storageclass.kubernetes.io/is-default-class: "true" ... name: my-storage-class ... parameters: ... provisioner: [MY PROVISIONER] ...

### "Admin cluster configuration file 1.29 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Specify [VSPHERE CLUSTER NAME]/Resources to use the default resource pool resourcePool: "" Storage policy to use for cluster VM storage and default StorageClass.
- Do not specify it together with datastore storagePolicyName: "" # Datastore to use for cluster VM storage and default StorageClass.
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.
- This will default to a random name prefixed with 'gke-admin-' name: "" (Required) Absolute path to a GKE bundle on disk bundlePath: "" # (Optional/Preview) Specify the prepared secret configuration which can be added # or edited only during cluster creation preparedSecrets: # enable prepared credentials for the admin cluster; it is immutable enabled: false (Required) vCenter configuration vCenter: address: "" datacenter: "" cluster: "" Resource pool to use.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- 1.31 and higher Available for new clusters only Preview Array of strings Allows only one element Optional Immutable Default: vSphereInfraConfig.defaultTopologyDomain if specified in the vSphere infrastructure configuration file An array of topology domains.
- Specify [VSPHERE CLUSTER NAME]/Resources to use the default resource pool resourcePool: "" Storage policy to use for cluster VM storage and default StorageClass.
- Do not specify it together with datastore storagePolicyName: "" # Datastore to use for cluster VM storage and default StorageClass.
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "ManualLB" or "MetalLB". kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true Specify the admin master node configuration (default: 4 CPUs; 16384 MB memory; 3 replicas).

