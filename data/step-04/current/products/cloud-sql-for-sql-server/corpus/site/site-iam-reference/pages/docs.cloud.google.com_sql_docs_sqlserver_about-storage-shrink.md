---
title: "About storage shrink \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/about-storage-shrink
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver/roles-and-permissions
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/about-storage-shrink
  title: "About storage shrink \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
SQL Server
Guides
Send feedback
About storage shrink
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
If the storage capacity of a
Cloud SQL instance is larger than your application needs, then you can manually
reduce, or shrink, your storage capacity to a smaller size.
Storage shrink operations are supported on primary instances only and
available in all Cloud SQL editions.
Requirements for storage capacity
The target storage size must be larger than the minimum allowed storage capacity
that is determined to be safe for the instance.
For consistent performance, we recommend reserving a buffer of storage capacity
for certain operations like re-indexing. We recommend reserving roughly 100 GB
or 20% or more of current usage, whichever is larger.
For more information, see Shared responsibility .
Performance
Storage shrink operations might impact instance performance. Cloud SQL uses
Compute Engine virtual machines (VMs) with persistent storage disks.
The storage provided by Hyperdisk Balanced
scales linearly and offers predictable performance.
For more information, see Quotas and fixed limits .
Downtime
Storage shrink operations require instance downtime; instances restart when
the operation is complete.
Depending on underlying disk size, storage shrink operations might accrue
considerable downtime. If your instance requires limited downtime, rather than
using storage shrink capabilities, we recommend migrating your data to a new,
smaller instance using Database Migration Service .
Operations
All other operations are unavailable until the storage shrink operation completes.
We recommend that you wait until other operations are finished before running a
storage shrink operation. This includes operations such as backing up or importing
data.
Storage shrink operations are not supported on shared-core instances. However,
you can change your application setup to a non-shared core instance and then
perform a storage shrink operation.
Limitations
The following feature limitations apply:
Storage shrink operations can't be applied to replicas or cascading replicas.
Not supported with Terraform.
What's next
Use storage shrink
Cloud SQL storage options
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
