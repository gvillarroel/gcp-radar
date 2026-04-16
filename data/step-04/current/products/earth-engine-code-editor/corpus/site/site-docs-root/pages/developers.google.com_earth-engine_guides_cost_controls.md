---
title: "Cost controls \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/cost_controls
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/playground
source_metadata:
  url: https://developers.google.com/earth-engine/guides/cost_controls
  title: "Cost controls \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
Cost controls
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Daily limits on Earth Engine compute time (EECU-time) can be set at the project level to help control computational costs.
Setting a daily limit provides a safeguard against excessive spending, though it is an approximate quota that Earth Engine may occasionally exceed.
Daily limits are managed in the Quotas & System Limits page of the Google Cloud console by editing the Earth Engine compute time (EECU-time) per day in seconds quota.
Fine-grained monitoring and alerting for EECU-time usage can be configured in Cloud Monitoring, including alerts based on workload tags or total in-progress time.
It is possible to programmatically cancel running Earth Engine tasks that exceed a specified EECU-seconds limit.
This page describes how to set daily limits and monitor in-progress EECU-time to
help control computational costs in Earth Engine.
Limit daily EECU-time
To help control your Earth Engine costs, you can set a limit on the amount of
EECU-time that your project is allowed to consume in a day by updating the
following Cloud Quota:
Earth Engine compute time (EECU-time) per day in seconds : A project-level
quota that limits the aggregate EECU-time of all users in a project.
For more information about Earth Engine quotas you can set, see Earth Engine
quotas .
Note: This quota is approximate. It provides a safeguard against excessive
spending, but is not designed to strictly limit EECU-time. Earth Engine might
occasionally run a query that exceeds the quota limit.
Set a daily limit
You can view and edit quotas in the Quotas & System
Limits page of the Google
Cloud console. When you adjust a quota, the change takes effect within a few
minutes. To set or update a daily limit, do the following:
Verify you have the Permissions for changing project quota
on your selected project.
Navigate to the Quotas
page of Google Cloud console.
Use the Metric filter in the Filter search box to filter for
earthengine.googleapis.com/daily_eecu_usage_time . If you don't see the
Earth Engine compute time (EECU-time) per day in seconds quota, verify
that you have enabled the Earth Engine API for the selected project.
Click Edit quota from the three-dot menu.
If the Unlimited checkbox is selected, deselect it.
Enter the limit in EECU-seconds you want in the New value field. Click
Submit Request .
For more information about viewing and managing quotas, see View and manage
quotas .
Returned error messages
After you set a daily limit, Earth Engine returns the following error message
when you exceed it:
Your usage exceeded the custom quota for
'earthengine.googleapis.com/daily_eecu_usage_time', which is adjustable by
your administrator in the Google Cloud console:
https://console.cloud.google.com/quotas/?project=_.
Once the quota is exceeded, Earth Engine requests will fail until the quota is
reset the next day or the limit is increased by an administrator.
Fine-grained monitoring and alerting
If you need to control and monitor costs at a finer-grain than the daily
limit , the following recipes require more set-up but enable
alerting and cancelation at the
workload_tag and batch
task level.
These recipes use the in-progress EECU-time monitoring that's surfaced for
running requests. See the Monitoring
usage guide for more information about
in-progress EECU-time reporting in Cloud Monitoring.
Configure alerts
You can configure alerts in Cloud Monitoring to warn you when a metric hits a
certain threshold. The Cloud Monitoring alerting system is very flexible. We've
collected a few of our favorite recipes here, but feel free to cook with custom
configurations that suit your needs.
Recipe: Chat notification for workload_tag usage
This example shows how to wire up a chat notification (e.g., a Google Chat
message or a Slack message) if the Earth Engine compute usage for a given
workload_tag exceeds a
threshold. This could be useful in the case that you have a set of export tasks
which create data for your production service, and you want to be notified if
they collectively consume more than a certain amount of EECU-time.
Visit the Alerting
page in the Cloud
Monitoring section of the Cloud console.
Choose "Create policy" to configure a new alerting policy.
Select the metric:
In-progress EECU-seconds
represents the number of pending (not yet successful) compute seconds.
You may need to deselect the "Active" filter to see the metric.
Add a filter:
Use workload_tag == your_workload_tag_value to filter to a particular
workload tag.
Use compute_type = batch or compute_type = online to filter to a
particular type of computation.
Choose an appropriate "Rolling window" value. If you're not sure, use 5
min .
Select "Sum" from the "Rolling window function" menu.
Choose the alert trigger and give it a name.
Select the notification channels.
For this recipe, we'll choose "Manage Notification Channels" from the
modal window, then "Add New" to paste in the Space ID of your Google
Chat. This ID can be found in the URL of the Gmail or Chat page when
viewing the chat.
If using Google Chat, you'll also need to type @Google Cloud
Monitoring and select the app to add the Alerting app to your Space (if
your organization allows).
Choose the relevant policy and severity labels.
Write a short documentation snippet.
Publish your new alerting policy!
Once set, you'll get alerts in your chat space any time that the threshold is
exceeded for your project.
Recipe: Get email alerts for total in-progress EECU-time
Follow the recipe for chat notifications, but make two changes:
Skip the step for adding a workload_tag filter, so that you can see all
values.
When selecting a notification channel, instead of configuring a chat
channel, add your email address instead.
Alert latency and timing
Note that there's a small delay in the propagation of Monitoring reports, so you
shouldn't expect instantaneous notifications.
Cancel resource-heavy tasks
Given a limit, it's possible to use the Earth Engine API to periodically check
the list of pending tasks and request cancellation for any running task that
exceeds the EECU-seconds limit.
Recipe: Run a snippet of code in a notebook or local Python shell
eecu_seconds_limit = 50 * 60 * 60 # 50 hours
print ( "Watching for operations to cancel..." )
while ( True ):
for op in ee . data . listOperations ():
if op [ 'metadata' ][ 'state' ] == 'RUNNING' :
if op [ 'metadata' ] . get ( 'batchEecuUsageSeconds' , 0 ) > eecu_seconds_limit :
print ( f "Cancelling operation { op [ 'name' ] } " )
ee . data . cancelOperation ( op [ 'name' ])
time . sleep ( 10 ) # 10 seconds
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-07 UTC."],[],[]]
