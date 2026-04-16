---
title: "Shopping Content Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/shopping-content
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/apps-script/reference?skip_cache=false
source_metadata:
  url: https://developers.google.com/apps-script/advanced/shopping-content
  title: "Shopping Content Service \_|\_ Apps Script \_|\_ Google for Developers"
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
Shopping Content Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Shopping Content Service allows Apps Script users to interact with the Google Content API for Shopping to manage product listings and Merchant Center accounts.
This service is an advanced service in Apps Script and utilizes the same objects, methods, and parameters as the public Google Content API for Shopping.
Sample code is provided demonstrating how to insert single or batch products, list products, and update account-level taxes using the Shopping Content Service.
Further details and support can be found in the provided reference documentation and support guide for the Google Content API for Shopping.
for Shopping in Apps Script to manage product listings and Merchant Center
accounts.
The Shopping Content Service lets you use the
Google Content API for Shopping in Google Apps Script.
This API gives Google Merchant Center users the ability to upload and manage
their product listings and manage their Merchant Center accounts.
For detailed information on this service, see the
reference documentation for the
Google Content API for Shopping. Like all advanced services in
Apps Script, the Shopping Content Service utilizes the same
objects, methods, and parameters as the public API.
This is an advanced service that must be
enabled before use .
Reference
For detailed information on this service, see the
reference documentation for the
Google Content API for Shopping API. Like all advanced services in
Apps Script, the Shopping Content service uses the same objects,
methods, and parameters as the public API. For more information, see
How method signatures are determined .
To report issues and find other support, see the
Google Content API for Shopping support guide .
Sample code
We now show how to use a few features of the Shopping Content Service.
Insert product
This example demonstrates how to insert a single product into a given
merchant center account.
advanced/shoppingContent.gs
View on GitHub
/**
* Inserts a product into the products list. Logs the API response.
*/
function productInsert () {
const merchantId = 123456 ; // Replace this with your Merchant Center ID.
// Create a product resource and insert it
const productResource = {
offerId : "book123" ,
title : "A Tale of Two Cities" ,
description : "A classic novel about the French Revolution" ,
link : "http://my-book-shop.com/tale-of-two-cities.html" ,
imageLink : "http://my-book-shop.com/tale-of-two-cities.jpg" ,
contentLanguage : "en" ,
targetCountry : "US" ,
channel : "online" ,
availability : "in stock" ,
condition : "new" ,
googleProductCategory : "Media > Books" ,
productType : "Media > Books" ,
gtin : "9780007350896" ,
price : {
value : "2.50" ,
currency : "USD" ,
},
shipping : [
{
country : "US" ,
service : "Standard shipping" ,
price : {
value : "0.99" ,
currency : "USD" ,
},
},
],
shippingWeight : {
value : "2" ,
unit : "pounds" ,
},
};
try {
response = ShoppingContent . Products . insert ( productResource , merchantId );
// RESTful insert returns the JSON object as a response.
console . log ( response );
} catch ( e ) {
// TODO (Developer) - Handle exceptions
console . log ( "Failed with error: $s" , e . error );
}
}
List products
This example demonstrates how to list your products for a given merchant
center account.
advanced/shoppingContent.gs
View on GitHub
/**
* Lists the products for a given merchant.
*/
function productList () {
const merchantId = 123456 ; // Replace this with your Merchant Center ID.
let pageToken ;
let pageNum = 1 ;
const maxResults = 10 ;
try {
do {
const products = ShoppingContent . Products . list ( merchantId , {
pageToken : pageToken ,
maxResults : maxResults ,
});
console . log ( `Page ${ pageNum } ` );
if ( products . resources ) {
for ( let i = 0 ; i < products . resources . length ; i ++ ) {
console . log ( `Item [ ${ i } ] ==> ${ products . resources [ i ] } ` );
}
} else {
console . log ( `No more products in account ${ merchantId } ` );
}
pageToken = products . nextPageToken ;
pageNum ++ ;
} while ( pageToken );
} catch ( e ) {
// TODO (Developer) - Handle exceptions
console . log ( "Failed with error: $s" , e . error );
}
}
Batch insert products
This example uses
Products.custombatch
to insert three products at the same time.
advanced/shoppingContent.gs
View on GitHub
/**
* Batch updates products. Logs the response.
* @param {object} productResource1 The first product resource.
* @param {object} productResource2 The second product resource.
* @param {object} productResource3 The third product resource.
*/
function custombatch ( productResource1 , productResource2 , productResource3 ) {
const merchantId = 123456 ; // Replace this with your Merchant Center ID.
custombatchResource = {
entries : [
{
batchId : 1 ,
merchantId : merchantId ,
method : "insert" ,
productId : "book124" ,
product : productResource1 ,
},
{
batchId : 2 ,
merchantId : merchantId ,
method : "insert" ,
productId : "book125" ,
product : productResource2 ,
},
{
batchId : 3 ,
merchantId : merchantId ,
method : "insert" ,
productId : "book126" ,
product : productResource3 ,
},
],
};
try {
const response = ShoppingContent . Products . custombatch ( custombatchResource );
console . log ( response );
} catch ( e ) {
// TODO (Developer) - Handle exceptions
console . log ( "Failed with error: $s" , e . error );
}
}
Update account-level taxes
This sample code uses
Accounttax to update the
account-level tax information for a Merchant Center account. See our
API guide for more
information about account-level tax and shipping.
advanced/shoppingContent.gs
View on GitHub
/**
* Updates content account tax information.
* Logs the API response.
*/
function updateAccountTax () {
// Replace this with your Merchant Center ID.
const merchantId = 123456 ;
// Replace this with the account that you are updating taxes for.
const accountId = 123456 ;
try {
const accounttax = ShoppingContent . Accounttax . get ( merchantId , accountId );
console . log ( accounttax );
const taxInfo = {
accountId : accountId ,
rules : [
{
useGlobalRate : true ,
locationId : 21135 ,
shippingTaxed : true ,
country : "US" ,
},
{
ratePercent : 3 ,
locationId : 21136 ,
country : "US" ,
},
{
ratePercent : 2 ,
locationId : 21160 ,
shippingTaxed : true ,
country : "US" ,
},
],
};
console . log (
ShoppingContent . Accounttax . update ( taxInfo , merchantId , accountId ),
);
} catch ( e ) {
// TODO (Developer) - Handle exceptions
console . log ( "Failed with error: $s" , e . error );
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
