---
title: "Before you begin \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin
  title: "Before you begin \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Send feedback
Before you begin
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the basic start-up tasks that you must complete before
using Vertex AI Search.
Create a project
To create a Google Cloud project for your Vertex AI Search apps and
data stores, follow these steps:
In the Google Cloud console, on the project selector
page , select or create a Google Cloud project .
Make sure that billing is enabled for your Google Cloud project. Learn how
to check if billing is enabled on a
project .
If you plan to use the API, install and
initialize the Google Cloud CLI.
Turn on Vertex AI Search
To use Vertex AI Search, you must activate the Vertex AI Search
service.
To turn on Vertex AI Search, follow these steps:
In the Google Cloud console, go to the AI Applications page.
AI Applications
Optional: Click Allow Google to selectively sample model input and
responses .
Optional: Review the terms for data use .
Click Continue and activate the API .
Access control in Vertex AI Search
You can configure access control for Vertex AI Search at the project
level. To grant access to Vertex AI Search using the console, grant the
Discovery Engine Admin role to a principal for the project that contains the
Vertex AI Search engine.
To grant access to Vertex AI Search, follow the instructions at Grant a
single role in
the IAM documentation using the following guidance:
Select the project that contains the Vertex AI Search engine.
When selecting a role, enter Discovery Engine in the filter, and then
click Discovery Engine Admin .
If you are an owner of the project, you automatically have the Discovery Engine
Admin role for that project.
To grant access to Vertex AI Search for other users, groups, and service
accounts, see Access control with IAM .
If you are using the API, see
Set up authentication on Google Cloud
for authentication and access control.
What's next
Authenticate to Vertex AI Search
Access control with IAM
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
