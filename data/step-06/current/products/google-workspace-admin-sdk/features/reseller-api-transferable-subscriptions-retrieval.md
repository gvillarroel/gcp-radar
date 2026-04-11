---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:57:36.647Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Reseller API transferable subscriptions retrieval"
feature_slug: "reseller-api-transferable-subscriptions-retrieval"
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
  - "transferable"
  - "subscriptions"
  - "retrieval"
  - "the"
  - "can"
  - "retrieve"
---

# Reseller API transferable subscriptions retrieval

Product: Google Workspace Admin SDK
Coverage: LOW

## Step 02 Summary

The Reseller API can retrieve all transferable subscriptions for a customer using the customerId and customerAuthToken parameters.

## Extended Definition

The Reseller API can retrieve all transferable subscriptions for a customer using the customerId and customerAuthToken parameters.

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
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: users Methods delete DELETE /admin/directory/v1/users/{userKey} Deletes a user. get GET /admin/directory/v1/users/{userKey} Retrieves a user. insert POST /admin/directory/v1/users Creates a user. list GET /admin/directory/v1/users Retrieves a paginated list of either deleted users or all users in a domain. makeAdmin POST /admin/directory/v1/users/{userKey}/makeAdmin Makes a user a super administrator. patch PATCH /admin/directory/v1/users/{userKey} Updates a user using patch semantics. signOut POST /admin/directory/v1/users/{userKey}/signOut Signs a user out of all web and device sessions and reset their sign-in cookies. undelete POST /admin/directory/v1/users/{userKey}/undelete Undeletes a deleted user. update PUT /admin/directory/v1/users/{userKey} Updates a user. watch POST /admin/directory/v1/users/watch Watches for changes in users list.
- REST Resource: members Methods delete DELETE /admin/directory/v1/groups/{groupKey}/members/{memberKey} Removes a member from a group. get GET /admin/directory/v1/groups/{groupKey}/members/{memberKey} Retrieves a group member's properties. hasMember GET /admin/directory/v1/groups/{groupKey}/hasMember/{memberKey} Checks whether the given user is a member of the group. insert POST /admin/directory/v1/groups/{groupKey}/members Adds a user to the specified group. list GET /admin/directory/v1/groups/{groupKey}/members Retrieves a paginated list of all members in a group. patch PATCH /admin/directory/v1/groups/{groupKey}/members/{memberKey} Updates the membership properties of a user in the specified group. update PUT /admin/directory/v1/groups/{groupKey}/members/{memberKey} Updates the membership of a user in the specified group.
- REST Resource: roles Methods delete DELETE /admin/directory/v1/customer/{customer}/roles/{roleId} Deletes a role. get GET /admin/directory/v1/customer/{customer}/roles/{roleId} Retrieves a role. insert POST /admin/directory/v1/customer/{customer}/roles Creates a role. list GET /admin/directory/v1/customer/{customer}/roles Retrieves a paginated list of all the roles in a domain. patch PATCH /admin/directory/v1/customer/{customer}/roles/{roleId} Patches a role. update PUT /admin/directory/v1/customer/{customer}/roles/{roleId} Updates a role.
- REST Resource: domainAliases Methods delete DELETE /admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName} Deletes a domain Alias of the customer. get GET /admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName} Retrieves a domain alias of the customer. insert POST /admin/directory/v1/customer/{customer}/domainaliases Inserts a domain alias of the customer. list GET /admin/directory/v1/customer/{customer}/domainaliases Lists the domain aliases of the customer.

### Admin SDK API overview \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/overview](https://developers.google.com/admin-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- Contact Delegation API — Delegate contacts access to another person.
- Data Transfer API — Move files from one user to another.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

### Admin SDK API reference \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/reference-overview](https://developers.google.com/admin-sdk/reference-overview)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- Contact Delegation API — Delegate contacts access to another person.
- Data Transfer API — Move files from one user to another.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

