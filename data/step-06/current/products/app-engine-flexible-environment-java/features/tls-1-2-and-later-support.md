---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:03.259Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "TLS 1.2 and later support"
feature_slug: "tls-1-2-and-later-support"
latest_feature_date: "2025-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
keywords:
  - "tls"
  - "later"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "supports"
  - "secure"
---

# TLS 1.2 and later support

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment supports TLS 1.2 and later with a secure set of cipher suites; App Engine flexible environment supports TLS 1.2 and later with a secure set of cipher suites.

## Extended Definition

App Engine flexible environment supports TLS 1.2 and later with a secure set of cipher suites; App Engine flexible environment supports TLS 1.2 and later with a secure set of cipher suites.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)

## Supporting Pages

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Secure custom domains with SSL Stay organized with collections Save and categorize content based on your preferences.
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- SSL certificate types App Engine supports the following certificate types: Single Domain/Hostname Self-signed Wildcard Subject Alternative Name (SAN) / Multi Domain It requires some things of your certificates and keys: Private Key and Certificate should be uploaded in PEM format.
- App Engine SSL support offers globally distributed SSL endpoints and built-in load balancing to serve your app securely, reliably, and quickly to a worldwide audience.

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.
- Unsupported HTTP requests The following features are not supported by App Engine flexible environment: HTTP/2 traffic to the backend service.
- When deploying to Google App Engine, a webserver process such as Gunicorn will serve the app. app . run ( host = "127.0.0.1" , port = 8080 , debug = True ) Quotas and limits App Engine automatically allocates resources to your application as traffic increases.
- See Python runtime for more information about using the new versions. v3.8 and later from flask import Flask app = Flask ( name ) @app . route ( "/" ) def hello () - > str : """Return a friendly HTTP greeting.

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- Quotas for the App Engine flexible environment When you deploy an application to the App Engine flexible environment, some Google Cloud resources are consumed.
- Both the standard environment and the flexible environment share the same limits for services and versions.
- Only the App Engine standard environment provides free quotas.

