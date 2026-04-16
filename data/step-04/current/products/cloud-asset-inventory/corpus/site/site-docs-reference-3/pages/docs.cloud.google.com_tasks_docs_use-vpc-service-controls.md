---
title: "Set up a service perimeter using VPC Service Controls \_|\_ Cloud Tasks \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tasks/docs/use-vpc-service-controls
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/tasks/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/tasks/docs/use-vpc-service-controls
  title: "Set up a service perimeter using VPC Service Controls \_|\_ Cloud Tasks\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Tasks
Guides
Send feedback
Set up a service perimeter using VPC Service Controls
Stay organized with collections
Save and categorize content based on your preferences.
VPC Service Controls is a Google Cloud feature that lets you set up a
service perimeter and create a data transfer boundary. You can use
VPC Service Controls with Cloud Tasks to help protect your
services.
Supported targets
Once you set up a service perimeter, HTTP requests from a
Cloud Tasks execution are allowed for:
Authenticated requests to VPC Service Controls-compliant
Cloud Run functions targets at functions.net endpoints
Authenticated requests to VPC Service Controls-compliant
Cloud Run targets at run.app endpoints
Examples of unsupported targets
Once you set up a service perimeter, non-compliant HTTP requests from a
Cloud Tasks execution are blocked and fail with a
TARGET_TYPE_NOT_PERMITTED_FOR_VPC error code. For example, requests to all of
the following are blocked:
Non-VPC Service Controls-compliant Cloud Run functions
targets at functions.net endpoints
Non-VPC Service Controls-compliant Cloud Run targets at
run.app endpoints
Cloud Run functions targets at non- functions.net endpoints
Cloud Run targets at non- run.app endpoints
Non-Cloud Run functions endpoints
Non-Cloud Run endpoints
What's next
To set up a service perimeter, see
Create a service perimeter .
To adjust the ingress settings of your Cloud Run function, see
Configuring network settings .
To adjust the ingress settings of your Cloud Run service, see
Restricting ingress for Cloud Run .
To learn more about VPC Service Controls, see the
overview and
supported products and limitations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
