---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:29.600Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "TLS 1.2+ protocol and cipher suite support for App Engine flexible environment"
feature_slug: "tls-1-2-protocol-and-cipher-suite-support-for-app-engine-flexible-environment"
latest_feature_date: "2025-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
keywords:
  - "tls"
  - "protocol"
  - "cipher"
  - "suite"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
---

# TLS 1.2+ protocol and cipher suite support for App Engine flexible environment

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment now supports TLS version 1.2 and later with a secure set of cipher suites in General Availability.

## Extended Definition

App Engine flexible environment now supports TLS version 1.2 and later with a secure set of cipher suites in General Availability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls](https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)

## Supporting Pages

### "Secure your app with minimum TLS (flexible environment) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls](https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update your application settings in the App Engine flexible environment to use TLS version 1.2 and later, along with a corresponding secure set of cipher suites.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Secure your app with minimum TLS (flexible environment) Stay organized with collections Save and categorize content based on your preferences.
- These cipher suites are identified by IANA values, as detailed in the following table: TLS version IANA value Cipher suite TLS v1.3 0x1301 TLS AES 128 GCM SHA256 0x1302 TLS AES 256 GCM SHA384 0x1303 TLS CHACHA20 POLY1305 SHA256 TLS v1.2 0xCCA9 TLS ECDHE ECDSA WITH CHACHA20 POLY1305 SHA256 0xCCA8 TLS ECDHE RSA WITH CHACHA20 POLY1305 SHA256 0xC02B TLS ECDHE ECDSA WITH AES 128 GCM SHA256 0xC02F TLS ECDHE RSA WITH AES 128 GCM SHA256 0xC02C TLS ECDHE ECDSA WITH AES 256 GCM SHA384 0xC030 TLS ECDHE RSA WITH AES 256 GCM SHA384 0xC009 TLS ECDHE ECDSA WITH AES 128 CBC SHA 0xC013 TLS ECDHE RSA WITH AES 128 CBC SHA 0xC00A TLS ECDHE ECDSA WITH AES 256 CBC SHA 0xC014 TLS ECDHE RSA WITH AES 256 CBC SHA If you need to use a different or a less restrictive cipher suite, we recommend that you use a global external Application Load Balancer.
- Disable custom TLS versions and ciphers If you update your application settings to use TLS version 1.2 and later, App Engine automatically blocks all insecure traffic using TLS version 1.1 and earlier.

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Secure custom domains with SSL Stay organized with collections Save and categorize content based on your preferences.
- To obtain a certificate for use with your App Engine app: Generate your private key and a certificate signing request (CSR) by using the openssl tool: Run the following command from a directory where you want to create the server.csr file: openssl req - nodes - newkey rsa : 2048 - keyout [ MY PRIVATE KEY ] . key - out [ MY CSR ] . csr where: [MY PRIVATE KEY].key is the generated file where your private key is stored.
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.
- Unsupported HTTP requests The following features are not supported by App Engine flexible environment: HTTP/2 traffic to the backend service.
- When deploying to Google App Engine, a webserver process such as Gunicorn will serve the app. app . run ( host = "127.0.0.1" , port = 8080 , debug = True ) Quotas and limits App Engine automatically allocates resources to your application as traffic increases.
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.

