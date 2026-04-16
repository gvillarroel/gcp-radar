---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.680Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Cloud Storage backend buckets for cross-region internal Application Load Balancers"
feature_slug: "cloud-storage-backend-buckets-for-cross-region-internal-application-load-balancers"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/backend-bucket"
  - "https://docs.cloud.google.com/load-balancing/docs/application-load-balancer"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "storage"
  - "backend"
  - "buckets"
  - "cross"
  - "region"
  - "internal"
  - "application"
  - "load"
---

# Cloud Storage backend buckets for cross-region internal Application Load Balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Cross-region internal Application Load Balancers can route requests for static content to Cloud Storage buckets; Cross-region internal Application Load Balancers can route requests for static content to Cloud Storage buckets.

## Extended Definition

Cross-region internal Application Load Balancers can route requests for static content to Cloud Storage buckets; Cross-region internal Application Load Balancers can route requests for static content to Cloud Storage buckets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/backend-bucket](https://docs.cloud.google.com/load-balancing/docs/backend-bucket)
- [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### Backend buckets overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/backend-bucket](https://docs.cloud.google.com/load-balancing/docs/backend-bucket)
- Source ID: `site-docs-reference-required-3`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Distributing traffic to Cloud Storage API and gcloud reference For more information about the properties of the backend bucket resource, see the following reference documentation: Global backend bucket API resource Regional backend bucket API resource gcloud beta compute backend-buckets page (for global and regional resources) What's next Set up a global external Application Load Balancer with Cloud Storage buckets Set up a regional external Application Load Balancer with Cloud Storage buckets Set up a classic Application Load Balancer with Cloud Storage buckets Set up a cross-region internal Application Load Balancer with Cloud Storage buckets Set up a regional internal Application Load Balancer with Cloud Storage buckets Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Load balancer support The following load balancers support the use of backend buckets: Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer ( Preview ) Cross-region internal Application Load Balancer Regional internal Application Load Balancer ( Preview ) Private Service Connect NEG deployments Backend buckets offer a seamless, fully-integrated experience so that your load balancer can serve content directly from your Cloud Storage bucket.
- A backend bucket lets you use a Cloud Storage bucket as a backend for your Application Load Balancer.
- However, Private Service Connect offers an alternative deployment type where you create a Private Service Connect NEG that points to Cloud Storage API endpoints, and then configure this NEG as a backend for a load balancer.

### "Application Load Balancer overview \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)
- Source ID: `site-docs-reference-required-3`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Related documentation: Serverless NEGs overview Set up a global external Application Load Balancer with a Cloud Run, Cloud Run functions, or App Engine backend Set up a regional external Application Load Balancer with a Cloud Run backend Set up a regional internal Application Load Balancer with a Cloud Run backend Set up a cross-region internal Application Load Balancer with Cloud Run Load balancing to backends outside Google Cloud Application Load Balancers support load-balancing traffic to endpoints that extend beyond Google Cloud, such as on-premises data centers and other cloud environments.
- To learn more about how failover works, see the following topics: Global external Application Load Balancers: How requests are distributed Cross-region internal Application Load Balancers: High availability and cross-region failover Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- High availability and cross-region failover Cross-region failover is only available with global external Application Load Balancers, classic Application Load Balancers, and cross-region internal Application Load Balancers.
- You can use rules in Cloud NGFW firewall policies to control access to the Envoy proxies used by regional internal Application Load Balancers and cross-region internal Application Load Balancers.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Load balancer mode Supported backends on a backend service 1 Supports backend buckets Supports Cloud Armor Supports Cloud CDN 2 Supports IAP 2 Supports Service Extensions Instance groups 3 Zonal NEGs 4 Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs Global external Application Load Balancer Classic Application Load Balancer Premium Tier Regional external Application Load Balancer 1 Backends on a backend service must be the same type: all instance groups or all the same type of NEG.
- Compatible with GKE using Gateway (fully orchestrated) or Standalone NEGs (manual orchestration) Supports advanced traffic management Global Anycast external IP addresses over Premium Tier Can access backends across multiple regions Supports Cloud CDN Supports Cloud Armor Classic Application Load Balancer This load balancer is global in Premium Tier.
- Cross-project service referencing support differs based on the type of load balancer: For global external Application Load Balancers : your load balancer's frontend and URL map can reference backend services or backend buckets from any project within the same organization.
- If you want the regional external Application Load Balancer's backend service and backends to be in a different project from the forwarding rule, you need to configure the load balancer in a Shared VPC environment with cross-project service referencing .

