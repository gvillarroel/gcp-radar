---
title: "REST Resource: projects.locations \_|\_ Cloud Location Finder \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/location-finder/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations
  title: "REST Resource: projects.locations \_|\_ Cloud Location Finder \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: projects.locations | Cloud Location Finder | Google Cloud Documentation
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
Resource: Location
Methods get
list
Home
Documentation
Distributed, hybrid, and multicloud
Cloud Location Finder
Reference
Send feedback
REST Resource: projects.locations
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: Location
Methods get
list
Resource: Location
JSON representation
Methods
Resource: Location
A resource that represents a Google Cloud location.
JSON representation
{
"name" : string ,
"locationId" : string ,
"displayName" : string ,
"labels" : {
string : string ,
...
} ,
"metadata" : {
"@type" : string ,
field1 : ... ,
...
}
}
Fields
name
string
Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"
locationId
string
The canonical id for this location. For example: "us-east1" .
displayName
string
The friendly name for this location, typically a nearby city name. For example, "Tokyo".
labels
map (key: string, value: string)
Cross-service attributes for the location. For example
{"cloud.googleapis.com/region": "us-east1"}
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
metadata
object
Service-specific metadata. For example the available capacity at the given location.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
Methods
get
Gets information about a location.
list
Lists information about the supported locations for this service.
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
