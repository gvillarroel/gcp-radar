---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:31.503Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "App Engine flexible environment Debian 8 Jessie deprecation"
feature_slug: "app-engine-flexible-environment-debian-8-jessie-deprecation"
latest_feature_date: "2018-05-04"
deprecation_date: "2018-05-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/deprecations/pin-app-to-debian"
  - "https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "debian"
  - "jessie"
  - "deprecation"
  - "announced"
---

# App Engine flexible environment Debian 8 Jessie deprecation

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Google announced migration away from Debian 8 Jessie to Ubuntu 16.04 for App Engine flexible environment applications, with redeploy required by the migration date; deprecated on 2018-05-30.

## Extended Definition

Google announced migration away from Debian 8 Jessie to Ubuntu 16.04 for App Engine flexible environment applications, with redeploy required by the migration date; deprecated on 2018-05-30.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/deprecations/pin-app-to-debian](https://docs.cloud.google.com/appengine/docs/deprecations/pin-app-to-debian)
- [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl)

## Supporting Pages

### "Feature deprecations \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/deprecations/pin-app-to-debian](https://docs.cloud.google.com/appengine/docs/deprecations/pin-app-to-debian)
- Source ID: `site-docs-reference-2`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Feature deprecations Stay organized with collections Save and categorize content based on your preferences.
- The Google Cloud Platform Terms of Service (section "Discontinuation of Services") defines the deprecation policy that applies to App Engine.
- The deprecation policy only applies to the services, features, or products listed therein.

### "Authenticating users \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- Similar to Identity Platform, Firebase Authentication supports multiple authentication methods (SAML, OIDC, email/password, social, mobile, and custom auth) to provide flexible integration options for any identity solution.
- Identity Platform supports multiple authentication methods (SAML, OIDC, email/password, social, phone, and custom auth) to provide flexible integration options for any identity solution.
- Identity-Aware Proxy (IAP) Provides authentication by adding an Identity and Access Management (IAM) verification layer above your App Engine app.

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Secure custom domains with SSL Stay organized with collections Save and categorize content based on your preferences.
- To obtain a certificate for use with your App Engine app: Generate your private key and a certificate signing request (CSR) by using the openssl tool: Run the following command from a directory where you want to create the server.csr file: openssl req - nodes - newkey rsa : 2048 - keyout [ MY PRIVATE KEY ] . key - out [ MY CSR ] . csr where: [MY PRIVATE KEY].key is the generated file where your private key is stored.
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.

