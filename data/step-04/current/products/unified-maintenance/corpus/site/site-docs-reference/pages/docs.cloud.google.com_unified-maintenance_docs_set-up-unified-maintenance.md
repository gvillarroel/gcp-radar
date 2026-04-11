---
title: "Set up Unified Maintenance \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api
source_metadata:
  url: https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance
  title: "Set up Unified Maintenance \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Unified Maintenance
Guides
Send feedback
Set up Unified Maintenance
Stay organized with collections
Save and categorize content based on your preferences.
This document provides instructions on how to set up and use Unified Maintenance.
It explains how to enable the Unified Maintenance API, query it directly,
and how to manage maintenance event logs that are automatically sent to
Cloud Logging.
Enable the Unified Maintenance API
To query the Unified Maintenance API directly, you need to enable the API. When you
enable the API, you can view your Unified Maintenance events
in the Unified Maintenance section of Hub.
Note: Unified Maintenance doesn't display historical events scheduled prior to
enabling the API.
Receive maintenance activity logs in Cloud Logging
The Unified Maintenance service sends maintenance logs automatically (independent of whether the Unified Maintenance API is enabled or not). If you have been granted one of the basic roles (Viewer, Editor, or Owner) in Cloud Logging for your project, you have the necessary permissions to access Unified Maintenance logs.
To learn more about the required permissions, see Access control with IAM .
You cannot deactivate Unified Maintenance, but you can opt out of storing logs.
To opt out, see Turn off maintenance logs .
To monitor the resource usage of Unified Maintenance logs in your projects, you can
create a metric-threshold alerting policy. For more information, see Create metric-threshold alerting policies in the Google Cloud Observability documentation.
What's next
View maintenance activities
Log schema overview
Configure alerts and notifications
Implement common alert policies
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
