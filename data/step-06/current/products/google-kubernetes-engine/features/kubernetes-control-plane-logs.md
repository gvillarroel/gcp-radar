---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.787Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Kubernetes control plane logs"
feature_slug: "kubernetes-control-plane-logs"
latest_feature_date: "2023-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks"
keywords:
  - "kubernetes"
  - "control"
  - "plane"
  - "logs"
  - "exports"
  - "gke"
  - "autopilot"
  - "clusters"
---

# Kubernetes control plane logs

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Exports Kubernetes control plane logs from GKE Autopilot clusters to Cloud Logging; GKE can export Kubernetes control plane logs from the API server, scheduler, and controller manager to Cloud Logging.

## Extended Definition

Exports Kubernetes control plane logs from GKE Autopilot clusters to Cloud Logging; GKE can export Kubernetes control plane logs from the API server, scheduler, and controller manager to Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)

## Supporting Pages

### "About GKE control plane authority \_|\_ GKE security \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority)
- Source ID: `site-iam-reference`
- Final score: 175
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following documents show you how to view and process the various types of control plane logs: Verify credential issuance and verification operations in GKE clusters Verify connections by Google personnel in the cluster control plane Additional resources about control plane security This section describes other methods that you can use to improve your confidence in your control plane security.
- What's next Run your own certificate authorities and signing keys in GKE Encrypt GKE control plane data at rest with your keys Verify GKE control plane VM integrity Verify credential issuance and usage in GKE clusters Verify connections by Google personnel in the cluster control plane Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Access logs and identity issuance logs You can view logs in Logging for all events related to access and identity in the control plane, including the following events: Direct access : logs related to direct access attempts (like SSH) to GKE control plane nodes let you verify that the VM SSH logs and VM network connections match the SSH records in Access Transparency logs.
- About GKE control plane authority features In GKE, Google Cloud fully manages the security configuration of the control plane, including encryption of storage at rest , and configuring the keys and certificate authorities (CAs) that sign and verify credentials in your clusters.

### "Encrypt etcd and control plane boot disks \_|\_ GKE security \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)
- Source ID: `site-iam-reference`
- Final score: 171
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the output, check that the cluster creation parameters included a key path that corresponds to the key that you set up in Cloud KMS, like in the following example: lines omitted for clarity userManagedKeysConfig: { controlPlaneDiskEncryptionKey: "projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/ KEY RING NAME /cryptoKeys/ KCP DISK KEY NAME " gkeopsEtcdBackupEncryptionKey: "projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/ KEY RING NAME /cryptoKeys/ ETCD BACKUP KEY NAME " } Use the gcloud CLI to verify keys To use the gcloud CLI to verify the encryption key, do the following: For the disk encryption key, run the following command: gcloud container clusters describe CLUSTER NAME \ --location = LOCATION \ --format = "value(userManagedKeysConfig.controlPlaneDiskEncryptionKey)" For the etcd internal backup encryption key, run the following command: gcloud container clusters describe CLUSTER NAME \ --location = LOCATION \ --format = "value(userManagedKeysConfig.gkeopsEtcdBackupEncryptionKey)" Rotate etcd and control plane disk encryption keys Preview — customer-managed credential rotation This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Create a cluster: gcloud container clusters create CLUSTER NAME \ --location = LOCATION \ --project = CLUSTER PROJECT ID \ --control-plane-disk-encryption-key = PATH TO DISK KEY \ --gkeops-etcd-backup-encryption-key = PATH TO ETCD BACKUP KEY \ --service-account-signing-keys = PATH TO SIGNING KEY VERSION \ --service-account-verification-keys = PATH TO VERIFICATION KEY VERSION \ --cluster-ca = PATH TO CLUSTER CA \ --etcd-peer-ca = PATH TO ETCD PEER CA \ --etcd-api-ca = PATH TO ETCD API CA \ --aggregation-ca = PATH TO AGGREGATION CA Replace the following: CLUSTER NAME : the name of your new cluster.
- To create a cluster that only configures disk encryption using the keys that you created in this guide, run the following command: gcloud container clusters create CLUSTER NAME \ --location = LOCATION \ --project = CLUSTER PROJECT ID \ --control-plane-disk-encryption-key = PATH TO DISK KEY \ --gkeops-etcd-backup-encryption-key = PATH TO ETCD BACKUP KEY Replace the following: CLUSTER NAME : the name of your new cluster.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE security Send feedback Encrypt etcd and control plane boot disks Stay organized with collections Save and categorize content based on your preferences.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Release management : all Autopilot clusters are enrolled in a GKE release channel so that your control plane and nodes run on the latest qualified versions in that channel.
- Manage and monitor your Autopilot clusters In Autopilot, GKE automatically manages cluster upgrades and maintenance for both the control plane and worker nodes.
- Autopilot clusters collect the following types of logs and metrics automatically, adhering to Google's best practices for telemetry collection: Logs for Cloud Logging System logs Workload logs Admin Activity audit logs Data Access audit logs Metrics for Cloud Monitoring System metrics Workload metrics (from Google Cloud Managed Service for Prometheus) No additional configuration is required to enable logging and monitoring.
- Run workloads that require minimal disruptions, such as game servers or work queues In Autopilot clusters only, specify the cluster-autoscaler.kubernetes.io/safe-to-evict=false annotation in the Pod specification.

