---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.321Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Search API offsets and cursors"
feature_slug: "search-api-offsets-and-cursors"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
keywords:
  - "offsets"
  - "cursors"
  - "responses"
  - "search"
  - "requests"
  - "supports"
---

# Search API offsets and cursors

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The Search API now supports offsets and cursors in search requests and responses.

## Extended Definition

The Search API now supports offsets and cursors in search requests and responses.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- OK This document describes how your App Engine application receives requests and sends responses.
- Vary : To enable the cache to return different responses for a URL based on headers that are sent in the request, set one or more of the following values in the Vary response header: Accept , Accept-Encoding , Origin , or X-Origin Due to the potential for high cardinality, data won't be cached for other Vary values.
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- Response compression For responses that are returned by your code, App Engine compresses data in the response if both of the following conditions are true: The request contains the Accept-Encoding header that includes gzip as a value.

### "Mapping custom domains \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains)
- Source ID: `site-docs-reference-4`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following pages: Using Google-managed SSL certificates Using self-managed SSL certificates SSL policies Note the following limitation: We recommend that you use ingress controls so that your app only receives requests sent from the load balancer (and the VPC if you use it).
- Delegating ownership to other Google Cloud users or service accounts If you need to delegate the ownership of your domain to other users or service accounts, you can add permission through the Search Console page.
- Note: Some third party CDN providers might inadvertently intercept validation requests, preventing them from reaching the App Engine app and causing the domain mapping to fail or its certificate to fail to renew.
- To view a list of service accounts, open the Service Accounts page in the Google Cloud console To add permissions through the Search Console : Open the Search Console verification .

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- This includes: data received by the application in secure requests and non-secure requests uploads to the Blobstore data received in response to HTTP requests by the URL fetch service Secure outgoing bandwidth The amount of data sent by the application over a secure connection in response to requests.
- This includes: data served in response to both secure requests and non-secure requests by application servers, static file servers, or the Blobstore data sent in email messages data in outgoing HTTP requests sent by the URL fetch service.
- Resource or API call Free Quota Total storage (documents and indexes) 0.25 GB Queries 1000 queries per day Adding documents to indexes 0.01 GB per day The application console quota section displays a raw count of API requests.

