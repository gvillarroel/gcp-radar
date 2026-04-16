---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.460Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect published-service backends for global external TCP proxy Network Load Balancers"
feature_slug: "private-service-connect-published-service-backends-for-global-external-tcp-proxy-network-load-balancers"
latest_feature_date: "2023-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends"
  - "https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health"
keywords:
  - "private"
  - "connect"
  - "published"
  - "backends"
  - "for"
  - "global"
  - "external"
  - "tcp"
---

# Private Service Connect published-service backends for global external TCP proxy Network Load Balancers

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect allows published service backends to be added to global external TCP proxy Network Load Balancers.

## Extended Definition

Private Service Connect allows published service backends to be added to global external TCP proxy Network Load Balancers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)

## Supporting Pages

### "Create a Private Service Connect backend \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- Source ID: `site-docs-root-2`
- Final score: 288
- Re-rank relevance: N/A

Evidence snippets:
- For instructions that include creating a load balancer with a Private Service Connect backend, see the following: Create an internal Application Load Balancer to access Google APIs Create a global external Application Load Balancer to access a published service Roles The Compute Load Balancer Admin role ( roles/compute.loadBalancerAdmin ) contains the permission required to perform the tasks described in this guide.
- Create a Private Service Connect NEG When you create a NEG, you choose which type of target it connects to: A published service A regional Google API A global Google API Create a NEG to connect to a published service When you create a Private Service Connect NEG that points to a published service, you need the service attachment URI for the service.
- If you are configuring a global external Application Load Balancer to connect to a published service in multiple regions, and you have created more than one Private Service Connect NEG, click Add backend to select another NEG.
- Add a backend to a regional external proxy Network Load Balancer You can add a Private Service Connect NEG backend to a regional external proxy Network Load Balancer if the NEG is pointing to a published service.

### "About published services \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Producer type Producer configuration (published service) Supported producer backends Forwarding rule protocols Forwarding rule ports PROXY protocol IP version Private Service Connect health support Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups TCP HTTP HTTPS HTTP/2 gRPC Supports one, multiple, or all ports IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups TCP See Producer port configuration IPv4 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups HTTP HTTPS HTTP/2 Supports a single port IPv4 Regional internal proxy Network Load Balancer Note: Connections from consumer global external Application Load Balancers aren't supported.
- TCP/SSL IPv4 Regional external Application Load Balancer HTTP HTTPS HTTP2 IPv4 Regional external proxy Network Load Balancer TCP IPv4 Regional internal Application Load Balancer HTTP HTTPS HTTP2 IPv4 Regional internal proxy Network Load Balancer TCP IPv4 Producer configuration This table describes the configuration for producer load balancers that are supported by Private Service Connect backends for published services.
- Producer type Producer configuration (published service) Supported producer backends PROXY protocol (TCP traffic only) IP version Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups IPv4 IPv6 Internal protocol forwarding (target instance) Not applicable IPv4 IPv6 Port mapping services Port mapping NEG IPv4 IPv6 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups Regional internet NEGs IPv4 Regional internal proxy Network Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Private Service Connect NEGs Instance groups IPv4 Secure Web Proxy Not applicable IPv4 Different load balancers support different port configurations; some load balancers support a single port, some support a range of ports, and some support all ports.
- GCE VM IP PORT zonal NEGs Hybrid NEGs Private Service Connect NEGs Instance groups TCP Supports a single port IPv4 Secure Web Proxy Not applicable Not applicable Not applicable IPv4 Note: To support access by a Private Service Connect backend in a global or cross-regional load balancer, the producer load balancer must have global access turned on before the service attachment is created.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 258
- Re-rank relevance: N/A

Evidence snippets:
- Private Service Connect provides two methods to connect to published services: Endpoints (based on a forwarding rule) Backends (based on a load balancer) These endpoint types require slightly different producer configurations.
- To create an IPv4-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT" } To create a dual-stack Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV4 IPV6", "ipv6AccessType": "INTERNAL" } To create an IPv6-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV6 ONLY", "ipv6AccessType": "INTERNAL" } Replace the following: PROJECT ID : the project for the subnet.
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- Details are displayed for each endpoint, including the Endpoint ID that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud To view details for a published service, use the gcloud compute service-attachments describe command .

### "About Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)
- Source ID: `site-docs-root-2`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- The backend must be based on a load balancer that supports cross-region failover and includes the following configuration: A Private Service Connect NEG in each region that points to that region's service attachment A global backend service that contains the NEG backends The following diagram shows a multi-region deployment: This example shows a consumer global external Application Load Balancer that connects to a service that is published in multiple regions.
- Published service instances must have one of the following backend types: Network endpoint group of type GCE VM IP PORT Network endpoint group of type GCE VM IP Managed or unmanaged instance group The published service instances must be accessed by Private Service Connect backends that are based on load balancers that supports Private Service Connect health .
- Accessing a multi-region service with a supported global or cross-regional load balancer lets the service consumer take advantage of Private Service Connect health for automatic cross-region failover (click to enlarge).
- Private Service Connect health lets service producers define health states that support automatic cross-region failover for service consumers that use Private Service Connect backends.

