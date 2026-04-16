---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.683Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "Reporting dimensions and metrics"
feature_slug: "reporting-dimensions-and-metrics"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/reporting"
  - "https://developers.google.com/ad-manager/api/beta/reports"
  - "https://developers.google.com/ad-manager/api/forecasting"
  - "https://developers.google.com/ad-manager/api/pqlreference"
keywords:
  - "reporting"
  - "dimensions"
  - "and"
  - "metrics"
  - "additional"
  - "are"
  - "available"
  - "for"
---

# Reporting dimensions and metrics

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

Additional dimensions and metrics are available for Ad Manager reporting.

## Extended Definition

Additional dimensions and metrics are available for Ad Manager reporting.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/reporting](https://developers.google.com/ad-manager/api/reporting)
- [https://developers.google.com/ad-manager/api/beta/reports](https://developers.google.com/ad-manager/api/beta/reports)
- [https://developers.google.com/ad-manager/api/forecasting](https://developers.google.com/ad-manager/api/forecasting)
- [https://developers.google.com/ad-manager/api/pqlreference](https://developers.google.com/ad-manager/api/pqlreference)

## Supporting Pages

### Reporting Basics \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/reporting](https://developers.google.com/ad-manager/api/reporting)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ToStatement (), 'columns' : [ 'AD SERVER IMPRESSIONS' , 'AD SERVER CLICKS' , 'AD SERVER CTR' , 'AD SERVER CPM AND CPC REVENUE' , 'AD SERVER WITHOUT CPD AVERAGE ECPM' ], 'dateRangeType' : 'CUSTOM DATE' , 'startDate' : start date , 'endDate' : end date } } PHP // Create report query. $reportQuery = new ReportQuery(); $reportQuery->setDimensions( [ Dimension::ORDER ID, Dimension::ORDER NAME ] ); $reportQuery->setDimensionAttributes( [ DimensionAttribute::ORDER TRAFFICKER, DimensionAttribute::ORDER START DATE TIME, DimensionAttribute::ORDER END DATE TIME ] ); $reportQuery->setColumns( [ Column::AD SERVER IMPRESSIONS, Column::AD SERVER CLICKS, Column::AD SERVER CTR, Column::AD SERVER CPM AND CPC REVENUE, Column::AD SERVER WITHOUT CPD AVERAGE ECPM ] ); // Create statement to filter for an order. $statementBuilder = (new StatementBuilder()) ->where('ORDER ID = :orderId') ->withBindVariableValue( 'orderId', $orderId ); // Set the filter statement. $reportQuery->setStatement($statementBuilder->toStatement()); // Set the start and end dates or choose a dynamic date range type. $reportQuery->setDateRangeType(DateRangeType::CUSTOM DATE); $reportQuery->setStartDate( AdManagerDateTimes::fromDateTime( new DateTime( '-10 days', new DateTimeZone('America/New York') ) ) ->getDate() ); $reportQuery->setEndDate( AdManagerDateTimes::fromDateTime( new DateTime( 'now', new DateTimeZone('America/New York') ) ) ->getDate() ); C# // Create report job.
- ToStatement (); Ruby Specify a report to run for the last 7 days. report end date = ad manager . today () report start date = report end date - 7 Create statement object to filter for an order. statement = ad manager . new report statement builder do sb sb . where = 'ORDER ID = :order id' sb . with bind variable ( 'order id' , order id ) end Create report query. report query = { :date range type = > 'CUSTOM DATE' , :start date = > report start date . to h , :end date = > report end date . to h , :dimensions = > [ 'ORDER ID' , 'ORDER NAME' ] , :dimension attributes = > [ 'ORDER TRAFFICKER' , 'ORDER START DATE TIME' , 'ORDER END DATE TIME' ] , :columns = > [ 'AD SERVER IMPRESSIONS' , 'AD SERVER CLICKS' , 'AD SERVER CTR' , 'AD SERVER CPM AND CPC REVENUE' , 'AD SERVER WITHOUT CPD AVERAGE ECPM' ] , :statement = > statement . to statement () } Creating the ReportJob Once you have a ReportQuery, it's time to run the report.
- Records ) { // Additional row processing ProcessReportRow ( row ); } Ruby CSV . foreach ( file name , converters : :numeric , headers : true ) do row Additional row processing process row ( row ) end For more reporting examples, check out our client libraries on GitHub.
- Prerequisites Access to a Production Google Ad Manager network An Ad Manager client library Primer If you are unfamiliar with reporting in Ad Manager, see Create a new report for an overview of how to run a report in the Ad Manager UI.

### Create and run reports \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/reports](https://developers.google.com/ad-manager/api/beta/reports)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following is a JSON example of a fetchRows response and a corresponding ReportDefinition : fetchRows Response { "rows" : [ { "dimensionValues" : [ { "stringValue" : "Line Item #1" }, { "intValue" : "6378470710" } ], "metricValueGroups" : [ { "primaryValues" : [ { "intValue" : "100" } ] } ] }, { "dimensionValues" : [ { "stringValue" : "Line Item #2" }, { "intValue" : "5457147368" } ], "metricValueGroups" : [ { "primaryValues" : [ { "intValue" : "95" } ] } ] } ], "runTime" : "2024-10-02T10:00:00Z" , "dateRanges" : [ { "startDate" : { "year" : 2024 , "month" : 10 , "day" : 1 }, "endDate" : { "year" : 2024 , "month" : 10 , "day" : 1 } } ], "totalRowCount" : 2 } Report Definition { "name" : "networks/234093456/reports/4555265029" , "visibility" : "SAVED" , "reportId" : "4555265029" , "reportDefinition" : { "dimensions" : [ "LINE ITEM NAME" , "LINE ITEM ID" ], "metrics" : [ "AD SERVER IMPRESSIONS" ], "currencyCode" : "USD" , "dateRange" : { "relative" : "YESTERDAY" }, "reportType" : "HISTORICAL" }, "displayName" : "Example Report" , "updateTime" : "2024-09-01T13:00:00Z" , "createTime" : "2024-08-01T02:00:00Z" , "locale" : "en-US" , "scheduleOptions" : {} } If you are using a client library, the response has an iterator that lazily requests additional pages.
- Tip: For reports with lots of dimensions and metrics, you can use the Ad Manager UI to check dimension and metric compatibility.
- To set request fields, pass in keyword arguments. request = Google :: Ads :: AdManager :: V1 :: CreateReportRequest . new ( parent : 'networks/ NETWORK CODE ' report : report ) Call the create report method. result = client . create report request The returned object is of type Google::Ads::AdManager::V1::Report. p result end create report . rb Node.js const parent = 'networks/ NETWORK CODE ' ; const report = { displayName : 'My API Report' , reportDefinition : { dimensions : [ 'LINE ITEM NAME' , 'LINE ITEM ID' ], metrics : [ 'AD SERVER IMPRESSIONS' ], dateRange : { relative : 'YESTERDAY' , }, reportType : 'HISTORICAL' , }, }; // Imports the Admanager library const { ReportServiceClient } = require ( '@google-ads/admanager' ). v1 ; // Instantiates a client const admanagerClient = new ReportServiceClient (); async function callCreateReport () { // Construct request const request = { parent , report , }; // Run request const response = await admanagerClient . createReport ( request ); console . log ( response ); } callCreateReport (); report service . create report . js cURL Request Note: To obtain an access token, see Authentication . curl -X POST -H "Authorization: Bearer ${ ACCESS TOKEN } " \ -H "Content-Type: application/json" \ -d '{ "report": { "displayName": "My API Report", "reportDefinition": { "dimensions": ["LINE ITEM NAME", "LINE ITEM ID"], "metrics": ["AD SERVER IMPRESSIONS"], "dateRange": { "relative": "YESTERDAY" }, "reportType": "HISTORICAL" } } }' \ "https://admanager.googleapis.com/v1/networks/ ${ NETWORK CODE } /reports" Response { "name" : "networks/234093456/reports/4555265029" , "displayName" : "My API Report" , "reportId" : "4555265029" , "reportDefinition" : { "dimensions" : [ "LINE ITEM NAME" , "LINE ITEM ID" ], "metrics" : [ "AD SERVER IMPRESSIONS" ], "dateRange" : { "relative" : "YESTERDAY" }, "reportType" : "HISTORICAL" }, "visibility" : "HIDDEN" } After creating a report, you can use the returned reportId to run it.
- Here is how to wait for a response. result . wait until done! timeout : 60 if result . response? p result . response else puts "No response received." end end run report . rb Node.js const name = 'networks/ NETWORK CODE /reports/ REPORT ID ' ; // Imports the Admanager library const { ReportServiceClient } = require ( '@google-ads/admanager' ). v1 ; // Instantiates a client const admanagerClient = new ReportServiceClient (); async function callRunReport () { // Construct request const request = { name , }; // Run request const [ operation ] = await admanagerClient . runReport ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callRunReport (); report service . run report . js cURL Request Note: To obtain an access token, see Authentication . curl -X POST -H "Authorization: Bearer ${ ACCESS TOKEN } " \ "https://admanager.googleapis.com/v1/networks/ ${ NETWORK CODE } /reports/{ $REPORT ID }:run" Response { "name" : "networks/234093456/operations/reports/runs/6485392645" , "metadata" : { "@type" : "type.googleapis.com/google.ads.admanager.v1.RunReportMetadata" , "report" : "networks/234093456/reports/4555265029" } } Poll the report status If you are using a client library, the previous section's example code polls the status of the report run Operation at the recommended intervals and provides the result when it is complete.

### Forecasting \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/forecasting](https://developers.google.com/ad-manager/api/forecasting)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- FromDateTime ( endDate , "America/New York" ). date }, targeting = new Targeting () { inventoryTargeting = new InventoryTargeting () { targetedAdUnits = new AdUnitTargeting [] { new AdUnitTargeting () { adUnitId = rootAdUnitId , includeDescendants = true } } } } }; TrafficDataResponse trafficData = forecastService . getTrafficData ( trafficDataRequest ); View on GitHub Ruby Create a start date that's 7 days in the past and an end date that's 7 days in the future. today = ad manager . today start date = today - 7 end date = today + 7 Create targeting. targeting = { :inventory targeting = > { :targeted ad units = > [ { :include descendants = > true , :ad unit id = > root ad unit id } ] } } Request the traffic forecast data. traffic data = forecast service . get traffic data ({ :targeting = > targeting , :requested date range = > { :start date = > start date . to h , :end date = > end date . to h } }) View on GitHub Availability forecasts An AvailabilityForecast reports the maximum number of available units with which the line item can be booked.
- GetService ( 'ForecastService' , version = 'v202602' ) Set forecasting options. forecast options = { 'includeContendingLineItems' : True , 'includeTargetingCriteriaBreakdown' : True , } Get forecast for line item. forecast = forecast service . getAvailabilityForecastById ( line item id , forecast options ) matched = int ( forecast [ 'matchedUnits' ]) available units = int ( forecast [ 'availableUnits' ]) if matched > 0 : available percent = ( float ( available units ) / matched ) 100. else : available percent = 0 contending line items = getattr ( forecast , 'contentingLineItems' , []) Display results. print ( ' %s %s matched.' % ( matched , forecast [ 'unitType' ] . lower ())) print ( ' %s%% %s available.' % ( available percent , forecast [ 'unitType' ] . lower ())) print ( ' %d contending line items.' % len ( contending line items )) if 'possibleUnits' in forecast and matched : possible percent = ( int ( forecast [ 'possibleUnits' ]) / float ( matched )) 100. print ( ' %s%% %s possible' % ( possible percent , forecast [ 'unitType' ] . lower ())) View on GitHub PHP $forecastService = $serviceFactory->createForecastService($session); // Get forecast for line item. $options = new AvailabilityForecastOptions(); $options->setIncludeContendingLineItems(true); $options->setIncludeTargetingCriteriaBreakdown(true); $forecast = $forecastService->getAvailabilityForecastById( $lineItemId, $options ); // Print out forecast results. $matchedUnits = $forecast->getMatchedUnits(); $unitType = strtolower($forecast->getUnitType()); printf("%d %s matched.%s", $matchedUnits, $unitType, PHP EOL); if ($matchedUnits > 0) { $availableUnits = $forecast->getAvailableUnits(); $percentAvailableUnits = $availableUnits / $matchedUnits 100; $possibleUnits = $forecast->getPossibleUnits(); $percentPossibleUnits = $possibleUnits / $matchedUnits 100; printf( "%.2d%% %s available.%s", $percentAvailableUnits, $unitType, PHP EOL ); printf( "%.2d%% %s possible.%s", $percentPossibleUnits, $unitType, PHP EOL ); } printf( "%d contending line items.%s", count($forecast->getContendingLineItems()), PHP EOL ); View on GitHub C# using ( ForecastService forecastService = user .
- TrafficDataRequest trafficDataRequest = new TrafficDataRequest (); trafficDataRequest . setRequestedDateRange ( dateRange ); trafficDataRequest . setTargeting ( targeting ); TrafficDataResponse trafficData = forecastService . getTrafficData ( trafficDataRequest ); View on GitHub Python Create a start date that's 7 days in the past and an end date that's 7 days in the future. today = datetime . date . today () start date = today - datetime . timedelta ( days = 7 ) end date = today + datetime . timedelta ( days = 7 ) Create targeting. targeting = { 'inventoryTargeting' : { 'targetedAdUnits' : [ { 'includeDescendants' : True , 'adUnitId' : root ad unit id , } ] } } Request the traffic forecast data. traffic data = forecast service . getTrafficData ({ 'targeting' : targeting , 'requestedDateRange' : { 'startDate' : start date , 'endDate' : end date } }) View on GitHub PHP // Create the date range.
- Include the previous and next 7 days. $startDate = AdManagerDateTimes::fromDateTime(new DateTime('-7 day')) ->getDate(); $endDate = AdManagerDateTimes::fromDateTime(new DateTime('+7 day')) ->getDate(); $dateRange = new DateRange(); $dateRange->setStartDate($startDate); $dateRange->setEndDate($endDate); // Request the traffic forecast data. $trafficDataRequest = new TrafficDataRequest(); $trafficDataRequest->setRequestedDateRange($dateRange); $trafficDataRequest->setTargeting($targeting); $trafficData = $forecastService->getTrafficData($trafficDataRequest); View on GitHub C# TrafficDataRequest trafficDataRequest = new TrafficDataRequest () { requestedDateRange = new DateRange () { startDate = DateTimeUtilities .

### "The Publisher Query Language (PQL) Developer's Guide \_|\_ Ad Manager SOAP\

- URL: [https://developers.google.com/ad-manager/api/pqlreference](https://developers.google.com/ad-manager/api/pqlreference)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Example (Creates a query and enters two variables in place of hard-coded id and status property values): // Create two mapped parameters : id and status String ValueMapEntry [] values = new String ValueMapEntry [ 2 ]; values [ 0 ] = new String ValueMapEntry ( "id" , new NumberValue ( null , "123" )); values [ 1 ] = new String ValueMapEntry ( "status" , new TextValue ( null , "APPROVED" )); // Create our statement and map our bind variables Statement statement = new Statement (); statement . setQuery ( "WHERE id = :id AND status = :status LIMIT 500" ); statement . setValues ( values ); DateTime fields - You can filter by date and time by assigning a DateTime value to a bind variable, or by using a string formatted according to ISO 8601. // Create a bind variable : startDateTime String ValueMapEntry [] values = new String ValueMapEntry [ 1 ]; values [ 0 ] = new String ValueMapEntry ( "startDateTime" , new DateTimeValue ( null , dateTime )); // Create our statement and map our bind variables Statement statement = new Statement (); statement . setQuery ( "WHERE endDateTime :startDateTime LIMIT 500" ); statement . setValues ( values ); Fetching match tables with PQL Match tables provide a lookup mechanism for the raw values contained within data transfer files, allowing you to match ad serving information (such as ad unit or line item) to pre-assigned values stored in the database.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["PQL, a SQL-like language, queries objects using WHERE, ORDER BY, and LIMIT clauses.
- Set the start and end dates of the report to run (past 8 days). end date = date . today () start date = end date - timedelta ( days = 8 ) Create report job. report job = { 'reportQuery' : { 'dimensions' : [ 'LINE ITEM ID' , 'LINE ITEM NAME' ], 'columns' : [ 'AD SERVER IMPRESSIONS' , 'AD SERVER CLICKS' , 'AD SERVER CTR' , 'AD SERVER CPM AND CPC REVENUE' , 'AD SERVER WITHOUT CPD AVERAGE ECPM' ], 'dateRangeType' : 'CUSTOM DATE' , 'startDate' : start date , 'endDate' : end date } } Download the report Initialize a DataDownloader. report downloader = client .
- DataFrame ( data = line items [ 1 :], columns = line items [ 0 ]) merged result = pandas . merge ( report , line items , left on = 'Dimension.LINE ITEM ID' , right on = 'id' ) merged result . to csv ( ' /complete line items report.csv' , index = False ) View on GitHub Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

