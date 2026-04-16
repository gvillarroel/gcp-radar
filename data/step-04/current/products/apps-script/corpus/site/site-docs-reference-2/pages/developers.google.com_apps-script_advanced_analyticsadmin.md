---
title: "Analytics Admin Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/analyticsadmin
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/apps-script/reference?skip_cache=false
source_metadata:
  url: https://developers.google.com/apps-script/advanced/analyticsadmin
  title: "Analytics Admin Service \_|\_ Apps Script \_|\_ Google for Developers"
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
Analytics Admin Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Analytics Admin service in Apps Script allows programmatic access to Google Analytics 4 configuration data via the Google Analytics Admin API v1.
This is an advanced service that requires enablement before use and is only compatible with GA4 properties.
The service uses the same objects, methods, and parameters as the public Google Analytics Admin API v1.
Sample code demonstrates how to list Google Analytics accounts accessible by a user using the accounts.list() method.
programmatically within Google Apps Script using the Analytics Admin service.
The Analytics Admin service lets you use the
Google Analytics Admin API v1 in
Google Apps Script. The Google Analytics Admin API provides programmatic
access to the Google Analytics 4 (GA4) configuration data and is only
compatible with GA4 properties.
This is an advanced service that must be
enabled before use .
Reference
For detailed information on this service, see the
Google Analytics Admin API v1 .
Like all advanced services in Apps Script, the AnalyticsAdmin
service uses the same objects, methods, and parameters as the public API. For
more information, see
How method signatures are determined .
To report issues and find other support, see the
Google Analytics Admin API v1 support page .
Sample code
Run a report
The sample lists all the Google Analytics accounts available to a user by
calling the
accounts.list()
method.
advanced/analyticsAdmin.gs
View on GitHub
/**
* Logs the Google Analytics accounts accessible by the current user.
*/
function listAccounts () {
try {
accounts = AnalyticsAdmin . Accounts . list ();
if ( ! accounts . items || ! accounts . items . length ) {
console . log ( "No accounts found." );
return ;
}
for ( let i = 0 ; i < accounts . items . length ; i ++ ) {
const account = accounts . items [ i ];
console . log (
'Account: name "%s", displayName "%s".' ,
account . name ,
account . displayName ,
);
}
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
