---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.099Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "URL Fetch invalid port error handling"
feature_slug: "url-fetch-invalid-port-error-handling"
latest_feature_date: "2016-05-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
keywords:
  - "documented port ranges"
  - "URL fetch port validation"
  - "URL Fetch invalid port"
  - "URL Fetch error response"
  - "disallowed ports"
  - "URLFetch INVALID_URL"
  - "INVALID_URL"
  - "URL Fetch"
---

# URL Fetch invalid port error handling

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

URL Fetch now consistently returns INVALID_URL for requests to disallowed ports outside documented ranges.

## Extended Definition

URL Fetch now consistently returns INVALID_URL for requests to disallowed ports outside documented ranges.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This includes: data received by the application in secure requests and non-secure requests uploads to the Blobstore data received in response to HTTP requests by the URL fetch service Secure outgoing bandwidth The amount of data sent by the application over a secure connection in response to requests.
- This includes: data served in response to both secure requests and non-secure requests by application servers, static file servers, or the Blobstore data sent in email messages data in outgoing HTTP requests sent by the URL fetch service.
- Resource Default limit Cron job 250 cron jobs URL Fetch URL Fetch API calls The total number of times the application accessed the URL fetch service to perform an HTTP or HTTPS request.
- URL Fetch data received The amount of data received from the URL fetch service in responses.

