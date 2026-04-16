---
title: "Step 2: Create an API proxy \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-create-proxy
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-create-proxy
  title: "Step 2: Create an API proxy \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Step 2: Create an API proxy
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
Next, create an API proxy.
Position your cursor over the apiproxies folder in your workspace and click .
The Create API proxy wizard opens.
Click API key based authentication .
Enter the following values for the next set of prompts. Press Enter after each to confirm and proceed.
Field
Value
Description
API proxy name
helloworld
Name used to identify the API proxy.
API proxy base path
helloworld
Part of the URL used to make requests to your API. Apigee uses the URL to match and route incoming requests to the proper API proxy.
Backend target URL
https://mocktarget.apigee.net
Target URL that Apigee invokes on a request to the API proxy. The mocktarget service is hosted at Apigee and returns simple data.
The API proxy is created.
Expand the helloworld folder to view the contents of the API proxy bundle.
Default API proxy and target endpoints, and a set of policies to manage API key based authentication, are added to the API proxy configuration based on your selections using the wizard.
In the next step, you configure and deploy an environment that includes your helloworld API proxy.
1
2
(NEXT) Step 3: Configure and deploy an environment
4
5
6
7
8
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
