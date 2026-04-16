---
title: "Use pre-release features in Gemini Code Assist for VS Code \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/gemini-code-assist/docs/use-pre-release-features-gemini-code-assist
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/gemini-code-assist/docs/overview
source_metadata:
  url: https://developers.google.com/gemini-code-assist/docs/use-pre-release-features-gemini-code-assist
  title: "Use pre-release features in Gemini Code Assist for VS Code \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Gemini Code Assist
Guides
Use pre-release features in Gemini Code Assist for VS Code
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page explains how to use pre-release features of Gemini Code Assist for VS Code on the insiders release channel.
Pre-release builds may contain features and bug fixes still under development and could change or be removed later.
You can configure the update channel to "Insiders" in your user settings JSON to use the insiders build.
To switch back to the standard release channel, comment out or remove the "Insiders" setting from your user settings JSON.
This page describes how to use pre-release features of
Gemini Code Assist for VS Code on the insiders release channel.
Pre-release builds can include bug fixes and features still in development that
might be removed in a future release.
Before you begin
Set up the edition of Gemini Code Assist you want to use in your
IDE:
Gemini Code Assist for individuals
Gemini Code Assist Standard or Enterprise
Use the insiders build
To configure the update channel, follow these steps:
In your IDE, open the Command palette ( Cmd + Shift + P ) and then
select Open User Settings JSON .
Add the following line to your user settings JSON:
"geminicodeassist.updateChannel": "Insiders",
Save your user settings.
You are prompted to reload your window to use the latest insiders build.
Use the standard release channel
To use the standard release channel instead of the insiders build, follow these
steps:
In your IDE, open the Command palette ( Cmd + Shift + P ) and then
select Open User Settings JSON .
Comment out or remove the following line of your user settings JSON:
"geminicodeassist.updateChannel": "Insiders",
Save your user settings.
You are prompted to reload your window to use the standard release channel.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-02 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-02 UTC."],[],[]]
