---
title: "Method: projects.locations.connectors.list \_|\_ Virtual Private Cloud \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1beta1/projects.locations.connectors/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1beta1/projects.locations.connectors/list
  title: "Method: projects.locations.connectors.list \_|\_ Virtual Private Cloud \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: projects.locations.connectors.list | Virtual Private Cloud | Google Cloud Documentation
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
Method: projects. locations. connectors. list
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
JSON representation
Authorization scopes
Try it!
Lists Serverless VPC Access connectors.
HTTP request
GET https://vpcaccess.googleapis.com/v1beta1/{parent=projects/*/locations/*}/connectors
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The project and location from which the routes should be listed.
Authorization requires the following IAM permission on the specified resource parent :
vpcaccess.connectors.list
Query parameters
Parameters
page Size
integer
Maximum number of functions to return per call.
page Token
string
Continuation token.
Request body
The request body must be empty.
Response body
Response for listing Serverless VPC Access connectors.
If successful, the response body contains data with the following structure:
JSON representation
{
"connectors" : [
{
object ( Connector )
}
] ,
"nextPageToken" : string
}
Fields
connectors[]
object ( Connector )
List of Serverless VPC Access connectors.
nextPageToken
string
Continuation token.
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
