---
title: "Access control with IAM \_|\_ Access Context Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/access-control
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/access-control
  title: "Access control with IAM \_|\_ Access Context Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Access Context Manager
Guides
Send feedback
Access control with IAM
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the Identity and Access Management (IAM) roles required to
configure to Access Context Manager.
Required roles
Note: Super administrators are granted the permissions provided
by the Access Context Manager roles by default. However, if you want the super
admin to be able to manage Access Context Manager using the Google Cloud console,
you must still assign the Resource Manager Organization Viewer role.
The following table lists the permissions and roles required to create and list
access policies:
Action
Required permissions and roles
Create an organization-level access policy or scoped policies
Permission: accesscontextmanager.policies.create
Role that provides the permission: Access Context Manager Editor role
( roles/accesscontextmanager.policyEditor )
List an organization-level access policy or scoped policies
Permission: accesscontextmanager.policies.list
Roles that provides the permission: Access Context Manager Editor role
( roles/accesscontextmanager.policyEditor )
Access Context Manager Reader role
( roles/accesscontextmanager.policyReader )
You can only create, list, or delegate scoped policies if you have those permissions
at the organization level. After you create a scoped policy, you can grant permission to
manage the policy by adding IAM bindings on the scoped policy.
Permissions granted at the organization-level apply to all access policies, including
the organization-level policy and any scoped policies.
Note: Any Access Context Manager permissions granted on folders or projects have no
effect on scoped policies as permissions can only be granted at the organization-level or on individual policies.
The access control for scoped policies is independent of the projects or folders in their scopes.
The following curated IAM roles provide the necessary permissions
to view or configure access levels or grant permissions to delegated administrators
on scoped policies using the gcloud command-line tool:
Access Context Manager Admin: roles/accesscontextmanager.policyAdmin
Access Context Manager Editor: roles/accesscontextmanager.policyEditor
Access Context Manager Reader: roles/accesscontextmanager.policyReader
Additionally, to let your users manage Access Context Manager using the
Google Cloud console, the Resource Manager Organization Viewer
( roles/resourcemanager.organizationViewer ) role is required.
Note: Users that own resources in the organization could learn the names of
access levels even without the required permissions. For example, Identity-Aware Proxy
generates a JWT with a
google.accessLevels
claim that contains the access level names satisfied by the request.
To grant one of these roles, use the Google Cloud console or
use the gcloud command-line tool:
Admin allows read-write access
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member = "user:example@customer.org" \
--role = "roles/accesscontextmanager.policyAdmin"
Editor allows read-write access
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member = "user:example@customer.org" \
--role = "roles/accesscontextmanager.policyEditor"
Reader allows read-only access
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member = "user:example@customer.org" \
--role = "roles/accesscontextmanager.policyReader"
Organization Viewer allows access to VPC Service Controls using the Google Cloud console
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member = "user:example@customer.org" \
--role = "roles/resourcemanager.organizationViewer"
What's next
Access Context Manager overview
Create an access policy
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
