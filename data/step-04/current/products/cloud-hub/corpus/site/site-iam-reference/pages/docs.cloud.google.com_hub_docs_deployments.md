---
title: "View deployments \_|\_ Cloud Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/hub/docs/deployments
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/hub/docs/maintenance
source_metadata:
  url: https://docs.cloud.google.com/hub/docs/deployments
  title: "View deployments \_|\_ Cloud Hub \_|\_ Google Cloud Documentation"
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
View deployments
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can view failed deployments and updates to application templates
for applications deployed from Application Design Center so that you
can quickly respond to the changes.
In Application Design Center, you design application templates for
App Hub applications and then deploy application instances from those
templates. This separation of design and deployment lets you make changes to
application design without impacting your running applications instances.
On the Deployments page in Cloud Hub, you can perform the
following tasks:
View failed application deployments from App Design Center and
the cause of the failure. You can then investigate the failures in
App Design Center by viewing the Cloud Build logs or
making updates to the application.
App Design Center uses Cloud Build to deploy your
applications.
View application instances that have updated application templates.
Before you begin
Ensure that you have performed the following steps:
Set up App Hub for a folder .
Set up App Design Center .
Create and deploy your applications. To learn more, see the
App Design Center overview .
Note: Cloud Hub only supports applications in a folder configured for
application management. It doesn't support applications in a
host project or a single-project boundary .
Required roles
To get the permissions that
you need to view data in Cloud Hub,
ask your administrator to grant you the
Cloud Hub Operator ( roles/cloudhub.operator )
IAM role on the management project for a folder.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
To make updates to application instances or templates in
App Design Center, you must have additional permissions. See the App Design Center access control documentation for
information about roles and permissions.
View failed deployments
If your application deployment failed, you can view details and take a suggested
action to resolve the issue.
In the Google Cloud console, go to the Deployments page,
Go to Deployments
Select a folder configured for application management
( ) from the project picker at the top of
the page.
The Applications infrastructure deployment notifications displays the
most recent failed deployments from App Design Center. The
Issue column indicates the reason for the failure based on information
in the Cloud Build logs. If there are no failed deployments in
the selected folder, the table is empty.
Investigate the an application failure with one of the following options:
To investigate the identified issue for an application, click
View in ADC in the table row to view the application in
App Design Center.
To view details for an application in App Design Center,
click the application name.
To view a list of all deployments, click
View all Application infrastructure deployments .
View applications with available updates
If your deployed applications are based on templates have new revisions, you
can view the latest revision and redeploy your application to include the latest
changes.
In the Google Cloud console, go to the Deployments page,
Go to Deployments
Select a folder configured for application management
( ) from the project picker at the top of
the page.
The Applications infrastructure updates available section displays
deployed applications with an updated application template. If there are no
applications with an updated template in the selected folder, the table is
empty.
In the list of application, you can view an application or template by
clicking on its name. To review changes to a template and apply changes,
click Review and update application . For details about applying a
template revision, see Apply template revisions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
