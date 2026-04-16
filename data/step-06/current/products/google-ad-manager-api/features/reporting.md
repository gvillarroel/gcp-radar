---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.676Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "Reporting"
feature_slug: "reporting"
latest_feature_date: "2025-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/reporting"
  - "https://developers.google.com/ad-manager/api/beta/reports"
  - "https://developers.google.com/ad-manager/api/beta/migration"
  - "https://developers.google.com/ad-manager/api/beta/reference/rest"
keywords:
  - "reporting"
  - "the"
  - "api"
  - "adds"
  - "additional"
  - "report"
  - "dimensions"
  - "metrics"
---

# Reporting

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

The API adds additional report dimensions, metrics, types, and date ranges.

## Extended Definition

The API adds additional report dimensions, metrics, types, and date ranges.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/reporting](https://developers.google.com/ad-manager/api/reporting)
- [https://developers.google.com/ad-manager/api/beta/reports](https://developers.google.com/ad-manager/api/beta/reports)
- [https://developers.google.com/ad-manager/api/beta/migration](https://developers.google.com/ad-manager/api/beta/migration)
- [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)

## Supporting Pages

### Reporting Basics \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/reporting](https://developers.google.com/ad-manager/api/reporting)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Certain reporting features aren't available in the API.
- ToStatement (), 'columns' : [ 'AD SERVER IMPRESSIONS' , 'AD SERVER CLICKS' , 'AD SERVER CTR' , 'AD SERVER CPM AND CPC REVENUE' , 'AD SERVER WITHOUT CPD AVERAGE ECPM' ], 'dateRangeType' : 'CUSTOM DATE' , 'startDate' : start date , 'endDate' : end date } } PHP // Create report query. $reportQuery = new ReportQuery(); $reportQuery->setDimensions( [ Dimension::ORDER ID, Dimension::ORDER NAME ] ); $reportQuery->setDimensionAttributes( [ DimensionAttribute::ORDER TRAFFICKER, DimensionAttribute::ORDER START DATE TIME, DimensionAttribute::ORDER END DATE TIME ] ); $reportQuery->setColumns( [ Column::AD SERVER IMPRESSIONS, Column::AD SERVER CLICKS, Column::AD SERVER CTR, Column::AD SERVER CPM AND CPC REVENUE, Column::AD SERVER WITHOUT CPD AVERAGE ECPM ] ); // Create statement to filter for an order. $statementBuilder = (new StatementBuilder()) ->where('ORDER ID = :orderId') ->withBindVariableValue( 'orderId', $orderId ); // Set the filter statement. $reportQuery->setStatement($statementBuilder->toStatement()); // Set the start and end dates or choose a dynamic date range type. $reportQuery->setDateRangeType(DateRangeType::CUSTOM DATE); $reportQuery->setStartDate( AdManagerDateTimes::fromDateTime( new DateTime( '-10 days', new DateTimeZone('America/New York') ) ) ->getDate() ); $reportQuery->setEndDate( AdManagerDateTimes::fromDateTime( new DateTime( 'now', new DateTimeZone('America/New York') ) ) ->getDate() ); C# // Create report job.
- ToStatement (); Ruby Specify a report to run for the last 7 days. report end date = ad manager . today () report start date = report end date - 7 Create statement object to filter for an order. statement = ad manager . new report statement builder do sb sb . where = 'ORDER ID = :order id' sb . with bind variable ( 'order id' , order id ) end Create report query. report query = { :date range type = > 'CUSTOM DATE' , :start date = > report start date . to h , :end date = > report end date . to h , :dimensions = > [ 'ORDER ID' , 'ORDER NAME' ] , :dimension attributes = > [ 'ORDER TRAFFICKER' , 'ORDER START DATE TIME' , 'ORDER END DATE TIME' ] , :columns = > [ 'AD SERVER IMPRESSIONS' , 'AD SERVER CLICKS' , 'AD SERVER CTR' , 'AD SERVER CPM AND CPC REVENUE' , 'AD SERVER WITHOUT CPD AVERAGE ECPM' ] , :statement = > statement . to statement () } Creating the ReportJob Once you have a ReportQuery, it's time to run the report.
- ToStatement ()) if 'results' in response and len ( response [ 'results' ]): saved query = response [ 'results' ][ 0 ] if saved query [ 'isCompatibleWithApiVersion' ]: report job = {} Set report query and optionally modify it. report job [ 'reportQuery' ] = saved query [ 'reportQuery' ] View on GitHub PHP $statementBuilder = (new StatementBuilder())->where('id = :id') ->orderBy('id ASC') ->limit(1) ->withBindVariableValue('id', $savedQueryId); $savedQueryPage = $reportService->getSavedQueriesByStatement( $statementBuilder->toStatement() ); $savedQuery = $savedQueryPage->getResults()[0]; if ($savedQuery->getIsCompatibleWithApiVersion() === false) { throw new UnexpectedValueException( 'The saved query is not compatible with this API version.' ); } $reportQuery = $savedQuery->getReportQuery(); View on GitHub C# StatementBuilder statementBuilder = new StatementBuilder () .

