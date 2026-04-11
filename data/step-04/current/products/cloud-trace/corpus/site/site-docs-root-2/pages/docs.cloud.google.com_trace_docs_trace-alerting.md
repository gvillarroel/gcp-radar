---
title: "Monitor trace quota usage and spans ingested \_|\_ Cloud Trace \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/trace-alerting
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/trace-alerting
  title: "Monitor trace quota usage and spans ingested \_|\_ Cloud Trace \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Guides
Send feedback
Monitor trace quota usage and spans ingested
Stay organized with collections
Save and categorize content based on your preferences.
You can create alerting policies in Cloud Monitoring
to monitor the number of Cloud Trace spans ingested per month,
your quota usage, and your rate of span ingestion. If you have never created
an alerting policy, see Managing alerting policies for
detailed information about using the Cloud Monitoring console.
Monitor over-quota on Cloud Trace API usage
To create an alerting policy that triggers when your monthly
Cloud Trace spans ingested
exceeds your quota, use the following settings.
Steps to create an alerting policy .
To create an alerting policy, do the following:
In the Google Cloud console, go to the
notifications Alerting page:
Go to Alerting
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
If you haven't created your notification channels and if you want to be notified, then click
Edit Notification Channels and add your notification channels. Return to the
Alerting page after you add your channels.
From the Alerting page, select Create policy .
To select the resource, metric, and filters, expand the Select a metric menu and
then use the values in the New condition table:
Optional: To limit the menu to relevant entries, enter the resource or
metric name in the filter bar.
Select a Resource type . For example, select VM instance .
Select a Metric category . For example, select instance .
Select a Metric . For example, select CPU Utilization .
Select Apply .
Click Next and then configure the alerting policy trigger.
To complete these fields, use the values in the Configure alert trigger table.
Click Next .
Optional: To add notifications to your alerting policy, click
Notification channels . In the dialog, select one or more notification
channels from the menu, and then click OK .
To be notified when incidents are openend and closed, check
Notify on incident closure . By default, notifications are sent only when
incidents are openend.
Optional: Update the Incident autoclose duration . This field determines when
Monitoring closes incidents in the absence of metric data.
Optional: Click Documentation , and then add any information that you
want included in a notification message.
Click Alert name and enter a name for the alerting policy.
Click Create Policy .
New condition Field
Value
Resource and Metric
In the Resources menu, select Consumed API .
In the Metric categories menu, select Api .
In the Metrics menu, select Request count .
(The metric.type is serviceruntime.googleapis.com/api/request_count ).
Filter
service = cloudtrace.googleapis.com response_code = 429
Across time series
Time series aggregation
sum
Rolling window
1 m
Rolling window function
sum
Configure alert trigger Field
Value
Condition type
Threshold
Alert trigger
Any time series violates
Threshold position
Above threshold
Threshold value
0
Retest window
1 minute
Monitor monthly span ingestion
To create an alerting policy that triggers when your monthly
Cloud Trace spans ingested
exceeds a user-defined limit, use the following settings.
Steps to create an alerting policy .
To create an alerting policy, do the following:
In the Google Cloud console, go to the
notifications Alerting page:
Go to Alerting
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
If you haven't created your notification channels and if you want to be notified, then click
Edit Notification Channels and add your notification channels. Return to the
Alerting page after you add your channels.
From the Alerting page, select Create policy .
To select the resource, metric, and filters, expand the Select a metric menu and
then use the values in the New condition table:
Optional: To limit the menu to relevant entries, enter the resource or
metric name in the filter bar.
Select a Resource type . For example, select VM instance .
Select a Metric category . For example, select instance .
Select a Metric . For example, select CPU Utilization .
Select Apply .
Click Next and then configure the alerting policy trigger.
To complete these fields, use the values in the Configure alert trigger table.
Click Next .
Optional: To add notifications to your alerting policy, click
Notification channels . In the dialog, select one or more notification
channels from the menu, and then click OK .
To be notified when incidents are openend and closed, check
Notify on incident closure . By default, notifications are sent only when
incidents are openend.
Optional: Update the Incident autoclose duration . This field determines when
Monitoring closes incidents in the absence of metric data.
Optional: Click Documentation , and then add any information that you
want included in a notification message.
Click Alert name and enter a name for the alerting policy.
Click Create Policy .
New condition Field
Value
Resource and Metric
In the Resources menu, select Global .
In the Metric categories menu, select Billing .
In the Metrics menu, select Monthly trace spans ingested .
Filter
Across time series
Time series aggregation
sum
Rolling window
60 m
Rolling window function
max
Configure alert trigger Field
Value
Condition type
Threshold
Alert trigger
Any time series violates
Threshold position
Above threshold
Threshold value
You determine the acceptable value.
Retest window
Minimum acceptable value is 30 minutes.
Monitor rate of span ingestion
You can also monitor the rate at which spans are ingested. For this case,
you want to select the metric type Trace spans ingested . The default
settings in the Transform data and Across time series sections are
appropriate for this metric type.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
