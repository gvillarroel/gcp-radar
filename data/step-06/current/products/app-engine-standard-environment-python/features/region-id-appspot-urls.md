---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.775Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Region ID appspot URLs"
feature_slug: "region-id-appspot-urls"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref"
keywords:
  - "appspot"
  - "urls"
  - "include"
  - "supports"
  - "region"
---

# Region ID appspot URLs

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine supports app URLs that include a region ID to improve request routing efficiency and reliability.

## Extended Definition

App Engine supports app URLs that include a region ID to improve request routing efficiency and reliability.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)

## Supporting Pages

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REGION ID .r.appspot.com portion of the hostname, but includes a service, version, or instance name that does not exist, then the request is routed to the default service.
- All of these URLs include the region ID. gcloud When you deploy an app or service, the gcloud app deploy command displays the URL after the deployment succeeds.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference-3`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REGION ID .r.appspot.com portion of the hostname, but includes a service, version, or instance name that does not exist, then the request is routed to the default service.
- All of these URLs include the region ID. gcloud When you deploy an app or service, the gcloud app deploy command displays the URL after the deployment succeeds.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- Python example handlers : - url : /youraccount/. secure : always script : auto To target a specific version of your app using the REGION ID .r.appspot.com domain, you replace the periods that would usually separate the subdomain components of the URL with the string " -dot- ", for example: https:// VERSION ID -dot-default-dot- PROJECT ID .
- REGION ID .r.appspot.com To use custom domains with HTTPS, you must first activate and configure SSL certificates for that domain .
- All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path. static files A static file pattern handler associates a URL pattern with paths to static files uploaded with the application.

