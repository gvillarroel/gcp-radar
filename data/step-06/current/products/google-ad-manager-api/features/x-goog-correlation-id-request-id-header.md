---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.688Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "X-Goog-Correlation-Id request ID header"
feature_slug: "x-goog-correlation-id-request-id-header"
latest_feature_date: "2024-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/authentication"
  - "https://developers.google.com/ad-manager/api/beta/authentication"
  - "https://developers.google.com/ad-manager/api/beta/migration"
  - "https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem"
keywords:
  - "goog"
  - "correlation"
  - "id"
  - "request"
  - "header"
  - "the"
  - "api"
  - "now"
---

# X-Goog-Correlation-Id request ID header

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

The API now returns a request ID in the X-Goog-Correlation-Id header and in API error bodies.

## Extended Definition

The API now returns a request ID in the X-Goog-Correlation-Id header and in API error bodies.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/authentication](https://developers.google.com/ad-manager/api/authentication)
- [https://developers.google.com/ad-manager/api/beta/authentication](https://developers.google.com/ad-manager/api/beta/authentication)
- [https://developers.google.com/ad-manager/api/beta/migration](https://developers.google.com/ad-manager/api/beta/migration)
- [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem)

## Supporting Pages

### Authentication \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/authentication](https://developers.google.com/ad-manager/api/authentication)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP request header The HTTP header in every request to the Ad Manager API must include an access token in this form: Authorization: Bearer ACCESS TOKEN For example: POST … HTTP / 1.1 Host : … Authorization : Bearer 1/fFAGRNJru1FTz70BzhT3Zg Content-Type : text/xml;charset=UTF-8 Content-Length : … <?xml version="1.0"?> <soap:Envelope xmlns:soap="http://www.w3.org/2001/12/soap-envelope"> … </soap:Envelope> Scope A single access token can grant varying degrees of access to multiple APIs.
- Then, create OAuth2 credentials via the Google API Console, either generating a JSON key for service accounts or a client ID and secret for web applications.
- This section is intended for advanced users who are already familiar with the OAuth2 specification and know how to use OAuth2 with Google APIs .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["Google Ad Manager API access requires OAuth2 authorization.

### Authentication \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/authentication](https://developers.google.com/ad-manager/api/beta/authentication)
- Source ID: `site-docs-root-2`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install the Google Cloud CLI, then initialize it by running the following command: gcloud init Create local authentication credentials for your Google Account and set the project ID to a project where the Ad Manager API is enabled: gcloud auth application-default login --scopes = "https://www.googleapis.com/auth/admanager" gcloud auth application-default set-quota-project PROJECT ID Alternatively, authenticate as a Service Account setting the environment variable GOOGLE APPLICATION CREDENTIALS to the path of your key file.
- If you are not able to configure workload identity federation, then you must create a service account and create a key for the service account: Open the Google API Console Credentials page .
- Access tokens Include your access token in a request to the API by including either an access token query parameter or an Authorization HTTP header Bearer value.
- Finally, include the access token in API requests, preferably in the Authorization HTTP header.

### "Migrate from the Ad Manager SOAP API \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/migration](https://developers.google.com/ad-manager/api/beta/migration)
- Source ID: `site-docs-root-2`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This example for listing Order objects illustrates the major changes such as the removal of bind variables, case sensitive operators, and the replacement of ORDER BY and LIMIT clauses with separate fields: Ad Manager SOAP API <filterStatement> <query>WHERE name like "PG %" and lastModifiedDateTime &gt;= :lastModifiedDateTime ORDER BY id ASC LIMIT 500</query> <values> <key>lastModifiedDateTime</key> <value xmlns:ns2="https://www.google.com/apis/ads/publisher/v202502" xsi:type="ns2:DateTimeValue"> <value> <date> <year>2024</year> <month>1</month> <day>1</day> </date> <hour>0</hour> <minute>0</minute> <second>0</second> <timeZoneId>America/New York</timeZoneId> </value> </value> </values> </filterStatement> Ad Manager API (Beta) JSON format { "filter" : "displayName = \"PG \" AND updateTime > \"2024-01-01T00:00:00-5:00\"" , "pageSize" : 500 , "orderBy" : "name" } URL encoded GET https://admanager.googleapis.com/v1/networks/123/orders?filter=displayName+%3D+\"PG \"+AND+updateTime+%3E+\"2024-01-01T00%3A00%3A00-5%3A00\" The Ad Manager API (Beta) supports all PQL capabilities, with the following syntax differences from the Ad Manager SOAP API: The operators AND and OR are case sensitive in the Ad Manager API (Beta).
- Understand API differences There are some differences in how the SOAP API and REST API handle report definitions and results: The SOAP API automatically added a corresponding ID dimension to the results when a report only requested the NAME .
- Ad Manager SOAP API PQL // Matches orders where displayName starts with the string 'PG ' displayName like "PG %" Ad Manager API (Beta) // Matches orders where displayName starts with the string 'PG ' displayName = "PG " Field names must appear on the left-hand side of a comparison operator: Valid filter updateTime > "2024-01-01T00:00:00Z" Invalid filter "2024-01-01T00:00:00Z" < updateTime The Ad Manager API (Beta) does not support bind variables.
- When multithreading, use the pagination token from the first page to ensure you are reading from the same result set: First thread GET networks/ ${ NETWORK CODE } /orders?pageSize = 50&pageToken = ${ TOKEN FROM INITIAL REQUEST } Second thread GET networks/ ${ NETWORK CODE } /orders?pageSize = 50&pageToken = ${ TOKEN FROM INITIAL REQUEST } & skip = 50 Migrate reports The SOAP API can only read and run reports in the deprecated Reports tool.

### type LineItem (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UNKNOWN The value returned if the actual value is not exposed by the requested API version. thirdPartyMeasurementSettings ThirdPartyMeasurementSettings youtubeKidsRestricted xsd: boolean Designates this line item as intended for YT Kids app.
- The LineItem.lineItemType must be LineItemType.STANDARD UNKNOWN The value returned if the actual value is not exposed by the requested API version. discountType LineItemDiscountType The type of discount being applied to a LineItem , either percentage based or absolute.
- UNKNOWN The value returned if the actual value is not exposed by the requested API version. customPacingCurve CustomPacingCurve The curve that is used to pace the line item's delivery.
- UNKNOWN The value returned if the actual value is not exposed by the requested API version. companionDeliveryOption CompanionDeliveryOption The delivery option for companions.

