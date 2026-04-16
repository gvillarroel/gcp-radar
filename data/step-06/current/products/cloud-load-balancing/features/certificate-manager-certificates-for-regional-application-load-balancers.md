---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.775Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Certificate Manager certificates for regional Application Load Balancers"
feature_slug: "certificate-manager-certificates-for-regional-application-load-balancers"
latest_feature_date: "2024-03-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/ssl-certificates"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb"
keywords:
  - "certificate"
  - "manager"
  - "certificates"
  - "regional"
  - "application"
  - "load"
  - "balancers"
  - "external"
---

# Certificate Manager certificates for regional Application Load Balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Regional external and regional internal Application Load Balancers support certificates managed by Certificate Manager.

## Extended Definition

Regional external and regional internal Application Load Balancers support certificates managed by Certificate Manager.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/ssl-certificates](https://docs.cloud.google.com/load-balancing/docs/ssl-certificates)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)

## Supporting Pages

### "SSL certificates overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/ssl-certificates](https://docs.cloud.google.com/load-balancing/docs/ssl-certificates)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Load balancer Certificate configuration method Compute Engine SSL certificates Certificate Manager (certificate map) Certificate Manager (individual certificates) Application Load Balancers (target HTTPS proxies) Global external Application Load Balancer Self-managed Google-managed Self-managed Google-managed Classic Application Load Balancer Self-managed Google-managed Self-managed Google-managed Regional external Application Load Balancer Self-managed Google-managed Self-managed Google-managed Regional internal Application Load Balancer Self-managed Google-managed Self-managed Google-managed Cross-region internal Application Load Balancer Self-managed Google-managed Proxy Network Load Balancers (target SSL proxies) Global external proxy Network Load Balancer Self-managed Google-managed Self-managed Google-managed Classic proxy Network Load Balancer Self-managed Google-managed Self-managed Google-managed Configuration method rules Google Cloud enforces the following certificate configuration method rules: For load balancers that support both Compute Engine SSL certificates and Certificate Manager certificate maps : the load balancer's target proxy can simultaneously reference both a certificate map and one or more Compute Engine SSL certificates.
- For load balancers that support both Compute Engine SSL certificates and directly-attached Certificate Manager certificates : the load balancer's target proxy can only be configured to reference up to 15 Compute Engine SSL certificates or up to 100 Certificate Manager certificates, not a combination of both.
- Certificate selection process The following certificate selection process applies to load balancers whose target proxies reference multiple Compute Engine SSL certificates or multiple Certificate Manager certificates.
- For load balancers that support directly referencing Certificate Manager certificates : the load balancer's target proxy can reference up to 100 Certificate Manager certificates.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 223
- Re-rank relevance: N/A

Evidence snippets:
- Load balancer mode URL map type Global external Application Load Balancer Global Classic Application Load Balancer Global (with only a subset of the features supported ) Regional external Application Load Balancer Regional SSL certificates External Application Load Balancers using target HTTPS proxies require private keys and SSL certificates as part of the load balancer configuration.
- Backend service scope The following table indicates which backend service resource and scope is used by external Application Load Balancers: Load balancer mode Backend service resource Global external Application Load Balancer backendServices (global) Classic Application Load Balancer backendServices (global) Regional external Application Load Balancer regionBackendServices (regional) Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- Load balancer mode Health check type Global external Application Load Balancer Global Classic Application Load Balancer Global Regional external Application Load Balancer Regional For more information about health checks, see the following: Health checks overview Creating health checks Firewall rules The load balancer requires the following firewall rules: For the global external Application Load Balancers, an ingress allow rule to permit traffic from Google Front Ends (GFEs) to reach your backends.
- For more information, see the following: Traffic management overview for global external Application Load Balancer Traffic management overview for regional external Application Load Balancer The following table specifies the type of URL map required by external Application Load Balancers in each mode.

### "Set up authorization policies for Application Load Balancers \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- Source ID: `site-docs-reference-required-3`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example command imports the previously created policy file and creates an authorization policy: gcloud network-security authz-policies import my-authz-policy-deny \ --source=authz-policy-deny.yaml \ --location=global Regional If you're using a regional external Application Load Balancer or a regional internal Application Load Balancer, follow these steps to create and import an authorization policy that denies requests based on client certificate principals .
- See the following example: { httpRequest: {8} insertId: "example-id" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" authzPolicyInfo: { policies: [ 0: { details: "name: "projects/12345567/locations/global/authzPolicies/deny-authz-policy-test"" result: "DENIED" } ] result: "DENIED" } backendTargetProjectNumber: "projects/12345567" cacheDecision: [2] remoteIp: "00.100.11.104" statusDetails: "denied by authz policy" } logName: "projects/example-project/logs/requests" receiveTimestamp: "2024-08-28T15:33:56.046651035Z" resource: {2} severity: "WARNING" spanId: "3e1a09a8e5e3e14d" timestamp: "2024-08-28T15:33:55.355042Z" trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509" } If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or cross-region internal Application Load Balancer, proxyStatus is set to error=\"http request error\"; details=\"denied by authz policy\" and the name of the policy is logged in policies .
- See the following example: { httpRequest: {8} insertId: "example-id" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" authzPolicyInfo: { policies: [ 0: { details: "allowed as no deny policies matched request" result: "ALLOWED" } 1: { details: "denied as no allow policies matched request" result: "DENIED" } ] result: "DENIED" } backendTargetProjectNumber: "projects/12345567" remoteIp: "00.100.11.104" statusDetails: "denied by authz policy" } logName: "projects/example-project/logs/requests" receiveTimestamp: "2024-08-28T15:33:56.046651035Z" resource: {2} severity: "WARNING" spanId: "3e1a09a8e5e3e14d" timestamp: "2024-08-28T15:33:55.355042Z" trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509" } If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or cross-region internal Application Load Balancer, proxyStatus is set to error=\"http request error\"; details=\"denied by authz policy\" in the log.
- See the following example: { httpRequest: {8} insertId: "example-id" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" authzPolicyInfo: { policies: [ 0: { details: "allowed as no deny policies matched request" result: "ALLOWED" } 1: { details: "name: "projects/12345567/locations/global/authzPolicies/allow-authz-policy-test"" result: "ALLOWED" } ] result: "ALLOWED" } backendTargetProjectNumber: "projects/12345567" cacheDecision: [2] remoteIp: "00.100.11.104" } logName: "projects/example-project/logs/requests" receiveTimestamp: "2024-08-28T15:33:56.046651035Z" resource: {2} severity: "WARNING" spanId: "3e1a09a8e5e3e14d" timestamp: "2024-08-28T15:33:55.355042Z" trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509" } If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or cross-region internal Application Load Balancer, there is no proxyStatus field in the log.

