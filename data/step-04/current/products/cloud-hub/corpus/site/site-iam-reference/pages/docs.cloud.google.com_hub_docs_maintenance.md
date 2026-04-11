---
title: "View maintenance activities \_|\_ Cloud Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/hub/docs/maintenance
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/hub/docs/maintenance
source_metadata:
  url: https://docs.cloud.google.com/hub/docs/maintenance
  title: "View maintenance activities \_|\_ Cloud Hub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Cloud Hub
Guides
Send feedback
View maintenance activities
Stay organized with collections
Save and categorize content based on your preferences.
Some Google Cloud services perform maintenance activities to keep your
resources reliable, secure, and up-to-date. You can view scheduled, started,
completed, and canceled maintenance across Google Cloud services in a
Google Cloud project on the Maintenance page.
The Maintenance page displays maintenance activities for Google Cloud
services that are supported by
Unified Maintenance .
Some maintenance activities let you configure or control the activity.
For example, many Google Cloud services with scheduled maintenance let
you set a maintenance window. Other maintenance activities are entirely managed
by Google and you cannot modify or reschedule them.
Before you begin
To view maintenance activities for resources in a project, the
Unified Maintenance API must be enabled on your Google Cloud project.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
The Maintenance page only supports
viewing data by project . To get an aggregate view of
maintenance across projects, centralize your logs in a
single project. You can then choose the project that stores your logs on the
Maintenance page.
Required roles
To get the permissions that
you need to view maintenance activities,
ask your administrator to grant you the
Logs Viewer ( roles/logging.viewer )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
The Logs Viewer role is included in the Cloud Hub
Operator ( roles/cloudhub.operator ).
For information about permissions to perform additional tasks with maintenance,
logs such as setting alerts and notifications, see the
Unified Maintenance documentation .
View current and scheduled maintenance
To view maintenance activities that are scheduled and started, follow
these steps:
In the Google Cloud console, go to the Maintenance page,
Go to Maintenance
From the project selector, select the project that you want to view.
The Maintenance page displays the total number of scheduled and started
activities in the Maintenance summary section.
The Maintenance table displays scheduled and started activities.
If you can control or configure an activity, the
more_vert Settings menu is
available for that activity.
To filter the displayed maintenance activities, select options from the
following selectors:
Category - Select the types of maintenance that you want to view.
Infrastructure maintenance is regular maintenance on
Google Cloud network equipment and host machines. Service update
maintenance is an update to services that include bug fixes, changes, or
new features.
Location - Select resource locations that you want to view.
Resource Type - Select the types of resources you want to view.
To run or reschedule a maintenance activity that you can control, click
more_vert Settings and then click
Reschedule or Run maintenance . Documentation that explains how to
reschedule or run the maintenance activity is displayed.
To view details about a maintenance activity, click the activity name.
The Maintenance details page displays the following information:
Description - A description of the maintenance activity. It includes
links to product-specific information to help you manage the maintenance
activity.
Timeline - The scheduled start time, scheduled end time, and actual
start time (if the activity has started).
Resource progress - A summary of the number of resources with
scheduled, running, successful, and cancelled state.
Locations - The locations of impacted resources.
Affected Google Cloud resources - A list of resources that are impacted
by the maintenance activity with the impacted resource name, location,
resource type, maintenance state, and timeline (scheduled start time,
actual start time, actual end time and duration).
If the activity can be rescheduled, the Reschedule button links to
documentation that explains how to reschedule the activity.
View maintenance history
To view maintenance activities that are completed or canceled,
follow these steps:
In the Google Cloud console, go to the Maintenance page,
Go to Maintenance
From the project selector, select the project that you want to view.
The Maintenance page displays the total number of completed and canceled
activities in the Maintenance summary section.
The Maintenance history table displays completed and canceled
activities in the last 30 days.
To filter the displayed maintenance activities, select options from the
following selectors:
Category - Select the types of maintenance that you want to view.
Infrastructure maintenance is regular maintenance on
Google Cloud network equipment and host machines. Service update
maintenance is an update to services that include bug fixes, changes, or
new features.
Location - Select resource locations that you want to view.
Resource Type - Select the types of resources you want to view.
To view details about a maintenance activity, click the activity name.
The Maintenance details page displays the following information:
Description - A description of the maintenance activity. It includes
links to product-specific information to help you manage the maintenance
activity.
Timeline - The scheduled start time, scheduled end time, actual start
time, actual end time, and duration of the maintenance activity.
Resource progress - A summary of the number of resources with
scheduled, running, successful, and cancelled state.
Locations - The locations of impacted resources.
Affected Google Cloud resources - A list of resources that are impacted
by the maintenance activity with the impacted resource name, location,
resource type, maintenance state, and timeline (scheduled start time,
actual start time, actual end time and duration).
What's next
Learn more about Unified Maintenance .
Learn about setting alerts and notifications for maintenance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
