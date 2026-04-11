---
title: "Debug your Community Connector \_|\_ Community Connectors \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/looker-studio/connector/debug
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector/advanced-services
source_metadata:
  url: https://developers.google.com/looker-studio/connector/debug
  title: "Debug your Community Connector \_|\_ Community Connectors \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Debug your Community Connector
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Community Connectors can be debugged by enabling extended error messages or logging execution data.
isAdminUser() function controls debug message visibility, returning true for users who should see them and false otherwise.
Leverage Apps Script's logging mechanisms, such as the built-in Logger, Stackdriver, or even a Google Sheet, to proactively identify and resolve bugs while protecting user data privacy.
Designing isAdminUser() to always return true for developers and using getEffectiveUser() with a safelist can aid in debugging and reproducing user errors.
You can debug your Community Connector in two ways:
Enabling extended error messages
Logging relevant execution data
This guide outlines how to make effective use of these capabilities.
Enabling/disabling debug features
isAdminUser() should return true if the current user should see debug
messages and stack traces. If isAdminUser() returns false, or is not defined,
and an error occurs, the user will see a generic error message.
Note: Use newUserError() if users should see the error message regardless of
the isAdminUser() response.
Debugging Tips
Design isAdminUser() so it always returns true for developers.
Use getEffectiveUser() in combination with an email safelist of trusted
users to easily add or remove users that should see the full error details.
This can be especially useful if a user runs into an error that you have
trouble reproducing.
Make liberal use of newDebugError() for invariants that should hold
true. This can help with narrowing down problems in the future.
Apps Script logging
Apps Script provides different mechanisms for logging including the built-in
Apps Script Logger , Stackdriver Logging , and Stackdriver Error Reporting .
You can also try logging to a Google Sheet . Proactive logging can help to
quickly narrow in on the cause of bugs, though care should be taken to not log
sensitive user data.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
