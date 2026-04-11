---
title: "Cross-Site Interconnect provisioning overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cross-site/provisioning-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cross-site/provisioning-overview
  title: "Cross-Site Interconnect provisioning overview \_|\_ Google Cloud Documentation"
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
Cross-Site Interconnect provisioning overview
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the steps to successfully create and configure
Cross-Site Interconnect.
Note: For definitions of terms used on this page, see Cloud Interconnect key
terms .
To create and configure a Cloud Interconnect connection and create
a cross-site network, follow these steps:
Check bandwidth quotas and limits
Check your quota to ensure that you have enough bandwidth to support your
expected traffic between metros. If you need more quota, you must request an increase
before proceeding. Similarly, check the limit for the maximum bandwidth
per wire and request an exception if necessary.
Order Cross-Site Interconnect connections
Submit an order, specifying the details of your connections.
Google then emails you an order confirmation. After your resources have been
allocated, you receive another email with your LOA-CFAs.
Retrieve LOA-CFAs
Send the LOA-CFAs to your vendor. They provision the connections between
the Google peering edge and your on-premises network. Google
automatically starts testing the light levels on each allocated port after
24 hours.
Test the connections
Follow the recommended steps to verify that your networks are connected
to Google's network.
Create a cross-site network
When your connections are ready to use, you need to connect
your networks to each other. To do that,
create a cross-site network over your connections, specifying the properties
of the wire or wires between your networks, including their bandwidth.
Configure on-premises routers
After you create a cross-site network with one or more wire groups, to start
sending traffic between your sites, you need to configure your on-premises
routers to establish connectivity with each other.
Next
Check bandwidth quotas and limits
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
