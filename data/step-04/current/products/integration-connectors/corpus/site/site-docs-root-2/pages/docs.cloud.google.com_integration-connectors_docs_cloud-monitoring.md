---
title: "Monitor connectors \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring
  title: "Monitor connectors \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Integration Connectors
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Monitor connectors
Integration Connectors is integrated with Cloud Monitoring .
This means that all your Integration Connectors metrics and usage data is automatically available
to Cloud Monitoring. To know about the type of metrics sent by the Integration Connectors service,
see Integration Connectors metrics .
You can visualize your Integration Connectors metrics and data using the following Cloud Monitoring tools:
Custom dashboards
Metrics Explorer
Before you begin
Before you use Cloud Monitoring, enable the Cloud Monitoring API.
Enable the Cloud Monitoring API
Note: You may incur additional charges for using
Cloud Monitoring API directly. For more information, see Cloud Monitoring pricing .
Access metrics using custom dashboards
To create custom monitoring dashboards for your Integration Connectors resources in
your Google Cloud project, do the following:
In the Google Cloud console, go to the Cloud Monitoring > Dashboard Overview page:
Go to Dashboard Overview page
Click Create dashboard .
Optionally, modify the name of the dashboard.
Click or drag and drop a chart on the canvas.
In the chart configuration properties, perform the following:
Expand the Resource & Metric menu and select Connectors as the Active resource .
Choose the desired metrics that you want to visualize.
Click Apply .
Add additional charts to your dashboard as desired.
For more information about custom dashboards, see Create and manage custom dashboards .
Access metrics using Metrics Explorer
The Cloud Monitoring Metric Explorer helps you build temporary metric charts to visualize the available resource metrics for your Google Cloud project. Once you have created a metric chart, if desired, you can also save it to a custom monitoring dashboard.
To create a chart using the Integration Connectors resource metrics, do the following:
In the Google Cloud console, go to the Cloud Monitoring > Metrics explorer page:
Go to Metrics explorer page
In the Select a metric pane, expand the Metric menu and select Connectors as the Active resource .
Choose the desired metrics that you want to visualize.
Click Apply .
You can also select filters, group by metric labels, perform aggregations, and select chart viewing options using the Metric Explorer. For more information, see Create charts with Metrics Explorer .
Monitor using PromQL
You can use PromQL to create custom monitoring dashboards based
on various metrics. PromQL queries let you aggregate your connection data based on metrics such as
connector provider and connector version. You can write PromQL queries by using the
code editor .
The following examples show how to use the PromQL queries to gather connection data.
Example - Monitor request count
The following PromQL query shows how to get and aggregate request count data for active connections:
sum by ( location , connection , provider ) (
sum_over_time ( { "connectors.googleapis.com/connection/request_count" , monitored_resource = "connectors.googleapis.com/Connection" } [ 1 m ])
) and on ( location , connection , provider )
avg_over_time ( { "connectors.googleapis.com/connection/state" , monitored_resource = "connectors.googleapis.com/Connection" } [ 1 m ]) > 0
Example - Monitor active nodes
The following PromQL query shows how to get and aggregate active node count data for all your connections:
sum by ( location , connection , provider ) (
sum_over_time ( { "connectors.googleapis.com/connection/nodes" , monitored_resource = "connectors.googleapis.com/Connection" } [ 1 m ])
) and on ( location , connection , provider )
avg_over_time ( { "connectors.googleapis.com/connection/state" , monitored_resource = "connectors.googleapis.com/Connection" } [ 1 m ]) > 0
Example - Monitor connection status over a time period
The following PromQL query shows how to get the status trend over a time period for all your connections:
count by ( status , connection ) (
{ "connectors.googleapis.com/connection/connection_status" ,
monitored_resource = "connectors.googleapis.com/Connection"
} == 1
)
If you want to know the status of connections at the current point in time, use the Metrics
Explorer in the Google Cloud console instead of a PromQL query.
Note: You can
also configure alerts to
know if a connection is in a particular state. For example, you can configure
an alert that is triggered when a connection goes to an Error state.
What's next
Understand how to view and manage various Google Cloud services and third party applications (applicable to your
Google Cloud project) that are integrated with Cloud Monitoring. For more information, see
Manage integrations in Cloud Monitoring .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
