---
title: "Partner Cross-Cloud Interconnect for OCI provisioning overview \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-oci/provisioning-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-oci/provisioning-overview
  title: "Partner Cross-Cloud Interconnect for OCI provisioning overview \_|\_ Google\
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
Cloud Interconnect
Guides
Send feedback
Partner Cross-Cloud Interconnect for OCI provisioning overview
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the steps to successfully create and provision a
Partner Cross-Cloud Interconnect for Oracle Cloud Infrastructure (OCI) connection.
Before you start the Partner Cross-Cloud Interconnect for OCI provisioning process,
you must already have an Oracle Cloud Infrastructure account.
Note: For definitions of terms used on this page, see
Cloud Interconnect key terms .
To create and provision a Partner Cross-Cloud Interconnect for Oracle Cloud Infrastructure (OCI) connection,
follow these steps:
Choose a paired location
Google Cloud regions are paired with specific OCI
regions. When you choose a specific Google Cloud region to create your
resources in, you must choose the corresponding OCI region.
Create a VLAN attachment
Create a VLAN attachment for a Partner Cross-Cloud Interconnect for Oracle Cloud Infrastructure (OCI) connection.
This step generates a pairing key that you share with OCI.
The pairing key is a unique key that lets OCI identify and connect to your
Virtual Private Cloud (VPC) network and associated Cloud Router.
OCI requires this key to complete the configuration of your VLAN attachment.
Create a FastConnect virtual circuit with OCI
Submit the pairing key and other connection
details, such as the connection capacity and location to OCI. After the OCI
configuration is complete, you receive an email notification from Google.
Activate your connection
After OCI configures your connection, you must activate it.
Activating the connection and checking its activation status lets you
verify that you established connectivity with OCI.
Next
Paired locations
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
