---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.410Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Region ID in app URLs"
feature_slug: "region-id-in-app-urls"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
keywords:
  - "identifier"
  - "appspot"
  - "urls"
  - "adds"
  - "application"
  - "region"
---

# Region ID in app URLs

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Region ID in app URLs adds the application region identifier to r.appspot.com request URLs for improved routing; Region ID in app URLs adds the application region identifier to r.appspot.com request URLs for improved routing.

## Extended Definition

Region ID in app URLs adds the application region identifier to r.appspot.com request URLs for improved routing; Region ID in app URLs adds the application region identifier to r.appspot.com request URLs for improved routing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref](https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)

## Supporting Pages

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud, run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- REGION ID .r.appspot.com portion of the hostname, but includes a service, version, or instance name that does not exist, then the request is routed to the default service.
- REGION ID .r.appspot.com https:// CUSTOM DOMAIN Requests are received by any version that is configured for traffic in the default service.
- HTTPS requests sent to the REGION ID .r.appspot.com must use the string " -dot- " to separate subdomains instead of " . ".

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref](https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Python example handlers : - url : /youraccount/. secure : always script : auto To target a specific version of your app using the REGION ID .r.appspot.com domain, you replace the periods that would usually separate the subdomain components of the URL with the string " -dot- ", for example: https:// VERSION ID -dot-default-dot- PROJECT ID .
- REGION ID .r.appspot.com To use custom domains with HTTPS, you must first activate and configure SSL certificates for that domain .
- However, if mygame attempts to make a JavaScript XMLHttpRequest to myassets , it will not succeed unless the handler for myassets returns an Access-Control-Allow-Origin: response header containing the value http://mygame.uc.r.appspot.com .
- Here is how you would make your static file handler return that required response header value: handlers : - url : /images static dir : static/images http headers : Access-Control-Allow-Origin : https://mygame.uc.r.appspot.com ...

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REGION ID .r.appspot.com For more information about HTTPS URLs and targeting resources, see How Requests are Routed .
- REGION ID .r.appspot.com To target specific resources in your App Engine app, use the -dot- syntax to separate each resource you want to target, for example: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- REGION ID .r.appspot.com To convert an HTTP URL to an HTTPS URL, replace the periods between each resource with -dot- , for example: http:// SERVICE ID .
- REGION ID .r.appspot.com https:// SERVICE ID -dot- PROJECT ID .

