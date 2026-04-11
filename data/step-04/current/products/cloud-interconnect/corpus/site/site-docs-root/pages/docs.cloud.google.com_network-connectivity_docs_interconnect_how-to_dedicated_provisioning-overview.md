---
title: "Dedicated Interconnect provisioning overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/provisioning-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/provisioning-overview
  title: "Dedicated Interconnect provisioning overview \_|\_ Google Cloud Documentation"
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
Dedicated Interconnect provisioning overview
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the steps to successfully create and configure a
Dedicated Interconnect connection.
Note: For definitions of terms used on this page, see Cloud Interconnect key
terms .
To create and configure a Cloud Interconnect connection for
Dedicated Interconnect, follow these steps:
Decide if you want
MACsec for Cloud Interconnect .
MACsec for Cloud Interconnect can help you secure traffic on
Cloud Interconnect connections. If you want
MACsec for Cloud Interconnect, you must select it when you order a
Dedicated Interconnect connection.
MACsec for Cloud Interconnect is available for 100‑Gbps and
400‑Gbps links, regardless of location. If you want a 10G‑Gpbs
link with MACsec support, verify that it is available in your desired
locations .
Order a Dedicated Interconnect connection
Submit an order, specifying the details of your connection.
Google then emails you an order confirmation. After your resources have been
allocated, you receive another email with your LOA-CFAs.
Retrieve LOA-CFAs
Send the LOA-CFAs to your vendor. They provision the connections between
the Google peering edge and your on-premises network. Google
automatically starts testing the light levels on each allocated port after
24 hours.
Test the connection
If the light level of your physical ports is within the expected threshold,
the ports are operational and Google sends you an automated email
containing configuration details for connectivity testing. Apply these
configurations to your router so that Google can confirm connectivity.
This process confirms the IP connectivity of your connection's production
configuration.
If you don't apply these configurations (or apply them incorrectly), Google
sends an automated email with troubleshooting information.
If the light level of your physical ports is not within the expected
threshold, Google sends an automated email to notify you of the failure.
After all tests have passed, your Dedicated Interconnect
connection is ready to use.
Create VLAN attachments
When your connection is ready to use, you need to connect
Virtual Private Cloud (VPC) networks to your on-premises network. To do that,
first create a VLAN attachment, specifying an existing Cloud Router
that's in the VPC network that you want to reach.
If you want to deploy
HA VPN over Cloud Interconnect ,
you must
create encrypted VLAN attachments .
Configure on-premises routers
After you create a VLAN attachment, to start sending traffic between
networks, you need to configure your on-premises router to establish a BGP
session with your Cloud Router. To configure your on-premises
router, use the VLAN ID, interface IP address, and peering IP address
provided by the VLAN attachment.
Optional: Configure HA VPN over Cloud Interconnect
If you are deploying
HA VPN over Cloud Interconnect,
you must build the HA VPN tunnels that carry IPsec-encrypted
traffic over your VLAN attachment.
Next
Order a connection
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
