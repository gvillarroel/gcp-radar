---
title: "Use Cloud Monitoring \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/cloud-monitoring
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/cloud-monitoring
  title: "Use Cloud Monitoring \_|\_ Application Integration \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Integration
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Use Cloud Monitoring
Application Integration is synchronously integrated with Cloud Monitoring. This means that for all your published integrations, the integration metrics, usage data, and alerts are automatically ingested during the execution of your integrations.
To get a comprehensive summary of all the telemetry sent from Application Integration to Cloud Monitoring, go to the Manage Integrations page in Cloud Monitoring. The Manage Integrations page lists all the metrics ingested from Application Integration. You can also view details about the available sample dashboards and alert policies in the Manage Integrations page.
You can visualize your Application Integration metrics and data using the following Cloud Monitoring tools:
Sample dashboards
Custom dashboards
Metrics Explorer
Before you begin
Before you use Cloud Monitoring, ensure that you do the following:
Enable the Cloud Monitoring API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Verify that billing is enabled for your Google Cloud project .
Access metrics using sample dashboards
Application Integration provides sample dashboard definitions that present charts containing metrics relevant to integration executions, step executions, and data processing during these executions. You can import and install these sample dashboards in Cloud Monitoring to create custom dashboards.
Note: Application Integration, by default, creates a set of sample dashboards in the Monitoring > Dashboard list page when you execution an integration. You can directly copy and edit the sample dashboards as desired.
To install a sample dashboard definition, do the following:
In the Google Cloud console, go to the Monitoring page:
Go to Monitoring page
In the navigation pane, select Dashboards , and go to the Sample library tab.
In Categories , select Application Integration to view the list of sample dashboards .
Click Import .
Once the sample dashboard is installed, you can view and edit the installed dashboards in the Dashboard list tab.
For more information about installing sample dashboards, see Install sample dashboards .
Sample dashboards
The following sample dashboards are available for Application Integration resources:
Sample dashboard
Metric
Description
Integration executions
integrations.googleapis.com/integration/execution_count
Sample dashboard containing chart definitions to display the integration status and execution count.
Step (task/trigger) executions
integrations.googleapis.com/step/execution_count
Sample dashboard containing chart definitions to display the integration step execution status and count.
Integration and task execution duration
integrations.googleapis.com/integration/execution_latencies
integrations.googleapis.com/step/execution_latencies
Sample dashboard containing chart definitions to display the integration and task execution latencies.
Data processed
integrations.googleapis.com/processed_bytes_count
Sample dashboard containing chart definitions to display the data processed during the execution of an integration.
Access metrics using custom dashboards
To create custom monitoring dashboards for your Application Integration resources in your Google Cloud project, do the following:
In the Google Cloud console, go to the Cloud Monitoring > Dashboard Overview page:
Go to Dashboard Overview page
Click Create dashboard .
Optionally modify the name of the dashboard.
Click or drag and drop a chart on the canvas.
In the chart configuration properties, perform the following:
Expand the Resource & Metric menu and select Integration Version as the Active resource .
Choose the desired metrics that you want to visualize.
Click Apply .
Add additional charts to your dashboard as desired.
For more information about custom dashboards, see Create and manage custom dashboards .
Access metrics using Metrics Explorer
The Cloud Monitoring Metric Explorer helps you build temporary metric charts to visualize the avialable resource metrics for you Google Cloud project. Once you have created a metric chart, if desired, you can also save it to a custom monitoring dashboard.
To create a chart using the Application Integration resource metrics, do the following:
In the Google Cloud console, go to the Cloud Monitoring > Metrics explorer page:
Go to Metrics explorer page
In the Select a metric pane, expand the Metric menu and select Integration Version as the Active resource .
Choose the desired metrics that you want to visualize.
Click Apply .
You can also select filters, group by metric labels, perform aggregations, and select chart viewing options using the Metric Explorer. For more information, see Create charts with Metrics Explorer .
Considerations
Monitoring metrics are generated only for published integrations.
Step execution count metrics won't be computed for tasks that are skipped during the execution of an integration.
All the performance metric data that is diaplayed in the Monitoring dashboards are for informational purpose only. The aggregated performance metric data might not be 100% accurate.
Cloud Monitoring metric values must not be used to calculate billing costs.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
