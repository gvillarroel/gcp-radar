---
title: "Row-level security for embedded viewers \_|\_ Community Connectors \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/looker-studio/connector/embed-row-level-security
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/looker-studio
source_metadata:
  url: https://developers.google.com/looker-studio/connector/embed-row-level-security
  title: "Row-level security for embedded viewers \_|\_ Community Connectors \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Row-level security for embedded viewers
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Embed Looker Studio dashboards in third-party applications, allowing clients to view relevant data without Google logins.
Securely filter data using unique, short-lived tokens passed through the embed URL, fetched by a custom Community Connector.
Developers need to create a Community Connector, handle token generation and data filtering, and configure Looker Studio sharing settings for embedding.
Tokens can either directly contain encrypted filter information or be used to retrieve it from an API endpoint, enhancing data security.
G Suite users need to ensure Drive sharing is enabled for "Anyone with a Link" for external access to the embedded dashboard.
Objective: A viewer of an embedded dashboard on a third-party platform will see
only the data relevant for them, without the user logging into their Google
account.
For example, let's assume developer X has a web application for their clients.
Clients log in to the app using their own credentials and can view sales data
for different stores. Each client has access to a different list of stores. The
developer would like to embed a Looker Studio dashboard in their application so
that when a client logs in, the client sees only the sales data for the stores
they have access to. Clients should not have to log into their Google account
for this process to work.
The proposed solution will need the developer to create a Community Connector,
pass a token through the embed URL, and then filter data based on the token.
Requirements
Dashboard viewers will log in to the third-party application.
The application should pass a unique token to the Looker Studio dashboard
through embed URL. The token can either be used to lookup filter information
or have the filter information encrypted within.
The Community Connector should be able to convert the token into the filter
values.
Limitations
If you are a G Suite customer and your administrator has disabled sharing
Drive files to “Anyone with a Link”, you will not be able to share the
report with users outside your organization.
Solution
Complete all the following steps to implement the solution.
Generate user token in web app
Generate a unique token for each logged-in user in your web application.You will
be passing this token to the embedded dashboard in a later step.
You should use the token to filter relevant data. Options include:
Create an API endpoint which return filtered data or the user information
for a specific token.
Encrypt the user information in the token so that it can be decrypted later
in the connector.
Create a new Community Connector
Review How Community Connectors Work and complete the
Community Connector Codelab to get started. Use the
Local development tooling for creating connectors for a faster and easier
development process.
Write the connector code
getConfig() should return at least one config item. This will be used to
capture a token from embed URL's parameters.
Caution: You should not pass user credentials via this method.
function getConfig ( request ) {
var cc = DataStudioApp . createCommunityConnector ();
var config = cc . getConfig ();
config
. newTextInput ()
. setId ( 'token' )
. setName ( 'Enter user token' );
// TODO: Add additional config values if applicable for your connector
config . setDateRangeRequired ( false );
config . setIsSteppedConfig ( false );
return config . build ();
}
getData() will have access to the token through the
request.configParams object. Use the token to fetch filtered data or
filter existing fetched data.
Following the above example, the token would be
request.configParams.token . In getData() , the token is passed to a REST
API end-point to get a list of Store Ids . These Store Ids are then used
to construct the SQL query to fetch sales data.
var STORE_ID_API = 'https://www.example.com/api/storeid' ;
var QUERY_STRING_PREFIX = "SELECT StoreName, Sales from stores"
function getData ( request ) {
var token = request . configParams . token ;
var storeIds = getStoreIdList ( token );
var queryString = constructQueryString ( storeIds );
var fetchedData = fetchData ( queryString );
// rest of getData() implementation
}
function getStoreIdList ( token ) {
var url = STORE_ID_API ;
var response = UrlFetchApp . fetch ( url );
var parsedResponse = JSON . parse ( response );
return parsedResponse . storeIds ;
}
function constructQueryString ( storeIds ) {
var storeIdString = storeIds . join ( ',' );
var queryString = QUERY_STRING_PREFIX
+ ' WHERE storeId in ('
+ storeIdString
+ ')' ;
return queryString ;
}
Create the dashboard
Understand how deployments and versions work for connectors.
Create a production deployment for the connector.
Use the Production deployment link to create a data source and a report in
Looker Studio.
For the token config parameter,
Allow report viewers to modify parameter values .
Share the dashboard with selected users or with “Anyone with
link”.
Enable embedding for the report.
Embed the dashboard in your platform
Understand how Report URL parameters work.
Pass the dynamically generated token value using URL parameters to the
embedded Looker Studio report.
Your embed url will look similar to this:
`https://lookerstudio.google.com/embed/reporting/ REPORT_ID /page/ PAGE_ID ?config=%7B%22ds0%22%3A%7B%22token%22%3A%22 TOKEN_VALUE %22%7D%7D
Recommendations
You should create a short-lived token.
Ensure the dashboard does not leak any information with viewed with an
invalid token.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
