---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:38:45.383Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "App Engine SSL certificate management"
feature_slug: "app-engine-ssl-certificate-management"
latest_feature_date: "2017-06-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates"
  - "https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates/list"
keywords:
  - "TLS certificate management"
  - "App Engine cert manager"
  - "SSL certificate resource"
  - "create SSL certificate"
  - "gcloud app ssl-certificates"
  - "AuthorizedCertificates"
  - "certificate management"
  - "SSL certificates"
---

# App Engine SSL certificate management

Product: App Engine Admin API
Coverage: LOW

## Step 02 Summary

Beta-level App Engine Admin API and gcloud features can now create and manage SSL certificates.

## Extended Definition

Beta-level App Engine Admin API and gcloud features can now create and manage SSL certificates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates)
- [https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates/list](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates/list)

## Supporting Pages

### "REST Resource: apps.authorizedCertificates \_|\_ App Engine Admin API \_\

- URL: [https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates)
- Source ID: `site-api-reference`
- Final score: 80
- Re-rank relevance: STRONG
- Re-rank rationale: The page documents the `apps.authorizedCertificates` resource, including certificate creation-related fields and update behavior for SSL certificates in App Engine Admin API.

Evidence snippets:
- Methods create Uploads the specified SSL certificate. delete Deletes the specified SSL certificate. get Gets the specified SSL certificate. list Lists all SSL certificates the user is authorized to administer. patch Updates the specified SSL certificate.
- Home Technology areas App Engine Admin API Reference Send feedback REST Resource: apps.authorizedCertificates Stay organized with collections Save and categorize content based on your preferences.
- To update the renewal time on this certificate, upload an SSL certificate with a different expiration time using AuthorizedCertificates.UpdateAuthorizedCertificate .
- Managed certificates are tied to the lifecycle of a DomainMapping and cannot be updated or deleted via the AuthorizedCertificates API.

### "REST Resource: apps.authorizedCertificates \_|\_ App Engine Admin API \_\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: STRONG
- Re-rank rationale: The page is the App Engine Admin API reference for `apps.authorizedCertificates` and defines the `AuthorizedCertificate` resource used to create and manage SSL certificates.

Evidence snippets:
- Methods create Uploads the specified SSL certificate. delete Deletes the specified SSL certificate. get Gets the specified SSL certificate. list Lists all SSL certificates the user is authorized to administer. patch Updates the specified SSL certificate.
- Home Technology areas App Engine Admin API Reference Send feedback REST Resource: apps.authorizedCertificates Stay organized with collections Save and categorize content based on your preferences.
- To update the renewal time on this certificate, upload an SSL certificate with a different expiration time using AuthorizedCertificates.UpdateAuthorizedCertificate .
- Managed certificates are tied to the lifecycle of a DomainMapping and cannot be updated or deleted via the AuthorizedCertificates API.

### "Method: apps.authorizedCertificates.list \_|\_ App Engine Admin API \_|\_\

- URL: [https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates/list](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates/list)
- Source ID: `site-api-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "certificates" : [ { object ( AuthorizedCertificate ) } ] , "nextPageToken" : string } Fields certificates[] object ( AuthorizedCertificate ) The SSL certificates the user is authorized to administer. nextPageToken string Continuation token for fetching the next page of results.
- Home Technology areas App Engine Admin API Reference Send feedback Method: apps.authorizedCertificates.list Stay organized with collections Save and categorize content based on your preferences.
- Response body If successful, the response body contains data with the following structure: Response message for AuthorizedCertificates.ListAuthorizedCertificates .
- HTTP request GET https://appengine.googleapis.com/v1/{parent=apps/ }/authorizedCertificates The URL uses gRPC Transcoding syntax.

