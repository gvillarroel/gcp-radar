---
title: "Quickstart: Set up an alert \_|\_ Personalized Service Health \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-health/docs/configure-alerts-dashboard
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-health/docs
source_metadata:
  url: https://docs.cloud.google.com/service-health/docs/configure-alerts-dashboard
  title: "Quickstart: Set up an alert \_|\_ Personalized Service Health \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Personalized Service Health
Guides
Send feedback
Quickstart: Set up an alert
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to set up an alert for Personalized Service Health events within
the Service Health dashboard. You can set up alerts for scenarios such
as new incidents or updates to existing incidents.
An alert uses an alerting policy, which describes the circumstances under which
you want to be alerted and how you want to be notified.
Before you begin
Enable the Service Health API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Verify that billing is enabled for your Google Cloud project .
If you're using an existing project for this guide, verify that you have the
permissions required to complete this guide . If you created
a new project, then you already have the required permissions.
Have a Cloud Monitoring notification channel, which defines where an
alert is sent. If you don't have a notification channel, you can create one
in the Google Cloud console
or by using the Monitoring API .
Required roles
To get the permissions that
you need to set up an alert,
ask your administrator to grant you the
following IAM roles on the project that you want to set up an alert for:
Logs Configuration Writer ( roles/logging.configWriter )
Monitoring AlertPolicy Editor ( roles/monitoring.alertPolicyEditor )
Monitoring NotificationChannel Viewer ( roles/monitoring.notificationChannelViewer )
Personalized Service Health Viewer ( roles/servicehealth.viewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create an alerting policy within the Service Health dashboard
Personalized Service Health provides alert templates to help you create alerting policies
without leaving the Service Health dashboard.
To create an alerting policy from the Service Health dashboard:
Navigate to the Service Health
dashboard .
Select Create Alert Policy at the upper-right corner.
Choose one of the example alert policy templates, configure proper
notification channels, and select Create Policies .
To create your own alerting policy based on an existing template, you can modify
one:
Navigate to the Service Health dashboard.
Click Create Alert Policy at the upper-right corner. The list of alert
policy templates appears.
Click the three dots for the template you want to modify, and choose
Customize alert policy . See the example alerting policies and
conditions for the fields and values you can
set.
Follow the prompts to edit the alert policy as needed, and click Save .
Update alerting policies
You can modify alerting policies in the Monitoring page of the
Google Cloud console .
When defining alert conditions, use the values found at Google Cloud
products and
locations .
What's next
Learn about alternative ways to set up alerts for service health events in
Cloud Logging .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
