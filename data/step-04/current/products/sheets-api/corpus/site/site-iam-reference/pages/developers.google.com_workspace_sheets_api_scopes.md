---
title: "Choose Google Sheets API scopes \_|\_ Google for Developers"
url: https://developers.google.com/workspace/sheets/api/scopes
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/sheets/api/scopes
source_metadata:
  url: https://developers.google.com/workspace/sheets/api/scopes
  title: "Choose Google Sheets API scopes \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Sheets
Guides
Send feedback
Choose Google Sheets API scopes
Stay organized with collections
Save and categorize content based on your preferences.
This document contains Google Sheets API-specific authorization and
authentication information. Before reading this document, be sure to read the
Google Workspace's general authentication and authorization information at
Learn about authentication and authorization .
Note that Sheets API scopes are applied to a
spreadsheet file and cannot
be limited to a specific sheet .
To prevent modification of a sheet, use a
ProtectedRange
to define a cell or range of cells that cannot be edited. For an example, see
Named and protected ranges .
Configure OAuth 2.0 for authorization
Configure the OAuth consent screen and choose scopes
to define what information is displayed to users and app reviewers, and register
your app so that you can publish it later.
Sheets API scopes
To define the level of access granted to your app, you need to identify and
declare authorization scopes . An authorization scope is an OAuth 2.0 URI string
that contains the Google Workspace app name, what kind of data it accesses, and
the level of access. Scopes are your app's requests to work with Google Workspace data, including
users' Google Account data.
When your app is installed, a user is asked to validate the scopes used
by the app. Generally, you should choose the most narrowly focused scope
possible and avoid requesting scopes that your app doesn't require. Users more
readily grant access to limited, clearly described scopes.
When possible, we recommend using non-sensitive scopes as it grants per-file
access scope and narrows access to specific features needed by an app.
If your public application uses scopes that permit access to
certain user data, it must complete a verification process. If you see unverified
app on the screen when testing your application, you must submit a
verification request to remove it. Find out more about
unverified apps
and get answers to
frequently asked questions about app verification in the Help Center.
The Sheets API supports the following scopes:
Scope code
Description
Usage
https://www.googleapis.com/auth/spreadsheets
See, edit, create, and delete all your Google Sheets spreadsheets.
Sensitive
https://www.googleapis.com/auth/spreadsheets.readonly
See all your Google Sheets spreadsheets.
Sensitive
https://www.googleapis.com/auth/drive.file
See, edit, create, and delete only the specific Google Drive files you
use with this app.
Recommended Non-sensitive
https://www.googleapis.com/auth/drive
See, edit, create, and delete all of your Google Drive files.
Restricted
https://www.googleapis.com/auth/drive.readonly
See and download all your Google Drive files.
Restricted
The Usage column in the table indicates the sensitivity of each scope, according
to the following definitions:
Non-sensitive : These scopes provide the smallest scope of authorization
access and only requires basic app verification. For information on this
requirement, see Submitting your app for
verification .
Sensitive : These scopes provide access to specific Google User Data
that's authorized by the user for your app. It requires you to go through
additional app verification. For information on this requirement, see
Sensitive and Restricted Scope
Requirements .
Restricted : These scopes provide wide access to Google User Data and
require you to go through a restricted scope verification process. For
information on this requirement, see Google API Services User Data
Policy and Additional Requirements
for Specific API
Scopes .
If you store restricted scope data on servers (or transmit), then you must
go through a security assessment.
If your app requires access to any other Google APIs, you can add those scopes
as well. For more information about Google API scopes, see Using OAuth 2.0 to
Access Google APIs .
For more information about specific OAuth 2.0 scopes, see OAuth 2.0 Scopes for
Google APIs .
Related topics
Choose Google Drive API scopes
OAuth App Verification Help Center
OAuth App Verification FAQs
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
