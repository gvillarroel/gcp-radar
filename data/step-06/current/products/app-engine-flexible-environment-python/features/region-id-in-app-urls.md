---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:40:42.097Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Region ID in app URLs"
feature_slug: "region-id-in-app-urls"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "region"
  - "id"
  - "app"
  - "urls"
  - "engine"
  - "can"
  - "include"
  - "appspot"
---

# Region ID in app URLs

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine app URLs can include a region ID in the r.appspot.com hostname.

## Extended Definition

App Engine app URLs can include a region ID in the r.appspot.com hostname.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)

## Supporting Pages

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REGION ID .r.appspot.com portion of the hostname, but includes a service, version, or instance name that does not exist, then the request is routed to the default service.
- REGION ID .r.appspot.com https:// CUSTOM DOMAIN Requests are received by any version that is configured for traffic in the default service.
- HTTPS requests sent to the REGION ID .r.appspot.com must use the string " -dot- " to separate subdomains instead of " . ".
- REGION ID .r.appspot.com where PROJECT ID is the ID of the Google Cloud project that contains the app.

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed)
- Source ID: `site-docs-reference-2`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REGION ID .r.appspot.com portion of the hostname, but includes a service, version, or instance name that does not exist, then the request is routed to the default service.
- REGION ID .r.appspot.com https:// CUSTOM DOMAIN Requests are received by any version that is configured for traffic in the default service.
- HTTPS requests sent to the REGION ID .r.appspot.com must use the string " -dot- " to separate subdomains instead of " . ".
- REGION ID .r.appspot.com where PROJECT ID is the ID of the Google Cloud project that contains the app.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REGION ID .r.appspot.com To target specific resources in your App Engine app, use the -dot- syntax to separate each resource you want to target, for example: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- REGION ID .r.appspot.com For more information about HTTPS URLs and targeting resources, see How Requests are Routed .
- REGION ID .r.appspot.com To convert an HTTP URL to an HTTPS URL, replace the periods between each resource with -dot- , for example: http:// SERVICE ID .
- REGION ID .r.appspot.com https:// SERVICE ID -dot- PROJECT ID .

