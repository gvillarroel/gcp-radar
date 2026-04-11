---
title: "Backups overview \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/cluster/backups
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/cluster/access-control
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/cluster/backups
  title: "Backups overview \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis Cluster
Guides
Send feedback
Backups overview
Stay organized with collections
Save and categorize content based on your preferences.
Backups give you the ability to restore to a point in the past and
to export and analyze data. Backups are useful for the following
scenarios:
Disaster recovery : you can use backups as part of a disaster recovery plan.
Restore data in case of a disaster into a new Memorystore for Redis Cluster or another
Redis cluster. Backup schedules give more robust protection than ad hoc exports.
Data migration : migrate data between different Memorystore for Redis Cluster clusters.
Consolidate data or move it to a different region. You can restore backups from Memorystore for Redis Cluster instances or Redis instances.
Note: Memorystore for Redis Cluster backups cannot be imported into Redis instances, because they include multiple RDB files.
Data sharing : share data between different teams or applications, enabling collaboration, offline data analytics, and data exchange.
Compliance : periodic backups of cache data can be created for compliance purposes.
Backups and backup collections
A backup is a point-in-time snapshot of your data. Backups are organized into
backup collections. A backup collection includes all backups for a particular
Memorystore for Redis Cluster instance. Deleting a Memorystore for Redis Cluster instance
does not automatically delete the corresponding backup collection.
You can set a time to live (TTL) on a backup by setting a retention period.
Once the backup exceeds it's TTL, Memorystore for Redis Cluster automatically deletes
the backup.
To recover data in a backup, you can create a new Memorystore for Redis Cluster
instance and seed the instance with data from the backup. At this time,
importing data into an existing Memorystore for Redis Cluster instance is not supported.
Automated and on-demand backups
You can initiate backups in two different ways:
Automated backups (Recommended): you can configure a backup schedule for a cluster that
initiates periodic backups.
On-demand backups : you can initiate a backup operation that begins immediately.
To learn how to set an automated backup schedule or to initiate a backup
see Manage backups .
Costs
You are charged storage costs for each backup based on the size of the backup.
There is a minimum 24-hour charge for each backup.
For more details, see Memorystore for Redis Cluster pricing .
What's next
Learn how to Manage backups .
Learn about Persistence .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
