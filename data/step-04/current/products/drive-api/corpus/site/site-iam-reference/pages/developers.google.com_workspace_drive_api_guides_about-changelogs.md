---
title: "Identify which change log to track \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/guides/about-changelogs
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
source_metadata:
  url: https://developers.google.com/workspace/drive/api/guides/about-changelogs
  title: "Identify which change log to track \_|\_ Google Drive \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Drive
Guides
Send feedback
Identify which change log to track
Stay organized with collections
Save and categorize content based on your preferences.
The user and shared drive change logs are defined in the Changes and revisions overview . This guide provides more information about individual change log entries and tips for when to track changes in either the user change log or the shared drive change log.
Change entry after file moves to a shared drive
After a file is moved to a shared drive, that shared drive change log continues logging changes for that file, not the user change log. You should then query the shared drive change log to detect new changes to that item.
Change entry for individual items in a shared drive
If a non-member is granted file access to individual items in a shared drive,
changes to those items are tracked in the user change log, not the shared drive change log. This behavior is the same as non-shared drive items that are shared directly with users.
Change entry for lost access permission
If a user loses access permission to a file, the change log entry will say deleted .
However, the file is still available to other users who still have permission to access the file. If the item is deleted for all users, it will get marked deleted in all user change logs.
When a file moves between user corpora it may also appear deleted even though the user still retains access to the file. If you query change logs for multiple corpora, use the includeCorpusRemovals parameter in Changes.list to disambiguate corpus moves from loss of access.
For definitions of different corpora, see Files and folders overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
