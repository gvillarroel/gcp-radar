---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.686Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "Ad breaks"
feature_slug: "ad-breaks"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/beta/migration"
  - "https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem"
  - "https://developers.google.com/ad-manager/api/how_to"
  - "https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit"
keywords:
  - "ad"
  - "breaks"
  - "the"
  - "api"
  - "now"
  - "supports"
---

# Ad breaks

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

The API now supports ad breaks.

## Extended Definition

The API now supports ad breaks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/beta/migration](https://developers.google.com/ad-manager/api/beta/migration)
- [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem)
- [https://developers.google.com/ad-manager/api/how_to](https://developers.google.com/ad-manager/api/how_to)
- [https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit](https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit)

## Supporting Pages

### "Migrate from the Ad Manager SOAP API \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/migration](https://developers.google.com/ad-manager/api/beta/migration)
- Source ID: `site-docs-root-2`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This example for listing Order objects illustrates the major changes such as the removal of bind variables, case sensitive operators, and the replacement of ORDER BY and LIMIT clauses with separate fields: Ad Manager SOAP API <filterStatement> <query>WHERE name like "PG %" and lastModifiedDateTime &gt;= :lastModifiedDateTime ORDER BY id ASC LIMIT 500</query> <values> <key>lastModifiedDateTime</key> <value xmlns:ns2="https://www.google.com/apis/ads/publisher/v202502" xsi:type="ns2:DateTimeValue"> <value> <date> <year>2024</year> <month>1</month> <day>1</day> </date> <hour>0</hour> <minute>0</minute> <second>0</second> <timeZoneId>America/New York</timeZoneId> </value> </value> </values> </filterStatement> Ad Manager API (Beta) JSON format { "filter" : "displayName = \"PG \" AND updateTime > \"2024-01-01T00:00:00-5:00\"" , "pageSize" : 500 , "orderBy" : "name" } URL encoded GET https://admanager.googleapis.com/v1/networks/123/orders?filter=displayName+%3D+\"PG \"+AND+updateTime+%3E+\"2024-01-01T00%3A00%3A00-5%3A00\" The Ad Manager API (Beta) supports all PQL capabilities, with the following syntax differences from the Ad Manager SOAP API: The operators AND and OR are case sensitive in the Ad Manager API (Beta).
- Linux or macOS export GOOGLE APPLICATION CREDENTIALS = KEY FILE PATH Windows set GOOGLE APPLICATION CREDENTIALS = KEY FILE PATH Understand filter differences The Ad Manager API (Beta) query language supports all Publisher Query Language (PQL) features, but significant syntax differences exist.
- Ad Manager SOAP API PQL // Matches orders where displayName starts with the string 'PG ' displayName like "PG %" Ad Manager API (Beta) // Matches orders where displayName starts with the string 'PG ' displayName = "PG " Field names must appear on the left-hand side of a comparison operator: Valid filter updateTime > "2024-01-01T00:00:00Z" Invalid filter "2024-01-01T00:00:00Z" < updateTime The Ad Manager API (Beta) does not support bind variables.
- When multithreading, use the pagination token from the first page to ensure you are reading from the same result set: First thread GET networks/ ${ NETWORK CODE } /orders?pageSize = 50&pageToken = ${ TOKEN FROM INITIAL REQUEST } Second thread GET networks/ ${ NETWORK CODE } /orders?pageSize = 50&pageToken = ${ TOKEN FROM INITIAL REQUEST } & skip = 50 Migrate reports The SOAP API can only read and run reports in the deprecated Reports tool.

### type LineItem (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Ad Manager API (Beta) is now available.
- The LineItem.lineItemType must be LineItemType.STANDARD UNKNOWN The value returned if the actual value is not exposed by the requested API version. discountType LineItemDiscountType The type of discount being applied to a LineItem , either percentage based or absolute.
- UNKNOWN The value returned if the actual value is not exposed by the requested API version. thirdPartyMeasurementSettings ThirdPartyMeasurementSettings youtubeKidsRestricted xsd: boolean Designates this line item as intended for YT Kids app.
- UNKNOWN The value returned if the actual value is not exposed by the requested API version. customPacingCurve CustomPacingCurve The curve that is used to pace the line item's delivery.

### How To Guide \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/how_to](https://developers.google.com/ad-manager/api/how_to)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Ad Manager API (Beta) is now available.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["The API facilitates several core actions: creating users via createUsers with specified roles, and retrieving the effective root AdUnit using NetworkService.getCurrentNetwork().
- For example, if you are trying out the API for the first time, instead of performing every API call as an Administrator (the default for your email address), you may want to create a few users with roles such as Salesperson, Trafficker, or Advertiser to test real-world workflows.
- The effective root AdUnit, which is the topmost AdUnit that supports modifying its child nodes, can be retrieved using NetworkService.getCurrentNetwork().

### type AdUnit (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit](https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UNKNOWN The value returned if the actual value is not exposed by the requested API version. appliedLabelFrequencyCaps LabelFrequencyCap [] The set of label frequency caps applied directly to this ad unit.
- The Ad Manager API (Beta) is now available.
- Namespace https://www.google.com/apis/ads/publisher/v202602 Field id xsd: string Uniquely identifies the AdUnit .
- Enumerations UNKNOWN The value returned if the actual value is not exposed by the requested API version.

