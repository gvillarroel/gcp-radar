---
title: "Introduction to security and access controls in BigQuery \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/bigquery/docs/access-control-intro
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/access-control-intro
  title: "Introduction to security and access controls in BigQuery \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Introduction to security and access controls in BigQuery
This document provides an overview of access controls in BigQuery
using Identity and Access Management (IAM). IAM lets you grant granular
access to specific BigQuery resources and helps prevent access to other
resources. IAM helps you apply the security principle of least
privilege, which states that no IAM principal
should have more permissions than they actually need.
When an IAM principal such as a
user, group, or service account calls a Google Cloud API, that principal must
have the minimum IAM permissions necessary to use the resource.
To give a principal the required permissions, you grant an IAM
role to the principal.
This document describes how predefined and custom IAM roles can
be used to allow principals to access BigQuery resources.
To familiarize yourself with how access is managed in Google Cloud, see
IAM overview .
IAM role types
A role is a collection of permissions that can be granted to an IAM
principal. You can use the following types of roles
in IAM to grant access to BigQuery resources:
Predefined roles
are managed by Google Cloud and support
common use cases and access control patterns.
Custom roles provide
access according to a user-specified list of permissions. For information on
creating custom roles, see Create and manage custom roles
in the IAM documentation.
Note: When new capabilities are added to BigQuery, new permissions
might be added to predefined IAM roles. Also, new predefined
IAM roles can be added to BigQuery at any time. If your
organization requires role definitions to remain unchanged, you should create
custom IAM roles .
To determine if one or more permissions are included in a predefined
IAM role, you can use one of the following methods:
The BigQuery IAM roles and permissions
reference
The IAM roles and permissions index
The gcloud iam roles describe
command
The roles.get() method in the
IAM API
IAM roles in BigQuery
Permissions are not assigned directly to users, groups, or service accounts.
Instead, users, groups, or service accounts are granted one or more predefined
or custom roles that grant them permissions to perform actions on resources. You
grant these roles on a particular resource, but they also apply to all of that
resource's descendants in the resource hierarchy .
When you assign multiple role types to a user, the permissions granted are a
union of each role's permissions.
You can grant access to the following BigQuery resources:
Datasets and these resources within datasets:
Tables and views
Routines
Connections
Saved queries
Data canvases
Data preparations
Pipelines
Repositories
Grant access to Resource Manager resources
You can configure access to BigQuery resources through
Resource Manager by granting a BigQuery role to a principal and
then by granting that role on an organization, a folder, or a project.
When you grant roles to Resource Manager resources such as organizations and
projects, you're granting permissions on all of the BigQuery
resources in the organization or project.
For additional information on using IAM to manage access to
Resource Manager resources, see
Manage access to projects, folders, and organizations
in the IAM documentation.
Grant access to datasets
You can assign roles at the dataset level to provide access to a specific
dataset, without providing complete access to the project's other resources. In
the IAM resource hierarchy ,
BigQuery datasets are child resources of projects. For more information
on assigning roles at the dataset level, see
Control access to resources with IAM .
Caution: Don't grant BigQuery basic roles to datasets.
BigQuery's dataset-level basic roles existed prior to the introduction
of IAM. BigQuery basic roles provide excessive and
uneven access, and you are discouraged from using them. For example, the Owner
basic role does not provide table access permissions. For more information,
see Basic roles & permissions .
Grant access to individual resources within datasets
You can grant roles access to certain types of resources within datasets,
without providing complete access to the dataset's resources.
Roles can be applied to the following resources within datasets:
Tables and views
Routines
Note: Roles cannot be applied to models.
For more information on assigning roles at the table, view, or routine level,
see Control access to resources with IAM .
What's next
For more information about assigning roles to BigQuery
resources, see Control access to resources with
IAM .
For a list of BigQuery predefined IAM roles
and permissions, see BigQuery IAM roles and
permissions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
