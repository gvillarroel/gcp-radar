---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.472Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect connectivity over Cloud Interconnect VLAN attachments"
feature_slug: "private-service-connect-connectivity-over-cloud-interconnect-vlan-attachments"
latest_feature_date: "2022-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid"
keywords:
  - "private"
  - "connect"
  - "connectivity"
  - "over"
  - "interconnect"
  - "vlan"
  - "attachments"
  - "supports"
---

# Private Service Connect connectivity over Cloud Interconnect VLAN attachments

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect supports accessing managed services via Cloud Interconnect using VLAN attachments.

## Extended Definition

Private Service Connect supports accessing managed services via Cloud Interconnect using VLAN attachments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)

## Supporting Pages

### "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Source endpoints Connectivity Tests configuration analysis supports the following source endpoints: Compute Engine instance Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane GKE Pod Internet IP address IP address from an on-premises network IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod Unassigned IP address in a Virtual Private Cloud network Destination endpoints Connectivity Tests configuration analysis supports the following destination endpoints: Compute Engine instance Cloud SQL instance GKE control plane GKE Pod External and internal Application Load Balancer External and internal Proxy Network Load Balancer External and internal Passthrough Network Load Balancer Private Service Connect endpoint Memorystore for Redis Cluster Memorystore for Redis instance Internet IP address IP address from an on-premises network IP address of a forwarding rule IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod IP address of a Memorystore for Redis Cluster IP address of a Memorystore for Redis instance Google Cloud networking features You can test connectivity between resources that use the following features (both IPv4 and IPv6 are supported whenever applicable): VPC networks VPC Network Peering Shared VPC Private Google Access Cloud Load Balancing Alias IP ranges Privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing VPC firewall rules Regional network firewall policies Hierarchical firewall policies and global network firewall policies Resource Manager tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Private Service Connect Instances with IPv6 addresses , including instances with multiple network interfaces VPC spokes and hybrid spokes for NCC Public NAT and Private NAT Cloud VPN Cloud Interconnect Cloud Router , including dynamic routes that use BGP and static routes Considerations for Cloud Load Balancing For Cloud Load Balancing, Connectivity Tests configuration analysis supports the following features: Testing connectivity to the load balancer IP addresses Verifying connectivity of Cloud Load Balancing health checks to backends Internal TCP/UDP load balancers can be used as next hops For Cloud Load Balancing features that are unsupported, see the Unsupported configurations section .
- Google Cloud networking features Live data plane analysis supports the following features: VPC networks VPC Network Peering Shared VPC VPC spokes and hybrid spokes in NCC Alias IP ranges External IP addresses Internal IP addresses , including privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing Public NAT and Private NAT , except for NAT64 VPC firewall rules Hierarchical firewall policies , global network firewall policies , and regional network firewall policies Secure tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Instances with IPv6 addresses , including instances with multiple network interfaces Unsupported configurations Live data plane analysis doesn't support and isn't executed for the following network configurations: Non-Google Cloud resources as source endpoints: Internet IP addresses Inbound traffic to Google Cloud through Cloud Interconnect , Cloud VPN , and NCC hybrid spokes Unassigned IP addresses in a VPC network as source endpoints Source and destination endpoints are the same Compute Engine instance Non-running Compute Engine instances GKE Pods Google API and services External and internal Application Load Balancer External and internal Proxy Network Load Balancer External passthrough Network Load Balancer Cloud VPN NAT64 Considerations and constraints Evaluate the following considerations when deciding whether to use Connectivity Tests.
- Source endpoints Live data plane analysis supports the following source endpoints: Compute Engine instance Serverless endpoint configured with a Serverless VPC Access connector and associated with one of the following resources: Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane Destination endpoints Live data plane analysis supports the following destination endpoints: Compute Engine instance Internal passthrough Network Load Balancer Private Service Connect with a producer internal passthrough Network Load Balancer Internet IP address, tested to the network edge location VLAN attachment for Cloud Interconnect Private endpoint associated with one of the following resources: Cloud SQL instance Memorystore for Redis Cluster Memorystore for Redis instance GKE control plane Protocols Live data plane analysis supports TCP and UDP protocols.
- To analyze network configurations, Connectivity Tests simulates the expected forwarding path of a packet through your Virtual Private Cloud (VPC) network, Cloud VPN tunnels, or VLAN attachments.

