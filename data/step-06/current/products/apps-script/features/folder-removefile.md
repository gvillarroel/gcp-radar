---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.676Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Folder.removeFile"
feature_slug: "folder-removefile"
latest_feature_date: "2020-07-27"
deprecation_date: "2020-07-27"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-reseller"
  - "https://developers.google.com/apps-script/advanced/analyticsadmin"
keywords:
  - "removefile"
  - "deprecates"
  - "folder"
  - "method"
  - "script"
  - "apps"
  - "the"
  - "in"
---

# Folder.removeFile

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Deprecates the Folder.removeFile() method in Apps Script; deprecated on 2020-07-27.

## Extended Definition

Deprecates the Folder.removeFile() method in Apps Script; deprecated on 2020-07-27.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- [https://developers.google.com/apps-script/advanced/admin-sdk-reseller](https://developers.google.com/apps-script/advanced/admin-sdk-reseller)
- [https://developers.google.com/apps-script/advanced/analyticsadmin](https://developers.google.com/apps-script/advanced/analyticsadmin)

## Supporting Pages

### Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Like all advanced services in Apps Script, the Admin SDK Groups Settings service uses the same objects, methods, and parameters as the public API.
- Page Summary outlined flag The Admin SDK Groups Settings service in Apps Script allows Google Workspace administrators to manage group settings using the Admin SDK Groups Settings API.
- The Admin SDK Groups Settings service lets you use the Admin SDK's Groups Settings API in Google Apps Script.
- Here, the description is modified, but various other settings can be changed in the same way. @see https://developers.google.com/admin-sdk/groups-settings/v1/reference/groups/patch / function updateGroupSettings () { const groupId = "exampleGroup@example.com" ; try { const group = AdminGroupsSettings . newGroups (); group . description = "Newly changed group description" ; AdminGroupsSettings .

### "Admin SDK Google Workspace Reseller Service \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-reseller](https://developers.google.com/apps-script/advanced/admin-sdk-reseller)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Like all advanced services in Apps Script, the Admin SDK Google Workspace Reseller service uses the same objects, methods, and parameters as the public API.
- Page Summary outlined flag The Admin SDK Google Workspace Reseller service in Apps Script allows authorized reseller admins to manage Google Workspace subscriptions.
- The Admin SDK Google Workspace Reseller service lets you use the Admin SDK Reseller API in Google Apps Script.
- Subscriptions . list ({ pageToken : pageToken , }); for ( const sub of result . subscriptions ) { const creationDate = new Date (); creationDate . setUTCSeconds ( sub . creationTime ); console . log ( "customer ID: %s, date created: %s, plan name: %s, sku id: %s" , sub . customerId , creationDate . toDateString (), sub . plan . planName , sub . skuId , ); } pageToken = result . nextPageToken ; } while ( pageToken ); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Analytics Admin Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/analyticsadmin](https://developers.google.com/apps-script/advanced/analyticsadmin)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Sample code demonstrates how to list Google Analytics accounts accessible by a user using the accounts.list() method. programmatically within Google Apps Script using the Analytics Admin service.
- Like all advanced services in Apps Script, the AnalyticsAdmin service uses the same objects, methods, and parameters as the public API.
- Page Summary outlined flag The Analytics Admin service in Apps Script allows programmatic access to Google Analytics 4 configuration data via the Google Analytics Admin API v1.
- The Analytics Admin service lets you use the Google Analytics Admin API v1 in Google Apps Script.

