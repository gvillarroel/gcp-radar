---
title: "Class WeeklySchedule (0.7.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.WeeklySchedule
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/alloydb/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.WeeklySchedule
  title: "Class WeeklySchedule (0.7.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class WeeklySchedule (0.7.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
0.7.0 (latest)
0.6.0
0.5.0
0.4.9
0.3.16
0.2.1
0.1.1
WeeklySchedule ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A weekly schedule starts a backup at prescribed start times within a
day, for the specified days of the week.
The weekly schedule message is flexible and can be used to create
many types of schedules. For example, to have a daily backup that
starts at 22:00, configure the start_times field to have one
element "22:00" and the days_of_week field to have all seven
days of the week.
Attributes
Name
Description
start_times
MutableSequence[google.type.timeofday_pb2.TimeOfDay]
The times during the day to start a backup.
The start times are assumed to be in UTC and to
be an exact hour (e.g., 04:00:00).
If no start times are provided, a single fixed
start time is chosen arbitrarily.
days_of_week
MutableSequence[google.type.dayofweek_pb2.DayOfWeek]
The days of the week to perform a backup.
If this field is left empty, the default of
every day of the week is used.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
