---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.229Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Cloud Audit Logs offline buffering"
feature_slug: "cloud-audit-logs-offline-buffering"
latest_feature_date: "2020-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/audit-logging"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "audit"
  - "logs"
  - "offline"
  - "buffering"
  - "buffered"
  - "disk"
  - "when"
  - "cannot"
---

# Cloud Audit Logs offline buffering

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Audit logs are buffered on disk when Cloud Audit Logs cannot be reached.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, audit logging can be persisted to persistent disk on the admin/user clusters (disk-based audit logging), which keeps logs available across VM restarts and upgrades. Admin clusters can additionally be configured via `cloudAuditLogging` to send those audit logs to Cloud Audit Logs in a target project/location, with the documentation also referencing checkpointing/upload behavior, but it does not explicitly state that disk logging is only used when Cloud Audit Logs is unreachable.

## Evidence Summary

These pages confirm disk-based audit log persistence and configurable Cloud Audit Logs integration for admin clusters, but they provide limited explicit detail on automatic offline buffering behavior when Cloud Audit Logs cannot be reached.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/audit-logging)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Audit logging \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly describes that when Cloud Audit Logs cannot export entries, they are cached in a 10GB disk buffer, which directly defines offline buffering behavior.

Evidence snippets:
- Update the user cluster: gkectl update cluster --kubeconfig [ADMIN CLUSTER KUBECONFIG] --config [USER CLUSTER CONFIG] Access audit logs Disk-based audit logging You can find the audit logs for the admin cluster on the control-plane nodes under /var/log/kube-audit/kube-apiserver-audit.log .
- Writing to Cloud Audit Logs has several benefits over writing to disk or capturing logs in an on-premises logging system: Audit logs for all clusters can be centralized.
- Create an admin cluster with Cloud Audit Logs enabled You can enable Cloud Audit Logs for an admin cluster only when you first create the admin cluster.
- Disk-based audit logging By default, audit logs are written to a persistent disk so that VM restarts and upgrades don't cause the logs to disappear.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- This setting specifies the region where the following APIs and services run: GKE On-Prem API ( gkeonprem.googleapis.com ) Fleet service ( gkehub.googleapis.com ) Connect service ( gkeconnect.googleapis.com ) This setting also controls the region in which the following are stored: The cluster metadata that the GKE On-Prem API needs to manage the cluster lifecycle The Cloud Logging and Cloud Monitoring data of system components The Admin Audit log created by Cloud Audit Logs The Google Cloud API Location field corresponds to the --location flag in the gkectl register bootstrap command.
- If the project IDs and regions aren't the same, cluster creation fails. cloudAuditLogging If you want to integrate the audit logs from your cluster's Kubernetes API server with Cloud Audit Logs, fill in the cloudAuditLogging section.
- If you cannot obtain this privilege, then you can disable uploading the checkpoint file by using the hidden flag --disable-checkpoint when you run a relevant command.
- When you ran the gkectl create admin command to create the admin cluster, it created a checkpoint file in the same datastore folder as the admin cluster data disk.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Default to "global" when unspecified. location: us-central1 The absolute or relative path to the key file for a GCP service account used to register the cluster registerServiceAccountKeyPath: "" # (Optional) Specify if you wish to explicitly enable/disable the cloud hosted gkeonprem # API to enable/disable cluster lifecycle management from gcloud UI and Terraform. gkeOnPremAPI: enabled: false (Required) Specify which GCP project to connect your logs and metrics to stackdriver: The project ID for logs and metrics.
- Invalid for HA admin cluster as the path is generated automatically under # the root directory "anthos" in the specified datastore. dataDisk: "" (Required) Network configuration network: (Required when using "static" ipMode.type; or "Seesaw" loadBalancer.kind; or using amdin cluster HA mode) This section overrides ipMode.ipBlockFilePath values when ipMode.type=static.
- It should be the same with gkeconnect.projectID. projectID: "" A GCP region where you would like to store audit logs for this cluster. clusterLocation: us-central1 The absolute or relative path to the key file for a GCP service account used to send audit logs from the cluster serviceAccountKeyPath: "" # (Optional/Preview) Configure backups for admin cluster.
- Mutable This section is required in the admin cluster if you want to manage the lifecycle of user clusters in using GKE On-Prem API clients . cloudAuditLogging.projectID Required for Cloud Audit Logs Immutable String The ID of your fleet host project .

