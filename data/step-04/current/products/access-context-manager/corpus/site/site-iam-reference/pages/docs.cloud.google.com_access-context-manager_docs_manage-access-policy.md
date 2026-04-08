---
title: "Manage an access policy \_|\_ Access Context Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/manage-access-policy
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/manage-access-policy
  title: "Manage an access policy \_|\_ Access Context Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Manage an access policy | Access Context Manager | Google Cloud Documentation
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
Get the name and etag of an access policy
Set the default access policy for the gcloud command-line tool
Delegate an access policy
Describe an access policy
Update an access policy
Delete an access policy
What's next
Home
Documentation
Security
Access Context Manager
Guides
Was this helpful?
Send feedback
Manage an access policy
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Get the name and etag of an access policy
Set the default access policy for the gcloud command-line tool
Delegate an access policy
Describe an access policy
Update an access policy
Delete an access policy
What's next
This page describes how to manage an existing access policy. You can do the following:
Get the name and etag of an access policy
Set the default access policy for the gcloud command-line tool
Describe an access policy
Update an access policy
Delete an access policy
Get the name and etag of an access policy
Console gcloud API
More
The Google Cloud console does not support managing
access policies. If you want to manage your access policy, you must
use the gcloud command-line tool or the API.
To get the name of your access policy, use the list
command. The access policy name is required for all access level commands
for the gcloud command-line tool.
gcloud access-context-manager policies list \
--organization ORGANIZATION_ID
Where:
ORGANIZATION_ID is the numeric ID of your organization.
You should see output similar to:
NAME ORGANIZATION TITLE ETAG
1034095178592 511928527926 Corp Policy 10bc3c76ca809ab2
To get the name of your access policy, call accessPolicies.list .
GET https://accesscontextmanager.googleapis.com/v1/accessPolicies
Request body
The request body must be empty.
Response body
If successful, the response body will look similar to:
{
"accessPolicies" : [
{
objec t (AccessPolicy)
}
],
"nextPageToken" : s tr i n g
}
Where:
accessPolicies is a list of
AccessPolicy objects .
Set the default access policy for the gcloud command-line tool
When using the gcloud command-line tool, you can set a default access policy. When
you set a default policy, you no longer need to specify a policy each time you
use an Access Context Manager command.
To set a default access policy, use the config command.
See more code actions.
Light code theme
Dark code theme
gcloud config set access_context_manager/policy POLICY_NUMBER
Where:
POLICY_NUMBER is the
numeric name of your access policy.
Delegate an access policy
Console gcloud API
More
The Google Cloud console does not support managing
access policies. If you want to manage your access policy, you must
use the gcloud command-line tool or the API.
To delegate administration by binding a principal and role with a scoped access policy, use the add-iam-policy-binding
command.
gcloud access-context-manager policies add-iam-policy-binding \
[ POLICY ] --member = PRINCIPAL --role = ROLE
Where:
POLICY is ID of the policy or fully qualified identifier for the policy.
PRINCIPAL is the principal to add the binding for. Specify in the
following format: user|group|serviceAccount:email or domain:domain .
ROLE is the role name to assign to the principal. The role name
is the complete path of a predefined role, such as roles/accesscontextmanager.policyEditor ,
or the role ID for a custom role, such as
organizations/{ORGANIZATION_ID}/roles/accesscontextmanager.policyEditor .
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
Delegate the access policy by
calling accessPolicies.setIamPolicy .
POST https://accesscontextmanager.googleapis.com/v1/accessPolicies
Response body
If successful, the response body contains an instance of policy .
Describe an access policy
Console gcloud API
More
The Google Cloud console does not support managing
access policies. If you want to manage your access policy, you must
use the gcloud command-line tool or the API.
To describe your access policy, use the describe
command.
gcloud access-context-manager policies describe POLICY_NUMBER
Where:
POLICY_NUMBER is the numeric name of your policy.
The following output appears:
name: accessPolicies/1034095178592
parent: organizations/511928527926
title: Corp Policy
To describe your access policy, call accessPolicies.get
GET https://accesscontextmanager.googleapis.com/v1/accessPolicies/ POLICY_NUMBER
Where:
POLICY_NUMBER is the numeric name of your policy.
Request body
The request body must be empty.
Response body
If successful, the response body contains an
AccessPolicy object .
Update an access policy
Console gcloud API
More
The Google Cloud console does not support managing
access policies. If you want to manage your access policy, you must
use the gcloud command-line tool or the API.
To update your access policy, use the update
command. Currently, you can change only the title of the policy.
gcloud access-context-manager policies update POLICY_NUMBER \
--title = POLICY_TITLE
Where:
POLICY_NUMBER is the numeric name of your policy.
POLICY_TITLE is a human-readable title for your policy.
The following output appears:
Waiting for PATCH operation [accessPolicies/ POLICY_NUMBER /update/1542234231134882]...done.
Currently, you can change only the title of your access policy.
To update your policy:
Create a request body.
{
"parent" : " ORGANIZATION_ID " ,
"title" : " POLICY_TITLE "
}
Where:
ORGANIZATION_ID is the numeric ID of your organization.
POLICY_TITLE is a human-readable title for your policy.
Call accessPolicies.patch .
PATCH https://accesscontextmanager.googleapis.com/v1/accessPolicies/ POLICY_NUMBER / UPDATE_MASK
Where:
POLICY_NUMBER is the numeric name of your policy.
UPDATE_MASK is a string that represents the value you want
to update. For example, title .
Response body
If successful, the response body for the call contains an
Operation resource that provides details about the
PATCH operation.
Delete an access policy
Warning: When you delete a policy, the levels that the policy contains are also deleted and
cannot be recovered.
Console gcloud API
More
The Google Cloud console does not currently support managing
access policies. If you want to manage your access policy, you must
use the gcloud command-line tool or the API.
To delete an access policy:
Use the delete command.
gcloud access-context-manager policies delete POLICY_NUMBER
Where:
POLICY_NUMBER is the numeric name of your policy.
Confirm that you want to delete the access policy.
For example:
You are about to delete policy [ POLICY_NUMBER ]
Do you want to continue (Y/n)?
The following output appears:
Deleted policy [1034095178592].
To delete your access policy, call accessPolicies.delete .
DELETE https://accesscontextmanager.googleapis.com/v1/accessPolicies/ POLICY_NUMBER
Where:
POLICY_NUMBER is the numeric name of your policy.
Request body
The request body must be empty.
Response body
If successful, the response body for the call contains an
Operation resource that provides details about the
DELETE operation.
What's next
Managing access levels
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
