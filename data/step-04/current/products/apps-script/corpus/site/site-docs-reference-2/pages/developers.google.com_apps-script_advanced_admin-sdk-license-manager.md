---
title: "Admin SDK Enterprise License Manager Service \_|\_ Apps Script \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/apps-script/advanced/admin-sdk-license-manager
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/apps-script/reference?skip_cache=false
source_metadata:
  url: https://developers.google.com/apps-script/advanced/admin-sdk-license-manager
  title: "Admin SDK Enterprise License Manager Service \_|\_ Apps Script \_|\_ Google\
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
Admin SDK Enterprise License Manager Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Admin SDK Enterprise License Manager service in Apps Script allows domain admins to manage user licenses using the Admin SDK Enterprise License Manager API.
This is an advanced service that requires explicit enablement before it can be used.
Reference documentation and support information are available for detailed information and issue reporting.
Sample code is provided to demonstrate common tasks such as listing and inserting license assignments.
in Apps Script to assign, update, retrieve, and delete user licenses.
The Admin SDK Enterprise License Manager service lets you use the
Admin SDK Enterprise License Manager API in
Google Apps Script. This API lets domain admins assign, update,
retrieve, and delete user licenses.
This is an advanced service that must be
enabled before use .
Reference
For detailed information on this service, see the
reference documentation for the Admin SDK
Enterprise License Manager API. Like all advanced services in
Apps Script, the Admin SDK Enterprise License Manager service
uses the same objects, methods, and parameters as the public API. For more
information, see
How method signatures are determined .
To report issues and find other support, see the
Admin SDK Enterprise License Manager support guide .
Sample code
The following sample code uses version 1
of the API.
Get a list of license assignments for the domain
This sample logs the license assignments, including the product ID and the
sku ID, for the users in the domain.
Notice the use of page tokens to access the full list of results.
advanced/adminSDK.gs
View on GitHub
/**
* Logs the license assignments, including the product ID and the sku ID, for
* the users in the domain. Notice the use of page tokens to access the full
* list of results.
*/
function getLicenseAssignments () {
const productId = "Google-Apps" ;
const customerId = "example.com" ;
let assignments = [];
let pageToken = null ;
do {
const response = AdminLicenseManager . LicenseAssignments . listForProduct (
productId ,
customerId ,
{
maxResults : 500 ,
pageToken : pageToken ,
},
);
assignments = assignments . concat ( response . items );
pageToken = response . nextPageToken ;
} while ( pageToken );
// Print the productId and skuId
for ( const assignment of assignments ) {
console . log (
"userId: %s, productId: %s, skuId: %s" ,
assignment . userId ,
assignment . productId ,
assignment . skuId ,
);
}
}
Insert a license assignment for a user
This sample demonstrates how to insert a license assignment for a user, for a
given product ID and sku ID combination.
advanced/adminSDK.gs
View on GitHub
/**
* Insert a license assignment for a user, for a given product ID and sku ID
* combination.
* For more details follow the link
* https://developers.google.com/admin-sdk/licensing/reference/rest/v1/licenseAssignments/insert
*/
function insertLicenseAssignment () {
const productId = "Google-Apps" ;
const skuId = "Google-Vault" ;
const userId = "marty@hoverboard.net" ;
try {
const results = AdminLicenseManager . LicenseAssignments . insert (
{ userId : userId },
productId ,
skuId ,
);
console . log ( results );
} catch ( e ) {
// TODO (developer) - Handle exception.
console . log ( "Failed with an error %s " , e . message );
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
