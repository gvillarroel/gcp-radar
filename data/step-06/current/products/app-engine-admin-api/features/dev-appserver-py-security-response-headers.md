---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:38:45.372Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "dev_appserver.py security response headers"
feature_slug: "dev-appserver-py-security-response-headers"
latest_feature_date: "2017-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/release-notes"
keywords:
  - "dev_appserver.py security response headers"
  - "security response hardening"
  - "admin console response headers"
  - "Content-Security-Policy"
  - "X-XSS-Protection"
  - "security headers"
  - "X-Frame-Options"
  - "CSP header"
---

# dev_appserver.py security response headers

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

The App Engine dev_appserver.py admin console began returning security response headers, including X-Frame-Options, X-XSS-Protection, and Content-Security-Policy.

## Extended Definition

The feature is the addition of security response headers on App Engine Admin API responses, specifically `X-Frame-Options: SAMEORIGIN`, `X-XSS-Protection: 1; mode=block`, and `Content-Security-Policy: default-src 'self'; frame-ancestors 'none'`. This applies to all responses noted in the release note entry (as written), which indicates a browser-side security-hardening change for those responses.

## Evidence Summary

The release notes entry provides explicit evidence that the listed security headers were added to all responses, but gives limited context on exact API surface or duration of the change.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/release-notes](https://docs.cloud.google.com/appengine/docs/admin-api/release-notes)

## Supporting Pages

### App Engine Admin API release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/release-notes](https://docs.cloud.google.com/appengine/docs/admin-api/release-notes)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Added the following headers to all responses: X-Frame-Options=SAMEORIGIN X-XSS-Protection=1; mode=block Content-Security-Policy=default-src 'self'; frame-ancestors 'none' November 15, 2017 Deprecated Announced the deprecation of the Python SSL library version 2.7 .

