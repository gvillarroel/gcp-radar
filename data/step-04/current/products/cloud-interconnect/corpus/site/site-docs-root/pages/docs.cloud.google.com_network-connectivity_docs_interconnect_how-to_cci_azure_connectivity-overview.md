---
title: "Connect to Microsoft Azure \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/azure/connectivity-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/azure/connectivity-overview
  title: "Connect to Microsoft Azure \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Send feedback
Connect to Microsoft Azure
Stay organized with collections
Save and categorize content based on your preferences.
Cross-Cloud Interconnect lets you establish a dedicated physical connection
between Google Cloud and Microsoft Azure networks.
Google provisions this physical connection on your behalf. However, as part of the setup
process, you must complete several tasks. You complete some tasks before Google provisions your
connection and some tasks afterward.
These tasks include the following:
Choose your locations
Identify locations for your primary and redundant Cross-Cloud Interconnect and
Azure ports. Make a note of the location names. You need these details to
complete the ordering and configuration processes.
Order
Cross-Cloud Interconnect connections Place an order for two
Cross-Cloud Interconnect connections—a primary connection and a redundant
one. In response, Google reserves two ports for you in the facility that you specify. For each
port, we send you a confirmation email that contains instructions related to the next step:
ordering your Azure ports.
Order
Azure ports Order your Azure ports, and download the
corresponding letter of authorization (LOA). This document confirms your right to use the ports.
Send the LOA to Google, following the instructions from the confirmation email that Google sent
you. After Google receives the LOA, we begin the process of establishing your
connections.
Configure
your Google Cloud resources Complete the required configuration in
Google Cloud. First, create a redundant set of VLAN attachments in your
Virtual Private Cloud (VPC) network. Each VLAN attachment represents a logical connection between a
region in your VPC network and your Azure resources. Then, for
each VLAN attachment, use a Cloud Router to configure a Border Gateway Protocol (BGP) peering
session.
Configure your Azure resources
Configure your Azure resources. This step
includes creating an ExpressRoute circuit, creating a private peering, and completing other tasks.
Verify your connections
Follow the recommended steps to verify that your networks are connected.
You can also use Cross-Cloud Interconnect to connect to other cloud service providers.
For more information, see the
Supported cloud providers
section in the Cross-Cloud Interconnect overview.
Next
Choose your locations
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
