---
title: "Network Security Integration overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/nsi-overview
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/nsi-overview
  title: "Network Security Integration overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Security Integration
Guides
Send feedback
Network Security Integration overview
Stay organized with collections
Save and categorize content based on your preferences.
Network Security Integration lets you integrate network security appliance VMs, including
VMs running packet inspection and firewall software, into a VPC
network without changing routes in the VPC network.
Network Security Integration uses the Generic Network Virtualization Encapsulation
(GENEVE) protocol. GENEVE delivers original packets and metadata to network
security appliance VMs from one or more of your VPC networks
based on firewall rules that you create. For more information, see Understand
GENEVE format .
Types of integrations
Network Security Integration offers two ways to integrate network security appliance
VMs:
In-band : this option routes packets to network appliance VMs for
inspection, where a network appliance VM decides whether to allow or block
the packets. With in-band, network appliances can block any identified
threats before the traffic reaches its destination. For more information,
see In-band integration
overview .
Out-of-band : this option routes a copy of packets to network appliance
VMs for analysis, without affecting the original traffic flow. For more
information, see Out-of-band integration
overview .
Service producers and consumers
At a high level, Network Security Integration uses a producer-consumer model for data
inspection and monitoring of traffic data. In this model:
The producer has network appliance VMs that provide traffic inspection
and monitoring.
The consumer uses the producer's services to secure or monitor their own
services' network traffic.
For example, imagine a scenario where a network security company's appliances
provide custom network analytics to a financial services organization for their
applications running on Google Cloud. In this scenario, the network
security company is the producer , and the financial services organization is
the consumer .
Figure 1 shows the high-level deployment architecture of the
Network Security Integration services where both the consumer and producer are in the
same organization.
Figure 1. High-level deployment architecture of the
Network Security Integration services (click to enlarge).
In the previous diagram, the producer-consumer model divides the network into
two: a service producer network and a service consumer network.
A service producer network contains a set of scalable network appliances
that inspect traffic.
A service consumer network contains Google Cloud VMs. The consumer
network uses rules in a global network firewall policy, or hierarchical
firewall policy for in-band integration, to send traffic to the producer network.
Depending on the configuration, Network Security Integration either intercepts or
mirrors the traffic from one or more consumer networks. It then encapsulates the
traffic with GENEVE and sends it to the producer's network appliances for
inspection.
Service producer network
A producer VPC network contains one or more zonal deployments
of network appliances that inspect or mirror consumer network traffic. Each
zonal deployment consists of an internal passthrough Network Load Balancer whose backend VMs are network
appliances that you manage.
Zonal deployments are grouped into a single deployment group that is
referenced by an endpoint group in each consumer VPC network.
Service consumer network
A consumer VPC network contains Google Cloud workloads
that run on virtual machine (VM) instances. Each consumer VPC
network references a producer's packet inspection or analysis services with
an endpoint group .
Each consumer VPC network uses rules in a global network
firewall policy, or hierarchical firewall policy for in-band integration, to control
the traffic that is inspected or mirrored by the producer's appliances.
These firewall rules use the apply_security_profile_group action. You can
make the rules as specific as necessary to achieve your security goals,
matching traffic by using multiple
attributes such
as IP addresses or IP ranges, and secure tags.
What's next
Out-of-band integration overview
In-band integration overview
Understand GENEVE format
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
