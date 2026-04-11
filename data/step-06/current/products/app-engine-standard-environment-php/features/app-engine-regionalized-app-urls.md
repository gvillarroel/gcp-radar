---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.543Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine regionalized app URLs"
feature_slug: "app-engine-regionalized-app-urls"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml"
keywords:
  - "project-id.region-id.r.appspot.com"
  - "r.appspot.com URLs"
  - "regionalized app URLs"
  - "region-ID in appspot URL"
  - ".r.appspot.com"
  - "route requests by region"
  - "regionalized app domain"
  - "regional app URL"
---

# App Engine regionalized app URLs

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

App Engine now supports URLs that include a region ID (for example `<project-id>.<region-id>.r.appspot.com`) to improve request routing.

## Extended Definition

App Engine now supports URLs that include a region ID (for example `<project-id>.<region-id>.r.appspot.com`) to improve request routing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)

## Supporting Pages

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud, run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- REGION ID .r.appspot.com portion of the hostname, but includes a service, version, or instance name that does not exist, then the request is routed to the default service.
- REGION ID .r.appspot.com https:// CUSTOM DOMAIN Requests are received by any version that is configured for traffic in the default service.
- HTTPS requests sent to the REGION ID .r.appspot.com must use the string " -dot- " to separate subdomains instead of " . ".

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REGION ID .r.appspot.com To target specific resources in your App Engine app, use the -dot- syntax to separate each resource you want to target, for example: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- REGION ID .r.appspot.com To convert an HTTP URL to an HTTPS URL, replace the periods between each resource with -dot- , for example: http:// SERVICE ID .
- REGION ID .r.appspot.com For more information about HTTPS URLs and targeting resources, see How Requests are Routed .
- REGION ID .r.appspot.com https:// SERVICE ID -dot- PROJECT ID .

### "The deployment descriptor: web.xml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REGION ID .r.appspot.com/ , your browser warns you that the HTTPS certificate was not signed for that specific domain path.
- Secure URLs App Engine supports secure connections with HTTPS for URLs using the REGION ID .r.appspot.com domain.

