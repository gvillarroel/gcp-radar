---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:57:36.622Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Google Calendar audit report"
feature_slug: "google-calendar-audit-report"
latest_feature_date: "2014-12-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/admin-sdk/directory/reference/rest"
  - "https://developers.google.com/admin-sdk/overview"
  - "https://developers.google.com/admin-sdk/reference-overview"
keywords:
  - "calendar"
  - "audit"
  - "report"
  - "the"
  - "shows"
  - "changes"
  - "to"
  - "calendars"
---

# Google Calendar audit report

Product: Google Workspace Admin SDK
Coverage: LOW

## Step 02 Summary

The Google Calendar audit report shows changes to calendars and calendar events for users in a domain.

## Extended Definition

The Google Calendar audit report shows changes to calendars and calendar events for users in a domain.

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
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: users Methods delete DELETE /admin/directory/v1/users/{userKey} Deletes a user. get GET /admin/directory/v1/users/{userKey} Retrieves a user. insert POST /admin/directory/v1/users Creates a user. list GET /admin/directory/v1/users Retrieves a paginated list of either deleted users or all users in a domain. makeAdmin POST /admin/directory/v1/users/{userKey}/makeAdmin Makes a user a super administrator. patch PATCH /admin/directory/v1/users/{userKey} Updates a user using patch semantics. signOut POST /admin/directory/v1/users/{userKey}/signOut Signs a user out of all web and device sessions and reset their sign-in cookies. undelete POST /admin/directory/v1/users/{userKey}/undelete Undeletes a deleted user. update PUT /admin/directory/v1/users/{userKey} Updates a user. watch POST /admin/directory/v1/users/watch Watches for changes in users list.
- REST Resource: resources.calendars Methods delete DELETE /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId} Deletes a calendar resource. get GET /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId} Retrieves a calendar resource. insert POST /admin/directory/v1/customer/{customer}/resources/calendars Inserts a calendar resource. list GET /admin/directory/v1/customer/{customer}/resources/calendars Retrieves a list of calendar resources for an account. patch PATCH /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId} Patches a calendar resource. update PUT /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId} Updates a calendar resource.
- REST Resource: customer.devices.chromeos Methods batchChangeStatus POST /admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus Changes the status of a batch of ChromeOS devices. countChromeOsDevices GET /admin/directory/v1/customer/{customerId}/devices/chromeos:countChromeOsDevices Counts ChromeOS devices matching the request. issueCommand POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand Issues a command for the device to execute.
- REST Resource: members Methods delete DELETE /admin/directory/v1/groups/{groupKey}/members/{memberKey} Removes a member from a group. get GET /admin/directory/v1/groups/{groupKey}/members/{memberKey} Retrieves a group member's properties. hasMember GET /admin/directory/v1/groups/{groupKey}/hasMember/{memberKey} Checks whether the given user is a member of the group. insert POST /admin/directory/v1/groups/{groupKey}/members Adds a user to the specified group. list GET /admin/directory/v1/groups/{groupKey}/members Retrieves a paginated list of all members in a group. patch PATCH /admin/directory/v1/groups/{groupKey}/members/{memberKey} Updates the membership properties of a user in the specified group. update PUT /admin/directory/v1/groups/{groupKey}/members/{memberKey} Updates the membership of a user in the specified group.

### Admin SDK API overview \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/overview](https://developers.google.com/admin-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- Contact Delegation API — Delegate contacts access to another person.
- Reports API — Generate reports about customers and user usage.

### Admin SDK API reference \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/reference-overview](https://developers.google.com/admin-sdk/reference-overview)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- Contact Delegation API — Delegate contacts access to another person.
- Reports API — Generate reports about customers and user usage.

