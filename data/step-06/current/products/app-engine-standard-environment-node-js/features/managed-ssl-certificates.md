---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.698Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Managed SSL certificates"
feature_slug: "managed-ssl-certificates"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/overview"
keywords:
  - "managed"
  - "ssl"
  - "certificates"
  - "automatically"
  - "provision"
  - "renew"
  - "revoke"
  - "custom"
---

# Managed SSL certificates

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Managed SSL certificates automatically provision, renew, and revoke certificates for custom domains.

## Extended Definition

Managed SSL certificates automatically provision, renew, and revoke certificates for custom domains.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/flexible/overview](https://docs.cloud.google.com/appengine/docs/flexible/overview)

## Supporting Pages

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Custom domains To send HTTPS requests with your custom domain, you can use the managed SSL certificates that are provisioned by App Engine.
- For more information, see Securing Custom Domains with SSL .

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- If you have set up a wildcard subdomain mapping for a custom domain, you can also address a service or any of its instances via a URL of the form https://s.domain.com or https://i.s.domain.com .
- Before the queues become long enough to have a noticeable effect on your app's latency, App Engine automatically creates one or more new instances to handle the increasing load.
- App Engine can automatically create and shut down instances as traffic fluctuates, or you can specify a number of instances to run regardless of the amount of traffic.

### App Engine flexible environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/overview](https://docs.cloud.google.com/appengine/docs/flexible/overview)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go Java Node.js PHP Python Ruby .NET Custom runtimes Features Customizable infrastructure - App Engine flexible environment instances are Compute Engine virtual machines, which means that you can take advantage of custom libraries, use SSH for debugging, and deploy your own Docker containers.
- Managed virtual machines - App Engine manages your virtual machines, ensuring that: Instances are health-checked, healed as necessary, and co-located with other services within the project.
- You can specify how much CPU and memory each instance of your application needs, and the App Engine flexible environment provisions the necessary infrastructure for you.
- Runtimes You can customize these runtimes or provide your own runtime by supplying a custom Docker image or Dockerfile from the open source community.

