---
title: "Configure monitoring notifications for repository growth \_|\_ Artifact Registry\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications
  title: "Configure monitoring notifications for repository growth \_|\_ Artifact\
    \ Registry \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Guides
Send feedback
Configure monitoring notifications for repository growth
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create an alerting policy that can notify you when the
Artifact Registry repository growth exceeds a limit. These
instructions are for the Google Cloud console.
For more information about alerting policies, see
Alerting overview .
Before you begin
To get the permissions that
you need to create and modify alerting policies by using the Google Cloud console,
ask your administrator to grant you the
Monitoring Editor ( roles/monitoring.editor )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For more information about Cloud Monitoring roles,
see Control access with Identity and Access Management .
Ensure that you're familiar with the general concepts of alerting policies.
For information about these topics, see
Alerting overview .
Configure the notification channels that you want to use to receive any
notifications. For redundancy purposes, we recommend that you create
multiple types of notification channels. For more information, see
Create and manage notification channels .
Create an alerting policy
To get notified when your Artifact Registry repository size grows beyond a specific size,
create an alerting policy. The alerting policy monitors the size of your repository and when that
size exceeds the threshold you specify, notifications are sent to all notification channels
attached to the alerting policy.
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
In the Resources menu, select Artifact Registry Repository .
In the Metric categories menu, select Repository .
In the Metrics menu, select Repository size .
To show all metric types, even those without data, click Active . By
default, the menus only show metric types with data. For more information,
see Metric not listed in menu .
Filter
Optional.
Use the resource_container label to alert for a project or
organization by entering the project ID or organization ID.
Use the repository_id label to alert for a specific repository. For more
information, see
Filter the selected time series .
Across time series
Time series aggregation
none
Rolling window
Use default.
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
Set to the size of the repository in bytes that triggers the alert. For example, to trigger an
alert if repository size grows larger than 0.5GB, set the threshold value to 500000000 .
Retest window
The default value is No retest . With this setting, a single measurement can result in a
notification. For more information and an example, see
Alignment period and duration settings.
What's next
To learn more about metric-threshold alerting policies, see
Create metric-threshold alerting policies .
To view available Artifact Registry metrics, see
Google Cloud metrics
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
