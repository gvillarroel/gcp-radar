---
title: "Cloud NGFW overview \_|\_ Cloud Next Generation Firewall \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/firewall/docs/about-firewalls
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/about-firewalls
  title: "Cloud NGFW overview \_|\_ Cloud Next Generation Firewall \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NGFW
Guides
Send feedback
Cloud NGFW overview
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Next Generation Firewall is a distributed, modern cloud firewall service
that lets you secure your Google Cloud workloads, such as applications and
services that run on Google Cloud or that consume Google Cloud
resources.
Cloud NGFW provides stateful inspection and Layer 7 application
control for both north-south traffic (entering or leaving a
Virtual Private Cloud (VPC) network) and east-west traffic (communication among
resources within VPC networks). For advanced security,
Cloud NGFW includes
intrusion detection and prevention service and
URL filtering service . Intrusion detection and prevention service
inspects traffic at the application layer to identify and block network-based
threats. URL filtering service lets you control access to websites and webpages by
blocking or allowing their URLs.
This document provides an overview of Cloud NGFW features, service
tiers, and the different networks Cloud NGFW supports.
Key features of Cloud NGFW
Cloud NGFW offers the following key security features:
Distributed firewall service . Cloud NGFW applies firewall
rules to VM instances, VM-based resources, and supported load balancers in a
VPC network to allow traffic, deny traffic, or send traffic
to inspection.
Global and regional network firewall policies . Cloud NGFW
lets you group firewall rules into policy objects that you can apply
consistently across multiple Virtual Private Cloud (VPC) networks, either
globally or within a specific region. For more information, see Global
network firewall policies and
Regional network firewall
policies .
Hierarchical firewall policies . Cloud NGFW
lets you group firewall rules into policy objects that you can apply
across your organization or to specific folders. These policies
provide a consistent firewall enforcement across the Google Cloud
resource hierarchy. For more information, see Hierarchical firewall
policies .
Multi-layer security . Cloud NGFW protects your workloads by
applying controls at Layer 3, Layer 4, and Layer 7 of the network stack. You
can create firewall rules that control traffic at the network
layer and the application layer.
Granular control and micro-segmentation . Micro-segmentation is a
security practice that divides a network into small, distinct zones to
create a zero-trust framework for your workloads. Using secure
tags , you can enable micro-segmentation and apply granular, identity-based
security rules to filter both internal and external traffic.
Cloud NGFW tiers
Cloud NGFW features are categorized in the following tiers:
Cloud Next Generation Firewall Essentials : the foundational firewall service tier
that Google Cloud offers. The features of this tier let you create
rules based on standard network attributes, including IP ranges, ports, and
protocols. The features of this tier are offered at no cost.
Cloud Next Generation Firewall Standard : extends the Essentials tier features with
enhanced capabilities, such as fully qualified domain name (FQDN) objects
and threat intelligence.
Cloud Next Generation Firewall Enterprise : the top tier of Cloud NGFW,
provides advanced configurations and Layer 7 security capabilities, such as
URL filtering and intrusion detection and prevention.
The Cloud NGFW tier system gives you granular control
over your security spending. For more information about Cloud NGFW
features, tiers, and pricing, see Cloud NGFW
tiers and Cloud NGFW
pricing .
Supported VPC networks
Cloud NGFW supports the following VPC networks, each
designed for specific workload requirements and performance profiles.
Regular VPC network : Regular VPC
networks support the following Cloud NGFW
firewall policies:
Global network firewall
policies
Regional network firewall
policies
Hierarchical firewall policies
Regular VPC networks also support VPC
firewall rules .
Remote Direct Memory Access (RDMA) network : You can protect RDMA
networks by applying regional network
firewall policies .
What's next
Cloud NGFW tiers
Firewall policies and rules
Evaluation order for firewall policies and rules
Network profiles
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
