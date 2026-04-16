---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:29.625Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "App Engine flexible environment custom machine types"
feature_slug: "app-engine-flexible-environment-custom-machine-types"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
  - "https://docs.cloud.google.com/appengine/docs/flexible/audit-logging"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "custom"
  - "machine"
  - "types"
  - "added"
---

# App Engine flexible environment custom machine types

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

The App Engine flexible environment added support for custom machine types.

## Extended Definition

The App Engine flexible environment added support for custom machine types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- [https://docs.cloud.google.com/appengine/docs/flexible/audit-logging](https://docs.cloud.google.com/appengine/docs/flexible/audit-logging)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- Quotas for the App Engine flexible environment When you deploy an application to the App Engine flexible environment, some Google Cloud resources are consumed.
- Types of quotas The following types of quotas apply to App Engine applications: Free quotas give your application an amount of each resource for free.
- This overhead depends on the number and types of associated properties, and includes space used by built-in and custom indexes.

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 47
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Secure custom domains with SSL Stay organized with collections Save and categorize content based on your preferences.
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- SSL certificate types App Engine supports the following certificate types: Single Domain/Hostname Self-signed Wildcard Subject Alternative Name (SAN) / Multi Domain It requires some things of your certificates and keys: Private Key and Certificate should be uploaded in PEM format.

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

