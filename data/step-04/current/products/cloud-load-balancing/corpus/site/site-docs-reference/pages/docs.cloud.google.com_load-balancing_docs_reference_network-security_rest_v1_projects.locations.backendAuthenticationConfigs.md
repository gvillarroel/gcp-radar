---
title: "REST Resource: projects.locations.backendAuthenticationConfigs \_|\_ Cloud\
  \ Load Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest/v1/projects.locations.backendAuthenticationConfigs
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest/v1/projects.locations.backendAuthenticationConfigs
  title: "REST Resource: projects.locations.backendAuthenticationConfigs \_|\_ Cloud\
    \ Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: projects.locations.backendAuthenticationConfigs | Cloud Load Balancing | Google Cloud Documentation
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
Resource: BackendAuthenticationConfig
WellKnownRoots
Methods create
delete
get
list
patch
Home
Documentation
Networking
Load Balancing
Reference
Was this helpful?
Send feedback
REST Resource: projects. locations. backend Authentication Configs
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: BackendAuthenticationConfig
WellKnownRoots
Methods create
delete
get
list
patch
Resource: BackendAuthenticationConfig
JSON representation
WellKnownRoots
Methods
Resource: Backend Authentication Config
BackendAuthenticationConfig message groups the TrustConfig together with other settings that control how the load balancer authenticates, and expresses its identity to, the backend:
trustConfig is the attached TrustConfig.
wellKnownRoots indicates whether the load balance should trust backend server certificates that are issued by public certificate authorities, in addition to certificates trusted by the TrustConfig.
clientCertificate is a client certificate that the load balancer uses to express its identity to the backend, if the connection to the backend uses mTLS.
You can attach the BackendAuthenticationConfig to the load balancer's BackendService directly determining how that BackendService negotiates TLS.
JSON representation
{
"name" : string ,
"description" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"clientCertificate" : string ,
"trustConfig" : string ,
"wellKnownRoots" : enum ( WellKnownRoots ) ,
"etag" : string
}
Fields
name
string
Required. Name of the BackendAuthenticationConfig resource. It matches the pattern projects/*/locations/{location}/backendAuthenticationConfigs/{backendAuthenticationConfig}
description
string
Optional. Free-text description of the resource.
createTime
string ( Timestamp format)
Output only. The timestamp when the resource was created.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The timestamp when the resource was updated.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Set of label tags associated with the resource.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
clientCertificate
string
Optional. A reference to a certificatemanager.googleapis.com.Certificate resource. This is a relative resource path following the form "projects/{project}/locations/{location}/certificates/{certificate}".
Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope.
trustConfig
string
Optional. A reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. This is a relative resource path following the form "projects/{project}/locations/{location}/trustConfigs/{trustConfig}".
A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS.
wellKnownRoots
enum ( WellKnownRoots )
Well known roots to use for server certificate validation.
etag
string
Output only. Etag of the resource.
WellKnownRoots
Enum to specify the well known roots to use for server certificate validation.
Enums
WELL_KNOWN_ROOTS_UNSPECIFIED
Equivalent to NONE.
NONE
The BackendService will only validate server certificates against roots specified in TrustConfig.
PUBLIC_ROOTS
The BackendService uses a set of well-known public roots, in addition to any roots specified in the trustConfig field, when validating the server certificates presented by the backend. Validation with these roots is only considered when the TlsSettings.sni field in the BackendService is set.
The well-known roots are a set of root CAs managed by Google. CAs in this set can be added or removed without notice.
Methods
create
Creates a new BackendAuthenticationConfig in a given project and location.
delete
Deletes a single BackendAuthenticationConfig to BackendAuthenticationConfig.
get
Gets details of a single BackendAuthenticationConfig to BackendAuthenticationConfig.
list
Lists BackendAuthenticationConfigs in a given project and location.
patch
Updates the parameters of a single BackendAuthenticationConfig to BackendAuthenticationConfig.
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
