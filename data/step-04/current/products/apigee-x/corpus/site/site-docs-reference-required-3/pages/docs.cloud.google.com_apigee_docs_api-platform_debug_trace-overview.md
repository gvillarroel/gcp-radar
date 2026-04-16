---
title: "Debug overview \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/debug/trace-overview
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/debug/trace-overview
  title: "Debug overview \_|\_ Apigee \_|\_ Google Cloud Documentation"
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
Debug overview
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
Note: For Apigee hybrid v1.13.1, the new data pipeline is supported for newly created Apigee
hybrid organizations with data residency enabled.
See Configure hybrid to use the new data pipeline .
For Hybrid 1.14 or later, the new data pipeline is the default for all Hybrid organizations regardless of whether or not data residency is enabled.
Debug is a tool for troubleshooting and monitoring API proxies running on Apigee. The Debug tool
lets you probe the details of each step
through an API proxy flow.
Apigee lets you collect debug data, which shows the entire request/response flow of your
API proxies. This includes all request/response parameters along with transformations applied to
them at policy execution time. This is important for debugging and troubleshooting during API proxy development and deployment.
In previous versions of Apigee, the Debug tool was referred to as the
Trace tool.
Terminology: The terms debug data and debug
session data are used interchangeably.
Debug data collection and transmission
Apigee gateway nodes collect debug session data and cache it internally,
before transmitting that data to the control plane in the Cloud. From there it
is shared to the debug session UI, for operators to analyze.
If you use Debug masking ,
Apigee performs the masking in the gateway nodes, before transmitting the debug data to the
control plane.
Using Debug
Create and manage debug sessions using the Debug tool using the UI or API, as described in
Using Debug .
Alternatively, you can download debug sessions and view and analyze them offline, as described in
Using Offline Debug .
Apigee Support use of Debug
Only customers can trigger a debug session, but Apigee Support can access non-deleted past debug sessions
during the course of a support case to help troubleshoot proxy-specific issues.
Note the following:
Apigee Support has read-only permission to Debug data.
Apigee Support may request that you run a debug to capture information about an
issue, and that you provide the debug session ID or a link to the debug session so
that Support may review the captured debug. Since saved debug sessions are valid for
only 24 hours, we recommend that you download the debug session and attach it to the
case opened with Support to enable offline viewing.
For Apigee hybrid users
Note: For Apigee hybrid v1.13.1 and later, the Debug tool is supported for newly created Apigee
hybrid organizations with data residency enabled.
See Analytics and debug data collection with data residency .
If you are using Apigee hybrid, review the following sections.
Debug architecture
The following illustrates the process of creating a new debug session:
Note: Because of the asynchronous nature of multiple pollings, debug data is not available in
real time; instead, there is a slight delay.
Debug data is persisted in the management plane for up to 24 hours.
Apigee hybrid requirements
This section lists important information for Apigee hybrid users.
Support for data residency
If you have a newly created Apigee hybrid v1.13.1 org with data residency enabled , follow the steps in
Using data residency with Apigee hybrid .
Clocks on all Synchronizer nodes should be in sync and in UTC.
Older versions of Apigee hybrid do not support data residency.
Other requirements
You must have the apigee-udca service account configured. See
Specify configuration overrides .
Clocks on all Synchronizer nodes should be in sync and in UTC.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
