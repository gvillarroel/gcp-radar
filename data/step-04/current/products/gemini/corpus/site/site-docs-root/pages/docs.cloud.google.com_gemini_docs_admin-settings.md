---
title: "Gemini for Google Cloud administrator settings \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/admin-settings
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/admin-settings
  title: "Gemini for Google Cloud administrator settings \_|\_ Google Cloud Documentation"
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
Gemini for Google Cloud administrator settings
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the Gemini for Google Cloud administrator
settings.
Overview
Administrator settings control the project-wide behavior of Gemini for
Google Cloud products. An administrator setting is defined and stored in a
container project and a binding applies the setting to a target . By binding
a single administrator setting to multiple targets, you can modify the setting
once and have it automatically applied to each target.
In the simplest setup, the container project is also the target.
In more advanced setups, you can bind the setting to one or more other
projects, and the container project does not have to be a target.
When working with administrator settings in the Google Cloud console, defining,
storing, and binding the settings is handled automatically for you.
You can bind different types of administrator settings to the same project,
but you can't bind multiple administrator settings of the same type to the
same project.
Default settings
The following lists the administration settings that apply to projects by
default:
Data sharing
for Gemini Cloud Assist is disabled
Gemini Code Assist
release channel
defaults to GA channel
Logging for Gemini Code Assist is disabled
Configure Gemini for Google Cloud administrator settings
The following documents describe how to configure available Gemini for
Google Cloud administrator settings:
Configure Gemini Cloud Assist to share prompts and responses with Google
Configure Gemini for Google Cloud logging
Configure code customization for Gemini Code Assist
Configure Gemini Code Assist release channels
What's next
Learn about
Gemini Cloud Assist pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
