---
title: "Configure alerts and notifications \_|\_ Unified Maintenance \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/unified-maintenance/docs/configure-alerts-and-notifications
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/unified-maintenance/docs/audit-logging
source_metadata:
  url: https://docs.cloud.google.com/unified-maintenance/docs/configure-alerts-and-notifications
  title: "Configure alerts and notifications \_|\_ Unified Maintenance \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Unified Maintenance
Guides
Send feedback
Configure alerts and notifications
Stay organized with collections
Save and categorize content based on your preferences.
Unified Maintenance generates logs through Cloud Logging. You can create alerts
and notifications based on different log conditions and through the supported
webhooks, or other notification channels.
Configure alert policies
Alert policies for planned maintenance are available through Cloud Logging.
You can get notified for any of the following conditions:
When new maintenance events are scheduled for resources that your projects use.
When the state of a maintenance event changes (for example, from SCHEDULED to
STARTED ).
When there is a change to the scheduled start or end time of the maintenance.
When maintenance impacts resources in a specific location.
Notifications use log-based alerting policies. Once you have configured an alert
policy, you will receive a notification each time your conditions are met.
Alerts are subject to Cloud Monitoring limits .
Configure notification channels
Log alerts use notification channels ,
which notify you, or your on-call team, when an alerting policy is triggered, and which
support a variety of integrations, such as:
Email
Pub/Sub
PagerDuty
Slack
SMS
Webhooks
Unified Maintenance works with Google Cloud Observability to configure third-party integrations.
For third-party integrations, use webhooks to send a notification to any public
endpoint such as ServiceNow , DataDog, or OpsGenie
or use Pub/Sub to send a notification to any private endpoint. You have
control over which logs are sent to these third-party tools through logging filters.
For more information about writing filters, see Logging query language .
To learn more about webhooks, see Create and manage notification channels in the Google Cloud Observability documentation.
Configure notifications with Cloud Logging
You can create a logs-based alert to be notified whenever a log that matches a
provided filter is ingested. For more information, see Configure log-based alerting policies .
In the Google Cloud console, go to the Logs Explorer page:
Go to Logs Explorer
Select your Google Cloud project.
Click Create log alert . Depending on the size of your window, this option
might appear in the Actions menu.
In the Create logs-based alert policy pane, provide an Alert Policy Name
and any Documentation that you would like included with the notification.
Click Next .
Optional: Choose a severity level for this policy.
Create an inclusion filter to determine which logs are included in the alert
by writing a query. For more information about writing queries, see
Logging query language .
The following example is an alert for any scheduled maintenance event associated
with any Cloud SQL resource:
log_id ( "maintenance.googleapis.com/maintenance_events" ) AND jsonPayload . resource . type = "sqladmin.googleapis.com/Instance" AND jsonPayload . state = "SCHEDULED"
Optional: Click Preview logs . If there are no resources that meet the
criteria defined, no preview is output.
Optional: Click Add a label to create labels from log fields (for example,
description ) if you're integrating with a third-party tool such as Slack.
Click Next .
Optional: Configure the minimum Time between notifications and the
Incident autoclose duration . Click Next .
If you have configured a supported channel, you can select it from the
Notifications Channels list; otherwise, you can click Manage Notification
Channels and add a supported channel. For more information, see
Create and manage notification channels .
Click Save . Your log-based alert is now ready to test.
What's next
Log schema overview
Implement common alert policies
Control maintenance
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
