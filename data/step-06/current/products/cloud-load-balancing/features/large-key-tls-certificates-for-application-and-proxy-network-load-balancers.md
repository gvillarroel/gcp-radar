---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.681Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Large-key TLS certificates for Application and Proxy Network Load Balancers"
feature_slug: "large-key-tls-certificates-for-application-and-proxy-network-load-balancers"
latest_feature_date: "2025-07-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/tcp"
  - "https://docs.cloud.google.com/load-balancing/docs/ssl-certificates"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "large"
  - "key"
  - "tls"
  - "certificates"
  - "application"
  - "proxy"
  - "network"
  - "load"
---

# Large-key TLS certificates for Application and Proxy Network Load Balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Application Load Balancers and Proxy Network Load Balancers support self-managed TLS certificates with RSA-3072, RSA-4096, and ECDSA P-384 keys.

## Extended Definition

Application Load Balancers and Proxy Network Load Balancers support self-managed TLS certificates with RSA-3072, RSA-4096, and ECDSA P-384 keys.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- [https://docs.cloud.google.com/load-balancing/docs/ssl-certificates](https://docs.cloud.google.com/load-balancing/docs/ssl-certificates)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### "External proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- SSL certificates SSL certificates are only required if you're deploying a global external proxy Network Load Balancer and classic proxy Network Load Balancer with a target SSL proxy.
- Depending on the type of traffic your application needs to handle, you can configure an external proxy Network Load Balancer with either a target TCP proxy or a target SSL proxy.
- Note: Although external proxy Network Load Balancers can support HTTPS traffic, you should use an external Application Load Balancer for HTTPS traffic instead.
- External proxy Network Load Balancers using target SSL proxies require private keys and SSL certificates as part of the load balancer configuration.

### "SSL certificates overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/ssl-certificates](https://docs.cloud.google.com/load-balancing/docs/ssl-certificates)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Load balancer Certificate configuration method Compute Engine SSL certificates Certificate Manager (certificate map) Certificate Manager (individual certificates) Application Load Balancers (target HTTPS proxies) Global external Application Load Balancer Self-managed Google-managed Self-managed Google-managed Classic Application Load Balancer Self-managed Google-managed Self-managed Google-managed Regional external Application Load Balancer Self-managed Google-managed Self-managed Google-managed Regional internal Application Load Balancer Self-managed Google-managed Self-managed Google-managed Cross-region internal Application Load Balancer Self-managed Google-managed Proxy Network Load Balancers (target SSL proxies) Global external proxy Network Load Balancer Self-managed Google-managed Self-managed Google-managed Classic proxy Network Load Balancer Self-managed Google-managed Self-managed Google-managed Configuration method rules Google Cloud enforces the following certificate configuration method rules: For load balancers that support both Compute Engine SSL certificates and Certificate Manager certificate maps : the load balancer's target proxy can simultaneously reference both a certificate map and one or more Compute Engine SSL certificates.
- Multiple SSL certificates An Application Load Balancer or proxy Network Load Balancer can host two or more SSL certificates simultaneously when its target proxy is configured using a supported certificate configuration method .
- Note: This page discusses SSL certificates and encryption in transit between an Application Load Balancer or proxy Network Load Balancer that uses SSL and its clients.
- Certificate configuration methods Google Cloud offers three certificate configuration methods for Application Load Balancers using target HTTPS proxies and proxy Network Load Balancers using target SSL proxies.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Backend VMs or endpoints of all regional external Application Load Balancers in a region and VPC network receive connections from the proxy-only subnet.
- You can use GCE VM IP PORT zonal NEG created and managed by GKE Services as backends for any Application Load Balancer or Proxy Network Load Balancer.
- Regional external Application Load Balancer The forwarding rule's VPC network is the network where the proxy-only subnet has been created.
- You must create one proxy-only subnet in each region of a VPC network where you use regional external Application Load Balancers.

