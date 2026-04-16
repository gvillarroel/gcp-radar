---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.459Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect internal regional load balancer backends"
feature_slug: "private-service-connect-internal-regional-load-balancer-backends"
latest_feature_date: "2023-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls"
  - "https://docs.cloud.google.com/vpc/docs/private-service-connect"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
keywords:
  - "private"
  - "connect"
  - "internal"
  - "regional"
  - "load"
  - "balancer"
  - "backends"
  - "can"
---

# Private Service Connect internal regional load balancer backends

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect backends can now access published services hosted on regional internal Application Load Balancers and regional internal proxy Network Load Balancers.

## Extended Definition

Private Service Connect backends can now access published services hosted on regional internal Application Load Balancers and regional internal proxy Network Load Balancers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls)
- [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)

## Supporting Pages

### "Create a Private Service Connect backend \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- Source ID: `site-docs-root-2`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add a backend to a regional internal proxy Network Load Balancer You can add a Private Service Connect NEG backend to a regional internal proxy Network Load Balancer if the NEG is pointing to a published service.
- Add a backend to a regional external proxy Network Load Balancer You can add a Private Service Connect NEG backend to a regional external proxy Network Load Balancer if the NEG is pointing to a published service.
- Create a Private Service Connect backend You can use Private Service Connect backends to connect to supported services by using a load balancer for policy enforcement.
- For instructions that include creating a load balancer with a Private Service Connect backend, see the following: Create an internal Application Load Balancer to access Google APIs Create a global external Application Load Balancer to access a published service Roles The Compute Load Balancer Admin role ( roles/compute.loadBalancerAdmin ) contains the permission required to perform the tasks described in this guide.

### "Access regional Google APIs through backends \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls)
- Source ID: `site-docs-root-2`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access regional Google APIs through backends This guide describes how to configure an internal Application Load Balancer with a Private Service Connect backend to access a regional Google API .
- An internal Application Load Balancer used for Private Service Connect can be reached from Shared VPC networks and from connected networks .
- By configuring Private Service Connect, Cloud Router, and on-premises hosts, you can connect to Google APIs and services using regional backends (click to enlarge).
- An internal Application Load Balancer that uses that Private Service Connect NEG as a backend.

### Private Service Connect \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- Source ID: `site-docs-root`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Backends let you create configurations such as the following: Customer-owned domains and certificates in front of managed services Consumer-controlled failover between managed services in different regions Centralized security configuration and access control for managed services The following diagram shows an internal Application Load Balancer deployed with Private Service Connect backends that reference a published service.
- Backends are deployed by using network endpoint groups (NEGs) that let consumers direct traffic to their load balancer before reaching a Private Service Connect service.
- Backends Private Service Connect backends let Google Cloud load balancers send traffic through Private Service Connect to reach published services or Google APIs.
- Private Service Connect traffic goes directly from the physical machine that hosts the consumer client VM to the physical machine that hosts the producer load balancer VM.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 288
- Re-rank relevance: N/A

Evidence snippets:
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- For regional internal proxy Network Load Balancers, the backends can be located in Google Cloud, in other clouds, in an on-premises environment, or any combination of these locations.
- Private Service Connect provides two methods to connect to published services: Endpoints (based on a forwarding rule) Backends (based on a load balancer) These endpoint types require slightly different producer configurations.
- This configuration, including load balancer and service attachment configuration, is described in Create an internal passthrough Network Load Balancer with Private Service Connect in the GKE documentation.

