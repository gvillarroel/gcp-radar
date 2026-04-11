---
title: "Partner Interconnect provisioning overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/provisioning-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/provisioning-overview
  title: "Partner Interconnect provisioning overview \_|\_ Google Cloud Documentation"
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
Partner Interconnect provisioning overview
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the steps to successfully create and provision a
Partner Interconnect connection with a service provider.
Before you start the Partner Interconnect provisioning process,
you must already have connectivity with a supported service
provider .
Note: For definitions of terms used on this page, see
Cloud Interconnect key terms .
To create and provision a Partner Interconnect connection,
follow these steps:
Create a VLAN attachment
Create a VLAN attachment for a Partner Interconnect connection.
This step generates a pairing key that you share with your
service provider. The pairing key is a unique key that lets a service
provider identify and connect to your Virtual Private Cloud (VPC)
network and associated Cloud Router. The service provider requires
this key to complete the configuration of your VLAN attachment.
If you want to deploy HA VPN over Cloud Interconnect ,
you must
create encrypted VLAN attachments .
Request a connection from your service provider
Go to your service provider to submit the pairing key and other connection
details, such as the connection capacity and location. Wait until your
service provider configures your connection because they must check that they can
serve your requested capacity. After their configuration is complete, you
receive an email notification from Google.
Activate your connection
After the service provider configures your connection, you must activate it.
Activating the connection and checking its activation status enables you to
verify that you established connectivity with the expected service provider.
Configure on-premises routers
For Layer 2 connections, you must establish a BGP session between your
VPC network's Cloud Router and your on-premises
router. Use your service provider's console to find the VLAN ID of the
connection. Use that VLAN ID and the BGP peer IP address from the
Google Cloud console to configure your on-premises router.
For Layer 3 connections, the service provider establishes a BGP session with
your VPC network's Cloud Router. This configuration
is automated and doesn't require any action from you.
Optional: Configure HA VPN over Cloud Interconnect
If you are deploying HA VPN over Cloud Interconnect,
you must build the HA VPN tunnels that carry encrypted
traffic over your VLAN attachment.
Next
Create VLAN attachments
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
