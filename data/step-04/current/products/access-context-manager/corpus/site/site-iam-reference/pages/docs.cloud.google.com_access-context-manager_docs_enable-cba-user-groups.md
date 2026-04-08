---
title: "Enforce certificate-based access for a user group \_|\_ Access Context Manager\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/enable-cba-user-groups
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/enable-cba-user-groups
  title: "Enforce certificate-based access for a user group \_|\_ Access Context Manager\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Enforce certificate-based access for a user group | Access Context Manager | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Access Context Manager
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
How-to guides
All how-to guides
Access control with IAM
Create an access policy
Create a basic access level
Create a custom access level
Use mobile devices with access levels
Manage an access policy
Create custom constraints
Manage access levels
Make bulk changes to access levels
Audit logging
Use Context-Aware Access
Set up context-aware access
Define access policies using access levels
Apply policies to user groups with access bindings
Configure session controls for re-authentication
Configure a credential strength policy
Configure Chrome browser attributes
Configure enterprise certificate conditions
Configure time and date conditions
Manage access bindings
Context-aware access enforcement points
Use certificate-based access
Certificate-based access overview
Understand mutual TLS at Google Cloud
Set up certificate-based access
Create access levels for certificate-based access
Enforce certificate-based access for a user group
Enforce certificate-based access with VPC Service Controls
Enable certificate-based access in client applications
Enable certificate-based access for web applications
Enable certificate-based access for VMs
Setting up Endpoint Verification
Enable certificate-based access with your enterprise certificates
Enable certificate-based access with Endpoint Verification certificates
Configure certificate-based access for Workload Identity Federation
Concepts
All concepts
Overview
Scoped policies
Custom access levels
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Before you begin Create a user group
Assign the Cloud Access Binding Admin role
Bind a CBA access level to a user group
Bind a CBA access level to a user group and specific applications
Exempt an application from a binding
Home
Documentation
Security
Access Context Manager
Guides
Was this helpful?
Send feedback
Enforce certificate-based access for a user group
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Create a user group
Assign the Cloud Access Binding Admin role
Bind a CBA access level to a user group
Bind a CBA access level to a user group and specific applications
Exempt an application from a binding
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
Console gcloud
More
In the console, go to IAM .
Go to IAM
On the Permissions tab, click Grant access , then configure
the following:
New principals : Specify the group to which you want to grant the
role.
For Select a role option, select
Access Context Manager > Cloud Access Binding Admin .
Click Save .
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
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
