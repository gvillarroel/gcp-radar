---
title: "Package google.chat.logging.v1 \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.logging.v1
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.logging.v1
  title: "Package google.chat.logging.v1 \_|\_ Google Chat \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Reference
Send feedback
Package google.chat.logging.v1
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
ChatAppLogEntry provides a JSON payload containing error messages for Chat apps.
If enabled, these error messages are sent to Google Cloud Logging for analysis and debugging.
The payload includes information about the deployment, error code and message, and the specific function where the error occurred.
Index
ChatAppLogEntry (message)
ChatAppLogEntry
JSON payload of error messages. If the Cloud Logging API is enabled, these error messages are logged to Google Cloud Logging .
Fields
deployment
string
The deployment that caused the error. For Chat apps built in Apps Script, this is the deployment ID defined by Apps Script.
error
Status
The error code and message.
deployment_function
string
The unencrypted callback_method name that was running when the error was encountered.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-02-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-02-27 UTC."],[],["The `ChatAppLogEntry` message logs error details to Google Cloud Logging when enabled. It captures the `deployment` (e.g., deployment ID for Apps Script), the associated `error` (code and message), and the `deployment_function` (callback method name) where the error occurred. This structure allows for detailed tracking and analysis of errors within a Chat app.\n"]]
