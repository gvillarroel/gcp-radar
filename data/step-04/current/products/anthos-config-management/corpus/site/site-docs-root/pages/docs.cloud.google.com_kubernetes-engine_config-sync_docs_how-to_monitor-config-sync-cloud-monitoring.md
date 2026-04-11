---
title: "Monitor Config Sync with Cloud Monitoring \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring
  title: "Monitor Config Sync with Cloud Monitoring \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Sync
Guides
Send feedback
Monitor Config Sync with Cloud Monitoring
Stay organized with collections
Save and categorize content based on your preferences.
The page describes how to send metrics from Config Sync to
Cloud Monitoring.
Config Sync uses
OpenTelemetry to create, record, and export its metrics.
This page explains how to configure Cloud Monitoring metrics.
We recommend that you use either Cloud Monitoring (this page) or
Prometheus
to export metrics. It's also possible to use
custom metrics .
Configuring Cloud Monitoring metrics requires
iam.serviceAccounts.setIamPolicy permission on the project.
For examples on how to view these metrics, see
Example debugging procedures .
You can view these metrics with
Metrics Explorer or by
using the Cloud Monitoring API .
Note: Config Sync supports exporting metrics to Cloud Monitoring only
from GKE clusters.
Grant metric-writing permission for Cloud Monitoring
To configure Cloud Monitoring for Config Sync, you must grant
metric-writing permission to a service account in your project. The permission
needed depends on whether Workload Identity Federation for GKE is enabled.
Configure Cloud Monitoring with Workload Identity Federation for GKE
If Workload Identity Federation for GKE is
enabled, allow Config Sync to send metrics by running this command:
gcloud projects add-iam-policy-binding PROJECT_ID \
--role = roles/monitoring.metricWriter \
--member = "serviceAccount: PROJECT_ID .svc.id.goog[config-management-monitoring/default]"
Replace PROJECT_ID with the cluster's project ID.
Configure Cloud Monitoring without Workload Identity Federation for GKE
If Workload Identity Federation for GKE is not enabled and Config Sync is running inside a
Google Cloud environment, you can use the Compute Engine default service
account. If your organization enforces the
iam.automaticIamGrantsForDefaultServiceAccounts organization policy constraint ,
this service account might not automatically be granted the Editor
( roles/editor ) role on your project. You must grant the
Monitoring Metric Writer ( roles/monitoring.metricWriter ) IAM
role on the project to the Compute Engine default service account by
running the following command:
Note : If your organization was created on or after May 3, 2024, this
constraint is enforced by default.
gcloud projects add-iam-policy-binding PROJECT_ID \
--role = roles/monitoring.metricWriter \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com
Replace the following:
PROJECT_ID : your project ID.
PROJECT_NUMBER : your project number.
Default list of metrics in Cloud Monitoring
Name
Type
api_duration_seconds
Distribution
apply_duration_seconds
Distribution
apply_operations_total
Count
declared_resources
Last Value
internal_errors_total
Count
last_sync_timestamp
Last Value
pipeline_error_observed
Last Value
reconciler_errors
Last Value
resource_fights_total
Count
reconcile_duration_seconds
Distribution
resource_group_total
Last Value
resource_count
Last Value
ready_resource_count
Last Value
resource_ns_count
Last Value
cluster_scoped_resource_count
Last Value
kcc_resource_count
Gauge
Note: Metrics without data don't appear in Metric Explorer.
To modify the metrics allowlist in Cloud Monitoring, follow the instructions to
patch the otel collector deployment with ConfigMap .
Example debugging procedures for Cloud Monitoring
The following Cloud Monitoring examples illustrate some patterns for using
OpenCensus metrics to detect and diagnose problems related to
Config Sync when you are using the RootSync and RepoSync APIs.
Metric format
In Cloud Monitoring, metrics have the following format:
custom.googleapis.com/opencensus/config_sync/METRIC .
This metric name is composed of the following components:
custom.googleapis.com : all custom metrics have this prefix
opencensus : this prefix is added because Config Sync uses the OpenCensus
library
config_sync/ : metrics that Config Sync exports to
Cloud Monitoring have this prefix
METRIC : the name of the metric that you want to query
Query metrics by reconciler
RootSync and RepoSync objects are instrumented with high-level metrics
that give you useful insight into how Config Sync is operating on the
cluster. Almost all metrics are tagged by the reconciler name, so you can see
if any errors have occurred and can set up alerts for them in Cloud Monitoring.
A reconciler is a Pod that is deployed as a Deployment. It syncs manifests from a
source of truth to a cluster. When you create a RootSync object, Config Sync
creates a reconciler called root-reconciler- ROOT_SYNC_NAME or
root-reconciler if the name of RootSync is root-sync . When you create a
RepoSync object, Config Sync creates a reconciler called
ns-reconciler- NAMESPACE - REPO_SYNC_NAME - REPO_SYNC_NAME_LENGTH
or ns-reconciler- NAMESPACE if the name of RepoSync is
repo-sync , where NAMESPACE is the namespace you created
your RepoSync object in.
The following diagram shows you how reconciler Pods function when the
source of truth is a Git repository:
For example, to filter by the reconciler name when you are using Cloud Monitoring,
complete the following tasks:
In the Google Cloud console, go to Monitoring :
Go to Monitoring
In the Monitoring navigation pane, click leaderboard Metrics explorer .
In the Select a metric drop-down list, add: custom.googleapis.com/opencensus/config_sync/reconciler_errors .
In the Filter drop-down list, select reconciler . A
filter fields box appears.
In the filter fields box, select = in the first field and
the reconciler name (for example, root-reconciler ) in the second.
Click Apply .
You can now see metrics for your RootSync objects.
For more instructions on how to filter by a specific data type,
see Filtering the data .
Query Config Sync operations by component and status
When you have enabled the RootSync and RepoSync APIs, importing and sourcing
from a source of truth and syncing to a cluster is handled by the reconcilers.
The reconciler_errors metric is labeled by component so you can see where any
errors occurred.
For example, to filter by component when you are using Cloud Monitoring,
complete the following tasks:
In the Google Cloud console, go to Monitoring :
Go to Monitoring
In the Monitoring navigation pane, click leaderboard Metrics explorer .
In the Select a metric drop-down list, add
custom.googleapis.com/opencensus/config_sync/reconciler_errors .
In the Filter drop-down list, select component . A
filter fields box appears.
In the filter fields box, select = in the first box and source
in the second.
Click Apply .
You can now see errors that occurred when sourcing from a source of truth for
your reconcilers.
You can also check the metrics for the source and sync processes themselves by
querying the following metrics and filtering by the status tag:
custom.googleapis.com/opencensus/config_sync/parser_duration_seconds
custom.googleapis.com/opencensus/config_sync/apply_duration_seconds
custom.googleapis.com/opencensus/config_sync/remediate_duration_seconds
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
