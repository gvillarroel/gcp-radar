---
title: "Advanced Google services \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/services/advanced
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/apps-script
source_metadata:
  url: https://developers.google.com/apps-script/guides/services/advanced
  title: "Advanced Google services \_|\_ Apps Script \_|\_ Google for Developers"
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
Advanced Google services
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Advanced services in Apps Script allow experienced developers to connect to certain public Google APIs with less set-up than using their HTTP interfaces.
Advanced services function similarly to built-in Apps Script services, offering features like autocomplete and automatic authorization flow, but require explicit enabling.
Developers can access Google APIs via advanced services or by making direct requests using UrlFetch , with each method having different requirements and advantages.
Using advanced services is generally easier and recommended, while the UrlFetch method offers full API functionality but requires manual authorization and handling of requests and responses.
Before using an advanced service, you must enable it in your script project and ensure the corresponding API is enabled in your associated Cloud Platform project.
Advanced services in Google Apps Script let you connect to certain public
Google APIs with less setup than using their HTTP interfaces. Advanced services
are thin wrappers around those Google APIs. They work much like
Apps Script's built-in services —for example, they
offer autocomplete, and Apps Script handles the authorization
flow automatically. Enable an advanced service before
using it in a script.
Enable advanced services
To use an advanced Google service, follow these instructions:
Step 1: Enable the advanced service
Enable an advanced service using the Apps Script editor or by
editing the manifest.
Method A: Using the Editor
Open the Apps Script project.
At the left, click Editor code .
At the left, next to Services , click Add a service
add .
Select an advanced Google service and click Add .
Method B: Using the manifest
Enable advanced services by editing the manifest
file . For example, to enable the
Google Drive advanced service, add the enabledAdvancedServices field to the
dependencies object:
{
"timeZone" : "America/Denver" ,
"dependencies" : {
"enabledAdvancedServices" : [
{
"userSymbol" : "Drive" ,
"version" : "v3" ,
"serviceId" : "drive"
}
]
},
"exceptionLogging" : "STACKDRIVER" ,
"runtimeVersion" : "V8"
}
After you enable an advanced service, it's available in autocomplete.
Step 2: Enable the Google Cloud API (Standard Google Cloud project projects only)
If using a default Google Cloud project (created automatically by
Apps Script), skip this step. The API is enabled
automatically when you add the service in Step 1.
If using a standard
Google Cloud project ,
manually enable the API corresponding to the advanced service. To
enable the API manually:
Open the Cloud project associated with your script in the **
Google Cloud console**
At the top of the console, click into the search bar and type part of the
name of the API (for example, "Calendar"), then click the
name once you see it.
Click Enable API .
Close the Google Cloud console and return to the script editor.
How method signatures are determined
Advanced services generally use the same objects, method names, and parameters
as the corresponding public APIs, although method signatures are translated for
use in Apps Script. The script editor autocomplete
function usually provides
enough information to get started. The following rules explain how
Apps Script generates a method signature from a public Google
API.
Requests to Google APIs can accept a variety of different types of data,
including path parameters, query parameters, a request body, or a media upload
attachment. Some advanced services can also accept specific HTTP request headers
(for example, the Calendar advanced
service ).
The corresponding method signature in Apps Script has the following
arguments:
The request body (usually a resource), as a JavaScript object.
Path or required parameters, as individual arguments. If the method requires
multiple path parameters, they appear in the order they are listed in the
API endpoint URL.
The media upload attachment, as a Blob
argument.
Optional parameters (typically query parameters), as a JavaScript object
mapping parameter names to values.
HTTP request headers, as a JavaScript object mapping header names to header
values.
If the method doesn't have any items in a given category, that part of the
signature is omitted.
Be aware of these exceptions:
For methods that accept a media upload, the parameter uploadType is set
automatically.
Methods named delete in the Google API are named remove in
Apps Script, since delete is a reserved word in JavaScript.
If an advanced service is configured to accept HTTP request headers, and you
set a request headers JavaScript object, then you must also set the optional
parameters JavaScript object (to an empty object if you aren't using
optional parameters).
Example: Calendar.Events.insert
To create a Calendar
event :
The Google Calendar API documentation shows the corresponding HTTP request
structure:
HTTP Verb : POST
Request URL :
https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events
Request Body : An Event
resource .
Query Parameters : sendUpdates , supportsAttachments , etc.
In Apps Script, the method signature is determined by reordering
these inputs:
Body : The event resource (JavaScript object).
Path : The calendarId (string).
Optional parameters : The query parameters (JavaScript object).
The resulting method call looks like this:
const event = {
summary : 'Lunch' ,
location : 'Deli' ,
start : {
dateTime : '2026-01-01T12:00:00-05:00'
},
end : {
dateTime : '2026-01-01T13:00:00-05:00'
}
};
const calendarId = 'primary' ;
const optionalArgs = {
sendUpdates : 'all'
};
Calendar . Events . insert ( event , calendarId , optionalArgs );
Advanced services or HTTP?
Each advanced Google service is associated with a public Google API. In
Apps Script, access these APIs using advanced services or
by making the API requests directly using
UrlFetch .
If you use the advanced service method , Apps Script handles
the authorization flow and offers autocomplete support.
Enable the advanced service before using it.
If you use the UrlFetch method to access the API directly , you
essentially treat the Google API as an external API . With this
method, use all aspects of the API. However, you must handle the API
authorization.
The following table compares the two methods:
Feature
Advanced Service
UrlFetch (HTTP)
Authorization
Handled automatically
Manual handling required
Autocomplete
Available
Not available
Functionality Scope
May be a subset of the API
Full access to all API features
Complexity
Easier
More complex (requires constructing headers and parsing responses)
Code comparison
The code samples show the difference in complexity between creating a
Calendar event using the advanced service versus using
UrlFetchApp .
Advanced Service:
const event = {
summary : 'Lunch' ,
location : 'Deli' ,
start : { dateTime : '2026-01-01T12:00:00-05:00' },
end : { dateTime : '2026-01-01T13:00:00-05:00' }
};
const optionalArgs = {
sendUpdates : 'all'
};
Calendar . Events . insert ( event , 'primary' , optionalArgs );
UrlFetch (HTTP):
const event = {
summary : 'Lunch' ,
location : 'Deli' ,
start : { dateTime : '2026-01-01T12:00:00-05:00' },
end : { dateTime : '2026-01-01T13:00:00-05:00' }
};
const url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events?sendUpdates=all' ;
const options = {
method : 'post' ,
contentType : 'application/json' ,
headers : {
Authorization : `Bearer ${ ScriptApp . getOAuthToken () } `
},
payload : JSON . stringify ( event )
};
UrlFetchApp . fetch ( url , options );
For the UrlFetchApp method, manually specify the required
OAuth scopes in the script's manifest
file .
Use an advanced service whenever possible and only use the
UrlFetch method when the advanced service isn't available or doesn't provide
the functionality you need.
Support for advanced services
Because advanced services are thin wrappers around Google APIs, any issue
encountered while using them is usually an issue with the underlying API, not
with Apps Script.
If you encounter a problem while using an advanced service, report it using the
support instructions for the underlying API.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
