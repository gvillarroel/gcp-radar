---
title: "APIs and reference \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/apis
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/apis
  title: "APIs and reference \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

APIs and reference | Virtual Private Cloud | Google Cloud Documentation
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Virtual Private Cloud
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
Virtual Private Cloud (VPC)
All APIs and references
Serverless VPC Access API
Overview
v1
REST Resources
projects.locations
Overview
list
projects.locations.connectors
Overview
create
delete
get
list
patch
projects.locations.operations
Overview
get
list
v1beta1
REST Resources
projects.locations
Overview
list
projects.locations.connectors
Overview
create
delete
get
list
patch
projects.locations.operations
Overview
get
list
Types
Types
GetOperationRequest
ListLocationsRequest
ListLocationsResponse
ListOperationsRequest
ListOperationsResponse
Regional service endpoints
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
gcloud CLI and API references
Home
Documentation
Networking
Virtual Private Cloud
Reference
Was this helpful?
Send feedback
On this page
gcloud CLI and API references
APIs and reference
Stay organized with collections
Save and categorize content based on your preferences.
This page describes Google Cloud CLI commands and APIs that can be used with
Virtual Private Cloud (VPC) networks.
Most networking gcloud CLI commands and APIs are
part of Compute Engine. However, some services on this page use gcloud CLI commands
or APIs that are not part of Compute Engine— for example,
Serverless VPC Access and policy-based routes.
gcloud CLI and API references
Use the following resources and their methods when working with
VPC networks.
Addresses : Use to create internal and external IP address
resources, assign those address resources to Google Cloud resources, and modify
address resources.
gcloud ,
API
Firewall rules : Use to create and modify firewall rules
in your Google Cloud VPC network. Firewall rules enable you to allow or deny traffic to or from virtual machine (VM) instances based on IP addresses, protocol, and ports.
gcloud ,
API
Forwarding rules : Use to create and modify forwarding rules in your VPC
network. Forwarding rules tell the network where to send matching packets
that enter or pass through the network.
gcloud ,
API
Networks : Use to create, modify, and peer VPC networks.
gcloud ,
API
Private Service Connect : Use to access managed services and offer
managed services to service consumers.
Resources for service consumers: Use to access managed services privately
from inside your VPC network.
Endpoints: Use to access managed services. Endpoints are deployed by
using forwarding rules.
gcloud ,
API
Backends: Use to connect to supported managed services by using a load balancer.
Backends use Cloud Load Balancing resources. For more information,
see Cloud Load Balancing API and gcloud references .
Network attachments: Use to let service producer VPC networks initiate connections to consumer networks.
gcloud ,
API
Service connection policies: Use to automate deployment and connectivity
for eligible managed service instances.
gcloud ,
API
Resources for service producers: Use to host managed services in their own separate
VPC networks and offer a private connection to their consumers.
Service attachments: Use to publish services.
gcloud ,
API
Interfaces: Use to let service producer VPC networks initiate connections to consumer VPC networks.
gcloud ,
API
Routes : Use to create and modify VPC network routes.
Static routes: Use to manually configure instructions to
the VPC network for how to forward traffic
that is leaving VM instances.
gcloud ,
API
Policy-based routes: Use to forward traffic based on policies you create.
Policy-based routes have higher priority than static routes.
gcloud ,
API
Shared VPC : Use to share a VPC network with other
projects and control that sharing. In the API, modify these settings by
using the projects resource.
gcloud ,
API
Subnets : Use to create, modify, and delete subnets in a VPC network.
gcloud ,
API
Serverless VPC Access : Use to create, modify, and delete
Serverless VPC Access connectors.
gcloud ,
API
VPC Flow Logs : Use to monitor VPC
networks and understand your network usage.
Manage VPC Flow Logs configurations for subnets:
gcloud ,
API
Manage VPC Flow Logs configurations for VLAN
attachments for Cloud Interconnect and Cloud VPN tunnels:
gcloud ,
API
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
