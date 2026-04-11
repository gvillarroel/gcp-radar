---
title: "Analytics Data Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/analyticsdata
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/reference
source_metadata:
  url: https://developers.google.com/apps-script/advanced/analyticsdata
  title: "Analytics Data Service \_|\_ Apps Script \_|\_ Google for Developers"
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
Analytics Data Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Analytics Data service allows Google Analytics users to programmatically access Google Analytics 4 (GA4) report data through the Google Analytics Data API v1 in Apps Script.
This is an advanced service that requires enabling before use in Apps Script.
The AnalyticsData service utilizes the same objects, methods, and parameters as the public API.
Detailed information and support for this service can be found in the Google Analytics Data API v1 reference documentation and support page.
Apps Script using the Analytics Data API v1.
The Analytics Data service lets you use the
Google Analytics Data API v1 in
Google Apps Script. This API gives Google Analytics users programmatic access
to Google Analytics 4 (GA4) report data.
This is an advanced service that must be
enabled before use .
Reference
For detailed information on this service, see the
Google Analytics Data API v1 reference documentation .
Like all advanced services in Apps Script, the AnalyticsData
service uses the same objects, methods, and parameters as the public API. For
more information, see
How method signatures are determined .
To report issues and find other support, see the
Google Analytics Data API v1 support page .
Sample code
Run a report
The sample runs a report to retrieve the active users count by city
and stores the results in a new spreadsheet.
advanced/analyticsData.gs
View on GitHub
/**
* Runs a report of a Google Analytics 4 property ID. Creates a sheet with the
* report.
*/
function runReport () {
/**
* TODO(developer): Uncomment this variable and replace with your
* Google Analytics 4 property ID before running the sample.
*/
const propertyId = "YOUR-GA4-PROPERTY-ID" ;
try {
const metric = AnalyticsData . newMetric ();
metric . name = "activeUsers" ;
const dimension = AnalyticsData . newDimension ();
dimension . name = "city" ;
const dateRange = AnalyticsData . newDateRange ();
dateRange . startDate = "2020-03-31" ;
dateRange . endDate = "today" ;
const request = AnalyticsData . newRunReportRequest ();
request . dimensions = [ dimension ];
request . metrics = [ metric ];
request . dateRanges = dateRange ;
const report = AnalyticsData . Properties . runReport (
request ,
`properties/ ${ propertyId } ` ,
);
if ( ! report . rows ) {
console . log ( "No rows returned." );
return ;
}
const spreadsheet = SpreadsheetApp . create ( "Google Analytics Report" );
const sheet = spreadsheet . getActiveSheet ();
// Append the headers.
const dimensionHeaders = report . dimensionHeaders . map (( dimensionHeader ) = > {
return dimensionHeader . name ;
});
const metricHeaders = report . metricHeaders . map (( metricHeader ) = > {
return metricHeader . name ;
});
const headers = [... dimensionHeaders , ... metricHeaders ];
sheet . appendRow ( headers );
// Append the results.
const rows = report . rows . map (( row ) = > {
const dimensionValues = row . dimensionValues . map (( dimensionValue ) = > {
return dimensionValue . value ;
});
const metricValues = row . metricValues . map (( metricValues ) = > {
return metricValues . value ;
});
return [... dimensionValues , ... metricValues ];
});
sheet . getRange ( 2 , 1 , report . rows . length , headers . length ). setValues ( rows );
console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ());
} catch ( e ) {
// TODO (Developer) - Handle exception
console . log ( "Failed with error: %s" , e . error );
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
