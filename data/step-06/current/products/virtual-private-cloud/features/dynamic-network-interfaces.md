---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.430Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Dynamic Network Interfaces"
feature_slug: "dynamic-network-interfaces"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/add-dynamic-nics"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests"
keywords:
  - "dynamic"
  - "network"
  - "interfaces"
  - "enables"
  - "adding"
  - "or"
  - "removing"
  - "on"
---

# Dynamic Network Interfaces

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Enables adding or removing network interfaces on a VM instance without restart or recreation, with support for up to 16 interfaces via Dynamic NICs; Dynamic Network Interfaces allow adding or removing VM network interfaces without restarting or recreating the instance, including support for additional interface capacity through Dynamic NICs.

## Extended Definition

Enables adding or removing network interfaces on a VM instance without restart or recreation, with support for up to 16 interfaces via Dynamic NICs; Dynamic Network Interfaces allow adding or removing VM network interfaces without restarting or recreating the instance, including support for additional interface capacity through Dynamic NICs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests)

## Supporting Pages

### "Add Dynamic Network Interfaces to an instance \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics)
- Source ID: `site-docs-root-2`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Before adding Dynamic NICs to an instance, do the following: Make sure you are familiar with the properties and limitations of Dynamic NICs as described in the multiple network interfaces overview.
- To save your configuration, click Save . gcloud To add a Dynamic NIC to an existing instance, use the gcloud compute instances network-interfaces add command . gcloud compute instances network-interfaces add INSTANCE NAME \ --zone= ZONE \ --vlan= VLAN ID \ --parent-nic-name= PARENT VNIC NAME \ --network= NETWORK \ --subnetwork= SUBNET Replace the following: INSTANCE NAME : the name of the instance to add the Dynamic NIC to ZONE : the zone of the instance VLAN ID : the VLAN ID of the Dynamic NIC PARENT VNIC NAME : the name of the parent vNIC, such as nic0 NETWORK : the network where the Dynamic NIC attaches SUBNET : the subnet where the Dynamic NIC attaches Alternatively, you can add a Dynamic NIC to an instance when updating instance properties.
- Configure the guest agent to manage Dynamic NICs: Open or create your guest environment configuration file. edit /etc/default/instance configs.cfg Add the following to the configuration file, then save your changes and exit the editor. [NetworkInterfaces] vlan setup enabled = true manage primary nic = true For information about these settings, see the following: vlan setup enabled = true : configures the guest agent to install and manage Dynamic NICs manage primary nic = true : an additional setting required for the guest agent to manage Dynamic NICs created under nic0 For more information about editing the guest agent configuration file, see Configuration in the guest agent documentation.
- VLAN ID Replace the following: VNIC NAME : the name of the parent vNIC assigned by the operating system, such as eth1 or ens4 IP ADDRESS : the IP address of the Dynamic NIC that you created VLAN ID : the VLAN ID that you assigned to the Dynamic NIC MAC ADDRESS : the MAC address that you got in the previous step What's next Configure routing for an additional interface View network interfaces for an instance Update the network interfaces for an instance Delete Dynamic NICs from an instance Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Test connectivity to and from non-Google Cloud networks \_|\_ Network Intelligence\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks)
- Source ID: `site-iam-reference`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Trace path to a non-Google Cloud network using static routing Trace path to a non-Google Cloud network using dynamic routing From a non-Google Cloud network to a VPC network The configuration analysis verifies that your VPC network can receive an inbound packet from your on-premises network after that packet could arrive at your VPC network.
- Packet trace through a Cloud VPN tunnel using static routes If there is a matching static or dynamic route for the destination IP address in a peer network, the configuration analysis matches and verifies the route according to route precedence .
- When your VPC network peers with your on-premises network through Cloud Router, the VPC network receives one or more dynamic routes from your peered on-premises network.
- From there, it follows a dynamic route as advertised by the Cloud Router associated with the Router appliance spoke that is connected to the second on-premises network.

