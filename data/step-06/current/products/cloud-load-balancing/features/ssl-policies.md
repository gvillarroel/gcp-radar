---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.798Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "SSL policies"
feature_slug: "ssl-policies"
latest_feature_date: "2018-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/features"
keywords:
  - "ssl"
  - "policies"
  - "https"
  - "proxy"
  - "load"
  - "balancing"
  - "configurable"
  - "control"
---

# SSL policies

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

HTTPS and SSL Proxy Load Balancing support configurable SSL policies to control TLS versions and cipher suites; HTTPS and SSL Proxy Load Balancing support configurable SSL policies to control TLS versions and cipher suites.

## Extended Definition

HTTPS and SSL Proxy Load Balancing support configurable SSL policies to control TLS versions and cipher suites; HTTPS and SSL Proxy Load Balancing support configurable SSL policies to control TLS versions and cipher suites.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/features](https://docs.cloud.google.com/load-balancing/docs/features)

## Supporting Pages

### SSL policies overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following load balancers support global SSL policies: Global external Application Load Balancer Classic Application Load Balancer Cross-region internal Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer The following load balancers support regional SSL policies: Regional external Application Load Balancer Regional internal Application Load Balancer Associating an SSL policy with a target HTTPS proxy or target SSL proxy is optional.
- Behavior when no SSL policy is specified If you don't associate an SSL policy with a target HTTPS proxy or target SSL proxy, the load balancer operates as if you had associated an SSL policy with the following settings: the COMPATIBLE profile selected, and the minimum TLS version set to 1.0 TLS version support Note that a profile can indirectly restrict the versions of TLS that the load balancer can negotiate.
- Only the following load balancer certificate digital signatures are allowed: PKCS#1/PSS with SHA-256 , SHA-384 or SHA-512 ECDSA with P-256 or P-384 and SHA-256 or SHA-384 Limitations Disabling particular SSL versions or ciphers can result in some earlier clients being unable to connect to your proxy by using HTTPS or SSL.
- Home Documentation Networking Load Balancing Guides Send feedback SSL policies overview Stay organized with collections Save and categorize content based on your preferences.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- For HTTPS load balancing, the target HTTPS proxy uses SSL certificates to prove its identity to clients.
- To update the load balancer, click Update . gcloud Configure the TLS early data mode on the target HTTPS proxy of an Application Load Balancer. gcloud compute target-https-proxies update TARGET HTTPS PROXY \ --tls-early-data= TLS EARLY DATA MODE Replace the following: TARGET HTTPS PROXY : the target HTTPS proxy of your load balancer TLS EARLY DATA MODE : STRICT , PERMISSIVE , DISABLED , or UNRESTRICTED API PATCH https://compute.googleapis.com/compute/v1/projects/{project}/global/targetHttpsProxies/ TARGET HTTPS PROXY { "tlsEarlyData":" TLS EARLY DATA MODE ", "fingerprint": " FINGERPRINT " } Replace the following: TARGET HTTPS PROXY : the target HTTPS proxy of your load balancer TLS EARLY DATA MODE : STRICT , PERMISSIVE , DISABLED , or UNRESTRICTED FINGERPRINT : a Base64 encoded string.
- Configured on the backend service or backend bucket Regional external Application Load Balancer Regional HTTP , Regional HTTPS X-Forwarded-Proto : [http https] (requests only) Via: 1.1 google (requests and responses) X-Forwarded-For : [<supplied-value>,]<client-ip>,<load-balancer-ip> (see X-Forwarded-For header ) (requests only) Configured in the URL map Note: In accordance with RFC 2616 , the following hop-by-hop headers aren't propagated by the target proxy: Connection , Keep-Alive , Proxy-Authenticate , Proxy-Authorization , TE , Trailers , Transfer-Encoding , and Upgrade .
- Load balancer mode Target proxy types Proxy-added headers Custom headers supported Global external Application Load Balancer Global HTTP , Global HTTPS The proxies set HTTP request/response headers as follows: Via: 1.1 google (requests and responses) X-Forwarded-Proto : [http https] (requests only) X-Forwarded-For : [<supplied-value>,]<client-ip>,<load-balancer-ip> (see X-Forwarded-For header ) (requests only) The proxies also set the X-Cloud-Trace-Context header if it is not already present.

### "Load balancer feature comparison \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/features](https://docs.cloud.google.com/load-balancing/docs/features)
- Source ID: `site-docs-reference-required-3`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Routing and traffic management Filter this table: Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External HTTP or Layer 7 request routing info info Fault injection info (Only global and regional modes) Configurable timeouts info info info info Retries info info Redirects info global classic regional URL rewrites info global classic regional Request and response header transformations (configured on the URL map) info (Only global and regional modes) Traffic splitting info (Only global and regional modes) Traffic mirroring info 1 (Only global and regional modes) (Only regional mode) Outlier detection info (Only global and regional modes) Retry failed requests info (Only global and regional modes) Custom request and response headers (configured on the backend service) (Only global and regional modes) Custom error responses (Only global mode) Service load balancing policy (Only cross-region mode) (Only global mode) (Only cross-region mode) (Only global mode) Connection tracking policy info info 1 Source IP-based traffic steering info 2 1 This feature is not supported with load balancers that use serverless NEG backends.
- Filter this table: Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External Balancing mode: connection Balancing mode: custom metrics 1 1 Balancing mode: in-flight ( Preview ) 1 1 (Only global and regional modes) Balancing mode: rate (requests per second) 1 1 Balancing mode: backend utilization (instance group backends only) 1 1 Load balancing locality policy info info (Only global and regional modes) info info (Only global and regional modes) info Configurable maximum capacity per backend instance group or NEG 1 1 Circuit breaking 1 (Only regional mode) (Only regional mode) Prefers region closest to client on the internet 2 (Only global and classic 3 modes) (Only global and classic 3 modes) Prefers region closest to the load balancer 2 (Only global and classic 3 modes) (Only classic 3 modes) Weight-based load balancing (Only global and regional modes) 4 info Within zone/region load balancing policy info info info info info info 1 This feature is not supported with load balancers that use serverless NEG backends.
- Filter this table: Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External gRPC health checks (without TLS) 2 2 2 2 1 gRPC health checks (with TLS) 2 2 2 2 1 HTTP health checks 3 (Only classic and regional mode) 1 HTTPS health checks 3 (Only classic and regional mode) 1 HTTP/2 health checks (Only classic and regional mode) 1 SSL health checks 1 TCP health checks 1 Configurable health checks Configurable request path (HTTP, HTTPS, HTTP/2) Configurable request string or path (TCP or SSL) Configurable expected response string 1 Distributed Envoy health checks (Only regional mode) (Only regional mode) 1 This table documents health checks used by backend service-based regional external passthrough Network Load Balancers.
- Network topologies Filter this table: Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External Network Service Tiers support Premium Tier Global mode: Premium Tier Classic and regional mode: Premium or Standard Tier Premium Tier Global mode: Premium Tier Classic and regional mode: Premium or Standard Tier Premium Tier Premium or Standard Tier Relationships between VPC networks, load balancers, and their backends Load balancer and backends in different VPC networks info info info info Backends can use a Shared VPC network Cross-project service referencing info info (Only global and regional mode) Client access to load balancers Google Cloud or on-premises clients must access the load balancer privately 1 Google Cloud client VMs require external IP addresses or a NAT solution like Cloud NAT to access the load balancer On-premises client VMs require internet access to access the load balancer Google Cloud client VMs can be located in any region info (Only global and classic 2 modes) info info Google Cloud client VMs can be located in any project More topologies Load balancer as next hop info Specify network interface of a backend VM 3 4 3 4 info info 5 Multi-NIC load balancing info info info info info info 1 Google Cloud or on-premises clients must access the load balancer privately by being either in the same VPC network, in a peered VPC network, or in another network connected using Cloud VPN tunnels or Cloud Interconnect attachments (VLANs) 2 Supported for Premium Tier 3 For regional load balancers, the backend VM's nic0 must be in the same network and region used by the forwarding rule.

