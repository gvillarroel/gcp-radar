---
title: "REST Resource: projects.locations.serverTlsPolicies \_|\_ Cloud Load Balancing\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest/v1/projects.locations.serverTlsPolicies
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest/v1/projects.locations.serverTlsPolicies
  title: "REST Resource: projects.locations.serverTlsPolicies \_|\_ Cloud Load Balancing\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: projects.locations.serverTlsPolicies | Cloud Load Balancing | Google Cloud Documentation
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
Resource: ServerTlsPolicy
MTLSPolicy
ClientValidationMode
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
REST Resource: projects. locations. server Tls Policies
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: ServerTlsPolicy
MTLSPolicy
ClientValidationMode
Methods create
delete
get
list
patch
Resource: ServerTlsPolicy
JSON representation
MTLSPolicy
JSON representation
ClientValidationMode
Methods
Resource: Server Tls Policy
ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource.
ServerTlsPolicy in the form accepted by Application Load Balancers can be attached only to TargetHttpsProxy with an EXTERNAL , EXTERNAL_MANAGED or INTERNAL_MANAGED load balancing scheme. Traffic Director compatible ServerTlsPolicies can be attached to EndpointPolicy and TargetHttpsProxy with Traffic Director INTERNAL_SELF_MANAGED load balancing scheme.
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
"mtlsPolicy" : {
object ( MTLSPolicy )
}
}
Fields
name
string
Required. Name of the ServerTlsPolicy resource. It matches the pattern projects/*/locations/{location}/serverTlsPolicies/{serverTlsPolicy}
description
string
Free-text description of the resource.
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
mtlsPolicy
object ( MTLSPolicy )
This field is required if the policy is used with Application Load Balancers. This field can be empty for Traffic Director.
Defines a mechanism to provision peer validation certificates for peer to peer authentication (Mutual TLS - mTLS). If not specified, client certificate will not be requested. The connection is treated as TLS and not mTLS. If allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections.
MTLSPolicy
Specification of the MTLSPolicy.
JSON representation
{
"clientValidationMode" : enum ( ClientValidationMode ) ,
"clientValidationTrustConfig" : string
}
Fields
clientValidationMode
enum ( ClientValidationMode )
When the client presents an invalid certificate or no certificate to the load balancer, the clientValidationMode specifies how the client connection is handled.
Required if the policy is to be used with the Application Load Balancers. For Traffic Director it must be empty.
clientValidationTrustConfig
string
Reference to the TrustConfig from certificatemanager.googleapis.com namespace.
If specified, the chain validation will be performed against certificates configured in the given TrustConfig.
Allowed only if the policy is to be used with Application Load Balancers.
ClientValidationMode
Mutual TLS certificate validation mode.
Enums
CLIENT_VALIDATION_MODE_UNSPECIFIED
Not allowed.
ALLOW_INVALID_OR_MISSING_CLIENT_CERT
Allow connection even if certificate chain validation of the client certificate failed or no client certificate was presented. The proof of possession of the private key is always checked if client certificate was presented. This mode requires the backend to implement processing of data extracted from a client certificate to authenticate the peer, or to reject connections if the client certificate fingerprint is missing.
REJECT_INVALID
Require a client certificate and allow connection to the backend only if validation of the client certificate passed.
If set, requires a reference to non-empty TrustConfig specified in clientValidationTrustConfig .
Methods
create
Creates a new ServerTlsPolicy in a given project and location.
delete
Deletes a single ServerTlsPolicy.
get
Gets details of a single ServerTlsPolicy.
list
Lists ServerTlsPolicies in a given project and location.
patch
Updates the parameters of a single ServerTlsPolicy.
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
