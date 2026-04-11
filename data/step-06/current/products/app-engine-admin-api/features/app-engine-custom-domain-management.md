---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:38:45.382Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "App Engine custom domain management"
feature_slug: "app-engine-custom-domain-management"
latest_feature_date: "2017-06-06"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/appengine/docs/admin-api/reference/rest"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest"
  - "https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates"
keywords:
  - "gcloud app domain-mappings create"
  - "DomainMappings resource"
  - "custom domain mapping API"
  - "custom domain mapping"
  - "domain-mappings"
  - "domain mapping"
  - "DomainMappings"
  - "custom domains"
---

# App Engine custom domain management

Product: App Engine Admin API
Coverage: HIGH

## Step 02 Summary

Beta-level App Engine Admin API and gcloud features can now create and manage custom domains.

## Extended Definition

App Engine custom domain management is the App Engine Admin API feature for handling `DomainMappings` resources on an app. The API documentation specifies endpoints to create (map a domain to an application), get, list, patch/update, and delete domain mappings in both `v1beta` and `v1`, indicating domain-to-app mapping lifecycle management. Certificate resources also expose references to user-visible domain mappings, showing the mapping objects are integral to custom domain configuration.

## Evidence Summary

The cited REST reference pages define the `apps.domainMappings` resource and its create/get/list/patch/delete operations, plus certificate metadata that includes associated domain mapping references.

## Source Links

- [https://cloud.google.com/appengine/docs/admin-api/reference/rest](https://cloud.google.com/appengine/docs/admin-api/reference/rest)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest)
- [https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates)

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
- Re-rank rationale: It references domain names on certificates and authorized domains, but does not define general custom-domain management operations.

Evidence snippets:
- Any value specified here in a request is ignored. visibleDomainMappings[] string The full paths to user visible Domain Mapping resources that have this certificate mapped.
- Any value specified here in a request is ignored. domainMappingsCount integer Aggregate count of the domain mappings with this certificate mapped.
- JSON representation { "name" : string , "id" : string , "displayName" : string , "domainNames" : [ string ] , "expireTime" : string , "certificateRawData" : { object ( CertificateRawData ) } , "managedCertificate" : { object ( ManagedCertificate ) } , "visibleDomainMappings" : [ string ] , "domainMappingsCount" : integer } Fields name string Full path to the AuthorizedCertificate resource in the API.
- This may not represent the full list of mapped domain mappings if the user does not have VIEWER permissions on all of the applications that have this certificate mapped.

