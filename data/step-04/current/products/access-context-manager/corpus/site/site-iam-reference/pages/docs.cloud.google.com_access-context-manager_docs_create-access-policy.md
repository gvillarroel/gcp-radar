---
title: "Create an access policy \_|\_ Access Context Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/create-access-policy
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/create-access-policy
  title: "Create an access policy \_|\_ Access Context Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create an access policy | Access Context Manager | Google Cloud Documentation
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
Before you begin
Create an organization-level access policy
Create a scoped access policy and delegate the policy
What's next
Home
Documentation
Security
Access Context Manager
Guides
Was this helpful?
Send feedback
Create an access policy
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Create an organization-level access policy
Create a scoped access policy and delegate the policy
What's next
This page describes how to create an organization-level access policy for your
organization and scoped policies for the folders and projects in your organization.
Note: An organization can only have one organization-level access policy and
can contain multiple scoped policies for the folders and projects in
the organization.
Before you begin
Ensure you have the correct permissions
to use Access Context Manager.
Create an organization-level access policy
For an organization, you cannot create an organization-level access policy if an
organization-level access policy exists for that organization.
Console gcloud API
More
When you create an access level , a default access policy
is created automatically. No additional manual steps are required.
To create an organization-level access policy, use the create
command.
gcloud access-context-manager policies create \
--organization ORGANIZATION_ID --title POLICY_TITLE
Where:
ORGANIZATION_ID is the numeric ID of your organization.
POLICY_TITLE is a human-readable title for your policy.
You should see output similar to the following (where POLICY_NAME
is a unique numeric identifier for the policy
assigned by Google Cloud):
Create request issued
Waiting for operation [accessPolicies/ POLICY_NAME /create/1521580097614100] to complete...done.
Created.
Next, set your default policy .
To create an organization-level access policy:
Create a request body.
{
"parent" : " ORGANIZATION_ID " ,
"title" : " POLICY_TITLE "
}
Where:
ORGANIZATION_ID is the numeric ID of your organization.
POLICY_TITLE is a human-readable title for your policy.
Create the access policy by
calling accessPolicies.create .
POST https://accesscontextmanager.googleapis.com/v1/accessPolicies
Response body
If successful, the response body for the call contains an
Operation resource that provides details about the
POST operation.
Create a scoped access policy and delegate the policy
Only VPC Service Controls supports creating a scoped access policy.
You must continue to use organization-level policies for Google Cloud
services, such as Identity-Aware Proxy (IAP).
Warning: If an organization-level access policy doesn't exist for your organization,
scoped policies that you create at the folder or project-level will not operate.
Console gcloud API
More
In the Google Cloud console navigation menu, click Security , and then
click VPC Service Controls .
Go to VPC Service Controls
If you are prompted, select your organization, folder, or project.
On the VPC Service Controls page, select the access policy that is the
parent of the scoped policy. For example, you can select the default policy
organization policy.
Click Manage policies .
On the Manage VPC Service Controls page, click Create .
On the Create access policy page, in the Access policy name box,
type a name for the scoped access policy.
The scoped access policy name can have a maximum length of 50 characters, must start
with a letter, and can contain only ASCII Latin letters (a-z, A-Z),
numbers (0-9), or underscores ( _ ). The scoped access policy name is case sensitive
and must be unique within an organization's access policy.
To specify a scope for the access policy, click Scopes .
Specify either a project or a folder as the scope of the access policy.
To select a project that you want to add to the scope of the access
policy, do the following:
In the Scopes pane, click Add project .
In the Add project dialog, select that project's checkbox.
Click Done . The added project appears in the Scopes section.
To select a folder that you want to add to the scope of the access policy,
do the following:
In the Scopes pane, click Add folder .
In the Add folders dialog, select that folders's checkbox.
Click Done . The added folder appears in the Scopes section.
To delegate administration of the scoped access policy, click Principals .
To specify the principal
and the role that you want to bind to the access policy, do the following:
In the Principals pane, click Add principals .
In the Add principals dialog, select a principal, such as a user
name or service account.
Select the role that you want to associate with the principal, such
as editor and read roles.
Click Save . The added principal and role appear in the Principals section.
On the Create access policy page, click Create access policy .
To create a scoped access policy, use the gcloud access-context-manager policies create
command.
gcloud access-context-manager policies create \
--organization ORGANIZATION_ID [ --scopes = SCOPE ] --title POLICY_TITLE
Where:
ORGANIZATION_ID is the numeric ID of your organization.
POLICY_TITLE is a human-readable title for your policy.
The policy title can have a maximum length of 50 characters, must start
with a letter, and can contain only ASCII Latin letters (a-z, A-Z),
numbers (0-9), or underscores ( _ ). The policy title is case sensitive
and must be unique within an organization's access policy.
SCOPE is the folder or project on which this policy is applicable. You
can specify only one folder or project as the scope, and the scope must exist
within the specified organization. If you don't specify a scope, the policy
applies to the entire organization.
The following output appears (where POLICY_NAME
is a unique numeric identifier for the policy
assigned by Google Cloud):
Create request issued
Waiting for operation [accessPolicies/ POLICY_NAME /create/1521580097614100] to complete...done.
Created.
To delegate administration by binding a principal and role with a scoped access policy, use the add-iam-policy-binding
command.
gcloud access-context-manager policies add-iam-policy-binding \
[ POLICY ] --member = PRINCIPAL --role = ROLE
Where:
POLICY is ID of the policy or fully qualified identifier for the policy.
PRINCIPAL is the principal to add the binding for. Specify in the
following format: user|group|serviceAccount:email or domain:domain .
ROLE is the role name to assign to the principal. The role name
is the complete path of a predefined role, such as roles/accesscontextmanager.policyReader ,
or the role ID for a custom role, such as
organizations/{ORGANIZATION_ID}/roles/accesscontextmanager.policyReader .
To create a scoped access policy, do the following:
Create a request body.
{
"parent" : " ORGANIZATION_ID " ,
"scope" : " SCOPE "
"title" : " POLICY_TITLE "
}
Where:
ORGANIZATION_ID is the numeric ID of your organization.
SCOPE is the folder or project on which this policy is applicable.
POLICY_TITLE is a human-readable title for your policy.
The policy title can have a maximum length of 50 characters, must start
with a letter, and can contain only ASCII Latin letters (a-z, A-Z),
numbers (0-9), or underscores ( _ ). The policy title is case sensitive
and must be unique within an organization's access policy.
Create the access policy by
calling accessPolicies.create .
POST https://accesscontextmanager.googleapis.com/v1/accessPolicies
Response body
If successful, the response body for the call contains an
Operation resource that provides details about the
POST operation.
To delegate administration of the scoped access policy, do the following:
Create a request body.
{
"policy" : " IAM_POLICY " ,
}
Where:
IAM_POLICY is a collection of bindings. A binding binds one
or more members, or principals, to a single role. Principals can be user
accounts, service accounts, Google groups, and domains. A role is a named
list of permissions; each role can be an IAM predefined role or a user-created
custom role.
Create the access policy by
calling accessPolicies.setIamPolicy .
POST https://accesscontextmanager.googleapis.com/v1/accessPolicies
Response body
If successful, the response body contains an instance of policy .
Note: After you create a scoped policy, you cannot change the scope of the policy.
To change the scope of an existing policy, delete the policy and recreate the policy with the new scope.
What's next
Manage an access policy
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
