---
title: "Access control with IAM \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/access-control
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/access-control
  title: "Access control with IAM \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Access control with IAM
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Workstations uses Identity and Access Management (IAM) to
manage access to workstations and workstation configurations. To grant access,
assign one or more Identity and Access Management roles to a
principal (user, group, or
service account ). The policy defines
which roles are assigned to which principals.
Enable required Identity and Access Management roles
If the Identity and Access Management permissions you need haven't yet been set up, follow these
instructions to set up one or more of the following roles:
Cloud Workstations User
Cloud Workstations Creator
Cloud Workstations Admin
Cloud Workstations Network Admin
Cloud Workstations Limit Exempted Creator
Cloud Workstations Policy Admin
Cloud Workstations User : for developers using a workstation
To get the permissions that
you need to access a workstation,
ask your administrator to grant you the
following IAM roles:
Cloud Workstations User ( roles/workstations.user )
on the workstation
Cloud Workstations Operation Viewer ( roles/workstations.operationViewer )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Cloud Workstations Creator : for developers creating and connecting to workstations
To get the permissions that
you need to view workstation configurations, create workstations, and access workstations,
ask your administrator to grant you the
following IAM roles:
Cloud Workstations Creator ( roles/workstations.workstationCreator )
on the project or individual workstation configuration
Cloud Workstations Operation Viewer ( roles/workstations.operationViewer )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Cloud Workstations automatically grants the Cloud Workstations User role
( roles/workstations.user ) on any workstation that you create
as Cloud Workstations Creator.
Cloud Workstations Admin : for administrators creating and updating workstation configurations and workstation clusters
To get the permissions that
you need to create the Cloud Workstations resources in your project,
ask your administrator to grant you the
Cloud Workstations Admin ( roles/workstations.admin )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For more information about using the Google Cloud console to change permissions,
see the following section,
Add users and edit permissions using the console .
Cloud Workstations Network Admin : for network administrators creating and updating Shared VPC permissions
To get the permissions that
you need to create the Cloud Workstations resources in your Shared VPC,
ask your administrator to grant you the
Cloud Workstations Network Admin ( roles/workstations.networkAdmin )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For more information about using the Google Cloud console to change permissions,
see the following section,
Add users and edit permissions using the console .
Cloud Workstations Limit Exempted Creator : for developers creating and connecting to workstations
To get the permissions that
you need to view workstation configurations, create workstations exempted from `maxUsableWorkstations` limit, and access workstations,
ask your administrator to grant you the
following IAM roles on the project:
Cloud Workstations Limit Exempted Creator ( roles/workstations.workstationLimitExemptedCreator ) - the project or individual workstation configuration
Cloud Workstations Operation Viewer ( roles/workstations.operationViewer ) - the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Cloud Workstations Policy Admin : for developers updating IAM policy of their workstations
To get the permissions that
you need to update IAM policy of the workstation which allows granting access to the entire workstation or its individual ports,
ask your administrator to grant you the
Cloud Workstations Policy Admin ( roles/workstations.policyAdmin )
IAM role on the workstation.
Cloud Workstations automatically grants the
Cloud Workstations Policy Admin role
( roles/workstations.policyAdmin ) on any workstation that you create as
Cloud Workstations Creator, if the
Grant Policy Admin role to workstation creators option is enabled on the
Cloud Workstations configuration. For more information about this option,
see the
Add users
section of the Create a workstation configuration
guide.
Add users and edit permissions using the Google Cloud console
If you're an administrator for Cloud Workstations, you must have the
Cloud Workstations Admin role (or legacy Editor or Owner role)
assigned to your account.
To add users or edit permissions, follow these steps:
Navigate to the Cloud Workstations Workstation configurations page.
To add new users, click Add users next to the name of the configuration,
and enter new user information in the New principals field.
To change existing permissions on a configuration, click the
arrow_drop_down expander arrow on the
row with the configuration name, select Edit permissions , and then select Add principal .
Figure 1. Add users and edit permissions from the Cloud Workstations Workstations configurations pane.
What's next
Limit workstations per developer .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
