---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:57:36.640Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Directory API push notifications for users and aliases"
feature_slug: "directory-api-push-notifications-for-users-and-aliases"
latest_feature_date: "2014-01-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/admin-sdk/directory/reference/rest"
  - "https://developers.google.com/admin-sdk/overview"
  - "https://developers.google.com/admin-sdk/reference-overview"
keywords:
  - "directory"
  - "api"
  - "push"
  - "notifications"
  - "for"
  - "users"
  - "and"
  - "aliases"
---

# Directory API push notifications for users and aliases

Product: Google Workspace Admin SDK
Coverage: LOW

## Step 02 Summary

The Directory API can send push notifications for changes to users and aliases.

## Extended Definition

The Directory API can send push notifications for changes to users and aliases.

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
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://admin.googleapis.com REST Resource: asps Methods delete DELETE /admin/directory/v1/users/{userKey}/asps/{codeId} Deletes an ASP issued by a user. get GET /admin/directory/v1/users/{userKey}/asps/{codeId} Gets information about an ASP issued by a user. list GET /admin/directory/v1/users/{userKey}/asps Lists the ASPs issued by a user.
- REST Resource: users Methods delete DELETE /admin/directory/v1/users/{userKey} Deletes a user. get GET /admin/directory/v1/users/{userKey} Retrieves a user. insert POST /admin/directory/v1/users Creates a user. list GET /admin/directory/v1/users Retrieves a paginated list of either deleted users or all users in a domain. makeAdmin POST /admin/directory/v1/users/{userKey}/makeAdmin Makes a user a super administrator. patch PATCH /admin/directory/v1/users/{userKey} Updates a user using patch semantics. signOut POST /admin/directory/v1/users/{userKey}/signOut Signs a user out of all web and device sessions and reset their sign-in cookies. undelete POST /admin/directory/v1/users/{userKey}/undelete Undeletes a deleted user. update PUT /admin/directory/v1/users/{userKey} Updates a user. watch POST /admin/directory/v1/users/watch Watches for changes in users list.
- REST Resource: users.aliases Methods delete DELETE /admin/directory/v1/users/{userKey}/aliases/{alias} Removes an alias. insert POST /admin/directory/v1/users/{userKey}/aliases Adds an alias. list GET /admin/directory/v1/users/{userKey}/aliases Lists all aliases for a user. watch POST /admin/directory/v1/users/{userKey}/aliases/watch Watches for changes in users list.
- The Admin SDK Directory API lets administrators of enterprise domains view and manage their organization's users, groups, devices, and related resources.

### Admin SDK API overview \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/overview](https://developers.google.com/admin-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Directory API — Manage your organization's users, connected devices, and third-party applications.
- What's included Chrome Printer Management API — Manage CUPS printers and print servers for your organization.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Home Google Workspace Admin console Guides Send feedback Admin SDK API overview Stay organized with collections Save and categorize content based on your preferences.

### Admin SDK API reference \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/reference-overview](https://developers.google.com/admin-sdk/reference-overview)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Directory API — Manage your organization's users, connected devices, and third-party applications.
- Admin SDK API v1 Chrome Printer Management API — Manage CUPS printers and print servers for your organization.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Home Google Workspace Admin console Reference Send feedback Admin SDK API reference Stay organized with collections Save and categorize content based on your preferences.

