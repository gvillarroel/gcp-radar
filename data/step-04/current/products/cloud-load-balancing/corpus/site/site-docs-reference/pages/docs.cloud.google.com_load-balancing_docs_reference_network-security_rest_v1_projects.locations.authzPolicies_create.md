---
title: "Method: projects.locations.authzPolicies.create \_|\_ Cloud Load Balancing\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest/v1/projects.locations.authzPolicies/create
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest/v1/projects.locations.authzPolicies/create
  title: "Method: projects.locations.authzPolicies.create \_|\_ Cloud Load Balancing\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: projects.locations.authzPolicies.create | Cloud Load Balancing | Google Cloud Documentation
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
Load Balancing
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
Cloud Load Balancing
All APIs and references
CEL matcher language reference
GARP and RA packet specifications
RE2 specifications for URL maps
Network Security API
Overview
V1
REST Resources
projects. locations
Overview
get
list
projects. locations. authz Policies
Overview
create
delete
get
list
patch
projects. locations. backend Authentication Configs
Overview
create
delete
get
list
patch
projects. locations. operations
Overview
cancel
delete
get
list
projects. locations. server Tls Policies
Overview
create
delete
get
list
patch
Beta
REST Resources
projects.locations.authzPolicies
Overview
create
delete
get
list
patch
projects.locations.backendAuthenticationConfigs
Overview
create
delete
get
list
patch
Shared
Types
Operation
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
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
Home
Documentation
Networking
Load Balancing
Reference
Was this helpful?
Send feedback
Method: projects. locations. authz Policies. create
Stay organized with collections
Save and categorize content based on your preferences.
On this page
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
Creates a new AuthzPolicy in a given project and location.
HTTP request
POST https://networksecurity.googleapis.com/v1/{parent=projects/*/locations/*}/authzPolicies
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent resource of the AuthzPolicy resource. Must be in the format projects/{project}/locations/{location} .
Query parameters
Parameters
authzPolicyId
string
Required. User-provided ID of the AuthzPolicy resource to be created.
requestId
string
Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request.
For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments.
The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
Request body
The request body contains an instance of AuthzPolicy .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the resources resource:
networkservices.authzExtensions.use
Requires the following IAM permission on the parent resource:
networksecurity.authzPolicies.create
For more information, see the IAM documentation .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-29 UTC."],[],[]]
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
