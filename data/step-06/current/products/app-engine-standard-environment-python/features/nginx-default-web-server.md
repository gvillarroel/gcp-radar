---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.782Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "nginx default web server"
feature_slug: "nginx-default-web-server"
latest_feature_date: "2018-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/python3"
  - "https://cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "serves"
  - "nginx"
  - "server"
  - "default"
---

# nginx default web server

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Nginx serves as the default web server for App Engine standard Python applications.

## Extended Definition

Nginx serves as the default web server for App Engine standard Python applications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/python3](https://docs.cloud.google.com/appengine/docs/standard/python3)
- [https://cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "Python 3 Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3](https://docs.cloud.google.com/appengine/docs/standard/python3)
- Source ID: `site-docs-reference-4`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you do not specify an entrypoint for the Python 3 runtime, App Engine configures and starts the default Gunicorn web server.
- Using the default port 8080 prevents App Engine from using its NGINX layer to compress HTTP responses.
- The following table lists the endpoints where you can make HTTP requests for specific metadata: Metadata endpoint Description /computeMetadata/v1/project/numeric-project-id The project number assigned to your project. /computeMetadata/v1/project/project-id The project ID assigned to your project. /computeMetadata/v1/instance/region The region the instance is running in. /computeMetadata/v1/instance/service-accounts/default/aliases /computeMetadata/v1/instance/service-accounts/default/email The default service account email assigned to your project. /computeMetadata/v1/instance/service-accounts/default/ Lists all the default service accounts for your project. /computeMetadata/v1/instance/service-accounts/default/scopes Lists all the supported scopes for the default service accounts. /computeMetadata/v1/instance/service-accounts/default/token Returns the auth token that can be used to authenticate your application to other Google Cloud APIs.
- The example below shows an App Engine deployment that uses two gunicorn workers for serving apps: entrypoint : gunicorn - b : $ PORT - w 2 main : app We recommend that you configure your web server to listen and respond to HTTP requests on the port specified by your $PORT environment variable .

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Response caching The Google Front End, and potentially the user's browser and other intermediate caching proxy servers, will cache your app's responses as instructed by standard caching headers that you specify in the response.
- Cache expiration By default, the caching headers that App Engine static file and directory handlers add to responses instruct clients and web proxies such as the Google Front End to expire the cache after 10 minutes.
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.
- Applications that are heavily CPU-bound may also incur some additional latency in order to efficiently share resources with other applications on the same servers.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-3`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Response caching The Google Front End, and potentially the user's browser and other intermediate caching proxy servers, will cache your app's responses as instructed by standard caching headers that you specify in the response.
- Cache expiration By default, the caching headers that App Engine static file and directory handlers add to responses instruct clients and web proxies such as the Google Front End to expire the cache after 10 minutes.
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.
- Applications that are heavily CPU-bound may also incur some additional latency in order to efficiently share resources with other applications on the same servers.

