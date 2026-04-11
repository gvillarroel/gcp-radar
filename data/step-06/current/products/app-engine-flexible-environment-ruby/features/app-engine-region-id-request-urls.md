---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:48:27.790Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "App Engine region-ID request URLs"
feature_slug: "app-engine-region-id-request-urls"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
  - "https://docs.cloud.google.com/appengine/docs/flexible/reference/dispatch-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed"
keywords:
  - "PROJECT_ID.REGION_ID.r.appspot.com"
  - "region-specific URL"
  - "region-id app URLs"
  - "region ID URLs"
  - "request routing domain"
  - "r.appspot.com"
  - "regional app domain"
---

# App Engine region-ID request URLs

Product: App Engine flexible environment Ruby
Coverage: LOW

## Step 02 Summary

App Engine introduced region-ID based app URLs (for example, PROJECT_ID.REGION_ID.r.appspot.com) to improve request routing efficiency and reliability.

## Extended Definition

App Engine introduced region-ID based app URLs (for example, PROJECT_ID.REGION_ID.r.appspot.com) to improve request routing efficiency and reliability.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- [https://docs.cloud.google.com/appengine/docs/flexible/reference/dispatch-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/dispatch-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)

## Supporting Pages

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: The page explains region-ID-based App Engine hostnames and URL formats, including when the .r suffix is present, which helps define the request URL behavior tied to region IDs.

Evidence snippets:
- REGION ID .r.appspot.com To target specific resources in your App Engine app, use the -dot- syntax to separate each resource you want to target, for example: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- REGION ID .r.appspot.com To convert an HTTP URL to an HTTPS URL, replace the periods between each resource with -dot- , for example: http:// SERVICE ID .
- REGION ID .r.appspot.com For more information about HTTPS URLs and targeting resources, see How Requests are Routed .
- REGION ID .r.appspot.com https:// SERVICE ID -dot- PROJECT ID .

### "dispatch.yaml Configuration File \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/reference/dispatch-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/dispatch-yaml)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Example: dispatch : Default service serves the typical web resources and all static resources. - url : " /favicon.ico" service : default Default service serves simple hostname request. - url : "simple-sample.uc.r.appspot.com/" service : default Send all mobile traffic to the mobile frontend. - url : " /mobile/ " service : mobile-frontend Send all work to the one static backend. - url : " /work/ " service : static-backend If you prefer general routing rules that match many possible requests, you can define rules with wider scopes.
- Example: Send any path that begins with “simple-sample.uc.r.appspot.com/mobile” to the mobile-frontend service. - url : "simple-sample.uc.r.appspot.com/mobile " service : mobile-frontend Send any domain/sub-domain with a path that starts with “work” to the static backend service. - url : " /work " service : static-backend You can also write expressions that are more strict.
- Example The following is a sample dispatch file that routes requests to https://simple-sample.uc.r.appspot.com and requests like https://simple-sample.uc.r.appspot.com/favicon.ico to the default service.
- Mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ are routed to a mobile frontend, and worker requests like https://simple-sample.uc.r.appspot.com/work/ are routed to a static backend.

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud , run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- REGION ID .r.appspot.com portion of the hostname, but includes a service, version, or instance name that does not exist, then the request is routed to the default service.
- REGION ID .r.appspot.com https:// CUSTOM DOMAIN Requests are received by any version that is configured for traffic in the default service.
- HTTPS requests sent to the REGION ID .r.appspot.com must use the string " -dot- " to separate subdomains instead of " . ".

