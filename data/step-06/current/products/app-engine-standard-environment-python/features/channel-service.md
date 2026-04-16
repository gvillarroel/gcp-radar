---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.790Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Channel service"
feature_slug: "channel-service"
latest_feature_date: "2016-10-27"
deprecation_date: "2017-10-31"
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/communicating-between-services"
  - "https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "messaging"
  - "channel"
  - "client"
  - "push"
  - "enables"
  - "server"
---

# Channel service

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

The Channel service enables server-to-client push messaging for App Engine applications; deprecated on 2017-10-31.

## Extended Definition

The Channel service enables server-to-client push messaging for App Engine applications; deprecated on 2017-10-31.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/communicating-between-services](https://cloud.google.com/appengine/docs/standard/communicating-between-services)
- [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "Communicating between your services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure the client app to send all-traffic through the Serverless VPC Access connector, instead of configuring requests to use the private.googleapis.com IP range.
- In the standard environment, attach each client version to a Serverless VPC Access connector on the Shared VPC network.
- Learn how to authorize the requests between your services and other Google Cloud services: Provide credentials for Application Default Credentials Using user-managed service accounts Your App Engine services can also communicate using Pub/Sub , which provides reliable asynchronous many-to-many messaging between processes, including App Engine.
- Route the traffic over a Serverless VPC Access connector : For each App Engine version sending private traffic to other app endpoints, attach the version to a Serverless VPC Access connector belonging to one of the Google Cloud project's own networks, not a Shared VPC network.

### "Communicating between your services \_|\_ App Engine standard environment\

- URL: [https://cloud.google.com/appengine/docs/standard/communicating-between-services](https://cloud.google.com/appengine/docs/standard/communicating-between-services)
- Source ID: `site-docs-reference-3`
- Final score: 61
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure the client app to send all-traffic through the Serverless VPC Access connector, instead of configuring requests to use the private.googleapis.com IP range.
- In the standard environment, attach each client version to a Serverless VPC Access connector on the Shared VPC network.
- Learn how to authorize the requests between your services and other Google Cloud services: Provide credentials for Application Default Credentials Using user-managed service accounts Your App Engine services can also communicate using Pub/Sub , which provides reliable asynchronous many-to-many messaging between processes, including App Engine.
- Route the traffic over a Serverless VPC Access connector : For each App Engine version sending private traffic to other app endpoints, attach the version to a Serverless VPC Access connector belonging to one of the Google Cloud project's own networks, not a Shared VPC network.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Depending on a variety of factors, such as which type of response data is cached first, which Vary headers you have specified in the response, and which headers are included in the request, a client could request compressed data but receive uncompressed data, and the other way around.
- Response caching The Google Front End, and potentially the user's browser and other intermediate caching proxy servers, will cache your app's responses as instructed by standard caching headers that you specify in the response.
- Cache expiration By default, the caching headers that App Engine static file and directory handlers add to responses instruct clients and web proxies such as the Google Front End to expire the cache after 10 minutes.
- Caching static content To ensure that clients always receive updated static content as soon as it is published, we recommend that you serve static content from versioned directories, such as css/v1/styles.css .

