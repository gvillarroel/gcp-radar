---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.288Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Trace timestamp alignment in App Engine logs"
feature_slug: "trace-timestamp-alignment-in-app-engine-logs"
latest_feature_date: "2016-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/audit-logging"
  - "https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler"
  - "https://docs.cloud.google.com/appengine/docs/standard/python/configuring-your-app-with-app-yaml"
keywords:
  - "trace"
  - "timestamp"
  - "alignment"
  - "app"
  - "engine"
  - "logs"
  - "timestamps"
  - "were"
---

# Trace timestamp alignment in App Engine logs

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Trace timestamps were corrected to align with log timestamps.

## Extended Definition

Trace timestamps were corrected to align with log timestamps.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- [https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler](https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler)
- [https://docs.cloud.google.com/appengine/docs/standard/python/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/python/configuring-your-app-with-app-yaml)

## Supporting Pages

### "App Engine audit logging information \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- Source ID: `site-docs-reference-required-2`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Audited operations The following table summarizes which API operations correspond to each audit log type in App Engine: Audit logs category App Engine operations Admin Activity audit logs apps.create apps.patch apps.repair apps.authorizedCertificates.create apps.authorizedCertificates.delete apps.authorizedCertificates.patch apps.domainMappings.create apps.domainMappings.delete apps.domainMappings.patch apps.firewall.ingressRules.batchUpdate apps.firewall.ingressRules.create apps.firewall.ingressRules.delete apps.firewall.ingressRules.patch apps.services.delete apps.services.patch apps.services.versions.create apps.services.versions.delete apps.services.versions.patch apps.services.versions.instances.debug apps.services.versions.instances.delete Data Access audit logs GetMemcacheItem SetMemcacheItem DeleteMemcacheItem FlushAllMemcacheItems Memcache audit logs only apply to operations made through Cloud Console.
- Available audit logs The following types of audit logs are available for App Engine: Admin Activity audit logs Includes "admin write" operations that write metadata or configuration information.
- This document describes the audit logs created by App Engine as part of Cloud Audit Logs .
- Resource types App Engine audit logs use the resource type gae app for all audit logs.

### "Understand performance with Cloud Profiler \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler](https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler)
- Source ID: `site-docs-reference-required-2`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Understand performance with Cloud Profiler Stay organized with collections Save and categorize content based on your preferences.

### App Engine standard environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/python/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-required-2`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Try App Engine free Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback App Engine standard environment Stay organized with collections Save and categorize content based on your preferences.
- Try it for yourself If you're new to Google Cloud, create an account to evaluate how App Engine performs in real-world scenarios.
- The App Engine standard environment is based on container instances running on Google's infrastructure.

