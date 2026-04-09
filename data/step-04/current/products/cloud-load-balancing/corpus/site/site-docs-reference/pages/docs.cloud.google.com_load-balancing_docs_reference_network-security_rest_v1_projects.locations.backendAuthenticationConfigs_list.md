---
title: "Method: projects.locations.backendAuthenticationConfigs.list \_|\_ Cloud Load\
  \ Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest/v1/projects.locations.backendAuthenticationConfigs/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest/v1/projects.locations.backendAuthenticationConfigs/list
  title: "Method: projects.locations.backendAuthenticationConfigs.list \_|\_ Cloud\
    \ Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: projects.locations.backendAuthenticationConfigs.list | Cloud Load Balancing | Google Cloud Documentation
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
Home
Documentation
Networking
Load Balancing
Reference
Was this helpful?
Send feedback
Method: projects. locations. backend Authentication Configs. list
Stay organized with collections
Save and categorize content based on your preferences.
On this page
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Lists BackendAuthenticationConfigs in a given project and location.
HTTP request
GET https://networksecurity.googleapis.com/v1/{parent=projects/*/locations/*}/backendAuthenticationConfigs
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The project and location from which the BackendAuthenticationConfigs should be listed, specified in the format projects/*/locations/{location} .
Authorization requires the following IAM permission on the specified resource parent :
networksecurity.backendAuthenticationConfigs.list
Query parameters
Parameters
page Size
integer
Maximum number of BackendAuthenticationConfigs to return per call.
pageToken
string
The value returned by the last ListBackendAuthenticationConfigsResponse Indicates that this is a continuation of a prior backendAuthenticationConfigs.list call, and that the system should return the next page of data.
Request body
The request body must be empty.
Response body
Response returned by the backendAuthenticationConfigs.list method.
If successful, the response body contains data with the following structure:
JSON representation
{
"backendAuthenticationConfigs" : [
{
object ( BackendAuthenticationConfig )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
backendAuthenticationConfigs[]
object ( BackendAuthenticationConfig )
List of BackendAuthenticationConfig resources.
nextPageToken
string
If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken .
unreachable[]
string
Locations that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Was this helpful?
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
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
