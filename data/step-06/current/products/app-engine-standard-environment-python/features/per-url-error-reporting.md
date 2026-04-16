---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.793Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Per-URL error reporting"
feature_slug: "per-url-error-reporting"
latest_feature_date: "2016-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://cloud.google.com/appengine/docs/standard/python3/services/access"
keywords:
  - "reporting"
  - "status"
  - "shows"
  - "client"
  - "server"
  - "error"
---

# Per-URL error reporting

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Per-URL error reporting shows server and client error status more accurately in the App Engine dashboard.

## Extended Definition

Per-URL error reporting shows server and client error status more accurately in the App Engine dashboard.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If a script handler generates a response larger than this limit, the server sends back an empty response with a 500 Internal Server Error status code.
- Depending on a variety of factors, such as which type of response data is cached first, which Vary headers you have specified in the response, and which headers are included in the request, a client could request compressed data but receive uncompressed data, and the other way around.
- Response caching The Google Front End, and potentially the user's browser and other intermediate caching proxy servers, will cache your app's responses as instructed by standard caching headers that you specify in the response.
- Cache expiration By default, the caching headers that App Engine static file and directory handlers add to responses instruct clients and web proxies such as the Google Front End to expire the cache after 10 minutes.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-3`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If a script handler generates a response larger than this limit, the server sends back an empty response with a 500 Internal Server Error status code.
- Depending on a variety of factors, such as which type of response data is cached first, which Vary headers you have specified in the response, and which headers are included in the request, a client could request compressed data but receive uncompressed data, and the other way around.
- Response caching The Google Front End, and potentially the user's browser and other intermediate caching proxy servers, will cache your app's responses as instructed by standard caching headers that you specify in the response.
- Cache expiration By default, the caching headers that App Engine static file and directory handlers add to responses instruct clients and web proxies such as the Google Front End to expire the cache after 10 minutes.

### "Access legacy bundled services for Python 3 \_|\_ App Engine standard environment\

- URL: [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- Source ID: `site-docs-reference-3`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- For example: python3 CLOUD SDK ROOT / bin / dev appserver . py -- runtime python path = "python27=/user/bin/python2.7,python3=/usr/bin/python3" Important: When using the local development server to test Python 3 apps that use the Deferred API , you must set the following environment variable in your app.yaml : DEFERRED USE CROSS COMPATIBLE PICKLE PROTOCOL: 'True' Pickle Compatibility Shared services including Memcache, Cloud NDB and deferred use the pickle module to serialize and share Python objects.
- For example: python3 CLOUD SDK ROOT / bin / dev appserver . py -- runtime python path =/ usr / bin / python3 You can also set the argument to a comma-separated list of [RUNTIME ID]=[PYTHON INTERPRETER PATH] pairs.
- Client ( unpickler = unpickle factory )) The latin1 encoding, defines a mapping for each of the 256 possible values of each byte in a Python 2 string .
- When running the dev appserver.py command, you must set the --runtime python path argument to include a path to the Python 3 interpreter.