### "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests)
- Source ID: `site-iam-reference`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Source endpoints Connectivity Tests configuration analysis supports the following source endpoints: Compute Engine instance Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane GKE Pod Internet IP address IP address from an on-premises network IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod Unassigned IP address in a Virtual Private Cloud network Destination endpoints Connectivity Tests configuration analysis supports the following destination endpoints: Compute Engine instance Cloud SQL instance GKE control plane GKE Pod External and internal Application Load Balancer External and internal Proxy Network Load Balancer External and internal Passthrough Network Load Balancer Private Service Connect endpoint Memorystore for Redis Cluster Memorystore for Redis instance Internet IP address IP address from an on-premises network IP address of a forwarding rule IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod IP address of a Memorystore for Redis Cluster IP address of a Memorystore for Redis instance Google Cloud networking features You can test connectivity between resources that use the following features (both IPv4 and IPv6 are supported whenever applicable): VPC networks VPC Network Peering Shared VPC Private Google Access Cloud Load Balancing Alias IP ranges Privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing VPC firewall rules Regional network firewall policies Hierarchical firewall policies and global network firewall policies Resource Manager tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Private Service Connect Instances with IPv6 addresses , including instances with multiple network interfaces VPC spokes and hybrid spokes for NCC Public NAT and Private NAT Cloud VPN Cloud Interconnect Cloud Router , including dynamic routes that use BGP and static routes Considerations for Cloud Load Balancing For Cloud Load Balancing, Connectivity Tests configuration analysis supports the following features: Testing connectivity to the load balancer IP addresses Verifying connectivity of Cloud Load Balancing health checks to backends Internal TCP/UDP load balancers can be used as next hops For Cloud Load Balancing features that are unsupported, see the Unsupported configurations section .
- Google Cloud networking features Live data plane analysis supports the following features: VPC networks VPC Network Peering Shared VPC VPC spokes and hybrid spokes in NCC Alias IP ranges External IP addresses Internal IP addresses , including privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing Public NAT and Private NAT , except for NAT64 VPC firewall rules Hierarchical firewall policies , global network firewall policies , and regional network firewall policies Secure tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Instances with IPv6 addresses , including instances with multiple network interfaces Unsupported configurations Live data plane analysis doesn't support and isn't executed for the following network configurations: Non-Google Cloud resources as source endpoints: Internet IP addresses Inbound traffic to Google Cloud through Cloud Interconnect , Cloud VPN , and NCC hybrid spokes Unassigned IP addresses in a VPC network as source endpoints Source and destination endpoints are the same Compute Engine instance Non-running Compute Engine instances GKE Pods Google API and services External and internal Application Load Balancer External and internal Proxy Network Load Balancer External passthrough Network Load Balancer Cloud VPN NAT64 Considerations and constraints Evaluate the following considerations when deciding whether to use Connectivity Tests.
- Source endpoints Live data plane analysis supports the following source endpoints: Compute Engine instance Serverless endpoint configured with a Serverless VPC Access connector and associated with one of the following resources: Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane Destination endpoints Live data plane analysis supports the following destination endpoints: Compute Engine instance Internal passthrough Network Load Balancer Private Service Connect with a producer internal passthrough Network Load Balancer Internet IP address, tested to the network edge location VLAN attachment for Cloud Interconnect Private endpoint associated with one of the following resources: Cloud SQL instance Memorystore for Redis Cluster Memorystore for Redis instance GKE control plane Protocols Live data plane analysis supports TCP and UDP protocols.
- To analyze network configurations, Connectivity Tests simulates the expected forwarding path of a packet through your Virtual Private Cloud (VPC) network, Cloud VPN tunnels, or VLAN attachments.

