---
title: "Cloud Location Finder API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/location-finder/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/location-finder/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/location-finder/docs/reference/rest
  title: "Cloud Location Finder API \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Cloud Location Finder API | Google Cloud Documentation
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
projects.locations
Overview
get
list
projects.locations.cloudLocations
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
Service: cloudlocationfinder.googleapis.com Discovery document
Service endpoint
REST Resource: v1alpha.projects.locations
REST Resource: v1alpha.projects.locations.cloudLocations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.cloudLocations
Home
Documentation
Distributed, hybrid, and multicloud
Cloud Location Finder
Reference
Was this helpful?
Send feedback
Cloud Location Finder API
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Service: cloudlocationfinder.googleapis.com Discovery document
Service endpoint
REST Resource: v1alpha.projects.locations
REST Resource: v1alpha.projects.locations.cloudLocations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.cloudLocations
REST Resource: v1alpha.projects.locations
REST Resource: v1alpha.projects.locations.cloudLocations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.cloudLocations
Service: cloudlocationfinder. googleapis. com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://cloudlocationfinder.googleapis.com/$discovery/rest?version=v1
https://cloudlocationfinder.googleapis.com/$discovery/rest?version=v1alpha
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudlocationfinder.googleapis.com
REST Resource: v1alpha.projects.locations
Methods
get
GET /v1alpha/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1alpha/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1alpha.projects.locations.cloudLocations
Methods
get
GET /v1alpha/{name=projects/*/locations/*/cloudLocations/*}
Retrieves a resource containing information about a cloud location.
list
GET /v1alpha/{parent=projects/*/locations/*}/cloudLocations
Lists cloud locations under a given project and location.
search
GET /v1alpha/{parent=projects/*/locations/*}/cloudLocations:search
Searches for cloud locations from a given source location.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.cloudLocations
Methods
get
GET /v1/{name=projects/*/locations/*/cloudLocations/*}
Retrieves a resource containing information about a cloud location.
list
GET /v1/{parent=projects/*/locations/*}/cloudLocations
Lists cloud locations under a given project and location.
search
GET /v1/{parent=projects/*/locations/*}/cloudLocations:search
Searches for cloud locations from a given source location.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-06 UTC."],[],[]]
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
