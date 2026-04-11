---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:57:36.646Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Reseller API customer subscriptions retrieval"
feature_slug: "reseller-api-customer-subscriptions-retrieval"
latest_feature_date: "2013-09-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/admin-sdk/directory/reference/rest"
  - "https://developers.google.com/admin-sdk/overview"
  - "https://developers.google.com/admin-sdk/reference-overview"
keywords:
  - "reseller"
  - "api"
  - "customer"
  - "subscriptions"
  - "retrieval"
  - "the"
  - "can"
  - "retrieve"
---

# Reseller API customer subscriptions retrieval

Product: Google Workspace Admin SDK
Coverage: LOW

## Step 02 Summary

The Reseller API can retrieve all of a customer's subscriptions using the customerId parameter.

## Extended Definition

The Reseller API can retrieve all of a customer's subscriptions using the customerId parameter.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/admin-sdk/directory/reference/rest](https://developers.google.com/admin-sdk/directory/reference/rest)
- [https://developers.google.com/admin-sdk/overview](https://developers.google.com/admin-sdk/overview)
- [https://developers.google.com/admin-sdk/reference-overview](https://developers.google.com/admin-sdk/reference-overview)

## Supporting Pages

### Admin SDK: Directory API \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/directory/reference/rest](https://developers.google.com/admin-sdk/directory/reference/rest)
- Source ID: `site-api-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: roles Methods delete DELETE /admin/directory/v1/customer/{customer}/roles/{roleId} Deletes a role. get GET /admin/directory/v1/customer/{customer}/roles/{roleId} Retrieves a role. insert POST /admin/directory/v1/customer/{customer}/roles Creates a role. list GET /admin/directory/v1/customer/{customer}/roles Retrieves a paginated list of all the roles in a domain. patch PATCH /admin/directory/v1/customer/{customer}/roles/{roleId} Patches a role. update PUT /admin/directory/v1/customer/{customer}/roles/{roleId} Updates a role.
- REST Resource: domainAliases Methods delete DELETE /admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName} Deletes a domain Alias of the customer. get GET /admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName} Retrieves a domain alias of the customer. insert POST /admin/directory/v1/customer/{customer}/domainaliases Inserts a domain alias of the customer. list GET /admin/directory/v1/customer/{customer}/domainaliases Lists the domain aliases of the customer.
- REST Resource: domains Methods delete DELETE /admin/directory/v1/customer/{customer}/domains/{domainName} Deletes a domain of the customer. get GET /admin/directory/v1/customer/{customer}/domains/{domainName} Retrieves a domain of the customer. insert POST /admin/directory/v1/customer/{customer}/domains Inserts a domain of the customer. list GET /admin/directory/v1/customer/{customer}/domains Lists the domains of the customer.
- REST Resource: chromeosdevices Methods action (deprecated) POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action Use BatchChangeChromeOsDeviceStatus instead. get GET /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Retrieves a Chrome OS device's properties. list GET /admin/directory/v1/customer/{customerId}/devices/chromeos Retrieves a paginated list of Chrome OS devices within an account. moveDevicesToOu POST /admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu Moves or inserts multiple Chrome OS devices to an organizational unit. patch PATCH /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId . update PUT /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId .

### Admin SDK API overview \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/overview](https://developers.google.com/admin-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- Contact Delegation API — Delegate contacts access to another person.
- Reports API — Generate reports about customers and user usage.
- Data Transfer API — Move files from one user to another.

### Admin SDK API reference \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/reference-overview](https://developers.google.com/admin-sdk/reference-overview)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- Contact Delegation API — Delegate contacts access to another person.
- Reports API — Generate reports about customers and user usage.
- Data Transfer API — Move files from one user to another.

