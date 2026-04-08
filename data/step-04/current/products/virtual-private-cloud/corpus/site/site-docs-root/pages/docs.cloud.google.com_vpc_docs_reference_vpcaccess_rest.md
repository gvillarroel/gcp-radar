---
title: "Serverless VPC Access API \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest
  title: "Serverless VPC Access API \_|\_ Virtual Private Cloud \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Serverless VPC Access API | Virtual Private Cloud | Google Cloud Documentation
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
Service: vpcaccess.googleapis.com Discovery document
Service endpoint
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.locations.connectors
REST Resource: v1beta1.projects.locations.operations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.connectors
REST Resource: v1.projects.locations.operations
Home
Documentation
Networking
Virtual Private Cloud
Was this helpful?
Send feedback
Serverless VPC Access API
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Service: vpcaccess.googleapis.com Discovery document
Service endpoint
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.locations.connectors
REST Resource: v1beta1.projects.locations.operations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.connectors
REST Resource: v1.projects.locations.operations
API for managing VPC access connectors.
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.locations.connectors
REST Resource: v1beta1.projects.locations.operations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.connectors
REST Resource: v1.projects.locations.operations
Service: vpcaccess. googleapis. com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://vpcaccess.googleapis.com/$discovery/rest?version=v1
https://vpcaccess.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://vpcaccess.googleapis.com
REST Resource: v1beta1. projects. locations
Methods
list
GET / v1beta1/ {name=projects/ *}/ locations
Lists information about the supported locations for this service.
REST Resource: v1beta1. projects. locations. connectors
Methods
create
POST / v1beta1/ {parent=projects/ */ locations/ *}/ connectors
Creates a Serverless VPC Access connector, returns an operation.
delete
DELETE / v1beta1/ {name=projects/ */ locations/ */ connectors/ *}
Deletes a Serverless VPC Access connector.
get
GET / v1beta1/ {name=projects/ */ locations/ */ connectors/ *}
Gets a Serverless VPC Access connector.
list
GET / v1beta1/ {parent=projects/ */ locations/ *}/ connectors
Lists Serverless VPC Access connectors.
patch
PATCH / v1beta1/ {connector. name=projects/ */ locations/ */ connectors/ *}
Updates a Serverless VPC Access connector, returns an operation.
REST Resource: v1beta1. projects. locations. operations
Methods
get
GET /v1beta1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations
Methods
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.connectors
Methods
create
POST /v1/{parent=projects/*/locations/*}/connectors
Creates a Serverless VPC Access connector, returns an operation.
delete
DELETE /v1/{name=projects/*/locations/*/connectors/*}
Deletes a Serverless VPC Access connector.
get
GET /v1/{name=projects/*/locations/*/connectors/*}
Gets a Serverless VPC Access connector.
list
GET /v1/{parent=projects/*/locations/*}/connectors
Lists Serverless VPC Access connectors.
patch
PATCH /v1/{connector.name=projects/*/locations/*/connectors/*}
Updates a Serverless VPC Access connector, returns an operation.
REST Resource: v1.projects.locations.operations
Methods
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
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
