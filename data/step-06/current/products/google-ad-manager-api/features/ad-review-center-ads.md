---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.671Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "Ad Review Center ads"
feature_slug: "ad-review-center-ads"
latest_feature_date: "2025-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/beta/reference/rest"
  - "https://developers.google.com/ad-manager/api/beta/migration"
  - "https://developers.google.com/ad-manager/api/how_to"
  - "https://developers.google.com/ad-manager/api/native"
keywords:
  - "ad"
  - "review"
  - "center"
  - "ads"
  - "the"
  - "api"
  - "supports"
  - "reading"
---

# Ad Review Center ads

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

The API supports reading, allowing, and blocking Ad Review Center ads.

## Extended Definition

The API supports reading, allowing, and blocking Ad Review Center ads.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- [https://developers.google.com/ad-manager/api/beta/migration](https://developers.google.com/ad-manager/api/beta/migration)
- [https://developers.google.com/ad-manager/api/how_to](https://developers.google.com/ad-manager/api/how_to)
- [https://developers.google.com/ad-manager/api/native](https://developers.google.com/ad-manager/api/native)

## Supporting Pages

### Google Ad Manager API \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- Source ID: `site-api-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.networks REST Resource: v1.networks.adUnitSizes REST Resource: v1.networks.adUnits REST Resource: v1.networks.applications REST Resource: v1.networks.audienceSegments REST Resource: v1.networks.bandwidthGroups REST Resource: v1.networks.browserLanguages REST Resource: v1.networks.browsers REST Resource: v1.networks.cmsMetadataKeys REST Resource: v1.networks.cmsMetadataValues REST Resource: v1.networks.companies REST Resource: v1.networks.contacts REST Resource: v1.networks.content REST Resource: v1.networks.contentBundles REST Resource: v1.networks.contentLabels REST Resource: v1.networks.creativeTemplates REST Resource: v1.networks.customFields REST Resource: v1.networks.customTargetingKeys REST Resource: v1.networks.customTargetingKeys.customTargetingValues REST Resource: v1.networks.customTargetingValues REST Resource: v1.networks.deviceCapabilities REST Resource: v1.networks.deviceCategories REST Resource: v1.networks.deviceManufacturers REST Resource: v1.networks.entitySignalsMappings REST Resource: v1.networks.geoTargets REST Resource: v1.networks.labels REST Resource: v1.networks.lineItems REST Resource: v1.networks.linkedDevices REST Resource: v1.networks.mobileCarriers REST Resource: v1.networks.mobileDeviceSubmodels REST Resource: v1.networks.mobileDevices REST Resource: v1.networks.operatingSystemVersions REST Resource: v1.networks.operatingSystems REST Resource: v1.networks.operations.reports.runs REST Resource: v1.networks.orders REST Resource: v1.networks.placements REST Resource: v1.networks.privateAuctionDeals REST Resource: v1.networks.privateAuctions REST Resource: v1.networks.programmaticBuyers REST Resource: v1.networks.reports REST Resource: v1.networks.reports.results REST Resource: v1.networks.roles REST Resource: v1.networks.sites REST Resource: v1.networks.taxonomyCategories REST Resource: v1.networks.teams REST Resource: v1.networks.users REST Resource: v1.networks.webProperties.adReviewCenterAds REST Resource: v1.operations Service: admanager.googleapis.com Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- REST Resource: v1.networks.webProperties.adReviewCenterAds Methods batchAllow POST /v1/{parent}/adReviewCenterAds:batchAllow API to batch allow AdReviewCenterAds. batchBlock POST /v1/{parent}/adReviewCenterAds:batchBlock API to batch block AdReviewCenterAds. search GET /v1/{parent}/adReviewCenterAds:search API to search for AdReviewCenterAds.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This API allows managing Ad Manager data through various REST resources.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://admanager.googleapis.com REST Resource: v1.networks Methods get GET /v1/{name} API to retrieve a Network object. list GET /v1/networks API to retrieve all the networks the current user has access to.

### "Migrate from the Ad Manager SOAP API \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/migration](https://developers.google.com/ad-manager/api/beta/migration)
- Source ID: `site-docs-root-2`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This example for listing Order objects illustrates the major changes such as the removal of bind variables, case sensitive operators, and the replacement of ORDER BY and LIMIT clauses with separate fields: Ad Manager SOAP API <filterStatement> <query>WHERE name like "PG %" and lastModifiedDateTime &gt;= :lastModifiedDateTime ORDER BY id ASC LIMIT 500</query> <values> <key>lastModifiedDateTime</key> <value xmlns:ns2="https://www.google.com/apis/ads/publisher/v202502" xsi:type="ns2:DateTimeValue"> <value> <date> <year>2024</year> <month>1</month> <day>1</day> </date> <hour>0</hour> <minute>0</minute> <second>0</second> <timeZoneId>America/New York</timeZoneId> </value> </value> </values> </filterStatement> Ad Manager API (Beta) JSON format { "filter" : "displayName = \"PG \" AND updateTime > \"2024-01-01T00:00:00-5:00\"" , "pageSize" : 500 , "orderBy" : "name" } URL encoded GET https://admanager.googleapis.com/v1/networks/123/orders?filter=displayName+%3D+\"PG \"+AND+updateTime+%3E+\"2024-01-01T00%3A00%3A00-5%3A00\" The Ad Manager API (Beta) supports all PQL capabilities, with the following syntax differences from the Ad Manager SOAP API: The operators AND and OR are case sensitive in the Ad Manager API (Beta).
- When multithreading, use the pagination token from the first page to ensure you are reading from the same result set: First thread GET networks/ ${ NETWORK CODE } /orders?pageSize = 50&pageToken = ${ TOKEN FROM INITIAL REQUEST } Second thread GET networks/ ${ NETWORK CODE } /orders?pageSize = 50&pageToken = ${ TOKEN FROM INITIAL REQUEST } & skip = 50 Migrate reports The SOAP API can only read and run reports in the deprecated Reports tool.
- Linux or macOS export GOOGLE APPLICATION CREDENTIALS = KEY FILE PATH Windows set GOOGLE APPLICATION CREDENTIALS = KEY FILE PATH Understand filter differences The Ad Manager API (Beta) query language supports all Publisher Query Language (PQL) features, but significant syntax differences exist.
- The Ad Manager SOAP API is a legacy API for reading and writing your Ad Manager data and running reports.

### How To Guide \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/how_to](https://developers.google.com/ad-manager/api/how_to)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["The API facilitates several core actions: creating users via createUsers with specified roles, and retrieving the effective root AdUnit using NetworkService.getCurrentNetwork().
- For example, if you are trying out the API for the first time, instead of performing every API call as an Administrator (the default for your email address), you may want to create a few users with roles such as Salesperson, Trafficker, or Advertiser to test real-world workflows.
- The effective root AdUnit, which is the topmost AdUnit that supports modifying its child nodes, can be retrieved using NetworkService.getCurrentNetwork().
- Creatives are created with the necessary asset uploads, while object modification involves querying, updating, and using update Objects ().

### Native Ads \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/native](https://developers.google.com/ad-manager/api/native)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ToStatement ()) View on GitHub PHP $pageSize = StatementBuilder::SUGGESTED PAGE LIMIT; $statementBuilder = (new StatementBuilder()) ->where('isNativeEligible = :isNativeEligible') ->orderBy('id ASC') ->limit($pageSize) ->withBindVariableValue('isNativeEligible', true); $page = $creativeTemplateService->getCreativeTemplatesByStatement( $statementBuilder->ToStatement()); View on GitHub .NET StatementBuilder statementBuilder = new StatementBuilder() .Where("isNativeEligible = :isNativeEligible") .OrderBy("id ASC") .Limit(StatementBuilder.SUGGESTED PAGE LIMIT) .AddValue("isNativeEligible", true); CreativeTemplatePage page = creativeTemplateService.getCreativeTemplatesByStatement( statementBuilder.ToStatement()); View on GitHub Ruby query = 'WHERE isNativeEligible = :isNativeEligible' values = [ { :key = > 'isNativeEligible' , :value = > { :xsi type = > 'BooleanValue' , :value = > 'true' } }, ] statement = AdManagerApi :: FilterStatement . new ( query , values ) page = creative template service . get creative templates by statement ( statement . toStatement ()) View on GitHub Create a native creative Native creatives are backed by TemplateCreatives in the Ad Manager API.
- Next ()); nativeStyle . creativeTemplateId = nativeAppInstallTemplateId ; nativeStyle . size = size ; nativeStyle . htmlSnippet = htmlSnippet ; nativeStyle . cssSnippet = cssSnippet ; View on GitHub Ruby native app install template id = 10004400 Create a style for native app install ads. native style = { :name = > 'Native style #%d' % ( Time . new . to f 1000 ), :html snippet = > html snippet , :css snippet = > css snippet , :creative template id = > native app install template id , :size = > size } View on GitHub If the style is for a fluid size, set the isFluid field to true and set the size as 1x1 pixels.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["This guide outlines how to use Google Ad Manager's API for native advertising.
- Page Summary outlined flag Google Ad Manager's native advertising features can be used with the API, requiring an understanding of native advertising basics.

