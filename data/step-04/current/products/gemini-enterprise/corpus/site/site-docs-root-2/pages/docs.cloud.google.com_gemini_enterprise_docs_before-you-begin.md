---
title: "Before you begin \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin
  title: "Before you begin \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Send feedback
Before you begin
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the basic start-up tasks that you must complete before
using Gemini Enterprise.
Create a project
To create a Google Cloud project for your Gemini Enterprise apps and
data stores, follow these steps:
In the Google Cloud console, on the project selector
page , select or create a Google Cloud project .
Check whether billing is enabled on your Google Cloud
project .
If you plan to use the API, install and
initialize the Google Cloud CLI.
Access control
You can configure access control for Gemini Enterprise at the project
level. To grant access to Gemini Enterprise using the console, grant the
Discovery Engine Admin role to a principal for the project that contains the
Gemini Enterprise engine.
To grant access to Gemini Enterprise, follow the instructions at Grant a
single role in the IAM documentation using
the following guidance:
Select the project that contains the Gemini Enterprise engine.
When selecting a role, enter Discovery Engine in the filter, and then click
Discovery Engine Admin .
If you are an owner of the project, you automatically have the Discovery Engine
Admin role for that project.
To grant access to Gemini Enterprise for other users, groups, and service
accounts, see Access control with IAM .
If you are using the API, see
Set up authentication on Google Cloud
for authentication and access control.
What's next
Authenticate to Gemini Enterprise
Access control with IAM
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
