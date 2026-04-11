---
title: "Grant users repository access \_|\_ Secure Source Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/secure-source-manager/docs/grant-users-repository-access
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/secure-source-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/secure-source-manager/docs/grant-users-repository-access
  title: "Grant users repository access \_|\_ Secure Source Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Secure Source Manager
Guides
Send feedback
Grant users repository access
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to grant repository-level roles to users, groups, and
service accounts in the Secure Source Manager web interface.
For information on which roles to grant for a certain use-case, see
Repository role management .
Required roles
To get the permissions that
you need to grant users repository-level roles,
ask your administrator to grant you the
following IAM roles:
Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor )
on the Secure Source Manager instance
Secure Source Manager Repo Admin ( roles/securesourcemanager.repoAdmin )
on the repository
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For information on granting Secure Source Manager roles,
see Access control with IAM and
Grant users instance access .
Grant users repository-level roles
Users, groups, and service accounts must be granted the Instance Accessor role
( roles/securesourcemanager.instanceAccessor ) or Instance Repository Creator
role ( roles.securesourcemanager.instanceRepositoryCreator ) before they can be
granted repository roles. For information on granting instance roles, see
Grant or revoke instance access .
If you're authenticating to Secure Source Manager using a third-party
identity provider and Workforce Identity Federation, then principals must be added
to your workforce identity pool, and granted at least the Instance Accessor role
( roles/securesourcemanager.instanceAccessor ). For information about managing
workforce identity pools, see
Manage workforce identity pools and providers .
You can use the Secure Source Manager API or the Secure Source Manager web interface to grant
users, groups, and service accounts repository-level roles. For more
information, see
Access control with IAM .
To grant users or service accounts repository-level roles using the web
interface:
To access the Secure Source Manager instance through its web interface, copy the following URL
into your browser address bar.
INSTANCE_ID - PROJECT_NUMBER . LOCATION .sourcemanager.dev
Replace the following:
INSTANCE_ID with the instance name.
PROJECT_NUMBER with the instance's Google Cloud
project number. For information on identifying projects, see
Identifying projects .
LOCATION with the instance's region.
From the My repositories page, Select your repository.
Click the Permissions tab.
In the People and permissions section, click Add users .
In the Add principal field, enter the email of the user or service
account you want to grant the role to.
In the Assign a role menu, select the role to assign.
Click Save .
To add additional roles click the
edit Edit icon and add the
roles using the Assign a role menu.
What's next
Use Git source code management with Secure Source Manager.
Learn more about access control with IAM .
Grant and revoke IAM roles .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
