---
title: "Method: projects.locations.backendAuthenticationConfigs.get \_|\_ Cloud Load\
  \ Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest/v1/projects.locations.backendAuthenticationConfigs/get
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest/v1/projects.locations.backendAuthenticationConfigs/get
  title: "Method: projects.locations.backendAuthenticationConfigs.get \_|\_ Cloud\
    \ Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: projects.locations.backendAuthenticationConfigs.get | Cloud Load Balancing | Google Cloud Documentation
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
Load Balancing
Start free
Overview
Guides
Reference
Resources
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
projects.locations
Overview
get
list
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
projects.locations.operations
Overview
cancel
delete
get
list
projects.locations.serverTlsPolicies
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
Home
Documentation
Networking
Load Balancing
Reference
Send feedback
Method: projects.locations.backendAuthenticationConfigs.get
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Gets details of a single BackendAuthenticationConfig to BackendAuthenticationConfig.
HTTP request
GET https://networksecurity.googleapis.com/v1/{name=projects/*/locations/*/backendAuthenticationConfigs/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. A name of the BackendAuthenticationConfig to get. Must be in the format projects/*/locations/{location}/backendAuthenticationConfigs/* .
Authorization requires the following IAM permission on the specified resource name :
networksecurity.backendAuthenticationConfigs.get
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of BackendAuthenticationConfig .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
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