### Create and run reports \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/reports](https://developers.google.com/ad-manager/api/beta/reports)
- Source ID: `site-docs-root-2`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To set request fields, pass in keyword arguments. request = Google :: Ads :: AdManager :: V1 :: CreateReportRequest . new ( parent : 'networks/ NETWORK CODE ' report : report ) Call the create report method. result = client . create report request The returned object is of type Google::Ads::AdManager::V1::Report. p result end create report . rb Node.js const parent = 'networks/ NETWORK CODE ' ; const report = { displayName : 'My API Report' , reportDefinition : { dimensions : [ 'LINE ITEM NAME' , 'LINE ITEM ID' ], metrics : [ 'AD SERVER IMPRESSIONS' ], dateRange : { relative : 'YESTERDAY' , }, reportType : 'HISTORICAL' , }, }; // Imports the Admanager library const { ReportServiceClient } = require ( '@google-ads/admanager' ). v1 ; // Instantiates a client const admanagerClient = new ReportServiceClient (); async function callCreateReport () { // Construct request const request = { parent , report , }; // Run request const response = await admanagerClient . createReport ( request ); console . log ( response ); } callCreateReport (); report service . create report . js cURL Request Note: To obtain an access token, see Authentication . curl -X POST -H "Authorization: Bearer ${ ACCESS TOKEN } " \ -H "Content-Type: application/json" \ -d '{ "report": { "displayName": "My API Report", "reportDefinition": { "dimensions": ["LINE ITEM NAME", "LINE ITEM ID"], "metrics": ["AD SERVER IMPRESSIONS"], "dateRange": { "relative": "YESTERDAY" }, "reportType": "HISTORICAL" } } }' \ "https://admanager.googleapis.com/v1/networks/ ${ NETWORK CODE } /reports" Response { "name" : "networks/234093456/reports/4555265029" , "displayName" : "My API Report" , "reportId" : "4555265029" , "reportDefinition" : { "dimensions" : [ "LINE ITEM NAME" , "LINE ITEM ID" ], "metrics" : [ "AD SERVER IMPRESSIONS" ], "dateRange" : { "relative" : "YESTERDAY" }, "reportType" : "HISTORICAL" }, "visibility" : "HIDDEN" } After creating a report, you can use the returned reportId to run it.
- The following is a JSON example of a fetchRows response and a corresponding ReportDefinition : fetchRows Response { "rows" : [ { "dimensionValues" : [ { "stringValue" : "Line Item #1" }, { "intValue" : "6378470710" } ], "metricValueGroups" : [ { "primaryValues" : [ { "intValue" : "100" } ] } ] }, { "dimensionValues" : [ { "stringValue" : "Line Item #2" }, { "intValue" : "5457147368" } ], "metricValueGroups" : [ { "primaryValues" : [ { "intValue" : "95" } ] } ] } ], "runTime" : "2024-10-02T10:00:00Z" , "dateRanges" : [ { "startDate" : { "year" : 2024 , "month" : 10 , "day" : 1 }, "endDate" : { "year" : 2024 , "month" : 10 , "day" : 1 } } ], "totalRowCount" : 2 } Report Definition { "name" : "networks/234093456/reports/4555265029" , "visibility" : "SAVED" , "reportId" : "4555265029" , "reportDefinition" : { "dimensions" : [ "LINE ITEM NAME" , "LINE ITEM ID" ], "metrics" : [ "AD SERVER IMPRESSIONS" ], "currencyCode" : "USD" , "dateRange" : { "relative" : "YESTERDAY" }, "reportType" : "HISTORICAL" }, "displayName" : "Example Report" , "updateTime" : "2024-09-01T13:00:00Z" , "createTime" : "2024-08-01T02:00:00Z" , "locale" : "en-US" , "scheduleOptions" : {} } If you are using a client library, the response has an iterator that lazily requests additional pages.
- The client can be reused for multiple calls. client = Google :: Ads :: AdManager :: V1 :: ReportService :: Rest :: Client . new report = Google :: Ads :: AdManager :: V1 :: Report . new ( display name : "My API Report" , report definition : Google :: Ads :: AdManager :: V1 :: ReportDefinition . new ( dimensions : [ :LINE ITEM NAME , :LINE ITEM ID ] , metrics : [ :AD SERVER IMPRESSIONS ] , date range : Google :: Ads :: AdManager :: V1 :: ReportDefinition :: DateRange . new ( relative : :YESTERDAY ), report type : :HISTORICAL ) ) Create a request.
- CreateReportSnippet . g . cs PHP use Google\Ads\AdManager\V1\Client\ReportServiceClient ; use Google\Ads\AdManager\V1\CreateReportRequest ; use Google\Ads\AdManager\V1\ReportDefinition\DateRange ; use Google\Ads\AdManager\V1\ReportDefinition\Dimension ; use Google\Ads\AdManager\V1\ReportDefinition\Metric ; use Google\Ads\AdManager\V1\ReportDefinition\DateRange\RelativeDateRange ; use Google\Ads\AdManager\V1\Report ; use Google\Ads\AdManager\V1\ReportDefinition ; use Google\Ads\AdManager\V1\ReportDefinition\ReportType ; function createReport () : void { $client = new ReportServiceClient (); $report = ( new Report ()) -> setDisplayName ( 'My API Report' ) -> setReportDefinition (( new ReportDefinition ()) -> setDimensions ([ Dimension :: LINE ITEM NAME , Dimension :: LINE ITEM ID ]) -> setMetrics ([ Metric :: AD SERVER IMPRESSIONS ]) -> setDateRange (( new DateRange ) -> setRelative ( RelativeDateRange :: YESTERDAY ) ) -> setReportType ( ReportType :: HISTORICAL ) ); $request = new CreateReportRequest ([ 'parent' => "networks/ NETWORK CODE " , 'report' => $report ]); $response = $client -> createReport ( $request ); print r ( $response ); } Ruby require "google/ads/ad manager/v1" def create report Create a client object.

