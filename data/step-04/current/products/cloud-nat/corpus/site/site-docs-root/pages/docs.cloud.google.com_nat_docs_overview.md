---
title: "Cloud NAT overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/nat/docs/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/nat/docs
source_metadata:
  url: https://docs.cloud.google.com/nat/docs/overview
  title: "Cloud NAT overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NAT
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Cloud NAT overview
Cloud NAT provides network address translation
(NAT) for outbound traffic to the internet, Virtual Private Cloud (VPC)
networks, on-premises networks, and other cloud provider networks.
Cloud NAT translates addresses for the following resources:
Compute Engine virtual machine (VM) instances
Google Kubernetes Engine (GKE) clusters
Cloud Run instances
Cloud Run functions instances
App Engine standard environment instances
Regional internet network endpoint groups (NEGs)
NAT is automatically applied to the resources that match your
Cloud NAT configuration after you create a Cloud NAT gateway
and configure it to serve the subnets where those resources run.
Cloud NAT
supports address translation for established inbound response packets only. It
doesn't allow unsolicited inbound connections.
Types of Cloud NAT
You configure Cloud NAT by creating a Cloud NAT gateway in
the region of the subnets that require NAT. The gateway then serves each subnet
that you specify in its configuration.
Cloud NAT supports two types of NAT:
Public NAT
Private NAT
A single Cloud NAT gateway provides either Public NAT or
Private NAT. By creating two separate gateways,
you can use both NAT types to serve the same subnet.
Both Public NAT and Private NAT translate
addresses from IPv4 to IPv4. Public NAT also provides
translation from IPv6 to IPv4.
Public NAT
Public NAT lets Google Cloud resources that don't have
external IPv4 addresses communicate with IPv4 destinations on the internet.
These VMs use a set of shared external IP addresses to connect to the internet.
Cloud NAT doesn't rely on proxy VMs. Instead, a Cloud NAT
gateway allocates a set of external IP addresses and source ports to each VM
that uses the gateway to create outbound connections to the internet.
Consider a scenario in which you have VM-1 in subnet-1 whose network
interface doesn't have an external IP address. However, VM-1 needs to connect
to the internet to download updates. To enable connectivity to the internet,
you can create a Cloud NAT gateway that is configured to apply to the
IP address range of subnet-1 . Now, VM-1 can send traffic to the internet by
using the internal IP address of subnet-1 .
For more information, see
Public NAT .
Note: Traffic sent to Google APIs and services are routed through
Private Google Access even if
the VM instance initiating the connections uses Public NAT.
For more information, see Private Google Access interaction .
Private NAT
Private NAT enables private-to-private NAT for the following
traffic.
Traffic
Description
From a VPC network to another VPC
network
Private NAT supports private-to-private NAT for
VPC networks attached as
VPC spokes to a Network Connectivity Center hub. For more information, see
Private NAT for NCC spokes .
From a VPC network to a network outside of
Google Cloud
Private NAT supports the following options for
traffic between VPC networks and on-premises
or other cloud provider networks:
Private-to-private NAT for networks connected through
NCC hybrid spokes. For more
information, see
Private NAT for NCC spokes .
Private-to-private NAT for networks connected through
Cloud Interconnect or Cloud VPN. For more information, see
Hybrid NAT .
Consider a scenario in which your Google Cloud resources in a
VPC network need to communicate with destinations in another
VPC network. However, the destination network contains subnets
whose IP addresses overlap with the IP addresses of your source
VPC network. In this scenario, you create a Cloud NAT
gateway for Private NAT that translates traffic between the
subnets in your source VPC network and the nonoverlapping
subnets of the other network.
For more information, see
Private NAT .
Supported resources
The following table lists the Google Cloud resources that are supported
by each type of Cloud NAT. The
checkmark indicates that the resource
is supported.
Resource
Public NAT
Private NAT
Compute Engine VM instances
GKE clusters
Cloud Run, Cloud Run functions, and
App Engine 1
Regional internet NEGs
Not applicable
1
The following serverless endpoints are supported:
Cloud Run instances (services and jobs) and
Cloud Run functions instances through Direct VPC egress (recommended)
or Serverless VPC Access
App Engine standard environment instances through Serverless VPC Access
Architecture
Cloud NAT is a distributed, software-defined managed service. It's
not based on proxy VMs or appliances. Cloud NAT configures the
Andromeda
software
that powers your Virtual Private Cloud (VPC) network so that it provides
source network address translation (source NAT or SNAT) for resources. Cloud NAT also provides destination network address translation
(destination NAT or DNAT) for established inbound response packets.
Traditional NAT versus Cloud NAT (click to enlarge).
Benefits
Cloud NAT provides the following benefits:
Security
When using a Cloud NAT gateway for Public NAT, you can
reduce the need for individual VMs to each have external
IP addresses. Subject to egress firewall rules , VMs
without external IP addresses can access destinations on the internet. For
example, you might have VMs that only need internet access to download updates
or to complete provisioning.
If you use
manual NAT IP address assignment
to configure a Cloud NAT gateway for Public NAT, you
can confidently share a set of common external source IP addresses with a
destination party. For example, a destination service might only allow
connections from known external IP addresses.
Private NAT enables private-to-private NAT between
VPC networks or between VPC and on-premises or
other cloud provider networks. When Private NAT is
configured, the Cloud NAT
gateway performs NAT by using IP addresses from the
Private NAT subnet range.
Availability
Cloud NAT is a distributed, software-defined
managed service. It doesn't depend on any VMs in your project or a single
physical gateway device. You configure a NAT gateway on a
Cloud Router, which provides the control plane for NAT, holding
configuration parameters that you specify. Google Cloud runs and maintains
processes on the physical machines that run your Google Cloud VMs.
Scalability
Cloud NAT can be configured to automatically scale
the number of NAT IP addresses that it uses, and it supports VMs that belong to
managed instance groups, including the groups with
autoscaling enabled.
Performance
Cloud NAT does not reduce the network bandwidth
per VM. Cloud NAT is implemented by Google's Andromeda
software-defined networking. For more information, see
Network bandwidth
in the Compute Engine documentation.
Logging
For Cloud NAT traffic, you can trace the connections and bandwidth for
compliance, debugging, analytics, and accounting purposes.
Monitoring
Cloud NAT exposes key metrics to Cloud Monitoring that give you
insight into your fleet's use of NAT gateways. Metrics are sent automatically
to Cloud Monitoring. There, you can create custom dashboards, set up alerts,
and query metrics.
Additionally, Network Analyzer publishes
Cloud NAT insights .
Network Analyzer automatically monitors
your Cloud NAT configuration to detect and generate these insights.
Product interactions
For more information about the important interactions between
Cloud NAT and other Google Cloud products, see
Cloud NAT product interactions .
What's next
Learn about Cloud NAT product interactions .
Learn about Cloud NAT addresses and ports .
Set up Public NAT .
Learn about Cloud NAT rules .
Set up Private NAT .
Troubleshoot common issues .
Learn about Cloud NAT pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
