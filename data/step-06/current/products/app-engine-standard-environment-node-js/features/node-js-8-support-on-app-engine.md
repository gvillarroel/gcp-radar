---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.581Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Node.js 8 support on App Engine"
feature_slug: "node-js-8-support-on-app-engine"
latest_feature_date: "2019-06-27"
deprecation_date: "2019-06-27"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/audit-logging"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
keywords:
  - "node"
  - "js"
  - "app"
  - "engine"
  - "deprecated"
  - "2019"
  - "06"
  - "27"
---

# Node.js 8 support on App Engine

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Support for Node.js 8 on App Engine is deprecated; deprecated on 2019-06-27.

## Extended Definition

Support for Node.js 8 on App Engine is deprecated; deprecated on 2019-06-27.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)

## Supporting Pages

### "App Engine audit logging information \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Audited operations The following table summarizes which API operations correspond to each audit log type in App Engine: Audit logs category App Engine operations Admin Activity audit logs apps.create apps.patch apps.repair apps.authorizedCertificates.create apps.authorizedCertificates.delete apps.authorizedCertificates.patch apps.domainMappings.create apps.domainMappings.delete apps.domainMappings.patch apps.firewall.ingressRules.batchUpdate apps.firewall.ingressRules.create apps.firewall.ingressRules.delete apps.firewall.ingressRules.patch apps.services.delete apps.services.patch apps.services.versions.create apps.services.versions.delete apps.services.versions.patch apps.services.versions.instances.debug apps.services.versions.instances.delete Data Access audit logs GetMemcacheItem SetMemcacheItem DeleteMemcacheItem FlushAllMemcacheItems Memcache audit logs only apply to operations made through Cloud Console.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback App Engine audit logging information Stay organized with collections Save and categorize content based on your preferences.
- Available audit logs The following types of audit logs are available for App Engine: Admin Activity audit logs Includes "admin write" operations that write metadata or configuration information.
- This document describes the audit logs created by App Engine as part of Cloud Audit Logs .

### "Configuring warmup requests to improve performance \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Configuring warmup requests to improve performance Stay organized with collections Save and categorize content based on your preferences.
- If warmup requests are enabled for your application, App Engine attempts to detect when your application needs a new instance and initiates a warmup request to initialize a new instance.
- Go Java Node.js PHP Python Ruby You can use warmup requests to reduce request and response latency during the time when your app's code is being loaded to a newly created instance.
- Enabling warmup requests Warmup requests are used by the App Engine scheduler, which controls the auto scaling of instances based on user-supplied configuration.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- For example, to describe version 20191023t101741 for the default service, enter gcloud app versions describe 20191023t101741 --service=default Domain name is included in the request data The domain name used for the request is included in the request data that is passed to your app.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How requests are routed Stay organized with collections Save and categorize content based on your preferences.
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .
- Otherwise, users can use your app's App Engine URL to bypass the load balancer, Cloud Armor security policies, SSL certificates, and private keys that are passed through the load balancer.