### "Migrate from the Ad Manager SOAP API \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/migration](https://developers.google.com/ad-manager/api/beta/migration)
- Source ID: `site-docs-root-2`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Interactive Reports have a limit of 10 dimensions in both the UI and API.
- The reporting tools and APIs have a different ID space .
- When multithreading, use the pagination token from the first page to ensure you are reading from the same result set: First thread GET networks/ ${ NETWORK CODE } /orders?pageSize = 50&pageToken = ${ TOKEN FROM INITIAL REQUEST } Second thread GET networks/ ${ NETWORK CODE } /orders?pageSize = 50&pageToken = ${ TOKEN FROM INITIAL REQUEST } & skip = 50 Migrate reports The SOAP API can only read and run reports in the deprecated Reports tool.
- The following example sets pageSize and pageToken as URL parameters: Initial request GET networks/ ${ NETWORK CODE } /orders?pageSize = 50 Next page GET networks/ ${ NETWORK CODE } /orders?pageSize = 50&pageToken = ${ TOKEN FROM INITIAL REQUEST } Unlike the Ad Manager SOAP API, the Ad Manager API (Beta) may return fewer results than the requested page size even if there are additional pages.

### Google Ad Manager API \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The Ad Manager API allows management of inventory and reporting.
- REST Resource: v1.networks.reports Methods create POST /v1/{parent}/reports API to create a Report object. get GET /v1/{name} API to retrieve a Report object. list GET /v1/{parent}/reports API to retrieve a list of Report objects. patch PATCH /v1/{report.name} API to update a Report object. run POST /v1/{name}:run Initiates the execution of an existing report asynchronously.
- The API utilizes REST resources like networks, ad units, reports, and more for various functionalities.
- The API enables generating reports, running them asynchronously, and fetching the result rows.

