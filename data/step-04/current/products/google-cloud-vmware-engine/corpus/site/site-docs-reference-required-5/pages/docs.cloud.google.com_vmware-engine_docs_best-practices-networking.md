---
title: "Networking best practices \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking
  title: "Networking best practices \_|\_ Google Cloud VMware Engine \_|\_ Google\
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
Networking best practices
This page presents networking best practices for Google Cloud VMware Engine.
Prevent routing issues
Communications within VMware Engine and with the rest of the internet
are routed at Layer 3, except for networks that are stretched from on-premises
or from other VMware Engine private clouds.
To prevent issues with configuration and possibly performance or limits when
setting up routing to and from the VMware Engine environment, follow
these best practices:
Configure the Cloud Router associated with the on-premises hybrid
Cloud VPN or Cloud Interconnect connection with summary
custom advertisements
for VMware Engine ranges and the ranges of other Google compute
services, such as Google Kubernetes Engine and Compute Engine.
Use contiguous IP address space for NSX segment subnets.
To minimize the number of routes that are announced to the
rest of Google, summarize the NSX segment routes at tier-0 as follows:
If NAT is required, summarize the NAT IPs out of tier-0 rather than /32's.
Summarize IPsec endpoint IPs (/32's) at tier-0.
Summarize DNS profile IPs (/32's) at tier-0.
Enable NSX-T DHCP Relay
based on whether DHCP services will reside in VMware Engine or
elsewhere.
When redistributing tier-0 static routes into BGP, apply a route map to
prevent 0/0 from being redistributed.
Choose a suitable internet access option
VMware Engine offers the following options to configure internet access
and public IP addresses. Consider the advantages and disadvantages of each, as
listed in the following table, to choose the most appropriate option:
Internet access option
Advantages
Disadvantages
VMware Engine internet and public IP service
Doesn't incur any additional charges. Included in the cost of the
VMware Engine service.
Is easy to set up.
Is SLA backed.
Has a fixed configuration.
Doesn't support BYOIP.
Has limited quota and bandwidth, which makes it more suitable for PoC or
small deployments.
Provides no visibility into ingress/egress metrics.
Is mutually exclusive with the other two options.
Needs third-party appliances to use advanced traffic management (such
as L7 firewall inspection or complex load balancing).
Doesn't support Application Level Gateway (ALG).
Data transfer through the customer's VPC internet edge
Has a scalable configuration.
Supports BYOIP.
Provides full visibility and monitoring.
Can be combined with L7 inspection, advanced load balancing, and
third-party products.
Can be integrated with Google-native load balancers and Cloud Service Mesh .
Can be integrated with Google Cloud Armor
for DDoS protection.
Incurs data transfer and public IP costs .
Requires more complex configuration.
Doesn't have any SLA for the combined service.
Data transfer through on-premises connections
Uses existing configurations.
Centralizes security and load balancing on-premises.
Doesn't incur added Google Cloud costs, except for
Cloud Interconnect data transfer charges .
Allows the least amount of changes.
Offers limited global support.
Might lead to split internet services for some workloads.
For more information, see Configure internet access for workload VMs .
Implement service chaining using third-party virtual network appliances
VMware Engine supports chaining of network services by using Layer 3
routed topologies. In this mode, you can deploy and connect
a third-party network virtual appliance in VMware Engine to
provide inline network services to VMware VMs, such as load balancing,
next-generation firewalling (NGFW), and intrusion detection and prevention. You
can deploy these appliances in a number of ways, depending on the segmentation
and connectivity requirements of applications.
Several deployment topologies are possible, with richer configurations and
links in the service chain (for example, load balancers in front of firewalls).
It's also possible to deploy these appliances in active-active topologies by
using dataplane-based heartbeats and redundancy, if the vendor supports them.
The following sections show sample deployment topologies that use a
VM-based firewall device.
Behind a tier-1 gateway
In this deployment topology, the third-party appliance serves as the default
gateway for several networks in the environment. You can use the appliance
to inspect the traffic between them as well as the traffic entering and
exiting the VMware Engine environment.
The following diagram shows how a tier-1 gateway works in VMware Engine:
To implement this topology, do the following:
Configure static routes on tier-1 to point to the appliance VM and
reach the networks behind it.
On tier 0, redistribute tier-1 static routes into BGP.
With regard to support
for guest inter-VLAN routing ,
VMware guest workloads are limited to 10 virtual NICs. In some use cases,
you need to connect into more than 10 VLANs to produce the firewall
segmentation required. In this case, you can use VLAN tagging to the ISV.
The guest VMs of independent software vendors (ISVs) should be sized to
support and distribute the traffic between multiple sets of ISV appliances
as required.
Behind a tier-0 gateway
In this deployment topology, a tier-0 gateway serves as the default gateway for
the third-party appliance with one or more tier-1 gateways behind the appliance.
The tier-0 gateway can be used to provide routed connectivity for the same
security zone and support inspection across security zones or with the rest of
Google Cloud. This topology allows for large-scale segment-to-segment
communications without Layer 7 inspection.
The following diagram shows how a tier-0 gateway works in VMware Engine:
To implement this topology, do the following:
Configure a default static route on each tier-1 gateway pointing to the
NGFW.
Configure static routes to reach workload segments on tier-0 with
the NGFW as the next hop.
Redistribute these static routes into BGP with a route map to
prevent 0/0 from being redistributed.
What's next
Read about best practices for compute ,
security ,
storage ,
migration , and
costs .
Try out VMware Engine. Visit features, benefits, and use
cases for more information.
Explore reference architectures, diagrams, tutorials, and best practices
about Google Cloud. Visit Cloud Architecture Center for
more information.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
