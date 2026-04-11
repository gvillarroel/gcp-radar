---
title: "Use a service account \_|\_ Community Connectors \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/use-a-service-account
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector/advanced-services
source_metadata:
  url: https://developers.google.com/looker-studio/connector/use-a-service-account
  title: "Use a service account \_|\_ Community Connectors \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Use a service account
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Community Connectors can utilize service accounts for centralized resource access management, enabling data access delegation beyond user credentials.
Service accounts offer benefits like consolidated billing, custom access control implementation, and access to otherwise restricted data or resources.
Implementing service accounts involves creating a dedicated account, granting necessary permissions, securely storing credentials in script properties, and utilizing these during connector execution.
For enhanced security, avoid storing service account credentials directly in code; instead, leverage connector script properties to safeguard sensitive information.
The provided example demonstrates using a service account with Looker Studio Advanced Services for secure and controlled access to BigQuery data, consolidating billing and delegating access efficiently.
You can use service accounts in your Community Connectors for centralized
management of resource access. A common use case would be to delegate access to
data that users would not able to access using their own credentials.
Review Understanding service accounts to familiarize yourself with the topic.
Benefits
You can consolidate billing for data access.
You can implement your own access control layer in your connector.
You can delegate access to data or resources that the user's credentials
does not have access to.
Implementation steps
Create a service account for the platform from which you are fetching data.
Provide the necessary permissions to the service account so it can access
required resources.
Store the service account's credentials in your connector's script
properties.
During connector execution, use the stored credentials to fetch required
data.
Optional : Implement access control logic to filter the data.
Caution: Do not store the service account's credentials in your code. Instead
use the connector's script properties to ensure that other users with view
access to your code (either via Apps Script or via external code repository)
cannot see the credentials.
Example: Accessing BigQuery with Looker Studio Advanced Services and a service account
You are building a solution where your users will build dashboards from a
BigQuery table. If your users use Looker Studio's BigQuery connector, they will
need read access to the BigQuery table. They will also require a billing account
for Google Cloud Platform (GCP). The following steps illustrate how to use a
service account to consolidate billing and delegate access to the BigQuery data.
Create a service account in your desired GCP project.
Ensure the service account can create BigQuery jobs and view the data for
the required table. See BigQuery Access Control for details.
Create a key for the service account and store the credentials in your
connector's script properties .
Include the OAuth2 Apps Script library in your
Apps Script project.
For your getData function, authenticate the service account and generate
an access token. Set the OAuth2 scope to
https://www.googleapis.com/auth/bigquery.readonly .
Return access token with other configuration items in getData response.
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
