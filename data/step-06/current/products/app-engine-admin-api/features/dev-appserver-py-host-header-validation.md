---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:38:45.370Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "dev_appserver.py host header validation"
feature_slug: "dev-appserver-py-host-header-validation"
latest_feature_date: "2017-12-05"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/release-notes"
keywords:
  - "enable_host_checking=false"
  - "enable_host_checking flag"
  - "--enable_host_checking"
  - "host check flag"
  - "host header checking"
  - "Host header validation"
  - "admin console request validation"
  - "dev_appserver.py"
---

# dev_appserver.py host header validation

Product: App Engine Admin API
Coverage: HIGH

## Step 02 Summary

App Engine dev_appserver.py now enforces Host header validation for incoming HTTP requests, with optional disabling via --enable_host_checking=false.

## Extended Definition

In this feature, `dev_appserver.py` enforces Host header validation for incoming HTTP requests, requiring the Host value to be `localhost`, an IPv4 or IPv6 loopback address, or a value explicitly set via `--host`. The release notes also describe additional admin-console request security behavior in which inbound requests containing an `Origin` header are rejected. Host checking can be disabled by setting the `--enable_host_checking` (listed as the enable-host-checking flag) to false.

## Evidence Summary

The App Engine Admin API release notes provide the specific change date and technical details for host-header enforcement, accepted Host values, disable option, and related Origin-header rejection.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/release-notes](https://docs.cloud.google.com/appengine/docs/admin-api/release-notes)

## Supporting Pages

### App Engine Admin API release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/release-notes](https://docs.cloud.google.com/appengine/docs/admin-api/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- To disable host checking, set the --enable host checking flag to false .
- December 05, 2017 Feature For all incoming HTTP requests, dev appserver.py now requires that all HTTP requests must have an HTTP Host header and its value is either localhost , an IPv4 or IPv6 loopback address, or if specified, the value passed in via --host .
- Feature Introduced additional security-header related behavior to the dev appserver.py admin console: Inbound requests containing an Origin header are rejected.

