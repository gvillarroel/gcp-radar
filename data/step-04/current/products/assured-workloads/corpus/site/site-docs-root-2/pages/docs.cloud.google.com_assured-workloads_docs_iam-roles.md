---
title: "IAM roles \_|\_ Assured Workloads \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/iam-roles
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/iam-roles
  title: "IAM roles \_|\_ Assured Workloads \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The names for some Assured Workloads control packages have changed. For information about the name change, see Control package renaming notice .
Home
Documentation
Security
Assured Workloads
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
IAM roles
This page describes the Identity and Access Management (IAM) roles you can use to
configure Assured Workloads. Roles limit a principal's ability to
access resources. Only grant a principal the permissions it needs in order to
interact with applicable Google Cloud APIs, features, or resources.
To be able to create an Assured Workloads folder, you must be assigned
one of the roles listed below with that ability, as well as a Cloud Billing
access control role. You must also have an active, valid billing account. For
more information, see
Overview of Cloud Billing access control .
Required roles
Following are the minimum required Assured Workloads-related roles. To
learn how to grant, change, or revoke access to resources using
IAM roles, see
Granting, changing, and revoking access to resources .
Assured Workloads Administrator ( roles/assuredworkloads.admin ):
For creating and deleting Assured Workloads folders.
Resource Manager Organization Viewer ( roles/resourcemanager.organizationViewer ):
Access to view all resources belonging to an organization.
Note: To be able to assign roles, you must have the
resourcemanager.organizations.setIamPolicy permission. This permission is
included in the Organization Administrator role
( resourcemanager.organizationAdmin ). To learn more, see
Using predefined roles .
Assured Workloads roles
Following are the IAM roles that are associated with
Assured Workloads, and how to grant these roles using the
Google Cloud CLI. To learn how to grant these roles in the
Google Cloud console or programmatically, see
Granting, changing, and revoking access to resources
in the IAM documentation.
Replace the ORGANIZATION_ID placeholder with the actual organization
identifier and example@customer.org with the user email address. To retrieve
your organization ID, see
Retrieving your organization ID .
roles/assuredworkloads.admin
For creating and deleting Assured Workloads folders. Allows read-write
access.
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member="user:example@customer.org" \
--role="roles/assuredworkloads.admin"
roles/assuredworkloads.editor
Allows read-write access.
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member="user:example@customer.org" \
--role="roles/assuredworkloads.editor"
roles/assuredworkloads.reader
For getting and listing Assured Workloads folders. Allows read-only
access.
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member="user:example@customer.org" \
--role="roles/assuredworkloads.reader"
Custom roles
If you want to define your own roles to contain bundles of permissions that
you specify, use custom roles .
Assured Workloads IAM best practices
Properly securing IAM roles to follow
least privilege is a Google Cloud security
best practice. This principle follows the rule that users should only have
access to the products, services, and applications required by their role. Users
are not currently restricted from using out-of-scope services with
Assured Workloads projects when deploying products and services outside
of an Assured Workloads folder.
The
list of in-scope products by control package
helps to guide security admins when creating
custom roles that limit user access to
only in-scope products within the Assured Workloads folder. Custom
roles are able to help support obtaining and maintaining compliance within an
Assured Workloads folder.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
