---
title: "Query the dataset using Places Count functions \_|\_ Places Insights \_|\_\
  \ Google for Developers"
url: https://developers.google.com/maps/documentation/placesinsights/place-count-functions/function-queries
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/placesinsights/about-data
source_metadata:
  url: https://developers.google.com/maps/documentation/placesinsights/place-count-functions/function-queries
  title: "Query the dataset using Places Count functions \_|\_ Places Insights \_\
    |\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Places Insights
Send feedback
Query the dataset using Places Count functions
Stay organized with collections
Save and categorize content based on your preferences.
Places Count functions are predefined SQL queries that run in BigQuery and are
complementary to querying the dataset
directly . The main difference
between querying the data directly and using a function is that functions don't
enforce a minimum count threshold but instead enforce a
minimum search area :
Place datasets queries can only return counts 5
and above, but enforce no limitations on the size of the search area.
Places Count functions can return any counts, including 0, but enforce a
minimum search area of 40.0 meters by 40.0 meters (1600 m 2 ). Functions can also return Place
IDs , which can be used to
look up information about individual Places.
You might want to use Places Count functions if it's important to know when a
query returns no results or if you need to know low counts of places below
5. It is also useful if you need to get individual place
information to spot check your results.
Places Count functions only provide counts, so if you need to perform more
complex queries such as data joins, or get additional insights such as the
average rating of a group of places, then query the dataset
directly .
Supported Places Count functions and countries
This product or feature is in Preview (pre-GA).
Pre-GA products and features might have limited support, and changes to pre-GA products and
features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by
the Google
Maps Platform Service Specific Terms . For more information, see the
launch stage
descriptions .
Places Insights supports the following functions:
science PLACES_COUNT_V2 : Returns a table
containing place counts and sample Place IDs. This function accepts a table
parameter
for multi-geography input, enabling efficient batch processing. It is highly
optimized for geospatial joins compared to PLACES_COUNT and
PLACES_COUNT_PER_GEO functions.
science PLACES_COUNT_PER_TYPE_V2 :
Returns a table of place counts and sample Place IDs, categorized by place
type. Similar to PLACES_COUNT_V2 , this function accepts a table
parameter
to process multiple input geographies simultaneously. This architecture
supports efficient batch processing and provides optimized geospatial
joining compared to PLACES_COUNT_PER_TYPE .
PLACES_COUNT_PER_H3 : Returns a BigQuery table of place counts per H3 cell.
PLACES_COUNT : Returns a single row containing a count of
places.
Note: For significantly better performance and efficient batch processing, use PLACES_COUNT_V2 .
PLACES_COUNT_PER_TYPE : Returns a BigQuery table
of place counts per places type.
Note: For significantly better performance and efficient batch processing, use PLACES_COUNT_PER_TYPE_V2 .
PLACES_COUNT_PER_GEO : Returns a BigQuery table of
place counts per geographies.
Note: For significantly better performance and efficient batch processing, use PLACES_COUNT_V2 .
Along with the place counts, all functions except PLACES_COUNT also return up
to 250 place IDs per element of the response.
Place IDs can be used with:
Places API (New)
Geocoding API
Places UI Kit
Note: You can access the Places Count functions for the same cities and
countries you have access to.
Write queries with functions
Use the following format to call the functions: [project name
(optional)].[table name].[function name] .
If you changed the linked dataset name when setting up Places Insights, then use
your custom name instead of the default table names listed in Reference place
count functions in BigQuery . You can also optionally
include your project name. If one is not included, the query will default to the
active project.
For example:
PROJECT_NAME . places_insights___us . PLACES_COUNT
Use a
JSON_OBJECT
to pass arguments to the function.
Note: When you use a Places Count
function ,
the function is specified in the FROM clause and WITH_AGGREGATION_THRESHOLD
is omitted.
Filter your results
The Places Count functions support many filters to refine your search. These
parameters (for example, price_level or types ) are case-sensitive and must
match the parameter names exactly. See the filter parameters reference for a
full list of
options .
In the next example, you apply filters to limit the search by minimum user
rating, price level, business status, and whether the restaurant allows dogs,
using the PLACES_COUNT_V2 function.
First, use your input geography table or prepare one with the chosen
geographies:
-- Create a table for the input geographies
CREATE TABLE ` PROJECT_NAME . YOUR_DATASET .my_search_areas` AS (
SELECT
'1' AS geo_id , -- Unique identifier
ST_GEOGPOINT ( - 73.9857 , 40.7484 ) AS geo -- Empire State Building
UNION ALL
SELECT
'2' AS geo_id , -- Unique identifier
ST_GEOGPOINT ( - 73.9851 , 40.7580 ) AS geo -- Times Square
);
Next, call PLACES_COUNT_V2 with the table and the JSON object containing the
filters. The search radius is included in the JSON filters and will be applied
around each point in the my_search_areas table.
SELECT * FROM ` PROJECT_NAME .places_insights___us.PLACES_COUNT_V2` (
TABLE ` PROJECT_NAME . YOUR_DATASET .my_search_areas` ,
JSON_OBJECT (
'geography_radius' , 1000 , -- Radius in meters around each point in 'geo'
'business_status' , [ 'OPERATIONAL' ] ,
'types' , [ "restaurant" ] ,
'min_rating' , 1.3 ,
'price_level' , [ 'PRICE_LEVEL_INEXPENSIVE' , 'PRICE_LEVEL_MODERATE' ] ,
'allows_dogs' , TRUE
)
);
Note: Include the business_status filter to make sure that you
get the count of OPERATIONAL businesses. Otherwise, the count includes closed
businesses.
Places Count function example
The following example uses the PLACES_COUNT_V2 function with the custom input
geography table my_search_area to return the number of operational
restaurants within 1000 meters of the Empire State Building and Times Square in
New York City:
SELECT * FROM ` PROJECT_NAME .places_insights___us.PLACES_COUNT_V2` (
TABLE ` PROJECT_NAME . YOUR_DATASET .my_search_areas` ,
JSON_OBJECT (
'geography_radius' , 1000 , -- Radius in meters
'business_status' , [ 'OPERATIONAL' ] ,
'types' , [ "restaurant" ]
)
);
The response is a BigQuery table that contains the geo_id , the geography, the
count, and a sample of place ids.
Note: The required and optional parameters differ for each Places Count function
as described in filters .
Visualize results
Analysis and business intelligence
tools are
crucial to helping you discover insights from your BigQuery data. BigQuery
supports several Google and third-party data visualization
tools that you can
use to analyze the results of your functions on Places Insights data.
For an example of visualizing the results of a function, see Visualize
results .
For more information and example on visualizing Places Insights results, see
Visualize query results .
Limitations and requirements
Places Count functions have the following limitations and requirements:
Only COUNT insights are supported.
A minimum search area of 40.0 meters by 40.0 meters (1600 m 2 ) is required.
Parameter Input Size Limit: The JSON object passed as a parameter to
the functions is limited to 1 MB. The impact of this limit depends on the
function version:
For V2 functions ( PLACES_COUNT_V2 , PLACES_COUNT_PER_TYPE_V2 ), this
limit applies only to the filters JSON object. Since geographies are
provided separately using a table parameter, these functions can scale to a
much larger number of input geographies without reaching the JSON size
limit.
For PLACES_COUNT_PER_H3 , PLACES_COUNT , PLACES_COUNT_PER_TYPE , and
PLACES_COUNT_PER_GEO , this limit applies to the entire JSON object,
including all geography definitions. This may limit the number of
geographies that can be processed in a single call.
No support for filtering by place ID, brands, EV charge options, or address
component.
You can only access the Places Count functions for the cities and countries
you have subscribed to. See Set up Places Insights
for dataset access.
Filter parameters (for example, geography or types ) are case-sensitive
and must match the parameter names exactly, or query will fail.
Reference Places Count functions in BigQuery
All of the cities in the sample dataset and the countries
full dataset support Places Count functions.
You have access to the Places Count functions corresponding to the cities and
countries datasets you have subscribed to. See Set up Places
Insights for dataset access.
Note: If you changed the linked dataset name when setting up Places Insights,
then use your custom name instead of the default table names listed here. You
can also optionally include your project name. If one is not included, the query
will default to the active project.
These tables list the available cities, countries, and their corresponding table
names.
Sample data
City, Country
Table names
Buenos Aires, Argentina
places_insights___ar___sample. FUNCTION_NAME
Sydney, Australia
places_insights___au___sample. FUNCTION_NAME
Bad Gastein, Austria
places_insights___at___sample. FUNCTION_NAME
Riffa, Bahrain
places_insights___bh___sample. FUNCTION_NAME
Brussels, Belgium
places_insights___be___sample. FUNCTION_NAME
Sao Paulo, Brazil
places_insights___br___sample. FUNCTION_NAME
Plovdiv, Bulgaria
places_insights___bg___sample. FUNCTION_NAME
Toronto, Canada
places_insights___ca___sample. FUNCTION_NAME
Santiago, Chile
places_insights___cl___sample. FUNCTION_NAME
Medellín, Colombia
places_insights___co___sample. FUNCTION_NAME
Brno, Czechia
places_insights___cz___sample. FUNCTION_NAME
Copenhagen, Denmark
places_insights___dk___sample. FUNCTION_NAME
Cairo, Egypt
places_insights___eg___sample. FUNCTION_NAME
Helsinki, Finland
places_insights___fi___sample. FUNCTION_NAME
Paris, France
places_insights___fr___sample. FUNCTION_NAME
Berlin, Germany
places_insights___de___sample. FUNCTION_NAME
Athens, Greece
places_insights___gr___sample. FUNCTION_NAME
Hong Kong, Hong Kong
places_insights___hk___sample. FUNCTION_NAME
Debrecen, Hungary
places_insights___hu___sample. FUNCTION_NAME
Mumbai, India
places_insights___in___sample. FUNCTION_NAME
Jakarta, Indonesia
places_insights___id___sample. FUNCTION_NAME
Cork, Ireland
places_insights___ie___sample. FUNCTION_NAME
Tel Aviv-Yafo, Israel
places_insights___il___sample. FUNCTION_NAME
Rome, Italy
places_insights___it___sample. FUNCTION_NAME
Tokyo, Japan
places_insights___jp___sample. FUNCTION_NAME
Busan, South Korea
places_insights___kr___sample. FUNCTION_NAME
Kuala Lumpur, Malaysia
places_insights___my___sample. FUNCTION_NAME
Mexico City, Mexico
places_insights___mx___sample. FUNCTION_NAME
Amsterdam, Netherlands
places_insights___nl___sample. FUNCTION_NAME
Wellington, New Zealand
places_insights___nz___sample. FUNCTION_NAME
Oslo, Norway
places_insights___no___sample. FUNCTION_NAME
Arequipa, Peru
places_insights___pe___sample. FUNCTION_NAME
Manila, Philippines
places_insights___ph___sample. FUNCTION_NAME
Warsaw, Poland
places_insights___pl___sample. FUNCTION_NAME
Lisbon, Portugal
places_insights___pt___sample. FUNCTION_NAME
Lusail, Qatar
places_insights___qa___sample. FUNCTION_NAME
Bucharest, Romania
places_insights___ro___sample. FUNCTION_NAME
Jeddah, Saudi Arabia
places_insights___sa___sample. FUNCTION_NAME
Singapore, Singapore
places_insights___sg___sample. FUNCTION_NAME
Johannesburg, South Africa
places_insights___za___sample. FUNCTION_NAME
Madrid, Spain
places_insights___es___sample. FUNCTION_NAME
Stockholm, Sweden
places_insights___se___sample. FUNCTION_NAME
Zurich, Switzerland
places_insights___ch___sample. FUNCTION_NAME
Taipei, Taiwan
places_insights___tw___sample. FUNCTION_NAME
Chiang Mai, Thailand
places_insights___th___sample. FUNCTION_NAME
Ankara, Turkey
places_insights___tr___sample. FUNCTION_NAME
Sharjah, United Arab Emirates
places_insights___ae___sample. FUNCTION_NAME
London, United Kingdom
places_insights___gb___sample. FUNCTION_NAME
New York City, United States
places_insights___us___sample. FUNCTION_NAME
Hanoi, Vietnam
places_insights___vn___sample. FUNCTION_NAME
Full data
Country
Table names
Argentina
places_insights___ar. FUNCTION_NAME
Australia
places_insights___au. FUNCTION_NAME
Austria
places_insights___at. FUNCTION_NAME
Bahrain
places_insights___bh. FUNCTION_NAME
Belgium
places_insights___be. FUNCTION_NAME
Brazil
places_insights___br. FUNCTION_NAME
Bulgaria
places_insights___bg. FUNCTION_NAME
Canada
places_insights___ca. FUNCTION_NAME
Chile
places_insights___cl. FUNCTION_NAME
Colombia
places_insights___co. FUNCTION_NAME
Czechia
places_insights___cz. FUNCTION_NAME
Denmark
places_insights___dk. FUNCTION_NAME
Egypt
places_insights___eg. FUNCTION_NAME
Finland
places_insights___fi. FUNCTION_NAME
France
places_insights___fr. FUNCTION_NAME
Germany
places_insights___de. FUNCTION_NAME
Greece
places_insights___gr. FUNCTION_NAME
Hong Kong
places_insights___hk. FUNCTION_NAME
Hungary
places_insights___hu. FUNCTION_NAME
India
places_insights___in. FUNCTION_NAME
Indonesia
places_insights___id. FUNCTION_NAME
Ireland
places_insights___ie. FUNCTION_NAME
Israel
places_insights___il. FUNCTION_NAME
Italy
places_insights___it. FUNCTION_NAME
Japan
places_insights___jp. FUNCTION_NAME
Malaysia
places_insights___my. FUNCTION_NAME
Mexico
places_insights___mx. FUNCTION_NAME
Netherlands
places_insights___nl. FUNCTION_NAME
New Zealand
places_insights___nz. FUNCTION_NAME
Norway
places_insights___no. FUNCTION_NAME
Peru
places_insights___pe. FUNCTION_NAME
Philippines
places_insights___ph. FUNCTION_NAME
Poland
places_insights___pl. FUNCTION_NAME
Portugal
places_insights___pt. FUNCTION_NAME
Qatar
places_insights___qa. FUNCTION_NAME
Romania
places_insights___ro. FUNCTION_NAME
Saudi Arabia
places_insights___sa. FUNCTION_NAME
Singapore
places_insights___sg. FUNCTION_NAME
South Africa
places_insights___za. FUNCTION_NAME
South Korea
places_insights___kr. FUNCTION_NAME
Spain
places_insights___es. FUNCTION_NAME
Sweden
places_insights___se. FUNCTION_NAME
Switzerland
places_insights___ch. FUNCTION_NAME
Taiwan
places_insights___tw. FUNCTION_NAME
Thailand
places_insights___th. FUNCTION_NAME
Turkey
places_insights___tr. FUNCTION_NAME
United Arab Emirates
places_insights___ae. FUNCTION_NAME
United Kingdom
places_insights___gb. FUNCTION_NAME
United States
places_insights___us. FUNCTION_NAME
Vietnam
places_insights___vn. FUNCTION_NAME
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
