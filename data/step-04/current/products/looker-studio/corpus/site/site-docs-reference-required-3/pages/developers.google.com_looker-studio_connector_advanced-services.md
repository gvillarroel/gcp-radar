---
title: "Looker Studio Advanced Services \_|\_ Community Connectors \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/looker-studio/connector/advanced-services
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector/reference
source_metadata:
  url: https://developers.google.com/looker-studio/connector/advanced-services
  title: "Looker Studio Advanced Services \_|\_ Community Connectors \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Looker Studio Advanced Services
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Looker Studio Advanced Services allows BigQuery connectors to offload data fetching and schema retrieval to Looker Studio by using query configurations.
Connectors using Advanced Services primarily differ from standard connectors in manifest properties and the response format of getSchema() / getData() .
To enable Advanced Services, set dataStudio.advancedServices.schema and/or dataStudio.advancedServices.data to true in the connector manifest.
The getSchema() and getData() functions, when using Advanced Services, return a query configuration object specifying details like the query, billing project, and parameters instead of directly providing the data or schema.
This configuration object enables Looker Studio to directly query BigQuery on behalf of the user, requiring the inclusion of the BigQuery OAuth scope ( https://www.googleapis.com/auth/bigquery.readonly ) in the manifest.
If your connector fetches data from BigQuery, then you can use Looker Studio
Advanced Services to optimize your connector. Instead of calling the BigQuery
API directly, you provide a query configuration and Looker Studio will fetch the
data and the schema for you.
How it works
Community Connectors that use Looker Studio Advanced Services work similarly to
a normal connector.
The notable difference is the response expected from the execution of the
getSchema() and/or getData() functions. Instead of fetching and
returning a schema and data, these functions can return query configurations.
When a query configuration is returned, Looker Studio will directly fetch the
schema and/or data based on the query configuration provided.
Developing your connector
Community Connectors that use Looker Studio Advanced Services are the same as a
normal connector with two exceptions.
An additional manifest key
A different response from getSchema() and/or getData()
Manifest reference
In the manifest , set the following properties to true .
For getSchema() , use property dataStudio.advancedServices.schema
For getData() , use property dataStudio.advancedServices.data
A value of true indicates that for the respective function, your connector
will return a query configuration instead of the standard response.
To define your own schema using the standard getSchema() response, set
dataStudio.advancedServices.schema to false in the manifest or omit this
property. This is needed when all fields in your schema cannot be represented by
a single BigQuery query e.g. when you are creating a multi-schema connector.
Since the BigQuery query will be executed on behalf of the authorized user, you
also need to include the BigQuery OAuth scope
( "https://www.googleapis.com/auth/bigquery.readonly" ) in the manifest to
request authorization.
The following is a connector manifest using the authorized user's credentials to
connect to BigQuery:
{
"dataStudio" : {
"name" : "BigQuery Public Dataset Demo" ,
"logoUrl" : "https://www.gstatic.com/images/branding/product/1x/data_connector_48dp.png" ,
"company" : "Looker DevRel" ,
"companyUrl" : "https://developers.google.com/looker-studio/" ,
"addOnUrl" : "https://developers.google.com/looker-studio/" ,
"supportUrl" : "https://developers.google.com/looker-studio/" ,
"description" : "Use BigQuery public dataset with Looker Studio's Advanced Services." ,
"advancedServices" : {
"schema" : true ,
"data" : true
}
},
"oauthScopes" : [ "https://www.googleapis.com/auth/bigquery.readonly" ]
}
If you are using a service account to access BigQuery, then the
bigquery.readonly OAuth scope is not required in the manifest. However, the
scope should be added to the scopes list for the service account.
Caution: useQueryConfig has been deprecated in the manifest. If your existing
connector manifest uses useQueryConfig , consider using advancedServices in
the manifest instead.
getData and getSchema reference
Connectors using Looker Studio Advanced Services return a query config object
for getSchema() and/or getData() . Depending on the data source, this
config may need additional properties.
The following is an example of using the DataStudioApp service to create this
configuration object:
var bqTypes = DataStudioApp . createCommunityConnector (). BigQueryParameterType ;
var configuration = DataStudioApp . createCommunityConnector (). newBigQueryConfig ()
// BigQuery billing project's Id.
. setBillingProjectId ( 'billingProjectId' )
// The query that will be executed.
. setQuery ( 'myQueryString' )
// Set to `true` to use StandardSQL.
. setUseStandardSql ( true )
// The accessToken used for service execution.
. setAccessToken ( 'myAccessToken' )
// Adding a `STRING` query parameter. Other supported types are `BOOL`,
// `FLOAT64`, and `INT64`.
. addQueryParameter ( 'myUrlParameterName' , bqTypes . STRING , 'myUrlParameterValue' )
. build ();
Note: Query parameter names should not include the leading @ required for the
query. Note: parameterValue.value must be a JS string, even if the parameterType is
a number or boolean.
Example getSchema() and getData() function
var sqlString = "" +
"SELECT " +
" _TABLE_SUFFIX AS yyyymm, " +
" ROUND(SUM(IF(fcp.start < @fast_fcp, fcp.density, 0)), 4) AS fast_fcp, " +
" ROUND(SUM(IF(fcp.start >= 1000 AND fcp.start < 3000, fcp.density, 0)), 4) AS avg_fcp, " +
" ROUND(SUM(IF(fcp.start >= 3000, fcp.density, 0)), 4) AS slow_fcp " +
"FROM " +
" `chrome-ux-report.all.*`, " +
" UNNEST(first_contentful_paint.histogram.bin) AS fcp " +
"WHERE " +
" origin = @url " +
"GROUP BY " +
" yyyymm " +
"ORDER BY " +
" yyyymm " ;
function getQueryConfig ( request ) {
var url = ( request . configParams && request . configParams . url );
var projectId = ( request . configParams && request . configParams . projectId );
var authToken = ScriptApp . getOAuthToken ();
return DataStudioApp . createCommunityConnector (). newBigQueryConfig ()
. setAccessToken ( authToken )
. setUseStandardSql ( true )
. setBillingProjectId ( projectId )
. setQuery ( sqlString )
. addQueryParameter ( 'url' , bqTypes . STRING , url )
. addQueryParameter ( 'fast_fcp' , bqTypes . INT64 , '' + 1000 )
. build ();
}
function getSchema ( request ) {
return getQueryConfig ( request );
}
function getData ( request ) {
return getQueryConfig ( request )
}
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
