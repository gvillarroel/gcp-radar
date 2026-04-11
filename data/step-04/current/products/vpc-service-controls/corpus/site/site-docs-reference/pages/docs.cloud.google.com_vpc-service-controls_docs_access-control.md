---
title: "Access control with IAM \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/access-control
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/service-perimeters
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/access-control
  title: "Access control with IAM \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Access control with IAM
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the Identity and Access Management (IAM) roles required to
configure VPC Service Controls.
Required roles
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
Roles that provides the permission:
Access Context Manager Editor role ( roles/accesscontextmanager.policyEditor )
Access Context Manager Reader role ( roles/accesscontextmanager.policyReader )
You can only create, list, or delegate scoped policies if you have those permissions
at the organization level. After you create a scoped policy, you can grant permission to
manage the policy by adding IAM bindings on the scoped policy.
Permissions granted at the organization-level apply to all access policies, including
the organization-level policy and any scoped policies.
Note: Any Access Context Manager permissions granted on folders or projects have no effect
on scoped policies as permissions can only be granted at the organization-level or on individual policies.
The access control for scoped policies is independent of the projects or folders in their scopes.
The following predefined IAM roles provide the necessary
permissions to view or configure service perimeters and access levels:
Access Context Manager Admin ( roles/accesscontextmanager.policyAdmin )
Access Context Manager Editor ( roles/accesscontextmanager.policyEditor )
Access Context Manager Reader ( roles/accesscontextmanager.policyReader )
To grant one of these roles, use the Google Cloud console or run
one of the following commands in the gcloud CLI. Replace
ORGANIZATION_ID with the ID of your Google Cloud
organization.
Grant Manager Admin role to allow read-write access
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member = "user:example@customer.org" \
--role = "roles/accesscontextmanager.policyAdmin"
Grant Manager Editor role to allow read-write access
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member = "user:example@customer.org" \
--role = "roles/accesscontextmanager.policyEditor"
Grant Manager Reader role to allow read-only access
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member = "user:example@customer.org" \
--role = "roles/accesscontextmanager.policyReader"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
