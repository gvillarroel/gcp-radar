---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:38:45.403Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "URLFetch payload size exception handling"
feature_slug: "urlfetch-payload-size-exception-handling"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/release-notes"
keywords:
  - "URLFetch too large payload"
  - "too large request payload"
  - "payload size limit"
  - "urlfetch exception"
  - "URLFetch request"
  - "RequestPayloadTooLargeException"
  - "RequestPayloadTooLarge"
  - "URLFetch"
---

# URLFetch payload size exception handling

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

URLFetch requests with overly large payloads now use RequestPayloadTooLargeException.

## Extended Definition

URLFetch payload size exception handling in the App Engine Admin API refers to updated behavior where URLFetch requests with payloads that are too large now raise a `RequestPayloadTooLargeException`. The release notes explicitly attribute this behavior to the oauth2client library upgrade to version 1.4.2, indicating a behavioral change in how oversized URLFetch request payloads are reported as errors.

## Evidence Summary

The App Engine Admin API release notes state that, as of Aug 27, 2015, oversized URLFetch payloads are handled by using `RequestPayloadTooLargeException`.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/release-notes](https://docs.cloud.google.com/appengine/docs/admin-api/release-notes)

## Supporting Pages

### App Engine Admin API release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/release-notes](https://docs.cloud.google.com/appengine/docs/admin-api/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- August 27, 2015 Feature oauth2client library upgraded to version 1.4.2 Feature Use RequestPayloadTooLargeException for URLFetch requests with payloads that are too large.

