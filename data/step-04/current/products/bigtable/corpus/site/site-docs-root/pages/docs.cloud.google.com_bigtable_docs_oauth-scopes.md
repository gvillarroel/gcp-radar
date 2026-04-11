---
title: "Bigtable OAuth scopes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/oauth-scopes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/oauth-scopes
  title: "Bigtable OAuth scopes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Bigtable OAuth scopes
Google Cloud products, such as Compute Engine and
Dataflow, have the ability to connect to Bigtable by
letting you specify OAuth scopes. To make this work, you need to specify
the appropriate OAuth scopes when you create resources such as
Compute Engine virtual machine instances. Be sure to
enable access to Bigtable when you create your
resource.
When you set up your resources for a Google Cloud product, choose the most
restrictive scopes that will support your application's requirements. You cannot
change the scopes after you create a resource.
Bigtable supports the following scopes:
Scope URI for gcloud
Description
https://www.googleapis.com/auth/bigtable.admin
Alias for both bigtable.admin.instance and bigtable.admin.table .
https://www.googleapis.com/auth/bigtable.admin.instance
Enables creation and management of Bigtable instances and clusters.
https://www.googleapis.com/auth/bigtable.admin.table
Enables creation and management of Bigtable tables and their column families.
https://www.googleapis.com/auth/bigtable.data
Enables read and write access to data stored in Bigtable tables.
https://www.googleapis.com/auth/bigtable.data.readonly
Enables read-only access to data stored in Bigtable tables.
https://www.googleapis.com/auth/cloud-bigtable.data
Enables read and write access to data stored in Bigtable tables.
https://www.googleapis.com/auth/cloud-bigtable.data.readonly
Enables read-only access to data stored in Bigtable tables.
https://www.googleapis.com/auth/cloud-platform
Enables full access to all Google Cloud products, including Bigtable.
https://www.googleapis.com/auth/cloud-platform.readonly
Enables read-only access to all Google Cloud products, including Bigtable.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
