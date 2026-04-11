---
title: "Forecasting \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/forecasting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/intro
source_metadata:
  url: https://developers.google.com/ad-manager/api/forecasting
  title: "Forecasting \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
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
Forecasting
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Ad Manager API supports various forecasting methods including traffic, availability, and delivery forecasts.
Traffic forecasts utilize historical and future data to optimize inventory segmentation and packaging.
Availability forecasts predict the maximum bookable units for a line item, similar to the "check inventory" feature in the UI.
Delivery forecasts simulate delivery for multiple line items, considering displacement between them.
Future sell-through reports, available through the ReportService, forecast overall network impression availability for maximizing revenue and sell-through rate.
Introduction
This guide explains the different ways of using
forecasting in the Google Ad
Manager API.
Traffic Forecast
A traffic forecast lets you
read historical traffic alongside future impression opportunities to find better
ways to segment and package inventory.
Java
// Create the date range. Include the previous and next 7 days.
Interval interval =
new Interval (
Instant . now (). plus ( Duration . standardDays ( - 7 )),
Instant . now (). plus ( Duration . standardDays ( 7 )));
DateRange dateRange = new DateRange ();
dateRange . setStartDate ( DateTimes . toDateTime ( interval . getStart ()). getDate ());
dateRange . setEndDate ( DateTimes . toDateTime ( interval . getEnd ()). getDate ());
// Request the traffic data.
TrafficDataRequest trafficDataRequest = new TrafficDataRequest ();
trafficDataRequest . setRequestedDateRange ( dateRange );
trafficDataRequest . setTargeting ( targeting );
TrafficDataResponse trafficData = forecastService . getTrafficData ( trafficDataRequest );
View on GitHub
Python
# Create a start date that's 7 days in the past and an end date that's 7 days
# in the future.
today = datetime . date . today ()
start_date = today - datetime . timedelta ( days = 7 )
end_date = today + datetime . timedelta ( days = 7 )
# Create targeting.
targeting = {
'inventoryTargeting' : {
'targetedAdUnits' : [
{
'includeDescendants' : True ,
'adUnitId' : root_ad_unit_id ,
}
]
}
}
# Request the traffic forecast data.
traffic_data = forecast_service . getTrafficData ({
'targeting' : targeting ,
'requestedDateRange' : {
'startDate' : start_date ,
'endDate' : end_date
}
})
View on GitHub
PHP
// Create the date range. Include the previous and next 7 days.
$startDate = AdManagerDateTimes::fromDateTime(new DateTime('-7 day'))
->getDate();
$endDate = AdManagerDateTimes::fromDateTime(new DateTime('+7 day'))
->getDate();
$dateRange = new DateRange();
$dateRange->setStartDate($startDate);
$dateRange->setEndDate($endDate);
// Request the traffic forecast data.
$trafficDataRequest = new TrafficDataRequest();
$trafficDataRequest->setRequestedDateRange($dateRange);
$trafficDataRequest->setTargeting($targeting);
$trafficData = $forecastService->getTrafficData($trafficDataRequest);
View on GitHub
C#
TrafficDataRequest trafficDataRequest = new TrafficDataRequest () {
requestedDateRange = new DateRange () {
startDate =
DateTimeUtilities . FromDateTime ( startDate , "America/New_York" ). date ,
endDate = DateTimeUtilities . FromDateTime ( endDate , "America/New_York" ). date
},
targeting = new Targeting () {
inventoryTargeting = new InventoryTargeting ()
{
targetedAdUnits = new AdUnitTargeting [] {
new AdUnitTargeting () {
adUnitId = rootAdUnitId ,
includeDescendants = true
}
}
}
}
};
TrafficDataResponse trafficData =
forecastService . getTrafficData ( trafficDataRequest );
View on GitHub
Ruby
# Create a start date that's 7 days in the past and an end date that's 7 days
# in the future.
today = ad_manager . today
start_date = today - 7
end_date = today + 7
# Create targeting.
targeting = {
:inventory_targeting = > {
:targeted_ad_units = > [
{
:include_descendants = > true ,
:ad_unit_id = > root_ad_unit_id
}
]
}
}
# Request the traffic forecast data.
traffic_data = forecast_service . get_traffic_data ({
:targeting = > targeting ,
:requested_date_range = > {
:start_date = > start_date . to_h , :end_date = > end_date . to_h
}
})
View on GitHub
Availability forecasts
An AvailabilityForecast
reports the maximum number of available units with
which the line item can be booked. This forecast is analogous to the check
inventory feature in the UI.
The forecast includes the available, matched, possible, delivered, and reserved
units. It can also include all the contending line items and the available units
for each targeting
breakdown
depending on the options set in the
AvailabilityForecastOptions .
By default, neither is included in the forecast.
Targeting breakdowns include the matched and available units for each targeting
criteria. These breakdown entries are automatically generated according to the
line item targeting. For example, a line item targeted at ad unit ID 123456
would include a breakdown similar to the following:
<targetingCriteriaBreakdowns>
<targetingDimension>AD_UNIT</targetingDimension>
<targetingCriteriaId>123456</targetingCriteriaId>
<targetingCriteriaName>My Ad Unit Name</targetingCriteriaName>
<excluded>false</excluded>
<availableUnits>1000</availableUnits>
<matchedUnits>2300</matchedUnits>
</targetingCriteriaBreakdowns>
You can run availability forecasts on either an existing or prospective line
item.
Existing LineItem
You can run an availability forecast for an existing line item by using its ID.
Java
// Get the ForecastService.
ForecastServiceInterface forecastService =
adManagerServices . get ( session , ForecastServiceInterface . class );
// Get forecast for line item.
AvailabilityForecastOptions options = new AvailabilityForecastOptions ();
options . setIncludeContendingLineItems ( true );
options . setIncludeTargetingCriteriaBreakdown ( true );
AvailabilityForecast forecast =
forecastService . getAvailabilityForecastById ( lineItemId , options );
long matched = forecast . getMatchedUnits ();
double availablePercent = ( forecast . getAvailableUnits () / ( matched * 1.0 )) * 100 ;
String unitType = forecast . getUnitType (). toString (). toLowerCase ();
System . out . printf ( "%d %s matched.%n" , matched , unitType );
System . out . printf ( "%.2f%% %s available.%n" , availablePercent , unitType );
if ( forecast . getPossibleUnits () != null ) {
double possiblePercent = ( forecast . getPossibleUnits () / ( matched * 1.0 )) * 100 ;
System . out . printf ( "%.2f%% %s possible.%n" , possiblePercent , unitType );
}
System . out . printf (
"%d contending line items.%n" ,
forecast . getContendingLineItems () == null ? 0 : forecast . getContendingLineItems (). length );
View on GitHub
Python
# Initialize appropriate service.
forecast_service = client . GetService ( 'ForecastService' , version = 'v202602' )
# Set forecasting options.
forecast_options = {
'includeContendingLineItems' : True ,
'includeTargetingCriteriaBreakdown' : True ,
}
# Get forecast for line item.
forecast = forecast_service . getAvailabilityForecastById (
line_item_id , forecast_options )
matched = int ( forecast [ 'matchedUnits' ])
available_units = int ( forecast [ 'availableUnits' ])
if matched > 0 :
available_percent = ( float ( available_units ) / matched ) * 100.
else :
available_percent = 0
contending_line_items = getattr ( forecast , 'contentingLineItems' , [])
# Display results.
print ( ' %s %s matched.' % ( matched , forecast [ 'unitType' ] . lower ()))
print ( ' %s%% %s available.' % (
available_percent , forecast [ 'unitType' ] . lower ()))
print ( ' %d contending line items.' % len ( contending_line_items ))
if 'possibleUnits' in forecast and matched :
possible_percent = ( int ( forecast [ 'possibleUnits' ]) / float ( matched )) * 100.
print ( ' %s%% %s possible' % ( possible_percent , forecast [ 'unitType' ] . lower ()))
View on GitHub
PHP
$forecastService = $serviceFactory->createForecastService($session);
// Get forecast for line item.
$options = new AvailabilityForecastOptions();
$options->setIncludeContendingLineItems(true);
$options->setIncludeTargetingCriteriaBreakdown(true);
$forecast = $forecastService->getAvailabilityForecastById(
$lineItemId,
$options
);
// Print out forecast results.
$matchedUnits = $forecast->getMatchedUnits();
$unitType = strtolower($forecast->getUnitType());
printf("%d %s matched.%s", $matchedUnits, $unitType, PHP_EOL);
if ($matchedUnits > 0) {
$availableUnits = $forecast->getAvailableUnits();
$percentAvailableUnits = $availableUnits / $matchedUnits * 100;
$possibleUnits = $forecast->getPossibleUnits();
$percentPossibleUnits = $possibleUnits / $matchedUnits * 100;
printf(
"%.2d%% %s available.%s",
$percentAvailableUnits,
$unitType,
PHP_EOL
);
printf(
"%.2d%% %s possible.%s",
$percentPossibleUnits,
$unitType,
PHP_EOL
);
}
printf(
"%d contending line items.%s",
count($forecast->getContendingLineItems()),
PHP_EOL
);
View on GitHub
C#
using ( ForecastService forecastService = user . GetService<ForecastService> ())
{
// Get forecast for line item.
AvailabilityForecastOptions options = new AvailabilityForecastOptions ();
options . includeContendingLineItems = true ;
options . includeTargetingCriteriaBreakdown = true ;
AvailabilityForecast forecast =
forecastService . getAvailabilityForecastById ( lineItemId , options );
// Display results.
long matched = forecast . matchedUnits ;
double availablePercent =
( double ) ( forecast . availableUnits / ( matched * 1.0 )) * 100 ;
String unitType = forecast . unitType . ToString (). ToLower ();
Console . WriteLine ( "{0} {1} matched.\n{2} % {3} available." , matched , unitType ,
availablePercent , unitType );
if ( forecast . possibleUnitsSpecified )
{
double possiblePercent =
( double ) ( forecast . possibleUnits / ( matched * 1.0 )) * 100 ;
Console . WriteLine ( possiblePercent + "% " + unitType + " possible.\n" );
}
Console . WriteLine ( "{0} contending line items." ,
( forecast . contendingLineItems != null )
? forecast . contendingLineItems . Length
: 0 );
View on GitHub
Ruby
# Get the ForecastService.
forecast_service = ad_manager . service ( :ForecastService , API_VERSION )
# Set forecasting options.
forecast_options = {
:include_contending_line_items = > True ,
:include_targeting_criteria_breakdown = > True ,
}
# Get forecast for the line item.
forecast = forecast_service . get_availability_forecast_by_id (
line_item_id , forecast_options
)
unless forecast . nil?
# Display results.
matched = forecast [ :matched_units ]
available_percent = forecast [ :available_units ] * 100 . 0 / matched
unit_type = forecast [ :unit_type ]. to_s . downcase
puts '%.2f %s matched.' % [ matched , unit_type ]
puts '%.2f%% of %s available.' % [ available_percent , unit_type ]
puts '%d contending line items.' % forecast [ :contending_line_items ]. size
unless forecast [ :possible_units ]. nil?
possible_percent = forecast [ :possible_units ] * 100 . 0 / matched
puts '%.2f%% of %s possible.' % [ possible_percent , unit_type ]
end
end
View on GitHub
This example will have an output similar to the following:
100 clicks matched .
2 contend ing line items .
Prospective LineItem
Alternatively, you can instantiate a prospective line item and forecast without
persisting it. To do so, instantiate a local line item object and set it on the
ProspectiveLineItem .
If you set an advertiser ID, the forecast also takes unified blocking
rules into account.
Java
// Get forecast for prospective line item.
ProspectiveLineItem prospectiveLineItem = new ProspectiveLineItem ();
prospectiveLineItem . setAdvertiserId ( advertiserId );
prospectiveLineItem . setLineItem ( lineItem );
AvailabilityForecastOptions options = new AvailabilityForecastOptions ();
options . setIncludeContendingLineItems ( true );
options . setIncludeTargetingCriteriaBreakdown ( true );
AvailabilityForecast forecast =
forecastService . getAvailabilityForecast ( prospectiveLineItem , options );
View on GitHub
Python
prospective_line_item = {
'lineItem' : line_item ,
'advertiserId' : advertiser_id
}
# Set forecasting options.
forecast_options = {
'includeContendingLineItems' : True ,
# The field includeTargetingCriteriaBreakdown can only be set if
# breakdowns are not manually specified.
# 'includeTargetingCriteriaBreakdown': True,
'breakdown' : {
'timeWindows' : [
now_datetime ,
now_datetime + datetime . timedelta ( days = 1 ),
now_datetime + datetime . timedelta ( days = 2 ),
now_datetime + datetime . timedelta ( days = 3 ),
now_datetime + datetime . timedelta ( days = 4 ),
end_datetime
],
'targets' : [
{
# Optional, the name field is only used to identify this
# breakdown in the response.
'name' : 'United States' ,
'targeting' : {
'inventoryTargeting' : {
'targetedAdUnits' : [
{
'includeDescendants' : True ,
'adUnitId' : root_ad_unit_id ,
}
]
},
'geoTargeting' : {
'targetedLocations' : [
{
'id' : '2840' ,
'displayName' : 'US'
}
]
}
}
},
{
# Optional, the name field is only used to identify this
# breakdown in the response.
'name' : 'Geneva' ,
'targeting' : {
'inventoryTargeting' : {
'targetedAdUnits' : [
{
'includeDescendants' : True ,
'adUnitId' : root_ad_unit_id ,
}
]
},
'geoTargeting' : {
'targetedLocations' : [
{
'id' : '20133' ,
'displayName' : 'Geneva'
}
]
}
}
}
]
}
}
# Get forecast.
forecast = forecast_service . getAvailabilityForecast (
prospective_line_item , forecast_options )
View on GitHub
PHP
// Get forecast for prospective line item.
$prospectiveLineItem = new ProspectiveLineItem();
$prospectiveLineItem->setAdvertiserId($advertiserId);
$prospectiveLineItem->setLineItem($lineItem);
$options = new AvailabilityForecastOptions();
$options->setIncludeContendingLineItems(true);
$options->setIncludeTargetingCriteriaBreakdown(true);
$forecast = $forecastService->getAvailabilityForecast(
$prospectiveLineItem,
$options
);
View on GitHub
C#
// Get availability forecast.
AvailabilityForecastOptions options = new AvailabilityForecastOptions ()
{
includeContendingLineItems = true ,
// Targeting criteria breakdown can only be included if breakdowns
// are not speficied.
includeTargetingCriteriaBreakdown = false ,
breakdown = new ForecastBreakdownOptions
{
timeWindows = new DateTime [] {
lineItem . startDateTime ,
DateTimeUtilities . FromDateTime ( tomorrow . AddDays ( 1 ),
"America/New_York" ),
DateTimeUtilities . FromDateTime ( tomorrow . AddDays ( 2 ),
"America/New_York" ),
DateTimeUtilities . FromDateTime ( tomorrow . AddDays ( 3 ),
"America/New_York" ),
DateTimeUtilities . FromDateTime ( tomorrow . AddDays ( 4 ),
"America/New_York" ),
lineItem . endDateTime
},
targets = new ForecastBreakdownTarget [] {
new ForecastBreakdownTarget ()
{
// Optional name field to identify this breakdown
// in the response.
name = "United States" ,
targeting = new Targeting ()
{
inventoryTargeting = new InventoryTargeting ()
{
targetedAdUnits = new AdUnitTargeting [] {
new AdUnitTargeting ()
{
adUnitId = rootAdUnitId ,
includeDescendants = true
}
}
},
geoTargeting = new GeoTargeting ()
{
targetedLocations = new Location [] {
new Location () { id = 2840L }
}
}
}
}, new ForecastBreakdownTarget ()
{
// Optional name field to identify this breakdown
// in the response.
name = "Geneva" ,
targeting = new Targeting ()
{
inventoryTargeting = new InventoryTargeting ()
{
targetedAdUnits = new AdUnitTargeting [] {
new AdUnitTargeting ()
{
adUnitId = rootAdUnitId ,
includeDescendants = true
}
}
},
geoTargeting = new GeoTargeting ()
{
targetedLocations = new Location [] {
new Location () { id = 20133L }
}
}
}
}
}
}
};
ProspectiveLineItem prospectiveLineItem = new ProspectiveLineItem ()
{
advertiserId = advertiserId ,
lineItem = lineItem
};
AvailabilityForecast forecast =
forecastService . getAvailabilityForecast ( prospectiveLineItem , options );
View on GitHub
Ruby
prospective_line_item = {
:advertiser_id = > advertiser_id ,
:line_item = > line_item
}
# Set forecasting options.
forecast_options = {
:include_contending_line_items = > true ,
# The field includeTargetingCriteriaBreakdown can only be set if breakdowns
# are not mannually specified.
# :include_targeting_criteria_breakdown => true,
:breakdown = > {
# Break down forecast by day from start_time to end_time
:time_windows = > time_windows ,
# Break down forecast by any targeting configuration
:targets = > [
{
# Optional, the name field is only used to identify this breakdown in
# the response.
:name = > 'United States' ,
:targeting = > {
:inventory_targeting = > targeting [ :inventory_targeting ] ,
:geo_targeting = > {
:targeted_locations = > [
{
:id = > '2840' ,
:display_name = > 'US'
}
]
}
}
},
{
# Optional, the name field is only used to identify this breakdown in
# the response.
:name = > 'Geneva' ,
:targeting = > {
:inventory_targeting = > targeting [ :inventory_targeting ] ,
:geo_targeting = > {
:targeted_locations = > [
{
:id = > '20133' ,
:display_name = > 'Geneva'
}
]
}
}
}
]
}
}
# Get forecast for the line item.
forecast = forecast_service . get_availability_forecast (
prospective_line_item , forecast_options )
View on GitHub
Delivery forecasts
If you want to simulate the delivery of multiple competing line items, you can
do so with a
DeliveryForecast .
Note: A delivery forecast is not equivalent to running multiple availability
forecasts. Delivery forecasts consider displacement between the forecasted line
items.
Existing LineItems
You can run a delivery forecast for existing line items by using their IDs.
Java
// Get the ForecastService.
ForecastServiceInterface forecastService =
adManagerServices . get ( session , ForecastServiceInterface . class );
DeliveryForecastOptions options = new DeliveryForecastOptions ();
DeliveryForecast forecast =
forecastService . getDeliveryForecastByIds ( Longs . toArray ( lineItemIds ), options );
for ( LineItemDeliveryForecast lineItemForecast : forecast . getLineItemDeliveryForecasts ()) {
String unitType = lineItemForecast . getUnitType (). toString (). toLowerCase ();
System . out . printf ( "Forecast for line item %d:%n" , lineItemForecast . getLineItemId ());
System . out . printf ( "\t%d %s matched%n" , lineItemForecast . getMatchedUnits (), unitType );
System . out . printf ( "\t%d %s delivered%n" , lineItemForecast . getDeliveredUnits (), unitType );
System . out . printf (
"\t%d %s predicted%n" , lineItemForecast . getPredictedDeliveryUnits (), unitType );
}
View on GitHub
Python
# Initialize appropriate service.
forecast_service = client . GetService ( 'ForecastService' , version = 'v202602' )
# Get forecast for line item.
forecast = forecast_service . getDeliveryForecastByIds (
[ line_item_id1 , line_item_id2 ], { 'ignoredLineItemIds' : []})
for single_forecast in forecast [ 'lineItemDeliveryForecasts' ]:
unit_type = single_forecast [ 'unitType' ]
print ( 'Forecast for line item %d : \n\t %d %s matched \n\t %d %s delivered \n\t '
' %d %s predicted \n ' % (
single_forecast [ 'lineItemId' ], single_forecast [ 'matchedUnits' ],
unit_type , single_forecast [ 'deliveredUnits' ], unit_type ,
single_forecast [ 'predictedDeliveryUnits' ], unit_type ))
if __name__ == '__main__' :
# Initialize client object.
ad_manager_client = ad_manager . AdManagerClient . LoadFromStorage ()
main ( ad_manager_client , LINE_ITEM_ID_1 , LINE_ITEM_ID_2 )
View on GitHub
PHP
$forecastService = $serviceFactory->createForecastService($session);
// Get forecast for the line items with no options set.
$forecast = $forecastService->getDeliveryForecastByIds(
[$lineItemId1, $lineItemId2],
new DeliveryForecastOptions()
);
// Print out forecast results.
$lineItemDeliveryForecasts = $forecast->getLineItemDeliveryForecasts();
foreach ($lineItemDeliveryForecasts as $lineItemForecast) {
$unitType = strtolower($lineItemForecast->getUnitType());
printf(
"Forecast for line item ID %d:%s",
$lineItemForecast->getLineItemId(),
PHP_EOL
);
printf(
" %d %s matched%s",
$lineItemForecast->getMatchedUnits(),
$unitType,
PHP_EOL
);
printf(
" %d %s delivered%s",
$lineItemForecast->getDeliveredUnits(),
$unitType,
PHP_EOL
);
printf(
" %d %s predicted%s",
$lineItemForecast->getPredictedDeliveryUnits(),
$unitType,
PHP_EOL
);
}
View on GitHub
C#
using ( ForecastService forecastService = user . GetService<ForecastService> ())
{
// Get a delivery forecast for the line items.
DeliveryForecastOptions options = new DeliveryForecastOptions ();
options . ignoredLineItemIds = new long []
{
};
DeliveryForecast forecast = forecastService . getDeliveryForecastByIds ( new long []
{
lineItemId1 ,
lineItemId2
}, options );
// Display results.
foreach ( LineItemDeliveryForecast lineItemForecast in forecast
. lineItemDeliveryForecasts )
{
String unitType = lineItemForecast . unitType . GetType (). Name . ToLower ();
Console . WriteLine ( "Forecast for line item {0}:" ,
lineItemForecast . lineItemId );
Console . WriteLine ( "\t{0} {1} matched" , lineItemForecast . matchedUnits ,
unitType );
Console . WriteLine ( "\t{0} {1} delivered" , lineItemForecast . deliveredUnits ,
unitType );
Console . WriteLine ( "\t{0} {1} predicted" ,
lineItemForecast . predictedDeliveryUnits , unitType );
}
View on GitHub
Ruby
# Get the ForecastService.
forecast_service = ad_manager . service ( :ForecastService , API_VERSION )
# Get forecast for the line item.
forecast = forecast_service . get_delivery_forecast_by_ids (
[ line_item_id1 , line_item_id2 ] , nil )
unless forecast . nil? || forecast [ :line_item_delivery_forecasts ]. nil?
forecast [ :line_item_delivery_forecasts ]. each do | single_forecast |
# Display results.
unit_type = single_forecast [ :unit_type ]
puts ( 'Forecast for line item %d: \n\t %d %s matched \n\t %d %s ' +
'delivered \n\t %d %s predicted \n ' ) % [ single_forecast [ :line_item_id ] ,
single_forecast [ :matched_units ] , unit_type ,
single_forecast [ :delivered_units ] , unit_type ,
single_forecast [ :predicted_delivery_units ] , unit_type ]
end
end
View on GitHub
This example will have an output similar to the following:
Forecast for line item 14678:
100 clicks matched
0 clicks delivered
98 clicks predicted
If you want to exclude any line items from the delivery simulation, you can do
so by setting their IDs in the
DeliveryForecastOptions .
Prospective LineItems
Similar to the availability forecasts, you can run delivery forecasts on line
items that are not persisted. To do so, use ProspectiveLineItem objects in the
ForecastService.getDeliveryForecast
method.
Future sell-through reports
The future sell-through report
predicts availability of impressions for your
Google Ad Manager network so you can make sure you're maximizing revenue and
sell-through rate. Future sell-through reports can be run through the
ReportService .
Note: There are significant differences
between sell-through reports and availability forecasts.
FAQ
I have a lot of line items for which I want to forecast availability. Can I run multiple forecasts in one request?
No. You must make a separate availability forecast request for each line
item or prospective line item.
I ran a number of forecasts and now I'm getting EXCEEDED_QUOTA errors. What gives?
Forecasts are computationally expensive, and the quota system ensures the
service is reliable. You can safely wait and retry any forecasts that resulted
in a quota error.
What causes NO_FORECAST_YET or NOT_ENOUGH_INVENTORY errors?
Forecasts are run based on your network's traffic
history .
Sometimes, there's not enough historical data to run a forecast. For more
details on these errors, see the
ForecastError
documentation.
What's an AlternativeUnitTypeForecast?
Sometimes it's useful to know what other inventory is available. For
example, when forecasting for a
CPC line
item, the alternative unit type
forecasts
will include information about the number of impressions.
I have more questions about Ad Manager forecasting in general.
See if they're covered in the product
FAQ , or ask in our
Ad Manager Help Community .
For specific issues, contact Ad Manager API Support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["Traffic forecasts analyze past traffic and future impressions for inventory segmentation using date ranges and targeting. Availability forecasts determine the maximum bookable ad units, including breakdowns and competing line items, for existing or prospective line items. Delivery forecasts simulate competing line item delivery, considering displacement. Core actions include retrieving forecasts via `ForecastService` and using `DeliveryForecastOptions` for exclusions. Data returned includes matched, delivered, and predicted units, with code examples in Java, Python, PHP, C#, and Ruby, demonstrating these actions.\n"]]
