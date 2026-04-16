---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.795Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Internal HTTP(S) Load Balancing"
feature_slug: "internal-http-s-load-balancing"
latest_feature_date: "2019-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/load-balancing-overview"
keywords:
  - "internal"
  - "http"
  - "load"
  - "balancing"
  - "provides"
  - "layer"
  - "private"
  - "inside"
---

# Internal HTTP(S) Load Balancing

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Internal HTTP(S) Load Balancing provides Layer 7 load balancing for private services inside a Google Cloud network; Internal HTTP(S) Load Balancing provides Layer 7 load balancing for private services inside a Google Cloud network.

## Extended Definition

Internal HTTP(S) Load Balancing provides Layer 7 load balancing for private services inside a Google Cloud network; Internal HTTP(S) Load Balancing provides Layer 7 load balancing for private services inside a Google Cloud network.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/load-balancing-overview](https://docs.cloud.google.com/load-balancing/docs/load-balancing-overview)

## Supporting Pages

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Table: Supported session affinity settings Product Session affinity options Cross-region internal Application Load Balancer Regional internal Application Load Balancer None ( NONE ) Client IP ( CLIENT IP ) Generated cookie ( GENERATED COOKIE ) Header field ( HEADER FIELD ) HTTP cookie ( HTTP COOKIE ) Stateful cookie-based affinity ( STRONG COOKIE AFFINITY ) Also note: The effective default value of the load balancing locality policy ( localityLbPolicy ) changes according to your session affinity settings.
- The following table shows the target proxy APIs required by internal Application Load Balancers: Load balancer mode Target proxy Cross-region internal Application Load Balancer targetHttpProxies targetHttpsProxies Regional internal Application Load Balancer regionTargetHttpProxies regionTargetHttpsProxies SSL certificates Internal Application Load Balancers using target HTTPS proxies require private keys and SSL certificates as part of the load balancer configuration.
- Backend service scope The following table indicates which backend service resource and scope is used by internal Application Load Balancers: Load balancer mode Backend service resource Cross-region internal Application Load Balancer backendServices Regional internal Application Load Balancer regionBackendServices Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- Load balancer mode Supported backends on a backend service 1 Supports backend buckets Supports Cloud Armor Supports Cloud CDN Supports IAP Supports Service Extensions Instance groups 2 Zonal NEGs 3 Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs Cross-region internal Application Load Balancer Cloud Run Regional internal Application Load Balancer Cloud Run 1 Backends on a backend service must be the same type: all instance groups or all the same type of NEG.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- By default, HTTPS Load Balancing uses a set of SSL features that provides good security and wide compatibility.
- Load balancer mode URL map type Global external Application Load Balancer Global Classic Application Load Balancer Global (with only a subset of the features supported ) Regional external Application Load Balancer Regional SSL certificates External Application Load Balancers using target HTTPS proxies require private keys and SSL certificates as part of the load balancer configuration.
- If you previously created a proxy-only subnet with --purpose=INTERNAL HTTPS LOAD BALANCER , migrate the subnet's purpose to REGIONAL MANAGED PROXY before you can create other Envoy-based load balancers in the same region of the VPC network.
- In the Premium Network Service Tier , this load balancer offers multi-region load balancing, attempts to direct traffic to the closest healthy backend that has capacity, and terminates HTTP(S) traffic as close as possible to your users.

### Cloud Load Balancing overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/load-balancing-overview](https://docs.cloud.google.com/load-balancing/docs/load-balancing-overview)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table provides a high-level overview of the different types of Google Cloud load balancers categorized by the OSI layer on which they operate and whether they are used for external or internal access. lan Cloud Load Balancing External (Accepts internet traffic) Internal (Accepts internal Google Cloud traffic) Application Load Balancers HTTPS Layer 7 load balancing global external regional external classic cross-region internal regional internal Network Load Balancers TCP/SSL/Other Layer 4 load balancing Proxy Network Load Balancers global external regional external classic cross-region internal regional internal Passthrough Network Load Balancers regional external regional internal Application Load Balancers Application Load Balancers are proxy-based Layer 7 load balancers that enable you to run and scale your services behind an anycast IP address.
- This load balancer provides internal proxy-based load balancing of Layer 7 application data.
- Load balancer Deployment mode Traffic type Network service tier Load-balancing scheme 1 Application Load Balancers Global external HTTP or HTTPS Premium Tier EXTERNAL MANAGED Regional external HTTP or HTTPS Premium or Standard Tier EXTERNAL MANAGED Classic HTTP or HTTPS Global in Premium Tier Regional in Standard Tier EXTERNAL 2 Regional internal 3 HTTP or HTTPS Premium Tier INTERNAL MANAGED Cross-region internal HTTP or HTTPS Premium Tier INTERNAL MANAGED Proxy Network Load Balancers Global external TCP with optional SSL offload Premium Tier EXTERNAL MANAGED Regional external TCP Premium or Standard Tier EXTERNAL MANAGED Classic TCP with optional SSL offload Global in Premium Tier Regional in Standard Tier EXTERNAL Regional internal 3 TCP without SSL offload Premium Tier INTERNAL MANAGED Cross-region internal TCP without SSL offload Premium Tier INTERNAL MANAGED Passthrough Network Load Balancers External Always regional TCP, UDP, ESP, GRE, ICMP, and ICMPv6 Premium or Standard Tier EXTERNAL Internal 3 Always regional TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE Premium Tier INTERNAL 1 The load-balancing scheme is an attribute on the forwarding rule and the backend service of a load balancer and indicates whether the load balancer can be used for internal or external traffic.
- Use Layer 7-based load balancing to add request routing decisions based on attributes, such as the HTTP header and the uniform resource identifier.