### "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 243
- Re-rank relevance: N/A

Evidence snippets:
- Source endpoints Connectivity Tests configuration analysis supports the following source endpoints: Compute Engine instance Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane GKE Pod Internet IP address IP address from an on-premises network IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod Unassigned IP address in a Virtual Private Cloud network Destination endpoints Connectivity Tests configuration analysis supports the following destination endpoints: Compute Engine instance Cloud SQL instance GKE control plane GKE Pod External and internal Application Load Balancer External and internal Proxy Network Load Balancer External and internal Passthrough Network Load Balancer Private Service Connect endpoint Memorystore for Redis Cluster Memorystore for Redis instance Internet IP address IP address from an on-premises network IP address of a forwarding rule IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod IP address of a Memorystore for Redis Cluster IP address of a Memorystore for Redis instance Google Cloud networking features You can test connectivity between resources that use the following features (both IPv4 and IPv6 are supported whenever applicable): VPC networks VPC Network Peering Shared VPC Private Google Access Cloud Load Balancing Alias IP ranges Privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing VPC firewall rules Regional network firewall policies Hierarchical firewall policies and global network firewall policies Resource Manager tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Private Service Connect Instances with IPv6 addresses , including instances with multiple network interfaces VPC spokes and hybrid spokes for NCC Public NAT and Private NAT Cloud VPN Cloud Interconnect Cloud Router , including dynamic routes that use BGP and static routes Considerations for Cloud Load Balancing For Cloud Load Balancing, Connectivity Tests configuration analysis supports the following features: Testing connectivity to the load balancer IP addresses Verifying connectivity of Cloud Load Balancing health checks to backends Internal TCP/UDP load balancers can be used as next hops For Cloud Load Balancing features that are unsupported, see the Unsupported configurations section .
- Google Cloud networking features Live data plane analysis supports the following features: VPC networks VPC Network Peering Shared VPC VPC spokes and hybrid spokes in NCC Alias IP ranges External IP addresses Internal IP addresses , including privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing Public NAT and Private NAT , except for NAT64 VPC firewall rules Hierarchical firewall policies , global network firewall policies , and regional network firewall policies Secure tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Instances with IPv6 addresses , including instances with multiple network interfaces Unsupported configurations Live data plane analysis doesn't support and isn't executed for the following network configurations: Non-Google Cloud resources as source endpoints: Internet IP addresses Inbound traffic to Google Cloud through Cloud Interconnect , Cloud VPN , and NCC hybrid spokes Unassigned IP addresses in a VPC network as source endpoints Source and destination endpoints are the same Compute Engine instance Non-running Compute Engine instances GKE Pods Google API and services External and internal Application Load Balancer External and internal Proxy Network Load Balancer External passthrough Network Load Balancer Cloud VPN NAT64 Considerations and constraints Evaluate the following considerations when deciding whether to use Connectivity Tests.
- Source endpoints Live data plane analysis supports the following source endpoints: Compute Engine instance Serverless endpoint configured with a Serverless VPC Access connector and associated with one of the following resources: Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane Destination endpoints Live data plane analysis supports the following destination endpoints: Compute Engine instance Internal passthrough Network Load Balancer Private Service Connect with a producer internal passthrough Network Load Balancer Internet IP address, tested to the network edge location VLAN attachment for Cloud Interconnect Private endpoint associated with one of the following resources: Cloud SQL instance Memorystore for Redis Cluster Memorystore for Redis instance GKE control plane Protocols Live data plane analysis supports TCP and UDP protocols.
- Response times per query Project size Number of Google Cloud resources Response latency Small project Fewer than 50 60 seconds for 95% of queries from all users Medium project Greater than 50 but fewer than 5000 120 seconds for 95% of queries from all users Large project Greater than 5000 600 seconds for 95% of queries from all users Live data plane analysis is not intended for continuous monitoring Live data plane analysis performs one-time verification of network connectivity for diagnostic purposes.

