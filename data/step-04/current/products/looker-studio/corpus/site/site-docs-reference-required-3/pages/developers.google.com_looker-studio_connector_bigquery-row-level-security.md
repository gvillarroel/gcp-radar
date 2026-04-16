---
title: "BigQuery row-level security with Advanced Services \_|\_ Community Connectors\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/bigquery-row-level-security
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector/reference
source_metadata:
  url: https://developers.google.com/looker-studio/connector/bigquery-row-level-security
  title: "BigQuery row-level security with Advanced Services \_|\_ Community Connectors\
    \ \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
BigQuery row-level security with Advanced Services
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This solution enables creating a BigQuery dashboard where viewers see only their relevant data based on a pre-defined mapping.
It leverages a service account for centralized billing and requires a one-time authorization from each viewer.
The implementation involves creating a Community Connector, setting up a service account, and constructing a BigQuery query that filters data based on the viewer's email.
The dashboard can be shared with users via a link, and usage can be optionally measured using Google Analytics.
Objective: A viewer of a BigQuery dashboard will see only the data relevant for
them.
For example, let's assume you are trying to create a solution for your sales
organization. The sales organization is divided into multiple regions where each
region has its own Regional Manager. The sales dataset in BigQuery has sales
amount by region and by date.
The proposed solution will have a single dashboard where the Regional Managers
can view sales data only for their own regions.
Requirements
Dashboard viewers will be signed-in with a Google account.
A mapping is available between the user's email and the data/rows they have
access to.
A service account will be used to access BigQuery data. Thus the billing
will be centralized and managed by the dashboard provider.
Limitations
The dashboard requires a one-time authorization from each viewer on first
view.
Viewers cannot edit the dashboard or share with others.
If you are a Workspace customer and your administrator has disabled sharing
Drive files to “Anyone with a Link”, either remove the sharing
restriction or develop the solution on a Gmail.com account.
Solution
Complete all the following steps to implement the solution.
Create a new Community Connector
Review How Community Connectors Work and complete the Community Connector
Codelab to get started. Use the Developer tool for creating connectors for a
faster and easier development process.
Write the connector code
getAuthType() should return NONE .
getConfig() should return an empty config.
Optional: If you need specific inputs for configuring the dashboard, you
can request user input here.
getSchema() should return the schema for your query.
Optional: You can add custom fields and calculations either in the SQL
query or using calculated fields as part of the schema.
getData() will be completed at a later step .
Update manifest
View Manifest reference and complete the manifest with all required
information including the following:
set dataStudio.forceViewersCredentials to true .
set dataStudio.advancedServices.data to true .
For oauthScopes add https://www.googleapis.com/auth/userinfo.email and
https://www.googleapis.com/auth/script.external_request . See Authorization
Scopes for Apps Script for more info.
Conditional: Add all relevant scopes for the services used in the
connector.
The manifest should look like this:
{
...
"dataStudio" : {
"forceViewersCredentials" : true ,
"advancedServices" : {
"data" : true
},
...
}
"oauthScopes" : [
"https://www.googleapis.com/auth/script.external_request" ,
"https://www.googleapis.com/auth/userinfo.email"
],
...
}
Implement a service account
Create a service account in your Google Cloud project. This will be your
billing project.
Ensure this service account has BigQuery access in the cloud project.
Required Identity and Access Management (IAM) Roles: BigQuery Data Viewer ,
BigQuery Job User
Download the JSON file to get the service accounts keys . Store the keys in
your connector project’s script properties .
Include the OAuth2 for Apps Script library in your Apps Script project.
Implement the required OAuth2 code for the service account:
var SERVICE_ACCOUNT_CREDS = 'SERVICE_ACCOUNT_CREDS' ;
var SERVICE_ACCOUNT_KEY = 'private_key' ;
var SERVICE_ACCOUNT_EMAIL = 'client_email' ;
var BILLING_PROJECT_ID = 'project_id' ;
/**
* Copy the entire credentials JSON file from creating a service account in GCP.
*/
function getServiceAccountCreds () {
return JSON . parse ( scriptProperties . getProperty ( SERVICE_ACCOUNT_CREDS ));
}
function getOauthService () {
var serviceAccountCreds = getServiceAccountCreds ();
var serviceAccountKey = serviceAccountCreds [ SERVICE_ACCOUNT_KEY ] ;
var serviceAccountEmail = serviceAccountCreds [ SERVICE_ACCOUNT_EMAIL ] ;
return OAuth2 . createService ( 'RowLevelSecurity' )
. setAuthorizationBaseUrl ( 'https://accounts.google.com/o/oauth2/auth' )
. setTokenUrl ( 'https://accounts.google.com/o/oauth2/token' )
. setPrivateKey ( serviceAccountKey )
. setIssuer ( serviceAccountEmail )
. setPropertyStore ( scriptProperties )
. setCache ( CacheService . getScriptCache ())
. setScope ( [ 'https://www.googleapis.com/auth/bigquery.readonly' ] );
}
Implement getData()
Construct your BigQuery query.
Using the email, lookup the mapping between the email and the data.
Use JOIN and/or WHERE clause to filter the data.
Get the effective user's email ( user identity reference ).
Use the Looker Studio Advanced Services to return the query configuration
from getData.
Pass the constructed query, the billing project, and the Service Account
OAuth token.
Conditional: If you are taking user input via the connector getConfig ,
you should incorporate the input as BigQuery parameters .
Create the dashboard
Understand how deployments and versions work for connectors.
Create a production deployment for the connector.
Use the Production deployment to create a data source and a new report in
Looker Studio.
Add all tables and charts in the report.
The dashboard is now ready to be shared with your users.
Make the dashboard available to users
Share the connector script with selected users or with “Anyone
with link”.
Share the dashboard with selected users or with “Anyone with
link”.
Optional: Use a URL shortener service to create a short-link for the
dashboard URL. Share the shortened URL with your users. This helps to replace
the dashboard URL later if needed.
Optional: Measure dashboard usage by setting up Google Analytics for
your report.
Example Code
The following is a complete example of the connector code:
main.js
var cc = DataStudioApp . createCommunityConnector ();
var scriptProperties = PropertiesService . getScriptProperties ();
function isAdminUser () {
return true ;
}
function getAuthType () {
var AuthTypes = cc . AuthType ;
return cc
. newAuthTypeResponse ()
. setAuthType ( AuthTypes . NONE )
. build ();
}
function getConfig ( request ) {
var config = cc . getConfig ();
config
. newInfo ()
. setId ( 'generalInfo' )
. setText ( 'This is an example connector to showcase row level security.' );
return config . build ();
}
function getFields () {
var fields = cc . getFields ();
var types = cc . FieldType ;
var aggregations = cc . AggregationType ;
fields
. newDimension ()
. setId ( 'region' )
. setName ( 'Region' )
. setType ( types . TEXT );
fields
. newMetric ()
. setId ( 'sales' )
. setName ( 'Sales' )
. setType ( types . NUMBER )
. setAggregation ( aggregations . SUM );
fields
. newDimension ()
. setId ( 'date' )
. setName ( 'Date' )
. setType ( types . YEAR_MONTH_DAY );
return fields ;
}
function getSchema ( request ) {
return { schema : getFields (). build () } ;
}
var SERVICE_ACCOUNT_CREDS = 'SERVICE_ACCOUNT_CREDS' ;
var SERVICE_ACCOUNT_KEY = 'private_key' ;
var SERVICE_ACCOUNT_EMAIL = 'client_email' ;
var BILLING_PROJECT_ID = 'project_id' ;
/**
* Copy the entire credentials JSON file from creating a service account in GCP.
*/
function getServiceAccountCreds () {
return JSON . parse ( scriptProperties . getProperty ( SERVICE_ACCOUNT_CREDS ));
}
function getOauthService () {
var serviceAccountCreds = getServiceAccountCreds ();
var serviceAccountKey = serviceAccountCreds [ SERVICE_ACCOUNT_KEY ] ;
var serviceAccountEmail = serviceAccountCreds [ SERVICE_ACCOUNT_EMAIL ] ;
return OAuth2 . createService ( 'RowLevelSecurity' )
. setAuthorizationBaseUrl ( 'https://accounts.google.com/o/oauth2/auth' )
. setTokenUrl ( 'https://accounts.google.com/o/oauth2/token' )
. setPrivateKey ( serviceAccountKey )
. setIssuer ( serviceAccountEmail )
. setPropertyStore ( scriptProperties )
. setCache ( CacheService . getScriptCache ())
. setScope ( [ 'https://www.googleapis.com/auth/bigquery.readonly' ] );
}
var BASE_SQL =
'SELECT d.region, d.sales, d.date ' +
'FROM `datastudio-solutions.row_level_security.data` d ' +
'INNER JOIN `datastudio-solutions.row_level_security.access` a ' +
'ON d.region = a.region ' +
'where a.email=@email' ;
function getData ( request ) {
var accessToken = getOauthService (). getAccessToken ();
var serviceAccountCreds = getServiceAccountCreds ();
var billingProjectId = serviceAccountCreds [ BILLING_PROJECT_ID ] ;
var email = Session . getEffectiveUser (). getEmail ();
var bqTypes = DataStudioApp . createCommunityConnector (). BigQueryParameterType ;
return cc
. newBigQueryConfig ()
. setAccessToken ( accessToken )
. setBillingProjectId ( billingProjectId )
. setUseStandardSql ( true )
. setQuery ( BASE_SQL )
. addQueryParameter ( 'email' , bqTypes . STRING , email )
. build ();
}
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
