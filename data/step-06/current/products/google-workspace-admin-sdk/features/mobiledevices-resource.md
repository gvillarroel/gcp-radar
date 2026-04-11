---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:57:36.630Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Mobiledevices resource"
feature_slug: "mobiledevices-resource"
latest_feature_date: "2014-08-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/admin-sdk/directory/reference/rest"
  - "https://developers.google.com/admin-sdk/reference-overview"
  - "https://developers.google.com/admin-sdk/overview"
keywords:
  - "mobiledevices"
  - "resource"
  - "directory"
  - "api"
  - "that"
  - "exposes"
  - "mobile"
  - "device"
---

# Mobiledevices resource

Product: Google Workspace Admin SDK
Coverage: LOW

## Step 02 Summary

A Directory API resource that exposes mobile device details such as identifiers, language, and security state.

## Extended Definition

A Directory API resource that exposes mobile device details such as identifiers, language, and security state.

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
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: mobiledevices Methods action POST /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action Takes an action that affects a mobile device. delete DELETE /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId} Removes a mobile device. get GET /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId} Retrieves a mobile device's properties. list GET /admin/directory/v1/customer/{customerId}/devices/mobile Retrieves a paginated list of all user-owned mobile devices for an account.
- The Admin SDK Directory API lets administrators of enterprise domains view and manage their organization's users, groups, devices, and related resources.
- REST Resource: chromeosdevices Methods action (deprecated) POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action Use BatchChangeChromeOsDeviceStatus instead. get GET /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Retrieves a Chrome OS device's properties. list GET /admin/directory/v1/customer/{customerId}/devices/chromeos Retrieves a paginated list of Chrome OS devices within an account. moveDevicesToOu POST /admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu Moves or inserts multiple Chrome OS devices to an organizational unit. patch PATCH /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId . update PUT /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId .
- REST Resource: users Methods delete DELETE /admin/directory/v1/users/{userKey} Deletes a user. get GET /admin/directory/v1/users/{userKey} Retrieves a user. insert POST /admin/directory/v1/users Creates a user. list GET /admin/directory/v1/users Retrieves a paginated list of either deleted users or all users in a domain. makeAdmin POST /admin/directory/v1/users/{userKey}/makeAdmin Makes a user a super administrator. patch PATCH /admin/directory/v1/users/{userKey} Updates a user using patch semantics. signOut POST /admin/directory/v1/users/{userKey}/signOut Signs a user out of all web and device sessions and reset their sign-in cookies. undelete POST /admin/directory/v1/users/{userKey}/undelete Undeletes a deleted user. update PUT /admin/directory/v1/users/{userKey} Updates a user. watch POST /admin/directory/v1/users/watch Watches for changes in users list.

### Admin SDK API reference \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/reference-overview](https://developers.google.com/admin-sdk/reference-overview)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Directory API — Manage your organization's users, connected devices, and third-party applications.
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- Admin SDK API v1.1beta1 Chrome Enterprise Core API — Manage Chrome browser devices for your account.
- Select an API below to see resource summaries and details.

### Admin SDK API overview \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/overview](https://developers.google.com/admin-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Directory API — Manage your organization's users, connected devices, and third-party applications.
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- Beta APIs Chrome Enterprise Core API — Manage Chrome browser devices for your account.
- Home Google Workspace Admin console Guides Send feedback Admin SDK API overview Stay organized with collections Save and categorize content based on your preferences.

