---
title: "Migrate API quotas from global metrics to regional metrics \_|\_ Compute Engine\
  \ \_|\_ Google Cloud Documentation"
url: https://developers.google.com/compute/docs/api/how-tos/migrate-to-regional-api
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/compute/docs
source_metadata:
  url: https://developers.google.com/compute/docs/api/how-tos/migrate-to-regional-api
  title: "Migrate API quotas from global metrics to regional metrics \_|\_ Compute\
    \ Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
APIs & Reference
Send feedback
Migrate API quotas from global metrics to regional metrics
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the quota metrics for regional APIs and the limit
for each metric. It also describes how to update your Cloud Monitoring
dashboards, alerting policies and queries to use the regional metrics.
Regional API quota metrics
Compute Engine regional APIs that used the global quota metrics are
migrated to use the regional metrics. Global APIs continue to use the global
metrics and quota limits. See API rate limits for global metrics .
For more information about the methods that use the regional metrics and the
limits, see API rate limits for regional metrics .
The following table lists all metrics that are migrated from the global API quota
metrics to regional metrics:
Global API quota metric
Regional API quota metric
compute.googleapis.com/default
compute.googleapis.com/default_per_region
compute.googleapis.com/read_requests
compute.googleapis.com/read_requests_per_region
compute.googleapis.com/list_requests
compute.googleapis.com/list_requests_per_region
compute.googleapis.com/operation_read_requests
compute.googleapis.com/operation_read_requests_per_region
compute.googleapis.com/heavy_weight_read_requests
compute.googleapis.com/heavy_weight_read_requests_per_region
compute.googleapis.com/heavy_weight_write_requests
compute.googleapis.com/heavy_weight_write_requests_per_region
compute.googleapis.com/global_resource_write_requests
compute.googleapis.com/global_resource_write_requests_per_region
The following metrics don't have any global APIs. If you are referencing these
metrics in the Cloud Monitoring dashboards, alerts, or queries, you must
migrate these metrics to the corresponding regional metrics.
Global API quota metric
Regional API quota metric
compute.googleapis.com/simulate_maintenance_event_requests
compute.googleapis.com/simulate_maintenance_event_requests_per_region
compute.googleapis.com/instance_list_referrers_requests
compute.googleapis.com/instance_list_referrers_requests_per_region
compute.googleapis.com/get_serial_port_output_requests
compute.googleapis.com/get_serial_port_output_requests_per_region
compute.googleapis.com/network_endpoint_write_requests
compute.googleapis.com/network_endpoint_write_requests_per_region
compute.googleapis.com/network_endpoint_list_requests
compute.googleapis.com/network_endpoint_list_requests_per_region
The following metrics don't have any regional or zonal APIs. Therefore, no
changes are required for regional API quota migration.
compute.googleapis.com/project_set_common_instance_metadata_requests
compute.googleapis.com/license_insert_requests
Migrate Cloud Monitoring metrics
When you migrate from the existing API quota metrics to the regional API quota
metrics, you must manually update the Cloud Monitoring dashboards, alerts, and
queries to use regional metrics.
Update Cloud Monitoring dashboard to use the regional metrics
To update a Cloud Monitoring dashboard that monitors a global API quota
metric to a regional metric, do the following:
In the Google Cloud console, select Monitoring .
In the navigation pane, select Dashboards .
Select the dashboard that you want to edit to use a regional metric.
Click Edit dashboard .
Edit the filter that corresponds to the metric that you want to migrate:
In the Filter field, select quota_metric .
In the Comparator field, select =~ .
In the Value field, specify the metric name for the regional API quota.
For example, the filter quota_metric =~ compute.googleapis.com/read_requests.*
uses a regular expression to match all time-series data that uses the quota
metric compute.googleapis.com/read_requests.* .
For more information about the metrics, see API rate limits for regional metrics .
Click Done to save changes.
Optional: If you want to view the usage of quota per region,
expand the Grouped header and select location in the
Group by field.
Click Close editor .
Update Cloud Monitoring alerting policies to use the regional API quota metrics
To change an alerting policy that monitors a global API quota metric to a
regional metric, do the following:
In the Google Cloud console, select Monitoring .
In the navigation pane, select Alerting .
The Alerting page displays panes that list summary information, incidents,
and alerting policies.
Click the alerting policy that you want to edit to use a regional metric.
Click Edit to modify the policy.
Edit the filter that corresponds to the metric that you want to migrate:
In the Filter field, select quota_metric .
In the Comparator field, select =~ .
In the Value field, specify the metric name for the regional API quota.
For example, the filter quota_metric =~ compute.googleapis.com/read_requests.*
uses a regular expression to match all time-series data that uses the quota
metric compute.googleapis.com/read_requests.* .
For more information about the metrics, see API rate limits for regional metrics .
Click Done to save changes in the filter.
Optional: If you want a per-region alert for the regional metric,
expand the Across time series header and select location in the
Time series group by field.
Click Save policy .
Update Cloud Monitoring queries to use the regional quota metrics
To change the quota metric in a PromQL-based alerting policy or a chart in
a dashboard, use the code editor and edit the query filter. See
Using the code editor for PromQL .
Open the code editor and edit the query as shown in the following example:
rate({
"__name__"="serviceruntime.googleapis.com/quota/rate/net_usage",
"monitored_resource"="consumer_quota",
"quota_metric"=~"compute.googleapis.com/read_requests.*"
}[${__interval}])
Optionally, you can group the results based on a location by using the
sum by operation:
sum by (location) (
rate({
"__name__"="serviceruntime.googleapis.com/quota/rate/net_usage",
"monitored_resource"="consumer_quota",
"quota_metric"=~"compute.googleapis.com/read_requests.*"
}[${__interval}])
)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
