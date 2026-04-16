---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.782Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Cloud Run backends for regional HTTP(S) load balancers"
feature_slug: "cloud-run-backends-for-regional-http-s-load-balancers"
latest_feature_date: "2022-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
  - "https://docs.cloud.google.com/load-balancing/docs/network"
  - "https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb"
keywords:
  - "run"
  - "backends"
  - "regional"
  - "http"
  - "load"
  - "balancers"
  - "external"
  - "internal"
---

# Cloud Run backends for regional HTTP(S) load balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Regional external and regional internal HTTP(S) load balancers support Cloud Run services as backends through serverless NEGs.

## Extended Definition

Regional external and regional internal HTTP(S) load balancers support Cloud Run services as backends through serverless NEGs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)

## Supporting Pages

### "Internal passthrough Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- Source ID: `site-docs-reference-required-4`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An internal passthrough Network Load Balancer doesn't support the following: Backend VMs in multiple regions Balancing traffic that originates from the internet, unless you're using it with an external load balancer IPv6 packets with fragmented headers Internal IP address Internal passthrough Network Load Balancers support IPv4-only, dual-stack, and IPv6-only subnets.
- You can use either instance groups or zonal NEGs, but not a combination of both, as backends for an internal passthrough Network Load Balancer: If you choose instance groups, you can use unmanaged instance groups, zonal managed instance groups, regional managed instance groups, or a combination of instance group types.
- Because internal passthrough Network Load Balancers aren't proxies, they pass traffic to backends on the same protocol and port.
- For more information about eligible backends, see Traffic distribution for internal passthrough Network Load Balancers .

### "Set up authorization policies for Application Load Balancers \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- Source ID: `site-docs-reference-required-3`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the following example: { httpRequest: {8} insertId: "example-id" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" authzPolicyInfo: { policies: [ 0: { details: "name: "projects/12345567/locations/global/authzPolicies/deny-authz-policy-test"" result: "DENIED" } ] result: "DENIED" } backendTargetProjectNumber: "projects/12345567" cacheDecision: [2] remoteIp: "00.100.11.104" statusDetails: "denied by authz policy" } logName: "projects/example-project/logs/requests" receiveTimestamp: "2024-08-28T15:33:56.046651035Z" resource: {2} severity: "WARNING" spanId: "3e1a09a8e5e3e14d" timestamp: "2024-08-28T15:33:55.355042Z" trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509" } If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or cross-region internal Application Load Balancer, proxyStatus is set to error=\"http request error\"; details=\"denied by authz policy\" and the name of the policy is logged in policies .
- See the following example: { httpRequest: {8} insertId: "example-id" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" authzPolicyInfo: { policies: [ 0: { details: "allowed as no deny policies matched request" result: "ALLOWED" } 1: { details: "denied as no allow policies matched request" result: "DENIED" } ] result: "DENIED" } backendTargetProjectNumber: "projects/12345567" remoteIp: "00.100.11.104" statusDetails: "denied by authz policy" } logName: "projects/example-project/logs/requests" receiveTimestamp: "2024-08-28T15:33:56.046651035Z" resource: {2} severity: "WARNING" spanId: "3e1a09a8e5e3e14d" timestamp: "2024-08-28T15:33:55.355042Z" trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509" } If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or cross-region internal Application Load Balancer, proxyStatus is set to error=\"http request error\"; details=\"denied by authz policy\" in the log.
- See the following example: { httpRequest: {8} insertId: "example-id" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" authzPolicyInfo: { policies: [ 0: { details: "allowed as no deny policies matched request" result: "ALLOWED" } 1: { details: "name: "projects/12345567/locations/global/authzPolicies/allow-authz-policy-test"" result: "ALLOWED" } ] result: "ALLOWED" } backendTargetProjectNumber: "projects/12345567" cacheDecision: [2] remoteIp: "00.100.11.104" } logName: "projects/example-project/logs/requests" receiveTimestamp: "2024-08-28T15:33:56.046651035Z" resource: {2} severity: "WARNING" spanId: "3e1a09a8e5e3e14d" timestamp: "2024-08-28T15:33:55.355042Z" trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509" } If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or cross-region internal Application Load Balancer, there is no proxyStatus field in the log.
- The following example command imports the previously created policy file and creates an authorization policy: gcloud network-security authz-policies import my-authz-policy-custom \ --source=authz-policy-custom.yaml \ --location=global Regional If you're using a regional external Application Load Balancer or a regional internal Application Load Balancer, follow these steps to create and import an authorization policy: Create an authorization policy YAML file to delegate certain requests to an external service.

### "Backend service-based regional external passthrough Network Load Balancer\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Location of load balancing resources 1 Required location of IP address resource Host project Host project Service project Service project or host project 1 Includes the forwarding rule, backend service, health check, and backends (NEGs and managed or unmanaged instance groups) Traffic distribution Regional external passthrough Network Load Balancers support a variety of traffic distribution customization options, including session affinity, connection tracking, weighted load balancing, and failover.
- Regional external passthrough Network Load Balancers are regional, Layer 4 load balancers that distribute external traffic among backends (instance groups or network endpoint groups (NEGs)) in the same region as the load balancer.
- Firewall rules Because regional external passthrough Network Load Balancers are passthrough load balancers, you control access to the load balancer's backends using Google Cloud firewall rules.
- Because regional external passthrough Network Load Balancers are not proxies, they pass traffic to backends on the same protocol and ports, if the packet carries port information.

