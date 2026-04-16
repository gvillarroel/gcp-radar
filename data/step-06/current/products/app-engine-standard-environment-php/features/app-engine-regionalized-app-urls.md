---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.306Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine regionalized app URLs"
feature_slug: "app-engine-regionalized-app-urls"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref"
keywords:
  - "app"
  - "engine"
  - "regionalized"
  - "urls"
  - "now"
  - "supports"
  - "include"
  - "region"
---

# App Engine regionalized app URLs

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

App Engine now supports URLs that include a region ID (for example `<project-id>.<region-id>.r.appspot.com`) to improve request routing.

## Extended Definition

App Engine now supports URLs that include a region ID (for example `<project-id>.<region-id>.r.appspot.com`) to improve request routing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref](https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref)

## Supporting Pages

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 213
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REGION ID .r.appspot.com portion of the hostname, but includes a service, version, or instance name that does not exist, then the request is routed to the default service.
- REGION ID .r.appspot.com https:// CUSTOM DOMAIN Requests are received by any version that is configured for traffic in the default service.
- HTTPS requests sent to the REGION ID .r.appspot.com must use the string " -dot- " to separate subdomains instead of " . ".
- REGION ID .r.appspot.com where PROJECT ID is the ID of the Google Cloud project that contains the app.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed)
- Source ID: `site-docs-reference-4`
- Final score: 213
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REGION ID .r.appspot.com portion of the hostname, but includes a service, version, or instance name that does not exist, then the request is routed to the default service.
- REGION ID .r.appspot.com https:// CUSTOM DOMAIN Requests are received by any version that is configured for traffic in the default service.
- HTTPS requests sent to the REGION ID .r.appspot.com must use the string " -dot- " to separate subdomains instead of " . ".
- REGION ID .r.appspot.com where PROJECT ID is the ID of the Google Cloud project that contains the app.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref](https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Python example handlers : - url : /youraccount/. secure : always script : auto To target a specific version of your app using the REGION ID .r.appspot.com domain, you replace the periods that would usually separate the subdomain components of the URL with the string " -dot- ", for example: https:// VERSION ID -dot-default-dot- PROJECT ID .
- Tip: To allow everyone access to your assets, you can use the wildcard ' ' , instead of https://mygame.uc.r.appspot.com . login To use this element, app engine apis must be set to true .
- REGION ID .r.appspot.com To use custom domains with HTTPS, you must first activate and configure SSL certificates for that domain .
- However, if mygame attempts to make a JavaScript XMLHttpRequest to myassets , it will not succeed unless the handler for myassets returns an Access-Control-Allow-Origin: response header containing the value http://mygame.uc.r.appspot.com .

