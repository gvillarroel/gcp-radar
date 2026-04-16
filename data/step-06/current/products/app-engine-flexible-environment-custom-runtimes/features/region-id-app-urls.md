---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:30:30.391Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Region ID app URLs"
feature_slug: "region-id-app-urls"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings"
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

# Region ID app URLs

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

App Engine app URLs can include a region ID in the r.appspot.com hostname for routing efficiency and reliability.

## Extended Definition

App Engine app URLs can include a region ID in the r.appspot.com hostname for routing efficiency and reliability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- [https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings](https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings)

## Supporting Pages

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REGION ID .r.appspot.com portion of the hostname, but includes a service, version, or instance name that does not exist, then the request is routed to the default service.
- REGION ID .r.appspot.com https:// CUSTOM DOMAIN Requests are received by any version that is configured for traffic in the default service.
- HTTPS requests sent to the REGION ID .r.appspot.com must use the string " -dot- " to separate subdomains instead of " . ".
- REGION ID .r.appspot.com where PROJECT ID is the ID of the Google Cloud project that contains the app.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REGION ID .r.appspot.com To target specific resources in your App Engine app, use the -dot- syntax to separate each resource you want to target, for example: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- REGION ID .r.appspot.com For more information about HTTPS URLs and targeting resources, see How Requests are Routed .
- REGION ID .r.appspot.com To convert an HTTP URL to an HTTPS URL, replace the periods between each resource with -dot- , for example: http:// SERVICE ID .
- REGION ID .r.appspot.com https:// SERVICE ID -dot- PROJECT ID .

### "Ingress settings \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings](https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- When accessing internal services, call them as you would normally do by using their public URLs, either the default appspot.com URL or a custom domain set up in App Engine.
- At a network level, by default, any resource on the internet is able to reach your App Engine app on its appspot URL or at a custom domain set up in App Engine.
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

