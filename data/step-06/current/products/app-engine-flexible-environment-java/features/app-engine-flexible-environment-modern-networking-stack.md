---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:33.499Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "App Engine flexible environment modern networking stack"
feature_slug: "app-engine-flexible-environment-modern-networking-stack"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
  - "https://docs.cloud.google.com/appengine/docs/flexible/cloud-profiler"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "modern"
  - "networking"
  - "stack"
  - "higher"
---

# App Engine flexible environment modern networking stack

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

A modern networking stack with higher throughput was introduced for the App Engine flexible environment.

## Extended Definition

A modern networking stack with higher throughput was introduced for the App Engine flexible environment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- [https://docs.cloud.google.com/appengine/docs/flexible/cloud-profiler](https://docs.cloud.google.com/appengine/docs/flexible/cloud-profiler)

## Supporting Pages

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Secure custom domains with SSL Stay organized with collections Save and categorize content based on your preferences.
- To obtain a certificate for use with your App Engine app: Generate your private key and a certificate signing request (CSR) by using the openssl tool: Run the following command from a directory where you want to create the server.csr file: openssl req - nodes - newkey rsa : 2048 - keyout [ MY PRIVATE KEY ] . key - out [ MY CSR ] . csr where: [MY PRIVATE KEY].key is the generated file where your private key is stored.
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.

### "Understand performance with Cloud Profiler \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/cloud-profiler](https://docs.cloud.google.com/appengine/docs/flexible/cloud-profiler)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Understand performance with Cloud Profiler Stay organized with collections Save and categorize content based on your preferences.

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- Quotas for the App Engine flexible environment When you deploy an application to the App Engine flexible environment, some Google Cloud resources are consumed.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Maximum worker connections in Nginx per instance: 4,096 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Both the standard environment and the flexible environment share the same limits for services and versions.

