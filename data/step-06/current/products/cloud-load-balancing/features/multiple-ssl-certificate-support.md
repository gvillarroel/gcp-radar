---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.799Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Multiple SSL certificate support"
feature_slug: "multiple-ssl-certificate-support"
latest_feature_date: "2017-09-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/ssl-certificates"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
keywords:
  - "multiple"
  - "ssl"
  - "certificate"
  - "load"
  - "balancers"
  - "can"
  - "present"
  - "certificates"
---

# Multiple SSL certificate support

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Load balancers can present multiple SSL certificates to support different domains and certificate selections.

## Extended Definition

Load balancers can present multiple SSL certificates to support different domains and certificate selections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/ssl-certificates](https://docs.cloud.google.com/load-balancing/docs/ssl-certificates)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)

## Supporting Pages

### "SSL certificates overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/ssl-certificates](https://docs.cloud.google.com/load-balancing/docs/ssl-certificates)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Certificate selection process The following certificate selection process applies to load balancers whose target proxies reference multiple Compute Engine SSL certificates or multiple Certificate Manager certificates.
- Load balancer Certificate configuration method Compute Engine SSL certificates Certificate Manager (certificate map) Certificate Manager (individual certificates) Application Load Balancers (target HTTPS proxies) Global external Application Load Balancer Self-managed Google-managed Self-managed Google-managed Classic Application Load Balancer Self-managed Google-managed Self-managed Google-managed Regional external Application Load Balancer Self-managed Google-managed Self-managed Google-managed Regional internal Application Load Balancer Self-managed Google-managed Self-managed Google-managed Cross-region internal Application Load Balancer Self-managed Google-managed Proxy Network Load Balancers (target SSL proxies) Global external proxy Network Load Balancer Self-managed Google-managed Self-managed Google-managed Classic proxy Network Load Balancer Self-managed Google-managed Self-managed Google-managed Configuration method rules Google Cloud enforces the following certificate configuration method rules: For load balancers that support both Compute Engine SSL certificates and Certificate Manager certificate maps : the load balancer's target proxy can simultaneously reference both a certificate map and one or more Compute Engine SSL certificates.
- For load balancers that support both Compute Engine SSL certificates and directly-attached Certificate Manager certificates : the load balancer's target proxy can only be configured to reference up to 15 Compute Engine SSL certificates or up to 100 Certificate Manager certificates, not a combination of both.
- Multiple SSL certificates An Application Load Balancer or proxy Network Load Balancer can host two or more SSL certificates simultaneously when its target proxy is configured using a supported certificate configuration method .

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Load balancer mode URL map type Global external Application Load Balancer Global Classic Application Load Balancer Global (with only a subset of the features supported ) Regional external Application Load Balancer Regional SSL certificates External Application Load Balancers using target HTTPS proxies require private keys and SSL certificates as part of the load balancer configuration.
- For details, see Certificates and Google Cloud load balancers in the SSL certificates overview.
- If you have multiple frontend rules representing IPv4 and IPv6, make sure to disable HTTP/3 for each rule. gcloud: HTTPS Before you run this command, you must create an SSL certificate resource for each certificate. gcloud compute target-https-proxies create HTTPS PROXY NAME \ --global \ --quic-override= QUIC SETTING Replace QUIC SETTING with one of the following: NONE (default): allows Google to control when HTTP/3 is advertised.
- You can configure an active-active failover configuration where you deploy multiple individual regional external Application Load Balancers in regions that you determine best support traffic for your application.

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- The following table shows the target proxy APIs required by internal Application Load Balancers: Load balancer mode Target proxy Cross-region internal Application Load Balancer targetHttpProxies targetHttpsProxies Regional internal Application Load Balancer regionTargetHttpProxies regionTargetHttpsProxies SSL certificates Internal Application Load Balancers using target HTTPS proxies require private keys and SSL certificates as part of the load balancer configuration.
- Internal Application Load Balancers aren't compatible with the following features: Cloud CDN Compute Engine Google-managed SSL certificates ( Certificate Manager Google-managed certificates are supported) To use Certificate Manager certificates with internal Application Load Balancers, you must use either the API or the gcloud CLI.
- The following table specifies the type of SSL certificates required by internal Application Load Balancers in each mode: Load balancer mode SSL certificate type Cross-region internal Application Load Balancer Certificate Manager self-managed certificates and Google-managed certificates.
- For serverless NEGs on a backend service: 60 minutes For all other backend types on a backend service: 30 seconds Client HTTP keepalive timeout The maximum amount of time that the TCP connection between a client and the load balancer's managed Envoy proxy can be idle. (The same TCP connection might be used for multiple HTTP requests.) 610 seconds Backend HTTP keepalive timeout The maximum amount of time that the TCP connection between the load balancer's managed Envoy proxy and a backend can be idle. (The same TCP connection might be used for multiple HTTP requests.) 10 minutes (600 seconds) Backend service timeout The configurable backend service timeout represents the maximum amount of time that the load balancer waits for your backend to process an HTTP request and return the corresponding HTTP response.

