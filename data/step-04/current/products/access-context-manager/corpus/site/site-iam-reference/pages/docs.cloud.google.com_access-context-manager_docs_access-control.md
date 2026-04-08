---
title: "Access control with IAM \_|\_ Access Context Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/access-control
  title: "Access control with IAM \_|\_ Access Context Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Access control with IAM | Access Context Manager | Google Cloud Documentation
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
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
Required roles Admin allows read-write access
Editor allows read-write access
Reader allows read-only access
Organization Viewer allows access to VPC Service Controls using the Google Cloud console
What's next
Home
Documentation
Security
Access Context Manager
Guides
Was this helpful?
Send feedback
Access control with IAM
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Required roles Admin allows read-write access
Editor allows read-write access
Reader allows read-only access
Organization Viewer allows access to VPC Service Controls using the Google Cloud console
What's next
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
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
