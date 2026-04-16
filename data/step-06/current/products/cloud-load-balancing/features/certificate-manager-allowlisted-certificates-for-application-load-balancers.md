---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.772Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Certificate Manager allowlisted certificates for Application Load Balancers"
feature_slug: "certificate-manager-allowlisted-certificates-for-application-load-balancers"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/ssl-certificates"
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "certificate"
  - "manager"
  - "allowlisted"
  - "certificates"
  - "application"
  - "load"
  - "balancers"
  - "mutual"
---

# Certificate Manager allowlisted certificates for Application Load Balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Application Load Balancers support Certificate Manager allowlisted certificates for mutual TLS authentication.

## Extended Definition

Application Load Balancers support Certificate Manager allowlisted certificates for mutual TLS authentication.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/ssl-certificates](https://docs.cloud.google.com/load-balancing/docs/ssl-certificates)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### "SSL certificates overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/ssl-certificates](https://docs.cloud.google.com/load-balancing/docs/ssl-certificates)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Load balancer Certificate configuration method Compute Engine SSL certificates Certificate Manager (certificate map) Certificate Manager (individual certificates) Application Load Balancers (target HTTPS proxies) Global external Application Load Balancer Self-managed Google-managed Self-managed Google-managed Classic Application Load Balancer Self-managed Google-managed Self-managed Google-managed Regional external Application Load Balancer Self-managed Google-managed Self-managed Google-managed Regional internal Application Load Balancer Self-managed Google-managed Self-managed Google-managed Cross-region internal Application Load Balancer Self-managed Google-managed Proxy Network Load Balancers (target SSL proxies) Global external proxy Network Load Balancer Self-managed Google-managed Self-managed Google-managed Classic proxy Network Load Balancer Self-managed Google-managed Self-managed Google-managed Configuration method rules Google Cloud enforces the following certificate configuration method rules: For load balancers that support both Compute Engine SSL certificates and Certificate Manager certificate maps : the load balancer's target proxy can simultaneously reference both a certificate map and one or more Compute Engine SSL certificates.
- For load balancers that support both Compute Engine SSL certificates and directly-attached Certificate Manager certificates : the load balancer's target proxy can only be configured to reference up to 15 Compute Engine SSL certificates or up to 100 Certificate Manager certificates, not a combination of both.
- Certificate selection process The following certificate selection process applies to load balancers whose target proxies reference multiple Compute Engine SSL certificates or multiple Certificate Manager certificates.
- For load balancers that support directly referencing Certificate Manager certificates : the load balancer's target proxy can reference up to 100 Certificate Manager certificates.

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Internal Application Load Balancers aren't compatible with the following features: Cloud CDN Compute Engine Google-managed SSL certificates ( Certificate Manager Google-managed certificates are supported) To use Certificate Manager certificates with internal Application Load Balancers, you must use either the API or the gcloud CLI.
- The following table specifies the type of SSL certificates required by internal Application Load Balancers in each mode: Load balancer mode SSL certificate type Cross-region internal Application Load Balancer Certificate Manager self-managed certificates and Google-managed certificates.
- The following table shows the target proxy APIs required by internal Application Load Balancers: Load balancer mode Target proxy Cross-region internal Application Load Balancer targetHttpProxies targetHttpsProxies Regional internal Application Load Balancer regionTargetHttpProxies regionTargetHttpsProxies SSL certificates Internal Application Load Balancers using target HTTPS proxies require private keys and SSL certificates as part of the load balancer configuration.
- Regional internal Application Load Balancer Compute Engine regional SSL certificates Certificate Manager regional self-managed certificates and Google-managed certificates.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Load balancer mode URL map type Global external Application Load Balancer Global Classic Application Load Balancer Global (with only a subset of the features supported ) Regional external Application Load Balancer Regional SSL certificates External Application Load Balancers using target HTTPS proxies require private keys and SSL certificates as part of the load balancer configuration.
- For details, see Certificates and Google Cloud load balancers in the SSL certificates overview.
- Backend service scope The following table indicates which backend service resource and scope is used by external Application Load Balancers: Load balancer mode Backend service resource Global external Application Load Balancer backendServices (global) Classic Application Load Balancer backendServices (global) Regional external Application Load Balancer regionBackendServices (regional) Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- Load balancer mode Health check type Global external Application Load Balancer Global Classic Application Load Balancer Global Regional external Application Load Balancer Regional For more information about health checks, see the following: Health checks overview Creating health checks Firewall rules The load balancer requires the following firewall rules: For the global external Application Load Balancers, an ingress allow rule to permit traffic from Google Front Ends (GFEs) to reach your backends.

