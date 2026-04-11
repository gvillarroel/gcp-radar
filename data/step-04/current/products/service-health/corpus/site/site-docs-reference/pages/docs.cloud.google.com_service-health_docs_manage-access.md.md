---
title: "Manage Personalized Service Health access \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-health/docs/manage-access.md
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-health/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/service-health/docs/manage-access.md
  title: "Manage Personalized Service Health access \_|\_ Google Cloud Documentation"
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
Manage Personalized Service Health access
Stay organized with collections
Save and categorize content based on your preferences.
This document discusses how to set permissions and enable access so you can:
View service health events using the Service Health dashboard.
Pull service health information using the Service Health API.
Configure alerts relevant to your projects.
Before you begin
Verify that billing is enabled for your Google Cloud project .
Access the Service Health API and dashboard
Personalized Service Health provides a predefined servicehealth.viewer role that you can
use to provide access to project members. Use this role to access the
Service Health API and dashboard.
Role name
Description
Personalized Service Health permissions
roles/servicehealth.viewer Personalized Service Health viewer
Read-only access to service health events.
servicehealth.location.list
servicehealth.location.get
servicehealth.events.list
servicehealth.events.get
servicehealth.organizationEvents.list
servicehealth.organizationEvents.get
servicehealth.organizationImpacts.list
servicehealth.organizationImpacts.get
Tip: To gain the permissions to access Personalized Service Health while following the
principle of least privilege, ask your administrator to grant you the
roles/servicehealth.viewer (Personalized Service Health Viewer) role. If you
are already granted one of the Basic Roles (Viewer, Editor or Owner roles), you
already have the permissions needed to access Personalized Service Health.
You can use the roles and permissions directly through the gcloud CLI
to set up proper access controls. For example, you can grant the role directly
with the following command:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member { USER | GROUP | SERVICE_ACCOUNT } \
--role roles/servicehealth.viewer
You can view the Identity and Access Management (IAM) policy for the given project with the
following command:
gcloud projects get-iam-policy PROJECT_ID
Alternatively, you can add the permissions directly to an existing role:
gcloud iam roles update ROLE_ID --project = PROJECT_ID \
--add-permissions = servicehealth.events.list
gcloud iam roles update ROLE_ID --project = PROJECT_ID \
--add-permissions = servicehealth.events.get
gcloud iam roles update ROLE_ID --project = PROJECT_ID \
--add-permissions = servicehealth.locations.list
gcloud iam roles update ROLE_ID --project = PROJECT_ID \
--add-permissions = servicehealth.locations.get
Use APIs and services in your projects
Enable the Service Health API
for the project.
Grant the Service Usage Consumer
role ( roles/serviceusage.serviceUsageConsumer ).
Access logs and configure log alerts
Do the following:
Enable the Service Health API
for the project.
Get permissions for log-based alerts .
If you don't want to grant the Monitoring NotificationChannel Editor role
( roles/monitoring.notificationChannelEditor ), you can grant the Monitoring NotificationChannel Viewer role ( roles/monitoring.notificationChannelViewer ) instead to allow you to link to a notification channel to an alerting policy.
For more information about granting roles, see Manage access .
You might also be able to get the required permissions through custom roles or other predefined roles .
Enable Service Health API for a single project
Setting up alerts and pulling service health information require
enabling the Service Health API. You can enable the API through the
Google Cloud console or Google Cloud CLI.
Console
In the APIs and Services library, go to the Service Health API.
Go to the Service Health API
Alternatively, you can go to the
API Library and search
"Service Health API".
Select the project.
Select the Enable button.
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
Make sure that the most recent version of Google Cloud CLI is installed. Run
the following command from the Cloud Shell:
gcloud components update
Create or select a new project,
PROJECT_ID .
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Select the Google Cloud project that you created:
gcloud projects config set project PROJECT_ID
Enable the Service Health API in the project that you just created.
gcloud services enable servicehealth.googleapis.com \
--project PROJECT_ID
Script
You can use a script to enable the
Service Health API for projects in your organization or folder.
For background information, see
Enabling an API in your Google Cloud project .
The Service Health API and alerts will recognize new events a few hours after
API enablement.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
