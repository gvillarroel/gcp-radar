---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:57:36.634Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Customer accounts usage report"
feature_slug: "customer-accounts-usage-report"
latest_feature_date: "2014-04-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/admin-sdk/directory/reference/rest"
  - "https://developers.google.com/admin-sdk/overview"
  - "https://developers.google.com/admin-sdk/reference-overview"
keywords:
  - "customer"
  - "accounts"
  - "usage"
  - "report"
  - "that"
  - "shows"
  - "the"
  - "number"
---

# Customer accounts usage report

Product: Google Workspace Admin SDK
Coverage: LOW

## Step 02 Summary

A report that shows the number of users enforced for 2-step verification who have not enrolled.

## Extended Definition

A report that shows the number of users enforced for 2-step verification who have not enrolled.

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
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: roles Methods delete DELETE /admin/directory/v1/customer/{customer}/roles/{roleId} Deletes a role. get GET /admin/directory/v1/customer/{customer}/roles/{roleId} Retrieves a role. insert POST /admin/directory/v1/customer/{customer}/roles Creates a role. list GET /admin/directory/v1/customer/{customer}/roles Retrieves a paginated list of all the roles in a domain. patch PATCH /admin/directory/v1/customer/{customer}/roles/{roleId} Patches a role. update PUT /admin/directory/v1/customer/{customer}/roles/{roleId} Updates a role.
- REST Resource: mobiledevices Methods action POST /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action Takes an action that affects a mobile device. delete DELETE /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId} Removes a mobile device. get GET /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId} Retrieves a mobile device's properties. list GET /admin/directory/v1/customer/{customerId}/devices/mobile Retrieves a paginated list of all user-owned mobile devices for an account.
- REST Resource: customer.devices.chromeos Methods batchChangeStatus POST /admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus Changes the status of a batch of ChromeOS devices. countChromeOsDevices GET /admin/directory/v1/customer/{customerId}/devices/chromeos:countChromeOsDevices Counts ChromeOS devices matching the request. issueCommand POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand Issues a command for the device to execute.
- REST Resource: domainAliases Methods delete DELETE /admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName} Deletes a domain Alias of the customer. get GET /admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName} Retrieves a domain alias of the customer. insert POST /admin/directory/v1/customer/{customer}/domainaliases Inserts a domain alias of the customer. list GET /admin/directory/v1/customer/{customer}/domainaliases Lists the domain aliases of the customer.

### Admin SDK API overview \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/overview](https://developers.google.com/admin-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Reports API — Generate reports about customers and user usage.
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Admin SDK API reference \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/reference-overview](https://developers.google.com/admin-sdk/reference-overview)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Reports API — Generate reports about customers and user usage.
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

