---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.783Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Cloud Armor for TCP Proxy and SSL Proxy load balancers"
feature_slug: "cloud-armor-for-tcp-proxy-and-ssl-proxy-load-balancers"
latest_feature_date: "2022-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/tcp"
  - "https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb"
  - "https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts"
keywords:
  - "armor"
  - "tcp"
  - "proxy"
  - "ssl"
  - "load"
  - "balancers"
  - "security"
  - "policies"
---

# Cloud Armor for TCP Proxy and SSL Proxy load balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

TCP Proxy and SSL Proxy load balancers support Google Cloud Armor security policies.

## Extended Definition

TCP Proxy and SSL Proxy load balancers support Google Cloud Armor security policies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts)

## Supporting Pages

### "External proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Classic proxy Network Load Balancer Use standalone zonal NEGs Global external proxy Network Load Balancer GCE VM IP PORT type endpoints Regional external proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Global external proxy Network Load Balancers support IPv4 and IPv6 (dual stack) instance groups and zonal NEG backends with GCE VM IP PORT endpoints.
- The following limitations apply only to classic proxy Network Load Balancers and global external proxy Network Load Balancer that are deployed with an SSL target proxy: Classic proxy Network Load Balancers and global external proxy Network Load Balancers do not support client certificate-based authentication, also known as mutual TLS authentication.
- For the classic proxy Network Load Balancers and global external proxy Network Load Balancers : Connection 1, from original client to the load balancer (GFE): Source IP address : the original client (or external IP address if the client is behind a NAT gateway or a forward proxy).
- Connection 2, from the load balancer (proxy-only subnet) to the backend VM or endpoint: Source IP address : an IP address in the proxy-only subnet that is shared among all the Envoy-based load balancers deployed in the same region and network as the load balancer.

### "Set up authorization policies for Application Load Balancers \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- Source ID: `site-docs-reference-required-3`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- The following example command imports the previously created policy file and creates an authorization policy in the LOCATION region: gcloud network-security authz-policies import my-authz-policy-allow \ --source=authz-policy-allow.yaml \ --location= LOCATION Authorization policy based on service accounts or tags You can apply authorization policies based on service accounts or tags only on internal Application Load Balancers.
- See the following example: { httpRequest: {8} insertId: "example-id" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" authzPolicyInfo: { policies: [ 0: { details: "name: "projects/12345567/locations/global/authzPolicies/deny-authz-policy-test"" result: "DENIED" } ] result: "DENIED" } backendTargetProjectNumber: "projects/12345567" cacheDecision: [2] remoteIp: "00.100.11.104" statusDetails: "denied by authz policy" } logName: "projects/example-project/logs/requests" receiveTimestamp: "2024-08-28T15:33:56.046651035Z" resource: {2} severity: "WARNING" spanId: "3e1a09a8e5e3e14d" timestamp: "2024-08-28T15:33:55.355042Z" trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509" } If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or cross-region internal Application Load Balancer, proxyStatus is set to error=\"http request error\"; details=\"denied by authz policy\" and the name of the policy is logged in policies .
- See the following example: { httpRequest: {8} insertId: "example-id" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" authzPolicyInfo: { policies: [ 0: { details: "allowed as no deny policies matched request" result: "ALLOWED" } 1: { details: "denied as no allow policies matched request" result: "DENIED" } ] result: "DENIED" } backendTargetProjectNumber: "projects/12345567" remoteIp: "00.100.11.104" statusDetails: "denied by authz policy" } logName: "projects/example-project/logs/requests" receiveTimestamp: "2024-08-28T15:33:56.046651035Z" resource: {2} severity: "WARNING" spanId: "3e1a09a8e5e3e14d" timestamp: "2024-08-28T15:33:55.355042Z" trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509" } If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or cross-region internal Application Load Balancer, proxyStatus is set to error=\"http request error\"; details=\"denied by authz policy\" in the log.
- See the following example: { httpRequest: {8} insertId: "example-id" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" authzPolicyInfo: { policies: [ 0: { details: "allowed as no deny policies matched request" result: "ALLOWED" } 1: { details: "name: "projects/12345567/locations/global/authzPolicies/allow-authz-policy-test"" result: "ALLOWED" } ] result: "ALLOWED" } backendTargetProjectNumber: "projects/12345567" cacheDecision: [2] remoteIp: "00.100.11.104" } logName: "projects/example-project/logs/requests" receiveTimestamp: "2024-08-28T15:33:56.046651035Z" resource: {2} severity: "WARNING" spanId: "3e1a09a8e5e3e14d" timestamp: "2024-08-28T15:33:55.355042Z" trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509" } If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or cross-region internal Application Load Balancer, there is no proxyStatus field in the log.

### SSL policies overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following load balancers support global SSL policies: Global external Application Load Balancer Classic Application Load Balancer Cross-region internal Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer The following load balancers support regional SSL policies: Regional external Application Load Balancer Regional internal Application Load Balancer Associating an SSL policy with a target HTTPS proxy or target SSL proxy is optional.
- SSL policies are Google Cloud configuration objects that let you control how load balancers terminate client TLS connections.
- Client connections in external Application Load Balancers or external proxy Network Load Balancers (click to enlarge).
- SSL 3.0 or earlier Not supported by load balancers that use SSL policies.

