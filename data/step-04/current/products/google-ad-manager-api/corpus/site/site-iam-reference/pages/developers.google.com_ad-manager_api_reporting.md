---
title: "Reporting Basics \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/reporting
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/authentication
source_metadata:
  url: https://developers.google.com/ad-manager/api/reporting
  title: "Reporting Basics \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Looking for a REST API? The Ad Manager API (Beta) is now available.
Home
Products
Ad Manager
SOAP API
Send feedback
Reporting Basics
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide explains how to run and download reports using the API, covering both saved and ad hoc report queries.
Prerequisites include access to a Production Google Ad Manager network and an Ad Manager client library.
You can retrieve and run existing saved report queries using the ReportService.getSavedQueriesByStatement method.
You can build ad hoc report queries by setting dimensions, dimension attributes, columns, filters, and date ranges.
Once a ReportJob is created and run, you can check its status and download the completed report in various formats using the ReportService .
Introduction
This guide will show you how to run and download a report with the API. It covers both
using an existing saved report query, and creating an ad hoc report query.
Note: For more information on how Ad Manager reporting data is collected, see
Counting impressions and clicks
and IAB compliance .
Prerequisites
Access to a Production Google Ad Manager network
An Ad Manager client library
Primer
If you are unfamiliar with reporting in Ad Manager, see
Create a new report for an
overview of how to run a report in the Ad Manager UI. The UI has a preview of the
output, as well as tooltips that explain which column and dimension combinations
are supported. When creating a complex report query, it may be easier to create
it in the UI first, and then retrieve the query with the API.
Retrieving a saved ReportQuery
The ReportQuery
object contains all the details of the report. You can create report queries in
the Ad Manager UI, and retrieve them with the
ReportService.getSavedQueriesByStatement
method. The saved query ID is included in the URL when viewing a query in the
UI. For example, in the URL
https://www.google.com/admanager/1234#reports/report/detail/report_id=456789
the query ID is 456789 .
If a query is not compatible with your API version,
SavedQuery.reportQuery
will be null and
SavedQuery.isCompatibleWithApiVersion
will be false .
Compatible saved queries can be run with or without modification.
Java
StatementBuilder statementBuilder =
new StatementBuilder ()
. where ( "id = :id" )
. orderBy ( "id ASC" )
. limit ( 1 )
. withBindVariableValue ( "id" , savedQueryId );
SavedQueryPage page = reportService . getSavedQueriesByStatement ( statementBuilder . toStatement ());
SavedQuery savedQuery = Iterables . getOnlyElement ( Arrays . asList ( page . getResults ()));
if ( ! savedQuery . getIsCompatibleWithApiVersion ()) {
throw new IllegalStateException ( "The saved query is not compatible with this API version." );
}
ReportQuery reportQuery = savedQuery . getReportQuery ();
View on GitHub
Python
statement = ( ad_manager . StatementBuilder ( version = 'v202602' )
. Where ( 'id = :id' )
. WithBindVariable ( 'id' , int ( saved_query_id ))
. Limit ( 1 ))
response = report_service . getSavedQueriesByStatement (
statement . ToStatement ())
if 'results' in response and len ( response [ 'results' ]):
saved_query = response [ 'results' ][ 0 ]
if saved_query [ 'isCompatibleWithApiVersion' ]:
report_job = {}
# Set report query and optionally modify it.
report_job [ 'reportQuery' ] = saved_query [ 'reportQuery' ]
View on GitHub
PHP
$statementBuilder = (new StatementBuilder())->where('id = :id')
->orderBy('id ASC')
->limit(1)
->withBindVariableValue('id', $savedQueryId);
$savedQueryPage = $reportService->getSavedQueriesByStatement(
$statementBuilder->toStatement()
);
$savedQuery = $savedQueryPage->getResults()[0];
if ($savedQuery->getIsCompatibleWithApiVersion() === false) {
throw new UnexpectedValueException(
'The saved query is not compatible with this API version.'
);
}
$reportQuery = $savedQuery->getReportQuery();
View on GitHub
C#
StatementBuilder statementBuilder = new StatementBuilder ()
. Where ( "id = :id" )
. OrderBy ( "id ASC" )
. Limit ( 1 )
. AddValue ( "id" , savedQueryId );
SavedQueryPage page =
reportService . getSavedQueriesByStatement ( statementBuilder . ToStatement ());
SavedQuery savedQuery = page . results [ 0 ];
if ( ! savedQuery . isCompatibleWithApiVersion )
{
throw new InvalidOperationException ( "Saved query is not compatible with this " +
"API version" );
}
// Optionally modify the query.
ReportQuery reportQuery = savedQuery . reportQuery ;
View on GitHub
Ruby
statement = ad_manager . new_statement_builder do | sb |
sb . where = 'id = :saved_query_id'
sb . with_bind_variable ( 'saved_query_id' , saved_query_id )
end
saved_query_page = report_service . get_saved_queries_by_statement (
statement . to_statement ()
)
unless saved_query_page [ :results ]. nil?
saved_query = saved_query_page [ :results ]. first
if saved_query [ :is_compatible_with_api_version ]
# Create report job.
report_job = { :report_query = > saved_query [ :report_query ] }
else
raise StandardError , 'Report query is not compatible with the API'
end
View on GitHub
To run the query, see Creating the ReportJob .
Building a ReportQuery
In addition to using saved queries, you can also create an ad hoc ReportQuery.
To do so, you must set the report's
dimensions ,
dimension
attributes ,
columns , filter and
date range. This example is for a basic delivery report on a single order.
Java
// Create report query.
ReportQuery reportQuery = new ReportQuery ();
reportQuery . setDimensions ( new Dimension [] { Dimension . DATE , Dimension . ORDER_ID });
reportQuery . setColumns (
new Column [] {
Column . AD_SERVER_IMPRESSIONS ,
Column . AD_SERVER_CLICKS ,
Column . AD_SERVER_CTR ,
Column . AD_SERVER_CPM_AND_CPC_REVENUE
});
reportQuery . setDimensionAttributes (
new DimensionAttribute [] {
DimensionAttribute . ORDER_TRAFFICKER ,
DimensionAttribute . ORDER_START_DATE_TIME ,
DimensionAttribute . ORDER_END_DATE_TIME
});
// Create statement to filter for an order.
StatementBuilder statementBuilder =
new StatementBuilder ()
. where ( "ORDER_ID = :orderId" )
. withBindVariableValue ( "orderId" , orderId );
// Set the filter statement.
reportQuery . setStatement ( statementBuilder . toStatement ());
// Set the start and end dates or choose a dynamic date range type.
reportQuery . setDateRangeType ( DateRangeType . CUSTOM_DATE );
reportQuery . setStartDate (
DateTimes . toDateTime ( "2013-05-01T00:00:00" , "America/New_York" ). getDate ());
reportQuery . setEndDate (
DateTimes . toDateTime ( "2013-05-31T00:00:00" , "America/New_York" ). getDate ());
Python
# Create statement object to filter for an order.
statement = ( ad_manager . StatementBuilder ( version = 'v202602' )
. Where ( 'ORDER_ID = :id' )
. WithBindVariable ( 'id' , int ( order_id ))
. Limit ( None ) # No limit or offset for reports
. Offset ( None ))
# Set the start and end dates of the report to run (past 8 days).
end_date = datetime . now () . date ()
start_date = end_date - timedelta ( days = 8 )
# Create report job.
report_job = {
'reportQuery' : {
'dimensions' : [ 'ORDER_ID' , 'ORDER_NAME' ],
'dimensionAttributes' : [ 'ORDER_TRAFFICKER' , 'ORDER_START_DATE_TIME' ,
'ORDER_END_DATE_TIME' ],
'statement' : statement . ToStatement (),
'columns' : [ 'AD_SERVER_IMPRESSIONS' , 'AD_SERVER_CLICKS' ,
'AD_SERVER_CTR' , 'AD_SERVER_CPM_AND_CPC_REVENUE' ,
'AD_SERVER_WITHOUT_CPD_AVERAGE_ECPM' ],
'dateRangeType' : 'CUSTOM_DATE' ,
'startDate' : start_date ,
'endDate' : end_date
}
}
PHP
// Create report query.
$reportQuery = new ReportQuery();
$reportQuery->setDimensions(
[
Dimension::ORDER_ID,
Dimension::ORDER_NAME
]
);
$reportQuery->setDimensionAttributes(
[
DimensionAttribute::ORDER_TRAFFICKER,
DimensionAttribute::ORDER_START_DATE_TIME,
DimensionAttribute::ORDER_END_DATE_TIME
]
);
$reportQuery->setColumns(
[
Column::AD_SERVER_IMPRESSIONS,
Column::AD_SERVER_CLICKS,
Column::AD_SERVER_CTR,
Column::AD_SERVER_CPM_AND_CPC_REVENUE,
Column::AD_SERVER_WITHOUT_CPD_AVERAGE_ECPM
]
);
// Create statement to filter for an order.
$statementBuilder = (new StatementBuilder())
->where('ORDER_ID = :orderId')
->withBindVariableValue(
'orderId',
$orderId
);
// Set the filter statement.
$reportQuery->setStatement($statementBuilder->toStatement());
// Set the start and end dates or choose a dynamic date range type.
$reportQuery->setDateRangeType(DateRangeType::CUSTOM_DATE);
$reportQuery->setStartDate(
AdManagerDateTimes::fromDateTime(
new DateTime(
'-10 days',
new DateTimeZone('America/New_York')
)
)
->getDate()
);
$reportQuery->setEndDate(
AdManagerDateTimes::fromDateTime(
new DateTime(
'now',
new DateTimeZone('America/New_York')
)
)
->getDate()
);
C#
// Create report job.
ReportJob reportJob = new ReportJob ();
reportJob . reportQuery = new ReportQuery ();
reportJob . reportQuery . dimensions = new Dimension []
{
Dimension . ORDER_ID ,
Dimension . ORDER_NAME
};
reportJob . reportQuery . dimensionAttributes = new DimensionAttribute []
{
DimensionAttribute . ORDER_TRAFFICKER ,
DimensionAttribute . ORDER_START_DATE_TIME ,
DimensionAttribute . ORDER_END_DATE_TIME
};
reportJob . reportQuery . columns = new Column []
{
Column . AD_SERVER_IMPRESSIONS ,
Column . AD_SERVER_CLICKS ,
Column . AD_SERVER_CTR ,
Column . AD_SERVER_CPM_AND_CPC_REVENUE ,
Column . AD_SERVER_WITHOUT_CPD_AVERAGE_ECPM
};
// Set a custom date range for the last 8 days
reportJob . reportQuery . dateRangeType = DateRangeType . CUSTOM_DATE ;
System . DateTime endDateTime = System . DateTime . Now ;
reportJob . reportQuery . startDate = DateTimeUtilities
. FromDateTime ( endDateTime . AddDays ( - 8 ), "America/New_York" ). date ;
reportJob . reportQuery . endDate = DateTimeUtilities
. FromDateTime ( endDateTime , "America/New_York" ). date ;
// Create statement object to filter for an order.
StatementBuilder statementBuilder = new StatementBuilder (). Where ( "ORDER_ID = :id" )
. AddValue ( "id" , orderId );
reportJob . reportQuery . statement = statementBuilder . ToStatement ();
Ruby
# Specify a report to run for the last 7 days.
report_end_date = ad_manager . today ()
report_start_date = report_end_date - 7
# Create statement object to filter for an order.
statement = ad_manager . new_report_statement_builder do | sb |
sb . where = 'ORDER_ID = :order_id'
sb . with_bind_variable ( 'order_id' , order_id )
end
# Create report query.
report_query = {
:date_range_type = > 'CUSTOM_DATE' ,
:start_date = > report_start_date . to_h ,
:end_date = > report_end_date . to_h ,
:dimensions = > [ 'ORDER_ID' , 'ORDER_NAME' ] ,
:dimension_attributes = > [ 'ORDER_TRAFFICKER' , 'ORDER_START_DATE_TIME' ,
'ORDER_END_DATE_TIME' ] ,
:columns = > [ 'AD_SERVER_IMPRESSIONS' , 'AD_SERVER_CLICKS' , 'AD_SERVER_CTR' ,
'AD_SERVER_CPM_AND_CPC_REVENUE' , 'AD_SERVER_WITHOUT_CPD_AVERAGE_ECPM' ] ,
:statement = > statement . to_statement ()
}
Creating the ReportJob
Once you have a ReportQuery, it's time to run the report. The
ReportJob object
holds the status of a report, and lets you know when it is ready to download. To
start running your report, use the
ReportService.runReportJob
method.
Java
// Create report job.
ReportJob reportJob = new ReportJob ();
reportJob . setReportQuery ( reportQuery );
// Run report job.
reportJob = reportService . runReportJob ( reportJob );
Python
# Initialize a DataDownloader.
report_downloader = client . GetDataDownloader ( version = 'v202602' )
try :
# Run the report and wait for it to finish.
report_job_id = report_downloader . WaitForReport ( report_job )
except errors . AdManagerReportError as e :
print ( 'Failed to generate report. Error was: %s ' % e )
PHP
// Create report job and start it.
$reportJob = new ReportJob();
$reportJob->setReportQuery($reportQuery);
$reportJob = $reportService->runReportJob($reportJob);
C#
// Run report job.
reportJob = reportService . runReportJob ( reportJob );
Ruby
# Create report job.
report_job = { :report_query = > report_query }
# Run report job.
report_job = report_service . run_report_job ( report_job );
Downloading the Report
After you start the report job, it will have an ID set by the server. Use this
ID with the
ReportService.getReportJobStatus
method to check the status of your report. Once the status is
ReportJobStatus.COMPLETED
the report is ready to download.
Some of our client libraries have helper utilities that will poll the API and
wait for the report to complete. When the report has completed, you can get the
download URL with the
ReportService.getReportDownloadURL
method. A report can be downloaded in different formats. If you want to do
further machine processing with the report, you should use the
CSV_DUMP
format.
Java
// Create report downloader.
ReportDownloader reportDownloader = new ReportDownloader ( reportService , reportJob . getId ());
// Wait for the report to be ready.
if ( reportDownloader . waitForReportReady ()) {
// Change to your file location.
File file = File . createTempFile ( "delivery-report-" , ".csv.gz" );
System . out . printf ( "Downloading report to %s ..." , file . toString ());
// Download the report.
ReportDownloadOptions options = new ReportDownloadOptions ();
options . setExportFormat ( ExportFormat . CSV_DUMP );
options . setUseGzipCompression ( true );
URL url = reportDownloader . getDownloadUrl ( options );
Resources . asByteSource ( url ). copyTo ( Files . asByteSink ( file ));
System . out . println ( "done." );
} else {
System . out . printf ( "Report job %d failed.%n" , reportJob . getId ());
}
Python
# Change to your preferred export format.
export_format = 'CSV_DUMP'
report_file = tempfile . NamedTemporaryFile ( suffix = '.csv.gz' , delete = False )
# Download report data.
report_downloader . DownloadReportToFile (
report_job_id , export_format , report_file )
report_file . close ()
# Display results.
print ( 'Report job with id " %s " downloaded to: \n %s ' % (
report_job_id , report_file . name ))
PHP
// Create report downloader to poll report's status and download when
// ready.
$reportDownloader = new ReportDownloader(
$reportService,
$reportJob->getId()
);
if ($reportDownloader->waitForReportToFinish()) {
// Write to system temp directory by default.
$filePath = sprintf(
'%s.csv.gz',
tempnam(sys_get_temp_dir(), 'delivery-report-')
);
printf("Downloading report to %s ...%s", $filePath, PHP_EOL);
// Download the report.
$reportDownloader->downloadReport(
ExportFormat::CSV_DUMP,
$filePath
);
print "done.\n";
} else {
print "Report failed.\n";
}
C#
ReportUtilities reportUtilities =
new ReportUtilities ( reportService , reportJob . id );
// Set download options.
ReportDownloadOptions options = new ReportDownloadOptions ();
options . exportFormat = ExportFormat . CSV_DUMP ;
options . useGzipCompression = true ;
reportUtilities . reportDownloadOptions = options ;
// Download the report.
using ( ReportResponse reportResponse = reportUtilities . GetResponse ())
{
reportResponse . Save ( filePath );
}
Console . WriteLine ( "Report saved to \"{0}\"." , filePath );
Ruby
MAX_RETRIES . times do | retry_count |
# Get the report job status.
report_job_status = report_service . get_report_job_status ( report_job [ :id ] )
break unless report_job_status == 'IN_PROGRESS'
puts 'Report with ID %d is still running.' % report_job [ :id ]
sleep ( RETRY_INTERVAL )
end
puts 'Report job with ID %d finished with status "%s".' % [ report_job [ :id ] ,
report_service . get_report_job_status ( report_job [ :id ] ) ]
# Get the report URL.
download_url = report_service . get_report_download_url (
report_job_id , export_format
)
puts 'Downloading "%s" to "%s"...' % [ download_url , file_name ]
open ( file_name , 'wb' ) do | local_file |
local_file << URI . open ( download_url ) . read ()
end
Reading the Report Data
Many of our client libraries include utilities for reading report data. This is
useful for doing additional processing on the report data, or combining reports
from different date ranges. Note that the example code assumes the file is not
compressed.
Java
List<String [] > rows = CsvFiles . getCsvDataArray ( filePath , true );
for ( String [] row : rows ) {
// Additional row processing
processReportRow ( row );
}
Python
with open ( report_file . name , 'rb' ) as report :
report_reader = csv . reader ( report )
for row in report_reader :
# Additional row processing
process_row ( row )
PHP
$report = fopen($filePath, 'r');
while (!feof($report)) {
// Additional row processing
processRow(fgetcsv($report));
}
fclose($report);
C#
CsvFile file = new CsvFile ();
file . Read ( fileName , true );
for ( String [] row : file . Records ) {
// Additional row processing
ProcessReportRow ( row );
}
Ruby
CSV . foreach ( file_name , converters : :numeric , headers : true ) do | row |
# Additional row processing
process_row ( row )
end
For more reporting examples, check out our client
libraries on GitHub.
FAQ
Why are all the report results on my test network empty?
Test networks don't serve ads, so delivery reports will not have data.
Why are all the report results on my production network empty?
The user you're authenticating as may not have access to the data you are
attempting to report on. Verify that their
role permissions and
teams are set correctly.
Why do I get the error ReportError.COLUMNS_NOT_SUPPORTED_FOR_REQUESTED_DIMENSIONS for my report?
Not all combinations of columns and dimensions are supported in Ad Manager.
For complex reports, it may be easier to build a valid report in the UI and then
retrieve it with the
ReportService.getSavedQueriesByStatement
method.
Why isn't my saved report returned in the API?
Make sure that the report owner has shared the report with the user you are
authenticating as.
Why isn't my saved report compatible with the API?
Certain reporting features aren't available in the API. This includes
columns, dimension attributes, dimensions, and date range types. For
incompatible date range types, you can save the report with a supported type to
make it retrievable, then alter the ReportQuery to meet your desired fixed date range.
Why don't the lifetime clicks/impressions match my report in the UI?
Lifetime impressions are for the entire life of the line item, regardless of
the date range of the report. If a line item is still delivering, the value will
probably change between running any two reports.
My reports are taking too long and occasionally time out. What can I do?
Decreasing the date range or the number of dimensions will help improve
performance. Try running multiple reports for smaller date ranges instead. You
can then merge the report data to cover the desired date range.
What's the difference between INVENTORY_LEVEL and LINE_ITEM_LEVEL columns? Which should I use?
Columns with LINE_ITEM_LEVEL can only be used if you have line item level
dynamic allocation enabled on your network. These columns include data from the
line item level dynamic allocation to AdSense or Ad Exchange. Similarly, The
INVENTORY_LEVEL columns include data from inventory level dynamic allocation.
For more information about dynamic allocation, see
Ad Exchange line items .
If you're still unsure which API columns to use, create a saved query in the
Ad Manager UI and retrieve it with the
ReportService.getSavedQueriesByStatement
method.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["The content outlines retrieving, building, running, and downloading reports via the Ad Manager API. Key actions include using `ReportService` to retrieve saved queries, create `ReportJob` objects, and run reports. Reports can be customized with dimensions, filters, and date ranges. The document demonstrates how to access completed reports' download URLs and read report data, it also covers the report API limitations. Performance can be improved by adjusting report ranges, and some columns are different in inventory level or line-item level.\n"]]
