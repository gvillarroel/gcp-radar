---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.426Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Faceted Search"
feature_slug: "faceted-search"
latest_feature_date: "2015-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "faceted"
  - "search"
  - "generally"
  - "applications"
  - "available"
---

# Faceted Search

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Faceted Search is generally available for App Engine applications.

## Extended Definition

Faceted Search is generally available for App Engine applications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/quotas](https://docs.cloud.google.com/appengine/docs/standard/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Resource or API call Description System Limit Shared Centi Memcache Compute Units Per Region Per Minute For each project per region and minute, the available centi-MCUs, which are 1/100ths of an Memcache Compute Unit .
- Per-minute quotas protect your application from consuming all of its resources in very short periods of time, and prevent other applications from monopolizing a given resource.
- The Search API imposes these limits to ensure the reliability of the service: 100 aggregated minutes of query execution time per minute, within an app and an index .
- When a resource is depleted When an application consumes all of an allocated resource, the resource becomes unavailable until the quota is replenished.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/quotas](https://docs.cloud.google.com/appengine/docs/standard/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Resource or API call Description System Limit Shared Centi Memcache Compute Units Per Region Per Minute For each project per region and minute, the available centi-MCUs, which are 1/100ths of an Memcache Compute Unit .
- Per-minute quotas protect your application from consuming all of its resources in very short periods of time, and prevent other applications from monopolizing a given resource.
- The Search API imposes these limits to ensure the reliability of the service: 100 aggregated minutes of query execution time per minute, within an app and an index .
- When a resource is depleted When an application consumes all of an allocated resource, the resource becomes unavailable until the quota is replenished.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.
- After a file is transmitted with a given expiration time, there is generally no way to clear it out of web-proxy caches, even if the user clears their own browser cache.
- Applications that are heavily CPU-bound may also incur some additional latency in order to efficiently share resources with other applications on the same servers.

