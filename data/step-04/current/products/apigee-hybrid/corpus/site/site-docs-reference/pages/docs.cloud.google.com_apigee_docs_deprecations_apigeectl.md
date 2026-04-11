---
title: "apigeectl deprecation \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/deprecations/apigeectl
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/hybrid/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/deprecations/apigeectl
  title: "apigeectl deprecation \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Send feedback
apigeectl deprecation
Stay organized with collections
Save and categorize content based on your preferences.
The command line tool used for installation and management of containerized Apigee runtime services,
apigeectl , is deprecated as of April 17, 2024:
apigeectl is not supported for use with Apigee hybrid v1.12.
Support for apigeectl in Apigee hybrid v1.10 and v1.11
will end in April of 2025.
To prepare for the deprecation of apigeectl for all Apigee hybrid versions, take steps
to migrate to Helm at your earliest convenience.
Helm provides native Kubernetes integration, a robust ecosystem of supporting tools, and additional
benefits .
Helm support was added in Apigee hybrid v1.11.
Migration to Helm does not require down time. To complete the migration:
Upgrade to Apigee hybrid v1.11, if you have not already done so.
Use the migration tool to migrate Apigee hybrid to Helm from apigeectl .
Shutdown schedule
The following table lists the shutdown schedule for apigeectl :
Date
Event
April 17, 2024
apigeectl command line interface deprecated for Apigee hybrid v1.12.
April 17, 2024
Support for apigeectl in Apigee hybrid in v1.10 and v1.11 extended for one year.
April 17, 2025
Support for apigeectl shut down for all Apigee hybrid versions.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
