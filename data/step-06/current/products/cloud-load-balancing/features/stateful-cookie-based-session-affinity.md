---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.765Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Stateful cookie-based session affinity"
feature_slug: "stateful-cookie-based-session-affinity"
latest_feature_date: "2024-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https"
  - "https://docs.cloud.google.com/load-balancing/docs/features"
keywords:
  - "stateful"
  - "cookie"
  - "based"
  - "session"
  - "affinity"
  - "application"
  - "load"
  - "balancers"
---

# Stateful cookie-based session affinity

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Application Load Balancers except the classic Application Load Balancer support stateful session affinity using load balancer-generated HTTP cookies; Application Load Balancers except the classic Application Load Balancer can use stateful cookie-based session affinity to persist clients to backends with HTTP cookies.

## Extended Definition

Application Load Balancers except the classic Application Load Balancer support stateful session affinity using load balancer-generated HTTP cookies; Application Load Balancers except the classic Application Load Balancer can use stateful cookie-based session affinity to persist clients to backends with HTTP cookies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- [https://docs.cloud.google.com/load-balancing/docs/features](https://docs.cloud.google.com/load-balancing/docs/features)

## Supporting Pages

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Table: Supported session affinity settings Product Session affinity options Cross-region internal Application Load Balancer Regional internal Application Load Balancer None ( NONE ) Client IP ( CLIENT IP ) Generated cookie ( GENERATED COOKIE ) Header field ( HEADER FIELD ) HTTP cookie ( HTTP COOKIE ) Stateful cookie-based affinity ( STRONG COOKIE AFFINITY ) Also note: The effective default value of the load balancing locality policy ( localityLbPolicy ) changes according to your session affinity settings.
- Types of session affinity The session affinity for internal Application Load Balancers can be classified into one of the following categories: Hash-based session affinity ( NONE , CLIENT IP ) HTTP header-based session affinity ( HEADER FIELD ) Cookie-based session affinity ( GENERATED COOKIE , HTTP COOKIE , STRONG COOKIE AFFINITY ) Hash-based session affinity For hash-based session affinity, the load balancer uses the consistent hashing algorithm to select an eligible backend.
- All Application Load Balancers, except for classic Application Load Balancers, support stateful cookie-based affinity.
- Cookie-based session affinity Cookie-based session affinity can be of the following types: Generated cookie affinity HTTP cookie affinity Stateful cookie-based session affinity Generated cookie affinity When you use generated cookie-based affinity ( GENERATED COOKIE ), the load balancer includes an HTTP cookie in the Set-Cookie header in response to the initial HTTP request.

### "Request routing to a multi-region classic Application Load Balancer \_|\_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PATCH https : // www . googleapis . com / compute / v1 / projects /[ PROJECT ID ]/ global / backendServices / video - backend - service { "sessionAffinity" : "GENERATED COOKIE" } Removing external IP addresses from backend VMs External Application Load Balancers communicate with backends using their internal IP addresses and special load balancer routes .
- Enabling session affinity These procedures demonstrate how to configure a different type of session affinity for each backend service: Client IP address session affinity for web-backend-service HTTP cookie session affinity for video-backend-service When client IP affinity is enabled, the load balancer directs a particular client's requests to the same backend VM based on a hash created from the client's IP address.
- To enable generated cookie session affinity for video-backend-service : In the Google Cloud console, go to the Load balancing page.
- For external Application Load Balancers, the cookie is named GCLB .

### "Load balancer feature comparison \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/features](https://docs.cloud.google.com/load-balancing/docs/features)
- Source ID: `site-docs-reference-required-3`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External Headers (Only global and regional mode) HTTP cookie (Only global and regional) Generated cookie Stateful cookie (Only global and regional) Client IP, no destination (1-tuple) CLIENT IP NO DESTINATION info Client IP, Destination IP (2-tuple) CLIENT IP 1 1 Client IP, Destination IP, Protocol (3-tuple) CLIENT IP PROTO 1 1 Client IP, Client Port, Destination IP, Destination Port, Protocol (5-tuple) CLIENT IP PORT PROTO 1,2 1,2 None (5-tuple) NONE 3 3 1 Setting session affinity is only meaningful if the protocol uses sessions—for example, TCP.
- Monitoring Filter this table: Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External Byte count metrics info info info info info info Packet count metrics info info Round trip time (RTT) metrics info info Request latency metrics info info info Connection count metrics info info HTTP request count metrics info info Logging Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External Log type HTTP request and response attribute logs info info Connection attribute logs info info info info Log fields HTTP request info global, classic regional String that explains the proxy response proxyStatus statusDetails proxyStatus TLS metadata between client and load balancer info (Only regional mode) Connection attributes: 5-tuple, bytes/packets sent and received info info info VM instance details and GKE details info (Only regional mode) info info Client VPC or location details info info Network tier details info Labels describing the load balancer resource info global, classic regional info info info info Session affinity For detailed information, see Session affinity .
- Routing and traffic management Filter this table: Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External HTTP or Layer 7 request routing info info Fault injection info (Only global and regional modes) Configurable timeouts info info info info Retries info info Redirects info global classic regional URL rewrites info global classic regional Request and response header transformations (configured on the URL map) info (Only global and regional modes) Traffic splitting info (Only global and regional modes) Traffic mirroring info 1 (Only global and regional modes) (Only regional mode) Outlier detection info (Only global and regional modes) Retry failed requests info (Only global and regional modes) Custom request and response headers (configured on the backend service) (Only global and regional modes) Custom error responses (Only global mode) Service load balancing policy (Only cross-region mode) (Only global mode) (Only cross-region mode) (Only global mode) Connection tracking policy info info 1 Source IP-based traffic steering info 2 1 This feature is not supported with load balancers that use serverless NEG backends.
- Filter this table: Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External Balancing mode: connection Balancing mode: custom metrics 1 1 Balancing mode: in-flight ( Preview ) 1 1 (Only global and regional modes) Balancing mode: rate (requests per second) 1 1 Balancing mode: backend utilization (instance group backends only) 1 1 Load balancing locality policy info info (Only global and regional modes) info info (Only global and regional modes) info Configurable maximum capacity per backend instance group or NEG 1 1 Circuit breaking 1 (Only regional mode) (Only regional mode) Prefers region closest to client on the internet 2 (Only global and classic 3 modes) (Only global and classic 3 modes) Prefers region closest to the load balancer 2 (Only global and classic 3 modes) (Only classic 3 modes) Weight-based load balancing (Only global and regional modes) 4 info Within zone/region load balancing policy info info info info info info 1 This feature is not supported with load balancers that use serverless NEG backends.

