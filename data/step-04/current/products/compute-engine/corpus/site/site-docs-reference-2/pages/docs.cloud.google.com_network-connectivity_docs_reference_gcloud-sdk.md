---
title: "gcloud CLI command reference \_|\_ Network Connectivity \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/reference/gcloud-sdk
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/reference/gcloud-sdk
  title: "gcloud CLI command reference \_|\_ Network Connectivity \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Reference
Send feedback
gcloud CLI command reference
Stay organized with collections
Save and categorize content based on your preferences.
Network Connectivity Google Cloud CLI commands enable connectivity with and
between Google Cloud resources.
When you run Network Connectivity gcloud CLI commands, you
perform operations on resources that are part of the Network Connectivity
API. For more information about the API, see the
Network Connectivity API reference .
Commands for working with NCC hubs
Use these commands when working with NCC hubs. For more
information, see
Working with hubs .
Command
Task
gcloud network-connectivity hubs list
Lists NCC hubs for a project
gcloud network-connectivity hubs create
Creates a NCC hub
gcloud network-connectivity hubs describe
Lists detailed information for a NCC hub
gcloud network-connectivity hubs update
Adds a label or description to a NCC hub
gcloud network-connectivity hubs delete
Deletes a NCC hub
gcloud network-connectivity hubs accept-spoke
Accepts a VPC spoke from a different project into a hub
gcloud network-connectivity hubs list-spokes
Lists spokes connected to a hub
gcloud network-connectivity hubs reject-spoke
Rejects a VPC spoke from a different project from being accepted into a hub
gcloud network-connectivity hubs add-iam-policy-binding
Adds an Identity and Access Management (IAM) policy binding to the IAM policy of a hub resource
gcloud network-connectivity hubs get-iam-policy-binding
Gets the IAM policy for a hub resource
gcloud network-connectivity hubs remove-iam-policy-binding
Removes an IAM policy binding from the IAM policy of a hub resource
gcloud network-connectivity hubs route-tables describe
Describes a NCC hub route table
gcloud network-connectivity hubs route-tables list
Lists a NCC hub route table
gcloud network-connectivity hubs route-tables routes describe
Describes a NCC hub route
gcloud network-connectivity hubs route-tables routes list
Lists a NCC hub route
Commands for working with NCC spokes
Use these commands when working with NCC spokes. For more
information, see
Working with spokes .
Command
Task
gcloud network-connectivity spokes list
Lists all spokes in the specified region
gcloud network-connectivity spokes linked-vpc-network create
Creates a VPC spoke
gcloud network-connectivity spokes linked-producer-vpc-network create
Creates a producer VPC spoke
gcloud network-connectivity spokes linked-router-appliances create
Creates a Router appliance spoke
gcloud network-connectivity spokes linked-interconnect-attachments create
Creates a VLAN attachment spoke
gcloud network-connectivity spokes linked-vpn-tunnels create
Creates a VPN spoke
gcloud network-connectivity spokes describe
Lists detailed information for a NCC spoke
gcloud network-connectivity spokes linked-vpc-network update
Updates a VPC spoke
gcloud network-connectivity spokes linked-producer-vpc-network update
Updates a producer VPC spoke
gcloud network-connectivity spokes linked-router-appliances update
Updates a Router appliance spoke
gcloud network-connectivity spokes linked-interconnect-attachments update
Adds a label or description to a VLAN attachment spoke
gcloud network-connectivity spokes linked-vpn-tunnels update
Adds a label or description to a VPN spoke
gcloud network-connectivity spokes delete
Deletes a NCC spoke
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
