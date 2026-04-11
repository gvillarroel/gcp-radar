---
title: "Configure VPC networks \_|\_ Oracle Database at Google Cloud \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/configure-vpc
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/configure-vpc
  title: "Configure VPC networks \_|\_ Oracle Database at Google Cloud \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Oracle Database at Google Cloud
Guides
Send feedback
Configure VPC networks
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to set up a Virtual Private Cloud (VPC) network for your
Oracle Database@Google Cloud resources.
Oracle Database@Google Cloud uses VPC networking projects to manage
connectivity to your Oracle Database@Google Cloud resources. For more
information about how VPC networks work at Google Cloud,
see VPC networks .
Before you begin
To configure a VPC network for your Oracle Database@Google Cloud
resources, you need a Google Cloud project with billing enabled.
The VPC network must be in the same Google Cloud project
as your Oracle Database@Google Cloud resources.
Complete the following steps before setting up your VPC network:
Set up your Google Cloud project .
Enable the Oracle Database@Google Cloud API for the project.
Enable the Oracle Database@Google Cloud API
Confirm that you have the required roles necessary to configure a networking
project: roles/compute.networkAdmin .
For more information on how to assign roles, see
Configure IAM roles .
Create a VPC network
To connect to your Oracle Database@Google Cloud resources, you need to define a
VPC network. You can create a VPC network
using the Google Cloud console, Google Cloud CLI, or VPC API.
Oracle Database@Google Cloud only supports IPv4 connections.
To create a VPC network, choose one of the following:
Create an auto mode VPC network
Create a custom mode VPC network with only IPv4 subnets
Modify a VPC network
To modify a VPC network that is being used by your
Oracle Database@Google Cloud resources, see
Modify networks .
What's next
Learn more about how access works .
Generate SSH keys for your resources.
Create a Exadata VM Cluster .
Learn more about Oracle Database@Google Cloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
