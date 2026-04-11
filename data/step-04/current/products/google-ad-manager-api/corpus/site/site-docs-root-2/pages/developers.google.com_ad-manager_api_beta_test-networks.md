---
title: "Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/test-networks
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/getting-started
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/test-networks
  title: "Ad Manager API (Beta) \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Test networks provide a fully isolated data environment to test your code.
By default, test networks are not Ad Manager 360 networks. If you need
additional features added to your test network, contact your account
manager.
The Ad Manager API (Beta) does not support creating test networks. To create a
test network, you can use the
Ad Manager SOAP API .
You can only create one test network for your Google Account.
Test networks differ from production networks in the following ways:
Test networks are limited to 10,000 objects per entity type.
Test networks cannot serve ads.
Reports that require serving data contain zero rows.
As forecasting requires serving history, forecast results are faked.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["Test networks are isolated environments for code testing, distinct from Ad Manager 360 networks. They are created via the Ad Manager SOAP API, with a limit of one per Google Account. Key differences from production networks include a limit of 10,000 objects per entity, inability to serve ads, zero rows in reports requiring serving data, and faked forecast results due to a lack of serving history. The Ad Manager API (Beta) cannot be used to create a test network.\n"]]
