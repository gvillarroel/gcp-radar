---
title: "APIs and reference \_|\_ Network Service Tiers \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-tiers/docs/apis
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-tiers/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/network-tiers/docs/apis
  title: "APIs and reference \_|\_ Network Service Tiers \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Service Tiers
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
APIs and reference
This page describes Google Cloud resources relevant to Network Service Tiers. For
procedures and examples, see
Using Network Service Tiers .
The Network Service Tiers APIs and gcloud commands are part of Compute Engine.
gcloud CLI and API reference
Addresses
Used to create, edit, and manage internal and external IP address resources that
can be assigned to virtual machine (VM) instances and forwarding rules for load
balancers. Internal IP addresses and global external IP addresses are always
Premium Tier. Regional external IP addresses can use either Standard or Premium
Tier.
gcloud
API
Forwarding rules
Used to create, edit, and manage forwarding rules in your
Virtual Private Cloud (VPC) network. Forwarding rules with a load balancing
scheme of EXTERNAL define paths for sending traffic from outside your
VPC network to a load balancer or VM instances in your
VPC network.
External forwarding rules can be either global or regional. Global external
forwarding rules are always Premium Tier. Regional external forwarding
rules can use either Standard or Premium Tier.
gcloud
API
Instances
Used to create and modify VM instances in your VPC network.
gcloud
API
Instance templates
Used to create and modify instance templates. Instance templates are used by
managed instance groups. Instance groups are one type of backend for load
balancers.
gcloud
API
Projects
Used to set the default network tier to apply to resources in a project.
This default can be overridden on a resource-by-resource basis.
gcloud
API
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
