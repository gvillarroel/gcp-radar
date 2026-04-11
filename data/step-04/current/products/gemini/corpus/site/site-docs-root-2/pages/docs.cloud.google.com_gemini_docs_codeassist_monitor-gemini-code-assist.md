---
title: "Monitor Gemini Code Assist usage \_|\_ Gemini for Google Cloud \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist
  title: "Monitor Gemini Code Assist usage \_|\_ Gemini for Google Cloud \_|\_ Google\
    \ Cloud Documentation"
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
Monitor Gemini Code Assist usage
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to monitor
Gemini Code Assist usage in your
organization.
Gemini Code Assist automatically collects and stores
metrics in
Cloud Monitoring . You can use the data visualization and
analysis tools in Cloud Monitoring to help you answer important questions,
such as how many daily active users in your organization are using
Gemini Code Assist. This dashboard is automatically available
when you enable and use the Gemini Code Assist, and includes some
of the most important metrics, giving you a quick way to view aggregated usage
data.
Limitations
Gemini Code Assist metrics data recording is limited to user
interactions with Gemini Code Assist within the IDE.
Before you begin
To get the permissions that
you need to view metric data by using the Google Cloud console,
ask your administrator to grant you the
Monitoring Viewer ( roles/monitoring.viewer )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Additionally, users must have the
Gemini Cloud Assist User
( roles/geminicloudassist.user ) role on your project to collect their usage
metrics and send the data to the dashboard.
Available metrics
The following tables list metrics available for
Gemini Code Assist.
General active user metrics
These metrics track the number of users shown a response from a
Gemini Code Assist service over different timeframes.
Metric
Name
Timeframe
code_assist/daily_active_users
Daily active users
Past 24 hours
code_assist/twenty_eight_day_active_users
Twenty-eight-day active users
Past 28 days
Chat metric
This tracks the number of Gemini Code Assist chat
responses exposed or shown to users over the given timeframe.
Metric
Name
Timeframe
chat_responses_count
Daily chat responses
Past 24 hours
Code suggestion metrics
The following are metrics related to Gemini Code Assist code
suggestions.
Code acceptances
These metrics count the number of Gemini Code Assist code
responses shown to and accepted by users over different timeframes.
Metric
Name
Timeframe
code_assist/code_suggestions_accepted_count
Daily code suggestions accepted
Past 24 hours
Lines of code accepted
These metrics count the number of lines of code sent by
Gemini Code Assist and accepted by users over different
timeframes.
Metric
Name
Timeframe
code_assist/code_lines_accepted_count
Daily lines of code accepted
Past 24 hours
View Gemini Code Assist metrics in your project
To view aggregated metrics for Gemini Code Assist, do the following:
Go to the Gemini Code Assist Overview page.
Go to Gemini Code Assist Overview
Click Metrics in the left navigation menu.
What's next
Learn more about monitoring Gemini for Google Cloud usage .
Learn how to view Gemini for Google Cloud logs .
Learn how to
monitor services and resources on Google Cloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
