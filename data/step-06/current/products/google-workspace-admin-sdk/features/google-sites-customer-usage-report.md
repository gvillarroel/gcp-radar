---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:57:36.624Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Google Sites customer usage report"
feature_slug: "google-sites-customer-usage-report"
latest_feature_date: "2014-11-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/admin-sdk/directory/reference/rest"
  - "https://developers.google.com/admin-sdk/overview"
  - "https://developers.google.com/admin-sdk/reference-overview"
keywords:
  - "sites"
  - "customer"
  - "usage"
  - "report"
  - "the"
  - "provides"
  - "information"
  - "about"
---

# Google Sites customer usage report

Product: Google Workspace Admin SDK
Coverage: LOW

## Step 02 Summary

The Google Sites customer usage report provides information about Google Sites usage in a domain.

## Extended Definition

The Google Sites customer usage report provides information about Google Sites usage in a domain.

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
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://admin.googleapis.com REST Resource: asps Methods delete DELETE /admin/directory/v1/users/{userKey}/asps/{codeId} Deletes an ASP issued by a user. get GET /admin/directory/v1/users/{userKey}/asps/{codeId} Gets information about an ASP issued by a user. list GET /admin/directory/v1/users/{userKey}/asps Lists the ASPs issued by a user.
- REST Resource: tokens Methods delete DELETE /admin/directory/v1/users/{userKey}/tokens/{clientId} Deletes all access tokens issued by a user for an application. get GET /admin/directory/v1/users/{userKey}/tokens/{clientId} Gets information about an access token issued by a user. list GET /admin/directory/v1/users/{userKey}/tokens Returns the set of tokens specified user has issued to 3rd party applications.
- REST Resource: roles Methods delete DELETE /admin/directory/v1/customer/{customer}/roles/{roleId} Deletes a role. get GET /admin/directory/v1/customer/{customer}/roles/{roleId} Retrieves a role. insert POST /admin/directory/v1/customer/{customer}/roles Creates a role. list GET /admin/directory/v1/customer/{customer}/roles Retrieves a paginated list of all the roles in a domain. patch PATCH /admin/directory/v1/customer/{customer}/roles/{roleId} Patches a role. update PUT /admin/directory/v1/customer/{customer}/roles/{roleId} Updates a role.
- REST Resource: customer.devices.chromeos Methods batchChangeStatus POST /admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus Changes the status of a batch of ChromeOS devices. countChromeOsDevices GET /admin/directory/v1/customer/{customerId}/devices/chromeos:countChromeOsDevices Counts ChromeOS devices matching the request. issueCommand POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand Issues a command for the device to execute.

### Admin SDK API overview \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/overview](https://developers.google.com/admin-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Reports API — Generate reports about customers and user usage.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.

### Admin SDK API reference \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/reference-overview](https://developers.google.com/admin-sdk/reference-overview)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Reports API — Generate reports about customers and user usage.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.

