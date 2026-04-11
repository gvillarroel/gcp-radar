---
title: "Search and filter messages \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/guides/filtering
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/guides
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/guides/filtering
  title: "Search and filter messages \_|\_ Gmail \_|\_ Google for Developers"
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
Search and filter messages
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to query and find messages using the Gmail API.
You can search or filter files using the
messages.list
and threads.list
methods. These methods accept the q query parameter, which supports most of the
same advanced search syntax as
the Gmail web interface. For a list of search and filter differences
between the Gmail UI and Gmail API, see Differences from the
Gmail UI .
This advanced search syntax lets you use queries to filter messages by
properties such as the sender, date, or label. For example, the following
messages.list method query retrieves all messages sent by the user in January
2014:
GET https://www.googleapis.com/gmail/v1/users/me/messages?q=in:sent after:2014/01/01 before:2014/02/01
Caution: All dates used in the search query are interpreted as midnight on that
date in the PST timezone. To specify accurate dates for other timezones pass the
value in seconds instead:
?q=in:sent after:1388552400 before:1391230800
In addition to search queries, you can also filter messages and threads by label
with the labelIds[] parameter. This lets you search for messages and threads
with the specified system or user labels applied. For more information, see the
messages.list and threads.list methods. For more information on labels, see
Manage labels .
Differences from the Gmail UI
While the Gmail API supports most of the advanced search syntax used
in the Gmail UI, there are a few differences:
The Gmail UI performs alias expansion , which allows it to
infer an account alias from a Google Workspace account. For example,
suppose you have an account of myprimary@cymbalgroup.com and your
administrator sets up an alias for that account of
myalias@cymbalgroup.com . If myalias@cymbalgroup.com sends an email, but
you search for " from: myprimary@cymbalgroup.com " the email sent by
myalias@cymbalgroup.com appears in search results in the
Gmail UI, but not in the API response.
The Gmail UI allows users to perform thread-wide searches,
but the API doesn't.
Related topics
List Gmail messages
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
