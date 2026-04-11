---
title: "Create and run reports \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/reports
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/getting-started
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reports
  title: "Create and run reports \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Send feedback
Create and run reports
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Interactive reports can be created and run using the Ad Manager API, including running existing reports created in the Ad Manager UI.
After initiating a report run, its status can be polled, and the results can be read upon completion.
Creating a report involves using the networks.reports.create method to define the report parameters like dimensions, metrics, and date range.
Running a report requires its ID, which can be obtained from the Ad Manager UI or by listing reports using the API.
Once a report run operation is complete, the result resource name can be obtained to fetch paginated rows of report data using networks.reports.results.fetchRows .
Using the Ad Manager API, you can create and run Interactive reports. For
details on Interactive reporting in Ad Manager, see Create an Interactive report .
With Interactive reports, you can do the following:
Create a new report using the API, and initiate a run.
Run an existing report you created in the Ad Manager UI.
After you initiate a report run, you can poll the report's status and
read the results after completion.
Tip: For reports with lots of dimensions and metrics, you can use the Ad Manager
UI to check dimension and metric compatibility.
This guide covers how to create a report, initiate an asynchronous run of a
Report ,
poll the returned
Operation
status, obtain the
Result
resource name from the completed
Operation
and fetch a paginated set of result
Rows .
Prerequisite
Before continuing, verify that you have access to a Google Ad Manager network.
To get access, see Get started with Google Ad Manager
and user role permissions for Reports .
Create a report
Using the
networks.reports.create
method, you can create a Report
object.
Tip: When you create a report using the API, the visibility field has a default
value of HIDDEN .
The report is not visible in the Ad Manager UI and is
only accessible using the API. To enable UI access, set the visibility field to
DRAFT or SAVED .
The following example creates a report that shows yesterday's impressions
broken down by line item:
Java
import com.google.ads.admanager.v1.CreateReportRequest ;
import com.google.ads.admanager.v1.NetworkName ;
import com.google.ads.admanager.v1.Report ;
import com.google.ads.admanager.v1.ReportServiceClient ;
public class SyncCreateReport {
public static void main ( String [] args ) throws Exception {
syncCreateReport ();
}
public static void syncCreateReport () throws Exception {
try ( ReportServiceClient reportServiceClient = ReportServiceClient . create ()) {
Report report =
Report . newBuilder ()
. setDisplayName ( "My API Report" )
. setReportDefinition (
ReportDefinition . newBuilder ()
. addDimensions ( Dimension . LINE_ITEM_NAME )
. addDimensions ( Dimension . LINE_ITEM_ID )
. addMetrics ( Metric . AD_SERVER_IMPRESSIONS )
. setDateRange ( DateRange . newBuilder (). setRelative ( RelativeDateRange . YESTERDAY ))
. setReportType ( ReportType . HISTORICAL )
. build ())
. build ();
CreateReportRequest request =
CreateReportRequest . newBuilder ()
. setParent ( NetworkName . of ( " NETWORK_CODE " ). toString ())
. setReport ( report )
. build ();
Report response = reportServiceClient . createReport ( request );
}
}
} SyncCreateReport . java
Python
from google.ads import admanager_v1
from google.ads.admanager_v1 import Report , ReportDefinition
def sample_create_report ():
# Create a client
client = admanager_v1 . ReportServiceClient ()
# Initialize request argument(s)
report = admanager_v1 . Report (
display_name = "My API Report" ,
report_definition = ReportDefinition (
dimensions = [
ReportDefinition . Dimension . LINE_ITEM_NAME ,
ReportDefinition . Dimension . LINE_ITEM_ID ,
],
metrics = [
ReportDefinition . Metric . AD_SERVER_IMPRESSIONS ,
],
date_range = ReportDefinition . DateRange (
relative = ReportDefinition . DateRange . RelativeDateRange . YESTERDAY
),
report_type = ReportDefinition . ReportType . HISTORICAL ,
)
)
request = admanager_v1 . CreateReportRequest (
parent = "networks/ NETWORK_CODE " ,
report = report ,
)
# Make the request
response = client . create_report ( request = request )
# Handle the response
print ( response )
admanager_v1_generated_report_service_create_report_sync . py
.NET
using Google.Ads.AdManager.V1 ;
using Dimension = Google . Ads . AdManager . V1 . ReportDefinition . Types . Dimension ;
using Metric = Google . Ads . AdManager . V1 . ReportDefinition . Types . Metric ;
public sealed partial class GeneratedReportServiceClientSnippets
{
public void CreateReport ()
{
// Create client
ReportServiceClient reportServiceClient = ReportServiceClient . Create ();
// Initialize request argument(s)
string parent = "networks/ NETWORK_CODE " ;
Report report = new Report
{
DisplayName = "My API Report" ,
ReportDefinition = new ReportDefinition
{
Dimensions = { Dimension . LineItemName , Dimension . LineItemId },
Metrics = { Metric . AdServerImpressions },
DateRange = new ReportDefinition . Types . DateRange
{
Relative = ReportDefinition . Types . DateRange . Types . RelativeDateRange . Yesterday
},
ReportType = ReportDefinition . Types . ReportType . Historical
}
};
// Make the request
Report response = reportServiceClient . CreateReport ( parent , report );
}
} ReportServiceClient . CreateReportSnippet . g . cs
PHP
use Google\Ads\AdManager\V1\Client\ReportServiceClient ;
use Google\Ads\AdManager\V1\CreateReportRequest ;
use Google\Ads\AdManager\V1\ReportDefinition\DateRange ;
use Google\Ads\AdManager\V1\ReportDefinition\Dimension ;
use Google\Ads\AdManager\V1\ReportDefinition\Metric ;
use Google\Ads\AdManager\V1\ReportDefinition\DateRange\RelativeDateRange ;
use Google\Ads\AdManager\V1\Report ;
use Google\Ads\AdManager\V1\ReportDefinition ;
use Google\Ads\AdManager\V1\ReportDefinition\ReportType ;
function createReport () : void
{
$client = new ReportServiceClient ();
$report = ( new Report ())
-> setDisplayName ( 'My API Report' )
-> setReportDefinition (( new ReportDefinition ())
-> setDimensions ([
Dimension :: LINE_ITEM_NAME ,
Dimension :: LINE_ITEM_ID
])
-> setMetrics ([
Metric :: AD_SERVER_IMPRESSIONS
])
-> setDateRange (( new DateRange )
-> setRelative ( RelativeDateRange :: YESTERDAY )
)
-> setReportType ( ReportType :: HISTORICAL )
);
$request = new CreateReportRequest ([
'parent' => "networks/ NETWORK_CODE " ,
'report' => $report
]);
$response = $client -> createReport ( $request );
print_r ( $response );
}
Ruby
require "google/ads/ad_manager/v1"
def create_report
# Create a client object. The client can be reused for multiple calls.
client = Google :: Ads :: AdManager :: V1 :: ReportService :: Rest :: Client . new
report = Google :: Ads :: AdManager :: V1 :: Report . new (
display_name : "My API Report" ,
report_definition : Google :: Ads :: AdManager :: V1 :: ReportDefinition . new (
dimensions : [
:LINE_ITEM_NAME ,
:LINE_ITEM_ID
] ,
metrics : [
:AD_SERVER_IMPRESSIONS
] ,
date_range : Google :: Ads :: AdManager :: V1 :: ReportDefinition :: DateRange . new (
relative : :YESTERDAY
),
report_type : :HISTORICAL
)
)
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Ads :: AdManager :: V1 :: CreateReportRequest . new (
parent : 'networks/ NETWORK_CODE '
report : report
)
# Call the create_report method.
result = client . create_report request
# The returned object is of type Google::Ads::AdManager::V1::Report.
p result
end create_report . rb
Node.js
const parent = 'networks/ NETWORK_CODE ' ;
const report = {
displayName : 'My API Report' ,
reportDefinition : {
dimensions : [ 'LINE_ITEM_NAME' , 'LINE_ITEM_ID' ],
metrics : [ 'AD_SERVER_IMPRESSIONS' ],
dateRange : {
relative : 'YESTERDAY' ,
},
reportType : 'HISTORICAL' ,
},
};
// Imports the Admanager library
const { ReportServiceClient } = require ( '@google-ads/admanager' ). v1 ;
// Instantiates a client
const admanagerClient = new ReportServiceClient ();
async function callCreateReport () {
// Construct request
const request = {
parent ,
report ,
};
// Run request
const response = await admanagerClient . createReport ( request );
console . log ( response );
}
callCreateReport (); report_service . create_report . js
cURL
Request
Note: To obtain an access token, see
Authentication .
curl -X POST -H "Authorization: Bearer ${ ACCESS_TOKEN } " \
-H "Content-Type: application/json" \
-d '{
"report": {
"displayName": "My API Report",
"reportDefinition": {
"dimensions": ["LINE_ITEM_NAME", "LINE_ITEM_ID"],
"metrics": ["AD_SERVER_IMPRESSIONS"],
"dateRange": {
"relative": "YESTERDAY"
},
"reportType": "HISTORICAL"
}
}
}' \
"https://admanager.googleapis.com/v1/networks/ ${ NETWORK_CODE } /reports"
Response
{
"name" : "networks/234093456/reports/4555265029" ,
"displayName" : "My API Report" ,
"reportId" : "4555265029" ,
"reportDefinition" : {
"dimensions" : [
"LINE_ITEM_NAME" ,
"LINE_ITEM_ID"
],
"metrics" : [
"AD_SERVER_IMPRESSIONS"
],
"dateRange" : {
"relative" : "YESTERDAY"
},
"reportType" : "HISTORICAL"
},
"visibility" : "HIDDEN"
}
After creating a report, you can use the returned reportId to run it.
Run a report
To run a report, you need the report ID. You can obtain a report ID in the Ad
Manager UI through the report URL. For example, in the URL
https://admanager.google.com/234093456#reports/interactive/detail/report_id=4555265029
the report ID is 4555265029 .
You can also read reports your user has access to using the
networks.reports.list
method and get the ID from the resource name:
networks/234093456/reports/4555265029
Tip: If you're using a service account, use the UI to share reports with
the service account user.
After you have your report ID, you can initiate an asynchronous run of the
report using the
networks.reports.run
method. This method returns the resource name of a long running
Operation .
Note that in the following example code, REPORT_ID is a placeholder for the
report ID and NETWORK_CODE is a placeholder for your network code. To find
your network code, see
Find Ad Manager account information .
Java
import com.google.ads.admanager.v1.ReportName ;
import com.google.ads.admanager.v1.ReportServiceClient ;
import com.google.ads.admanager.v1.RunReportResponse ;
public class SyncRunReportReportname {
public static void main ( String [] args ) throws Exception {
syncRunReportReportname ();
}
public static void syncRunReportReportname () throws Exception {
try ( ReportServiceClient reportServiceClient = ReportServiceClient . create ()) {
ReportName name = ReportName . of ( " NETWORK_CODE " , " REPORT_ID " );
RunReportResponse response = reportServiceClient . runReportAsync ( name ). get ();
}
}
} SyncRunReportReportname . java
Python
from google.ads import admanager_v1
def sample_run_report ():
# Create a client
client = admanager_v1 . ReportServiceClient ()
# Initialize request argument(s)
request = admanager_v1 . RunReportRequest (
name = "networks/ NETWORK_CODE /reports/ REPORT_ID " ,
)
# Make the request
operation = client . run_report ( request = request )
print ( "Waiting for operation to complete..." )
response = operation . result ()
# Handle the response
print ( response )
admanager_v1_generated_report_service_run_report_sync . py
.NET
using Google.Ads.AdManager.V1 ;
using Google.LongRunning ;
public sealed partial class GeneratedReportServiceClientSnippets
{
public void RunReportResourceNames ()
{
// Create client
ReportServiceClient reportServiceClient = ReportServiceClient . Create ();
// Initialize request argument(s)
ReportName name = ReportName . FromNetworkCodeReport ( " NETWORK_CODE " , " REPORT_ID " );
// Make the request
Operation<RunReportResponse , RunReportMetadata > response = reportServiceClient . RunReport ( name );
// Poll until the returned long-running operation is complete
Operation<RunReportResponse , RunReportMetadata > completedResponse = response . PollUntilCompleted ();
// Retrieve the operation result
RunReportResponse result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<RunReportResponse , RunReportMetadata > retrievedResponse = reportServiceClient . PollOnceRunReport ( operationName );
// Check if the retrieved long-running operation has completed
if ( retrievedResponse . IsCompleted )
{
// If it has completed, then access the result
RunReportResponse retrievedResult = retrievedResponse . Result ;
}
}
} ReportServiceClient . RunReportResourceNamesSnippet . g . cs
PHP
use Google\Ads\AdManager\V1\Client\ReportServiceClient ;
use Google\Ads\AdManager\V1\RunReportRequest ;
use Google\Ads\AdManager\V1\RunReportResponse ;
use Google\ApiCore\ApiException ;
use Google\ApiCore\OperationResponse ;
use Google\Rpc\Status ;
function run_report_sample ( string $formattedName ) : void
{
// Create a client.
$reportServiceClient = new ReportServiceClient ();
// Prepare the request message.
$request = ( new RunReportRequest ())
- > setName ( $formattedName );
// Call the API and handle any network failures.
try {
$response = $reportServiceClient - > runReport ( $request );
$response - > pollUntilComplete ();
if ( $response - > operationSucceeded ()) {
$result = $response - > getResult ();
printf ( 'Operation successful with response data: %s' . PHP_EOL , $result - > serializeToJsonString ());
} else {
$error = $response - > getError ();
printf ( 'Operation failed with error data: %s' . PHP_EOL , $error - > serializeToJsonString ());
}
} catch ( ApiException $ex ) {
printf ( 'Call failed with message: %s' . PHP_EOL , $ex - > getMessage ());
}
}
function callSample () : void
{
$formattedName = ReportServiceClient :: reportName ( ' NETWORK_CODE ' , ' REPORT_ID ' );
run_report_sample ( $formattedName );
} run_report . php
Ruby
require "google/ads/ad_manager/v1"
def run_report
# Create a client object. The client can be reused for multiple calls.
client = Google :: Ads :: AdManager :: V1 :: ReportService :: Rest :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Ads :: AdManager :: V1 :: RunReportRequest . new (
:name => 'networks/ NETWORK_CODE /reports/ REPORT_ID '
)
# Call the run_report method.
result = client . run_report request
# The returned object is of type Gapic::Operation. You can use it to
# check the status of an operation, cancel it, or wait for results.
# Here is how to wait for a response.
result . wait_until_done! timeout : 60
if result . response?
p result . response
else
puts "No response received."
end
end run_report . rb
Node.js
const name = 'networks/ NETWORK_CODE /reports/ REPORT_ID ' ;
// Imports the Admanager library
const { ReportServiceClient } = require ( '@google-ads/admanager' ). v1 ;
// Instantiates a client
const admanagerClient = new ReportServiceClient ();
async function callRunReport () {
// Construct request
const request = {
name ,
};
// Run request
const [ operation ] = await admanagerClient . runReport ( request );
const [ response ] = await operation . promise ();
console . log ( response );
}
callRunReport (); report_service . run_report . js
cURL
Request
Note: To obtain an access token, see
Authentication .
curl -X POST -H "Authorization: Bearer ${ ACCESS_TOKEN } " \
"https://admanager.googleapis.com/v1/networks/ ${ NETWORK_CODE } /reports/{ $REPORT_ID }:run"
Response
{
"name" : "networks/234093456/operations/reports/runs/6485392645" ,
"metadata" : {
"@type" : "type.googleapis.com/google.ads.admanager.v1.RunReportMetadata" ,
"report" : "networks/234093456/reports/4555265029"
}
}
Poll the report status
If you are using a client library, the previous section's example code polls
the status of the report run
Operation
at the recommended intervals and provides the result when it is complete. For
more information on the recommended polling intervals, see
networks.reports.run .
If you want more control over polling, make an individual request to retrieve
the current status of a running report using the
networks.operations.reports.runs.get
method. Some client libraries also support setting custom polling strategies:
Java
import com.google.ads.admanager.v1.ReportServiceSettings ;
import com.google.api.gax.longrunning.OperationalTimedPollAlgorithm ;
import com.google.api.gax.retrying.RetrySettings ;
import com.google.api.gax.retrying.TimedRetryAlgorithm ;
import java.time.Duration ;
public class SyncRunReport {
public static void main ( String [] args ) throws Exception {
syncRunReport ();
}
public static void syncRunReport () throws Exception {
ReportServiceSettings . Builder reportServiceSettingsBuilder = ReportServiceSettings . newBuilder ();
TimedRetryAlgorithm timedRetryAlgorithm =
OperationalTimedPollAlgorithm . create (
RetrySettings . newBuilder ()
. setInitialRetryDelayDuration ( Duration . ofMillis ( 500 ))
. setRetryDelayMultiplier ( 1.5 )
. setMaxRetryDelayDuration ( Duration . ofMillis ( 5000 ))
. setTotalTimeoutDuration ( Duration . ofHours ( 24 ))
. build ());
reportServiceSettingsBuilder
. createClusterOperationSettings ()
. setPollingAlgorithm ( timedRetryAlgorithm )
. build ();
}
} SyncRunReport . java
Python
from google.ads import admanager_v1
from google.longrunning.operations_pb2 import GetOperationRequest
def sample_poll_report ():
# Run the report
client = admanager_v1 . ReportServiceClient ()
response = client . run_report ( name = "networks/ NETWORK_CODE /reports/ REPORT_ID " )
# Check if the long-running operation has completed
operation = client . get_operation (
GetOperationRequest ( name = response . operation . name ))
if ( operation . done ):
# If it has completed, then access the result
run_report_response = admanager_v1 . RunReportResponse . deserialize ( payload = operation . response . value )
.NET
Operation<RunReportResponse , RunReportMetadata > retrievedResponse =
reportServiceClient . PollOnceRunReport ( operationName );
// Check if the retrieved long-running operation has completed
if ( retrievedResponse . IsCompleted )
{
// If it has completed, then access the result
RunReportResponse retrievedResult = retrievedResponse . Result ;
}
PHP
$options = [
'initialPollDelayMillis' => 500 , // Initial delay of 500ms
'pollDelayMultiplier' => 1.5 ,
'maxPollDelayMillis' => 30000 , // Max poll delay of 30 seconds
'totalPollTimeoutMillis' => 60 * 60 * 1000 , // Total timeout of 1 hour in milliseconds
];
$response = $reportServiceClient -> runReport ( $request );
$response -> pollUntilComplete ( $options );
Ruby
options = {
initial_delay : 0 . 5 , # Initial delay of 500ms (0.5 seconds)
multiplier : 1 . 5 ,
max_delay : 30 . 0 , # Max poll delay of 30 seconds
timeout : 60 * 60 # Total timeout of 1 hour in seconds
}
result = client . run_report request
result . wait_until_done! ( retry_policy : options )
if result . response?
p result . response
else
puts "No response received."
end
Node.js
const options = {
initialRetryDelayMillis : 500 , // Initial delay of 500ms
retryDelayMultiplier : 1.5 ,
maxRetryDelayMillis : 30 , // Max poll delay of 30 seconds
totalTimeoutMillis : 60 * 60 * 1000 // Total timeout of 1 hour
}
const [ operation ] = await admanagerClient . runReport ( request );
operation . backoffSettings = options ;
const [ response ] = await operation . promise ();
console . log ( response );
cURL
Request
curl -H "Authorization: Bearer ${ ACCESS_TOKEN } " \
"https://admanager.googleapis.com/v1/networks/ ${ NETWORK_CODE } /operations/reports/runs/ ${ OPERATION_ID } "
Response
{
"name" : "networks/234093456/operations/reports/runs/6485392645" ,
"metadata" : {
"@type" : "type.googleapis.com/google.ads.admanager.v1.RunReportMetadata" ,
"percentComplete" : 50 ,
"report" : "networks/234093456/reports/4555265029"
},
"done" : false ,
}
Get the result resource name
After the report run
Operation
is complete, it contains the resource name of the
Result .
Java
RunReportResponse response = reportServiceClient . runReportAsync ( name ). get ();
// Result name in the format networks/[NETWORK_CODE]/reports/[REPORT_ID]/results/[RESULT_ID]
String resultName = response . getReportResult ();
Python
operation = client . run_report ( request = request )
response = operation . result ()
# Result name in the format networks/[NETWORK_CODE]/reports/[REPORT_ID]/results/[RESULT_ID]
result_name = response . report_result
.NET
Operation<RunReportResponse , RunReportMetadata > response = reportServiceClient . RunReport ( request );
// Poll until the returned long-running operation is complete
Operation<RunReportResponse , RunReportMetadata > completedResponse = response . PollUntilCompleted ();
RunReportResponse result = completedResponse . Result ;
// Result name in the format networks/[NETWORK_CODE]/reports/[REPORT_ID]/results/[RESULT_ID]
string resultName = result . ReportResult ;
PHP
$response = $reportServiceClient -> runReport ( $request );
$response -> pollUntilComplete ();
if ( $response -> operationSucceeded ()) {
$result = $response -> getResult ();
// Result name in the format networks/[NETWORK_CODE]/reports/[REPORT_ID]/results/[RESULT_ID]
$resultName = $result -> getReportResult ();
}
Ruby
result = client . run_report request
result . wait_until_done!
if result . response?
# Result name in the format networks/[NETWORK_CODE]/reports/[REPORT_ID]/results/[RESULT_ID]
p result . response . report_result
else
puts "No response received."
end
Node.js
// Run request
const [ operation ] = await admanagerClient . runReport ( request );
const [ response ] = await operation . promise ();
// Result name in the format networks/[NETWORK_CODE]/reports/[REPORT_ID]/results/[RESULT_ID]
console . log ( response . reportResult );
cURL
Request
curl -H "Authorization: Bearer ${ ACCESS_TOKEN } " \
"https://admanager.googleapis.com/v1/networks/ ${ NETWORK_CODE } /operations/reports/runs/ ${ OPERATION_ID } "
Response
{
"name" : "networks/234093456/operations/reports/runs/6485392645" ,
"metadata" : {
"@type" : "type.googleapis.com/google.ads.admanager.v1.RunReportMetadata" ,
"percentComplete" : 100 ,
"report" : "networks/234093456/reports/4555265029"
},
"done" : true ,
"response" : {
"@type" : "type.googleapis.com/google.ads.admanager.v1.RunReportResponse" ,
"reportResult" : "networks/234093456/reports/4555265029/results/7031632628"
}
}
Read result rows
The Result
resource has a single method,
networks.reports.results.fetchRows ,
to read a paginated list of rows. Each row
has a list of dimension values and a list of grouped metric
values. Each group contains the metric value and any comparison values
or flags. For more information on flags, see
Use flags in your interactive report .
For reports with no date range comparisons or splits, there is a
single
MetricValueGroup
with metric values (for example, impressions or clicks) for the entire date
range of the report.
The order of dimension and metric values are the same as the order in the
ReportDefinition
of the Report .
The following is a JSON example of a
fetchRows
response and a corresponding
ReportDefinition
:
fetchRows Response
{
"rows" : [
{
"dimensionValues" : [
{
"stringValue" : "Line Item #1"
},
{
"intValue" : "6378470710"
}
],
"metricValueGroups" : [
{
"primaryValues" : [
{
"intValue" : "100"
}
]
}
]
},
{
"dimensionValues" : [
{
"stringValue" : "Line Item #2"
},
{
"intValue" : "5457147368"
}
],
"metricValueGroups" : [
{
"primaryValues" : [
{
"intValue" : "95"
}
]
}
]
}
],
"runTime" : "2024-10-02T10:00:00Z" ,
"dateRanges" : [
{
"startDate" : {
"year" : 2024 ,
"month" : 10 ,
"day" : 1
},
"endDate" : {
"year" : 2024 ,
"month" : 10 ,
"day" : 1
}
}
],
"totalRowCount" : 2
}
Report Definition
{
"name" : "networks/234093456/reports/4555265029" ,
"visibility" : "SAVED" ,
"reportId" : "4555265029" ,
"reportDefinition" : {
"dimensions" : [
"LINE_ITEM_NAME" ,
"LINE_ITEM_ID"
],
"metrics" : [
"AD_SERVER_IMPRESSIONS"
],
"currencyCode" : "USD" ,
"dateRange" : {
"relative" : "YESTERDAY"
},
"reportType" : "HISTORICAL"
},
"displayName" : "Example Report" ,
"updateTime" : "2024-09-01T13:00:00Z" ,
"createTime" : "2024-08-01T02:00:00Z" ,
"locale" : "en-US" ,
"scheduleOptions" : {}
}
If you are using a client library, the response has an iterator that lazily
requests additional pages. You can also use the pageToken and pageSize
parameters. For details on these parameters, see
Query parameters .
If another page exists, the response contains a
nextPageToken field with the token to use in the next request.
Java
import com.google.ads.admanager.v1.ReportDataTable ;
import com.google.ads.admanager.v1.ReportServiceClient ;
public class SyncFetchReportResultRowsString {
public static void main ( String [] args ) throws Exception {
syncFetchReportResultRowsString ();
}
public static void syncFetchReportResultRowsString () throws Exception {
try ( ReportServiceClient reportServiceClient = ReportServiceClient . create ()) {
String name = "networks/ NETWORK_CODE /reports/ REPORT_ID /results/ RESULT_ID " ;
for ( ReportDataTable . Row element :
reportServiceClient . fetchReportResultRows ( name ). iterateAll ()) {
}
}
}
} SyncFetchReportResultRowsString . java
Python
from google.ads import admanager_v1
def sample_fetch_report_result_rows ():
# Create a client
client = admanager_v1 . ReportServiceClient ()
# Initialize request argument(s)
request = admanager_v1 . FetchReportResultRowsRequest (
name = "networks/ NETWORK_CODE /reports/ REPORT_ID /results/ RESULT_ID " )
# Make the request
page_result = client . fetch_report_result_rows ( request = request )
# Handle the response
for response in page_result :
print ( response )
admanager_v1_generated_report_service_fetch_report_result_rows_sync . py
.NET
using Google.Ads.AdManager.V1 ;
using Google.Api.Gax ;
using System ;
public sealed partial class GeneratedReportServiceClientSnippets
{
public void FetchReportResultRows ()
{
// Create client
ReportServiceClient reportServiceClient = ReportServiceClient . Create ();
// Initialize request argument(s)
string name = "" ;
// Make the request
PagedEnumerable<FetchReportResultRowsResponse , ReportDataTable . Types . Row > response = reportServiceClient . FetchReportResultRows ( name );
// Iterate over all response items, lazily performing RPCs as required
foreach ( ReportDataTable . Types . Row item in response )
{
// Do something with each item
Console . WriteLine ( item );
}
// Or iterate over pages (of server-defined size), performing one RPC per page
foreach ( FetchReportResultRowsResponse page in response . AsRawResponses ())
{
// Do something with each page of items
Console . WriteLine ( "A page of results:" );
foreach ( ReportDataTable . Types . Row item in page )
{
// Do something with each item
Console . WriteLine ( item );
}
}
// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10 ;
Page<ReportDataTable . Types . Row > singlePage = response . ReadPage ( pageSize );
// Do something with the page of items
Console . WriteLine ( $"A page of {pageSize} results (unless it's the final page):" );
foreach ( ReportDataTable . Types . Row item in singlePage )
{
// Do something with each item
Console . WriteLine ( item );
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage . NextPageToken ;
}
} ReportServiceClient . FetchReportResultRowsSnippet . g . cs
PHP
use Google\Ads\AdManager\V1\Client\ReportServiceClient ;
use Google\Ads\AdManager\V1\FetchReportResultRowsRequest ;
use Google\Ads\AdManager\V1\FetchReportResultRowsResponse ;
use Google\ApiCore\ApiException ;
function fetch_report_result_rows_sample () : void
{
// Create a client.
$reportServiceClient = new ReportServiceClient ();
// Prepare the request message.
$request = ( new FetchReportResultRowsRequest ())
-> setName ( 'networks/ NETWORK_CODE /reports/ REPORT_ID /results/ RESULT_ID ' );
// Call the API and handle any network failures.
try {
$response = $reportServiceClient - > fetchReportResultRows ( $request );
printf ( 'Response data: %s' . PHP_EOL , $response - > serializeToJsonString ());
} catch ( ApiException $ex ) {
printf ( 'Call failed with message: %s' . PHP_EOL , $ex - > getMessage ());
}
} fetch_report_result_rows . php
Ruby
require "google/ads/ad_manager/v1"
def fetch_report_result_rows
# Create a client object. The client can be reused for multiple calls.
client = Google :: Ads :: AdManager :: V1 :: ReportService :: Rest :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Ads :: AdManager :: V1 :: FetchReportResultRowsRequest . new (
:name => 'networks/ NETWORK_CODE /reports/ REPORT_ID /results/ RESULT_ID '
)
# Call the fetch_report_result_rows method.
result = client . fetch_report_result_rows request
# The returned object is of type Gapic::PagedEnumerable. You can iterate
# over elements, and API calls will be issued to fetch pages as needed.
result . each do | item |
# Each element is of type ::Google::Ads::AdManager::V1::ReportDataTable::Row.
p item
end
end fetch_report_result_rows . rb
Node.js
const name = 'networks/ NETWORK_CODE /reports/ REPORT_ID /results/ RESULT_ID ' ;
// Imports the Admanager library
const { ReportServiceClient } = require ( '@google-ads/admanager' ). v1 ;
// Instantiates a client
const admanagerClient = new ReportServiceClient ();
async function callFetchReportResultRows () {
// Construct request
const request = {
name ,
};
// Run request
const iterable = admanagerClient . fetchReportResultRowsAsync ( request );
for await ( const response of iterable ) {
console . log ( response );
}
}
callFetchReportResultRows (); report_service . fetch_report_result_rows . js
cURL
Initial request
curl -H "Authorization: Bearer ${ ACCESS_TOKEN } " \
"https://admanager.googleapis.com/v1/networks/ ${ NETWORK_CODE } /reports/ ${ REPORT_ID } /results/ ${ RESULT_ID } :fetchRows"
Next page request
curl -H "Authorization: Bearer ${ ACCESS_TOKEN } " \
"https://admanager.googleapis.com/v1/networks/ ${ NETWORK_CODE } /reports/ ${ REPORT_ID } /results/ ${ RESULT_ID } :fetchRows?pageToken= ${ PAGE_TOKEN } "
Troubleshoot issues with a report
Why isn't my report returned in the API?
Make sure that the Ad Manager user
you are authenticating as has access to the Interactive report.
You can only read Interactive reports from the Ad Manager API.
Why are report results on my test network empty?
Test networks don't serve
ads, so delivery reports don't have data.
Why are the report results on my production network empty?
The user you're
authenticating as might not have access to the data you are attempting to
report on. Verify that their role
permissions and
teams are set
correctly.
Why don't the lifetime clicks or impressions match my report in the UI?
Lifetime impressions are for the entire life of the line item, regardless of
the date range of the report. If a line item is still delivering, the value
might change between two runs of the same report.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-12 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-12 UTC."],[],["The Ad Manager API allows you to create, run, and read reports. To run a report, you need its ID, obtainable from the Ad Manager UI or via `networks.reports.list`. Initiate an asynchronous report run with `networks.reports.run`, which returns an `Operation` resource name. Poll the `Operation` status using `networks.operations.reports.runs.get` until complete. Upon completion, retrieve the `Result` resource name. Finally, use `networks.reports.results.fetchRows` to read paginated result rows, containing dimension and metric values. Ensure the authenticated user has the correct permissions to access reports.\n"]]
