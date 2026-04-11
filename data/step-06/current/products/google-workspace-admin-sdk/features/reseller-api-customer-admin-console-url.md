---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:57:36.645Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Reseller API customer Admin console URL"
feature_slug: "reseller-api-customer-admin-console-url"
latest_feature_date: "2013-09-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/admin-sdk/directory/reference/rest"
  - "https://developers.google.com/admin-sdk/reference-overview"
  - "https://developers.google.com/admin-sdk/overview"
keywords:
  - "reseller"
  - "api"
  - "customer"
  - "admin"
  - "console"
  - "url"
  - "the"
  - "resource"
---

# Reseller API customer Admin console URL

Product: Google Workspace Admin SDK
Coverage: LOW

## Step 02 Summary

The customer resource exposes a read-only resourceUiUrl that links to the customer's Admin console dashboard.

## Extended Definition

The customer resource exposes a read-only resourceUiUrl that links to the customer's Admin console dashboard.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/admin-sdk/directory/reference/rest](https://developers.google.com/admin-sdk/directory/reference/rest)
- [https://developers.google.com/admin-sdk/reference-overview](https://developers.google.com/admin-sdk/reference-overview)
- [https://developers.google.com/admin-sdk/overview](https://developers.google.com/admin-sdk/overview)

## Supporting Pages

### Admin SDK: Directory API \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/directory/reference/rest](https://developers.google.com/admin-sdk/directory/reference/rest)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: roles Methods delete DELETE /admin/directory/v1/customer/{customer}/roles/{roleId} Deletes a role. get GET /admin/directory/v1/customer/{customer}/roles/{roleId} Retrieves a role. insert POST /admin/directory/v1/customer/{customer}/roles Creates a role. list GET /admin/directory/v1/customer/{customer}/roles Retrieves a paginated list of all the roles in a domain. patch PATCH /admin/directory/v1/customer/{customer}/roles/{roleId} Patches a role. update PUT /admin/directory/v1/customer/{customer}/roles/{roleId} Updates a role.
- REST Resource: customer.devices.chromeos Methods batchChangeStatus POST /admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus Changes the status of a batch of ChromeOS devices. countChromeOsDevices GET /admin/directory/v1/customer/{customerId}/devices/chromeos:countChromeOsDevices Counts ChromeOS devices matching the request. issueCommand POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand Issues a command for the device to execute.
- REST Resource: domainAliases Methods delete DELETE /admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName} Deletes a domain Alias of the customer. get GET /admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName} Retrieves a domain alias of the customer. insert POST /admin/directory/v1/customer/{customer}/domainaliases Inserts a domain alias of the customer. list GET /admin/directory/v1/customer/{customer}/domainaliases Lists the domain aliases of the customer.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://admin.googleapis.com REST Resource: asps Methods delete DELETE /admin/directory/v1/users/{userKey}/asps/{codeId} Deletes an ASP issued by a user. get GET /admin/directory/v1/users/{userKey}/asps/{codeId} Gets information about an ASP issued by a user. list GET /admin/directory/v1/users/{userKey}/asps Lists the ASPs issued by a user.

### Admin SDK API reference \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/reference-overview](https://developers.google.com/admin-sdk/reference-overview)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Admin console Reference Send feedback Admin SDK API reference Stay organized with collections Save and categorize content based on your preferences.
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- Admin SDK API v1 Chrome Printer Management API — Manage CUPS printers and print servers for your organization.
- Admin SDK API v1.1beta1 Chrome Enterprise Core API — Manage Chrome browser devices for your account.

### Admin SDK API overview \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/overview](https://developers.google.com/admin-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Admin console Guides Send feedback Admin SDK API overview Stay organized with collections Save and categorize content based on your preferences.
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- Contact Delegation API — Delegate contacts access to another person.
- Reports API — Generate reports about customers and user usage.

