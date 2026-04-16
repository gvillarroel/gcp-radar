---
title: "Plan disaster recovery \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/native/docs/disaster-recovery
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/native/docs/secure-agent-interactions-mcp
source_metadata:
  url: https://docs.cloud.google.com/firestore/native/docs/disaster-recovery
  title: "Plan disaster recovery \_|\_ Firestore in Native mode \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Firestore in Native mode
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Plan disaster recovery
This page describes Firestore features that can help you create and implement
disaster recovery plans.
Disaster recovery planning for cloud infrastructure outages
To protect against potential cloud infrastructure disruptions in Google Cloud
such as a zone or region experiencing an outage, Firestore
replicates data across multiple replica databases.
The replication architecture depends on whether the database is in a regional
location or a multi-region location. Regional databases synchronously
replicate data across at least three zones. Multi-region databases
synchronously replicate data across five zones in three regions with two serving
regions and one witness region. Multi-region databases maximize the availability
and durability of databases by providing 99.999% availability. Regional
databases provide 99.99% availability.
Firestore automatically handles replication for you and doesn't require
additional configuration or provisioning. For additional information, see the
following:
For more information on the replication architecture, see
Architecting disaster recovery for cloud infrastructure outages .
Disaster recovery planning for data
To protect against data disasters like accidental deletion or modification of
data, use scheduled backups and point-in-time recovery (PITR). Depending on your
disaster recovery requirements, you might use both features together.
Scheduled backups
Backups support a maximum retention period of 14 weeks. You can schedule daily
or weekly backups. You can restore your database from a backup to a new
Firestore database in the same project. For more details,
see Back up and restore data .
Backups provide a higher retention period than PITR. Restoring a database from
a backup costs less than restoring a database from PITR data.
Point-in-time recovery (PITR)
Enable PITR to read documents from a point in time up to seven days in the past.
You can read data at a granularity level of 1 minute and surgically write
back into the your database with a
recovery time objective (maximum time for recovery) of 0. The
recovery point objective (maximum possible data loss) is 1
minute. For more details, see Point in time recovery .
If you don't need to restore an entire database, PITR reads can recover only the
data required. PITR reads also provide a lower recovery time objective and
lower recovery point objective than backups.
Data exports
For data retention needs beyond 14 weeks,
you can use PITR to create an export of your entire database and
save this data in Cloud Storage indefinitely. A PITR data export captures
data from a timestamp up to seven days in the past.
PITR data exports are useful for archiving data from your database.
When compared to backups, recovering a database from a PITR export is
generally more expensive than recovering the same data from a backup.
To start a PITR export operation, see
Export and import from PITR data .
Database clone
You can recover data by cloning your database from a point in time in the past.
If PITR is enabled, you can clone from up to seven days in the past. If PITR is
not enabled, you can clone from up to one hour in the past.
To start a clone operation, see Clone from a database .
What's next
Learn about backups
Learn about PITR exports
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
