---
title: "Method: projects.locations.operations.list \_|\_ Virtual Private Cloud \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1/projects.locations.operations/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1/projects.locations.operations/list
  title: "Method: projects.locations.operations.list \_|\_ Virtual Private Cloud \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: projects.locations.operations.list | Virtual Private Cloud | Google Cloud Documentation
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
Method: projects. locations. operations. list
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
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED .
HTTP request
GET https://vpcaccess.googleapis.com/v1/{name=projects/*/locations/*}/operations
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
The name of the operation's parent resource.
Query parameters
Parameters
filter
string
The standard list filter.
page Size
integer
The standard list page size.
page Token
string
The standard list page token.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of ListOperationsResponse .
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
