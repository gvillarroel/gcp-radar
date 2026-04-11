---
title: "Configure alerts \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/alerts
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/alerts
  title: "Configure alerts \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
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
Configure alerts
You can configure alerts to notify you when an event occurs. For example, you can create an alert
to notify you when there is an authentication failure by a connector.
Integration Connectors supports the following two types of alert notifications:
Alerts in Cloud Monitoring
Alerts in Cloud Logging
Alerts in Cloud Monitoring
You can create and configure Cloud Monitoring alerts to notify
you when an Integration Connectors resource exceeds or drops below a specified threshold. For example, you can create an alert
to notify you when the total data processed by a connector exceeds a specified threshold value.
For more information about alerting in Cloud Monitoring, see Alerting overview .
Before you begin
Make sure that you have the Monitoring Editor ( roles/monitoring.editor ) IAM role granted on your Google Cloud project. For information about granting roles, see Manage access .
Learn about the general concepts of alerting policies, see Alerting overview .
Configure notification channels to receive alerts, see Create and manage notification channels .
Create an alert
In the Google Cloud console, go to the Monitoring > Alerting page.
Go to Alerting
Click + Create Policy .
To select the resource, metric, and filters for Application Integration, click Select a metric and enter Connectors in the Filter by resource or metric name input field.
Click Apply .
Click Next to open the Configure alert trigger section.
Set a threshold value to trigger the alert.
Click Next to open the Configure notifications and finalize alert section.
(Optional) To add notifications to your alerting policy, click
Notification channels and select one or more notification
channels from the drop-down list. Click OK .
To be notified when incidents are opened and closed, check
Notify on incident closure . By default, notifications are sent only when
incidents are opened.
(Optional) Use the Documentation text field to enter any information that you
want included in a notification message.
Click Alert policy name and enter a name for the alerting policy.
Click Create Policy .
The alerts are sent to the essential contacts configured in your Google Cloud Project. For
more information on adding essential contacts, see
Managing contacts for notifications .
Alerts in Cloud Logging
You can create and configure log-based alerts to notify you whenever a specific message
appears in your included logs. For example, you can create a log-based alert for messages
that match a specific pattern.
Create an alert
You can create log-based alerts from the Logs Explorer page in the
Google Cloud console or by using the Monitoring API. For detailed instructions, see
the following sections:
Create a log-based alert by
using the Logs Explorer
Create a
log-based alert by using the Monitoring API
Note: You may incur additional charges for using
Cloud Monitoring API directly. For more information, see Cloud Monitoring pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
