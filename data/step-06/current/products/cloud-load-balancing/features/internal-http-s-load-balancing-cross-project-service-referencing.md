---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.787Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Internal HTTP(S) Load Balancing cross-project service referencing"
feature_slug: "internal-http-s-load-balancing-cross-project-service-referencing"
latest_feature_date: "2022-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "internal"
  - "http"
  - "load"
  - "balancing"
  - "cross"
  - "project"
  - "referencing"
  - "supports"
---

# Internal HTTP(S) Load Balancing cross-project service referencing

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Internal HTTP(S) Load Balancing supports Shared VPC deployments where frontend and URL maps can reference backend services across multiple service projects.

## Extended Definition

Internal HTTP(S) Load Balancing supports Shared VPC deployments where frontend and URL maps can reference backend services across multiple service projects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Table: Supported session affinity settings Product Session affinity options Cross-region internal Application Load Balancer Regional internal Application Load Balancer None ( NONE ) Client IP ( CLIENT IP ) Generated cookie ( GENERATED COOKIE ) Header field ( HEADER FIELD ) HTTP cookie ( HTTP COOKIE ) Stateful cookie-based affinity ( STRONG COOKIE AFFINITY ) Also note: The effective default value of the load balancing locality policy ( localityLbPolicy ) changes according to your session affinity settings.
- To learn how to configure Shared VPC for an internal Application Load Balancer—with and without cross-project service referencing—see Set up an internal Application Load Balancer with Shared VPC .
- For internal Application Load Balancers, cross-project service referencing is only supported within Shared VPC environments.
- Backend service scope The following table indicates which backend service resource and scope is used by internal Application Load Balancers: Load balancer mode Backend service resource Cross-region internal Application Load Balancer backendServices Regional internal Application Load Balancer regionBackendServices Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.

### "Internal proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- The internal proxy Network Load Balancer doesn't support Shared VPC deployments where the load balancer's frontend is in one host or service project and the backend service and backends are in another service project (also known as cross-project service referencing).
- The following table specifies the backend service APIs for internal proxy Network Load Balancers: Load balancer mode Backend service type Regional internal proxy Network Load Balancer Regional regionBackendServices Cross-region internal proxy Network Load Balancer Global backendServices Supported backends The internal proxy Network Load Balancer supports the following types of backends: Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Regional internal proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Cross-region internal proxy Network Load Balancer GCE VM IP PORT type endpoints Add a Private Service Connect NEG All of the backends must be of the same type (instance groups or NEGs).
- Load balancer mode Load balancer type Access type Region Regional internal proxy Network Load Balancer Network (Proxy) Internal Specifies a region Cross-region internal proxy Network Load Balancer Network (Proxy) Internal gcloud To determine the mode of a load balancer, run the following command: gcloud compute forwarding-rules describe FORWARDING RULE NAME In the command output, check the load balancing scheme, region, and network tier.
- Cross-region internal proxy Network Load Balancer Global globalForwardingRules Regional IP addresses Load balancing scheme: INTERNAL MANAGED Proxy-only subnet --purpose : GLOBAL MANAGED PROXY IP address --purpose : SHARED LOADBALANCER VIP Global access is enabled by default to allow clients from any region to access your load balancer.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, for the regional external Application Load Balancer that supports cross-project service referencing, the backend service, serverless NEG, and the Cloud Run service must always be in the same service project.
- Cross-project service referencing support differs based on the type of load balancer: For global external Application Load Balancers : your load balancer's frontend and URL map can reference backend services or backend buckets from any project within the same organization.
- If you want the regional external Application Load Balancer's backend service and backends to be in a different project from the forwarding rule, you need to configure the load balancer in a Shared VPC environment with cross-project service referencing .
- Cross-project service referencing Cross-project service referencing is a deployment model where the load balancer's frontend and URL map are in one project and the load balancer's backend service and backends are in a different project.

