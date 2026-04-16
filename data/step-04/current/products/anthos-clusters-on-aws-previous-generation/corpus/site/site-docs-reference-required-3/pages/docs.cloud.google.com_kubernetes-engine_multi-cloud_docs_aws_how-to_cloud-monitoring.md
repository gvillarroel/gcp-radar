---
title: "Cloud monitoring \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/cloud-monitoring
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/use-efs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/cloud-monitoring
  title: "Cloud monitoring \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on AWS, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE on AWS
Guides
Send feedback
Cloud monitoring
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how GKE on AWS integrates with
Cloud Monitoring and how to view your metrics.
Before you begin
Configure the Google Cloud CLI
and enable the required APIs in your Google Cloud project.
Authorize Cloud Logging / Cloud Monitoring
to set up permissions for Google Cloud Observability.
Overview
GKE on AWS has built-in integration with Cloud Monitoring for system
metrics of nodes, pods, and containers. This allows you to easily see the resource
consumption of workloads in the cluster, build dashboards, and configure alerts.
GKE on AWS installs the metrics collector gke-metrics-agent in
your cluster. This agent is based on
OpenTelemetry Collector ,
and runs on every node in the cluster. It samples metrics every minute, and
uploads measurements to Cloud Monitoring.
Once metrics for your cluster have been uploaded, they reside in your
Google Cloud project. You can aggregate data across all of your
clusters, build custom dashboards, explore a single cluster's data,
view line charts, set up alerts, and more.
Using the Metrics Explorer
1.27 or later
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
1.26 or earlier
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
In the Active metric categories menu, select Container .
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
awsClusters/ CLUSTER_NAME
A different set of metrics types are used for each monitored resource type .
To learn more about these metrics types, see
GKE system metrics .
What metrics are collected
v1.34.1-gke.4700
v1.33.5-gke.1900
v1.33.4-gke.900
v1.32.9-gke.1800
v1.32.8-gke.600
v1.32.4-gke.200
v1.31.11-gke.400
v1.31.7-gke.1000
v1.31.6-gke.200
v1.31.4-gke.500
v1.31.1-gke.1800
v1.30.11-gke.800
v1.30.10-gke.200
v1.30.8-gke.100
v1.30.5-gke.1000
v1.30.5-gke.200
v1.30.4-gke.400
v1.30.3-gke.100
v1.29.14-gke.200
v1.29.12-gke.100
v1.29.10-gke.100
v1.29.8-gke.1800
v1.29.8-gke.600
v1.29.7-gke.100
v1.29.6-gke.600
v1.29.5-gke.1100
v1.29.5-gke.700
v1.29.4-gke.200
v1.29.3-gke.600
v1.28.14-gke.200
v1.28.13-gke.600
v1.28.12-gke.100
v1.28.11-gke.600
v1.28.10-gke.1300
v1.28.10-gke.800
v1.28.9-gke.400
v1.28.8-gke.800
v1.28.7-gke.1700
v1.28.5-gke.1200
v1.28.5-gke.100
v1.28.3-gke.700
v1.27.14-gke.1600
v1.27.14-gke.1200
v1.27.14-gke.700
v1.27.13-gke.500
v1.27.12-gke.800
v1.27.11-gke.1600
v1.27.10-gke.500
v1.27.9-gke.100
v1.27.7-gke.600
v1.27.6-gke.700
v1.27.5-gke.200
v1.27.4-gke.1600
v1.26.14-gke.1500
v1.26.13-gke.400
v1.26.12-gke.100
v1.26.10-gke.600
v1.26.9-gke.700
v1.26.8-gke.200
v1.26.7-gke.500
v1.26.5-gke.1400
v1.26.5-gke.1200
v1.26.4-gke.2200
v1.26.2-gke.1001
v1.25.14-gke.700
v1.25.13-gke.200
v1.25.12-gke.500
v1.25.10-gke.1400
v1.25.10-gke.1200
v1.25.8-gke.500
v1.25.7-gke.1000
v1.25.6-gke.1600
v1.25.5-gke.2000
v1.25.5-gke.1500
v1.25.4-gke.1300
v1.24.14-gke.2700
v1.24.14-gke.1400
v1.24.13-gke.500
v1.24.11-gke.1000
v1.24.10-gke.1200
v1.24.9-gke.2000
v1.24.9-gke.1500
v1.24.8-gke.1300
v1.24.5-gke.200
v1.24.3-gke.2200
v1.24.3-gke.2100
v1.23.16-gke.2800
v1.23.16-gke.200
v1.23.14-gke.1800
v1.23.14-gke.1100
v1.23.11-gke.300
v1.23.9-gke.2200
v1.23.9-gke.2100
v1.23.9-gke.800
v1.23.8-gke.1700
v1.23.7-gke.1300
v1.22.15-gke.100
v1.22.12-gke.2300
v1.22.12-gke.1100
v1.22.12-gke.200
v1.22.10-gke.1500
v1.22.8-gke.2100
v1.22.8-gke.1300
v1.22.8-gke.200
v1.21.14-gke.2900
v1.21.14-gke.2100
v1.21.11-gke.1900
v1.21.11-gke.1800
v1.21.11-gke.1100
v1.21.11-gke.100
v1.21.6-gke.1500
v1.21.5-gke.2800
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
