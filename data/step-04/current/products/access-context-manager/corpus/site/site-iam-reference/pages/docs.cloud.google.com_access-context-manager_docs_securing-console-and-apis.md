---
title: "Set up Context-Aware Access \_|\_ Access Context Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/securing-console-and-apis
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/securing-console-and-apis
  title: "Set up Context-Aware Access \_|\_ Access Context Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Set up Context-Aware Access | Access Context Manager | Google Cloud Documentation
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
Before you begin
Required roles
Bind Google groups to access levels Bind a group to the access level
List group bindings
Deploy Endpoint Verification
What's next
Home
Documentation
Security
Access Context Manager
Guides
Was this helpful?
Send feedback
Set up Context-Aware Access
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Required roles
Bind Google groups to access levels Bind a group to the access level
List group bindings
Deploy Endpoint Verification
What's next
This page explains how to set up Context-Aware Access, bind access levels to a Google
group, and deploy Endpoint Verification. You can use Context-Aware Access to do the following:
Define access policies on Google Cloud resources based on attributes like
user identity, network, location, and device state.
Control session length and reauthentication methods for ongoing access.
Preview
— Session controls feature only
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Context-Aware Access is enforced any time that a user accesses a client application
that requires a Google Cloud scope, including the Google Cloud console on the
web and the Google Cloud CLI.
Before you begin
Create access levels. You can create basic access levels
or custom access levels .
Learn more about access levels .
Create a Google group
that contains the users that you want the access levels to apply to. To apply
Context-Aware Access restrictions, you bind the group to the access levels.
To access the resource, users in this group must satisfy at least one of the
access levels that you created.
Important: We recommend that you exclude at least one Organization Admin or
Organization Owner from this group to reduce the risk of an accidental
lockout.
Required roles
Grant the Cloud Access Binding Admin ( roles/accesscontextmanager.gcpAccessAdmin ) role
at the organization level. This role is required to create Access Context Manager
access bindings.
Console gcloud
More
In the Google Cloud console, go to the IAM page.
Go to IAM
In the project selector menu, select your organization ID.
Click Grant access and configure the following:
New principals : Specify the user or group that you want to grant the
permissions to.
Select a role : Select Access Context Manager > Cloud Access Binding Admin .
Click Save .
Note: For read-only access to the bindings, you can assign the
Cloud Access Binding Reader role.
Make sure that you're authenticated with sufficient privileges to add
IAM permissions at the organization level. At a minimum,
you need the Organization Administrator
role.
After you've confirmed that you have the correct permissions, sign in
by running the following command:
gcloud auth login
Grant the Cloud Access Binding Admin ( roles/accesscontextmanager.gcpAccessAdmin )
role by running the following command:
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member = PRINCIPAL \
--role = roles/accesscontextmanager.gcpAccessAdmin
Replace the following:
ORGANIZATION_ID : the ID for your organization.
You can use the following command to find the organization ID:
gcloud organizations list
```
* <code><var>PRINCIPAL</var></code>: the user or group that you want to
grant the role to.
Bind Google groups to access levels
To enforce Context-Aware Access restrictions on who can access Google Cloud
resources, you need to bind a Google group to one or more access levels. Users
in the specified group are granted access only if they satisfy the conditions
that are defined in the bound access levels.
Bind a group to the access level
You can bind the group to the access level using the Google Cloud console or
the gcloud CLI.
Console gcloud
More
To bind the group to the access level using the Google Cloud console, do the
following:
In the Google Cloud console, go to the Chrome Enterprise Premium page.
Go to Chrome Enterprise Premium
If prompted, select your organization.
Click Manage Access for Google Cloud console and APIs . The page lists the
existing access bindings.
Click Create Binding .
In the Principals section, click Add .
Enter the email address of the Google group that you want to bind.
In the Access levels section, select the access levels that members
of the group must satisfy to gain access. Multiple access levels are
logically ORed. The logical OR means that to access the resource, the user
must meet the conditions of at least one of the selected levels.
To save the access binding, click Save .
The binding might take a few minutes to propagate. After the binding is active,
members of the group are subject to the configured access level requirements
when they access the Google Cloud console or use tools like
the gcloud CLI that interact with Google Cloud APIs.
To bind the group to the access level, run the following command:
gcloud access-context-manager cloud-bindings create \
--group-key= GROUP_EMAIL \
--level= ACCESS_LEVEL_ID \
--organization= ORGANIZATION_ID
Replace the following:
GROUP_EMAIL : The email address of the Google
group to bind—for example, my-restricted-users@example.com .
ACCESS_LEVEL_ID : The full resource name of the
access level to apply. The resource name is in the format
accessPolicies/ POLICY_ID /accessLevels/ ACCESS_LEVEL_NAME .
You can find POLICY_ID by listing the policies by
running the following command:
gcloud access-context-manager policies list --organization ORGANIZATION_ID
ORGANIZATION_ID : Optional. Your Google Cloud
organization ID. The organization ID is required only if you haven't set the
default organization in your gcloud CLI configuration.
List group bindings
To list existing bindings, run the following command:
gcloud access-context-manager cloud-bindings list \
--organization ORGANIZATION_ID
Deploy Endpoint Verification
Deploying Endpoint Verification
is an optional step that lets you integrate device
attributes into your access control policies. You can use this capability to
enhance the security of your organization by granting or denying access to
resources based on device attributes such as OS version and configuration.
Endpoint Verification runs as a Chrome extension on macOS, Windows, and Linux and
lets you create access control policies based on device characteristics like
model and OS version, and security characteristics like the presence of disk
encryption, a firewall, a screen lock, and OS patches.
What's next
Learn how to require certificate-based access , which adds an additional layer of security by ensuring that only authorized devices can access resources, even if the credentials are compromised.
Deploy the Endpoint Verification extension as an administrator to your organization's company-owned devices by using the Google Cloud console.
Let users install the Endpoint Verification extension themselves .
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
