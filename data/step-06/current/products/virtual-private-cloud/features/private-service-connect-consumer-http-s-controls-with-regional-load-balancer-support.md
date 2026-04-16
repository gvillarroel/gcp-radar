---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.473Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect consumer HTTP(S) controls with regional load balancer support"
feature_slug: "private-service-connect-consumer-http-s-controls-with-regional-load-balancer-support"
latest_feature_date: "2022-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services"
  - "https://docs.cloud.google.com/vpc/docs/private-service-connect"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls"
keywords:
  - "private"
  - "connect"
  - "consumer"
  - "http"
  - "controls"
  - "with"
  - "regional"
  - "load"
---

# Private Service Connect consumer HTTP(S) controls with regional load balancer support

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect consumer HTTP(S) controls now support accessing regional Google APIs and managed services through regional internal and external HTTP(S) load balancers.

## Extended Definition

Private Service Connect consumer HTTP(S) controls now support accessing regional Google APIs and managed services through regional internal and external HTTP(S) load balancers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls)

## Supporting Pages

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 274
- Re-rank relevance: N/A

Evidence snippets:
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- If a consumer connects a Private Service Connect NEG that is configured for global access to a producer load balancer, and the service producer disables global access for that load balancer, health checks don't work correctly.
- This configuration, including load balancer and service attachment configuration, is described in Create an internal passthrough Network Load Balancer with Private Service Connect in the GKE documentation.
- Health check failures with global access Private Service Connect NEGs There is a known issue with consumer Private Service Connect NEGs that are configured for global access.

### "About published services \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Producer type Producer configuration (published service) Supported producer backends Forwarding rule protocols Forwarding rule ports PROXY protocol IP version Private Service Connect health support Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups TCP HTTP HTTPS HTTP/2 gRPC Supports one, multiple, or all ports IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups TCP See Producer port configuration IPv4 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups HTTP HTTPS HTTP/2 Supports a single port IPv4 Regional internal proxy Network Load Balancer Note: Connections from consumer global external Application Load Balancers aren't supported.
- TCP/SSL IPv4 Regional external Application Load Balancer HTTP HTTPS HTTP2 IPv4 Regional external proxy Network Load Balancer TCP IPv4 Regional internal Application Load Balancer HTTP HTTPS HTTP2 IPv4 Regional internal proxy Network Load Balancer TCP IPv4 Producer configuration This table describes the configuration for producer load balancers that are supported by Private Service Connect backends for published services.
- Producer port configuration When an internal passthrough Network Load Balancer is published by using Private Service Connect, consumers who use Private Service Connect backends to access the service need to know which port to use to communicate with the service.
- Consumer configuration This table describes the consumer load balancers that are supported by Private Service Connect backends for published services, including which backend service protocols can be used with each consumer load balancer.

### Private Service Connect \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- Backends let you create configurations such as the following: Customer-owned domains and certificates in front of managed services Consumer-controlled failover between managed services in different regions Centralized security configuration and access control for managed services The following diagram shows an internal Application Load Balancer deployed with Private Service Connect backends that reference a published service.
- Placing a load balancer in front of a managed service provides the consumer with more visibility and control than is possible through a Private Service Connect endpoint.
- Private Service Connect can be used to access managed services that are owned by Google, third-party software as a service (SaaS) companies, or other teams within the consumer's own company.
- Private Service Connect traffic goes directly from the physical machine that hosts the consumer client VM to the physical machine that hosts the producer load balancer VM.

### "Access regional Google APIs through backends \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls)
- Source ID: `site-docs-root-2`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- Access regional Google APIs through backends This guide describes how to configure an internal Application Load Balancer with a Private Service Connect backend to access a regional Google API .
- Use the regional SSL certificate resource to create a target HTTPS proxy with the gcloud compute target-https-proxies create command. gcloud compute target-https-proxies create PROXY NAME \ --url-map= URL MAP NAME \ --region= REGION \ --ssl-certificates= CERTIFICATE Replace the following: PROXY NAME : a name for the target HTTPS proxy.
- Google-managed certificates aren't supported with internal Application Load Balancers. gcloud compute ssl-certificates create CERTIFICATE \ --certificate= LB CERT \ --private-key= LB PRIVATE KEY \ --region= REGION Replace the following: CERTIFICATE : a name for the certificate.
- Create a network endpoint group For each service that you want to make available using the load balancer, create a Private Service Connect network endpoint group (NEG).

