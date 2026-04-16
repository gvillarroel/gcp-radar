---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.761Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "In-context log menu sorting by thread or request ID"
feature_slug: "in-context-log-menu-sorting-by-thread-or-request-id"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/how-requests-are-routed"
keywords:
  - "context"
  - "log"
  - "menu"
  - "sorting"
  - "thread"
  - "request"
  - "id"
  - "app"
---

# In-context log menu sorting by thread or request ID

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

App logs in MVM can now show in-context menus for thread_id/request_id and be sorted by either field.

## Extended Definition

App logs in MVM can now show in-context menus for thread_id/request_id and be sorted by either field.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/go/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/go/how-requests-are-routed)

## Supporting Pages

### "Configuring warmup requests to improve performance \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable warmup requests, add the warmup element under the inbound services directive in your app.yaml file, for example: inbound services: - warmup Creating your handler Create a handler that will process the requests that are sent to / ah/warmup .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Configuring warmup requests to improve performance Stay organized with collections Save and categorize content based on your preferences.
- In most cases where warmup requests are enabled, you won't notice an increase in instance hours because your application is simply initializing in a warmup request instead of a loading request.
- If warmup requests are enabled for your application, App Engine attempts to detect when your application needs a new instance and initiates a warmup request to initialize a new instance.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud, run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- The instance ID is an integer in the range from 0 up to the total number of instances that are running, and can be specified as follows: Sends a request to a specific service and version within a specific instance: https:// INSTANCE ID -dot- VERSION ID -dot- SERVICE ID -dot- PROJECT ID .
- For example, to describe version 20191023t101741 for the default service, enter gcloud app versions describe 20191023t101741 --service=default Domain name is included in the request data The domain name used for the request is included in the request data that is passed to your app.
- Requests that don't pass through Cloud Load Balancing are never intercepted and rerouted by the patterns that you have defined in your dispatch file: Sends the request to an available instance of a specific service and version: https:// VERSION -dot- SERVICE -dot- PROJECT ID .

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/go/how-requests-are-routed)
- Source ID: `site-docs-reference-2`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud, run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- The instance ID is an integer in the range from 0 up to the total number of instances that are running, and can be specified as follows: Sends a request to a specific service and version within a specific instance: https:// INSTANCE ID -dot- VERSION ID -dot- SERVICE ID -dot- PROJECT ID .
- For example, to describe version 20191023t101741 for the default service, enter gcloud app versions describe 20191023t101741 --service=default Domain name is included in the request data The domain name used for the request is included in the request data that is passed to your app.
- Requests that don't pass through Cloud Load Balancing are never intercepted and rerouted by the patterns that you have defined in your dispatch file: Sends the request to an available instance of a specific service and version: https:// VERSION -dot- SERVICE -dot- PROJECT ID .

