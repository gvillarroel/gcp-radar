---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:38:45.364Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "App Engine SSL library version upgrade to 2.7.11"
feature_slug: "app-engine-ssl-library-version-upgrade-to-2-7-11"
latest_feature_date: "2018-05-24"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/release-notes"
keywords:
  - "SSL library bump"
  - "OpenSSL 2.7.11"
  - "all applications SSL library"
  - "SSL migration"
  - "library upgrade"
  - "SSL 2.7.11"
  - "version 2.7.11"
  - "Python 2.7 SSL"
---

# App Engine SSL library version upgrade to 2.7.11

Product: App Engine Admin API
Coverage: HIGH

## Step 02 Summary

The SSL library used by all App Engine apps was migrated from version 2.7 to 2.7.11.

## Extended Definition

The feature is a platform-wide SSL runtime library upgrade in App Engine, documented as migrating apps from SSL library version 2.7 to 2.7.11. In the release notes dated May 24, 2018, Google states this migration applies to all apps and directs applications to use SSL version 2.7.11.

## Evidence Summary

The release notes provide a dated entry confirming the SSL library migration in App Engine from version 2.7 to 2.7.11 for all applications.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/release-notes](https://docs.cloud.google.com/appengine/docs/admin-api/release-notes)

## Supporting Pages

### App Engine Admin API release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/release-notes](https://docs.cloud.google.com/appengine/docs/admin-api/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- August 27, 2015 Feature oauth2client library upgraded to version 1.4.2 Feature Use RequestPayloadTooLargeException for URLFetch requests with payloads that are too large.
- June 15, 2017 Change For SSL 2.7.11 , if you don't specify the certificate root path, the default is set to /etc/ca-certificates.crt .
- May 24, 2018 Feature Migrated SSL library from version 2.7 to version 2.7.11 for all apps.
- Applications should migrate to use SSL version 2.7.11.

