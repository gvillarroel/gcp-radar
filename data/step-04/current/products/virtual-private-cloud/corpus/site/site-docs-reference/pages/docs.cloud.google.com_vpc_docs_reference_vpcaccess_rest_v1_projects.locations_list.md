---
title: "Method: projects.locations.list \_|\_ Virtual Private Cloud \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1/projects.locations/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1/projects.locations/list
  title: "Method: projects.locations.list \_|\_ Virtual Private Cloud \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: projects.locations.list | Virtual Private Cloud | Google Cloud Documentation
Skip to main content
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
Console
On this page
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Home
Documentation
Networking
Virtual Private Cloud
Was this helpful?
Send feedback
Method: projects. locations. list
Stay organized with collections
Save and categorize content based on your preferences.
On this page
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Lists information about the supported locations for this service.
HTTP request
GET https://vpcaccess.googleapis.com/v1/{name=projects/*}/locations
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
The resource that owns the locations collection, if applicable.
Query parameters
Parameters
filter
string
A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo" , and is documented in more detail in AIP-160 .
page Size
integer
The maximum number of results to return. If not set, the service selects a default.
page Token
string
A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of ListLocationsResponse .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
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
