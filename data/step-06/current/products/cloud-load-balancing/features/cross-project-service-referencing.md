---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.770Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Cross-project service referencing"
feature_slug: "cross-project-service-referencing"
latest_feature_date: "2024-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/quotas"
keywords:
  - "cross"
  - "project"
  - "referencing"
  - "application"
  - "load"
  - "balancers"
  - "can"
  - "reference"
---

# Cross-project service referencing

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Application Load Balancers can reference backend services that reside in different projects, including Shared VPC environments; Regional external HTTP(S) load balancers support Shared VPC cross-project service referencing for centrally managed load balancers with distributed backend services.

## Extended Definition

Application Load Balancers can reference backend services that reside in different projects, including Shared VPC environments; Regional external HTTP(S) load balancers support Shared VPC cross-project service referencing for centrally managed load balancers with distributed backend services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas)

## Supporting Pages

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cross-project service referencing support differs based on the type of load balancer: For global external Application Load Balancers : your load balancer's frontend and URL map can reference backend services or backend buckets from any project within the same organization.
- However, the following limitations apply: With global external Application Load Balancers, you can't reference a cross-project backend service if the backend service has serverless NEG backends with App Engine.
- With regional external Application Load Balancers, you can't reference a cross-project backend service if the backend service has regional internet NEG backends.
- If you want the regional external Application Load Balancer's backend service and backends to be in a different project from the forwarding rule, you need to configure the load balancer in a Shared VPC environment with cross-project service referencing .

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For internal Application Load Balancers, cross-project service referencing is only supported within Shared VPC environments.
- Service owners can focus on building services in service projects, while network teams can provision and maintain load balancers in another project, and both can be connected by using cross-project service referencing.
- To learn how to configure Shared VPC for an internal Application Load Balancer—with and without cross-project service referencing—see Set up an internal Application Load Balancer with Shared VPC .
- Backend service scope The following table indicates which backend service resource and scope is used by internal Application Load Balancers: Load balancer mode Backend service resource Cross-region internal Application Load Balancer backendServices Regional internal Application Load Balancer regionBackendServices Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.

### Quotas and limits \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Quota name: REGIONAL EXTERNAL MANAGED BACKEND SERVICES Available metrics: compute.googleapis.com/quota/regional external managed backend services/limit compute.googleapis.com/quota/regional external managed backend services/usage compute.googleapis.com/quota/regional external managed backend services/exceeded Cross-region internal Application Load Balancer and Cross-region internal proxy Network Load Balancer backend services Quota This is a per-region and per-project quota defining the maximum number of backend services for cross-region internal Application Load Balancers and cross-region internal proxy Network Load Balancers .
- Item Quotas and limits Notes Number of authorization policies Limit: Quota for global external Application Load Balancers, Quota for cross-region internal Application Load Balancers, Quota per region for regional internal Application Load Balancers and Quota per region for regional external Application Load Balancers, and Quota per region for Cloud Service Mesh This quota is per project.
- This quota is used by: Global target HTTPS proxies for: Global external Application Load Balancers Classic Application Load Balancers Cross-region internal Application Load Balancers Global target SSL proxies for: Global external proxy Network Load Balancers Classic proxy Network Load Balancers Regional SSL policies Quota This quota is per region, per project.
- Server TLS policy Item Quotas and limits Notes Global server TLS policy Quota This quota is per project and applies to classic Application Load Balancers, global external Application Load Balancers, and cross-region internal Application Load Balancers.

