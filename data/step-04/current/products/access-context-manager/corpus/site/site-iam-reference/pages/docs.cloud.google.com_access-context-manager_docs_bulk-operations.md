---
title: "Making bulk changes to access levels \_|\_ Access Context Manager \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/bulk-operations
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/bulk-operations
  title: "Making bulk changes to access levels \_|\_ Access Context Manager \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Making bulk changes to access levels | Access Context Manager | Google Cloud Documentation
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
Bulk replace access levels
Home
Documentation
Security
Access Context Manager
Guides
Was this helpful?
Send feedback
Making bulk changes to access levels
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Bulk replace access levels
Using Access Context Manager, you can make bulk updates to resources that belong to
your organization's access policy , such as
access levels and service perimeters .
Changes to your resources are applied only if all parts of the bulk operation
are successful. For example, if your bulk operation attempts to remove an access
level that is in use by a service perimeter, an error is raised. Because an
error is encountered, the entire operation fails and no resources are updated.
This topic describes only bulk replacement of access levels. For more
information about bulk replacement of service perimeters,
refer to the VPC Service Controls documentation .
Note: The Google Cloud console cannot be used for bulk operations.
Before you begin
Because bulk operations affect all access levels for your organization, you
may want to obtain a complete list of your access levels. The list can be
formatted as YAML, which may also make bulk changes to your access levels
easier.
To get a formatted list of access levels, refer to
List access levels (formatted) .
Bulk replace access levels
The following section details how to bulk replace your access levels.
Warning: Bulk replace operations will affect all of your access levels. If
existing access levels aren't included in the operation, those access levels are
deleted.
gcloud API
More
To bulk replace all access levels, use the
replace-all command.
See more code actions.
Light code theme
Dark code theme
gcloud access-context-manager levels replace-all \
--source-file = FILE \
--etag = ETAG \
[ --policy = POLICY_NAME ]
Where:
FILE is the name of a .yaml file that defines
the new conditions for your existing access levels.
For example:
- name : accessPolicies / 11271009391 / accessLevels / corpnet_access
title : Corpnet Access
description : Permit access to corpnet .
basic :
combiningFunction : AND
conditions :
- ipSubnetworks :
- 252.0.2.0 / 24
- 2001 : db8 : : / 32
- name : accessPolicies / 11271009391 / accessLevels / prodnet_access
title : Prodnet Access
description : Permit access to prodnet .
basic :
combiningFunction : OR
conditions :
- members :
- user : exampleuser @example . com
- serviceAccount : exampleaccount @example . iam.gserviceaccount.com
- ipSubnetworks :
- 176.0.2.0 / 24
For further examples of the YAML structure of conditions, refer to
the example YAML file .
ETAG (optional) is a string that represents the target
version of your organization's access policy. If you do not include an
etag, the bulk operation targets the latest version of the your
organization's access policy.
To obtain the latest etag of your access policy,
list your access policies .
POLICY_NAME is the name of your organization's access policy.
This value is required only if you haven't set a
default access policy .
To bulk replace all access levels,
call accessLevels.replaceAll .
POST https://accesscontextmanager.googleapis.com/v1/accessPolicies/ POLICY_NAME /accessLevels.replaceAll?alt=json
Where:
POLICY_NAME is the name of your organization's access policy.
Request body
The request body must include a list of AccessLevel
objects that specify the changes you want to make.
Optionally, to target a specific version of your organization's access
policy, you can include an etag. If you do not include an etag, the bulk
operation targets the latest version of your organization's access policy.
For example:
{
"accessLevels" : [
objec t (AccessLevel) ,
objec t (AccessLevel) ,
...
]
"etag" : s tr i n g
}
Response body
If successful, the response body for the call contains an
Operation resource that provides details about the
post operation.
Example response:
{
"name" : "operations/accessPolicies/11271009391/replaceLevels/1583523446234255" ,
"done" : true ,
"response" : {
"@type" : "type.googleapis.com/google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse" ,
"accessLevels" : [
{
"name" : "accessPolicies/11271009391/accessLevels/corpnet_access" ,
"title" : "Corpnet access" ,
"description" : "Permit access to corpnet." ,
"basic" : {
"conditions" : [
{
"ipSubnetworks" : [
"252.0.2.0/24"
]
}
]
}
},
{
"name" : "accessPolicies/11271009391/accessLevels/prodnet_access" ,
"title" : "Prodnet access" ,
"description" : "Permit access to prodnet." ,
"basic" : {
"conditions" : [
{
"ipSubnetworks" : [
"176.0.2.0/24"
]
}
]
}
}
]
}
}
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
