---
title: "Synchronize clients with Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/guides/sync
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/guides
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/guides/sync
  title: "Synchronize clients with Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Guides
Send feedback
Synchronize clients with Gmail
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to synchronize clients using the Gmail API.
Keeping your client synchronized with Gmail is important for most
app scenarios. There are two synchronization methods: full
synchronization and partial synchronization . Full
synchronization is required the first time your client connects to
Gmail and in some other rare scenarios. If your client has
recently synchronized, partial synchronization is a lighter-weight alternative
to a full sync. You can also use push
notifications to trigger partial
synchronization in real-time and only when necessary, thereby avoiding needless
polling.
Full synchronization
The first time your app connects to Gmail, or if partial
synchronization isn't available, you must perform a full synchronization. In a
full sync operation, your app should retrieve and store as many of the most
recent messages or threads as are necessary for your purpose. For example, if
your app displays a list of recent messages, you may want to retrieve and cache
enough messages to allow for a responsive interface if the user scrolls beyond
the first several messages displayed.
Follow these steps to perform a full sync:
Call the messages.list
method to retrieve the first page of message IDs.
Create a batch request of
messages.get
method requests for each of the messages returned by the list request.
If your app displays message contents, you should set the
Format to format=FULL
or format=RAW the first time your app retrieves a message and cache the
results to avoid additional retrieval operations. If you're retrieving a
previously cached message, you should use format=MINIMAL to reduce the
size of the response as only the labelIds may change.
Merge the updates into your cached results. Your app should store the
historyId
of the most recent message (the first message in the list response) for
future partial synchronizations.
Note: You can also perform a full synchronization using the equivalent
threads methods. This
might be advantageous if your app primarily works with threads or only requires
message metadata.
Partial synchronization
If your app has synchronized recently, you can perform a partial sync using the
history.list
method to return all history records newer than the startHistoryId query
parameter you must specify in your request.
The startHistoryId query parameter must be set to the historyId of a recent
message. To retrieve the historyId of a recent message, use the
messages.get or
messages.list
methods. You can also set the value during a full or partial sync for future
use.
The returned
History
object includes message IDs and the type of change for each message, such as
message added or labels modified, since the time of the provided
startHistoryId .
Limitations
History records are typically available for at least one week and often longer.
However, the time period for which records are available may be significantly
less and records may sometimes be unavailable in rare cases.
If the startHistoryId supplied by your client is outside the available range
of history records, the Gmail API returns an HTTP 404 error response.
In this case, your client must perform a full sync .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
