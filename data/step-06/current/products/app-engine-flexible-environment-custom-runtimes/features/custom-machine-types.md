---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:30:30.402Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Custom machine types"
feature_slug: "custom-machine-types"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/audit-logging"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users"
keywords:
  - "custom"
  - "machine"
  - "types"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "supports"
---

# Custom machine types

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment supports custom machine types for deployed workloads.

## Extended Definition

App Engine flexible environment supports custom machine types for deployed workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/audit-logging](https://docs.cloud.google.com/appengine/docs/flexible/audit-logging)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)

## Supporting Pages

### "App Engine audit logging information \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/audit-logging](https://docs.cloud.google.com/appengine/docs/flexible/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback App Engine audit logging information Stay organized with collections Save and categorize content based on your preferences.
- Available audit logs The following types of audit logs are available for App Engine: Admin Activity audit logs Includes "admin write" operations that write metadata or configuration information.
- Resource types App Engine audit logs use the resource type gae app for all audit logs.
- Audited operations The following table summarizes which API operations correspond to each audit log type in App Engine: Audit logs category App Engine operations Admin Activity audit logs apps.create apps.patch apps.repair apps.authorizedCertificates.create apps.authorizedCertificates.delete apps.authorizedCertificates.patch apps.domainMappings.create apps.domainMappings.delete apps.domainMappings.patch apps.firewall.ingressRules.batchUpdate apps.firewall.ingressRules.create apps.firewall.ingressRules.delete apps.firewall.ingressRules.patch apps.services.delete apps.services.patch apps.services.versions.create apps.services.versions.delete apps.services.versions.patch apps.services.versions.instances.debug apps.services.versions.instances.delete Data Access audit logs GetMemcacheItem SetMemcacheItem DeleteMemcacheItem FlushAllMemcacheItems Memcache audit logs only apply to operations made through Cloud Console.

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Secure custom domains with SSL Stay organized with collections Save and categorize content based on your preferences.
- SSL certificate types App Engine supports the following certificate types: Single Domain/Hostname Self-signed Wildcard Subject Alternative Name (SAN) / Multi Domain It requires some things of your certificates and keys: Private Key and Certificate should be uploaded in PEM format.
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.

### "Authenticating users \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Similar to Identity Platform, Firebase Authentication supports multiple authentication methods (SAML, OIDC, email/password, social, mobile, and custom auth) to provide flexible integration options for any identity solution.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- Identity Platform supports multiple authentication methods (SAML, OIDC, email/password, social, phone, and custom auth) to provide flexible integration options for any identity solution.
- Go Java Node.js PHP Python Ruby .NET Custom To authenticate users in Google Cloud applications, Google offers the following user authentication methods: Authentication Service Summary Identity Platform (recommended) Authenticate users using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter, and any provider that supports SAML or OpenID Connect protocol.

