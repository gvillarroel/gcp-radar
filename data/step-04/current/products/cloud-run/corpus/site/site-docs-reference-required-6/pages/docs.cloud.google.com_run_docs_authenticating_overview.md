---
title: "Authentication overview \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/authenticating/overview
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api
source_metadata:
  url: https://docs.cloud.google.com/run/docs/authenticating/overview
  title: "Authentication overview \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Guides
Send feedback
Authentication overview
Stay organized with collections
Save and categorize content based on your preferences.
The information provided in this section applies to Cloud Run services
and not Cloud Run jobs.
All Cloud Run services are deployed privately by default,
which means that they can't be accessed without providing authentication
credentials in the request. These services are secured by Identity and Access Management. By
default, services are only callable by Project Owners , Project Editors , and
Cloud Run Admins and Cloud Run Invokers . You can
configure Identity and Access Management, and if allowed, disable Identity and Access Management on Cloud Run services
to grant access to additional users.
Common use cases for authentication include:
Allowing public (unauthenticated) access : unauthenticated service invocations are allowed, making the service publicly accessible.
Authenticating developer access while a service is in development.
Authenticating service-to-service access while building applications
composed of multiple services.
Authenticating end-user access to a service from mobile or web clients.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
