---
title: "Delete data from a file share \_|\_ Filestore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/delete-data
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/delete-data
  title: "Delete data from a file share \_|\_ Filestore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Guides
Send feedback
Delete data from a file share
Stay organized with collections
Save and categorize content based on your preferences.
After you mount a Filestore file share on a client VM, you can interact
with it like any other local file system, using standard file system commands.
When you delete files or directories from a Filestore file share, the
operation completes immediately, but space reclamation happens in the background
and takes some time, especially when you delete large amounts of data.
Before you add new data, make sure enough disk space is reclaimed. Monitor the
Free raw capacity percent and Free disk space percent metrics for your
instance:
Go to the Filestore instances page:
Go to the
Filestore instances page
Click the instance ID to open the instance details page.
Go to the Observability tab and explore metrics.
Alternatively, use the metrics explorer to view metrics and create dashboards. For
more information, see Monitoring instances and
quota .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
