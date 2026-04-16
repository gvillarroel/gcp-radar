---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.757Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Cross-VPC frontend and backend deployment for Application and Proxy Network Load Balancers"
feature_slug: "cross-vpc-frontend-and-backend-deployment-for-application-and-proxy-network-load-balancers"
latest_feature_date: "2025-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy"
  - "https://docs.cloud.google.com/load-balancing/docs/application-load-balancer"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "cross"
  - "vpc"
  - "frontend"
  - "backend"
  - "deployment"
  - "application"
  - "proxy"
  - "network"
---

# Cross-VPC frontend and backend deployment for Application and Proxy Network Load Balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Application Load Balancers and Proxy Network Load Balancers support deployments where the frontend and backend use different VPC networks without Shared VPC.

## Extended Definition

Application Load Balancers and Proxy Network Load Balancers support deployments where the frontend and backend use different VPC networks without Shared VPC.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### "Internal proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The internal proxy Network Load Balancer doesn't support Shared VPC deployments where the load balancer's frontend is in one host or service project and the backend service and backends are in another service project (also known as cross-project service referencing).
- What's next Set up a cross-region internal Application Load Balancer with VM instance group backends Set up a cross-region internal Application Load Balancer with hybrid connectivity Set up a regional internal proxy Network Load Balancer with an instance group backend Set up a regional internal proxy Network Load Balancer with a zonal NEG backend Set up a regional internal proxy Network Load Balancer with a hybrid NEG backend Set up a regional internal proxy Network Load Balancer with an internet NEG backend View metrics with Cloud Monitoring Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following table specifies the backend service APIs for internal proxy Network Load Balancers: Load balancer mode Backend service type Regional internal proxy Network Load Balancer Regional regionBackendServices Cross-region internal proxy Network Load Balancer Global backendServices Supported backends The internal proxy Network Load Balancer supports the following types of backends: Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Regional internal proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Cross-region internal proxy Network Load Balancer GCE VM IP PORT type endpoints Add a Private Service Connect NEG All of the backends must be of the same type (instance groups or NEGs).
- Cross-region This diagram shows the components of a cross-region internal proxy Network Load Balancer deployment in Premium Tier within the same VPC network.

### "Application Load Balancer overview \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)
- Source ID: `site-docs-reference-required-3`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Organization of global, regional, and cross-region Application Load Balancers and proxy Network Load Balancers in App Hub applications to understand the load balancer interactions and support business functions.
- Related documentation: Serverless NEGs overview Set up a global external Application Load Balancer with a Cloud Run, Cloud Run functions, or App Engine backend Set up a regional external Application Load Balancer with a Cloud Run backend Set up a regional internal Application Load Balancer with a Cloud Run backend Set up a cross-region internal Application Load Balancer with Cloud Run Load balancing to backends outside Google Cloud Application Load Balancers support load-balancing traffic to endpoints that extend beyond Google Cloud, such as on-premises data centers and other cloud environments.
- Deployment mode Network service tier Load balancing scheme IP address Frontend ports Global external Premium Tier EXTERNAL MANAGED IPv4 IPv6 Can reference exactly one port from 1-65535.
- Deployment mode Network service tier Load balancing scheme IP address Frontend ports Regional internal Premium Tier INTERNAL MANAGED IPv4 Can reference exactly one port from 1-65535.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Cross-project service referencing support differs based on the type of load balancer: For global external Application Load Balancers : your load balancer's frontend and URL map can reference backend services or backend buckets from any project within the same organization.
- Example 3: Load balancer frontend and backends in different projects Here is an example of a deployment where the global external Application Load Balancer's frontend and URL map are created in a different project from the load balancer's backend service and backends.
- Architecture The following resources are required for an external Application Load Balancer deployment: For regional external Application Load Balancers only , a proxy-only subnet is used to send connections from the load balancer to the backends.
- Cross-project service referencing Cross-project service referencing is a deployment model where the load balancer's frontend and URL map are in one project and the load balancer's backend service and backends are in a different project.

