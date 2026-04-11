---
title: "About backups \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/backups
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey/access-control
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/backups
  title: "About backups \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Valkey
Guides
Send feedback
About backups
Stay organized with collections
Save and categorize content based on your preferences.
Backups let you restore your Memorystore for Valkey instances to a specific
point in time. In addition, you can use backups to export and analyze data.
Backups are useful for the following scenarios:
Disaster recovery : use backups as part of a disaster recovery plan. If a
disaster occurs, then you can restore your data to a new Memorystore for Valkey
instance.
Data migration : migrate data between different Memorystore for Valkey
instances. You can consolidate data or move it to a different region. You can
also restore backups from Memorystore for Valkey instances.
Data sharing : share data between different teams or applications, enabling collaboration, offline data analytics, and data exchange.
Compliance : create periodic backups of cache data for compliance purposes.
Backups and backup collections
A backup is a point-in-time snapshot of your data. Backups are organized into
backup collections. A backup collection includes all backups for a Memorystore for Valkey instance. If you delete an instance, then Memorystore for Valkey doesn't delete the corresponding backup collection automatically.
You can set a time to live (TTL) for a backup by setting a retention period.
After the backup exceeds its TTL, Memorystore for Valkey deletes the backup
automatically.
To recover data in a backup, you can create an instance and seed the instance with data from the backup. However, you
can't import data into an existing instance.
Automated and on-demand backups
You can create backups in the following ways:
Automated backups (Recommended): configure a backup schedule for an
instance. As a result, Memorystore for Valkey initiates periodic backups
for the instance.
On-demand backups : initiate a backup operation that begins immediately.
For more information about setting an automated backup schedule or initiating a
backup, see Manage backups .
Costs
Based on the size of a backup and the region where the backup is located, you're
charged storage costs for the backup. For each backup, there's a minimum 24-hour
charge. For more information, see Memorystore for Valkey pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
