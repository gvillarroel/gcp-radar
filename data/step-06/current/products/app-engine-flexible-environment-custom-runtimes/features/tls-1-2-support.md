---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:30:30.383Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "TLS 1.2+ support"
feature_slug: "tls-1-2-support"
latest_feature_date: "2025-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users"
keywords:
  - "tls"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "supports"
  - "later"
  - "secure"
---

# TLS 1.2+ support

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment supports TLS 1.2 and later with a secure set of cipher suites; App Engine flexible environment supports TLS 1.2 and later with a secure set of cipher suites.

## Extended Definition

App Engine flexible environment supports TLS 1.2 and later with a secure set of cipher suites; App Engine flexible environment supports TLS 1.2 and later with a secure set of cipher suites.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls](https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)

## Supporting Pages

### "Secure your app with minimum TLS (flexible environment) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls](https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update your application settings in the App Engine flexible environment to use TLS version 1.2 and later, along with a corresponding secure set of cipher suites.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Secure your app with minimum TLS (flexible environment) Stay organized with collections Save and categorize content based on your preferences.
- Note: If you update your application settings to enforce TLS version 1.2 and later, App Engine automatically rejects incoming requests that attempt to use older, less secure TLS versions 1.1 and earlier.
- Disable custom TLS versions and ciphers If you update your application settings to use TLS version 1.2 and later, App Engine automatically blocks all insecure traffic using TLS version 1.1 and earlier.

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Secure custom domains with SSL Stay organized with collections Save and categorize content based on your preferences.
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- SSL certificate types App Engine supports the following certificate types: Single Domain/Hostname Self-signed Wildcard Subject Alternative Name (SAN) / Multi Domain It requires some things of your certificates and keys: Private Key and Certificate should be uploaded in PEM format.
- App Engine SSL support offers globally distributed SSL endpoints and built-in load balancing to serve your app securely, reliably, and quickly to a worldwide audience.

### "Authenticating users \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- Similar to Identity Platform, Firebase Authentication supports multiple authentication methods (SAML, OIDC, email/password, social, mobile, and custom auth) to provide flexible integration options for any identity solution.
- Identity Platform supports multiple authentication methods (SAML, OIDC, email/password, social, phone, and custom auth) to provide flexible integration options for any identity solution.
- Go Java Node.js PHP Python Ruby .NET Custom To authenticate users in Google Cloud applications, Google offers the following user authentication methods: Authentication Service Summary Identity Platform (recommended) Authenticate users using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter, and any provider that supports SAML or OpenID Connect protocol.

