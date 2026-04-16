---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.672Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "FIPS-compliant SSL policies"
feature_slug: "fips-compliant-ssl-policies"
latest_feature_date: "2026-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts"
  - "https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "fips"
  - "compliant"
  - "ssl"
  - "policies"
  - "application"
  - "load"
  - "balancers"
  - "proxy"
---

# FIPS-compliant SSL policies

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Application Load Balancers and proxy Network Load Balancers support predefined SSL policies that restrict TLS configuration to FIPS-validated cryptographic modules and ciphers.

## Extended Definition

Application Load Balancers and proxy Network Load Balancers support predefined SSL policies that restrict TLS configuration to FIPS-validated cryptographic modules and ciphers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts)
- [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### SSL policies overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following load balancers support global SSL policies: Global external Application Load Balancer Classic Application Load Balancer Cross-region internal Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer The following load balancers support regional SSL policies: Regional external Application Load Balancer Regional internal Application Load Balancer Associating an SSL policy with a target HTTPS proxy or target SSL proxy is optional.
- Client connections in external Application Load Balancers or external proxy Network Load Balancers (click to enlarge).
- SSL policies are Google Cloud configuration objects that let you control how load balancers terminate client TLS connections.
- SSL 3.0 or earlier Not supported by load balancers that use SSL policies.

### "Set up authorization policies for Application Load Balancers \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- Source ID: `site-docs-reference-required-3`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- See the following example: { httpRequest: {8} insertId: "example-id" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" authzPolicyInfo: { policies: [ 0: { details: "name: "projects/12345567/locations/global/authzPolicies/deny-authz-policy-test"" result: "DENIED" } ] result: "DENIED" } backendTargetProjectNumber: "projects/12345567" cacheDecision: [2] remoteIp: "00.100.11.104" statusDetails: "denied by authz policy" } logName: "projects/example-project/logs/requests" receiveTimestamp: "2024-08-28T15:33:56.046651035Z" resource: {2} severity: "WARNING" spanId: "3e1a09a8e5e3e14d" timestamp: "2024-08-28T15:33:55.355042Z" trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509" } If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or cross-region internal Application Load Balancer, proxyStatus is set to error=\"http request error\"; details=\"denied by authz policy\" and the name of the policy is logged in policies .
- See the following example: { httpRequest: {8} insertId: "example-id" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" authzPolicyInfo: { policies: [ 0: { details: "allowed as no deny policies matched request" result: "ALLOWED" } 1: { details: "denied as no allow policies matched request" result: "DENIED" } ] result: "DENIED" } backendTargetProjectNumber: "projects/12345567" remoteIp: "00.100.11.104" statusDetails: "denied by authz policy" } logName: "projects/example-project/logs/requests" receiveTimestamp: "2024-08-28T15:33:56.046651035Z" resource: {2} severity: "WARNING" spanId: "3e1a09a8e5e3e14d" timestamp: "2024-08-28T15:33:55.355042Z" trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509" } If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or cross-region internal Application Load Balancer, proxyStatus is set to error=\"http request error\"; details=\"denied by authz policy\" in the log.
- See the following example: { httpRequest: {8} insertId: "example-id" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" authzPolicyInfo: { policies: [ 0: { details: "allowed as no deny policies matched request" result: "ALLOWED" } 1: { details: "name: "projects/12345567/locations/global/authzPolicies/allow-authz-policy-test"" result: "ALLOWED" } ] result: "ALLOWED" } backendTargetProjectNumber: "projects/12345567" cacheDecision: [2] remoteIp: "00.100.11.104" } logName: "projects/example-project/logs/requests" receiveTimestamp: "2024-08-28T15:33:56.046651035Z" resource: {2} severity: "WARNING" spanId: "3e1a09a8e5e3e14d" timestamp: "2024-08-28T15:33:55.355042Z" trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509" } If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or cross-region internal Application Load Balancer, there is no proxyStatus field in the log.
- The following example command imports the previously created policy file and creates an authorization policy in the LOCATION region: gcloud network-security authz-policies import my-authz-policy-allow \ --source=authz-policy-allow.yaml \ --location= LOCATION Authorization policy based on service accounts or tags You can apply authorization policies based on service accounts or tags only on internal Application Load Balancers.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- TLS 1.3 early data is supported on the target HTTPS proxy of the following external Application Load Balancers for both HTTPS over TCP (HTTP/1.1, HTTP/2) and HTTP/3 over QUIC: Global external Application Load Balancers Classic Application Load Balancers TLS 1.3 was defined in RFC 8446 and introduces the concept of early data , also known as zero-round-trip time (0-RTT) data , which can improve application performance for resumed connections by 30 to 50%.
- Architecture The following resources are required for an external Application Load Balancer deployment: For regional external Application Load Balancers only , a proxy-only subnet is used to send connections from the load balancer to the backends.
- Regional external Application Load Balancers that use hybrid NEG backends are an exception to this rule because their health checks originate from the proxy-only subnet instead.
- Backend VMs or endpoints of all regional external Application Load Balancers in a region and VPC network receive connections from the proxy-only subnet.

