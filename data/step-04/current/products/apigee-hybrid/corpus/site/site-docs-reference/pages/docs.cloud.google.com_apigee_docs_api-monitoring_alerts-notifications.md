---
title: "Setting up alerts and notifications \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-monitoring/alerts-notifications
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/hybrid/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-monitoring/alerts-notifications
  title: "Setting up alerts and notifications \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Setting up alerts and notifications
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
One of the main purposes of API Monitoring is to keep you informed
of unusual events or patterns, such as spikes in traffic or latencies.
To track events like these, you can
set up alerts , which are triggered when a specified event occurs.
An event that triggers an alert is called an incident .
You can set specific rules for an alert—for example, it
might be triggered by a 500 response code (Internal Service Error)
on a proxy. When an incident for the alert occurs, you can view its details
in the Incidents pane of the Google Cloud console Alerting page.
Note: You set up alerts and notifications in the
Google Cloud console, not the API Monitoring UI. See
Introduction to alerting
for more information about creating alerts in the Google Cloud console.
Note: To set up alerts and notification channels, you need
to be assigned the following roles:
roles/monitoring.alertPolicyEditor
roles/monitoring.notificationChannelEditor
See Apigee roles .
If you want to be notified when a particular alert is triggered, you
can set up a notification for the
alert. When an incident occurs, Apigee sends you
a notification with a summary of the event, including
links to the Google Cloud console and the Apigee UI, for further investigation.
There are two types of alerts in API Monitoring:
Metric-based alerts , which are triggered by changes in
API metrics .
Log-based alerts , which are based on API data stored by
Cloud logging .
Metric-based alerts
Metric-based alerts are triggered when a metric for API data reaches a specified level,
or starts to change rapidly. You define an alert rule using two main properties:
The metric : The quantity that triggers the alert—for example,
number of requests.
The threshold : The level that the metric must reach to trigger the alert.
Note: Starting May 1, 2026, Cloud Monitoring will begin charging for
alerting. Learn more about these pricing changes in
Pricing for alerting .
The following sections provide examples of metric-based alerts.
Alert for response code 500 on a proxy
The next example creates an alert when a response code 500 (Internal Server Error)
is returned. You can create a similar alert for any response code.
To create the alert, start by doing the following steps:
In the Google Cloud console, go to the Monitoring > Alerting > Policies page.
Go to Create alerting policy
Click Select a Metric .
Deselect the Active button.
Note: If there is no
recent API traffic data in your organization, the metric in the next step won't be
displayed unless this option is unselected.
Select a metric as follows:
If you are using Apigee hybrid v1.12, copy and paste the following in the Select a metric field:
apigee.googleapis.com/proxy/response_count
Note: If you are using Apigee hybrid v1.10 or v1.11,
use the following metric instead:
apigee.googleapis.com/proxyv2/response_count
Select Apigee Proxy .
In the pane that opens to the right, select Proxy .
In the next pane to the right, select Apigee proxy response count .
Click Apply .
Add a filter for the response code as follows:
Click Add filter .
Click in the Filter field and select
response_code from the drop-down menu.
In the Comparator , select = .
In the Value field, type 500 .
Click Done .
Configure the alert trigger
To configure the event that triggers the alert, first click Configure trigger in the
left-hand pane. Then do the following steps:
Under Condition type , select Threshold .
In the Alert trigger field, select Any time series violates .
In the Threshold position field, select Above threshold .
In the Threshold value field, enter 1 .
With these settings, an alert will be triggered whenever a response with code 500 is
returned.
Click Next to open the Configure notifications and finalize alert pane.
Set up a notification for the alert
In the Configure notifications and finalize alert pane, you can
set up a notification that will be sent when an alert is triggered. To do so:
Click in the
Notification Channels field. If you have already created a channel for the notification,
such as an email address or SMS number, you can select it under Notification Channels .
Otherwise, you need to add a channel by selecting
Manage Notification Channels . This opens the Notification channels pane,
where you can add one or more channels. See
Manage notification channels for more information. When you are done, return to the
Configure notifications and finalize alert pane.
Note: You may need to click the
refresh button next to Manage Notification Channels to display a new channel after you
create it.
Once you have selected one or more notification channels, click OK .
In the Documentation field, you can add a message that will be sent with the
notification. For example, the message might describe the reason for the alert, and contain
links to documentation explaining how to respond to it.
Click Next to review the details of the alert. If you are satisfied with them,
click Create Policy to create the alerting policy.
Adding a condition: Alert for response code 500 for HTTP POST requests on a proxy
You can create multiple conditions for an alert. For example, in the
alert for response code 500 on a proxy described in the previous section,
you might want to add the condition that the alert is only triggered for HTTP POST requests.
To do so, simply follow the
same steps as in the previous example ,
but after step 8, add another filter as follows:
Click Add filter .
Click in the Filter field and select method HTTP method in the drop-down
list.
In the Comparator field, select = .
In the Value field, enter POST .
Click Done .
Then continue with the steps in
Configure the alert trigger . After you are finished,
the alert will be triggered when the proxy receives a 500 response code from
an HTTP POST request.
See
Alert for combinations of response codes and HTTP methods for a related
example.
Viewing incident details
An API event that triggers an alert is called an incident .
You can view the details of recent incidents in the Google Cloud console
Alerting page .
Metrics and filters
A metric is the quantity that triggers an alert, for example, number of requests.
This section describes the metrics and filters you can use to create metric-based alerts.
There are two types of metrics:
New metrics : New versions of the Apigee metrics with improved
performance and reliability. These metrics are currently available
for Apigee and Apigee hybrid v1.12 and above. We recommend using the new metrics
when possible.
Original metrics : The original metrics are still supported
for use with Apigee hybrid v1.10 and v1.11.
New metrics
The table below lists the new metrics.
Note: These metrics are currently available
for Apigee and Apigee hybrid v1.12 and above. For Apigee
hybrid v1.10 and v1.11, use the original metrics .
Metric
Description
apigee.googleapis.com/proxy/details
Details relevant to the proxy that is deployed to an Apigee environment.
apigee.googleapis.com/proxy/request_count
Number of requests to the Apigee proxy since the last sample was recorded.
apigee.googleapis.com/proxy/response_count
Number of responses sent by the Apigee API proxy.
apigee.googleapis.com/proxy/latencies
Distribution of latencies, which are calculated from the time the request was received by
the Apigee proxy to the time the response was sent from the Apigee proxy to the client.
apigee.googleapis.com/target/request_count
Number of requests sent to the Apigee target since the last sample was recorded.
apigee.googleapis.com/target/response_count
Number of responses received from the Apigee target since the last
sample was recorded.
apigee.googleapis.com/target/latencies
Distribution of latencies, which are calculated from the time the request was sent to
the Apigee target to the time the response was received by the Apigee proxy.
Time does not include the Apigee API proxy overhead.
Original metrics
The following is a list of the original versions of the metrics shown in the table above,
which are still supported for use with Apigee hybrid v1.10 and v1.11 only.
Metric
Description
apigee.googleapis.com/proxyv2/details
Details relevant to the proxy that is deployed to an Apigee environment.
apigee.googleapis.com/proxyv2/request_count
Total number of requests received by the Apigee API proxy.
apigee.googleapis.com/proxyv2/response_count
Total number of responses returned by the Apigee API proxy.
apigee.googleapis.com/proxyv2/latencies_percentile
Percentile of all API proxy responses to a request.
apigee.googleapis.com/targetv2/request_count
Total number of requests received by the Apigee API target.
apigee.googleapis.com/targetv2/response_count
Total number of responses returned by the Apigee API target.
apigee.googleapis.com/targetv2/latencies_percentile
Percentile of all API target responses to a request.
Filters
Filters enable you to create alerts for subsets of API data. A filter specifies
a condition that defines the subset. For example, you can create an alert based on data for
a single proxy.
You can choose from the following filters:
Filter
Description
Metrics for which filter can be applied
env
Environment for the data.
All
location
Location for the data.
All
proxy_name
Proxy for the data.
All
proxy_deployment_type
Deployment type of the Apigee proxy
apigee.googleapis.com/proxy/details
apigee.googleapis.com/proxyv2/details
runtime_version
Runtime version for the data.
Original metrics
instance_id
Instance ID for the data.
Original metrics
method
HTTP method for the data.
All
response_code
HTTP response code for the data.
apigee.googleapis.com/proxy/response_count
apigee.googleapis.com/proxyv2/response_count
fault_code
Fault code for the data.
apigee.googleapis.com/proxy/response_count
apigee.googleapis.com/proxyv2/response_count
fault_source
Fault source for the data.
If you want to catch general errors that can occur anywhere in an
API network, set fault_source to proxy .
apigee.googleapis.com/proxy/response_count
apigee.googleapis.com/proxyv2/response_count
percentile
Apigee proxy response latencies percentile.
apigee.googleapis.com/proxyv2/latencies_percentile
Log-based alerts
In addition to the metric-based alerts described in the previous section, you can also create
log-based alerts , which monitor API data stored by
Cloud logging .
Setting up a log-based alert
The next example shows how to set up a log-based alert. See
Build queries in the Logs Explorer for more information.
Open the Logs Explorer
in the Google Cloud console.
Select Show query at the right-hand side of the Logs Explorer.
In the Query pane, enter a query like the example shown below.
resource.type="apigee.googleapis.com/Environment"
logName="projects/< project_id >/logs/apigee.googleapis.com%2Fanomaly_event"
Note: The / before anomaly_event
(the [LOG_ID]) must be URL-encoded as %2F . See the
LogEntry
reference page.
Click Run query . The results are displayed in the
Verify that the query returns the log entries you want to alert on.
Click Create alert below the Query pane.
Follow the procedure in the Create log-based alert policy dialog to create the alert.
See Configure log-based alerts for details.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
