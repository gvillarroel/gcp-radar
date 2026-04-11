---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:38:45.375Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "App Engine custom domain mapping"
feature_slug: "app-engine-custom-domain-mapping"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/admin-api/reference/rest"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest"
keywords:
  - "gcloud app domain-mappings create"
  - "apps.domainMappings.get"
  - "DomainMappings resource"
  - "apps.domainMappings.create"
  - "custom domain mapping"
  - "add a custom domain"
  - "domain mapping"
  - "domainMappings"
---

# App Engine custom domain mapping

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

Support for mapping custom domains via App Engine Admin API methods and gcloud commands became generally available.

## Extended Definition

App Engine custom domain mapping is represented as the `apps.domainMappings` resource in the App Engine Admin API, which maps a domain to an App Engine application. The API exposes `create`, `delete`, `get`, `list`, and `patch` methods for this resource in both `v1` and `v1beta` endpoint families (`/v1/apps/{parent}/domainMappings` and `/v1beta/apps/{parent}/domainMappings` patterns), enabling standard lifecycle management of domain mappings.

## Evidence Summary

These App Engine Admin API reference pages define the `apps.domainMappings` resource and document API methods to create, retrieve, list, update, and delete domain mappings in both `v1` and `v1beta`.

## Source Links

- [https://cloud.google.com/appengine/docs/admin-api/reference/rest](https://cloud.google.com/appengine/docs/admin-api/reference/rest)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest)

## Supporting Pages

### App Engine Admin API \_|\_ Google Cloud Documentation

- URL: [https://cloud.google.com/appengine/docs/admin-api/reference/rest](https://cloud.google.com/appengine/docs/admin-api/reference/rest)
- Source ID: `site-api-reference`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1beta.apps.domainMappings Methods create POST /v1beta/{parent=apps/ }/domainMappings Maps a domain to an application. delete DELETE /v1beta/{name=apps/ /domainMappings/ } Deletes the specified domain mapping. get GET /v1beta/{name=apps/ /domainMappings/ } Gets the specified domain mapping. list GET /v1beta/{parent=apps/ }/domainMappings Lists the domain mappings on an application. patch PATCH /v1beta/{name=apps/ /domainMappings/ } Updates the specified domain mapping.
- REST Resource: v1.apps.domainMappings Methods create POST /v1/{parent=apps/ }/domainMappings Maps a domain to an application. delete DELETE /v1/{name=apps/ /domainMappings/ } Deletes the specified domain mapping. get GET /v1/{name=apps/ /domainMappings/ } Gets the specified domain mapping. list GET /v1/{parent=apps/ }/domainMappings Lists the domain mappings on an application. patch PATCH /v1/{name=apps/ /domainMappings/ } Updates the specified domain mapping.
- REST Resource: v1.apps REST Resource: v1.apps.authorizedCertificates REST Resource: v1.apps.authorizedDomains REST Resource: v1.apps.domainMappings REST Resource: v1.apps.firewall.ingressRules REST Resource: v1.apps.locations REST Resource: v1.apps.operations REST Resource: v1.apps.services REST Resource: v1.apps.services.versions REST Resource: v1.apps.services.versions.instances REST Resource: v1beta.apps REST Resource: v1beta.apps.authorizedCertificates REST Resource: v1beta.apps.authorizedDomains REST Resource: v1beta.apps.domainMappings REST Resource: v1beta.apps.firewall.ingressRules REST Resource: v1beta.apps.locations REST Resource: v1beta.apps.operations REST Resource: v1beta.apps.services REST Resource: v1beta.apps.services.versions REST Resource: v1beta.apps.services.versions.instances Service: appengine.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

### App Engine Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1beta.apps.domainMappings Methods create POST /v1beta/{parent=apps/ }/domainMappings Maps a domain to an application. delete DELETE /v1beta/{name=apps/ /domainMappings/ } Deletes the specified domain mapping. get GET /v1beta/{name=apps/ /domainMappings/ } Gets the specified domain mapping. list GET /v1beta/{parent=apps/ }/domainMappings Lists the domain mappings on an application. patch PATCH /v1beta/{name=apps/ /domainMappings/ } Updates the specified domain mapping.
- REST Resource: v1.apps.domainMappings Methods create POST /v1/{parent=apps/ }/domainMappings Maps a domain to an application. delete DELETE /v1/{name=apps/ /domainMappings/ } Deletes the specified domain mapping. get GET /v1/{name=apps/ /domainMappings/ } Gets the specified domain mapping. list GET /v1/{parent=apps/ }/domainMappings Lists the domain mappings on an application. patch PATCH /v1/{name=apps/ /domainMappings/ } Updates the specified domain mapping.
- REST Resource: v1.apps REST Resource: v1.apps.authorizedCertificates REST Resource: v1.apps.authorizedDomains REST Resource: v1.apps.domainMappings REST Resource: v1.apps.firewall.ingressRules REST Resource: v1.apps.locations REST Resource: v1.apps.operations REST Resource: v1.apps.services REST Resource: v1.apps.services.versions REST Resource: v1.apps.services.versions.instances REST Resource: v1beta.apps REST Resource: v1beta.apps.authorizedCertificates REST Resource: v1beta.apps.authorizedDomains REST Resource: v1beta.apps.domainMappings REST Resource: v1beta.apps.firewall.ingressRules REST Resource: v1beta.apps.locations REST Resource: v1beta.apps.operations REST Resource: v1beta.apps.services REST Resource: v1beta.apps.services.versions REST Resource: v1beta.apps.services.versions.instances Service: appengine.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

### "REST Resource: apps.authorizedCertificates \_|\_ App Engine Admin API \_\

- URL: [https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates)
- Source ID: `site-api-reference`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: The page only includes certificate references to domain mappings (e.g., `visibleDomainMappings`) and does not describe domain mapping workflows directly.

Evidence snippets:
- Any value specified here in a request is ignored. visibleDomainMappings[] string The full paths to user visible Domain Mapping resources that have this certificate mapped.
- Any value specified here in a request is ignored. domainMappingsCount integer Aggregate count of the domain mappings with this certificate mapped.
- JSON representation { "name" : string , "id" : string , "displayName" : string , "domainNames" : [ string ] , "expireTime" : string , "certificateRawData" : { object ( CertificateRawData ) } , "managedCertificate" : { object ( ManagedCertificate ) } , "visibleDomainMappings" : [ string ] , "domainMappingsCount" : integer } Fields name string Full path to the AuthorizedCertificate resource in the API.
- This may not represent the full list of mapped domain mappings if the user does not have VIEWER permissions on all of the applications that have this certificate mapped.

