---
title: "Customer-managed encryption keys \_|\_ Storage Transfer Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/cmek
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/cmek
  title: "Customer-managed encryption keys \_|\_ Storage Transfer Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Send feedback
Customer-managed encryption keys
Stay organized with collections
Save and categorize content based on your preferences.
If you're using Secret Manager to store and pass your Amazon S3 or
Microsoft Azure credentials, you can additionally use a
customer-managed encryption key (CMEK) to encrypt those credentials at
rest.
See Enable Customer-Managed Encryption Keys for Secret Manager
for instructions.
Enforce CMEK with organization policy
To enforce the use of CMEK through an organizational policy ,
add Storage Transfer Service and Secret Manager to the
constraints/gcp.restrictNonCmekServices deny list. Specifically, add:
secretmanager.googleapis.com
storagetransfer.googleapis.com
See Creating and managing organization policies for
instructions.
Storage Transfer Service checks for and enforces this restriction at job creation and
update. Existing transfer jobs are not affected.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
