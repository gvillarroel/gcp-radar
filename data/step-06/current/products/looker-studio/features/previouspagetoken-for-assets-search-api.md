---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.152Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "previousPageToken for Assets search API"
feature_slug: "previouspagetoken-for-assets-search-api"
latest_feature_date: "2025-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/api/reference/assets/search"
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/integrate/api/drive-migration"
keywords:
  - "previouspagetoken"
  - "assets"
  - "search"
  - "response"
  - "now"
  - "includes"
  - "value"
  - "backward"
---

# previousPageToken for Assets search API

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The Assets: search API response now includes a previousPageToken value for backward pagination.

## Extended Definition

The Assets: search API response now includes a previousPageToken value for backward pagination.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/api/reference/assets/search](https://developers.google.com/looker-studio/integrate/api/reference/assets/search)
- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/integrate/api/drive-migration](https://developers.google.com/looker-studio/integrate/api/drive-migration)

## Supporting Pages

### Assets: search \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/api/reference/assets/search](https://developers.google.com/looker-studio/integrate/api/reference/assets/search)
- Source ID: `site-api-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The API response includes a list of matching assets and a token for retrieving subsequent pages.
- Filter Definition Examples Creator Search for assets created by a specific user. creator:me creator:user@example.com Owner Search for assets owned by a specific user. owner:me owner:user@example.com Project Search for assets in a project. projectNumber:123456789 Workspace Search for assets in a workspace or folder. parentWorkspace:2a080c66-50cb-4399-92a8-74c534da2de9 From Search for assets that a user has shared with you. from:user@example.com To Search for assets that you have shared with a user or group. to:user@example.com to:example-group@googlegroups.com Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Response If successful, this method returns a response body with the following structure: { "assets" : [ Asset ], "nextPageToken" : string } Property name Type Description assets Array< Asset > The list of assets. nextPageToken string A token to retrieve the next page of results.
- Request HTTP request GET https://datastudio.googleapis.com/v1/assets:search Parameters Parameter name Type Description assetTypes Array< AssetType > Required .

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Example A Search Console configuration for a URL-prefix property : https://lookerstudio.google.com/reporting/create? c.reportId=161718pqr &ds.ds5.connector=searchConsole &ds.ds5.siteUrl=https%3A%2F%2Fwww.example.com%2Fwelcome &ds.ds5.tableType=SITE IMPRESSION &ds.ds5.searchType=WEB A Search Console configuration for a Domain property : https://lookerstudio.google.com/reporting/create? c.reportId=161718pqr ds.ds5.connector=searchConsole &ds.ds5.siteUrl=sc-domain%3Aexample.com &ds.ds5.tableType=SITE IMPRESSION &ds.ds5.searchType=WEB Template permissions To ensure the best user experience for users, it's important to correctly set report access permissions for your template report and associated data sources.
- In the example above, you can add a specific datasource alias to override the value from the wildcard. https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds. .projectId=client-project &ds. .datasetId=client-dataset &ds.ds1.datasetId=client-dataset More generally, the order of parameter precedence is: A parameter given with specific alias ( ds.ds1.datasetId ) A parameter provided using the wildcard ( ds. .datasetId ) A value derived from the template datasource, if ds.connector is not provided (see Replace vs update ) The default value for the parameter, if it is optional.
- If the Linking API is used to provide a new data source configuration that yields the exact same fields, there are two outcomes based on the value of the refreshFields parameter: If set to true , the field configuration from the template data source will not carry-over, and charts may potentially fail to load if they depend on the same field configuration (i.e. a field of type Year is expected).
- Example Connect to a Looker Explore: https://lookerstudio.google.com/reporting/create? c.reportId=161718pqr &ds.ds5.connector=looker &ds.ds5.instanceUrl=my.looker.com &ds.ds5.model=thelook &ds.ds5.explore=orders Search Console Parameter name Description ds. alias .connector link Optional.

### "Migrating from the Drive API \_|\_ Integrate and share \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/integrate/api/drive-migration](https://developers.google.com/looker-studio/integrate/api/drive-migration)
- Source ID: `site-api-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List API Method Endpoint Drive POST /drive/v3/files Looker Studio GET /v1/assets:search Comparison: Drive const oAuthToken = '123' // This should be replaced with a valid OAuth token. fetch ( https://www.googleapis.com/drive/v3/files , { headers : { Authorization : Bearer ${ oAuthToken } }, method : "POST" , }) Looker Studio const oAuthToken = '123' // This should be replaced with a valid OAuth token. fetch ( https://datastudio.googleapis.com/v1/assets:search?assetTypes={ASSET TYPE} , { headers : { Authorization : Bearer ${ oAuthToken } } }) See search assets .
- API Method Endpoint Drive PATCH /drive/v3/files/fileId/permissions/permissionId Looker Studio PATCH /v1/assets/assetId/permissions Comparison: Drive const fileId = '123' ; // This should be replaced with a valid Drive ID. const oAuthToken = '123' ; // This should be replaced with a valid OAuth token. const newPermissionsObject = { expirationTime : '...' , role : 'owner' , // Or any other option } fetch ( https://www.googleapis.com/drive/v3/files/ ${ fileId } /permissions/permissionId , { headers : { Authorization : Bearer ${ oAuthToken } }, method : "PATCH" , body : JSON . stringify ( newPermissionsObject ) }) Looker Studio const oAuthToken = '123' // This should be replaced with a valid OAuth token. const assetId = '123' // This should be replaced with a valid asset ID. const newPermissionsObject = { permissions : { //... } } fetch ( https://datastudio.googleapis.com/v1/assets/ ${ assetId } /permissions , { headers : { Authorization : Bearer ${ oAuthToken } }, method : "PATCH" , body : JSON . stringify ({ name : assetId , permissions : newPermissionsObject }) }) For use-case specific alternatives, see: add members revoke all permissions Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Depending on your code, you may call this method multiple times using pagination tokens (as shown) to ensure you can see all of the permissions that are set for a file. const fileId = '123' ; // This should be replaced with a valid Drive ID. const oAuthToken = '123' ; // This should be replaced with a valid OAuth token. let nextPageToken = undefined ; let permissions = []; do { const permissionsData = await fetch ( https://www.googleapis.com/drive/v3/files/ ${ fileId } /permissions , { headers : { Authorization : Bearer ${ oAuthToken } } }); nextPageToken = permissionsData . nextPageToken ; permissions = permissions . concat ( permissionsData . permissions ) } while ( nextPageToken !== undefined ); Looker Studio Since there is only one permission object for a Looker Studio asset, you don't have to account for pagination. const oAuthToken = '123' // This should be replaced with a valid OAuth token. const assetId = '123' // This should be replaced with a valid asset ID. fetch ( https://datastudio.googleapis.com/v1/assets/{ASSET ID}/permissions , { headers : { Authorization : Bearer ${ oAuthToken } } } See get permissions .
- While the Drive API allows managing multiple permission objects per file, Looker Studio assets have a single, always-existing permission object, leading to different endpoint usage for permission control.

