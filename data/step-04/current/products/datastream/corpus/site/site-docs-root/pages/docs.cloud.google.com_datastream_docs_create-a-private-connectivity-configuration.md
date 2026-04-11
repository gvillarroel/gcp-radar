---
title: "Create a private connectivity configuration \_|\_ Datastream \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration
  title: "Create a private connectivity configuration \_|\_ Datastream \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Guides
Send feedback
Create a private connectivity configuration
Stay organized with collections
Save and categorize content based on your preferences.
In this page, you learn how to create a private connectivity configuration.
This type of configuration contains information that Datastream uses to
communicate with a data source over a private network (internally within
Google Cloud, or with external sources connected over VPN or
Interconnect). This communication happens through a
Private Service Connect interface connection or a
Virtual Private Cloud (VPC) peering connection.
A Private Service Connect interface connection uses a virtual
machine (VM) with a network interface that Datastream creates.
The network interface then connects to your VPC network using the network
attachment that you supply, with the IP address assigned from the network
attachment subnetwork.
A VPC peering connection is a networking connection between two VPCs that
lets you route traffic between them using internal, private IPv4 addresses. You
need to provide the private IP addresses when setting up the private connectivity
configuration because Datastream doesn't support Domain Name System
(DNS) resolution in private connections.
Datastream automatically deletes private
connectivity configurations that haven't been used for a period of six
consecutive months. To retain your private connectivity configurations, make
sure they are used in at least one active connection profile.
Before you begin
Before you create your private connectivity configuration, review the
prerequisites:
For VPC peering, see
VPC peering prerequisites .
For Shared VPC, see
Shared VPC prerequisites .
For Private Service Connect interfaces, see
Private Service Connect prerequisites .
Create the configuration
To create a private connectivity configuration, perform the following steps:
Go to the Private connectivity configurations page in the Google Cloud console.
Go to the Private connectivity configurations page
Click Create configuration .
Use the following table to populate the fields of the
Configure private connectivity section of the
Create private connectivity configuration page:
Field Description
Configuration name Enter the display name of the private
connectivity configuration.
Configuration ID Datastream populates this field
automatically based on the configuration name that you enter. You can keep the
ID that's auto-generated or change it.
Region Select the region where the private connectivity
configuration is stored.
To use a private connection, any streams and connection
profiles that use this configuration must be in the same region.
In the Set up connection section, select an option from the
Private connectivity method drop-down:
PSC interfaces : select this option to use Private Service Connect
interface as your private connectivity method:
Field Description
Project ID Select the identifier of the project where the
network attachment that you want to use is. By default, this is your current
project. To change the value, click Change and select a
different project.
To view the list of network attachments in the selected
project, you need the compute.networkAttachments.get permission.
Network attachment Select the network attachment that
you created for your VPC.
Update allowlist Click this button to allow connections from
the Datastream IP addresses. You need to have the
compute.networkAdmin role assigned to connect to the network
attachment.
VPC peering : select this option to use VPC peering as your private
connectivity method:
Field Description
Authorized VPC network Select the VPC network that you created.
Allocate an IP range Enter an available IP range on the VPC
network.
Click CREATE .
It takes a few minutes for your private connectivity configuration to
be created. Background resources need to be created so that the configuration
can be created.
After creating a private connectivity configuration, you can
view high-level and detailed information
about it.
What's next
Learn how to view your private connectivity configuration .
Find out how to delete a private connectivity configuration .
Learn about the Private Service Connect interfaces private connectivity method.
Learn about the VPC peering private connectivity method.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
