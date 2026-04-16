---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.269Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "vSphere resource metrics collection"
feature_slug: "vsphere-resource-metrics-collection"
latest_feature_date: "2020-06-25"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "vsphere"
  - "resource"
  - "metrics"
  - "collection"
  - "enabled"
  - "default"
---

# vSphere resource metrics collection

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

VSphere resource metrics collection is enabled by default.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, vSphere resource metrics collection is configured via the `stackdriver.disableVsphereResourceMetrics` boolean in the admin cluster configuration file. The setting is optional and defaults to `false`, and setting it to `true` explicitly disables collection of metrics from vSphere, which implies metrics collection is enabled by default when unspecified.

## Evidence Summary

All three official admin cluster configuration pages document `disableVsphereResourceMetrics` with a default of `false` and state that setting it to `true` disables vSphere metrics collection.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Example: stackdriver: serviceAccountKeyPath: "my-key-folder/log-mon-key.json" stackdriver.disableVsphereResourceMetrics Optional Mutable Relevant for Logging and Monitoring Boolean Prepopulated: false Default: false Set this to true to disable the collection of metrics from vSphere.
- It should be the same with gkeconnect.projectID. projectID: "" A GCP region where you would like to store logs and metrics for this cluster. clusterLocation: us-central1 enableVPC: false The absolute or relative path to the key file for a GCP service account used to send logs and metrics from the cluster serviceAccountKeyPath: "" (Optional) Disable vsphere resource metrics collection from vcenter.
- False by default disableVsphereResourceMetrics: false (Optional) Configure kubernetes apiserver audit logging cloudAuditLogging: The project ID for logs and metrics.
- Specify [VSPHERE CLUSTER NAME]/Resources to use the default resource pool resourcePool: "" datastore: "" (Optional) Storage policy to use for cluster VM storage and default StorageClass storagePolicyName: "" Provide the path to vCenter CA certificate pub key for SSL verification caCertPath: "" The credentials to connect to vCenter credentials: reference to external credentials file fileRef: read credentials from this file path: "" entry in the credential file entry: "" (Optional) vSphere folder where cluster VMs will be located.

### "Admin cluster configuration file 1.29 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Example: stackdriver: serviceAccountKeyPath: "my-key-folder/log-mon-key.json" stackdriver.disableVsphereResourceMetrics Optional Mutable Relevant for Logging and Monitoring Boolean Prepopulated: false Default: false Set this to true to disable the collection of metrics from vSphere.
- It should be the same with gkeconnect.projectID. projectID: "" A GCP region where you would like to store logs and metrics for this cluster. clusterLocation: us-central1 enableVPC: false The absolute or relative path to the key file for a GCP service account used to send logs and metrics from the cluster serviceAccountKeyPath: "" (Optional) Disable vsphere resource metrics collection from vcenter.
- False by default disableVsphereResourceMetrics: false (Optional) Configure kubernetes apiserver audit logging cloudAuditLogging: The project ID for logs and metrics.
- Default to "global" when unspecified. location: us-central1 The absolute or relative path to the key file for a GCP service account used to register the cluster registerServiceAccountKeyPath: "" # (Optional) Specify if you wish to explicitly enable/disable the cloud hosted gkeonprem # API to enable/disable cluster lifecycle management from gcloud UI and Terraform. gkeOnPremAPI: enabled: false (Required) Specify which GCP project to connect your logs and metrics to stackdriver: The project ID for logs and metrics.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Example: stackdriver: serviceAccountKeyPath: "my-key-folder/log-mon-key.json" stackdriver.disableVsphereResourceMetrics Optional Mutable Relevant for Logging and Monitoring Boolean Prepopulated: false Default: false Set this to true to disable the collection of metrics from vSphere.
- It should be the same with gkeconnect.projectID. projectID: "" A GCP region where you would like to store logs and metrics for this cluster. clusterLocation: us-central1 The absolute or relative path to the key file for a GCP service account used to send logs and metrics from the cluster serviceAccountKeyPath: "" (Optional) Disable vsphere resource metrics collection from vcenter.
- False by default disableVsphereResourceMetrics: false (Optional) Configure kubernetes apiserver audit logging cloudAuditLogging: The project ID for logs and metrics.
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "ManualLB" or "MetalLB". kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true Specify the admin master node configuration (default: 4 CPUs; 16384 MB memory; 3 replicas).

