---
title: "Google Calendar API overview \_|\_ Google for Developers"
url: https://developers.google.com/workspace/calendar/api/guides/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/calendar/api/guides/overview
source_metadata:
  url: https://developers.google.com/workspace/calendar/api/guides/overview
  title: "Google Calendar API overview \_|\_ Google for Developers"
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
Google Calendar API overview
Stay organized with collections
Save and categorize content based on your preferences.
The Google Calendar API is a RESTful API that can be accessed through explicit HTTP
calls or using the Google Client Libraries. The API exposes most of the features
available in the Google Calendar Web interface.
Following is a list of common terms used in the Google Calendar API:
Event
An event on a calendar containing information such as the title, start and end
times, and attendees. Events can be either single events or recurring
events . An event is
represented by an
Event resource .
Calendar
A collection of events. Each calendar has associated metadata, such as
calendar description or default calendar time zone. The metadata for a single
calendar is represented by a
Calendar resource .
Calendar List
A list of all calendars on a user's calendar list in the Calendar UI. The
metadata for a single calendar that appears on the calendar list is represented
by a
CalendarListEntry resource .
This metadata includes user-specific properties of the calendar, such
as its color or notifications for new events.
Setting
A user preference from the Calendar UI, such as the user's
time zone. A single user preference is represented by a
Setting Resource .
ACL
An access control rule granting a user (or a group of users) a specified level
of access to a calendar. A single access control rule is represented by an ACL
resource .
Related topics
To learn about developing with Google Workspace APIs, including handling
authentication and authorization, refer
to
Get started as a Google Workspace developer .
To learn how to configure and run a simple Google Calendar API app, read the
Quickstarts overview .
Want to see the Google Calendar API in action?
The Google Workspace Developers channel offers videos about tips,
tricks, and the latest features.
Subscribe now
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
