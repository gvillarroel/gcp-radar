---
title: "Apply filters to your Google Sheets data \_|\_ Google for Developers"
url: https://developers.google.com/workspace/sheets/api/guides/filters-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/sheets/api/guides/concepts
source_metadata:
  url: https://developers.google.com/workspace/sheets/api/guides/filters-overview
  title: "Apply filters to your Google Sheets data \_|\_ Google for Developers"
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
Apply filters to your Google Sheets data
Stay organized with collections
Save and categorize content based on your preferences.
This document explains the differences between a basic filter, filter view, and
a data filter in a
spreadsheet .
Filter comparison
Sheets filters all serve different purposes with the distinction
in how the data is presented. The basic filter and the filter view are features
that hide rows for users while a data filter is part of an API call that
describes the data to be selected or returned from an API request.
The following table explains the differences between the filters:
Type
Primary purpose
Who sees it?
Persists in Sheets?
Basic filter
Default filter for quick analysis. Might temporarily hide rows or sort columns.
Everyone (global)
Yes (until cleared)
Filter view
Saved reports with pre-sorted and pre-filtered views.
Only those using the view
Yes (saved as named view)
Data filter
Returns selected data through API requests
Only those making the request
No (it's part of a request)
For more information on these filters, see the following:
Basic filter
Filter views
Read, write, and search metadata
Use cases
The following are some example use cases for each filter type:
Basic filter : You want to set the main view of the sheet for everyone.
For example, reset a dashboard to show only active projects.
Filter views : You want to provide links that open a spreadsheet to
pre-filtered data sets without disrupting other users. For example, you're
building a dashboard app or you want to send a link to a client showing only
their data.
Data filter : You want your script to update a specific row, but you're
unsure if the user has inserted a new row changing the A1
notation coordinates. A
data filter finds the table regardless of the location.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
