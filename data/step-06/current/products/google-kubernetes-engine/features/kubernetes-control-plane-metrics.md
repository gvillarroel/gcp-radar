---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.787Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Kubernetes control plane metrics"
feature_slug: "kubernetes-control-plane-metrics"
latest_feature_date: "2023-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks"
keywords:
  - "kubernetes"
  - "control"
  - "plane"
  - "metrics"
  - "exports"
  - "gke"
  - "autopilot"
  - "clusters"
---

# Kubernetes control plane metrics

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Exports Kubernetes control plane metrics from GKE Autopilot clusters to Cloud Monitoring; GKE can export Kubernetes control plane metrics from the API server, scheduler, and controller manager to Cloud Monitoring.

## Extended Definition

Exports Kubernetes control plane metrics from GKE Autopilot clusters to Cloud Monitoring; GKE can export Kubernetes control plane metrics from the API server, scheduler, and controller manager to Cloud Monitoring.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)

## Supporting Pages

### "Collect and view control plane metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 245
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To enable control plane metrics from the Observability tab for the cluster, do the following: In the Google Cloud console, go to the Kubernetes clusters page: Go to Kubernetes clusters If you use the search bar to find this page, then select the result whose subheading is Kubernetes Engine .
- To enable control plane metrics from the Details tab for the cluster, do the following: In the Google Cloud console, go to the Kubernetes clusters page: Go to Kubernetes clusters If you use the search bar to find this page, then select the result whose subheading is Kubernetes Engine .
- For example, to measure the API server traffic per instance of the Kubernetes control plane, use the following PromQL query: sum by (instance) (increase(apiserver request total{cluster=" CLUSTER NAME "}[1m])) To query the unsuccessful requests, filter the code label for 4xx and 5xx values by using the following PromQL query: sum(rate(apiserver request total{code= "[45].."}[5m])) To query the successful requests, filter the code label for 2xx values by using the following PromQL query: sum(rate(apiserver request total{code= "2.."}[5m])) To query the rejected requests by the API server per instance of the Kubernetes control plane, filter the code label for the value 429 ( http.StatusTooManyRequests ) by using the following PromQL query: sum by (instance) (increase(apiserver request total{cluster=" CLUSTER NAME ", code="429"}[1m])) Saturation You can measure the saturation in your system by using the apiserver current inflight requests and apiserver storage objects metrics.
- Click Save Changes . gcloud Update your cluster to collect metrics emitted by the Kubernetes API server, Scheduler, and Controller Manager: gcloud container clusters update CLUSTER NAME \ --location = COMPUTE LOCATION \ --monitoring = SYSTEM,API SERVER,SCHEDULER,CONTROLLER MANAGER Replace the following: CLUSTER NAME : the name of the cluster.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Release management : all Autopilot clusters are enrolled in a GKE release channel so that your control plane and nodes run on the latest qualified versions in that channel.
- Manage and monitor your Autopilot clusters In Autopilot, GKE automatically manages cluster upgrades and maintenance for both the control plane and worker nodes.
- Observe your Kubernetes network traffic By default, Autopilot use GKE Dataplane V2 for metrics and observability .
- Autopilot clusters collect the following types of logs and metrics automatically, adhering to Google's best practices for telemetry collection: Logs for Cloud Logging System logs Workload logs Admin Activity audit logs Data Access audit logs Metrics for Cloud Monitoring System metrics Workload metrics (from Google Cloud Managed Service for Prometheus) No additional configuration is required to enable logging and monitoring.

### "Encrypt etcd and control plane boot disks \_|\_ GKE security \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the output, check that the cluster creation parameters included a key path that corresponds to the key that you set up in Cloud KMS, like in the following example: lines omitted for clarity userManagedKeysConfig: { controlPlaneDiskEncryptionKey: "projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/ KEY RING NAME /cryptoKeys/ KCP DISK KEY NAME " gkeopsEtcdBackupEncryptionKey: "projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/ KEY RING NAME /cryptoKeys/ ETCD BACKUP KEY NAME " } Use the gcloud CLI to verify keys To use the gcloud CLI to verify the encryption key, do the following: For the disk encryption key, run the following command: gcloud container clusters describe CLUSTER NAME \ --location = LOCATION \ --format = "value(userManagedKeysConfig.controlPlaneDiskEncryptionKey)" For the etcd internal backup encryption key, run the following command: gcloud container clusters describe CLUSTER NAME \ --location = LOCATION \ --format = "value(userManagedKeysConfig.gkeopsEtcdBackupEncryptionKey)" Rotate etcd and control plane disk encryption keys Preview — customer-managed credential rotation This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Create a cluster: gcloud container clusters create CLUSTER NAME \ --location = LOCATION \ --project = CLUSTER PROJECT ID \ --control-plane-disk-encryption-key = PATH TO DISK KEY \ --gkeops-etcd-backup-encryption-key = PATH TO ETCD BACKUP KEY \ --service-account-signing-keys = PATH TO SIGNING KEY VERSION \ --service-account-verification-keys = PATH TO VERIFICATION KEY VERSION \ --cluster-ca = PATH TO CLUSTER CA \ --etcd-peer-ca = PATH TO ETCD PEER CA \ --etcd-api-ca = PATH TO ETCD API CA \ --aggregation-ca = PATH TO AGGREGATION CA Replace the following: CLUSTER NAME : the name of your new cluster.
- To create a cluster that only configures disk encryption using the keys that you created in this guide, run the following command: gcloud container clusters create CLUSTER NAME \ --location = LOCATION \ --project = CLUSTER PROJECT ID \ --control-plane-disk-encryption-key = PATH TO DISK KEY \ --gkeops-etcd-backup-encryption-key = PATH TO ETCD BACKUP KEY Replace the following: CLUSTER NAME : the name of your new cluster.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE security Send feedback Encrypt etcd and control plane boot disks Stay organized with collections Save and categorize content based on your preferences.

