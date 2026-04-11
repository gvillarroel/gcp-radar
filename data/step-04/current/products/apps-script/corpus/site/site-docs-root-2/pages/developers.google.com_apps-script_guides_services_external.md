---
title: "External APIs \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/services/external
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/apps-script/overview
source_metadata:
  url: https://developers.google.com/apps-script/guides/services/external
  title: "External APIs \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Guides
Send feedback
External APIs
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Apps Script can interact with various web APIs using the UrlFetch service.
For APIs requiring user authorization via OAuth, open source libraries for OAuth1 and OAuth2 are available.
Working with JSON responses involves using getContentText() and JSON.parse() , while creating JSON payloads uses JSON.stringify() .
Handling XML responses and requests uses getContentText() and the XmlService methods.
Google Apps Script can interact with APIs from all over the web. Use this
guide to work with different types of APIs in your scripts.
Connect to public APIs
Use the UrlFetch service to make API
requests directly.
The following example uses the
GitHub API to
search for repositories with 100 or more stars that mention
"Apps Script". This API request does not require authorization or
an API key.
var query = '"Apps Script" stars:">=100"' ;
var url = 'https://api.github.com/search/repositories'
+ '?sort=stars'
+ '&q=' + encodeURIComponent ( query );
var response = UrlFetchApp . fetch ( url , { 'muteHttpExceptions' : true });
Logger . log ( response );
Make requests to services with OAuth
APIs that act on behalf of a user usually require authorization, often using the
OAuth protocol . Apps Script doesn't provide
built-in support for the protocol, but there are open source libraries you can
use to perform the OAuth flow and send the credentials with your requests:
OAuth1 for Apps Script :
Compatible with OAuth 1.0 and 1.0a.
OAuth2 for Apps Script :
Compatible with OAuth2.
Authenticate using a service account
To call an API from Apps Script, you might choose to use
service account authentication for any of the following reasons:
Better performance with Google Cloud APIs
Automations and long-running tasks
Improved security (least privilege)
Centralized access management
To use a service account in Apps Script, see
Authenticate as an Apps Script project using service accounts .
Connect to Google Cloud services
You can use the ScriptApp.getIdentityToken()
method to get an
OpenID Connect
identity token (a JSON Web Token
or JWT) for the effective user. You can use this token to authenticate
with Google Cloud services, such as Cloud Run, that are configured to
accept it.
For more information, see Connect to Google Cloud services .
Work with JSON
Working with JSON objects is similar to working with XML, except that parsing or
encoding a JSON object is much easier.
When an API returns a raw JSON response, access the JSON string response using
the method
HTTPResponse.getContentText .
After you retrieve the string, use JSON.parse() to parse it into a JavaScript
object.
// Make request to API and get response before this point.
var json = response . getContentText ();
var data = JSON . parse ( json );
Logger . log ( data . title );
Similarly, to convert a JavaScript object into a JSON string for a request
payload, use JSON.stringify() .
var data = {
'entry' : {
'group' : {
'title' : 'Dog Skateboarding' ,
'description' : 'My dog gets some serious air'
},
'keywords' : 'dog, skateboard'
}
}
var payload = JSON . stringify ( data );
// Make request to API with payload after this point.
Parse XML
If an external API returns a raw XML response for a request, access the
XML response using the method
HTTPResponse.getContentText() .
// Make request to API and get response before this point.
var xml = response . getContentText ();
var doc = XmlService . parse ( xml );
When making XML requests to an API, use the
XmlService methods to
construct the XML to send.
var root = XmlService . createElement ( 'entry' )
. setAttribute ( 'keywords' , 'dog, skateboard' );
var group = XmlService . createElement ( 'group' )
. setAttribute ( 'title' , 'Dog Skateboarding' )
. setAttribute ( 'description' , 'My dog gets some serious air' );
root . addContent ( group );
var document = XmlService . createDocument ( root );
var payload = XmlService . getPrettyFormat (). format ( document );
// Make request to API with payload after this point.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
