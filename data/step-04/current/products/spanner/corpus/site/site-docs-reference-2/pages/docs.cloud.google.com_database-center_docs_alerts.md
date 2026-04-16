---
title: "Monitor your database fleet with alerting policies \_|\_ Database Center \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/database-center/docs/alerts
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/database-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/database-center/docs/alerts
  title: "Monitor your database fleet with alerting policies \_|\_ Database Center\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Database Center
Guides
Send feedback
Monitor your database fleet with alerting policies
Stay organized with collections
Save and categorize content based on your preferences.
Preview
— Monitoring your database fleet in Database Center
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
You can process personal data for
this feature
as outlined in the
Cloud Data
Processing Addendum , subject to the obligations and restrictions described in the
agreement under which you access Google Cloud.
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document describes how to use the Database Center to use alerting
policies and incidents created by them to monitor your database fleet. You can
create alerting policies , which actively monitor metric data. When the values
of that metric meet conditions set in the alerting policy, an incident is
created. An incident is a record of when the conditions of the policy are
violated.
Before you begin
Complete the following in the Google Cloud project that stores your alerting
policies:
Ensure that Database Center is set up for your organization .
To get the permissions that
you need to create and modify alerting policies by using the Google Cloud console,
ask your administrator to grant you the
following IAM roles on your Google Cloud project:
Create and modify alerting policies by using the Google Cloud console:
Monitoring Editor ( roles/monitoring.editor )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For more information about Cloud Monitoring roles, see
Control access with Identity and Access Management .
Ensure that you're familiar with the general concepts of alerting policies.
For more information, see Alerting overview .
View incidents and policies
Alerting policies in your Google Cloud project generate incidents that help you
monitor your database fleet in Database Center. You can only use
alerting policies for an individual Google Cloud project. You can't create an
alerting policy for an organization.
To see the alerting policies configured for your Google Cloud project and the
incidents they create, do the following:
In the Google Cloud console, go to the Database Center
page.
Database Center
When you open Database Center for the first time, the
dashboard displays all available databases, resources, health issues, and
database issues for your selected scope.
In the Google Cloud console menu bar, select a Google Cloud project.
Click Alerts in the Database Center dashboard.
The Alerts tab displays all your database-related incidents and policies
and includes the following:
An Incidents pane that lists all incidents in your database fleet
created by the alerting policies that are configured in your
Google Cloud project.
A Policies pane that lists the alerting policies that are configured
for your Google Cloud project
Learn about an incident
An incident is a record of when the condition or conditions of an alerting
policy are met. This information can help you troubleshoot the issues that
caused the incident.
To view details about an incident, in the Incidents pane, click an incident
in the Incident summary column. The incident opens in Google Cloud Observability and you
can see data captured when the incident was opened. For example, details might
include metric data and show when the threshold for alerting policy was
violated. This page also displays other information to help you understand the
failure, like logs and labels.
To learn more about incidents, including how to investigate and manage an
incident, see
Incidents for metric-based alerting policies
in the Google Cloud Observability documentation.
Learn about and manage a policy
An alerting policy describes the circumstances under which you want to be
alerted and how you want to be notified about an incident. When that data
monitored by the alerting policy meets the alerting policy condition,
Google Cloud Observability creates an incident and sends the notifications.
To view the details of an alerting policy, in the Policies pane, click the
name of the policy. The details for the policy open in Google Cloud Observability and
include information about the metric type being monitored, the threshold, and
user-defined labels.
To learn more about alerting policies, see
Manage alerting policies in the
Google Cloud Observability documentation.
Create, edit, copy, or delete an alerting policy
In Database Center, you can create, edit, copy, or delete an alerting
policy. After you start one of these actions, you complete the process in
Google Cloud Observability.
To create an alerting policy, click
add Create new alert policy . For more
information, see
Create an alerting policy
in the Google Cloud Observability documentation.
To edit or copy a policy, click more_vert More options for a
policy in the Policies pane, and select the corresponding option. Editing
and copying a policy is similar to
creating a metric-based alerting policy .
However, not all fields can be modified. When done, click Save policy .
To delete a policy, click more_vert More options for a
policy in the Policies pane, and select Delete . In the confirmation
dialog, select Delete .
What's next
Learn more about Google Cloud Observability .
Learn more about alerts .
Learn more about metric-based incidents .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
