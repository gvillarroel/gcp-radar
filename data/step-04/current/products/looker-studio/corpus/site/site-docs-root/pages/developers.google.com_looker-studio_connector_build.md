---
title: "Build a Community Connector \_|\_ Community Connectors \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/build
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/looker-studio
source_metadata:
  url: https://developers.google.com/looker-studio/connector/build
  title: "Build a Community Connector \_|\_ Community Connectors \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Build a Community Connector
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Building a Community Connector involves creating an Apps Script project, writing the connector code (including authentication, configuration, schema, and data fetching logic), and completing the project manifest.
The connector code utilizes specific functions like getAuthType() , getConfig() , getSchema() , and getData() to interact with Looker Studio and fetch data from the desired source.
The project manifest ( appsscript.json ) contains essential information about the connector, including its name, description, and data sources.
The getData() function handles data fetching, taking into account date ranges and potentially caching data for efficiency.
The steps to building a Community Connector are:
Create a new Apps Script project.
Write the connector code.
Complete the project manifest.
Create a new Apps Script project
Visit Google Apps Script to create a new project. Apps Script will create a
default script for you. Feel free to remove the myFunction function and rename
the project. ( Learn more about Apps Script )
Note: If you are using any third party service for your connector, you need to
be familiar with any requirements they have to use the API, including generating
API keys, etc.
Write the connector code
Every connector is required to have a specific set of functions defined. The
hosting application (e.g. Looker Studio) will execute these functions. Your
connector is expected to handle incoming requests and respond as described in
the Community Connector API reference . If you face issues while developing
your code, read the debugging guide for help.
Define authentication type in getAuthType()
This function is called to identify the authentication method used for the
3rd-party service. See the getAuthType() reference for details. Currently
supported authentication methods are listed in AuthType reference .
For example, the following connector does not require authentication:
npm-downloads/src/auth.js
View on GitHub
var cc = DataStudioApp . createCommunityConnector ();
// https://developers.google.com/datastudio/connector/reference#getauthtype
function getAuthType () {
var AuthTypes = cc . AuthType ;
return cc
. newAuthTypeResponse ()
. setAuthType ( AuthTypes . NONE )
. build ();
}
If your data source requires OAuth 2.0 authentication, view the
OAuth 2.0 authentication guide and add the additional required functions to
your connector.
Define configuration via getConfig()
The getConfig() function is called to get the configuration for the
connector, including the user provided values that your connector requires. See
getConfig() reference for details.
Based on the response provided by getConfig() , Looker Studio will render the
connector configuration screen. The configuration elements supported are listed
in ConfigType reference .
If your data source requires date as a parameter, call
config.setDateRangeRequired(true) . If you need to ask conditional or dynamic
configuration questions, see stepped config .
The following is an example of a connector that requires the user to enter an
npm package name code. An info and an input field are defined in the
getConfig() function:
npm-downloads/src/main.js
View on GitHub
// https://developers.google.com/datastudio/connector/reference#getconfig
function getConfig () {
var config = cc . getConfig ();
config
. newInfo ()
. setId ( 'instructions' )
. setText (
'Enter npm package names to fetch their download count. An invalid or blank entry will revert to the default value.'
);
config
. newTextInput ()
. setId ( 'package' )
. setName (
'Enter a single package name or multiple names separated by commas (no spaces!)'
)
. setHelpText ( 'e.g. "googleapis" or "package,somepackage,anotherpackage"' )
. setPlaceholder ( DEFAULT_PACKAGE )
. setAllowOverride ( true );
config . setDateRangeRequired ( true );
return config . build ();
}
Note: The DataStudio Apps Script service makes it easier to write a community
connector. It abstracts out common patterns and offers autocomplete so methods
and enum values don't have to be memorized. To see the reference documentation,
see the [Looker Studio service]
Define the fields with getSchema()
This function is called to get the schema for the given request. Any
configuration parameters defined by the getConfig() function will be provided
in the request argument. See getSchema() reference for details.
Depending on your connector's data source and the configuration provided by the
user, the schema may be fixed or you may have to dynamically provide this at
request time.
For example, if a connector is fetching report data based on a Report ID, the
data returned for that report and hence the schema may not be known beforehand.
In this case getSchema() may require a data fetch and the schema will have to
be calculated.
Note: For SELECT_MULTIPLE the configParams value is a comma delimited
string. For CHECKBOX the configParam s value is truthy .
npm-downloads/src/main.js
View on GitHub
function getFields () {
var fields = cc . getFields ();
var types = cc . FieldType ;
var aggregations = cc . AggregationType ;
fields
. newDimension ()
. setId ( 'packageName' )
. setName ( 'Package' )
. setType ( types . TEXT );
fields
. newDimension ()
. setId ( 'day' )
. setName ( 'Date' )
. setType ( types . YEAR_MONTH_DAY );
fields
. newMetric ()
. setId ( 'downloads' )
. setName ( 'Downloads' )
. setType ( types . NUMBER )
. setAggregation ( aggregations . SUM );
return fields ;
}
// https://developers.google.com/datastudio/connector/reference#getschema
function getSchema ( request ) {
return { schema : getFields (). build ()};
}
Fetch and return data with getData()
This function is called to get data for the given request. Any configuration
parameters defined by the getConfig() function will be provided in the
request argument. See getData() reference for details.
The following parameters from the getData() request require additional
attention:
lastRefresh
lastRefresh represents a timestamp that marks the time of the most recent
request for a refresh of data. You should be able to parse the value with
new Date(timestampString) . If you are using Apps Script Cache Service or
any other caching method, the lastRefresh timestamp can help you to
determine whether to make a new fetch request to the data source or serve
data from the cache.
dateRange
If dateRangeRequired is set to true in getConfig() , each getData()
call will contain the selected date range in the request. See
Working with Date Ranges for more details.
The following example fetches data based on the incoming request and returns the
package statistics:
npm-downloads/src/main.js
View on GitHub
// https://developers.google.com/datastudio/connector/reference#getdata
function getData ( request ) {
request . configParams = validateConfig ( request . configParams );
var requestedFields = getFields (). forIds (
request . fields . map ( function ( field ) {
return field . name ;
})
);
try {
var apiResponse = fetchDataFromApi ( request );
var normalizedResponse = normalizeResponse ( request , apiResponse );
var data = getFormattedData ( normalizedResponse , requestedFields );
} catch ( e ) {
cc . newUserError ()
. setDebugText ( 'Error fetching data from API. Exception details: ' + e )
. setText (
'The connector has encountered an unrecoverable error. Please try again later, or file an issue if this error persists.'
)
. throwException ();
}
return {
schema : requestedFields . build (),
rows : data
};
}
/**
* Gets response for UrlFetchApp.
*
* @param {Object} request Data request parameters.
* @returns {string} Response text for UrlFetchApp.
*/
function fetchDataFromApi ( request ) {
var url = [
'https://api.npmjs.org/downloads/range/' ,
request . dateRange . startDate ,
':' ,
request . dateRange . endDate ,
'/' ,
request . configParams . package
]. join ( '' );
var response = UrlFetchApp . fetch ( url );
return response ;
}
/**
* Parses response string into an object. Also standardizes the object structure
* for single vs multiple packages.
*
* @param {Object} request Data request parameters.
* @param {string} responseString Response from the API.
* @return {Object} Contains package names as keys and associated download count
* information(object) as values.
*/
function normalizeResponse ( request , responseString ) {
var response = JSON . parse ( responseString );
var package_list = request . configParams . package . split ( ',' );
var mapped_response = {};
if ( package_list . length == 1 ) {
mapped_response [ package_list [ 0 ]] = response ;
} else {
mapped_response = response ;
}
return mapped_response ;
}
/**
* Formats the parsed response from external data source into correct tabular
* format and returns only the requestedFields
*
* @param {Object} parsedResponse The response string from external data source
* parsed into an object in a standard format.
* @param {Array} requestedFields The fields requested in the getData request.
* @returns {Array} Array containing rows of data in key-value pairs for each
* field.
*/
function getFormattedData ( response , requestedFields ) {
var data = [];
Object . keys ( response ). map ( function ( packageName ) {
var package = response [ packageName ];
var downloadData = package . downloads ;
var formattedData = downloadData . map ( function ( dailyDownload ) {
return formatData ( requestedFields , packageName , dailyDownload );
});
data = data . concat ( formattedData );
});
return data ;
}
Complete the project manifest
The manifest file contains information about your Community Connector that is
required to deploy and use your connector in Looker Studio.
Caution: Any information you put in the manifest file should be considered
public as it will be accessible to to anyone using your connector.
To edit the manifest file in the Apps Script development environment, click on
the View menu and click Show manifest file . This will create a new
appsscript.json manifest file.
Update the manifest to include the following data:
npm-downloads/src/appsscript.json
View on GitHub
{
"dependencies" : {
"libraries" : []
},
"dataStudio" : {
"name" : "npm Downloads" ,
"logoUrl" : "https://raw.githubusercontent.com/npm/logos/master/npm%20square/n-64.png" ,
"company" : "Google Data Studio Developer Relations" ,
"companyUrl" : "https://developers.google.com/datastudio/" ,
"addonUrl" : "https://github.com/googledatastudio/community-connectors/tree/master/npm-downloads#readme" ,
"supportUrl" : "https://github.com/googledatastudio/community-connectors/issues" ,
"description" : "Get npm package download counts." ,
"sources" : [ "npm" ],
"templates" : {
"default" : "1twu0sHjqR5dELAPyGJcw4GS3-D0_NTrQ"
}
},
"oauthScopes" : [
"https://www.googleapis.com/auth/script.external_request"
]
}
For details on Looker Studio manifest, see the reference manifest reference .
Next steps
The next step will be to deploy your Community Connector .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
