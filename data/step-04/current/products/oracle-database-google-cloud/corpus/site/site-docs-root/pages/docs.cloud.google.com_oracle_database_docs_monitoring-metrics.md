---
title: "Monitor resources using Cloud Monitoring \_|\_ Oracle Database at Google Cloud\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/monitoring-metrics
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/monitoring-metrics
  title: "Monitor resources using Cloud Monitoring \_|\_ Oracle Database at Google\
    \ Cloud \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Oracle Database at Google Cloud
Guides
Send feedback
Monitor resources using Cloud Monitoring
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to view and use the monitoring metrics available for your
Oracle Database@Google Cloud resources using Cloud Monitoring.
You can use Cloud Monitoring to monitor your Oracle Database@Google Cloud resources
using custom dashboards , and metrics charts and alerts .
Monitor using Cloud Monitoring dashboards
Cloud Monitoring lets you monitor your Oracle Database@Google Cloud resources
using custom dashboards. You can create custom dashboards using
Cloud Monitoring and the available Oracle Database@Google Cloud metrics and logs.
For more information on how to create a custom dashboard, see
Create a new dashboard .
Monitor using Cloud Monitoring metrics
You can use the Metrics explorer in Cloud Monitoring to view metrics ,
create charts , or set up alerts for your Oracle Database@Google Cloud resources.
View metrics
You can view available Oracle Database@Google Cloud metrics using Cloud Monitoring
in the Google Cloud console.
To view an available metric:
Go to the Cloud Monitoring metrics explorer page in the
Google Cloud console.
Go to Metrics explorer
In the Queries section, click Select a metric , and choose one of the
following resource names to view metrics for that resource:
Exadata Infrastructure , Cloud VM Cluster , Autonomous Database ,
Container Database , or Pluggable Database .
Click Apply . The metric is displayed. You can view your metric
as a chart , table , or both by selecting the option in the
results pane.
Create custom charts for metrics
You can create custom charts for Oracle Database@Google Cloud metrics using
Cloud Monitoring. You can use two or more metrics to view and understand
the correlation between the metrics. For example, you can use the
CPU utilization and latency metrics to create a chart that might indicate
that your instance needs more capacity, or if your instance or cluster is
experiencing high utilization.
To create a custom chart:
Go to Cloud Monitoring Metrics explorer page in Google Cloud console.
Go to Metrics explorer
In the Queries section, add the metrics to your chart:
Click Select a metric to open the drop-down, select the first
metric, then press Apply to add it to the chart.
For each additional metric, click Add query to add a new metric line
and select the metrics.
Optional - You can modify the following for each metric:
Filter : click Add Filter next to your metric name to filter
your metric values.
Aggregation : click Aggregation next to your metric name
to apply an aggregation, such as sum, min, max ..., to
your metric values.
Click + to view and select additional options available to modify
your metric values.
In the Display pane, modify the following as necessary:
Widget type : select the type of chart you want to use to display your
metrics.
Analysis mode : select standard , x-ray , or stats mode for
your analysis type.
Compare to past : check the box to **enable compare to past++ then
select the timeshift duration .
Threshold line : click Add threshold to add a threshold line
to your chart, then input the Threshold percentage and select the
Y-axis line. You can add multiple threshold lines to your chart.
Y-axis assignment : select the y-axis alignment for each of the
metrics in your chart by using the drop-down in the Y-axis column.
Y-axis labels : add labels for the left and right Y-axis of your
chart. These labels will be displayed to identify the axises in the
chart.
Legend alias : customize the description of the time series legend
in your chart using this option.
Click Save Chart and in the dialog, add a name for your chart in the
Chart title field, and add your chart to an existing or new
dashboard.
Click Save chart in the dialog to confirm.
Create metric alerts
You can use Cloud Monitoring to create alerts for available Oracle Database@Google Cloud
metrics.
You can create metric alerts for the following:
Metric-threshold alerting policy :
creates an altering policy that sends notifications when the values of a
metric are more than, or less than, the specific threshold.
Metric-absence alerting policy : creates
an alerting policy that sends notifications when a monitored metric has no
data for a specific period of time.
What's next
Learn more about Cloud Monitoring .
View audit logs .
View resource logs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
