---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:38:45.375Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "App Engine managed SSL certificates"
feature_slug: "app-engine-managed-ssl-certificates"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates"
keywords:
  - "automatic certificate renewal"
  - "certificate revocation"
  - "automatic certificate provisioning"
  - "Google-managed certificate"
  - "managed cert"
  - "managed SSL certificates"
  - "managed certificate"
  - "custom domain SSL"
---

# App Engine managed SSL certificates

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

Managed certificates became available to add SSL to App Engine custom domains with automatic provisioning, renewal, and revocation.

## Extended Definition

In the App Engine Admin API, App Engine managed SSL certificates are Google-managed certificates tied to a DomainMapping and surfaced in the AuthorizedCertificates resource. The API documentation states these certificates cannot be updated or deleted via the AuthorizedCertificates API, and that their renewal process is fully managed, with renewal occurring automatically before expiry while failures are tracked via management status. The available evidence does not explicitly document manual certificate revocation behavior, so that part should be treated as unconfirmed from the cited pages.

## Evidence Summary

The cited API reference explains managed certificates’ DomainMapping lifecycle coupling, management restrictions in AuthorizedCertificates, and automatic (fully managed) renewal behavior.

## Source Links

- [https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates)

## Supporting Pages

### "REST Resource: apps.authorizedCertificates \_|\_ App Engine Admin API \_\

- URL: [https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates)
- Source ID: `site-api-reference`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: It explicitly includes a `managedCertificate` field on the AuthorizedCertificate resource, indicating support for managed certificate data but not a full dedicated managed-SSL feature description.

Evidence snippets:
- Managed certificates are tied to the lifecycle of a DomainMapping and cannot be updated or deleted via the AuthorizedCertificates API.

### "REST Resource: apps.authorizedCertificates \_|\_ App Engine Admin API \_\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: The page includes a `managedCertificate` field for `AuthorizedCertificate`, confirming managed certificate support, but does not detail automatic provisioning, renewal, or revocation behavior.

Evidence snippets:
- Managed certificates are tied to the lifecycle of a DomainMapping and cannot be updated or deleted via the AuthorizedCertificates API.

