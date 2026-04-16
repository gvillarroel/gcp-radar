---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.680Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Region ID in appspot URLs"
feature_slug: "region-id-in-appspot-urls"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services"
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
keywords:
  - "region"
  - "id"
  - "appspot"
  - "urls"
  - "app"
  - "engine"
  - "can"
  - "include"
---

# Region ID in appspot URLs

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

App Engine app URLs can include a region ID to improve request routing efficiency and reliability.

## Extended Definition

App Engine app URLs can include a region ID to improve request routing efficiency and reliability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)
- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)

## Supporting Pages

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .
- REGION ID .r.appspot.com portion of the hostname, but includes a service, version, or instance name that does not exist, then the request is routed to the default service.

### "Communicating between your services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- REGION ID .r.appspot.com Note that the combined length of VERSION -dot- SERVICE -dot- PROJECT ID , where VERSION is the name of your version, SERVICE is the name of your service, and PROJECT ID is your project ID, cannot be longer than 63 characters and cannot start or end with a hyphen.
- The simplest approach for communicating with your App Engine service is to send targeted HTTP requests, where the URL includes the name or ID of a resource.
- This includes App Engine resources from a client app on the same network when egress traffic is routed over a connector.

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- REGION ID .r.appspot.com To target specific resources in your App Engine app, use the -dot- syntax to separate each resource you want to target, for example: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- REGION ID .r.appspot.com For more information about HTTPS URLs and targeting resources, see How Requests are Routed .
- Security scanner The Google Cloud Web Security Scanner discovers vulnerabilities by crawling your App Engine app, following all that links within the scope of your starting URLs, and attempting to exercise as many user inputs and event handlers as possible.

