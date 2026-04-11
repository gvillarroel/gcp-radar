---
title: "Projects \_|\_ Cloud Shell \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/shell/docs/cloud-shell-tutorials/directives-project-setup
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/shell/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/shell/docs/cloud-shell-tutorials/directives-project-setup
  title: "Projects \_|\_ Cloud Shell \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Shell
Reference
Send feedback
Projects
Stay organized with collections
Save and categorize content based on your preferences.
This page lists directives related to project setup.
Project selection
<walkthrough-project-setup></walkthrough-project-setup>
Inserts an interactive widget that helps the user to create or select a project
to use for the tutorial.
Parameters
Parameter
Type
Description
billing
Boolean
(Optional) If the value is set to true , prompt
a user to enable billing for projects where a
billing account is missing.
Project details
The following directives insert Google Cloud details related to the currently selected project.
Directive
Description
<walkthrough-project-id/>
The user's current project ID.
<walkthrough-project-name/>
The user's project name.
Enable APIs
<walkthrough-enable-apis apis=" API_LIST "></walkthrough-enable-apis>
Inserts a button that enables Google Cloud APIs for the current
project. The tutorial must be running in Google Cloud console for this to
work.
You must specify an API's service name to enable it. To explore the available
APIs, visit the API Library .
When you find an API you want, you can discover its service name by setting a
project in Cloud Shell and then running the following command:
gcloud services list --available | grep API_NAME
Parameters
Parameter
Description
apis
Comma-separated list of API service names to enable.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
