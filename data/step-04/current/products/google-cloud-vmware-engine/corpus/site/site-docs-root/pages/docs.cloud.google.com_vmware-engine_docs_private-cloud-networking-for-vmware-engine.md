---
title: "About VMware Engine networks \_|\_ Google Cloud VMware Engine \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine
  title: "About VMware Engine networks \_|\_ Google Cloud VMware Engine \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
About VMware Engine networks
Google Cloud VMware Engine uses a VMware Engine network to provide network
connectivity between one or more private clouds, Google Cloud Virtual Private Cloud
networks, and on-premises networks.
Types of VMware Engine networks
By default, VMware Engine offers a global VMware network which
provides network connectivity between one or more private clouds, Virtual Private Cloud
networks, or on-premises networks. These global
VMware networks are referred to as Standard VMware Engine Networks .
In addition, projects created before November 2023 have
Legacy VMware Engine Networks , which are regional networks that
must exist in each region that contains a private cloud.
Note: Only projects created before November 2023 can use Legacy
VMware Engine Networks. It is not possible to create these networks
in projects created after November 2023.
Standard VMware Engine networks
Create one or more standard networks in a project to create network isolation
between your private clouds.
Network connectivity for Standard VMware Engine networks
To establish communication to VMware Engine from your VPC network, you
must create a VPC Network peering relationship between
your VPC network and a VMware Engine network. This enables exclusive
communication using internal IP addresses between virtual machine (VM)
instances in your VPC network and VMware VMs.
DNS resolution behavior
The following section outlines the DNS resolution behavior
for VMware Engine networks.
Private cloud management zone
Each private cloud creates a corresponding authoritative Cloud DNS
zone used to resolve all management appliances like vCenter Server, NSX Manager,
and HCX.
Google Cloud resolution
By default, you can resolve the management zone from any of your VPC networks
that has Cloud DNS enabled. When a VMware Engine network is
VPC peered , VMware Engine automatically
creates a management DNS zone binding , ensuring
resolution from any of your Google Cloud VMs.
On-premises resolution
See Configuring DNS for management appliance access .
DNS Resolution from private cloud VMs and management appliances
Each private cloud deploys a Cloud DNS Server used for all management appliances
resolution and that you can configure as the DNS server for all VMware workloads.
Private cloud workload DNS server IP
To get the IP address of your private cloud's DNS server and configure DNS for
your VMware workloads or NSX segment DHCP DNS setting:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click the name of the private cloud you want to configure DNS for.
On the Summary page for the private cloud, under Private cloud DNS servers ,
click Copy to copy the private Cloud DNS server IP address.
Binding Cloud DNS zones
You can bind Cloud DNS zones configured in your project to a
VMware Engine network; this ensures proper resolution of
authoritative or conditional forward zones from any of your private cloud VMs or
management appliances. See Configuring DNS bindings for more
information.
Private Google Access
To enable Private Google Access for VMware Engine, configure the DNS server in your VMware Engine environment to use the private virtual IP address. For more information, see Private Google Access for on-premises hosts and [Configuring Private Google Access for on-premises hosts][configure Private Google Access on premises hosts]. The domain private.googleapis.com uses 199.36.153.8/30 .
Legacy VMware Engine networks
A Legacy VMware Engine network is a regional network that provides
network connectivity between one or more private clouds, Virtual Private Cloud networks,
and on-premises networks. You must name legacy networks
using the convention <region>-default and you must create a network for each
region where you create a private cloud.
Network connectivity for Legacy VMware Engine networks
To establish communication to VMware Engine from your VPC network,
you must enable private services access and create a private connection
between your VPC network and the VMware Engine network. This enables
exclusive communication using internal IP addresses between VM instances in your
VPC network and VMware VMs.
Legacy networks function at a regional level, and can only connect to service
producer networks in the corresponding region. You must establish separate
private connections to service producer networks in each region.
DNS Resolution behavior for Legacy VMware Engine networks
The following sections outline the DNS Resolution behavior for Legacy
VMware Engine networks.
Private cloud management zone
Each private cloud creates a corresponding authoritative Cloud DNS
zone used to resolve all management appliances like vCenter Server, NSX Manager,
and HCX.
Google Cloud resolution
By default, you can resolve the management zone from any of your VPC networks
where you have enabled Cloud DNS. When a private connection
is created between your VPC network and a Legacy VMware Engine
network, Google automatically creates DNS peering, ensuring resolution from any
of your Google Cloud VMs.
On-premises resolution
See Configuring DNS for management appliance access .
DNS Resolution from private cloud management appliances
Private cloud management appliances use conditional DNS forwarding rules which
you can configure within each private cloud. For more information, see
Create legacy DNS forwarding rules .
Private cloud VMware VM resolution
Private clouds connected to Legacy VMware Engine networks don't
have Cloud DNS automatically configured. You can choose to use Cloud DNS
within your project or use a third party DNS solution.
To use Cloud DNS, do the following:
Enable inbound DNS forwarding on the VPC network .
Identify the DNS server addresses to use for VMware VMs .
What's next
Learn how to create a VMware Engine network .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
