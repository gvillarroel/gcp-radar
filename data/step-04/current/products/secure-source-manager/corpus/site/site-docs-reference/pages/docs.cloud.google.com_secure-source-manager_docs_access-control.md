---
title: "Access control with Identity and Access Management \_|\_ Secure Source Manager\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-source-manager/docs/access-control
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-source-manager/docs/create-access-instance
source_metadata:
  url: https://docs.cloud.google.com/secure-source-manager/docs/access-control
  title: "Access control with Identity and Access Management \_|\_ Secure Source Manager\
    \ \_|\_ Google Cloud Documentation"
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
Access control with Identity and Access Management
Stay organized with collections
Save and categorize content based on your preferences.
This page describes access control with Identity and Access Management (IAM) in
Secure Source Manager.
Overview
IAM permissions and
roles determine your ability to create, view,
edit, or delete data in a Secure Source Manager instance.
A role is a collection of permissions. You can't grant a principal permissions
directly; instead, you grant them a role. When you grant a role to a principal,
you grant them all the permissions that the role contains. You can grant
multiple roles to the same principal.
Grant predefined Secure Source Manager roles
Every Secure Source Manager API method requires that the principal (user,
group, or service account) making the request has the required permissions to
use the resource. Permissions are given to principals by setting policies that
grant the principal a predefined role on the resource.
Secure Source Manager roles are not visible in the Google Cloud console
until you have assigned each role to a principal. For information on granting
roles on Secure Source Manager instance and repository resources, see
Grant and revoke IAM roles .
Secure Source Manager Permissions
To view all available Secure Source Manager permissions, search the
IAM permissions reference for
securesourcemanager. .
Secure Source Manager predefined roles
In addition to the project and folder level, Secure Source Manager
IAM roles can be granted on the instance and repository
resources.
To view all predefined Secure Source Manager roles and the permissions
available in each role, see the IAM basic and predefined roles reference .
Instance Roles
Instance roles give principals permissions on the Secure Source Manager
instance. Repository roles are granted separately.
Repository Roles
Repository roles give principals permissions on Secure Source Manager
repositories.
Custom roles
In addition to the predefined roles, Secure Source Manager also supports
custom roles. For more information, see
Creating and managing custom roles in the
IAM documentation.
Repository role management
The following sections describe required roles for common repository actions.
Manage repositories
To get the permissions that
you need to create, delete, and add users to a Secure Source Manager repository,
ask your administrator to grant you the
following IAM roles:
Secure Source Manager Instance Repository creator ( roles/securesourcemanager.instanceRepositoryCreator )
on the Secure Source Manager instance
Repo Admin ( roles/securesourcemanager.repoAdmin )
on the repositories you want to manage
Create repositories
To get the permissions that
you need to create repositories in a Secure Source Manager instance,
ask your administrator to grant you the
following IAM roles:
Secure Source Manager Instance Repository creator ( roles/securesourcemanager.instanceRepositoryCreator )
on the Secure Source Manager instance
Secure Source Manager Repo Creator ( roles/securesourcemanager.repoCreator )
on the Google Cloud project
View a repository
To get the permissions that
you need to view a repository,
ask your administrator to grant you the
following IAM roles:
Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor )
on the Secure Source Manager instance
Secure Source Manager Repo Reader ( roles/securesourcemanager.repoReader )
on the repository
Use a repository and create issues and pull requests
To get the permissions that
you need to push to and pull from a repository, create issues and pull requests,
ask your administrator to grant you the
following IAM roles:
Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor )
on the Secure Source Manager instance
Secure Source Manager Repo Writer ( roles/securesourcemanager.repoWriter )
on the repository
What's next
Learn more about managing access in Google Cloud with the
IAM overview .
Grant Secure Source Manager IAM roles .
Authenticate to Secure Source Manager programmatically.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
