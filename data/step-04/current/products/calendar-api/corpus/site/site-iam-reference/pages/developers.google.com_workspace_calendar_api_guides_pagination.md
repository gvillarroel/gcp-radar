---
title: "Page through lists of resources \_|\_ Google Calendar \_|\_ Google for Developers"
url: https://developers.google.com/workspace/calendar/api/guides/pagination
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/calendar/api/auth
source_metadata:
  url: https://developers.google.com/workspace/calendar/api/guides/pagination
  title: "Page through lists of resources \_|\_ Google Calendar \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Calendar
Guides
Send feedback
Page through lists of resources
Stay organized with collections
Save and categorize content based on your preferences.
You can control the maximum number of resources the server returns in the
response to a list request by setting the maxResults field. Furthermore,
for some collections (such as Events) there is a hard limit on the number of
retrieved entries that the server will never exceed. If the total number of
events exceeds this maximum, the server returns one page of results.
Remember that maxResults does not guarantee the number of results on one page.
Incomplete results can be detected by a non-empty nextPageToken field in
the result. In order to retrieve the next page, perform the exact same request
as previously and append a pageToken field with the value of
nextPageToken from the previous page. A new nextPageToken is provided
on the following pages until all the results are retrieved.
For example, here is a query followed by the query for retrieving the
next page of results in a paginated list:
GET /calendars/primary/events?maxResults=10&singleEvents=true
//Result contains
"nextPageToken":"CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA",
The subsequent query takes the value from nextPageToken and
submits it as the value for pageToken :
GET /calendars/primary/events?maxResults=10&singleEvents=true&pageToken=CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
