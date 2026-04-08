---
title: "Method: projects.locations.instances.models.copy \_|\_ Anti Money Laundering\
  \ AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.models/copy
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.models/copy
  title: "Method: projects.locations.instances.models.copy \_|\_ Anti Money Laundering\
    \ AI \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: projects.locations.instances.models.copy | Anti Money Laundering AI | Google Cloud Documentation
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
Português – Brasil
中文 – 简体
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Anti Money Laundering AI
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
Anti Money Laundering AI
REST Reference
Overview
v1
REST Resources
projects. locations
Overview
get
list
projects. locations. instances
Overview
create
delete
exportRegisteredParties
get
importRegisteredParties
list
patch
projects. locations. instances. backtest Results
Overview
create
delete
exportMetadata
get
list
patch
projects. locations. instances. datasets
Overview
create
delete
get
list
patch
projects. locations. instances. engine Configs
Overview
create
delete
exportMetadata
get
list
patch
projects. locations. instances. engine Versions
Overview
get
list
projects. locations. instances. models
Overview
copy
create
delete
export Metadata
get
list
patch
projects. locations. instances. prediction Results
Overview
create
delete
exportMetadata
get
list
patch
projects. locations. operations
Overview
cancel
delete
get
list
Types
Line Of Business
AML input data model
AML output data model
Lifecycle of a risk case
Engine versions
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
HTTP request
Path parameters
Request body
Response body
Authorization scopes
IAM Permissions
Home
Documentation
Industry solutions
Anti Money Laundering AI
Reference
Was this helpful?
Send feedback
Method: projects. locations. instances. models. copy
Stay organized with collections
Save and categorize content based on your preferences.
On this page
HTTP request
Path parameters
Request body
Response body
Authorization scopes
IAM Permissions
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
IAM Permissions
Copies a model from one instance to another. See the model copy documentation for more information.
HTTP request
POST https://financialservices.googleapis.com/v1/{parent=projects/*/locations/*/instances/*}/models:copy
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent of the Model is the Instance.
Authorization requires the following IAM permission on the specified resource parent :
financialservices.v1models.copyTo
Request body
The request body contains data with the following structure:
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"modelId" : string ,
"sourceModel" : string
}
Fields
model Id
string
Required. The resource id of the Model that the copy operation is creating.
source Model
string
Required. The resource name of the Model to copy.
Authorization requires the following IAM permission on the specified resource sourceModel :
financialservices.v1models.copyFrom
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
financialservices.v1models.copyTo
Requires the following IAM permission on the sourceModel resource:
financialservices.v1models.copyFrom
For more information, see the IAM documentation .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-04 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-04 UTC."],[],[]]
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
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
