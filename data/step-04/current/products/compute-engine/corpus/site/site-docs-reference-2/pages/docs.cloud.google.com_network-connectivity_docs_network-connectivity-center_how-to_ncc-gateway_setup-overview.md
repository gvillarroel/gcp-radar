---
title: "NCC Gateway setup overview \_|\_ Network Connectivity Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/ncc-gateway/setup-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/ncc-gateway/setup-overview
  title: "NCC Gateway setup overview \_|\_ Network Connectivity Center \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Network Connectivity Center
Guides
Send feedback
NCC Gateway setup overview
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page gives you an overview of the steps required to set up NCC Gateway.
Before you begin the setup process for NCC Gateway, familiarize
yourself with the following resources:
Network Connectivity Center (NCC) overview
NCC Gateway overview
As part of the NCC Gateway setup process, you must complete
several tasks. Depending on your configuration, the way that you complete these
tasks can vary significantly. The following set up instructions use a four
spoke group
network topology.
Set up NCC Gateway
The tasks to set up NCC Gateway include the following:
Create a hub and connect it to a VPC network
You first create an NCC hub to which you can attach
NCC Gateway spokes. The hub must use the
preset hybrid inspection topology .
Then, connect application Virtual Private Cloud (VPC) networks to the hub and
group them based on the hybrid inspection preset topology.
Create an NCC Gateway spoke
You must create an NCC Gateway spoke
and attach it to the hub that you created.
Connect the Secure Access Connect attachment to NCC Gateway
The Secure Access Connect attachment lets you connect
NCC Gateway with third-party Security Service Edge (SSE)
products.
NCC Gateway supports connections to the following SSE products:
Symantec Cloud Secure Web Gateway (Cloud SWG)
Palo Alto Networks Prisma Access
To complete this step, you must already have an account with the provider.
Add hybrid connections to the NCC Gateway spoke
Your Google Cloud and on-premises environment or other cloud
environments must be connected through hybrid connectivity
by using Cloud Interconnect VLAN attachments with
Cloud Router.
Create and manage NCC Gateway advertised routes
Each NCC Gateway advertised route that you create is installed
in the route table of the NCC hub to which the
NCC Gateway spoke is connected. The
gateway itself is the next hop for each route that it advertises.
Note: If you configure a gateway advertised route in the gateway spoke, this
route is not propagated to the NCC hub route table until
there is an active SSE gateway.
Add regions
If you want to add NCC Gateway spokes and hybrid connections in other
regions, repeat steps 2-5 in the NCC Gateway setup. Adding more
connections is optional.
Manage NCC Gateway
After you have configured NCC Gateway, you can manage the
gateway. See the following resources for instructions.
Hubs
Update the hub
Delete the hub
Spokes
Update the NCC Gateway spoke's capacity
Advertised routes
Create and manage NCC Gateway advertised routes
Cloud Routers
Manage Cloud Routers
View router details
You can't change the NCC Gateway linked with the
Cloud Router. However, you can change the custom route advertisements.
For detailed information about Cloud Router advertised routes, see
Advertised routes .
What's next?
To learn about NCC Gateway, see
NCC Gateway overview .
To learn how to configure NCC Gateway, see
NCC Gateway setup overview .
To learn how to configure Secure Access Connect, see
Create a realm
To find solutions for common issues, see
Troubleshoot NCC .
To get details about API and gcloud CLI commands, see
APIs and reference .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
