---
title: "Method: projects.locations.cloudLocations.list \_|\_ Cloud Location Finder\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations.cloudLocations/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/location-finder/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations.cloudLocations/list
  title: "Method: projects.locations.cloudLocations.list \_|\_ Cloud Location Finder\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: projects.locations.cloudLocations.list | Cloud Location Finder | Google Cloud Documentation
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
Cloud Location Finder
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
Cloud Location Finder
REST API reference
Overview
v1
REST Resources
projects.locations
Overview
get
list
projects.locations.cloudLocations
Overview
get
list
search
v1alpha
REST Resources
projects. locations
Overview
get
list
projects. locations. cloud Locations
Overview
get
list
search
gcloud reference
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
Distributed, hybrid, and multicloud
Cloud Location Finder
Reference
Was this helpful?
Send feedback
Method: projects. locations. cloud Locations. list
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
JSON representation
Authorization scopes
IAM Permissions
Lists cloud locations under a given project and location.
HTTP request
GET https://cloudlocationfinder.googleapis.com/v1alpha/{parent=projects/*/locations/*}/cloudLocations
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent, which owns this collection of cloud locations. Format: projects/{project}/locations/{location}
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of cloud locations to return per page. The service might return fewer cloud locations than this value. If unspecified, server will pick an appropriate default.
pageToken
string
Optional. A token identifying a page of results the server should return. Provide page token returned by a previous 'cloudLocations.list' call to retrieve the next page of results. When paginating, all other parameters provided to 'cloudLocations.list' must match the call that provided the page token.
filter
string
Optional. A filter expression that filters resources listed in the response. The expression is in the form of field=value. For example, 'cloudLocationType=CLOUD_LOCATION_TYPE_REGION'. Multiple filter queries are space-separated. For example, 'cloudLocationType=CLOUD_LOCATION_TYPE_REGION territoryCode="US"' By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly.
Request body
The request body must be empty.
Response body
Message for response to listing cloud locations.
If successful, the response body contains data with the following structure:
JSON representation
{
"cloudLocations" : [
{
object ( CloudLocation )
}
] ,
"nextPageToken" : string
}
Fields
cloudLocations[]
object ( CloudLocation )
Output only. List of cloud locations.
nextPageToken
string
Output only. The continuation token, used to page through large result sets. Provide this value in a subsequent request as pageToken in subsequent requests to retrieve the next page. If this field is not present, there are no subsequent results.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
cloudlocationfinder.cloudLocations.list
For more information, see the IAM documentation .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-27 UTC."],[],[]]
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
