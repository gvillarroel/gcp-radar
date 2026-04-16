---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.769Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Preferred backends"
feature_slug: "preferred-backends"
latest_feature_date: "2024-07-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb"
  - "https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb"
  - "https://docs.cloud.google.com/load-balancing/docs/application-load-balancer"
keywords:
  - "preferred"
  - "backends"
  - "global"
  - "external"
  - "application"
  - "load"
  - "balancers"
  - "can"
---

# Preferred backends

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Global external Application Load Balancers can designate preferred backends to optimize traffic placement for cost, latency, and resiliency; Global external Application Load Balancers can designate preferred backends to optimize traffic placement for cost, latency, and resiliency.

## Extended Definition

Global external Application Load Balancers can designate preferred backends to optimize traffic placement for cost, latency, and resiliency; Global external Application Load Balancers can designate preferred backends to optimize traffic placement for cost, latency, and resiliency.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb)
- [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)

## Supporting Pages

### "Application capacity optimizations with global load balancing \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb)
- Source ID: `site-docs-reference-required-3`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Addressing these challenges with global load balancing The external Application Load Balancers and external proxy Network Load Balancers are global load balancing products proxied through globally synchronized Google Front End (GFE) servers, making it easier to mitigate these types of load balancing challenges.
- Using an external Application Load Balancer to address capacity challenges To help address the challenges discussed earlier, external Application Load Balancers and external proxy Network Load Balancers can overflow capacity to other regions.
- Note: The algorithm described here is equivalent for all GFE-based load balancers on Google Cloud, including the external Application Load Balancer and external proxy Network Load Balancer .
- The external Application Load Balancer is available through a single stable IP address that is announced globally at the edge nodes, and the connections are terminated by any of the GFEs.

### "Set up authorization policies for Application Load Balancers \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- Source ID: `site-docs-reference-required-3`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Enable the following APIs : Network Security API Network Services API Set up the load balancer If you haven't created a load balancer, see the following pages to set up your preferred Application Load Balancer: To create a global external Application Load Balancer, see Set up a global external Application Load Balancer with VM instance group backends .
- Note: Authorization policy based on principals is not supported on global external Application Load Balancers.
- See the following example: { httpRequest: {8} insertId: "example-id" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" authzPolicyInfo: { policies: [ 0: { details: "name: "projects/12345567/locations/global/authzPolicies/deny-authz-policy-test"" result: "DENIED" } ] result: "DENIED" } backendTargetProjectNumber: "projects/12345567" cacheDecision: [2] remoteIp: "00.100.11.104" statusDetails: "denied by authz policy" } logName: "projects/example-project/logs/requests" receiveTimestamp: "2024-08-28T15:33:56.046651035Z" resource: {2} severity: "WARNING" spanId: "3e1a09a8e5e3e14d" timestamp: "2024-08-28T15:33:55.355042Z" trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509" } If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or cross-region internal Application Load Balancer, proxyStatus is set to error=\"http request error\"; details=\"denied by authz policy\" and the name of the policy is logged in policies .
- See the following example: { httpRequest: {8} insertId: "example-id" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" authzPolicyInfo: { policies: [ 0: { details: "allowed as no deny policies matched request" result: "ALLOWED" } 1: { details: "name: "projects/12345567/locations/global/authzPolicies/allow-authz-policy-test"" result: "ALLOWED" } ] result: "ALLOWED" } backendTargetProjectNumber: "projects/12345567" cacheDecision: [2] remoteIp: "00.100.11.104" } logName: "projects/example-project/logs/requests" receiveTimestamp: "2024-08-28T15:33:56.046651035Z" resource: {2} severity: "WARNING" spanId: "3e1a09a8e5e3e14d" timestamp: "2024-08-28T15:33:55.355042Z" trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509" } If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or cross-region internal Application Load Balancer, there is no proxyStatus field in the log.

### "Application Load Balancer overview \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)
- Source ID: `site-docs-reference-required-3`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Related documentation: Serverless NEGs overview Set up a global external Application Load Balancer with a Cloud Run, Cloud Run functions, or App Engine backend Set up a regional external Application Load Balancer with a Cloud Run backend Set up a regional internal Application Load Balancer with a Cloud Run backend Set up a cross-region internal Application Load Balancer with Cloud Run Load balancing to backends outside Google Cloud Application Load Balancers support load-balancing traffic to endpoints that extend beyond Google Cloud, such as on-premises data centers and other cloud environments.
- To learn more about how failover works, see the following topics: Global external Application Load Balancers: How requests are distributed Cross-region internal Application Load Balancers: High availability and cross-region failover Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more details, see the following: Traffic management overview for global external Application Load Balancers Traffic management overview for regional external Application Load Balancers Extensibility with Service Extensions The integration with Service Extensions lets you inject custom logic into the load balancing path of supported Application Load Balancers .
- High availability and cross-region failover Cross-region failover is only available with global external Application Load Balancers, classic Application Load Balancers, and cross-region internal Application Load Balancers.

