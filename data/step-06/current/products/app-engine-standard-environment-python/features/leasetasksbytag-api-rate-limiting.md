---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.287Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "LeaseTasksByTag API rate limiting"
feature_slug: "leasetasksbytag-api-rate-limiting"
latest_feature_date: "2016-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
keywords:
  - "leasetasksbytag"
  - "rate"
  - "limiting"
  - "requests"
  - "were"
  - "limited"
  - "25"
  - "per"
---

# LeaseTasksByTag API rate limiting

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

LeaseTasksByTag requests were limited to 25 requests per second.

## Extended Definition

LeaseTasksByTag requests were limited to 25 requests per second.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-required-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- The Google Cloud console Quota Details page also reports Secure Requests , Secure Incoming Bandwidth , and Secure Outgoing Bandwidth as separate values for informational purposes.
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- You can also change the number of concurrent requests an instance can handle by setting the max concurrent requests element in your app.yaml file , or appengine-web.xml file file if using the App Engine legacy bundled services.
- All subsequent requests for this URL that contain the Accept-Encoding: gzip header will receive the gzipped data from the cache until the cache becomes invalidated (due to the content changing after the cache expires).

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference-required-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud, run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- HTTPS requests sent to the REGION ID .r.appspot.com must use the string " -dot- " to separate subdomains instead of " . ".
- Requests that don't pass through Cloud Load Balancing are never intercepted and rerouted by the patterns that you have defined in your dispatch file: Sends the request to an available instance of a specific service and version: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How requests are routed Stay organized with collections Save and categorize content based on your preferences.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference-required-2`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.
- We recommend controlling this by rate limiting the number of request sent per second, if possible.
- This table compares the performance features of the three scaling types: Feature Automatic scaling Basic scaling Manual scaling Request timeout 10 minutes for HTTP requests and task queue tasks.
- To reduce the impact of cold-start latency for infrequently used services, you can change the configuration to allow a minimum of one instance to always be active or enable warmup requests .

