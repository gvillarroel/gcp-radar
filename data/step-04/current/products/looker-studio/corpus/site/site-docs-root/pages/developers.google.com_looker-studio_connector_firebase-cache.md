---
title: "Cache with Firebase \_|\_ Community Connectors \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/firebase-cache
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/looker-studio
source_metadata:
  url: https://developers.google.com/looker-studio/connector/firebase-cache
  title: "Cache with Firebase \_|\_ Community Connectors \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Cache with Firebase
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Enhance dashboard performance and bypass external API rate limits by implementing a custom cache for your Looker Studio connector.
This solution utilizes a Firebase Realtime database to store cached data, reducing the frequency of external API calls.
Implementing a custom cache is particularly beneficial for connectors fetching data that updates infrequently, such as daily weather data.
This guide provides step-by-step instructions and code examples to integrate Firebase caching into your connector.
The Chrome UX Connector is a real-world example that demonstrates the effectiveness of Firebase caching for large datasets.
Objective: Increase dashboard performance and avoid external API rate-limits by
implementing a custom cache for your connector.
Looker Studio has its own cache system for reports. When creating your
connector, you can implement a custom cache to facilitate faster reports and
avoid APR rate-limits.
For example, you are creating a connector which provides historical weather data
for the last 7 days for a specific zip code. Your connector is becoming quite
popular but the external API that you are fetching the data from has strict rate
limits. The API only updates its data daily, so for a specific zip code, there
is no need to fetch the same data multiple times within a day. Using this
solution guide, you can implement a daily cache for each zip code.
Requirements
A Firebase Realtime database . If you don’t have access to one, create a
Google Cloud Platform (GCP) project and follow the
Get started guide to create your own Firebase
Realtime Database instance.
A GCP service account to read and write data from Firebase Realtime
Database.
A Community Connector that fetches data from a source.
Limitations
This solution cannot be used with Looker Studio Advanced Services . When
you use Looker Studio Advanced Services , your connector code in Apps
Script does not have access to the data. Thus you cannot cache the data
using Apps Script.
Report editors and viewers cannot reset this specific cache.
Solution
Implement a service account
Create a service account in your Google Cloud project.
Ensure this service account has BigQuery access in the cloud project.
Required Identity and Access Management (IAM) Roles: Firebase Admin
Download the JSON file to get the service accounts keys . Store the file's
content in your connector project’s script properties . After adding the
keys, should look similar to this in Apps Script UI:
Include the OAuth2 for Apps Script library in your Apps Script project.
Implement the required OAuth2 code for the service account:
firestore-cache/src/firebase.js
View on GitHub
var SERVICE_ACCOUNT_CREDS = 'SERVICE_ACCOUNT_CREDS' ;
var SERVICE_ACCOUNT_KEY = 'private_key' ;
var SERVICE_ACCOUNT_EMAIL = 'client_email' ;
var BILLING_PROJECT_ID = 'project_id' ;
var scriptProperties = PropertiesService . getScriptProperties ();
/**
* Copy the entire credentials JSON file from creating a service account in GCP.
* Service account should have `Firebase Admin` IAM role.
*/
function getServiceAccountCreds () {
return JSON . parse ( scriptProperties . getProperty ( SERVICE_ACCOUNT_CREDS ));
}
function getOauthService () {
var serviceAccountCreds = getServiceAccountCreds ();
var serviceAccountKey = serviceAccountCreds [ SERVICE_ACCOUNT_KEY ];
var serviceAccountEmail = serviceAccountCreds [ SERVICE_ACCOUNT_EMAIL ];
return OAuth2 . createService ( 'FirebaseCache' )
. setAuthorizationBaseUrl ( 'https://accounts.google.com/o/oauth2/auth' )
. setTokenUrl ( 'https://accounts.google.com/o/oauth2/token' )
. setPrivateKey ( serviceAccountKey )
. setIssuer ( serviceAccountEmail )
. setPropertyStore ( scriptProperties )
. setCache ( CacheService . getScriptCache ())
. setScope ([
'https://www.googleapis.com/auth/userinfo.email' ,
'https://www.googleapis.com/auth/firebase.database'
]);
}
Implement code to read and write from Firebase
You will use the Firebase Database REST API to read and write to a Firebase
Realtime database. The following code implements the methods needed for
accessing this API.
Implement getData()
The structure for your existing getData() code without caching should look
like this:
firestore-cache/src/without-caching.js
View on GitHub
/*
* This file is only to demonstrate how the `getData()` fucntion would look
* like without the Firebase Realtime Database caching. It is not a part of
* the connector code and should not be included in Apps Script / Clasp.
*/
function getData ( request ) {
var requestedFields = getFields (). forIds (
request . fields . map ( function ( field ) {
return field . name ;
})
);
var fetchedData = fetchAndParseData ( request );
var data = getFormattedData ( fetchedData , requestedFields );
return {
schema : requestedFields . build (),
rows : data
};
}
To use caching in your getData() code, follow these steps:
Determine the 'chunk' or 'unit' of data that should be cached.
Create a unique key to store the minimum unit of data in the cache.
For the example implementation, zipcode from configparams is being used
as the key.
Optional : For per-user cache, create a composite key with the base key and
user identity . Example implementation:
js var baseKey = getBaseKey(request); var userEmail =
Session.getEffectiveUser().getEmail(); var hasheduserEmail =
getHashedValue(userEmail); var compositeKey = baseKey + hasheduserEmail;
If cached data exists, check if cache is fresh.
In the example, the cached data for a specific zip code is saved with the
current date. When data is retrieved from the cache, date for the cache is
checked against the current date.
var cacheForZipcode = {
data : < data being cached > ,
ymd : < current date in YYYYMMDD format >
}
If cached data does not exist or the cached data is not fresh, fetch data
from source and store it in cache.
In the following example, main.js includes getData() code with caching
implemented.
Example code
The following is a complete example of a connector using FireBase for caching:
main.js
firestore-cache/src/main.js
View on GitHub
// [start common_connector_code]
var cc = DataStudioApp . createCommunityConnector ();
function getAuthType () {
return cc
. newAuthTypeResponse ()
. setAuthType ( cc . AuthType . NONE )
. build ();
}
function getConfig ( request ) {
var config = cc . getConfig ();
config
. newTextInput ()
. setId ( 'zipcode' )
. setName ( 'Enter Zip Code' )
. setPlaceholder ( 'eg. 95054' );
return config . build ();
}
function getFields () {
var fields = cc . getFields ();
var types = cc . FieldType ;
var aggregations = cc . AggregationType ;
fields
. newDimension ()
. setId ( 'zipcode' )
. setName ( 'Zip code' )
. setType ( types . TEXT );
fields
. newDimension ()
. setId ( 'date' )
. setName ( 'Date' )
. setType ( types . YEAR_MONTH_DAY );
fields
. newMetric ()
. setId ( 'temperature' )
. setName ( 'Temperature (F)' )
. setType ( types . NUMBER )
. setIsReaggregatable ( false );
return fields ;
}
function getSchema ( request ) {
return {
schema : getFields (). build ()
};
}
// [end common_connector_code]
// [start caching_implementation]
function getData ( request ) {
var requestedFields = getFields (). forIds (
request . fields . map ( function ( field ) {
return field . name ;
})
);
var cacheUpdateNeeded = true ;
var url = buildFirebaseUrl ( request . configParams . zipcode );
var cache = firebaseCache ( 'get' , url );
if ( cache ) {
var currentYmd = getCurrentYmd ();
cacheUpdateNeeded = currentYmd > cache . ymd ;
}
if ( cacheUpdateNeeded ) {
var fetchedData = fetchAndParseData ( request );
cache = {};
cache . data = fetchedData ;
cache . ymd = currentYmd ;
firebaseCache ( 'delete' , url );
firebaseCache ( 'post' , url , cache );
}
var data = getFormattedData ( cache . data , requestedFields );
var requestedFields = getFields (). forIds (
request . fields . map ( function ( field ) {
return field . name ;
})
);
var cache = getCachedData ( request );
var data = getFormattedData ( cache , requestedFields );
return {
schema : requestedFields . build (),
rows : data
};
}
function getCachedData ( request ) {
var cacheUpdateNeeded = true ;
var url = buildFirebaseUrl ( request . configParams . zipcode );
var cachedData = getFromCache ( url );
var currentYmd = getCurrentYmd ();
if ( cachedData ) {
cacheUpdateNeeded = currentYmd > cachedData . ymd ;
}
if ( cacheUpdateNeeded ) {
var fetchedData = fetchAndParseData ( request );
freshData = {};
freshData . data = fetchedData ;
freshData . ymd = currentYmd ;
deleteFromCache ( url );
putInCache ( url , freshData );
cachedData = freshData ;
}
return cachedData . data ;
}
function getCurrentYmd () {
var currentDate = new Date ();
var year = currentDate . getFullYear ();
var month = ( '0' + ( currentDate . getMonth () + 1 )). slice ( - 2 );
var date = ( '0' + currentDate . getDate ()). slice ( - 2 );
var currentYmd = year + month + date ;
return currentYmd ;
}
// [end caching_implementation]
// [start common_getdata_implementation]
function fetchAndParseData ( request ) {
// TODO: Connect to your own API endpoint and parse the fetched data.
// To keep this example simple, we are returning dummy data instead of
// connecting to an enpoint. This does not affect the caching.
var parsedData = sampleData ;
return parsedData ;
}
function getFormattedData ( fetchedData , requestedFields ) {
var data = fetchedData . map ( function ( rowData ) {
return formatData ( rowData , requestedFields );
});
return data ;
}
function formatData ( rowData , requestedFields ) {
var row = requestedFields . asArray (). map ( function ( requestedField ) {
switch ( requestedField . getId ()) {
case 'date' :
return rowData . date ;
case 'zipcode' :
return rowData . zipcode ;
case 'temperature' :
return rowData . temperature ;
default :
return '' ;
}
});
return { values : row };
}
// [end common_getdata_implementation]
var sampleData = [
{
date : '20190601' ,
zipcode : '95054' ,
temperature : 80
},
{
date : '20190602' ,
zipcode : '95054' ,
temperature : 82
},
{
date : '20190603' ,
zipcode : '95054' ,
temperature : 82
},
{
date : '20190604' ,
zipcode : '95054' ,
temperature : 85
},
{
date : '20190605' ,
zipcode : '95054' ,
temperature : 84
},
{
date : '20190606' ,
zipcode : '95054' ,
temperature : 83
},
{
date : '20190607' ,
zipcode : '95054' ,
temperature : 81
}
];
firebase.js
firestore-cache/src/firebase.js
View on GitHub
// [start firebase_access_implementation]
var FIREBASE_REALTIME_DB_BASE_URL = '.firebaseio.com' ;
var FIREBASE_REALTIME_DB_COLLECTION = '/cache' ;
/**
* Returns the URL for a file in a firebase database.
*
* @param {string} fileName The filename in the database
* @returns {string} The url for the file in the database
*/
function buildFirebaseUrl ( fileName ) {
var serviceAccountCreds = getServiceAccountCreds ();
var projectId = serviceAccountCreds [ BILLING_PROJECT_ID ];
if ( fileName ) {
fileName = '/' + fileName ;
}
var urlElements = [
'https://' ,
projectId ,
FIREBASE_REALTIME_DB_BASE_URL ,
FIREBASE_REALTIME_DB_COLLECTION ,
fileName ,
'.json'
];
var url = urlElements . join ( '' );
return url ;
}
/**
* Generic method for handling the Firebase Realtime Database REST API.
* For `get`: returns the data at the given url.
* For `post`: posts the data in in firestore db at the given url and returns `undefined`.
* For `delete`: deletes the data at the given url and returns `undefined`.
*
* @param {string} method Method for the REST API: `get`, `post`, or `delete`
* @param {string} url REST endpoint
* @param {string} [data] Data to be stored for `post` method
* @returns {undefined|object} Returns data from the REST endpoint for `get`
* method. For other methods, returns `undefined`.
*/
function firebaseCache ( method , url , data ) {
var oAuthToken = getOauthService (). getAccessToken ();
var responseOptions = {
headers : {
Authorization : 'Bearer ' + oAuthToken
},
method : method ,
contentType : 'application/json'
};
// Add payload for post method
if ( method === 'post' ) {
responseOptions [ 'payload' ] = JSON . stringify ( data );
}
var response = UrlFetchApp . fetch ( url , responseOptions );
// Return value only for `get`.
if ( method === 'get' ) {
var responseObject = JSON . parse ( response );
if ( responseObject === null ) {
return null ;
} else {
var autoKey = Object . keys ( responseObject )[ 0 ];
var returnValue = responseObject [ autoKey ];
}
return returnValue ;
}
}
function getFromCache ( url ) {
return firebaseCache ( 'get' , url );
}
function deleteFromCache ( url ) {
return firebaseCache ( 'delete' , url );
}
function putInCache ( url , data ) {
return firebaseCache ( 'put' , url , data );
}
// [end firebase_access_implementation]
var SERVICE_ACCOUNT_CREDS = 'SERVICE_ACCOUNT_CREDS' ;
var SERVICE_ACCOUNT_KEY = 'private_key' ;
var SERVICE_ACCOUNT_EMAIL = 'client_email' ;
var BILLING_PROJECT_ID = 'project_id' ;
var scriptProperties = PropertiesService . getScriptProperties ();
/**
* Copy the entire credentials JSON file from creating a service account in GCP.
* Service account should have `Firebase Admin` IAM role.
*/
function getServiceAccountCreds () {
return JSON . parse ( scriptProperties . getProperty ( SERVICE_ACCOUNT_CREDS ));
}
function getOauthService () {
var serviceAccountCreds = getServiceAccountCreds ();
var serviceAccountKey = serviceAccountCreds [ SERVICE_ACCOUNT_KEY ];
var serviceAccountEmail = serviceAccountCreds [ SERVICE_ACCOUNT_EMAIL ];
return OAuth2 . createService ( 'FirebaseCache' )
. setAuthorizationBaseUrl ( 'https://accounts.google.com/o/oauth2/auth' )
. setTokenUrl ( 'https://accounts.google.com/o/oauth2/token' )
. setPrivateKey ( serviceAccountKey )
. setIssuer ( serviceAccountEmail )
. setPropertyStore ( scriptProperties )
. setCache ( CacheService . getScriptCache ())
. setScope ([
'https://www.googleapis.com/auth/userinfo.email' ,
'https://www.googleapis.com/auth/firebase.database'
]);
}
Additional resources
The Chrome UX Connector facilitates a dashboard based on a ~20GB BigQuery
table to thousands of users. This connector uses Firebase Realtime Database
along with Apps Script Cache Service for a two layered caching approach. See
code for implementation details.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-02 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-02 UTC."],[],[]]
