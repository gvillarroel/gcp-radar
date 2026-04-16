---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.505Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC forwarding rule ICMP support"
feature_slug: "vpc-forwarding-rule-icmp-support"
latest_feature_date: "2016-12-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/overview"
  - "https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services"
keywords:
  - "vpc"
  - "forwarding"
  - "rule"
  - "icmp"
  - "virtual"
  - "private"
  - "rules"
  - "now"
---

# VPC forwarding rule ICMP support

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Virtual Private Cloud forwarding rules now support the ICMP protocol.

## Extended Definition

Virtual Private Cloud forwarding rules now support the ICMP protocol.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/overview](https://docs.cloud.google.com/vpc/docs/overview)
- [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)

## Supporting Pages

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protocol forwarding: the AH, ESP, GRE, ICMP, ICMPv6, SCTP, TCP, and UDP protocols To allow data packets of the supported protocols, you need to configure firewall rules or protocol forwarding rules based on your requirements.
- Resources within a VPC network can communicate with one another by using internal IPv4 addresses, internal IPv6 addresses, or external IPv6 addresses, subject to applicable network firewall rules.
- Firewall rules Both hierarchical firewall policies and VPC firewall rules apply to packets sent to and from VM instances (and resources that depend on VMs, such as Google Kubernetes Engine nodes).
- VPC networks A Virtual Private Cloud (VPC) network is a virtual version of a physical network that is implemented inside of Google's production network by using Andromeda .

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- For Cross-region internal Application Load Balancers, use the following format: projects/ PROJECT ID /global/forwardingRules/ RULE NAME For all other producer forwarding rules, use the following format: projects/ PROJECT ID /regions/ RULE REGION /forwardingRules/ RULE NAME Service Project Admins can specify the forwarding rule of an internal load balancer that has an IP address from a Shared VPC network .
- For Cross-region internal Application Load Balancers, use the following format: projects/ PROJECT ID /global/forwardingRules/ RULE NAME For all other producer forwarding rules, use the following format: projects/ PROJECT ID /regions/ RULE REGION /forwardingRules/ RULE NAME Service Project Admins can specify the forwarding rule of an internal load balancer that has an IP address from a Shared VPC network .
- For Cross-region internal Application Load Balancers, use the following format: projects/ PROJECT ID /global/forwardingRules/ RULE NAME For all other producer forwarding rules, use the following format: projects/ PROJECT ID /regions/ RULE REGION /forwardingRules/ RULE NAME Service Project Admins can specify the forwarding rule of an internal load balancer that has an IP address from a Shared VPC network .

### Virtual Private Cloud (VPC) overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/overview](https://docs.cloud.google.com/vpc/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Forwarding rules While routes govern traffic leaving an instance, forwarding rules direct traffic to a Google Cloud resource in a VPC network based on IP address, protocol, and port.
- Firewall rules Each VPC network implements a distributed virtual firewall that you can configure.
- Virtual Private Cloud (VPC) overview Virtual Private Cloud (VPC) provides networking functionality to Compute Engine virtual machine (VM) instances , Google Kubernetes Engine (GKE) clusters , and serverless workloads .
- Cloud VPN Cloud VPN lets you connect your VPC network to your physical, on-premises network or another cloud provider by using a secure virtual private network .

### "About published services \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Quotas The total number of Private Service Connect endpoints and propagated connections , from any consumer, that can access your producer VPC network is controlled by the PSC ILB consumer forwarding rules per producer VPC network quota .
- Private Service Connect NAT subnets cannot be used for resources such as virtual machine (VM) instances or forwarding rules.
- Target producer Consumer configuration (endpoint) Consumer global access Hybrid access Automatic DNS configuration (IPv4-only) VPC Network Peering access NCC connection propagation (IPv4 only) Supported target services for IPv4 endpoints Supported target services for IPv6 endpoints Cross-region internal Application Load Balancer IPv4 services IPv4 services Internal passthrough Network Load Balancer Only if global access is enabled on the load balancer ( known issue ) IPv4 services IPv4 services IPv6 services Internal protocol forwarding (target instance) Only if global access is enabled on the producer forwarding rule ( known issue ) IPv4 services IPv4 services IPv6 services Port mapping services Only if global access is enabled on the producer forwarding rule IPv4 services IPv4 services IPv6 services Regional internal Application Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Regional internal proxy Network Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Secure Web Proxy IPv4 services IPv4 services Producer configuration This table summarizes the supported configuration options and capabilities of published services that are accessed by endpoints.
- If you delete a VPC network that contains endpoints (forwarding rules), after a seven day waiting period, the pscConnectionId value that was used for those endpoints might be used for a different endpoint in another VPC network.

