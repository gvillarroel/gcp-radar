---
title: "Admin SDK Google Workspace Reseller Service \_|\_ Apps Script \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/apps-script/advanced/admin-sdk-reseller
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/reference
source_metadata:
  url: https://developers.google.com/apps-script/advanced/admin-sdk-reseller
  title: "Admin SDK Google Workspace Reseller Service \_|\_ Apps Script \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Admin SDK Google Workspace Reseller Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Admin SDK Google Workspace Reseller service in Apps Script allows authorized reseller admins to manage Google Workspace subscriptions.
This is an advanced service that must be enabled before use.
The service uses the same objects, methods, and parameters as the public Admin SDK Reseller API.
Sample code is provided to demonstrate getting a list of subscriptions.
in Apps Script to manage customer orders and Google Workspace subscriptions.
The Admin SDK Google Workspace Reseller service lets
you use the Admin SDK Reseller API in
Google Apps Script. This API allows authorized reseller admins to place
customer orders and manage Google Workspace monthly post-pay
subscriptions.
This is an advanced service that must be
enabled before use .
Reference
For detailed information on this service, see the
reference documentation for the Admin SDK
Google Workspace Reseller API. Like all advanced services in
Apps Script, the Admin SDK Google Workspace Reseller
service uses the same objects, methods, and parameters as the public API. For
more information, see
How method signatures are determined .
To report issues and find other support, see the
Admin SDK Reseller support guide .
Sample code
The following sample code uses version 1 of
the API.
Get a list of subscriptions
This sample logs the list of subscriptions, including the customer ID,
date created, plan name, and the SKU ID.
Notice the use of page tokens to access the full list of results.
advanced/adminSDK.gs
View on GitHub
/**
* Logs the list of subscriptions, including the customer ID, date created, plan
* name, and the sku ID. Notice the use of page tokens to access the full list
* of results.
* @see https://developers.google.com/admin-sdk/reseller/reference/rest/v1/subscriptions/list
*/
function getSubscriptions () {
let result ;
let pageToken ;
do {
result = AdminReseller . Subscriptions . list ({
pageToken : pageToken ,
});
for ( const sub of result . subscriptions ) {
const creationDate = new Date ();
creationDate . setUTCSeconds ( sub . creationTime );
console . log (
"customer ID: %s, date created: %s, plan name: %s, sku id: %s" ,
sub . customerId ,
creationDate . toDateString (),
sub . plan . planName ,
sub . skuId ,
);
}
pageToken = result . nextPageToken ;
} while ( pageToken );
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
