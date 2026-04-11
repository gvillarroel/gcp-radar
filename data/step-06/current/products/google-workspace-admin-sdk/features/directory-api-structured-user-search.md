---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:57:36.641Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Directory API structured user search"
feature_slug: "directory-api-structured-user-search"
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
  - "structured"
  - "user"
  - "search"
  - "the"
  - "users"
  - "list"
---

# Directory API structured user search

Product: Google Workspace Admin SDK
Coverage: LOW

## Step 02 Summary

The users.list method supports structured search queries for users.

## Extended Definition

The users.list method supports structured search queries for users.

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
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://admin.googleapis.com REST Resource: asps Methods delete DELETE /admin/directory/v1/users/{userKey}/asps/{codeId} Deletes an ASP issued by a user. get GET /admin/directory/v1/users/{userKey}/asps/{codeId} Gets information about an ASP issued by a user. list GET /admin/directory/v1/users/{userKey}/asps Lists the ASPs issued by a user.
- REST Resource: users Methods delete DELETE /admin/directory/v1/users/{userKey} Deletes a user. get GET /admin/directory/v1/users/{userKey} Retrieves a user. insert POST /admin/directory/v1/users Creates a user. list GET /admin/directory/v1/users Retrieves a paginated list of either deleted users or all users in a domain. makeAdmin POST /admin/directory/v1/users/{userKey}/makeAdmin Makes a user a super administrator. patch PATCH /admin/directory/v1/users/{userKey} Updates a user using patch semantics. signOut POST /admin/directory/v1/users/{userKey}/signOut Signs a user out of all web and device sessions and reset their sign-in cookies. undelete POST /admin/directory/v1/users/{userKey}/undelete Undeletes a deleted user. update PUT /admin/directory/v1/users/{userKey} Updates a user. watch POST /admin/directory/v1/users/watch Watches for changes in users list.
- REST Resource: verificationCodes Methods generate POST /admin/directory/v1/users/{userKey}/verificationCodes/generate Generates new backup verification codes for the user. invalidate POST /admin/directory/v1/users/{userKey}/verificationCodes/invalidate Invalidates the current backup verification codes for the user. list GET /admin/directory/v1/users/{userKey}/verificationCodes Returns the current set of valid backup verification codes for the specified user.
- REST Resource: tokens Methods delete DELETE /admin/directory/v1/users/{userKey}/tokens/{clientId} Deletes all access tokens issued by a user for an application. get GET /admin/directory/v1/users/{userKey}/tokens/{clientId} Gets information about an access token issued by a user. list GET /admin/directory/v1/users/{userKey}/tokens Returns the set of tokens specified user has issued to 3rd party applications.

### Admin SDK API overview \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/overview](https://developers.google.com/admin-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Directory API — Manage your organization's users, connected devices, and third-party applications.
- Data Transfer API — Move files from one user to another.
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- You can programmatically integrate with IT infrastructure, create users, update settings, audit activity, and more.

### Admin SDK API reference \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/admin-sdk/reference-overview](https://developers.google.com/admin-sdk/reference-overview)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Directory API — Manage your organization's users, connected devices, and third-party applications.
- Data Transfer API — Move files from one user to another.
- The Admin SDK API is a collection of RESTful interfaces that empower administrators to manage Google Workspace organizations at scale.
- You can programmatically integrate with IT infrastructure, create users, update settings, audit activity, and more.