### "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests)
- Source ID: `site-iam-reference`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- Source endpoints Connectivity Tests configuration analysis supports the following source endpoints: Compute Engine instance Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane GKE Pod Internet IP address IP address from an on-premises network IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod Unassigned IP address in a Virtual Private Cloud network Destination endpoints Connectivity Tests configuration analysis supports the following destination endpoints: Compute Engine instance Cloud SQL instance GKE control plane GKE Pod External and internal Application Load Balancer External and internal Proxy Network Load Balancer External and internal Passthrough Network Load Balancer Private Service Connect endpoint Memorystore for Redis Cluster Memorystore for Redis instance Internet IP address IP address from an on-premises network IP address of a forwarding rule IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod IP address of a Memorystore for Redis Cluster IP address of a Memorystore for Redis instance Google Cloud networking features You can test connectivity between resources that use the following features (both IPv4 and IPv6 are supported whenever applicable): VPC networks VPC Network Peering Shared VPC Private Google Access Cloud Load Balancing Alias IP ranges Privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing VPC firewall rules Regional network firewall policies Hierarchical firewall policies and global network firewall policies Resource Manager tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Private Service Connect Instances with IPv6 addresses , including instances with multiple network interfaces VPC spokes and hybrid spokes for NCC Public NAT and Private NAT Cloud VPN Cloud Interconnect Cloud Router , including dynamic routes that use BGP and static routes Considerations for Cloud Load Balancing For Cloud Load Balancing, Connectivity Tests configuration analysis supports the following features: Testing connectivity to the load balancer IP addresses Verifying connectivity of Cloud Load Balancing health checks to backends Internal TCP/UDP load balancers can be used as next hops For Cloud Load Balancing features that are unsupported, see the Unsupported configurations section .
- Google Cloud networking features Live data plane analysis supports the following features: VPC networks VPC Network Peering Shared VPC VPC spokes and hybrid spokes in NCC Alias IP ranges External IP addresses Internal IP addresses , including privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing Public NAT and Private NAT , except for NAT64 VPC firewall rules Hierarchical firewall policies , global network firewall policies , and regional network firewall policies Secure tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Instances with IPv6 addresses , including instances with multiple network interfaces Unsupported configurations Live data plane analysis doesn't support and isn't executed for the following network configurations: Non-Google Cloud resources as source endpoints: Internet IP addresses Inbound traffic to Google Cloud through Cloud Interconnect , Cloud VPN , and NCC hybrid spokes Unassigned IP addresses in a VPC network as source endpoints Source and destination endpoints are the same Compute Engine instance Non-running Compute Engine instances GKE Pods Google API and services External and internal Application Load Balancer External and internal Proxy Network Load Balancer External passthrough Network Load Balancer Cloud VPN NAT64 Considerations and constraints Evaluate the following considerations when deciding whether to use Connectivity Tests.
- Source endpoints Live data plane analysis supports the following source endpoints: Compute Engine instance Serverless endpoint configured with a Serverless VPC Access connector and associated with one of the following resources: Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane Destination endpoints Live data plane analysis supports the following destination endpoints: Compute Engine instance Internal passthrough Network Load Balancer Private Service Connect with a producer internal passthrough Network Load Balancer Internet IP address, tested to the network edge location VLAN attachment for Cloud Interconnect Private endpoint associated with one of the following resources: Cloud SQL instance Memorystore for Redis Cluster Memorystore for Redis instance GKE control plane Protocols Live data plane analysis supports TCP and UDP protocols.
- Response times per query Project size Number of Google Cloud resources Response latency Small project Fewer than 50 60 seconds for 95% of queries from all users Medium project Greater than 50 but fewer than 5000 120 seconds for 95% of queries from all users Large project Greater than 5000 600 seconds for 95% of queries from all users Live data plane analysis is not intended for continuous monitoring Live data plane analysis performs one-time verification of network connectivity for diagnostic purposes.

