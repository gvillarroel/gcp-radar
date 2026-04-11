---
title: "Use pre-release features in Gemini Code Assist for VS Code \_|\_ Gemini for\
  \ Google Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/codeassist/overview
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist
  title: "Use pre-release features in Gemini Code Assist for VS Code \_|\_ Gemini\
    \ for Google Cloud \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
Guides
Send feedback
Use pre-release features in Gemini Code Assist for VS Code
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use pre-release features of
Gemini Code Assist for VS Code on the insiders release channel.
Pre-release builds can include bug fixes and features still in development that
might be removed in a future release.
Before you begin
Set up Gemini Code Assist .
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
