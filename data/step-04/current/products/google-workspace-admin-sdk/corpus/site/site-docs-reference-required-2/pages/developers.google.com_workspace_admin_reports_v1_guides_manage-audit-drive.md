---
title: "Reports API: Drive Activity Report \_|\_ Admin console \_|\_ Google for Developers"
url: https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-drive
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-login
source_metadata:
  url: https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-drive
  title: "Reports API: Drive Activity Report \_|\_ Admin console \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Admin console
Guides
Send feedback
Reports API: Drive Activity Report
Stay organized with collections
Save and categorize content based on your preferences.
The Drive activity report provides information about your users' activities
when they manage, modify, and share files on Google Drive in
Google Workspace. For example, you can use the Drive activity
report to get a list of all the new Drive documents created by a
particular user over a specified range of dates. You can use this information to
gain insight into better content management and possible data leaks. To obtain a
report, you use the basic report endpoint request with report-specific
parameters such as a user's email address or a specific kind of Google Drive
change. Reports can include data for up to the last 180 days.
The Google Drive activity report may be used only for lawful purposes in accounts which
have a license assigned.
For information about the request's query strings and the response properties,
see the API Reference .
For information about specific events related to Google Drive, see
Drive event names .
Retrieve Google Drive events for a domain
You can use the Drive activity report to list information about your
Drive documents. For example, you can request a report listing
your account's 25 most recent Drive events, covering up to 180
days. To get this report, obtain an authorization token as described in the
authorization guide , then use
the following HTTP GET request:
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all
/applications/drive?maxResults=25
You can see an example response to this API call.
The following example retrieves a report of all Drive
events for the past 180 days, the maximum period.
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all
/applications/drive
Retrieve Google Drive events by user
To retrieve a report of Google Drive activities of a particular user, use an
HTTP GET request with the authorization token described in the
authorization guide .
The userKey field is the primary email address of the user in the report, or
all for all users.
The following example retrieves a report listing all changes made by
the specified user. For an example of an API response, see the
sample JSON response .
GET https : // admin . googleapis . com / admin / reports / v1 / activity / users / kim @example . com
/ applications / drive
Retrieve Google Drive events for shared drives
You can retrieve a report of Google Drive activities for a specific shared
drive using an HTTP GET request with the authorization token described in the
authorization guide . Specify
the email address of the user you want to run the report on in the userKey
field, or specify all to run the report on all users.
The following example retrieves a report of all changes for a specific shared
drive. For an example of an API response, see the
sample JSON response .
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all
/applications/drive?filters=shared_drive_id==<id of shared drive>
To retrieve events for a shared drive, filter using the doc_type . The
following example retrieves events that affect all shared drives:
GET https : //admin.googleapis.com/admin/reports/v1/activity/users/all
/ applications / drive ? filters = doc_type = shared_drive
To retrieve events for membership changes, specify the
shared_drive_membership_change event. The following example retrieves all
member additions to shared drives:
GET https : //admin.googleapis.com/admin/reports/v1/activity/users/all
/ applications / drive ? eventName = shared_drive_membership_change &
filters = membership_change_type == add_to_shared_drive
Retrieve Google Drive events by event type
To retrieve a report of all instances of a specific event type, such as creating
or editing a document, use an HTTP GET request with the authorization
token described in the
authorization guide .
The userKey field is the primary email address of the user in the report, or
all for all users.
The following example retrieves a report of all account documentation creation
activities. For an example of an API response, see the
sample JSON response :
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all
/applications/drive?eventName=create
Example JSON response
When you make an HTTP GET request to the API, a successful response returns an
HTTP 200 status code. Along with the status code, the response returns a report
for the Drive. These reports are also available in the
Admin console. For more information, see the
Google Workspace Admin help center .
For eventName information, see the
Drive event names
reference. For more information about the request's query strings and the
response properties, see the
API Reference .
{
"kind": "reports#auditActivities",
"nextPageToken": " next page's token ",
"items": [
{
"kind": "audit#activity",
"id": {
"time": "2014-03-17T15:39:18.460Z",
"uniqQualifier": " report's unique ID ",
"applicationName": "drive",
"customerId": "ABC123xyz"
},
"actor": {
"callerType": "USER",
"email": "kim@example.com",
"profileId": " user's unique Google Workspace profile ID ",
"key": " consumer key of requester in an OAuth 2LO request "
},
"ownerDomain": " domain of the source owner ",
"ipAddress": " user's IP address ",
"events": [
{
"type": "access",
"name": "edit",
"parameters": [
{
"name": "primary_event",
"boolValue": true
},
{
"name": "owner_is_shared_drive",
"boolValue": false
}, {
"name": "doc_id",
"value": "1DWuYM3ot_sAyEQqOz0xWJ9bVMSYzOmRNeBqbgtSwuK8"
},
{
"name": "doc_title",
"value": "Meeting notes"
},
{
"name": "doc_type",
"value": "document"
},
{
"name": "owner",
"value": "mary@example.com"
}
]
}
]
},
]
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
