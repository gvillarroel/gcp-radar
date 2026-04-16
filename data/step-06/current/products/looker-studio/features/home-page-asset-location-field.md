---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.223Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Home page asset location field"
feature_slug: "home-page-asset-location-field"
latest_feature_date: "2023-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/api/reference/assets/search"
  - "https://developers.google.com/looker-studio/connector/calculated-fields"
  - "https://developers.google.com/looker-studio/integrate/api/drive-migration"
keywords:
  - "home"
  - "page"
  - "asset"
  - "location"
  - "field"
  - "looker"
  - "studio"
  - "shows"
---

# Home page asset location field

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The Location field on the Looker Studio home page shows where reports and data sources are stored or shared.

## Extended Definition

The Location field on the Looker Studio home page shows where reports and data sources are stored or shared.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/api/reference/assets/search](https://developers.google.com/looker-studio/integrate/api/reference/assets/search)
- [https://developers.google.com/looker-studio/connector/calculated-fields](https://developers.google.com/looker-studio/connector/calculated-fields)
- [https://developers.google.com/looker-studio/integrate/api/drive-migration](https://developers.google.com/looker-studio/integrate/api/drive-migration)

## Supporting Pages

### Assets: search \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/api/reference/assets/search](https://developers.google.com/looker-studio/integrate/api/reference/assets/search)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Looker Studio Integrate Reference Assets: search Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag Search for specific Looker Studio assets using parameters like asset type, title, owner, and more.
- Search a user's Looker Studio assets.
- Filter Definition Examples Creator Search for assets created by a specific user. creator:me creator:user@example.com Owner Search for assets owned by a specific user. owner:me owner:user@example.com Project Search for assets in a project. projectNumber:123456789 Workspace Search for assets in a workspace or folder. parentWorkspace:2a080c66-50cb-4399-92a8-74c534da2de9 From Search for assets that a user has shared with you. from:user@example.com To Search for assets that you have shared with a user or group. to:user@example.com to:example-group@googlegroups.com Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Using calculated fields in schema \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/calculated-fields](https://developers.google.com/looker-studio/connector/calculated-fields)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Home Products Looker Studio Community Connectors Using calculated fields in schema Stay organized with collections Save and categorize content based on your preferences.
- Formula aggregation "SUM($cost) / SUM($units)" AUTO "$cost + $units" NONE Examples of calculated fields in schema function getSchema ( request ) { var cc = DataStudioApp . createCommunityConnector (); var fields = cc . getFields (); var types = cc .
- Page Summary outlined flag The formula field property enables the addition of calculated fields to your connector's schema using supported functions.
- AUTO ); fields . newDimension () . setId ( 'feels like' ) . setName ( 'Feels Like' ) . setDescription ( 'What it feels like outside.' ) . setFormula ( 'CASE WHEN $t celsius < 0 THEN "Freezing" WHEN $t celsius > 40 THEN "Too warm" ELSE "Not bad" END' ) . setType ( types .

### "Migrating from the Drive API \_|\_ Integrate and share \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/integrate/api/drive-migration](https://developers.google.com/looker-studio/integrate/api/drive-migration)
- Source ID: `site-api-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API Method Endpoint Drive PATCH /drive/v3/files/fileId/permissions/permissionId Looker Studio PATCH /v1/assets/assetId/permissions Comparison: Drive const fileId = '123' ; // This should be replaced with a valid Drive ID. const oAuthToken = '123' ; // This should be replaced with a valid OAuth token. const newPermissionsObject = { expirationTime : '...' , role : 'owner' , // Or any other option } fetch ( https://www.googleapis.com/drive/v3/files/ ${ fileId } /permissions/permissionId , { headers : { Authorization : Bearer ${ oAuthToken } }, method : "PATCH" , body : JSON . stringify ( newPermissionsObject ) }) Looker Studio const oAuthToken = '123' // This should be replaced with a valid OAuth token. const assetId = '123' // This should be replaced with a valid asset ID. const newPermissionsObject = { permissions : { //... } } fetch ( https://datastudio.googleapis.com/v1/assets/ ${ assetId } /permissions , { headers : { Authorization : Bearer ${ oAuthToken } }, method : "PATCH" , body : JSON . stringify ({ name : assetId , permissions : newPermissionsObject }) }) For use-case specific alternatives, see: add members revoke all permissions Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Depending on your code, you may call this method multiple times using pagination tokens (as shown) to ensure you can see all of the permissions that are set for a file. const fileId = '123' ; // This should be replaced with a valid Drive ID. const oAuthToken = '123' ; // This should be replaced with a valid OAuth token. let nextPageToken = undefined ; let permissions = []; do { const permissionsData = await fetch ( https://www.googleapis.com/drive/v3/files/ ${ fileId } /permissions , { headers : { Authorization : Bearer ${ oAuthToken } } }); nextPageToken = permissionsData . nextPageToken ; permissions = permissions . concat ( permissionsData . permissions ) } while ( nextPageToken !== undefined ); Looker Studio Since there is only one permission object for a Looker Studio asset, you don't have to account for pagination. const oAuthToken = '123' // This should be replaced with a valid OAuth token. const assetId = '123' // This should be replaced with a valid asset ID. fetch ( https://datastudio.googleapis.com/v1/assets/{ASSET ID}/permissions , { headers : { Authorization : Bearer ${ oAuthToken } } } See get permissions .
- List API Method Endpoint Drive POST /drive/v3/files Looker Studio GET /v1/assets:search Comparison: Drive const oAuthToken = '123' // This should be replaced with a valid OAuth token. fetch ( https://www.googleapis.com/drive/v3/files , { headers : { Authorization : Bearer ${ oAuthToken } }, method : "POST" , }) Looker Studio const oAuthToken = '123' // This should be replaced with a valid OAuth token. fetch ( https://datastudio.googleapis.com/v1/assets:search?assetTypes={ASSET TYPE} , { headers : { Authorization : Bearer ${ oAuthToken } } }) See search assets .
- To remove someone from an asset, see revoke all permissions To add someone to an asset, see add members To view a permissions object for an asset, see get permissions List There isn't a 1-to-1 match between Drive and Looker Studio, but the endpoints serve similar goals.

