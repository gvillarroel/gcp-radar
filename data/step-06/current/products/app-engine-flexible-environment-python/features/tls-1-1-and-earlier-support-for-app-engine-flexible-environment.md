---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:17.306Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "TLS 1.1 and earlier support for App Engine flexible environment"
feature_slug: "tls-1-1-and-earlier-support-for-app-engine-flexible-environment"
latest_feature_date: "2025-08-07"
deprecation_date: "2025-03"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/audit-logging"
  - "https://docs.cloud.google.com/appengine/docs/flexible/cloud-profiler"
keywords:
  - "tls"
  - "earlier"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "versions"
  - "deprecated"
---

# TLS 1.1 and earlier support for App Engine flexible environment

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

Support for TLS versions 1.1 and earlier is deprecated for App Engine flexible environment, with guidance to move to TLS 1.2 and later with secure cipher suites; deprecated on 2025-03.

## Extended Definition

Support for TLS versions 1.1 and earlier is deprecated for App Engine flexible environment, with guidance to move to TLS 1.2 and later with secure cipher suites; deprecated on 2025-03.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/audit-logging](https://docs.cloud.google.com/appengine/docs/flexible/audit-logging)
- [https://docs.cloud.google.com/appengine/docs/flexible/cloud-profiler](https://docs.cloud.google.com/appengine/docs/flexible/cloud-profiler)

## Supporting Pages

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Secure custom domains with SSL Stay organized with collections Save and categorize content based on your preferences.
- Note: Starting in March 2025, support for TLS version 1.1 and earlier is deprecated.
- To obtain a certificate for use with your App Engine app: Generate your private key and a certificate signing request (CSR) by using the openssl tool: Run the following command from a directory where you want to create the server.csr file: openssl req - nodes - newkey rsa : 2048 - keyout [ MY PRIVATE KEY ] . key - out [ MY CSR ] . csr where: [MY PRIVATE KEY].key is the generated file where your private key is stored.
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .

### "App Engine audit logging information \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/audit-logging](https://docs.cloud.google.com/appengine/docs/flexible/audit-logging)
- Source ID: `site-docs-reference-2`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback App Engine audit logging information Stay organized with collections Save and categorize content based on your preferences.
- Audited operations The following table summarizes which API operations correspond to each audit log type in App Engine: Audit logs category App Engine operations Admin Activity audit logs apps.create apps.patch apps.repair apps.authorizedCertificates.create apps.authorizedCertificates.delete apps.authorizedCertificates.patch apps.domainMappings.create apps.domainMappings.delete apps.domainMappings.patch apps.firewall.ingressRules.batchUpdate apps.firewall.ingressRules.create apps.firewall.ingressRules.delete apps.firewall.ingressRules.patch apps.services.delete apps.services.patch apps.services.versions.create apps.services.versions.delete apps.services.versions.patch apps.services.versions.instances.debug apps.services.versions.instances.delete Data Access audit logs GetMemcacheItem SetMemcacheItem DeleteMemcacheItem FlushAllMemcacheItems Memcache audit logs only apply to operations made through Cloud Console.
- Available audit logs The following types of audit logs are available for App Engine: Admin Activity audit logs Includes "admin write" operations that write metadata or configuration information.
- For earlier integrations, this object is held in the serviceData field of the AuditLog object; later integrations use the metadata field.

### "Understand performance with Cloud Profiler \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/cloud-profiler](https://docs.cloud.google.com/appengine/docs/flexible/cloud-profiler)
- Source ID: `site-docs-reference-2`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Understand performance with Cloud Profiler Stay organized with collections Save and categorize content based on your preferences.

