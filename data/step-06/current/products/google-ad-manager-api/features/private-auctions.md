---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.686Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "Private auctions"
feature_slug: "private-auctions"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/beta/reference/rest"
  - "https://developers.google.com/ad-manager/api/beta/migration"
  - "https://developers.google.com/ad-manager/api/authentication"
  - "https://developers.google.com/ad-manager/api/how_to"
keywords:
  - "private"
  - "auctions"
  - "the"
  - "api"
  - "now"
  - "supports"
---

# Private auctions

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

The API now supports private auctions.

## Extended Definition

The API now supports private auctions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- [https://developers.google.com/ad-manager/api/beta/migration](https://developers.google.com/ad-manager/api/beta/migration)
- [https://developers.google.com/ad-manager/api/authentication](https://developers.google.com/ad-manager/api/authentication)
- [https://developers.google.com/ad-manager/api/how_to](https://developers.google.com/ad-manager/api/how_to)

## Supporting Pages

### Google Ad Manager API \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.networks REST Resource: v1.networks.adUnitSizes REST Resource: v1.networks.adUnits REST Resource: v1.networks.applications REST Resource: v1.networks.audienceSegments REST Resource: v1.networks.bandwidthGroups REST Resource: v1.networks.browserLanguages REST Resource: v1.networks.browsers REST Resource: v1.networks.cmsMetadataKeys REST Resource: v1.networks.cmsMetadataValues REST Resource: v1.networks.companies REST Resource: v1.networks.contacts REST Resource: v1.networks.content REST Resource: v1.networks.contentBundles REST Resource: v1.networks.contentLabels REST Resource: v1.networks.creativeTemplates REST Resource: v1.networks.customFields REST Resource: v1.networks.customTargetingKeys REST Resource: v1.networks.customTargetingKeys.customTargetingValues REST Resource: v1.networks.customTargetingValues REST Resource: v1.networks.deviceCapabilities REST Resource: v1.networks.deviceCategories REST Resource: v1.networks.deviceManufacturers REST Resource: v1.networks.entitySignalsMappings REST Resource: v1.networks.geoTargets REST Resource: v1.networks.labels REST Resource: v1.networks.lineItems REST Resource: v1.networks.linkedDevices REST Resource: v1.networks.mobileCarriers REST Resource: v1.networks.mobileDeviceSubmodels REST Resource: v1.networks.mobileDevices REST Resource: v1.networks.operatingSystemVersions REST Resource: v1.networks.operatingSystems REST Resource: v1.networks.operations.reports.runs REST Resource: v1.networks.orders REST Resource: v1.networks.placements REST Resource: v1.networks.privateAuctionDeals REST Resource: v1.networks.privateAuctions REST Resource: v1.networks.programmaticBuyers REST Resource: v1.networks.reports REST Resource: v1.networks.reports.results REST Resource: v1.networks.roles REST Resource: v1.networks.sites REST Resource: v1.networks.taxonomyCategories REST Resource: v1.networks.teams REST Resource: v1.networks.users REST Resource: v1.networks.webProperties.adReviewCenterAds REST Resource: v1.operations Service: admanager.googleapis.com Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- REST Resource: v1.networks.privateAuctions Methods create POST /v1/{parent}/privateAuctions API to create a PrivateAuction object. get GET /v1/{name} API to retrieve a PrivateAuction object. list GET /v1/{parent}/privateAuctions API to retrieve a list of PrivateAuction objects. patch PATCH /v1/{privateAuction.name} API to update a PrivateAuction object.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This API allows managing Ad Manager data through various REST resources.
- REST Resource: v1.networks.privateAuctionDeals Methods create POST /v1/{parent}/privateAuctionDeals API to create a PrivateAuctionDeal object. get GET /v1/{name} API to retrieve a PrivateAuctionDeal object. list GET /v1/{parent}/privateAuctionDeals API to retrieve a list of PrivateAuctionDeal objects. patch PATCH /v1/{privateAuctionDeal.name} API to update a PrivateAuctionDeal object.

### "Migrate from the Ad Manager SOAP API \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/migration](https://developers.google.com/ad-manager/api/beta/migration)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- This example for listing Order objects illustrates the major changes such as the removal of bind variables, case sensitive operators, and the replacement of ORDER BY and LIMIT clauses with separate fields: Ad Manager SOAP API <filterStatement> <query>WHERE name like "PG %" and lastModifiedDateTime &gt;= :lastModifiedDateTime ORDER BY id ASC LIMIT 500</query> <values> <key>lastModifiedDateTime</key> <value xmlns:ns2="https://www.google.com/apis/ads/publisher/v202502" xsi:type="ns2:DateTimeValue"> <value> <date> <year>2024</year> <month>1</month> <day>1</day> </date> <hour>0</hour> <minute>0</minute> <second>0</second> <timeZoneId>America/New York</timeZoneId> </value> </value> </values> </filterStatement> Ad Manager API (Beta) JSON format { "filter" : "displayName = \"PG \" AND updateTime > \"2024-01-01T00:00:00-5:00\"" , "pageSize" : 500 , "orderBy" : "name" } URL encoded GET https://admanager.googleapis.com/v1/networks/123/orders?filter=displayName+%3D+\"PG \"+AND+updateTime+%3E+\"2024-01-01T00%3A00%3A00-5%3A00\" The Ad Manager API (Beta) supports all PQL capabilities, with the following syntax differences from the Ad Manager SOAP API: The operators AND and OR are case sensitive in the Ad Manager API (Beta).
- Linux or macOS export GOOGLE APPLICATION CREDENTIALS = KEY FILE PATH Windows set GOOGLE APPLICATION CREDENTIALS = KEY FILE PATH Understand filter differences The Ad Manager API (Beta) query language supports all Publisher Query Language (PQL) features, but significant syntax differences exist.
- Ad Manager SOAP API PQL // Matches orders where displayName starts with the string 'PG ' displayName like "PG %" Ad Manager API (Beta) // Matches orders where displayName starts with the string 'PG ' displayName = "PG " Field names must appear on the left-hand side of a comparison operator: Valid filter updateTime > "2024-01-01T00:00:00Z" Invalid filter "2024-01-01T00:00:00Z" < updateTime The Ad Manager API (Beta) does not support bind variables.
- When multithreading, use the pagination token from the first page to ensure you are reading from the same result set: First thread GET networks/ ${ NETWORK CODE } /orders?pageSize = 50&pageToken = ${ TOKEN FROM INITIAL REQUEST } Second thread GET networks/ ${ NETWORK CODE } /orders?pageSize = 50&pageToken = ${ TOKEN FROM INITIAL REQUEST } & skip = 50 Migrate reports The SOAP API can only read and run reports in the deprecated Reports tool.

### Authentication \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/authentication](https://developers.google.com/ad-manager/api/authentication)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- This section is intended for advanced users who are already familiar with the OAuth2 specification and know how to use OAuth2 with Google APIs .
- The Ad Manager API (Beta) is now available.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["Google Ad Manager API access requires OAuth2 authorization.
- HTTP request header The HTTP header in every request to the Ad Manager API must include an access token in this form: Authorization: Bearer ACCESS TOKEN For example: POST … HTTP / 1.1 Host : … Authorization : Bearer 1/fFAGRNJru1FTz70BzhT3Zg Content-Type : text/xml;charset=UTF-8 Content-Length : … <?xml version="1.0"?> <soap:Envelope xmlns:soap="http://www.w3.org/2001/12/soap-envelope"> … </soap:Envelope> Scope A single access token can grant varying degrees of access to multiple APIs.

### How To Guide \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/how_to](https://developers.google.com/ad-manager/api/how_to)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- The Ad Manager API (Beta) is now available.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["The API facilitates several core actions: creating users via createUsers with specified roles, and retrieving the effective root AdUnit using NetworkService.getCurrentNetwork().
- Creating a Creative Different types of creatives support different components: for example, an image creative supports a single source file for the image; a flash creative supports two underlying asset files: a flash file and a backup image file, in case the flash file cannot be served.
- For example, if you are trying out the API for the first time, instead of performing every API call as an Administrator (the default for your email address), you may want to create a few users with roles such as Salesperson, Trafficker, or Advertiser to test real-world workflows.

