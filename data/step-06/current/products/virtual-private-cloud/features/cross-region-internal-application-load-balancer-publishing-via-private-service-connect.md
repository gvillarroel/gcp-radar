---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.441Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Cross-region internal Application Load Balancer publishing via Private Service Connect"
feature_slug: "cross-region-internal-application-load-balancer-publishing-via-private-service-connect"
latest_feature_date: "2025-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-load-balancers"
  - "https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services"
keywords:
  - "cross"
  - "region"
  - "internal"
  - "application"
  - "load"
  - "balancer"
  - "publishing"
  - "via"
---

# Cross-region internal Application Load Balancer publishing via Private Service Connect

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Enables service producers to publish services hosted on internal Application Load Balancers to other consumers across regions.

## Extended Definition

Enables service producers to publish services hosted on internal Application Load Balancers to other consumers across regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-load-balancers](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-load-balancers)
- [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)

## Supporting Pages

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- Create a target service To host the service, create one of the following target services in a service producer VPC network: Internal passthrough Network Load Balancer Regional internal Application Load Balancer Cross-region internal Application Load Balancer Internal protocol forwarding Regional internal proxy Network Load Balancer Secure Web Proxy instance For information about supported configurations for each target service, see Features and compatibility .
- For Cross-region internal Application Load Balancers, use the following format: projects/ PROJECT ID /global/forwardingRules/ RULE NAME For all other producer forwarding rules, use the following format: projects/ PROJECT ID /regions/ RULE REGION /forwardingRules/ RULE NAME Service Project Admins can specify the forwarding rule of an internal load balancer that has an IP address from a Shared VPC network .
- For Cross-region internal Application Load Balancers, use the following format: projects/ PROJECT ID /global/forwardingRules/ RULE NAME For all other producer forwarding rules, use the following format: projects/ PROJECT ID /regions/ RULE REGION /forwardingRules/ RULE NAME Service Project Admins can specify the forwarding rule of an internal load balancer that has an IP address from a Shared VPC network .

### "Configure Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- It must use one of the following internal load balancers: Internal passthrough Network Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer It must use one of the following backend types: A zonal network endpoint group (NEG) with network endpoint type GCE VM IP or GCE VM IP PORT An instance group The steps to create your target services depend on the load balancer and backend types that you choose.
- HEALTH DESTINATION : the URI of the forwarding rule that receives the composite health state from this composite health check—for example, projects/ PROJECT ID /regions/ REGION /forwardingRules/ FORWARDING RULE The forwarding rule must be associated with a producer load balancer that supports Private Service Connect health and fulfills the following requirements: It must have a load balancing scheme of INTERNAL or INTERNAL MANAGED .
- Understand that to use Private Service Connect health, consumers must access your service with a load balancer that supports cross-region failover .
- BACKEND SERVICE : the name of a single backend service to use as the source of health The backend service must fulfill the following requirements: It must have a load balancing scheme of INTERNAL or INTERNAL MANAGED .

### "Test connectivity to Google Cloud load balancers \_|\_ Network Intelligence\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-load-balancers](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-load-balancers)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Traffic can't reach an internal passthrough Network Load Balancer that has a mismatched region because the internal passthrough Network Load Balancer is a regional service.
- The following successful test result validates that all of the following Google Cloud resources for the external Application Load Balancer are configured correctly: The forwarding rule The load balancer backends, including the ability for the load balancer to successfully send health checks to those backends The proxy connection VPC firewall rules This result shows that a simulated packet from an external IP address could successfully reach the backend VM instances.
- Packet trace to an external Application Load Balancer Number of traces in a test to a load balancer Connectivity Tests configuration analysis considers all configured backends of proxy Network Load Balancer and passthrough Network Load Balancer and all backend services mentioned in the URL map of Application Load Balancer.
- Example output for a successful test to an external Application Load Balancer If you don't have permissions to review the Google Cloud resources in the network path for the external Application Load Balancer, you still see results in the Google Cloud console, including successful results.

### "About published services \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Target producer Consumer configuration (endpoint) Consumer global access Hybrid access Automatic DNS configuration (IPv4-only) VPC Network Peering access NCC connection propagation (IPv4 only) Supported target services for IPv4 endpoints Supported target services for IPv6 endpoints Cross-region internal Application Load Balancer IPv4 services IPv4 services Internal passthrough Network Load Balancer Only if global access is enabled on the load balancer ( known issue ) IPv4 services IPv4 services IPv6 services Internal protocol forwarding (target instance) Only if global access is enabled on the producer forwarding rule ( known issue ) IPv4 services IPv4 services IPv6 services Port mapping services Only if global access is enabled on the producer forwarding rule IPv4 services IPv4 services IPv6 services Regional internal Application Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Regional internal proxy Network Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Secure Web Proxy IPv4 services IPv4 services Producer configuration This table summarizes the supported configuration options and capabilities of published services that are accessed by endpoints.
- Producer type Producer configuration (published service) Supported producer backends PROXY protocol (TCP traffic only) IP version Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups IPv4 IPv6 Internal protocol forwarding (target instance) Not applicable IPv4 IPv6 Port mapping services Port mapping NEG IPv4 IPv6 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups Regional internet NEGs IPv4 Regional internal proxy Network Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Private Service Connect NEGs Instance groups IPv4 Secure Web Proxy Not applicable IPv4 Different load balancers support different port configurations; some load balancers support a single port, some support a range of ports, and some support all ports.
- Producer type Producer configuration (published service) Supported producer backends Forwarding rule protocols Forwarding rule ports PROXY protocol IP version Private Service Connect health support Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups TCP HTTP HTTPS HTTP/2 gRPC Supports one, multiple, or all ports IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups TCP See Producer port configuration IPv4 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups HTTP HTTPS HTTP/2 Supports a single port IPv4 Regional internal proxy Network Load Balancer Note: Connections from consumer global external Application Load Balancers aren't supported.
- Original target service New target service Internal passthrough Network Load Balancer Internal protocol forwarding (target instance) Port mapping services Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Cross-region internal Application Load Balancer Secure Web Proxy Internal passthrough Network Load Balancer Internal protocol forwarding (target instance) Port mapping services Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Cross-region internal Application Load Balancer Secure Web Proxy Shared VPC Service Project Admins can create service attachments in Shared VPC service projects that connect to resources in Shared VPC networks .

