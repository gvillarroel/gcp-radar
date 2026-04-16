---
title: "Auto-register Apigee proxies \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies
  title: "Auto-register Apigee proxies \_|\_ Google Cloud Documentation"
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
Auto-register Apigee proxies
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
This quickstart shows you how to register Apigee proxies in API hub.
Before you begin
You must have completed the API hub provisioning steps. See Provision API hub .
Auto-register Apigee proxies
In the Google Cloud console, go to the API hub page.
Go to API hub
Click Settings > Project associations .
Click Attach runtime project . This displays the Select a resource pane.
Click the required project. If there aren't any errors, the project gets
attached to API hub, and will be listed in the Project associations page.
However, the actual process of registering the proxies will start after
the next run of the scheduler which runs once every six hours.
Note: For a project to be attached as a runtime project, the
project shouldn't have API hub installed in it, and the project shouldn't be
a part of other runtime projects for another host project.
Next
Settings overview
Manage API resources
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
