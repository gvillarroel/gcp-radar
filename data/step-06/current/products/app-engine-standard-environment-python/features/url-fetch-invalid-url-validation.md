---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.287Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "URL Fetch invalid URL validation"
feature_slug: "url-fetch-invalid-url-validation"
latest_feature_date: "2016-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests"
  - "https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml"
keywords:
  - "url"
  - "fetch"
  - "invalid"
  - "validation"
  - "now"
  - "always"
  - "returns"
  - "requests"
---

# URL Fetch invalid URL validation

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

URL Fetch now always returns INVALID_URL for requests to disallowed destination ports.

## Extended Definition

URL Fetch now always returns INVALID_URL for requests to disallowed destination ports.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)
- [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-required-2`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All subsequent requests for this URL that contain the Accept-Encoding: gzip header will receive the gzipped data from the cache until the cache becomes invalidated (due to the content changing after the cache expires).
- All subsequent requests for this URL that don't contain the Accept-Encoding header receive uncompressed data from the cache until the cache becomes invalidated.
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- You can also change the number of concurrent requests an instance can handle by setting the max concurrent requests element in your app.yaml file , or appengine-web.xml file file if using the App Engine legacy bundled services.

### "Configuring warmup requests to improve performance \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)
- Source ID: `site-docs-reference-required-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable warmup requests, add the warmup element under the inbound services directive in your app.yaml file, for example: inbound services: - warmup Creating your handler Create a handler that will process the requests that are sent to / ah/warmup .
- Your warmup logic can be implemented here (e.g. set up a database connection pool) Returns: An empty string, an HTTP code 200, and an empty object. """ return "" , 200 , {} if name == " main " : This is used when running locally only.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Configuring warmup requests to improve performance Stay organized with collections Save and categorize content based on your preferences.
- In most cases where warmup requests are enabled, you won't notice an increase in instance hours because your application is simply initializing in a warmup request instead of a loading request.

### "Scheduling jobs with cron.yaml \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Important considerations for target : If you have traffic splitting enabled, your job requests will not be split between the versions that you have configured: IP address splitting: Job requests from the Cron service are always sent from the same IP address and therefore, get routed to the same version every time.
- For example, if the /tasks/hello service2 URL is defined in both of the following cron.yaml and dispatch.yaml files, the job requests are sent to service2 , even though target: service1 is specified: cron.yaml : cron : - description : "test dispatch vs target" url : /tasks/hello service2 schedule : every 1 mins target : service1 dispatch.yaml : dispatch : - url : ' /tasks/hello service2' service : service2 retry parameters Optional.
- On the first day of January, April, July, and October, it runs one time at 00:00: schedule : 1 of jan,april,july,oct 00:00 Specifying retries If a cron job's request handler returns a status code that is not in the range 200–299 (inclusive) App Engine considers that job to have failed.
- You can do so by validating an HTTP header and the source IP address for the request: Requests from the Cron Service will contain the following HTTP header: "X-Appengine-Cron" : "true" This and other headers are set internally by App Engine.

