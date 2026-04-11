---
title: "Overview \_|\_ Google Tasks \_|\_ Google for Developers"
url: https://developers.google.com/workspace/tasks/overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/tasks/auth
source_metadata:
  url: https://developers.google.com/workspace/tasks/overview
  title: "Overview \_|\_ Google Tasks \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Tasks
Guides
Send feedback
Overview
Stay organized with collections
Save and categorize content based on your preferences.
The Google Tasks API lets you search, read, and update Google Tasks content
and metadata. This document describes how to use a RESTful calling style and
client libraries for various programming languages (currently Java, Python, and
PHP) to access and edit Google Tasks data.
Sites or applications that want deeper integration with Google Tasks can
use the Google Tasks API. For example, you could use the Google Tasks API to
manage Google task lists in a mobile app, or you could integrate tasks into a
more extensive workflow app such as
Au-to-do .
Google Tasks is based on two basic concepts:
Task List
A list containing tasks. Users can have more than one task list to
manage their tasks the way they want.
Task
A single task containing information such as the title of the task,
notes, the due date, and the completed date.
Tasks API data model
A resource is an individual data entity with a unique identifier. The
Google Tasks API operates on two types of resources:
Task List Resource
Represents a task list.
Task Resource
Represents a task.
The Tasks API data model is based on groups of resources, called
collections:
Task List Collection
Each user has at least one default Task List.
Task Collection
Consists of all the Task Resources
within a specific Task List Resource .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
