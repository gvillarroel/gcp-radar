---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.483Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect internal HTTP(S) load balancer backend publishing"
feature_slug: "private-service-connect-internal-http-s-load-balancer-backend-publishing"
latest_feature_date: "2021-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends"
  - "https://docs.cloud.google.com/vpc/docs/private-service-connect"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls"
keywords:
  - "private"
  - "connect"
  - "internal"
  - "http"
  - "load"
  - "balancer"
  - "backend"
  - "publishing"
---

# Private Service Connect internal HTTP(S) load balancer backend publishing

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect now supports publishing services backed by internal HTTP(S) load balancer backends, and this capability is generally available.

## Extended Definition

Private Service Connect now supports publishing services backed by internal HTTP(S) load balancer backends, and this capability is generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls)

## Supporting Pages

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- You don't need to take any steps to allow traffic between a Private Service Connect endpoint or Private Service Connect backend and the associated service attachment, or between a service attachment and the associated load balancer.
- Private Service Connect provides two methods to connect to published services: Endpoints (based on a forwarding rule) Backends (based on a load balancer) These endpoint types require slightly different producer configurations.
- This configuration, including load balancer and service attachment configuration, is described in Create an internal passthrough Network Load Balancer with Private Service Connect in the GKE documentation.

### "Create a Private Service Connect backend \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- Source ID: `site-docs-root-2`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For instructions that include creating a load balancer with a Private Service Connect backend, see the following: Create an internal Application Load Balancer to access Google APIs Create a global external Application Load Balancer to access a published service Roles The Compute Load Balancer Admin role ( roles/compute.loadBalancerAdmin ) contains the permission required to perform the tasks described in this guide.
- Add a backend to a regional internal proxy Network Load Balancer You can add a Private Service Connect NEG backend to a regional internal proxy Network Load Balancer if the NEG is pointing to a published service.
- If you are configuring a global external Application Load Balancer to connect to a published service in multiple regions, and you have created more than one Private Service Connect NEG, click Add backend to select another NEG.
- Add a backend to a regional external proxy Network Load Balancer You can add a Private Service Connect NEG backend to a regional external proxy Network Load Balancer if the NEG is pointing to a published service.

### Private Service Connect \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: N/A

Evidence snippets:
- Backends let you create configurations such as the following: Customer-owned domains and certificates in front of managed services Consumer-controlled failover between managed services in different regions Centralized security configuration and access control for managed services The following diagram shows an internal Application Load Balancer deployed with Private Service Connect backends that reference a published service.
- Backends are deployed by using network endpoint groups (NEGs) that let consumers direct traffic to their load balancer before reaching a Private Service Connect service.
- Backends Private Service Connect backends let Google Cloud load balancers send traffic through Private Service Connect to reach published services or Google APIs.
- Private Service Connect traffic goes directly from the physical machine that hosts the consumer client VM to the physical machine that hosts the producer load balancer VM.

### "Access regional Google APIs through backends \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-controls)
- Source ID: `site-docs-root-2`
- Final score: 258
- Re-rank relevance: N/A

Evidence snippets:
- Access regional Google APIs through backends This guide describes how to configure an internal Application Load Balancer with a Private Service Connect backend to access a regional Google API .
- An internal Application Load Balancer that uses that Private Service Connect NEG as a backend.
- An internal Application Load Balancer used for Private Service Connect can be reached from Shared VPC networks and from connected networks .
- Backend configuration The Private Service Connect network endpoint group is a type of load balancer backend.

