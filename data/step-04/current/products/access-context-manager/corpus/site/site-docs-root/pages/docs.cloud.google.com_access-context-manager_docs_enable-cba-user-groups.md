---
title: "Enforce certificate-based access for a user group \_|\_ Access Context Manager\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/enable-cba-user-groups
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/enable-cba-user-groups
  title: "Enforce certificate-based access for a user group \_|\_ Access Context Manager\
    \ \_|\_ Google Cloud Documentation"
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
Enforce certificate-based access for a user group
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to enforce certificate-based access (CBA) using
Context-Aware Access policies that are based on a user group.
You can restrict access to all Google Cloud services by binding a
CBA access level to a user group. This restriction applies to all client
applications that call Google Cloud APIs.
Optionally, you can apply the restrictions to specific client applications or
exempt specific applications. The applications include both third-party
applications and first-party applications built by Google, such as
Cloud Console for the Google Cloud console and Google Cloud SDK for the
Google Cloud CLI .
Before you begin
Create a CBA access level
that requires certificates when determining access to resources.
Create a user group
Create a user group containing the
members that should be granted access based on the CBA access level.
Note: Exclude at least one Organization Admin or Organization
Owner from this group to reduce the risk of an accidental lockout.
Assign the Cloud Access Binding Admin role
Assign the Cloud Access Binding Admin
role to the user group.
You must have sufficient privileges to add
IAM permissions at the organization level. You need at least
the Organization Admin
and the Cloud Access Binding Admin roles.
Console
In the console, go to IAM .
Go to IAM
On the Permissions tab, click Grant access , then configure
the following:
New principals : Specify the group to which you want to grant the
role.
For Select a role option, select
Access Context Manager > Cloud Access Binding Admin .
Click Save .
gcloud
Sign in:
gcloud auth login
Assign the GcpAccessAdmin role by running the following command:
gcloud organizations add-iam-policy-binding ORG_ID \
--member = user: EMAIL \
--role = roles/accesscontextmanager.gcpAccessAdmin
ORG_ID is the ID for your organization. If you
don't already have your organization ID, you can use the following
command to find it:
gcloud organizations list
EMAIL is the email address of the person or
group you want to grant the role to.
Note: For read-only access to the bindings, you can assign the
accesscontextmanager.gcpAccessReader role.
Bind a CBA access level to a user group
In this binding option, the CBA access level applies to all client
applications for the user group that you specify.
In the console, go to the Console & APIs Access Policy page:
Go to Console & APIs Access Policy
Choose an organization, then click Select .
Click Manage access to choose the user groups that should have access.
Click Add , then configure the following:
Member groups : Specify the group to which you want to grant access. You
can only select groups that are not already bound to an access level.
Select access levels : Select the CBA access level to apply to the group.
Click Save .
Bind a CBA access level to a user group and specific applications
In some use cases, such as applications that support client certificates,
binding a CBA access level to a user group might be too
broad. You can use this option to apply CBA access levels to applications that
support client certificates.
The following example binds a CBA access level to the Google Cloud console,
the gcloud CLI, and a user's OAuth application.
Sign in to the gcloud CLI.
gcloud auth application-default login
Create a policy_file.yaml file.
You can specify applications using their OAuth client ID. To specify Google
applications, use the application name, such as Cloud Console for the
Google Cloud console. Only the Google Cloud console and Google Cloud SDK
Google applications are supported.
scopedAccessSettings:
- scope:
clientScope:
restrictedClientApplication:
name: Cloud Console
activeSettings:
accessLevels:
- CBA_ACCESS_LEVEL
- scope:
clientScope:
restrictedClientApplication:
name: Google Cloud SDK
activeSettings:
accessLevels:
- CBA_ACCESS_LEVEL
- scope:
clientScope:
restrictedClientApplication:
clientId: CLIENT_ID_1
activeSettings:
accessLevels:
- CBA_ACCESS_LEVEL
Replace the following:
CLIENT_ID_1 : The OAuth client ID.
CBA_ACCESS_LEVEL : A CBA access level name in the format
accessPolicies/POLICY_ID/accessLevels/ACCESS_LEVEL_NAME .
Create the CBA access level binding.
gcloud access-context-manager cloud-bindings create \
--group-key=' GROUP_KEY ' \
--organization=' ORG_ID ' \
--binding-file=.../policy_file.yaml
Replace GROUP_KEY with the Context-Aware Access group and
ORG_ID with your organization ID.
If you don't have the GROUP_KEY available, you can retrieve it by
calling the
get
method on the group resource.
(Optional) Update an existing access level binding.
gcloud access-context-manager cloud-bindings update \
--binding=' BINDING_NAME ' \
--binding-file=.../policy_file.yaml
Replace BINDING_NAME with the binding name that was automatically generated
when the binding was created.
Exempt an application from a binding
Another way to apply a CBA access level without blocking client applications
that don't support client certificates is to exempt those applications from the
policy.
The following steps assume that you have previously
created a CBA access level
that requires certificates when determining access to resources.
Create an exemption access level using one of the following methods.
Custom access level :
Provide true as the value in the CEL expression condition.
Basic access level :
Create an
IP range-based access level
by providing IP subnetworks 0.0.0.0/0 and ::/0 , which correspond to
IPv4 and IPv6 respectively.
Create an exemption_file.yaml file.
scopedAccessSettings:
- scope:
clientScope:
restrictedClientApplication:
clientId: CLIENT_ID_2
activeSettings:
accessLevels:
- EXEMPT_ACCESS_LEVEL
- scope:
clientScope:
restrictedClientApplication:
name: APPLICATION_NAME_2
activeSettings:
accessLevels:
- EXEMPT_ACCESS_LEVEL
Replace the following:
CLIENT_ID_2 : The OAuth client ID.
APPLICATION_NAME_2 : The application name.
EXEMPT_ACCESS_LEVEL : An exemption access level name in the
format accessPolicies/POLICY_ID/accessLevels/ACCESS_LEVEL_NAME .
Create the exemption binding policy.
gcloud access-context-manager cloud-bindings create \
--group-key=' GROUP_KEY ' \
--organization=' ORG_ID ' \
--binding-file=.../exemption_file.yaml
Replace GROUP_KEY with the Context-Aware Access group and
ORG_ID with your organization ID.
If you don't have the GROUP_KEY available, you can retrieve it by
calling the
get
method on the group resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