### "Create and run Connectivity Tests \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)
- Source ID: `site-iam-reference`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are using the Google Cloud CLI or Network Management API, set the source network type to NON GCP NETWORK and set the source network to the network of the Cloud VPN tunnel, Cloud Interconnect VLAN attachment, or the router appliance instance.
- If you are using the Google Cloud CLI or Network Management API, set the source network type to NON GCP NETWORK and set the source network to the network of the Cloud VPN tunnel, Cloud Interconnect VLAN attachment, or the router appliance instance.
- Connectivity Tests also supports testing between a Pod and any other supported endpoint , such as a VM instance or a load balancer.
- By default, Connectivity Tests attempts to run a test by using the private IP address of the Google-managed service endpoint.

### "Configure Private Google Access for on-premises hosts \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
- Source ID: `site-docs-root-2`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- For private.googleapis.com : For IPv4 connectivity: 199.36.153.8/30 For both IPv4 and IPv6 connectivity: 199.36.153.8/30,2600:2d00:0002:2000::/56 For restricted.googleapis.com : For IPv4 connectivity: 199.36.153.4/30 For both IPv4 and IPv6 connectivity: 199.36.153.4/30,2600:2d00:0002:1000::/56 Firewall considerations Google Cloud firewall rules in the VPC network to which your on-premises network connects have no effect upon: Packets sent through a Cloud VPN tunnel connected to the VPC network Packets sent through a VLAN attachment connected to the VPC network Incoming packets to Cloud DNS inbound forwarder IP addresses in the VPC network You should ensure that the firewall configuration of on-premises systems allows outbound traffic to and established responses from the appropriate IP addresses: If you use private.googleapis.com : For IPv4 connectivity: 199.36.153.8/30 For IPv6 connectivity: 2600:2d00:0002:2000::/56 If you use restricted.googleapis.com : For IPv4 connectivity: 199.36.153.4/30 For IPv6 connectivity: 2600:2d00:0002:1000::/56 Any Cloud DNS inbound forwarder IP addresses, if you're using Cloud DNS for the DNS configuration What's next If you need VMs in your Google Cloud VPC network to access Google APIs and services, see Configure Private Google Access for VPC .
- On-premises routing with Cloud Router Routes in your on-premises network must be configured to direct traffic for the IP address ranges used by the private.googleapis.com or restricted.googleapis.com domains to the next hop Cloud VPN tunnels or VLAN attachments that connect to your VPC network.
- Configure Private Google Access for on-premises hosts Private Google Access for on-premises hosts provides a way for on-premises systems to connect to Google APIs and services by routing traffic through a Cloud VPN tunnel or a VLAN attachment for Cloud Interconnect .
- This updates the route advertisement mode on all the Cloud Router's BGP sessions, except for those BGP sessions that use custom BGP advertisements themselves: gcloud compute routers update ROUTER NAME \ --region= REGION \ --add-advertisement-ranges= CUSTOM RANGES Alternatively, use compute routers update-bgp-peer to configure a specific BGP peer on the Cloud Router: If you are adding IPv6 custom ranges, and if IPv6 traffic is disabled for the BGP session, you can enable it with the --enable-ipv6 flag. gcloud compute routers update-bgp-peer ROUTER NAME \ --region= REGION \ --peer-name= PEER NAME \ --advertisement-mode=CUSTOM \ --set-advertisement-groups=ALL SUBNETS \ --set-advertisement-ranges= CUSTOM RANGES You can append new advertisement ranges if you're already using the CUSTOM advertisement mode for a BGP session on a Cloud Router If you are adding IPv6 custom ranges, and if IPv6 traffic is disabled for the BGP session, you can enable it with the --enable-ipv6 flag. gcloud compute routers update-bgp-peer ROUTER NAME \ --region= REGION \ --peer-name= PEER NAME \ --add-advertisement-ranges= CUSTOM RANGES In the commands above, replace the following with valid values: ROUTER NAME : The name of the Cloud Router REGION : The region of the Cloud Router PEER NAME : The name of the BGP peer configured when you create a VLAN attachment for Dedicated Interconnect , when you create a VLAN attachment for Partner Interconnect , or when you create an HA VPN tunnel Leave --set-advertisement-groups=ALL SUBNETS in order to advertise all subnet routes available to the Cloud Router.

