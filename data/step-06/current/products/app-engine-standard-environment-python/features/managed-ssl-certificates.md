---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.788Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Managed SSL certificates"
feature_slug: "managed-ssl-certificates"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
  - "https://cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
keywords:
  - "automatically"
  - "revoke"
  - "mapped"
  - "renew"
  - "certificates"
  - "provision"
  - "managed"
---

# Managed SSL certificates

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Managed SSL certificates automatically provision, renew, and revoke certificates for mapped custom domains.

## Extended Definition

Managed SSL certificates automatically provision, renew, and revoke certificates for mapped custom domains.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- [https://cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Before the queues become long enough to have a noticeable effect on your app's latency, App Engine automatically creates one or more new instances to handle the increasing load.
- App Engine can automatically create and shut down instances as traffic fluctuates, or you can specify a number of instances to run regardless of the amount of traffic.
- Instances are created on demand to handle requests and automatically shut down when idle, based on the idle timeout configuration parameter.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference-3`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Before the queues become long enough to have a noticeable effect on your app's latency, App Engine automatically creates one or more new instances to handle the increasing load.
- App Engine can automatically create and shut down instances as traffic fluctuates, or you can specify a number of instances to run regardless of the amount of traffic.
- Instances are created on demand to handle requests and automatically shut down when idle, based on the idle timeout configuration parameter.

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Custom domains To send HTTPS requests with your custom domain, you can use the managed SSL certificates that are provisioned by App Engine.

