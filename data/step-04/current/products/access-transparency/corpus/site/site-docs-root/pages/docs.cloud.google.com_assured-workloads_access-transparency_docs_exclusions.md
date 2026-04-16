---
title: "Access Transparency exclusions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/exclusions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/exclusions
  title: "Access Transparency exclusions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud provider access management
Access Transparency
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Access Transparency exclusions
Access Transparency logs are generated when Google personnel access content that you've
uploaded into an Access Transparency
supported service ,
except in the following scenarios:
Google is legally prohibited from notifying you of the access.
For details, refer to Google Cloud's
Transparency Report .
You've granted the Google personnel access to your content by using your
Identity and Access Management (IAM) policy; their activities are recorded in
Cloud Audit Logs (when enabled), not Access Transparency logs.
The access doesn't target Customer Data ; for example,
Google personnel querying for the average size of records in a database that
contains content from multiple Google Cloud customers.
The content in question is a public resource identifier or a
resource name . For example:
Google Cloud project IDs
Cloud Storage bucket names
Compute Engine VM names
Google Kubernetes Engine cluster names
BigQuery resource names (including datasets, tables, and
reservations)
The access originates from Google's standard automated systems and code.
These system accesses are validated by code authorization, which verifies
that the job originates from code that was checked into production and
subject to a multi-party security and privacy review, including a verified
source code owner.
What's next
Learn about the services that Access Transparency supports .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
