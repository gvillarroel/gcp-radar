---
title: "YouTube Analytics Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/youtube-analytics
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/apps-script/reference?skip_cache=false
source_metadata:
  url: https://developers.google.com/apps-script/advanced/youtube-analytics
  title: "YouTube Analytics Service \_|\_ Apps Script \_|\_ Google for Developers"
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
YouTube Analytics Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The YouTube Analytics service in Apps Script allows you to use the YouTube Analytics API to retrieve viewing statistics, popularity metrics, and demographic information for YouTube videos and channels.
This is an advanced service that must be enabled before use.
The service uses the same objects, methods, and parameters as the public YouTube Analytics API.
A sample code is provided to create a spreadsheet with daily view counts, watch-time, and subscriber data using version 2 of the YouTube Analytics API and version 3 of the YouTube Data API.
viewing statistics, popularity metrics, and demographic information for
YouTube videos and channels.
The YouTube Analytics service lets you use the
YouTube Analytics API in Google Apps Script. This API
gives users the ability to retrieve viewing statistics, popularity metrics, and
demographic information for YouTube videos and channels.
This is an advanced service that must be
enabled before use .
Reference
For detailed information on this service, see the
reference documentation for the
YouTube Analytics API. Like all advanced services in
Apps Script, the YouTube Analytics service uses the same
objects, methods, and parameters as the public API. For more information, see
How method signatures are determined .
Sample code
The following sample code uses version 2 of the
YouTube Analytics API, as well as version 3 of the YouTube
Data API, which you can access through the
YouTube service in Apps Script.
To report issues and find other support, see the
YouTube API support guide .
Create report
This function creates a spreadsheet containing daily view counts,
watch-time metrics, and new-subscriber counts for a channel's videos.
advanced/youtubeAnalytics.gs
View on GitHub
/**
* Creates a spreadsheet containing daily view counts, watch-time metrics,
* and new-subscriber counts for a channel's videos.
*/
function createReport () {
// Retrieve info about the user's YouTube channel.
const channels = YouTube . Channels . list ( "id,contentDetails" , {
mine : true ,
});
const channelId = channels . items [ 0 ]. id ;
// Retrieve analytics report for the channel.
const oneMonthInMillis = 1000 * 60 * 60 * 24 * 30 ;
const today = new Date ();
const lastMonth = new Date ( today . getTime () - oneMonthInMillis );
const metrics = [
"views" ,
"estimatedMinutesWatched" ,
"averageViewDuration" ,
"subscribersGained" ,
];
const result = YouTubeAnalytics . Reports . query ({
ids : `channel== ${ channelId } ` ,
startDate : formatDateString ( lastMonth ),
endDate : formatDateString ( today ),
metrics : metrics . join ( "," ),
dimensions : "day" ,
sort : "day" ,
});
if ( ! result . rows ) {
console . log ( "No rows returned." );
return ;
}
const spreadsheet = SpreadsheetApp . create ( "YouTube Analytics Report" );
const sheet = spreadsheet . getActiveSheet ();
// Append the headers.
const headers = result . columnHeaders . map (( columnHeader ) = > {
return formatColumnName ( columnHeader . name );
});
sheet . appendRow ( headers );
// Append the results.
sheet
. getRange ( 2 , 1 , result . rows . length , headers . length )
. setValues ( result . rows );
console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ());
}
/**
* Converts a Date object into a YYYY-MM-DD string.
* @param {Date} date The date to convert to a string.
* @return {string} The formatted date.
*/
function formatDateString ( date ) {
return Utilities . formatDate ( date , Session . getScriptTimeZone (), "yyyy-MM-dd" );
}
/**
* Formats a column name into a more human-friendly name.
* @param {string} columnName The unprocessed name of the column.
* @return {string} The formatted column name.
* @example "averageViewPercentage" becomes "Average View Percentage".
*/
function formatColumnName ( columnName ) {
let name = columnName . replace ( /([a-z])([A-Z])/g , "$1 $2" );
name = name . slice ( 0 , 1 ). toUpperCase () + name . slice ( 1 );
return name ;
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
