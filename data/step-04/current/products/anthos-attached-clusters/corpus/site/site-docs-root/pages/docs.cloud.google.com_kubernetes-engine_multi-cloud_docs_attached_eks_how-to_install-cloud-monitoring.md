---
title: "Install Cloud Monitoring on EKS attached clusters \_|\_ GKE attached clusters\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-monitoring
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-monitoring
  title: "Install Cloud Monitoring on EKS attached clusters \_|\_ GKE attached clusters\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE attached clusters
Guides
Send feedback
Install Cloud Monitoring on EKS attached clusters
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how GKE attached clusters integrates with
Cloud Monitoring and how to view your metrics.
Before you begin
Fulfill the
prerequisites for GKE attached clusters .
Authorize Cloud Logging and Cloud Monitoring
to set up permissions for Google Cloud Observability.
Overview
GKE attached clusters has built-in integration with Cloud Monitoring for system
metrics of nodes, pods, and containers. This allows you to easily see the resource
consumption of workloads in the cluster, build dashboards, and configure alerts.
GKE attached clusters installs the metrics collector gke-metrics-agent in
your cluster. This agent is based on
OpenTelemetry Collector ,
and runs on every node in the cluster. It samples metrics every minute, and
uploads measurements to Cloud Monitoring.
Once metrics for your cluster have been uploaded, they reside in your
Google Cloud project. You can aggregate data across all of your
clusters, build custom dashboards, explore a single cluster's data,
view line charts, set up alerts, and more.
Using the Metrics Explorer
To view the metrics for a monitored resource by using the
Metrics Explorer, do the following:
In the Google Cloud console, go to the
leaderboard Metrics explorer page:
Go to Metrics explorer
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
In the toolbar of the Google Cloud console, select your Google Cloud project.
For App Hub configurations, select the
App Hub host project or the app-enabled folder's management project.
In the Metric element, expand the Select a metric menu,
enter Kubernetes Container
in the filter bar, and then use the submenus to select a specific resource type and metric:
In the Active resources menu, select Kubernetes Container .
In the Active metric categories menu, select Anthos .
In the Active metrics menu, select CPU usage time .
Click Apply .
To add filters, which remove time series from the query results, use the
Filter element .
To combine time series, use the menus on the
Aggregation element .
For example, to display the CPU utilization for your VMs, based on their zone, set the
first menu to Mean and the second menu to zone .
All time series are displayed when the first menu of the Aggregation element is set
to Unaggregated . The default settings for the Aggregation element
are determined by the metric type you selected.
For quota and other metrics that report one sample per day, do the following:
In the Display pane,
set the Widget type to Stacked bar chart .
Set the time period to at least one week.
Metrics monitored resource type
Metrics are collected using one of the following three monitored resource types.
These types correspond to a Kubernetes object that the measurement is being made
for:
k8s_node
k8s_container
k8s_pod
For example, measurements about a Pod would use the monitored resource type
k8s_pod . These metrics would therefore include labels for pod_name and
namespace_name , that identify a particular Pod. If you want to see metrics for
a specific cluster, use the following format:
attachedClusters/ CLUSTER_NAME
A different set of metrics types are used for each monitored resource type .
To learn more about these metrics types, see
GKE system metrics .
What metrics are collected
v1.34.0-gke.1
v1.33.0-gke.2
v1.33.0-gke.1
v1.32.0-gke.3
v1.32.0-gke.2
v1.32.0-gke.1
v1.31.0-gke.5
v1.31.0-gke.4
v1.31.0-gke.3
v1.31.0-gke.2
v1.31.0-gke.1
v1.30.0-gke.7
v1.30.0-gke.6
v1.30.0-gke.5
v1.30.0-gke.4
v1.30.0-gke.3
v1.30.0-gke.2
v1.30.0-gke.1
v1.29.0-gke.9
v1.29.0-gke.8
v1.29.0-gke.7
v1.29.0-gke.6
v1.29.0-gke.5
v1.29.0-gke.4
v1.29.0-gke.3
v1.29.0-gke.2
v1.29.0-gke.1
v1.28.0-gke.9
v1.28.0-gke.8
v1.28.0-gke.7
v1.28.0-gke.6
v1.28.0-gke.5
v1.28.0-gke.4
v1.28.0-gke.3
v1.28.0-gke.2
v1.28.0-gke.1
v1.27.0-gke.9
v1.27.0-gke.8
v1.27.0-gke.7
v1.27.0-gke.6
v1.27.0-gke.5
v1.27.0-gke.4
v1.27.0-gke.3
v1.27.0-gke.2
v1.27.0-gke.1
v1.26.0-gke.9
v1.26.0-gke.8
v1.26.0-gke.7
v1.26.0-gke.6
v1.26.0-gke.5
v1.26.0-gke.4
v1.26.0-gke.3
v1.26.0-gke.2
v1.26.0-gke.1
v1.25.0-gke.8
v1.25.0-gke.7
v1.25.0-gke.6
v1.25.0-gke.5
v1.25.0-gke.4
v1.25.0-gke.3
v1.25.0-gke.2
v1.25.0-gke.1
v1.24.0-gke.5
v1.24.0-gke.4
v1.24.0-gke.3
v1.24.0-gke.2
v1.24.0-gke.1
v1.23.0-gke.3
v1.23.0-gke.2
v1.23.0-gke.1
v1.22.0-gke.1
v1.21.0-gke.1
What's next?
Set up managed data collection with Managed Service for Prometheus
Using Metrics Explorer
Create logs-based metrics
Building queries for Cloud Monitoring
Setting up Alerting
The GKE overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
