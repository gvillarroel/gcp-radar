---
title: "ListAssetsResponse \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/reference/rest/v1/ListAssetsResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/reference/rest
source_metadata:
  url: https://developers.google.com/earth-engine/reference/rest/v1/ListAssetsResponse
  title: "ListAssetsResponse \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Reference
Send feedback
ListAssetsResponse
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The response message for EarthEngineService.ListAssets contains a list of assets and an optional token for retrieving the next page of results.
The assets field is an array of EarthEngineAsset objects representing the listed assets.
The nextPageToken field is a string used to paginate through results by including it in a subsequent ListAssetsRequest.
Response message for EarthEngineService.ListAssets.
JSON representation
{
"assets" : [
{
object ( EarthEngineAsset )
}
] ,
"nextPageToken" : string
}
Fields
assets[]
object ( EarthEngineAsset )
The list of assets.
nextPageToken
string
A token to retrieve the next page of results. Pass this value in the ListAssetsRequest.page_token field in the subsequent call to the ListAssets method to retrieve the next page of results.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-06 UTC."],[],["The `ListAssets` response includes an array of `assets`, each representing an Earth Engine Asset. It also contains `nextPageToken`, a string used to retrieve subsequent pages of results. This token should be passed within the `ListAssetsRequest.page_token` field during the next `ListAssets` call to access the next result set. The `assets` field is a list of Earth Engine assets.\n"]]
