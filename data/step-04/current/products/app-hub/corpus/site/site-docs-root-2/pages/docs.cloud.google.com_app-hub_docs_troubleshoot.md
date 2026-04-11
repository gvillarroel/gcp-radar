---
title: "Troubleshoot App Hub issues \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/troubleshoot
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/troubleshoot
  title: "Troubleshoot App Hub issues \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
App Hub
Guides
Send feedback
Troubleshoot App Hub issues
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to resolve issues with App Hub.
You can't attach a service project to a host project
This issue can occur due to the following reasons:
If the service project has existing attachments to a host project. To
resolve this issue, follow these steps:
Remove or detach
the service project from the existing host project.
Attach the service project to the new host project .
If the App Hub API is disabled on the host project. Even if the
App Hub API has been disabled, any prior service project
attachments to the host project will exist. To resolve this issue, follow
these steps:
Remove or detach
the service projects from the host project.
Enable the App Hub API
on the host project.
Disable the App Hub API
on the service projects.
Attach the service project to the host project .
If the appropriate Identity and Access Management (IAM) permissions haven't been
granted to the host and service projects. To resolve this issue,
grant the App Hub Admin role to your principal in the host and service projects .
Related information
Get support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
