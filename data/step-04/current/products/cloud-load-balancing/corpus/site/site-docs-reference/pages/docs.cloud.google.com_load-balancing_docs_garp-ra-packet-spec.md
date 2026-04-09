---
title: "GARP and RA packet specifications for HA policy with fast IP move \_|\_ Cloud\
  \ Load Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/garp-ra-packet-spec
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/garp-ra-packet-spec
  title: "GARP and RA packet specifications for HA policy with fast IP move \_|\_\
    \ Cloud Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

GARP and RA packet specifications for HA policy with fast IP move | Cloud Load Balancing | Google Cloud Documentation
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
On this page
GARP packet format for IPv4 traffic
RA packet format for IPv6 traffic
Home
Documentation
Networking
Load Balancing
Reference
Was this helpful?
Send feedback
GARP and RA packet specifications for HA policy with fast IP move
Stay organized with collections
Save and categorize content based on your preferences.
On this page
GARP packet format for IPv4 traffic
RA packet format for IPv6 traffic
The following sections specify the GARP and RA packet specifications required by
Google Cloud when the haPolicy.fastIPMove backend service parameter is
set to GARP_RA .
GARP packet format for IPv4 traffic
The following fields are required when you use a GARP packet to trigger a
new leader.
Sender MAC address
MAC address of the sender VM instance (the new leader).
Sender IPv4 address
The / 32 IPv4 address that is moving to the new leader.
Target MAC address
Broadcast MAC address: FF-FF-FF-FF-FF-FF
Target IPv4 address
Same as the sender IPv4 address.
ARP operation
ARPOP_ REPLY : 2
RA packet format for IPv6 traffic
RA supports advertising multiple IPv6 prefix ranges in a single RA packet by
attaching multiple ICMPv6 prefix information
options .
When haPolicy.fastIPMove is set to GARP_RA , every IPv6 prefix range in a
single RA packet should be an exact match to a forwarding rule IP address, and
all of those forwarding rules must point to the same regional backend service.
If the set of IPv6 prefix ranges are served by different regional backend
services, the RA packet is treated as invalid and doesn't trigger a fast IP
move.
The following fields are required when you use an RA packet to trigger a
new leader.
Sender MAC address
MAC address of the sender VM instance (the new leader).
Sender IPv6 address
Link-local IPv6 address of the sender VM instance. This is not the IPv6
address that is moving to the new leader.
Target MAC address
All node multicast MAC address: 33-33-00-00-00-01
Target IPv6 address
IPv6 all node multicast address: FF02:: 1
IPv6 hop limit
255
ICMPv6 type
ND_ ROUTER_ ADVERT : 134
ICMPv6 options type
ND_ OPT_ PREFIX_ INFORMATION : 3
Prefix information option prefix
The IPv6 prefix that is moving to the new leader. Bits after the prefix
must be zero.
Prefix information option prefix length
The length of IPv6 prefix that is moving to the new leader.
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
