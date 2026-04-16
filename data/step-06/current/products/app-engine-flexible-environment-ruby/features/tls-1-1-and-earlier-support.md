---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:03.996Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "TLS 1.1 and earlier support"
feature_slug: "tls-1-1-and-earlier-support"
latest_feature_date: "2025-08-07"
deprecation_date: "March 2025"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime"
keywords:
  - "tls"
  - "earlier"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "previously"
  - "application"
---

# TLS 1.1 and earlier support

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment previously supported TLS 1.1 and earlier for application settings; deprecated on March 2025.

## Extended Definition

App Engine flexible environment previously supported TLS 1.1 and earlier for application settings; deprecated on March 2025.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby](https://docs.cloud.google.com/appengine/docs/flexible/ruby)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)

## Supporting Pages

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 59
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Secure custom domains with SSL Stay organized with collections Save and categorize content based on your preferences.
- After mapping a custom domain to your application and updating your DNS records , App Engine provisions a managed SSL certificate, renews the certificate, and revokes it when you remove the custom domain from your application.
- To obtain a certificate for use with your App Engine app: Generate your private key and a certificate signing request (CSR) by using the openssl tool: Run the following command from a directory where you want to create the server.csr file: openssl req - nodes - newkey rsa : 2048 - keyout [ MY PRIVATE KEY ] . key - out [ MY CSR ] . csr where: [MY PRIVATE KEY].key is the generated file where your private key is stored.
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby](https://docs.cloud.google.com/appengine/docs/flexible/ruby)
- Source ID: `site-docs-reference-2`
- Final score: 55
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Ruby runtime Stay organized with collections Save and categorize content based on your preferences.
- The Ruby runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.
- Metadata server Each instance of your application can use the Compute Engine metadata server to query information about the instance, including its hostname, external IP address, instance ID, custom metadata, and service account information.
- To use Ruby runtime version 3.1 and earlier , specify a version of the Ruby interpreter using a .ruby-version file in your application directory.

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- Source ID: `site-docs-reference-2`
- Final score: 55
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Ruby runtime Stay organized with collections Save and categorize content based on your preferences.
- The Ruby runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.
- Metadata server Each instance of your application can use the Compute Engine metadata server to query information about the instance, including its hostname, external IP address, instance ID, custom metadata, and service account information.
- To use Ruby runtime version 3.1 and earlier , specify a version of the Ruby interpreter using a .ruby-version file in your application directory.

