---
title: "Enum DataExecutionState \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-execution-state
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-execution-state
  title: "Enum DataExecutionState \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Enum DataExecutionState
Stay organized with collections
Save and categorize content based on your preferences.
DataExecutionState
An enumeration of data execution states.
To call an enum, you call its parent class, name, and property. For example,
SpreadsheetApp.DataExecutionState.RUNNING .
Properties
Property Type Description
DATA_EXECUTION_STATE_UNSUPPORTED Enum A data execution state is not supported in Apps Script.
RUNNING Enum The data execution has started and is running.
SUCCESS Enum The data execution is completed and successful.
ERROR Enum The data execution is completed and has errors.
NOT_STARTED Enum The data execution has not started.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["The `DataExecutionState` enumeration defines five states for data execution: `DATA_EXECUTION_STATE_UNSUPPORTED` (not supported), `RUNNING` (in progress), `SUCCESS` (completed successfully), `ERROR` (completed with errors), and `NOT_STARTED` (hasn't begun). These states indicate the current status of a data execution process. The enum properties can be accessed by calling the parent class, name and property like `SpreadsheetApp.DataExecutionState.RUNNING`.\n"]]
