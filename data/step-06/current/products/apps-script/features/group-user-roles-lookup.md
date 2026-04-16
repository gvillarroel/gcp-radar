---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.538Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Group user roles lookup"
feature_slug: "group-user-roles-lookup"
latest_feature_date: "2019-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/groups"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings"
keywords:
  - "group"
  - "user"
  - "roles"
  - "lookup"
  - "apps"
  - "script"
  - "adds"
  - "groups"
---

# Group user roles lookup

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Group service adds Groups.getRoles(user) to list a user's roles in a group.

## Extended Definition

Apps Script Group service adds Groups.getRoles(user) to list a user's roles in a group.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/groups](https://developers.google.com/apps-script/advanced/groups)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration](https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)

## Supporting Pages

### "Advanced Cloud Identity Groups Service \_|\_ Apps Script \_|\_ Google for\

- URL: [https://developers.google.com/apps-script/advanced/groups](https://developers.google.com/apps-script/advanced/groups)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Groups ; function createMembership ( namespace , groupId , memberKey ) { try { // Given a group ID and namespace, retrieve the ID for parent group const groupLookupResponse = groups . lookup ({ 'groupKey.id' : groupId , 'groupKey.namespace' : namespace }); const groupName = groupLookupResponse . name ; // Create a membership object with a memberKey and a single role of type MEMBER const membership = { preferredMemberKey : { id : memberKey }, roles : [ { name : "MEMBER" , expiryDetail : { expireTime : "2025-10-02T15:01:23Z" , }, }, ], }; // Create a membership using the ID for the parent group and a membership object const response = groups .
- Home Google Workspace Apps Script Reference Send feedback Advanced Cloud Identity Groups Service Stay organized with collections Save and categorize content based on your preferences.
- Sample code is provided for creating groups, searching for groups, and managing group memberships. access the CIG API in Apps Script.
- Page Summary outlined flag The advanced Cloud Identity Groups (CIG) service in Apps Script allows interaction with the CIG API.

### Admin SDK Groups Migration Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration](https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Admin SDK Groups Migration service in Apps Script allows administrators to migrate emails from public folders and distribution lists to Google Groups discussion archives.
- Home Google Workspace Apps Script Reference Send feedback Admin SDK Groups Migration Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the Admin SDK Groups Migration service uses the same objects, methods, and parameters as the public API.
- The Admin SDK Groups Migration service lets you use the Admin SDK's Groups Migration API in Google Apps Script.

### Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Admin SDK Groups Settings service in Apps Script allows Google Workspace administrators to manage group settings using the Admin SDK Groups Settings API.
- Home Google Workspace Apps Script Reference Send feedback Admin SDK Groups Settings Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the Admin SDK Groups Settings service uses the same objects, methods, and parameters as the public API.
- The Admin SDK Groups Settings service lets you use the Admin SDK's Groups Settings API in Google Apps Script.

