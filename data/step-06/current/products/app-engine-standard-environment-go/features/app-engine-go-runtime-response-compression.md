---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.758Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine Go runtime response compression"
feature_slug: "app-engine-go-runtime-response-compression"
latest_feature_date: "2016-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/apis"
keywords:
  - "app"
  - "engine"
  - "go"
  - "runtime"
  - "response"
  - "compression"
  - "was"
  - "enabled"
---

# App Engine Go runtime response compression

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Response compression was enabled for the Go runtime in App Engine, helping reduce outbound bandwidth for some applications.

## Extended Definition

Response compression was enabled for the Go runtime in App Engine, helping reduce outbound bandwidth for some applications.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-2`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- If you want to use the App Engine legacy bundled services for second-generation runtimes , set this field to true . build env variables Optional.
- If you do not specify entrypoint for the Python runtime, App Engine configures and starts the Gunicorn webserver.
- For more information about App Engine specific headers, see Request headers and responses .

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Response compression For responses that are returned by your code, App Engine compresses data in the response if both of the following conditions are true: The request contains the Accept-Encoding header that includes gzip as a value.
- The following limits apply specifically to the use of request handlers: Limit Amount Request size 32 megabytes Response size 32 megabytes Request timeout Depends on the type of scaling your app uses Maximum total number of files (app files and static files) 10,000 total 1,000 per directory Maximum size of an application file 32 megabytes Maximum size of a static file 32 megabytes Maximum total size of all application and static files First 1 gigabyte is free $ 0.026 per gigabyte per month after first 1 gigabyte Pending request timeout 10 seconds Maximum size of a single request header field 8 kilobytes for second-generation runtimes in the standard environment.
- For responses that are returned by an App Engine static file or directory handler , response data is compressed if all of the following conditions are true: The request includes Accept-Encoding with gzip as one of its values.
- Cache expiration By default, the caching headers that App Engine static file and directory handlers add to responses instruct clients and web proxies such as the Google Front End to expire the cache after 10 minutes.

### "APIs & Reference \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine legacy bundled services APIs App Engine legacy bundled services APIs for Go Use the legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- App Engine legacy bundled services APIs for Python Use the App Engine legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- App Engine legacy bundled services APIs for PHP Use the App Engine legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- App Engine legacy bundled services APIs for Java Use the legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.

