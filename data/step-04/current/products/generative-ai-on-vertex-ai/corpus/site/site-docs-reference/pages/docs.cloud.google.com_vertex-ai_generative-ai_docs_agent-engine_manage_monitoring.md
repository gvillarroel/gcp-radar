---
title: "Monitor an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/manage/monitoring
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/manage/monitoring
  title: "Monitor an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Agent Builder
Guides
Send feedback
Monitor an agent
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use built-in metrics, custom metrics, and alerts to monitor your agents in Vertex AI Agent Engine.
Overview
You can use Vertex AI Agent Engine using Cloud Monitoring without
any additional setup or configuration. Built-in agent metrics are
automatically collected and visualized in Cloud Monitoring pages in the
Google Cloud console.
Supported built-in metrics
The following agent metrics are supported and associated with the Vertex AI Agent Engine monitored resource
aiplatform.googleapis.com/ReasoningEngine :
Request count
Request latencies
Container CPU allocation time
Container memory allocation time
Refer to the full list of AI Platform metrics
for more details about metric types, units, labels, as well as latency and
sampling period.
View metrics for an agent
You can view your agent built-in metrics in the Google Cloud console using the
Metrics Explorer :
To get permission to view metrics in Metrics Explorer , ask your
administrator to grant you the
Monitoring Viewer role
( roles/monitoring.viewer ) on your project.
Go to Metrics Explorer in the Google Cloud console:
Go to Metrics Explorer
Select your Google Cloud project.
Click Select a metric to open a search bar.
Enter Vertex AI Agent Builder Reasoning Engine in the search bar and click Vertex AI Agent Builder Reasoning Engine .
Click the Reasoning_engine metric category, then click a metric, such as Request count .
Optionally, set additional label filters, aggregation element and adjust the
time range.
By default, the charts in the
Metrics Explorer for the Request count metric aligns data points with a default time interval and plots data points as request-per-second (a rate metric).
Note: Labels are categorized as either resource labels (common to all metrics, such as resource_container , location , reasoning_engine_id ) or metric
labels (specific to individual metrics, such as response_code for the
Request Count metric). See
Components of the metric model for more information about labels.
For Agent Development Kit-based agents, you can also view metrics for your agent in the Google Cloud console using the
Vertex AI Agent Engine
dashboard .
Query metrics for an agent
You can also query metrics through
Prometheus Query Language (PromQL) or
Cloud Monitoring v3 API . PromQL offers
more options for metrics filtering, aggregation and transformation, while the
Cloud Monitoring API lets you programmatically list and query all raw data
points.
Query metrics with PromQL
You can use PromQL to align and aggregate data points with a custom time
interval and plot transformed data points as the absolute request count
(instead of request-per-second). The following example filters data by Agent
Engine instance ID ( RESOURCE_ID ) and response code
( RESPONSE_CODE ):
Note: In the PromQL queries for Metrics Explorer, the default time interval is
represented by ${__interval} , and is automatically configured based on the
time range. The value of the ${__interval} is proportional to the selected
time range. If you query the metric for a longer period, the value of the
${__interval} is dynamically configured for a larger value. See
Alignment: within-series regularization for more
details on time series alignment.
sum_over_time (
increase (
aiplatform_googleapis_com : reasoning_engine_request_count {
monitored_resource = ' aiplatform.googleapis.com/ReasoningEngine ',
reasoning_engine_id = ' RESOURCE_ID ',
response_code = ' RESPONSE_CODE '
}
[ 10m ]
)
[ 10m : 10m ]
)
You can query the error rate by calculating the ratio of the requests that are labeled
with certain error response codes (such as 500 ) to the total number of requests (percentage of failed requests):
sum_over_time (
sum (
rate (
aiplatform_googleapis_com : reasoning_engine_request_count {
monitored_resource = ' aiplatform.googleapis.com/ReasoningEngine ',
reasoning_engine_id = ' RESOURCE_ID ',
response_code = ' 500 '
}
[ 10m ]
)
)
[ 10m : 10m ]
)
/
sum_over_time (
sum (
rate (
aiplatform_googleapis_com : reasoning_engine_request_count {
monitored_resource = ' aiplatform.googleapis.com/ReasoningEngine ',
reasoning_engine_id = ' RESOURCE_ID ',
}
[ 10m ]
)
)
[ 10m : 10m ]
)
For best practices and restrictions for ratio metrics, see About ratios of metrics . For an example of how to set an alert for the error rate metric, see Sample policies in JSON .
Query metrics with Cloud Monitoring API
You can use the Cloud Monitoring API to do the following:
Get the Vertex AI Agent Engine monitored resource definition
List available agent metric definitions
Query time-series data for request_count
All Agent metrics are associated with the Agent Engine
monitored resource
aiplatform.googleapis.com/ReasoningEngine .
You can invoke these APIs through
APIs Explorer , language specific client
libraries or command line. Refer to the
documentation for reading metrics
through APIs Explorer and client libraries. The following examples demonstrate
the usage in command line, more specifically the curl tool.
Tip: You need to authenticate your requests when calling the API with curl .
See Authenticate for using REST for more details.
This shell alias may come in handy:
$ alias gcurl='curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"' .
Get the Agent Engine monitored resource definition
The following command retrieves the definition of the monitored resource using projects.monitoredResourceDescriptors , as
well as all available labels which can be used for filtering:
gcurl https://monitoring.googleapis.com/v3/projects/ PROJECT_ID /monitoredResourceDescriptors/aiplatform.googleapis.com/ReasoningEngine
The labels should include resource_container , location and
reasoning_engine_id .
List available agent metric definitions
The following command uses projects.metricDescriptors to retrieve all metrics and label filters for Agent Engine:
gcurl https://monitoring.googleapis.com/v3/projects/ PROJECT_ID /metricDescriptors?filter = 'metric.type=starts_with("aiplatform.googleapis.com/reasoning_engine")'
The result should include the definition for the following metrics as well as
their specific labels:
aiplatform.googleapis.com/reasoning_engine/request_count
aiplatform.googleapis.com/reasoning_engine/request_latencies
aiplatform.googleapis.com/reasoning_engine/cpu/allocation_time
aiplatform.googleapis.com/reasoning_engine/memory/allocation_time
Query time-series data for request_count
You can use projects.timeSeries.list along with parameters like interval , filter , and
aggregation to query time-series data.
The following example shows how to query the raw data points for request_count
metric for a specific agent instance during a specific time window:
Note: Certain characters need to be URL-encoded.
gcurl https://monitoring.googleapis.com/v3/projects/ PROJECT_ID /timeSeries?filter = 'metric.type="aiplatform.googleapis.com/reasoning_engine/request_count"%20AND%20resource.labels.reasoning_engine_id=" RESOURCE_ID "&interval.endTime=2025-03-26T11:00:0.0-08:00&interval.startTime=2025-03-26T10:00:0.0-08:00'
Replace the following:
PROJECT_ID : Your Google Cloud project ID.
RESOURCE_ID : The Agent Engine instance ID. This is not always
required. You can query across multiple Agent Engine instances within the same
project.
interval.startTime and interval.endTime : The start (inclusive) and end
(exclusive) of the time interval, in RFC 3339 format. For example,
"2025-03-26T11:22:33Z" for Coordinated Universal Time (UTC) and "2025-03-26T11:22:33-08:00" for Pacific Standard Time (PST).
See the complete definition and more examples in
RFC 3339 .
You should receive a response similar to the following:
{
"timeSeries" : [
{
"metric" : {
"labels" : {
"response_code" : "200" ,
"response_code_class" : "2xx"
},
"type" : "aiplatform.googleapis.com/reasoning_engine/request_count"
},
"resource" : {
"type" : "aiplatform.googleapis.com/ReasoningEngine" ,
"labels" : {
"reasoning_engine_id" : " RESOURCE_ID " ,
"location" : " LOCATION " ,
"project_id" : " PROJECT_ID "
}
},
"metricKind" : "DELTA" ,
"valueType" : "INT64" ,
"points" : [
{
"interval" : {
"startTime" : "2025-03-26T18:55:27.001Z" ,
"endTime" : "2025-03-26T18:56:27Z"
},
"value" : {
"int64Value" : "25"
}
},
{
"interval" : {
"startTime" : "2025-03-26T18:54:27.001Z" ,
"endTime" : "2025-03-26T18:55:27Z"
},
"value" : {
"int64Value" : "36"
}
}
// ... more data points ...
]
}
// ... potentially more time series with other response codes ...
],
"unit" : "1"
}
See
projects.timeSeries.list
for more details on the response format.
Create custom metrics for an agent
If the built-in agent metrics don't cover your specific use case, you can define custom metrics. You can create custom metrics using the following methods:
Log-based metrics : Observe trends and patterns in a large volume of log entries.
User-defined metrics : Metrics that aren't defined by Google Cloud, such as capturing application-specific data or client-side system data.
Log-based metrics
The following steps demonstrate how to create and use a log-based metric ( tool_calling_count ) for an example workflow where multiple agents call multiple tools, and you
want to count tool invocations:
Specify your tool to write a log entry every time it's called. For example,
"tool-\<tool-id\> invoked by agent-\<agent-id\>" .
Create a new counter-type log-based metric through the Google Cloud console:
Go to Log-based Metrics page in the Google Cloud console:
Go to Log-based Metrics
In the User-defined metrics section, click Create metric .
The Create log-based metric pane appears.
For Metric type , select Counter
For Details section, enter the Log-based metric name . For
example, tool_calling_count . Optionally, enter the Description and Units .
For the Filter selection section, do the following:
In the Select project or log bucket drop-down list, select
Project logs
In the Build filter field, enter the log filter using the logging query language .
For example:
resource . type = "aiplatform.googleapis.com/ReasoningEngine"
resource . labels . reasoning_engine_id = " RESOURCE_ID "
textPayload =~ "tool-\d+ invoked by agent-\d+" -- assuming both tool and agent IDs are numeric
For the Labels section, add two new labels by clicking the
Add label button.
For the first label, do the following:
In the Label name field, enter tool .
In the Field name field, enter textPayload .
In the Regular expression field, enter (tool-\d+) invoked by agent-\d+ .
For the second label, do the following:
In the Label name field, enter agent .
In the Field name field, enter textPayload .
In the Regular expression field, enter tool-\d+ invoked by (agent-\d+) .
Tip: If such tool invocation logs are already available in the project,
click Preview to test the regular expressions for tool
and agent .
Click Done .
Click Create metric .
To view the tool_calling_count metric and its associated logs, do the following in the Google Cloud console:
Go to Metrics Explorer page in the Google Cloud console:
Go to Metrics Explorer
Click Select a metric to open a search bar.
Enter Vertex AI Agent Builder Reasoning Engine in the search bar and click Vertex AI Agent Builder Reasoning Engine .
Click the Logs-based metrics metric category, then click Logging/user/tool_calling_count . Adjust the time range if necessary.
(Optional) Filter by the labels tool and agent .
To get the total invocation count for a specific tool for all agents,
set the filter label tool with the value of that tool ID.
To get the total invocation count for a specific agent for all tools,
set the filter label agent with the value of that agent ID.
Optionally, set the Sum By to tool or agent to get the total count broken down by different tools or agents.
Note: New log-based metrics are associated with the same
agent monitored resource
aiplatform.googleapis.com/ReasoningEngine ,
so you can rely on labels such as reasoning_engine_id for
filtering and aggregation.
See Logging an agent for instructions on how to write agent logs, and
Log-based metrics overview for more details on log-based metrics.
User-defined metrics
The following steps demonstrate how to create and use a user-defined metric ( token_count ) for an example workflow where multiple agents call multiple models, and you
want to calculate the total count of consumed tokens (assuming that you track the number of tokens since application startup for each invoking agent and target model):
Define the custom metric type by calling projects.metricDescriptors.create
with the following parameters:
name : a URL string, such as projects/ PROJECT_ID
Request body : a MetricDescriptor
object:
{
"name" : "token_count" ,
"description" : "Token Consumed by models." ,
"displayName" : "Token Count" ,
"type" : "custom.googleapis.com/token_count" ,
"metricKind" : "CUMULATIVE" ,
"valueType" : "INT64" ,
"unit" : "1" ,
"labels" : [
{
"key" : "model" ,
"valueType" : "STRING" ,
"description" : "Model."
},
{
"key" : "agent" ,
"valueType" : "STRING" ,
"description" : "Agent."
}
],
"monitoredResourceTypes" : [
"generic_node"
]
}
The new metric token_count is created with the kind Cumulative ,
representing the total number of tokens since application
startup. See Metric kinds and types
for more details about the Cumulative metrics. The labels model and
agent represent the name of the target large language model (LLM) and invoking agent.
You can find the token_count metric in the Metrics Explorer :
Go to Metrics Explorer page in the Google Cloud console:
Go to Metrics Explorer
Click Select a metric to open a search bar.
Enter Generic node in the search bar and click Custom metrics .
Click Token Count .
Note: This step only needs to be done once.
Write data points to the new metric by calling projects.timeSeries.create with the following parameters:
name : a URL string, such as projects/ PROJECT_ID
Request body : a list of TimeSeries
objects:
{
"timeSeries" : [
{
"metric" : {
"type" : "custom.googleapis.com/token_count" ,
"labels" : {
"model" : "model-1" ,
"agent" : "agent-1"
}
},
"resource" : {
"type" : "generic_node" ,
"labels" : {
"project_id" : " PROJECT_ID " ,
"node_id" : " RESOURCE_ID " ,
"namespace" : "" ,
"location" : "us-central1"
}
},
"points" : [
{
"interval" : {
"startTime" : "2025-03-26T10:00:00-08:00" ,
"endTime" : "2025-03-26T10:01:00-08:00"
},
"value" : {
"int64Value" : 15
}
}
]
},
{
"metric" : {
"type" : "custom.googleapis.com/token_count" ,
"labels" : {
"model" : "model-1" ,
"agent" : "agent-2"
}
},
"resource" : {
"type" : "generic_node" ,
"labels" : {
"project_id" : " PROJECT_ID " ,
"node_id" : " RESOURCE_ID " ,
"namespace" : "" ,
"location" : "us-central1"
}
},
"points" : [
{
"interval" : {
"startTime" : "2025-03-26T10:00:00-08:00" ,
"endTime" : "2025-03-26T10:01:00-08:00"
},
"value" : {
"int64Value" : 20
}
}
]
}
// ... more time series ...
]
}
Note: Each combination of the label values forms a time-series, which
needs to be reported individually in the projects.timeSeries.create
request. This step needs to be performed periodically from your code. The
count value is non-decreasing until reset to zero upon application
restart. See CUMULATIVE metrics at
TimeInterval for the specific requirement on the startTime and endTime .
Once the data points are uploaded through the Cloud Monitoring API, you
can view the new metric token_count through the Google Cloud console:
Go to Metrics Explorer page in the Google Cloud console:
Go to Metrics Explorer
Click Select a metric to open a search bar.
Enter Generic node in the search bar and click Custom metrics .
Click Token Count . Adjust the time range and configure label values for model or agent if necessary.
Note: New user-defined metrics are not associated with the Agent
Engine monitored resource
aiplatform.googleapis.com/ReasoningEngine .
See User-defined metrics overview for more guidance on creating and using user-defined metrics.
Create alerts for an agent
You can use metrics in combination with alerts. See
Alerting overview for more details.
The following example
demonstrates how to create a threshold alert for the request_latencies metric
so that you receive notifications when the latency crosses a predefined value for a specified duration:
Go to Alerting page in the Google Cloud console:
Go to Alerting
Click Create Policy . The Create alerting policy page opens.
For Policy configuration mode , select Builder .
In the Select a metric drop-down menu, select
Vertex AI Reasoning Engine -> reasoning_engine -> Request Latency .
In the Add filters section, optionally configure filters (such as
reasoning_engine_id , response_code ).
In the Transform data section, toggle Rolling window and
Rolling window function to values such as 5min and
99th percentile (monitor the 99th percentile of the
request latency over the 5-minute alignment period).
Click Next .
In the Configure alert trigger section, do the following:
Select Threshold for Condition Types .
Select an Alert trigger , such as Any time series violates .
Select a Threshold position , such as Above threshold .
Enter a threshold value, such as 5000ms .
Click Next .
In the Configure notifications and finalize alert section, do the following:
Select one or more notification channels. See
Manage notification channels
for more details.
(Optional) Configure notification subject, incident auto-close duration,
application labels, policy labels, severity level and additional
documentation.
Set the policy name in the Name the alert policy section, such as
latency-99p-alert .
Click Create policy .
In the event of an incident, see
Incidents for metric-based alerting policies
for more information on acknowledging and investigating the incident and muting the alert.
You can find more alert examples in
Sample policies in JSON .
Monitor metrics for an agent
You can use the Vertex AI Agent Engine Overview dashboard to
monitor the operational health and performance of your agents.
View the default dashboard
Go to the Dashboards page in the Google Cloud console:
Go to Dashboards
Select your Google Cloud project.
In the My Dashboards pane, add the filter Name:Vertex AI Agent Engine Overview .
Click Vertex AI Agent Engine Overview to display the default agent dashboard.
Customize the default dashboard
The default dashboard contains only the agent
built-in metrics . To add your own
custom metrics to the dashboard, use the following steps to
copy and customize the default dashboard:
Open the default dashboard .
Click Copy Dashboard . In the Copy Dashboard dialog, click Copy .
The dashboard copy opens. You can also find the dashboard copy in the My Dashboards pane
under the Custom category.
In the dashboard copy, follow these steps to add a metric:
Click Add widget . The Add widget side panel appears.
For Data , select Metric . The Configure widget side
panel appears.
Click Select a metric to open a search bar.
If your custom metric is created using
log-based metrics :
Enter Vertex AI Agent Builder Reasoning Engine in the search bar and click
Vertex AI Agent Builder Reasoning Engine .
Click the Log-based metrics metric category, then click a metric,
such as Logging/user/tool_calling_count .
Click Apply .
If your custom metric is created using
user-defined metrics :
Enter Generic Node in the search bar and click Generic Node .
Click the Custom metrics metric category, then click a metric, such
as Token Count .
Click Apply .
A new chart displaying your custom metric appears in the dashboard.
You can further adjust the layout of the dashboard, for example:
Move your widget by holding the widget title and dragging it to another
location on the same dashboard.
Resize your widget by holding the widget bottom right corner and adjusting
its size.
See Add charts and tables to a custom dashboard for more
details on adding metric charts using
Prometheus Query Language (PromQL) , as well as tabulating
your metrics.
If you have configured custom alerts , see
Display alerting policies and alerts on a dashboard
to add such alerts to your dashboard.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
