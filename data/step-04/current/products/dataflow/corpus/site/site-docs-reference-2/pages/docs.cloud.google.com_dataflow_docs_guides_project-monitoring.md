---
title: "Dataflow project monitoring dashboard \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring
  title: "Dataflow project monitoring dashboard \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
Dataflow project monitoring dashboard
Stay organized with collections
Save and categorize content based on your preferences.
The Dataflow web-based monitoring interface includes a dashboard
that monitors your Dataflow jobs at the project level. The charts
show data for all of the jobs in one project.
Go to dashboard
The dashboard can help you with the following tasks:
Detect and identify the source of quota errors.
Detect anomalous horizontal autoscaling in a job.
Identify slow or stuck streaming jobs.
The dashboard uses
Cloud Monitoring to access
Dataflow job metrics. To customize the information displayed in
the charts, use Metrics Explorer .
Features
The dashboard includes the following features:
Choose which jobs appear in the dashboard by using regular expressions.
Access the job details page from individual charts.
Customize the dashboard widgets and charts.
Required roles
To get the permission that
you need to see the graph data,
ask your administrator to grant you the
Monitoring Viewer ( roles/monitoring.viewer )
IAM role.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
monitoring.timeSeries.list
permission,
which is required to
see the graph data.
You might also be able to get
this permission
with custom roles or
other predefined roles .
Access the dashboard
To access the dashboard, follow these steps:
Sign in to the Google Cloud console.
Select your Google Cloud project.
Open the navigation menu.
In Analytics , click Dataflow .
In the Dataflow navigation menu, click Monitoring .
Go to dashboard
Dashboard metrics
By default, the following time-series charts appear in the dashboard. For more
information about the metrics displayed, see
Job metrics .
The following charts apply to batch and streaming jobs:
Running jobs . Shows the number of active jobs running in the project. This
chart indicates the overall Dataflow activity in the project
over time.
Workers per job (top 25) . Shows the current worker counts for the 25 most
parallelized jobs. This chart is useful for understanding resource allocation
and identifying high-workload jobs. You can also see if jobs have unexpected
scaling behavior.
Total count of vCPUs . Shows the total number of virtual CPUs (vCPUs) in
use across all jobs in the project. The total number of vCPUs affects
Compute Engine quotas.
vCPUs per job (top 25) . Show the 25 jobs that consume the most vCPU
resources. This chart highlights potentially expensive jobs.
Total count of vCPUs . Shows a project-wide aggregate of vCPUs in use. This
chart gives a high-level view of the Compute Engine resources that your jobs
consume.
Quota exceeded errors . Reports any instances where
Dataflow quotas or
Compute Engine quotas have been reached.
This chart can help you to find potential job failures or scaling slowdowns.
The following charts apply to streaming jobs:
Average system latency . Shows the average
system latency ,
which reflects the typical delay experienced by data as it passes through
source stages. This chart can indicate potential input bottlenecks. Use this
chart to identify streaming jobs that have an unusual delay between when data
appears in a source and when the data is written to all sinks.
System lag (top 25) . Shows the 25 streaming pipelines with the
highest system lag, which is the longest amount of time that data spends
being processed or awaiting processing. This chart can indicate potential
real-time processing bottlenecks.
Data watermark lag per stage (top 25) . Shows the 25 streaming jobs with
the largest watermark lag. The watermark lag for a stage is the difference
between the latest event time received by the stage and the watermark. This
chart can indicate potential bottlenecks at per-stage granularity. Use this
chart to find streaming jobs that might be slow or stuck. For more
information, see
Troubleshoot slow or stuck streaming-jobs .
SECU usage (top 25) . Shows the 25 streaming jobs that consume the
most Streaming Engine Compute Units .
Use this chart to measure the cost and intensity of your streaming jobs that
use
resource-based billing .
User processing latencies (top 25) . Shows the 25 streaming jobs where
user-defined code in processing stages takes the longest. Use this chart to
find potential performance bottlenecks in your application logic.
Max backlog bytes (top 25) . Shows the 25 streaming jobs with the largest
volume of unprocessed data waiting at any stage. This chart can indicate
potential input overload or slow processing.
Backlogged keys (top 25) . Shows backlogged streaming jobs by the largest
number of backlogged keys in a bottleneck stage. For more information, see
Troubleshoot bottlenecks .
Bottleneck likely causes (top 10) . Shows the top 10 likely causes of
bottlenecked stages in backlogged jobs. For more information, see
Troubleshoot bottlenecks .
For more information about working with charts, see
Explore charted data .
Customize the dashboard
You can customize the dashboard contents and the information displayed in the
charts. When you edit the dashboard, a new, customized dashboard is created.
The dashboard uses Cloud Monitoring to access Dataflow job
metrics. Use the Cloud Monitoring tools to customize the charts.
Open the dashboard and click Customize Dashboard .
Modify your dashboard.
To filter the jobs that display on the dashboard, see
Add temporary filters to a custom dashboard
and Add permanent filters to a custom dashboard .
To edit or remove widgets, see
Manage dashboard widgets .
To edit the contents of the charts, see
Select metrics for charts on dashboards .
To add charts to the dashboard, see
Add charts and tables to a custom dashboard .
Click Save , and then click View customized dashboard .
After you create a customized dashboard, to return to the default dashboard,
in the Dashboard menu, select Predefined .
For an example of adding a custom metrics chart to the dashboard, see
Customize the Dataflow monitoring dashboard .
Troubleshooting
This section provides instructions for troubleshooting common issues
No data is available
When you open your dashboard, one or more charts shows the following message:
No data is available for the selected time frame.
This message appears when the time period covered in the charts doesn't have any data. To resolve this issue, change or expand the time range.
To change the displayed time range, on the chart, click Explore data , and then use the time-range selector.
Unable to restore deleted widgets
When you remove a widget from the dashboard, you create a customized dashboard.
After you create a customized dashboard, to return to the default dashboard,
in the Dashboard menu, select Predefined .
Unable to view charts
To see the graph data, you need the monitoring.timeSeries.list
permission. For more information, see Required roles .
What's next
Learn more about individual job metrics .
Explore metrics with Cloud Monitoring .
Learn how to troubleshoot Dataflow pipelines .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
