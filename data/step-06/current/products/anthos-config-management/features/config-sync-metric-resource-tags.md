---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.298Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync metric resource tags"
feature_slug: "config-sync-metric-resource-tags"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync"
keywords:
  - "config"
  - "sync"
  - "metric"
  - "resource"
  - "tags"
  - "metrics"
  - "can"
  - "include"
---

# Config Sync metric resource tags

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync metrics can include resource tags that identify the source component.

## Extended Definition

Config Sync metrics can include resource tags that identify the source component.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)

## Supporting Pages

### Config Sync metrics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Config Sync metrics Name Type Tags Description api duration seconds Distribution operation, status The latency distribution of API server calls. apply duration seconds Distribution status The latency distribution of applying resources declared from source of truth to a cluster. apply operations total Count operation, status, controller The total number of operations that have been performed to sync resources from source of truth to a cluster. declared resources Last Value The number of declared resources parsed from Git. internal errors total Count source The total number of internal errors encountered by Config Sync.
- Note: The Tags from Config Sync metrics and Resource Group Controller metrics are conceptually equivalent to Labels in this section.
- Resource labels Config Sync metrics sent to Prometheus and Cloud Monitoring have the following metric labels set to identify the source Pod: Name Description k8s.node.name The name of the Node hosting a Kubernetes Pod k8s.pod.namespace The namespace of the Pod k8s.pod.uid The UID of the Pod k8s.pod.ip The IP of the Pod k8s.deployment.name The name of the Deployment that owns the Pod Config Sync metrics sent to Prometheus and Cloud Monitoring from reconciler Pods also have the following metric labels set to identify the RootSync or RepoSync used to configure the reconciler: Name Description configsync.sync.kind The kind of resource that configures this reconciler: RootSync or RepoSync configsync.sync.name The name of the RootSync or RepoSync that configures this reconciler configsync.sync.namespace The namespace of the RootSync or RepoSync that configures this reconciler Cloud Monitoring resource labels Cloud Monitoring Resource labels are used for indexing metrics in storage, which means they have negligible effect on cardinality, unlike metric labels, where cardinality is a significant performance concern.
- The k8s container resource type sets the following resource labels to identify the source Container: Name Description container name The name of the Container pod name The name of the Pod namespace name The namespace of the Pod location The region or zone of the cluster hosting the node cluster name The name of the cluster hosting the node project The ID of the project hosting the cluster Configure custom metric filtering You can adjust the custom metrics that Config Sync exports to Prometheus, Cloud Monitoring, and Google's internal monitoring service.

### Customize your Config Sync installation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- You can configure them later. sourceType : SOURCE TYPE sourceFormat : FORMAT syncRepo : REPO syncRev : REVISION secretType : SECRET TYPE gcpServiceAccountEmail : EMAIL metricsGcpServiceAccountEmail : METRICS EMAIL policyDir : DIRECTORY preventDrift : false Replace the following: SOURCE TYPE : add git to sync from a Git repository, oci to sync from an OCI image, or helm to sync from a Helm chart.
- METRICS EMAIL : the email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring.
- Terraform For each cluster that you want to configure Config Sync, apply a google gkehub feature membership resource block that contains a configmanagement and config sync block, such as in the following example: git data "google project" "default" {} resource "google container cluster" "default" { name = "gke-autopilot-basic" location = "us-central1" fleet { project = data.google project.default.project id } enable autopilot = true } resource "google gke hub feature" "configmanagement feature" { name = "configmanagement" location = "global" } resource "google gke hub feature membership" "configmanagement feature member" { location = "global" feature = google gke hub feature.configmanagement feature.name membership = google container cluster.default.fleet[0].membership id membership location = google container cluster.default.fleet[0].membership location configmanagement { config sync { The field enabled was introduced in Terraform version 5.41.0, and needs to be set to true explicitly to install Config Sync. enabled = true git { sync repo = " REPO " sync branch = " BRANCH " policy dir = " DIRECTORY " secret type = " SECRET " } } } } Replace the following: REPO : the URL to the Git repository that contains your configuration files.
- SECRET : the secret auth type. oci data "google project" "default" {} resource "google container cluster" "default" { name = "gke-autopilot-basic" location = "us-central1" fleet { project = data.google project.default.project id } enable autopilot = true } resource "google gke hub feature" "configmanagement feature" { name = "configmanagement" location = "global" } resource "google gke hub feature membership" "configmanagement feature member" { location = "global" feature = google gke hub feature.configmanagement feature.name membership = google container cluster.default.fleet[0].membership id membership location = google container cluster.default.fleet[0].membership location configmanagement { config sync { The field enabled was introduced in Terraform version 5.41.0, and needs to be set to true explicitly to install Config Sync. enabled = true oci { sync repo = " REPO " policy dir = " DIRECTORY " secret type = " SECRET " } } } } Replace the following: REPO : the URL to the OCI image repository that contains your configuration files.

### Safe rollouts with Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After you have the Config Sync metrics in your monitoring system, create an alert to notify you when the gkeconfig monitor errors metric is greater than 0.
- Config Sync exposes metrics in the Prometheus format .
- First, you commit changes to the Config Sync repository, and then you update the RootSync definitions on all the clusters: We recommend the following actions: Use Git commit IDs rather than tags.
- Use Git branches If you want changes to be applied to clusters as soon as they are merged in your Git repository, configure Config Sync to use Git branches instead of commits or tags.

