---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.799Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "IPv6 termination"
feature_slug: "ipv6-termination"
latest_feature_date: "2017-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts"
  - "https://docs.cloud.google.com/load-balancing/docs/features"
  - "https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain"
keywords:
  - "ipv6"
  - "termination"
  - "http"
  - "ssl"
  - "proxy"
  - "tcp"
  - "load"
  - "balancing"
---

# IPv6 termination

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

HTTP(S), SSL Proxy, and TCP Proxy Load Balancing support IPv6 termination for client connections; HTTP(S), SSL Proxy, and TCP Proxy Load Balancing support IPv6 termination for client connections.

## Extended Definition

HTTP(S), SSL Proxy, and TCP Proxy Load Balancing support IPv6 termination for client connections; HTTP(S), SSL Proxy, and TCP Proxy Load Balancing support IPv6 termination for client connections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts](https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts)
- [https://docs.cloud.google.com/load-balancing/docs/features](https://docs.cloud.google.com/load-balancing/docs/features)
- [https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain](https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain)

## Supporting Pages

### "Deliver HTTP and HTTPS content over the same published domain \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain](https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain)
- Source ID: `site-docs-reference-required-3`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute forwarding-rules create ipv4-http \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=ipv4-address \ --global \ --target-http-proxy=http-lb-proxy \ --ports=80 gcloud compute forwarding-rules create ipv4-https \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=ipv4-address \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 After creating the global forwarding rules, it can take several minutes for your configuration to propagate worldwide.
- The proxy is the portion of the load balancer that holds the SSL certificate for HTTPS Load Balancing, so you also load your certificate in this step. gcloud compute target-https-proxies create https-lb-proxy \ --url-map=web-map --ssl-certificates=www-ssl-cert Create two global forwarding rules to route incoming requests to the proxy, one for each of the IP address(es) you created.
- When configuring the external Application Load Balancer, the frontend configuration includes four forwarding rules that use the reserved IP addresses: Name Protocol IP:Port ipv4-http HTTP 34.95.111.204:80 ipv4-https HTTPS 34.95.111.204:443 ipv6-http HTTP [2600:1901:0:b13e::]:80 ipv6-https HTTPS [2600:1901:0:b13e::]:443 For Cloud CDN cache misses, the load balancer distributes requests to the backend origins, based on settings defined in the load balancer's URL map.
- Home Documentation Networking Load Balancing Guides Send feedback Deliver HTTP and HTTPS content over the same published domain Stay organized with collections Save and categorize content based on your preferences.

### "Forwarding rules overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts](https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts)
- Source ID: `site-docs-reference-required-3`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Product Load balancing scheme Target Port requirements Global external Application Load Balancer Regional external Application Load Balancer EXTERNAL MANAGED Target HTTP proxy Target HTTPS proxy Can reference exactly one port from 1-65535 Classic Application Load Balancer EXTERNAL Target HTTP proxy Target HTTPS proxy Can reference exactly one port from 1-65535 Cross-region internal Application Load Balancer Regional internal Application Load Balancer INTERNAL MANAGED Target HTTP proxy Target HTTPS proxy Can reference exactly one port from 1-65535 Global external proxy Network Load Balancer EXTERNAL MANAGED Target TCP proxy Target SSL proxy Can reference exactly one port from 1-65535 Classic proxy Network Load Balancer EXTERNAL Target TCP proxy Target SSL proxy Can reference exactly one port from 1-65535 Regional external proxy Network Load Balancer EXTERNAL MANAGED Target TCP proxy Can reference exactly one port from 1-65535 Regional internal proxy Network Load Balancer INTERNAL MANAGED Target TCP proxy Can reference exactly one port from 1-65535 Cross-region internal proxy Network Load Balancer INTERNAL MANAGED Target TCP proxy Can reference exactly one port from 1-65535 Regional external passthrough Network Load Balancer EXTERNAL Backend service If the forwarding rule protocol is TCP or UDP , you can configure: A list of up to five (contiguous or non-contiguous) ports, or, A single port range (contiguous), or, All ports.
- Product and scheme Target IP address type IP address scope IP address tier Reservable IP address Notes Global external Application Load Balancer EXTERNAL MANAGED Target HTTP proxy Target HTTPS proxy External Global Premium Tier: Global external IP address and forwarding rule Yes, optional IPv6 available Classic Application Load Balancer EXTERNAL Target HTTP proxy Target HTTPS proxy External Regional or global, matching the forwarding rule Premium Tier: Global external IPv4 or IPv6 address and forwarding rule Standard Tier: Regional external IPv4 address and forwarding rule Yes, optional IPv6 available with a global external address (Premium Tier) Regional external Application Load Balancer EXTERNAL MANAGED Target HTTP proxy Target HTTPS proxy External Regional Premium Tier or Standard Tier Yes, optional IPv6 not available Cross-region internal Application Load Balancer INTERNAL MANAGED Target HTTP proxy Target HTTPS proxy Internal Regional Premium Tier Yes, optional Global forwarding rule is configured with a regional IP address within the primary IPv4 address range of the associated regional subnet.
- Global external proxy Network Load Balancer EXTERNAL MANAGED Target SSL proxy Target TCP proxy External Global Premium Tier Yes, optional IPv6 available Classic proxy Network Load Balancer EXTERNAL Target SSL proxy Target TCP proxy External Regional or global, matching the forwarding rule Premium Tier: Global external IPv4 or IPv6 address and forwarding rule Standard Tier: Regional external IPv4 address and forwarding rule Yes, optional IPv6 available with a global external address (Premium Tier) Regional external proxy Network Load Balancer EXTERNAL MANAGED Target TCP proxy External Regional Premium Tier or Standard Tier Yes, optional IPv6 not available Regional internal proxy Network Load Balancer INTERNAL MANAGED Target TCP proxy Internal Regional Premium Tier Yes, optional Forwarding rule address must be within the primary IPv4 address range of the associated subnet Cross-region internal proxy Network Load Balancer INTERNAL MANAGED Target TCP proxy Internal Regional Premium Tier Yes, optional Forwarding rule address must be within the primary IPv4 address range of the associated subnet Regional external passthrough Network Load Balancer EXTERNAL Backend service Target pool External Regional Standard (IPv4 addresses) Premium (IPv4 or IPv6 addresses) Yes, optional IPv6 support requires a backend service-based regional external passthrough Network Load Balancer.
- Product Load balancing scheme IP protocol options Global external Application Load Balancer EXTERNAL MANAGED TCP Classic Application Load Balancer EXTERNAL TCP Regional external Application Load Balancer EXTERNAL MANAGED TCP Cross-region internal Application Load Balancer INTERNAL MANAGED TCP Regional internal Application Load Balancer INTERNAL MANAGED TCP Global external proxy Network Load Balancer EXTERNAL MANAGED TCP or SSL Classic proxy Network Load Balancer EXTERNAL TCP or SSL Regional external proxy Network Load Balancer EXTERNAL MANAGED TCP Regional internal proxy Network Load Balancer INTERNAL MANAGED TCP Cross-region internal proxy Network Load Balancer INTERNAL MANAGED TCP Regional external passthrough Network Load Balancer EXTERNAL TCP, UDP, or L3 DEFAULT Internal passthrough Network Load Balancer INTERNAL TCP, UDP, or L3 DEFAULT Cloud Service Mesh INTERNAL SELF MANAGED TCP IP address specifications The forwarding rule must have an IP address that your customers use to reach your load balancer.

### "Load balancer feature comparison \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/features](https://docs.cloud.google.com/load-balancing/docs/features)
- Source ID: `site-docs-reference-required-3`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Routing and traffic management Filter this table: Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External HTTP or Layer 7 request routing info info Fault injection info (Only global and regional modes) Configurable timeouts info info info info Retries info info Redirects info global classic regional URL rewrites info global classic regional Request and response header transformations (configured on the URL map) info (Only global and regional modes) Traffic splitting info (Only global and regional modes) Traffic mirroring info 1 (Only global and regional modes) (Only regional mode) Outlier detection info (Only global and regional modes) Retry failed requests info (Only global and regional modes) Custom request and response headers (configured on the backend service) (Only global and regional modes) Custom error responses (Only global mode) Service load balancing policy (Only cross-region mode) (Only global mode) (Only cross-region mode) (Only global mode) Connection tracking policy info info 1 Source IP-based traffic steering info 2 1 This feature is not supported with load balancers that use serverless NEG backends.
- Filter this table: Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External Regional internal IPv4 address, accessible in your VPC network Regional internal IPv6 address, accessible in your VPC network info Global external IPv4 address (Includes BYOIP addresses) (Only global and classic 1 mode) (Only global and classic 1 mode) Global external IPv6 address IPv6 termination (Only global and classic 1 mode) IPv6 termination (Only global and classic 1 mode) Regional external IPv4 address (Includes BYOIP addresses) (Only regional and classic 2 mode) (Only regional and classic 2 mode) Regional external IPv6 address (Includes BYOIP addresses) info 1, 3 Configure BYOIP Multiple forwarding rules with the same IP address, each having a unique protocol and port combination Internet accessible 4 Privately accessible info 5 info 5 info 5 Client source IP address preservation X‑Forwarded‑For header X‑Forwarded‑For header PROXY protocol PROXY protocol 1 Supported for Premium Tier.
- Network topologies Filter this table: Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External Network Service Tiers support Premium Tier Global mode: Premium Tier Classic and regional mode: Premium or Standard Tier Premium Tier Global mode: Premium Tier Classic and regional mode: Premium or Standard Tier Premium Tier Premium or Standard Tier Relationships between VPC networks, load balancers, and their backends Load balancer and backends in different VPC networks info info info info Backends can use a Shared VPC network Cross-project service referencing info info (Only global and regional mode) Client access to load balancers Google Cloud or on-premises clients must access the load balancer privately 1 Google Cloud client VMs require external IP addresses or a NAT solution like Cloud NAT to access the load balancer On-premises client VMs require internet access to access the load balancer Google Cloud client VMs can be located in any region info (Only global and classic 2 modes) info info Google Cloud client VMs can be located in any project More topologies Load balancer as next hop info Specify network interface of a backend VM 3 4 3 4 info info 5 Multi-NIC load balancing info info info info info info 1 Google Cloud or on-premises clients must access the load balancer privately by being either in the same VPC network, in a peered VPC network, or in another network connected using Cloud VPN tunnels or Cloud Interconnect attachments (VLANs) 2 Supported for Premium Tier 3 For regional load balancers, the backend VM's nic0 must be in the same network and region used by the forwarding rule.
- Backends Filter this table: Feature Application Load Balancer Proxy Network Load Balancer Passthrough Network Load Balancer Internal External Internal External Internal External Backends can be in multiple regions (Only cross-region mode) (Only global and classic mode) (Only cross-region mode) (Only global and classic mode) Backends must be in one region (Only regional mode) (Only regional and classic mode) (Only regional mode) (Only regional and classic mode) info info Cloud Storage in backend buckets External endpoints in internet NEGs (Only regional mode) ( Global , regional , and classic modes) (Only regional mode) (Only regional mode) Multiple backend services and a URL map Virtual machine backends on Compute Engine Self-managed Kubernetes and GKE Zonal NEGs GCE VM IP PORT endpoints GCE VM IP PORT endpoints GCE VM IP PORT endpoints GCE VM IP PORT endpoints GCE VM IP endpoints GCE VM IP endpoints Private Service Connect NEGs (Only global and regional mode) (Only global and regional mode) Private external endpoints in hybrid NEG backends info info info info Serverless backends info info Dual-stack (IPV4 and IPv6) backends info (Only global and regional modes) info (Only global and regional modes) info info IPv6-only backends info info Health checks For links to reference information, see Health checks .

