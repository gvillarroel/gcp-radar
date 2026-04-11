---
title: "Quotas \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-infrastructure/docs/quotas
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-infrastructure/docs
source_metadata:
  url: https://docs.cloud.google.com/service-infrastructure/docs/quotas
  title: "Quotas \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Service Infrastructure
Resources
Send feedback
Quotas
Stay organized with collections
Save and categorize content based on your preferences.
This page contains quota and rate limit information for each version of the
following Service Infrastructure APIs:
The Service Management API
The Service Control API
The Service Networking API
The Service Consumer Management API
Note: For Service Infrastructure quota information for the Service Usage API,
see Quotas .
Service Management API Quota
This section describes the quota limits for the Service Management API.
To request a quota increase, visit the Quotas page in the Google Cloud console.
API Call Type
Limit
All
120 API calls per minute
Service Control API Quota
This section describes the quota limits for the Service Control API.
There is a limit of 6,000,000 quota units per minute per service producer project. One quota unit is consumed
for each:
Call to services.check .
Operation reported via services.report .
Call to services.allocateQuota .
Service Networking API Quota
Service Networking private connections are implemented as VPC
Network Peering connection and have the same limits. For more information, see
the Limits in the Using VPC Network
Peering documentation.
Service Consumer Management API Quota
This section describes the quota limits for the Service Consumer Management API.
Fill out the
Service Consumer Management API Quota Request
form if you need to increase any of the quotas listed in this document.
API Call Type
Limit
Read-only Calls
120 API calls per minute
Write Calls
60 API calls per minute
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
