---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.795Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Multiple domains for Google-managed SSL certificates"
feature_slug: "multiple-domains-for-google-managed-ssl-certificates"
latest_feature_date: "2019-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "multiple"
  - "domains"
  - "managed"
  - "ssl"
  - "certificates"
  - "can"
  - "secure"
  - "single"
---

# Multiple domains for Google-managed SSL certificates

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Google-managed SSL certificates can secure multiple domains with a single certificate resource.

## Extended Definition

Google-managed SSL certificates can secure multiple domains with a single certificate resource.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- Disable managed SSL certificates To disable managed SSL certificates: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain and click Disable managed security .
- If you are using subdomains and the certificate is issued by Let's Encrypt, there is a limit of 50 managed certificates per week for each base domain.
- For more information, see the following pages: Using Google-managed SSL certificates Using self-managed SSL certificates SSL policies Note the following limitation: We recommend that you use ingress controls so that your app only receives requests sent from the load balancer (and the VPC if you use it).

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- Disable managed SSL certificates To disable managed SSL certificates: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain and click Disable managed security .
- If you are using subdomains and the certificate is issued by Let's Encrypt, there is a limit of 50 managed certificates per week for each base domain.
- For more information, see the following pages: Using Google-managed SSL certificates Using self-managed SSL certificates SSL policies Note the following limitation: We recommend that you use ingress controls so that your app only receives requests sent from the load balancer (and the VPC if you use it).

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Shared VPC lets organizations connect resources from multiple projects to a common VPC network so that they can communicate with each other securely and efficiently by using internal IP addresses from that network.
- When using autoscaling for a managed instance group that's a backend for two or more backend services, configure the instance group's autoscaling policy to use multiple signals .
- When there are multiple instances of the same header key (for example, Via ), the load balancer combines their values into a single comma-separated list for a single header key.
- Certificates with uppercase characters in domains are returned only when set as the primary certificate in the target proxy.

