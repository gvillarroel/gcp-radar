---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.225Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "vSphere resource metrics"
feature_slug: "vsphere-resource-metrics"
latest_feature_date: "2021-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29"
keywords:
  - "vsphere"
  - "resource"
  - "metrics"
  - "collect"
  - "vm"
  - "level"
  - "contention"
  - "surface"
---

# vSphere resource metrics

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

VSphere resource metrics collect VM-level contention data and surface it in health dashboards.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, vSphere resource metrics collection is controlled through the admin cluster configuration under the `stackdriver` section via `stackdriver.disableVsphereResourceMetrics`, a boolean that can disable metrics collection from vSphere when set to true. The setting is optional and mutable, defaults to false, and is part of the cluster logs-and-metrics configuration used with a GCP service account for Logging and Monitoring.

## Evidence Summary

These docs define a versioned admin-cluster configuration option (`stackdriver.disableVsphereResourceMetrics`) that toggles collection of metrics from vSphere, with default behavior enabled (`false`) and a true value disabling collection.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)

## Supporting Pages

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- It should be the same with gkeconnect.projectID. projectID: "" A GCP region where you would like to store logs and metrics for this cluster. clusterLocation: us-central1 The absolute or relative path to the key file for a GCP service account used to send logs and metrics from the cluster serviceAccountKeyPath: "" (Optional) Disable vsphere resource metrics collection from vcenter.
- Example: stackdriver: serviceAccountKeyPath: "my-key-folder/log-mon-key.json" stackdriver.disableVsphereResourceMetrics Optional Mutable Relevant for Logging and Monitoring Boolean Prepopulated: false Default: false Set this to true to disable the collection of metrics from vSphere.
- Example: stackdriver: disableVsphereResourceMetrics: true cloudAuditLogging If you want to integrate the audit logs from your cluster's Kubernetes API server with Cloud Audit Logs, fill in this section.
- False by default disableVsphereResourceMetrics: false (Optional) Configure kubernetes apiserver audit logging cloudAuditLogging: The project ID for logs and metrics.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- It should be the same with gkeconnect.projectID. projectID: "" A GCP region where you would like to store logs and metrics for this cluster. clusterLocation: us-central1 enableVPC: false The absolute or relative path to the key file for a GCP service account used to send logs and metrics from the cluster serviceAccountKeyPath: "" (Optional) Disable vsphere resource metrics collection from vcenter.
- Example: stackdriver: serviceAccountKeyPath: "my-key-folder/log-mon-key.json" stackdriver.disableVsphereResourceMetrics Optional Mutable Relevant for Logging and Monitoring Boolean Prepopulated: false Default: false Set this to true to disable the collection of metrics from vSphere.
- Example: stackdriver: disableVsphereResourceMetrics: true cloudAuditLogging If you want to integrate the audit logs from your cluster's Kubernetes API server with Cloud Audit Logs, fill in this section.
- False by default disableVsphereResourceMetrics: false (Optional) Configure kubernetes apiserver audit logging cloudAuditLogging: The project ID for logs and metrics.

### "Admin cluster configuration file 1.29 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- It should be the same with gkeconnect.projectID. projectID: "" A GCP region where you would like to store logs and metrics for this cluster. clusterLocation: us-central1 enableVPC: false The absolute or relative path to the key file for a GCP service account used to send logs and metrics from the cluster serviceAccountKeyPath: "" (Optional) Disable vsphere resource metrics collection from vcenter.
- Example: stackdriver: serviceAccountKeyPath: "my-key-folder/log-mon-key.json" stackdriver.disableVsphereResourceMetrics Optional Mutable Relevant for Logging and Monitoring Boolean Prepopulated: false Default: false Set this to true to disable the collection of metrics from vSphere.
- Example: stackdriver: disableVsphereResourceMetrics: true cloudAuditLogging If you want to integrate the audit logs from your cluster's Kubernetes API server with Cloud Audit Logs, fill in this section.
- False by default disableVsphereResourceMetrics: false (Optional) Configure kubernetes apiserver audit logging cloudAuditLogging: The project ID for logs and metrics.

