---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.687Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "Interactive Reporting"
feature_slug: "interactive-reporting"
latest_feature_date: "2024-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/reporting"
  - "https://developers.google.com/ad-manager/api/beta/migration"
  - "https://developers.google.com/ad-manager/api/pqlreference"
  - "https://developers.google.com/ad-manager/api/third-parties"
keywords:
  - "interactive"
  - "reporting"
  - "is"
  - "supported"
  - "in"
  - "the"
  - "ad"
  - "manager"
---

# Interactive Reporting

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

Interactive Reporting is supported in the Google Ad Manager API.

## Extended Definition

Interactive Reporting is supported in the Google Ad Manager API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/reporting](https://developers.google.com/ad-manager/api/reporting)
- [https://developers.google.com/ad-manager/api/beta/migration](https://developers.google.com/ad-manager/api/beta/migration)
- [https://developers.google.com/ad-manager/api/pqlreference](https://developers.google.com/ad-manager/api/pqlreference)
- [https://developers.google.com/ad-manager/api/third-parties](https://developers.google.com/ad-manager/api/third-parties)

## Supporting Pages

### Reporting Basics \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/reporting](https://developers.google.com/ad-manager/api/reporting)
- Source ID: `site-docs-root`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Prerequisites Access to a Production Google Ad Manager network An Ad Manager client library Primer If you are unfamiliar with reporting in Ad Manager, see Create a new report for an overview of how to run a report in the Ad Manager UI.
- ReportQuery reportQuery = savedQuery . reportQuery ; View on GitHub Ruby statement = ad manager . new statement builder do sb sb . where = 'id = :saved query id' sb . with bind variable ( 'saved query id' , saved query id ) end saved query page = report service . get saved queries by statement ( statement . to statement () ) unless saved query page [ :results ]. nil? saved query = saved query page [ :results ]. first if saved query [ :is compatible with api version ] Create report job. report job = { :report query = > saved query [ :report query ] } else raise StandardError , 'Report query is not compatible with the API' end View on GitHub To run the query, see Creating the ReportJob .
- Java StatementBuilder statementBuilder = new StatementBuilder () . where ( "id = :id" ) . orderBy ( "id ASC" ) . limit ( 1 ) . withBindVariableValue ( "id" , savedQueryId ); SavedQueryPage page = reportService . getSavedQueriesByStatement ( statementBuilder . toStatement ()); SavedQuery savedQuery = Iterables . getOnlyElement ( Arrays . asList ( page . getResults ())); if ( ! savedQuery . getIsCompatibleWithApiVersion ()) { throw new IllegalStateException ( "The saved query is not compatible with this API version." ); } ReportQuery reportQuery = savedQuery . getReportQuery (); View on GitHub Python statement = ( ad manager .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["The content outlines retrieving, building, running, and downloading reports via the Ad Manager API.

### "Migrate from the Ad Manager SOAP API \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/migration](https://developers.google.com/ad-manager/api/beta/migration)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This example for listing Order objects illustrates the major changes such as the removal of bind variables, case sensitive operators, and the replacement of ORDER BY and LIMIT clauses with separate fields: Ad Manager SOAP API <filterStatement> <query>WHERE name like "PG %" and lastModifiedDateTime &gt;= :lastModifiedDateTime ORDER BY id ASC LIMIT 500</query> <values> <key>lastModifiedDateTime</key> <value xmlns:ns2="https://www.google.com/apis/ads/publisher/v202502" xsi:type="ns2:DateTimeValue"> <value> <date> <year>2024</year> <month>1</month> <day>1</day> </date> <hour>0</hour> <minute>0</minute> <second>0</second> <timeZoneId>America/New York</timeZoneId> </value> </value> </values> </filterStatement> Ad Manager API (Beta) JSON format { "filter" : "displayName = \"PG \" AND updateTime > \"2024-01-01T00:00:00-5:00\"" , "pageSize" : 500 , "orderBy" : "name" } URL encoded GET https://admanager.googleapis.com/v1/networks/123/orders?filter=displayName+%3D+\"PG \"+AND+updateTime+%3E+\"2024-01-01T00%3A00%3A00-5%3A00\" The Ad Manager API (Beta) supports all PQL capabilities, with the following syntax differences from the Ad Manager SOAP API: The operators AND and OR are case sensitive in the Ad Manager API (Beta).
- Ad Manager SOAP API PQL // Matches orders where displayName starts with the string 'PG ' displayName like "PG %" Ad Manager API (Beta) // Matches orders where displayName starts with the string 'PG ' displayName = "PG " Field names must appear on the left-hand side of a comparison operator: Valid filter updateTime > "2024-01-01T00:00:00Z" Invalid filter "2024-01-01T00:00:00Z" < updateTime The Ad Manager API (Beta) does not support bind variables.
- If you want to specify a sorting order for your result set, remove the PQL ORDER BY clause and set the orderBy field instead: GET networks/ ${ NETWORK CODE } /orders?orderBy = updateTime+desc Tip: While the Ad Manager SOAP API recommends always including an ORDER BY clause to ensure pagination consistency, the Ad Manager API (Beta) maintains consistency with pagination tokens.
- Linux or macOS export GOOGLE APPLICATION CREDENTIALS = KEY FILE PATH Windows set GOOGLE APPLICATION CREDENTIALS = KEY FILE PATH Understand filter differences The Ad Manager API (Beta) query language supports all Publisher Query Language (PQL) features, but significant syntax differences exist.

### "The Publisher Query Language (PQL) Developer's Guide \_|\_ Ad Manager SOAP\

- URL: [https://developers.google.com/ad-manager/api/pqlreference](https://developers.google.com/ad-manager/api/pqlreference)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example (Creates a query and enters two variables in place of hard-coded id and status property values): // Create two mapped parameters : id and status String ValueMapEntry [] values = new String ValueMapEntry [ 2 ]; values [ 0 ] = new String ValueMapEntry ( "id" , new NumberValue ( null , "123" )); values [ 1 ] = new String ValueMapEntry ( "status" , new TextValue ( null , "APPROVED" )); // Create our statement and map our bind variables Statement statement = new Statement (); statement . setQuery ( "WHERE id = :id AND status = :status LIMIT 500" ); statement . setValues ( values ); DateTime fields - You can filter by date and time by assigning a DateTime value to a bind variable, or by using a string formatted according to ISO 8601. // Create a bind variable : startDateTime String ValueMapEntry [] values = new String ValueMapEntry [ 1 ]; values [ 0 ] = new String ValueMapEntry ( "startDateTime" , new DateTimeValue ( null , dateTime )); // Create our statement and map our bind variables Statement statement = new Statement (); statement . setQuery ( "WHERE endDateTime :startDateTime LIMIT 500" ); statement . setValues ( values ); Fetching match tables with PQL Match tables provide a lookup mechanism for the raw values contained within data transfer files, allowing you to match ad serving information (such as ad unit or line item) to pre-assigned values stored in the database.
- Each object exposes different properties that you can filter by, using PQL; you usually cannot filter on all properties supported by an object, so check the list below to see which properties support PQL queries.
- Home Products Ad Manager SOAP API Send feedback The Publisher Query Language (PQL) Developer's Guide Stay organized with collections Save and categorize content based on your preferences.
- DownloadPqlResultToList ( line items pql query ) Join report data with line item data This example uses the pandas library since it makes working with tabular data much easier.

### "Integrating with Google Ad Manager as a third party \_|\_ Ad Manager SOAP\

- URL: [https://developers.google.com/ad-manager/api/third-parties](https://developers.google.com/ad-manager/api/third-parties)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag Third parties integrate with Ad Manager for their clients, who are Ad Manager customers, and this guide covers best practices for these integrations.
- No additional approval from Google is required, though note that by accessing and/or using the Ad Manager API you agree to the Ad Manager API terms and conditions .
- This guide assumes you have a working knowledge of the Ad Manager API.
- Authentication: How to properly access a client's Ad Manager network In order for your application to access your client's Ad Manager network, you need to set up your authentication workflow in a secure manner.

