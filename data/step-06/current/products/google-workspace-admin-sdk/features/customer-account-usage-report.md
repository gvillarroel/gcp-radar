---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:57:36.636Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Customer account usage report"
feature_slug: "customer-account-usage-report"
latest_feature_date: "2014-02-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/admin-sdk/directory/reference/rest"
  - "https://developers.google.com/admin-sdk/overview"
  - "https://developers.google.com/admin-sdk/reference-overview"
keywords:
  - "customer"
  - "account"
  - "usage"
  - "report"
  - "that"
  - "tracks"
  - "metrics"
  - "such"
---

# Customer account usage report

Product: Google Workspace Admin SDK
Coverage: LOW

## Step 02 Summary

A report that tracks customer account usage metrics such as authorized apps, quotas, and license counts.

## Extended Definition

A report that tracks customer account usage metrics such as authorized apps, quotas, and license counts.

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
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: chromeosdevices Methods action (deprecated) POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action Use BatchChangeChromeOsDeviceStatus instead. get GET /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Retrieves a Chrome OS device's properties. list GET /admin/directory/v1/customer/{customerId}/devices/chromeos Retrieves a paginated list of Chrome OS devices within an account. moveDevicesToOu POST /admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu Moves or inserts multiple Chrome OS devices to an organizational unit. patch PATCH /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId . update PUT /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId .
- REST Resource: mobiledevices Methods action POST /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action Takes an action that affects a mobile device. delete DELETE /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId} Removes a mobile device. get GET /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId} Retrieves a mobile device's properties. list GET /admin/directory/v1/customer/{customerId}/devices/mobile Retrieves a paginated list of all user-owned mobile devices for an account.
- REST Resource: resources.features Methods delete DELETE /admin/directory/v1/customer/{customer}/resources/features/{featureKey} Deletes a feature. get GET /admin/directory/v1/customer/{customer}/resources/features/{featureKey} Retrieves a feature. insert POST /admin/directory/v1/customer/{customer}/resources/features Inserts a feature. list GET /admin/directory/v1/customer/{customer}/resources/features Retrieves a list of features for an account. patch PATCH /admin/directory/v1/customer/{customer}/resources/features/{featureKey} Patches a feature. rename POST /admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename Renames a feature. update PUT /admin/directory/v1/customer/{customer}/resources/features/{featureKey} Updates a feature.
- REST Resource: resources.calendars Methods delete DELETE /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId} Deletes a calendar resource. get GET /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId} Retrieves a calendar resource. insert POST /admin/directory/v1/customer/{customer}/resources/calendars Inserts a calendar resource. list GET /admin/directory/v1/customer/{customer}/resources/calendars Retrieves a list of calendar resources for an account. patch PATCH /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId} Patches a calendar resource. update PUT /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId} Updates a calendar resource.

### Admin SDK API overview \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/overview](https://developers.google.com/admin-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Reports API — Generate reports about customers and user usage.
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- Chrome Browser Enrollment Token API — Manage Chrome browser enrollment tokens for your account.
- Beta APIs Chrome Enterprise Core API — Manage Chrome browser devices for your account.

### Admin SDK API reference \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/reference-overview](https://developers.google.com/admin-sdk/reference-overview)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Reports API — Generate reports about customers and user usage.
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- Admin SDK API v1.1beta1 Chrome Enterprise Core API — Manage Chrome browser devices for your account.
- Chrome Browser Enrollment Token API — Manage Chrome browser enrollment tokens for your account.

