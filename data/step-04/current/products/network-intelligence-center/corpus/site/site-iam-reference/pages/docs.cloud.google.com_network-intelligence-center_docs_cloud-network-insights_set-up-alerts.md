---
title: "Set up alerts and notifications \_|\_ Network Intelligence Center - Cloud\
  \ Network Insights \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-alerts
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-alerts
  title: "Set up alerts and notifications \_|\_ Network Intelligence Center - Cloud\
    \ Network Insights \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Cloud Network Insights
Guides
Set up alerts and notifications
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Once you've configured AppNeta
alarm rules
to identify specific network events or performance issues, the alarms send
structured logs to Cloud Logging. You can then create
log-based alert policies in Google Cloud to act on these logs.
These alerts and notifications help you proactively respond to network incidents
before customers start to call in, understand where and when troublespots
developer, and surface hidden issues in your network.
Cloud Network Insights alerting is based on logs received from AppNeta's
alarms. A log entry of structured data is sent from AppNeta to Cloud Logging.
Once received by Cloud Logging, logs are evaluated by log-based alert policies
that filter logs for specific alarms. When a log matches an alert policy, an
incident is created. After an incident
is created, Google Cloud can send notifications through selected notification
channels (email, Slack, PagerDuty, or Pub/Sub) when an incident occurs.
Cloud Network Insights provides alert policy templates for
common alerting scenarios, such as when a Monitoring Point is offline or if
there's an outage on a monitored network path, to simplify your alert
policy setup. If you want to alert on incidents beyond the predefined
templates, create an alert in Cloud Logging.
Before you begin
You must be granted one of the following roles in the project in which
Cloud Network Insights is enabled:
Cloud Network Insights Editor
( roles/networkmanagement.CloudNetworkInsightsEditor )
Cloud Network Insights Viewer
( roles/networkmanagement.CloudNetworkInsightsViewer )
To add a notification channel to an alert policy, you must also be granted the
following role in that project:
Monitoring NotificationChannel Editor
( roles/monitoring.notificationChannelEditor )
Alerts and notifications are only triggered when both logging
is set up in AppNeta and Cloud Logging receives alarm logs
( insights_alarm ) or event logs ( insights_event ).
Create log-based alert policies
Once you have Alarm Rules
configured in AppNeta, create alert policies in
Google Cloud to receive notifications.
Use predefined templates
You can create alert policies using the predefined templates in Cloud Network Insights.
Open the Google Cloud console and navigate to Network Intelligence >
Cloud Network Insights >
Alert Policies .
Go to Alert Policies
Click Create alert policy .
Select an alert policy template.
Optionally, customize the alert policy.
Click more_vert
View more actions and select Customize alert policy to change
which logs are included in the alert or the notification frequency and
autoclose duration.
Click show options and modify the notification frequency and
autoclose duration.
Optionally choose where to receive notifications.
If you don't have notification channels set up, see Create and manage
notification channels .
Click Create .
Use Logs Explorer
You can also create log-based alerts in Logs Explorer.
Cloud Network Insights logs use one of the following for logName :
Alarm logs - networkmanagement.googleapis.com/insights_alarm
Event logs - networkmanagement.googleapis.com/insights_event
For more information, see
Build and save queries by using the Logging query language .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
