---
title: "Topology for non-critical applications overview \_|\_ Cloud Interconnect \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/non-critical-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/non-critical-overview
  title: "Topology for non-critical applications overview \_|\_ Cloud Interconnect\
    \ \_|\_ Google Cloud Documentation"
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
Topology for non-critical applications overview
Stay organized with collections
Save and categorize content based on your preferences.
For non-critical applications that can tolerate some downtime, Google recommends
that you use the 99.9% availability configuration. To be covered under the
non-critical applications SLA (99.9% monthly uptime
percentage), you must build your network according to this topology. The 99.9%
availability configuration requires two Cloud Interconnect connections
and two VLAN Attachments in a single Google Cloud region.
You can achieve a 99.9% availability configuration with
Dedicated Interconnect or Partner Interconnect by
using the following documents:
Establish 99.9% availability for Dedicated Interconnect
Establish 99.9% availability for Partner Interconnect
To help you achieve a 99.9% availability configuration, we recommend that you
use interconnect connection groups. These groups provide you with information
about whether your configuration meets the requirements for your intended level
of availability. For more information about interconnect connection groups, see
Resiliency and SLA options .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
