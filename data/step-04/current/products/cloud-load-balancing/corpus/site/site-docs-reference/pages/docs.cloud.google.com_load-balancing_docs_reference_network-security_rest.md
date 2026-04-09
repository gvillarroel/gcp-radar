---
title: "Network Security API \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest
  title: "Network Security API \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Network Security API | Cloud Load Balancing | Google Cloud Documentation
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
Load Balancing
Start free
Overview
Guides
Reference
Resources
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
projects.locations
Overview
get
list
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
projects.locations.operations
Overview
cancel
delete
get
list
projects.locations.serverTlsPolicies
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
Home
Documentation
Networking
Load Balancing
Reference
Send feedback
Network Security API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1beta1.projects.locations.authzPolicies
REST Resource: v1beta1.projects.locations.backendAuthenticationConfigs
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.authzPolicies
REST Resource: v1.projects.locations.backendAuthenticationConfigs
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.serverTlsPolicies
Service: networksecurity.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://networksecurity.googleapis.com/$discovery/rest?version=v1
https://networksecurity.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://networksecurity.googleapis.com
REST Resource: v1beta1.projects.locations.authzPolicies
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/authzPolicies
Creates a new AuthzPolicy in a given project and location.
delete
DELETE /v1beta1/{name=projects/*/locations/*/authzPolicies/*}
Deletes a single AuthzPolicy.
get
GET /v1beta1/{name=projects/*/locations/*/authzPolicies/*}
Gets details of a single AuthzPolicy.
list
GET /v1beta1/{parent=projects/*/locations/*}/authzPolicies
Lists AuthzPolicies in a given project and location.
patch
PATCH /v1beta1/{authzPolicy.name=projects/*/locations/*/authzPolicies/*}
Updates the parameters of a single AuthzPolicy.
REST Resource: v1beta1.projects.locations.backendAuthenticationConfigs
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/backendAuthenticationConfigs
Creates a new BackendAuthenticationConfig in a given project and location.
delete
DELETE /v1beta1/{name=projects/*/locations/*/backendAuthenticationConfigs/*}
Deletes a single BackendAuthenticationConfig to BackendAuthenticationConfig.
get
GET /v1beta1/{name=projects/*/locations/*/backendAuthenticationConfigs/*}
Gets details of a single BackendAuthenticationConfig to BackendAuthenticationConfig.
list
GET /v1beta1/{parent=projects/*/locations/*}/backendAuthenticationConfigs
Lists BackendAuthenticationConfigs in a given project and location.
patch
PATCH /v1beta1/{backendAuthenticationConfig.name=projects/*/locations/*/backendAuthenticationConfigs/*}
Updates the parameters of a single BackendAuthenticationConfig to BackendAuthenticationConfig.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.authzPolicies
Methods
create
POST /v1/{parent=projects/*/locations/*}/authzPolicies
Creates a new AuthzPolicy in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/authzPolicies/*}
Deletes a single AuthzPolicy.
get
GET /v1/{name=projects/*/locations/*/authzPolicies/*}
Gets details of a single AuthzPolicy.
list
GET /v1/{parent=projects/*/locations/*}/authzPolicies
Lists AuthzPolicies in a given project and location.
patch
PATCH /v1/{authzPolicy.name=projects/*/locations/*/authzPolicies/*}
Updates the parameters of a single AuthzPolicy.
REST Resource: v1.projects.locations.backendAuthenticationConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*}/backendAuthenticationConfigs
Creates a new BackendAuthenticationConfig in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/backendAuthenticationConfigs/*}
Deletes a single BackendAuthenticationConfig to BackendAuthenticationConfig.
get
GET /v1/{name=projects/*/locations/*/backendAuthenticationConfigs/*}
Gets details of a single BackendAuthenticationConfig to BackendAuthenticationConfig.
list
GET /v1/{parent=projects/*/locations/*}/backendAuthenticationConfigs
Lists BackendAuthenticationConfigs in a given project and location.
patch
PATCH /v1/{backendAuthenticationConfig.name=projects/*/locations/*/backendAuthenticationConfigs/*}
Updates the parameters of a single BackendAuthenticationConfig to BackendAuthenticationConfig.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.serverTlsPolicies
Methods
create
POST /v1/{parent=projects/*/locations/*}/serverTlsPolicies
Creates a new ServerTlsPolicy in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/serverTlsPolicies/*}
Deletes a single ServerTlsPolicy.
get
GET /v1/{name=projects/*/locations/*/serverTlsPolicies/*}
Gets details of a single ServerTlsPolicy.
list
GET /v1/{parent=projects/*/locations/*}/serverTlsPolicies
Lists ServerTlsPolicies in a given project and location.
patch
PATCH /v1/{serverTlsPolicy.name=projects/*/locations/*/serverTlsPolicies/*}
Updates the parameters of a single ServerTlsPolicy.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-29 UTC."],[],[]]
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
