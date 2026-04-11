---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:57:36.615Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Enterprise Groups activity report member_type parameter"
feature_slug: "enterprise-groups-activity-report-member-type-parameter"
latest_feature_date: "2020-05-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/admin-sdk/directory/reference/rest"
  - "https://developers.google.com/admin-sdk/overview"
  - "https://developers.google.com/admin-sdk/reference-overview"
keywords:
  - "enterprise"
  - "groups"
  - "activity"
  - "report"
  - "member"
  - "type"
  - "parameter"
  - "the"
---

# Enterprise Groups activity report member_type parameter

Product: Google Workspace Admin SDK
Coverage: LOW

## Step 02 Summary

The Enterprise Groups activity report adds the member_type parameter to identify member types.

## Extended Definition

The Enterprise Groups activity report adds the member_type parameter to identify member types.

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
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: members Methods delete DELETE /admin/directory/v1/groups/{groupKey}/members/{memberKey} Removes a member from a group. get GET /admin/directory/v1/groups/{groupKey}/members/{memberKey} Retrieves a group member's properties. hasMember GET /admin/directory/v1/groups/{groupKey}/hasMember/{memberKey} Checks whether the given user is a member of the group. insert POST /admin/directory/v1/groups/{groupKey}/members Adds a user to the specified group. list GET /admin/directory/v1/groups/{groupKey}/members Retrieves a paginated list of all members in a group. patch PATCH /admin/directory/v1/groups/{groupKey}/members/{memberKey} Updates the membership properties of a user in the specified group. update PUT /admin/directory/v1/groups/{groupKey}/members/{memberKey} Updates the membership of a user in the specified group.
- The Admin SDK Directory API lets administrators of enterprise domains view and manage their organization's users, groups, devices, and related resources.
- REST Resource: groups.aliases Methods delete DELETE /admin/directory/v1/groups/{groupKey}/aliases/{alias} Removes an alias. insert POST /admin/directory/v1/groups/{groupKey}/aliases Adds an alias for the group. list GET /admin/directory/v1/groups/{groupKey}/aliases Lists all aliases for a group.
- REST Resource: users Methods delete DELETE /admin/directory/v1/users/{userKey} Deletes a user. get GET /admin/directory/v1/users/{userKey} Retrieves a user. insert POST /admin/directory/v1/users Creates a user. list GET /admin/directory/v1/users Retrieves a paginated list of either deleted users or all users in a domain. makeAdmin POST /admin/directory/v1/users/{userKey}/makeAdmin Makes a user a super administrator. patch PATCH /admin/directory/v1/users/{userKey} Updates a user using patch semantics. signOut POST /admin/directory/v1/users/{userKey}/signOut Signs a user out of all web and device sessions and reset their sign-in cookies. undelete POST /admin/directory/v1/users/{userKey}/undelete Undeletes a deleted user. update PUT /admin/directory/v1/users/{userKey} Updates a user. watch POST /admin/directory/v1/users/watch Watches for changes in users list.

### Admin SDK API overview \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/overview](https://developers.google.com/admin-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- You can programmatically integrate with IT infrastructure, create users, update settings, audit activity, and more.

### Admin SDK API reference \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/reference-overview](https://developers.google.com/admin-sdk/reference-overview)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- You can programmatically integrate with IT infrastructure, create users, update settings, audit activity, and more.

